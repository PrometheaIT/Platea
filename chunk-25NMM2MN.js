import {
  BaseService
} from "./chunk-QSRXFII6.js";
import {
  BehaviorSubject,
  Injectable,
  filter,
  map,
  setClassMetadata,
  take,
  ɵɵdefineInjectable
} from "./chunk-T3MDKIO5.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-TWWAJFRB.js";

// src/app/services/Prenotazioni/reservation.service.ts
var ReservationService = class _ReservationService extends BaseService {
  // ✅ Mantieni solo restaurantReservationsSubject per logica specifica
  restaurantReservationsSubject = new BehaviorSubject([]);
  restaurantReservations$ = this.restaurantReservationsSubject.asObservable();
  refreshTriggerSubject = new BehaviorSubject(void 0);
  refreshTrigger$ = this.refreshTriggerSubject.asObservable();
  constructor() {
    super();
    this.authService.currentUser$.pipe(filter((u) => !!u), take(1)).subscribe(() => {
      this.loadCustomerReservations();
    });
    this.loadRestaurantReservations();
  }
  // ✅ Implementa il metodo astratto richiesto da BaseService
  getTableName() {
    return "reservations";
  }
  // === METODI PER CLIENTI ===
  // Carica prenotazioni per l'utente cliente corrente
  loadCustomerReservations() {
    return __async(this, null, function* () {
      try {
        const user = this.authService.currentUserValue;
        if (!user) {
          console.log("No user found for customer reservations");
          this.dataSubject.next([]);
          return;
        }
        yield this.loadData({ customer_id: user.id });
        console.log("Customer reservations loaded via BaseService");
      } catch (error) {
        console.error("Error in loadCustomerReservations:", error);
        this.handleError("loadCustomerReservations", error);
      }
    });
  }
  // === METODI PER RISTORANTE (STAFF/OWNER) ===
  // Carica TUTTE le prenotazioni del ristorante
  loadRestaurantReservations() {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.log("No restaurant ID available for staff");
          this.restaurantReservationsSubject.next([]);
          this.loadingSubject.next(false);
          return;
        }
        console.log("\u{1F50D} Querying reservations for restaurant:", restaurantId);
        const { data: reservations, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select(`
        *,
        users:users!customer_id (
          first_name,
          last_name,
          email,
          phone
        ),
        tables:tables!table_id (
          table_name,
          table_number,
          capacity
        )
      `).eq("restaurant_id", restaurantId).order("reservation_date", { ascending: true }).order("reservation_time", { ascending: true });
        if (error) {
          throw error;
        }
        console.log("\u2705 Restaurant reservations loaded:", reservations?.length);
        console.log("\u{1F4E7} Sample reservation:", reservations?.[0]);
        this.restaurantReservationsSubject.next(reservations || []);
      } catch (error) {
        console.error("Error loading restaurant reservations:", error);
        this.handleError("loadRestaurantReservations", error);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  // Crea una nuova prenotazione come cliente
  createCustomerReservation(reservationData) {
    return __async(this, null, function* () {
      try {
        const user = this.authService.currentUserValue;
        if (!user) {
          throw new Error("User not authenticated");
        }
        const reservationToCreate = {
          restaurant_id: reservationData.restaurant_id,
          customer_id: user.id,
          // Prende l'ID dall'utente loggato
          table_id: reservationData.table_id,
          reservation_date: reservationData.reservation_date,
          reservation_time: reservationData.reservation_time,
          party_size: reservationData.party_size,
          special_requests: reservationData.special_requests,
          status: "pending"
        };
        const result = yield this.create(reservationToCreate);
        if (result) {
          yield this.loadCustomerReservations();
          yield this.loadRestaurantReservations();
        }
        return result;
      } catch (error) {
        console.error("\u274C Error creating customer reservation:", error);
        this.handleError("createCustomerReservation", error);
        return null;
      }
    });
  }
  // Crea una prenotazione come ristorante
  createRestaurantReservation(data) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          throw new Error("Nessun ristorante selezionato");
        }
        const reservationData = __spreadProps(__spreadValues({}, data), {
          restaurant_id: restaurantId,
          customer_id: data.customer_id || null,
          table_id: data.table_id || null,
          menu_id: data.menu_id || null,
          // <-- Assicurati che sia incluso
          status: data.status || "confirmed",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        console.log("\u{1F4E4} Creazione prenotazione con menu_id:", reservationData.menu_id);
        const { data: result, error } = yield this.supabaseService.getSupabaseClient().from("reservations").insert(reservationData).select(`
        *,
        tables (
          table_name,
          table_number,
          capacity
        ),
        menus (
          id,
          name,
          is_default,
          is_active
        )
      `).single();
        if (error)
          throw error;
        yield this.loadRestaurantReservations();
        return result;
      } catch (error) {
        console.error("Error creating restaurant reservation:", error);
        return null;
      }
    });
  }
  // === METODI GESTIONE PRENOTAZIONI ===
  updateReservation(reservationId, updates) {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F527} Aggiornamento prenotazione:", {
          reservationId,
          updates
        });
        const validUpdates = {};
        const validFields = [
          "customer_name",
          "customer_surname",
          "customer_phone",
          "customer_email",
          "reservation_date",
          "reservation_time",
          "party_size",
          "special_requests",
          "table_id",
          "status",
          "menu_id",
          "updated_at"
        ];
        Object.keys(updates).forEach((key) => {
          if (validFields.includes(key) && updates[key] !== void 0) {
            const value = updates[key];
            if (key === "menu_id") {
              if (value === "null" || value === "") {
                validUpdates[key] = null;
              } else {
                validUpdates[key] = value;
              }
            } else {
              validUpdates[key] = value;
            }
          }
        });
        validUpdates.updated_at = (/* @__PURE__ */ new Date()).toISOString();
        console.log("\u{1F4E4} Dati validi per l'aggiornamento:", validUpdates);
        const { error } = yield this.supabaseService.getSupabaseClient().from("reservations").update(validUpdates).eq("id", reservationId);
        if (error) {
          console.error("\u274C Errore Supabase:", error);
          console.error("\u274C Dettagli:", error.details);
          console.error("\u274C Hint:", error.hint);
          console.error("\u274C Messaggio:", error.message);
          throw error;
        }
        console.log("\u2705 Prenotazione aggiornata con successo");
        return true;
      } catch (error) {
        console.error("\u274C Errore aggiornamento prenotazione:", error);
        return false;
      }
    });
  }
  updateReservationStatus(reservationId, status) {
    return __async(this, null, function* () {
      return yield this.updateReservation(reservationId, { status });
    });
  }
  assignTableToReservation(reservationId, tableId) {
    return __async(this, null, function* () {
      const result = yield this.update(reservationId, { table_id: tableId });
      if (result) {
        yield this.loadRestaurantReservations();
        this.triggerRefresh();
      }
      return result;
    });
  }
  removeTableFromReservation(reservationId) {
    return __async(this, null, function* () {
      const result = yield this.update(reservationId, { table_id: null });
      if (result) {
        yield this.loadRestaurantReservations();
        this.triggerRefresh();
      }
      return result;
    });
  }
  deleteReservation(reservationId) {
    return __async(this, null, function* () {
      const result = yield __superGet(_ReservationService.prototype, this, "delete").call(this, reservationId);
      if (result) {
        yield this.loadRestaurantReservations();
        this.triggerRefresh();
      }
      return result;
    });
  }
  triggerRefresh() {
    this.refreshTriggerSubject.next(void 0);
  }
  // === METODI DI UTILITY ===
  getFutureReservations(reservations) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return reservations.filter((reservation) => reservation.reservation_date >= today && ["pending", "confirmed"].includes(reservation.status));
  }
  getReservationsByDate(reservations, date) {
    return reservations.filter((reservation) => reservation.reservation_date === date);
  }
  getActiveReservations(reservations) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return reservations.filter((reservation) => reservation.reservation_date === today && ["pending", "confirmed"].includes(reservation.status));
  }
  getCustomerName(reservation) {
    if (reservation.users) {
      return `${reservation.users.first_name || ""} ${reservation.users.last_name || ""}`.trim();
    }
    if (reservation.customer_name) {
      return reservation.customer_name;
    }
    return "Cliente";
  }
  getCustomerContact(reservation) {
    if (reservation.users) {
      return reservation.users.phone || reservation.users.email || "";
    }
    return reservation.customer_phone || reservation.customer_email || "";
  }
  getTableInfo(reservation) {
    if (reservation.tables) {
      return `${reservation.tables.table_name} (${reservation.tables.table_number})`;
    }
    return "N/A";
  }
  // Observable per prenotazioni future del ristorante
  getRestaurantFutureReservations$() {
    return this.restaurantReservations$.pipe(map((reservations) => this.getFutureReservations(reservations)));
  }
  // Observable per prenotazioni odierne del ristorante
  getRestaurantTodayReservations$() {
    return this.restaurantReservations$.pipe(map((reservations) => this.getActiveReservations(reservations)));
  }
  // ✅ Override del clearCache
  clearCache() {
    super.clearCache();
    setTimeout(() => {
      if (this.restaurantReservationsSubject) {
        this.restaurantReservationsSubject.next([]);
      }
    }, 0);
  }
  // === METODI DISPONIBILITÀ - AGGIUNGI QUESTI ===
  checkTableAvailability(tableId, date, time) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("reservations").select("id").eq("table_id", tableId).eq("reservation_date", date).eq("reservation_time", time).in("status", ["pending", "confirmed"]).limit(1);
        if (error)
          throw error;
        return !data || data.length === 0;
      } catch (error) {
        console.error("\u274C Error checking table availability:", error);
        return false;
      }
    });
  }
  getAvailableTimes(tableId, date) {
    return __async(this, null, function* () {
      try {
        const openingHours = [
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
          "21:00",
          "21:30"
        ];
        const { data: existingReservations, error } = yield this.supabaseService.getSupabaseClient().from("reservations").select("reservation_time").eq("table_id", tableId).eq("reservation_date", date).in("status", ["pending", "confirmed"]);
        if (error)
          throw error;
        const bookedTimes = existingReservations?.map((r) => r.reservation_time) || [];
        return openingHours.filter((time) => !bookedTimes.includes(time));
      } catch (error) {
        console.error("\u274C Error getting available times:", error);
        return [];
      }
    });
  }
  // Menù Specifico per prenotazione
  getReservationWithMenu(reservationId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("reservations").select(`
        *,
        menus (*)
      `).eq("id", reservationId).single();
        if (error)
          throw error;
        return data;
      } catch (error) {
        console.error("Error fetching reservation with menu:", error);
        return null;
      }
    });
  }
  updateReservationMenu(reservationId, menuId) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from("reservations").update({
          menu_id: menuId,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", reservationId);
        if (error)
          throw error;
        return true;
      } catch (error) {
        console.error("Error updating reservation menu:", error);
        return false;
      }
    });
  }
  static \u0275fac = function ReservationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservationService, factory: _ReservationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ReservationService
};
//# sourceMappingURL=chunk-25NMM2MN.js.map
