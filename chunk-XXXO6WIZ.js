import {
  CommonModule,
  NgIf
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-T3MDKIO5.js";

// src/app/shared/loader/loader.ts
function Loader_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "span", 8);
    \u0275\u0275text(8, "P");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "r");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12, "e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 8);
    \u0275\u0275text(14, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16, "a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18, "r");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 8);
    \u0275\u0275text(20, "a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 8);
    \u0275\u0275text(22, "n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 8);
    \u0275\u0275text(24, "d");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 8);
    \u0275\u0275text(26, "o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 8);
    \u0275\u0275text(28, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 8);
    \u0275\u0275text(30, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 8);
    \u0275\u0275text(32, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "p", 9);
    \u0275\u0275text(34, "Stiamo cucinando i tuoi dati");
    \u0275\u0275elementEnd()()();
  }
}
var Loader = class _Loader {
  isLoading = false;
  static \u0275fac = function Loader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Loader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Loader, selectors: [["app-loader"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["class", "promethea-loader", 4, "ngIf"], [1, "promethea-loader"], [1, "loader-content"], [1, "plate"], [1, "food-wave"], [1, "food-wave", "delay-1"], [1, "food-wave", "delay-2"], [1, "loader-text"], [1, "letter"], [1, "text-muted", "mt-lg"]], template: function Loader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Loader_div_0_Template, 35, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.promethea-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--background) 80%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  touch-action: none;\n  -webkit-overflow-scrolling: auto;\n  overflow: hidden;\n}\n.loader-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-lg);\n}\n.plate[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background: var(--text-color);\n  border-radius: 50%;\n  position: relative;\n  box-shadow: 0 8px 32px var(--shadow-1), inset 0 -8px 20px color-mix(in srgb, var(--text-color) 8%, transparent);\n  border: 6px solid var(--vetro);\n  overflow: hidden;\n}\n.food-wave[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60%;\n  background: var(--gradiente);\n  border-radius: 50% 50% 0 0;\n  animation: _ngcontent-%COMP%_wave 2.4s ease-in-out infinite;\n}\n.food-wave.delay-1[_ngcontent-%COMP%] {\n  animation-delay: -0.8s;\n}\n.food-wave.delay-2[_ngcontent-%COMP%] {\n  animation-delay: -1.6s;\n}\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 100% {\n    transform: translateY(80%) scaleY(0.4);\n    opacity: 0.6;\n  }\n  50% {\n    transform: translateY(20%) scaleY(1.2);\n    opacity: 1;\n  }\n}\n.loader-text[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n  color: var(--primary);\n  letter-spacing: 2px;\n  display: flex;\n  gap: 4px;\n}\n.letter[_ngcontent-%COMP%] {\n  display: inline-block;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_appear 0.1s forwards, _ngcontent-%COMP%_bounce 1.2s infinite;\n}\n.letter[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.7s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 0.8s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: 0.9s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: 1.0s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(11) {\n  animation-delay: 1.2s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(12) {\n  animation-delay: 1.4s;\n}\n.letter[_ngcontent-%COMP%]:nth-child(13) {\n  animation-delay: 1.6s;\n}\n@keyframes _ngcontent-%COMP%_appear {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.promethea-loader.ng-leave[_ngcontent-%COMP%], \n.promethea-loader.ng-hide[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out reverse;\n}\n/*# sourceMappingURL=loader.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Loader, [{
    type: Component,
    args: [{ selector: "app-loader", standalone: true, imports: [CommonModule], template: '<div class="promethea-loader" *ngIf="isLoading">\r\n  <div class="loader-content">\r\n    <!-- Piatto che si "riempie" con il gradiente -->\r\n    <div class="plate">\r\n      <div class="food-wave"></div>\r\n      <div class="food-wave delay-1"></div>\r\n      <div class="food-wave delay-2"></div>\r\n    </div>\r\n\r\n    <!-- Testo animato -->\r\n    <div class="loader-text ">\r\n      <span class="letter">P</span>\r\n      <span class="letter">r</span>\r\n      <span class="letter">e</span>\r\n      <span class="letter">p</span>\r\n      <span class="letter">a</span>\r\n      <span class="letter">r</span>\r\n      <span class="letter">a</span>\r\n      <span class="letter">n</span>\r\n      <span class="letter">d</span>\r\n      <span class="letter">o</span>\r\n      <span class="letter">.</span>\r\n      <span class="letter">.</span>\r\n      <span class="letter">.</span>\r\n    </div>\r\n\r\n    <p class="text-muted mt-lg">Stiamo cucinando i tuoi dati</p>\r\n  </div>\r\n</div>', styles: ["/* src/app/shared/loader/loader.css */\n.promethea-loader {\n  position: fixed;\n  inset: 0;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  background: color-mix(in srgb, var(--background) 80%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  touch-action: none;\n  -webkit-overflow-scrolling: auto;\n  overflow: hidden;\n}\n.loader-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-lg);\n}\n.plate {\n  width: 120px;\n  height: 120px;\n  background: var(--text-color);\n  border-radius: 50%;\n  position: relative;\n  box-shadow: 0 8px 32px var(--shadow-1), inset 0 -8px 20px color-mix(in srgb, var(--text-color) 8%, transparent);\n  border: 6px solid var(--vetro);\n  overflow: hidden;\n}\n.food-wave {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60%;\n  background: var(--gradiente);\n  border-radius: 50% 50% 0 0;\n  animation: wave 2.4s ease-in-out infinite;\n}\n.food-wave.delay-1 {\n  animation-delay: -0.8s;\n}\n.food-wave.delay-2 {\n  animation-delay: -1.6s;\n}\n@keyframes wave {\n  0%, 100% {\n    transform: translateY(80%) scaleY(0.4);\n    opacity: 0.6;\n  }\n  50% {\n    transform: translateY(20%) scaleY(1.2);\n    opacity: 1;\n  }\n}\n.loader-text {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n  color: var(--primary);\n  letter-spacing: 2px;\n  display: flex;\n  gap: 4px;\n}\n.letter {\n  display: inline-block;\n  opacity: 0;\n  animation: appear 0.1s forwards, bounce 1.2s infinite;\n}\n.letter:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.letter:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.letter:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.letter:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.letter:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.letter:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.letter:nth-child(7) {\n  animation-delay: 0.7s;\n}\n.letter:nth-child(8) {\n  animation-delay: 0.8s;\n}\n.letter:nth-child(9) {\n  animation-delay: 0.9s;\n}\n.letter:nth-child(10) {\n  animation-delay: 1.0s;\n}\n.letter:nth-child(11) {\n  animation-delay: 1.2s;\n}\n.letter:nth-child(12) {\n  animation-delay: 1.4s;\n}\n.letter:nth-child(13) {\n  animation-delay: 1.6s;\n}\n@keyframes appear {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.promethea-loader.ng-leave,\n.promethea-loader.ng-hide {\n  animation: fadeIn 0.4s ease-out reverse;\n}\n/*# sourceMappingURL=loader.css.map */\n"] }]
  }], null, { isLoading: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Loader, { className: "Loader", filePath: "src/app/shared/loader/loader.ts", lineNumber: 12 });
})();

export {
  Loader
};
//# sourceMappingURL=chunk-XXXO6WIZ.js.map
