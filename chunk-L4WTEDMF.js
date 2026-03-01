import {
  SupplierProductsService
} from "./chunk-4ZKTN7SM.js";
import {
  UnitService
} from "./chunk-BTGWFTIL.js";
import {
  SupplierAuthService
} from "./chunk-JIPGK6YB.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-JWP3QZ4U.js";
import {
  Router
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/supplier/ingredients/supplier-ingredients/supplier-ingredients.ts
function SupplierIngredients_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275element(2, "div", 30);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Caricamento prodotti...");
    \u0275\u0275elementEnd()()();
  }
}
function SupplierIngredients_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 31)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 4);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 32);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "div", 20)(22, "button", 33);
    \u0275\u0275listener("click", function SupplierIngredients_tr_78_Template_button_click_22_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProduct(product_r2));
    });
    \u0275\u0275elementStart(23, "span", 2);
    \u0275\u0275text(24, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 34);
    \u0275\u0275listener("click", function SupplierIngredients_tr_78_Template_button_click_25_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProduct(product_r2.id));
    });
    \u0275\u0275element(26, "lucide-angular", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.product_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.description || "Nessuna descrizione");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(10, 9, product_r2.unit_price, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r2.package_quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getUnitSymbol(product_r2.unit_id));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getProductStatus(product_r2).class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getProductStatus(product_r2).text, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("size", 20);
  }
}
function SupplierIngredients_tr_79_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Prova a modificare i filtri di ricerca ");
    \u0275\u0275elementEnd();
  }
}
function SupplierIngredients_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 36)(2, "span", 2);
    \u0275\u0275text(3, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Nessun prodotto trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SupplierIngredients_tr_79_p_6_Template, 2, 0, "p", 26);
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function SupplierIngredients_tr_79_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newProduct());
    });
    \u0275\u0275element(8, "lucide-angular", 22);
    \u0275\u0275text(9, " Aggiungi il primo prodotto ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.searchTerm || ctx_r2.showAvailableOnly);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
  }
}
function SupplierIngredients_div_80_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Il nome del prodotto \xE8 obbligatorio e deve essere di almeno 2 caratteri");
    \u0275\u0275elementEnd()();
  }
}
function SupplierIngredients_div_80_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Il prezzo unitario \xE8 obbligatorio");
    \u0275\u0275elementEnd()();
  }
}
function SupplierIngredients_div_80_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "La quantit\xE0 per confezione \xE8 obbligatoria");
    \u0275\u0275elementEnd()();
  }
}
function SupplierIngredients_div_80_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r6 = ctx.$implicit;
    \u0275\u0275property("value", unit_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", unit_r6.name, " (", unit_r6.symbol, ") ");
  }
}
function SupplierIngredients_div_80_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r7 = ctx.$implicit;
    \u0275\u0275property("value", unit_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", unit_r7.name, " (", unit_r7.symbol, ") ");
  }
}
function SupplierIngredients_div_80_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r8 = ctx.$implicit;
    \u0275\u0275property("value", unit_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", unit_r8.name, " (", unit_r8.symbol, ") ");
  }
}
function SupplierIngredients_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function SupplierIngredients_div_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function SupplierIngredients_div_80_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "h2", 40)(4, "span", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 41);
    \u0275\u0275listener("click", function SupplierIngredients_div_80_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(8, "span", 2);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 42)(11, "form", 43);
    \u0275\u0275listener("ngSubmit", function SupplierIngredients_div_80_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(12, "div", 44)(13, "div", 45)(14, "label", 46)(15, "span", 2);
    \u0275\u0275text(16, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Nome Prodotto * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 47);
    \u0275\u0275template(19, SupplierIngredients_div_80_div_19_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 45)(21, "label", 49)(22, "span", 2);
    \u0275\u0275text(23, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Descrizione ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 44)(27, "div", 45)(28, "label", 51)(29, "span", 2);
    \u0275\u0275text(30, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Prezzo Unitario * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 52);
    \u0275\u0275template(33, SupplierIngredients_div_80_div_33_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 45)(35, "label", 53)(36, "span", 2);
    \u0275\u0275text(37, "format_list_numbered");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Quantit\xE0 per Confezione * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 54);
    \u0275\u0275template(40, SupplierIngredients_div_80_div_40_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 44)(42, "div", 45)(43, "label", 55)(44, "span", 2);
    \u0275\u0275text(45, "straighten");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Unit\xE0 di Misura ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 56)(48, "option", 57);
    \u0275\u0275text(49, "Seleziona unit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "optgroup", 58);
    \u0275\u0275template(51, SupplierIngredients_div_80_option_51_Template, 2, 3, "option", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "optgroup", 60);
    \u0275\u0275template(53, SupplierIngredients_div_80_option_53_Template, 2, 3, "option", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "optgroup", 61);
    \u0275\u0275template(55, SupplierIngredients_div_80_option_55_Template, 2, 3, "option", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 45)(57, "label", 62);
    \u0275\u0275element(58, "input", 63);
    \u0275\u0275elementStart(59, "div")(60, "strong");
    \u0275\u0275text(61, "Prodotto disponibile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 4);
    \u0275\u0275text(63, "Il prodotto \xE8 attualmente disponibile per la vendita");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(64, "div", 64)(65, "button", 65);
    \u0275\u0275listener("click", function SupplierIngredients_div_80_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275text(66, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 66)(68, "span", 2);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "edit" : "add_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing ? "Modifica Prodotto" : "Nuovo Prodotto", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.productForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", (ctx_r2.product_name == null ? null : ctx_r2.product_name.invalid) && (ctx_r2.product_name == null ? null : ctx_r2.product_name.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.product_name == null ? null : ctx_r2.product_name.invalid) && (ctx_r2.product_name == null ? null : ctx_r2.product_name.touched));
    \u0275\u0275advance(13);
    \u0275\u0275classProp("error", (ctx_r2.unit_price == null ? null : ctx_r2.unit_price.invalid) && (ctx_r2.unit_price == null ? null : ctx_r2.unit_price.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.unit_price == null ? null : ctx_r2.unit_price.invalid) && (ctx_r2.unit_price == null ? null : ctx_r2.unit_price.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", (ctx_r2.package_quantity == null ? null : ctx_r2.package_quantity.invalid) && (ctx_r2.package_quantity == null ? null : ctx_r2.package_quantity.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.package_quantity == null ? null : ctx_r2.package_quantity.invalid) && (ctx_r2.package_quantity == null ? null : ctx_r2.package_quantity.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r2.getUnitsByType("weight"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUnitsByType("volume"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUnitsByType("piece"));
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r2.productForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "save" : "add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing ? "Aggiorna" : "Crea", " Prodotto ");
  }
}
var SupplierIngredients = class _SupplierIngredients {
  supplierAuthService = inject(SupplierAuthService);
  supplierProductsService = inject(SupplierProductsService);
  unitService = inject(UnitService);
  fb = inject(FormBuilder);
  router = inject(Router);
  // Dati principali
  products = [];
  units = [];
  filteredProducts = [];
  // Stato UI
  showProductForm = false;
  isEditing = false;
  currentProductId = null;
  searchTerm = "";
  isLoading = true;
  // Filtri
  showAvailableOnly = false;
  sortBy = "name";
  // Form
  productForm;
  // Statistiche
  get availableProductsCount() {
    return this.products.filter((p) => p.is_available).length;
  }
  get totalProductsValue() {
    return this.products.reduce((sum, product) => sum + product.unit_price, 0);
  }
  constructor() {
    this.productForm = this.fb.group({
      product_name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      unit_price: [0, [Validators.required, Validators.min(0)]],
      package_quantity: [1, [Validators.required, Validators.min(1e-3)]],
      unit_id: [""],
      is_available: [true]
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadData();
    });
  }
  loadData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        this.unitService.units$.subscribe((units) => {
          this.units = units;
        });
        yield this.supplierProductsService.loadSupplierProducts();
        this.supplierProductsService.products$.subscribe((products) => {
          this.products = products;
          this.applyFilters();
          this.isLoading = false;
        });
      } catch (error) {
        console.error("Error loading data:", error);
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    let filtered = this.products;
    if (this.searchTerm) {
      filtered = filtered.filter((product) => product.product_name.toLowerCase().includes(this.searchTerm.toLowerCase()) || product.description?.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    if (this.showAvailableOnly) {
      filtered = filtered.filter((product) => product.is_available);
    }
    filtered = [...filtered].sort((a, b) => {
      switch (this.sortBy) {
        case "name":
          return a.product_name.localeCompare(b.product_name);
        case "price":
          return a.unit_price - b.unit_price;
        default:
          return 0;
      }
    });
    this.filteredProducts = filtered;
  }
  onSearchChange(searchTerm) {
    this.searchTerm = searchTerm;
    this.applyFilters();
  }
  toggleAvailableFilter() {
    this.showAvailableOnly = !this.showAvailableOnly;
    this.applyFilters();
  }
  onSortChange(sortBy) {
    this.sortBy = sortBy;
    this.applyFilters();
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.productForm.invalid) {
        this.markFormGroupTouched();
        return;
      }
      try {
        if (this.isEditing && this.currentProductId) {
          const success = yield this.supplierProductsService.updateProduct(this.currentProductId, this.productForm.value);
          if (success) {
            console.log("Prodotto aggiornato con successo");
            this.resetForm();
          }
        } else {
          const product = yield this.supplierProductsService.createProduct(this.productForm.value);
          if (product) {
            console.log("Prodotto creato con successo");
            this.resetForm();
          }
        }
      } catch (error) {
        console.error("Errore durante il salvataggio:", error);
      }
    });
  }
  editProduct(product) {
    this.isEditing = true;
    this.currentProductId = product.id;
    this.productForm.patchValue({
      product_name: product.product_name,
      description: product.description || "",
      unit_price: product.unit_price,
      package_quantity: product.package_quantity,
      unit_id: product.unit_id || "",
      is_available: product.is_available
    });
    this.showProductForm = true;
  }
  deleteProduct(id) {
    return __async(this, null, function* () {
      if (confirm("Sei sicuro di voler eliminare questo prodotto?")) {
        const success = yield this.supplierProductsService.deleteProduct(id);
        if (success) {
          console.log("Prodotto eliminato");
        }
      }
    });
  }
  newProduct() {
    this.resetForm();
    this.showProductForm = true;
    this.isEditing = false;
  }
  resetForm() {
    this.productForm.reset({
      product_name: "",
      description: "",
      unit_price: 0,
      package_quantity: 1,
      unit_id: "",
      is_available: true
    });
    this.isEditing = false;
    this.currentProductId = null;
    this.showProductForm = false;
  }
  // Metodi helper
  getUnitSymbol(unitId) {
    if (!unitId)
      return "";
    const unit = this.units.find((u) => u.id === unitId);
    return unit ? unit.symbol : "";
  }
  getProductStatus(product) {
    if (product.is_available) {
      return { class: "active", text: "Disponibile" };
    } else {
      return { class: "inactive", text: "Non disponibile" };
    }
  }
  getUnitsByType(type) {
    return this.units.filter((unit) => unit.type === type);
  }
  markFormGroupTouched() {
    Object.keys(this.productForm.controls).forEach((key) => {
      const control = this.productForm.get(key);
      control?.markAsTouched();
    });
  }
  // Getters per il template
  get product_name() {
    return this.productForm.get("product_name");
  }
  get unit_price() {
    return this.productForm.get("unit_price");
  }
  get package_quantity() {
    return this.productForm.get("package_quantity");
  }
  static \u0275fac = function SupplierIngredients_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierIngredients)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierIngredients, selectors: [["app-supplier-ingredients"]], decls: 81, vars: 14, consts: [[1, "page-container"], [1, "section-header"], [1, "material-icons"], [1, "section-titles"], [1, "text-muted"], [1, "grid-cards"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "text-amber-500", "justify-center", "flex"], [1, "flex", "justify-between", "items-end", "gap-lg", "mb-lg", "flex-wrap"], [1, "flex", "gap-md", "flex-wrap", "flex-1", "p-sm", "mt-md"], [1, "flex", "flex-col", "min-w-150"], [1, "standard-label"], ["type", "text", "placeholder", "Cerca per nome o descrizione...", 1, "search-input", 3, "input", "value"], [1, "filter-select", 3, "change", "value"], ["value", "name"], ["value", "price"], [1, "flex", "items-center", "gap-sm", "cursor-pointer", "p-sm", "rounded", "transition", "hover:bg-[var(--smoke-1)]"], ["type", "checkbox", 3, "change", "checked"], [1, "flex", "gap-sm"], [1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], [1, "table-section"], [1, "bg-body", "border", "rounded-lg", "overflow-hidden", "shadow-card", "backdrop-blur"], [1, "crm-table"], [4, "ngIf"], ["class", "product-row", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["colspan", "7", 1, "flex", "flex-col", "items-center", "justify-center", "p-xl", "gap-md"], [1, "loading-spinner"], [1, "product-row"], [1, "chip"], ["title", "Modifica", 1, "icon-button", 3, "click"], ["title", "Elimina", 1, "icon-button", 3, "click"], ["name", "trash-2", 3, "size"], ["colspan", "7", 1, "text-center", "p-xl", "opacity-70"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "p-md", "border-t", "border-b", "border-[var(--smoke-1)]", "flex", "justify-between", "items-center"], [1, "modal-title"], ["type", "button", 1, "icon-button", "close-button", 3, "click"], [1, "p-lg", "flex-1", "overflow-y-auto"], [1, "generic-form", 3, "ngSubmit", "formGroup"], [1, "grid-form"], [1, "flex", "flex-col", "gap-1", "flex-1", "min-w-300"], ["for", "product_name", 1, "standard-label"], ["id", "product_name", "formControlName", "product_name", "type", "text", "placeholder", "Es: Pomodoro San Marzano DOP"], ["class", "p-sm my-sm rounded flex items-center justify-center gap-sm bg-[color-mix(in srgb,#ef444410%,transparent)] text-red-500 border border-[color-mix(in srgb,#ef444430%,transparent)]", 4, "ngIf"], ["for", "description", 1, "standard-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Descrizione opzionale del prodotto"], ["for", "unit_price", 1, "standard-label"], ["id", "unit_price", "formControlName", "unit_price", "type", "number", "step", "0.001", "min", "0", "placeholder", "0.000"], ["for", "package_quantity", 1, "standard-label"], ["id", "package_quantity", "formControlName", "package_quantity", "type", "number", "step", "0.001", "min", "0.001", "placeholder", "1"], ["for", "unit_id", 1, "standard-label"], ["id", "unit_id", "formControlName", "unit_id"], ["value", ""], ["label", "Peso"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Volume"], ["label", "Conteggio"], [1, "flex", "items-center", "gap-sm", "cursor-pointer", "p-sm", "rounded", "transition", "hover:bg-[var(--smoke-1)]", "large"], ["type", "checkbox", "formControlName", "is_available"], [1, "flex", "justify-between", "items-center", "gap-md", "mt-lg", "pt-md", "border-t", "border-[var(--smoke-1)]"], ["type", "button", 1, "promethea-button", "secondary", 3, "click"], ["type", "submit", 1, "promethea-button", 3, "disabled"], [1, "p-sm", "my-sm", "rounded", "flex", "items-center", "justify-center", "gap-sm", "bg-[color-mix(in", "srgb,#ef444410%,transparent)]", "text-red-500", "border", "border-[color-mix(in", "srgb,#ef444430%,transparent)]"], [3, "value"]], template: function SupplierIngredients_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "h1");
      \u0275\u0275text(6, "Catalogo Prodotti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Gestisci i prodotti del tuo catalogo fornitore");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "span", 2);
      \u0275\u0275text(13, "inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h3", 8);
      \u0275\u0275text(15, "Prodotti Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6)(19, "div", 7)(20, "span", 2);
      \u0275\u0275text(21, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h3", 8);
      \u0275\u0275text(23, "Prodotti Disponibili");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 6)(27, "div", 7)(28, "span", 2);
      \u0275\u0275text(29, "euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h3", 8);
      \u0275\u0275text(31, "Valore Catalogo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 9);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 10)(36, "div", 11)(37, "div", 12)(38, "label", 13);
      \u0275\u0275text(39, "Cerca Prodotti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 14);
      \u0275\u0275listener("input", function SupplierIngredients_Template_input_input_40_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 12)(42, "label", 13);
      \u0275\u0275text(43, "Ordina per");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "select", 15);
      \u0275\u0275listener("change", function SupplierIngredients_Template_select_change_44_listener($event) {
        return ctx.onSortChange($event.target.value);
      });
      \u0275\u0275elementStart(45, "option", 16);
      \u0275\u0275text(46, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 17);
      \u0275\u0275text(48, "Prezzo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 12)(50, "label", 18)(51, "input", 19);
      \u0275\u0275listener("change", function SupplierIngredients_Template_input_change_51_listener() {
        return ctx.toggleAvailableFilter();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Mostra solo prodotti disponibili ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 20)(54, "button", 21);
      \u0275\u0275listener("click", function SupplierIngredients_Template_button_click_54_listener() {
        return ctx.newProduct();
      });
      \u0275\u0275element(55, "lucide-angular", 22);
      \u0275\u0275text(56, " Nuovo Prodotto ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 23)(58, "div", 24)(59, "table", 25)(60, "thead")(61, "tr")(62, "th");
      \u0275\u0275text(63, "Nome Prodotto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th");
      \u0275\u0275text(65, "Descrizione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th");
      \u0275\u0275text(67, "Prezzo Unitario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th");
      \u0275\u0275text(69, "Quantit\xE0 Confezione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th");
      \u0275\u0275text(71, "Unit\xE0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th");
      \u0275\u0275text(73, "Stato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th");
      \u0275\u0275text(75, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody");
      \u0275\u0275template(77, SupplierIngredients_tr_77_Template, 5, 0, "tr", 26)(78, SupplierIngredients_tr_78_Template, 27, 12, "tr", 27)(79, SupplierIngredients_tr_79_Template, 10, 2, "tr", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(80, SupplierIngredients_div_80_Template, 71, 18, "div", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.products.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.availableProductsCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(34, 11, ctx.totalProductsValue, "1.2-2"), "");
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.sortBy);
      \u0275\u0275advance(7);
      \u0275\u0275property("checked", ctx.showAvailableOnly);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredProducts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredProducts.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showProductForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: var(--gap-sm);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--background);\n  border-radius: 24px;\n  padding: var(--gap-lg);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--smoke-1);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n  position: relative;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: var(--gap-sm);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-1);\n  color: var(--text-color);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--gap-md) 0;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.ingredient-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.product-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.supplier-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 400px;\n  text-align: center;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n  justify-content: center;\n  margin-top: var(--gap-lg);\n}\n.full-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 95vw;\n  max-height: 95vh;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: var(--gap-sm);\n    align-items: flex-end;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    border-radius: 24px 24px 0 0;\n    max-height: 85vh;\n    animation: slideUpMobile 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .modal-close[_ngcontent-%COMP%] {\n    position: absolute;\n    top: var(--gap-md);\n    right: var(--gap-md);\n  }\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--smoke-1);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: color-mix(in srgb, var(--primary) 80%, black);\n}\n/*# sourceMappingURL=supplier-ingredients.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierIngredients, [{
    type: Component,
    args: [{ selector: "app-supplier-ingredients", standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideAngularModule], template: `<div class="page-container">\r
  <div class="section-header">\r
    <span class="material-icons">storefront</span>\r
    <div class="section-titles">\r
      <h1>Catalogo Prodotti</h1>\r
      <p class="text-muted">Gestisci i prodotti del tuo catalogo fornitore</p>\r
    </div>\r
  </div>\r
\r
  <!-- Statistiche -->\r
  <div class="grid-cards">\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">inventory</span>\r
        <h3 class="card-title">Prodotti Totali</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{ products.length }}</div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">check_circle</span>\r
        <h3 class="card-title">Prodotti Disponibili</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{ availableProductsCount }}</div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">euro</span>\r
        <h3 class="card-title">Valore Catalogo</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary text-amber-500 justify-center flex">\u20AC{{ totalProductsValue | number:'1.2-2' }}</div>\r
    </div>\r
  </div>\r
\r
  <!-- Filtri e Azioni -->\r
  <div class="flex justify-between items-end gap-lg mb-lg flex-wrap">\r
    <div class="flex gap-md flex-wrap flex-1 p-sm mt-md">\r
      <!-- Barra di ricerca -->\r
      <div class="flex flex-col min-w-150">\r
        <label class="standard-label">Cerca Prodotti</label>\r
        <input\r
          type="text"\r
          placeholder="Cerca per nome o descrizione..."\r
          [value]="searchTerm"\r
          (input)="onSearchChange($any($event.target).value)"\r
          class="search-input">\r
      </div>\r
\r
      <!-- Filtri -->\r
      <div class="flex flex-col min-w-150">\r
        <label class="standard-label">Ordina per</label>\r
        <select [value]="sortBy" (change)="onSortChange($any($event.target).value)" class="filter-select">\r
          <option value="name">Nome</option>\r
          <option value="price">Prezzo</option>\r
        </select>\r
      </div>\r
\r
      <!-- Filtro disponibilit\xE0 -->\r
      <div class="flex flex-col min-w-150">\r
        <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-1)]">\r
          <input\r
            type="checkbox"\r
            [checked]="showAvailableOnly"\r
            (change)="toggleAvailableFilter()">\r
          Mostra solo prodotti disponibili\r
        </label>\r
      </div>\r
    </div>\r
\r
    <div class="flex gap-sm">\r
      <button class="promethea-button" (click)="newProduct()">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>\r
        Nuovo Prodotto\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Lista Prodotti -->\r
  <div class="table-section">\r
    <div class="bg-body border rounded-lg overflow-hidden shadow-card backdrop-blur">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Nome Prodotto</th>\r
            <th>Descrizione</th>\r
            <th>Prezzo Unitario</th>\r
            <th>Quantit\xE0 Confezione</th>\r
            <th>Unit\xE0</th>\r
            <th>Stato</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="isLoading">\r
            <td colspan="7" class="flex flex-col items-center justify-center p-xl gap-md">\r
              <div class="loading-spinner"></div>\r
              <span>Caricamento prodotti...</span>\r
            </td>\r
          </tr>\r
          \r
          <tr *ngFor="let product of filteredProducts" class="product-row">\r
            <td>\r
              <strong>{{ product.product_name }}</strong>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ product.description || 'Nessuna descrizione' }}</span>\r
            </td>\r
            <td>\r
              <strong>\u20AC{{ product.unit_price | number:'1.2-2' }}</strong>\r
            </td>\r
            <td>\r
              <span>{{ product.package_quantity }}</span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ getUnitSymbol(product.unit_id) }}</span>\r
            </td>\r
            <td>\r
              <span class="chip" [class]="getProductStatus(product).class">\r
                {{ getProductStatus(product).text }}\r
              </span>\r
            </td>\r
            <td>\r
              <div class="flex gap-sm">\r
                <button class="icon-button" (click)="editProduct(product)" title="Modifica">\r
                  <span class="material-icons">edit</span>\r
                </button>\r
                <button class="icon-button" (click)="deleteProduct(product.id)" title="Elimina">\r
                  <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
\r
          <tr *ngIf="!isLoading && filteredProducts.length === 0">\r
            <td colspan="7" class="text-center p-xl opacity-70">\r
              <span class="material-icons">storefront</span>\r
              <h3>Nessun prodotto trovato</h3>\r
              <p *ngIf="searchTerm || showAvailableOnly">\r
                Prova a modificare i filtri di ricerca\r
              </p>\r
              <button class="promethea-button" (click)="newProduct()">\r
                <lucide-angular name="plus" [size]="20"></lucide-angular>\r
                Aggiungi il primo prodotto\r
              </button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
<!-- Modal Prodotto -->\r
<div *ngIf="showProductForm" class="modal-overlay" (click)="resetForm()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    \r
    <!-- Header del Modal -->\r
    <div class="p-md border-t border-b border-[var(--smoke-1)] flex justify-between items-center">\r
      <h2 class="modal-title">\r
        <span class="material-icons">{{ isEditing ? 'edit' : 'add_circle' }}</span>\r
        {{ isEditing ? 'Modifica Prodotto' : 'Nuovo Prodotto' }}\r
      </h2>\r
      <button class="icon-button close-button" (click)="resetForm()" type="button">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Corpo del Modal -->\r
    <div class="p-lg flex-1 overflow-y-auto">\r
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()" class="generic-form">\r
        \r
        <!-- Nome e Descrizione -->\r
        <div class="grid-form">\r
          <div class="flex flex-col gap-1 flex-1 min-w-300">\r
            <label for="product_name" class="standard-label">\r
              <span class="material-icons">label</span>\r
              Nome Prodotto *\r
            </label>\r
            <input\r
              id="product_name"\r
              formControlName="product_name"\r
              type="text"\r
              placeholder="Es: Pomodoro San Marzano DOP"\r
              [class.error]="product_name?.invalid && product_name?.touched">\r
            <div *ngIf="product_name?.invalid && product_name?.touched" class="p-sm my-sm rounded flex items-center justify-center gap-sm bg-[color-mix(in srgb,#ef444410%,transparent)] text-red-500 border border-[color-mix(in srgb,#ef444430%,transparent)]">\r
              <span>Il nome del prodotto \xE8 obbligatorio e deve essere di almeno 2 caratteri</span>\r
            </div>\r
          </div>\r
\r
          <div class="flex flex-col gap-1 flex-1 min-w-300">\r
            <label for="description" class="standard-label">\r
              <span class="material-icons">description</span>\r
              Descrizione\r
            </label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              rows="3"\r
              placeholder="Descrizione opzionale del prodotto"></textarea>\r
          </div>\r
        </div>\r
\r
        <!-- Prezzo e Quantit\xE0 -->\r
        <div class="grid-form">\r
          <div class="flex flex-col gap-1 flex-1 min-w-300">\r
            <label for="unit_price" class="standard-label">\r
              <span class="material-icons">euro</span>\r
              Prezzo Unitario *\r
            </label>\r
            <input\r
              id="unit_price"\r
              formControlName="unit_price"\r
              type="number"\r
              step="0.001"\r
              min="0"\r
              placeholder="0.000"\r
              [class.error]="unit_price?.invalid && unit_price?.touched">\r
            <div *ngIf="unit_price?.invalid && unit_price?.touched" class="p-sm my-sm rounded flex items-center justify-center gap-sm bg-[color-mix(in srgb,#ef444410%,transparent)] text-red-500 border border-[color-mix(in srgb,#ef444430%,transparent)]">\r
              <span>Il prezzo unitario \xE8 obbligatorio</span>\r
            </div>\r
          </div>\r
\r
          <div class="flex flex-col gap-1 flex-1 min-w-300">\r
            <label for="package_quantity" class="standard-label">\r
              <span class="material-icons">format_list_numbered</span>\r
              Quantit\xE0 per Confezione *\r
            </label>\r
            <input\r
              id="package_quantity"\r
              formControlName="package_quantity"\r
              type="number"\r
              step="0.001"\r
              min="0.001"\r
              placeholder="1"\r
              [class.error]="package_quantity?.invalid && package_quantity?.touched">\r
            <div *ngIf="package_quantity?.invalid && package_quantity?.touched" class="p-sm my-sm rounded flex items-center justify-center gap-sm bg-[color-mix(in srgb,#ef444410%,transparent)] text-red-500 border border-[color-mix(in srgb,#ef444430%,transparent)]">\r
              <span>La quantit\xE0 per confezione \xE8 obbligatoria</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Unit\xE0 di Misura e Disponibilit\xE0 -->\r
        <div class="grid-form">\r
          <div class="flex flex-col gap-1 flex-1 min-w-300">\r
            <label for="unit_id" class="standard-label">\r
              <span class="material-icons">straighten</span>\r
              Unit\xE0 di Misura\r
            </label>\r
            <select id="unit_id" formControlName="unit_id">\r
              <option value="">Seleziona unit\xE0</option>\r
              \r
              <!-- Gruppo per Peso -->\r
              <optgroup label="Peso">\r
                <option *ngFor="let unit of getUnitsByType('weight')" [value]="unit.id">\r
                  {{ unit.name }} ({{ unit.symbol }})\r
                </option>\r
              </optgroup>\r
              \r
              <!-- Gruppo per Volume -->\r
              <optgroup label="Volume">\r
                <option *ngFor="let unit of getUnitsByType('volume')" [value]="unit.id">\r
                  {{ unit.name }} ({{ unit.symbol }})\r
                </option>\r
              </optgroup>\r
              \r
              <!-- Gruppo per Pezzi -->\r
              <optgroup label="Conteggio">\r
                <option *ngFor="let unit of getUnitsByType('piece')" [value]="unit.id">\r
                  {{ unit.name }} ({{ unit.symbol }})\r
                </option>\r
              </optgroup>\r
            </select>\r
          </div>\r
\r
          <div class="flex flex-col gap-1 flex-1 min-w-300">\r
            <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-1)] large">\r
              <input type="checkbox" formControlName="is_available">\r
              <div>\r
                <strong>Prodotto disponibile</strong>\r
                <div class="text-muted">Il prodotto \xE8 attualmente disponibile per la vendita</div>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- Azioni -->\r
        <div class="flex justify-between items-center gap-md mt-lg pt-md border-t border-[var(--smoke-1)]">\r
          <button type="button" class="promethea-button secondary" (click)="resetForm()">\r
            Annulla\r
          </button>\r
          <button \r
            type="submit" \r
            class="promethea-button"\r
            [disabled]="productForm.invalid">\r
            <span class="material-icons">{{ isEditing ? 'save' : 'add' }}</span>\r
            {{ isEditing ? 'Aggiorna' : 'Crea' }} Prodotto\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
</div>`, styles: ["/* src/app/supplier/ingredients/supplier-ingredients/supplier-ingredients.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: var(--gap-sm);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-content {\n  background: var(--background);\n  border-radius: 24px;\n  padding: var(--gap-lg);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--smoke-1);\n  animation: slideUp 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n  position: relative;\n}\n.modal-close {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: var(--gap-sm);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-close:hover {\n  background: var(--smoke-1);\n  color: var(--text-color);\n}\n.modal-body {\n  padding: var(--gap-md) 0;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.ingredient-modal .modal-content {\n  max-width: 700px;\n}\n.product-modal .modal-content {\n  max-width: 600px;\n}\n.supplier-modal .modal-content {\n  max-width: 500px;\n}\n.confirmation-modal .modal-content {\n  max-width: 400px;\n  text-align: center;\n}\n.confirmation-modal .modal-actions {\n  display: flex;\n  gap: var(--gap-sm);\n  justify-content: center;\n  margin-top: var(--gap-lg);\n}\n.full-modal .modal-content {\n  max-width: 95vw;\n  max-height: 95vh;\n}\n@media (max-width: 768px) {\n  .modal-overlay {\n    padding: var(--gap-sm);\n    align-items: flex-end;\n  }\n  .modal-content {\n    border-radius: 24px 24px 0 0;\n    max-height: 85vh;\n    animation: slideUpMobile 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n  }\n  @keyframes slideUpMobile {\n    from {\n      opacity: 0;\n      transform: translateY(100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  .modal-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .modal-close {\n    position: absolute;\n    top: var(--gap-md);\n    right: var(--gap-md);\n  }\n}\n.modal-content::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content::-webkit-scrollbar-track {\n  background: var(--smoke-1);\n  border-radius: 4px;\n}\n.modal-content::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content::-webkit-scrollbar-thumb:hover {\n  background: color-mix(in srgb, var(--primary) 80%, black);\n}\n/*# sourceMappingURL=supplier-ingredients.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierIngredients, { className: "SupplierIngredients", filePath: "src/app/supplier/ingredients/supplier-ingredients/supplier-ingredients.ts", lineNumber: 17 });
})();
export {
  SupplierIngredients
};
//# sourceMappingURL=chunk-L4WTEDMF.js.map
