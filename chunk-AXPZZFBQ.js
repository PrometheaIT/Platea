import {
  AuthService,
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/restaurant-public.service.ts
var RestaurantPublicService = class _RestaurantPublicService {
  supabaseService = inject(SupabaseService);
  auth = inject(AuthService);
  restaurantSubject = new BehaviorSubject(null);
  restaurant$ = this.restaurantSubject.asObservable();
  // ==================== RISTORANTE ====================
  loadRestaurantById(restaurantId) {
    return __async(this, null, function* () {
      try {
        const supabase = this.supabaseService.getSupabaseClient();
        const { data, error } = yield supabase.from("restaurants").select("*").eq("id", restaurantId).eq("is_active", true).single();
        if (error)
          throw error;
        if (data) {
          if (data.logo_url) {
            if (!data.logo_url.startsWith("http")) {
              const { data: { publicUrl } } = supabase.storage.from("restaurant-images").getPublicUrl(data.logo_url);
              data.logo_url = publicUrl;
            }
          }
          if (data.cover_image_url) {
            const { data: { publicUrl } } = supabase.storage.from("restaurant-images").getPublicUrl(data.cover_image_url);
            data.cover_image_url = publicUrl;
          }
        }
        return data;
      } catch (error) {
        console.error("\u274C Error loading restaurant by ID:", error);
        return null;
      }
    });
  }
  loadRestaurant(restaurantId) {
    return __async(this, null, function* () {
      const data = yield this.loadRestaurantById(restaurantId);
      this.restaurantSubject.next(data);
      return data;
    });
  }
  loadRestaurantsByCuisine(cuisineType) {
    return __async(this, null, function* () {
      try {
        let query = this.supabaseService.getSupabaseClient().from("restaurants").select("*").eq("is_active", true).order("name");
        if (cuisineType)
          query = query.eq("cuisine_types", cuisineType);
        const { data, error } = yield query;
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading restaurants:", error);
        return [];
      }
    });
  }
  // ==================== TURNI ====================
  loadRestaurantShifts(restaurantId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("shifts").select("*").eq("restaurant_id", restaurantId).eq("is_active", true).order("start_time");
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading restaurant shifts:", error);
        return [];
      }
    });
  }
  // ==================== PIATTI ====================
  loadRestaurantDishes(_0) {
    return __async(this, arguments, function* (restaurantId, options = {}) {
      const { includeCategories = false, onlyActive = true } = options;
      try {
        let query = this.supabaseService.getSupabaseClient().from("dishes").select(`
          id,
          name,
          description,
          base_price,
          delivery_price,
          takeaway_price,
          image_url,
          preparation_time,
          status,
          category_id,
          categories ( id, name )
        `).eq("restaurant_id", restaurantId);
        if (onlyActive) {
          query = query.eq("status", "available");
        }
        const { data, error } = yield query.order("name");
        if (error)
          throw error;
        return (data || []).map((item) => {
          const dish = {
            id: item.id,
            name: item.name,
            description: item.description,
            base_price: item.base_price,
            delivery_price: item.delivery_price,
            takeaway_price: item.takeaway_price,
            image_url: item.image_url,
            preparation_time: item.preparation_time,
            status: item.status,
            category_id: item.category_id
          };
          if (includeCategories && item.categories && item.categories.length > 0) {
            dish.category_name = item.categories[0].name;
          }
          return dish;
        });
      } catch (error) {
        console.error("\u274C Error loading restaurant dishes:", error);
        return [];
      }
    });
  }
  // ==================== CATEGORIE ====================
  loadRestaurantCategories(restaurantId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("categories").select("*").eq("restaurant_id", restaurantId).order("order_index");
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading restaurant categories:", error);
        return [];
      }
    });
  }
  // ==================== FOTO ====================
  loadRestaurantPhotos(restaurantId) {
    return __async(this, null, function* () {
      try {
        const supabase = this.supabaseService.getSupabaseClient();
        const { data, error } = yield supabase.from("restaurant_photos").select("file_path").eq("restaurant_id", restaurantId).order("display_order", { ascending: true });
        if (error)
          throw error;
        return (data || []).map((photo) => supabase.storage.from("restaurant-images").getPublicUrl(photo.file_path).data.publicUrl);
      } catch (error) {
        console.error("\u274C Error loading restaurant photos:", error);
        return [];
      }
    });
  }
  // ==================== MENU ====================
  loadRestaurantMenus(restaurantId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("menus").select("*").eq("restaurant_id", restaurantId).eq("is_active", true).order("display_order");
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading restaurant menus:", error);
        return [];
      }
    });
  }
  loadMenuDishes(menuId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("menu_dishes").select(`
        custom_price,
        dish:dishes!dish_id (
          id, name, description, base_price, delivery_price,
          takeaway_price, image_url, preparation_time, status, category_id
        )
      `).eq("menu_id", menuId).eq("is_active", true).order("display_order");
        if (error)
          throw error;
        return (data || []).filter((item) => item.dish && !item.dish.deleted_at).map((item) => __spreadProps(__spreadValues({}, item.dish), {
          // Se c'è un prezzo custom nel menu, sovrascrive il base_price
          base_price: item.custom_price ?? item.dish.base_price
        }));
      } catch (error) {
        console.error("\u274C Error loading menu dishes:", error);
        return [];
      }
    });
  }
  loadActiveMenuDishes(restaurantId) {
    return __async(this, null, function* () {
      try {
        const supabase = this.supabaseService.getSupabaseClient();
        const { data: menus, error: menusError } = yield supabase.from("menus").select("id").eq("restaurant_id", restaurantId).eq("is_active", true);
        if (menusError)
          throw menusError;
        if (!menus?.length)
          return [];
        const menuIds = menus.map((m) => m.id);
        const { data, error } = yield supabase.from("menu_dishes").select(`
          dish:dishes!dish_id (
            id, name, description, base_price, delivery_price,
            takeaway_price, image_url, preparation_time, status, category_id
          )
        `).in("menu_id", menuIds).eq("is_active", true);
        if (error)
          throw error;
        const dishesMap = /* @__PURE__ */ new Map();
        (data || []).forEach((item) => {
          if (item.dish && !item.dish.deleted_at && item.dish.status === "available") {
            dishesMap.set(item.dish.id, item.dish);
          }
        });
        return Array.from(dishesMap.values());
      } catch (error) {
        console.error("\u274C Error loading active menu dishes:", error);
        return [];
      }
    });
  }
  // ==================== MAPPE ====================
  getRestaurantFloorPlans(restaurantId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("restaurant_floor_plans").select("id, name").eq("restaurant_id", restaurantId).eq("is_active", true).order("name");
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading floor plans:", error);
        return [];
      }
    });
  }
  // ==================== METODI PER IL PROFILO (SCRITTURA) ====================
  /**
   * Ottiene l'ID del ristorante dell'utente attualmente loggato (tramite AuthService)
   */
  getCurrentRestaurantId() {
    return __async(this, null, function* () {
      return this.auth.getCurrentStaffRestaurantId();
    });
  }
  /**
   * Carica i dati del ristorante dell'utente loggato
   */
  loadCurrentRestaurant() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      return this.loadRestaurantById(restaurantId);
    });
  }
  /**
   * Aggiorna i dati del ristorante (solo i campi passati in `data`)
   */
  updateRestaurant(restaurantId, data) {
    return __async(this, null, function* () {
      try {
        const supabase = this.supabaseService.getSupabaseClient();
        const { error } = yield supabase.from("restaurants").update(__spreadProps(__spreadValues({}, data), { updated_at: (/* @__PURE__ */ new Date()).toISOString() })).eq("id", restaurantId);
        if (error) {
          console.error("\u274C Supabase update error:", error);
          throw error;
        }
        const current = this.restaurantSubject.value;
        if (current && current.id === restaurantId) {
          this.restaurantSubject.next(__spreadValues(__spreadValues({}, current), data));
        } else {
          yield this.loadRestaurant(restaurantId);
        }
        return true;
      } catch (error) {
        console.error("\u274C Error updating restaurant:", error);
        return false;
      }
    });
  }
  /**
   * Carica un nuovo logo per il ristorante corrente
   */
  uploadLogo(file) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const supabase = this.supabaseService.getSupabaseClient();
      const path = `restaurants/${restaurantId}/logos/${Date.now()}_${file.name}`;
      try {
        const { error: uploadError } = yield supabase.storage.from("restaurant-images").upload(path, file, { upsert: true });
        if (uploadError)
          throw uploadError;
        const { data: { publicUrl } } = supabase.storage.from("restaurant-images").getPublicUrl(path);
        const success = yield this.updateRestaurant(restaurantId, { logo_url: publicUrl });
        return success ? publicUrl : null;
      } catch (error) {
        console.error("\u274C Error uploading logo:", error);
        return null;
      }
    });
  }
  /**
   * Rimuove il logo del ristorante corrente (setta logo_url = null)
   */
  removeLogo() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return false;
      return this.updateRestaurant(restaurantId, { logo_url: null });
    });
  }
  /**
  * Geocodifica un indirizzo utilizzando l'API Nominatim di OpenStreetMap
  * @param address Indirizzo (es. "Via Roma 123")
  * @param province Sigla della provincia (es. "MI")
  * @returns Oggetto con latitudine e longitudine, oppure null se fallisce
  */
  geocodeAddress(address, province) {
    return __async(this, null, function* () {
      if (!address || !province)
        return null;
      const query = encodeURIComponent(`${address}, ${province}, Italia`);
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`;
      try {
        const response = yield fetch(url, {
          headers: {
            "User-Agent": "Platea/1.0"
            // Identifica la tua applicazione
          }
        });
        const data = yield response.json();
        if (Array.isArray(data) && data.length > 0) {
          const { lat, lon } = data[0];
          return { lat: parseFloat(lat), lng: parseFloat(lon) };
        }
        return null;
      } catch (error) {
        console.error("\u274C Errore geocoding:", error);
        return null;
      }
    });
  }
  static \u0275fac = function RestaurantPublicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantPublicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RestaurantPublicService, factory: _RestaurantPublicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantPublicService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  RestaurantPublicService
};
//# sourceMappingURL=chunk-AXPZZFBQ.js.map
