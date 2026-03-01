import {
  PromotionNotificationService
} from "./chunk-V3PCHGYC.js";
import "./chunk-QSRXFII6.js";
import "./chunk-XTSNHNKL.js";
import {
  AuthService
} from "./chunk-77JDNC7M.js";
import "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/customer/user-promotions/user-promotions.component.ts
var _forTrack0 = ($index, $item) => $item.notification_id;
function UserPromotionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 6);
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4, "Caricamento promozioni...");
    \u0275\u0275elementEnd()();
  }
}
function UserPromotionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 8);
    \u0275\u0275text(2, "error");
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
function UserPromotionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 8);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "Non hai ancora ricevuto promozioni.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Segui i tuoi ristoranti preferiti per ricevere offerte esclusive!");
    \u0275\u0275elementEnd()();
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r3.restaurant.logo_url, \u0275\u0275sanitizeUrl);
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r3.promotion.image_url, \u0275\u0275sanitizeUrl);
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("min. ", item_r3.promotion.min_order_amount, "\u20AC");
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" al ", \u0275\u0275pipeBind2(1, 1, item_r3.promotion.valid_until, "dd/MM/yyyy"), " ");
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " a tempo indeterminato ");
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Scaduta");
    \u0275\u0275elementEnd();
  }
}
function UserPromotionsComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275template(3, UserPromotionsComponent_Conditional_5_For_2_Conditional_3_Template, 1, 1, "img", 12)(4, UserPromotionsComponent_Conditional_5_For_2_Conditional_4_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserPromotionsComponent_Conditional_5_For_2_Conditional_7_Template, 1, 1, "img", 14);
    \u0275\u0275elementStart(8, "h3", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, UserPromotionsComponent_Conditional_5_For_2_Conditional_16_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 21)(18, "span", 22);
    \u0275\u0275text(19, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275template(23, UserPromotionsComponent_Conditional_5_For_2_Conditional_23_Template, 2, 4)(24, UserPromotionsComponent_Conditional_5_For_2_Conditional_24_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, UserPromotionsComponent_Conditional_5_For_2_Conditional_25_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 24)(27, "span", 25);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275listener("click", function UserPromotionsComponent_Conditional_5_For_2_Template_button_click_30_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.usePromotion(item_r3.promotion));
    });
    \u0275\u0275elementStart(31, "span", 8);
    \u0275\u0275text(32, "sell");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Usa promozione ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r3.restaurant.logo_url ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.restaurant.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.promotion.image_url ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.promotion.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.promotion.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatDiscount(item_r3.promotion));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.promotion.min_order_amount ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Valida dal ", \u0275\u0275pipeBind2(22, 12, item_r3.promotion.valid_from, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r3.promotion.valid_until ? 23 : 24);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isExpired(item_r3.promotion.valid_until) ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Ricevuta il ", \u0275\u0275pipeBind2(29, 15, item_r3.sent_at, "dd/MM/yyyy"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isExpired(item_r3.promotion.valid_until));
  }
}
function UserPromotionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, UserPromotionsComponent_Conditional_5_For_2_Template, 34, 18, "div", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.promotions);
  }
}
var UserPromotionsComponent = class _UserPromotionsComponent {
  promoNotifService = inject(PromotionNotificationService);
  authService = inject(AuthService);
  promotions = [];
  loading = false;
  error = null;
  ngOnInit() {
    return __async(this, null, function* () {
      if (!this.authService.currentUserValue) {
        this.error = "Devi essere autenticato";
        return;
      }
      yield this.loadPromotions();
    });
  }
  loadPromotions() {
    return __async(this, null, function* () {
      this.loading = true;
      this.error = null;
      try {
        this.promotions = yield this.promoNotifService.getMyPromotions();
      } catch (err) {
        this.error = err.message || "Errore nel caricamento delle promozioni";
        console.error(err);
      } finally {
        this.loading = false;
      }
    });
  }
  formatDiscount(promotion) {
    if (promotion.type === "percentage") {
      let text = `${promotion.discount_value}%`;
      if (promotion.max_discount_amount) {
        text += ` (max ${promotion.max_discount_amount}\u20AC)`;
      }
      return text;
    } else {
      return `${promotion.discount_value}\u20AC`;
    }
  }
  isExpired(validUntil) {
    if (!validUntil)
      return false;
    return new Date(validUntil) < /* @__PURE__ */ new Date();
  }
  usePromotion(promotion) {
    console.log("Usa promozione", promotion);
  }
  static \u0275fac = function UserPromotionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserPromotionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserPromotionsComponent, selectors: [["app-user-promotions"]], decls: 6, vars: 4, consts: [[1, "page-container"], [1, "p-lg"], [1, "flex", "justify-center", "p-lg"], [1, "info-message"], [1, "empty-state", "p-lg"], [1, "grid-cards"], [1, "material-icons", "animate-spin"], [1, "text-muted"], [1, "material-icons"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-sm"], [1, "avatartondo", "small"], ["alt", "logo", 1, "avatar-img", 3, "src"], [1, "font-bold"], ["alt", "promo", 1, "w-100", "rounded", "mb-sm", 2, "max-height", "150px", "object-fit", "cover", 3, "src"], [1, "card-title"], [1, "text-muted", "text-mini", "mb-sm"], [1, "flex", "flex-col", "gap-mini", "mb-sm"], [1, "flex", "items-center", "gap-sm"], [1, "chip"], [1, "chip-mini"], [1, "flex", "items-center", "gap-sm", "text-mini"], [1, "material-icons", "text-muted"], [1, "chip", "warning"], [1, "card-footer"], [1, "text-mini", "text-muted"], [1, "promethea-button", 3, "click", "disabled"]], template: function UserPromotionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, UserPromotionsComponent_Conditional_2_Template, 5, 0, "div", 2)(3, UserPromotionsComponent_Conditional_3_Template, 5, 1, "div", 3)(4, UserPromotionsComponent_Conditional_4_Template, 7, 0, "div", 4)(5, UserPromotionsComponent_Conditional_5_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.error && ctx.promotions.length === 0 ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.promotions.length > 0 ? 5 : -1);
    }
  }, dependencies: [CommonModule, DatePipe], styles: ["\n\n.avatartondo.small[_ngcontent-%COMP%] {\n  width: calc(var(--fs-sm) * 2);\n  height: calc(var(--fs-sm) * 2);\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--gap-sm);\n}\n/*# sourceMappingURL=user-promotions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPromotionsComponent, [{
    type: Component,
    args: [{ selector: "app-user-promotions", standalone: true, imports: [CommonModule], template: `<div class="page-container">\r
\r
  <div class="p-lg">\r
    <!-- Stato di caricamento -->\r
    @if (loading) {\r
      <div class="flex justify-center p-lg">\r
        <span class="material-icons animate-spin">autorenew</span>\r
        <span class="text-muted">Caricamento promozioni...</span>\r
      </div>\r
    }\r
\r
    <!-- Messaggio di errore -->\r
    @if (error) {\r
      <div class="info-message">\r
        <span class="material-icons">error</span>\r
        <span>{{ error }}</span>\r
      </div>\r
    }\r
\r
    <!-- Nessuna promozione -->\r
    @if (!loading && !error && promotions.length === 0) {\r
      <div class="empty-state p-lg">\r
        <span class="material-icons">inbox</span>\r
        <p class="text-muted">Non hai ancora ricevuto promozioni.</p>\r
        <p>Segui i tuoi ristoranti preferiti per ricevere offerte esclusive!</p>\r
      </div>\r
    }\r
\r
    <!-- Griglia delle promozioni -->\r
    @if (!loading && promotions.length > 0) {\r
      <div class="grid-cards">\r
        @for (item of promotions; track item.notification_id) {\r
          <div class="card">\r
            <!-- Ristorante (avatar + nome) -->\r
            <div class="flex items-center gap-sm mb-sm">\r
              <div class="avatartondo small">\r
                @if (item.restaurant.logo_url) {\r
                  <img [src]="item.restaurant.logo_url" alt="logo" class="avatar-img">\r
                } @else {\r
                  <span class="material-icons">restaurant</span>\r
                }\r
              </div>\r
              <span class="font-bold">{{ item.restaurant.name }}</span>\r
            </div>\r
\r
            <!-- Immagine promozione (se presente) -->\r
            @if (item.promotion.image_url) {\r
              <img [src]="item.promotion.image_url" alt="promo" class="w-100 rounded mb-sm" style="max-height: 150px; object-fit: cover;">\r
            }\r
\r
            <!-- Dettagli promozione -->\r
            <h3 class="card-title">{{ item.promotion.name }}</h3>\r
            <p class="text-muted text-mini mb-sm">{{ item.promotion.description }}</p>\r
\r
            <div class="flex flex-col gap-mini mb-sm">\r
              <div class="flex items-center gap-sm">\r
                <span class="chip">{{ formatDiscount(item.promotion) }}</span>\r
                @if (item.promotion.min_order_amount) {\r
                  <span class="chip-mini">min. {{ item.promotion.min_order_amount }}\u20AC</span>\r
                }\r
              </div>\r
              <div class="flex items-center gap-sm text-mini">\r
                <span class="material-icons text-muted">event</span>\r
                <span>\r
                  Valida dal {{ item.promotion.valid_from | date:'dd/MM/yyyy' }}\r
                  @if (item.promotion.valid_until) {\r
                    al {{ item.promotion.valid_until | date:'dd/MM/yyyy' }}\r
                  } @else {\r
                    a tempo indeterminato\r
                  }\r
                </span>\r
              </div>\r
              @if (isExpired(item.promotion.valid_until)) {\r
                <span class="chip warning">Scaduta</span>\r
              }\r
            </div>\r
\r
            <!-- Footer: data ricezione + bottone azione -->\r
            <div class="card-footer">\r
              <span class="text-mini text-muted">Ricevuta il {{ item.sent_at | date:'dd/MM/yyyy' }}</span>\r
              <button class="promethea-button" (click)="usePromotion(item.promotion)" [disabled]="isExpired(item.promotion.valid_until)">\r
                <span class="material-icons">sell</span>\r
                Usa promozione\r
              </button>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    }\r
  </div>\r
</div>`, styles: ["/* src/app/customer/user-promotions/user-promotions.component.css */\n.avatartondo.small {\n  width: calc(var(--fs-sm) * 2);\n  height: calc(var(--fs-sm) * 2);\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--gap-sm);\n}\n/*# sourceMappingURL=user-promotions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserPromotionsComponent, { className: "UserPromotionsComponent", filePath: "src/app/customer/user-promotions/user-promotions.component.ts", lineNumber: 36 });
})();
export {
  UserPromotionsComponent
};
//# sourceMappingURL=chunk-BYSJSRNO.js.map
