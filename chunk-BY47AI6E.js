import {
  AuthService,
  TimbratureSupabaseService
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
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/services/company.service.ts
var CompanyService = class _CompanyService {
  plateaSupabase = inject(SupabaseService).getSupabaseClient();
  timbratureSupabase = inject(TimbratureSupabaseService).getSupabaseClient();
  authService = inject(AuthService);
  // Legge il ristorante da Platea e il record company da Timbrature
  // Li fonde in un unico oggetto Company
  getById(restaurantId) {
    if (!restaurantId)
      return of(null);
    return from(this.fetchMerged(restaurantId));
  }
  getForUser(userId, companyId) {
    const restaurantId = companyId || this.authService.companyId;
    if (!restaurantId)
      return of(null);
    return this.getById(restaurantId);
  }
  getByAdminUserId(userId) {
    if (!userId)
      return of(null);
    return from(this.fetchMerged(null, userId));
  }
  fetchMerged(restaurantId, ownerId) {
    return __async(this, null, function* () {
      try {
        let restaurantQuery;
        if (restaurantId) {
          restaurantQuery = this.plateaSupabase.from("restaurants").select("*").eq("id", restaurantId).maybeSingle();
        } else {
          restaurantQuery = this.plateaSupabase.from("restaurants").select("*").eq("owner_id", ownerId).maybeSingle();
        }
        const { data: restaurant, error: restError } = yield restaurantQuery;
        if (restError || !restaurant)
          return null;
        const { data: company } = yield this.timbratureSupabase.from("companies").select("*").eq("admin_user_id", restaurant.owner_id).maybeSingle();
        return {
          id: restaurant.id,
          // usiamo restaurant_id come id principale
          name: restaurant.name,
          admin_user_id: restaurant.owner_id,
          email: restaurant.email || company?.email || null,
          address: restaurant.address || company?.address || null,
          city: restaurant.city || company?.city || null,
          province: restaurant.province || company?.province || null,
          website: company?.website || null,
          vat: company?.vat || null,
          numero_telefono: company?.numero_telefono || restaurant.phone || null,
          opening_hours: company?.opening_hours || null,
          timbratura_type: company?.timbratura_type || "libera",
          punch_points: company?.punch_points || [],
          closed_days: company?.closed_days || [],
          manager_visibility: company?.manager_visibility || {},
          // ID del record companies in Timbrature (per aggiornamenti)
          _timbrature_company_id: company?.id || null,
          created_at: restaurant.created_at,
          updated_at: restaurant.updated_at
        };
      } catch (err) {
        console.error("[CompanyService] fetchMerged error", err);
        return null;
      }
    });
  }
  updateCompany(restaurantId, payload) {
    return from(this.updateMerged(restaurantId, payload));
  }
  updateMerged(restaurantId, payload) {
    return __async(this, null, function* () {
      try {
        const plateaFields = ["name", "address", "city", "province", "email", "phone"];
        const plateaPayload = {};
        plateaFields.forEach((f) => {
          if (payload[f] !== void 0)
            plateaPayload[f] = payload[f];
        });
        const timbratureFields = [
          "opening_hours",
          "timbratura_type",
          "punch_points",
          "closed_days",
          "manager_visibility",
          "vat",
          "website",
          "numero_telefono",
          "address",
          "city",
          "province"
        ];
        const timbraturePayload = {};
        timbratureFields.forEach((f) => {
          if (payload[f] !== void 0)
            timbraturePayload[f] = payload[f];
        });
        if (Object.keys(plateaPayload).length > 0) {
          yield this.plateaSupabase.from("restaurants").update(__spreadProps(__spreadValues({}, plateaPayload), { updated_at: (/* @__PURE__ */ new Date()).toISOString() })).eq("id", restaurantId);
        }
        if (Object.keys(timbraturePayload).length > 0) {
          const { data: restaurant } = yield this.plateaSupabase.from("restaurants").select("owner_id, name").eq("id", restaurantId).maybeSingle();
          if (restaurant) {
            const { data: existing } = yield this.timbratureSupabase.from("companies").select("id").eq("admin_user_id", restaurant.owner_id).maybeSingle();
            if (existing) {
              yield this.timbratureSupabase.from("companies").update(__spreadProps(__spreadValues({}, timbraturePayload), { updated_at: (/* @__PURE__ */ new Date()).toISOString() })).eq("id", existing.id);
            } else {
              yield this.timbratureSupabase.from("companies").insert(__spreadProps(__spreadValues({
                admin_user_id: restaurant.owner_id,
                name: restaurant.name
              }, timbraturePayload), {
                created_at: (/* @__PURE__ */ new Date()).toISOString(),
                updated_at: (/* @__PURE__ */ new Date()).toISOString()
              }));
            }
          }
        }
        return this.fetchMerged(restaurantId);
      } catch (err) {
        console.error("[CompanyService] updateMerged error", err);
        return null;
      }
    });
  }
  getAllCompanies() {
    return from(this.plateaSupabase.from("restaurants").select("*").then((res) => (res.data || []).map((r) => ({
      id: r.id,
      name: r.name,
      admin_user_id: r.owner_id
    }))));
  }
  // ── Metodi visibilità ──
  resolveManagerConfig(company, managerId) {
    if (!company || !managerId)
      return this.getDefaultManagerConfig();
    const visibility = company.manager_visibility || {};
    const config = visibility[managerId] || {};
    return {
      mode: config.mode ?? "self",
      user_ids: Array.isArray(config.user_ids) ? config.user_ids : [],
      roles: Array.isArray(config.roles) ? config.roles : [],
      department_ids: Array.isArray(config.department_ids) ? config.department_ids : [],
      can_view_all_employees: !!config.can_view_all_employees,
      can_manage_departments: !!config.can_manage_departments,
      can_manage_job_titles: !!config.can_manage_job_titles,
      can_view_reports: !!config.can_view_reports,
      can_edit_employees: !!config.can_edit_employees,
      can_modify_timbrature: !!config.can_modify_timbrature
    };
  }
  filterEmployeesByVisibility(employees, company, managerId) {
    if (!Array.isArray(employees) || employees.length === 0)
      return [];
    const config = this.resolveManagerConfig(company, managerId);
    if (config.can_view_all_employees)
      return employees;
    switch (config.mode) {
      case "self":
        return employees.filter((e) => e.id === managerId);
      case "selected_users":
        return employees.filter((e) => config.user_ids?.includes(e.id));
      case "roles":
        return employees.filter((e) => e.role && config.roles?.includes(e.role));
      case "department":
        return employees.filter((e) => {
          const deptId = e.department_id || e.department?.id;
          return deptId && config.department_ids?.includes(deptId);
        });
      default:
        return employees.filter((e) => e.id === managerId);
    }
  }
  getDefaultManagerConfig() {
    return {
      mode: "self",
      user_ids: [],
      roles: [],
      department_ids: [],
      can_view_all_employees: false,
      can_manage_departments: false,
      can_manage_job_titles: false,
      can_view_reports: false,
      can_edit_employees: false,
      can_modify_timbrature: false
    };
  }
  static \u0275fac = function CompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CompanyService
};
//# sourceMappingURL=chunk-BY47AI6E.js.map
