import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Mappa/floorplan.service.ts
var FloorPlanService = class _FloorPlanService extends BaseService {
  getTableName() {
    return "restaurant_floor_plans";
  }
  tableShapes = [
    { id: "rect", name: "Rettangolare", type: "rectangle", default_width: 120, default_height: 80, icon: "rectangle" },
    { id: "circle", name: "Rotondo", type: "circle", default_width: 100, default_height: 100, icon: "circle" },
    { id: "square", name: "Quadrato", type: "square", default_width: 100, default_height: 100, icon: "square" }
  ];
  // ✅ CORREZIONE: Override corretto senza parametri aggiuntivi
  loadData() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).order("created_at", { ascending: false });
        if (error)
          throw error;
        this.dataSubject.next(data || []);
      } catch (error) {
        console.error(`Error loading ${this.getTableName()}:`, error);
        this.errorSubject.next(error.message);
        this.dataSubject.next([]);
      }
    });
  }
  updateFloorPlan(id, updates) {
    return __async(this, null, function* () {
      try {
        const updateData = __spreadProps(__spreadValues({}, updates), {
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update(updateData).eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("\u274C Error updating floor plan:", error);
        return false;
      }
    });
  }
  loadFloorPlans() {
    return __async(this, null, function* () {
      return this.loadData();
    });
  }
  getTableShapes() {
    return this.tableShapes;
  }
  getTableShapeById(id) {
    return this.tableShapes.find((shape) => shape.id === id);
  }
  // ✅ MANTIENI I METODI SPECIFICI CHE AVEVI PRIMA
  createFloorPlan(floorPlan) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const floorPlanToInsert = __spreadProps(__spreadValues({}, floorPlan), {
          restaurant_id: restaurantId,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(floorPlanToInsert).select().single();
        if (error)
          throw error;
        yield this.loadData();
        return data;
      } catch (error) {
        console.error("Error creating floor plan:", error);
        return null;
      }
    });
  }
  deleteFloorPlan(id) {
    return __async(this, null, function* () {
      try {
        yield this.supabaseService.getSupabaseClient().from("tables").update({ floor_plan_id: null }).eq("floor_plan_id", id);
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).delete().eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("Error deleting floor plan:", error);
        return false;
      }
    });
  }
  // Metodo per ottenere le dimensioni predefinite basate sul device
  getDefaultDimensions() {
    const isMobile = window.innerWidth < 768;
    return {
      width: isMobile ? 800 : 1e3,
      height: isMobile ? 600 : 800
    };
  }
  getMergedTableName(selectedTables) {
    const numbers = selectedTables.map((t) => t.table_number).join("-");
    return `Tavolo Unito ${numbers}`;
  }
  getMergedTableNumber(selectedTables) {
    return `U${selectedTables.map((t) => t.table_number).join("")}`;
  }
  getTotalCapacity(selectedTables) {
    return selectedTables.reduce((sum, t) => sum + t.capacity, 0);
  }
  getPreviewBorderRadius(shape, borderRadius) {
    return shape === "circle" ? "50%" : borderRadius + "px";
  }
  getPreviewBorderRadiusValue(shape, borderRadius) {
    return shape === "circle" ? "50% (automatico)" : borderRadius + "px";
  }
  getSelectedTableNumbers(selectedTables) {
    return selectedTables.map((t) => t.table_number).join("-");
  }
  // Aggiungi un metodo per aggiornare la versione corrente
  setCurrentVersion(floorPlanId, version) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from("restaurant_floor_plans").update({ current_version: version, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", floorPlanId);
        if (error)
          throw error;
        return true;
      } catch (error) {
        console.error("\u274C Error setting current version:", error);
        return false;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FloorPlanService_BaseFactory;
    return function FloorPlanService_Factory(__ngFactoryType__) {
      return (\u0275FloorPlanService_BaseFactory || (\u0275FloorPlanService_BaseFactory = \u0275\u0275getInheritedFactory(_FloorPlanService)))(__ngFactoryType__ || _FloorPlanService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FloorPlanService, factory: _FloorPlanService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloorPlanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FloorPlanService
};
//# sourceMappingURL=chunk-PV6E5C74.js.map
