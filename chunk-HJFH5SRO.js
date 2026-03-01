import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import {
  Injectable,
  Observable,
  catchError,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Piatti/category.service.ts
var CategoryService = class _CategoryService extends BaseService {
  getTableName() {
    return "categories";
  }
  // Metodo pubblico per ottenere restaurantId (se serve)
  getRestaurantId() {
    return __async(this, null, function* () {
      return yield this.getCurrentRestaurantId();
    });
  }
  getCategoriesForOrderEditor() {
    return this.data$.pipe(catchError((error) => {
      console.warn("\u26A0\uFE0F Errore categorie, usando default:", error);
      return of(this.getDefaultCategories());
    }));
  }
  getDefaultCategories() {
    return [
      { id: "antipasti", name: "Antipasti", order_index: 1, is_default: false, restaurant_id: "" },
      { id: "primi", name: "Primi", order_index: 2, is_default: false, restaurant_id: "" },
      { id: "secondi", name: "Secondi", order_index: 3, is_default: false, restaurant_id: "" },
      { id: "dessert", name: "Dessert", order_index: 4, is_default: false, restaurant_id: "" },
      { id: "bevande", name: "Bevande", order_index: 5, is_default: false, restaurant_id: "" }
    ];
  }
  // ✅ NUOVO: Sovrascrivi loadData per gestire errori 403
  loadData() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.warn("\u26A0\uFE0F Nessun restaurantId trovato per CategoryService");
          this.dataSubject.next([]);
          return;
        }
        console.log("\u{1F4CB} Caricamento categorie per restaurant:", restaurantId);
        this.loadingService.start();
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).order("order_index", { ascending: true });
        if (error) {
          if (error.code === "42501" || error.message.includes("403")) {
            console.error("\u274C Errore autorizzazione (403) per categorie:", error.message);
            this.errorSubject.next("Non hai i permessi per visualizzare le categorie");
            this.dataSubject.next(this.getDefaultCategories());
          } else {
            throw error;
          }
        } else {
          console.log(`\u2705 Categorie caricate: ${data?.length || 0}`);
          this.dataSubject.next(data || []);
        }
      } catch (error) {
        console.error("\u274C Errore caricamento categorie:", error);
        this.errorSubject.next(error.message || "Errore caricamento categorie");
        this.dataSubject.next(this.getDefaultCategories());
      } finally {
        this.loadingService.stop();
      }
    });
  }
  getCategories() {
    return this.dataSubject.value;
  }
  // ✅ NUOVO: Metodo specifico per order-editor
  getCategoriesForEditor() {
    return this.data$.pipe(catchError((error) => {
      console.warn("\u26A0\uFE0F Errore categorie, usando fallback:", error);
      return of(this.getDefaultCategories());
    }));
  }
  // Metodo per creare categoria (semplificato)
  createCategory(categoryData) {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F4DD} Creazione categoria:", categoryData);
        if (!categoryData.name || categoryData.name.trim() === "") {
          this.errorSubject.next("Il nome della categoria \xE8 obbligatorio");
          return null;
        }
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.error("\u274C Nessun restaurantId trovato");
          this.errorSubject.next("Nessun ristorante selezionato");
          return null;
        }
        let orderIndex = categoryData.order_index;
        if (orderIndex === void 0 || orderIndex === null) {
          try {
            const { data: data2, error: error2 } = yield this.supabaseService.getSupabaseClient().from("categories").select("order_index").eq("restaurant_id", restaurantId).order("order_index", { ascending: false }).limit(1);
            if (!error2 && data2 && data2.length > 0) {
              orderIndex = data2[0].order_index + 1;
            } else {
              orderIndex = 1;
            }
          } catch (error2) {
            console.warn("\u26A0\uFE0F Errore calcolo order_index, usando 1:", error2);
            orderIndex = 1;
          }
        }
        const categoryToInsert = {
          name: categoryData.name.trim(),
          description: categoryData.description?.trim() || null,
          is_default: categoryData.is_default || false,
          order_index: orderIndex,
          // Usa quello calcolato o fornito
          restaurant_id: restaurantId,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        console.log("\u{1F4E4} Inserimento categoria:", categoryToInsert);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("categories").insert(categoryToInsert).select().single();
        if (error) {
          console.error("\u{1F4A5} [ERROR] Errore Supabase:", error);
          this.errorSubject.next(error.message || "Errore creazione categoria");
          return null;
        }
        console.log("\u2705 Categoria creata:", data);
        yield this.loadData();
        return data;
      } catch (error) {
        console.error("\u{1F4A5} Errore inatteso creazione categoria:", error);
        this.errorSubject.next(error.message || "Errore inatteso");
        return null;
      }
    });
  }
  // Metodo alias per compatibilità
  createCategoryForCurrentUser(categoryData) {
    return __async(this, null, function* () {
      return this.createCategory(categoryData);
    });
  }
  getRestaurantId$() {
    return new Observable((subscriber) => {
      this.getRestaurantId().then((id) => {
        subscriber.next(id);
        subscriber.complete();
      }).catch((err) => subscriber.error(err));
    });
  }
  getNextAvailableOrderIndex() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return 0;
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("categories").select("order_index").eq("restaurant_id", restaurantId).order("order_index", { ascending: false }).limit(1);
        if (error) {
          console.warn("\u26A0\uFE0F Errore recupero ultimo order_index:", error);
          return 0;
        }
        if (data && data.length > 0) {
          return (data[0].order_index || 0) + 1;
        }
        return 0;
      } catch (error) {
        console.error("\u274C Errore in getNextAvailableOrderIndex:", error);
        return 0;
      }
    });
  }
  getCategoryOrderList() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("categories").select("id, name, order_index").eq("restaurant_id", restaurantId).order("order_index", { ascending: true });
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Errore recupero ordine categorie:", error);
        return [];
      }
    });
  }
  updateCategoriesOrder(updates) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const normalizedUpdates = updates.map((update) => __spreadProps(__spreadValues({}, update), {
          order_index: Math.max(1, update.order_index)
        }));
        console.log("\u{1F4E4} Aggiornamento ordine categorie:", normalizedUpdates);
        const updatePromises = normalizedUpdates.map((update) => this.supabaseService.getSupabaseClient().from("categories").update({
          order_index: update.order_index,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", update.id).eq("restaurant_id", restaurantId));
        const results = yield Promise.all(updatePromises);
        const hasError = results.some((result) => result.error);
        if (hasError) {
          console.error("\u274C Errore durante l'aggiornamento dell'ordine");
          return false;
        }
        yield this.loadData();
        console.log("\u2705 Ordine categorie aggiornato con successo");
        return true;
      } catch (error) {
        console.error("\u{1F4A5} Errore in updateCategoriesOrder:", error);
        return false;
      }
    });
  }
  // Metodo per aggiornare una singola categoria
  updateCategory(categoryId, data) {
    return __async(this, null, function* () {
      try {
        const { data: updatedCategory, error } = yield this.supabaseService.getSupabaseClient().from("categories").update(__spreadProps(__spreadValues({}, data), {
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        })).eq("id", categoryId).select().single();
        if (error)
          throw error;
        yield this.loadData();
        return updatedCategory;
      } catch (error) {
        console.error("\u274C Errore aggiornamento categoria:", error);
        return null;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CategoryService_BaseFactory;
    return function CategoryService_Factory(__ngFactoryType__) {
      return (\u0275CategoryService_BaseFactory || (\u0275CategoryService_BaseFactory = \u0275\u0275getInheritedFactory(_CategoryService)))(__ngFactoryType__ || _CategoryService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CategoryService
};
//# sourceMappingURL=chunk-HJFH5SRO.js.map
