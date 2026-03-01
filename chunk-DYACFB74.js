import {
  AuthService,
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

// src/app/services/supplier-auth.service.ts
var SupplierAuthService = class _SupplierAuthService {
  supabaseService = inject(SupabaseService);
  authService = inject(AuthService);
  supplierProfileSubject = new BehaviorSubject(null);
  supplierProfile$ = this.supplierProfileSubject.asObservable();
  loadSupplierProfile() {
    return __async(this, null, function* () {
      try {
        const user = this.authService.currentUserValue;
        if (!user) {
          console.error("No user authenticated");
          return;
        }
        const { data: supplier, error } = yield this.supabaseService.getSupabaseClient().from("suppliers").select("*").eq("user_id", user.id).single();
        if (error) {
          console.error("Error loading supplier profile:", error);
          return;
        }
        this.supplierProfileSubject.next(supplier);
      } catch (error) {
        console.error("Error in loadSupplierProfile:", error);
      }
    });
  }
  getSupplierRestaurants() {
    return __async(this, null, function* () {
      try {
        const supplier = this.supplierProfileSubject.value;
        if (!supplier)
          return [];
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("ingredients").select(`
          restaurant_id,
          restaurants!inner (
            id,
            name,
            email,
            phone,
            address
          )
        `).eq("supplier_id", supplier.id).not("restaurant_id", "is", null);
        if (error) {
          console.error("Error loading supplier restaurants:", error);
          return [];
        }
        const restaurantData = data;
        const restaurants = restaurantData.map((item) => item.restaurants);
        const distinctRestaurants = restaurants.filter((restaurant, index, self) => index === self.findIndex((r) => r.id === restaurant.id));
        return distinctRestaurants;
      } catch (error) {
        console.error("Error loading supplier restaurants:", error);
        return [];
      }
    });
  }
  getSupplierIngredients() {
    return __async(this, null, function* () {
      try {
        const supplier = this.supplierProfileSubject.value;
        if (!supplier)
          return [];
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("ingredients").select(`
          id,
          name,
          description,
          current_stock,
          minimum_stock,
          cost_per_unit,
          created_at,
          restaurant_id,
          restaurants!inner (name)
        `).eq("supplier_id", supplier.id).order("name");
        if (error) {
          console.error("Error loading supplier ingredients:", error);
          return [];
        }
        const ingredientsData = data;
        return ingredientsData.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          current_stock: item.current_stock,
          minimum_stock: item.minimum_stock,
          cost_per_unit: item.cost_per_unit,
          restaurant_name: item.restaurants.name || "N/D",
          restaurant_id: item.restaurant_id,
          created_at: item.created_at
        }));
      } catch (error) {
        console.error("Error loading supplier ingredients:", error);
        return [];
      }
    });
  }
  getSupplierProfile() {
    return this.supplierProfileSubject.value;
  }
  // Aggiorna profilo fornitore
  updateSupplierProfile(updates) {
    return __async(this, null, function* () {
      try {
        const supplier = this.supplierProfileSubject.value;
        if (!supplier)
          return false;
        const { error } = yield this.supabaseService.getSupabaseClient().from("suppliers").update(updates).eq("id", supplier.id);
        if (error)
          throw error;
        yield this.loadSupplierProfile();
        return true;
      } catch (error) {
        console.error("Error updating supplier profile:", error);
        return false;
      }
    });
  }
  static \u0275fac = function SupplierAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierAuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupplierAuthService, factory: _SupplierAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SupplierAuthService
};
//# sourceMappingURL=chunk-DYACFB74.js.map
