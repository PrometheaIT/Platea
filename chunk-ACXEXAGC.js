import {
  UnitService
} from "./chunk-UIVYXL7P.js";
import {
  SupplierService
} from "./chunk-UVKCIRI6.js";
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
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  IngredientService
} from "./chunk-GCWLAXF5.js";
import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule,
  Search
} from "./chunk-LBEXX5NO.js";
import "./chunk-6SNKM7Z6.js";
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
  Injectable,
  inject,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Piatti/ingredient-group.service.ts
var IngredientGroupService = class _IngredientGroupService extends BaseService {
  constructor() {
    super();
    this.loadData();
  }
  getTableName() {
    return "ingredient_groups";
  }
  // ✅ OVERRIDE COMPLETO PER EVITARE IL FILTRO RESTAURANT_ID
  loadData() {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        console.log("\u{1F504} Caricamento gruppi ingredienti (globali)...");
        const { data: groups, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select(`
          *,
          ingredients:ingredients(count)
        `).eq("is_active", true).order("sort_order").order("name");
        if (error) {
          console.error("\u274C Errore query gruppi:", error);
          throw error;
        }
        console.log(`\u2705 ${groups?.length || 0} gruppi caricati con successo`);
        const processedGroups = (groups || []).map((group) => __spreadProps(__spreadValues({}, group), {
          ingredient_count: group.ingredients?.[0]?.count || 0
        }));
        this.dataSubject.next(processedGroups);
      } catch (error) {
        console.error("Error loading ingredient groups:", error);
        this.handleError("loadData", error);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  // ⚠️ IMPORTANTE: Override del metodo getCurrentRestaurantId per ritornare null
  getCurrentRestaurantId() {
    return __async(this, null, function* () {
      return null;
    });
  }
  getGroups() {
    return this.dataSubject.value;
  }
  getGroupById(id) {
    return this.dataSubject.value.find((g) => g.id === id);
  }
  static \u0275fac = function IngredientGroupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IngredientGroupService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IngredientGroupService, factory: _IngredientGroupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IngredientGroupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/Piatti/ingredient-type.service.ts
var IngredientTypeService = class _IngredientTypeService extends BaseService {
  constructor() {
    super();
    this.loadData();
  }
  getTableName() {
    return "ingredient_types";
  }
  loadData() {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        const { data: types, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select(`
          *,
          group:ingredient_groups(*),
          ingredients:ingredients(count)
        `).eq("is_active", true).order("name");
        if (error)
          throw error;
        const processedTypes = (types || []).map((type) => __spreadProps(__spreadValues({}, type), {
          ingredient_count: type.ingredients?.[0]?.count || 0
        }));
        this.dataSubject.next(processedTypes);
      } catch (error) {
        console.error("Error loading ingredient types:", error);
        this.handleError("loadData", error);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  createType(type) {
    return __async(this, null, function* () {
      try {
        const currentUser = yield this.authService.currentUser$.pipe(take(1)).toPromise();
        const currentUserId = currentUser?.id;
        if (!currentUserId) {
          throw new Error("Utente non autenticato");
        }
        const typeToInsert = __spreadProps(__spreadValues({}, type), {
          is_system: false,
          created_by_user_id: currentUserId,
          restaurant_id: null
          // ✅ Usa null invece di stringa vuota
          // OPPURE rimuovi completamente questa riga se non è necessario
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(typeToInsert).select(`
        *,
        group:ingredient_groups(*)
      `).single();
        if (error)
          throw error;
        yield this.loadData();
        return data;
      } catch (error) {
        console.error("Error creating type:", error);
        return null;
      }
    });
  }
  updateType(id, updates) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update(updates).eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("Error updating type:", error);
        return false;
      }
    });
  }
  deleteType(id) {
    return __async(this, null, function* () {
      try {
        const { data: ingredients, error: checkError } = yield this.supabaseService.getSupabaseClient().from("ingredients").select("id").eq("type_id", id).eq("is_active", true).limit(1);
        if (checkError)
          throw checkError;
        if (ingredients && ingredients.length > 0) {
          throw new Error("Non puoi eliminare una tipologia con ingredienti associati");
        }
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update({ is_active: false }).eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("Error deleting type:", error);
        throw error;
      }
    });
  }
  getTypes() {
    return this.dataSubject.value;
  }
  getTypeById(id) {
    return this.dataSubject.value.find((t) => t.id === id);
  }
  getTypesByGroup(groupId) {
    return this.dataSubject.value.filter((t) => t.group_id === groupId);
  }
  static \u0275fac = function IngredientTypeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IngredientTypeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IngredientTypeService, factory: _IngredientTypeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IngredientTypeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/restaurant/inventory/inventory.ts
function Inventory_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    \u0275\u0275property("value", group_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r1.name, " ");
  }
}
function Inventory_option_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
function Inventory_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r2.getShoppingList().length, ") ");
  }
}
function Inventory_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45)(2, "div", 46)(3, "span", 47);
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Caricamento ingredienti...");
    \u0275\u0275elementEnd()()()();
  }
}
function Inventory_tr_116_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ingredient_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (+", ctx_r2.formatQuantity(ingredient_r5.to_buy_quantity, ingredient_r5), ") ");
  }
}
function Inventory_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 48)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 39)(5, "span", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275template(10, Inventory_tr_116_span_10_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 50);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 51)(23, "button", 52);
    \u0275\u0275listener("click", function Inventory_tr_116_Template_button_click_23_listener() {
      const ingredient_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ingredient_r5.to_buy ? ctx_r2.removeFromShoppingList(ingredient_r5) : ctx_r2.addToShoppingList(ingredient_r5));
    });
    \u0275\u0275elementStart(24, "span", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 53);
    \u0275\u0275listener("click", function Inventory_tr_116_Template_button_click_26_listener() {
      const ingredient_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editIngredient(ingredient_r5));
    });
    \u0275\u0275elementStart(27, "span", 17);
    \u0275\u0275text(28, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 54);
    \u0275\u0275listener("click", function Inventory_tr_116_Template_button_click_29_listener() {
      const ingredient_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteIngredient(ingredient_r5.id));
    });
    \u0275\u0275element(30, "lucide-angular", 55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ingredient_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-green-50", ingredient_r5.to_buy);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ingredient_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ingredient_r5.description || "Nessuna descrizione");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ingredient_r5.current_stock <= ingredient_r5.minimum_stock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ingredient_r5.current_stock, " ", ctx_r2.getUnitSymbol(ingredient_r5.unit_id), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ingredient_r5.to_buy && ingredient_r5.to_buy_quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getSupplierName(ingredient_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(17, 19, ingredient_r5.cost_per_unit, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getStockStatus(ingredient_r5).class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStockStatus(ingredient_r5).text, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-green-500", ingredient_r5.to_buy);
    \u0275\u0275property("title", ingredient_r5.to_buy ? "Rimuovi dalla lista spesa" : "Aggiungi alla lista spesa");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ingredient_r5.to_buy ? "shopping_cart_checkout" : "add_shopping_cart", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 20);
  }
}
function Inventory_tr_117_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, " Prova a modificare i filtri di ricerca ");
    \u0275\u0275elementEnd();
  }
}
function Inventory_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 56)(2, "div", 57)(3, "span", 17);
    \u0275\u0275text(4, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Nessun ingrediente trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Inventory_tr_117_p_7_Template, 2, 0, "p", 58);
    \u0275\u0275elementStart(8, "button", 32);
    \u0275\u0275listener("click", function Inventory_tr_117_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newIngredient());
    });
    \u0275\u0275element(9, "lucide-angular", 33);
    \u0275\u0275text(10, " Aggiungi il primo ingrediente ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.searchTerm || ctx_r2.showLowStockOnly);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
  }
}
function Inventory_div_118_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1, " Il nome \xE8 obbligatorio e deve essere di almeno 2 caratteri ");
    \u0275\u0275elementEnd();
  }
}
function Inventory_div_118_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
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
function Inventory_div_118_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r9 = ctx.$implicit;
    \u0275\u0275property("value", unit_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", unit_r9.name, " (", unit_r9.symbol, ") ");
  }
}
function Inventory_div_118_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r10 = ctx.$implicit;
    \u0275\u0275property("value", unit_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", unit_r10.name, " (", unit_r10.symbol, ") ");
  }
}
function Inventory_div_118_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1, " Il costo per unit\xE0 \xE8 obbligatorio ");
    \u0275\u0275elementEnd();
  }
}
function Inventory_div_118_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    \u0275\u0275property("value", group_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r11.name, " ");
  }
}
function Inventory_div_118_option_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r12 = ctx.$implicit;
    \u0275\u0275property("value", type_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r12.name, " ");
  }
}
function Inventory_div_118_option_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r13 = ctx.$implicit;
    \u0275\u0275property("value", supplier_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", supplier_r13.company_name, " ");
  }
}
function Inventory_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Inventory_div_118_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Inventory_div_118_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "div", 63)(4, "div", 64)(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 66);
    \u0275\u0275listener("click", function Inventory_div_118_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "form", 67);
    \u0275\u0275listener("ngSubmit", function Inventory_div_118_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(14, "div", 68)(15, "label", 69)(16, "span", 17);
    \u0275\u0275text(17, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Nome Ingrediente * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 70);
    \u0275\u0275template(20, Inventory_div_118_div_20_Template, 2, 0, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 25)(22, "div", 68)(23, "label", 72)(24, "span", 17);
    \u0275\u0275text(25, "straighten");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Unit\xE0 di Misura ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 73)(28, "option", 23);
    \u0275\u0275text(29, "Seleziona unit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "optgroup", 74);
    \u0275\u0275template(31, Inventory_div_118_option_31_Template, 2, 3, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "optgroup", 75);
    \u0275\u0275template(33, Inventory_div_118_option_33_Template, 2, 3, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "optgroup", 76);
    \u0275\u0275template(35, Inventory_div_118_option_35_Template, 2, 3, "option", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 68)(37, "label", 77)(38, "span", 17);
    \u0275\u0275text(39, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Costo per Unit\xE0 * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 78);
    \u0275\u0275template(42, Inventory_div_118_div_42_Template, 2, 0, "div", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 79)(44, "label", 80)(45, "span", 17);
    \u0275\u0275text(46, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Descrizione ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "textarea", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 25)(50, "div", 68)(51, "label", 82)(52, "span", 17);
    \u0275\u0275text(53, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Scorta attuale ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 68)(57, "label", 77)(58, "span", 17);
    \u0275\u0275text(59, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Scorta Minima ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 25)(63, "div", 68)(64, "label", 85)(65, "span", 17);
    \u0275\u0275text(66, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Gruppo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "select", 86);
    \u0275\u0275listener("change", function Inventory_div_118_Template_select_change_68_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGroupChangeInForm());
    });
    \u0275\u0275elementStart(69, "option", 23);
    \u0275\u0275text(70, "Nessun gruppo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, Inventory_div_118_option_71_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 68)(73, "label", 87)(74, "span", 17);
    \u0275\u0275text(75, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " Tipologia ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 88)(78, "select", 89)(79, "option", 23);
    \u0275\u0275text(80, "Nessuna tipologia");
    \u0275\u0275elementEnd();
    \u0275\u0275template(81, Inventory_div_118_option_81_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 90);
    \u0275\u0275listener("click", function Inventory_div_118_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTypeModal());
    });
    \u0275\u0275element(83, "lucide-angular", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 91);
    \u0275\u0275text(85, " Le tipologie dipendono dal gruppo selezionato ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 68)(87, "label", 92);
    \u0275\u0275element(88, "lucide-angular", 93);
    \u0275\u0275text(89, " Fornitore ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 88)(91, "select", 94)(92, "option", 23);
    \u0275\u0275text(93, "Nessun fornitore");
    \u0275\u0275elementEnd();
    \u0275\u0275template(94, Inventory_div_118_option_94_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 51)(96, "button", 95);
    \u0275\u0275listener("click", function Inventory_div_118_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSupplierManager());
    });
    \u0275\u0275element(97, "lucide-angular", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(98, "div", 25)(99, "div", 68)(100, "label", 96)(101, "span", 17);
    \u0275\u0275text(102, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, " Data di Scadenza ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "input", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 68)(106, "label", 27);
    \u0275\u0275element(107, "input", 98);
    \u0275\u0275elementStart(108, "div", 29)(109, "strong");
    \u0275\u0275text(110, "Attiva avvisi scorta bassa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 49);
    \u0275\u0275text(112, "Ricevi un avviso quando la scorta scende sotto il livello minimo");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(113, "div", 31)(114, "button", 99);
    \u0275\u0275listener("click", function Inventory_div_118_Template_button_click_114_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275elementStart(115, "span", 17);
    \u0275\u0275text(116, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "button", 100);
    \u0275\u0275listener("click", function Inventory_div_118_Template_button_click_118_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(119, "span", 17);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd();
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "edit" : "add_circle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "Modifica Ingrediente" : "Nuovo Ingrediente");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.ingredientForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-500", (ctx_r2.name == null ? null : ctx_r2.name.invalid) && (ctx_r2.name == null ? null : ctx_r2.name.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.name == null ? null : ctx_r2.name.invalid) && (ctx_r2.name == null ? null : ctx_r2.name.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r2.getUnitsByType("weight"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUnitsByType("volume"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUnitsByType("piece"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-500", (ctx_r2.cost_per_unit == null ? null : ctx_r2.cost_per_unit.invalid) && (ctx_r2.cost_per_unit == null ? null : ctx_r2.cost_per_unit.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.cost_per_unit == null ? null : ctx_r2.cost_per_unit.invalid) && (ctx_r2.cost_per_unit == null ? null : ctx_r2.cost_per_unit.touched));
    \u0275\u0275advance(13);
    \u0275\u0275classProp("border-red-500", (ctx_r2.current_stock == null ? null : ctx_r2.current_stock.invalid) && (ctx_r2.current_stock == null ? null : ctx_r2.current_stock.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-500", (ctx_r2.minimum_stock == null ? null : ctx_r2.minimum_stock.invalid) && (ctx_r2.minimum_stock == null ? null : ctx_r2.minimum_stock.touched));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.sortedIngredientGroups);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r2.getFilteredTypesForForm().length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getFilteredTypesForForm());
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.suppliers);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(21);
    \u0275\u0275property("disabled", ctx_r2.ingredientForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isEditing ? "save" : "add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing ? "Aggiorna" : "Crea", " Ingrediente ");
  }
}
function Inventory_div_119_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 17);
    \u0275\u0275text(2, "shopping_basket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun ingrediente nella lista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 49);
    \u0275\u0275text(6, "Clicca sull'icona del carrello per aggiungere ingredienti");
    \u0275\u0275elementEnd()();
  }
}
function Inventory_div_119_div_18_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 113)(6, "button", 114);
    \u0275\u0275listener("click", function Inventory_div_119_div_18_tr_18_Template_button_click_6_listener() {
      const item_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.decreaseQuantity(item_r16));
    });
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 115)(10, "input", 116);
    \u0275\u0275listener("change", function Inventory_div_119_div_18_tr_18_Template_input_change_10_listener($event) {
      const item_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateShoppingListQuantity(item_r16, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 114);
    \u0275\u0275listener("click", function Inventory_div_119_div_18_tr_18_Template_button_click_11_listener() {
      const item_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.increaseQuantity(item_r16));
    });
    \u0275\u0275element(12, "lucide-angular", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 117);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "button", 118);
    \u0275\u0275listener("click", function Inventory_div_119_div_18_tr_18_Template_button_click_21_listener() {
      const item_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeFromShoppingList(item_r16));
    });
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23, "remove_shopping_cart");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r16.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Diminuisci di " + ctx_r2.getQuantityStep(item_r16));
    \u0275\u0275advance(4);
    \u0275\u0275property("step", ctx_r2.getQuantityStep(item_r16))("min", ctx_r2.allowsDecimals(item_r16) ? 0.1 : 1)("value", item_r16.to_buy_quantity || ctx_r2.getStandardQuantity(item_r16));
    \u0275\u0275attribute("inputmode", ctx_r2.allowsDecimals(item_r16) ? "decimal" : "numeric");
    \u0275\u0275advance();
    \u0275\u0275property("title", "Aumenta di " + ctx_r2.getQuantityStep(item_r16));
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getUnitSymbol(item_r16.unit_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getSupplierName(item_r16));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", (item_r16.cost_per_unit * (item_r16.to_buy_quantity || 1)).toFixed(2), "");
  }
}
function Inventory_div_119_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 107)(2, "table", 38)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Ingrediente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Quantit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Unit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Fornitore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Costo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, Inventory_div_119_div_18_tr_18_Template, 24, 11, "tr", 108);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 109)(20, "div", 110)(21, "div")(22, "h3", 111);
    \u0275\u0275text(23, "Totale stimato");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 112);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.getShoppingList());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" \u20AC", ctx_r2.shoppingListTotal.toFixed(2), " ");
  }
}
function Inventory_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Inventory_div_119_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showShoppingList = false);
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function Inventory_div_119_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "div", 63)(4, "div", 64)(5, "span", 17);
    \u0275\u0275text(6, "shopping_cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 65);
    \u0275\u0275text(9, "Lista della Spesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 66);
    \u0275\u0275listener("click", function Inventory_div_119_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showShoppingList = false);
    });
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 102)(16, "div", 103);
    \u0275\u0275template(17, Inventory_div_119_div_17_Template, 7, 0, "div", 104)(18, Inventory_div_119_div_18_Template, 26, 2, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 31)(20, "button", 34);
    \u0275\u0275listener("click", function Inventory_div_119_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showShoppingList = false);
    });
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Chiudi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 105);
    \u0275\u0275listener("click", function Inventory_div_119_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.printShoppingList());
    });
    \u0275\u0275elementStart(25, "span", 17);
    \u0275\u0275text(26, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Stampa Lista ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 106);
    \u0275\u0275listener("click", function Inventory_div_119_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearShoppingList());
    });
    \u0275\u0275elementStart(29, "span", 17);
    \u0275\u0275text(30, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Acquisto Completato ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r2.getShoppingList().length, " ingredienti da acquistare");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.getShoppingList().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getShoppingList().length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.getShoppingList().length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.getShoppingList().length === 0);
  }
}
function Inventory_div_120_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    \u0275\u0275property("value", group_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", group_r18.name, " (", i_r19, ") ");
  }
}
function Inventory_div_120_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1, " Seleziona un gruppo ");
    \u0275\u0275elementEnd();
  }
}
function Inventory_div_120_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1, " Il nome \xE8 obbligatorio (min. 2 caratteri) ");
    \u0275\u0275elementEnd();
  }
}
function Inventory_div_120_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 51)(2, "span", 129);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 130);
    \u0275\u0275text(5, " Questa tipologia sar\xE0 visibile a ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "tutti i ristoranti");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ". ");
    \u0275\u0275elementEnd()()();
  }
}
function Inventory_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function Inventory_div_120_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTypeModal());
    });
    \u0275\u0275elementStart(1, "div", 119);
    \u0275\u0275listener("click", function Inventory_div_120_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "div", 63)(4, "div", 64)(5, "span", 17);
    \u0275\u0275text(6, "add_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 65);
    \u0275\u0275text(9, "Nuova Tipologia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 49);
    \u0275\u0275text(11, "Crea una nuova tipologia di ingrediente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 66);
    \u0275\u0275listener("click", function Inventory_div_120_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTypeModal());
    });
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 103)(16, "form", 120);
    \u0275\u0275listener("ngSubmit", function Inventory_div_120_Template_form_ngSubmit_16_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveType());
    });
    \u0275\u0275elementStart(17, "div", 14)(18, "label", 121)(19, "span", 17);
    \u0275\u0275text(20, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Gruppo * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 86);
    \u0275\u0275listener("change", function Inventory_div_120_Template_select_change_22_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGroupChangeInForm());
    });
    \u0275\u0275elementStart(23, "option", 23);
    \u0275\u0275text(24, "Nessun gruppo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, Inventory_div_120_option_25_Template, 2, 3, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, Inventory_div_120_div_26_Template, 2, 0, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 14)(28, "label", 122)(29, "span", 17);
    \u0275\u0275text(30, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Nome Tipologia * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 123);
    \u0275\u0275template(33, Inventory_div_120_div_33_Template, 2, 0, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 14)(35, "label", 124)(36, "span", 17);
    \u0275\u0275text(37, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Descrizione (opzionale) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "textarea", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, Inventory_div_120_div_40_Template, 9, 0, "div", 126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 31)(42, "button", 99);
    \u0275\u0275listener("click", function Inventory_div_120_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTypeModal());
    });
    \u0275\u0275elementStart(43, "span", 17);
    \u0275\u0275text(44, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 127);
    \u0275\u0275listener("click", function Inventory_div_120_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveType());
    });
    \u0275\u0275element(47, "lucide-angular", 33);
    \u0275\u0275text(48, " Crea Tipologia ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("formGroup", ctx_r2.typeForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.sortedIngredientGroups);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r2.typeForm.get("group_id")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.typeForm.get("group_id")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.typeForm.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.typeForm.get("name")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.typeForm.get("group_id")) == null ? null : tmp_5_0.value);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.typeForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
var Inventory = class _Inventory {
  ingredientService = inject(IngredientService);
  unitService = inject(UnitService);
  supplierService = inject(SupplierService);
  ingredientGroupService = inject(IngredientGroupService);
  ingredientTypeService = inject(IngredientTypeService);
  fb = inject(FormBuilder);
  router = inject(Router);
  SearchIcon = Search;
  ingredients = [];
  units = [];
  suppliers = [];
  ingredientGroups = [];
  ingredientTypes = [];
  filteredIngredients = [];
  showTypeModal = false;
  typeForm;
  previousGroupId = null;
  filteredTypesForForm = [];
  showIngredientForm = false;
  isEditing = false;
  currentIngredientId = null;
  searchTerm = "";
  ingredientForm;
  isLoading = true;
  // Filtri
  showLowStockOnly = false;
  showShoppingListOnly = false;
  sortBy = "name";
  // Filtri aggiuntivi per gruppo e tipologia
  selectedGroupId = null;
  selectedTypeId = null;
  // Lista della spesa
  showShoppingList = false;
  shoppingListTotal = 0;
  // Getter per statistiche
  get lowStockCount() {
    return this.ingredientService.getLowStockIngredients().length;
  }
  // Getter per lista della spesa
  get shoppingListCount() {
    return this.getShoppingList().length;
  }
  constructor() {
    this.ingredientForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      unit_id: [""],
      current_stock: [0, [Validators.required, Validators.min(0)]],
      minimum_stock: [0, [Validators.required, Validators.min(0)]],
      cost_per_unit: [0, [Validators.required, Validators.min(0)]],
      alert_enabled: [true],
      expiry_date: [null],
      supplier_id: [null],
      to_buy: [false],
      to_buy_quantity: [null],
      group_id: [null],
      type_id: [null]
    });
    this.typeForm = this.fb.group({
      group_id: ["", Validators.required],
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""]
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loadData();
    });
  }
  loadData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      console.log("\u{1F504} Inizio caricamento dati...");
      this.setupSubscriptions();
      try {
        yield this.loadAllServices();
        console.log("\u2705 Dati caricati con successo");
      } catch (error) {
        console.error("\u274C Errore nel caricamento dati:", error);
        this.loadFallbackData();
      } finally {
        this.isLoading = false;
      }
    });
  }
  setupSubscriptions() {
    this.unitService.units$.subscribe((units) => {
      console.log("\u{1F4CF} Unit\xE0 caricate:", units.length);
      this.units = units;
    });
    this.supplierService.suppliers$.subscribe((suppliers) => {
      console.log("\u{1F3ED} Fornitori caricati:", suppliers.length);
      this.suppliers = suppliers;
    });
    this.ingredientGroupService.data$.subscribe((groups) => {
      console.log("\u{1F4C2} Gruppi caricati:", groups.length);
      this.ingredientGroups = groups;
    });
    this.ingredientTypeService.data$.subscribe((types) => {
      console.log("\u{1F3F7}\uFE0F Tipologie caricate:", types.length);
      this.ingredientTypes = types;
    });
    this.ingredientService.data$.subscribe((ingredients) => {
      console.log("\u{1F969} Ingredienti caricati:", ingredients.length);
      this.ingredients = ingredients;
      this.applyFilters();
      this.calculateShoppingListTotal();
    });
  }
  loadAllServices() {
    return __async(this, null, function* () {
      const promises = [
        this.ingredientService.loadIngredients(),
        this.supplierService.loadSuppliers(),
        this.ingredientTypeService.loadData(),
        this.ingredientGroupService.loadData()
      ];
      yield Promise.all(promises);
    });
  }
  // Metodo di fallback se tutto fallisce
  loadFallbackData() {
    console.log("\u{1F4CB} Caricamento dati di fallback...");
    this.ingredientGroups = [
      { id: "1", name: "Pesce", color: "#3B82F6", sort_order: 1, is_active: true, is_system: true },
      { id: "2", name: "Carni Rosse", color: "#DC2626", sort_order: 2, is_active: true, is_system: true },
      { id: "3", name: "Carni Bianche", color: "#F87171", sort_order: 3, is_active: true, is_system: true },
      { id: "4", name: "Verdura", color: "#10B981", sort_order: 4, is_active: true, is_system: true },
      { id: "5", name: "Frutta", color: "#34D399", sort_order: 5, is_active: true, is_system: true },
      { id: "6", name: "Formaggi", color: "#F59E0B", sort_order: 6, is_active: true, is_system: true },
      { id: "7", name: "Latticini", color: "#FCD34D", sort_order: 7, is_active: true, is_system: true },
      { id: "8", name: "Pasta", color: "#D97706", sort_order: 8, is_active: true, is_system: true },
      { id: "9", name: "Oli e Grassi", color: "#A3E635", sort_order: 9, is_active: true, is_system: true },
      { id: "10", name: "Spezie", color: "#65A30D", sort_order: 10, is_active: true, is_system: true }
    ];
    this.ingredientTypes = [];
    console.log(`\u2705 ${this.ingredientGroups.length} gruppi di fallback caricati`);
  }
  applyFilters() {
    let filtered = this.ingredients;
    if (this.searchTerm) {
      filtered = this.ingredientService.searchIngredients(this.searchTerm);
    }
    if (this.selectedGroupId) {
      filtered = filtered.filter((ingredient) => ingredient.group_id === this.selectedGroupId);
    }
    if (this.selectedTypeId) {
      filtered = filtered.filter((ingredient) => ingredient.type_id === this.selectedTypeId);
    }
    if (this.showLowStockOnly) {
      filtered = filtered.filter((ingredient) => ingredient.alert_enabled && ingredient.current_stock <= ingredient.minimum_stock);
    }
    if (this.showShoppingListOnly) {
      filtered = filtered.filter((ingredient) => ingredient.to_buy);
    }
    filtered = [...filtered].sort((a, b) => {
      switch (this.sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "stock":
          return a.current_stock - b.current_stock;
        case "cost":
          return a.cost_per_unit - b.cost_per_unit;
        default:
          return 0;
      }
    });
    this.filteredIngredients = filtered;
  }
  // NUOVI METODI PER FILTRARE PER GRUPPO E TIPOLOGIA
  onGroupFilterChange(groupId) {
    this.selectedGroupId = groupId || null;
    this.selectedTypeId = null;
    this.applyFilters();
  }
  onTypeFilterChange(typeId) {
    this.selectedTypeId = typeId || null;
    this.applyFilters();
  }
  clearAllFilters() {
    this.searchTerm = "";
    this.selectedGroupId = null;
    this.selectedTypeId = null;
    this.showLowStockOnly = false;
    this.showShoppingListOnly = false;
    this.applyFilters();
  }
  // METODO PER OTTENERE IL NOME DEL GRUPPO
  getGroupName(groupId) {
    if (!groupId)
      return "Senza gruppo";
    const group = this.ingredientGroups.find((g) => g.id === groupId);
    return group ? group.name : "Sconosciuto";
  }
  // METODO PER OTTENERE IL NOME DELLA TIPOLOGIA
  getTypeName(typeId) {
    if (!typeId)
      return "Senza tipologia";
    const type = this.ingredientTypes.find((t) => t.id === typeId);
    return type ? type.name : "Sconosciuto";
  }
  // METODO PER OTTENERE IL COLORE DEL GRUPPO
  getGroupColor(groupId) {
    if (!groupId)
      return "#9CA3AF";
    const group = this.ingredientGroups.find((g) => g.id === groupId);
    return group ? group.color : "#808080";
  }
  // MODIFICARE IL METODO editIngredient PER INCLUDERE I NUOVI CAMPI
  editIngredient(ingredient) {
    this.isEditing = true;
    this.currentIngredientId = ingredient.id;
    const formValues = {
      name: ingredient.name,
      description: ingredient.description || "",
      unit_id: ingredient.unit_id || "",
      current_stock: ingredient.current_stock,
      minimum_stock: ingredient.minimum_stock,
      cost_per_unit: ingredient.cost_per_unit,
      alert_enabled: ingredient.alert_enabled,
      expiry_date: ingredient.expiry_date || "",
      supplier_id: ingredient.supplier_id || null,
      to_buy: ingredient.to_buy || false,
      to_buy_quantity: ingredient.to_buy_quantity || null,
      // NUOVI CAMPI
      group_id: ingredient.group_id || null,
      type_id: ingredient.type_id || null
    };
    this.ingredientForm.patchValue(formValues);
    this.showIngredientForm = true;
  }
  onSearchChange(searchTerm) {
    this.searchTerm = searchTerm;
    this.applyFilters();
  }
  toggleLowStockFilter() {
    this.showLowStockOnly = !this.showLowStockOnly;
    this.applyFilters();
  }
  toggleShoppingListFilter() {
    this.showShoppingListOnly = !this.showShoppingListOnly;
    this.applyFilters();
  }
  onSortChange(sortBy) {
    this.sortBy = sortBy;
    this.applyFilters();
  }
  // METODI SEMPLIFICATI PER LA LISTA DELLA SPESA
  addToShoppingList(ingredient) {
    let quantityToBuy;
    const missingStock = Math.max(ingredient.minimum_stock - ingredient.current_stock, 0);
    if (missingStock > 0) {
      quantityToBuy = missingStock;
    } else {
      quantityToBuy = this.getStandardQuantity(ingredient);
    }
    const index = this.ingredients.findIndex((i) => i.id === ingredient.id);
    if (index !== -1) {
      this.ingredients[index].to_buy = true;
      this.ingredients[index].to_buy_quantity = quantityToBuy;
      this.calculateShoppingListTotal();
      this.applyFilters();
    }
    const update = {
      to_buy: true,
      to_buy_quantity: quantityToBuy
    };
    this.ingredientService.updateIngredient(ingredient.id, update).then((success) => {
      if (!success) {
        console.error("Errore nell'aggiornamento del database");
        if (index !== -1) {
          this.ingredients[index].to_buy = false;
          this.ingredients[index].to_buy_quantity = null;
          this.calculateShoppingListTotal();
          this.applyFilters();
        }
      }
    });
  }
  // Determina la quantità standard in base all'unità
  getStandardQuantity(ingredient) {
    const unitSymbol = this.getUnitSymbol(ingredient.unit_id);
    switch (unitSymbol) {
      case "kg":
        return 1;
      // 1 kg
      case "L":
        return 1;
      // 1 litro
      case "g":
        return 1e3;
      // 1 kg (1000g)
      case "mL":
        return 1e3;
      // 1 litro (1000mL)
      case "pz":
        return 1;
      // 1 pezzo
      default:
        return 1;
    }
  }
  // Metodo per aggiornare quantità tramite input nella lista della spesa
  updateShoppingListQuantity(ingredient, event) {
    const input = event.target;
    let newQuantity = parseFloat(input.value);
    if (isNaN(newQuantity)) {
      newQuantity = this.getStandardQuantity(ingredient);
    }
    const minQuantity = this.allowsDecimals(ingredient) ? 0.1 : 1;
    newQuantity = Math.max(newQuantity, minQuantity);
    if (!this.allowsDecimals(ingredient)) {
      newQuantity = Math.ceil(newQuantity);
    }
    this.updateIngredientQuantity(ingredient, newQuantity);
  }
  // Incrementa la quantità
  increaseQuantity(ingredient) {
    const currentQuantity = ingredient.to_buy_quantity || this.getStandardQuantity(ingredient);
    const step = this.getQuantityStep(ingredient);
    const newQuantity = currentQuantity + step;
    this.updateIngredientQuantity(ingredient, newQuantity);
  }
  // Decrementa la quantità
  decreaseQuantity(ingredient) {
    const currentQuantity = ingredient.to_buy_quantity || this.getStandardQuantity(ingredient);
    const step = this.getQuantityStep(ingredient);
    const minQuantity = this.allowsDecimals(ingredient) ? 0.1 : 1;
    const newQuantity = Math.max(currentQuantity - step, minQuantity);
    this.updateIngredientQuantity(ingredient, newQuantity);
  }
  updateIngredientQuantity(ingredient, quantity) {
    const index = this.ingredients.findIndex((i) => i.id === ingredient.id);
    if (index !== -1) {
      this.ingredients[index].to_buy_quantity = quantity;
      this.calculateShoppingListTotal();
      this.applyFilters();
    }
    const update = {
      to_buy_quantity: quantity
    };
    this.ingredientService.updateIngredient(ingredient.id, update).then((success) => {
      if (!success) {
        console.error("Errore nell'aggiornamento del database");
      }
    });
  }
  getQuantityStep(ingredient) {
    if (!ingredient.unit_id)
      return 1;
    const unit = this.units.find((u) => u.id === ingredient.unit_id);
    if (!unit)
      return 1;
    if (unit.type === "weight") {
      if (unit.symbol === "kg")
        return 1;
      if (unit.symbol === "g")
        return 1e3;
    }
    if (unit.type === "volume") {
      if (unit.symbol === "L")
        return 1;
      if (unit.symbol === "mL")
        return 1e3;
    }
    return 1;
  }
  // Determina se l'unità permette decimali
  allowsDecimals(ingredient) {
    if (!ingredient.unit_id)
      return false;
    const unit = this.units.find((u) => u.id === ingredient.unit_id);
    if (!unit)
      return false;
    return unit.type === "weight" || unit.type === "volume";
  }
  // Rimuove dalla lista della spesa
  removeFromShoppingList(ingredient) {
    const index = this.ingredients.findIndex((i) => i.id === ingredient.id);
    if (index !== -1) {
      this.ingredients[index].to_buy = false;
      this.ingredients[index].to_buy_quantity = null;
      this.calculateShoppingListTotal();
      this.applyFilters();
    }
    const update = {
      to_buy: false,
      to_buy_quantity: null
    };
    this.ingredientService.updateIngredient(ingredient.id, update).then((success) => {
      if (!success) {
        console.error("Errore nell'aggiornamento del database");
        if (index !== -1) {
          this.ingredients[index].to_buy = true;
          this.ingredients[index].to_buy_quantity = ingredient.to_buy_quantity;
          this.calculateShoppingListTotal();
          this.applyFilters();
        }
      }
    });
  }
  // Calcola il totale della lista della spesa
  calculateShoppingListTotal() {
    const ingredientsToBuy = this.getShoppingList();
    this.shoppingListTotal = ingredientsToBuy.reduce((total, ingredient) => {
      const quantity = ingredient.to_buy_quantity || 1;
      return total + ingredient.cost_per_unit * quantity;
    }, 0);
  }
  // Ottiene la lista della spesa
  getShoppingList() {
    return this.ingredients.filter((ingredient) => ingredient.to_buy);
  }
  // Azzera la lista della spesa dopo l'acquisto
  clearShoppingList() {
    return __async(this, null, function* () {
      if (confirm("Vuoi azzerare la lista della spesa? Le scorte verranno aggiornate con le quantit\xE0 acquistate.")) {
        const shoppingList = this.getShoppingList();
        for (const ingredient of shoppingList) {
          const newStock = ingredient.current_stock + (ingredient.to_buy_quantity || 0);
          const update = {
            to_buy: false,
            to_buy_quantity: null,
            current_stock: newStock
          };
          yield this.ingredientService.updateIngredient(ingredient.id, update);
        }
        console.log("Lista della spesa azzerata e scorte aggiornate");
        this.loadData();
        this.showShoppingList = false;
      }
    });
  }
  // Stampa la lista della spesa
  printShoppingList() {
    const shoppingList = this.getShoppingList();
    if (shoppingList.length === 0) {
      alert("La lista della spesa \xE8 vuota!");
      return;
    }
    const listText = shoppingList.map((item) => `- ${item.name}: ${item.to_buy_quantity || 1} ${this.getUnitSymbol(item.unit_id)}`).join("\n");
    const totalText = `

Totale stimato: \u20AC${this.shoppingListTotal.toFixed(2)}`;
    const fullText = `LISTA DELLA SPESA

${listText}${totalText}`;
    if (confirm(fullText + "\n\nVuoi stampare la lista?")) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Lista della Spesa</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #333; }
                ul { list-style-type: none; padding: 0; }
                li { padding: 5px 0; border-bottom: 1px solid #eee; }
                .total { font-size: 18px; font-weight: bold; margin-top: 20px; }
              </style>
            </head>
            <body>
              <h1>Lista della Spesa</h1>
              <ul>
                ${shoppingList.map((item) => `<li>${item.name}: ${item.to_buy_quantity || 1} ${this.getUnitSymbol(item.unit_id)} - \u20AC${(item.cost_per_unit * (item.to_buy_quantity || 1)).toFixed(2)}</li>`).join("")}
              </ul>
              <div class="total">
                Totale: \u20AC${this.shoppingListTotal.toFixed(2)}
              </div>
              <p style="margin-top: 30px; color: #666; font-size: 12px;">
                Data: ${(/* @__PURE__ */ new Date()).toLocaleDateString("it-IT")}
              </p>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  }
  // METODI FORM (ESISTENTI) - non cambiano
  onSubmit() {
    return __async(this, null, function* () {
      if (this.ingredientForm.invalid) {
        this.markFormGroupTouched();
        return;
      }
      const formValue = this.ingredientForm.value;
      const cleanedFormValue = __spreadProps(__spreadValues({}, formValue), {
        expiry_date: formValue.expiry_date === "" ? null : formValue.expiry_date,
        supplier_id: formValue.supplier_id === "" ? null : formValue.supplier_id,
        to_buy_quantity: formValue.to_buy_quantity === "" ? null : formValue.to_buy_quantity,
        // NUOVI CAMPI
        group_id: formValue.group_id === "" ? null : formValue.group_id,
        type_id: formValue.type_id === "" ? null : formValue.type_id
      });
      try {
        if (this.isEditing && this.currentIngredientId) {
          const success = yield this.ingredientService.updateIngredient(this.currentIngredientId, cleanedFormValue);
          if (success) {
            console.log("Ingrediente aggiornato con successo");
            this.resetForm();
          }
        } else {
          const ingredient = yield this.ingredientService.createIngredient(cleanedFormValue);
          if (ingredient) {
            console.log("Ingrediente creato con successo");
            this.resetForm();
          }
        }
      } catch (error) {
        console.error("Errore durante il salvataggio:", error);
      }
    });
  }
  deleteIngredient(id) {
    return __async(this, null, function* () {
      if (confirm("Sei sicuro di voler eliminare questo ingrediente?")) {
        const success = yield this.ingredientService.deleteIngredient(id);
        if (success) {
          console.log("Ingrediente eliminato");
        }
      }
    });
  }
  newIngredient() {
    this.resetForm();
    this.showIngredientForm = true;
    this.isEditing = false;
  }
  resetForm() {
    this.ingredientForm.reset({
      name: "",
      description: "",
      unit_id: "",
      current_stock: 0,
      minimum_stock: 0,
      cost_per_unit: 0,
      alert_enabled: true,
      expiry_date: "",
      supplier_id: null,
      to_buy: false,
      to_buy_quantity: null,
      // NUOVI CAMPI
      group_id: null,
      type_id: null
    });
    this.isEditing = false;
    this.currentIngredientId = null;
    this.showIngredientForm = false;
  }
  // ALTRI METODI UTILI
  goToSupplierManager() {
    this.router.navigate(["/restaurant/suppliers"]);
  }
  getUnitSymbol(unitId) {
    if (!unitId)
      return "";
    const unit = this.units.find((u) => u.id === unitId);
    return unit ? unit.symbol : "";
  }
  shouldAlert(ingredient) {
    return ingredient.alert_enabled && ingredient.current_stock <= ingredient.minimum_stock;
  }
  getStockStatus(ingredient) {
    if (this.shouldAlert(ingredient)) {
      return { class: "inactive", text: "Scorta Bassa" };
    } else if (ingredient.current_stock <= ingredient.minimum_stock * 1.5) {
      return { class: "warning", text: "Scorta Media" };
    } else {
      return { class: "active", text: "Scorta OK" };
    }
  }
  getSupplierName(ingredient) {
    if (!ingredient.supplier_id)
      return "Nessun fornitore";
    if (ingredient.suppliers) {
      return ingredient.suppliers.company_name;
    }
    const supplier = this.suppliers.find((s) => s.id === ingredient.supplier_id);
    return supplier ? supplier.company_name : "Fornitore sconosciuto";
  }
  markFormGroupTouched() {
    Object.keys(this.ingredientForm.controls).forEach((key) => {
      const control = this.ingredientForm.get(key);
      control?.markAsTouched();
    });
  }
  // Getters per il template
  get name() {
    return this.ingredientForm.get("name");
  }
  get current_stock() {
    return this.ingredientForm.get("current_stock");
  }
  get minimum_stock() {
    return this.ingredientForm.get("minimum_stock");
  }
  get cost_per_unit() {
    return this.ingredientForm.get("cost_per_unit");
  }
  getUnitsByType(type) {
    return this.unitService.getUnitsByType(type);
  }
  // Metodo per formattare la quantità in base all'unità
  formatQuantity(quantity, ingredient) {
    if (!quantity)
      return "0";
    if (this.allowsDecimals(ingredient)) {
      const formatted = quantity.toFixed(3);
      return formatted.replace(/\.?0+$/, "");
    }
    return Math.round(quantity).toString();
  }
  get group_id() {
    return this.ingredientForm.get("group_id");
  }
  get type_id() {
    return this.ingredientForm.get("type_id");
  }
  goToIngredientGroups() {
    this.router.navigate(["/ingredients/groups"]);
  }
  goToIngredientTypes() {
    this.router.navigate(["/ingredients/types"]);
  }
  // Metodi per il modal delle tipologie
  openTypeModal() {
    this.showTypeModal = true;
  }
  closeTypeModal() {
    this.showTypeModal = false;
    this.typeForm.reset();
  }
  getSelectedGroupName() {
    const groupId = this.typeForm.get("group_id")?.value;
    if (!groupId)
      return "";
    const group = this.ingredientGroups.find((g) => g.id === groupId);
    return group ? group.name : "";
  }
  saveType() {
    return __async(this, null, function* () {
      if (this.typeForm.invalid) {
        this.markTypeFormTouched();
        return;
      }
      try {
        const typeData = this.typeForm.value;
        const newType = yield this.ingredientTypeService.createType(typeData);
        if (newType) {
          console.log("Tipologia creata con successo");
          alert("Tipologia creata con successo! Sar\xE0 visibile a tutti i ristoranti.");
          this.closeTypeModal();
          yield this.ingredientTypeService.loadData();
        }
      } catch (error) {
        console.error("Errore durante la creazione della tipologia:", error);
        alert(`Errore: ${error.message || "Impossibile creare la tipologia"}`);
      }
    });
  }
  markTypeFormTouched() {
    Object.keys(this.typeForm.controls).forEach((key) => {
      const control = this.typeForm.get(key);
      control?.markAsTouched();
    });
  }
  // Metodo chiamato quando cambia il gruppo nel form
  onGroupChangeInForm() {
    const groupId = this.ingredientForm.get("group_id")?.value;
    if (groupId !== this.previousGroupId) {
      this.ingredientForm.get("type_id")?.setValue("");
      this.previousGroupId = groupId;
    }
    this.filteredTypesForForm = this.getFilteredTypesForForm();
  }
  // Apre il modal per creare una nuova tipologia
  openNewTypeModalFromForm() {
    const selectedGroupId = this.ingredientForm.get("group_id")?.value;
    if (selectedGroupId) {
      this.typeForm.patchValue({
        group_id: selectedGroupId
      });
    }
    this.showTypeModal = true;
  }
  loadGroupsDirectly() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F504} Tentativo caricamento diretto gruppi...");
        const { data: groups, error } = yield this.ingredientGroupService.getSupabaseClientPublic().from("ingredient_groups").select("*").eq("is_active", true).order("sort_order").order("name");
        if (error) {
          console.error("\u274C Errore caricamento diretto gruppi:", error);
          return;
        }
        console.log(`\u2705 ${groups?.length || 0} gruppi caricati direttamente`);
        this.ingredientGroups = groups || [];
      } catch (error) {
        console.error("\u{1F4A5} Errore in loadGroupsDirectly:", error);
      }
    });
  }
  createComposedIngredient() {
    this.router.navigate(["/food-cost"], {
      queryParams: {
        mode: "ingredient",
        fromInventory: true
      }
    });
  }
  // Getter per gruppi ordinati
  get sortedIngredientGroups() {
    if (!this.ingredientGroups || !Array.isArray(this.ingredientGroups)) {
      return [];
    }
    return [...this.ingredientGroups].filter((group) => group.is_active !== false).sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }
  // Getter per tipologie ordinate (se vuoi ordinare anche quelle)
  get sortedIngredientTypes() {
    if (!this.ingredientTypes || !Array.isArray(this.ingredientTypes)) {
      return [];
    }
    return [...this.ingredientTypes].sort((a, b) => a.name.localeCompare(b.name));
  }
  // METODO PER OTTENERE LE TIPOLOGIE FILTRATE PER IL GRUPPO SELEZIONATO NEL FORM
  getFilteredTypes() {
    const groupId = this.ingredientForm.get("group_id")?.value;
    if (!groupId) {
      return this.sortedIngredientTypes;
    }
    return this.sortedIngredientTypes.filter((type) => type.group_id === groupId);
  }
  // Aggiorna anche il metodo getFilteredTypesForForm
  getFilteredTypesForForm() {
    const groupId = this.ingredientForm.get("group_id")?.value;
    if (!groupId) {
      return this.sortedIngredientTypes;
    }
    return this.sortedIngredientTypes.filter((type) => type.group_id === groupId);
  }
  goToIngredientSearch() {
    this.router.navigate(["/restaurant/ingredient-search"]);
  }
  static \u0275fac = function Inventory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inventory)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Inventory, selectors: [["app-inventory"]], decls: 121, vars: 26, consts: [[1, "page-container"], [1, "grid-cards", "p-sm"], ["data-tutorial", "inventory-total", 1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "text-muted", "card-footer"], ["data-tutorial", "inventory-low-stock", 1, "card"], ["data-tutorial", "inventory-shopping-list", 1, "card"], [1, "card-footer"], [1, "promethea-button", "ghost", "mt-auto", 3, "click", "disabled"], [1, "form-card", "mt-lg"], ["data-tutorial", "inventory-search"], [1, "form-row"], [1, "form-group", "mb-lg"], [1, "standard-label"], [1, "material-icons"], ["type", "text", "placeholder", "Cerca per nome o descrizione...", 3, "input", "value"], [3, "change", "value"], ["value", "name"], ["value", "stock"], ["value", "cost"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row", "mt-sm"], [1, "form-group", 2, "justify-content", "center"], [1, "checkbox-label"], ["type", "checkbox", 3, "change", "checked"], [1, "checkbox-content"], ["class", "text-green-600 font-bold", 4, "ngIf"], [1, "modal-footer"], [1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], [1, "promethea-button", "ghost", 3, "click"], ["data-tutorial", "inventory-ingredient-search", 1, "promethea-button", "ghost", 3, "click"], ["name", "package-search", "size", "16"], ["data-tutorial", "inventory-table", 1, "table-section", "p-sm"], [1, "crm-table"], [1, "desktop-only"], [4, "ngIf"], ["class", "ingredient-row", 3, "bg-green-50", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "text-green-600", "font-bold"], ["colspan", "7", 1, "text-center", "p-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md"], [1, "material-icons", "animate-spin"], [1, "ingredient-row"], [1, "text-muted"], [1, "chip"], [1, "flex", "gap-sm"], [1, "icon-button", 3, "click", "title"], ["title", "Modifica", 1, "icon-button", 3, "click"], ["title", "Elimina", 1, "icon-button", 3, "click"], ["name", "trash-2", 3, "size"], ["colspan", "7", 1, "empty-state-row"], [1, "empty-state"], ["class", "text-muted mb-4", 4, "ngIf"], [1, "text-muted", "mb-4"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "flex"], [1, "header-icon"], [1, "section-title"], [1, "icon-button", 3, "click"], [1, "form-card", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name", 1, "standard-label"], ["id", "name", "formControlName", "name", "type", "text", "placeholder", "Es: Pomodoro San Marzano"], ["class", "text-red-500 text-sm", 4, "ngIf"], ["for", "unit_id", 1, "standard-label"], ["id", "unit_id", "formControlName", "unit_id"], ["label", "Peso"], ["label", "Volume"], ["label", "Conteggio"], ["for", "cost_per_unit", 1, "standard-label"], ["id", "cost_per_unit", "formControlName", "cost_per_unit", "type", "number", "step", "0.001", "min", "0", "placeholder", "0.000"], [1, "form-group", "mt-sm"], ["for", "description", 1, "standard-label"], ["id", "description", "formControlName", "description", "rows", "2", "placeholder", "Descrizione opzionale dell'ingrediente"], ["for", "current_stock", 1, "standard-label"], ["id", "current_stock", "formControlName", "current_stock", "type", "number", "step", "0.001", "min", "0", "placeholder", "0"], ["id", "minimum_stock", "formControlName", "minimum_stock", "type", "number", "step", "0.001", "min", "0", "placeholder", "0"], ["for", "group_id", 1, "standard-label"], ["id", "group_id", "formControlName", "group_id", 3, "change"], ["for", "type_id", 1, "standard-label"], [1, "flex", "gap-sm", "items-center"], ["id", "type_id", "formControlName", "type_id", 1, "flex-1", 3, "disabled"], ["type", "button", "title", "Crea nuova tipologia", 1, "icon-button", 3, "click"], [1, "mt-sm", "text-mini"], ["for", "supplier_id", 1, "standard-label"], ["name", "truck", 1, "nav-icon", 3, "size"], ["id", "supplier_id", "formControlName", "supplier_id", 1, "flex-1"], ["type", "button", "title", "Gestisci Fornitori", 1, "icon-button", 3, "click"], ["for", "expiry_date", 1, "standard-label"], ["id", "expiry_date", "formControlName", "expiry_date", "type", "date"], ["type", "checkbox", "formControlName", "alert_enabled"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["type", "submit", 1, "promethea-button", 3, "click", "disabled"], [1, "text-red-500", "text-sm"], [1, "modal-content"], [1, "form-card"], ["class", "empty-state", 4, "ngIf"], [1, "promethea-button", 3, "click", "disabled"], [1, "promethea-button", "success", 3, "click", "disabled"], [1, "table-section"], [4, "ngFor", "ngForOf"], [1, "mt-lg", "p-md", "bg-smoke", "rounded-lg"], [1, "flex", "justify-between", "items-center"], [1, "font-bold"], [1, "text-md", "font-bold", "text-primary"], [1, "flex", "items-center", "gap-2"], [1, "icon-button", "x-small", 3, "click", "title"], [1, "flex", "flex-col", "items-center"], ["type", "number", 1, "w-16", 3, "change", "step", "min", "value"], [1, "text-mini", "text-muted", "mt-sm"], [1, "icon-button", "text-red-500", 3, "click"], [1, "modal-container", "modal-md", 3, "click"], [1, "grid-form", "gap-md", 3, "ngSubmit", "formGroup"], ["for", "type_group_id", 1, "standard-label"], ["for", "type_name", 1, "standard-label"], ["id", "type_name", "type", "text", "formControlName", "name", "placeholder", "Es: Tonno Rosso, Pomodoro San Marzano, etc.", "required", "", 1, "w-full"], ["for", "type_description", 1, "standard-label"], ["id", "type_description", "formControlName", "description", "rows", "3", "placeholder", "Descrizione della tipologia...", 1, "w-full"], ["class", "bg-blue-50 rounded-lg p-4", 4, "ngIf"], ["type", "button", 1, "promethea-button", 3, "click", "disabled"], [1, "bg-blue-50", "rounded-lg", "p-4"], [1, "material-icons", "text-blue-500", "mr-2"], [1, "text-sm"]], template: function Inventory_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 5);
      \u0275\u0275text(7, "Ingredienti Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "Ingredienti in inventario");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 3)(14, "span", 4);
      \u0275\u0275text(15, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h3", 5);
      \u0275\u0275text(17, "Scorte Basse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 7);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 9)(23, "div", 3)(24, "span", 4);
      \u0275\u0275text(25, "shopping_cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h3", 5);
      \u0275\u0275text(27, "Lista Spesa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 6);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 10)(31, "button", 11);
      \u0275\u0275listener("click", function Inventory_Template_button_click_31_listener() {
        return ctx.showShoppingList = true;
      });
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 12)(34, "div", 13)(35, "div", 14)(36, "div", 15)(37, "label", 16)(38, "span", 17);
      \u0275\u0275text(39, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " Cerca Ingredienti ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 18);
      \u0275\u0275listener("input", function Inventory_Template_input_input_41_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 15)(43, "label", 16)(44, "span", 17);
      \u0275\u0275text(45, "sort");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Ordina per ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "select", 19);
      \u0275\u0275listener("change", function Inventory_Template_select_change_47_listener($event) {
        return ctx.onSortChange($event.target.value);
      });
      \u0275\u0275elementStart(48, "option", 20);
      \u0275\u0275text(49, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 21);
      \u0275\u0275text(51, "Scorta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 22);
      \u0275\u0275text(53, "Costo");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 14)(55, "div", 15)(56, "label", 16)(57, "span", 17);
      \u0275\u0275text(58, "category");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " Filtra per Gruppo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "select", 19);
      \u0275\u0275listener("change", function Inventory_Template_select_change_60_listener($event) {
        return ctx.onGroupFilterChange($event.target.value);
      });
      \u0275\u0275elementStart(61, "option", 23);
      \u0275\u0275text(62, "Tutti i gruppi");
      \u0275\u0275elementEnd();
      \u0275\u0275template(63, Inventory_option_63_Template, 2, 2, "option", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 15)(65, "label", 16)(66, "span", 17);
      \u0275\u0275text(67, "category");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " Filtra per Tipologia ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "select", 19);
      \u0275\u0275listener("change", function Inventory_Template_select_change_69_listener($event) {
        return ctx.onTypeFilterChange($event.target.value);
      });
      \u0275\u0275elementStart(70, "option", 23);
      \u0275\u0275text(71, "Tutte le tipologie");
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, Inventory_option_72_Template, 2, 2, "option", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 25)(74, "div", 26)(75, "label", 27)(76, "input", 28);
      \u0275\u0275listener("change", function Inventory_Template_input_change_76_listener() {
        return ctx.toggleLowStockFilter();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 29);
      \u0275\u0275text(78, "Mostra solo scorte basse ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 26)(80, "label", 27)(81, "input", 28);
      \u0275\u0275listener("change", function Inventory_Template_input_change_81_listener() {
        return ctx.toggleShoppingListFilter();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 29);
      \u0275\u0275text(83, "Mostra solo da acquistare ");
      \u0275\u0275template(84, Inventory_span_84_Template, 2, 1, "span", 30);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 31)(86, "button", 32);
      \u0275\u0275listener("click", function Inventory_Template_button_click_86_listener() {
        return ctx.newIngredient();
      });
      \u0275\u0275element(87, "lucide-angular", 33);
      \u0275\u0275text(88, " Nuovo Ingrediente ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 34);
      \u0275\u0275listener("click", function Inventory_Template_button_click_89_listener() {
        return ctx.createComposedIngredient();
      });
      \u0275\u0275elementStart(90, "span", 17);
      \u0275\u0275text(91, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(92, " Crea Ingrediente Composto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 35);
      \u0275\u0275listener("click", function Inventory_Template_button_click_93_listener() {
        return ctx.goToIngredientSearch();
      });
      \u0275\u0275element(94, "lucide-angular", 36);
      \u0275\u0275text(95, " Cerca Ingrediente ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 37)(97, "table", 38)(98, "thead")(99, "tr")(100, "th");
      \u0275\u0275text(101, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 39);
      \u0275\u0275text(103, "Descrizione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th");
      \u0275\u0275text(105, "Scorta Attuale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th");
      \u0275\u0275text(107, "Fornitore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th");
      \u0275\u0275text(109, "Costo/Unit\xE0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th");
      \u0275\u0275text(111, "Stato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th");
      \u0275\u0275text(113, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "tbody");
      \u0275\u0275template(115, Inventory_tr_115_Template, 7, 0, "tr", 40)(116, Inventory_tr_116_Template, 31, 22, "tr", 41)(117, Inventory_tr_117_Template, 11, 2, "tr", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(118, Inventory_div_118_Template, 122, 26, "div", 42)(119, Inventory_div_119_Template, 32, 5, "div", 42)(120, Inventory_div_120_Template, 49, 7, "div", 42);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.ingredients.length);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("text-red-500", ctx.lowStockCount > 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.lowStockCount, " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-red-500", ctx.lowStockCount > 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.lowStockCount > 0 ? "Attenzione!" : "Tutto ok", " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.getShoppingList().length, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.getShoppingList().length === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Vedi Lista (\u20AC", ctx.shoppingListTotal.toFixed(2), ") ");
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.sortBy);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", ctx.selectedGroupId || "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.sortedIngredientGroups);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.selectedTypeId || "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.ingredientTypes);
      \u0275\u0275advance(4);
      \u0275\u0275property("checked", ctx.showLowStockOnly);
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.showShoppingListOnly);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showShoppingListOnly);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(28);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredIngredients);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredIngredients.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showIngredientForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showShoppingList);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTypeModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormGroupDirective, FormControlName, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.chip.in-stock[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.chip.low-stock[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n  color: #f59e0b;\n}\n.chip.out-of-stock[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n  color: #ef4444;\n}\n.flex.items-center.gap-2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.w-16[_ngcontent-%COMP%] {\n  min-width: 3rem;\n}\n/*# sourceMappingURL=inventory.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inventory, [{
    type: Component,
    args: [{ selector: "app-inventory", standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- Statistiche Rapide -->\r
  <div class="grid-cards p-sm">\r
    <div class="card" data-tutorial="inventory-total">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">inventory</span>\r
        <h3 class="card-title">Ingredienti Totali</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ ingredients.length }}</div>\r
      <span class="text-muted card-footer">Ingredienti in inventario</span>\r
    </div>\r
\r
    <div class="card" data-tutorial="inventory-low-stock">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">warning</span>\r
        <h3 class="card-title">Scorte Basse</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex" [class.text-red-500]="lowStockCount > 0">\r
        {{ lowStockCount }}\r
      </div>\r
      <span class="text-muted card-footer" [class.text-red-500]="lowStockCount > 0">\r
        {{ lowStockCount > 0 ? 'Attenzione!' : 'Tutto ok' }}\r
      </span>\r
    </div>\r
\r
    <div class="card" data-tutorial="inventory-shopping-list">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">shopping_cart</span>\r
        <h3 class="card-title">Lista Spesa</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">\r
        {{ getShoppingList().length }}\r
      </div>\r
      <div class="card-footer">\r
        <button class="promethea-button ghost mt-auto" (click)="showShoppingList = true"\r
          [disabled]="getShoppingList().length === 0">\r
          Vedi Lista (\u20AC{{ shoppingListTotal.toFixed(2) }})\r
        </button>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- Filtri e Azioni -->\r
  <div class="form-card mt-lg">\r
    <div data-tutorial="inventory-search">\r
      <div class="form-row">\r
        <!-- Barra di ricerca -->\r
        <div class="form-group mb-lg">\r
          <label class="standard-label">\r
            <span class="material-icons">search</span>\r
            Cerca Ingredienti\r
          </label>\r
          <input type="text" placeholder="Cerca per nome o descrizione..." [value]="searchTerm"\r
            (input)="onSearchChange($any($event.target).value)">\r
        </div>\r
\r
        <!-- Filtri -->\r
        <div class="form-group mb-lg">\r
          <label class="standard-label">\r
            <span class="material-icons">sort</span>\r
            Ordina per\r
          </label>\r
          <select [value]="sortBy" (change)="onSortChange($any($event.target).value)">\r
            <option value="name">Nome</option>\r
            <option value="stock">Scorta</option>\r
            <option value="cost">Costo</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-row">\r
        <!-- Filtro per Gruppo -->\r
        <div class="form-group mb-lg">\r
          <label class="standard-label">\r
            <span class="material-icons">category</span>\r
            Filtra per Gruppo\r
          </label>\r
          <select [value]="selectedGroupId || ''" (change)="onGroupFilterChange($any($event.target).value)">\r
            <option value="">Tutti i gruppi</option>\r
            <option *ngFor="let group of sortedIngredientGroups" [value]="group.id">\r
              {{ group.name }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- Filtro per Tipologia -->\r
        <div class="form-group mb-lg">\r
          <label class="standard-label">\r
            <span class="material-icons">category</span>\r
            Filtra per Tipologia\r
          </label>\r
          <select [value]="selectedTypeId || ''" (change)="onTypeFilterChange($any($event.target).value)">\r
            <option value="">Tutte le tipologie</option>\r
            <option *ngFor="let type of ingredientTypes" [value]="type.id">\r
              {{ type.name }}\r
            </option>\r
          </select>\r
        </div>\r
\r
      </div>\r
      <div class="form-row mt-sm">\r
        <!-- Filtro scorte basse -->\r
        <div class="form-group" style="justify-content: center;">\r
          <label class="checkbox-label">\r
            <input type="checkbox" [checked]="showLowStockOnly" (change)="toggleLowStockFilter()">\r
            <div class="checkbox-content">Mostra solo scorte basse\r
            </div>\r
          </label>\r
        </div>\r
        <!-- Filtro lista della spesa -->\r
        <div class="form-group" style="justify-content: center;">\r
          <label class="checkbox-label">\r
            <input type="checkbox" [checked]="showShoppingListOnly" (change)="toggleShoppingListFilter()">\r
            <div class="checkbox-content">Mostra solo da acquistare\r
              <span class="text-green-600 font-bold" *ngIf="showShoppingListOnly">\r
                ({{ getShoppingList().length }})\r
              </span>\r
            </div>\r
          </label>\r
        </div>\r
\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="promethea-button" (click)="newIngredient()">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>\r
        Nuovo Ingrediente\r
      </button>\r
      <button (click)="createComposedIngredient()" class="promethea-button ghost">\r
        <span class="material-icons">add_circle</span>\r
        Crea Ingrediente Composto\r
      </button>\r
      <button class="promethea-button ghost" (click)="goToIngredientSearch()" data-tutorial="inventory-ingredient-search">\r
        <lucide-angular name="package-search" size="16"></lucide-angular>\r
        Cerca Ingrediente\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Lista Ingredienti -->\r
    <div class="table-section p-sm" data-tutorial="inventory-table">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Nome</th>\r
            <th class="desktop-only">Descrizione</th>\r
            <th>Scorta Attuale</th>\r
            <th>Fornitore</th>\r
            <th>Costo/Unit\xE0</th>\r
            <th>Stato</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="isLoading">\r
            <td colspan="7" class="text-center p-xl">\r
              <div class="flex flex-col items-center justify-center gap-md">\r
                <span class="material-icons animate-spin">refresh</span>\r
                <span>Caricamento ingredienti...</span>\r
              </div>\r
            </td>\r
          </tr>\r
\r
          <tr *ngFor="let ingredient of filteredIngredients" class="ingredient-row"\r
            [class.bg-green-50]="ingredient.to_buy">\r
            <td>\r
              <strong>{{ ingredient.name }}</strong>\r
            </td>\r
            <td class="desktop-only">\r
              <span class="text-muted">{{ ingredient.description || 'Nessuna descrizione' }}</span>\r
            </td>\r
            <td>\r
              <span [class.text-red-500]="ingredient.current_stock <= ingredient.minimum_stock">\r
                {{ ingredient.current_stock }} {{ getUnitSymbol(ingredient.unit_id) }}\r
                <span *ngIf="ingredient.to_buy && ingredient.to_buy_quantity" class="text-green-600 font-bold">\r
                  (+{{ formatQuantity(ingredient.to_buy_quantity, ingredient) }})\r
                </span>\r
              </span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ getSupplierName(ingredient) }}</span>\r
            </td>\r
            <td>\r
              <strong>\u20AC{{ ingredient.cost_per_unit | number:'1.2-2' }}</strong>\r
            </td>\r
            <td>\r
              <span class="chip" [class]="getStockStatus(ingredient).class">\r
                {{ getStockStatus(ingredient).text }}\r
              </span>\r
            </td>\r
            <td>\r
              <div class="flex gap-sm">\r
                <!-- Pulsante per aggiungere alla lista della spesa -->\r
                <button class="icon-button" [class.text-green-500]="ingredient.to_buy"\r
                  (click)="ingredient.to_buy ? removeFromShoppingList(ingredient) : addToShoppingList(ingredient)"\r
                  [title]="ingredient.to_buy ? 'Rimuovi dalla lista spesa' : 'Aggiungi alla lista spesa'">\r
                  <span class="material-icons">\r
                    {{ ingredient.to_buy ? 'shopping_cart_checkout' : 'add_shopping_cart' }}\r
                  </span>\r
                </button>\r
\r
                <button class="icon-button" (click)="editIngredient(ingredient)" title="Modifica">\r
                  <span class="material-icons">edit</span>\r
                </button>\r
                <button class="icon-button" (click)="deleteIngredient(ingredient.id)" title="Elimina">\r
                  <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                </button>\r
              </div>\r
            </td>\r
\r
          </tr>\r
\r
          <tr *ngIf="!isLoading && filteredIngredients.length === 0">\r
            <td colspan="7" class="empty-state-row">\r
              <div class="empty-state">\r
                <span class="material-icons">search_off</span>\r
                <h3>Nessun ingrediente trovato</h3>\r
                <p class="text-muted mb-4" *ngIf="searchTerm || showLowStockOnly">\r
                  Prova a modificare i filtri di ricerca\r
                </p>\r
                <button class="promethea-button" (click)="newIngredient()">\r
                  <lucide-angular name="plus" [size]="20"></lucide-angular>\r
                  Aggiungi il primo ingrediente\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
</div>\r
\r
<!-- Modal Ingrediente -->\r
<div *ngIf="showIngredientForm" class="modal-overlay" (click)="resetForm()">\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
\r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <div class="flex">\r
        <div class="header-icon">\r
          <span class="material-icons">{{ isEditing ? 'edit' : 'add_circle' }}</span>\r
        </div>\r
        <div>\r
          <h1 class="section-title">{{ isEditing ? 'Modifica Ingrediente' : 'Nuovo Ingrediente' }}</h1>\r
        </div>\r
      </div>\r
      <button class="icon-button" (click)="resetForm()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
    <!-- Nome e Descrizione -->\r
    <form [formGroup]="ingredientForm" (ngSubmit)="onSubmit()" class="form-card">\r
      <div class="form-group">\r
        <label for="name" class="standard-label">\r
          <span class="material-icons">label</span>\r
          Nome Ingrediente *\r
        </label>\r
        <input id="name" formControlName="name" type="text" placeholder="Es: Pomodoro San Marzano"\r
          [class.border-red-500]="name?.invalid && name?.touched">\r
        <div *ngIf="name?.invalid && name?.touched" class="text-red-500 text-sm">\r
          Il nome \xE8 obbligatorio e deve essere di almeno 2 caratteri\r
        </div>\r
      </div>\r
      <div class="form-row mt-sm">\r
        <div class="form-group">\r
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
        <div class="form-group">\r
          <label for="cost_per_unit" class="standard-label">\r
            <span class="material-icons">euro</span>\r
            Costo per Unit\xE0 *\r
          </label>\r
          <input id="cost_per_unit" formControlName="cost_per_unit" type="number" step="0.001" min="0"\r
            placeholder="0.000" [class.border-red-500]="cost_per_unit?.invalid && cost_per_unit?.touched">\r
          <div *ngIf="cost_per_unit?.invalid && cost_per_unit?.touched" class="text-red-500 text-sm">\r
            Il costo per unit\xE0 \xE8 obbligatorio\r
          </div>\r
        </div>\r
      </div>\r
      <div class="form-group mt-sm">\r
        <label for="description" class="standard-label">\r
          <span class="material-icons">description</span>\r
          Descrizione\r
        </label>\r
        <textarea id="description" formControlName="description" rows="2"\r
          placeholder="Descrizione opzionale dell'ingrediente"></textarea>\r
      </div>\r
      <!-- Scorte -->\r
      <div class="form-row mt-sm">\r
        <div class="form-group">\r
          <label for="current_stock" class="standard-label">\r
            <span class="material-icons">inventory</span>\r
            Scorta attuale\r
          </label>\r
          <input id="current_stock" formControlName="current_stock" type="number" step="0.001" min="0" placeholder="0"\r
            [class.border-red-500]="current_stock?.invalid && current_stock?.touched">\r
        </div>\r
        <div class="form-group">\r
          <label for="cost_per_unit" class="standard-label">\r
            <span class="material-icons">warning</span>\r
            Scorta Minima\r
          </label>\r
          <input id="minimum_stock" formControlName="minimum_stock" type="number" step="0.001" min="0" placeholder="0"\r
            [class.border-red-500]="minimum_stock?.invalid && minimum_stock?.touched">\r
        </div>\r
      </div>\r
      <!-- GRUPPO E TIPOLOGIA - NUOVI CAMPI -->\r
      <div class="form-row mt-sm">\r
        <div class="form-group">\r
          <label for="group_id" class="standard-label">\r
            <span class="material-icons">category</span>\r
            Gruppo\r
          </label>\r
          <select id="group_id" formControlName="group_id" (change)="onGroupChangeInForm()">\r
            <option value="">Nessun gruppo</option>\r
            <option *ngFor="let group of sortedIngredientGroups" [value]="group.id">\r
              {{ group.name }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="type_id" class="standard-label">\r
            <span class="material-icons">label</span>\r
            Tipologia\r
          </label>\r
          <div class="flex gap-sm items-center">\r
            <select id="type_id" formControlName="type_id" class="flex-1"\r
              [disabled]="!getFilteredTypesForForm().length">\r
              <option value="">Nessuna tipologia</option>\r
              <option *ngFor="let type of getFilteredTypesForForm()" [value]="type.id">\r
                {{ type.name }}\r
              </option>\r
            </select>\r
            <button type="button" class="icon-button" (click)="openTypeModal()" title="Crea nuova tipologia">\r
              <lucide-angular name="plus" [size]="20"></lucide-angular>\r
            </button>\r
          </div>\r
          <div class="mt-sm text-mini">\r
            Le tipologie dipendono dal gruppo selezionato\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Fornitore -->\r
      <div class="form-group">\r
        <label for="supplier_id" class="standard-label">\r
          <lucide-angular name="truck" [size]="20" class="nav-icon"></lucide-angular>\r
          Fornitore\r
        </label>\r
        <div class="flex gap-sm items-center">\r
          <select id="supplier_id" formControlName="supplier_id" class="flex-1">\r
            <option value="">Nessun fornitore</option>\r
            <option *ngFor="let supplier of suppliers" [value]="supplier.id">\r
              {{ supplier.company_name }}\r
            </option>\r
          </select>\r
          <div class="flex gap-sm">\r
            <button type="button" class="icon-button" (click)="goToSupplierManager()" title="Gestisci Fornitori">\r
              <lucide-angular name="plus" [size]="20"></lucide-angular>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
\r
      <!-- Altre Informazioni -->\r
      <div class="form-row mt-sm">\r
        <div class="form-group">\r
          <label for="expiry_date" class="standard-label">\r
            <span class="material-icons">event</span>\r
            Data di Scadenza\r
          </label>\r
          <input id="expiry_date" formControlName="expiry_date" type="date">\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="checkbox-label">\r
            <input type="checkbox" formControlName="alert_enabled">\r
            <div class="checkbox-content">\r
              <strong>Attiva avvisi scorta bassa</strong>\r
              <div class="text-muted">Ricevi un avviso quando la scorta scende sotto il livello minimo</div>\r
            </div>\r
          </label>\r
        </div>\r
      </div>\r
    </form>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button type="button" class="promethea-button ghost" (click)="resetForm()">\r
        <span class="material-icons">close</span>\r
        Annulla\r
      </button>\r
      <button type="submit" class="promethea-button" [disabled]="ingredientForm.invalid" (click)="onSubmit()">\r
        <span class="material-icons">{{ isEditing ? 'save' : 'add' }}</span>\r
        {{ isEditing ? 'Aggiorna' : 'Crea' }} Ingrediente\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- modale per visualizzare la lista della spesa -->\r
<div *ngIf="showShoppingList" class="modal-overlay" (click)="showShoppingList = false">\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <div class="flex">\r
        <div class="header-icon">\r
          <span class="material-icons">shopping_cart</span>\r
        </div>\r
        <div>\r
          <h1 class="section-title">Lista della Spesa</h1>\r
          <p class="text-muted">{{ getShoppingList().length }} ingredienti da acquistare</p>\r
        </div>\r
      </div>\r
      <button class="icon-button" (click)="showShoppingList = false">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <div class="modal-content">\r
      <div class="form-card">\r
        <div *ngIf="getShoppingList().length === 0" class="empty-state">\r
          <span class="material-icons">shopping_basket</span>\r
          <h3>Nessun ingrediente nella lista</h3>\r
          <p class="text-muted">Clicca sull'icona del carrello per aggiungere ingredienti</p>\r
        </div>\r
\r
        <div *ngIf="getShoppingList().length > 0">\r
          <div class="table-section">\r
          <table class="crm-table">\r
            <thead>\r
              <tr>\r
                <th>Ingrediente</th>\r
                <th>Quantit\xE0</th>\r
                <th>Unit\xE0</th>\r
                <th>Fornitore</th>\r
                <th>Costo</th>\r
                <th>Azioni</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let item of getShoppingList()">\r
                <td><strong>{{ item.name }}</strong></td>\r
                <td>\r
                  <div class="flex items-center gap-2">\r
                    <!-- Pulsante decremento -->\r
                    <button class="icon-button x-small" (click)="decreaseQuantity(item)"\r
                      [title]="'Diminuisci di ' + getQuantityStep(item)">\r
                      <span class="material-icons">remove</span>\r
                    </button>\r
\r
                    <!-- Input quantit\xE0 con unit\xE0 sotto -->\r
                    <div class="flex flex-col items-center">\r
                      <input type="number" [step]="getQuantityStep(item)" [min]="allowsDecimals(item) ? 0.1 : 1"\r
                        [value]="item.to_buy_quantity || getStandardQuantity(item)"\r
                        (change)="updateShoppingListQuantity(item, $event)" class="w-16"\r
                        [attr.inputmode]="allowsDecimals(item) ? 'decimal' : 'numeric'">\r
                    </div>\r
\r
                    <!-- Pulsante incremento -->\r
                    <button class="icon-button x-small" (click)="increaseQuantity(item)"\r
                      [title]="'Aumenta di ' + getQuantityStep(item)">\r
                      <lucide-angular name="plus" [size]="20"></lucide-angular>\r
                    </button>\r
                  </div>\r
                </td>\r
                <td>\r
                  <span class="text-mini text-muted mt-sm">{{ getUnitSymbol(item.unit_id) }}</span>\r
                </td>\r
                <td>{{ getSupplierName(item) }}</td>\r
                <td>\u20AC{{ (item.cost_per_unit * (item.to_buy_quantity || 1)).toFixed(2) }}</td>\r
                <td>\r
                  <button class="icon-button text-red-500" (click)="removeFromShoppingList(item)">\r
                    <span class="material-icons">remove_shopping_cart</span>\r
                  </button>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
          </div>\r
\r
          <div class="mt-lg p-md bg-smoke rounded-lg">\r
            <div class="flex justify-between items-center">\r
              <div>\r
                <h3 class="font-bold">Totale stimato</h3>\r
              </div>\r
              <div class="text-md font-bold text-primary">\r
                \u20AC{{ shoppingListTotal.toFixed(2) }}\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button class="promethea-button ghost" (click)="showShoppingList = false">\r
        <span class="material-icons">close</span>\r
        Chiudi\r
      </button>\r
      <button class="promethea-button" (click)="printShoppingList()" [disabled]="getShoppingList().length === 0">\r
        <span class="material-icons">print</span>\r
        Stampa Lista\r
      </button>\r
      <button class="promethea-button success" (click)="clearShoppingList()"\r
        [disabled]="getShoppingList().length === 0">\r
        <span class="material-icons">check_circle</span>\r
        Acquisto Completato\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal per creare nuova tipologia -->\r
<div *ngIf="showTypeModal" class="modal-overlay" (click)="closeTypeModal()">\r
  <div class="modal-container modal-md" (click)="$event.stopPropagation()">\r
\r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <div class="flex">\r
        <div class="header-icon">\r
          <span class="material-icons">add_circle</span>\r
        </div>\r
        <div>\r
          <h1 class="section-title">Nuova Tipologia</h1>\r
          <p class="text-muted">Crea una nuova tipologia di ingrediente</p>\r
        </div>\r
      </div>\r
      <button class="icon-button" (click)="closeTypeModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Contenuto Modal -->\r
    <div class="form-card">\r
      <form [formGroup]="typeForm" (ngSubmit)="saveType()" class="grid-form gap-md">\r
\r
        <!-- Gruppo -->\r
        <div class="form-row">\r
          <label for="type_group_id" class="standard-label">\r
            <span class="material-icons">category</span>\r
            Gruppo *\r
          </label>\r
          <select id="group_id" formControlName="group_id" (change)="onGroupChangeInForm()">\r
            <option value="">Nessun gruppo</option>\r
            <option *ngFor="let group of sortedIngredientGroups; let i = index" [value]="group.id">\r
              {{ group.name }} ({{ i }})\r
            </option>\r
          </select>\r
\r
          <div *ngIf="typeForm.get('group_id')?.invalid && typeForm.get('group_id')?.touched"\r
            class="text-red-500 text-sm">\r
            Seleziona un gruppo\r
          </div>\r
        </div>\r
\r
        <!-- Nome Tipologia -->\r
        <div class="form-row">\r
          <label for="type_name" class="standard-label">\r
            <span class="material-icons">label</span>\r
            Nome Tipologia *\r
          </label>\r
          <input id="type_name" type="text" formControlName="name"\r
            placeholder="Es: Tonno Rosso, Pomodoro San Marzano, etc." class="w-full" required>\r
          <div *ngIf="typeForm.get('name')?.invalid && typeForm.get('name')?.touched" class="text-red-500 text-sm">\r
            Il nome \xE8 obbligatorio (min. 2 caratteri)\r
          </div>\r
        </div>\r
\r
        <!-- Descrizione -->\r
        <div class="form-row">\r
          <label for="type_description" class="standard-label">\r
            <span class="material-icons">description</span>\r
            Descrizione (opzionale)\r
          </label>\r
          <textarea id="type_description" formControlName="description" rows="3"\r
            placeholder="Descrizione della tipologia..." class="w-full"></textarea>\r
        </div>\r
\r
        <!-- Messaggio di conferma -->\r
        <div *ngIf="typeForm.get('group_id')?.value" class="bg-blue-50 rounded-lg p-4">\r
          <div class="flex gap-sm">\r
            <span class="material-icons text-blue-500 mr-2">info</span>\r
            <div class="text-sm">\r
              Questa tipologia sar\xE0 visibile a <strong>tutti i ristoranti</strong>.\r
            </div>\r
          </div>\r
        </div>\r
\r
      </form>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button type="button" class="promethea-button ghost" (click)="closeTypeModal()">\r
        <span class="material-icons">close</span>\r
        Annulla\r
      </button>\r
      <button type="button" class="promethea-button" [disabled]="typeForm.invalid" (click)="saveType()">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>\r
        Crea Tipologia\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/inventory/inventory.css */\n.chip.in-stock {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.chip.low-stock {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n  color: #f59e0b;\n}\n.chip.out-of-stock {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n  color: #ef4444;\n}\n.flex.items-center.gap-2 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.w-16 {\n  min-width: 3rem;\n}\n/*# sourceMappingURL=inventory.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Inventory, { className: "Inventory", filePath: "src/app/restaurant/inventory/inventory.ts", lineNumber: 21 });
})();
export {
  Inventory
};
//# sourceMappingURL=chunk-ACXEXAGC.js.map
