import {
  SupplierService
} from "./chunk-UVKCIRI6.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CQ6KSR3R.js";
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/suppliers/supplier-manager/supplier-manager.ts
function SupplierManager_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16)(2, "div", 17)(3, "span", 18);
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Caricamento fornitori...");
    \u0275\u0275elementEnd()()()();
  }
}
function SupplierManager_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "div", 22)(21, "button", 23);
    \u0275\u0275listener("click", function SupplierManager_tr_36_Template_button_click_21_listener() {
      const supplier_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editSupplier(supplier_r2));
    });
    \u0275\u0275elementStart(22, "span", 24);
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 25);
    \u0275\u0275listener("click", function SupplierManager_tr_36_Template_button_click_24_listener() {
      const supplier_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSupplier(supplier_r2.id));
    });
    \u0275\u0275element(25, "lucide-angular", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const supplier_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r2.company_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r2.contact_name || "Nessun contatto");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r2.email || "Nessuna email");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r2.phone || "Nessun telefono");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r2.address || "Nessun indirizzo");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(supplier_r2.is_platform_supplier ? "active" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", supplier_r2.is_platform_supplier ? "Piattaforma" : "Locale", " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("size", 20);
  }
}
function SupplierManager_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27)(2, "div", 28)(3, "span", 24);
    \u0275\u0275text(4, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Nessun fornitore trovato");
    \u0275\u0275elementEnd()()()();
  }
}
function SupplierManager_div_38_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Il nome dell'azienda \xE8 obbligatorio ");
    \u0275\u0275elementEnd();
  }
}
function SupplierManager_div_38_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " Inserisci un indirizzo email valido ");
    \u0275\u0275elementEnd();
  }
}
function SupplierManager_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function SupplierManager_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275listener("click", function SupplierManager_div_38_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 35);
    \u0275\u0275listener("click", function SupplierManager_div_38_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 36)(14, "form", 37);
    \u0275\u0275listener("ngSubmit", function SupplierManager_div_38_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(15, "div", 38)(16, "div", 39)(17, "label", 40)(18, "span", 24);
    \u0275\u0275text(19, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Nome Azienda * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 41);
    \u0275\u0275template(22, SupplierManager_div_38_div_22_Template, 2, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 39)(24, "label", 43);
    \u0275\u0275element(25, "lucide-angular", 44);
    \u0275\u0275text(26, " Nome Contatto ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 46)(29, "div", 39)(30, "label", 47);
    \u0275\u0275element(31, "lucide-angular", 48);
    \u0275\u0275text(32, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 49);
    \u0275\u0275template(34, SupplierManager_div_38_div_34_Template, 2, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 39)(36, "label", 50)(37, "span", 24);
    \u0275\u0275text(38, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Telefono ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 39)(42, "label", 52)(43, "span", 24);
    \u0275\u0275text(44, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Indirizzo ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 54)(48, "button", 55);
    \u0275\u0275listener("click", function SupplierManager_div_38_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(49, "span", 24);
    \u0275\u0275text(50, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 56);
    \u0275\u0275listener("click", function SupplierManager_div_38_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(53, "span", 24);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "edit" : "add_circle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "Modifica Fornitore" : "Nuovo Fornitore");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.supplierForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-500", (ctx_r2.company_name == null ? null : ctx_r2.company_name.invalid) && (ctx_r2.company_name == null ? null : ctx_r2.company_name.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.company_name == null ? null : ctx_r2.company_name.invalid) && (ctx_r2.company_name == null ? null : ctx_r2.company_name.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-red-500", (ctx_r2.email == null ? null : ctx_r2.email.invalid) && (ctx_r2.email == null ? null : ctx_r2.email.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.email == null ? null : ctx_r2.email.invalid) && (ctx_r2.email == null ? null : ctx_r2.email.touched));
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r2.supplierForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "save" : "add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing ? "Aggiorna" : "Crea", " Fornitore ");
  }
}
var SupplierManager = class _SupplierManager {
  supplierService = inject(SupplierService);
  fb = inject(FormBuilder);
  suppliers = [];
  showSupplierForm = false;
  isEditing = false;
  currentSupplierId = null;
  supplierForm;
  isLoading = true;
  constructor() {
    this.supplierForm = this.fb.group({
      company_name: ["", [Validators.required, Validators.minLength(2)]],
      contact_name: [""],
      email: ["", [Validators.email]],
      phone: [""],
      address: [""]
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadSuppliers();
    });
  }
  loadSuppliers() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield this.supplierService.loadSuppliers();
        this.supplierService.suppliers$.subscribe((suppliers) => {
          this.suppliers = suppliers;
          this.isLoading = false;
        });
      } catch (error) {
        console.error("Error loading suppliers:", error);
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.supplierForm.invalid) {
        this.markFormGroupTouched();
        return;
      }
      try {
        if (this.isEditing && this.currentSupplierId) {
          const success = yield this.updateSupplier(this.currentSupplierId, this.supplierForm.value);
          if (success) {
            console.log("Fornitore aggiornato con successo");
            this.resetForm();
          }
        } else {
          const supplier = yield this.supplierService.createSupplier(this.supplierForm.value);
          if (supplier) {
            console.log("Fornitore creato con successo");
            this.resetForm();
          }
        }
      } catch (error) {
        console.error("Errore durante il salvataggio:", error);
      }
    });
  }
  updateSupplier(id, updates) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supplierService["supabaseService"].getSupabaseClient().from("suppliers").update(updates).eq("id", id).select().single();
        if (error)
          throw error;
        yield this.loadSuppliers();
        return true;
      } catch (error) {
        console.error("Error updating supplier:", error);
        return false;
      }
    });
  }
  deleteSupplier(id) {
    return __async(this, null, function* () {
      if (confirm("Sei sicuro di voler eliminare questo fornitore?")) {
        try {
          const { error } = yield this.supplierService["supabaseService"].getSupabaseClient().from("suppliers").delete().eq("id", id);
          if (error)
            throw error;
          yield this.loadSuppliers();
          console.log("Fornitore eliminato");
        } catch (error) {
          console.error("Error deleting supplier:", error);
        }
      }
    });
  }
  editSupplier(supplier) {
    this.isEditing = true;
    this.currentSupplierId = supplier.id;
    this.supplierForm.patchValue({
      company_name: supplier.company_name,
      contact_name: supplier.contact_name || "",
      email: supplier.email || "",
      phone: supplier.phone || "",
      address: supplier.address || ""
    });
    this.showSupplierForm = true;
  }
  newSupplier() {
    this.resetForm();
    this.showSupplierForm = true;
    this.isEditing = false;
  }
  resetForm() {
    this.supplierForm.reset({
      company_name: "",
      contact_name: "",
      email: "",
      phone: "",
      address: ""
    });
    this.isEditing = false;
    this.currentSupplierId = null;
    this.showSupplierForm = false;
  }
  markFormGroupTouched() {
    Object.keys(this.supplierForm.controls).forEach((key) => {
      const control = this.supplierForm.get(key);
      control?.markAsTouched();
    });
  }
  // Getters per il template
  get company_name() {
    return this.supplierForm.get("company_name");
  }
  get email() {
    return this.supplierForm.get("email");
  }
  static \u0275fac = function SupplierManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierManager)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierManager, selectors: [["app-supplier-manager"]], decls: 39, vars: 6, consts: [[1, "page-container"], [1, "grid-cards", "p-sm"], ["data-tutorial", "suppliers-cards", 1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "text-muted", "card-footer"], [1, "p-md0", "modal-footer"], ["data-tutorial", "suppliers-add", 1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], ["data-tutorial", "suppliers-table", 1, "table-section", "p-sm"], [1, "crm-table"], [4, "ngIf"], ["class", "supplier-row", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["colspan", "7", 1, "text-center", "p-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md"], [1, "material-icons", "animate-spin"], [1, "supplier-row"], [1, "text-muted"], [1, "chip"], [1, "flex", "gap-sm"], ["title", "Modifica", 1, "icon-button", 3, "click"], [1, "material-icons"], ["title", "Elimina", 1, "icon-button", 3, "click"], ["name", "trash-2", 3, "size"], ["colspan", "7", 1, "empty-state-row"], [1, "empty-state", "p-md0"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "flex"], [1, "header-icon"], [1, "section-title"], [1, "icon-button", 3, "click"], [1, "modal-content"], [1, "form-card", 3, "ngSubmit", "formGroup"], [1, "grid-form", "gap-md", "mt-lg"], [1, "flex", "flex-col", "gap-sm"], ["for", "company_name", 1, "standard-label"], ["id", "company_name", "formControlName", "company_name", "type", "text", "placeholder", "Es: Fornitore Srl"], ["class", "text-red-500 text-sm", 4, "ngIf"], ["for", "contact_name", 1, "standard-label"], ["name", "user", 1, "nav-icon", 3, "size"], ["id", "contact_name", "formControlName", "contact_name", "type", "text", "placeholder", "Nome del referente"], [1, "grid-form", "gap-md"], ["for", "email", 1, "standard-label"], ["name", "mail", 1, "nav-icon", 3, "size"], ["id", "email", "formControlName", "email", "type", "email", "placeholder", "email@fornitore.com"], ["for", "phone", 1, "standard-label"], ["id", "phone", "formControlName", "phone", "type", "tel", "placeholder", "+39 012 345 6789"], ["for", "address", 1, "standard-label"], ["id", "address", "formControlName", "address", "rows", "2", "placeholder", "Indirizzo completo del fornitore"], [1, "modal-footer"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["type", "submit", 1, "promethea-button", 3, "click", "disabled"], [1, "text-red-500", "text-sm"]], template: function SupplierManager_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 5);
      \u0275\u0275text(7, "Fornitori Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "Fornitori registrati");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function SupplierManager_Template_button_click_13_listener() {
        return ctx.newSupplier();
      });
      \u0275\u0275element(14, "lucide-angular", 10);
      \u0275\u0275text(15, " Nuovo Fornitore ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "Nome Azienda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Contatto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Telefono");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Indirizzo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, SupplierManager_tr_35_Template, 7, 0, "tr", 13)(36, SupplierManager_tr_36_Template, 26, 9, "tr", 14)(37, SupplierManager_tr_37_Template, 7, 0, "tr", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(38, SupplierManager_div_38_Template, 56, 14, "div", 15);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.suppliers.length);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.suppliers);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.suppliers.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSupplierForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.supplier-row[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.supplier-row[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-1);\n}\n/*# sourceMappingURL=supplier-manager.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierManager, [{
    type: Component,
    args: [{ selector: "app-supplier-manager", standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- Statistiche -->\r
  <div class="grid-cards p-sm">\r
    <div class="card" data-tutorial="suppliers-cards">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">business</span>\r
        <h3 class="card-title">Fornitori Totali</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ suppliers.length }}</div>\r
      <span class="text-muted card-footer">Fornitori registrati</span>\r
    </div>\r
  </div>\r
\r
  <!-- Azioni -->\r
    <div class="p-md0 modal-footer">\r
        <button class="promethea-button" (click)="newSupplier()" data-tutorial="suppliers-add">\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          Nuovo Fornitore\r
        </button>\r
    </div>\r
\r
  <!-- Lista Fornitori -->\r
    <div class="table-section p-sm" data-tutorial="suppliers-table">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Nome Azienda</th>\r
            <th>Contatto</th>\r
            <th>Email</th>\r
            <th>Telefono</th>\r
            <th>Indirizzo</th>\r
            <th>Tipo</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="isLoading">\r
            <td colspan="7" class="text-center p-xl">\r
              <div class="flex flex-col items-center justify-center gap-md">\r
                <span class="material-icons animate-spin">refresh</span>\r
                <span>Caricamento fornitori...</span>\r
              </div>\r
            </td>\r
          </tr>\r
          \r
          <tr *ngFor="let supplier of suppliers" class="supplier-row">\r
            <td>\r
              <strong>{{ supplier.company_name }}</strong>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ supplier.contact_name || 'Nessun contatto' }}</span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ supplier.email || 'Nessuna email' }}</span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ supplier.phone || 'Nessun telefono' }}</span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ supplier.address || 'Nessun indirizzo' }}</span>\r
            </td>\r
            <td>\r
              <span class="chip" [class]="supplier.is_platform_supplier ? 'active' : 'warning'">\r
                {{ supplier.is_platform_supplier ? 'Piattaforma' : 'Locale' }}\r
              </span>\r
            </td>\r
            <td>\r
              <div class="flex gap-sm">\r
                <button class="icon-button" (click)="editSupplier(supplier)" title="Modifica">\r
                  <span class="material-icons">edit</span>\r
                </button>\r
                <button class="icon-button" (click)="deleteSupplier(supplier.id)" title="Elimina">\r
                  <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
\r
          <tr *ngIf="!isLoading && suppliers.length === 0">\r
            <td colspan="7" class="empty-state-row">\r
              <div class="empty-state p-md0">\r
              <span class="material-icons">local_shipping</span>\r
              <h3>Nessun fornitore trovato</h3>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
</div>\r
\r
<!-- Modal Fornitore -->\r
<div *ngIf="showSupplierForm" class="modal-overlay" (click)="resetForm()">\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
    \r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
    <div class="flex">\r
    <div class="header-icon">\r
        <span class="material-icons">{{ isEditing ? 'edit' : 'add_circle' }}</span>\r
    </div>\r
    <div>\r
      <h1 class="section-title">{{ isEditing ? 'Modifica Fornitore' : 'Nuovo Fornitore' }}</h1>\r
    </div>\r
    </div>\r
      <button class="icon-button" (click)="resetForm()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
    <!-- Contenuto Modal -->\r
    <div class="modal-content">\r
      <form [formGroup]="supplierForm" (ngSubmit)="onSubmit()" class="form-card">\r
        \r
        <!-- Nome Azienda e Contatto -->\r
        <div class="grid-form gap-md mt-lg">\r
          <div class="flex flex-col gap-sm">\r
            <label for="company_name" class="standard-label">\r
              <span class="material-icons">business</span>\r
              Nome Azienda *\r
            </label>\r
            <input\r
              id="company_name"\r
              formControlName="company_name"\r
              type="text"\r
              placeholder="Es: Fornitore Srl"\r
              [class.border-red-500]="company_name?.invalid && company_name?.touched">\r
            <div *ngIf="company_name?.invalid && company_name?.touched" class="text-red-500 text-sm">\r
              Il nome dell'azienda \xE8 obbligatorio\r
            </div>\r
          </div>\r
\r
          <div class="flex flex-col gap-sm">\r
            <label for="contact_name" class="standard-label">\r
              <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
              Nome Contatto\r
            </label>\r
            <input\r
              id="contact_name"\r
              formControlName="contact_name"\r
              type="text"\r
              placeholder="Nome del referente">\r
          </div>\r
        </div>\r
\r
        <!-- Contatti -->\r
        <div class="grid-form gap-md">\r
          <div class="flex flex-col gap-sm">\r
            <label for="email" class="standard-label">\r
              <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
              Email\r
            </label>\r
            <input\r
              id="email"\r
              formControlName="email"\r
              type="email"\r
              placeholder="email@fornitore.com"\r
              [class.border-red-500]="email?.invalid && email?.touched">\r
            <div *ngIf="email?.invalid && email?.touched" class="text-red-500 text-sm">\r
              Inserisci un indirizzo email valido\r
            </div>\r
          </div>\r
\r
          <div class="flex flex-col gap-sm">\r
            <label for="phone" class="standard-label">\r
              <span class="material-icons">phone</span>\r
              Telefono\r
            </label>\r
            <input\r
              id="phone"\r
              formControlName="phone"\r
              type="tel"\r
              placeholder="+39 012 345 6789">\r
          </div>\r
        </div>\r
\r
        <!-- Indirizzo -->\r
        <div class="flex flex-col gap-sm">\r
          <label for="address" class="standard-label">\r
            <span class="material-icons">place</span>\r
            Indirizzo\r
          </label>\r
          <textarea\r
            id="address"\r
            formControlName="address"\r
            rows="2"\r
            placeholder="Indirizzo completo del fornitore"></textarea>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button type="button" class="promethea-button ghost" (click)="resetForm()">\r
        <span class="material-icons">close</span>\r
        Annulla\r
      </button>\r
      <button \r
        type="submit" \r
        class="promethea-button"\r
        [disabled]="supplierForm.invalid"\r
        (click)="onSubmit()">\r
        <span class="material-icons">{{ isEditing ? 'save' : 'add' }}</span>\r
        {{ isEditing ? 'Aggiorna' : 'Crea' }} Fornitore\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/suppliers/supplier-manager/supplier-manager.css */\n.supplier-row {\n  transition: all 0.2s ease;\n}\n.supplier-row:hover {\n  background: var(--smoke-1);\n}\n/*# sourceMappingURL=supplier-manager.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierManager, { className: "SupplierManager", filePath: "src/app/restaurant/suppliers/supplier-manager/supplier-manager.ts", lineNumber: 15 });
})();
export {
  SupplierManager
};
//# sourceMappingURL=chunk-Q4SMB6DS.js.map
