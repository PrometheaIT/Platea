import {
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

// src/app/services/Piatti/unit.service.ts
var UnitService = class _UnitService {
  supabaseService = inject(SupabaseService);
  unitsSubject = new BehaviorSubject([]);
  units$ = this.unitsSubject.asObservable();
  constructor() {
    this.loadUnits();
  }
  loadUnits() {
    return __async(this, null, function* () {
      try {
        const { data: units, error } = yield this.supabaseService.getSupabaseClient().from("units").select("*").order("name");
        if (error)
          throw error;
        this.unitsSubject.next(units || []);
      } catch (error) {
        console.error("Error loading units:", error);
      }
    });
  }
  getUnits() {
    return this.unitsSubject.value;
  }
  getUnitById(id) {
    return this.unitsSubject.value.find((unit) => unit.id === id);
  }
  getUnitsByType(type) {
    return this.unitsSubject.value.filter((unit) => unit.type === type);
  }
  // CORREZIONE: Gestiamo anche il tipo 'package'
  getBaseUnitForType(type) {
    switch (type) {
      case "weight":
        return "g";
      case "volume":
        return "mL";
      case "piece":
        return "pz";
      case "package":
        return "pz";
      // Trattiamo 'package' come 'piece'
      default:
        return "";
    }
  }
  // Metodo per ottenere unità per tipo di ingrediente
  getUnitsForIngredientType(ingredientType) {
    const unitTypes = {
      "solid": ["weight"],
      "liquid": ["volume"],
      "piece": ["piece", "package"]
      // Includiamo anche 'package'
    };
    return this.unitsSubject.value.filter((unit) => unitTypes[ingredientType].includes(unit.type));
  }
  // Metodo per ottenere il fattore di conversione
  getConversionFactor(unit) {
    switch (unit.symbol) {
      case "kg":
        return 1e3;
      // 1 kg = 1000 g
      case "g":
        return 1;
      // 1 g = 1 g
      case "L":
        return 1e3;
      // 1 L = 1000 mL
      case "mL":
        return 1;
      // 1 mL = 1 mL
      case "pz":
        return 1;
      // 1 pezzo = 1 pezzo
      default:
        return 1;
    }
  }
  static \u0275fac = function UnitService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnitService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UnitService, factory: _UnitService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  UnitService
};
//# sourceMappingURL=chunk-UIVYXL7P.js.map
