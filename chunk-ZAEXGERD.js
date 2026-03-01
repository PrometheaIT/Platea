import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-6SNKM7Z6.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  BehaviorSubject,
  Component,
  Injectable,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Piatti/alcoholic.service.ts
var PREDEFINED_BEVERAGE_CATEGORIES = [
  // Vini
  { value: "vino_rosso", label: "Vino Rosso", icon: "wine_bar", color: "#8B0000" },
  { value: "vino_bianco", label: "Vino Bianco", icon: "wine_bar", color: "#F5DEB3" },
  { value: "vino_rosato", label: "Vino Rosato", icon: "wine_bar", color: "#FFB6C1" },
  { value: "spumante", label: "Spumante", icon: "celebration", color: "#FFFACD" },
  { value: "prosecco", label: "Prosecco", icon: "celebration", color: "#FFF8DC" },
  { value: "champagne", label: "Champagne", icon: "celebration", color: "#FFD700" },
  // Birre
  { value: "birra", label: "Birra", icon: "sports_bar", color: "#D2691E" },
  { value: "birra_chiara", label: "Birra Chiara", icon: "sports_bar", color: "#FFD700" },
  { value: "birra_scura", label: "Birra Scura", icon: "sports_bar", color: "#8B4513" },
  { value: "birra_artigianale", label: "Birra Artigianale", icon: "brewery", color: "#CD853F" },
  // Distillati
  { value: "whisky", label: "Whisky", icon: "liquor", color: "#8B4513" },
  { value: "vodka", label: "Vodka", icon: "liquor", color: "#F0FFFF" },
  { value: "gin", label: "Gin", icon: "liquor", color: "#98FB98" },
  { value: "rum", label: "Rum", icon: "liquor", color: "#DAA520" },
  { value: "tequila", label: "Tequila", icon: "liquor", color: "#FFD700" },
  { value: "brandy", label: "Brandy", icon: "liquor", color: "#8B0000" },
  { value: "cognac", label: "Cognac", icon: "liquor", color: "#A0522D" },
  // Cocktail e Aperitivi
  { value: "cocktail", label: "Cocktail", icon: "local_cafe", color: "#FF6347" },
  { value: "aperitivo", label: "Aperitivo", icon: "local_bar", color: "#FF4500" },
  { value: "digestivo", label: "Digestivo", icon: "local_bar", color: "#4B0082" },
  { value: "amaro", label: "Amaro", icon: "local_bar", color: "#8B0000" },
  { value: "vermut", label: "Vermut", icon: "wine_bar", color: "#800000" },
  // Analcolici
  { value: "analcolico", label: "Analcolico", icon: "water_drop", color: "#4682B4" },
  { value: "succo", label: "Succo", icon: "water_drop", color: "#FF6347" },
  { value: "bibita", label: "Bibita", icon: "local_drink", color: "#32CD32" },
  { value: "acqua", label: "Acqua", icon: "water_drop", color: "#1E90FF" },
  // Caffè e Tè
  { value: "caffe", label: "Caff\xE8", icon: "coffee", color: "#8B4513" },
  { value: "te", label: "T\xE8", icon: "coffee", color: "#228B22" },
  // Altro
  { value: "altro", label: "Altro", icon: "local_bar", color: "#6B7280" }
];
var AlcoholicBeverageService = class _AlcoholicBeverageService extends BaseService {
  statsSubject = new BehaviorSubject({
    total: 0,
    active: 0,
    inventoryValue: 0,
    averagePrice: 0,
    lowStockCount: 0
  });
  stats$ = this.statsSubject.asObservable();
  // Esponi le categorie predefinite come observable
  categoriesSubject = new BehaviorSubject(PREDEFINED_BEVERAGE_CATEGORIES);
  categories$ = this.categoriesSubject.asObservable();
  // Observable combinato con categorie
  beveragesWithCategories$ = combineLatest([
    this.data$,
    this.categories$
  ]).pipe(map(([beverages, categories]) => {
    this.calculateStats(beverages);
    const updatedCategories = categories.map((category) => __spreadProps(__spreadValues({}, category), {
      count: beverages.filter((b) => b.category === category.value).length
    }));
    return { beverages, categories: updatedCategories };
  }));
  getTableName() {
    return "beverages";
  }
  constructor() {
    super();
    this.data$.subscribe((beverages) => {
      this.updateCategoryCounts(beverages);
    });
  }
  // Aggiorna i conteggi delle categorie in base alle bevande
  updateCategoryCounts(beverages) {
    const currentCategories = this.categoriesSubject.value;
    const updatedCategories = currentCategories.map((category) => __spreadProps(__spreadValues({}, category), {
      count: beverages.filter((b) => b.category === category.value).length
    }));
    this.categoriesSubject.next(updatedCategories);
  }
  // Ottieni tutte le categorie (sincrono)
  getCategories() {
    return this.categoriesSubject.value;
  }
  // Ottieni categoria per valore
  getCategoryByValue(value) {
    return this.categoriesSubject.value.find((c) => c.value === value) || { value: "altro", label: "Altro", icon: "local_bar", color: "#6B7280" };
  }
  // Filtra bevande
  filterBeverages(filters = {}) {
    let filtered = this.data;
    if (filters.category) {
      filtered = filtered.filter((b) => b.category === filters.category);
    }
    if (filters.search) {
      const term = filters.search.toLowerCase();
      filtered = filtered.filter((b) => b.name.toLowerCase().includes(term) || b.producer?.toLowerCase().includes(term) || b.region?.toLowerCase().includes(term) || b.description?.toLowerCase().includes(term));
    }
    if (filters.minPrice !== void 0) {
      filtered = filtered.filter((b) => b.price >= filters.minPrice);
    }
    if (filters.maxPrice !== void 0) {
      filtered = filtered.filter((b) => b.price <= filters.maxPrice);
    }
    if (filters.inStock !== void 0) {
      filtered = filtered.filter((b) => filters.inStock ? b.current_stock > 0 : b.current_stock === 0);
    }
    return filtered;
  }
  // Ordina bevande
  sortBeverages(beverages, sortBy) {
    const sorted = [...beverages];
    switch (sortBy) {
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "price_asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price_desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "stock":
        return sorted.sort((a, b) => b.current_stock - a.current_stock);
      default:
        return sorted;
    }
  }
  // Aggiorna stock
  updateStock(beverageId, delta) {
    return __async(this, null, function* () {
      const beverage = this.data.find((b) => b.id === beverageId);
      if (!beverage)
        return false;
      const newStock = Math.max(0, beverage.current_stock + delta);
      return yield this.update(beverageId, {
        current_stock: newStock,
        is_available: newStock > 0,
        to_buy: newStock <= beverage.minimum_stock,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    });
  }
  // Crea bevanda (controlla categoria valida)
  createBeverage(data) {
    return __async(this, null, function* () {
      if (data.category) {
        const validCategory = this.categoriesSubject.value.find((c) => c.value === data.category);
        if (!validCategory) {
          console.error("\u274C Categoria non valida:", data.category);
          data.category = "altro";
        }
      } else {
        data.category = "altro";
      }
      return yield this.create(data);
    });
  }
  // Aggiorna bevanda (controlla categoria valida)
  updateBeverage(id, data) {
    return __async(this, null, function* () {
      if (data.category) {
        const validCategory = this.categoriesSubject.value.find((c) => c.value === data.category);
        if (!validCategory) {
          console.error("\u274C Categoria non valida:", data.category);
          data.category = "altro";
        }
      }
      return yield this.update(id, data);
    });
  }
  // Calcola statistiche
  calculateStats(beverages) {
    const stats = {
      total: beverages.length,
      active: beverages.filter((b) => b.is_active).length,
      inventoryValue: beverages.reduce((sum, b) => sum + b.cost_per_unit * b.current_stock, 0),
      averagePrice: beverages.length > 0 ? beverages.reduce((sum, b) => sum + b.price, 0) / beverages.length : 0,
      lowStockCount: beverages.filter((b) => b.current_stock <= b.minimum_stock).length
    };
    this.statsSubject.next(stats);
  }
  static \u0275fac = function AlcoholicBeverageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlcoholicBeverageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlcoholicBeverageService, factory: _AlcoholicBeverageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlcoholicBeverageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/restaurant/menu/alcoholic-beverages/alcoholic-beverages.ts
function AlcoholicBeverages_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cat_r1.label, " (", cat_r1.count, ") ");
  }
}
function AlcoholicBeverages_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34)(2, "div", 35)(3, "span", 36);
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Caricamento bevande...");
    \u0275\u0275elementEnd()()()();
  }
}
function AlcoholicBeverages_tr_100_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beverage_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", beverage_r3.description, " ");
  }
}
function AlcoholicBeverages_tr_100_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beverage_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Costo: \u20AC", ctx_r3.formatPrice(beverage_r3.cost_per_unit), " ");
  }
}
function AlcoholicBeverages_tr_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37)(1, "td")(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AlcoholicBeverages_tr_100_div_8_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "div", 41)(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "span", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 43);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span", 43);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div")(26, "strong", 44);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AlcoholicBeverages_tr_100_div_28_Template, 2, 1, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 46)(31, "div", 47)(32, "div", 48)(33, "div", 49);
    \u0275\u0275element(34, "div", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 51);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "td")(40, "span", 41);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td")(43, "div", 52)(44, "div", 47)(45, "button", 53);
    \u0275\u0275listener("click", function AlcoholicBeverages_tr_100_Template_button_click_45_listener() {
      const beverage_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateStock(beverage_r3.id, -1));
    });
    \u0275\u0275elementStart(46, "span", 39);
    \u0275\u0275text(47, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "span", 54);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 55);
    \u0275\u0275listener("click", function AlcoholicBeverages_tr_100_Template_button_click_50_listener() {
      const beverage_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateStock(beverage_r3.id, 1));
    });
    \u0275\u0275elementStart(51, "span", 39);
    \u0275\u0275text(52, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "button", 56);
    \u0275\u0275listener("click", function AlcoholicBeverages_tr_100_Template_button_click_53_listener() {
      const beverage_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editBeverage(beverage_r3));
    });
    \u0275\u0275elementStart(54, "span", 39);
    \u0275\u0275text(55, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "button", 57);
    \u0275\u0275listener("click", function AlcoholicBeverages_tr_100_Template_button_click_56_listener() {
      const beverage_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteBeverage(beverage_r3.id));
    });
    \u0275\u0275elementStart(57, "span", 39);
    \u0275\u0275text(58, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const beverage_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-red-50", beverage_r3.current_stock <= beverage_r3.minimum_stock)("bg-green-50", beverage_r3.current_stock > beverage_r3.minimum_stock * 2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r3.getCategoryColor(beverage_r3.category) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r3.getCategoryColor(beverage_r3.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCategoryIcon(beverage_r3.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beverage_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", beverage_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r3.getCategoryColor(beverage_r3.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCategoryIcon(beverage_r3.category), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCategoryLabel(beverage_r3.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beverage_r3.producer || "N/D");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beverage_r3.region || "N/D");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beverage_r3.vintage || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20AC", ctx_r3.formatPrice(beverage_r3.price), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", beverage_r3.cost_per_unit > 0);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r3.getStockPercentage(beverage_r3) + "%")("background-color", ctx_r3.getStockColor(beverage_r3));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", beverage_r3.current_stock <= beverage_r3.minimum_stock)("font-bold", beverage_r3.current_stock <= beverage_r3.minimum_stock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", beverage_r3.current_stock, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", beverage_r3.bottle_format || "pz", " / min: ", beverage_r3.minimum_stock, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getStockStatus(beverage_r3).class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStockStatus(beverage_r3).text, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", beverage_r3.current_stock <= 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(beverage_r3.current_stock);
  }
}
function AlcoholicBeverages_tr_101_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, " Prova a modificare i filtri di ricerca ");
    \u0275\u0275elementEnd();
  }
}
function AlcoholicBeverages_tr_101_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 43);
  }
}
function AlcoholicBeverages_tr_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60)(2, "div", 61)(3, "span", 62);
    \u0275\u0275text(4, "wine_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Nessuna bevanda trovata");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AlcoholicBeverages_tr_101_p_7_Template, 2, 0, "p", 63)(8, AlcoholicBeverages_tr_101_p_8_Template, 1, 0, "p", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.searchTerm || ctx_r3.selectedCategory || ctx_r3.showLowStockOnly || ctx_r3.showAvailableOnly);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.searchTerm && !ctx_r3.selectedCategory && !ctx_r3.showLowStockOnly && !ctx_r3.showAvailableOnly);
  }
}
function AlcoholicBeverages_div_102_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275property("value", cat_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r6.label, " ");
  }
}
function AlcoholicBeverages_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_102_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBeverageModal());
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_102_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 66)(3, "div", 67)(4, "div", 68)(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 70);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_102_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBeverageModal());
    });
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 71)(14, "div", 72)(15, "div", 15)(16, "label", 11);
    \u0275\u0275text(17, "Nome Bevanda *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.name, $event) || (ctx_r3.beverageForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "label", 11);
    \u0275\u0275text(21, "Categoria *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 74);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.category, $event) || (ctx_r3.beverageForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 17);
    \u0275\u0275text(24, "Seleziona categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AlcoholicBeverages_div_102_option_25_Template, 2, 2, "option", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 75)(27, "div", 15)(28, "label", 11);
    \u0275\u0275text(29, "Produttore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.producer, $event) || (ctx_r3.beverageForm.producer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "label", 11);
    \u0275\u0275text(33, "Regione/Paese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.region, $event) || (ctx_r3.beverageForm.region = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 75)(36, "div", 15)(37, "label", 11);
    \u0275\u0275text(38, "Prezzo di vendita (\u20AC) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.price, $event) || (ctx_r3.beverageForm.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 15)(41, "label", 11);
    \u0275\u0275text(42, "Costo unitario (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.cost_per_unit, $event) || (ctx_r3.beverageForm.cost_per_unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 75)(45, "div", 15)(46, "label", 11);
    \u0275\u0275text(47, "Stock attuale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.current_stock, $event) || (ctx_r3.beverageForm.current_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 15)(50, "label", 11);
    \u0275\u0275text(51, "Stock minimo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.minimum_stock, $event) || (ctx_r3.beverageForm.minimum_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 81)(54, "div", 15)(55, "label", 11);
    \u0275\u0275text(56, "Annata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.vintage, $event) || (ctx_r3.beverageForm.vintage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 15)(59, "label", 11);
    \u0275\u0275text(60, "Gradazione (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.alcohol_percentage, $event) || (ctx_r3.beverageForm.alcohol_percentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 15)(63, "label", 11);
    \u0275\u0275text(64, "Formato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.bottle_format, $event) || (ctx_r3.beverageForm.bottle_format = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 85)(67, "label", 11);
    \u0275\u0275text(68, "Descrizione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "textarea", 86);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_textarea_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.description, $event) || (ctx_r3.beverageForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 81)(71, "label", 87)(72, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.is_active, $event) || (ctx_r3.beverageForm.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74, "Attivo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "label", 87)(76, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.is_available, $event) || (ctx_r3.beverageForm.is_available = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78, "Disponibile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "label", 87)(80, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AlcoholicBeverages_div_102_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.beverageForm.display_in_menu, $event) || (ctx_r3.beverageForm.display_in_menu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82, "In menu");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "div", 23)(84, "button", 89);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_102_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBeverageModal());
    });
    \u0275\u0275text(85, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 90);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_102_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditModal ? ctx_r3.updateBeverage() : ctx_r3.addBeverage());
    });
    \u0275\u0275elementStart(87, "span", 12);
    \u0275\u0275text(88, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.showEditModal ? "edit" : "add_circle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.showEditModal ? "Modifica" : "Nuova", " Bevanda");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.producer);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.region);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.cost_per_unit);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.current_stock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.minimum_stock);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.vintage);
    \u0275\u0275property("max", ctx_r3.currentYear);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.alcohol_percentage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.bottle_format);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.description);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.is_active);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.is_available);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.beverageForm.display_in_menu);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r3.showEditModal ? "Aggiorna" : "Crea", " Bevanda ");
  }
}
function AlcoholicBeverages_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_103_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showConfirmModal = false);
    });
    \u0275\u0275elementStart(1, "div", 91);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_103_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 92)(3, "span", 93);
    \u0275\u0275text(4, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 94);
    \u0275\u0275text(6, "Conferma eliminazione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 95);
    \u0275\u0275text(8, "Sei sicuro di voler eliminare questa bevanda?");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10, "L'azione non pu\xF2 essere annullata.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "button", 89);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_103_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showConfirmModal = false);
    });
    \u0275\u0275text(13, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 96);
    \u0275\u0275listener("click", function AlcoholicBeverages_div_103_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275element(15, "lucide-angular", 97);
    \u0275\u0275text(16, " Elimina ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275property("size", 20);
  }
}
var AlcoholicBeverages = class _AlcoholicBeverages {
  // Servizi
  beverageService = inject(AlcoholicBeverageService);
  subscriptions = [];
  // Dati
  allBeverages = [];
  filteredBeverages = [];
  categories = [];
  // Statistiche
  totalProducts = 0;
  activeProducts = 0;
  inventoryValue = 0;
  averagePrice = 0;
  lowStockCount = 0;
  categoriesCount = 0;
  // AGGIUNGI QUESTA
  // Filtri
  searchTerm = "";
  selectedCategory = "";
  sortBy = "name";
  showAvailableOnly = false;
  showLowStockOnly = false;
  // Stato
  isLoading = true;
  // Modal
  showAddModal = false;
  showEditModal = false;
  showConfirmModal = false;
  // Form
  beverageForm = this.getEmptyBeverageForm();
  // Variabili di supporto
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // AGGIUNGI QUESTA
  beverageToDeleteId = null;
  editingBeverage = null;
  ngOnInit() {
    this.loadData();
    this.subscribeToData();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  // Sottoscrizione ai dati
  subscribeToData() {
    const sub1 = this.beverageService.beveragesWithCategories$.subscribe(({ beverages, categories }) => {
      this.allBeverages = beverages;
      this.categories = categories;
      this.categoriesCount = categories.length;
      console.log("\u{1F4CB} Categorie caricate:", this.categories.length);
      console.log("\u{1F37A} Bevande caricate:", this.allBeverages.length);
      this.updateStatistics();
      this.applyFilters();
      this.isLoading = false;
    }, (error) => {
      console.error("Error loading beverages:", error);
      this.isLoading = false;
    });
    const sub2 = this.beverageService.stats$.subscribe((stats) => {
      if (stats) {
        this.totalProducts = stats.total;
        this.activeProducts = stats.active;
        this.inventoryValue = stats.inventoryValue;
        this.averagePrice = stats.averagePrice;
        this.lowStockCount = stats.lowStockCount;
      }
    });
    this.subscriptions.push(sub1, sub2);
  }
  // Carica dati iniziali
  loadData() {
    this.isLoading = true;
    this.beverageService.loadData();
  }
  // Gestione filtri
  onSearchChange(value) {
    this.searchTerm = value;
    this.applyFilters();
  }
  onCategoryFilterChange(value) {
    this.selectedCategory = value;
    this.applyFilters();
  }
  onSortChange(value) {
    this.sortBy = value;
    this.applyFilters();
  }
  toggleAvailableFilter() {
    this.showAvailableOnly = !this.showAvailableOnly;
    this.applyFilters();
  }
  toggleLowStockFilter() {
    this.showLowStockOnly = !this.showLowStockOnly;
    this.applyFilters();
  }
  // Applica tutti i filtri
  applyFilters() {
    let filtered = [...this.allBeverages];
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((b) => b.name.toLowerCase().includes(term) || b.producer?.toLowerCase().includes(term) || b.region?.toLowerCase().includes(term) || b.description?.toLowerCase().includes(term));
    }
    if (this.selectedCategory) {
      filtered = filtered.filter((b) => b.category === this.selectedCategory);
    }
    if (this.showAvailableOnly) {
      filtered = filtered.filter((b) => b.is_available && b.current_stock > 0);
    }
    if (this.showLowStockOnly) {
      filtered = filtered.filter((b) => b.current_stock <= b.minimum_stock);
    }
    this.filteredBeverages = this.beverageService.sortBeverages(filtered, this.sortBy);
  }
  // Form bevanda vuoto
  getEmptyBeverageForm() {
    return {
      name: "",
      category: this.categories[0]?.value || "vino_rosso",
      price: 0,
      cost_per_unit: 0,
      current_stock: 0,
      minimum_stock: 10,
      alcohol_percentage: 13,
      bottle_format: "750ml",
      is_active: true,
      is_available: true,
      display_in_menu: true,
      alert_enabled: true,
      to_buy: false,
      menu_position: 0
    };
  }
  // Aggiungi bevanda
  addBeverage() {
    return __async(this, null, function* () {
      if (!this.validateBeverageForm())
        return;
      try {
        const result = yield this.beverageService.createBeverage(this.beverageForm);
        if (result) {
          this.showAddModal = false;
          this.resetBeverageForm();
        } else {
          alert("Errore nella creazione della bevanda");
        }
      } catch (error) {
        console.error("Error adding beverage:", error);
        alert("Errore nella creazione della bevanda");
      }
    });
  }
  // Modifica bevanda
  editBeverage(beverage) {
    this.editingBeverage = beverage;
    this.beverageForm = __spreadValues({}, beverage);
    this.showEditModal = true;
  }
  // Aggiorna bevanda
  updateBeverage() {
    return __async(this, null, function* () {
      if (!this.validateBeverageForm() || !this.editingBeverage)
        return;
      try {
        const result = yield this.beverageService.updateBeverage(this.editingBeverage.id, this.beverageForm);
        if (result) {
          this.showEditModal = false;
          this.resetBeverageForm();
        } else {
          alert("Errore nell'aggiornamento della bevanda");
        }
      } catch (error) {
        console.error("Error updating beverage:", error);
        alert("Errore nell'aggiornamento della bevanda");
      }
    });
  }
  // Elimina bevanda
  deleteBeverage(beverageId) {
    this.beverageToDeleteId = beverageId;
    this.showConfirmModal = true;
  }
  // Conferma eliminazione
  confirmDelete() {
    return __async(this, null, function* () {
      if (!this.beverageToDeleteId)
        return;
      try {
        const result = yield this.beverageService.delete(this.beverageToDeleteId);
        if (result) {
          this.showConfirmModal = false;
          this.beverageToDeleteId = null;
        } else {
          alert("Errore nell'eliminazione della bevanda");
        }
      } catch (error) {
        console.error("Error deleting beverage:", error);
        alert("Errore nell'eliminazione della bevanda");
      }
    });
  }
  // Aggiorna stock
  updateStock(beverageId, delta) {
    return __async(this, null, function* () {
      try {
        yield this.beverageService.updateStock(beverageId, delta);
      } catch (error) {
        console.error("Error updating stock:", error);
        alert("Errore nell'aggiornamento dello stock");
      }
    });
  }
  // Validazione form bevanda
  validateBeverageForm() {
    if (!this.beverageForm.name?.trim()) {
      alert("Il nome della bevanda \xE8 obbligatorio");
      return false;
    }
    if (!this.beverageForm.category) {
      alert("Seleziona una categoria");
      return false;
    }
    if (!this.beverageForm.price || this.beverageForm.price <= 0) {
      alert("Inserisci un prezzo valido");
      return false;
    }
    return true;
  }
  // Reset form bevanda
  resetBeverageForm() {
    this.beverageForm = this.getEmptyBeverageForm();
    this.editingBeverage = null;
  }
  // Chiudi modal bevanda
  closeBeverageModal() {
    this.showAddModal = false;
    this.showEditModal = false;
    this.resetBeverageForm();
  }
  // Helper functions per template
  getCategoryLabel(categoryValue) {
    const category = this.categories.find((c) => c.value === categoryValue);
    return category?.label || categoryValue;
  }
  getCategoryIcon(categoryValue) {
    const category = this.categories.find((c) => c.value === categoryValue);
    return category?.icon || "local_bar";
  }
  getCategoryColor(categoryValue) {
    const category = this.categories.find((c) => c.value === categoryValue);
    return category?.color || "#6B7280";
  }
  getStockColor(beverage) {
    if (beverage.current_stock === 0)
      return "#FF6B6B";
    if (beverage.current_stock <= beverage.minimum_stock)
      return "#FFA726";
    return "#4CAF50";
  }
  getStockPercentage(beverage) {
    const max = Math.max(beverage.current_stock, beverage.minimum_stock * 2);
    return Math.min(beverage.current_stock / max * 100, 100);
  }
  getStockStatus(beverage) {
    if (beverage.current_stock === 0) {
      return { class: "chip-error", text: "Esaurito" };
    } else if (beverage.current_stock <= beverage.minimum_stock) {
      return { class: "chip-warning", text: "Scorta bassa" };
    } else {
      return { class: "chip-success", text: "Disponibile" };
    }
  }
  formatPrice(price) {
    return price.toFixed(2).replace(".", ",");
  }
  formatNumber(value) {
    return value.toFixed(2).replace(".", ",");
  }
  // Aggiorna statistiche
  updateStatistics() {
    this.totalProducts = this.allBeverages.length;
    this.activeProducts = this.allBeverages.filter((b) => b.is_active).length;
    this.inventoryValue = this.allBeverages.reduce((sum, b) => sum + b.cost_per_unit * b.current_stock, 0);
    this.averagePrice = this.allBeverages.length > 0 ? this.allBeverages.reduce((sum, b) => sum + b.price, 0) / this.allBeverages.length : 0;
    this.lowStockCount = this.allBeverages.filter((b) => b.current_stock <= b.minimum_stock).length;
  }
  static \u0275fac = function AlcoholicBeverages_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlcoholicBeverages)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlcoholicBeverages, selectors: [["app-alcoholic-beverages"]], decls: 104, vars: 20, consts: [[1, "page-container"], ["data-tutorial", "beverages-cards", 1, "grid-cards", "p-sm"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "card-footer", "text-muted"], [1, "form-card", "mt-lg"], ["data-tutorial", "beverages-filters"], [1, "form-row", "mb-md"], [1, "standard-label"], [1, "material-icons"], ["type", "text", "placeholder", "Cerca per nome, produttore, regione...", 1, "form-input", 3, "input", "value"], [1, "form-row"], [1, "form-group"], [1, "form-input", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "name"], ["value", "price_asc"], ["value", "price_desc"], ["value", "stock"], [1, "modal-footer"], ["title", "Mostra solo disponibili", 1, "promethea-button", "ghost", 3, "click"], ["title", "Mostra solo scorte basse", 1, "promethea-button", "ghost", 3, "click"], [1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], ["data-tutorial", "beverages-table", 1, "table-section", "p-sm"], [1, "crm-table"], [4, "ngIf"], ["class", "beverage-row", 3, "bg-red-50", "bg-green-50", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], ["colspan", "9", 1, "text-center", "p-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md"], [1, "material-icons", "animate-spin"], [1, "beverage-row"], [1, "flex", "items-center", "gap-sm", "rounded"], [1, "material-icons", "text-sm"], ["class", "text-mini text-muted truncate max-w-xs", 4, "ngIf"], [1, "chip"], [1, "flex", "p-sm", 2, "text-wrap", "nowrap"], [1, "text-muted"], [1, "text-primary"], ["class", "text-mini text-muted", 4, "ngIf"], [1, "flex", "flex-col"], [1, "flex", "items-center", "gap-2"], [1, "w-20"], [1, "h-2", "bg-gray-200", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all"], [1, "text-mini", "text-muted", "mt-1"], [1, "flex", "gap-sm"], ["title", "Diminuisci stock", 1, "icon-button", 3, "click", "disabled"], [1, "p-sm", "text-mini"], ["title", "Aumenta stock", 1, "icon-button", 3, "click"], ["title", "Modifica", 1, "icon-button", "x-small", 3, "click"], ["title", "Elimina", 1, "icon-button", "x-small", "danger", 3, "click"], [1, "text-mini", "text-muted", "truncate", "max-w-xs"], [1, "text-mini", "text-muted"], ["colspan", "9", 1, "empty-state-row"], [1, "empty-state", "mb-lg"], [1, "material-icons", "text-4xl", "text-gray-300", "mb-4"], ["class", "text-muted", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "flex"], [1, "header-icon"], [1, "section-title"], [1, "icon-button", 3, "click"], [1, "form-card"], [1, "grid", "grid-cols-2", "gap-md"], ["type", "text", "placeholder", "Es: Chianti Classico", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-md", "mt-sm"], ["type", "text", "placeholder", "Nome produttore", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Es: Toscana, Italia", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "min", "0", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "min", "0", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-3", "gap-md", "mt-sm"], ["type", "number", "min", "1900", 1, "form-input", 3, "ngModelChange", "ngModel", "max"], ["type", "number", "step", "0.1", "min", "0", "max", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Es: 750ml, 1L", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "mt-sm"], ["rows", "2", "placeholder", "Note di degustazione, abbinamenti...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "promethea-button", "ghost", "flex-1", 3, "click"], [1, "promethea-button", "primary", "flex-1", 3, "click"], [1, "modal-container", "modal-xs", 3, "click"], [1, "modal-body", "text-center"], [1, "material-icons", "text-4xl", "text-red-500", "mb-sm"], [1, "text-md", "font-bold", "mb-sm"], [1, "text-muted", "mb-md"], [1, "promethea-button", "danger", "flex-1", 3, "click"], ["name", "trash-2", 3, "size"]], template: function AlcoholicBeverages_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 5);
      \u0275\u0275text(7, "Prodotti Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 2)(13, "div", 3)(14, "span", 4);
      \u0275\u0275text(15, "euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h3", 5);
      \u0275\u0275text(17, "Valore Inventario");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 2)(23, "div", 3)(24, "span", 4);
      \u0275\u0275text(25, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h3", 5);
      \u0275\u0275text(27, "Scorte Basse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 6);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 7);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 8)(33, "div", 9)(34, "div", 10)(35, "label", 11)(36, "span", 12);
      \u0275\u0275text(37, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " Cerca Prodotto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 13);
      \u0275\u0275listener("input", function AlcoholicBeverages_Template_input_input_39_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 14)(41, "div", 15)(42, "label", 11)(43, "span", 12);
      \u0275\u0275text(44, "category");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " Categoria ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 16);
      \u0275\u0275listener("change", function AlcoholicBeverages_Template_select_change_46_listener($event) {
        return ctx.onCategoryFilterChange($event.target.value);
      });
      \u0275\u0275elementStart(47, "option", 17);
      \u0275\u0275text(48, "Tutte le categorie");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, AlcoholicBeverages_option_49_Template, 2, 3, "option", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 15)(51, "label", 11)(52, "span", 12);
      \u0275\u0275text(53, "sort");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " Ordina per ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "select", 16);
      \u0275\u0275listener("change", function AlcoholicBeverages_Template_select_change_55_listener($event) {
        return ctx.onSortChange($event.target.value);
      });
      \u0275\u0275elementStart(56, "option", 19);
      \u0275\u0275text(57, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 20);
      \u0275\u0275text(59, "Prezzo crescente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 21);
      \u0275\u0275text(61, "Prezzo decrescente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 22);
      \u0275\u0275text(63, "Disponibilit\xE0");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(64, "div", 23)(65, "button", 24);
      \u0275\u0275listener("click", function AlcoholicBeverages_Template_button_click_65_listener() {
        return ctx.toggleAvailableFilter();
      });
      \u0275\u0275elementStart(66, "span", 12);
      \u0275\u0275text(67, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " Disponibili ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 25);
      \u0275\u0275listener("click", function AlcoholicBeverages_Template_button_click_69_listener() {
        return ctx.toggleLowStockFilter();
      });
      \u0275\u0275elementStart(70, "span", 12);
      \u0275\u0275text(71, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " Scorte basse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 26);
      \u0275\u0275listener("click", function AlcoholicBeverages_Template_button_click_73_listener() {
        return ctx.showAddModal = true;
      });
      \u0275\u0275element(74, "lucide-angular", 27);
      \u0275\u0275text(75, " Nuova Bevanda ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 28)(77, "table", 29)(78, "thead")(79, "tr")(80, "th");
      \u0275\u0275text(81, "Prodotto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Categoria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th");
      \u0275\u0275text(85, "Produttore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th");
      \u0275\u0275text(87, "Regione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th");
      \u0275\u0275text(89, "Annata");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th");
      \u0275\u0275text(91, "Prezzo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th");
      \u0275\u0275text(93, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th");
      \u0275\u0275text(95, "Stato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th");
      \u0275\u0275text(97, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "tbody");
      \u0275\u0275template(99, AlcoholicBeverages_tr_99_Template, 7, 0, "tr", 30)(100, AlcoholicBeverages_tr_100_Template, 59, 36, "tr", 31)(101, AlcoholicBeverages_tr_101_Template, 9, 2, "tr", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(102, AlcoholicBeverages_div_102_Template, 90, 20, "div", 32)(103, AlcoholicBeverages_div_103_Template, 17, 1, "div", 32);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalProducts);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.activeProducts, " attivi");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("\u20AC", ctx.formatNumber(ctx.inventoryValue), "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Costo medio: \u20AC", ctx.formatNumber(ctx.averagePrice), "");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.lowStockCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.lowStockCount > 0 ? "Riordina presto" : "Tutto ok", " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.searchTerm);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.selectedCategory || "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.sortBy);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.showAvailableOnly);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.showLowStockOnly);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(25);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredBeverages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredBeverages.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddModal || ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showConfirmModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, MinValidator, MaxValidator, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.icon-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--smoke-0);\n  border-radius: 8px;\n}\n.icon-grid-button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.icon-grid-button[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-1);\n  transform: translateY(-2px);\n}\n.icon-grid-button.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-light);\n}\n.color-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 6px;\n  max-height: 120px;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--smoke-0);\n  border-radius: 8px;\n}\n.color-grid-button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.color-grid-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.color-grid-button.selected[_ngcontent-%COMP%] {\n  border-color: var(--dark);\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.chip.warning[_ngcontent-%COMP%] {\n  background: #FFA726;\n  color: white;\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.icon-button.danger[_ngcontent-%COMP%] {\n  background: #FF6B6B;\n  color: white;\n}\n.icon-button.danger[_ngcontent-%COMP%]:hover {\n  background: #FF5252;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n.checkbox-label[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-0);\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 2px solid var(--gray-3);\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-color: var(--primary);\n  border-color: var(--primary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background: var(--smoke-0);\n  border-radius: 12px;\n  border: 2px dashed var(--gray-3);\n}\n@media (max-width: 768px) {\n  .modal-container.modal-md[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 20px auto;\n  }\n  .icon-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .color-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n/*# sourceMappingURL=alcoholic-beverages.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlcoholicBeverages, [{
    type: Component,
    args: [{ selector: "app-alcoholic-beverages", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- Statistiche Rapide -->\r
  <div class="grid-cards p-sm" data-tutorial="beverages-cards">\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">inventory</span>\r
        <h3 class="card-title">Prodotti Totali</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ totalProducts }}</div>\r
      <div class="card-footer text-muted">{{ activeProducts }} attivi</div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">euro</span>\r
        <h3 class="card-title">Valore Inventario</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">\u20AC{{ formatNumber(inventoryValue) }}</div>\r
      <div class="card-footer text-muted">Costo medio: \u20AC{{ formatNumber(averagePrice) }}</div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">warning</span>\r
        <h3 class="card-title">Scorte Basse</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ lowStockCount }}</div>\r
      <div class="card-footer text-muted">\r
        {{ lowStockCount > 0 ? 'Riordina presto' : 'Tutto ok' }}\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filtri e Azioni -->\r
  <div class="form-card mt-lg">\r
    <div data-tutorial="beverages-filters">\r
      <!-- Barra di ricerca -->\r
      <div class="form-row mb-md">\r
        <label class="standard-label">\r
          <span class="material-icons">search</span>\r
          Cerca Prodotto\r
        </label>\r
        <input\r
          type="text"\r
          placeholder="Cerca per nome, produttore, regione..."\r
          [value]="searchTerm"\r
          (input)="onSearchChange($any($event.target).value)"\r
          class="form-input">\r
      </div>\r
      <div class="form-row">\r
      <!-- Filtro per Categoria -->\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <span class="material-icons">category</span>\r
          Categoria\r
        </label>\r
        <select \r
          [value]="selectedCategory || ''" \r
          (change)="onCategoryFilterChange($any($event.target).value)"\r
          class="form-input">\r
          <option value="">Tutte le categorie</option>\r
          <option *ngFor="let cat of categories" [value]="cat.value">\r
            {{ cat.label }} ({{ cat.count }})\r
          </option>\r
        </select>\r
      </div>\r
      <!-- Ordina per -->\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <span class="material-icons">sort</span>\r
          Ordina per\r
        </label>\r
        <select [value]="sortBy" (change)="onSortChange($any($event.target).value)" class="form-input">\r
          <option value="name">Nome</option>\r
          <option value="price_asc">Prezzo crescente</option>\r
          <option value="price_desc">Prezzo decrescente</option>\r
          <option value="stock">Disponibilit\xE0</option>\r
        </select>\r
      </div>\r
      </div>\r
    </div>\r
    <!-- Bottone Aggiungi -->\r
    <div class="modal-footer">\r
        <button class="promethea-button ghost" \r
                [class.active]="showAvailableOnly"\r
                (click)="toggleAvailableFilter()"\r
                title="Mostra solo disponibili">\r
          <span class="material-icons">check_circle</span>\r
          Disponibili\r
        </button>\r
        \r
        <button class="promethea-button ghost" \r
                [class.active]="showLowStockOnly"\r
                (click)="toggleLowStockFilter()"\r
                title="Mostra solo scorte basse">\r
          <span class="material-icons">warning</span>\r
          Scorte basse\r
        </button>\r
      <button class="promethea-button" (click)="showAddModal = true">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>\r
        Nuova Bevanda\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Lista Bevande -->\r
    <div class="table-section p-sm" data-tutorial="beverages-table">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Prodotto</th>\r
            <th>Categoria</th>\r
            <th>Produttore</th>\r
            <th>Regione</th>\r
            <th>Annata</th>\r
            <th>Prezzo</th>\r
            <th>Stock</th>\r
            <th>Stato</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="isLoading">\r
            <td colspan="9" class="text-center p-xl">\r
              <div class="flex flex-col items-center justify-center gap-md">\r
                <span class="material-icons animate-spin">refresh</span>\r
                <span>Caricamento bevande...</span>\r
              </div>\r
            </td>\r
          </tr>\r
          \r
          <tr *ngFor="let beverage of filteredBeverages" class="beverage-row"\r
              [class.bg-red-50]="beverage.current_stock <= beverage.minimum_stock"\r
              [class.bg-green-50]="beverage.current_stock > beverage.minimum_stock * 2">\r
            <td>\r
              <div class="flex items-center gap-sm rounded"\r
                     [style.background-color]="getCategoryColor(beverage.category) + '20'">\r
                  <span class="material-icons text-sm" \r
                        [style.color]="getCategoryColor(beverage.category)">\r
                    {{ getCategoryIcon(beverage.category) }}\r
                  </span>\r
                <div>\r
                  <strong>{{ beverage.name }}</strong>\r
                  <div *ngIf="beverage.description" class="text-mini text-muted truncate max-w-xs">\r
                    {{ beverage.description }}\r
                  </div>\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <div class="chip"\r
                    [style.background-color]="getCategoryColor(beverage.category)">\r
                <span class="material-icons">\r
                  {{ getCategoryIcon(beverage.category) }}\r
                </span>\r
                <span class="flex p-sm"\r
                style="text-wrap: nowrap;">\r
                {{ getCategoryLabel(beverage.category) }}\r
                </span>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ beverage.producer || 'N/D' }}</span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ beverage.region || 'N/D' }}</span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ beverage.vintage || '-' }}</span>\r
            </td>\r
            <td>\r
              <div>\r
                <strong class="text-primary">\u20AC{{ formatPrice(beverage.price) }}</strong>\r
                <div *ngIf="beverage.cost_per_unit > 0" class="text-mini text-muted">\r
                  Costo: \u20AC{{ formatPrice(beverage.cost_per_unit) }}\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <div class="flex flex-col">\r
                <div class="flex items-center gap-2">\r
                  <div class="w-20">\r
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">\r
                      <div class="h-full rounded-full transition-all"\r
                           [style.width]="getStockPercentage(beverage) + '%'"\r
                           [style.background-color]="getStockColor(beverage)">\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <span [class.text-red-500]="beverage.current_stock <= beverage.minimum_stock"\r
                        [class.font-bold]="beverage.current_stock <= beverage.minimum_stock">\r
                    {{ beverage.current_stock }}\r
                  </span>\r
                </div>\r
                <div class="text-mini text-muted mt-1">\r
                  {{ beverage.bottle_format || 'pz' }} / min: {{ beverage.minimum_stock }}\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="chip" [class]="getStockStatus(beverage).class">\r
                {{ getStockStatus(beverage).text }}\r
              </span>\r
            </td>\r
            <td>\r
              <div class="flex gap-sm">\r
                <!-- Controlli Stock -->\r
                <div class="flex items-center gap-2">\r
                  <button class="icon-button "\r
                          (click)="updateStock(beverage.id, -1)"\r
                          [disabled]="beverage.current_stock <= 0"\r
                          title="Diminuisci stock">\r
                    <span class="material-icons text-sm">remove</span>\r
                  </button>\r
                  <span class="p-sm text-mini">{{ beverage.current_stock }}</span>\r
                  <button class="icon-button"\r
                          (click)="updateStock(beverage.id, 1)"\r
                          title="Aumenta stock">\r
                    <span class="material-icons text-sm">add</span>\r
                  </button>\r
                </div>\r
                \r
                <!-- Modifica -->\r
                <button class="icon-button x-small" \r
                        (click)="editBeverage(beverage)"\r
                        title="Modifica">\r
                  <span class="material-icons text-sm">edit</span>\r
                </button>\r
                \r
                <!-- Elimina -->\r
                <button class="icon-button x-small danger" \r
                        (click)="deleteBeverage(beverage.id)"\r
                        title="Elimina">\r
                  <span class="material-icons text-sm">delete</span>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
\r
          <tr *ngIf="!isLoading && filteredBeverages.length === 0">\r
            <td colspan="9" class="empty-state-row">\r
              <div class="empty-state mb-lg">\r
                <span class="material-icons text-4xl text-gray-300 mb-4">wine_bar</span>\r
                <h3>Nessuna bevanda trovata</h3>\r
                <p class="text-muted" *ngIf="searchTerm || selectedCategory || showLowStockOnly || showAvailableOnly">\r
                  Prova a modificare i filtri di ricerca\r
                </p>\r
                <p class="text-muted" *ngIf="!searchTerm && !selectedCategory && !showLowStockOnly && !showAvailableOnly">\r
                </p>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
</div>\r
\r
<!-- Modal Aggiungi/Modifica Bevanda -->\r
<div class="modal-overlay" *ngIf="showAddModal || showEditModal" (click)="closeBeverageModal()">\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <div class="flex">\r
        <div class="header-icon">\r
          <span class="material-icons">{{ showEditModal ? 'edit' : 'add_circle' }}</span>\r
        </div>\r
        <div>\r
          <h1 class="section-title">{{ showEditModal ? 'Modifica' : 'Nuova' }} Bevanda</h1>\r
        </div>\r
      </div>\r
      <button class="icon-button" (click)="closeBeverageModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
    \r
    <div class="form-card">\r
      <!-- Nome e Categoria -->\r
      <div class="grid grid-cols-2 gap-md">\r
        <div class="form-group">\r
          <label class="standard-label">Nome Bevanda *</label>\r
          <input \r
            type="text" \r
            [(ngModel)]="beverageForm.name"\r
            placeholder="Es: Chianti Classico"\r
            class="form-input"\r
            required>\r
        </div>\r
        \r
        <div class="form-group">\r
          <label class="standard-label">Categoria *</label>\r
          <select [(ngModel)]="beverageForm.category" class="form-input" required>\r
            <option value="">Seleziona categoria</option>\r
            <option *ngFor="let cat of categories" [value]="cat.value">\r
              {{ cat.label }}\r
            </option>\r
          </select>\r
        </div>\r
      </div>\r
      \r
      <!-- Produttore e Regione -->\r
      <div class="grid grid-cols-2 gap-md mt-sm">\r
        <div class="form-group">\r
          <label class="standard-label">Produttore</label>\r
          <input \r
            type="text" \r
            [(ngModel)]="beverageForm.producer"\r
            placeholder="Nome produttore"\r
            class="form-input">\r
        </div>\r
        \r
        <div class="form-group">\r
          <label class="standard-label">Regione/Paese</label>\r
          <input \r
            type="text" \r
            [(ngModel)]="beverageForm.region"\r
            placeholder="Es: Toscana, Italia"\r
            class="form-input">\r
        </div>\r
      </div>\r
      \r
      <!-- Prezzi -->\r
      <div class="grid grid-cols-2 gap-md mt-sm">\r
        <div class="form-group">\r
          <label class="standard-label">Prezzo di vendita (\u20AC) *</label>\r
          <input \r
            type="number" \r
            [(ngModel)]="beverageForm.price"\r
            step="0.01"\r
            min="0"\r
            class="form-input"\r
            required>\r
        </div>\r
        \r
        <div class="form-group">\r
          <label class="standard-label">Costo unitario (\u20AC)</label>\r
          <input \r
            type="number" \r
            [(ngModel)]="beverageForm.cost_per_unit"\r
            step="0.01"\r
            min="0"\r
            class="form-input">\r
        </div>\r
      </div>\r
      \r
      <!-- Stock -->\r
      <div class="grid grid-cols-2 gap-md mt-sm">\r
        <div class="form-group">\r
          <label class="standard-label">Stock attuale</label>\r
          <input \r
            type="number" \r
            [(ngModel)]="beverageForm.current_stock"\r
            min="0"\r
            class="form-input">\r
        </div>\r
        \r
        <div class="form-group">\r
          <label class="standard-label">Stock minimo</label>\r
          <input \r
            type="number" \r
            [(ngModel)]="beverageForm.minimum_stock"\r
            min="0"\r
            class="form-input">\r
        </div>\r
      </div>\r
      \r
      <!-- Dettagli -->\r
      <div class="grid grid-cols-3 gap-md mt-sm">\r
        <div class="form-group">\r
          <label class="standard-label">Annata</label>\r
          <input \r
            type="number" \r
            [(ngModel)]="beverageForm.vintage"\r
            min="1900"\r
            [max]="currentYear"\r
            class="form-input">\r
        </div>\r
        \r
        <div class="form-group">\r
          <label class="standard-label">Gradazione (%)</label>\r
          <input \r
            type="number" \r
            [(ngModel)]="beverageForm.alcohol_percentage"\r
            step="0.1"\r
            min="0"\r
            max="100"\r
            class="form-input">\r
        </div>\r
        \r
        <div class="form-group">\r
          <label class="standard-label">Formato</label>\r
          <input \r
            type="text" \r
            [(ngModel)]="beverageForm.bottle_format"\r
            placeholder="Es: 750ml, 1L"\r
            class="form-input">\r
        </div>\r
      </div>\r
      \r
      <!-- Descrizione -->\r
      <div class="form-group mt-sm">\r
        <label class="standard-label">Descrizione</label>\r
        <textarea \r
          [(ngModel)]="beverageForm.description"\r
          rows="2"\r
          placeholder="Note di degustazione, abbinamenti..."\r
          class="form-input"></textarea>\r
      </div>\r
      \r
      <!-- Opzioni -->\r
      <div class="grid grid-cols-3 gap-md mt-sm">\r
        <label class="checkbox-label">\r
          <input type="checkbox" [(ngModel)]="beverageForm.is_active">\r
          <span>Attivo</span>\r
        </label>\r
        \r
        <label class="checkbox-label">\r
          <input type="checkbox" [(ngModel)]="beverageForm.is_available">\r
          <span>Disponibile</span>\r
        </label>\r
        \r
        <label class="checkbox-label">\r
          <input type="checkbox" [(ngModel)]="beverageForm.display_in_menu">\r
          <span>In menu</span>\r
        </label>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button class="promethea-button ghost flex-1" (click)="closeBeverageModal()">\r
        Annulla\r
      </button>\r
      <button class="promethea-button primary flex-1" (click)="showEditModal ? updateBeverage() : addBeverage()">\r
        <span class="material-icons">check</span>\r
        {{ showEditModal ? 'Aggiorna' : 'Crea' }} Bevanda\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Conferma Eliminazione -->\r
<div class="modal-overlay" *ngIf="showConfirmModal" (click)="showConfirmModal = false">\r
  <div class="modal-container modal-xs" (click)="$event.stopPropagation()">\r
    <div class="modal-body text-center">\r
      <span class="material-icons text-4xl text-red-500 mb-sm">warning</span>\r
      <h3 class="text-md font-bold mb-sm">Conferma eliminazione</h3>\r
      <p class="text-muted mb-md">Sei sicuro di voler eliminare questa bevanda?<br>L'azione non pu\xF2 essere annullata.</p>\r
    </div>\r
    \r
    <div class="modal-footer">\r
      <button class="promethea-button ghost flex-1" (click)="showConfirmModal = false">\r
        Annulla\r
      </button>\r
      <button class="promethea-button danger flex-1" (click)="confirmDelete()">\r
        <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
        Elimina\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/menu/alcoholic-beverages/alcoholic-beverages.css */\n.icon-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--smoke-0);\n  border-radius: 8px;\n}\n.icon-grid-button {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.icon-grid-button:hover {\n  background: var(--smoke-1);\n  transform: translateY(-2px);\n}\n.icon-grid-button.selected {\n  border-color: var(--primary);\n  background: var(--primary-light);\n}\n.color-grid {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 6px;\n  max-height: 120px;\n  overflow-y: auto;\n  padding: 8px;\n  background: var(--smoke-0);\n  border-radius: 8px;\n}\n.color-grid-button {\n  width: 30px;\n  height: 30px;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.color-grid-button:hover {\n  transform: scale(1.1);\n}\n.color-grid-button.selected {\n  border-color: var(--dark);\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.chip.warning {\n  background: #FFA726;\n  color: white;\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.icon-button.danger {\n  background: #FF6B6B;\n  color: white;\n}\n.icon-button.danger:hover {\n  background: #FF5252;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n.checkbox-label:hover {\n  background: var(--smoke-0);\n}\n.checkbox-label input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 2px solid var(--gray-3);\n  cursor: pointer;\n}\n.checkbox-label input[type=checkbox]:checked {\n  background-color: var(--primary);\n  border-color: var(--primary);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background: var(--smoke-0);\n  border-radius: 12px;\n  border: 2px dashed var(--gray-3);\n}\n@media (max-width: 768px) {\n  .modal-container.modal-md {\n    width: 95%;\n    margin: 20px auto;\n  }\n  .icon-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .color-grid {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n/*# sourceMappingURL=alcoholic-beverages.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlcoholicBeverages, { className: "AlcoholicBeverages", filePath: "src/app/restaurant/menu/alcoholic-beverages/alcoholic-beverages.ts", lineNumber: 29 });
})();
export {
  AlcoholicBeverages
};
//# sourceMappingURL=chunk-ZAEXGERD.js.map
