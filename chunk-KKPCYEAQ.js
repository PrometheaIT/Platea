import {
  AuthService
} from "./chunk-YT7WS7HI.js";
import {
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import {
  Injectable,
  from,
  inject,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/services/user.service.ts
var UsersService = class _UsersService {
  supabase = inject(SupabaseService).getSupabaseClient();
  authService = inject(AuthService);
  // Rimappa company_id → restaurant_id tramite restaurant_staff
  getByCompany(restaurantId, role) {
    if (!restaurantId)
      return of([]);
    const promise = (() => __async(this, null, function* () {
      let staffQuery = this.supabase.from("restaurant_staff").select("user_id, role, permissions").eq("restaurant_id", restaurantId).eq("invitation_status", "accepted").neq("role", "social_media_manager");
      if (role) {
        staffQuery = staffQuery.eq("role", this.mapRole(role));
      }
      const { data: staffList, error: staffError } = yield staffQuery;
      if (staffError)
        throw staffError;
      const { data: restaurant } = yield this.supabase.from("restaurants").select("owner_id").eq("id", restaurantId).maybeSingle();
      const staffUserIds = (staffList || []).map((s) => s.user_id).filter(Boolean);
      const allUserIds = [.../* @__PURE__ */ new Set([
        ...staffUserIds,
        ...restaurant?.owner_id && !role ? [restaurant.owner_id] : []
        // owner viene incluso solo se non c'è filtro per ruolo
      ])];
      if (!allUserIds.length)
        return [];
      const { data: users, error: usersError } = yield this.supabase.from("users").select("*").in("id", allUserIds).eq("is_active", true);
      if (usersError)
        throw usersError;
      return (users || []).map((u) => {
        const staffRecord = (staffList || []).find((s) => s.user_id === u.id);
        const isOwner = u.id === restaurant?.owner_id;
        return __spreadProps(__spreadValues({}, u), {
          company_id: restaurantId,
          role: isOwner ? "admin" : staffRecord?.role || u.role,
          staff_permissions: staffRecord?.permissions || []
        });
      });
    }))();
    return from(promise);
  }
  getManagers(restaurantId) {
    return this.getByCompany(restaurantId, "manager");
  }
  getEmployees(restaurantId) {
    return this.getByCompany(restaurantId, "employee");
  }
  findByEmail(email, restaurantId) {
    return from(this.supabase.from("users").select("*").eq("email", email).maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      return res.data;
    }));
  }
  setActiveStatus(userId, active, companyId) {
    return from(this.supabase.from("users").update({ is_active: active, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", userId).select().maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      return res.data;
    }));
  }
  softDelete(userId, deletedBy, companyId) {
    return from(this.supabase.from("users").update({ is_active: false, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", userId).select().maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      return res.data;
    }));
  }
  restore(userId, companyId) {
    return from(this.supabase.from("users").update({ is_active: true, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", userId).select().maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      return res.data;
    }));
  }
  getUserWithDetails(userId) {
    return from(this.supabase.from("users").select("*").eq("id", userId).maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      return res.data;
    }));
  }
  search(restaurantId, search) {
    const promise = (() => __async(this, null, function* () {
      const { data: staffList } = yield this.supabase.from("restaurant_staff").select("user_id").eq("restaurant_id", restaurantId).eq("invitation_status", "accepted");
      const userIds = (staffList || []).map((s) => s.user_id).filter(Boolean);
      if (!userIds.length)
        return [];
      const { data, error } = yield this.supabase.from("users").select("*").in("id", userIds).or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`).limit(20);
      if (error)
        throw error;
      return data || [];
    }))();
    return from(promise);
  }
  updateNotificationPreferences(userId, preferences) {
    return from(this.supabase.from("users").update({ notifications_preferences: preferences, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", userId).select().maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      return res.data;
    }));
  }
  // Mappa ruoli Timbrature → ruoli Platea
  mapRole(role) {
    const map = {
      "admin": "manager",
      "manager": "manager",
      "employee": "waiter"
    };
    return map[role] || role;
  }
  getById(userId) {
    if (!userId)
      return of(null);
    return from(this.supabase.from("users").select("*").eq("id", userId).maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      const data = res.data;
      if (data)
        data.company_id = this.authService.companyId;
      return data;
    }));
  }
  update(userId, patch, companyId) {
    const _a = patch, { company_id } = _a, safePatch = __objRest(_a, ["company_id"]);
    return from(this.supabase.from("users").update(__spreadProps(__spreadValues({}, safePatch), { updated_at: (/* @__PURE__ */ new Date()).toISOString() })).eq("id", userId).select("*").maybeSingle().then((res) => {
      if (res.error)
        throw res.error;
      return __spreadProps(__spreadValues({}, res.data), { company_id: this.authService.companyId });
    }));
  }
  getAll(restaurantId) {
    return this.getByCompany(restaurantId);
  }
  static \u0275fac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  UsersService
};
//# sourceMappingURL=chunk-KKPCYEAQ.js.map
