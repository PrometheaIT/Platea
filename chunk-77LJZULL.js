import {
  AuthService,
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/Ordini/order-state.service.ts
var OrderStateService = class _OrderStateService {
  supabase = inject(SupabaseService).getSupabaseClient();
  authService = inject(AuthService);
  // Transizioni per ruolo KITCHEN
  kitchenTransitions = {
    "ordered": ["waiting", "out_of_stock"],
    "waiting": ["preparing", "ready", "out_of_stock"],
    "preparing": ["ready", "out_of_stock"],
    "ready": ["out_of_stock"],
    "out_of_stock": []
  };
  // Transizioni per ruolo WAITER
  waiterTransitions = {
    "ordered": ["waiting", "cancelled"],
    "waiting": ["preparing", "cancelled"],
    "preparing": ["ready", "cancelled"],
    "ready": ["served", "cancelled"],
    "served": [],
    "cancelled": ["ordered"]
  };
  canTransitionItem(currentStatus, targetStatus, role) {
    console.log(`\u{1F50D} Verifica transizione: ${currentStatus} \u2192 ${targetStatus} (${role})`);
    if (currentStatus === targetStatus)
      return false;
    if (targetStatus === "out_of_stock")
      return true;
    const transitions = role === "kitchen" ? this.kitchenTransitions : this.waiterTransitions;
    const allowed = transitions[currentStatus] || [];
    return allowed.includes(targetStatus);
  }
  updateItemStatus(itemId, status, comandaId) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const { error } = yield this.supabase.from("order_items").update({ status, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", itemId);
        if (!error && comandaId) {
          yield this.syncComandaStatus(comandaId);
        }
        return !error;
      } catch (error) {
        return false;
      }
    });
  }
  updateComandaStatus(comandaId, status) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        console.log(`\u{1F504} [OrderStateService] Aggiornamento comanda ${comandaId} a ${status}`);
        const { error: comandaError } = yield this.supabase.from("comande").update({
          status,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", comandaId).eq("restaurant_id", restaurantId);
        if (comandaError) {
          console.error("\u274C Errore aggiornamento comanda:", comandaError);
          return false;
        }
        const { data: comandaItems, error: fetchError } = yield this.supabase.from("order_items").select("id").eq("order_id", comandaId).eq("restaurant_id", restaurantId);
        if (fetchError) {
          console.error("\u274C Errore recupero items comanda:", fetchError);
          return false;
        }
        if (comandaItems && comandaItems.length > 0) {
          const itemIds = comandaItems.map((item) => item.id);
          const { error: itemsError } = yield this.supabase.from("order_items").update({
            status,
            updated_at: (/* @__PURE__ */ new Date()).toISOString()
          }).in("id", itemIds).eq("restaurant_id", restaurantId);
          if (itemsError) {
            console.error("\u274C Errore aggiornamento items:", itemsError);
            return false;
          }
          console.log(`\u2705 Aggiornati ${comandaItems.length} piatti per comanda ${comandaId}`);
        }
        return true;
      } catch (error) {
        console.error("\u274C Errore updateComandaStatus:", error);
        return false;
      }
    });
  }
  updateAllItemsInComanda(comandaId, status) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const { error } = yield this.supabase.from("order_items").update({
          status,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("order_id", comandaId).eq("restaurant_id", restaurantId);
        return !error;
      } catch (error) {
        console.error("\u274C Errore updateAllItemsInComanda:", error);
        return false;
      }
    });
  }
  syncComandaStatus(comandaId) {
    return __async(this, null, function* () {
      const restaurantId = yield this.authService.getCurrentRestaurantId();
      const { data: items, error } = yield this.supabase.from("order_items").select("status").eq("order_id", comandaId).eq("restaurant_id", restaurantId);
      if (error || !items || items.length === 0)
        return;
      const firstStatus = items[0].status;
      const allSame = items.every((item) => item.status === firstStatus);
      if (allSame) {
        yield this.supabase.from("comande").update({ status: firstStatus, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", comandaId);
      } else {
        const hasPreparing = items.some((item) => item.status === "preparing");
        if (hasPreparing) {
          yield this.supabase.from("comande").update({ status: "preparing", updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", comandaId);
        }
      }
    });
  }
  static \u0275fac = function OrderStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderStateService, factory: _OrderStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  OrderStateService
};
//# sourceMappingURL=chunk-77LJZULL.js.map
