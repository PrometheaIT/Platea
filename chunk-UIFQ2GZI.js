import {
  MenuDishService
} from "./chunk-LKMM3PKB.js";
import {
  BaseService
} from "./chunk-QSRXFII6.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/Piatti/menu.service.ts
var MenuService = class _MenuService extends BaseService {
  getTableName() {
    return "menus";
  }
  // ── Observable streams ──
  getDefaultActiveMenu$() {
    return this.data$.pipe(map((menus) => menus.find((m) => m.is_default && m.is_active) ?? null));
  }
  getActiveMenus$() {
    return this.data$.pipe(map((menus) => menus.filter((m) => m.is_active)));
  }
  getGlobalMenus$() {
    return this.data$.pipe(map((menus) => menus.filter((m) => m.is_active && m.type === "global")));
  }
  getDedicatedMenus$() {
    return this.data$.pipe(map((menus) => menus.filter((m) => m.is_active && m.type === "dedicated")));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuService_BaseFactory;
    return function MenuService_Factory(__ngFactoryType__) {
      return (\u0275MenuService_BaseFactory || (\u0275MenuService_BaseFactory = \u0275\u0275getInheritedFactory(_MenuService)))(__ngFactoryType__ || _MenuService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuService, factory: _MenuService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/Piatti/menu-management.service.ts
var MenuManagementService = class _MenuManagementService {
  menuService = inject(MenuService);
  menuDishService = inject(MenuDishService);
  // ========== DELEGATE A MENU SERVICE ==========
  get menus$() {
    return this.menuService.data$;
  }
  get menusLoading$() {
    return this.menuService.loading$;
  }
  get menusError$() {
    return this.menuService.error$;
  }
  loadMenus() {
    return __async(this, null, function* () {
      return this.menuService.loadData();
    });
  }
  createMenu(name, description, isDefault = false, type = "global") {
    return __async(this, null, function* () {
      const menuData = {
        name,
        description,
        is_default: isDefault,
        is_active: true,
        display_order: 0,
        type,
        is_favorite: false
      };
      const result = yield this.menuService.create(menuData);
      if (result && isDefault) {
        yield this.setAsDefault(result.id);
      }
      return result;
    });
  }
  createDedicatedMenu(name, description) {
    return __async(this, null, function* () {
      return this.createMenu(name, description, false, "dedicated");
    });
  }
  setAsDefault(menuId) {
    return __async(this, null, function* () {
      const currentMenus = this.menuService.data;
      const defaultMenus = currentMenus.filter((m) => m.is_default);
      const updates = defaultMenus.filter((m) => m.id !== menuId).map((m) => this.menuService.update(m.id, { is_default: false }));
      yield Promise.all(updates);
      const success = yield this.menuService.update(menuId, {
        is_default: true,
        is_active: true,
        type: "global"
      });
      if (success)
        yield this.loadMenus();
      return success;
    });
  }
  toggleMenuActive(menuId) {
    return __async(this, null, function* () {
      const menu = this.menuService.data.find((m) => m.id === menuId);
      if (!menu || menu.is_default)
        return false;
      const success = yield this.menuService.update(menuId, { is_active: !menu.is_active });
      if (success)
        yield this.loadMenus();
      return success;
    });
  }
  updateMenu(id, updates) {
    return __async(this, null, function* () {
      const success = yield this.menuService.update(id, updates);
      if (success)
        yield this.loadMenus();
      return success;
    });
  }
  deleteMenu(id) {
    return __async(this, null, function* () {
      const menu = this.menuService.data.find((m) => m.id === id);
      if (menu?.is_default)
        return false;
      return this.menuService.delete(id);
    });
  }
  // Metodi osservabili specifici (delegati al MenuService)
  getDefaultActiveMenu$() {
    return this.menuService.getDefaultActiveMenu$();
  }
  getActiveMenus$() {
    return this.menuService.getActiveMenus$();
  }
  getGlobalMenus$() {
    return this.menuService.getGlobalMenus$();
  }
  getDedicatedMenus$() {
    return this.menuService.getDedicatedMenus$();
  }
  // ========== DELEGATE A MENU DISH SERVICE ==========
  get menuDishes$() {
    return this.menuDishService.data$;
  }
  get menuDishesLoading$() {
    return this.menuDishService.loading$;
  }
  get menuDishesError$() {
    return this.menuDishService.error$;
  }
  loadMenuDishes(menuId) {
    return __async(this, null, function* () {
      return menuId ? this.menuDishService.loadData({ menu_id: menuId }) : this.menuDishService.loadData();
    });
  }
  getDishesByMenu$(menuId) {
    return this.menuDishService.getDishesByMenu$(menuId);
  }
  getDishesByMenuOrdered$(menuId) {
    return this.menuDishService.getDishesByMenuOrdered$(menuId);
  }
  addDishToMenu(menuId, dishId, categoryId, displayOrder = 0) {
    return __async(this, null, function* () {
      return this.menuDishService.addDishToMenu(menuId, dishId, categoryId, displayOrder);
    });
  }
  removeDishFromMenu(menuDishId) {
    return __async(this, null, function* () {
      return this.menuDishService.removeDishFromMenu(menuDishId);
    });
  }
  updateDishOrder(menuDishId, displayOrder) {
    return __async(this, null, function* () {
      return this.menuDishService.updateDishOrder(menuDishId, displayOrder);
    });
  }
  getDishesWithDetailsByMenu(menuId) {
    return __async(this, null, function* () {
      return this.menuDishService.getDishesWithDetailsByMenu(menuId);
    });
  }
  removeAllDishesFromMenu(menuId) {
    return __async(this, null, function* () {
      return this.menuDishService.removeAllDishesFromMenu(menuId);
    });
  }
  moveDishInMenu(menuId, dishId, direction) {
    return __async(this, null, function* () {
      return this.menuDishService.moveDishInMenu(menuId, dishId, direction);
    });
  }
  reorderDishes(menuId, dishIds) {
    return __async(this, null, function* () {
      return this.menuDishService.reorderDishes(menuId, dishIds);
    });
  }
  initializeOrderIndexes(menuId) {
    return __async(this, null, function* () {
      return this.menuDishService.initializeOrderIndexes(menuId);
    });
  }
  // ========== METODI DI UTILITÀ ==========
  getCurrentMenus() {
    return this.menuService.data;
  }
  getCurrentMenuDishes() {
    return this.menuDishService.data;
  }
  isDishInMenu(menuId, dishId) {
    return this.menuDishService.data.some((md) => md.menu_id === menuId && md.dish_id === dishId && md.is_active);
  }
  getNextDisplayOrder(menuId) {
    const dishes = this.menuDishService.data.filter((md) => md.menu_id === menuId);
    return dishes.length ? Math.max(...dishes.map((d) => d.display_order)) + 1 : 0;
  }
  refreshAll() {
    return __async(this, null, function* () {
      yield Promise.all([this.loadMenus(), this.loadMenuDishes()]);
    });
  }
  // 🔥 Manteniamo anche i vecchi alias per compatibilità (opzionale)
  loadData() {
    return __async(this, null, function* () {
      return this.loadMenus();
    });
  }
  get data$() {
    return this.menus$;
  }
  delete(id) {
    return __async(this, null, function* () {
      return this.deleteMenu(id);
    });
  }
  /**
  * Aggiorna un piatto nel menu (menu_dish)
  * Mantenuto per compatibilità con il vecchio codice
  */
  updateMenuDish(id, updates) {
    return __async(this, null, function* () {
      return this.menuDishService.update(id, updates);
    });
  }
  static \u0275fac = function MenuManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuManagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuManagementService, factory: _MenuManagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuManagementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MenuManagementService
};
//# sourceMappingURL=chunk-UIFQ2GZI.js.map
