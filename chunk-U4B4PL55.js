import {
  CompanyService
} from "./chunk-BY47AI6E.js";
import {
  TimbratureService
} from "./chunk-G6UJC4GH.js";
import {
  UsersService
} from "./chunk-KKPCYEAQ.js";
import {
  AuthService
} from "./chunk-YT7WS7HI.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-JWP3QZ4U.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DecimalPipe,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Subscription,
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/features/home/home.component.ts
function HomeComponent_div_1_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.timbratureService.formattaOrarioTimbratura(ctx_r1.todaysTimbratura), " ");
  }
}
function HomeComponent_div_1_ng_container_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HomeComponent_div_1_ng_container_21_div_1_Template, 2, 1, "div", 31)(2, HomeComponent_div_1_ng_container_21_div_2_Template, 2, 0, "div", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.todaysTimbratura);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.todaysTimbratura);
  }
}
function HomeComponent_div_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTimbratureOggi());
  }
}
function HomeComponent_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "Azienda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275element(5, "lucide-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 10);
    \u0275\u0275text(9, "Dipendenti Attivi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 11);
    \u0275\u0275text(11, "In organico");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getDipendentiAttivi());
  }
}
function HomeComponent_div_1_button_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275element(1, "lucide-icon", 35);
    \u0275\u0275text(2, " Gestisci Dipendenti ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275element(7, "lucide-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 10);
    \u0275\u0275text(12, "Ore Lavorate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 11);
    \u0275\u0275text(14, "Questo mese");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 4)(16, "div", 5)(17, "span", 6);
    \u0275\u0275text(18, "Oggi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 7);
    \u0275\u0275element(20, "lucide-icon", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, HomeComponent_div_1_ng_container_21_Template, 3, 2, "ng-container", 13)(22, HomeComponent_div_1_ng_container_22_Template, 3, 1, "ng-container", 13);
    \u0275\u0275elementStart(23, "h3", 10);
    \u0275\u0275text(24, "Timbrature Oggi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 11);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, HomeComponent_div_1_div_27_Template, 12, 1, "div", 14);
    \u0275\u0275elementStart(28, "div", 4)(29, "div", 5)(30, "span", 6);
    \u0275\u0275text(31, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 7);
    \u0275\u0275element(33, "lucide-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 16)(35, "span", 17);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "h3", 10);
    \u0275\u0275text(38, "Stato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 11);
    \u0275\u0275text(40, "Il tuo account");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 18)(42, "div", 19)(43, "div", 20);
    \u0275\u0275element(44, "lucide-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h2", 22);
    \u0275\u0275text(46, "Azioni Rapide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 23)(48, "button", 24);
    \u0275\u0275listener("click", function HomeComponent_div_1_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuovaTimbraturaWithCheck());
    });
    \u0275\u0275element(49, "lucide-icon", 25);
    \u0275\u0275text(50, " Nuova Timbratura ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 26);
    \u0275\u0275element(52, "lucide-icon", 27);
    \u0275\u0275text(53, " Vedi Timbrature ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 28);
    \u0275\u0275element(55, "lucide-icon", 29);
    \u0275\u0275text(56, " Impostazioni ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, HomeComponent_div_1_button_57_Template, 3, 0, "button", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEmployee ? "Le tue ore" : "Totale mese");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, ctx_r1.getOreLavorateMese(), "1.1-1"), "h ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.isEmployee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentUser && !ctx_r1.isEmployee);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEmployee ? "La tua timbratura" : "Nell'azienda", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasRole("admin") || ctx_r1.hasRole("manager"));
    \u0275\u0275advance(8);
    \u0275\u0275classMap((ctx_r1.currentUser == null ? null : ctx_r1.currentUser.is_active) ? "active" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.is_active) ? "Attivo" : "Inattivo", " ");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx_r1.hasRole("admin"));
  }
}
var HomeComponent = class _HomeComponent {
  authService = inject(AuthService);
  companyService = inject(CompanyService);
  timbratureService = inject(TimbratureService);
  usersService = inject(UsersService);
  router = inject(Router);
  currentUser = null;
  company = null;
  timbrature = [];
  todaysTimbratura = null;
  dipendenti = [];
  isLoading = true;
  subscriptions = new Subscription();
  constructor() {
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      const companyId = this.authService.companyId;
      if (companyId) {
        this.caricaDatiHome(companyId);
      } else {
        this.isLoading = false;
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  caricaDatiHome(companyId) {
    this.isLoading = true;
    const company$ = this.companyService.getById(companyId).pipe(catchError((err) => {
      console.error("Errore nel caricamento azienda:", err);
      return of(null);
    }));
    let timbrature$;
    if (this.authService.hasRole("employee")) {
      timbrature$ = this.timbratureService.fetchTimbrature({ userId: this.currentUser?.id ?? "", orderAsc: false }).pipe(catchError((err) => {
        console.error("Errore nel caricamento timbrature:", err);
        return of([]);
      }));
    } else {
      timbrature$ = this.timbratureService.fetchTimbrature({ companyId, orderAsc: false }).pipe(catchError((err) => {
        console.error("Errore nel caricamento timbrature:", err);
        return of([]);
      }));
    }
    let dipendenti$ = of([]);
    if (this.hasRole("admin") || this.hasRole("manager")) {
      dipendenti$ = this.usersService.getByCompany(companyId).pipe(catchError((err) => {
        console.error("Errore nel caricamento dipendenti:", err);
        return of([]);
      }));
    }
    this.subscriptions.add(forkJoin({
      company: company$,
      timbrature: timbrature$,
      dipendenti: dipendenti$
    }).subscribe({
      next: (result) => {
        this.company = result.company;
        this.timbrature = result.timbrature;
        this.dipendenti = result.dipendenti;
        this.updateTodayTimbratura();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Errore nel caricamento dati home:", err);
        this.isLoading = false;
      }
    }));
  }
  hasRole(role) {
    return this.authService.hasRole(role);
  }
  // --- Metodi statistiche ---
  getOreLavorateSettimana() {
    if (!this.timbrature || this.timbrature.length === 0)
      return 0;
    const { inizioSettimana, oggi } = this.getIntervaloSettimanaCorrente();
    const timbratureSettimana = this.timbrature.filter((t) => {
      if (!t.end_ts)
        return false;
      const dataTimbratura = new Date(t.start_ts);
      return dataTimbratura >= inizioSettimana && dataTimbratura <= oggi;
    });
    let timbratureDaContare = timbratureSettimana;
    if (this.authService.hasRole("employee")) {
      timbratureDaContare = timbratureSettimana.filter((t) => t.user_id === this.currentUser?.id);
    }
    const minutiTotali = timbratureDaContare.reduce((total, t) => total + (t.total_minutes || 0), 0);
    return minutiTotali / 60;
  }
  getTimbratureOggi() {
    if (!this.timbrature || this.timbrature.length === 0)
      return 0;
    const oggi = /* @__PURE__ */ new Date();
    oggi.setHours(0, 0, 0, 0);
    const domani = new Date(oggi);
    domani.setDate(domani.getDate() + 1);
    const timbratureOggi = this.timbrature.filter((t) => {
      const d = new Date(t.start_ts);
      return d >= oggi && d < domani;
    });
    if (this.authService.hasRole("employee")) {
      return timbratureOggi.filter((t) => t.user_id === this.currentUser?.id).length;
    }
    return timbratureOggi.length;
  }
  getDipendentiAttivi() {
    return this.dipendenti.filter((d) => d.is_active).length;
  }
  getOreLavorateMese() {
    if (!this.timbrature || !this.timbrature.length)
      return 0;
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    let totalMinutes = 0;
    for (const t of this.timbrature) {
      if (!t?.start_ts)
        continue;
      const start = new Date(t.start_ts);
      if (start.getFullYear() !== year || start.getMonth() !== month)
        continue;
      if (t.total_minutes) {
        totalMinutes += t.total_minutes;
      } else if (t.end_ts) {
        const end = new Date(t.end_ts);
        const diff = Math.max(0, Math.round((end.getTime() - start.getTime()) / 6e4));
        totalMinutes += diff;
      }
    }
    return totalMinutes / 60;
  }
  // --- Metodi per timbratura ---
  nuovaTimbraturaWithCheck() {
    return __async(this, null, function* () {
      try {
        if (!this.currentUser) {
          this.router.navigate(["/crea-timbratura"]);
          return;
        }
        const timbrature = yield this.timbratureService.fetchTimbrature({ userId: this.currentUser.id }).toPromise();
        const oggi = /* @__PURE__ */ new Date();
        oggi.setHours(0, 0, 0, 0);
        const domani = new Date(oggi);
        domani.setDate(domani.getDate() + 1);
        const found = timbrature?.find((t) => {
          const d = new Date(t.start_ts);
          return d >= oggi && d < domani;
        });
        if (found) {
          const ingressTime = new Date(found.start_ts).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
          const ok = window.confirm(`\xC8 gi\xE0 presente una timbratura oggi con ingresso alle ${ingressTime}.
Vuoi modificarla?`);
          if (ok) {
            this.router.navigate(["/crea-timbratura"], { queryParams: { edit: found.id, mode: "edit" } });
          }
        } else {
          this.router.navigate(["/crea-timbratura"]);
        }
      } catch (err) {
        console.error("[Home] nuovaTimbraturaWithCheck error", err);
        this.router.navigate(["/crea-timbratura"]);
      }
    });
  }
  updateTodayTimbratura() {
    this.todaysTimbratura = null;
    if (!this.currentUser || !this.timbrature.length)
      return;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const found = this.timbrature.find((t) => {
      if (!t?.start_ts)
        return false;
      const d = new Date(t.start_ts);
      return d >= today && d < tomorrow && (this.authService.hasRole("admin") || t.user_id === this.currentUser?.id);
    });
    this.todaysTimbratura = found || null;
  }
  getIntervaloSettimanaCorrente() {
    const oggi = /* @__PURE__ */ new Date();
    oggi.setHours(23, 59, 59, 999);
    const giornoSettimana = oggi.getDay();
    const giorniDaLunedi = giornoSettimana === 0 ? 6 : giornoSettimana - 1;
    const inizioSettimana = new Date(oggi);
    inizioSettimana.setDate(oggi.getDate() - giorniDaLunedi);
    inizioSettimana.setHours(0, 0, 0, 0);
    return { inizioSettimana, oggi };
  }
  get isAdmin() {
    return this.authService.hasRole("admin");
  }
  get isManager() {
    return this.authService.hasRole("manager");
  }
  get isEmployee() {
    return this.authService.hasRole("employee");
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 2, vars: 1, consts: [[1, "page-container"], ["class", "p-lg flex flex-col gap-lg", 4, "ngIf"], [1, "p-lg", "flex", "flex-col", "gap-lg"], [1, "grid-cards"], [1, "card", "hover-lift"], [1, "flex", "items-center", "justify-between", "mb-sm"], [1, "chip-mini"], [1, "icon-lucide"], ["name", "clock"], [1, "gradient-text", "text-lg", "font-bold"], [1, "card-title", "m-0"], [1, "text-muted", "text-mini"], ["name", "scan-line"], [4, "ngIf"], ["class", "card hover-lift", 4, "ngIf"], ["name", "shield-check"], [1, "mb-sm", "mt-sm"], [1, "chip", "text-md"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "avatartondo"], ["name", "zap"], [1, "font-bold", "text-md", "m-0"], [1, "dashboard-actions"], ["type", "button", 1, "promethea-button", 3, "click"], ["name", "plus-circle"], ["routerLink", "/timbrature", 1, "promethea-button", "outline"], ["name", "list"], ["routerLink", "/impostazioni", 1, "promethea-button", "outline"], ["name", "settings"], ["class", "promethea-button ghost", "routerLink", "/dipendenti", 4, "ngIf"], ["class", "gradient-text text-md font-bold", 4, "ngIf"], ["class", "text-muted text-md font-bold", 4, "ngIf"], [1, "gradient-text", "text-md", "font-bold"], [1, "text-muted", "text-md", "font-bold"], ["name", "users"], ["routerLink", "/dipendenti", 1, "promethea-button", "ghost"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, HomeComponent_div_1_Template, 58, 13, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, DecimalPipe, RouterModule, RouterLink, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.dashboard-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap-md);\n}\n.dashboard-actions[_ngcontent-%COMP%]   .promethea-button[_ngcontent-%COMP%] {\n  flex: 1 1 180px;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterModule, LucideAngularModule], template: `<div class="page-container">\r
  <!-- CONTENT -->\r
  <div *ngIf="!isLoading" class="p-lg flex flex-col gap-lg">\r
    <!-- KPI CARDS -->\r
    <div class="grid-cards">\r
      <!-- Ore Lavorate -->\r
      <div class="card hover-lift">\r
        <div class="flex items-center justify-between mb-sm">\r
          <span class="chip-mini">{{ isEmployee ? 'Le tue ore' : 'Totale mese' }}</span>\r
          <div class=icon-lucide>\r
            <lucide-icon name="clock"></lucide-icon>\r
          </div>\r
        </div>\r
        <div class="gradient-text text-lg font-bold">\r
          {{ getOreLavorateMese() | number:'1.1-1' }}h\r
        </div>\r
        <h3 class="card-title m-0">Ore Lavorate</h3>\r
        <p class="text-muted text-mini">Questo mese</p>\r
      </div>\r
      <!-- Timbrature Oggi -->\r
      <div class="card hover-lift">\r
        <div class="flex items-center justify-between mb-sm">\r
          <span class="chip-mini">Oggi</span>\r
          <div class=icon-lucide>\r
            <lucide-icon name="scan-line"></lucide-icon>\r
          </div>\r
        </div>\r
        <ng-container *ngIf="isEmployee">\r
          <div class="gradient-text text-md font-bold" *ngIf="todaysTimbratura">\r
            {{ timbratureService.formattaOrarioTimbratura(todaysTimbratura) }}\r
          </div>\r
          <div class="text-muted text-md font-bold" *ngIf="!todaysTimbratura">\u2014</div>\r
        </ng-container>\r
        <ng-container *ngIf="currentUser && !isEmployee">\r
          <div class="gradient-text text-md font-bold">{{ getTimbratureOggi() }}</div>\r
        </ng-container>\r
        <h3 class="card-title m-0">Timbrature Oggi</h3>\r
        <p class="text-muted text-mini">\r
          {{ isEmployee ? 'La tua timbratura' : 'Nell\\'azienda' }}\r
        </p>\r
      </div>\r
      <!-- Dipendenti Attivi (solo admin/manager) -->\r
      <div class="card hover-lift" *ngIf="hasRole('admin') || hasRole('manager')">\r
        <div class="flex items-center justify-between mb-sm">\r
          <span class="chip-mini">Azienda</span>\r
          <div class=icon-lucide>\r
            <lucide-icon name="users"></lucide-icon>\r
          </div>\r
        </div>\r
        <div class="gradient-text text-lg font-bold">{{ getDipendentiAttivi() }}</div>\r
        <h3 class="card-title m-0">Dipendenti Attivi</h3>\r
        <p class="text-muted text-mini">In organico</p>\r
      </div>\r
      <!-- Stato Account -->\r
      <div class="card hover-lift">\r
        <div class="flex items-center justify-between mb-sm">\r
          <span class="chip-mini">Account</span>\r
          <div class=icon-lucide>\r
            <lucide-icon name="shield-check"></lucide-icon>\r
          </div>\r
        </div>\r
        <div class="mb-sm mt-sm">\r
          <span class="chip text-md" [class]="currentUser?.is_active ? 'active' : 'warning'">\r
            {{ currentUser?.is_active ? 'Attivo' : 'Inattivo' }}\r
          </span>\r
        </div>\r
        <h3 class="card-title m-0">Stato</h3>\r
        <p class="text-muted text-mini">Il tuo account</p>\r
      </div>\r
    </div>\r
    <!-- AZIONI RAPIDE -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <div class="avatartondo">\r
          <lucide-icon name="zap"></lucide-icon>\r
        </div>\r
        <h2 class="font-bold text-md m-0">Azioni Rapide</h2>\r
      </div>\r
      <div class="dashboard-actions">\r
        <button class="promethea-button" type="button" (click)="nuovaTimbraturaWithCheck()">\r
          <lucide-icon name="plus-circle"></lucide-icon>\r
          Nuova Timbratura\r
        </button>\r
        <button class="promethea-button outline" routerLink="/timbrature">\r
          <lucide-icon name="list"></lucide-icon>\r
          Vedi Timbrature\r
        </button>\r
        <button class="promethea-button outline" routerLink="/impostazioni">\r
          <lucide-icon name="settings"></lucide-icon>\r
          Impostazioni\r
        </button>\r
        <button class="promethea-button ghost" *ngIf="hasRole('admin')" routerLink="/dipendenti">\r
          <lucide-icon name="users"></lucide-icon>\r
          Gestisci Dipendenti\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/timbrature/features/home/home.component.css */\n.dashboard-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap-md);\n}\n.dashboard-actions .promethea-button {\n  flex: 1 1 180px;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/timbrature/features/home/home.component.ts", lineNumber: 21 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-U4B4PL55.js.map
