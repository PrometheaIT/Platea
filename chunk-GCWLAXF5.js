import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import {
  Injectable,
  filter,
  setClassMetadata,
  take,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Piatti/ingredient.service.ts
var IngredientService = class _IngredientService extends BaseService {
  constructor() {
    super();
    this.authService.currentUser$.pipe(filter((u) => !!u), take(1)).subscribe(() => {
      this.loadData();
    });
  }
  // ✅ IMPLEMENTA IL METODO ASTRATTO RICHIESTO
  getTableName() {
    return "ingredients";
  }
  // ✅ OVERRIDE PER INCLUDERE LE RELAZIONI
  loadData(additionalFilters) {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          this.dataSubject.next([]);
          this.loadingSubject.next(false);
          return;
        }
        const { data: ingredients, error } = yield this.supabaseService.getSupabaseClient().from("ingredients").select(`
          *,
          units (*),
          suppliers (company_name, contact_name),
          ingredient_types (id, name, description),
          ingredient_groups (id, name, description, color)
        `).eq("restaurant_id", restaurantId).eq("is_active", true).order("name");
        if (error)
          throw error;
        console.log("Ingredients loaded with details:", ingredients?.length);
        const processedIngredients = (ingredients || []).map((ingredient) => __spreadProps(__spreadValues({}, ingredient), {
          to_buy: ingredient.to_buy || false,
          to_buy_quantity: ingredient.to_buy_quantity || null,
          // Normalizza le relazioni
          ingredient_types: ingredient.ingredient_types || void 0,
          ingredient_groups: ingredient.ingredient_groups || void 0
        }));
        this.dataSubject.next(processedIngredients);
      } catch (error) {
        console.error("Error loading ingredients:", error);
        this.handleError("loadData", error);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  // ✅ ALIAS PER COMPATIBILITÀ - USA loadData() INTERNAMENTE
  loadIngredients() {
    return __async(this, null, function* () {
      return this.loadData();
    });
  }
  createIngredient(ingredient) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.error("No restaurant found");
          return null;
        }
        const cleanedIngredient = __spreadProps(__spreadValues({}, ingredient), {
          to_buy: ingredient.to_buy || false,
          to_buy_quantity: ingredient.to_buy_quantity || null,
          expiry_date: ingredient.expiry_date === "" ? null : ingredient.expiry_date,
          supplier_id: ingredient.supplier_id === "" ? null : ingredient.supplier_id,
          type_id: ingredient.type_id === "" ? null : ingredient.type_id,
          group_id: ingredient.group_id === "" ? null : ingredient.group_id,
          restaurant_id: restaurantId
        });
        console.log("\u{1F4DD} Creating ingredient:", cleanedIngredient);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(cleanedIngredient).select(`
          *,
          units (*),
          suppliers (company_name, contact_name),
          ingredient_types (id, name, description),
          ingredient_groups (id, name, description, color)
        `).single();
        if (error) {
          console.error("\u274C Error creating ingredient:", error);
          throw error;
        }
        console.log("\u2705 Ingredient created successfully");
        yield this.loadData();
        return data;
      } catch (error) {
        console.error("\u{1F4A5} Error in createIngredient:", error);
        return null;
      }
    });
  }
  // ✅ METODI AGGIORNATI PER USARE loadData()
  updateIngredient(id, updates) {
    return __async(this, null, function* () {
      try {
        const cleanedUpdates = __spreadProps(__spreadValues({}, updates), {
          expiry_date: updates.expiry_date === "" ? null : updates.expiry_date,
          type_id: updates.type_id === "" ? null : updates.type_id,
          group_id: updates.group_id === "" ? null : updates.group_id
        });
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update(cleanedUpdates).eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("Error updating ingredient:", error);
        return false;
      }
    });
  }
  deleteIngredient(id) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update({ is_active: false }).eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("Error deleting ingredient:", error);
        return false;
      }
    });
  }
  // ✅ METODI DI UTILITY - USANO dataSubject DI BaseService
  getIngredients() {
    return this.dataSubject.value;
  }
  getIngredientById(id) {
    return this.dataSubject.value.find((ing) => ing.id === id);
  }
  getLowStockIngredients() {
    return this.dataSubject.value.filter((ingredient) => ingredient.alert_enabled && ingredient.current_stock <= ingredient.minimum_stock);
  }
  searchIngredients(searchTerm) {
    if (!searchTerm)
      return this.dataSubject.value;
    return this.dataSubject.value.filter((ingredient) => ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) || ingredient.description?.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  calculateIngredientCost(ingredient, quantity) {
    if (!ingredient.unit_id || !ingredient.units) {
      return ingredient.cost_per_unit * quantity;
    }
    const unit = ingredient.units;
    let convertedQuantity = quantity;
    switch (unit.symbol) {
      case "kg":
        convertedQuantity = quantity / 1e3;
        break;
      case "L":
        convertedQuantity = quantity / 1e3;
        break;
      case "g":
      case "mL":
      case "pz":
        convertedQuantity = quantity;
        break;
      default:
        convertedQuantity = quantity;
    }
    return ingredient.cost_per_unit * convertedQuantity;
  }
  // ✅ NUOVI METODI PER FILTRARE
  getIngredientsByType(typeId) {
    return this.dataSubject.value.filter((ing) => ing.type_id === typeId);
  }
  getIngredientsByGroup(groupId) {
    return this.dataSubject.value.filter((ing) => ing.group_id === groupId);
  }
  getIngredientsGroupedByType() {
    const grouped = /* @__PURE__ */ new Map();
    this.dataSubject.value.forEach((ingredient) => {
      const typeId = ingredient.type_id || "senza-tipologia";
      if (!grouped.has(typeId)) {
        grouped.set(typeId, []);
      }
      grouped.get(typeId).push(ingredient);
    });
    return grouped;
  }
  getIngredientsGroupedByGroup() {
    const grouped = /* @__PURE__ */ new Map();
    this.dataSubject.value.forEach((ingredient) => {
      const groupId = ingredient.group_id || "senza-gruppo";
      if (!grouped.has(groupId)) {
        grouped.set(groupId, []);
      }
      grouped.get(groupId).push(ingredient);
    });
    return grouped;
  }
  static \u0275fac = function IngredientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IngredientService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IngredientService, factory: _IngredientService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IngredientService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  IngredientService
};
//# sourceMappingURL=chunk-GCWLAXF5.js.map
