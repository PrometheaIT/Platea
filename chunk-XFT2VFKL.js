import {
  BaseService
} from "./chunk-YT7WS7HI.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";

// src/app/timbrature/services/departments.service.ts
var DepartmentsService = class _DepartmentsService extends BaseService {
  tableName = "departments";
  /**
   * Ottiene tutti i reparti di un'azienda.
   */
  getByCompany(companyId) {
    return this.getAll(companyId);
  }
  /**
   * Crea un nuovo reparto.
   */
  createDepartment(department) {
    return this.create(department);
  }
  /**
   * Aggiorna un reparto esistente.
   */
  updateDepartment(id, updates) {
    return this.update(id, updates);
  }
  /**
   * Elimina un reparto (hard delete).
   */
  deleteDepartment(id) {
    return this.delete(id);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DepartmentsService_BaseFactory;
    return function DepartmentsService_Factory(__ngFactoryType__) {
      return (\u0275DepartmentsService_BaseFactory || (\u0275DepartmentsService_BaseFactory = \u0275\u0275getInheritedFactory(_DepartmentsService)))(__ngFactoryType__ || _DepartmentsService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentsService, factory: _DepartmentsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DepartmentsService
};
//# sourceMappingURL=chunk-XFT2VFKL.js.map
