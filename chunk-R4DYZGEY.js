import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Ordini/comanda.service.ts
var ComandaService = class _ComandaService extends BaseService {
  getTableName() {
    return "comande";
  }
  hasRestaurantId() {
    return true;
  }
  // 🆕 Crea comanda per order header
  createForOrderHeader(orderHeaderId, comandaNumber) {
    return __async(this, null, function* () {
      try {
        if (orderHeaderId.startsWith("draft-")) {
          console.error("\u274C Tentativo di creare comanda per order header draft:", orderHeaderId);
          console.log("\u26A0\uFE0F Questa operazione dovrebbe essere gestita in locale fino al salvataggio");
          return null;
        }
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.error("\u274C Nessun restaurantId");
          return null;
        }
        const { data: orderHeader, error: headerError } = yield this.supabaseService.getSupabaseClient().from("order_headers").select("*").eq("id", orderHeaderId).single();
        if (headerError) {
          console.error("\u274C Errore recupero order header:", headerError);
          return null;
        }
        if (!orderHeader) {
          console.error("\u274C Order header non trovato");
          return null;
        }
        const nextComanda = comandaNumber || (yield this.getNextComandaNumber(orderHeaderId));
        const orderNumber = `CMD-${orderHeader.order_number}-${nextComanda}`;
        const newComanda = {
          order_number: orderNumber,
          restaurant_id: restaurantId,
          order_header_id: orderHeaderId,
          tavolata_id: orderHeaderId,
          comanda_number: nextComanda,
          table_id: orderHeader.table_id,
          customer_name: orderHeader.customer_name || "Cliente",
          customer_phone: orderHeader.customer_phone || "",
          status: "ordered",
          subtotal: 0,
          tax_amount: 0,
          discount_amount: 0,
          total_amount: 0,
          customer_notes: "",
          order_type: "dine_in"
        };
        console.log("\u{1F4E4} Creazione comanda nel database:", newComanda);
        const { data: comanda, error: insertError } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(newComanda).select().single();
        if (insertError) {
          console.error("\u274C Errore creazione comanda:", insertError);
          return null;
        }
        console.log("\u2705 Comanda creata con successo:", comanda.id);
        return comanda;
      } catch (error) {
        console.error("\u{1F4A5} ERRORE createForOrderHeader:", error);
        return null;
      }
    });
  }
  getNextComandaNumber(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        if (orderHeaderId.startsWith("draft-")) {
          return 1;
        }
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("comanda_number").eq("order_header_id", orderHeaderId).order("comanda_number", { ascending: false }).limit(1);
        if (error)
          throw error;
        return data && data.length > 0 ? data[0].comanda_number + 1 : 1;
      } catch (error) {
        console.error("Errore calcolo prossima comanda:", error);
        return 1;
      }
    });
  }
  // 📊 Carica comande per order header (tavolata)
  loadByOrderHeaderId(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        if (orderHeaderId.startsWith("draft-")) {
          console.log("\u26A0\uFE0F Tentativo di caricare comande per draft order header");
          return [];
        }
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("order_header_id", orderHeaderId).order("comanda_number", { ascending: true });
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("Errore caricamento comande:", error);
        return [];
      }
    });
  }
  updateStatus(comandaId, status) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update({
          status,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", comandaId);
        return !error;
      } catch (error) {
        console.error("Errore aggiornamento stato comanda:", error);
        return false;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ComandaService_BaseFactory;
    return function ComandaService_Factory(__ngFactoryType__) {
      return (\u0275ComandaService_BaseFactory || (\u0275ComandaService_BaseFactory = \u0275\u0275getInheritedFactory(_ComandaService)))(__ngFactoryType__ || _ComandaService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ComandaService, factory: _ComandaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComandaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/Ordini/order-item.service.ts
var OrderItemService = class _OrderItemService extends BaseService {
  getTableName() {
    return "order_items";
  }
  hasRestaurantId() {
    return true;
  }
  // 🆕 Aggiungi piatto a una comanda - SENZA total_price
  addItemToComanda(comandaId, dishId, quantity = 1, unitPrice, itemNotes = "") {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F504} OrderItemService.addItemToComanda chiamato", {
          comandaId,
          dishId,
          quantity,
          unitPrice
        });
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.error("\u274C Nessun restaurantId");
          return null;
        }
        const orderItemData = {
          order_id: comandaId,
          // FK a comande.id
          dish_id: dishId,
          quantity,
          unit_price: unitPrice,
          // total_price: unitPrice * quantity,  // RIMOSSO - sarà calcolato dal database
          item_notes: itemNotes || "",
          status: "ordered",
          restaurant_id: restaurantId
          // Se la colonna esiste
        };
        console.log("\u{1F4E4} Insert order item con dati (senza total_price):", orderItemData);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(orderItemData).select().single();
        if (error) {
          console.error("\u274C ERRORE INSERT:", {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          return null;
        }
        console.log("\u2705 Order item inserito:", data);
        const dishName = yield this.getDishName(dishId);
        return __spreadProps(__spreadValues({}, data), {
          dish_name: dishName,
          comanda_id: data.order_id,
          total_price: unitPrice * quantity
          // Calcolato localmente per l'UI
        });
      } catch (error) {
        console.error("\u{1F4A5} Errore critico:", error);
        return null;
      }
    });
  }
  getDishName(dishId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("dishes").select("name").eq("id", dishId).single();
        if (error || !data) {
          console.warn("\u26A0\uFE0F Impossibile recuperare nome piatto:", error);
          return "Piatto";
        }
        return data.name;
      } catch (error) {
        console.error("Errore recupero nome piatto:", error);
        return "Piatto";
      }
    });
  }
  // 📋 Carica piatti per comanda
  loadByComandaId(comandaId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("order_items").select(`
          *,
          dish:dish_id(name)
        `).eq("order_id", comandaId).order("created_at", { ascending: true });
        if (error)
          throw error;
        return (data || []).map((item) => __spreadProps(__spreadValues({}, item), {
          dish_name: item.dish?.name || "Piatto",
          comanda_id: item.order_id
        }));
      } catch (error) {
        console.error("Errore caricamento order_items:", error);
        return [];
      }
    });
  }
  // 🔄 Aggiorna quantità - SENZA aggiornare total_price (sarà calcolato dal DB)
  updateQuantity(itemId, quantity) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update({
          quantity,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
          // Non inviare total_price - il DB lo calcolerà
        }).eq("id", itemId);
        if (error)
          throw error;
        return true;
      } catch (error) {
        console.error("Errore aggiornamento quantit\xE0:", error);
        return false;
      }
    });
  }
  // Delete() per non usare restaurant_id
  delete(itemId) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).delete().eq("id", itemId);
        if (error)
          throw error;
        const currentData = this.dataSubject.value;
        const updatedData = currentData.filter((item) => item.id !== itemId);
        this.dataSubject.next(updatedData);
        return true;
      } catch (error) {
        console.error("Errore eliminazione order item:", error);
        this.errorSubject.next(error.message);
        return false;
      }
    });
  }
  // 🔄 Aggiorna stato di un item
  updateItemStatus(itemId, status) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update({
          status,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", itemId);
        if (error)
          throw error;
        return true;
      } catch (error) {
        console.error("Errore aggiornamento stato item:", error);
        return false;
      }
    });
  }
  // 🔄 Aggiorna tutti gli items di una comanda
  updateAllItemsStatus(comandaId, status) {
    return __async(this, null, function* () {
      try {
        const items = yield this.loadByComandaId(comandaId);
        let allSuccess = true;
        for (const item of items) {
          const success = yield this.updateItemStatus(item.id, status);
          if (!success)
            allSuccess = false;
        }
        return allSuccess;
      } catch (error) {
        console.error("Errore aggiornamento stati piatti:", error);
        return false;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OrderItemService_BaseFactory;
    return function OrderItemService_Factory(__ngFactoryType__) {
      return (\u0275OrderItemService_BaseFactory || (\u0275OrderItemService_BaseFactory = \u0275\u0275getInheritedFactory(_OrderItemService)))(__ngFactoryType__ || _OrderItemService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderItemService, factory: _OrderItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderItemService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/Ordini/order-helper.service.ts
var OrderHelperService = class _OrderHelperService {
  orderHeaderService = inject(OrderHeaderService);
  comandaService = inject(ComandaService);
  orderItemService = inject(OrderItemService);
  // 🟢 Occupa tavolo: crea tavolata + prima comanda
  occupyTable(tableId, customerName) {
    return __async(this, null, function* () {
      try {
        const orderHeader = yield this.orderHeaderService.createForTable(tableId, customerName);
        if (!orderHeader) {
          return { orderHeader: null, comanda: null };
        }
        const comanda = yield this.comandaService.createForOrderHeader(orderHeader.id, 1);
        return { orderHeader, comanda };
      } catch (error) {
        console.error("\u274C Errore occupazione tavolo:", error);
        return { orderHeader: null, comanda: null };
      }
    });
  }
  // 🟢 Carica tutta la struttura: order header → comande → order items
  loadFullOrder(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        const orderHeader = yield this.orderHeaderService.getByIdAsync(orderHeaderId);
        if (!orderHeader)
          return null;
        const comande = yield this.comandaService.loadByOrderHeaderId(orderHeaderId);
        for (const comanda of comande) {
          const orderItems = yield this.orderItemService.loadByComandaId(comanda.id);
          comanda.order_items = orderItems;
        }
        orderHeader.comande = comande;
        return orderHeader;
      } catch (error) {
        console.error("\u274C Errore caricamento ordine completo:", error);
        return null;
      }
    });
  }
  // 🟢 Aggiungi piatto (gestisce automaticamente se manca tavolata/comanda)
  addDishToTable(tableId, dishId, dishName, unitPrice, quantity = 1, notes = "") {
    return __async(this, null, function* () {
      try {
        let orderHeader = yield this.orderHeaderService.getActiveByTable(tableId);
        if (!orderHeader) {
          const result = yield this.occupyTable(tableId, "Cliente");
          if (!result.orderHeader || !result.comanda)
            return false;
          orderHeader = result.orderHeader;
        }
        let comande = yield this.comandaService.loadByOrderHeaderId(orderHeader.id);
        let activeComanda = comande.find((c) => c.status !== "cancelled");
        if (!activeComanda) {
          const newComanda = yield this.comandaService.createForOrderHeader(orderHeader.id);
          if (!newComanda)
            return false;
          activeComanda = newComanda;
        }
        const orderItem = yield this.orderItemService.addItemToComanda(activeComanda.id, dishId, quantity, unitPrice, notes);
        return !!orderItem;
      } catch (error) {
        console.error("\u274C Errore aggiunta piatto:", error);
        return false;
      }
    });
  }
  // 🟢 Crea nuova comanda per una tavolata esistente
  createComandaForOrderHeader(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        return yield this.comandaService.createForOrderHeader(orderHeaderId);
      } catch (error) {
        console.error("\u274C Errore creazione comanda:", error);
        return null;
      }
    });
  }
  // 🟢 Aggiorna quantità di un piatto
  updateItemQuantity(itemId, quantity) {
    return __async(this, null, function* () {
      try {
        return yield this.orderItemService.updateQuantity(itemId, quantity);
      } catch (error) {
        console.error("\u274C Errore aggiornamento quantit\xE0:", error);
        return false;
      }
    });
  }
  // 🟢 Rimuovi piatto
  removeItem(itemId) {
    return __async(this, null, function* () {
      try {
        return yield this.orderItemService.delete(itemId);
      } catch (error) {
        console.error("\u274C Errore rimozione piatto:", error);
        return false;
      }
    });
  }
  // 🟢 Chiudi tavolata
  closeTavolata(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        return yield this.orderHeaderService.closeHeader(orderHeaderId);
      } catch (error) {
        console.error("\u274C Errore chiusura tavolata:", error);
        return false;
      }
    });
  }
  // 🟢 Aggiorna stato comanda
  updateComandaStatus(comandaId, status) {
    return __async(this, null, function* () {
      try {
        const validStatuses = ["ordered", "waiting", "preparing", "ready", "served", "cancelled"];
        if (!validStatuses.includes(status)) {
          console.error("\u274C Stato non valido:", status);
          return false;
        }
        return yield this.comandaService.update(comandaId, {
          status,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (error) {
        console.error("\u274C Errore aggiornamento stato comanda:", error);
        return false;
      }
    });
  }
  static \u0275fac = function OrderHelperService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderHelperService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderHelperService, factory: _OrderHelperService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHelperService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/Ordini/order-header.service.ts
var OrderHeaderService = class _OrderHeaderService extends BaseService {
  getTableName() {
    return "order_headers";
  }
  hasRestaurantId() {
    return true;
  }
  // 🆕 Crea tavolata per tavolo
  createForTable(tableId, customerName) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.error("\u274C Restaurant ID non trovato");
          return null;
        }
        const orderNumber = yield this.generateOrderNumber();
        const newHeader = {
          restaurant_id: restaurantId,
          table_id: tableId,
          order_number: orderNumber,
          status: "active",
          customer_name: customerName || "Cliente",
          total_amount: 0
        };
        console.log("\u{1F4E4} Creazione OrderHeader (tavolata):", newHeader);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(newHeader).select().single();
        if (error) {
          console.error("\u274C Errore creazione order header:", error);
          return null;
        }
        return data;
      } catch (error) {
        console.error("\u274C Errore creazione order header:", error);
        return null;
      }
    });
  }
  // 🔢 Genera numero ordine univoco
  generateOrderNumber() {
    return __async(this, null, function* () {
      const date = /* @__PURE__ */ new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const random = Math.floor(Math.random() * 1e3).toString().padStart(3, "0");
      return `TAV-${year}${month}${day}-${random}`;
    });
  }
  // 📊 Ottiene OrderHeader attivo per un tavolo (SENZA JOIN COMPLESSI)
  getActiveByTable(tableId) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("order_headers").select("*").eq("restaurant_id", restaurantId).eq("table_id", tableId).in("status", ["active", "open", "pending"]).order("created_at", { ascending: false }).limit(1);
        if (error) {
          console.error("\u274C Errore query order_headers:", error);
          return null;
        }
        return data && data.length > 0 ? data[0] : null;
      } catch (error) {
        console.error("\u274C Errore getActiveByTable:", error);
        return null;
      }
    });
  }
  // 🆕 Chiudi tavolata
  closeTavolata(orderHeaderId) {
    return __async(this, null, function* () {
      return yield this.update(orderHeaderId, {
        status: "completed",
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    });
  }
  // 🆕 Get by ID semplice (versione async)
  getByIdAsync(id) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("id", id).single();
        if (error)
          throw error;
        return data;
      } catch (error) {
        console.error("Errore getById:", error);
        return null;
      }
    });
  }
  // 🆕 Chiudi tutti gli order headers attivi per un tavolo
  closeAllActiveHeadersForTable(tableId) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update({
          status: "completed",
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("restaurant_id", restaurantId).eq("table_id", tableId).eq("status", "active");
        return !error;
      } catch (error) {
        console.error("Errore chiusura order headers:", error);
        return false;
      }
    });
  }
  closeHeader(headerId) {
    return __async(this, null, function* () {
      return yield this.update(headerId, {
        status: "completed",
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    });
  }
  // 🆕 Alias per getActiveByTable (per mantenere compatibilità)
  getActiveOrderHeaderByTable(tableId) {
    return __async(this, null, function* () {
      return this.getActiveByTable(tableId);
    });
  }
  // 🆕 Carica order header con dettagli completi
  loadWithDetails(id) {
    return __async(this, null, function* () {
      try {
        const orderHelper = inject(OrderHelperService);
        return yield orderHelper.loadFullOrder(id);
      } catch (error) {
        console.error("Errore loadWithDetails:", error);
        return null;
      }
    });
  }
  // 🆕 Conta gli order items per un tavolo
  getTableOrderItemsCount(tableId) {
    return __async(this, null, function* () {
      try {
        const activeHeader = yield this.getActiveByTable(tableId);
        if (!activeHeader)
          return 0;
        const orderHelper = inject(OrderHelperService);
        const fullHeader = yield orderHelper.loadFullOrder(activeHeader.id);
        if (!fullHeader || !fullHeader.comande)
          return 0;
        let totalItems = 0;
        for (const comanda of fullHeader.comande) {
          if (comanda.order_items) {
            totalItems += comanda.order_items.length;
          }
        }
        return totalItems;
      } catch (error) {
        console.error("Errore getTableOrderItemsCount:", error);
        return 0;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OrderHeaderService_BaseFactory;
    return function OrderHeaderService_Factory(__ngFactoryType__) {
      return (\u0275OrderHeaderService_BaseFactory || (\u0275OrderHeaderService_BaseFactory = \u0275\u0275getInheritedFactory(_OrderHeaderService)))(__ngFactoryType__ || _OrderHeaderService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderHeaderService, factory: _OrderHeaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHeaderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ComandaService,
  OrderItemService,
  OrderHelperService,
  OrderHeaderService
};
//# sourceMappingURL=chunk-R4DYZGEY.js.map
