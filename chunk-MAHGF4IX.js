import {
  ExpenseService
} from "./chunk-HTQ32DOV.js";
import {
  SupplierService
} from "./chunk-GPUJMBFU.js";
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
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-4SOHWVCI.js";
import "./chunk-QSRXFII6.js";
import "./chunk-XTSNHNKL.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import "./chunk-77JDNC7M.js";
import "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3MDKIO5.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/expense-management/expense-management.ts
var _c0 = (a0, a1) => ({ "recurring-info": a0, "non-recurring-info": a1 });
function ExpenseManagement_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Mese");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function ExpenseManagement_div_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMonthsModal());
    });
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMonth(ctx_r1.selectedMonth), " ");
  }
}
function ExpenseManagement_div_66_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ExpenseManagement_div_66_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAllTemplates = !ctx_r1.showAllTemplates);
    });
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showAllTemplates ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showAllTemplates ? "Mostra meno" : "Mostra tutto", " ");
  }
}
function ExpenseManagement_div_66_div_9_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("A: ", ctx_r1.formatMonthDisplay(template_r5.end_month), "");
  }
}
function ExpenseManagement_div_66_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div")(3, "h4", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 43)(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 47);
    \u0275\u0275listener("click", function ExpenseManagement_div_66_div_9_Template_button_click_12_listener() {
      const template_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deactivateRecurringTemplate(template_r5.id));
    });
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14, "toggle_off");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 48)(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ExpenseManagement_div_66_div_9_div_18_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const template_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hidden-card", !ctx_r1.showAllTemplates && i_r6 >= 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(template_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", template_r5.type === "fissa");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r5.type === "fissa" ? "Fissa" : "Variabile", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(template_r5.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(template_r5.category);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Da: ", ctx_r1.formatMonthDisplay(template_r5.start_month), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", template_r5.end_month);
  }
}
function ExpenseManagement_div_66_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", ctx_r1.recurringTemplates.length - 3, " altri template nascosti");
  }
}
function ExpenseManagement_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 33)(2, "div", 34)(3, "span", 4);
    \u0275\u0275text(4, "repeat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ExpenseManagement_div_66_button_7_Template, 4, 2, "button", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36);
    \u0275\u0275template(9, ExpenseManagement_div_66_div_9_Template, 19, 10, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ExpenseManagement_div_66_div_10_Template, 3, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Spese Ricorrenti (", ctx_r1.recurringTemplates.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recurringTemplates.length > 3);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.showAllTemplates)("collapsed", !ctx_r1.showAllTemplates);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recurringTemplates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showAllTemplates && ctx_r1.recurringTemplates.length > 3);
  }
}
function ExpenseManagement_th_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Mese");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_tr_87_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, " repeat ");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_tr_87_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const expense_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSupplierName(expense_r8.supplier_id), " ");
  }
}
function ExpenseManagement_tr_87_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_tr_87_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const expense_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatMonth(expense_r8.month));
  }
}
function ExpenseManagement_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50)(1, "td")(2, "div", 34)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExpenseManagement_tr_87_span_5_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, ExpenseManagement_tr_87_span_15_Template, 2, 1, "span", 52)(16, ExpenseManagement_tr_87_span_16_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ExpenseManagement_tr_87_td_17_Template, 2, 1, "td", 29);
    \u0275\u0275elementStart(18, "td", 54);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 55)(22, "button", 56);
    \u0275\u0275listener("click", function ExpenseManagement_tr_87_Template_button_click_22_listener() {
      const expense_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleExpenseStatus(expense_r8));
    });
    \u0275\u0275elementStart(23, "span", 22);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 57);
    \u0275\u0275listener("click", function ExpenseManagement_tr_87_Template_button_click_25_listener() {
      const expense_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditExpenseModal(expense_r8));
    });
    \u0275\u0275elementStart(26, "span", 22);
    \u0275\u0275text(27, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 58);
    \u0275\u0275listener("click", function ExpenseManagement_tr_87_Template_button_click_28_listener() {
      const expense_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteExpense(expense_r8));
    });
    \u0275\u0275element(29, "lucide-angular", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const expense_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("inactive-row", !expense_r8.is_active);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(expense_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", expense_r8.is_recurring);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", expense_r8.type === "fissa");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", expense_r8.type === "fissa" ? "Fissa" : "Variabile", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r8.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(expense_r8.amount));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", expense_r8.supplier_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !expense_r8.supplier_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "all");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r8.notes || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active-toggle", expense_r8.is_active);
    \u0275\u0275property("title", expense_r8.is_active ? "Disattiva spesa" : "Attiva spesa");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", expense_r8.is_active ? "toggle_on" : "toggle_off", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 20);
  }
}
function ExpenseManagement_tr_88_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Nessuna spesa trovata per "', ctx_r1.searchTerm, '"');
  }
}
function ExpenseManagement_tr_88_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "Nessuna spesa registrata");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 62)(2, "div", 63)(3, "span", 64);
    \u0275\u0275text(4, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExpenseManagement_tr_88_p_5_Template, 2, 1, "p", 53)(6, ExpenseManagement_tr_88_p_6_Template, 2, 0, "p", 53);
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function ExpenseManagement_tr_88_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddExpenseModal());
    });
    \u0275\u0275element(8, "lucide-angular", 25);
    \u0275\u0275text(9, " Aggiungi la prima spesa ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.viewMode === "all" ? 8 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
  }
}
function ExpenseManagement_div_89_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Mese");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_89_tr_58_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, " repeat ");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_89_tr_58_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const expense_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSupplierName(expense_r11.supplier_id), " ");
  }
}
function ExpenseManagement_div_89_tr_58_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_89_tr_58_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const expense_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatMonth(expense_r11.month));
  }
}
function ExpenseManagement_div_89_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 79)(1, "td")(2, "div", 34)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExpenseManagement_div_89_tr_58_span_5_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, ExpenseManagement_div_89_tr_58_span_15_Template, 2, 1, "span", 52)(16, ExpenseManagement_div_89_tr_58_span_16_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ExpenseManagement_div_89_tr_58_td_17_Template, 2, 1, "td", 29);
    \u0275\u0275elementStart(18, "td", 54);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 80);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 55)(24, "button", 81);
    \u0275\u0275listener("click", function ExpenseManagement_div_89_tr_58_Template_button_click_24_listener() {
      const expense_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleExpenseStatus(expense_r11));
    });
    \u0275\u0275elementStart(25, "span", 22);
    \u0275\u0275text(26, " toggle_off ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 82);
    \u0275\u0275listener("click", function ExpenseManagement_div_89_tr_58_Template_button_click_27_listener() {
      const expense_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditExpenseModal(expense_r11));
    });
    \u0275\u0275elementStart(28, "span", 22);
    \u0275\u0275text(29, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 83);
    \u0275\u0275listener("click", function ExpenseManagement_div_89_tr_58_Template_button_click_30_listener() {
      const expense_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.permanentlyDeleteExpense(expense_r11));
    });
    \u0275\u0275elementStart(31, "span", 22);
    \u0275\u0275text(32, "delete_forever");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const expense_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(expense_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", expense_r11.is_recurring);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", expense_r11.type === "fissa");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", expense_r11.type === "fissa" ? "Fissa" : "Variabile", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r11.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(expense_r11.amount));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", expense_r11.supplier_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !expense_r11.supplier_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "all");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r11.notes || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDeletedDate(expense_r11.deleted_at), " ");
  }
}
function ExpenseManagement_div_89_tr_59_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Nessuna spesa disattivata trovata per "', ctx_r1.searchTerm, '"');
  }
}
function ExpenseManagement_div_89_tr_59_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "Nessuna spesa disattivata");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_89_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62)(2, "div", 63)(3, "span", 64);
    \u0275\u0275text(4, "archive");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExpenseManagement_div_89_tr_59_p_5_Template, 2, 1, "p", 53)(6, ExpenseManagement_div_89_tr_59_p_6_Template, 2, 0, "p", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.viewMode === "all" ? 9 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm);
  }
}
function ExpenseManagement_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 55)(3, "span", 67);
    \u0275\u0275text(4, "archive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 68);
    \u0275\u0275text(6, "Spese Disattivate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 2)(9, "div", 3)(10, "span", 70);
    \u0275\u0275text(11, "money_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3", 5);
    \u0275\u0275text(13, "Totale Disattivate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 6)(15, "div", 71);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 2)(18, "div", 3)(19, "span", 72);
    \u0275\u0275text(20, "repeat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3", 5);
    \u0275\u0275text(22, "Fisse Disattivate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 6)(24, "div", 73);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 2)(27, "div", 3)(28, "span", 74);
    \u0275\u0275text(29, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h3", 5);
    \u0275\u0275text(31, "Variabili Disattivate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 6)(33, "div", 75);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 76)(36, "div", 77)(37, "table", 28)(38, "thead")(39, "tr")(40, "th");
    \u0275\u0275text(41, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Importo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Fornitore");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, ExpenseManagement_div_89_th_50_Template, 2, 0, "th", 29);
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Data Disattivazione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "tbody");
    \u0275\u0275template(58, ExpenseManagement_div_89_tr_58_Template, 33, 12, "tr", 78)(59, ExpenseManagement_div_89_tr_59_Template, 7, 3, "tr", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.deletedExpensesTotal), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deletedFixedExpensesCount, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deletedVariableExpensesCount, " ");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "all");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.filteredDeletedExpenses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredDeletedExpenses.length === 0);
  }
}
function ExpenseManagement_div_90_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46)(1, "span", 120);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Le spese fisse sono automaticamente ricorrenti ");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_90_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46)(1, "span", 120);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Le spese variabili sono una tantum ");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_90_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r13 = ctx.$implicit;
    \u0275\u0275property("value", cat_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r13, " ");
  }
}
function ExpenseManagement_div_90_option_58_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("- ", supplier_r14.contact_name, "");
  }
}
function ExpenseManagement_div_90_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 107);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ExpenseManagement_div_90_option_58_span_2_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r14 = ctx.$implicit;
    \u0275\u0275property("value", supplier_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", supplier_r14.company_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", supplier_r14.contact_name);
  }
}
function ExpenseManagement_div_90_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "repeat");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_90_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "event");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_90_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Spesa ricorrente");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_90_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Spesa una tantum");
    \u0275\u0275elementEnd();
  }
}
function ExpenseManagement_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "div", 88)(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ExpenseManagement_div_90_p_10_Template, 4, 0, "p", 53)(11, ExpenseManagement_div_90_p_11_Template, 4, 0, "p", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 89);
    \u0275\u0275listener("click", function ExpenseManagement_div_90_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeExpenseModal());
    });
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "form", 90);
    \u0275\u0275listener("submit", function ExpenseManagement_div_90_Template_form_submit_15_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.saveExpense();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(16, "div", 91)(17, "div", 92)(18, "div", 18)(19, "label", 93)(20, "span", 22);
    \u0275\u0275text(21, "title");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Nome Spesa * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_90_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expenseForm.name, $event) || (ctx_r1.expenseForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18)(25, "label", 95)(26, "span", 22);
    \u0275\u0275text(27, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Importo (\u20AC) * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_90_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expenseForm.amount, $event) || (ctx_r1.expenseForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 92)(31, "div", 18)(32, "label", 97)(33, "span", 22);
    \u0275\u0275text(34, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Tipo * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 98);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_90_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expenseForm.type, $event) || (ctx_r1.expenseForm.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ExpenseManagement_div_90_Template_select_change_36_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExpenseTypeChange());
    });
    \u0275\u0275elementStart(37, "option", 99);
    \u0275\u0275text(38, "Spesa Fissa (ricorrente)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 100);
    \u0275\u0275text(40, "Spesa Variabile (una tantum)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 18)(42, "label", 101)(43, "span", 22);
    \u0275\u0275text(44, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Categoria * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "select", 102);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_90_Template_select_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expenseForm.category, $event) || (ctx_r1.expenseForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(47, "option", 103);
    \u0275\u0275text(48, "Seleziona categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, ExpenseManagement_div_90_option_49_Template, 2, 2, "option", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 92)(51, "div", 18)(52, "label", 105);
    \u0275\u0275element(53, "lucide-angular", 23);
    \u0275\u0275text(54, " Fornitore ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "select", 106);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_90_Template_select_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expenseForm.supplier_id, $event) || (ctx_r1.expenseForm.supplier_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(56, "option", 107);
    \u0275\u0275text(57, "Nessun fornitore");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ExpenseManagement_div_90_option_58_Template, 3, 3, "option", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 108)(60, "button", 109);
    \u0275\u0275listener("click", function ExpenseManagement_div_90_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSupplierModal());
    });
    \u0275\u0275element(61, "lucide-angular", 25);
    \u0275\u0275text(62, " Nuovo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 92)(64, "div", 18)(65, "label", 110)(66, "span", 22);
    \u0275\u0275text(67, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " Mese * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_90_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expenseForm.month, $event) || (ctx_r1.expenseForm.month = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 112)(71, "div", 113);
    \u0275\u0275template(72, ExpenseManagement_div_90_span_72_Template, 2, 0, "span", 114)(73, ExpenseManagement_div_90_span_73_Template, 2, 0, "span", 114)(74, ExpenseManagement_div_90_span_74_Template, 2, 0, "span", 29)(75, ExpenseManagement_div_90_span_75_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 115)(77, "label", 116)(78, "span", 22);
    \u0275\u0275text(79, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " Note ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "textarea", 117);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_90_Template_textarea_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.expenseForm.notes, $event) || (ctx_r1.expenseForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 20)(83, "button", 118);
    \u0275\u0275listener("click", function ExpenseManagement_div_90_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeExpenseModal());
    });
    \u0275\u0275text(84, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 119);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingExpense ? "edit" : "add");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingExpense ? "Modifica Spesa" : "Nuova Spesa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expenseForm.type === "fissa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expenseForm.type === "variabile");
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expenseForm.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expenseForm.amount);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expenseForm.type);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expenseForm.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getCategoriesByType(ctx_r1.expenseForm.type));
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expenseForm.supplier_id);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.suppliers);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expenseForm.month);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c0, ctx_r1.expenseForm.type === "fissa", ctx_r1.expenseForm.type === "variabile"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expenseForm.type === "fissa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expenseForm.type === "variabile");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expenseForm.type === "fissa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expenseForm.type === "variabile");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.expenseForm.notes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingExpense ? "Aggiorna" : "Crea", " Spesa ");
  }
}
function ExpenseManagement_div_91_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function ExpenseManagement_div_91_button_14_Template_button_click_0_listener() {
      const month_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeMonth(month_r17));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", month_r17 === ctx_r1.selectedMonth);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMonth(month_r17), " ");
  }
}
function ExpenseManagement_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 121)(2, "div", 86)(3, "div", 87)(4, "div", 88)(5, "span", 22);
    \u0275\u0275text(6, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 68);
    \u0275\u0275text(9, "Seleziona Mese");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 89);
    \u0275\u0275listener("click", function ExpenseManagement_div_91_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMonthsModal());
    });
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 20);
    \u0275\u0275template(14, ExpenseManagement_div_91_button_14_Template, 2, 3, "button", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20)(16, "button", 118);
    \u0275\u0275listener("click", function ExpenseManagement_div_91_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMonthsModal());
    });
    \u0275\u0275text(17, " Chiudi ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.availableMonths);
  }
}
function ExpenseManagement_div_92_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "span", 134);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r19.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", category_r19.type === "fissa")("warning", category_r19.type === "variabile");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r19.type === "entrambi" ? "Entrambi" : category_r19.type === "fissa" ? "Fisse" : "Variabili", " ");
  }
}
function ExpenseManagement_div_92_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "p");
    \u0275\u0275text(2, "Nessuna categoria personalizzata creata");
    \u0275\u0275elementEnd()();
  }
}
function ExpenseManagement_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 121)(2, "div", 86)(3, "div", 87)(4, "div", 88)(5, "span", 22);
    \u0275\u0275text(6, "category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 68);
    \u0275\u0275text(9, "Gestione Categorie");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 89);
    \u0275\u0275listener("click", function ExpenseManagement_div_92_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCategoryModal());
    });
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 91)(14, "div", 124)(15, "h3", 3);
    \u0275\u0275element(16, "lucide-angular", 25);
    \u0275\u0275text(17, " Nuova Categoria ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "form", 90);
    \u0275\u0275listener("submit", function ExpenseManagement_div_92_Template_form_submit_18_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.saveCategory();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(19, "div", 92)(20, "div", 18)(21, "label", 125)(22, "span", 22);
    \u0275\u0275text(23, "title");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Nome Categoria * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_92_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.categoryForm.name, $event) || (ctx_r1.categoryForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18)(27, "label", 127)(28, "span", 22);
    \u0275\u0275text(29, "filter_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Tipo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 128);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_92_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.categoryForm.type, $event) || (ctx_r1.categoryForm.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(32, "option", 129);
    \u0275\u0275text(33, "Entrambi i tipi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 99);
    \u0275\u0275text(35, "Solo Spese Fisse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 100);
    \u0275\u0275text(37, "Solo Spese Variabili");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 10)(39, "div", 20)(40, "button", 118);
    \u0275\u0275listener("click", function ExpenseManagement_div_92_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCategoryModal());
    });
    \u0275\u0275text(41, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 119);
    \u0275\u0275text(43, " Crea Categoria ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div")(45, "h3", 3)(46, "span", 22);
    \u0275\u0275text(47, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Categorie Esistenti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 130);
    \u0275\u0275template(50, ExpenseManagement_div_92_div_50_Template, 5, 6, "div", 131)(51, ExpenseManagement_div_92_div_51_Template, 3, 0, "div", 132);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.categoryForm.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.categoryForm.type);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categories.length === 0);
  }
}
function ExpenseManagement_div_93_div_66_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("- ", supplier_r21.contact_name, "");
  }
}
function ExpenseManagement_div_93_div_66_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(supplier_r21.email);
  }
}
function ExpenseManagement_div_93_div_66_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(supplier_r21.phone);
  }
}
function ExpenseManagement_div_93_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151)(1, "div", 152)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ExpenseManagement_div_93_div_66_span_4_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 153);
    \u0275\u0275template(6, ExpenseManagement_div_93_div_66_span_6_Template, 2, 1, "span", 154)(7, ExpenseManagement_div_93_div_66_span_7_Template, 2, 1, "span", 155);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const supplier_r21 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r21.company_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", supplier_r21.contact_name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", supplier_r21.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", supplier_r21.phone);
  }
}
function ExpenseManagement_div_93_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "p");
    \u0275\u0275text(2, "Nessun fornitore creato");
    \u0275\u0275elementEnd()();
  }
}
function ExpenseManagement_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "div", 88)(5, "span", 22);
    \u0275\u0275text(6, "local_shipping");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 68);
    \u0275\u0275text(9, "Gestione Fornitori");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 89);
    \u0275\u0275listener("click", function ExpenseManagement_div_93_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierModal());
    });
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 91)(14, "div", 124)(15, "h3", 3);
    \u0275\u0275element(16, "lucide-angular", 25);
    \u0275\u0275text(17, " Nuovo Fornitore ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "form", 90);
    \u0275\u0275listener("submit", function ExpenseManagement_div_93_Template_form_submit_18_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.saveSupplier();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(19, "div", 92)(20, "div", 18)(21, "label", 135)(22, "span", 22);
    \u0275\u0275text(23, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Nome Ditta * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_93_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierForm.company_name, $event) || (ctx_r1.supplierForm.company_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18)(27, "label", 137);
    \u0275\u0275element(28, "lucide-angular", 138);
    \u0275\u0275text(29, " Referente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_93_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierForm.contact_name, $event) || (ctx_r1.supplierForm.contact_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 92)(32, "div", 18)(33, "label", 140);
    \u0275\u0275element(34, "lucide-angular", 141);
    \u0275\u0275text(35, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 142);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_93_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierForm.email, $event) || (ctx_r1.supplierForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18)(38, "label", 143)(39, "span", 22);
    \u0275\u0275text(40, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Telefono ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 144);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_93_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierForm.phone, $event) || (ctx_r1.supplierForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 115)(44, "label", 145)(45, "span", 22);
    \u0275\u0275text(46, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Indirizzo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "textarea", 146);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_93_Template_textarea_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierForm.address, $event) || (ctx_r1.supplierForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 115)(50, "label", 147)(51, "span", 22);
    \u0275\u0275text(52, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Descrizione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "textarea", 148);
    \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_div_93_Template_textarea_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierForm.description, $event) || (ctx_r1.supplierForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 20)(56, "button", 118);
    \u0275\u0275listener("click", function ExpenseManagement_div_93_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierModal());
    });
    \u0275\u0275text(57, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 119);
    \u0275\u0275text(59, " Crea Fornitore ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div")(61, "h3", 3)(62, "span", 22);
    \u0275\u0275text(63, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Fornitori Esistenti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 149);
    \u0275\u0275template(66, ExpenseManagement_div_93_div_66_Template, 8, 4, "div", 150)(67, ExpenseManagement_div_93_div_67_Template, 3, 0, "div", 132);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierForm.company_name);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierForm.contact_name);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierForm.email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierForm.phone);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierForm.address);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierForm.description);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.suppliers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.suppliers.length === 0);
  }
}
function ExpenseManagement_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 157)(2, "div", 86)(3, "div", 87)(4, "div", 88)(5, "span", 22);
    \u0275\u0275text(6, "repeat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 68);
    \u0275\u0275text(9, "Modifica Spese Future");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 91)(11, "div", 158)(12, "div", 159)(13, "span", 160);
    \u0275\u0275text(14, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h3", 161);
    \u0275\u0275text(16, "La modifica \xE8 stata salvata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 162);
    \u0275\u0275text(18, ' La spesa "');
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, '" \xE8 ricorrente.');
    \u0275\u0275element(22, "br")(23, "br");
    \u0275\u0275text(24, " Vuoi applicare questa modifica anche a tutti i mesi futuri? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 163)(26, "div", 164);
    \u0275\u0275listener("click", function ExpenseManagement_div_94_Template_div_click_26_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onlyCurrentMonth());
    });
    \u0275\u0275elementStart(27, "div", 165)(28, "span", 166);
    \u0275\u0275text(29, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "Solo questo mese");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 46);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 167);
    \u0275\u0275listener("click", function ExpenseManagement_div_94_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyToFutureMonths());
    });
    \u0275\u0275elementStart(35, "div", 165)(36, "span", 166);
    \u0275\u0275text(37, "date_range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "Tutti i mesi futuri");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "p", 46);
    \u0275\u0275text(41, "La modifica verr\xE0 applicata a partire dal mese successivo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 20)(43, "button", 118);
    \u0275\u0275listener("click", function ExpenseManagement_div_94_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onlyCurrentMonth());
    });
    \u0275\u0275elementStart(44, "span", 22);
    \u0275\u0275text(45, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Solo questo mese ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 168);
    \u0275\u0275listener("click", function ExpenseManagement_div_94_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyToFutureMonths());
    });
    \u0275\u0275elementStart(48, "span", 22);
    \u0275\u0275text(49, "date_range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Tutti i mesi futuri ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r1.pendingExpenseUpdate == null ? null : ctx_r1.pendingExpenseUpdate.expenseData.name);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("La modifica verr\xE0 applicata solo a ", ctx_r1.formatMonthDisplay((ctx_r1.pendingExpenseUpdate == null ? null : ctx_r1.pendingExpenseUpdate.expenseData.month) || ""), "");
  }
}
var ExpenseManagement = class _ExpenseManagement {
  expenseService = inject(ExpenseService);
  supplierService = inject(SupplierService);
  // Sottoscrizioni per cleanup
  expenseSubscription;
  templatesSubscription;
  categoriesSubscription;
  suppliersSubscription;
  // Dati
  expenses = [];
  availableMonths = [];
  categories = [];
  suppliers = [];
  recurringTemplates = [];
  showDeletedExpenses = false;
  // Filtri e stato
  selectedMonth = this.getCurrentMonth();
  viewMode = "monthly";
  searchTerm = "";
  // Modals
  showExpenseModal = false;
  showMonthsModal = false;
  showCategoryModal = false;
  showSupplierModal = false;
  editingExpense = null;
  // Stati per gestire la conferma in due fasi
  showFutureMonthsConfirm = false;
  pendingExpenseUpdate = null;
  // Form template ricorrente
  recurringTemplateForm = {
    name: "",
    amount: 0,
    type: "fissa",
    category: "",
    notes: "",
    supplier_id: null,
    start_month: this.getCurrentMonth(),
    end_month: ""
  };
  // Form data - AGGIUNTA template_id
  expenseForm = {
    name: "",
    amount: 0,
    type: "fissa",
    category: "",
    month: this.getCurrentMonth(),
    notes: "",
    supplier_id: null,
    template_id: null
    // AGGIUNTO
  };
  // Form categoria
  categoryForm = {
    name: "",
    type: "entrambi"
  };
  // Form fornitore
  supplierForm = {
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    address: "",
    description: ""
  };
  // Spese Cancellate
  showAllTemplates = false;
  showDeletedSection = false;
  deletedExpenses = [];
  loadingDeleted = false;
  // Statistiche
  get monthlyStats() {
    return this.expenseService.calculateMonthlyTotal(this.filteredExpenses);
  }
  get filteredExpenses() {
    let filtered = this.expenses;
    if (this.viewMode === "monthly") {
      filtered = filtered.filter((expense) => expense.month.startsWith(this.selectedMonth.substring(0, 7)));
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((expense) => expense.name.toLowerCase().includes(term) || expense.category.toLowerCase().includes(term) || expense.notes && expense.notes.toLowerCase().includes(term));
    }
    return filtered;
  }
  get allCategories() {
    const defaultCats = this.expenseService.getDefaultCategories();
    const customCats = this.categories.map((cat) => cat.name);
    return [.../* @__PURE__ */ new Set([...defaultCats, ...customCats])].sort();
  }
  getCategoriesByType(type) {
    return this.allCategories.filter((cat) => {
      const category = this.categories.find((c) => c.name === cat);
      if (category) {
        return category.type === "entrambi" || category.type === type;
      }
      return true;
    });
  }
  toggleDeletedSection() {
    return __async(this, null, function* () {
      this.showDeletedSection = !this.showDeletedSection;
      if (this.showDeletedSection && this.deletedExpenses.length === 0) {
        yield this.loadDeletedExpenses();
      }
    });
  }
  loadDeletedExpenses() {
    return __async(this, null, function* () {
      this.loadingDeleted = true;
      try {
        if (this.viewMode === "monthly") {
          console.log("\u{1F5D1}\uFE0F Loading deleted expenses for month:", this.selectedMonth);
          this.deletedExpenses = yield this.expenseService.loadDeletedExpensesForMonth(this.selectedMonth);
        } else {
          console.log("\u{1F5D1}\uFE0F Loading ALL deleted expenses");
          this.deletedExpenses = yield this.expenseService.loadDeletedExpensesForDateRange("2000-01-01", "2030-12-01");
        }
        console.log("\u2705 Deleted expenses loaded:", this.deletedExpenses.length);
      } catch (error) {
        console.error("\u274C Error loading deleted expenses:", error);
      } finally {
        this.loadingDeleted = false;
      }
    });
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnDestroy() {
    if (this.expenseSubscription)
      this.expenseSubscription.unsubscribe();
    if (this.templatesSubscription)
      this.templatesSubscription.unsubscribe();
    if (this.categoriesSubscription)
      this.categoriesSubscription.unsubscribe();
    if (this.suppliersSubscription)
      this.suppliersSubscription.unsubscribe();
  }
  loadData() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F50D} Loading data for month:", this.selectedMonth);
        yield Promise.all([
          this.loadExpenses(),
          this.loadAvailableMonths(),
          this.loadCategories(),
          this.loadSuppliers(),
          this.loadRecurringTemplates()
        ]);
      } catch (error) {
        console.error("\u274C Error loading data:", error);
      }
    });
  }
  loadRecurringTemplates() {
    return __async(this, null, function* () {
      yield this.expenseService.loadRecurringTemplates();
      this.templatesSubscription = this.expenseService.recurringTemplates$.subscribe((templates) => {
        this.recurringTemplates = templates;
        console.log("\u{1F4CB} Recurring templates loaded:", templates.length);
      });
    });
  }
  loadSuppliers() {
    return __async(this, null, function* () {
      yield this.supplierService.loadSuppliers();
      this.suppliersSubscription = this.supplierService.suppliers$.subscribe((suppliers) => {
        this.suppliers = suppliers;
        console.log("\u{1F3E2} Suppliers loaded:", suppliers.length);
      });
    });
  }
  loadExpenses() {
    return __async(this, null, function* () {
      try {
        if (this.viewMode === "monthly") {
          console.log("\u{1F4C5} Loading expenses for month:", this.selectedMonth);
          yield this.expenseService.loadExpensesForMonth(this.selectedMonth, true);
          this.expenseSubscription = this.expenseService.data$.subscribe((expenses) => {
            this.expenses = expenses.filter((expense) => !expense.deleted_at);
            console.log("\u{1F4B0} Expenses loaded:", this.expenses.length);
          });
        } else {
          console.log("\u{1F4CA} Loading ALL expenses");
          const allExpenses = yield this.expenseService.loadExpensesForDateRange("2000-01-01", "2030-12-01");
          this.expenses = allExpenses.filter((expense) => !expense.deleted_at);
          console.log("\u{1F4CA} All expenses loaded:", this.expenses.length);
        }
      } catch (error) {
        console.error("\u274C Error loading expenses:", error);
      }
    });
  }
  loadAvailableMonths() {
    return __async(this, null, function* () {
      this.availableMonths = yield this.expenseService.getAvailableMonths();
      console.log("\u{1F4C6} Available months:", this.availableMonths.length);
    });
  }
  loadCategories() {
    return __async(this, null, function* () {
      yield this.expenseService.loadCategories();
      this.categoriesSubscription = this.expenseService.categories$.subscribe((categories) => {
        this.categories = categories;
        console.log("\u{1F3F7}\uFE0F Categories loaded:", categories.length);
      });
    });
  }
  // Metodi per gestione data
  getCurrentMonth() {
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }
  formatMonthForInput(month) {
    if (month.match(/^\d{4}-\d{2}$/)) {
      return month;
    }
    if (month.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return month.substring(0, 7);
    }
    return this.getCurrentMonth();
  }
  formatMonthForDatabase(month) {
    if (month.match(/^\d{4}-\d{2}$/)) {
      return `${month}-01`;
    }
    if (month.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return month;
    }
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
  }
  formatMonthDisplay(month) {
    try {
      const date = new Date(this.formatMonthForDatabase(month));
      return date.toLocaleDateString("it-IT", { month: "long", year: "numeric" });
    } catch {
      return month;
    }
  }
  formatCurrency(amount) {
    return `\u20AC${amount.toFixed(2).replace(".", ",")}`;
  }
  getSupplierName(supplierId) {
    if (!supplierId)
      return "Nessun fornitore";
    const supplier = this.suppliers.find((s) => s.id === supplierId);
    return supplier ? supplier.company_name : "Fornitore sconosciuto";
  }
  // Gestione Modal
  openAddExpenseModal() {
    this.editingExpense = null;
    this.expenseForm = {
      name: "",
      amount: 0,
      type: "fissa",
      category: "",
      month: this.formatMonthForInput(this.selectedMonth),
      notes: "",
      supplier_id: null,
      template_id: null
    };
    this.showExpenseModal = true;
  }
  openEditExpenseModal(expense) {
    console.log("\u{1F4DD} Opening edit modal for expense:", {
      id: expense.id,
      name: expense.name,
      template_id: expense.template_id,
      month: expense.month,
      amount: expense.amount
    });
    this.editingExpense = expense;
    this.expenseForm = {
      name: expense.name,
      amount: expense.amount,
      type: expense.type,
      category: expense.category,
      month: this.formatMonthForInput(expense.month),
      notes: expense.notes || "",
      supplier_id: expense.supplier_id || null,
      template_id: expense.template_id || null
      // IMPORTANTE: mantieni il template_id
    };
    this.showExpenseModal = true;
  }
  openCategoryModal() {
    this.categoryForm = {
      name: "",
      type: "entrambi"
    };
    this.showCategoryModal = true;
  }
  openSupplierModal() {
    this.supplierForm = {
      company_name: "",
      contact_name: "",
      email: "",
      phone: "",
      address: "",
      description: ""
    };
    this.showSupplierModal = true;
  }
  closeExpenseModal() {
    this.showExpenseModal = false;
    this.editingExpense = null;
  }
  closeMonthsModal() {
    this.showMonthsModal = false;
  }
  closeCategoryModal() {
    this.showCategoryModal = false;
  }
  closeSupplierModal() {
    this.showSupplierModal = false;
  }
  // CRUD Operations - VERSIONE SEMPLIFICATA E CORRETTA
  saveExpense() {
    return __async(this, null, function* () {
      console.log("\u{1F4BE} Starting saveExpense...");
      console.log("\u{1F4CB} Form data:", this.expenseForm);
      console.log("\u270F\uFE0F Editing expense:", this.editingExpense);
      if (!this.expenseForm.name || !this.expenseForm.amount || !this.expenseForm.category) {
        console.log("\u274C Validation failed: missing required fields");
        alert("Compila tutti i campi obbligatori: Nome, Importo e Categoria");
        return;
      }
      if (this.expenseForm.amount <= 0) {
        console.log("\u274C Validation failed: amount must be > 0");
        alert("L'importo deve essere maggiore di 0");
        return;
      }
      try {
        const expenseData = __spreadProps(__spreadValues({}, this.expenseForm), {
          month: this.formatMonthForDatabase(this.expenseForm.month),
          // Aggiungi automaticamente is_recurring in base al tipo
          is_recurring: this.expenseForm.type === "fissa"
        });
        console.log("\u{1F4E4} Expense data to save:", expenseData);
        console.log("\u{1F501} Is recurring (auto-determined):", expenseData.is_recurring);
        if (this.editingExpense) {
          console.log("\u{1F504} Updating existing expense:", this.editingExpense.id);
          const confirmSave = confirm(`Vuoi salvare le modifiche per la spesa "${this.editingExpense.name}"?`);
          if (!confirmSave) {
            console.log("\u274C Save cancelled by user");
            return;
          }
          const updateData = __spreadProps(__spreadValues({}, expenseData), {
            template_id: this.editingExpense.template_id || null
          });
          console.log("\u{1F4DD} Saving update for current month:", updateData);
          const success = yield this.expenseService.update(this.editingExpense.id, updateData);
          if (!success) {
            throw new Error("Update failed");
          }
          console.log("\u2705 Expense updated successfully for current month");
          if (this.editingExpense.type === "fissa" && expenseData.type === "fissa") {
            this.showFutureMonthsConfirm = true;
            this.pendingExpenseUpdate = {
              expenseId: this.editingExpense.id,
              expenseData,
              oldTemplateId: this.editingExpense.template_id || null
            };
            return;
          }
          this.completeSaveOperation();
        } else {
          console.log("\u{1F195} Creating new expense");
          const confirmSave = confirm(`Vuoi creare la nuova spesa "${expenseData.name}"?`);
          if (!confirmSave) {
            console.log("\u274C Save cancelled by user");
            return;
          }
          if (expenseData.type === "fissa") {
            const templateData = {
              name: expenseData.name,
              amount: expenseData.amount,
              type: expenseData.type,
              category: expenseData.category,
              notes: expenseData.notes || "",
              supplier_id: expenseData.supplier_id,
              start_month: expenseData.month
            };
            console.log("\u{1F4CB} Creating recurring template for fixed expense:", templateData);
            const template = yield this.expenseService.createRecurringTemplate(templateData);
            if (template) {
              expenseData.template_id = template.id;
              const result = yield this.expenseService.create(expenseData);
              if (result) {
                console.log("\u2705 Fixed (recurring) expense created with template");
                this.showSuccessAlert("Spesa fissa (ricorrente) creata con successo!");
              }
            }
          } else {
            expenseData.is_recurring = false;
            expenseData.template_id = null;
            const result = yield this.expenseService.create(expenseData);
            if (result) {
              console.log("\u2705 Variable (non-recurring) expense created");
              this.showSuccessAlert("Spesa variabile creata con successo!");
            }
          }
          this.completeSaveOperation();
        }
      } catch (error) {
        console.error("\u274C Error saving expense:", error);
        this.showErrorAlert("Errore nel salvataggio della spesa: " + error.message);
      }
    });
  }
  // Aggiungi questi nuovi metodi alla tua classe
  applyToFutureMonths() {
    return __async(this, null, function* () {
      if (!this.pendingExpenseUpdate)
        return;
      try {
        const { expenseData, oldTemplateId } = this.pendingExpenseUpdate;
        const nextMonth = this.getNextMonth(expenseData.month);
        const templateData = {
          name: expenseData.name,
          amount: expenseData.amount,
          type: expenseData.type,
          category: expenseData.category,
          notes: expenseData.notes || "",
          supplier_id: expenseData.supplier_id,
          start_month: nextMonth
        };
        console.log("\u{1F4CB} Creating template for future months:", templateData);
        const newTemplate = yield this.expenseService.createRecurringTemplate(templateData);
        if (newTemplate) {
          if (oldTemplateId) {
            yield this.expenseService.updateRecurringTemplate(oldTemplateId, {
              is_active: false,
              end_month: expenseData.month
            });
          }
          yield this.expenseService.update(this.pendingExpenseUpdate.expenseId, {
            template_id: newTemplate.id
          });
          console.log("\u2705 Created new template for future months");
          this.showSuccessAlert("Modifica applicata a tutti i mesi futuri!");
        }
      } catch (error) {
        console.error("\u274C Error applying to future months:", error);
        this.showErrorAlert("Errore nell'applicazione ai mesi futuri: " + error.message);
      } finally {
        this.completeSaveOperation();
      }
    });
  }
  onlyCurrentMonth() {
    return __async(this, null, function* () {
      try {
        console.log("\u2705 Modification applied only to current month");
        this.showSuccessAlert("Modifica applicata solo al mese corrente.");
      } finally {
        this.completeSaveOperation();
      }
    });
  }
  completeSaveOperation() {
    this.pendingExpenseUpdate = null;
    this.showFutureMonthsConfirm = false;
    this.showExpenseModal = false;
    this.editingExpense = null;
    this.loadExpenses();
  }
  showSuccessAlert(message) {
    alert(message);
  }
  showErrorAlert(message) {
    alert(message);
  }
  saveCategory() {
    return __async(this, null, function* () {
      if (!this.categoryForm.name) {
        alert("Inserisci un nome per la categoria");
        return;
      }
      try {
        const categoryData = __spreadProps(__spreadValues({}, this.categoryForm), {
          is_active: true
        });
        yield this.expenseService.createCategory(categoryData);
        this.closeCategoryModal();
        yield this.loadCategories();
        alert("Categoria creata con successo!");
      } catch (error) {
        console.error("Error saving category:", error);
        alert("Errore nella creazione della categoria");
      }
    });
  }
  saveSupplier() {
    return __async(this, null, function* () {
      if (!this.supplierForm.company_name) {
        alert("Inserisci il nome della ditta fornitrice");
        return;
      }
      try {
        const supplierData = __spreadProps(__spreadValues({}, this.supplierForm), {
          user_id: null,
          is_platform_supplier: false,
          is_approved: true
        });
        yield this.supplierService.createSupplier(supplierData);
        this.closeSupplierModal();
        yield this.loadSuppliers();
        alert("Fornitore creato con successo!");
      } catch (error) {
        console.error("Error saving supplier:", error);
        alert("Errore nella creazione del fornitore");
      }
    });
  }
  openMonthsModal() {
    this.showMonthsModal = true;
  }
  formatMonth(month) {
    return this.formatMonthDisplay(month);
  }
  deleteExpense(expense) {
    return __async(this, null, function* () {
      if (confirm(`Sei sicuro di voler disattivare la spesa "${expense.name}"?`)) {
        try {
          const success = yield this.expenseService.update(expense.id, {
            deleted_at: (/* @__PURE__ */ new Date()).toISOString()
          });
          if (success) {
            yield this.loadExpenses();
            alert("Spesa disattivata con successo!");
          } else {
            throw new Error("Eliminazione non riuscita");
          }
        } catch (error) {
          console.error("Error deleting expense:", error);
          alert("Errore nella disattivazione della spesa");
        }
      }
    });
  }
  // Cambia mese
  changeMonth(month) {
    return __async(this, null, function* () {
      console.log("\u{1F4C5} Changing month to:", month);
      this.selectedMonth = month;
      this.viewMode = "monthly";
      yield this.loadExpenses();
      if (this.showDeletedSection) {
        yield this.loadDeletedExpenses();
      }
      this.closeMonthsModal();
    });
  }
  // Cambia vista
  changeViewMode(mode) {
    return __async(this, null, function* () {
      this.viewMode = mode;
      yield this.loadExpenses();
      if (this.showDeletedSection) {
        yield this.loadDeletedExpenses();
      }
    });
  }
  // Aggiungi un metodo per formattare la data di eliminazione
  formatDeletedDate(dateString) {
    if (!dateString)
      return "Non eliminata";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("it-IT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
  }
  // Filtra categorie in base al tipo selezionato
  onExpenseTypeChange() {
    this.expenseForm.category = "";
  }
  deactivateRecurringTemplate(templateId) {
    return __async(this, null, function* () {
      if (confirm("Vuoi disattivare questo template ricorrente? Le spese gi\xE0 generate rimarranno ma non se ne genereranno di nuove.")) {
        try {
          const success = yield this.expenseService.updateRecurringTemplate(templateId, { is_active: false });
          if (success) {
            yield this.expenseService.loadRecurringTemplates();
            alert("Template disattivato con successo");
          }
        } catch (error) {
          console.error("Error deactivating template:", error);
          alert("Errore nella disattivazione del template");
        }
      }
    });
  }
  // Debug helper
  debugExpenses() {
    console.log("\u{1F50D} DEBUG - Current expenses:", this.expenses);
    console.log("\u{1F50D} DEBUG - Selected month:", this.selectedMonth);
    console.log("\u{1F50D} DEBUG - Filtered expenses:", this.filteredExpenses);
  }
  getNextMonth(month) {
    try {
      if (month.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const date2 = new Date(month);
        date2.setMonth(date2.getMonth() + 1);
        return date2.toISOString().split("T")[0];
      }
      if (month.match(/^\d{4}-\d{2}$/)) {
        const date2 = /* @__PURE__ */ new Date(`${month}-01`);
        date2.setMonth(date2.getMonth() + 1);
        return date2.toISOString().split("T")[0];
      }
      const date = /* @__PURE__ */ new Date();
      date.setMonth(date.getMonth() + 1);
      return date.toISOString().split("T")[0];
    } catch (error) {
      console.error("\u274C Error calculating next month:", error);
      const date = /* @__PURE__ */ new Date();
      date.setMonth(date.getMonth() + 1);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-01`;
    }
  }
  toggleExpenseStatus(expense) {
    return __async(this, null, function* () {
      const isCurrentlyActive = expense.is_active && expense.deleted_at === null;
      const action = isCurrentlyActive ? "disattivare" : "attivare";
      const statusText = isCurrentlyActive ? "disattivata" : "attivata";
      if (!confirm(`Vuoi ${action} la spesa "${expense.name}"?`)) {
        return;
      }
      try {
        console.log(`\u{1F504} Cambiando stato della spesa "${expense.name}" da attiva=${isCurrentlyActive} a attiva=${!isCurrentlyActive}`);
        const updateData = isCurrentlyActive ? {
          deleted_at: (/* @__PURE__ */ new Date()).toISOString(),
          is_active: false
        } : {
          deleted_at: null,
          is_active: true
        };
        const success = yield this.expenseService.update(expense.id, updateData);
        if (success) {
          if (isCurrentlyActive) {
            this.deletedExpenses = [...this.deletedExpenses, __spreadValues(__spreadValues({}, expense), updateData)];
            this.expenses = this.expenses.filter((e) => e.id !== expense.id);
          } else {
            this.expenses = [...this.expenses, __spreadValues(__spreadValues({}, expense), updateData)];
            this.deletedExpenses = this.deletedExpenses.filter((e) => e.id !== expense.id);
          }
          console.log(`\u2705 Spesa ${statusText}:`, expense.name);
          alert(`Spesa ${statusText} con successo!`);
        } else {
          throw new Error("Operazione non riuscita");
        }
      } catch (error) {
        console.error("\u274C Errore nel cambiamento di stato:", error);
        alert("Errore nel cambiamento di stato della spesa");
      }
    });
  }
  toggleTemplatesView() {
    this.showAllTemplates = !this.showAllTemplates;
  }
  // Metodi per calcolare le statistiche delle spese disattivate
  get deletedExpensesTotal() {
    return this.deletedExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  }
  get deletedFixedExpensesCount() {
    return this.deletedExpenses.filter((e) => e.type === "fissa").length;
  }
  get deletedVariableExpensesCount() {
    return this.deletedExpenses.filter((e) => e.type === "variabile").length;
  }
  // Aggiungi anche questo getter per ottenere le spese disattivate filtrate
  get filteredDeletedExpenses() {
    let filtered = this.deletedExpenses;
    if (this.viewMode === "monthly") {
      filtered = filtered.filter((expense) => expense.month.startsWith(this.selectedMonth.substring(0, 7)));
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((expense) => expense.name.toLowerCase().includes(term) || expense.category.toLowerCase().includes(term) || expense.notes && expense.notes.toLowerCase().includes(term));
    }
    return filtered;
  }
  permanentlyDeleteExpense(expense) {
    return __async(this, null, function* () {
      if (confirm(`Sei sicuro di voler eliminare definitivamente la spesa "${expense.name}"?
Questa azione \xE8 irreversibile e non potrai recuperare i dati!`)) {
        try {
          const success = yield this.expenseService.hardDelete(expense.id);
          if (success) {
            this.deletedExpenses = this.deletedExpenses.filter((e) => e.id !== expense.id);
            alert("Spesa eliminata definitivamente!");
          } else {
            throw new Error("Eliminazione non riuscita");
          }
        } catch (error) {
          console.error("\u274C Error permanently deleting expense:", error);
          alert("Errore nell'eliminazione definitiva della spesa");
        }
      }
    });
  }
  static \u0275fac = function ExpenseManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpenseManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseManagement, selectors: [["app-expense-management"]], decls: 95, vars: 27, consts: [[1, "page-container"], ["data-tutorial", "expenses-cards", 1, "grid-cards", "p-sm"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "flex", "flex-col", "gap-md"], [1, "text-md", "font-bold", "text-primary", "text-amber-500", "justify-center", "flex"], [1, "form-card", "mt-lg"], ["data-tutorial", "expenses-filters", 1, "flex", "justify-between", "items-end", "gap-sm", "flex-wrap"], [1, "form-row"], [1, "flex", "flex-col", "mb-sm"], [1, "standard-label"], [1, "flex", "gap-md", "flex-wrap"], [1, "radio-label"], ["type", "radio", "name", "viewMode", 3, "ngModelChange", "change", "value", "ngModel"], [1, "radio-checkmark"], ["class", "flex flex-col mb-sm", 4, "ngIf"], [1, "form-group"], ["type", "text", "placeholder", "Cerca per nome, categoria, fornitore...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "promethea-button", "ghost", 3, "click"], [1, "material-icons"], ["name", "truck", 1, "nav-icon", 3, "size"], [1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], ["class", "form-card mt-lg", 4, "ngIf"], ["data-tutorial", "expenses-table", 1, "table-section", "p-sm"], [1, "crm-table"], [4, "ngIf"], ["class", "hover-lift transition", 3, "inactive-row", 4, "ngFor", "ngForOf"], ["class", "mt-lg", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "mb-md"], [1, "flex", "items-center", "gap-sm"], ["class", "promethea-button ghost small", 3, "click", 4, "ngIf"], [1, "templates-container"], ["class", "card template-card", 3, "hidden-card", 4, "ngFor", "ngForOf"], ["class", "text-center mt-sm text-muted", 4, "ngIf"], [1, "promethea-button", "ghost", "small", 3, "click"], [1, "card", "template-card"], [1, "flex", "justify-between", "items-start"], [1, "font-bold"], [1, "flex", "gap-sm", "mt-sm", "flex-wrap"], [1, "chip"], [1, "chip", "secondary"], [1, "text-muted"], ["title", "Disattiva", 1, "icon-button", "small", 3, "click"], [1, "mt-sm", "text-sm", "text-muted"], [1, "text-center", "mt-sm", "text-muted"], [1, "hover-lift", "transition"], ["class", "material-icons text-primary fs-sm", "title", "Spesa ricorrente", 4, "ngIf"], ["class", "chip primary", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "notes-preview"], [1, "flex", "gap-sm"], [1, "icon-button", 3, "click", "title"], ["title", "Modifica", 1, "icon-button", 3, "click"], ["title", "Elimina", 1, "icon-button", 3, "click"], ["name", "trash-2", 3, "size"], ["title", "Spesa ricorrente", 1, "material-icons", "text-primary", "fs-sm"], [1, "chip", "primary"], [1, "text-center", "p-xl", "opacity-70"], [1, "flex", "flex-col", "items-center", "gap-md"], [1, "material-icons", "text-muted", 2, "font-size", "3rem"], [1, "mt-lg"], [1, "section-header"], [1, "material-icons", "fs-lg", "text-red-500"], [1, "section-title"], [1, "grid-cards"], [1, "material-icons", "text-red-500", "text-md"], [1, "text-md", "font-bold", "text-red-500", "justify-center", "flex"], [1, "material-icons", "text-blue-500", "text-md"], [1, "text-md", "font-bold", "text-blue-500", "justify-center", "flex"], [1, "material-icons", "text-purple-500", "text-md"], [1, "text-md", "font-bold", "text-purple-500", "justify-center", "flex"], [1, "table-section"], [1, "bg-body", "border", "rounded-lg", "overflow-hidden", "shadow-card", "backdrop-blur"], ["class", "deleted-row hover-lift transition", 4, "ngFor", "ngForOf"], [1, "deleted-row", "hover-lift", "transition"], [1, "text-sm", "text-muted"], ["title", "Riattiva spesa", 1, "icon-button", "success", 3, "click"], ["title", "Visualizza", 1, "icon-button", 3, "click"], ["title", "Elimina definitivamente", 1, "icon-button", "danger", 3, "click"], [1, "modal-overlay"], [1, "modal-container", "modal-lg"], [1, "modal-header"], [1, "flex"], [1, "header-icon"], [1, "icon-button", "close-button", 3, "click"], [1, "generic-form", 3, "submit"], [1, "form-card"], [1, "form-row", "mb-md"], ["for", "expense-name", 1, "standard-label"], ["type", "text", "id", "expense-name", "name", "name", "required", "", "placeholder", "Es. Affitto locale", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "expense-amount", 1, "standard-label"], ["type", "number", "id", "expense-amount", "name", "amount", "step", "0.01", "min", "0", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "expense-type", 1, "standard-label"], ["id", "expense-type", "name", "type", "required", "", 1, "form-input", 3, "ngModelChange", "change", "ngModel"], ["value", "fissa"], ["value", "variabile"], ["for", "expense-category", 1, "standard-label"], ["id", "expense-category", "name", "category", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "expense-supplier", 1, "standard-label"], ["id", "expense-supplier", "name", "supplier_id", 1, "form-input", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "form-group", 2, "justify-content", "flex-end"], ["type", "button", 1, "promethea-button", "secondary", "small", 3, "click"], ["for", "expense-month", 1, "standard-label"], ["type", "month", "id", "expense-month", "name", "month", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "justify-content", "center"], [1, "info-box", 3, "ngClass"], ["class", "material-icons", 4, "ngIf"], [1, "form-group", "mb-md"], ["for", "expense-notes", 1, "standard-label"], ["id", "expense-notes", "name", "notes", "rows", "3", "placeholder", "Note aggiuntive...", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["type", "submit", 1, "promethea-button"], [1, "material-icons", "text-primary", "fs-sm"], [1, "modal-container", "modal-md"], ["class", "month-item promethea-button ghost", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "month-item", "promethea-button", "ghost", 3, "click"], [1, "mb-lg"], ["for", "category-name", 1, "standard-label"], ["type", "text", "id", "category-name", "name", "name", "required", "", "placeholder", "Es. Manutenzione impianti", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "category-type", 1, "standard-label"], ["id", "category-type", "name", "type", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "entrambi"], [1, "categories-list"], ["class", "category-item flex justify-between items-center mb-sm p-sm border rounded", 4, "ngFor", "ngForOf"], ["class", "text-center p-xl opacity-70", 4, "ngIf"], [1, "category-item", "flex", "justify-between", "items-center", "mb-sm", "p-sm", "border", "rounded"], [1, "category-name", "font-semibold"], ["for", "supplier-company", 1, "standard-label"], ["type", "text", "id", "supplier-company", "name", "company_name", "required", "", "placeholder", "Nome della ditta fornitrice", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "supplier-contact", 1, "standard-label"], ["name", "user", 1, "nav-icon", 3, "size"], ["type", "text", "id", "supplier-contact", "name", "contact_name", "placeholder", "Nome del referente", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "supplier-email", 1, "standard-label"], ["name", "mail", 1, "nav-icon", 3, "size"], ["type", "email", "id", "supplier-email", "name", "email", "placeholder", "email@fornitore.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "supplier-phone", 1, "standard-label"], ["type", "tel", "id", "supplier-phone", "name", "phone", "placeholder", "Numero di telefono", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "supplier-address", 1, "standard-label"], ["id", "supplier-address", "name", "address", "rows", "2", "placeholder", "Indirizzo del fornitore", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "supplier-description", 1, "standard-label"], ["id", "supplier-description", "name", "description", "rows", "3", "placeholder", "Note aggiuntive sul fornitore", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "suppliers-list"], ["class", "supplier-item flex justify-between items-center mb-sm p-sm border rounded", 4, "ngFor", "ngForOf"], [1, "supplier-item", "flex", "justify-between", "items-center", "mb-sm", "p-sm", "border", "rounded"], [1, "supplier-info"], [1, "supplier-details", "flex", "gap-sm"], ["class", "chip active", 4, "ngIf"], ["class", "chip secondary", 4, "ngIf"], [1, "chip", "active"], [1, "modal-container", "modal-sm"], [1, "confirmation-message"], [1, "confirmation-icon", "flex", "justify-center", "mb-md"], [1, "material-icons", "text-primary", "fs-lg"], [1, "text-center", "mb-md"], [1, "text-center", "mb-lg"], [1, "confirmation-options", "mb-lg"], [1, "option-item", "border", "rounded", "p-md", "mb-md", "cursor-pointer", "hover:bg-smoke", 3, "click"], [1, "flex", "items-center", "gap-sm", "mb-sm"], [1, "material-icons", "text-primary"], [1, "option-item", "border", "rounded", "p-md", "cursor-pointer", "hover:bg-smoke", 3, "click"], ["type", "button", 1, "promethea-button", 3, "click"]], template: function ExpenseManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 5);
      \u0275\u0275text(7, "Spese Fisse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 2)(12, "div", 3)(13, "span", 4);
      \u0275\u0275text(14, "receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h3", 5);
      \u0275\u0275text(16, "Spese Variabili");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 6)(18, "div", 7);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 2)(21, "div", 3)(22, "span", 4);
      \u0275\u0275text(23, "account_balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h3", 5);
      \u0275\u0275text(25, "Totale Mese");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 6)(27, "div", 7);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 8)(30, "div", 9)(31, "div", 10)(32, "div", 11)(33, "label", 12);
      \u0275\u0275text(34, "Periodo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 13)(36, "label", 14)(37, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.viewMode, $event) || (ctx.viewMode = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ExpenseManagement_Template_input_change_37_listener() {
        return ctx.changeViewMode("monthly");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "span", 16);
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "Mensile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "label", 14)(42, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.viewMode, $event) || (ctx.viewMode = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ExpenseManagement_Template_input_change_42_listener() {
        return ctx.changeViewMode("all");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "span", 16);
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Tutti");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(46, ExpenseManagement_div_46_Template, 7, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 18)(48, "label", 12);
      \u0275\u0275text(49, "Cerca");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ExpenseManagement_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 20)(52, "button", 21);
      \u0275\u0275listener("click", function ExpenseManagement_Template_button_click_52_listener() {
        return ctx.toggleDeletedSection();
      });
      \u0275\u0275elementStart(53, "span", 22);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 21);
      \u0275\u0275listener("click", function ExpenseManagement_Template_button_click_56_listener() {
        return ctx.openCategoryModal();
      });
      \u0275\u0275elementStart(57, "span", 22);
      \u0275\u0275text(58, "category");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " Aggiungi Categorie ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 21);
      \u0275\u0275listener("click", function ExpenseManagement_Template_button_click_60_listener() {
        return ctx.openSupplierModal();
      });
      \u0275\u0275element(61, "lucide-angular", 23);
      \u0275\u0275text(62, " Aggiungi Fornitori ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 24);
      \u0275\u0275listener("click", function ExpenseManagement_Template_button_click_63_listener() {
        return ctx.openAddExpenseModal();
      });
      \u0275\u0275element(64, "lucide-angular", 25);
      \u0275\u0275text(65, " Nuova Spesa ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(66, ExpenseManagement_div_66_Template, 11, 8, "div", 26);
      \u0275\u0275elementStart(67, "div", 27)(68, "table", 28)(69, "thead")(70, "tr")(71, "th");
      \u0275\u0275text(72, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th");
      \u0275\u0275text(74, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th");
      \u0275\u0275text(76, "Categoria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th");
      \u0275\u0275text(78, "Importo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th");
      \u0275\u0275text(80, "Fornitore");
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, ExpenseManagement_th_81_Template, 2, 0, "th", 29);
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Note");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th");
      \u0275\u0275text(85, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "tbody");
      \u0275\u0275template(87, ExpenseManagement_tr_87_Template, 30, 18, "tr", 30)(88, ExpenseManagement_tr_88_Template, 10, 4, "tr", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(89, ExpenseManagement_div_89_Template, 60, 6, "div", 31)(90, ExpenseManagement_div_90_Template, 87, 25, "div", 32)(91, ExpenseManagement_div_91_Template, 18, 1, "div", 32)(92, ExpenseManagement_div_92_Template, 52, 5, "div", 32)(93, ExpenseManagement_div_93_Template, 68, 11, "div", 32)(94, ExpenseManagement_div_94_Template, 51, 2, "div", 32);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.monthlyStats.fisse));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.monthlyStats.variabili));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.monthlyStats.totale));
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.viewMode === "monthly");
      \u0275\u0275advance();
      \u0275\u0275property("value", "monthly");
      \u0275\u0275twoWayProperty("ngModel", ctx.viewMode);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.viewMode === "all");
      \u0275\u0275advance();
      \u0275\u0275property("value", "all");
      \u0275\u0275twoWayProperty("ngModel", ctx.viewMode);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.viewMode === "monthly");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.showDeletedSection ? "visibility_off" : "archive");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showDeletedSection ? "Nascondi Disattivate" : "Mostra Disattivate", " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.recurringTemplates.length > 0);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.viewMode === "all");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.filteredExpenses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredExpenses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeletedSection);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showExpenseModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMonthsModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCategoryModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSupplierModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFutureMonthsConfirm);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm) var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: var(--background);\n}\n.radio-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.radio-label.active[_ngcontent-%COMP%] {\n  background: var(--smoke-2);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.radio-label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-checkmark[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--smoke-1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.radio-label.active[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary);\n}\n.radio-label.active[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background: white;\n  border-radius: 50%;\n}\n.table-section[_ngcontent-%COMP%] {\n  margin-top: var(--gap-lg);\n}\n.chip.small[_ngcontent-%COMP%] {\n  padding: 0.125rem 0.5rem;\n  font-size: 0.75rem;\n}\n.chip.primary[_ngcontent-%COMP%] {\n  background: var(--smoke-2);\n  color: var(--primary);\n  border-color: var(--smoke-2);\n}\n.notes-preview[_ngcontent-%COMP%] {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--text-muted);\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n  align-items: stretch;\n}\n.input-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.input-group[_ngcontent-%COMP%]   .promethea-button.small[_ngcontent-%COMP%] {\n  padding: var(--gap-sm);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.months-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-lg);\n}\n.categories-list[_ngcontent-%COMP%], \n.suppliers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.category-item[_ngcontent-%COMP%], \n.supplier-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: between;\n  align-items: center;\n  padding: var(--gap-sm);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.category-item[_ngcontent-%COMP%]:hover, \n.supplier-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateX(4px);\n}\n.supplier-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n}\n.supplier-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .flex.justify-between[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    align-self: stretch;\n  }\n  .input-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .supplier-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .supplier-details[_ngcontent-%COMP%] {\n    align-self: stretch;\n    justify-content: flex-start;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.recurring-templates-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.template-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.template-card[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: top;\n}\n.template-card.hidden[_ngcontent-%COMP%] {\n  transform: scaleY(0);\n  opacity: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: hidden;\n}\n.grid-cards[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.additional-templates[_ngcontent-%COMP%] {\n  margin-top: var(--gap-md);\n  animation: _ngcontent-%COMP%_expand 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.animate-expand[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_expand 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_expand {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    max-height: 1000px;\n  }\n}\n.templates-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--gap-md);\n  transition: grid-template-rows 0.3s ease;\n}\n.templates-container.collapsed[_ngcontent-%COMP%] {\n  grid-template-rows: repeat(auto-fit, minmax(0, 1fr));\n  max-height: calc(3 * (var(--gap-md) + 150px));\n  overflow: visible;\n}\n.templates-container.expanded[_ngcontent-%COMP%] {\n  grid-template-rows: auto;\n  max-height: none;\n  overflow: visible;\n}\n.template-card.hidden-card[_ngcontent-%COMP%] {\n  display: none !important;\n  opacity: 0;\n  transform: scale(0.8);\n  height: 0;\n  margin: 0;\n  padding: 0;\n  border: none;\n  pointer-events: none;\n}\n.templates-container-alt[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--gap-md);\n  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.templates-container-alt.collapsed[_ngcontent-%COMP%] {\n  max-height: calc(3 * 180px);\n  overflow: hidden;\n  mask-image:\n    linear-gradient(\n      to bottom,\n      var(--text-color) 70%,\n      transparent 100%);\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      var(--text-color) 70%,\n      transparent 100%);\n}\n.templates-container-alt.expanded[_ngcontent-%COMP%] {\n  max-height: 5000px;\n  mask-image: none;\n  -webkit-mask-image: none;\n}\n/*# sourceMappingURL=expense-management.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseManagement, [{
    type: Component,
    args: [{ selector: "app-expense-management", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- Statistiche --> \r
  <div class="grid-cards p-sm" data-tutorial="expenses-cards">\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">payments</span>\r
        <h3 class="card-title">Spese Fisse</h3>\r
      </div>\r
      <div class="flex flex-col gap-md">\r
        <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{\r
          formatCurrency(monthlyStats.fisse) }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">receipt</span>\r
        <h3 class="card-title">Spese Variabili</h3>\r
      </div>\r
      <div class="flex flex-col gap-md">\r
        <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{\r
          formatCurrency(monthlyStats.variabili) }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">account_balance</span>\r
        <h3 class="card-title">Totale Mese</h3>\r
      </div>\r
      <div class="flex flex-col gap-md">\r
        <div class="text-md font-bold text-primary text-amber-500 justify-center flex">{{\r
          formatCurrency(monthlyStats.totale) }}</div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- Filtri e Controlli -->\r
  <div class="form-card mt-lg">\r
    <div class="flex justify-between items-end gap-sm flex-wrap"\r
    data-tutorial="expenses-filters">\r
      <div class="form-row">\r
        <!-- Selezione Vista -->\r
        <div class="flex flex-col mb-sm">\r
          <label class="standard-label">Periodo</label>\r
          <div class="flex gap-md flex-wrap">\r
            <label class="radio-label" [class.active]="viewMode === 'monthly'">\r
              <input type="radio" name="viewMode" [value]="'monthly'" [(ngModel)]="viewMode"\r
                (change)="changeViewMode('monthly')">\r
              <span class="radio-checkmark"></span>\r
              <span>Mensile</span>\r
            </label>\r
            <label class="radio-label" [class.active]="viewMode === 'all'">\r
              <input type="radio" name="viewMode" [value]="'all'" [(ngModel)]="viewMode"\r
                (change)="changeViewMode('all')">\r
              <span class="radio-checkmark"></span>\r
              <span>Tutti</span>\r
            </label>\r
          </div>\r
        </div>\r
        <!-- Selezione Mese -->\r
        <div class="flex flex-col mb-sm" *ngIf="viewMode === 'monthly'">\r
          <label class="standard-label">Mese</label>\r
          <button class="promethea-button ghost" \r
          (click)="openMonthsModal()">\r
            <span class="material-icons">calendar_today</span>\r
            {{ formatMonth(selectedMonth) }}\r
          </button>\r
        </div>\r
      </div>\r
      <!-- Ricerca -->\r
      <div class="form-group">\r
        <label class="standard-label">Cerca</label>\r
        <input type="text" [(ngModel)]="searchTerm" placeholder="Cerca per nome, categoria, fornitore...">\r
      </div>\r
    </div>\r
      <div class="modal-footer">\r
        <button class="promethea-button ghost" (click)="toggleDeletedSection()">\r
          <span class="material-icons">{{ showDeletedSection ? 'visibility_off' : 'archive' }}</span>\r
          {{ showDeletedSection ? 'Nascondi Disattivate' : 'Mostra Disattivate' }}\r
        </button>\r
\r
        <button class="promethea-button ghost" (click)="openCategoryModal()">\r
          <span class="material-icons">category</span>\r
          Aggiungi Categorie\r
        </button>\r
\r
        <button class="promethea-button ghost" (click)="openSupplierModal()">\r
          <lucide-angular name="truck" [size]="20" class="nav-icon"></lucide-angular>\r
          Aggiungi Fornitori\r
        </button>\r
\r
        <button class="promethea-button" (click)="openAddExpenseModal()">\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          Nuova Spesa\r
        </button>\r
\r
      </div>\r
  </div>\r
  <!-- Template Ricorrenti -->\r
  <div class="form-card mt-lg" *ngIf="recurringTemplates.length > 0">\r
    <div class="flex justify-between items-center mb-md">\r
      <div class="flex items-center gap-sm">\r
        <span class="material-icons text-primary text-md">repeat</span>\r
        <h3 class="card-title">Spese Ricorrenti ({{ recurringTemplates.length }})</h3>\r
      </div>\r
\r
      <!-- Bottone per mostrare/nascondere (visibile solo se ci sono pi\xF9 di 3 template) -->\r
      <button *ngIf="recurringTemplates.length > 3" class="promethea-button ghost small"\r
        (click)="showAllTemplates = !showAllTemplates">\r
        <span class="material-icons">{{ showAllTemplates ? 'expand_less' : 'expand_more' }}</span>\r
        {{ showAllTemplates ? 'Mostra meno' : 'Mostra tutto' }}\r
      </button>\r
    </div>\r
\r
    <!-- Contenitore principale con classe dinamica -->\r
    <div class="templates-container" [class.expanded]="showAllTemplates" [class.collapsed]="!showAllTemplates">\r
\r
      <div *ngFor="let template of recurringTemplates; let i = index" class="card template-card"\r
        [class.hidden-card]="!showAllTemplates && i >= 3">\r
        <div class="flex justify-between items-start">\r
          <div>\r
            <h4 class="font-bold">{{ template.name }}</h4>\r
            <div class="flex gap-sm mt-sm flex-wrap">\r
              <span class="chip" [class.active]="template.type === 'fissa'">\r
                {{ template.type === 'fissa' ? 'Fissa' : 'Variabile' }}\r
              </span>\r
              <span class="chip secondary">{{ formatCurrency(template.amount) }}</span>\r
              <span class="text-muted">{{ template.category }}</span>\r
            </div>\r
          </div>\r
          <button class="icon-button small" (click)="deactivateRecurringTemplate(template.id)" title="Disattiva">\r
            <span class="material-icons">toggle_off</span>\r
          </button>\r
        </div>\r
        <div class="mt-sm text-sm text-muted">\r
          <div>Da: {{ formatMonthDisplay(template.start_month) }}</div>\r
          <div *ngIf="template.end_month">A: {{ formatMonthDisplay(template.end_month) }}</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Indicatore per mostrare quanti template sono nascosti -->\r
    <div *ngIf="!showAllTemplates && recurringTemplates.length > 3" class="text-center mt-sm text-muted">\r
      <p>+{{ recurringTemplates.length - 3 }} altri template nascosti</p>\r
    </div>\r
  </div>\r
  <!-- Lista Spese -->\r
  <div class="table-section p-sm" data-tutorial="expenses-table">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Nome</th>\r
            <th>Tipo</th>\r
            <th>Categoria</th>\r
            <th>Importo</th>\r
            <th>Fornitore</th>\r
            <th *ngIf="viewMode === 'all'">Mese</th>\r
            <th>Note</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let expense of filteredExpenses" [class.inactive-row]="!expense.is_active"\r
            class="hover-lift transition">\r
            <td>\r
              <div class="flex items-center gap-sm">\r
                <strong>{{ expense.name }}</strong>\r
                <span *ngIf="expense.is_recurring" class="material-icons text-primary fs-sm" title="Spesa ricorrente">\r
                  repeat\r
                </span>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="chip" [class.active]="expense.type === 'fissa'">\r
                {{ expense.type === 'fissa' ? 'Fissa' : 'Variabile' }}\r
              </span>\r
            </td>\r
            <td>{{ expense.category }}</td>\r
            <td><strong>{{ formatCurrency(expense.amount) }}</strong></td>\r
            <td>\r
              <span *ngIf="expense.supplier_id" class="chip primary">\r
                {{ getSupplierName(expense.supplier_id) }}\r
              </span>\r
              <span *ngIf="!expense.supplier_id" class="text-muted">-</span>\r
            </td>\r
            <td *ngIf="viewMode === 'all'">{{ formatMonth(expense.month) }}</td>\r
            <td class="notes-preview">{{ expense.notes || '-' }}</td>\r
            <td>\r
              <div class="flex gap-sm">\r
                <!-- Bottone Attiva/Disattiva -->\r
                <button class="icon-button" (click)="toggleExpenseStatus(expense)"\r
                  [title]="expense.is_active ? 'Disattiva spesa' : 'Attiva spesa'"\r
                  [class.active-toggle]="expense.is_active">\r
                  <span class="material-icons">\r
                    {{ expense.is_active ? 'toggle_on' : 'toggle_off' }}\r
                  </span>\r
                </button>\r
                <button class="icon-button" (click)="openEditExpenseModal(expense)" title="Modifica">\r
                  <span class="material-icons">edit</span>\r
                </button>\r
                <button class="icon-button" (click)="deleteExpense(expense)" title="Elimina">\r
                  <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredExpenses.length === 0">\r
            <td [attr.colspan]="viewMode === 'all' ? 8 : 7" class="text-center p-xl opacity-70">\r
              <div class="flex flex-col items-center gap-md">\r
                <span class="material-icons text-muted" style="font-size: 3rem;">receipt_long</span>\r
                <p *ngIf="searchTerm" class="text-muted">Nessuna spesa trovata per "{{ searchTerm }}"</p>\r
                <p *ngIf="!searchTerm" class="text-muted">Nessuna spesa registrata</p>\r
                <button class="promethea-button ghost small" (click)="openAddExpenseModal()">\r
                  <lucide-angular name="plus" [size]="20"></lucide-angular>\r
                  Aggiungi la prima spesa\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
  </div>\r
  <!-- Sezione Spese Disattivate -->\r
  <div class="mt-lg" *ngIf="showDeletedSection">\r
    <!-- Header della sezione -->\r
    <div class="section-header">\r
      <div class="flex gap-sm">\r
        <span class="material-icons fs-lg text-red-500">archive</span>\r
        <h1 class="section-title">Spese Disattivate</h1>\r
      </div>\r
    </div>\r
\r
    <!-- Statistiche spese disattivate -->\r
    <div class="grid-cards">\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons text-red-500 text-md">money_off</span>\r
          <h3 class="card-title">Totale Disattivate</h3>\r
        </div>\r
        <div class="flex flex-col gap-md">\r
          <div class="text-md font-bold text-red-500 justify-center flex">\r
            {{ formatCurrency(deletedExpensesTotal) }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons text-blue-500 text-md">repeat</span>\r
          <h3 class="card-title">Fisse Disattivate</h3>\r
        </div>\r
        <div class="flex flex-col gap-md">\r
          <div class="text-md font-bold text-blue-500 justify-center flex">\r
            {{ deletedFixedExpensesCount }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons text-purple-500 text-md">receipt</span>\r
          <h3 class="card-title">Variabili Disattivate</h3>\r
        </div>\r
        <div class="flex flex-col gap-md">\r
          <div class="text-md font-bold text-purple-500 justify-center flex">\r
            {{ deletedVariableExpensesCount }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Tabella Spese Disattivate (UGUALE alla tabella principale) -->\r
    <div class="table-section">\r
      <div class="bg-body border rounded-lg overflow-hidden shadow-card backdrop-blur">\r
        <table class="crm-table">\r
          <thead>\r
            <tr>\r
              <th>Nome</th>\r
              <th>Tipo</th>\r
              <th>Categoria</th>\r
              <th>Importo</th>\r
              <th>Fornitore</th>\r
              <th *ngIf="viewMode === 'all'">Mese</th>\r
              <th>Note</th>\r
              <th>Data Disattivazione</th>\r
              <th>Azioni</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let expense of filteredDeletedExpenses" \r
                class="deleted-row hover-lift transition">\r
              <td>\r
                <div class="flex items-center gap-sm">\r
                  <strong>{{ expense.name }}</strong>\r
                  <span *ngIf="expense.is_recurring" \r
                        class="material-icons text-primary fs-sm" \r
                        title="Spesa ricorrente">\r
                    repeat\r
                  </span>\r
                </div>\r
              </td>\r
              <td>\r
                <span class="chip" [class.active]="expense.type === 'fissa'">\r
                  {{ expense.type === 'fissa' ? 'Fissa' : 'Variabile' }}\r
                </span>\r
              </td>\r
              <td>{{ expense.category }}</td>\r
              <td><strong>{{ formatCurrency(expense.amount) }}</strong></td>\r
              <td>\r
                <span *ngIf="expense.supplier_id" class="chip primary">\r
                  {{ getSupplierName(expense.supplier_id) }}\r
                </span>\r
                <span *ngIf="!expense.supplier_id" class="text-muted">-</span>\r
              </td>\r
              <td *ngIf="viewMode === 'all'">{{ formatMonth(expense.month) }}</td>\r
              <td class="notes-preview">{{ expense.notes || '-' }}</td>\r
              <td class="text-sm text-muted">\r
                {{ formatDeletedDate(expense.deleted_at) }}\r
              </td>\r
              <td>\r
                <div class="flex gap-sm">\r
                  <!-- Bottone Riattiva -->\r
                  <button class="icon-button success" \r
                          (click)="toggleExpenseStatus(expense)" \r
                          title="Riattiva spesa">\r
                    <span class="material-icons">\r
                      toggle_off\r
                    </span>\r
                  </button>\r
                  <!-- Bottone Visualizza (modifica) -->\r
                  <button class="icon-button" (click)="openEditExpenseModal(expense)" title="Visualizza">\r
                    <span class="material-icons">visibility</span>\r
                  </button>\r
                  <!-- Bottone Elimina Definitivamente (facoltativo) -->\r
                  <button class="icon-button danger" \r
                          (click)="permanentlyDeleteExpense(expense)" \r
                          title="Elimina definitivamente">\r
                    <span class="material-icons">delete_forever</span>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
            <tr *ngIf="filteredDeletedExpenses.length === 0">\r
              <td [attr.colspan]="viewMode === 'all' ? 9 : 8" class="text-center p-xl opacity-70">\r
                <div class="flex flex-col items-center gap-md">\r
                  <span class="material-icons text-muted" style="font-size: 3rem;">archive</span>\r
                  <p *ngIf="searchTerm" class="text-muted">Nessuna spesa disattivata trovata per "{{ searchTerm }}"</p>\r
                  <p *ngIf="!searchTerm" class="text-muted">Nessuna spesa disattivata</p>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- Modal Nuova/Modifica Spesa -->\r
  <div class="modal-overlay" *ngIf="showExpenseModal">\r
    <div class="modal-container modal-lg">\r
      <!-- Header Modal -->\r
      <div class="modal-header">\r
        <div class="flex">\r
          <div class="header-icon">\r
            <span class="material-icons">{{ editingExpense ? 'edit' : 'add' }}</span>\r
          </div>\r
          <div>\r
            <h1 class="section-title">{{ editingExpense ? 'Modifica Spesa' : 'Nuova Spesa' }}</h1>\r
            <p class="text-muted" *ngIf="expenseForm.type === 'fissa'">\r
              <span class="material-icons text-primary fs-sm">info</span>\r
              Le spese fisse sono automaticamente ricorrenti\r
            </p>\r
            <p class="text-muted" *ngIf="expenseForm.type === 'variabile'">\r
              <span class="material-icons text-primary fs-sm">info</span>\r
              Le spese variabili sono una tantum\r
            </p>\r
          </div>\r
        </div>\r
        <button class="icon-button close-button" (click)="closeExpenseModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <form class="generic-form" (submit)="saveExpense(); $event.preventDefault()">\r
        <div class="form-card">\r
          <div class="form-row mb-md">\r
            <div class="form-group">\r
              <label class="standard-label" for="expense-name">\r
                <span class="material-icons">title</span>\r
                Nome Spesa *\r
              </label>\r
              <input type="text" id="expense-name" [(ngModel)]="expenseForm.name" name="name" required\r
                placeholder="Es. Affitto locale" class="form-input">\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label" for="expense-amount">\r
                <span class="material-icons">euro</span>\r
                Importo (\u20AC) *\r
              </label>\r
              <input type="number" id="expense-amount" [(ngModel)]="expenseForm.amount" name="amount" step="0.01"\r
                min="0" required class="form-input">\r
            </div>\r
          </div>\r
\r
          <div class="form-row mb-md">\r
            <div class="form-group">\r
              <label class="standard-label" for="expense-type">\r
                <span class="material-icons">category</span>\r
                Tipo *\r
              </label>\r
              <select id="expense-type" [(ngModel)]="expenseForm.type" name="type" required\r
                (change)="onExpenseTypeChange()" class="form-input">\r
                <option value="fissa">Spesa Fissa (ricorrente)</option>\r
                <option value="variabile">Spesa Variabile (una tantum)</option>\r
              </select>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label" for="expense-category">\r
                <span class="material-icons">label</span>\r
                Categoria *\r
              </label>\r
              <select id="expense-category" [(ngModel)]="expenseForm.category" name="category" required\r
                class="form-input">\r
                <option value="">Seleziona categoria</option>\r
                <option *ngFor="let cat of getCategoriesByType(expenseForm.type)" [value]="cat">\r
                  {{ cat }}\r
                </option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Campo fornitore -->\r
          <div class="form-row mb-md">\r
            <div class="form-group">\r
              <label class="standard-label" for="expense-supplier">\r
                <lucide-angular name="truck" [size]="20" class="nav-icon"></lucide-angular>\r
                Fornitore\r
              </label>\r
              <select id="expense-supplier" [(ngModel)]="expenseForm.supplier_id" name="supplier_id" class="form-input">\r
                <option [value]="null">Nessun fornitore</option>\r
                <option *ngFor="let supplier of suppliers" [value]="supplier.id">\r
                  {{ supplier.company_name }}\r
                  <span *ngIf="supplier.contact_name">- {{ supplier.contact_name }}</span>\r
                </option>\r
              </select>\r
            </div>\r
            <div class="form-group" style="justify-content: flex-end;">\r
              <button type="button" class="promethea-button secondary small" (click)="openSupplierModal()">\r
                <lucide-angular name="plus" [size]="20"></lucide-angular>\r
                Nuovo\r
              </button>\r
            </div>\r
          </div>\r
\r
          <div class="form-row mb-md">\r
            <div class="form-group">\r
              <label class="standard-label" for="expense-month">\r
                <span class="material-icons">calendar_today</span>\r
                Mese *\r
              </label>\r
              <input type="month" id="expense-month" [(ngModel)]="expenseForm.month" name="month" required\r
                class="form-input">\r
            </div>\r
\r
            <!-- Informazione sulla ricorrenza (solo testo) -->\r
            <div class="form-group" style="justify-content: center;">\r
              <div class="info-box"\r
                [ngClass]="{'recurring-info': expenseForm.type === 'fissa', 'non-recurring-info': expenseForm.type === 'variabile'}">\r
                <span class="material-icons" *ngIf="expenseForm.type === 'fissa'">repeat</span>\r
                <span class="material-icons" *ngIf="expenseForm.type === 'variabile'">event</span>\r
                <span *ngIf="expenseForm.type === 'fissa'">Spesa ricorrente</span>\r
                <span *ngIf="expenseForm.type === 'variabile'">Spesa una tantum</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-group mb-md">\r
            <label class="standard-label" for="expense-notes">\r
              <span class="material-icons">notes</span>\r
              Note\r
            </label>\r
            <textarea id="expense-notes" [(ngModel)]="expenseForm.notes" name="notes" rows="3"\r
              placeholder="Note aggiuntive..." class="form-input"></textarea>\r
          </div>\r
        </div>\r
\r
        <!-- Footer del modal -->\r
        <div class="modal-footer">\r
          <button type="button" class="promethea-button ghost" (click)="closeExpenseModal()">\r
            Annulla\r
          </button>\r
          <button type="submit" class="promethea-button">\r
            {{ editingExpense ? 'Aggiorna' : 'Crea' }} Spesa\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
  <!-- Modal Selezione Mese -->\r
  <div class="modal-overlay" *ngIf="showMonthsModal">\r
    <div class="modal-container modal-md">\r
      <!-- Header Modal -->\r
      <div class="modal-header">\r
        <div class="flex">\r
          <div class="header-icon">\r
            <span class="material-icons">calendar_today</span>\r
          </div>\r
          <div>\r
            <h1 class="section-title">Seleziona Mese</h1>\r
          </div>\r
        </div>\r
        <button class="icon-button close-button" (click)="closeMonthsModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="modal-footer">\r
          <button class="month-item promethea-button ghost" *ngFor="let month of availableMonths"\r
            (click)="changeMonth(month)" [class.active]="month === selectedMonth">\r
            {{ formatMonth(month) }}\r
          </button>\r
      </div>\r
\r
      <!-- Footer del modal -->\r
      <div class="modal-footer">\r
        <button type="button" class="promethea-button ghost" (click)="closeMonthsModal()">\r
          Chiudi\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- Modal Categorie -->\r
  <div class="modal-overlay" *ngIf="showCategoryModal">\r
    <div class="modal-container modal-md">\r
      <!-- Header Modal -->\r
      <div class="modal-header">\r
        <div class="flex">\r
          <div class="header-icon">\r
            <span class="material-icons">category</span>\r
          </div>\r
          <div>\r
            <h1 class="section-title">Gestione Categorie</h1>\r
          </div>\r
        </div>\r
        <button class="icon-button close-button" (click)="closeCategoryModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="form-card">\r
        <!-- Form nuova categoria -->\r
        <div class="mb-lg">\r
          <h3 class="flex items-center gap-sm mb-md">\r
            <lucide-angular name="plus" [size]="20"></lucide-angular>\r
            Nuova Categoria\r
          </h3>\r
\r
          <form class="generic-form" (submit)="saveCategory(); $event.preventDefault()">\r
            <div class="form-row mb-md">\r
              <div class="form-group">\r
                <label class="standard-label" for="category-name">\r
                  <span class="material-icons">title</span>\r
                  Nome Categoria *\r
                </label>\r
                <input type="text" id="category-name" class="form-input" [(ngModel)]="categoryForm.name" name="name"\r
                  required placeholder="Es. Manutenzione impianti">\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label" for="category-type">\r
                  <span class="material-icons">filter_alt</span>\r
                  Tipo\r
                </label>\r
                <select id="category-type" class="form-input" [(ngModel)]="categoryForm.type" name="type" required>\r
                  <option value="entrambi">Entrambi i tipi</option>\r
                  <option value="fissa">Solo Spese Fisse</option>\r
                  <option value="variabile">Solo Spese Variabili</option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="form-row">\r
              <div class="modal-footer">\r
                <button type="button" class="promethea-button ghost" (click)="closeCategoryModal()">\r
                  Annulla\r
                </button>\r
                <button type="submit" class="promethea-button">\r
                  Crea Categoria\r
                </button>\r
              </div>\r
            </div>\r
          </form>\r
        </div>\r
\r
        <!-- Lista categorie esistenti -->\r
        <div>\r
          <h3 class="flex items-center gap-sm mb-md">\r
            <span class="material-icons">list</span>\r
            Categorie Esistenti\r
          </h3>\r
\r
          <div class="categories-list">\r
            <div *ngFor="let category of categories"\r
              class="category-item flex justify-between items-center mb-sm p-sm border rounded">\r
              <span class="category-name font-semibold">{{ category.name }}</span>\r
              <span class="chip" [class.active]="category.type === 'fissa'"\r
                [class.warning]="category.type === 'variabile'">\r
                {{ category.type === 'entrambi' ? 'Entrambi' :\r
                category.type === 'fissa' ? 'Fisse' : 'Variabili' }}\r
              </span>\r
            </div>\r
\r
            <div *ngIf="categories.length === 0" class="text-center p-xl opacity-70">\r
              <p>Nessuna categoria personalizzata creata</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- Modal Fornitori -->\r
  <div class="modal-overlay" *ngIf="showSupplierModal">\r
    <div class="modal-container modal-lg">\r
      <!-- Header Modal -->\r
      <div class="modal-header">\r
        <div class="flex">\r
          <div class="header-icon">\r
            <span class="material-icons">local_shipping</span>\r
          </div>\r
          <div>\r
            <h1 class="section-title">Gestione Fornitori</h1>\r
          </div>\r
        </div>\r
        <button class="icon-button close-button" (click)="closeSupplierModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="form-card">\r
        <!-- Form nuovo fornitore -->\r
        <div class="mb-lg">\r
          <h3 class="flex items-center gap-sm mb-md">\r
            <lucide-angular name="plus" [size]="20"></lucide-angular>\r
            Nuovo Fornitore\r
          </h3>\r
\r
          <form class="generic-form" (submit)="saveSupplier(); $event.preventDefault()">\r
            <div class="form-row mb-md">\r
              <div class="form-group">\r
                <label class="standard-label" for="supplier-company">\r
                  <span class="material-icons">business</span>\r
                  Nome Ditta *\r
                </label>\r
                <input type="text" id="supplier-company" class="form-input" [(ngModel)]="supplierForm.company_name"\r
                  name="company_name" required placeholder="Nome della ditta fornitrice">\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label" for="supplier-contact">\r
                  <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
                  Referente\r
                </label>\r
                <input type="text" id="supplier-contact" class="form-input" [(ngModel)]="supplierForm.contact_name"\r
                  name="contact_name" placeholder="Nome del referente">\r
              </div>\r
            </div>\r
\r
            <div class="form-row mb-md">\r
              <div class="form-group">\r
                <label class="standard-label" for="supplier-email">\r
                  <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
                  Email\r
                </label>\r
                <input type="email" id="supplier-email" class="form-input" [(ngModel)]="supplierForm.email" name="email"\r
                  placeholder="email@fornitore.com">\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label" for="supplier-phone">\r
                  <span class="material-icons">phone</span>\r
                  Telefono\r
                </label>\r
                <input type="tel" id="supplier-phone" class="form-input" [(ngModel)]="supplierForm.phone" name="phone"\r
                  placeholder="Numero di telefono">\r
              </div>\r
            </div>\r
\r
            <div class="form-group mb-md">\r
              <label class="standard-label" for="supplier-address">\r
                <span class="material-icons">location_on</span>\r
                Indirizzo\r
              </label>\r
              <textarea id="supplier-address" class="form-input" [(ngModel)]="supplierForm.address" name="address"\r
                rows="2" placeholder="Indirizzo del fornitore"></textarea>\r
            </div>\r
\r
            <div class="form-group mb-md">\r
              <label class="standard-label" for="supplier-description">\r
                <span class="material-icons">notes</span>\r
                Descrizione\r
              </label>\r
              <textarea id="supplier-description" class="form-input" [(ngModel)]="supplierForm.description"\r
                name="description" rows="3" placeholder="Note aggiuntive sul fornitore"></textarea>\r
            </div>\r
\r
            <div class="modal-footer">\r
              <button type="button" class="promethea-button ghost" (click)="closeSupplierModal()">\r
                Annulla\r
              </button>\r
              <button type="submit" class="promethea-button">\r
                Crea Fornitore\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
\r
        <!-- Lista fornitori esistenti -->\r
        <div>\r
          <h3 class="flex items-center gap-sm mb-md">\r
            <span class="material-icons">list</span>\r
            Fornitori Esistenti\r
          </h3>\r
\r
          <div class="suppliers-list">\r
            <div *ngFor="let supplier of suppliers"\r
              class="supplier-item flex justify-between items-center mb-sm p-sm border rounded">\r
              <div class="supplier-info">\r
                <strong>{{ supplier.company_name }}</strong>\r
                <span *ngIf="supplier.contact_name" class="text-muted">- {{ supplier.contact_name }}</span>\r
              </div>\r
              <div class="supplier-details flex gap-sm">\r
                <span *ngIf="supplier.email" class="chip active">{{ supplier.email }}</span>\r
                <span *ngIf="supplier.phone" class="chip secondary">{{ supplier.phone }}</span>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="suppliers.length === 0" class="text-center p-xl opacity-70">\r
              <p>Nessun fornitore creato</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- Modal Conferma Mesi Futuri -->\r
  <div class="modal-overlay" *ngIf="showFutureMonthsConfirm">\r
    <div class="modal-container modal-sm">\r
      <!-- Header Modal -->\r
      <div class="modal-header">\r
        <div class="flex">\r
          <div class="header-icon">\r
            <span class="material-icons">repeat</span>\r
          </div>\r
          <div>\r
            <h1 class="section-title">Modifica Spese Future</h1>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-card">\r
        <div class="confirmation-message">\r
          <div class="confirmation-icon flex justify-center mb-md">\r
            <span class="material-icons text-primary fs-lg">info</span>\r
          </div>\r
\r
          <h3 class="text-center mb-md">La modifica \xE8 stata salvata</h3>\r
\r
          <p class="text-center mb-lg">\r
            La spesa "<strong>{{ pendingExpenseUpdate?.expenseData.name }}</strong>" \xE8 ricorrente.<br><br>\r
            Vuoi applicare questa modifica anche a tutti i mesi futuri?\r
          </p>\r
\r
          <div class="confirmation-options mb-lg">\r
            <div class="option-item border rounded p-md mb-md cursor-pointer hover:bg-smoke"\r
              (click)="onlyCurrentMonth()">\r
              <div class="flex items-center gap-sm mb-sm">\r
                <span class="material-icons text-primary">today</span>\r
                <strong>Solo questo mese</strong>\r
              </div>\r
              <p class="text-muted">La modifica verr\xE0 applicata solo a {{\r
                formatMonthDisplay(pendingExpenseUpdate?.expenseData.month || '') }}</p>\r
            </div>\r
\r
            <div class="option-item border rounded p-md cursor-pointer hover:bg-smoke" (click)="applyToFutureMonths()">\r
              <div class="flex items-center gap-sm mb-sm">\r
                <span class="material-icons text-primary">date_range</span>\r
                <strong>Tutti i mesi futuri</strong>\r
              </div>\r
              <p class="text-muted">La modifica verr\xE0 applicata a partire dal mese successivo</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Footer del modal -->\r
        <div class="modal-footer">\r
          <button type="button" class="promethea-button ghost" (click)="onlyCurrentMonth()">\r
            <span class="material-icons">today</span>\r
            Solo questo mese\r
          </button>\r
          <button type="button" class="promethea-button" (click)="applyToFutureMonths()">\r
            <span class="material-icons">date_range</span>\r
            Tutti i mesi futuri\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/restaurant/expense-management/expense-management.css */\n.radio-label {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm) var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: var(--background);\n}\n.radio-label:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.radio-label.active {\n  background: var(--smoke-2);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.radio-label input[type=radio] {\n  display: none;\n}\n.radio-checkmark {\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--smoke-1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.radio-label.active .radio-checkmark {\n  border-color: var(--primary);\n  background: var(--primary);\n}\n.radio-label.active .radio-checkmark::after {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background: white;\n  border-radius: 50%;\n}\n.table-section {\n  margin-top: var(--gap-lg);\n}\n.chip.small {\n  padding: 0.125rem 0.5rem;\n  font-size: 0.75rem;\n}\n.chip.primary {\n  background: var(--smoke-2);\n  color: var(--primary);\n  border-color: var(--smoke-2);\n}\n.notes-preview {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--text-muted);\n}\n.input-group {\n  display: flex;\n  gap: var(--gap-sm);\n  align-items: stretch;\n}\n.input-group .form-input {\n  flex: 1;\n  min-width: 0;\n}\n.input-group .promethea-button.small {\n  padding: var(--gap-sm);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.months-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-lg);\n}\n.categories-list,\n.suppliers-list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.category-item,\n.supplier-item {\n  display: flex;\n  justify-content: between;\n  align-items: center;\n  padding: var(--gap-sm);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.category-item:hover,\n.supplier-item:hover {\n  border-color: var(--primary);\n  transform: translateX(4px);\n}\n.supplier-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n}\n.supplier-details {\n  display: flex;\n  gap: var(--gap-sm);\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .flex.justify-between > div:last-child {\n    align-self: stretch;\n  }\n  .input-group {\n    flex-direction: column;\n  }\n  .supplier-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .supplier-details {\n    align-self: stretch;\n    justify-content: flex-start;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.recurring-templates-list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.template-info {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.template-card {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: top;\n}\n.template-card.hidden {\n  transform: scaleY(0);\n  opacity: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: hidden;\n}\n.grid-cards {\n  transition: all 0.3s ease;\n}\n.additional-templates {\n  margin-top: var(--gap-md);\n  animation: expand 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.animate-expand {\n  animation: expand 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes expand {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    max-height: 1000px;\n  }\n}\n.templates-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--gap-md);\n  transition: grid-template-rows 0.3s ease;\n}\n.templates-container.collapsed {\n  grid-template-rows: repeat(auto-fit, minmax(0, 1fr));\n  max-height: calc(3 * (var(--gap-md) + 150px));\n  overflow: visible;\n}\n.templates-container.expanded {\n  grid-template-rows: auto;\n  max-height: none;\n  overflow: visible;\n}\n.template-card.hidden-card {\n  display: none !important;\n  opacity: 0;\n  transform: scale(0.8);\n  height: 0;\n  margin: 0;\n  padding: 0;\n  border: none;\n  pointer-events: none;\n}\n.templates-container-alt {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--gap-md);\n  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.templates-container-alt.collapsed {\n  max-height: calc(3 * 180px);\n  overflow: hidden;\n  mask-image:\n    linear-gradient(\n      to bottom,\n      var(--text-color) 70%,\n      transparent 100%);\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      var(--text-color) 70%,\n      transparent 100%);\n}\n.templates-container-alt.expanded {\n  max-height: 5000px;\n  mask-image: none;\n  -webkit-mask-image: none;\n}\n/*# sourceMappingURL=expense-management.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseManagement, { className: "ExpenseManagement", filePath: "src/app/restaurant/expense-management/expense-management.ts", lineNumber: 17 });
})();
export {
  ExpenseManagement
};
//# sourceMappingURL=chunk-MAHGF4IX.js.map
