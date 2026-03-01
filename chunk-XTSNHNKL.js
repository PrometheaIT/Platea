import {
  BehaviorSubject,
  Injectable,
  finalize,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-T3MDKIO5.js";

// src/app/services/Base/loading.service.ts
var LoadingService = class _LoadingService {
  counter = 0;
  subject = new BehaviorSubject(false);
  loading$ = this.subject.asObservable();
  update() {
    this.subject.next(this.counter > 0);
  }
  start() {
    this.counter++;
    this.update();
    setTimeout(() => {
      if (this.counter > 0) {
        console.warn("\u26A0\uFE0F Loading timeout - forcing stop");
        this.counter = 0;
        this.update();
      }
    }, 2e4);
  }
  stop() {
    this.counter = Math.max(0, this.counter - 1);
    this.update();
  }
  // utile per Promise
  trackPromise(p) {
    this.start();
    return p.finally(() => this.stop());
  }
  // utile per Observable: restituisce Observable che chiude il count al termine
  trackObservable(obs$) {
    this.start();
    return obs$.pipe(finalize(() => this.stop()));
  }
  // getter comodo per verificare stato sync (opzionale)
  isLoadingSync() {
    return this.counter > 0;
  }
  static \u0275fac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LoadingService
};
//# sourceMappingURL=chunk-XTSNHNKL.js.map
