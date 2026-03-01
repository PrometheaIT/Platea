import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import {
  CommonModule,
  NgIf
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate
} from "./chunk-T3MDKIO5.js";

// src/app/shared/header/header.ts
function Header_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function Header_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu.emit());
    });
    \u0275\u0275element(1, "lucide-angular", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 24);
  }
}
var Header = class _Header {
  title = "";
  icon = "layout-dashboard";
  // icona di default
  showToggle = false;
  // true solo su mobile e sidebar chiusa
  toggleMenu = new EventEmitter();
  // input per personalizzazione avanzata
  logoUrl = null;
  subtitle = null;
  coverImageUrl = null;
  onLogoError(event) {
    event.target.style.display = "none";
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], inputs: { title: "title", icon: "icon", showToggle: "showToggle", logoUrl: "logoUrl", subtitle: "subtitle", coverImageUrl: "coverImageUrl" }, outputs: { toggleMenu: "toggleMenu" }, decls: 7, vars: 3, consts: [[1, "section-header"], [1, "flex", "gap-lg", "items-center"], ["class", "icon-button mobile-toggle sidebar-toggle", "aria-label", "Apri menu", 3, "click", 4, "ngIf"], [1, "flex", "gap-md", "items-center"], [3, "name"], [1, "section-title"], ["aria-label", "Apri menu", 1, "icon-button", "mobile-toggle", "sidebar-toggle", 3, "click"], ["name", "menu", 3, "size"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, Header_button_2_Template, 2, 1, "button", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "lucide-angular", 4);
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showToggle);
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [LucideAngularModule, CommonModule], template: '<div class="section-header">\r\n  <div class="flex gap-lg items-center">\r\n    <!-- Toggle menu (visibile solo su mobile quando sidebar \xE8 chiusa) --> \r\n<button \r\n  *ngIf="showToggle" \r\n  class="icon-button mobile-toggle sidebar-toggle" \r\n  (click)="toggleMenu.emit()"\r\n  aria-label="Apri menu">\r\n  <lucide-angular name="menu" [size]="24"></lucide-angular>\r\n</button>\r\n    <div class="flex gap-md items-center">\r\n    <!-- Icona della pagina -->\r\n    <lucide-angular [name]="icon"></lucide-angular>\r\n\r\n    <!-- Titolo della pagina -->\r\n    <h1 class="section-title">{{ title }}</h1>\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], null, { title: [{
    type: Input
  }], icon: [{
    type: Input
  }], showToggle: [{
    type: Input
  }], toggleMenu: [{
    type: Output
  }], logoUrl: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], coverImageUrl: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/header/header.ts", lineNumber: 11 });
})();

export {
  Header
};
//# sourceMappingURL=chunk-MA2TXP7X.js.map
