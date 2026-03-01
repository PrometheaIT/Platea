import {
  AuthService,
  BaseService,
  TimbratureSupabaseService
} from "./chunk-UWK2IEAI.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-3OF4XXND.js";
import {
  Injectable,
  Observable,
  filter,
  from,
  inject,
  interval,
  map,
  setClassMetadata,
  switchMap,
  take,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/services/generated-reports.service.ts
var GeneratedReportsService = class _GeneratedReportsService extends BaseService {
  tableName = "generated_reports";
  /**
   * Restituisce la lista dei report generati da un utente specifico (o azienda),
   * ordinati dal più recente.
   */
  getReportsForUser(userId, companyId) {
    return from(this.supabase.from(this.tableName).select("*").eq("user_id", userId).eq("company_id", companyId).order("generated_at", { ascending: false }).then((result) => result.data));
  }
  /**
   * Polling per attendere che un report sia stato generato (generated_at non null).
   * Restituisce l'intero record quando disponibile.
   */
  waitForReport(reportId, intervalMs = 2e3) {
    return interval(intervalMs).pipe(
      // Inizia subito (0) e poi ogni intervalMs
      switchMap(() => from(this.supabase.from(this.tableName).select("*").eq("id", reportId).maybeSingle().then((result) => result.data))),
      // Filtra solo i record esistenti e già generati
      filter((report) => report !== null && report.generated_at !== null),
      // Estrai il report (ormai non null)
      map((report) => report),
      // Prendi il primo e completa
      take(1)
    );
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GeneratedReportsService_BaseFactory;
    return function GeneratedReportsService_Factory(__ngFactoryType__) {
      return (\u0275GeneratedReportsService_BaseFactory || (\u0275GeneratedReportsService_BaseFactory = \u0275\u0275getInheritedFactory(_GeneratedReportsService)))(__ngFactoryType__ || _GeneratedReportsService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeneratedReportsService, factory: _GeneratedReportsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneratedReportsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/timbrature/services/report.service.ts
var ReportService = class _ReportService {
  auth = inject(AuthService);
  generatedReports = inject(GeneratedReportsService);
  supabase = inject(TimbratureSupabaseService).getSupabaseClient();
  http = inject(HttpClient);
  baseUrl = "/api/reports";
  // URL della Edge Function (da configurare in environment)
  reportFunctionUrl = "https://<progetto>.supabase.co/functions/v1/generate-report";
  /**
   * Richiede la generazione di un report.
   * Restituisce un Observable con l'ID del report richiesto.
   */
  requestReport(reportType, filters, format) {
    const user = this.auth.currentUserSubject.value;
    if (!user)
      throw new Error("Utente non autenticato");
    const payload = {
      reportType,
      format,
      filters,
      companyId: this.auth.companyId,
      requestedBy: user.id
    };
    return from(this.auth.getToken()).pipe(switchMap((token) => {
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      });
      return this.http.post(this.reportFunctionUrl, payload, { headers });
    }));
  }
  /**
   * Monitora lo stato di un report fino al completamento.
   * Restituisce il record completo di `generated_reports`.
   */
  waitForReport(reportId) {
    return this.generatedReports.waitForReport(reportId);
  }
  /**
   * Ottiene l'URL firmato per il download del report.
   * Il file_path è del tipo 'nomecartella/nomefile.pdf' (relativo al bucket).
   */
  getDownloadUrl(report) {
    return __async(this, null, function* () {
      if (!report.file_path)
        throw new Error("Report non ancora generato");
      const { data, error } = yield this.supabase.storage.from("reports").createSignedUrl(report.file_path, 60 * 5);
      if (error)
        throw error;
      return data.signedUrl;
    });
  }
  /**
   * Avvia il download diretto del report (apre una nuova finestra o triggera il download).
   */
  downloadReport(report) {
    return __async(this, null, function* () {
      const url = yield this.getDownloadUrl(report);
      window.open(url, "_blank");
    });
  }
  /**
   * (Opzionale) Metodo per generare un report semplice lato client
   * se i dati sono pochi e non si vuole chiamare il server.
   */
  generateSimpleReportLocally(filters) {
    return new Observable();
  }
  /**
   * Esporta il report in formato PDF/XLSX/CSV (chiamata sincrona che restituisce blob).
   */
  exportReport(format, filters) {
    return from(this.auth.getToken()).pipe(switchMap((token) => {
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      });
      return this.http.post(`${this.baseUrl}/export`, __spreadProps(__spreadValues({}, filters), { format }), {
        headers,
        responseType: "blob"
      });
    }));
  }
  static \u0275fac = function ReportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ReportService
};
//# sourceMappingURL=chunk-FGQJ456C.js.map
