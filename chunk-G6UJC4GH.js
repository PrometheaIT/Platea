import {
  AuthService,
  BaseService
} from "./chunk-YT7WS7HI.js";
import {
  HttpClient
} from "./chunk-3OF4XXND.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  from,
  map,
  setClassMetadata,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/services/timbrature.service.ts
var TimbratureService = class _TimbratureService extends BaseService {
  authService;
  http;
  tableName = "timbrature";
  pendingRequestsSubject = new BehaviorSubject(0);
  pendingRequests$ = this.pendingRequestsSubject.asObservable();
  base = "/api/timbrature";
  constructor(authService, http) {
    super();
    this.authService = authService;
    this.http = http;
  }
  // --- Query complesse ---
  fetchTimbrature(opts = {}) {
    const select = opts.select ?? "*, user:users(id,first_name,last_name,role)";
    let q = this.supabase.from("timbrature").select(select);
    if (opts.userId)
      q = q.eq("user_id", opts.userId);
    if (opts.companyId)
      q = q.eq("company_id", opts.companyId);
    if (opts.deleted === true) {
      q = q.eq("deleted", true);
    } else {
      q = q.eq("deleted", false);
    }
    if (opts.date) {
      const start = new Date(opts.date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setDate(end.getDate() + 1);
      q = q.gte("start_ts", start.toISOString()).lt("start_ts", end.toISOString());
    } else {
      if (opts.from)
        q = q.gte("start_ts", opts.from.toISOString());
      if (opts.to) {
        const toExcl = new Date(opts.to);
        toExcl.setDate(toExcl.getDate() + 1);
        q = q.lt("start_ts", toExcl.toISOString());
      }
    }
    q = q.order("start_ts", { ascending: opts.orderAsc ?? false });
    if (opts.limit)
      q = q.limit(opts.limit);
    return from(q).pipe(map((result) => {
      if (result.error)
        throw result.error;
      return result.data ?? [];
    }), catchError((err) => {
      console.error("[TimbratureService] fetchTimbrature error", err);
      throw err;
    }));
  }
  // --- Dettaglio ---
  getTimbraturaBId(id) {
    return from(this.supabase.from("timbrature").select("*, user:users(id,first_name,last_name,role)").eq("id", id).maybeSingle()).pipe(map((result) => {
      if (result.error)
        throw result.error;
      return result.data;
    }));
  }
  // --- CRUD (ereditati da BaseService, ma esponiamo alias) ---
  creaTimbratura(timbratura) {
    return this.create(timbratura);
  }
  aggiornaTimbratura(id, datiAggiornati) {
    const companyId = this.authService.companyId ?? void 0;
    return this.update(id, datiAggiornati, companyId);
  }
  softDeleteTimbratura(id, deletedBy) {
    const companyId = this.authService.companyId ?? void 0;
    return this.softDelete(id, deletedBy || "", companyId);
  }
  restoreTimbratura(id) {
    const companyId = this.authService.companyId ?? void 0;
    return this.restore(id, companyId);
  }
  getDeletedTimbrature(userId) {
    return this.fetchTimbrature({ userId, deleted: true, orderAsc: false });
  }
  // --- Richieste di modifica ---
  getRichiesteModifica(companyId, status) {
    let q = this.supabase.from("richieste_modifica_timbrature").select("*, timbratura:timbrature(id, start_ts, total_minutes, user_id), user:users(id,first_name,last_name,email)").order("created_at", { ascending: false });
    if (companyId)
      q = q.eq("company_id", companyId);
    if (status)
      q = q.eq("status", status);
    return from(q).pipe(map((result) => {
      if (result.error)
        throw result.error;
      return result.data ?? [];
    }));
  }
  creaRichiestaModifica(payload) {
    return from(this.supabase.from("richieste_modifica_timbrature").insert({
      timbratura_id: payload.timbratura_id,
      user_id: payload.user_id,
      company_id: payload.company_id,
      requested_changes: payload.requested_changes,
      original_data: payload.original_data ?? null,
      reason: payload.reason ?? null,
      status: "pending"
    }).select().single()).pipe(map((result) => {
      if (result.error)
        throw result.error;
      this.updatePendingModificationCount(payload.company_id).catch(() => {
      });
      return result.data;
    }));
  }
  aggiornaRichiestaModifica(id, status, adminResponse, applyChangesToTimbratura = false) {
    if (status === "approved" && applyChangesToTimbratura) {
      return from(this.supabase.from("richieste_modifica_timbrature").select("timbratura_id, requested_changes").eq("id", id).maybeSingle()).pipe(switchMap((reqResult) => {
        if (reqResult.error)
          throw reqResult.error;
        if (reqResult.data?.timbratura_id && reqResult.data.requested_changes) {
          return from(this.supabase.from("timbrature").update(reqResult.data.requested_changes).eq("id", reqResult.data.timbratura_id)).pipe(switchMap(() => this._updateRichiestaStato(id, status, adminResponse)));
        }
        return this._updateRichiestaStato(id, status, adminResponse);
      }));
    }
    return this._updateRichiestaStato(id, status, adminResponse);
  }
  _updateRichiestaStato(id, status, adminResponse) {
    return from(this.supabase.from("richieste_modifica_timbrature").update({
      status,
      admin_response: adminResponse ?? null,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", id).select().single()).pipe(map((result) => {
      if (result.error)
        throw result.error;
      if (result.data?.company_id) {
        this.updatePendingModificationCount(result.data.company_id).catch(() => {
        });
      }
      return result.data;
    }));
  }
  updatePendingModificationCount(companyId) {
    return __async(this, null, function* () {
      try {
        const arr = yield this.getRichiesteModifica(companyId, "pending").toPromise();
        const count = arr?.length ?? 0;
        this.pendingRequestsSubject.next(count);
        return count;
      } catch (err) {
        console.warn("[TimbratureService] updatePendingModificationCount error", err);
        this.pendingRequestsSubject.next(0);
        return 0;
      }
    });
  }
  // --- Timbratura attiva / punch ---
  getTimbraturaInCorso(userId, companyId) {
    return from(this.supabase.from("timbrature").select("*").eq("user_id", userId).eq("company_id", companyId).eq("deleted", false).is("end_ts", null).order("start_ts", { ascending: false }).limit(1).maybeSingle()).pipe(map((result) => {
      if (result.error)
        throw result.error;
      return result.data;
    }));
  }
  startTimbratura(payload) {
    const p = __spreadProps(__spreadValues({}, payload), { end_ts: null });
    return this.create(p);
  }
  completeTimbratura(timbraturaId, endIso) {
    return this.getTimbraturaBId(timbraturaId).pipe(switchMap((existing) => {
      if (!existing)
        throw new Error(`Timbratura ${timbraturaId} non trovata`);
      if (!existing.start_ts)
        throw new Error(`Timbratura ${timbraturaId} non ha start_ts valido`);
      const start = new Date(existing.start_ts);
      const end = new Date(endIso);
      const mins = Math.max(0, Math.round((end.getTime() - start.getTime()) / 6e4));
      const patch = { end_ts: endIso, total_minutes: mins };
      return this.aggiornaTimbratura(timbraturaId, patch);
    }));
  }
  // --- Utility (Promise) ---
  hasTimbraturaPerGiorno(userId, data, excludeId) {
    return __async(this, null, function* () {
      const target = typeof data === "string" ? new Date(data) : new Date(data);
      target.setHours(0, 0, 0, 0);
      const next = new Date(target);
      next.setDate(next.getDate() + 1);
      try {
        const { data: res, error } = yield this.supabase.from("timbrature").select("id").eq("user_id", userId).eq("deleted", false).gte("start_ts", target.toISOString()).lt("start_ts", next.toISOString()).limit(1);
        if (error)
          throw error;
        if (!res?.length)
          return false;
        if (excludeId && res[0].id === excludeId)
          return false;
        return true;
      } catch (err) {
        console.error("[TimbratureService] hasTimbraturaPerGiorno error", err);
        return false;
      }
    });
  }
  getTimbraturePerGiorno(giorno, timbrature) {
    return timbrature.filter((t) => {
      const d = new Date(t.start_ts);
      return d.getFullYear() === giorno.getFullYear() && d.getMonth() === giorno.getMonth() && d.getDate() === giorno.getDate();
    });
  }
  formattaOrarioTimbratura(t) {
    const start = new Date(t.start_ts);
    const startStr = start.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    if (!t.end_ts)
      return `${startStr} - In corso`;
    const end = new Date(t.end_ts);
    const endStr = end.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    const min = t.total_minutes ?? Math.round((end.getTime() - start.getTime()) / 6e4);
    const ore = Math.floor(min / 60);
    const minuti = min % 60;
    return `${startStr} - ${endStr} (${ore}h ${minuti}m)`;
  }
  getColoreTimbratura(t) {
    return t.end_ts ? "var(--primary)" : "#ef4444";
  }
  // --- Metodi REST (compatibilità) ---
  getRecent(limit = 10) {
    const headers = this.authService.getAuthHeaders();
    return this.http.get(`${this.base}?limit=${limit}`, { headers });
  }
  approve(id) {
    const headers = this.authService.getAuthHeaders();
    return this.http.post(`${this.base}/${id}/approve`, {}, { headers });
  }
  punchIn() {
    const headers = this.authService.getAuthHeaders();
    return this.http.post(`${this.base}/punch-in`, {}, { headers });
  }
  punchOut() {
    const headers = this.authService.getAuthHeaders();
    return this.http.post(`${this.base}/punch-out`, {}, { headers });
  }
  eliminaTimbratura(id) {
    const headers = this.authService.getAuthHeaders();
    return this.http.delete(`${this.base}/${id}`, { headers });
  }
  creaTimbraturaSupabase(t) {
    return this.creaTimbratura(t);
  }
  /**
   * Recupera le timbrature con filtri avanzati (company_id obbligatorio)
   * @param filters Oggetto con company_id, start_ts (gte/lt), user_id (opzionale)
   * @returns Observable di Timbratura[] con i dati dell'utente joinati
   */
  getFiltered(filters) {
    let query = this.supabase.from(this.tableName).select("*, user:users(first_name, last_name)");
    query = query.eq("company_id", filters.company_id);
    if (filters.user_id) {
      query = query.eq("user_id", filters.user_id);
    }
    if (filters.start_ts) {
      if (filters.start_ts.gte) {
        query = query.gte("start_ts", filters.start_ts.gte);
      }
      if (filters.start_ts.lt) {
        query = query.lt("start_ts", filters.start_ts.lt);
      }
    }
    return from(query).pipe(map((result) => {
      if (result.error)
        throw result.error;
      return result.data;
    }), catchError((error) => {
      console.error("Errore in getFiltered:", error);
      throw error;
    }));
  }
  static \u0275fac = function TimbratureService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimbratureService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimbratureService, factory: _TimbratureService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimbratureService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: HttpClient }], null);
})();

export {
  TimbratureService
};
//# sourceMappingURL=chunk-G6UJC4GH.js.map
