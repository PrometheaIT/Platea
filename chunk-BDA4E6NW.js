import {
  ExpenseService
} from "./chunk-UG4LOLBZ.js";
import "./chunk-UUUZOHF7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  BaseService
} from "./chunk-K4QVN3EH.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-JWP3QZ4U.js";
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
  inject,
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
  ɵɵgetInheritedFactory,
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

// src/app/services/Economico/revenue.service.ts
var RevenueService = class _RevenueService extends BaseService {
  getTableName() {
    return "revenue_records";
  }
  monthlyRevenueSubject = new BehaviorSubject([]);
  monthlyRevenue$ = this.monthlyRevenueSubject.asObservable();
  // Carica i guadagni per un mese specifico (entrate manuali)
  loadRevenueForMonth(month) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const formattedMonth = this.formatMonthForDatabase(month);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).eq("month", formattedMonth).order("completed_at", { ascending: false });
        if (error)
          throw error;
        this.dataSubject.next(data || []);
        return data || [];
      } catch (error) {
        console.error("Error loading revenue for month:", error);
        return [];
      }
    });
  }
  // Calcola il guadagno totale mensile dagli ordini completati (tabella comande)
  calculateMonthlyRevenueFromOrders(month) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return this.getEmptyMonthlyRevenue(month);
        const formattedMonth = this.formatMonthForDatabase(month);
        const startDate = `${formattedMonth.substring(0, 7)}-01`;
        const endDate = this.getLastDayOfMonth(formattedMonth);
        const { data: orders, error } = yield this.supabaseService.getSupabaseClient().from("comande").select("*").eq("restaurant_id", restaurantId).eq("status", "completed").gte("created_at", `${startDate}T00:00:00`).lte("created_at", `${endDate}T23:59:59`);
        if (error)
          throw error;
        const monthlyOrders = orders || [];
        const totalRevenue = monthlyOrders.reduce((sum, order) => sum + (order.total_amount || 0), 0);
        const totalTax = monthlyOrders.reduce((sum, order) => sum + (order.tax_amount || 0), 0);
        const totalDiscount = monthlyOrders.reduce((sum, order) => sum + (order.discount_amount || 0), 0);
        const netRevenue = totalRevenue - totalDiscount;
        const orderCount = monthlyOrders.length;
        const averageTicket = orderCount > 0 ? netRevenue / orderCount : 0;
        const monthlyRevenue = {
          month: formattedMonth,
          total_revenue: totalRevenue,
          total_tax: totalTax,
          total_discount: totalDiscount,
          net_revenue: netRevenue,
          order_count: orderCount,
          average_ticket: averageTicket
        };
        yield this.saveMonthlyRevenue(monthlyRevenue);
        return monthlyRevenue;
      } catch (error) {
        console.error("Error calculating monthly revenue:", error);
        return this.getEmptyMonthlyRevenue(month);
      }
    });
  }
  // Salva il revenue mensile per cache
  saveMonthlyRevenue(monthlyRevenue) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        const { error } = yield this.supabaseService.getSupabaseClient().from("monthly_revenue").upsert(__spreadProps(__spreadValues({
          restaurant_id: restaurantId
        }, monthlyRevenue), {
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }), {
          onConflict: "restaurant_id,month"
        });
        if (error)
          throw error;
      } catch (error) {
        console.error("Error saving monthly revenue:", error);
      }
    });
  }
  // Carica revenue mensile dalla cache
  loadMonthlyRevenue(month) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const formattedMonth = this.formatMonthForDatabase(month);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("monthly_revenue").select("*").eq("restaurant_id", restaurantId).eq("month", formattedMonth).maybeSingle();
        if (error)
          throw error;
        if (data) {
          return data;
        } else {
          return yield this.calculateMonthlyRevenueFromOrders(month);
        }
      } catch (error) {
        console.error("Error loading monthly revenue:", error);
        return yield this.calculateMonthlyRevenueFromOrders(month);
      }
    });
  }
  // Aggiungi un'entrata manuale
  addManualRevenue(revenueData) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const manualRevenue = {
          restaurant_id: restaurantId,
          order_id: `manual_${Date.now()}`,
          order_number: `MANUAL-${Date.now()}`,
          customer_name: "Entrata Manuale",
          total_amount: revenueData.amount,
          tax_amount: 0,
          discount_amount: 0,
          net_amount: revenueData.amount,
          payment_method: "manual",
          order_type: "dine_in",
          description: revenueData.description,
          category: revenueData.category,
          notes: revenueData.notes,
          month: this.formatMonthForDatabase(revenueData.month),
          completed_at: (/* @__PURE__ */ new Date()).toISOString(),
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(manualRevenue).select().single();
        if (error)
          throw error;
        yield this.loadRevenueForMonth(revenueData.month);
        return data;
      } catch (error) {
        console.error("Error adding manual revenue:", error);
        return null;
      }
    });
  }
  // Elimina un'entrata manuale
  deleteManualRevenue(revenueId) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).delete().eq("id", revenueId).like("order_id", "manual_%");
        if (error)
          throw error;
        return true;
      } catch (error) {
        console.error("Error deleting manual revenue:", error);
        return false;
      }
    });
  }
  // Utility methods
  formatMonthForDatabase(month) {
    if (month.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return month;
    }
    if (month.match(/^\d{4}-\d{2}$/)) {
      return `${month}-01`;
    }
    const date = new Date(month);
    return date.toISOString().split("T")[0];
  }
  getLastDayOfMonth(month) {
    const date = new Date(month);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay.toISOString().split("T")[0];
  }
  getEmptyMonthlyRevenue(month) {
    return {
      month: this.formatMonthForDatabase(month),
      total_revenue: 0,
      total_tax: 0,
      total_discount: 0,
      net_revenue: 0,
      order_count: 0,
      average_ticket: 0
    };
  }
  // Ottieni mesi disponibili con revenue
  getAvailableMonths() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("month").eq("restaurant_id", restaurantId).order("month", { ascending: false });
        if (error)
          throw error;
        const uniqueMonths = [...new Set(data?.map((item) => item.month) || [])];
        return uniqueMonths;
      } catch (error) {
        console.error("Error getting available months:", error);
        return [];
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RevenueService_BaseFactory;
    return function RevenueService_Factory(__ngFactoryType__) {
      return (\u0275RevenueService_BaseFactory || (\u0275RevenueService_BaseFactory = \u0275\u0275getInheritedFactory(_RevenueService)))(__ngFactoryType__ || _RevenueService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RevenueService, factory: _RevenueService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevenueService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/restaurant/financial/financial-report/financial-report.ts
function FinancialReport_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47);
    \u0275\u0275element(9, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", category_r1.percentage.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(category_r1.amount));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", category_r1.percentage, "%");
  }
}
function FinancialReport_div_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function FinancialReport_div_124_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRevenueModal());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function FinancialReport_div_124_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 51)(3, "div", 52)(4, "div", 53);
    \u0275\u0275element(5, "lucide-angular", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 54);
    \u0275\u0275text(8, "Aggiungi Entrata Manuale");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 55);
    \u0275\u0275listener("click", function FinancialReport_div_124_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRevenueModal());
    });
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 56)(13, "form", 57);
    \u0275\u0275listener("submit", function FinancialReport_div_124_Template_form_submit_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.saveRevenue();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(14, "div", 58)(15, "label", 59)(16, "span", 16);
    \u0275\u0275text(17, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Descrizione * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function FinancialReport_div_124_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.revenueForm.description, $event) || (ctx_r1.revenueForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 58)(21, "div", 14)(22, "label", 61)(23, "span", 16);
    \u0275\u0275text(24, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Importo (\u20AC) * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function FinancialReport_div_124_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.revenueForm.amount, $event) || (ctx_r1.revenueForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 14)(28, "label", 63)(29, "span", 16);
    \u0275\u0275text(30, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Categoria ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function FinancialReport_div_124_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.revenueForm.category, $event) || (ctx_r1.revenueForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 65);
    \u0275\u0275text(34, "Vendite Dirette");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 66);
    \u0275\u0275text(36, "Catering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 67);
    \u0275\u0275text(38, "Eventi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 68);
    \u0275\u0275text(40, "Altro Servizio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 69);
    \u0275\u0275text(42, "Altre Entrate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 70)(44, "label", 71)(45, "span", 16);
    \u0275\u0275text(46, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Note ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function FinancialReport_div_124_Template_textarea_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.revenueForm.notes, $event) || (ctx_r1.revenueForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 73)(50, "button", 74);
    \u0275\u0275listener("click", function FinancialReport_div_124_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRevenueModal());
    });
    \u0275\u0275elementStart(51, "span", 16);
    \u0275\u0275text(52, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 75);
    \u0275\u0275listener("click", function FinancialReport_div_124_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRevenue());
    });
    \u0275\u0275elementStart(55, "span", 16);
    \u0275\u0275text(56, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " Aggiungi Entrata ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.revenueForm.description);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.revenueForm.amount);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.revenueForm.category);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.revenueForm.notes);
  }
}
function FinancialReport_div_125_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function FinancialReport_div_125_button_12_Template_button_click_0_listener() {
      const month_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeMonth(month_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", month_r6 === ctx_r1.selectedMonth);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMonthDisplay(month_r6), " ");
  }
}
function FinancialReport_div_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function FinancialReport_div_125_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMonthsModal());
    });
    \u0275\u0275elementStart(1, "div", 76);
    \u0275\u0275listener("click", function FinancialReport_div_125_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 77)(3, "h2", 78)(4, "span", 16);
    \u0275\u0275text(5, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Seleziona Mese ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function FinancialReport_div_125_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMonthsModal());
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 56)(11, "div", 79);
    \u0275\u0275template(12, FinancialReport_div_125_button_12_Template, 2, 3, "button", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 73)(14, "button", 21);
    \u0275\u0275listener("click", function FinancialReport_div_125_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMonthsModal());
    });
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Chiudi ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.availableMonths);
  }
}
var FinancialReport = class _FinancialReport {
  expenseService = inject(ExpenseService);
  revenueService = inject(RevenueService);
  // Dati
  expenses = [];
  monthlyRevenue = null;
  availableMonths = [];
  // Filtri
  selectedMonth = this.getCurrentMonth();
  averageTicket = 25;
  // Scontrino medio predefinito - modificabile dall'utente
  // Modals
  showRevenueModal = false;
  showMonthsModal = false;
  // Form data per entrate manuali
  revenueForm = {
    description: "",
    amount: 0,
    category: "altre_entrate",
    month: this.getCurrentMonth(),
    notes: ""
  };
  // Categorie per entrate manuali
  revenueCategories = [
    "vendite_dirette",
    "catering",
    "eventi",
    "altro_servizio",
    "altre_entrate"
  ];
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    return __async(this, null, function* () {
      yield this.loadExpenses();
      yield this.loadRevenue();
      yield this.loadAvailableMonths();
    });
  }
  loadExpenses() {
    return __async(this, null, function* () {
      yield this.expenseService.loadExpensesForMonth(this.selectedMonth);
      this.expenseService.data$.subscribe((expenses) => {
        this.expenses = expenses;
      });
    });
  }
  loadRevenue() {
    return __async(this, null, function* () {
      this.monthlyRevenue = yield this.revenueService.loadMonthlyRevenue(this.selectedMonth);
    });
  }
  loadAvailableMonths() {
    return __async(this, null, function* () {
      const expenseMonths = yield this.expenseService.getAvailableMonths();
      const revenueMonths = yield this.revenueService.getAvailableMonths();
      this.availableMonths = [.../* @__PURE__ */ new Set([...expenseMonths, ...revenueMonths])].sort().reverse();
    });
  }
  // Statistiche calcolate
  get monthlyStats() {
    return this.expenseService.calculateMonthlyTotal(this.expenses);
  }
  get financialSummary() {
    const expenses = this.monthlyStats.totale;
    const revenue = this.monthlyRevenue?.net_revenue || 0;
    const profit = revenue - expenses;
    const profitMargin = revenue > 0 ? profit / revenue * 100 : 0;
    return {
      expenses,
      revenue,
      profit,
      profitMargin,
      breakEvenCustomers: expenses / this.averageTicket,
      actualCustomers: this.monthlyRevenue?.order_count || 0,
      customersDifference: (this.monthlyRevenue?.order_count || 0) - expenses / this.averageTicket
    };
  }
  get dailyBreakdown() {
    const summary = this.financialSummary;
    const daysInMonth = this.getDaysInMonth(this.selectedMonth);
    return {
      dailyExpenses: summary.expenses / daysInMonth,
      dailyRevenue: summary.revenue / daysInMonth,
      dailyProfit: summary.profit / daysInMonth,
      dailyCustomersNeeded: summary.breakEvenCustomers / daysInMonth,
      dailyActualCustomers: summary.actualCustomers / daysInMonth
    };
  }
  // Utility methods
  getCurrentMonth() {
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
  }
  formatMonthDisplay(month) {
    const date = new Date(month);
    return date.toLocaleDateString("it-IT", { month: "long", year: "numeric" });
  }
  formatCurrency(amount) {
    return `\u20AC${amount.toFixed(2)}`;
  }
  formatNumber(num) {
    return num.toFixed(0);
  }
  getDaysInMonth(month) {
    const date = new Date(month);
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
  // Gestione Modal
  openAddRevenueModal() {
    this.revenueForm = {
      description: "",
      amount: 0,
      category: "altre_entrate",
      month: this.selectedMonth,
      notes: ""
    };
    this.showRevenueModal = true;
  }
  openMonthsModal() {
    this.showMonthsModal = true;
  }
  closeRevenueModal() {
    this.showRevenueModal = false;
  }
  closeMonthsModal() {
    this.showMonthsModal = false;
  }
  // CRUD Operations
  saveRevenue() {
    return __async(this, null, function* () {
      if (!this.revenueForm.description || !this.revenueForm.amount) {
        alert("Compila tutti i campi obbligatori");
        return;
      }
      try {
        yield this.revenueService.addManualRevenue(this.revenueForm);
        this.closeRevenueModal();
        yield this.loadRevenue();
      } catch (error) {
        console.error("Error saving revenue:", error);
        alert("Errore nel salvataggio dell'entrata: " + error.message);
      }
    });
  }
  changeMonth(month) {
    return __async(this, null, function* () {
      this.selectedMonth = month;
      yield this.loadData();
      this.closeMonthsModal();
    });
  }
  // Calcoli avanzati
  getCategoryBreakdown() {
    const categories = [...new Set(this.expenses.map((exp) => exp.category))];
    return categories.map((category) => {
      const categoryExpenses = this.expenses.filter((exp) => exp.category === category).reduce((sum, exp) => sum + exp.amount, 0);
      const percentage = this.monthlyStats.totale > 0 ? categoryExpenses / this.monthlyStats.totale * 100 : 0;
      return {
        category,
        amount: categoryExpenses,
        percentage
      };
    }).sort((a, b) => b.amount - a.amount);
  }
  getProfitabilityStatus() {
    const summary = this.financialSummary;
    if (summary.profitMargin >= 20) {
      return {
        status: "eccellente",
        color: "success",
        message: "Redditivit\xE0 eccellente!"
      };
    } else if (summary.profitMargin >= 10) {
      return {
        status: "buona",
        color: "info",
        message: "Redditivit\xE0 buona"
      };
    } else if (summary.profitMargin >= 0) {
      return {
        status: "accettabile",
        color: "warning",
        message: "Redditivit\xE0 accettabile"
      };
    } else {
      return {
        status: "critica",
        color: "danger",
        message: "In perdita - Necessaria attenzione"
      };
    }
  }
  // Metodi helper per Math functions
  min(a, b) {
    return Math.min(a, b);
  }
  max(a, b) {
    return Math.max(a, b);
  }
  // Metodo per calcolare la width della progress bar
  getProgressWidth() {
    const margin = this.financialSummary.profitMargin;
    return Math.min(Math.max(margin, 0), 100);
  }
  static \u0275fac = function FinancialReport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinancialReport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinancialReport, selectors: [["app-financial-report"]], decls: 126, vars: 52, consts: [[1, "page-container"], ["data-tutorial", "report-cards", 1, "grid-cards", "p-sm"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "text-muted", "card-footer"], [1, "material-icons", "text-md"], [1, "text-md", "font-bold", "justify-center", "flex"], [1, "card-footer"], [1, "form-card"], [1, "flex", "flex-col", "justify-between", "items-start"], [1, "form-row"], [1, "form-group"], [1, "standard-label"], [1, "material-icons"], [1, "promethea-button", "ghost", 3, "click"], ["type", "number", "step", "0.01", "min", "1", 3, "ngModelChange", "ngModel"], [1, "text-muted", "text-sm"], [1, "modal-footer", "w-100", "p-sm"], [1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], [1, "grid-cards", "mt-lg"], ["data-tutorial", "report-daily", 1, "card"], [1, "text-md", "font-semibold", "m-0"], [1, "stats-grid"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], ["data-tutorial", "report-profitability", 1, "card"], [1, "profitability-status"], [1, "status-icon"], [1, "status-content"], [1, "font-semibold", "mb-sm"], [1, "text-muted", "mb-md"], [1, "progress-bar"], [1, "progress-fill"], ["data-tutorial", "report-expenses-detail", 1, "form-card"], [1, "categories-list"], ["class", "category-item", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "category-item"], [1, "category-header"], [1, "category-name", "font-semibold"], [1, "category-percentage", "text-muted"], [1, "category-amount", "font-bold"], [1, "category-bar"], [1, "category-bar-fill"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "flex"], [1, "header-icon"], [1, "section-title"], [1, "icon-button", 3, "click"], [1, "modal-content"], [1, "form-card", 3, "submit"], [1, "form-row", "mb-md"], ["for", "revenue-description", 1, "standard-label"], ["type", "text", "id", "revenue-description", "name", "description", "required", "", "placeholder", "Es. Vendita catering evento", 3, "ngModelChange", "ngModel"], ["for", "revenue-amount", 1, "standard-label"], ["type", "number", "id", "revenue-amount", "name", "amount", "step", "0.01", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], ["for", "revenue-category", 1, "standard-label"], ["id", "revenue-category", "name", "category", 3, "ngModelChange", "ngModel"], ["value", "vendite_dirette"], ["value", "catering"], ["value", "eventi"], ["value", "altro_servizio"], ["value", "altre_entrate"], [1, "flex", "flex-col", "gap-sm"], ["for", "revenue-notes", 1, "standard-label"], ["id", "revenue-notes", "name", "notes", "rows", "3", "placeholder", "Note aggiuntive...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["type", "submit", 1, "promethea-button", 3, "click"], [1, "modal-container", "modal-sm", 3, "click"], [1, "flex", "justify-between", "items-center", "mb-lg", "p-md", "border-b"], [1, "section-title", "m-0"], [1, "months-grid"], ["class", "month-button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "month-button", 3, "click"]], template: function FinancialReport_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "trending_up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 5);
      \u0275\u0275text(7, "Entrate Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 2)(13, "div", 3)(14, "span", 4);
      \u0275\u0275text(15, "trending_down");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h3", 5);
      \u0275\u0275text(17, "Uscite Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 7);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 2)(23, "div", 3)(24, "span", 8);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h3", 5);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 7);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 2)(33, "div", 3)(34, "span", 4);
      \u0275\u0275text(35, "swap_horiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h3", 5);
      \u0275\u0275text(37, "Break-even");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 6);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 10);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 11)(43, "div", 12)(44, "div", 13)(45, "div", 14)(46, "label", 15)(47, "span", 16);
      \u0275\u0275text(48, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " Mese ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 17);
      \u0275\u0275listener("click", function FinancialReport_Template_button_click_50_listener() {
        return ctx.openMonthsModal();
      });
      \u0275\u0275elementStart(51, "span", 16);
      \u0275\u0275text(52, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 14)(55, "label", 15)(56, "span", 16);
      \u0275\u0275text(57, "receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(58, " Scontrino Medio (\u20AC) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function FinancialReport_Template_input_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.averageTicket, $event) || (ctx.averageTicket = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "small", 19);
      \u0275\u0275text(61, "Importo medio per cliente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 20)(63, "button", 21);
      \u0275\u0275listener("click", function FinancialReport_Template_button_click_63_listener() {
        return ctx.openAddRevenueModal();
      });
      \u0275\u0275element(64, "lucide-angular", 22);
      \u0275\u0275text(65, " Entrata Manuale ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 23)(67, "div", 24)(68, "div", 3)(69, "span", 4);
      \u0275\u0275text(70, "today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h3", 25);
      \u0275\u0275text(72, "Analisi Giornaliera");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 26)(74, "div", 27)(75, "div", 28);
      \u0275\u0275text(76, "Entrate Giornaliere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 29);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 27)(80, "div", 28);
      \u0275\u0275text(81, "Uscite Giornaliere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 29);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 27)(85, "div", 28);
      \u0275\u0275text(86, "Utile Giornaliero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 29);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 27)(90, "div", 28);
      \u0275\u0275text(91, "Clienti Necessari");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 29);
      \u0275\u0275text(93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 27)(95, "div", 28);
      \u0275\u0275text(96, "Clienti Attuali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 29);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(99, "div", 30)(100, "div", 3)(101, "span", 16);
      \u0275\u0275text(102, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "h3", 25);
      \u0275\u0275text(104, "Stato Redditivit\xE0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 31)(106, "div", 32)(107, "span", 16);
      \u0275\u0275text(108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 33)(110, "h4", 34);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 35);
      \u0275\u0275text(113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 36);
      \u0275\u0275element(115, "div", 37);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(116, "div", 38)(117, "div", 3)(118, "span", 16);
      \u0275\u0275text(119, "category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "h3", 25);
      \u0275\u0275text(121, "Dettaglio per Categoria Spese");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 39);
      \u0275\u0275template(123, FinancialReport_div_123_Template, 10, 5, "div", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(124, FinancialReport_div_124_Template, 58, 5, "div", 41)(125, FinancialReport_div_125_Template, 18, 1, "div", 41);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.financialSummary.revenue));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.financialSummary.actualCustomers, " clienti serviti");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.financialSummary.expenses));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.formatCurrency(ctx.monthlyStats.fisse), " fisse + ", ctx.formatCurrency(ctx.monthlyStats.variabili), " variabili ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("text-green-500", ctx.financialSummary.profit >= 0)("text-red-500", ctx.financialSummary.profit < 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.financialSummary.profit >= 0 ? "attach_money" : "money_off", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.financialSummary.profit >= 0 ? "Utile" : "Perdita");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-green-500", ctx.financialSummary.profit >= 0)("text-red-500", ctx.financialSummary.profit < 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.formatCurrency(ctx.financialSummary.profit), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.financialSummary.profitMargin.toFixed(1), "% margine");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.formatNumber(ctx.financialSummary.breakEvenCustomers), " clienti");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-green-500", ctx.financialSummary.customersDifference >= 0)("text-red-500", ctx.financialSummary.customersDifference < 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.financialSummary.customersDifference >= 0 ? "+" : "", "", ctx.formatNumber(ctx.financialSummary.customersDifference), " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.formatMonthDisplay(ctx.selectedMonth), " ");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.averageTicket);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.dailyBreakdown.dailyRevenue));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.dailyBreakdown.dailyExpenses));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("text-green-500", ctx.dailyBreakdown.dailyProfit >= 0)("text-red-500", ctx.dailyBreakdown.dailyProfit < 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.formatCurrency(ctx.dailyBreakdown.dailyProfit), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatNumber(ctx.dailyBreakdown.dailyCustomersNeeded));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatNumber(ctx.dailyBreakdown.dailyActualCustomers));
      \u0275\u0275advance(7);
      \u0275\u0275classMap(ctx.getProfitabilityStatus().color);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.getProfitabilityStatus().color === "success" ? "celebration" : ctx.getProfitabilityStatus().color === "danger" ? "warning" : "analytics", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getProfitabilityStatus().message);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Margine di profitto: ", ctx.financialSummary.profitMargin.toFixed(1), "%");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.financialSummary.profitMargin >= 0 ? ctx.financialSummary.profitMargin <= 100 ? ctx.financialSummary.profitMargin : 100 : 0, "%");
      \u0275\u0275classProp("bg-green-500", ctx.financialSummary.profitMargin >= 20)("bg-yellow-500", ctx.financialSummary.profitMargin >= 10 && ctx.financialSummary.profitMargin < 20)("bg-red-500", ctx.financialSummary.profitMargin < 10);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.getCategoryBreakdown());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRevenueModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMonthsModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--gap-md);\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.stat-item[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-2);\n  transform: translateY(-2px);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--text-muted);\n  margin-bottom: var(--gap-sm);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n}\n.profitability-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  border-radius: 12px;\n  background: var(--smoke-1);\n  transition: all 0.3s ease;\n}\n.profitability-status.success[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 10%, transparent);\n  border: 1px solid color-mix(in srgb, #10b981 30%, transparent);\n}\n.profitability-status.warning[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 10%, transparent);\n  border: 1px solid color-mix(in srgb, #f59e0b 30%, transparent);\n}\n.profitability-status.danger[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 10%, transparent);\n  border: 1px solid color-mix(in srgb, #ef4444 30%, transparent);\n}\n.status-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: var(--background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.profitability-status.success[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.profitability-status.warning[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: white;\n}\n.profitability-status.danger[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.status-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.categories-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-md);\n}\n.category-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.category-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--secondary);\n  background: var(--vetro);\n}\n.category-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.category-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: var(--smoke-1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.category-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--gradiente);\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.months-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--gap-sm);\n}\n.month-button[_ngcontent-%COMP%] {\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 8px;\n  background: var(--background);\n  color: var(--text-color);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: center;\n}\n.month-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--secondary);\n  background: var(--smoke-1);\n}\n.month-button.active[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.text-green-500[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.text-red-500[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.text-yellow-500[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.bg-green-500[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.bg-red-500[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.bg-yellow-500[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.max-w-120[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .profitability-status[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .months-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grid-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=financial-report.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinancialReport, [{
    type: Component,
    args: [{ selector: "app-financial-report", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
\r
  <!-- Riepilogo Finanziario -->\r
  <div class="grid-cards p-sm" data-tutorial="report-cards">\r
    <!-- Entrate -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">trending_up</span>\r
        <h3 class="card-title">Entrate Totali</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ formatCurrency(financialSummary.revenue) }}</div>\r
      <span class="text-muted card-footer">{{ financialSummary.actualCustomers }} clienti serviti</span>\r
    </div>\r
\r
    <!-- Uscite -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">trending_down</span>\r
        <h3 class="card-title">Uscite Totali</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ formatCurrency(financialSummary.expenses) }}</div>\r
      <span class="text-muted card-footer">\r
        {{ formatCurrency(monthlyStats.fisse) }} fisse + \r
        {{ formatCurrency(monthlyStats.variabili) }} variabili\r
      </span>\r
    </div>\r
\r
    <!-- Utile/Perdita -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md" \r
              [class.text-green-500]="financialSummary.profit >= 0"\r
              [class.text-red-500]="financialSummary.profit < 0">\r
          {{ financialSummary.profit >= 0 ? 'attach_money' : 'money_off' }}\r
        </span>\r
        <h3 class="card-title">{{ financialSummary.profit >= 0 ? 'Utile' : 'Perdita' }}</h3>\r
      </div>\r
      <div class="text-md font-bold justify-center flex" \r
           [class.text-green-500]="financialSummary.profit >= 0"\r
           [class.text-red-500]="financialSummary.profit < 0">\r
        {{ formatCurrency(financialSummary.profit) }}\r
      </div>\r
      <span class="text-muted card-footer">{{ financialSummary.profitMargin.toFixed(1) }}% margine</span>\r
    </div>\r
\r
    <!-- Break-even -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">swap_horiz</span>\r
        <h3 class="card-title">Break-even</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ formatNumber(financialSummary.breakEvenCustomers) }} clienti</div>\r
      <span class="card-footer" \r
            [class.text-green-500]="financialSummary.customersDifference >= 0"\r
            [class.text-red-500]="financialSummary.customersDifference < 0">\r
        {{ financialSummary.customersDifference >= 0 ? '+' : '' }}{{ formatNumber(financialSummary.customersDifference) }}\r
      </span>\r
    </div>\r
  </div>\r
  \r
  <!-- Filtri -->\r
  <div class="form-card">\r
    <div class="flex flex-col justify-between items-start">\r
      <div class="form-row">\r
        <!-- Selezione Mese -->\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">calendar_today</span>\r
            Mese\r
          </label>\r
          <button class="promethea-button ghost" (click)="openMonthsModal()">\r
            <span class="material-icons">calendar_today</span>\r
            {{ formatMonthDisplay(selectedMonth) }}\r
          </button>\r
        </div>\r
\r
        <!-- Scontrino Medio -->\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">receipt</span>\r
            Scontrino Medio (\u20AC)\r
          </label>\r
          <input type="number" [(ngModel)]="averageTicket" step="0.01" min="1">\r
          <small class="text-muted text-sm">Importo medio per cliente</small>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer w-100 p-sm">\r
        <button class="promethea-button" (click)="openAddRevenueModal()">\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          Entrata Manuale\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Analisi Dettagliata -->\r
  <div class="grid-cards mt-lg">\r
    <!-- Analisi Giornaliera -->\r
    <div class="card" data-tutorial="report-daily">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">today</span>\r
        <h3 class="text-md font-semibold m-0">Analisi Giornaliera</h3>\r
      </div>\r
      \r
      <div class="stats-grid">\r
        <div class="stat-item">\r
          <div class="stat-label">Entrate Giornaliere</div>\r
          <div class="stat-value">{{ formatCurrency(dailyBreakdown.dailyRevenue) }}</div>\r
        </div>\r
        <div class="stat-item">\r
          <div class="stat-label">Uscite Giornaliere</div>\r
          <div class="stat-value">{{ formatCurrency(dailyBreakdown.dailyExpenses) }}</div>\r
        </div>\r
        <div class="stat-item">\r
          <div class="stat-label">Utile Giornaliero</div>\r
          <div class="stat-value" \r
               [class.text-green-500]="dailyBreakdown.dailyProfit >= 0"\r
               [class.text-red-500]="dailyBreakdown.dailyProfit < 0">\r
            {{ formatCurrency(dailyBreakdown.dailyProfit) }}\r
          </div>\r
        </div>\r
        <div class="stat-item">\r
          <div class="stat-label">Clienti Necessari</div>\r
          <div class="stat-value">{{ formatNumber(dailyBreakdown.dailyCustomersNeeded) }}</div>\r
        </div>\r
        <div class="stat-item">\r
          <div class="stat-label">Clienti Attuali</div>\r
          <div class="stat-value">{{ formatNumber(dailyBreakdown.dailyActualCustomers) }}</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Stato Redditivit\xE0 -->\r
    <div class="card" data-tutorial="report-profitability">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">bar_chart</span>\r
        <h3 class="text-md font-semibold m-0">Stato Redditivit\xE0</h3>\r
      </div>\r
      \r
      <div class="profitability-status" [class]="getProfitabilityStatus().color">\r
        <div class="status-icon">\r
          <span class="material-icons">\r
            {{ getProfitabilityStatus().color === 'success' ? 'celebration' : \r
               getProfitabilityStatus().color === 'danger' ? 'warning' : 'analytics' }}\r
          </span>\r
        </div>\r
        <div class="status-content">\r
          <h4 class="font-semibold mb-sm">{{ getProfitabilityStatus().message }}</h4>\r
          <p class="text-muted mb-md">Margine di profitto: {{ financialSummary.profitMargin.toFixed(1) }}%</p>\r
          <div class="progress-bar">\r
            <div class="progress-fill" \r
                 [style.width.%]="financialSummary.profitMargin >= 0 ? (financialSummary.profitMargin <= 100 ? financialSummary.profitMargin : 100) : 0"\r
                 [class.bg-green-500]="financialSummary.profitMargin >= 20"\r
                 [class.bg-yellow-500]="financialSummary.profitMargin >= 10 && financialSummary.profitMargin < 20"\r
                 [class.bg-red-500]="financialSummary.profitMargin < 10">\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Dettaglio Categorie Spese -->\r
  <div class="form-card" data-tutorial="report-expenses-detail">\r
    <div class="flex items-center gap-sm mb-md">\r
      <span class="material-icons">category</span>\r
      <h3 class="text-md font-semibold m-0">Dettaglio per Categoria Spese</h3>\r
    </div>\r
    \r
    <div class="categories-list">\r
      <div *ngFor="let category of getCategoryBreakdown()" class="category-item">\r
        <div class="category-header">\r
          <span class="category-name font-semibold">{{ category.category }}</span>\r
          <span class="category-percentage text-muted">{{ category.percentage.toFixed(1) }}%</span>\r
        </div>\r
        <div class="category-amount font-bold">{{ formatCurrency(category.amount) }}</div>\r
        <div class="category-bar">\r
          <div class="category-bar-fill" [style.width.%]="category.percentage"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Entrata Manuale -->\r
<div *ngIf="showRevenueModal" class="modal-overlay" (click)="closeRevenueModal()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
\r
    <!-- Header Modal -->\r
  <div class="modal-header">\r
    <div class="flex">\r
    <div class="header-icon">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>\r
    </div>\r
    <div>\r
      <h1 class="section-title">Aggiungi Entrata Manuale</h1>\r
    </div>\r
    </div>\r
      <button class="icon-button" (click)="closeRevenueModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
  </div>\r
\r
\r
    <!-- Contenuto Modal -->\r
    <div class="modal-content">\r
      <form (submit)="saveRevenue(); $event.preventDefault()" class="form-card">\r
        <div class="form-row mb-md">\r
          <label class="standard-label" for="revenue-description">\r
            <span class="material-icons">description</span>\r
            Descrizione *\r
          </label>\r
          <input type="text" id="revenue-description" [(ngModel)]="revenueForm.description" \r
                 name="description" required placeholder="Es. Vendita catering evento">\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label" for="revenue-amount">\r
              <span class="material-icons">euro</span>\r
              Importo (\u20AC) *\r
            </label>\r
            <input type="number" id="revenue-amount" [(ngModel)]="revenueForm.amount" \r
                   name="amount" step="0.01" min="0" required>\r
          </div>\r
          \r
          <div class="form-group">\r
            <label class="standard-label" for="revenue-category">\r
              <span class="material-icons">label</span>\r
              Categoria\r
            </label>\r
            <select id="revenue-category" [(ngModel)]="revenueForm.category" name="category">\r
              <option value="vendite_dirette">Vendite Dirette</option>\r
              <option value="catering">Catering</option>\r
              <option value="eventi">Eventi</option>\r
              <option value="altro_servizio">Altro Servizio</option>\r
              <option value="altre_entrate">Altre Entrate</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <div class="flex flex-col gap-sm">\r
          <label class="standard-label" for="revenue-notes">\r
            <span class="material-icons">notes</span>\r
            Note\r
          </label>\r
          <textarea id="revenue-notes" [(ngModel)]="revenueForm.notes" \r
                    name="notes" rows="3" placeholder="Note aggiuntive..."></textarea>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button type="button" class="promethea-button ghost" (click)="closeRevenueModal()">\r
        <span class="material-icons">close</span>\r
        Annulla\r
      </button>\r
      <button type="submit" class="promethea-button" (click)="saveRevenue()">\r
        <span class="material-icons">check</span>\r
        Aggiungi Entrata\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Selezione Mese -->\r
<div *ngIf="showMonthsModal" class="modal-overlay" (click)="closeMonthsModal()">\r
  <div class="modal-container modal-sm" (click)="$event.stopPropagation()">\r
    \r
    <!-- Header Modal -->\r
    <div class="flex justify-between items-center mb-lg p-md border-b">\r
      <h2 class="section-title m-0">\r
        <span class="material-icons">calendar_today</span>\r
        Seleziona Mese\r
      </h2>\r
      <button class="icon-button" (click)="closeMonthsModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Contenuto Modal -->\r
    <div class="modal-content">\r
      <div class="months-grid">\r
        <button class="month-button" \r
                *ngFor="let month of availableMonths"\r
                (click)="changeMonth(month)"\r
                [class.active]="month === selectedMonth">\r
          {{ formatMonthDisplay(month) }}\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button class="promethea-button" (click)="closeMonthsModal()">\r
        <span class="material-icons">close</span>\r
        Chiudi\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/financial/financial-report/financial-report.css */\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--gap-md);\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.stat-item:hover {\n  background: var(--smoke-2);\n  transform: translateY(-2px);\n}\n.stat-label {\n  font-size: var(--fs-sm);\n  color: var(--text-muted);\n  margin-bottom: var(--gap-sm);\n}\n.stat-value {\n  font-size: var(--fs-md);\n  font-weight: 700;\n}\n.profitability-status {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  border-radius: 12px;\n  background: var(--smoke-1);\n  transition: all 0.3s ease;\n}\n.profitability-status.success {\n  background: color-mix(in srgb, #10b981 10%, transparent);\n  border: 1px solid color-mix(in srgb, #10b981 30%, transparent);\n}\n.profitability-status.warning {\n  background: color-mix(in srgb, #f59e0b 10%, transparent);\n  border: 1px solid color-mix(in srgb, #f59e0b 30%, transparent);\n}\n.profitability-status.danger {\n  background: color-mix(in srgb, #ef4444 10%, transparent);\n  border: 1px solid color-mix(in srgb, #ef4444 30%, transparent);\n}\n.status-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: var(--background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.profitability-status.success .status-icon {\n  background: #10b981;\n  color: white;\n}\n.profitability-status.warning .status-icon {\n  background: #f59e0b;\n  color: white;\n}\n.profitability-status.danger .status-icon {\n  background: #ef4444;\n  color: white;\n}\n.status-content {\n  flex: 1;\n}\n.progress-bar {\n  width: 100%;\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.categories-list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-md);\n}\n.category-item {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.category-item:hover {\n  border-color: var(--secondary);\n  background: var(--vetro);\n}\n.category-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.category-bar {\n  width: 100%;\n  height: 6px;\n  background: var(--smoke-1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.category-bar-fill {\n  height: 100%;\n  background: var(--gradiente);\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.months-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--gap-sm);\n}\n.month-button {\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 8px;\n  background: var(--background);\n  color: var(--text-color);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: center;\n}\n.month-button:hover {\n  border-color: var(--secondary);\n  background: var(--smoke-1);\n}\n.month-button.active {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.text-green-500 {\n  color: #10b981;\n}\n.text-red-500 {\n  color: #ef4444;\n}\n.text-yellow-500 {\n  color: #f59e0b;\n}\n.bg-green-500 {\n  background: #10b981;\n}\n.bg-red-500 {\n  background: #ef4444;\n}\n.bg-yellow-500 {\n  background: #f59e0b;\n}\n.max-w-120 {\n  max-width: 120px;\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .profitability-status {\n    flex-direction: column;\n    text-align: center;\n  }\n  .months-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .grid-cards {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=financial-report.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinancialReport, { className: "FinancialReport", filePath: "src/app/restaurant/financial/financial-report/financial-report.ts", lineNumber: 16 });
})();
export {
  FinancialReport
};
//# sourceMappingURL=chunk-BDA4E6NW.js.map
