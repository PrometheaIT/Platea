import {
  AuthService,
  createClient,
  environment
} from "./chunk-JWP3QZ4U.js";
import {
  Router
} from "./chunk-RFPONECI.js";
import {
  HttpHeaders
} from "./chunk-3OF4XXND.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  from,
  inject,
  map,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/services/timbrature-auth.adapter.ts
var AuthService2 = class _AuthService {
  plateaAuth = inject(AuthService);
  router = inject(Router);
  // ── Stessa interfaccia che si aspettano i componenti Timbrature ──
  get currentUser$() {
    return this.plateaAuth.currentUser$;
  }
  get currentUserSubject() {
    return this.plateaAuth.currentUserSubject;
  }
  get sidebarCollapsed$() {
    return this.plateaAuth.sidebarCollapsed$;
  }
  isAuthenticated() {
    return this.plateaAuth.isAuthenticated();
  }
  // Mappa i ruoli di Platea → ruoli di Timbrature
  // owner/manager → admin | tutti gli altri staff → employee
  hasRole(role) {
    const staffRole = this.plateaAuth.getStaffRole();
    const isOwner = this.plateaAuth.isOwner();
    if (role === "admin")
      return isOwner || staffRole === "manager";
    if (role === "manager")
      return staffRole === "manager";
    if (role === "employee")
      return !!staffRole || isOwner;
    return false;
  }
  hasManagerPermission(permission, companyId) {
    return __async(this, null, function* () {
      const isOwner = this.plateaAuth.isOwner();
      if (isOwner)
        return true;
      const staffRole = this.plateaAuth.getStaffRole();
      if (staffRole === "manager")
        return true;
      return false;
    });
  }
  getToken() {
    return __async(this, null, function* () {
      const supabase = this.plateaAuth.supabaseService;
      if (!supabase)
        return null;
      try {
        const { data } = yield supabase.getSession();
        return data?.session?.access_token ?? null;
      } catch {
        return null;
      }
    });
  }
  // company_id nel contesto Timbrature corrisponde a restaurant_id in Platea
  // I componenti Timbrature usano currentUser$.company_id
  // quindi mappiamo currentUser$ aggiungendo company_id = activeRestaurantId
  get currentUserWithCompany$() {
    return new BehaviorSubject(__spreadProps(__spreadValues({}, this.plateaAuth.currentUserValue), {
      company_id: this.plateaAuth.getCurrentRestaurantId()
    })).asObservable();
  }
  // Metodo usato da AuthService di Timbrature per aggiornare utente esterno
  setExternalUser(user) {
  }
  toggleSidebar() {
    this.plateaAuth.toggleSidebar();
  }
  setSidebarCollapsed(collapsed) {
    this.plateaAuth.setSidebarCollapsed(collapsed);
  }
  getSidebarCollapsedValue() {
    return this.plateaAuth.getSidebarCollapsed();
  }
  // Logout — reindirizza al login di Platea
  logout() {
    return __async(this, null, function* () {
      yield this.plateaAuth.logout();
    });
  }
  get companyId() {
    return this.plateaAuth.getCurrentRestaurantId();
  }
  getAuthHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
  updateUserProfile(userId, patch) {
    return __async(this, null, function* () {
      const { data, error } = yield this.plateaAuth["supabaseService"].getSupabaseClient().from("users").update(patch).eq("id", userId).select().single();
      if (error)
        throw error;
      return data;
    });
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService2, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/timbrature/services/timbrature-supabase.service.ts
var TimbratureSupabaseService = class _TimbratureSupabaseService {
  client;
  constructor() {
    this.client = createClient(environment.timbratureSupabaseUrl, environment.timbratureSupabaseKey);
  }
  getSupabaseClient() {
    return this.client;
  }
  getSession() {
    return __async(this, null, function* () {
      return this.client.auth.getSession();
    });
  }
  static \u0275fac = function TimbratureSupabaseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimbratureSupabaseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimbratureSupabaseService, factory: _TimbratureSupabaseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimbratureSupabaseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/timbrature/services/base.service.ts
var BaseService = class {
  supabase;
  constructor() {
    this.supabase = inject(TimbratureSupabaseService).getSupabaseClient();
  }
  getAll(companyId, options) {
    let query = this.supabase.from(this.tableName).select("*");
    if (companyId)
      query = query.eq("company_id", companyId);
    if (options?.orderBy)
      query = query.order(options.orderBy, { ascending: options.ascending ?? true });
    return from(query).pipe(map((result) => result.data), catchError((error) => throwError(() => error)));
  }
  getById(id, companyId) {
    let query = this.supabase.from(this.tableName).select("*").eq("id", id);
    if (companyId)
      query = query.eq("company_id", companyId);
    return from(query.maybeSingle()).pipe(map((result) => result.data), catchError((error) => throwError(() => error)));
  }
  create(item) {
    return from(this.supabase.from(this.tableName).insert(item).select().single()).pipe(map((result) => result.data), catchError((error) => throwError(() => error)));
  }
  update(id, updates, companyId) {
    let query = this.supabase.from(this.tableName).update(updates).eq("id", id);
    if (companyId)
      query = query.eq("company_id", companyId);
    return from(query.select().single()).pipe(map((result) => result.data), catchError((error) => throwError(() => error)));
  }
  delete(id, companyId) {
    let query = this.supabase.from(this.tableName).delete().eq("id", id);
    if (companyId)
      query = query.eq("company_id", companyId);
    return from(query).pipe(map(() => {
    }), catchError((error) => throwError(() => error)));
  }
  softDelete(id, deletedBy, companyId) {
    const updates = {
      deleted: true,
      deleted_at: (/* @__PURE__ */ new Date()).toISOString(),
      deleted_by: deletedBy
    };
    let query = this.supabase.from(this.tableName).update(updates).eq("id", id);
    if (companyId)
      query = query.eq("company_id", companyId);
    return from(query).pipe(map(() => {
    }), catchError((error) => throwError(() => error)));
  }
  restore(id, companyId) {
    const updates = {
      deleted: false,
      deleted_at: null,
      deleted_by: null
    };
    let query = this.supabase.from(this.tableName).update(updates).eq("id", id);
    if (companyId)
      query = query.eq("company_id", companyId);
    return from(query).pipe(map(() => {
    }), catchError((error) => throwError(() => error)));
  }
};

export {
  AuthService2 as AuthService,
  TimbratureSupabaseService,
  BaseService
};
//# sourceMappingURL=chunk-YT7WS7HI.js.map
