import {
  RestaurantFollowerService
} from "./chunk-ZU2B3Z2L.js";
import {
  PromotionNotificationService
} from "./chunk-3OF7SE46.js";
import {
  DISCOUNT_TARGET_LABELS,
  PROMOTION_STATUS_LABELS,
  PROMOTION_TYPE_LABELS,
  STACKING_LABELS,
  getDefaultPromotion
} from "./chunk-OZ6JK7FL.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
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
import {
  AuthService,
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Injectable,
  Subject,
  filter,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/Marketing-Management/promotion.service.ts
var PromotionService = class _PromotionService extends BaseService {
  // ─── BaseService richiede solo questo ──────────────────────
  getTableName() {
    return "promotions";
  }
  // ─── Filtri in-memory (nessuna chiamata extra al DB) ────────
  /** Promozioni per status, calcolate sul dataSubject già caricato */
  getByStatus(status) {
    return this.dataSubject.value.filter((p) => p.status === status);
  }
  /** Promozioni attive e temporalmente valide adesso */
  getActiveNow() {
    const now = /* @__PURE__ */ new Date();
    return this.dataSubject.value.filter((p) => p.status === "active" && new Date(p.valid_from) <= now && (!p.valid_until || new Date(p.valid_until) >= now));
  }
  /** Contatori per i filtri tab (evita 5 query separate) */
  getStatusCounts() {
    const all = this.dataSubject.value;
    return {
      all: all.length,
      draft: all.filter((p) => p.status === "draft").length,
      active: all.filter((p) => p.status === "active").length,
      paused: all.filter((p) => p.status === "paused").length,
      expired: all.filter((p) => p.status === "expired").length,
      archived: all.filter((p) => p.status === "archived").length
    };
  }
  // ─── Azioni rapide (usano update() del BaseService) ─────────
  /** Cambia stato di una promozione */
  toggleStatus(id, newStatus) {
    return __async(this, null, function* () {
      return this.update(id, { status: newStatus });
    });
  }
  /** Attiva → Sospendi e viceversa in un click */
  toggleActiveState(promotion) {
    return __async(this, null, function* () {
      const newStatus = promotion.status === "active" ? "paused" : "active";
      return this.toggleStatus(promotion.id, newStatus);
    });
  }
  /** Clona una promozione esistente come bozza */
  duplicate(promotion) {
    return __async(this, null, function* () {
      const copy = {
        name: `${promotion.name} (copia)`,
        description: promotion.description,
        internal_note: promotion.internal_note,
        type: promotion.type,
        target: promotion.target,
        discount_value: promotion.discount_value,
        max_discount_amount: promotion.max_discount_amount,
        valid_from: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        valid_until: null,
        max_uses_total: promotion.max_uses_total,
        max_uses_per_customer: promotion.max_uses_per_customer,
        min_order_amount: promotion.min_order_amount,
        priority: promotion.priority,
        stacking: promotion.stacking,
        status: "draft",
        // sempre bozza
        is_public: promotion.is_public
      };
      return this.create(copy);
    });
  }
  // ─── Analytics (query su promotion_usages) ──────────────────
  /** Statistiche di utilizzo per una singola promozione */
  getStats(promotionId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.run(this.supabaseService.getSupabaseClient().from("promotion_usages").select("discount_applied, order_total_before, order_total_after").eq("promotion_id", promotionId));
        if (error || !data)
          return null;
        const uses = data;
        const totalDiscount = uses.reduce((sum, u) => sum + (u.discount_applied ?? 0), 0);
        const avgOrderValue = uses.length > 0 ? uses.reduce((sum, u) => sum + (u.order_total_before ?? 0), 0) / uses.length : 0;
        return {
          promotion_id: promotionId,
          total_uses: uses.length,
          total_discount_given: totalDiscount,
          avg_order_value: avgOrderValue
        };
      } catch {
        return null;
      }
    });
  }
  // ─── Utility ────────────────────────────────────────────────
  /** Formatta il valore dello sconto in modo leggibile */
  formatDiscountValue(promotion) {
    switch (promotion.type) {
      case "percentage":
        return `${promotion.discount_value}%`;
      case "fixed_amount":
        return `-\u20AC${promotion.discount_value.toFixed(2)}`;
      case "happy_hour":
        return `${promotion.discount_value}% (Happy Hour)`;
      case "buy_x_get_y":
        return `Bundle`;
      case "free_item":
        return `Omaggio`;
      default:
        return `${promotion.discount_value}`;
    }
  }
  /** Restituisce true se la promozione è scaduta per data o esaurimento */
  isExpired(promotion) {
    if (promotion.valid_until && new Date(promotion.valid_until) < /* @__PURE__ */ new Date())
      return true;
    if (promotion.max_uses_total && promotion.current_uses >= promotion.max_uses_total)
      return true;
    return false;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PromotionService_BaseFactory;
    return function PromotionService_Factory(__ngFactoryType__) {
      return (\u0275PromotionService_BaseFactory || (\u0275PromotionService_BaseFactory = \u0275\u0275getInheritedFactory(_PromotionService)))(__ngFactoryType__ || _PromotionService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PromotionService, factory: _PromotionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromotionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/restaurant/marketing-management/marketing-management.ts
function MarketingManagement_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 18);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function MarketingManagement_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function MarketingManagement_button_36_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter(tab_r3.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeFilter() === tab_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r3.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusCounts[tab_r3.key]);
  }
}
function MarketingManagement_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function MarketingManagement_div_43_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Crea la tua prima promozione per iniziare! ");
    \u0275\u0275elementContainerEnd();
  }
}
function MarketingManagement_div_43_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' Nessuna promozione con stato "', (tmp_2_0 = ctx_r0.statusLabels[ctx_r0.activeFilter()]) == null ? null : tmp_2_0.label, '" ');
  }
}
function MarketingManagement_div_43_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function MarketingManagement_div_43_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openCreateModal());
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Crea promozione ");
    \u0275\u0275elementEnd();
  }
}
function MarketingManagement_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4, "Nessuna promozione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275template(6, MarketingManagement_div_43_ng_container_6_Template, 2, 0, "ng-container", 41)(7, MarketingManagement_div_43_ng_container_7_Template, 2, 1, "ng-container", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MarketingManagement_div_43_button_8_Template, 4, 0, "button", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.activeFilter() === "all");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeFilter() !== "all");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeFilter() === "all");
  }
}
function MarketingManagement_div_44_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const promo_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", promo_r6.description, " ");
  }
}
function MarketingManagement_div_44_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "span");
    \u0275\u0275text(3, "Utilizzi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 70);
    \u0275\u0275element(7, "div", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const promo_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", promo_r6.current_uses, " / ", promo_r6.max_uses_total, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getUsagePercent(promo_r6), "%");
    \u0275\u0275classProp("usage-danger", ctx_r0.getUsagePercent(promo_r6) >= 90);
  }
}
function MarketingManagement_div_44_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 54);
    \u0275\u0275text(2, "all_inclusive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const promo_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Utilizzi: ", promo_r6.current_uses, " (illimitato)");
  }
}
function MarketingManagement_div_44_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 54);
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const promo_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Min. ordine: \u20AC", promo_r6.min_order_amount, "");
  }
}
function MarketingManagement_div_44_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function MarketingManagement_div_44_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const promo_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.publishDraft(promo_r6));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pubblica ");
    \u0275\u0275elementEnd();
  }
}
function MarketingManagement_div_44_div_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function MarketingManagement_div_44_div_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const promo_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleStatus(promo_r6));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const promo_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", promo_r6.status === "active" ? "pause" : "play_arrow", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", promo_r6.status === "active" ? "Sospendi" : "Riattiva", " ");
  }
}
function MarketingManagement_div_44_div_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function MarketingManagement_div_44_div_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const promo_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sendNotification(promo_r6));
    });
    \u0275\u0275element(1, "lucide-angular", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const promo_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r0.notifiedPromotions.has(promo_r6.id) ? "Notifica gi\xE0 inviata" : ctx_r0.daysUntilNext > 0 ? "Limite settimanale: riprova tra " + ctx_r0.daysUntilNext + " giorni" : "Invia notifica ai follower")("disabled", !ctx_r0.canSendNotification(promo_r6) || ctx_r0.sendingNotification === promo_r6.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.notifiedPromotions.has(promo_r6.id) ? "var(--text-muted)" : ctx_r0.daysUntilNext > 0 ? "#f59e0b" : "#10b981");
    \u0275\u0275property("name", ctx_r0.notifiedPromotions.has(promo_r6.id) ? "bell-off" : "bell")("size", 18);
  }
}
function MarketingManagement_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 24)(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MarketingManagement_div_44_div_1_p_11_Template, 2, 1, "p", 49);
    \u0275\u0275elementStart(12, "div", 50)(13, "span", 51);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 52);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 53)(18, "span", 54);
    \u0275\u0275text(19, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 55);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, MarketingManagement_div_44_div_1_div_22_Template, 8, 6, "div", 56)(23, MarketingManagement_div_44_div_1_div_23_Template, 5, 1, "div", 57)(24, MarketingManagement_div_44_div_1_div_24_Template, 5, 1, "div", 57);
    \u0275\u0275elementStart(25, "div", 58);
    \u0275\u0275template(26, MarketingManagement_div_44_div_1_button_26_Template, 4, 0, "button", 59)(27, MarketingManagement_div_44_div_1_button_27_Template, 4, 2, "button", 60)(28, MarketingManagement_div_44_div_1_button_28_Template, 2, 6, "button", 61);
    \u0275\u0275elementStart(29, "div", 62)(30, "button", 63);
    \u0275\u0275listener("click", function MarketingManagement_div_44_div_1_Template_button_click_30_listener() {
      const promo_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openStatsModal(promo_r6));
    });
    \u0275\u0275elementStart(31, "span", 18);
    \u0275\u0275text(32, "bar_chart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 64);
    \u0275\u0275listener("click", function MarketingManagement_div_44_div_1_Template_button_click_33_listener() {
      const promo_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.duplicate(promo_r6));
    });
    \u0275\u0275elementStart(34, "span", 18);
    \u0275\u0275text(35, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 65);
    \u0275\u0275listener("click", function MarketingManagement_div_44_div_1_Template_button_click_36_listener() {
      const promo_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(promo_r6));
    });
    \u0275\u0275elementStart(37, "span", 18);
    \u0275\u0275text(38, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 66);
    \u0275\u0275listener("click", function MarketingManagement_div_44_div_1_Template_button_click_39_listener() {
      const promo_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDeleteModal(promo_r6));
    });
    \u0275\u0275elementStart(40, "span", 18);
    \u0275\u0275text(41, "delete_outline");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const promo_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expired-card", ctx_r0.isExpired(promo_r6));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r0.typeLabels[promo_r6.type].color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabels[promo_r6.type].icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeLabels[promo_r6.type].label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.statusLabels[promo_r6.status].chipClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabels[promo_r6.status].label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promo_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", promo_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDiscount(promo_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" su ", ctx_r0.targetLabels[promo_r6.target], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatDate(promo_r6.valid_from), " \u2192 ", ctx_r0.formatDate(promo_r6.valid_until), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", promo_r6.max_uses_total);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !promo_r6.max_uses_total);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", promo_r6.min_order_amount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", promo_r6.status === "draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", promo_r6.status === "active" || promo_r6.status === "paused");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", promo_r6.status === "active");
  }
}
function MarketingManagement_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, MarketingManagement_div_44_div_1_Template, 42, 21, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredPromotions)("ngForTrackBy", ctx_r0.trackById);
  }
}
function MarketingManagement_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "lucide-angular", 78);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Nessun follower ancora. Condividi le tue promozioni per crescere!");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 40);
  }
}
function MarketingManagement_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "lucide-angular", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 24);
  }
}
function MarketingManagement_div_55_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 24);
    \u0275\u0275element(3, "lucide-angular", 84);
    \u0275\u0275elementStart(4, "span", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (f_r10.users == null ? null : f_r10.users.first_name) || "\u2014", " ", (f_r10.users == null ? null : f_r10.users.last_name) || "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((f_r10.users == null ? null : f_r10.users.email) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 5, f_r10.followed_at, "dd/MM/yyyy"));
  }
}
function MarketingManagement_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "table", 82)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Segue dal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, MarketingManagement_div_55_tr_11_Template, 11, 8, "tr", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.followers);
  }
}
function MarketingManagement_div_56_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", t_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabels[t_r12].label, " ");
  }
}
function MarketingManagement_div_56_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgt_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", tgt_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.targetLabels[tgt_r13], " ");
  }
}
function MarketingManagement_div_56_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "label", 97);
    \u0275\u0275text(2, " Sconto massimo \u20AC ");
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_div_55_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.max_discount_amount, $event) || (ctx_r0.formData.max_discount_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.max_discount_amount);
  }
}
function MarketingManagement_div_56_option_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", s_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.stackingLabels[s_r15].label, " \u2014 ", ctx_r0.stackingLabels[s_r15].description, " ");
  }
}
function MarketingManagement_div_56_span_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function MarketingManagement_div_56_span_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "loading...");
    \u0275\u0275elementEnd();
  }
}
function MarketingManagement_div_56_ng_container_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedPromotion ? "save" : "add_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPromotion ? "Salva modifiche" : "Crea promozione", " ");
  }
}
function MarketingManagement_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click.self", function MarketingManagement_div_56_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFormModal());
    });
    \u0275\u0275elementStart(1, "div", 87)(2, "div", 88)(3, "div", 24)(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 91);
    \u0275\u0275listener("click", function MarketingManagement_div_56_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFormModal());
    });
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 92)(12, "p", 93)(13, "span", 94);
    \u0275\u0275text(14, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Identit\xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 95)(17, "div", 96)(18, "label", 97);
    \u0275\u0275text(19, "Nome promozione *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.name, $event) || (ctx_r0.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 95)(22, "div", 96)(23, "label", 97);
    \u0275\u0275text(24, "Descrizione pubblica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 99);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.description, $event) || (ctx_r0.formData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 96)(27, "label", 97)(28, "span", 100);
    \u0275\u0275text(29, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Nota interna ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "textarea", 101);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.internal_note, $event) || (ctx_r0.formData.internal_note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(32, "hr", 102);
    \u0275\u0275elementStart(33, "p", 93)(34, "span", 94);
    \u0275\u0275text(35, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Tipo e Valore ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 95)(38, "div", 96)(39, "label", 97);
    \u0275\u0275text(40, "Tipo promozione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.type, $event) || (ctx_r0.formData.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(42, MarketingManagement_div_56_option_42_Template, 2, 2, "option", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 96)(44, "label", 97);
    \u0275\u0275text(45, "Applicata su");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_select_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.target, $event) || (ctx_r0.formData.target = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(47, MarketingManagement_div_56_option_47_Template, 2, 2, "option", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 95)(49, "div", 96)(50, "label", 97);
    \u0275\u0275text(51, " Valore sconto ");
    \u0275\u0275elementStart(52, "span", 47);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.discount_value, $event) || (ctx_r0.formData.discount_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, MarketingManagement_div_56_div_55_Template, 6, 1, "div", 106);
    \u0275\u0275elementStart(56, "div", 96)(57, "label", 97);
    \u0275\u0275text(58, "Ordine minimo \u20AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.min_order_amount, $event) || (ctx_r0.formData.min_order_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(60, "hr", 102);
    \u0275\u0275elementStart(61, "p", 93)(62, "span", 94);
    \u0275\u0275text(63, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Validit\xE0 e Limiti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 95)(66, "div", 96)(67, "label", 97);
    \u0275\u0275text(68, "Data inizio *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.valid_from, $event) || (ctx_r0.formData.valid_from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 96)(71, "label", 97);
    \u0275\u0275text(72, " Data fine ");
    \u0275\u0275elementStart(73, "span", 5);
    \u0275\u0275text(74, "(lascia vuoto = nessuna scadenza)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.valid_until, $event) || (ctx_r0.formData.valid_until = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 95)(77, "div", 96)(78, "label", 97);
    \u0275\u0275text(79, " Utilizzi totali ");
    \u0275\u0275elementStart(80, "span", 5);
    \u0275\u0275text(81, "(vuoto = illimitato)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.max_uses_total, $event) || (ctx_r0.formData.max_uses_total = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 96)(84, "label", 97);
    \u0275\u0275text(85, "Max per cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.max_uses_per_customer, $event) || (ctx_r0.formData.max_uses_per_customer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(87, "hr", 102);
    \u0275\u0275elementStart(88, "p", 93)(89, "span", 94);
    \u0275\u0275text(90, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, " Regole e Visibilit\xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 95)(93, "div", 96)(94, "label", 97);
    \u0275\u0275text(95, "Compatibilit\xE0 con altri sconti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_select_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.stacking, $event) || (ctx_r0.formData.stacking = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(97, MarketingManagement_div_56_option_97_Template, 2, 3, "option", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 96)(99, "label", 97);
    \u0275\u0275text(100, " Priorit\xE0 ");
    \u0275\u0275elementStart(101, "span", 5);
    \u0275\u0275text(102, "(pi\xF9 alto = vince in caso di conflitto)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_103_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.priority, $event) || (ctx_r0.formData.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "div", 95)(105, "div", 96)(106, "label", 97);
    \u0275\u0275text(107, "Stato iniziale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_select_ngModelChange_108_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.status, $event) || (ctx_r0.formData.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(109, "option", 112);
    \u0275\u0275text(110, "Bozza (non ancora attiva)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "option", 113);
    \u0275\u0275text(112, "Attiva subito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "option", 114);
    \u0275\u0275text(114, "Sospesa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "div", 115)(116, "label", 116)(117, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function MarketingManagement_div_56_Template_input_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.is_public, $event) || (ctx_r0.formData.is_public = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 118)(119, "strong");
    \u0275\u0275text(120, "Visibile ai clienti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span", 40);
    \u0275\u0275text(122, "La promozione apparir\xE0 nel men\xF9 pubblico");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(123, "div", 119)(124, "button", 120);
    \u0275\u0275listener("click", function MarketingManagement_div_56_Template_button_click_124_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFormModal());
    });
    \u0275\u0275text(125, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "button", 121);
    \u0275\u0275listener("click", function MarketingManagement_div_56_Template_button_click_126_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePromotion());
    });
    \u0275\u0275template(127, MarketingManagement_div_56_span_127_Template, 2, 0, "span", 122)(128, MarketingManagement_div_56_span_128_Template, 2, 0, "span", 123)(129, MarketingManagement_div_56_ng_container_129_Template, 4, 2, "ng-container", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedPromotion ? "edit" : "add_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPromotion ? "Modifica promozione" : "Nuova promozione", " ");
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.description);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.internal_note);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.promotionTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.discountTargets);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.discountSuffix);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.discount_value);
    \u0275\u0275property("placeholder", ctx_r0.formData.type === "percentage" ? "10" : "5.00");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showMaxCap);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.min_order_amount);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.valid_from);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.valid_until);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.max_uses_total);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.max_uses_per_customer);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.stacking);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.stackingPolicies);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.priority);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.status);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.is_public);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSaving || !ctx_r0.formData.name.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
  }
}
function MarketingManagement_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click.self", function MarketingManagement_div_57_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 127)(2, "div", 88)(3, "div", 24)(4, "span", 128);
    \u0275\u0275text(5, "delete_forever");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 90);
    \u0275\u0275text(7, "Elimina promozione");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 91);
    \u0275\u0275listener("click", function MarketingManagement_div_57_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 92)(12, "p", 68);
    \u0275\u0275text(13, "Stai per eliminare:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 129)(15, "span", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 5);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 130);
    \u0275\u0275text(20, " Questa azione \xE8 irreversibile. Gli utilizzi gi\xE0 registrati non verranno cancellati. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 119)(22, "button", 120);
    \u0275\u0275listener("click", function MarketingManagement_div_57_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275text(23, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 131);
    \u0275\u0275listener("click", function MarketingManagement_div_57_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275elementStart(25, "span", 18);
    \u0275\u0275text(26, "delete_forever");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Elimina definitivamente ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r0.selectedPromotion == null ? null : ctx_r0.selectedPromotion.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDiscount(ctx_r0.selectedPromotion));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSaving);
  }
}
function MarketingManagement_div_58_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function MarketingManagement_div_58_div_15_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "span", 89);
    \u0275\u0275text(2, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4, "Saturazione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.getUsagePercent(ctx_r0.selectedPromotion), "%");
  }
}
function MarketingManagement_div_58_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 138)(2, "span", 89);
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "Utilizzi totali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 138)(9, "span", 89);
    \u0275\u0275text(10, "savings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 5);
    \u0275\u0275text(12, "Sconto erogato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 138)(17, "span", 89);
    \u0275\u0275text(18, "shopping_basket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 5);
    \u0275\u0275text(20, "Scontrino medio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 6);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, MarketingManagement_div_58_div_15_div_24_Template, 7, 1, "div", 139);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectedStats.total_uses);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(15, 4, ctx_r0.selectedStats.total_discount_given, "1.2-2"), "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(23, 7, ctx_r0.selectedStats.avg_order_value, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedPromotion == null ? null : ctx_r0.selectedPromotion.max_uses_total);
  }
}
function MarketingManagement_div_58_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "span", 38);
    \u0275\u0275text(2, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 130);
    \u0275\u0275text(4, "Nessun utilizzo registrato ancora");
    \u0275\u0275elementEnd()();
  }
}
function MarketingManagement_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click.self", function MarketingManagement_div_58_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeStatsModal());
    });
    \u0275\u0275elementStart(1, "div", 132)(2, "div", 88)(3, "div", 24)(4, "span", 89);
    \u0275\u0275text(5, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 90);
    \u0275\u0275text(7, "Statistiche");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 91);
    \u0275\u0275listener("click", function MarketingManagement_div_58_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeStatsModal());
    });
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 92)(12, "p", 133);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MarketingManagement_div_58_div_14_Template, 3, 0, "div", 19)(15, MarketingManagement_div_58_div_15_Template, 25, 10, "div", 134)(16, MarketingManagement_div_58_div_16_Template, 5, 0, "div", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 119)(18, "button", 136);
    \u0275\u0275listener("click", function MarketingManagement_div_58_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeStatsModal());
    });
    \u0275\u0275text(19, " Chiudi ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.selectedPromotion == null ? null : ctx_r0.selectedPromotion.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingStats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStats && ctx_r0.selectedStats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStats && !ctx_r0.selectedStats);
  }
}
var MarketingManagement = class _MarketingManagement {
  promotionService = inject(PromotionService);
  destroy$ = new Subject();
  followerService = inject(RestaurantFollowerService);
  authService = inject(AuthService);
  promoNotifService = inject(PromotionNotificationService);
  supabaseService = inject(SupabaseService);
  // ─── State ──────────────────────────────────────────────────
  promotions = [];
  loading = false;
  error = null;
  // Follower
  followerCount = 0;
  followers = [];
  isLoadingFollowers = false;
  // PROMOZIONI INVIO
  notifiedPromotions = /* @__PURE__ */ new Set();
  sendingNotification = null;
  // id della promo in invio
  daysUntilNext = 0;
  activeFilter = signal("all");
  statusCounts = {
    all: 0,
    draft: 0,
    active: 0,
    paused: 0,
    expired: 0,
    archived: 0
  };
  // ─── Modal State ─────────────────────────────────────────────
  showFormModal = false;
  showDeleteModal = false;
  showStatsModal = false;
  isSaving = false;
  selectedPromotion = null;
  formData = getDefaultPromotion();
  // Stats
  selectedStats = null;
  loadingStats = false;
  // ─── Lookup tables per il template ──────────────────────────
  typeLabels = PROMOTION_TYPE_LABELS;
  statusLabels = PROMOTION_STATUS_LABELS;
  targetLabels = DISCOUNT_TARGET_LABELS;
  stackingLabels = STACKING_LABELS;
  promotionTypes = ["percentage", "fixed_amount", "happy_hour", "buy_x_get_y", "free_item"];
  discountTargets = ["order", "category", "product", "delivery"];
  stackingPolicies = ["exclusive", "cumulative", "best_deal"];
  filterTabs = [
    { key: "all", label: "Tutte" },
    { key: "active", label: "Attive" },
    { key: "draft", label: "Bozze" },
    { key: "paused", label: "Sospese" },
    { key: "expired", label: "Scadute" },
    { key: "archived", label: "Archivio" }
  ];
  // ─── Computed: promozioni filtrate ──────────────────────────
  get filteredPromotions() {
    const filter2 = this.activeFilter();
    if (filter2 === "all")
      return this.promotions;
    return this.promotions.filter((p) => p.status === filter2);
  }
  // ─── Lifecycle ──────────────────────────────────────────────
  ngOnInit() {
    this.promotionService.data$.pipe(takeUntil(this.destroy$)).subscribe((promotions) => {
      this.promotions = promotions;
      this.statusCounts = this.promotionService.getStatusCounts();
      this.loadNotificationStates();
    });
    this.promotionService.loading$.pipe(takeUntil(this.destroy$)).subscribe((loading) => this.loading = loading);
    this.promotionService.error$.pipe(takeUntil(this.destroy$)).subscribe((error) => this.error = error);
    this.promotionService.loadData();
    this.authService.activeRestaurantId$.pipe(takeUntil(this.destroy$), filter((id) => !!id)).subscribe((restaurantId) => {
      this.loadFollowers(restaurantId);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ─── Navigazione Tab ────────────────────────────────────────
  setFilter(status) {
    this.activeFilter.set(status);
  }
  // ─── Form Modal: Crea ────────────────────────────────────────
  openCreateModal() {
    this.selectedPromotion = null;
    this.formData = getDefaultPromotion();
    this.showFormModal = true;
  }
  // ─── Form Modal: Modifica ────────────────────────────────────
  openEditModal(promotion) {
    this.selectedPromotion = promotion;
    this.formData = {
      name: promotion.name,
      description: promotion.description ?? null,
      internal_note: promotion.internal_note ?? null,
      image_url: promotion.image_url ?? null,
      type: promotion.type,
      target: promotion.target,
      discount_value: promotion.discount_value,
      max_discount_amount: promotion.max_discount_amount ?? null,
      valid_from: promotion.valid_from.split("T")[0],
      valid_until: promotion.valid_until ? promotion.valid_until.split("T")[0] : null,
      max_uses_total: promotion.max_uses_total ?? null,
      max_uses_per_customer: promotion.max_uses_per_customer ?? null,
      min_order_amount: promotion.min_order_amount,
      priority: promotion.priority,
      stacking: promotion.stacking,
      status: promotion.status,
      is_public: promotion.is_public
    };
    this.showFormModal = true;
  }
  closeFormModal() {
    this.showFormModal = false;
    this.selectedPromotion = null;
  }
  // ─── Salva (Crea o Aggiorna) ─────────────────────────────────
  savePromotion() {
    return __async(this, null, function* () {
      if (!this.formData.name?.trim())
        return;
      this.isSaving = true;
      try {
        if (this.selectedPromotion) {
          yield this.promotionService.update(this.selectedPromotion.id, this.formData);
        } else {
          yield this.promotionService.create(this.formData);
        }
        this.closeFormModal();
      } finally {
        this.isSaving = false;
      }
    });
  }
  // ─── Elimina ──────────────────────────────────────────────────
  openDeleteModal(promotion) {
    this.selectedPromotion = promotion;
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.selectedPromotion = null;
  }
  confirmDelete() {
    return __async(this, null, function* () {
      if (!this.selectedPromotion)
        return;
      this.isSaving = true;
      try {
        yield this.promotionService.delete(this.selectedPromotion.id);
        this.closeDeleteModal();
      } finally {
        this.isSaving = false;
      }
    });
  }
  // ─── Azioni rapide ────────────────────────────────────────────
  toggleStatus(promotion) {
    return __async(this, null, function* () {
      yield this.promotionService.toggleActiveState(promotion);
    });
  }
  duplicate(promotion) {
    return __async(this, null, function* () {
      yield this.promotionService.duplicate(promotion);
    });
  }
  publishDraft(promotion) {
    return __async(this, null, function* () {
      yield this.promotionService.toggleStatus(promotion.id, "active");
    });
  }
  // ─── Stats Modal ─────────────────────────────────────────────
  openStatsModal(promotion) {
    return __async(this, null, function* () {
      this.selectedPromotion = promotion;
      this.selectedStats = null;
      this.showStatsModal = true;
      this.loadingStats = true;
      try {
        this.selectedStats = yield this.promotionService.getStats(promotion.id);
      } finally {
        this.loadingStats = false;
      }
    });
  }
  closeStatsModal() {
    this.showStatsModal = false;
    this.selectedPromotion = null;
    this.selectedStats = null;
  }
  // ─── Utility per il template ─────────────────────────────────
  formatDiscount(p) {
    return this.promotionService.formatDiscountValue(p);
  }
  isExpired(p) {
    return this.promotionService.isExpired(p);
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "\u221E";
    return new Date(dateStr).toLocaleDateString("it-IT", { day: "2-digit", month: "short", year: "numeric" });
  }
  /** Usata nel template per il campo discount_value:
   *  mostra il simbolo corretto a seconda del tipo selezionato */
  get discountSuffix() {
    return this.formData.type === "percentage" ? "%" : "\u20AC";
  }
  /** Mostra il campo max_discount_amount solo se tipo = percentage */
  get showMaxCap() {
    return this.formData.type === "percentage";
  }
  /** Determina se una promozione è attivabile (non scaduta, non archived) */
  canToggle(p) {
    return p.status !== "expired" && p.status !== "archived";
  }
  getUsagePercent(p) {
    if (!p.max_uses_total || p.max_uses_total === 0)
      return 0;
    return Math.min(100, Math.round(p.current_uses / p.max_uses_total * 100));
  }
  trackById(_, item) {
    return item.id;
  }
  objectKeys(obj) {
    return Object.keys(obj);
  }
  loadFollowers(restaurantId) {
    return __async(this, null, function* () {
      this.isLoadingFollowers = true;
      console.log("\u{1F504} Caricamento follower per ristorante:", restaurantId);
      try {
        const result = yield this.followerService.getFollowersForRestaurant(restaurantId);
        console.log("\u2705 Risultato dal servizio:", result);
        this.followers = result || [];
        this.followerCount = this.followers.length;
        console.log("\u{1F4CA} followers array:", this.followers);
      } catch (error) {
        console.error("\u274C Errore nel caricamento follower:", error);
        this.followers = [];
        this.followerCount = 0;
      } finally {
        this.isLoadingFollowers = false;
      }
    });
  }
  loadNotificationStates() {
    return __async(this, null, function* () {
      const days = yield this.promoNotifService.daysUntilNextAllowed();
      this.daysUntilNext = days;
      for (const promo of this.promotions) {
        const notified = yield this.promoNotifService.hasBeenNotified(promo.id);
        if (notified)
          this.notifiedPromotions.add(promo.id);
      }
    });
  }
  sendNotification(promo) {
    return __async(this, null, function* () {
      if (this.sendingNotification)
        return;
      this.sendingNotification = promo.id;
      try {
        if (!this.authService.isRestaurantUser()) {
          alert("\u26A0\uFE0F Devi essere in modalit\xE0 ristorante per inviare promozioni.");
          return;
        }
        const restaurantId = this.authService.getCurrentRestaurantId();
        if (!restaurantId) {
          alert("\u26A0\uFE0F Nessun ristorante attivo selezionato.");
          return;
        }
        const followers = yield this.followerService.getFollowersForRestaurant(restaurantId);
        const pushableFollowers = followers.filter((f) => f.users);
        if (pushableFollowers.length === 0) {
          alert("\u26A0\uFE0F Nessun follower con notifiche push attive.");
          return;
        }
        const daysLeft = yield this.promoNotifService.daysUntilNextAllowed();
        if (daysLeft > 0) {
          alert(`\u26A0\uFE0F Limite settimanale raggiunto. Riprova tra ${daysLeft} giorni.`);
          return;
        }
        const result = yield this.promoNotifService.sendPromotionPush(promo.id);
        if (result.success) {
          this.notifiedPromotions.add(promo.id);
          this.daysUntilNext = 7;
          alert(`\u2705 Notifica inviata a ${result.sent} follower`);
        } else {
          const messages = {
            already_sent: "Notifica gi\xE0 inviata per questa promozione.",
            weekly_limit: `Limite settimanale raggiunto. Riprova tra ${this.daysUntilNext} giorni.`,
            no_recipients: "Nessun follower con notifiche push attive.",
            unknown: result.message || "Errore sconosciuto"
          };
          const code = result.errorCode ?? "unknown";
          alert("\u26A0\uFE0F " + messages[code]);
        }
      } catch (err) {
        console.error("Errore in sendNotification:", err);
        alert("\u274C Errore durante l'invio della notifica. Controlla console.");
      } finally {
        this.sendingNotification = null;
      }
    });
  }
  canSendNotification(promo) {
    return promo.status === "active" && !this.notifiedPromotions.has(promo.id) && this.daysUntilNext === 0 && this.sendingNotification === null;
  }
  static \u0275fac = function MarketingManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarketingManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarketingManagement, selectors: [["app-marketing-management"]], decls: 59, vars: 23, consts: [[1, "page-container"], [1, "p-lg"], [1, "grid-cards", "mb-lg"], [1, "card", "p-md", "items-center", "text-center", "gap-sm"], ["name", "tag", 2, "color", "var(--primary)", 3, "size"], [1, "text-muted", "text-mini"], [1, "font-bold", "text-md"], ["name", "zap", 2, "color", "#10b981", 3, "size"], [1, "font-bold", "text-md", 2, "color", "#10b981"], ["name", "file-text", 2, "color", "var(--tertiary)", 3, "size"], ["name", "pause-circle", 2, "color", "#f59e0b", 3, "size"], [1, "font-bold", "text-md", 2, "color", "#f59e0b"], ["name", "calendar-x", 2, "color", "var(--text-muted)", 3, "size"], ["class", "info-message mb-lg", 4, "ngIf"], [1, "flex", "justify-between", "gap-sm"], [1, "flex", "flex-wrap", "gap-sm", "mb-lg"], ["class", "chip", "style", "cursor: pointer", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "promethea-button", 3, "click"], [1, "material-icons"], ["class", "flex justify-center p-lg", 4, "ngIf"], ["class", "card p-lg text-center gap-md items-center", 4, "ngIf"], ["class", "grid-cards", 4, "ngIf"], [1, "card", "p-md", "mt-lg"], [1, "flex", "items-center", "justify-between", "mb-md"], [1, "flex", "items-center", "gap-sm"], ["name", "heart", 2, "color", "#e11d48", 3, "size"], [1, "section-title", "m-0"], [1, "chip", "bg-primary", "font-bold"], ["class", "text-center py-lg text-muted", 4, "ngIf"], ["class", "text-center py-md text-muted", 4, "ngIf"], ["class", "table-section", 4, "ngIf"], ["class", "modal-overlay", 3, "click.self", 4, "ngIf"], [1, "info-message", "mb-lg"], [1, "chip", 2, "cursor", "pointer", 3, "click"], [1, "chip-mini", 2, "margin-left", "4px"], [1, "flex", "justify-center", "p-lg"], [1, "material-icons", "animate-spin", "gradient-text", "text-lg"], [1, "card", "p-lg", "text-center", "gap-md", "items-center"], [1, "material-icons", "text-lg", 2, "opacity", "0.3"], [1, "font-bold"], [1, "text-muted"], [4, "ngIf"], ["class", "promethea-button", 3, "click", 4, "ngIf"], [1, "grid-cards"], ["class", "card promotion-card", 3, "expired-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card", "promotion-card"], [1, "flex", "justify-between", "items-center", "gap-sm", "mb-sm"], [1, "chip-mini"], [1, "card-title"], ["class", "text-muted text-mini mb-sm", 4, "ngIf"], [1, "discount-badge", "flex", "items-center", "justify-center", "p-sm", "rounded", "mb-sm", 2, "background", "color-mix(in srgb, var(--primary) 12%, transparent)"], [1, "font-bold", "text-md", "gradient-text"], [1, "text-mini", "text-muted", 2, "margin-left", "6px"], [1, "flex", "gap-sm", "items-center", "mb-sm"], [1, "material-icons", "text-mini", "text-muted"], [1, "text-mini", "text-muted"], ["class", "mb-sm", 4, "ngIf"], ["class", "flex items-center gap-sm mb-sm", 4, "ngIf"], [1, "card-footer", "flex", "gap-sm", "flex-wrap", "justify-between"], ["class", "promethea-button", "style", "flex: 1; font-size: var(--fs-mini)", 3, "click", 4, "ngIf"], ["class", "promethea-button ghost", "style", "flex: 1; font-size: var(--fs-mini)", 3, "click", 4, "ngIf"], ["class", "icon-button x-small", 3, "title", "disabled", "click", 4, "ngIf"], [1, "flex", "gap-sm"], ["title", "Statistiche", 1, "icon-button", "x-small", 3, "click"], ["title", "Duplica", 1, "icon-button", "x-small", 3, "click"], ["title", "Modifica", 1, "icon-button", "x-small", 3, "click"], ["title", "Elimina", 1, "icon-button", "x-small", 2, "color", "var(--secondary)", 3, "click"], [1, "text-muted", "text-mini", "mb-sm"], [1, "mb-sm"], [1, "flex", "justify-between", "text-mini", "text-muted", "mb-sm"], [1, "usage-bar"], [1, "usage-fill"], [1, "flex", "items-center", "gap-sm", "mb-sm"], [1, "promethea-button", 2, "flex", "1", "font-size", "var(--fs-mini)", 3, "click"], [1, "promethea-button", "ghost", 2, "flex", "1", "font-size", "var(--fs-mini)", 3, "click"], [1, "icon-button", "x-small", 3, "click", "title", "disabled"], [3, "name", "size"], [1, "text-center", "py-lg", "text-muted"], ["name", "users", 1, "mb-sm", 3, "size"], [1, "text-center", "py-md", "text-muted"], ["name", "loader", 3, "size"], [1, "table-section"], [1, "crm-table"], [4, "ngFor", "ngForOf"], ["name", "user", 1, "text-muted", 3, "size"], [1, "font-semibold"], [1, "modal-overlay", 3, "click.self"], [1, "modal-container", "modal-lg"], [1, "modal-header"], [1, "material-icons", "gradient-text"], [1, "section-title"], [1, "icon-button", 3, "click"], [1, "form-card"], [1, "font-bold", "mb-sm", "flex", "items-center", "gap-sm"], [1, "material-icons", "text-mini", "gradient-text"], [1, "form-row"], [1, "form-group"], [1, "standard-label"], ["type", "text", "placeholder", "Es. Sconto Aperitivo Serale", "maxlength", "80", 3, "ngModelChange", "ngModel"], ["placeholder", "Testo che vedr\xE0 il cliente", "rows", "2", 2, "min-height", "4rem", 3, "ngModelChange", "ngModel"], [1, "material-icons", "text-mini"], ["placeholder", "Solo per il tuo staff (non visibile al cliente)", "rows", "2", 2, "min-height", "4rem", 3, "ngModelChange", "ngModel"], [2, "border-color", "var(--smoke-1)", "margin", "var(--gap-md) 0"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "form-group", 4, "ngIf"], ["type", "number", "placeholder", "0 = nessun minimo", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Es. 100", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "1", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", "min", "0", "max", "100", 3, "ngModelChange", "ngModel"], ["value", "draft"], ["value", "active"], ["value", "paused"], [1, "form-group", 2, "justify-content", "center"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkbox-content"], [1, "modal-footer"], [1, "promethea-button", "ghost", 3, "click", "disabled"], [1, "promethea-button", 3, "click", "disabled"], ["class", "material-icons", 4, "ngIf"], ["class", "animate-spin", 4, "ngIf"], [3, "value"], ["type", "number", "placeholder", "Es. 15 \u2192 max \u20AC15 anche se % \xE8 alta", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel"], [1, "animate-spin"], [1, "modal-container", "modal-sm"], [1, "material-icons", 2, "color", "var(--secondary)"], [1, "card", "p-md", "gap-sm", 2, "background", "color-mix(in srgb, var(--secondary) 8%, transparent)"], [1, "text-muted", "mt-sm"], [1, "promethea-button", 2, "background", "var(--secondary)", 3, "click", "disabled"], [1, "modal-container", "modal-md"], [1, "font-bold", "mb-lg"], ["class", "grid-cards", "style", "grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))", 4, "ngIf"], ["class", "text-center p-lg", 4, "ngIf"], [1, "promethea-button", "ghost", 3, "click"], [1, "grid-cards", 2, "grid-template-columns", "repeat(auto-fit, minmax(140px, 1fr))"], [1, "card", "p-md", "text-center", "gap-sm", "items-center"], ["class", "card p-md text-center gap-sm items-center", 4, "ngIf"], [1, "text-center", "p-lg"]], template: function MarketingManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "lucide-angular", 4);
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "Totale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275element(10, "lucide-angular", 7);
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275text(12, "Attive ora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 3);
      \u0275\u0275element(16, "lucide-angular", 9);
      \u0275\u0275elementStart(17, "span", 5);
      \u0275\u0275text(18, "Bozze");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 6);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 3);
      \u0275\u0275element(22, "lucide-angular", 10);
      \u0275\u0275elementStart(23, "span", 5);
      \u0275\u0275text(24, "Sospese");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 11);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 3);
      \u0275\u0275element(28, "lucide-angular", 12);
      \u0275\u0275elementStart(29, "span", 5);
      \u0275\u0275text(30, "Scadute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 6);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, MarketingManagement_div_33_Template, 5, 1, "div", 13);
      \u0275\u0275elementStart(34, "div", 14)(35, "div", 15);
      \u0275\u0275template(36, MarketingManagement_button_36_Template, 4, 4, "button", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 17);
      \u0275\u0275listener("click", function MarketingManagement_Template_button_click_37_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementStart(38, "span", 18);
      \u0275\u0275text(39, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41, "Nuova promo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(42, MarketingManagement_div_42_Template, 3, 0, "div", 19)(43, MarketingManagement_div_43_Template, 9, 3, "div", 20)(44, MarketingManagement_div_44_Template, 2, 2, "div", 21);
      \u0275\u0275elementStart(45, "div", 22)(46, "div", 23)(47, "div", 24);
      \u0275\u0275element(48, "lucide-angular", 25);
      \u0275\u0275elementStart(49, "h3", 26);
      \u0275\u0275text(50, "Follower");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 27);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(53, MarketingManagement_div_53_Template, 4, 1, "div", 28)(54, MarketingManagement_div_54_Template, 2, 1, "div", 29)(55, MarketingManagement_div_55_Template, 12, 1, "div", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(56, MarketingManagement_div_56_Template, 130, 28, "div", 31)(57, MarketingManagement_div_57_Template, 28, 4, "div", 31)(58, MarketingManagement_div_58_Template, 20, 4, "div", 31);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.statusCounts["all"]);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.statusCounts["active"]);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.statusCounts["draft"]);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.statusCounts["paused"]);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.statusCounts["expired"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filterTabs);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading && ctx.promotions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredPromotions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredPromotions.length > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.followerCount);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingFollowers && ctx.followers.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoadingFollowers);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingFollowers && ctx.followers.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFormModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStatsModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, MaxValidator, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.usage-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: var(--smoke-1);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.usage-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--gradiente);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.usage-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      var(--secondary));\n}\n.expired-card[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  filter: grayscale(30%);\n}\n.discount-badge[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  min-height: 44px;\n}\n/*# sourceMappingURL=marketing-management.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarketingManagement, [{
    type: Component,
    args: [{ selector: "app-marketing-management", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<!-- ============================================================ -->\r
<!-- MARKETING COMPONENT - Gestione Promozioni Ristorante       -->\r
<!-- ============================================================ -->\r
\r
<div class="page-container">\r
\r
  <!-- \u2500\u2500\u2500 CONTENUTO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="p-lg" >\r
\r
    <!-- \u2500\u2500\u2500 STATS CARDS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="grid-cards mb-lg">\r
      <div class="card p-md items-center text-center gap-sm">\r
        <lucide-angular name="tag" [size]="24" style="color: var(--primary)"></lucide-angular>\r
        <span class="text-muted text-mini">Totale</span>\r
        <span class="font-bold text-md">{{ statusCounts['all'] }}</span>\r
      </div>\r
      <div class="card p-md items-center text-center gap-sm">\r
        <lucide-angular name="zap" [size]="24" style="color: #10b981"></lucide-angular>\r
        <span class="text-muted text-mini">Attive ora</span>\r
        <span class="font-bold text-md" style="color: #10b981">{{ statusCounts['active'] }}</span>\r
      </div>\r
      <div class="card p-md items-center text-center gap-sm">\r
        <lucide-angular name="file-text" [size]="24" style="color: var(--tertiary)"></lucide-angular>\r
        <span class="text-muted text-mini">Bozze</span>\r
        <span class="font-bold text-md">{{ statusCounts['draft'] }}</span>\r
      </div>\r
      <div class="card p-md items-center text-center gap-sm">\r
        <lucide-angular name="pause-circle" [size]="24" style="color: #f59e0b"></lucide-angular>\r
        <span class="text-muted text-mini">Sospese</span>\r
        <span class="font-bold text-md" style="color: #f59e0b">{{ statusCounts['paused'] }}</span>\r
      </div>\r
      <div class="card p-md items-center text-center gap-sm">\r
        <lucide-angular name="calendar-x" [size]="24" style="color: var(--text-muted)"></lucide-angular>\r
        <span class="text-muted text-mini">Scadute</span>\r
        <span class="font-bold text-md">{{ statusCounts['expired'] }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500\u2500 ERROR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div *ngIf="error" class="info-message mb-lg">\r
      <span class="material-icons">error_outline</span>\r
      <span>{{ error }}</span>\r
    </div>\r
    \r
    <!-- \u2500\u2500\u2500 FILTRO TAB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="flex justify-between gap-sm">\r
    <div class="flex flex-wrap gap-sm mb-lg">\r
      <button\r
        *ngFor="let tab of filterTabs"\r
        class="chip"\r
        [class.active]="activeFilter() === tab.key"\r
        (click)="setFilter(tab.key)"\r
        style="cursor: pointer">\r
        {{ tab.label }}\r
        <span class="chip-mini" style="margin-left: 4px">{{ statusCounts[tab.key] }}</span>\r
      </button>\r
    </div>\r
    <button class="promethea-button" (click)="openCreateModal()">\r
      <span class="material-icons">add</span>\r
      <span>Nuova promo</span>\r
    </button>\r
    </div>\r
\r
\r
    <!-- \u2500\u2500\u2500 LOADING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div *ngIf="loading && promotions.length === 0" class="flex justify-center p-lg">\r
      <span class="material-icons animate-spin gradient-text text-lg">refresh</span>\r
    </div>\r
\r
    <!-- \u2500\u2500\u2500 EMPTY STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div *ngIf="!loading && filteredPromotions.length === 0" class="card p-lg text-center gap-md items-center">\r
      <span class="material-icons text-lg" style="opacity: 0.3">campaign</span>\r
      <p class="font-bold">Nessuna promozione</p>\r
      <p class="text-muted">\r
        <ng-container *ngIf="activeFilter() === 'all'">\r
          Crea la tua prima promozione per iniziare!\r
        </ng-container>\r
        <ng-container *ngIf="activeFilter() !== 'all'">\r
          Nessuna promozione con stato "{{ $any(statusLabels)[activeFilter()]?.label }}"\r
        </ng-container>\r
      </p>\r
      <button *ngIf="activeFilter() === 'all'" class="promethea-button" (click)="openCreateModal()">\r
        <span class="material-icons">add</span>\r
        Crea promozione\r
      </button>\r
    </div>\r
\r
    <!-- \u2500\u2500\u2500 GRID PROMOZIONI \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="grid-cards" *ngIf="filteredPromotions.length > 0">\r
\r
      <div\r
        *ngFor="let promo of filteredPromotions; trackBy: trackById"\r
        class="card promotion-card"\r
        [class.expired-card]="isExpired(promo)">\r
\r
        <!-- Header card -->\r
        <div class="flex justify-between items-center gap-sm mb-sm">\r
\r
          <!-- Tipo badge -->\r
          <div class="flex items-center gap-sm">\r
            <span class="material-icons"\r
              [style.color]="typeLabels[promo.type].color">\r
              {{ typeLabels[promo.type].icon }}\r
            </span>\r
            <span class="chip-mini">{{ typeLabels[promo.type].label }}</span>\r
          </div>\r
\r
          <!-- Status badge -->\r
          <span [class]="statusLabels[promo.status].chipClass">\r
            {{ statusLabels[promo.status].label }}\r
          </span>\r
        </div>\r
\r
        <!-- Nome e descrizione -->\r
        <h3 class="card-title">{{ promo.name }}</h3>\r
        <p *ngIf="promo.description" class="text-muted text-mini mb-sm">\r
          {{ promo.description }}\r
        </p>\r
\r
        <!-- Valore sconto (in evidenza) -->\r
        <div class="discount-badge flex items-center justify-center p-sm rounded mb-sm"\r
          style="background: color-mix(in srgb, var(--primary) 12%, transparent)">\r
          <span class="font-bold text-md gradient-text">{{ formatDiscount(promo) }}</span>\r
          <span class="text-mini text-muted" style="margin-left: 6px">\r
            su {{ targetLabels[promo.target] }}\r
          </span>\r
        </div>\r
\r
        <!-- Validit\xE0 -->\r
        <div class="flex gap-sm items-center mb-sm">\r
          <span class="material-icons text-mini text-muted">event</span>\r
          <span class="text-mini text-muted">\r
            {{ formatDate(promo.valid_from) }} \u2192 {{ formatDate(promo.valid_until) }}\r
          </span>\r
        </div>\r
\r
        <!-- Utilizzi / Progress bar -->\r
        <div class="mb-sm" *ngIf="promo.max_uses_total">\r
          <div class="flex justify-between text-mini text-muted mb-sm">\r
            <span>Utilizzi</span>\r
            <span>{{ promo.current_uses }} / {{ promo.max_uses_total }}</span>\r
          </div>\r
          <div class="usage-bar">\r
            <div class="usage-fill"\r
              [style.width.%]="getUsagePercent(promo)"\r
              [class.usage-danger]="getUsagePercent(promo) >= 90">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="!promo.max_uses_total" class="flex items-center gap-sm mb-sm">\r
          <span class="material-icons text-mini text-muted">all_inclusive</span>\r
          <span class="text-mini text-muted">Utilizzi: {{ promo.current_uses }} (illimitato)</span>\r
        </div>\r
\r
        <!-- Soglia minima ordine -->\r
        <div *ngIf="promo.min_order_amount > 0" class="flex items-center gap-sm mb-sm">\r
          <span class="material-icons text-mini text-muted">shopping_cart</span>\r
          <span class="text-mini text-muted">Min. ordine: \u20AC{{ promo.min_order_amount }}</span>\r
        </div>\r
\r
        <!-- Footer azioni -->\r
        <div class="card-footer flex gap-sm flex-wrap justify-between">\r
\r
          <!-- Pubblica (solo se bozza) -->\r
          <button\r
            *ngIf="promo.status === 'draft'"\r
            class="promethea-button"\r
            style="flex: 1; font-size: var(--fs-mini)"\r
            (click)="publishDraft(promo)">\r
            <span class="material-icons">rocket_launch</span>\r
            Pubblica\r
          </button>\r
          <!-- Attiva / Sospendi (se non bozza/scaduta/archiviata) -->\r
          <button\r
            *ngIf="promo.status === 'active' || promo.status === 'paused'"\r
            class="promethea-button ghost"\r
            style="flex: 1; font-size: var(--fs-mini)"\r
            (click)="toggleStatus(promo)">\r
            <span class="material-icons">\r
              {{ promo.status === 'active' ? 'pause' : 'play_arrow' }}\r
            </span>\r
            {{ promo.status === 'active' ? 'Sospendi' : 'Riattiva' }}\r
          </button>\r
          <!-- Bottone notifica push \u2014 solo per promozioni attive -->\r
          <button\r
            *ngIf="promo.status === 'active'"\r
            class="icon-button x-small"\r
            [title]="notifiedPromotions.has(promo.id) ? 'Notifica gi\xE0 inviata' : \r
                    daysUntilNext > 0 ? 'Limite settimanale: riprova tra ' + daysUntilNext + ' giorni' : \r
                    'Invia notifica ai follower'"\r
            [disabled]="!canSendNotification(promo) || sendingNotification === promo.id"\r
            (click)="sendNotification(promo)">\r
            <lucide-angular\r
              [name]="notifiedPromotions.has(promo.id) ? 'bell-off' : 'bell'"\r
              [size]="18"\r
              [style.color]="notifiedPromotions.has(promo.id) ? 'var(--text-muted)' : \r
                            daysUntilNext > 0 ? '#f59e0b' : '#10b981'">\r
            </lucide-angular>\r
          </button>\r
          <!-- Azioni icone -->\r
          <div class="flex gap-sm">\r
            <button class="icon-button x-small" title="Statistiche" (click)="openStatsModal(promo)">\r
              <span class="material-icons">bar_chart</span>\r
            </button>\r
            <button class="icon-button x-small" title="Duplica" (click)="duplicate(promo)">\r
              <span class="material-icons">content_copy</span>\r
            </button>\r
            <button class="icon-button x-small" title="Modifica" (click)="openEditModal(promo)">\r
              <span class="material-icons">edit</span>\r
            </button>\r
            <button class="icon-button x-small" title="Elimina"\r
              style="color: var(--secondary)"\r
              (click)="openDeleteModal(promo)">\r
              <span class="material-icons">delete_outline</span>\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
\r
    </div><!-- /grid-cards -->\r
\r
    <!-- \u2500\u2500\u2500 FOLLOWER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="card p-md mt-lg">\r
      <div class="flex items-center justify-between mb-md">\r
        <div class="flex items-center gap-sm">\r
          <lucide-angular name="heart" [size]="22" style="color: #e11d48"></lucide-angular>\r
          <h3 class="section-title m-0">Follower</h3>\r
          <span class="chip bg-primary font-bold">{{ followerCount }}</span>\r
        </div>\r
      </div>\r
\r
      <!-- Stato vuoto -->\r
      <div *ngIf="!isLoadingFollowers && followers.length === 0" class="text-center py-lg text-muted">\r
        <lucide-angular name="users" [size]="40" class="mb-sm"></lucide-angular>\r
        <p>Nessun follower ancora. Condividi le tue promozioni per crescere!</p>\r
      </div>\r
\r
      <!-- Loading -->\r
      <div *ngIf="isLoadingFollowers" class="text-center py-md text-muted">\r
        <lucide-angular name="loader" [size]="24"></lucide-angular>\r
      </div>\r
\r
      <!-- Tabella -->\r
      <div *ngIf="!isLoadingFollowers && followers.length > 0" class="table-section">\r
        <table class="crm-table">\r
          <thead>\r
            <tr>\r
              <th>Nome</th>\r
              <th>Email</th>\r
              <th>Segue dal</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let f of followers">\r
              <td>\r
                <div class="flex items-center gap-sm">\r
                  <lucide-angular name="user" [size]="16" class="text-muted"></lucide-angular>\r
                  <span class="font-semibold">\r
                    {{ f.users?.first_name || '\u2014' }} {{ f.users?.last_name || '' }}\r
                  </span>\r
                </div>\r
              </td>\r
              <td class="text-muted">{{ f.users?.email || '\u2014' }}</td>\r
              <td class="text-muted text-mini">{{ f.followed_at | date:'dd/MM/yyyy' }}</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ============================================================ -->\r
<!--  MODAL: CREA / MODIFICA PROMOZIONE                          -->\r
<!-- ============================================================ -->\r
<div class="modal-overlay" *ngIf="showFormModal" (click.self)="closeFormModal()">\r
  <div class="modal-container modal-lg">\r
\r
    <!-- Header -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-sm">\r
        <span class="material-icons gradient-text">{{ selectedPromotion ? 'edit' : 'add_circle' }}</span>\r
        <span class="section-title">\r
          {{ selectedPromotion ? 'Modifica promozione' : 'Nuova promozione' }}\r
        </span>\r
      </div>\r
      <button class="icon-button" (click)="closeFormModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Form body -->\r
    <div class="form-card">\r
\r
      <!-- \u2500\u2500 SEZIONE 1: Identit\xE0 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <p class="font-bold mb-sm flex items-center gap-sm">\r
        <span class="material-icons text-mini gradient-text">info</span>\r
        Identit\xE0\r
      </p>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">Nome promozione *</label>\r
          <input type="text" [(ngModel)]="formData.name"\r
            placeholder="Es. Sconto Aperitivo Serale"\r
            maxlength="80">\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">Descrizione pubblica</label>\r
          <textarea [(ngModel)]="formData.description"\r
            placeholder="Testo che vedr\xE0 il cliente" rows="2"\r
            style="min-height: 4rem"></textarea>\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons text-mini">lock</span>\r
            Nota interna\r
          </label>\r
          <textarea [(ngModel)]="formData.internal_note"\r
            placeholder="Solo per il tuo staff (non visibile al cliente)" rows="2"\r
            style="min-height: 4rem"></textarea>\r
        </div>\r
      </div>\r
\r
      <hr style="border-color: var(--smoke-1); margin: var(--gap-md) 0">\r
\r
      <!-- \u2500\u2500 SEZIONE 2: Tipo e Valore \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <p class="font-bold mb-sm flex items-center gap-sm">\r
        <span class="material-icons text-mini gradient-text">percent</span>\r
        Tipo e Valore\r
      </p>\r
\r
      <div class="form-row">\r
\r
        <!-- Tipo promo -->\r
        <div class="form-group">\r
          <label class="standard-label">Tipo promozione</label>\r
          <select [(ngModel)]="formData.type">\r
            <option *ngFor="let t of promotionTypes" [value]="t">\r
              {{ typeLabels[t].label }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- Target -->\r
        <div class="form-group">\r
          <label class="standard-label">Applicata su</label>\r
          <select [(ngModel)]="formData.target">\r
            <option *ngFor="let tgt of discountTargets" [value]="tgt">\r
              {{ targetLabels[tgt] }}\r
            </option>\r
          </select>\r
        </div>\r
\r
      </div>\r
\r
      <div class="form-row">\r
\r
        <!-- Valore sconto -->\r
        <div class="form-group">\r
          <label class="standard-label">\r
            Valore sconto\r
            <span class="chip-mini">{{ discountSuffix }}</span>\r
          </label>\r
          <input type="number" [(ngModel)]="formData.discount_value"\r
            [placeholder]="formData.type === 'percentage' ? '10' : '5.00'"\r
            min="0" step="0.01">\r
        </div>\r
\r
        <!-- Cap massimo (solo se %) -->\r
        <div class="form-group" *ngIf="showMaxCap">\r
          <label class="standard-label">\r
            Sconto massimo \u20AC\r
            <span class="text-muted text-mini">(opzionale)</span>\r
          </label>\r
          <input type="number" [(ngModel)]="formData.max_discount_amount"\r
            placeholder="Es. 15 \u2192 max \u20AC15 anche se % \xE8 alta"\r
            min="0" step="0.01">\r
        </div>\r
\r
        <!-- Soglia ordine minimo -->\r
        <div class="form-group">\r
          <label class="standard-label">Ordine minimo \u20AC</label>\r
          <input type="number" [(ngModel)]="formData.min_order_amount"\r
            placeholder="0 = nessun minimo" min="0" step="0.01">\r
        </div>\r
\r
      </div>\r
\r
      <hr style="border-color: var(--smoke-1); margin: var(--gap-md) 0">\r
\r
      <!-- \u2500\u2500 SEZIONE 3: Validit\xE0 e Limiti \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <p class="font-bold mb-sm flex items-center gap-sm">\r
        <span class="material-icons text-mini gradient-text">event</span>\r
        Validit\xE0 e Limiti\r
      </p>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">Data inizio *</label>\r
          <input type="date" [(ngModel)]="formData.valid_from">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">\r
            Data fine\r
            <span class="text-muted text-mini">(lascia vuoto = nessuna scadenza)</span>\r
          </label>\r
          <input type="date" [(ngModel)]="formData.valid_until">\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">\r
            Utilizzi totali\r
            <span class="text-muted text-mini">(vuoto = illimitato)</span>\r
          </label>\r
          <input type="number" [(ngModel)]="formData.max_uses_total"\r
            placeholder="Es. 100" min="1">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Max per cliente</label>\r
          <input type="number" [(ngModel)]="formData.max_uses_per_customer"\r
            placeholder="1" min="1">\r
        </div>\r
      </div>\r
\r
      <hr style="border-color: var(--smoke-1); margin: var(--gap-md) 0">\r
\r
      <!-- \u2500\u2500 SEZIONE 4: Regole e Visibilit\xE0 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <p class="font-bold mb-sm flex items-center gap-sm">\r
        <span class="material-icons text-mini gradient-text">tune</span>\r
        Regole e Visibilit\xE0\r
      </p>\r
\r
      <div class="form-row">\r
\r
        <!-- Stacking policy -->\r
        <div class="form-group">\r
          <label class="standard-label">Compatibilit\xE0 con altri sconti</label>\r
          <select [(ngModel)]="formData.stacking">\r
            <option *ngFor="let s of stackingPolicies" [value]="s">\r
              {{ stackingLabels[s].label }} \u2014 {{ stackingLabels[s].description }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- Priorit\xE0 -->\r
        <div class="form-group">\r
          <label class="standard-label">\r
            Priorit\xE0\r
            <span class="text-muted text-mini">(pi\xF9 alto = vince in caso di conflitto)</span>\r
          </label>\r
          <input type="number" [(ngModel)]="formData.priority"\r
            placeholder="0" min="0" max="100">\r
        </div>\r
\r
      </div>\r
\r
      <div class="form-row">\r
\r
        <!-- Stato -->\r
        <div class="form-group">\r
          <label class="standard-label">Stato iniziale</label>\r
          <select [(ngModel)]="formData.status">\r
            <option value="draft">Bozza (non ancora attiva)</option>\r
            <option value="active">Attiva subito</option>\r
            <option value="paused">Sospesa</option>\r
          </select>\r
        </div>\r
\r
        <!-- Visibilit\xE0 pubblica -->\r
        <div class="form-group" style="justify-content: center">\r
          <label class="checkbox-label">\r
            <input type="checkbox" [(ngModel)]="formData.is_public">\r
            <div class="checkbox-content">\r
              <strong>Visibile ai clienti</strong>\r
              <span class="text-muted">La promozione apparir\xE0 nel men\xF9 pubblico</span>\r
            </div>\r
          </label>\r
        </div>\r
\r
      </div>\r
\r
    </div><!-- /form-card -->\r
\r
    <!-- Footer modal -->\r
    <div class="modal-footer">\r
      <button class="promethea-button ghost" (click)="closeFormModal()" [disabled]="isSaving">\r
        Annulla\r
      </button>\r
      <button class="promethea-button"\r
        (click)="savePromotion()"\r
        [disabled]="isSaving || !formData.name.trim()">\r
        <span class="material-icons" *ngIf="isSaving">refresh</span>\r
        <span class="animate-spin" *ngIf="isSaving">loading...</span>\r
        <ng-container *ngIf="!isSaving">\r
          <span class="material-icons">{{ selectedPromotion ? 'save' : 'add_circle' }}</span>\r
          {{ selectedPromotion ? 'Salva modifiche' : 'Crea promozione' }}\r
        </ng-container>\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
\r
<!-- ============================================================ -->\r
<!--  MODAL: CONFERMA ELIMINA                                     -->\r
<!-- ============================================================ -->\r
<div class="modal-overlay" *ngIf="showDeleteModal" (click.self)="closeDeleteModal()">\r
  <div class="modal-container modal-sm">\r
\r
    <div class="modal-header">\r
      <div class="flex items-center gap-sm">\r
        <span class="material-icons" style="color: var(--secondary)">delete_forever</span>\r
        <span class="section-title">Elimina promozione</span>\r
      </div>\r
      <button class="icon-button" (click)="closeDeleteModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <div class="form-card">\r
      <p class="mb-sm">Stai per eliminare:</p>\r
      <div class="card p-md gap-sm" style="background: color-mix(in srgb, var(--secondary) 8%, transparent)">\r
        <span class="font-bold">{{ selectedPromotion?.name }}</span>\r
        <span class="text-muted text-mini">{{ formatDiscount(selectedPromotion!) }}</span>\r
      </div>\r
      <p class="text-muted mt-sm">\r
        Questa azione \xE8 irreversibile. Gli utilizzi gi\xE0 registrati non verranno cancellati.\r
      </p>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button class="promethea-button ghost" (click)="closeDeleteModal()" [disabled]="isSaving">\r
        Annulla\r
      </button>\r
      <button class="promethea-button"\r
        style="background: var(--secondary)"\r
        (click)="confirmDelete()"\r
        [disabled]="isSaving">\r
        <span class="material-icons">delete_forever</span>\r
        Elimina definitivamente\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
\r
<!-- ============================================================ -->\r
<!--  MODAL: STATISTICHE PROMOZIONE                              -->\r
<!-- ============================================================ -->\r
<div class="modal-overlay" *ngIf="showStatsModal" (click.self)="closeStatsModal()">\r
  <div class="modal-container modal-md">\r
\r
    <div class="modal-header">\r
      <div class="flex items-center gap-sm">\r
        <span class="material-icons gradient-text">bar_chart</span>\r
        <span class="section-title">Statistiche</span>\r
      </div>\r
      <button class="icon-button" (click)="closeStatsModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <div class="form-card">\r
\r
      <p class="font-bold mb-lg">{{ selectedPromotion?.name }}</p>\r
\r
      <!-- Loading stats -->\r
      <div *ngIf="loadingStats" class="flex justify-center p-lg">\r
        <span class="material-icons animate-spin gradient-text text-lg">refresh</span>\r
      </div>\r
\r
      <!-- Stats data -->\r
      <div *ngIf="!loadingStats && selectedStats" class="grid-cards"\r
        style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))">\r
\r
        <div class="card p-md text-center gap-sm items-center">\r
          <span class="material-icons gradient-text">receipt_long</span>\r
          <span class="text-muted text-mini">Utilizzi totali</span>\r
          <span class="font-bold text-md">{{ selectedStats.total_uses }}</span>\r
        </div>\r
\r
        <div class="card p-md text-center gap-sm items-center">\r
          <span class="material-icons gradient-text">savings</span>\r
          <span class="text-muted text-mini">Sconto erogato</span>\r
          <span class="font-bold text-md">\u20AC{{ selectedStats.total_discount_given | number:'1.2-2' }}</span>\r
        </div>\r
\r
        <div class="card p-md text-center gap-sm items-center">\r
          <span class="material-icons gradient-text">shopping_basket</span>\r
          <span class="text-muted text-mini">Scontrino medio</span>\r
          <span class="font-bold text-md">\u20AC{{ selectedStats.avg_order_value | number:'1.2-2' }}</span>\r
        </div>\r
\r
        <div class="card p-md text-center gap-sm items-center"\r
          *ngIf="selectedPromotion?.max_uses_total">\r
          <span class="material-icons gradient-text">donut_large</span>\r
          <span class="text-muted text-mini">Saturazione</span>\r
          <span class="font-bold text-md">{{ getUsagePercent(selectedPromotion!) }}%</span>\r
        </div>\r
\r
      </div>\r
\r
      <!-- No data -->\r
      <div *ngIf="!loadingStats && !selectedStats" class="text-center p-lg">\r
        <span class="material-icons text-lg" style="opacity: 0.3">bar_chart</span>\r
        <p class="text-muted mt-sm">Nessun utilizzo registrato ancora</p>\r
      </div>\r
\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button class="promethea-button ghost" (click)="closeStatsModal()">\r
        Chiudi\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/marketing-management/marketing-management.css */\n.usage-bar {\n  width: 100%;\n  height: 6px;\n  background: var(--smoke-1);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.usage-fill {\n  height: 100%;\n  background: var(--gradiente);\n  border-radius: 999px;\n  transition: width 0.4s ease;\n}\n.usage-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      var(--secondary));\n}\n.expired-card {\n  opacity: 0.65;\n  filter: grayscale(30%);\n}\n.discount-badge {\n  border-radius: 12px;\n  min-height: 44px;\n}\n/*# sourceMappingURL=marketing-management.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarketingManagement, { className: "MarketingManagement", filePath: "src/app/restaurant/marketing-management/marketing-management.ts", lineNumber: 23 });
})();
export {
  MarketingManagement
};
//# sourceMappingURL=chunk-7SC6W675.js.map
