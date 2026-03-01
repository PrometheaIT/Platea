import {
  AuthService,
  BaseService
} from "./chunk-UWK2IEAI.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PF73AKAP.js";

// src/app/timbrature/services/jobtitle.service.ts
var JobTitlesService = class _JobTitlesService extends BaseService {
  authService;
  tableName = "job_titles";
  constructor(authService) {
    super();
    this.authService = authService;
  }
  /**
   * Ottiene tutte le mansioni di un'azienda.
   * @param companyId - ID dell'azienda
   * @param includeInactive - Se true, include anche le mansioni disattivate
   */
  getByCompany(companyId, includeInactive = false) {
    return this.getAll(companyId).pipe(map((titles) => includeInactive ? titles : titles.filter((t) => t.is_active !== false)));
  }
  /**
   * Crea una nuova mansione.
   * @param companyId - ID azienda
   * @param name - Nome mansione
   * @param description - Descrizione opzionale
   */
  createJobTitle(companyId, name, description) {
    const user = this.authService.currentUserSubject.value;
    if (!user)
      throw new Error("Utente non autenticato");
    const newTitle = {
      company_id: companyId,
      name,
      description: description ?? null,
      created_by: user.id,
      is_active: true
    };
    return this.create(newTitle);
  }
  /**
   * Aggiorna una mansione esistente.
   * @param id - ID mansione
   * @param updates - Campi da aggiornare
   */
  updateJobTitle(id, updates) {
    return this.update(id, updates);
  }
  /**
   * Attiva/disattiva una mansione.
   * @param id - ID mansione
   * @param isActive - true = attiva, false = disattiva
   */
  setActiveStatus(id, isActive) {
    return this.update(id, { is_active: isActive });
  }
  /**
   * Eliminazione logica (disattiva la mansione).
   * @param id - ID mansione
   */
  deleteJobTitle(id) {
    return this.update(id, { is_active: false });
  }
  static \u0275fac = function JobTitlesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobTitlesService)(\u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobTitlesService, factory: _JobTitlesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobTitlesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }], null);
})();

export {
  JobTitlesService
};
//# sourceMappingURL=chunk-P7TNCHJZ.js.map
