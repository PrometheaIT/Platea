import {
  BaseService
} from "./chunk-QSRXFII6.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/personal-appointment.service.ts
var PersonalAppointmentService = class _PersonalAppointmentService extends BaseService {
  getTableName() {
    return "personal_appointments";
  }
  // Metodi specifici se necessari (es. loadByDateRange)
  loadByDateRange(start, end) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return [];
      const { data, error } = yield this.getSupabaseClientPublic().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).gte("start_datetime", start.toISOString()).lte("end_datetime", end.toISOString()).order("start_datetime", { ascending: true });
      if (error) {
        this.handleError("loadByDateRange", error);
        return [];
      }
      return data || [];
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PersonalAppointmentService_BaseFactory;
    return function PersonalAppointmentService_Factory(__ngFactoryType__) {
      return (\u0275PersonalAppointmentService_BaseFactory || (\u0275PersonalAppointmentService_BaseFactory = \u0275\u0275getInheritedFactory(_PersonalAppointmentService)))(__ngFactoryType__ || _PersonalAppointmentService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonalAppointmentService, factory: _PersonalAppointmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalAppointmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PersonalAppointmentService
};
//# sourceMappingURL=chunk-AGKFGYI2.js.map
