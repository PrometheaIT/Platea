import {
  Router
} from "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-T3MDKIO5.js";
import "./chunk-TWWAJFRB.js";

// src/app/restaurant/staff-management/no-permission/no-permission.ts
var NoPermission = class _NoPermission {
  router;
  constructor(router) {
    this.router = router;
  }
  logout() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function NoPermission_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoPermission)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoPermission, selectors: [["app-no-permission"]], decls: 17, vars: 0, consts: [[1, "page-container"], [1, "card", "text-center"], [1, "p-lg", "gap-md"], [1, "material-icons", "text-lg", "mb-md"], [1, "text-lg", "font-semibold", "mb-md"], [1, "text-muted", "p-sm"], [1, "text-muted", "p-sm", "mb-lg"], [1, "logomedio"], ["src", "logoristoapp.png"], [1, "promethea-button", 3, "click"], [1, "material-icons"]], template: function NoPermission_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "block");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Nessun Permesso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Non hai i permessi necessari per accedere a nessuna funzionalit\xE0 del sistema. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, " Contatta l'amministratore del ristorante per richiedere i permessi appropriati. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275element(12, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function NoPermission_Template_button_click_13_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Esci ");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=no-permission.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPermission, [{
    type: Component,
    args: [{ selector: "app-no-permission", standalone: true, imports: [CommonModule], template: `
    <div class="page-container">
      <div class="card text-center">
        <div class="p-lg gap-md">
          <span class="material-icons text-lg mb-md">block</span>
          <h2 class="text-lg font-semibold mb-md">Nessun Permesso</h2>
          <p class="text-muted p-sm">
            Non hai i permessi necessari per accedere a nessuna funzionalit\xE0 del sistema.
          </p>
          <p class="text-muted p-sm mb-lg">
            Contatta l'amministratore del ristorante per richiedere i permessi appropriati.
          </p>
          <div class="logomedio">
            <img src="logoristoapp.png">
          </div>
          <button (click)="logout()" class="promethea-button">
            <span class="material-icons">logout</span>
            Esci
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;b53959b55e93519777d5e13e5fc8c99f21f1f4dbe5ae9d8f8adc4a47ad7b8c81;E:/Dati/Documenti/PROMETHEA/ristoranteapp/src/app/restaurant/staff-management/no-permission/no-permission.ts */\n.page-container {\n  padding: 2rem;\n  min-height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=no-permission.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoPermission, { className: "NoPermission", filePath: "src/app/restaurant/staff-management/no-permission/no-permission.ts", lineNumber: 42 });
})();
export {
  NoPermission
};
//# sourceMappingURL=chunk-ZFU5FP7A.js.map
