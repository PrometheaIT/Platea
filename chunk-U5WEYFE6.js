import {
  isPlatformBrowser
} from "./chunk-6GUAOFJT.js";
import {
  BehaviorSubject,
  Inject,
  Injectable,
  PLATFORM_ID,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PF73AKAP.js";

// src/app/services/Base/theme.service.ts
var ThemeService = class _ThemeService {
  platformId;
  currentThemeSubject = new BehaviorSubject("light");
  currentTheme$ = this.currentThemeSubject.asObservable();
  constructor(platformId) {
    this.platformId = platformId;
  }
  // Inizializzazione esplicita
  initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem("app-theme");
      const initialTheme = savedTheme || "light";
      this.applyTheme(initialTheme);
      this.currentThemeSubject.next(initialTheme);
    }
  }
  setTheme(theme) {
    this.applyTheme(theme);
    this.currentThemeSubject.next(theme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("app-theme", theme);
    }
  }
  toggleTheme() {
    const newTheme = this.currentThemeSubject.value === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
  // 🔥 CORREZIONE: Metodo pubblico per applicare il tema
  applyTheme(theme) {
    if (isPlatformBrowser(this.platformId)) {
      const html = document.documentElement;
      html.removeAttribute("data-theme");
      html.classList.remove("light-theme", "dark-theme");
      html.setAttribute("data-theme", theme);
      html.classList.add(theme + "-theme");
      void html.offsetHeight;
    }
  }
  getCurrentTheme() {
    return this.currentThemeSubject.value;
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)(\u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-U5WEYFE6.js.map
