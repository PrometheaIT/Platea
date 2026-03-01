import {
  CompanyService
} from "./chunk-QXGMGLAC.js";
import {
  TimbratureService
} from "./chunk-XENPMS7N.js";
import {
  UsersService
} from "./chunk-WSWXKQSY.js";
import {
  AuthService,
  BaseService
} from "./chunk-UWK2IEAI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-6SNKM7Z6.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  NgStyle,
  SlicePipe
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Injectable,
  Subject,
  ViewChild,
  catchError,
  first,
  from,
  inject,
  lastValueFrom,
  map,
  of,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/services/announcements.service.ts
var AnnouncementsService = class _AnnouncementsService extends BaseService {
  tableName = "announcements";
  authService = inject(AuthService);
  /**
   * Ottiene tutti gli annunci di un'azienda, ordinati per data decrescente.
   */
  getAnnunciAzienda(companyId) {
    if (!companyId)
      return of([]);
    return from(this.supabase.from(this.tableName).select("*").eq("company_id", companyId).order("created_at", { ascending: false })).pipe(map((result) => result.data), catchError((error) => {
      console.error("[AnnouncementsService] getAnnunciAzienda error", error);
      throw error;
    }));
  }
  /**
   * Restituisce gli annunci dell'azienda con il flag is_read per l'utente corrente.
   */
  getAnnunciAziendaWithReadStatus(companyId) {
    if (!companyId)
      return of([]);
    const promise = (() => __async(this, null, function* () {
      const currentUser = yield this.authService.currentUser$.pipe(first()).toPromise();
      if (!currentUser)
        return [];
      const { data: announcements, error: annErr } = yield this.supabase.from(this.tableName).select("*").eq("company_id", companyId).order("created_at", { ascending: false });
      if (annErr)
        throw annErr;
      const annList = announcements || [];
      if (annList.length === 0)
        return [];
      const ids = annList.map((a) => a.id).filter((id) => !!id);
      const { data: reads, error: readsErr } = yield this.supabase.from("announcements_reads").select("announcement_id").in("announcement_id", ids).eq("user_id", currentUser.id);
      if (readsErr)
        throw readsErr;
      const readSet = new Set((reads || []).map((r) => r.announcement_id));
      return annList.map((a) => __spreadProps(__spreadValues({}, a), { is_read: readSet.has(a.id) }));
    }))();
    return from(promise);
  }
  /**
   * Crea un nuovo annuncio (solo admin). Il metodo verifica il ruolo tramite AuthService.
   */
  creaAnnuncio(companyId, annuncio) {
    const promise = (() => __async(this, null, function* () {
      const currentUser = yield this.authService.currentUser$.pipe(first()).toPromise();
      if (!currentUser || !this.authService.hasRole("admin")) {
        throw new Error("Solo gli admin possono creare annunci");
      }
      const payload = {
        company_id: companyId,
        title: annuncio.title,
        content: annuncio.content,
        created_by: annuncio.author_id || currentUser.id,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        is_active: true
      };
      const { data, error } = yield this.supabase.from(this.tableName).insert(payload).select().single();
      if (error)
        throw error;
      return data;
    }))();
    return from(promise);
  }
  /**
   * Marca un annuncio come letto per l'utente corrente (upsert).
   */
  markAsRead(announcementId) {
    if (!announcementId)
      return of(null);
    const promise = (() => __async(this, null, function* () {
      const currentUser = yield this.authService.currentUser$.pipe(first()).toPromise();
      if (!currentUser)
        throw new Error("Utente non autenticato");
      const payload = {
        announcement_id: announcementId,
        user_id: currentUser.id,
        read_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      const { data, error } = yield this.supabase.from("announcements_reads").upsert(payload, { onConflict: "announcement_id, user_id" }).select().single();
      if (error)
        throw error;
      return data;
    }))();
    return from(promise);
  }
  /**
   * Rimuove la lettura (segna come non letto).
   */
  markAsUnread(announcementId) {
    if (!announcementId)
      return of(false);
    const promise = (() => __async(this, null, function* () {
      const currentUser = yield this.authService.currentUser$.pipe(first()).toPromise();
      if (!currentUser)
        throw new Error("Utente non autenticato");
      const { error } = yield this.supabase.from("announcements_reads").delete().eq("announcement_id", announcementId).eq("user_id", currentUser.id);
      if (error)
        throw error;
      return true;
    }))();
    return from(promise);
  }
  /**
   * Restituisce il numero di annunci non letti per l'utente nell'azienda.
   */
  getUnreadCountForUser(companyId) {
    const promise = (() => __async(this, null, function* () {
      if (!companyId)
        return 0;
      const currentUser = yield this.authService.currentUser$.pipe(first()).toPromise();
      if (!currentUser)
        return 0;
      const { data: annData, error: annErr } = yield this.supabase.from(this.tableName).select("id").eq("company_id", companyId).eq("is_active", true);
      if (annErr)
        throw annErr;
      const ids = (annData || []).map((a) => a.id);
      if (ids.length === 0)
        return 0;
      const { data: readsData, error: readsErr } = yield this.supabase.from("announcements_reads").select("announcement_id").in("announcement_id", ids).eq("user_id", currentUser.id);
      if (readsErr)
        throw readsErr;
      const readIds = new Set((readsData || []).map((r) => r.announcement_id));
      return ids.filter((id) => !readIds.has(id)).length;
    }))();
    return from(promise);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AnnouncementsService_BaseFactory;
    return function AnnouncementsService_Factory(__ngFactoryType__) {
      return (\u0275AnnouncementsService_BaseFactory || (\u0275AnnouncementsService_BaseFactory = \u0275\u0275getInheritedFactory(_AnnouncementsService)))(__ngFactoryType__ || _AnnouncementsService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnnouncementsService, factory: _AnnouncementsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/timbrature/features/profilo-aziendale/profilo-aziendale.component.ts
var _c0 = ["announcementsSection"];
function ProfiloAziendaleComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 27);
    \u0275\u0275element(2, "lucide-angular", 28);
    \u0275\u0275elementStart(3, "h3", 12);
    \u0275\u0275text(4, "Informazioni Azienda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 30)(7, "span", 31);
    \u0275\u0275text(8, "Nome Azienda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 30)(12, "span", 31);
    \u0275\u0275text(13, "Partita IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 30)(17, "span", 31);
    \u0275\u0275text(18, "Forma Giuridica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 32);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 30)(22, "span", 31);
    \u0275\u0275text(23, "Settore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 32);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.azienda.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.azienda.vat);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.azienda.legal_form || "Non specificata");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.azienda.category || "Non specificato");
  }
}
function ProfiloAziendaleComponent_div_3_div_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.azienda.city, ", ", ctx_r0.azienda.province, " ");
  }
}
function ProfiloAziendaleComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "lucide-angular", 37);
    \u0275\u0275elementStart(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4, "Indirizzo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProfiloAziendaleComponent_div_3_div_6_span_7_Template, 2, 2, "span", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.azienda.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.azienda.city || ctx_r0.azienda.province);
  }
}
function ProfiloAziendaleComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "lucide-angular", 43);
    \u0275\u0275elementStart(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.azienda.numero_telefono);
  }
}
function ProfiloAziendaleComponent_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "lucide-angular", 44);
    \u0275\u0275elementStart(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", "mailto:" + ctx_r0.azienda.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.azienda.email);
  }
}
function ProfiloAziendaleComponent_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "lucide-angular", 46);
    \u0275\u0275elementStart(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4, "Sito Web");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r0.azienda.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.azienda.website);
  }
}
function ProfiloAziendaleComponent_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "lucide-angular", 48);
    \u0275\u0275elementStart(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4, "Amministratore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.adminAzienda.first_name, " ", ctx_r0.adminAzienda.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.adminAzienda.email);
  }
}
function ProfiloAziendaleComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 27);
    \u0275\u0275element(2, "lucide-angular", 33);
    \u0275\u0275elementStart(3, "h3", 12);
    \u0275\u0275text(4, "Contatti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275template(6, ProfiloAziendaleComponent_div_3_div_6_Template, 8, 2, "div", 34)(7, ProfiloAziendaleComponent_div_3_div_7_Template, 7, 1, "div", 35)(8, ProfiloAziendaleComponent_div_3_div_8_Template, 7, 2, "div", 35)(9, ProfiloAziendaleComponent_div_3_div_9_Template, 7, 2, "div", 35)(10, ProfiloAziendaleComponent_div_3_div_10_Template, 9, 3, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.azienda.address || ctx_r0.azienda.civic_number || ctx_r0.azienda.city || ctx_r0.azienda.province);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.azienda.numero_telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.azienda.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.azienda.website);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.adminAzienda);
  }
}
function ProfiloAziendaleComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "Orario Ufficio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.azienda.opening_time, " \u2013 ", ctx_r0.azienda.closing_time, "");
  }
}
function ProfiloAziendaleComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const giorno_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(giorno_r2.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("warning", ctx_r0.isGiornoChiuso(giorno_r2.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getOrarioGiorno(giorno_r2.key), " ");
  }
}
function ProfiloAziendaleComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 27);
    \u0275\u0275element(2, "lucide-angular", 49);
    \u0275\u0275elementStart(3, "h3", 12);
    \u0275\u0275text(4, "Orari di Lavoro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275template(6, ProfiloAziendaleComponent_div_4_div_6_Template, 5, 2, "div", 50);
    \u0275\u0275elementStart(7, "div", 51);
    \u0275\u0275element(8, "lucide-angular", 52);
    \u0275\u0275elementStart(9, "span", 53);
    \u0275\u0275text(10, "Orari Settimanali");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 29);
    \u0275\u0275template(12, ProfiloAziendaleComponent_div_4_div_12_Template, 5, 4, "div", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.azienda.opening_time && ctx_r0.azienda.closing_time);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.giorniSettimana);
  }
}
function ProfiloAziendaleComponent_div_47_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 58)(2, "div", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dipendente_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ((dipendente_r3 == null ? null : dipendente_r3.first_name) || "").charAt(0), "", ((dipendente_r3 == null ? null : dipendente_r3.last_name) || "").charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", dipendente_r3 == null ? null : dipendente_r3.first_name, " ", dipendente_r3 == null ? null : dipendente_r3.last_name, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap("role-" + (dipendente_r3 == null ? null : dipendente_r3.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRuoloLabel(dipendente_r3 == null ? null : dipendente_r3.role), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", dipendente_r3 == null ? null : dipendente_r3.is_active)("warning", !(dipendente_r3 == null ? null : dipendente_r3.is_active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (dipendente_r3 == null ? null : dipendente_r3.is_active) ? "Attivo" : "Inattivo", " ");
  }
}
function ProfiloAziendaleComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "lucide-angular", 56);
    \u0275\u0275elementStart(3, "h2", 8);
    \u0275\u0275text(4, "Team Aziendale");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275template(6, ProfiloAziendaleComponent_div_47_div_6_Template, 11, 12, "div", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.dipendenti);
  }
}
function ProfiloAziendaleComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostraFormAnnuncio = !ctx_r0.mostraFormAnnuncio);
    });
    \u0275\u0275element(1, "lucide-angular", 62);
    \u0275\u0275text(2, " Nuovo Annuncio ");
    \u0275\u0275elementEnd();
  }
}
function ProfiloAziendaleComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 6);
    \u0275\u0275element(2, "lucide-angular", 64);
    \u0275\u0275elementStart(3, "h3", 65);
    \u0275\u0275text(4, "Crea Nuovo Annuncio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 66)(6, "label", 67);
    \u0275\u0275element(7, "lucide-angular", 68);
    \u0275\u0275text(8, " Titolo Annuncio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ProfiloAziendaleComponent_div_55_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuovoAnnuncio.title, $event) || (ctx_r0.nuovoAnnuncio.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 66)(11, "label", 67);
    \u0275\u0275element(12, "lucide-angular", 70);
    \u0275\u0275text(13, " Contenuto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ProfiloAziendaleComponent_div_55_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuovoAnnuncio.content, $event) || (ctx_r0.nuovoAnnuncio.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(15, "        ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 72)(17, "button", 73);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_div_55_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.annullaCreazioneAnnuncio());
    });
    \u0275\u0275element(18, "lucide-angular", 74);
    \u0275\u0275text(19, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 75);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_div_55_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.creaAnnuncio());
    });
    \u0275\u0275element(21, "lucide-angular", 76);
    \u0275\u0275text(22, " Pubblica Annuncio ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuovoAnnuncio.title);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuovoAnnuncio.content);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r0.nuovoAnnuncio.title || !ctx_r0.nuovoAnnuncio.content);
  }
}
function ProfiloAziendaleComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "lucide-angular", 78);
    \u0275\u0275elementStart(2, "span", 79);
    \u0275\u0275text(3, "Caricamento annunci...");
    \u0275\u0275elementEnd()();
  }
}
function ProfiloAziendaleComponent_ng_container_57_div_3_lucide_angular_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 88);
  }
}
function ProfiloAziendaleComponent_ng_container_57_div_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProfiloAziendaleComponent_ng_container_57_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 80)(2, "a", 81);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_ng_container_57_div_3_Template_a_click_2_listener($event) {
      const annuncio_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.openAnnouncement(annuncio_r7);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(3);
    \u0275\u0275template(4, ProfiloAziendaleComponent_ng_container_57_div_3_lucide_angular_4_Template, 1, 0, "lucide-angular", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 83);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275template(11, ProfiloAziendaleComponent_ng_container_57_div_3_span_11_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 85);
    \u0275\u0275element(13, "lucide-angular", 86);
    \u0275\u0275elementStart(14, "small", 87);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const annuncio_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", annuncio_r7.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !annuncio_r7.is_read);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, annuncio_r7.created_at, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(10, 9, annuncio_r7.content, 0, 200), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", annuncio_r7.content.length > 200);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getAuthorName(annuncio_r7));
  }
}
function ProfiloAziendaleComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29, 1);
    \u0275\u0275template(3, ProfiloAziendaleComponent_ng_container_57_div_3_Template, 16, 13, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.annunci);
  }
}
function ProfiloAziendaleComponent_ng_template_58_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, ' Clicca su "Nuovo Annuncio" per pubblicare il primo annuncio. ');
    \u0275\u0275elementEnd();
  }
}
function ProfiloAziendaleComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90);
    \u0275\u0275element(2, "lucide-angular", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 91);
    \u0275\u0275text(5, "Nessun annuncio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7, "Non ci sono annunci aziendali al momento.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProfiloAziendaleComponent_ng_template_58_p_8_Template, 2, 0, "p", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.hasRole("admin"));
  }
}
function ProfiloAziendaleComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_div_60_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAnnouncement());
    });
    \u0275\u0275elementStart(1, "div", 94);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_div_60_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 95)(3, "div", 20);
    \u0275\u0275element(4, "lucide-angular", 21);
    \u0275\u0275elementStart(5, "h3", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 97);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_div_60_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAnnouncement());
    });
    \u0275\u0275element(8, "lucide-angular", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 98)(10, "span", 41);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 99);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 100)(16, "button", 61);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_div_60_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectedAnnouncement && ctx_r0.toggleMarkUnread(ctx_r0.selectedAnnouncement));
    });
    \u0275\u0275element(17, "lucide-angular", 101);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 73);
    \u0275\u0275listener("click", function ProfiloAziendaleComponent_div_60_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAnnouncement());
    });
    \u0275\u0275element(20, "lucide-angular", 74);
    \u0275\u0275text(21, " Chiudi ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx_r0.modalStyle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAnnouncement == null ? null : ctx_r0.selectedAnnouncement.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 6, ctx_r0.selectedAnnouncement == null ? null : ctx_r0.selectedAnnouncement.created_at, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedAnnouncement == null ? null : ctx_r0.selectedAnnouncement.content);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", (ctx_r0.selectedAnnouncement == null ? null : ctx_r0.selectedAnnouncement.is_read) ? "eye-off" : "eye");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.selectedAnnouncement == null ? null : ctx_r0.selectedAnnouncement.is_read) ? "Segna da leggere" : "Segna come letto", " ");
  }
}
var ProfiloAziendaleComponent = class _ProfiloAziendaleComponent {
  announcementsSectionRef;
  authService = inject(AuthService);
  usersService = inject(UsersService);
  companyService = inject(CompanyService);
  timbratureService = inject(TimbratureService);
  announcementsService = inject(AnnouncementsService);
  currentUser = null;
  azienda = null;
  adminAzienda = null;
  dipendenti = [];
  statistiche = null;
  annunci = [];
  selectedAnnouncement = null;
  isLoading = true;
  isLoadingAnnunci = false;
  // UI per annunci
  mostraFormAnnuncio = false;
  nuovoAnnuncio = { title: "", content: "" };
  showAnnouncementModal = false;
  modalStyle = {};
  // Giorni settimana per orari
  giorniSettimana = [
    { key: "monday", label: "Luned\xEC" },
    { key: "tuesday", label: "Marted\xEC" },
    { key: "wednesday", label: "Mercoled\xEC" },
    { key: "thursday", label: "Gioved\xEC" },
    { key: "friday", label: "Venerd\xEC" },
    { key: "saturday", label: "Sabato" },
    { key: "sunday", label: "Domenica" }
  ];
  destroy$ = new Subject();
  ngOnInit() {
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.currentUser = user;
      const companyId = this.authService.companyId;
      if (companyId) {
        this.loadCompanyData(companyId);
      } else {
        this.resetData();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  resetData() {
    this.azienda = null;
    this.adminAzienda = null;
    this.dipendenti = [];
    this.statistiche = null;
    this.annunci = [];
  }
  loadCompanyData(companyId) {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        this.azienda = yield lastValueFrom(this.companyService.getById(companyId));
        this.dipendenti = yield lastValueFrom(this.usersService.getByCompany(companyId));
        this.adminAzienda = this.dipendenti.find((d) => d.role === "admin") || null;
        this.statistiche = {
          dipendentiTotali: this.dipendenti.length,
          dipendentiAttivi: this.dipendenti.filter((d) => d.is_active).length,
          timbratureOggi: 0,
          presenzeOggi: 0
        };
        yield this.loadTimbratureOggi(companyId);
        yield this.loadAnnunci(companyId);
      } catch (error) {
        console.error("Errore caricamento dati azienda", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadTimbratureOggi(companyId) {
    return __async(this, null, function* () {
      try {
        const oggi = /* @__PURE__ */ new Date();
        oggi.setHours(0, 0, 0, 0);
        const domani = new Date(oggi);
        domani.setDate(domani.getDate() + 1);
        const timbrature = yield lastValueFrom(this.timbratureService.getFiltered({
          company_id: companyId,
          start_ts: {
            gte: oggi.toISOString(),
            lt: domani.toISOString()
          }
        }));
        if (this.statistiche) {
          this.statistiche.timbratureOggi = timbrature.length;
          this.statistiche.presenzeOggi = new Set(timbrature.map((t) => t.user_id)).size;
        }
      } catch (error) {
        console.error("Errore caricamento timbrature oggi", error);
        if (this.statistiche) {
          this.statistiche.timbratureOggi = 0;
          this.statistiche.presenzeOggi = 0;
        }
      }
    });
  }
  loadAnnunci(companyId) {
    return __async(this, null, function* () {
      this.isLoadingAnnunci = true;
      try {
        this.annunci = yield lastValueFrom(this.announcementsService.getAnnunciAziendaWithReadStatus(companyId));
      } catch (error) {
        console.error("Errore caricamento annunci", error);
        this.annunci = [];
      } finally {
        this.isLoadingAnnunci = false;
      }
    });
  }
  // --- Gestione annunci ---
  openAnnouncement(ann) {
    return __async(this, null, function* () {
      yield this.ensureSectionVisible();
      const el = this.announcementsSectionRef?.nativeElement;
      const rect = el ? el.getBoundingClientRect() : null;
      const viewportPad = 20;
      const popupMaxWidth = 900;
      const sectionLeft = rect ? rect.left + window.scrollX : window.scrollX + viewportPad;
      const sectionTop = rect ? rect.top + window.scrollY : window.scrollY + viewportPad;
      const sectionWidth = rect ? rect.width : Math.min(window.innerWidth - viewportPad * 2, popupMaxWidth);
      const width = Math.min(sectionWidth * 0.9, popupMaxWidth);
      const left = Math.max(viewportPad, sectionLeft + (sectionWidth - width) / 2);
      const popupMaxHeight = Math.min(800, Math.floor(window.innerHeight * 0.8));
      const topCentered = window.scrollY + Math.max(viewportPad, (window.innerHeight - popupMaxHeight) / 2);
      this.modalStyle = {
        position: "fixed",
        top: `${Math.floor(topCentered)}px`,
        left: `${Math.floor(left)}px`,
        width: `${Math.floor(width)}px`
      };
      this.selectedAnnouncement = ann;
      this.showAnnouncementModal = true;
      if (ann.id && !ann.is_read) {
        try {
          yield lastValueFrom(this.announcementsService.markAsRead(ann.id));
          this.annunci = this.annunci.map((a) => a.id === ann.id ? __spreadProps(__spreadValues({}, a), { is_read: true }) : a);
          if (this.selectedAnnouncement?.id === ann.id) {
            this.selectedAnnouncement.is_read = true;
          }
        } catch (error) {
          console.error("Errore markAsRead", error);
        }
      }
    });
  }
  closeAnnouncement() {
    this.showAnnouncementModal = false;
    this.selectedAnnouncement = null;
    this.modalStyle = {};
  }
  toggleMarkUnread(ann) {
    return __async(this, null, function* () {
      if (!ann?.id)
        return;
      try {
        if (ann.is_read) {
          yield lastValueFrom(this.announcementsService.markAsUnread(ann.id));
          ann.is_read = false;
        } else {
          yield lastValueFrom(this.announcementsService.markAsRead(ann.id));
          ann.is_read = true;
        }
        this.annunci = this.annunci.map((a) => a.id === ann.id ? __spreadProps(__spreadValues({}, a), { is_read: ann.is_read }) : a);
        if (this.selectedAnnouncement?.id === ann.id) {
          this.selectedAnnouncement.is_read = ann.is_read;
        }
      } catch (error) {
        console.error("Errore toggle read", error);
      }
    });
  }
  creaAnnuncio() {
    return __async(this, null, function* () {
      if (!this.azienda?.id || !this.currentUser)
        return;
      try {
        const nuovoAnnuncio = yield lastValueFrom(this.announcementsService.creaAnnuncio(this.azienda.id, {
          title: this.nuovoAnnuncio.title,
          content: this.nuovoAnnuncio.content,
          author_id: this.currentUser.id
        }));
        const nuovoConStatus = __spreadProps(__spreadValues({}, nuovoAnnuncio), {
          is_read: true
        });
        this.annunci = [nuovoConStatus, ...this.annunci];
        this.nuovoAnnuncio = { title: "", content: "" };
        this.mostraFormAnnuncio = false;
      } catch (error) {
        console.error("Errore creazione annuncio", error);
        alert("Errore durante la creazione dell'annuncio");
      }
    });
  }
  annullaCreazioneAnnuncio() {
    this.mostraFormAnnuncio = false;
    this.nuovoAnnuncio = { title: "", content: "" };
  }
  ensureSectionVisible() {
    return __async(this, null, function* () {
      const el = this.announcementsSectionRef?.nativeElement;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        yield new Promise((res) => setTimeout(res, 300));
      }
    });
  }
  // --- Utility per orari e giorni chiusi ---
  isGiornoChiuso(giornoKey) {
    if (!giornoKey || !this.azienda?.closed_days)
      return false;
    const closedDays = this.azienda.closed_days;
    if (!Array.isArray(closedDays))
      return false;
    return closedDays.some((item) => {
      if (!item)
        return false;
      if (typeof item === "string" || typeof item === "number") {
        const s = String(item);
        const datePart = s.split("|")[0];
        if (datePart.includes("/")) {
          const [start, end] = datePart.split("/");
          return giornoKey >= start && giornoKey <= end;
        }
        return datePart === giornoKey;
      }
      if (typeof item === "object") {
        const type = item.type || (item.start && item.end ? "range" : "single");
        if (type === "single") {
          return item.start === giornoKey;
        }
        if (type === "range") {
          return item.start && item.end && giornoKey >= item.start && giornoKey <= item.end;
        }
      }
      return false;
    });
  }
  getOrarioGiorno(giornoKey) {
    if (!giornoKey)
      return "Non specificato";
    if (this.isGiornoChiuso(giornoKey)) {
      return "Chiuso";
    }
    const orari = this.azienda?.opening_hours;
    const giorno = orari?.[giornoKey];
    if (!giorno) {
      if (this.azienda?.opening_time && this.azienda?.closing_time) {
        return `${this.azienda.opening_time} - ${this.azienda.closing_time}`;
      }
      return "Non specificato";
    }
    if (giorno.closed || !giorno.open || !giorno.close) {
      return "Chiuso";
    }
    return `${giorno.open} - ${giorno.close}`;
  }
  getRuoloLabel(role) {
    if (!role)
      return "Dipendente";
    switch (role) {
      case "admin":
        return "Amministratore";
      case "manager":
        return "Manager";
      case "employee":
        return "Dipendente";
      default:
        return role.charAt(0).toUpperCase() + role.slice(1);
    }
  }
  hasRole(role) {
    return this.authService.hasRole(role);
  }
  getAuthorName(ann) {
    if (!ann?.created_by)
      return "Sconosciuto";
    const autore = this.dipendenti.find((d) => d.id === ann.created_by);
    return autore ? `${autore.first_name} ${autore.last_name}` : "Utente sconosciuto";
  }
  static \u0275fac = function ProfiloAziendaleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfiloAziendaleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfiloAziendaleComponent, selectors: [["app-profilo-aziendale"]], viewQuery: function ProfiloAziendaleComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.announcementsSectionRef = _t.first);
    }
  }, decls: 61, vars: 14, consts: [["noAnnunci", ""], ["announcementsSection", ""], [1, "page-container", "p-sm"], [1, "grid-form", "p-sm"], ["class", "card", 4, "ngIf"], [1, "form-card", "flex", "flex-col", "gap-md", "p-lg"], [1, "flex", "items-center", "gap-sm", "mb-sm"], ["name", "chart-bar"], [1, "text-md", "font-bold"], [1, "grid-cards"], [1, "card"], ["name", "users"], [1, "card-title", "m-0"], [1, "text-lg", "font-bold", "gradient-text"], [1, "text-muted", "text-mini", "mt-sm"], ["name", "user-check"], ["name", "fingerprint"], ["name", "building"], ["class", "form-card flex flex-col gap-md p-lg", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-sm", "mb-sm"], [1, "flex", "items-center", "gap-sm"], ["name", "megaphone"], ["class", "promethea-button outline", 3, "click", 4, "ngIf"], ["class", "flex flex-col gap-md p-md rounded border bg-smoke", 4, "ngIf"], ["class", "flex items-center gap-sm p-md text-muted", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "landmark"], [1, "flex", "flex-col", "gap-sm"], [1, "flex", "justify-between", "items-center", "p-sm", "rounded", "bg-smoke"], [1, "text-muted", "text-mini"], [1, "font-semibold"], ["name", "contact"], ["class", "flex items-start gap-sm p-sm rounded bg-smoke", 4, "ngIf"], ["class", "flex items-center gap-sm p-sm rounded bg-smoke", 4, "ngIf"], [1, "flex", "items-start", "gap-sm", "p-sm", "rounded", "bg-smoke"], ["name", "map-pin", 2, "flex-shrink", "0", "margin-top", "2px"], [1, "flex", "flex-col", "gap-sm", 2, "flex", "1", "min-width", "0"], [1, "text-mini", "text-muted"], ["class", "chip-mini", "style", "width: fit-content;", 4, "ngIf"], [1, "chip-mini", 2, "width", "fit-content"], [1, "flex", "items-center", "gap-sm", "p-sm", "rounded", "bg-smoke"], ["name", "phone", 2, "flex-shrink", "0"], ["name", "mail", 2, "flex-shrink", "0"], [1, "link", "font-semibold", 3, "href"], ["name", "globe", 2, "flex-shrink", "0"], ["target", "_blank", 1, "link", "font-semibold", 3, "href"], ["name", "user-cog", 2, "flex-shrink", "0"], ["name", "clock"], ["class", "flex justify-between items-center p-sm rounded bg-smoke", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "mb-sm", "mt-sm"], ["name", "calendar-days"], [1, "font-semibold", "text-mini"], ["class", "flex justify-between items-center p-sm rounded bg-smoke", 4, "ngFor", "ngForOf"], [1, "chip-mini"], ["name", "users-round"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-sm", "flex-wrap"], [1, "avatar-sm"], [1, "chip"], [1, "promethea-button", "outline", 3, "click"], ["name", "plus"], [1, "flex", "flex-col", "gap-md", "p-md", "rounded", "border", "bg-smoke"], ["name", "pencil"], [1, "font-bold", "text-mini"], [1, "form-group"], [1, "standard-label"], ["name", "type"], ["type", "text", "placeholder", "Inserisci il titolo dell'annuncio", 3, "ngModelChange", "ngModel"], ["name", "align-left"], ["placeholder", "Inserisci il contenuto dell'annuncio", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-sm", "justify-end"], [1, "promethea-button", "ghost", 3, "click"], ["name", "x"], [1, "promethea-button", 3, "click", "disabled"], ["name", "send"], [1, "flex", "items-center", "gap-sm", "p-md", "text-muted"], ["name", "loader-circle", 1, "animate-spin"], [1, "text-mini"], [1, "flex", "justify-between", "items-start", "gap-sm", "mb-sm"], ["href", "#", 1, "link", "font-bold", 3, "click"], ["name", "badge-alert", "style", "display:inline; width:16px; height:16px; vertical-align:middle;", "title", "Non letto", 4, "ngIf"], [1, "chip-mini", 2, "flex-shrink", "0"], [4, "ngIf"], [1, "flex", "items-center", "gap-sm", "mt-sm"], ["name", "user", 2, "width", "12px", "height", "12px"], [1, "text-muted"], ["name", "badge-alert", "title", "Non letto", 2, "display", "inline", "width", "16px", "height", "16px", "vertical-align", "middle"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md", "p-lg", "text-center", "empty-state"], [1, "avatartondo", 2, "width", "64px", "height", "64px"], [1, "font-bold", "mb-sm"], ["class", "text-muted text-mini mt-sm", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-md", 3, "click", "ngStyle"], [1, "modal-header"], [1, "section-title"], [1, "icon-button", 3, "click"], [1, "form-card", "flex", "flex-col", "gap-md"], [2, "white-space", "pre-line"], [1, "modal-footer"], [3, "name"]], template: function ProfiloAziendaleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, ProfiloAziendaleComponent_div_2_Template, 26, 4, "div", 4)(3, ProfiloAziendaleComponent_div_3_Template, 11, 5, "div", 4)(4, ProfiloAziendaleComponent_div_4_Template, 13, 2, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "lucide-angular", 7);
      \u0275\u0275elementStart(8, "h2", 8);
      \u0275\u0275text(9, "Statistiche Aziendali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 6);
      \u0275\u0275element(13, "lucide-angular", 11);
      \u0275\u0275elementStart(14, "h3", 12);
      \u0275\u0275text(15, "Dipendenti Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 14);
      \u0275\u0275text(19, "Persone nell'azienda");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10)(21, "div", 6);
      \u0275\u0275element(22, "lucide-angular", 15);
      \u0275\u0275elementStart(23, "h3", 12);
      \u0275\u0275text(24, "Dipendenti Attivi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 13);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 14);
      \u0275\u0275text(28, "Attualmente attivi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 10)(30, "div", 6);
      \u0275\u0275element(31, "lucide-angular", 16);
      \u0275\u0275elementStart(32, "h3", 12);
      \u0275\u0275text(33, "Timbrature Oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 13);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 14);
      \u0275\u0275text(37, "Registrate oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 10)(39, "div", 6);
      \u0275\u0275element(40, "lucide-angular", 17);
      \u0275\u0275elementStart(41, "h3", 12);
      \u0275\u0275text(42, "Presenze Oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 13);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 14);
      \u0275\u0275text(46, "Dipendenti in ufficio");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(47, ProfiloAziendaleComponent_div_47_Template, 7, 1, "div", 18);
      \u0275\u0275elementStart(48, "div", 5)(49, "div", 19)(50, "div", 20);
      \u0275\u0275element(51, "lucide-angular", 21);
      \u0275\u0275elementStart(52, "h2", 8);
      \u0275\u0275text(53, "Annunci Aziendali");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, ProfiloAziendaleComponent_button_54_Template, 3, 0, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, ProfiloAziendaleComponent_div_55_Template, 23, 3, "div", 23)(56, ProfiloAziendaleComponent_div_56_Template, 4, 0, "div", 24)(57, ProfiloAziendaleComponent_ng_container_57_Template, 4, 1, "ng-container", 25)(58, ProfiloAziendaleComponent_ng_template_58_Template, 9, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(60, ProfiloAziendaleComponent_div_60_Template, 22, 9, "div", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noAnnunci_r9 = \u0275\u0275reference(59);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.azienda);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.azienda);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.azienda);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate((ctx.statistiche == null ? null : ctx.statistiche.dipendentiTotali) || 0);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate((ctx.statistiche == null ? null : ctx.statistiche.dipendentiAttivi) || 0);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate((ctx.statistiche == null ? null : ctx.statistiche.timbratureOggi) || 0);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate((ctx.statistiche == null ? null : ctx.statistiche.presenzeOggi) || 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dipendenti.length > 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.hasRole("admin"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mostraFormAnnuncio && ctx.hasRole("admin"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoadingAnnunci);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.annunci.length > 0)("ngIfElse", noAnnunci_r9);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showAnnouncementModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, SlicePipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfiloAziendaleComponent, [{
    type: Component,
    args: [{ selector: "app-profilo-aziendale", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container p-sm">\r
\r
  <!-- ===== GRID INFO + CONTATTI + ORARI ===== -->\r
  <div class="grid-form p-sm">\r
\r
    <!-- Informazioni Azienda -->\r
    <div class="card" *ngIf="azienda">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="landmark"></lucide-angular>\r
        <h3 class="card-title m-0">Informazioni Azienda</h3>\r
      </div>\r
      <div class="flex flex-col gap-sm">\r
\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-muted text-mini">Nome Azienda</span>\r
          <span class="font-semibold">{{ azienda.name }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-muted text-mini">Partita IVA</span>\r
          <span class="font-semibold">{{ azienda.vat }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-muted text-mini">Forma Giuridica</span>\r
          <span class="font-semibold">{{ azienda.legal_form || 'Non specificata' }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-muted text-mini">Settore</span>\r
          <span class="font-semibold">{{ azienda.category || 'Non specificato' }}</span>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Contatti -->\r
    <div class="card" *ngIf="azienda">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="contact"></lucide-angular>\r
        <h3 class="card-title m-0">Contatti</h3>\r
      </div>\r
      <div class="flex flex-col gap-sm">\r
\r
        <!-- Indirizzo -->\r
        <div class="flex items-start gap-sm p-sm rounded bg-smoke"\r
             *ngIf="azienda.address || azienda.civic_number || azienda.city || azienda.province">\r
          <lucide-angular name="map-pin" style="flex-shrink:0; margin-top: 2px;"></lucide-angular>\r
          <div class="flex flex-col gap-sm" style="flex:1; min-width:0;">\r
            <span class="text-mini text-muted">Indirizzo</span>\r
            <span class="font-semibold">{{ azienda.address }}</span>\r
            <span class="chip-mini" *ngIf="azienda.city || azienda.province" style="width: fit-content;">\r
              {{ azienda.city }}, {{ azienda.province }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Telefono -->\r
        <div class="flex items-center gap-sm p-sm rounded bg-smoke" *ngIf="azienda.numero_telefono">\r
          <lucide-angular name="phone" style="flex-shrink:0;"></lucide-angular>\r
          <div class="flex flex-col gap-sm" style="flex:1; min-width:0;">\r
            <span class="text-mini text-muted">Telefono</span>\r
            <span class="font-semibold">{{ azienda.numero_telefono }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- Email -->\r
        <div class="flex items-center gap-sm p-sm rounded bg-smoke" *ngIf="azienda.email">\r
          <lucide-angular name="mail" style="flex-shrink:0;"></lucide-angular>\r
          <div class="flex flex-col gap-sm" style="flex:1; min-width:0;">\r
            <span class="text-mini text-muted">Email</span>\r
            <a class="link font-semibold" [href]="'mailto:' + azienda.email">{{ azienda.email }}</a>\r
          </div>\r
        </div>\r
\r
        <!-- Sito Web -->\r
        <div class="flex items-center gap-sm p-sm rounded bg-smoke" *ngIf="azienda.website">\r
          <lucide-angular name="globe" style="flex-shrink:0;"></lucide-angular>\r
          <div class="flex flex-col gap-sm" style="flex:1; min-width:0;">\r
            <span class="text-mini text-muted">Sito Web</span>\r
            <a [href]="azienda.website" target="_blank" class="link font-semibold">{{ azienda.website }}</a>\r
          </div>\r
        </div>\r
\r
        <!-- Amministratore -->\r
        <div class="flex items-center gap-sm p-sm rounded bg-smoke" *ngIf="adminAzienda">\r
          <lucide-angular name="user-cog" style="flex-shrink:0;"></lucide-angular>\r
          <div class="flex flex-col gap-sm" style="flex:1; min-width:0;">\r
            <span class="text-mini text-muted">Amministratore</span>\r
            <span class="font-semibold">{{ adminAzienda.first_name }} {{ adminAzienda.last_name }}</span>\r
            <span class="chip-mini" style="width: fit-content;">{{ adminAzienda.email }}</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Orari di Lavoro -->\r
    <div class="card" *ngIf="azienda">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="clock"></lucide-angular>\r
        <h3 class="card-title m-0">Orari di Lavoro</h3>\r
      </div>\r
      <div class="flex flex-col gap-sm">\r
\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke"\r
             *ngIf="azienda.opening_time && azienda.closing_time">\r
          <span class="text-muted text-mini">Orario Ufficio</span>\r
          <span class="chip-mini">{{ azienda.opening_time }} \u2013 {{ azienda.closing_time }}</span>\r
        </div>\r
\r
        <div class="flex items-center gap-sm mb-sm mt-sm">\r
          <lucide-angular name="calendar-days"></lucide-angular>\r
          <span class="font-semibold text-mini">Orari Settimanali</span>\r
        </div>\r
\r
        <div class="flex flex-col gap-sm">\r
          <div class="flex justify-between items-center p-sm rounded bg-smoke"\r
               *ngFor="let giorno of giorniSettimana">\r
            <span class="font-semibold text-mini">{{ giorno.label }}</span>\r
            <span class="chip-mini" [class.warning]="isGiornoChiuso(giorno.key)">\r
              {{ getOrarioGiorno(giorno.key) }}\r
            </span>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== STATISTICHE AZIENDALI ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center gap-sm mb-sm">\r
      <lucide-angular name="chart-bar"></lucide-angular>\r
      <h2 class="text-md font-bold">Statistiche Aziendali</h2>\r
    </div>\r
\r
    <div class="grid-cards">\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <lucide-angular name="users"></lucide-angular>\r
          <h3 class="card-title m-0">Dipendenti Totali</h3>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">{{ statistiche?.dipendentiTotali || 0 }}</div>\r
        <p class="text-muted text-mini mt-sm">Persone nell'azienda</p>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <lucide-angular name="user-check"></lucide-angular>\r
          <h3 class="card-title m-0">Dipendenti Attivi</h3>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">{{ statistiche?.dipendentiAttivi || 0 }}</div>\r
        <p class="text-muted text-mini mt-sm">Attualmente attivi</p>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <lucide-angular name="fingerprint"></lucide-angular>\r
          <h3 class="card-title m-0">Timbrature Oggi</h3>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">{{ statistiche?.timbratureOggi || 0 }}</div>\r
        <p class="text-muted text-mini mt-sm">Registrate oggi</p>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <lucide-angular name="building"></lucide-angular>\r
          <h3 class="card-title m-0">Presenze Oggi</h3>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">{{ statistiche?.presenzeOggi || 0 }}</div>\r
        <p class="text-muted text-mini mt-sm">Dipendenti in ufficio</p>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- ===== TEAM AZIENDALE ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg" *ngIf="dipendenti.length > 0">\r
\r
    <div class="flex items-center gap-sm mb-sm">\r
      <lucide-angular name="users-round"></lucide-angular>\r
      <h2 class="text-md font-bold">Team Aziendale</h2>\r
    </div>\r
\r
    <div class="grid-cards">\r
      <div class="card" *ngFor="let dipendente of dipendenti">\r
        <div class="flex items-center gap-sm flex-wrap">\r
          <div class="avatar-sm">\r
            {{ (dipendente?.first_name || '').charAt(0) }}{{ (dipendente?.last_name || '').charAt(0) }}\r
          </div>\r
          <div class="flex flex-col gap-sm" style="flex:1; min-width:0;">\r
            <span class="font-semibold text-mini">\r
              {{ dipendente?.first_name }} {{ dipendente?.last_name }}\r
            </span>\r
            <span class="chip" [class]="'role-' + dipendente?.role">\r
              {{ getRuoloLabel(dipendente?.role) }}\r
            </span>\r
          </div>\r
          <span class="chip-mini"\r
                [class.active]="dipendente?.is_active"\r
                [class.warning]="!dipendente?.is_active">\r
            {{ dipendente?.is_active ? 'Attivo' : 'Inattivo' }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== ANNUNCI AZIENDALI ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center justify-between gap-sm mb-sm">\r
      <div class="flex items-center gap-sm">\r
        <lucide-angular name="megaphone"></lucide-angular>\r
        <h2 class="text-md font-bold">Annunci Aziendali</h2>\r
      </div>\r
      <button class="promethea-button outline"\r
              *ngIf="hasRole('admin')"\r
              (click)="mostraFormAnnuncio = !mostraFormAnnuncio">\r
        <lucide-angular name="plus"></lucide-angular>\r
        Nuovo Annuncio\r
      </button>\r
    </div>\r
\r
    <!-- Form nuovo annuncio -->\r
    <div *ngIf="mostraFormAnnuncio && hasRole('admin')"\r
         class="flex flex-col gap-md p-md rounded border bg-smoke">\r
\r
      <div class="flex items-center gap-sm mb-sm">\r
        <lucide-angular name="pencil"></lucide-angular>\r
        <h3 class="font-bold text-mini">Crea Nuovo Annuncio</h3>\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <lucide-angular name="type"></lucide-angular>\r
          Titolo Annuncio\r
        </label>\r
        <input type="text"\r
               [(ngModel)]="nuovoAnnuncio.title"\r
               placeholder="Inserisci il titolo dell'annuncio">\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <lucide-angular name="align-left"></lucide-angular>\r
          Contenuto\r
        </label>\r
        <textarea [(ngModel)]="nuovoAnnuncio.content"\r
                  placeholder="Inserisci il contenuto dell'annuncio">\r
        </textarea>\r
      </div>\r
\r
      <div class="flex gap-sm justify-end">\r
        <button class="promethea-button ghost" (click)="annullaCreazioneAnnuncio()">\r
          <lucide-angular name="x"></lucide-angular>\r
          Annulla\r
        </button>\r
        <button class="promethea-button"\r
                (click)="creaAnnuncio()"\r
                [disabled]="!nuovoAnnuncio.title || !nuovoAnnuncio.content">\r
          <lucide-angular name="send"></lucide-angular>\r
          Pubblica Annuncio\r
        </button>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Loading annunci -->\r
    <div *ngIf="isLoadingAnnunci" class="flex items-center gap-sm p-md text-muted">\r
      <lucide-angular name="loader-circle" class="animate-spin"></lucide-angular>\r
      <span class="text-mini">Caricamento annunci...</span>\r
    </div>\r
\r
    <!-- Lista Annunci -->\r
    <ng-container *ngIf="annunci.length > 0; else noAnnunci">\r
    <div class="flex flex-col gap-sm" #announcementsSection>\r
        <div class="card" *ngFor="let annuncio of annunci">\r
\r
        <div class="flex justify-between items-start gap-sm mb-sm">\r
            <a href="#" class="link font-bold"\r
            (click)="openAnnouncement(annuncio); $event.preventDefault()">\r
            {{ annuncio.title }}\r
            <lucide-angular *ngIf="!annuncio.is_read"\r
                            name="badge-alert"\r
                            style="display:inline; width:16px; height:16px; vertical-align:middle;"\r
                            title="Non letto">\r
            </lucide-angular>\r
            </a>\r
            <span class="chip-mini" style="flex-shrink:0;">\r
            {{ annuncio.created_at | date:'dd/MM/yyyy HH:mm' }}\r
            </span>\r
        </div>\r
\r
        <p class="text-muted text-mini">\r
            {{ annuncio.content | slice:0:200 }}<span *ngIf="annuncio.content.length > 200">\u2026</span>\r
        </p>\r
\r
        <div class="flex items-center gap-sm mt-sm">\r
            <lucide-angular name="user" style="width:12px; height:12px;"></lucide-angular>\r
            <small class="text-muted">{{ getAuthorName(annuncio) }}</small>\r
        </div>\r
\r
        </div>\r
    </div>\r
    </ng-container>\r
\r
    <!-- Empty state annunci -->\r
    <ng-template #noAnnunci>\r
      <div class="flex flex-col items-center justify-center gap-md p-lg text-center empty-state">\r
        <div class="avatartondo" style="width: 64px; height: 64px;">\r
          <lucide-angular name="megaphone"></lucide-angular>\r
        </div>\r
        <div>\r
          <h3 class="font-bold mb-sm">Nessun annuncio</h3>\r
          <p class="text-muted text-mini">Non ci sono annunci aziendali al momento.</p>\r
          <p class="text-muted text-mini mt-sm" *ngIf="hasRole('admin')">\r
            Clicca su "Nuovo Annuncio" per pubblicare il primo annuncio.\r
          </p>\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
  </div>\r
\r
  <!-- ===== MODAL ANNUNCIO ===== -->\r
  <div *ngIf="showAnnouncementModal"\r
       class="modal-overlay"\r
       (click)="closeAnnouncement()">\r
    <div class="modal-container modal-md" (click)="$event.stopPropagation()" [ngStyle]="modalStyle">\r
\r
      <div class="modal-header">\r
        <div class="flex items-center gap-sm">\r
          <lucide-angular name="megaphone"></lucide-angular>\r
          <h3 class="section-title">{{ selectedAnnouncement?.title }}</h3>\r
        </div>\r
        <button class="icon-button" (click)="closeAnnouncement()">\r
          <lucide-angular name="x"></lucide-angular>\r
        </button>\r
      </div>\r
\r
      <div class="form-card flex flex-col gap-md">\r
        <span class="chip-mini" style="width: fit-content;">\r
          {{ selectedAnnouncement?.created_at | date:'dd/MM/yyyy HH:mm' }}\r
        </span>\r
        <p style="white-space: pre-line;">{{ selectedAnnouncement?.content }}</p>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button class="promethea-button outline" (click)="selectedAnnouncement && toggleMarkUnread(selectedAnnouncement)">\r
          <lucide-angular [name]="selectedAnnouncement?.is_read ? 'eye-off' : 'eye'"></lucide-angular>\r
          {{ selectedAnnouncement?.is_read ? 'Segna da leggere' : 'Segna come letto' }}\r
        </button>\r
        <button class="promethea-button ghost" (click)="closeAnnouncement()">\r
          <lucide-angular name="x"></lucide-angular>\r
          Chiudi\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
</div>` }]
  }], null, { announcementsSectionRef: [{
    type: ViewChild,
    args: ["announcementsSection"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfiloAziendaleComponent, { className: "ProfiloAziendaleComponent", filePath: "src/app/timbrature/features/profilo-aziendale/profilo-aziendale.component.ts", lineNumber: 29 });
})();
export {
  ProfiloAziendaleComponent
};
//# sourceMappingURL=chunk-EXA6CJPJ.js.map
