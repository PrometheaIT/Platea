import {
  BaseService
} from "./chunk-K4QVN3EH.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Piatti/dish.service.ts
var DishService = class _DishService extends BaseService {
  getTableName() {
    return "dishes";
  }
  // ── Override loadData: aggiunge filtro soft-delete ──
  loadData(additionalFilters) {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        this.errorSubject.next(null);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          this.dataSubject.next([]);
          return;
        }
        let query = this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).is("deleted_at", null);
        if (additionalFilters) {
          Object.entries(additionalFilters).forEach(([key, val]) => {
            if (val !== null && val !== void 0)
              query = query.eq(key, val);
          });
        }
        const { data, error } = yield this.run(query);
        if (error)
          throw error;
        this.dataSubject.next(data ?? []);
      } catch (err) {
        this.handleError("loadData", err);
        this.dataSubject.next([]);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  // ══════════════════════════════════════════════════
  // CRUD — ora usa BaseService.create() e BaseService.update()
  // ══════════════════════════════════════════════════
  createDish(dishData) {
    return __async(this, null, function* () {
      if (!dishData.name?.trim()) {
        this.errorSubject.next("Il nome del piatto \xE8 obbligatorio");
        return null;
      }
      if (dishData.base_price <= 0) {
        this.errorSubject.next("Il prezzo base deve essere maggiore di 0");
        return null;
      }
      return this.create({
        name: dishData.name.trim(),
        description: dishData.description || null,
        base_price: Number(dishData.base_price),
        food_cost: dishData.food_cost ? Number(dishData.food_cost) : 0,
        status: dishData.status || "available",
        preparation_time: dishData.preparation_time || null,
        category_id: dishData.category_id || null,
        delivery_price: dishData.delivery_price || null,
        takeaway_price: dishData.takeaway_price || null,
        image_url: dishData.image_url || null,
        recipe_instructions: dishData.recipe_instructions || null,
        ingredients_composition: dishData.ingredients_composition || null,
        allergens: dishData.allergens || []
      });
    });
  }
  updateDish(id, updates) {
    return __async(this, null, function* () {
      if (updates.name !== void 0 && !updates.name.trim()) {
        this.errorSubject.next("Il nome del piatto non pu\xF2 essere vuoto");
        return false;
      }
      if (updates.base_price !== void 0 && updates.base_price <= 0) {
        this.errorSubject.next("Il prezzo base deve essere maggiore di 0");
        return false;
      }
      return this.update(id, updates);
    });
  }
  /** Soft delete */
  deleteDish(id) {
    return __async(this, null, function* () {
      return this.updateDish(id, { deleted_at: (/* @__PURE__ */ new Date()).toISOString() });
    });
  }
  /** Ripristina da soft delete */
  restoreDish(id) {
    return __async(this, null, function* () {
      return this.updateDish(id, { deleted_at: null, status: "available" });
    });
  }
  // ══════════════════════════════════════════════════
  // ALIAS mantenuti per compatibilità con i componenti
  // ══════════════════════════════════════════════════
  loadDishes() {
    return __async(this, null, function* () {
      return this.loadData();
    });
  }
  reloadDishes() {
    return __async(this, null, function* () {
      return this.loadData();
    });
  }
  getDishes() {
    return this.dataSubject.value;
  }
  // ══════════════════════════════════════════════════
  // OBSERVABLE STREAMS
  // ══════════════════════════════════════════════════
  getAvailableDishes() {
    return this.data$.pipe(map((d) => d.filter((dish) => dish.status === "available")));
  }
  getActiveDishes$() {
    return this.data$.pipe(map((d) => d.filter((dish) => !dish.deleted_at)));
  }
  getDishesByCategory(categoryId) {
    return this.data$.pipe(map((d) => d.filter((dish) => dish.category_id === categoryId)));
  }
  getDishById$(id) {
    return this.getById(id);
  }
  searchDishes(searchTerm) {
    return this.data$.pipe(map((dishes) => {
      if (!searchTerm.trim())
        return dishes;
      const term = searchTerm.toLowerCase();
      return dishes.filter((d) => d.name.toLowerCase().includes(term) || d.description?.toLowerCase().includes(term));
    }));
  }
  // Mantenuto per compatibilità — delega a MenuDishService idealmente
  getDishesByMenu$(menuId) {
    return this.data$;
  }
  // Mantenuto per compatibilità — logica semplificata
  isDishInMenu$(dishId, menuId) {
    return this.data$.pipe(map((dishes) => dishes.some((d) => d.id === dishId)));
  }
  // ══════════════════════════════════════════════════
  // UTILITY SINCRONI
  // ══════════════════════════════════════════════════
  getActiveDishes() {
    return this.dataSubject.value.filter((d) => !d.deleted_at);
  }
  getDishById(id) {
    return this.dataSubject.value.find((d) => d.id === id);
  }
  // ══════════════════════════════════════════════════
  // AZIONI SPECIFICHE
  // ══════════════════════════════════════════════════
  changeDishStatus(id, status) {
    return __async(this, null, function* () {
      return this.updateDish(id, { status });
    });
  }
  updateFoodCost(id, foodCost) {
    return __async(this, null, function* () {
      if (foodCost < 0) {
        this.errorSubject.next("Il food cost non pu\xF2 essere negativo");
        return false;
      }
      return this.updateDish(id, { food_cost: foodCost });
    });
  }
  cloneDish(dishId, targetMenuName) {
    return __async(this, null, function* () {
      const original = this.dataSubject.value.find((d) => d.id === dishId && !d.deleted_at);
      if (!original)
        return null;
      const _a = original, { id, created_at, deleted_at } = _a, dishData = __objRest(_a, ["id", "created_at", "deleted_at"]);
      const baseName = dishData.name.replace(/ \(Copia.*\)$/, "").replace(/ - .*$/, "");
      const copies = this.dataSubject.value.filter((d) => d.name.startsWith(baseName) && d.id !== dishId && !d.deleted_at);
      const suffix = targetMenuName ?? "Copia";
      const newName = copies.length > 0 ? `${baseName} - ${suffix} (${copies.length + 1})` : `${baseName} - ${suffix}`;
      return this.createDish(__spreadProps(__spreadValues({}, dishData), { name: newName, status: "available" }));
    });
  }
  uploadDishImage(dishId, file) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const supabase = this.supabaseService.getSupabaseClient();
      const safeName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9.\-_]/g, "_").replace(/_+/g, "_").toLowerCase();
      const path = `restaurants/${restaurantId}/dishes/${dishId}_${Date.now()}_${safeName}`;
      const { error: uploadError } = yield supabase.storage.from("restaurant-images").upload(path, file, { upsert: true });
      if (uploadError) {
        this.handleError("uploadDishImage", uploadError);
        return null;
      }
      const { data: { publicUrl } } = supabase.storage.from("restaurant-images").getPublicUrl(path);
      const ok = yield this.updateDish(dishId, { image_url: publicUrl });
      return ok ? publicUrl : null;
    });
  }
  getAllDishesIncludingDeleted() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return [];
      const { data, error } = yield this.supabaseService.getSupabaseClient().from("dishes").select("*").eq("restaurant_id", restaurantId);
      if (error) {
        this.handleError("getAllDishesIncludingDeleted", error);
        return [];
      }
      return data || [];
    });
  }
  getDefaultCategoryId() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const supabase = this.supabaseService.getSupabaseClient();
      const { data } = yield supabase.from("categories").select("id").eq("restaurant_id", restaurantId).eq("is_default", true).limit(1).single();
      if (data)
        return data.id;
      const { data: first } = yield supabase.from("categories").select("id").eq("restaurant_id", restaurantId).limit(1).single();
      return first?.id || null;
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DishService_BaseFactory;
    return function DishService_Factory(__ngFactoryType__) {
      return (\u0275DishService_BaseFactory || (\u0275DishService_BaseFactory = \u0275\u0275getInheritedFactory(_DishService)))(__ngFactoryType__ || _DishService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DishService, factory: _DishService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DishService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DishService
};
//# sourceMappingURL=chunk-5FIUGXYI.js.map
