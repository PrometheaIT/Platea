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

// src/app/services/supplier.service.ts
var SupplierService = class _SupplierService {
  supabaseService = inject(SupabaseService);
  authService = inject(AuthService);
  // Inietta AuthService
  suppliersSubject = new BehaviorSubject([]);
  suppliers$ = this.suppliersSubject.asObservable();
  loadSuppliers() {
    return __async(this, null, function* () {
      try {
        const user = this.authService.currentUserValue;
        if (!user) {
          console.error("No user authenticated");
          return;
        }
        const { data: restaurants, error: restaurantError } = yield this.supabaseService.getSupabaseClient().from("restaurants").select("id").eq("owner_id", user.id).limit(1);
        if (restaurantError || !restaurants?.length) {
          console.error("\u274C No restaurant found for user:", user.id);
          return;
        }
        const restaurantId = restaurants[0].id;
        const { data: suppliers, error } = yield this.supabaseService.getSupabaseClient().from("suppliers").select("*").eq("restaurant_id", restaurantId).order("company_name");
        if (error)
          throw error;
        this.suppliersSubject.next(suppliers || []);
      } catch (error) {
        console.error("Error loading suppliers:", error);
      }
    });
  }
  createSupplier(supplier) {
    return __async(this, null, function* () {
      try {
        const user = this.authService.currentUserValue;
        if (!user) {
          console.error("No user authenticated");
          return null;
        }
        const { data: restaurants, error: restaurantError } = yield this.supabaseService.getSupabaseClient().from("restaurants").select("id").eq("owner_id", user.id).limit(1);
        if (restaurantError || !restaurants?.length) {
          console.error("\u274C No restaurant found for user:", user.id);
          return null;
        }
        const restaurantId = restaurants[0].id;
        const supplierWithRestaurant = __spreadProps(__spreadValues({}, supplier), {
          restaurant_id: restaurantId,
          // user_id può essere null per fornitori manuali
          user_id: supplier.user_id || null,
          // Assicurati che is_platform_supplier e is_approved siano sempre definiti
          is_platform_supplier: supplier.is_platform_supplier ?? false,
          is_approved: supplier.is_approved ?? true
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("suppliers").insert(supplierWithRestaurant).select().single();
        if (error)
          throw error;
        yield this.loadSuppliers();
        return data;
      } catch (error) {
        console.error("Error creating supplier:", error);
        return null;
      }
    });
  }
  getSuppliers() {
    return this.suppliersSubject.value;
  }
  getSupplierById(id) {
    return this.suppliersSubject.value.find((s) => s.id === id);
  }
  static \u0275fac = function SupplierService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupplierService, factory: _SupplierService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SupplierService
};
//# sourceMappingURL=chunk-UUUZOHF7.js.map
