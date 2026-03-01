import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-TWWAJFRB.js";

// src/app/services/shift.service.ts
var ShiftService = class _ShiftService extends BaseService {
  // Logica specifica per le chiusure (non gestita da BaseService)
  closuresSubject = new BehaviorSubject([]);
  closures$ = this.closuresSubject.asObservable();
  authSubscription;
  constructor() {
    super();
    this.authSubscription = this.authService.activeRestaurantId$.subscribe(() => {
      this.loadClosures();
    });
  }
  // Implementazione obbligatoria per BaseService
  getTableName() {
    return "shifts";
  }
  // Sovrascriviamo loadData per gestire la creazione dei turni di default se non presenti
  loadData(additionalFilters) {
    return __async(this, null, function* () {
      yield __superGet(_ShiftService.prototype, this, "loadData").call(this, additionalFilters);
      if (this.data.length === 0) {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (restaurantId) {
          yield this.createDefaultShifts(restaurantId);
          yield __superGet(_ShiftService.prototype, this, "loadData").call(this, additionalFilters);
        }
      }
    });
  }
  /**
   * Crea i turni predefiniti (pranzo e cena) per un ristorante.
   */
  createDefaultShifts(restaurantId) {
    return __async(this, null, function* () {
      const defaultShifts = [
        {
          name: "Pranzo",
          start_time: "12:00:00",
          end_time: "15:00:00",
          days_of_week: [1, 2, 3, 4, 5, 6, 7],
          is_active: true
        },
        {
          name: "Cena",
          start_time: "19:00:00",
          end_time: "23:00:00",
          days_of_week: [1, 2, 3, 4, 5, 6, 7],
          is_active: true
        }
      ];
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(defaultShifts.map((s) => __spreadProps(__spreadValues({}, s), { restaurant_id: restaurantId })));
        if (error)
          throw error;
        console.log("\u2705 Default shifts created");
      } catch (error) {
        console.error("\u274C Error creating default shifts:", error);
      }
    });
  }
  // --- Metodi specifici per i turni (non CRUD) ---
  /**
   * Restituisce il turno corrente in base all'orario (senza buffer).
   */
  getCurrentShift() {
    const now = /* @__PURE__ */ new Date();
    const currentTime = now.toTimeString().split(" ")[0];
    const currentDay = now.getDay();
    const adjustedDay = currentDay === 0 ? 7 : currentDay;
    const activeShifts = this.data.filter((shift) => shift.is_active);
    for (const shift of activeShifts) {
      if (shift.days_of_week.includes(adjustedDay)) {
        if (currentTime >= shift.start_time && currentTime <= shift.end_time) {
          return shift;
        }
      }
    }
    return null;
  }
  /**
   * Verifica se si può ordinare in questo momento, considerando un buffer di 1 ora
   * prima/dopo i turni e le chiusure.
   */
  getOrderingStatus() {
    return __async(this, null, function* () {
      const now = /* @__PURE__ */ new Date();
      const currentTime = now.toTimeString().split(" ")[0];
      const currentDay = now.getDay();
      const adjustedDay = currentDay === 0 ? 7 : currentDay;
      const isClosed = yield this.isRestaurantClosedToday();
      if (isClosed) {
        return {
          allowed: false,
          reason: "Ristorante chiuso oggi",
          currentShift: null
        };
      }
      const shiftsToday = this.data.filter((shift) => shift.is_active && shift.days_of_week.includes(adjustedDay));
      if (shiftsToday.length === 0) {
        return {
          allowed: false,
          reason: "Nessun turno attivo oggi",
          currentShift: null
        };
      }
      for (const shift of shiftsToday) {
        const startWithBuffer = this.subtractHour(shift.start_time, 1);
        const endWithBuffer = this.addHour(shift.end_time, 1);
        if (this.isTimeInRangeWithOvernight(currentTime, startWithBuffer, endWithBuffer, shift.end_time)) {
          return {
            allowed: true,
            reason: `Turno: ${shift.name}`,
            currentShift: shift
          };
        }
      }
      const exactShift = this.getCurrentShift();
      if (exactShift) {
        return {
          allowed: true,
          reason: `Turno attivo: ${exactShift.name}`,
          currentShift: exactShift
        };
      }
      return {
        allowed: false,
        reason: "Fuori orario dei turni",
        currentShift: null
      };
    });
  }
  /**
   * Carica le chiusure del ristorante corrente.
   */
  loadClosures() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          this.closuresSubject.next([]);
          return;
        }
        const { data, error } = yield this.run(this.supabaseService.getSupabaseClient().from("restaurant_closures").select("*").eq("restaurant_id", restaurantId));
        if (error)
          throw error;
        this.closuresSubject.next(data || []);
      } catch (error) {
        console.error("Error loading closures:", error);
        this.closuresSubject.next([]);
      }
    });
  }
  /**
   * Verifica se il ristorante è chiuso oggi (basato sulle chiusure caricate).
   */
  isRestaurantClosedToday() {
    return __async(this, null, function* () {
      const closures = this.closuresSubject.value;
      if (!closures.length)
        return false;
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      return closures.some((closure) => {
        return false;
      });
    });
  }
  // --- Helper per la gestione degli orari (invariati) ---
  subtractHour(time, hours) {
    const [h, m, s] = time.split(":").map(Number);
    const date = /* @__PURE__ */ new Date();
    date.setHours(h, m, s);
    date.setHours(date.getHours() - hours);
    return date.toTimeString().split(" ")[0];
  }
  addHour(time, hours) {
    const [h, m, s] = time.split(":").map(Number);
    const date = /* @__PURE__ */ new Date();
    date.setHours(h, m, s);
    date.setHours(date.getHours() + hours);
    return date.toTimeString().split(" ")[0];
  }
  isTimeInRangeWithOvernight(currentTime, startTime, endTimeWithBuffer, originalEndTime) {
    const toMinutes = (time) => {
      const [hours, minutes, seconds] = time.split(":").map(Number);
      return hours * 60 + minutes + seconds / 60;
    };
    const current = toMinutes(currentTime);
    const start = toMinutes(startTime);
    const end = toMinutes(endTimeWithBuffer);
    if (end >= start) {
      return current >= start && current <= end;
    }
    return current >= start || current <= end;
  }
  // Metodo di debug (opzionale)
  debugShiftStatus() {
    return __async(this, null, function* () {
      console.log("\u{1F50D} ===== DEBUG TURNI =====");
      console.log("Turni caricati:", this.data);
      const status = yield this.getOrderingStatus();
      console.log("Stodo ordinamento:", status);
      console.log("===== FINE DEBUG ===== \u{1F50D}");
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.authSubscription.unsubscribe();
    this.closuresSubject.complete();
  }
  static \u0275fac = function ShiftService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShiftService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShiftService, factory: _ShiftService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShiftService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ShiftService
};
//# sourceMappingURL=chunk-WGCCOIKJ.js.map
