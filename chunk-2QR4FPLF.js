import {
  SupplierProductsService
} from "./chunk-NIISBO3G.js";
import {
  SupplierAuthService
} from "./chunk-7YKYTJOF.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import "./chunk-77JDNC7M.js";
import "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/supplier/dashboard/supplier-dashboard/supplier-dashboard.ts
function SupplierDashboard_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, " In attesa di approvazione ");
    \u0275\u0275elementEnd();
  }
}
function SupplierDashboard_div_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 9);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun ristorante cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "I ristoranti appariranno qui quando utilizzeranno i tuoi prodotti");
    \u0275\u0275elementEnd()();
  }
}
function SupplierDashboard_div_40_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "div", 22);
    \u0275\u0275element(8, "lucide-angular", 23);
    \u0275\u0275elementStart(9, "div", 24)(10, "span", 25);
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 22)(15, "span", 9);
    \u0275\u0275text(16, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 24)(18, "span", 25);
    \u0275\u0275text(19, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 26);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 22)(23, "span", 9);
    \u0275\u0275text(24, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 24)(26, "span", 25);
    \u0275\u0275text(27, "Indirizzo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 26);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const restaurant_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(restaurant_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(restaurant_r1.email || "N/D");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(restaurant_r1.phone || "N/D");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(restaurant_r1.address || "N/D");
  }
}
function SupplierDashboard_div_40_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, SupplierDashboard_div_40_div_6_div_1_Template, 30, 5, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.restaurants);
  }
}
function SupplierDashboard_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h2", 16)(2, "span", 9);
    \u0275\u0275text(3, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Ristoranti Clienti ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SupplierDashboard_div_40_div_5_Template, 7, 0, "div", 17)(6, SupplierDashboard_div_40_div_6_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.restaurants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.restaurants.length > 0);
  }
}
function SupplierDashboard_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Caricamento dati fornitore...");
    \u0275\u0275elementEnd()();
  }
}
var SupplierDashboard = class _SupplierDashboard {
  supplierAuthService = inject(SupplierAuthService);
  supplierProductsService = inject(SupplierProductsService);
  supplierProfile = null;
  ingredients = [];
  restaurants = [];
  products = [];
  isLoading = true;
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadData();
    });
  }
  loadData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield this.supplierAuthService.loadSupplierProfile();
        this.supplierAuthService.supplierProfile$.subscribe((profile) => {
          this.supplierProfile = profile;
        });
        this.ingredients = yield this.supplierAuthService.getSupplierIngredients();
        this.restaurants = yield this.supplierAuthService.getSupplierRestaurants();
        yield this.supplierProductsService.loadSupplierProducts();
        this.supplierProductsService.products$.subscribe((products) => {
          this.products = products;
        });
      } catch (error) {
        console.error("Error loading supplier data:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  get totalRestaurants() {
    return this.restaurants.length;
  }
  get totalIngredients() {
    return this.ingredients.length;
  }
  get totalProducts() {
    return this.products.length;
  }
  get activeProducts() {
    return this.products.filter((p) => p.is_available).length;
  }
  static \u0275fac = function SupplierDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierDashboard, selectors: [["app-supplier-dashboard"]], decls: 42, vars: 9, consts: [[1, "page-container"], [1, "section-header"], ["name", "truck", 1, "nav-icon", 3, "size"], [1, "section-titles"], [1, "text-muted"], ["class", "chip warning", "style", "margin-left: 8px;", 4, "ngIf"], [1, "grid-cards"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "text-amber-500", "justify-center", "flex"], ["class", "border rounded-lg p-lg bg-gradient-light shadow-card my-md", 4, "ngIf"], ["class", "flex flex-col items-center justify-center p-xl gap-md", 4, "ngIf"], [1, "chip", "warning", 2, "margin-left", "8px"], [1, "border", "rounded-lg", "p-lg", "bg-gradient-light", "shadow-card", "my-md"], [1, "section-title"], ["class", "text-center p-xl opacity-70", 4, "ngIf"], ["class", "grid-cards", 4, "ngIf"], [1, "text-center", "p-xl", "opacity-70"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-md"], [1, "flex", "items-start", "gap-sm", "py-sm", "border-b", "border-[var(--smoke-1)]", "last:border-0"], ["name", "mail", 1, "nav-icon", 3, "size"], [1, "contact-info"], [1, "info-label"], [1, "info-value"], [1, "flex", "flex-col", "items-center", "justify-center", "p-xl", "gap-md"], [1, "loading-spinner"]], template: function SupplierDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "lucide-angular", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1");
      \u0275\u0275text(5, "Dashboard Fornitore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275template(8, SupplierDashboard_span_8_Template, 2, 0, "span", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13, "restaurant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h3", 10);
      \u0275\u0275text(15, "Ristoranti Clienti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 4);
      \u0275\u0275text(19, "Ristoranti che usano i tuoi prodotti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "span", 9);
      \u0275\u0275text(23, "inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h3", 10);
      \u0275\u0275text(25, "Ingredienti Forniti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 4);
      \u0275\u0275text(29, "Ingredienti attualmente in uso");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 7)(31, "div", 8)(32, "span", 9);
      \u0275\u0275text(33, "storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h3", 10);
      \u0275\u0275text(35, "Prodotti Catalogo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 11);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 4);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(40, SupplierDashboard_div_40_Template, 7, 2, "div", 12)(41, SupplierDashboard_div_41_Template, 4, 0, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Benvenuto, ", (ctx.supplierProfile == null ? null : ctx.supplierProfile.company_name) || "Fornitore", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.supplierProfile == null ? null : ctx.supplierProfile.is_approved));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalRestaurants);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalIngredients);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalProducts);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.activeProducts, " prodotti attivi");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierDashboard, [{
    type: Component,
    args: [{ selector: "app-supplier-dashboard", standalone: true, imports: [CommonModule, LucideAngularModule], template: `<!-- supplier-dashboard.html -->\r
<div class="page-container">\r
  <div class="section-header">\r
    <lucide-angular name="truck" [size]="20" class="nav-icon"></lucide-angular>\r
    <div class="section-titles">\r
      <h1>Dashboard Fornitore</h1>\r
      <p class="text-muted">\r
        Benvenuto, {{ supplierProfile?.company_name || 'Fornitore' }}\r
        <span *ngIf="!supplierProfile?.is_approved" class="chip warning" style="margin-left: 8px;">\r
          In attesa di approvazione\r
        </span>\r
      </p>\r
    </div>\r
  </div>\r
\r
  <!-- Statistiche -->\r
  <div class="grid-cards">\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">restaurant</span>\r
        <h3 class="card-title">Ristoranti Clienti</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{ totalRestaurants }}</div>\r
      <p class="text-muted">Ristoranti che usano i tuoi prodotti</p>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">inventory</span>\r
        <h3 class="card-title">Ingredienti Forniti</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{ totalIngredients }}</div>\r
      <p class="text-muted">Ingredienti attualmente in uso</p>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">storefront</span>\r
        <h3 class="card-title">Prodotti Catalogo</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{ totalProducts }}</div>\r
      <p class="text-muted">{{ activeProducts }} prodotti attivi</p>\r
    </div>\r
  </div>\r
\r
  <!-- Ristoranti Clienti -->\r
  <div class="border rounded-lg p-lg bg-gradient-light shadow-card my-md" *ngIf="!isLoading">\r
    <h2 class="section-title">\r
      <span class="material-icons">restaurant</span>\r
      Ristoranti Clienti\r
    </h2>\r
\r
    <div *ngIf="restaurants.length === 0" class="text-center p-xl opacity-70">\r
      <span class="material-icons">restaurant</span>\r
      <h3>Nessun ristorante cliente</h3>\r
      <p class="text-muted">I ristoranti appariranno qui quando utilizzeranno i tuoi prodotti</p>\r
    </div>\r
\r
    <div class="grid-cards" *ngIf="restaurants.length > 0">\r
      <div class="card" *ngFor="let restaurant of restaurants">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons">business</span>\r
          <h3 class="card-title">{{ restaurant.name }}</h3>\r
        </div>\r
        <div class="flex flex-col gap-md">\r
          <div class="flex items-start gap-sm py-sm border-b border-[var(--smoke-1)] last:border-0">\r
            <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
            <div class="contact-info">\r
              <span class="info-label">Email</span>\r
              <span class="info-value">{{ restaurant.email || 'N/D' }}</span>\r
            </div>\r
          </div>\r
          <div class="flex items-start gap-sm py-sm border-b border-[var(--smoke-1)] last:border-0">\r
            <span class="material-icons">phone</span>\r
            <div class="contact-info">\r
              <span class="info-label">Telefono</span>\r
              <span class="info-value">{{ restaurant.phone || 'N/D' }}</span>\r
            </div>\r
          </div>\r
          <div class="flex items-start gap-sm py-sm border-b border-[var(--smoke-1)] last:border-0">\r
            <span class="material-icons">location_on</span>\r
            <div class="contact-info">\r
              <span class="info-label">Indirizzo</span>\r
              <span class="info-value">{{ restaurant.address || 'N/D' }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="isLoading" class="flex flex-col items-center justify-center p-xl gap-md">\r
    <div class="loading-spinner"></div>\r
    <span>Caricamento dati fornitore...</span>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierDashboard, { className: "SupplierDashboard", filePath: "src/app/supplier/dashboard/supplier-dashboard/supplier-dashboard.ts", lineNumber: 14 });
})();
export {
  SupplierDashboard
};
//# sourceMappingURL=chunk-2QR4FPLF.js.map
