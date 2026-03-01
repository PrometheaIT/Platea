import {
  LoadingService
} from "./chunk-XTSNHNKL.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-77JDNC7M.js";
import {
  BehaviorSubject,
  Injectable,
  Subject,
  from,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  switchMap,
  takeUntil,
  ɵɵdefineInjectable
} from "./chunk-T3MDKIO5.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Base/base.service.ts
var BaseService = class _BaseService {
  supabaseService = inject(SupabaseService);
  authService = inject(AuthService);
  loadingService = inject(LoadingService);
  destroy$ = new Subject();
  dataSubject = new BehaviorSubject([]);
  data$ = this.dataSubject.asObservable().pipe(shareReplay(1));
  loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();
  errorSubject = new BehaviorSubject(null);
  error$ = this.errorSubject.asObservable();
  constructor() {
    this.authService.activeRestaurantId$.pipe(takeUntil(this.destroy$), switchMap(() => from(this.loadData()))).subscribe();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.dataSubject.complete();
    this.loadingSubject.complete();
    this.errorSubject.complete();
  }
  /**
   * Esegue una query Supabase attivando il loader globale.
   * Accetta qualsiasi oggetto "thenable" (Promise o PostgrestBuilder).
   */
  run(query) {
    return __async(this, null, function* () {
      this.loadingService.start();
      try {
        return yield query;
      } finally {
        this.loadingService.stop();
      }
    });
  }
  /**
   * Carica i dati dal database applicando i filtri opzionali.
   */
  loadData(additionalFilters) {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        this.errorSubject.next(null);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          this.dataSubject.next([]);
          return;
        }
        let query = this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId);
        if (additionalFilters) {
          Object.entries(additionalFilters).forEach(([key, val]) => {
            if (val !== null && val !== void 0) {
              query = query.eq(key, val);
            }
          });
        }
        const { data, error } = yield this.run(query);
        if (error)
          throw error;
        this.dataSubject.next(data ?? []);
      } catch (error) {
        this.handleError("loadData", error);
        this.dataSubject.next([]);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  /**
   * Crea un nuovo record.
   */
  create(item) {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        this.errorSubject.next(null);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const payload = __spreadProps(__spreadValues({}, item), {
          restaurant_id: restaurantId,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        const { data, error } = yield this.run(this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(payload).select().single());
        if (error)
          throw error;
        yield this.loadData();
        return data;
      } catch (error) {
        this.handleError("create", error);
        return null;
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  /**
   * Aggiorna un record esistente.
   */
  update(id, updates) {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        this.errorSubject.next(null);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const { error } = yield this.run(this.supabaseService.getSupabaseClient().from(this.getTableName()).update(__spreadProps(__spreadValues({}, updates), { updated_at: (/* @__PURE__ */ new Date()).toISOString() })).eq("id", id).eq("restaurant_id", restaurantId));
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        this.handleError("update", error);
        return false;
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  /**
   * Elimina un record.
   */
  delete(id) {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        this.errorSubject.next(null);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const { error } = yield this.run(this.supabaseService.getSupabaseClient().from(this.getTableName()).delete().eq("id", id).eq("restaurant_id", restaurantId));
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        this.handleError("delete", error);
        return false;
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  /**
   * Ottiene l'ID del ristorante corrente basandosi sul contesto autenticato.
   * Si affida completamente ad AuthService (già ottimizzato).
   */
  getCurrentRestaurantId() {
    return __async(this, null, function* () {
      return this.authService.getCurrentStaffRestaurantId();
    });
  }
  /**
   * Osservabile che emette l'ID del ristorante corrente (reattivo).
   */
  getCurrentRestaurantId$() {
    return this.authService.currentContext$.pipe(switchMap(() => from(this.getCurrentRestaurantId())));
  }
  /**
   * Resetta i dati in memoria e gli errori.
   */
  clearCache() {
    this.dataSubject.next([]);
    this.errorSubject.next(null);
  }
  /**
   * Ottiene un record per ID dai dati già caricati.
   */
  getById(id) {
    return this.data$.pipe(map((items) => items.find((item) => item.id === id) || null));
  }
  /**
   * Resetta l'errore corrente.
   */
  clearError() {
    this.errorSubject.next(null);
  }
  /**
   * Gestione centralizzata degli errori.
   */
  handleError(method, error) {
    console.error(`Error in ${method}:`, error);
    const msg = this.mapErrorMessage(error);
    this.errorSubject.next(msg);
  }
  /**
   * Mappa errori comuni a messaggi leggibili.
   */
  mapErrorMessage(error) {
    if (error?.code === "23505")
      return "Elemento gi\xE0 esistente";
    if (error?.code === "23503")
      return "Riferimento non valido";
    if (error?.message?.includes("network"))
      return "Errore di connessione";
    return error?.message || "Errore sconosciuto";
  }
  /**
   * Getter per i dati correnti.
   */
  get data() {
    return this.dataSubject.value;
  }
  /**
   * Espone il client Supabase per query personalizzate nei servizi figli.
   */
  getSupabaseClientPublic() {
    return this.supabaseService.getSupabaseClient();
  }
  static \u0275fac = function BaseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BaseService, factory: _BaseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  BaseService
};
//# sourceMappingURL=chunk-QSRXFII6.js.map
