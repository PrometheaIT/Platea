import {
  ReservationService
} from "./chunk-PVOVUO2H.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-6SNKM7Z6.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/Mappa/floor-management.service.ts
var FloorManagementService = class _FloorManagementService {
  supabaseService = inject(SupabaseService);
  authService = inject(AuthService);
  reservationService = inject(ReservationService);
  // RIPRISTINA IL BEHAVIORSUBJECT PER LO STATO LOCALE
  todaysReservationsSubject = new BehaviorSubject([]);
  todaysReservations$ = this.todaysReservationsSubject.asObservable();
  // Carica tutte le prenotazioni di oggi
  loadTodaysReservations() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        console.log("\u{1F50D} Restaurant ID per prenotazioni:", restaurantId);
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        console.log("\u{1F4C5} Data di oggi per query:", today);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("reservations").select("*").eq("restaurant_id", restaurantId).eq("reservation_date", today).in("status", ["confirmed", "pending"]).order("reservation_time", { ascending: true });
        if (error) {
          console.error("\u274C Errore query prenotazioni:", error);
          throw error;
        }
        console.log("\u{1F4CB} Prenotazioni caricate dal DB:", {
          totale: data?.length || 0,
          conTavolo: data?.filter((r) => r.table_id)?.length || 0,
          senzaTavolo: data?.filter((r) => !r.table_id)?.length || 0
        });
        this.todaysReservationsSubject.next(data || []);
      } catch (error) {
        console.error("\u274C Errore caricamento prenotazioni:", error);
        this.todaysReservationsSubject.next([]);
      }
    });
  }
  // Assegna un tavolo a una prenotazione
  assignTableToReservation(reservationId, tableId) {
    return __async(this, null, function* () {
      try {
        const success = yield this.reservationService.assignTableToReservation(reservationId, tableId);
        if (success) {
          yield this.loadTodaysReservations();
        }
        return success;
      } catch (error) {
        console.error("\u274C Error assigning table to reservation:", error);
        return false;
      }
    });
  }
  // Rimuovi assegnazione tavolo
  removeTableAssignment(reservationId) {
    return __async(this, null, function* () {
      try {
        const success = yield this.reservationService.removeTableFromReservation(reservationId);
        if (success) {
          yield this.loadTodaysReservations();
        }
        return success;
      } catch (error) {
        console.error("\u274C Error removing table assignment:", error);
        return false;
      }
    });
  }
  // Ottieni prenotazioni senza tavolo assegnato
  getReservationsWithoutTable() {
    return this.todaysReservationsSubject.value.filter((r) => !r.table_id);
  }
  // Ottieni prenotazioni con tavolo assegnato
  getReservationsWithTable() {
    return this.todaysReservationsSubject.value.filter((r) => r.table_id);
  }
  // Metodo pubblico per ottenere le prenotazioni correnti
  getCurrentReservations() {
    return this.todaysReservationsSubject.value;
  }
  // Suggerisci tavoli disponibili per una prenotazione
  suggestTablesForReservation(reservationId, partySize) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const reservations = this.getCurrentReservations();
        const reservation = reservations.find((r) => r.id === reservationId);
        if (!reservation)
          return [];
        const { data: allTables, error: tablesError } = yield this.supabaseService.getSupabaseClient().from("tables").select("*").eq("restaurant_id", restaurantId).eq("is_active", true).gte("capacity", partySize).order("capacity", { ascending: true });
        if (tablesError)
          throw tablesError;
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const todaysReservations = reservations.filter((r) => r.reservation_date === today && ["confirmed", "pending"].includes(r.status));
        const reservedTableIds = todaysReservations.map((r) => r.table_id).filter((id) => id !== null && id !== reservation.table_id);
        const availableTables = allTables?.filter((table) => !reservedTableIds.includes(table.id)) || [];
        return availableTables;
      } catch (error) {
        console.error("\u274C Error suggesting tables:", error);
        return [];
      }
    });
  }
  // AGGIUNGI QUESTO METODO PER DEBUG
  debugReservations() {
    return __async(this, null, function* () {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      console.log("\u{1F50D} DEBUG - Data di oggi:", today);
      console.log("\u{1F50D} DEBUG - Prenotazioni caricate:", this.todaysReservationsSubject.value);
      console.log("\u{1F50D} DEBUG - Prenotazioni senza tavolo:", this.getReservationsWithoutTable());
    });
  }
  getCurrentRestaurantId() {
    return __async(this, null, function* () {
      try {
        const user = this.authService.currentUserValue;
        if (!user)
          return null;
        const staffRestaurantId = this.authService.getCurrentStaffRestaurantId();
        if (staffRestaurantId) {
          return staffRestaurantId;
        }
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("restaurants").select("id").eq("owner_id", user.id).limit(1).single();
        if (error) {
          console.error("Error getting restaurant by owner:", error);
          return null;
        }
        return data?.id || null;
      } catch (error) {
        console.error("Exception getting restaurant:", error);
        return null;
      }
    });
  }
  suggestTablesGroupedByFloorPlan(reservationId, partySize) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const reservations = this.getCurrentReservations();
        const reservation = reservations.find((r) => r.id === reservationId);
        if (!reservation)
          return [];
        const { data: allTables, error: tablesError } = yield this.supabaseService.getSupabaseClient().from("tables").select(`
        *,
        floor_plans!inner (
          id,
          name
        )
      `).eq("restaurant_id", restaurantId).eq("is_active", true).gte("capacity", partySize).order("capacity", { ascending: true });
        if (tablesError)
          throw tablesError;
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const todaysReservations = reservations.filter((r) => r.reservation_date === today && ["confirmed", "pending"].includes(r.status));
        const reservedTableIds = todaysReservations.map((r) => r.table_id).filter((id) => id !== null && id !== reservation.table_id);
        const availableTables = allTables?.filter((table) => !reservedTableIds.includes(table.id)) || [];
        const groupedByFloorPlan = {};
        availableTables.forEach((table) => {
          const floorPlanId = table.floor_plan_id || "no-floor-plan";
          const floorPlanName = table.floor_plans?.name || "Senza mappa";
          if (!groupedByFloorPlan[floorPlanId]) {
            groupedByFloorPlan[floorPlanId] = {
              floorPlan: {
                id: floorPlanId,
                name: floorPlanName
              },
              tables: []
            };
          }
          groupedByFloorPlan[floorPlanId].tables.push(table);
        });
        return Object.values(groupedByFloorPlan);
      } catch (error) {
        console.error("\u274C Error suggesting grouped tables:", error);
        return [];
      }
    });
  }
  getAllTablesGroupedByFloorPlan() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const { data: allTables, error: tablesError } = yield this.supabaseService.getSupabaseClient().from("tables").select(`
        *,
        restaurant_floor_plans (
          id,
          name
        )
      `).eq("restaurant_id", restaurantId).eq("is_active", true).order("table_number", { ascending: true });
        if (tablesError)
          throw tablesError;
        console.log("\u{1F50D} Struttura dati:", allTables?.slice(0, 1));
        const groupedByFloorPlan = {};
        allTables?.forEach((table) => {
          const floorPlanId = table.floor_plan_id || "no-floor-plan";
          let floorPlanName = "Senza mappa";
          if (table.restaurant_floor_plans) {
            if (Array.isArray(table.restaurant_floor_plans) && table.restaurant_floor_plans.length > 0) {
              floorPlanName = table.restaurant_floor_plans[0].name;
            } else if (table.restaurant_floor_plans.name) {
              floorPlanName = table.restaurant_floor_plans.name;
            }
          }
          if (!groupedByFloorPlan[floorPlanId]) {
            groupedByFloorPlan[floorPlanId] = {
              floorPlan: {
                id: floorPlanId,
                name: floorPlanName
              },
              tables: []
            };
          }
          groupedByFloorPlan[floorPlanId].tables.push(table);
        });
        const result = Object.values(groupedByFloorPlan);
        result.sort((a, b) => {
          if (a.floorPlan.id === "no-floor-plan")
            return 1;
          if (b.floorPlan.id === "no-floor-plan")
            return -1;
          return a.floorPlan.name.localeCompare(b.floorPlan.name);
        });
        console.log("\u2705 Tavoli raggruppati:", result);
        return result;
      } catch (error) {
        console.error("\u274C Error getting all tables grouped by floor plan:", error);
        return [];
      }
    });
  }
  // Metodo per ottenere tavoli disponibili (filtro aggiuntivo)
  getAvailableTablesGroupedByFloorPlan(reservationDateTime) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        yield this.loadTodaysReservations();
        const todaysReservations = this.getCurrentReservations();
        const allTablesGrouped = yield this.getAllTablesGroupedByFloorPlan();
        if (reservationDateTime) {
        }
        return allTablesGrouped;
      } catch (error) {
        console.error("\u274C Error getting available tables grouped by floor plan:", error);
        return [];
      }
    });
  }
  static \u0275fac = function FloorManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorManagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FloorManagementService, factory: _FloorManagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloorManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  FloorManagementService
};
//# sourceMappingURL=chunk-NDFMWI4L.js.map
