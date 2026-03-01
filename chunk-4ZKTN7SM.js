import {
  SupplierAuthService
} from "./chunk-JIPGK6YB.js";
import {
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

// src/app/services/supplier-products.service.ts
var SupplierProductsService = class _SupplierProductsService {
  supabaseService = inject(SupabaseService);
  supplierAuthService = inject(SupplierAuthService);
  productsSubject = new BehaviorSubject([]);
  products$ = this.productsSubject.asObservable();
  loadSupplierProducts() {
    return __async(this, null, function* () {
      try {
        const supplier = this.supplierAuthService.getSupplierProfile();
        if (!supplier) {
          console.error("No supplier profile found");
          return;
        }
        const { data: products, error } = yield this.supabaseService.getSupabaseClient().from("supplier_products").select(`
          *,
          units (name, symbol),
          ingredients (name)
        `).eq("supplier_id", supplier.id).order("product_name");
        if (error) {
          console.error("Error loading supplier products:", error);
          return;
        }
        this.productsSubject.next(products || []);
      } catch (error) {
        console.error("Error in loadSupplierProducts:", error);
      }
    });
  }
  createProduct(product) {
    return __async(this, null, function* () {
      try {
        const supplier = this.supplierAuthService.getSupplierProfile();
        if (!supplier) {
          console.error("No supplier profile found");
          return null;
        }
        const productWithSupplier = __spreadProps(__spreadValues({}, product), {
          supplier_id: supplier.id
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("supplier_products").insert(productWithSupplier).select().single();
        if (error)
          throw error;
        yield this.loadSupplierProducts();
        return data;
      } catch (error) {
        console.error("Error creating supplier product:", error);
        return null;
      }
    });
  }
  updateProduct(id, updates) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from("supplier_products").update(updates).eq("id", id);
        if (error)
          throw error;
        yield this.loadSupplierProducts();
        return true;
      } catch (error) {
        console.error("Error updating supplier product:", error);
        return false;
      }
    });
  }
  deleteProduct(id) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from("supplier_products").delete().eq("id", id);
        if (error)
          throw error;
        yield this.loadSupplierProducts();
        return true;
      } catch (error) {
        console.error("Error deleting supplier product:", error);
        return false;
      }
    });
  }
  getProducts() {
    return this.productsSubject.value;
  }
  getAvailableProducts() {
    return this.productsSubject.value.filter((product) => product.is_available);
  }
  getProductById(id) {
    return this.productsSubject.value.find((product) => product.id === id);
  }
  static \u0275fac = function SupplierProductsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierProductsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupplierProductsService, factory: _SupplierProductsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierProductsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SupplierProductsService
};
//# sourceMappingURL=chunk-4ZKTN7SM.js.map
