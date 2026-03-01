import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import {
  SupabaseService
} from "./chunk-6SNKM7Z6.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/Piatti/menu-dish.service.ts
var MenuDishService = class _MenuDishService extends BaseService {
  supabase = inject(SupabaseService);
  getTableName() {
    return "menu_dishes";
  }
  // ========== METODI SPECIFICI ==========
  getDishesByMenu$(menuId) {
    return this.data$.pipe(map((dishes) => dishes.filter((d) => d.menu_id === menuId && d.is_active)));
  }
  /**
   * Aggiunge un piatto a un menu.
   * Il restaurant_id viene aggiunto automaticamente da BaseService.
   */
  addDishToMenu(menuId, dishId, categoryId, displayOrder = 0) {
    return __async(this, null, function* () {
      const existing = this.data.find((md) => md.menu_id === menuId && md.dish_id === dishId && md.is_active);
      if (existing) {
        throw new Error("Il piatto \xE8 gi\xE0 presente in questo menu");
      }
      const dishesInMenu = this.data.filter((md) => md.menu_id === menuId);
      const maxOrder = dishesInMenu.length ? Math.max(...dishesInMenu.map((d) => d.order_index ?? 0)) : -1;
      const nextOrder = maxOrder + 1;
      const payload = {
        menu_id: menuId,
        dish_id: dishId,
        display_order: displayOrder,
        order_index: nextOrder,
        is_active: true
      };
      if (categoryId && categoryId.trim()) {
        payload.category_id = categoryId;
      }
      return this.create(payload);
    });
  }
  /**
   * Disattiva un piatto dal menu (soft delete logico).
   */
  removeDishFromMenu(menuDishId) {
    return __async(this, null, function* () {
      return this.update(menuDishId, { is_active: false });
    });
  }
  /**
   * Aggiorna l'ordine di visualizzazione di un piatto nel menu.
   */
  updateDishOrder(menuDishId, displayOrder) {
    return __async(this, null, function* () {
      return this.update(menuDishId, { display_order: displayOrder });
    });
  }
  /**
   * Carica solo i piatti di un menu specifico (filtro aggiuntivo).
   */
  loadDishesForMenu(menuId) {
    return __async(this, null, function* () {
      return this.loadData({ menu_id: menuId });
    });
  }
  /**
   * Ottiene i piatti di un menu con i dettagli del dish e della categoria.
   * Attenzione: la query deve rispettare lo scope del ristorante.
   */
  getDishesWithDetailsByMenu(menuId) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return [];
      const { data, error } = yield this.supabase.getSupabaseClient().from("menu_dishes").select(`
          *,
          dish:dishes!dish_id (
            id,
            name,
            description,
            base_price,
            image_url,
            status,
            category_id,
            preparation_time,
            deleted_at
          ),
          category:categories!category_id (
            id,
            name
          )
        `).eq("menu_id", menuId).eq("is_active", true).eq("dishes.restaurant_id", restaurantId).order("order_index", { ascending: true });
      if (error) {
        console.error("Errore recupero piatti dettagliati:", error);
        return [];
      }
      return (data || []).filter((item) => item.dish && !item.dish.deleted_at);
    });
  }
  /**
   * Disattiva tutti i piatti di un menu (rimozione logica di massa).
   */
  removeAllDishesFromMenu(menuId) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabase.getSupabaseClient().from(this.getTableName()).update({ is_active: false, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("menu_id", menuId).eq("is_active", true);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        this.handleError("removeAllDishesFromMenu", error);
        return false;
      }
    });
  }
  // ========== METODI DI ORDINAMENTO (con order_index) ==========
  initializeOrderIndexes(menuId) {
    return __async(this, null, function* () {
      try {
        const { data: dishes, error } = yield this.supabase.getSupabaseClient().from(this.getTableName()).select("*").eq("menu_id", menuId).eq("is_active", true).order("created_at");
        if (error)
          throw error;
        const updates = dishes.map((d, idx) => this.supabase.getSupabaseClient().from(this.getTableName()).update({ order_index: idx }).eq("id", d.id));
        yield Promise.all(updates);
        yield this.loadData();
        return true;
      } catch (error) {
        this.handleError("initializeOrderIndexes", error);
        return false;
      }
    });
  }
  moveDishInMenu(menuId, dishId, direction) {
    return __async(this, null, function* () {
      try {
        const { data: dishes, error } = yield this.supabase.getSupabaseClient().from(this.getTableName()).select("*").eq("menu_id", menuId).eq("is_active", true).order("order_index");
        if (error)
          throw error;
        const currentIndex = dishes.findIndex((d) => d.dish_id === dishId);
        if (currentIndex === -1)
          return false;
        const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
        if (newIndex < 0 || newIndex >= dishes.length)
          return false;
        const currentItem = dishes[currentIndex];
        const targetItem = dishes[newIndex];
        yield this.supabase.getSupabaseClient().from(this.getTableName()).update({ order_index: targetItem.order_index }).eq("id", currentItem.id);
        yield this.supabase.getSupabaseClient().from(this.getTableName()).update({ order_index: currentItem.order_index }).eq("id", targetItem.id);
        yield this.loadData();
        return true;
      } catch (error) {
        this.handleError("moveDishInMenu", error);
        return false;
      }
    });
  }
  reorderDishes(menuId, dishIds) {
    return __async(this, null, function* () {
      try {
        const updates = dishIds.map((dishId, idx) => this.supabase.getSupabaseClient().from(this.getTableName()).update({ order_index: idx }).eq("menu_id", menuId).eq("dish_id", dishId));
        yield Promise.all(updates);
        yield this.loadData();
        return true;
      } catch (error) {
        this.handleError("reorderDishes", error);
        return false;
      }
    });
  }
  getDishesByMenuOrdered$(menuId) {
    return this.data$.pipe(map((dishes) => dishes.filter((d) => d.menu_id === menuId && d.is_active).sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0))));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuDishService_BaseFactory;
    return function MenuDishService_Factory(__ngFactoryType__) {
      return (\u0275MenuDishService_BaseFactory || (\u0275MenuDishService_BaseFactory = \u0275\u0275getInheritedFactory(_MenuDishService)))(__ngFactoryType__ || _MenuDishService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuDishService, factory: _MenuDishService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuDishService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MenuDishService
};
//# sourceMappingURL=chunk-INRG7RVS.js.map
