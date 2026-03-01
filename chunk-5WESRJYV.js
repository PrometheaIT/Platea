import {
  DepartmentsService
} from "./chunk-XFT2VFKL.js";
import {
  ReportService
} from "./chunk-DZLWY43S.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-JWP3QZ4U.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  PercentPipe
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Subject,
  inject,
  lastValueFrom,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/features/kpi/kpi.component.ts
function KpiComponent_ng_container_21_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dip_r4 = ctx.$implicit;
    \u0275\u0275property("value", dip_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", dip_r4.first_name, " ", dip_r4.last_name, " ");
  }
}
function KpiComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function KpiComponent_ng_container_21_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filtroDipendente, $event) || (ctx_r2.filtroDipendente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function KpiComponent_ng_container_21_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFiltroChange());
    });
    \u0275\u0275elementStart(2, "option", 16);
    \u0275\u0275text(3, "Tutti i dipendenti");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, KpiComponent_ng_container_21_option_4_Template, 2, 3, "option", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filtroDipendente);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.dipendenti);
  }
}
function KpiComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "input", 49);
    \u0275\u0275elementStart(1, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function KpiComponent_ng_template_22_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filtroDipendente, $event) || (ctx_r2.filtroDipendente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.first_name) + " " + (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.last_name));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filtroDipendente);
  }
}
function KpiComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275property("value", r_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.name);
  }
}
function KpiComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 53);
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 4, item_r7.ore, "1.0-1"), "h");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r2.getAltezzaBarra(item_r7.ore) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.nome);
  }
}
function KpiComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "percent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fascia_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fascia_r8.fascia);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, fascia_r8.percentuale));
  }
}
function KpiComponent_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 58)(3, "div", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 60);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const performance_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(performance_r9.nome.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(performance_r9.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 12, performance_r9.oreTotali, "1.1-1"), "h");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 15, performance_r9.oreMedieGiorno, "1.1-1"), "h");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", performance_r9.giorniPresente, "/", performance_r9.giorniTotali, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, performance_r9.puntualita));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", performance_r9.attivo)("warning", !performance_r9.attivo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", performance_r9.attivo ? "Attivo" : "Inattivo", " ");
  }
}
function KpiComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const giorno_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(giorno_r10.giorno);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, giorno_r10.ore, "1.1-1"), "h");
  }
}
function KpiComponent_div_131_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "lucide-angular", 63);
    \u0275\u0275elementStart(2, "div", 64)(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const anomalia_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(anomalia_r11.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(anomalia_r11.descrizione);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", anomalia_r11.dipendente, " \xB7 ", \u0275\u0275pipeBind2(9, 4, anomalia_r11.data, "dd/MM/yyyy"), " ");
  }
}
function KpiComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, KpiComponent_div_131_div_1_Template, 10, 7, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.anomalie);
  }
}
function KpiComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275element(2, "lucide-angular", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 70);
    \u0275\u0275text(5, "Nessuna anomalia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 71);
    \u0275\u0275text(7, "Non sono state rilevate anomalie nelle timbrature");
    \u0275\u0275elementEnd()()();
  }
}
var KpiComponent = class _KpiComponent {
  authService = inject(AuthService);
  usersService = inject(UsersService);
  timbratureService = inject(TimbratureService);
  departmentsService = inject(DepartmentsService);
  reportService = inject(ReportService);
  companyService = inject(CompanyService);
  currentUser = null;
  // Filtri
  filtroPeriodo = "mese";
  filtroDipendente = "tutti";
  filtroReparto = "tutti";
  // Dati per filtri
  dipendenti = [];
  reparti = [];
  // Dati KPI
  kpi = {
    oreTotali: 0,
    presenzeMedie: 0,
    oreMediePerDipendente: 0,
    tassoPuntualita: 0
  };
  orePerDipendente = [];
  performanceDipendenti = [];
  distribuzioneOrari = [];
  andamentoSettimanale = [];
  anomalie = [];
  isLoading = true;
  destroy$ = new Subject();
  ngOnInit() {
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe((user) => __async(this, null, function* () {
      this.currentUser = user;
      if (!user)
        return;
      yield this.loadInitialData();
    }));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadInitialData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield Promise.all([
          this.loadReparti(),
          this.loadDipendenti()
        ]);
        yield this.loadKPI();
      } catch (error) {
        console.error("Errore caricamento dati iniziali", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadReparti() {
    return __async(this, null, function* () {
      if (!this.currentUser?.company_id) {
        this.reparti = [];
        return;
      }
      try {
        this.reparti = yield lastValueFrom(this.departmentsService.getByCompany(this.currentUser.company_id));
      } catch (error) {
        console.error("Errore caricamento reparti", error);
        this.reparti = [];
      }
    });
  }
  loadDipendenti() {
    return __async(this, null, function* () {
      if (!this.currentUser?.company_id) {
        this.dipendenti = [];
        return;
      }
      try {
        let employees = yield lastValueFrom(this.usersService.getByCompany(this.currentUser.company_id));
        if (this.authService.hasRole("employee")) {
          employees = employees.filter((e) => e.id === this.currentUser?.id);
        } else if (this.authService.hasRole("manager")) {
          const company = yield lastValueFrom(this.companyService.getForUser(this.currentUser.id, this.currentUser.company_id));
          employees = this.companyService.filterEmployeesByVisibility(employees, company, this.currentUser.id);
        }
        this.dipendenti = employees;
      } catch (error) {
        console.error("Errore caricamento dipendenti", error);
        this.dipendenti = [];
      }
    });
  }
  getDateRange(period) {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now);
    let end = new Date(now);
    switch (period) {
      case "oggi":
        start.setHours(0, 0, 0, 0);
        end = new Date(start);
        end.setDate(end.getDate() + 1);
        break;
      case "settimana":
        const day = (now.getDay() + 6) % 7;
        start.setDate(now.getDate() - day);
        start.setHours(0, 0, 0, 0);
        end = new Date(start);
        end.setDate(start.getDate() + 7);
        break;
      case "trimestre":
        start.setMonth(now.getMonth() - 3);
        start.setHours(0, 0, 0, 0);
        end = new Date(now);
        end.setHours(23, 59, 59, 999);
        break;
      case "mese":
      default:
        start.setDate(1);
        start.setHours(0, 0, 0, 0);
        end = new Date(start.getFullYear(), start.getMonth() + 1, 1);
        break;
    }
    return { start, end };
  }
  loadKPI() {
    return __async(this, null, function* () {
      if (!this.currentUser?.company_id)
        return;
      this.isLoading = true;
      try {
        const companyId = this.currentUser.company_id;
        const range = this.getDateRange(this.filtroPeriodo);
        const filters = {
          company_id: companyId,
          start_ts: {
            gte: range.start.toISOString(),
            lt: range.end.toISOString()
          }
        };
        if (this.filtroDipendente && this.filtroDipendente !== "tutti") {
          filters.user_id = this.filtroDipendente;
        }
        let timbrature = yield lastValueFrom(this.timbratureService.getFiltered(filters));
        if (!this.authService.hasRole("admin")) {
          const allowedIds = new Set(this.dipendenti.map((d) => d.id));
          timbrature = timbrature.filter((t) => allowedIds.has(t.user_id));
        }
        if (this.filtroReparto && this.filtroReparto !== "tutti") {
          const userDeptMap = new Map(this.dipendenti.map((d) => [d.id, d.department_id]));
          timbrature = timbrature.filter((t) => userDeptMap.get(t.user_id) === this.filtroReparto);
        }
        this.calcolaKPI(timbrature, range);
      } catch (error) {
        console.error("Errore caricamento KPI", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  calcolaKPI(timbrature, range) {
    const totalMinutes = timbrature.reduce((acc, t) => acc + (t.total_minutes || 0), 0);
    this.kpi.oreTotali = Math.round(totalMinutes / 60 * 10) / 10;
    const days = [];
    for (let d = new Date(range.start); d < range.end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    const presenzePerGiorno = days.map((day) => {
      const dayStart = new Date(day);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);
      const usersSet = new Set(timbrature.filter((t) => {
        const ts = new Date(t.start_ts);
        return ts >= dayStart && ts < dayEnd;
      }).map((t) => t.user_id));
      return usersSet.size;
    });
    const totaleGiorni = presenzePerGiorno.length || 1;
    this.kpi.presenzeMedie = Math.round(presenzePerGiorno.reduce((a, b) => a + b, 0) / totaleGiorni * 10) / 10;
    const minutesByUser = {};
    const daysByUser = {};
    let punctualCount = 0;
    timbrature.forEach((t) => {
      const uid = t.user_id;
      minutesByUser[uid] = (minutesByUser[uid] || 0) + (t.total_minutes || 0);
      const dayKey = new Date(t.start_ts).toISOString().slice(0, 10);
      if (!daysByUser[uid])
        daysByUser[uid] = /* @__PURE__ */ new Set();
      daysByUser[uid].add(dayKey);
      try {
        const startHour = new Date(t.start_ts).getHours();
        if (startHour <= 9)
          punctualCount++;
      } catch {
      }
    });
    const userMap = new Map(this.dipendenti.map((d) => [d.id, d]));
    this.orePerDipendente = Object.entries(minutesByUser).map(([uid, minutes]) => {
      const user = userMap.get(uid);
      const nome = user ? `${user.first_name} ${user.last_name}` : uid;
      return { nome, ore: Math.round(minutes / 60 * 10) / 10 };
    }).sort((a, b) => b.ore - a.ore);
    this.performanceDipendenti = Object.entries(minutesByUser).map(([uid, minutes]) => {
      const user = userMap.get(uid);
      const nome = user ? `${user.first_name} ${user.last_name}` : uid;
      const giorni = daysByUser[uid]?.size || 0;
      const ore = Math.round(minutes / 60 * 10) / 10;
      return {
        nome,
        oreTotali: ore,
        oreMedieGiorno: giorni > 0 ? Math.round(ore / giorni * 10) / 10 : 0,
        giorniPresente: giorni,
        giorniTotali: days.length,
        puntualita: 0,
        attivo: user?.is_active ?? true
      };
    });
    const numDip = this.filtroDipendente !== "tutti" ? 1 : this.dipendenti.length || 1;
    this.kpi.oreMediePerDipendente = Math.round(this.kpi.oreTotali / numDip * 10) / 10;
    this.kpi.tassoPuntualita = timbrature.length > 0 ? Math.round(punctualCount / timbrature.length * 100) / 100 : 0;
    const buckets = { before8: 0, b8_830: 0, b830_9: 0, after9: 0 };
    timbrature.forEach((t) => {
      try {
        const d = new Date(t.start_ts);
        const minutesOfDay = d.getHours() * 60 + d.getMinutes();
        if (minutesOfDay < 8 * 60)
          buckets.before8++;
        else if (minutesOfDay < 8 * 60 + 30)
          buckets.b8_830++;
        else if (minutesOfDay < 9 * 60)
          buckets.b830_9++;
        else
          buckets.after9++;
      } catch {
      }
    });
    const totalStarts = timbrature.length || 1;
    this.distribuzioneOrari = [
      { fascia: "Prima delle 8:00", percentuale: Math.round(buckets.before8 / totalStarts * 100) / 100 },
      { fascia: "8:00 - 8:30", percentuale: Math.round(buckets.b8_830 / totalStarts * 100) / 100 },
      { fascia: "8:30 - 9:00", percentuale: Math.round(buckets.b830_9 / totalStarts * 100) / 100 },
      { fascia: "Dopo le 9:00", percentuale: Math.round(buckets.after9 / totalStarts * 100) / 100 }
    ];
    const last7 = [];
    for (let i = 6; i >= 0; i--) {
      const d = /* @__PURE__ */ new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const dayStart = new Date(d);
      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);
      const minutesDay = timbrature.filter((t) => {
        const ts = new Date(t.start_ts);
        return ts >= dayStart && ts < dayEnd;
      }).reduce((acc, t) => acc + (t.total_minutes || 0), 0);
      const giornoLabel = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"][d.getDay() === 0 ? 6 : d.getDay() - 1];
      last7.push({ giorno: giornoLabel, ore: Math.round(minutesDay / 60 * 10) / 10 });
    }
    this.andamentoSettimanale = last7;
    this.anomalie = timbrature.filter((t) => !t.end_ts || (t.total_minutes || 0) <= 0).map((t) => {
      const user = userMap.get(t.user_id);
      const nome = user ? `${user.first_name} ${user.last_name}` : t.user_id;
      return {
        tipo: !t.end_ts ? "Uscita mancante" : "Durata sospetta",
        descrizione: !t.end_ts ? "Uscita non registrata" : "Durata <= 0",
        dipendente: nome,
        data: new Date(t.start_ts)
      };
    });
  }
  onFiltroChange() {
    this.loadKPI();
  }
  aggiornaDati() {
    return __async(this, null, function* () {
      yield this.loadKPI();
    });
  }
  esportaReport() {
    return __async(this, null, function* () {
      if (!this.currentUser?.company_id)
        return;
      try {
        const blob = yield lastValueFrom(this.reportService.exportReport("xlsx", {
          company_id: this.currentUser.company_id,
          tipo: "kpi",
          periodo: this.filtroPeriodo,
          dipendente: this.filtroDipendente,
          reparto: this.filtroReparto
        }));
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `kpi_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Errore esportazione report KPI", error);
        alert("Errore durante l'esportazione");
      }
    });
  }
  getAltezzaBarra(ore) {
    const maxOre = Math.max(...this.orePerDipendente.map((item) => item.ore), 0.1);
    return ore / maxOre * 100;
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
  static \u0275fac = function KpiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KpiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KpiComponent, selectors: [["app-kpi"]], decls: 133, vars: 26, consts: [["selfOnly", ""], [1, "page-container"], [1, "form-card", "flex", "flex-col", "gap-md", "p-lg"], [1, "flex", "flex-wrap", "justify-between", "gap-md"], [1, "form-row", 2, "flex", "1"], [1, "form-group"], [1, "standard-label"], ["name", "calendar"], [3, "ngModelChange", "change", "ngModel"], ["value", "oggi"], ["value", "settimana"], ["value", "mese"], ["value", "trimestre"], ["name", "user"], [4, "ngIf", "ngIfElse"], ["name", "users"], ["value", "tutti"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "gap-sm", 2, "align-self", "flex-end"], [1, "promethea-button", "outline", 3, "click"], ["name", "download"], [1, "promethea-button", 3, "click"], ["name", "refresh-cw"], [1, "grid-cards", "p-lg"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-sm"], ["name", "clock"], [1, "card-title", "m-0"], [1, "text-lg", "font-bold", "gradient-text"], [1, "text-muted", "text-mini", "mt-sm"], ["name", "timer"], ["name", "target"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "bar-chart-3"], [1, "flex", "items-end", "gap-sm", 2, "height", "160px"], ["class", "chart-bar flex flex-col items-center gap-sm", "style", "flex: 1; min-width: 0; height: 100%; justify-content: flex-end;", 4, "ngFor", "ngForOf"], ["name", "pie-chart"], [1, "flex", "flex-col", "gap-sm"], ["class", "flex justify-between items-center p-sm rounded bg-smoke", 4, "ngFor", "ngForOf"], ["name", "trophy"], [1, "text-md", "font-bold"], [1, "table-section"], [1, "crm-table"], [4, "ngFor", "ngForOf"], ["name", "trending-up"], ["name", "triangle-alert"], ["class", "flex flex-col gap-sm", 4, "ngIf"], ["class", "flex flex-col items-center justify-center gap-md p-lg text-center empty-state", 4, "ngIf"], [3, "value"], ["type", "text", "disabled", "", 3, "value"], ["type", "hidden", 3, "ngModelChange", "ngModel"], [1, "chart-bar", "flex", "flex-col", "items-center", "gap-sm", 2, "flex", "1", "min-width", "0", "height", "100%", "justify-content", "flex-end"], [1, "text-mini", "text-muted"], [1, "rounded", "bg-gradient", "transition", 2, "width", "100%", "border-radius", "8px 8px 4px 4px"], [1, "text-mini", "text-muted", "text-interrupt"], [1, "flex", "justify-between", "items-center", "p-sm", "rounded", "bg-smoke"], [1, "font-semibold", "text-mini"], [1, "chip-mini"], [1, "flex", "items-center", "gap-sm"], [1, "avatar-sm"], [1, "chip"], ["class", "flex items-start gap-sm p-sm rounded bg-smoke", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-sm", "p-sm", "rounded", "bg-smoke"], ["name", "info", 2, "flex-shrink", "0", "margin-top", "2px"], [1, "flex", "flex-col", "gap-sm", 2, "min-width", "0"], [1, "text-mini"], [1, "chip-mini", 2, "width", "fit-content"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md", "p-lg", "text-center", "empty-state"], [1, "avatartondo", 2, "width", "56px", "height", "56px"], ["name", "circle-check"], [1, "font-bold", "mb-sm"], [1, "text-muted", "text-mini"]], template: function KpiComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "label", 6);
      \u0275\u0275element(6, "lucide-angular", 7);
      \u0275\u0275text(7, " Periodo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function KpiComponent_Template_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filtroPeriodo, $event) || (ctx.filtroPeriodo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function KpiComponent_Template_select_change_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFiltroChange());
      });
      \u0275\u0275elementStart(9, "option", 9);
      \u0275\u0275text(10, "Oggi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 10);
      \u0275\u0275text(12, "Questa Settimana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 11);
      \u0275\u0275text(14, "Questo Mese");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 12);
      \u0275\u0275text(16, "Questo Trimestre");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 5)(18, "label", 6);
      \u0275\u0275element(19, "lucide-angular", 13);
      \u0275\u0275text(20, " Dipendente ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, KpiComponent_ng_container_21_Template, 5, 2, "ng-container", 14)(22, KpiComponent_ng_template_22_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 5)(25, "label", 6);
      \u0275\u0275element(26, "lucide-angular", 15);
      \u0275\u0275text(27, " Reparto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function KpiComponent_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filtroReparto, $event) || (ctx.filtroReparto = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function KpiComponent_Template_select_change_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFiltroChange());
      });
      \u0275\u0275elementStart(29, "option", 16);
      \u0275\u0275text(30, "Tutti");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, KpiComponent_option_31_Template, 2, 2, "option", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 18)(33, "button", 19);
      \u0275\u0275listener("click", function KpiComponent_Template_button_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.esportaReport());
      });
      \u0275\u0275element(34, "lucide-angular", 20);
      \u0275\u0275text(35, " Esporta Report ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 21);
      \u0275\u0275listener("click", function KpiComponent_Template_button_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.aggiornaDati());
      });
      \u0275\u0275element(37, "lucide-angular", 22);
      \u0275\u0275text(38, " Aggiorna ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 23)(40, "div", 24)(41, "div", 25);
      \u0275\u0275element(42, "lucide-angular", 26);
      \u0275\u0275elementStart(43, "h3", 27);
      \u0275\u0275text(44, "Ore Totali Lavorate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 28);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 29);
      \u0275\u0275text(49, "Nel periodo selezionato");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 24)(51, "div", 25);
      \u0275\u0275element(52, "lucide-angular", 15);
      \u0275\u0275elementStart(53, "h3", 27);
      \u0275\u0275text(54, "Presenze Medie");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 28);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 29);
      \u0275\u0275text(59, "Dipendenti per giorno");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 24)(61, "div", 25);
      \u0275\u0275element(62, "lucide-angular", 30);
      \u0275\u0275elementStart(63, "h3", 27);
      \u0275\u0275text(64, "Ore Medie per Dip.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 28);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 29);
      \u0275\u0275text(69, "Per dipendente");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 24)(71, "div", 25);
      \u0275\u0275element(72, "lucide-angular", 31);
      \u0275\u0275elementStart(73, "h3", 27);
      \u0275\u0275text(74, "Puntualit\xE0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 28);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "percent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 29);
      \u0275\u0275text(79, "Ingressi in orario");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 23)(81, "div", 24)(82, "div", 32);
      \u0275\u0275element(83, "lucide-angular", 33);
      \u0275\u0275elementStart(84, "h3", 27);
      \u0275\u0275text(85, "Ore per Dipendente");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 34);
      \u0275\u0275template(87, KpiComponent_div_87_Template, 7, 7, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 24)(89, "div", 32);
      \u0275\u0275element(90, "lucide-angular", 36);
      \u0275\u0275elementStart(91, "h3", 27);
      \u0275\u0275text(92, "Distribuzione Orari");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 37);
      \u0275\u0275template(94, KpiComponent_div_94_Template, 6, 4, "div", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 2)(96, "div", 25);
      \u0275\u0275element(97, "lucide-angular", 39);
      \u0275\u0275elementStart(98, "h2", 40);
      \u0275\u0275text(99, "Performance Dipendenti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 41)(101, "table", 42)(102, "thead")(103, "tr")(104, "th");
      \u0275\u0275text(105, "Dipendente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th");
      \u0275\u0275text(107, "Ore Totali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th");
      \u0275\u0275text(109, "Ore Medie/Giorno");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th");
      \u0275\u0275text(111, "Giorni Presente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th");
      \u0275\u0275text(113, "Puntualit\xE0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th");
      \u0275\u0275text(115, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "tbody");
      \u0275\u0275template(117, KpiComponent_tr_117_Template, 22, 20, "tr", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 23)(119, "div", 24)(120, "div", 32);
      \u0275\u0275element(121, "lucide-angular", 44);
      \u0275\u0275elementStart(122, "h3", 27);
      \u0275\u0275text(123, "Andamento Settimanale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 37);
      \u0275\u0275template(125, KpiComponent_div_125_Template, 6, 5, "div", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 24)(127, "div", 32);
      \u0275\u0275element(128, "lucide-angular", 45);
      \u0275\u0275elementStart(129, "h3", 27);
      \u0275\u0275text(130, "Anomalie Rilevate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(131, KpiComponent_div_131_Template, 2, 1, "div", 46)(132, KpiComponent_div_132_Template, 8, 0, "div", 47);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const selfOnly_r12 = \u0275\u0275reference(23);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroPeriodo);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", !ctx.isEmployee)("ngIfElse", selfOnly_r12);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroReparto);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.reparti);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(47, 15, ctx.kpi.oreTotali, "1.0-1"), "h");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 18, ctx.kpi.presenzeMedie, "1.0-1"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(67, 21, ctx.kpi.oreMediePerDipendente, "1.0-1"), "h");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 24, ctx.kpi.tassoPuntualita));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.orePerDipendente);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.distribuzioneOrari);
      \u0275\u0275advance(23);
      \u0275\u0275property("ngForOf", ctx.performanceDipendenti);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.andamentoSettimanale);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.anomalie.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.anomalie.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, PercentPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KpiComponent, [{
    type: Component,
    args: [{ selector: "app-kpi", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- ===== FILTRI & AZIONI ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
    <div class="flex flex-wrap justify-between gap-md">\r
\r
      <!-- Filtri -->\r
      <div class="form-row" style="flex: 1;">\r
\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="calendar"></lucide-angular>\r
            Periodo\r
          </label>\r
          <select [(ngModel)]="filtroPeriodo" (change)="onFiltroChange()">\r
            <option value="oggi">Oggi</option>\r
            <option value="settimana">Questa Settimana</option>\r
            <option value="mese">Questo Mese</option>\r
            <option value="trimestre">Questo Trimestre</option>\r
          </select>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="user"></lucide-angular>\r
            Dipendente\r
          </label>\r
          <ng-container *ngIf="!isEmployee; else selfOnly">\r
            <select [(ngModel)]="filtroDipendente" (change)="onFiltroChange()">\r
              <option value="tutti">Tutti i dipendenti</option>\r
              <option *ngFor="let dip of dipendenti" [value]="dip.id">\r
                {{ dip.first_name }} {{ dip.last_name }}\r
              </option>\r
            </select>\r
          </ng-container>\r
          <ng-template #selfOnly>\r
            <input type="text"\r
                   [value]="currentUser?.first_name + ' ' + currentUser?.last_name"\r
                   disabled>\r
            <input type="hidden" [(ngModel)]="filtroDipendente" />\r
          </ng-template>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="users"></lucide-angular>\r
            Reparto\r
          </label>\r
          <select [(ngModel)]="filtroReparto" (change)="onFiltroChange()">\r
            <option value="tutti">Tutti</option>\r
            <option *ngFor="let r of reparti" [value]="r.id">{{ r.name }}</option>\r
          </select>\r
        </div>\r
\r
      </div>\r
    </div>\r
      <!-- Azioni -->\r
      <div class="flex flex-wrap items-center gap-sm" style="align-self: flex-end;">\r
        <button class="promethea-button outline" (click)="esportaReport()">\r
          <lucide-angular name="download"></lucide-angular>\r
          Esporta Report\r
        </button>\r
        <button class="promethea-button" (click)="aggiornaDati()">\r
          <lucide-angular name="refresh-cw"></lucide-angular>\r
          Aggiorna\r
        </button>\r
      </div>\r
  </div>\r
\r
  <!-- ===== KPI CARDS PRINCIPALI ===== -->\r
  <div class="grid-cards p-lg">\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-sm">\r
        <lucide-angular name="clock"></lucide-angular>\r
        <h3 class="card-title m-0">Ore Totali Lavorate</h3>\r
      </div>\r
      <div class="text-lg font-bold gradient-text">{{ kpi.oreTotali | number:'1.0-1' }}h</div>\r
      <p class="text-muted text-mini mt-sm">Nel periodo selezionato</p>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-sm">\r
        <lucide-angular name="users"></lucide-angular>\r
        <h3 class="card-title m-0">Presenze Medie</h3>\r
      </div>\r
      <div class="text-lg font-bold gradient-text">{{ kpi.presenzeMedie | number:'1.0-1' }}</div>\r
      <p class="text-muted text-mini mt-sm">Dipendenti per giorno</p>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-sm">\r
        <lucide-angular name="timer"></lucide-angular>\r
        <h3 class="card-title m-0">Ore Medie per Dip.</h3>\r
      </div>\r
      <div class="text-lg font-bold gradient-text">{{ kpi.oreMediePerDipendente | number:'1.0-1' }}h</div>\r
      <p class="text-muted text-mini mt-sm">Per dipendente</p>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-sm">\r
        <lucide-angular name="target"></lucide-angular>\r
        <h3 class="card-title m-0">Puntualit\xE0</h3>\r
      </div>\r
      <div class="text-lg font-bold gradient-text">{{ kpi.tassoPuntualita | percent }}</div>\r
      <p class="text-muted text-mini mt-sm">Ingressi in orario</p>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== GRAFICI ===== -->\r
  <div class="grid-cards p-lg">\r
\r
    <!-- Grafico Ore per Dipendente -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="bar-chart-3"></lucide-angular>\r
        <h3 class="card-title m-0">Ore per Dipendente</h3>\r
      </div>\r
      <div class="flex items-end gap-sm" style="height: 160px;">\r
        <div class="chart-bar flex flex-col items-center gap-sm"\r
             style="flex: 1; min-width: 0; height: 100%; justify-content: flex-end;"\r
             *ngFor="let item of orePerDipendente">\r
          <span class="text-mini text-muted">{{ item.ore | number:'1.0-1' }}h</span>\r
          <div class="rounded bg-gradient transition"\r
               style="width: 100%; border-radius: 8px 8px 4px 4px;"\r
               [style.height]="getAltezzaBarra(item.ore) + '%'">\r
          </div>\r
          <span class="text-mini text-muted text-interrupt">{{ item.nome }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Distribuzione Orari di Ingresso -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="pie-chart"></lucide-angular>\r
        <h3 class="card-title m-0">Distribuzione Orari</h3>\r
      </div>\r
      <div class="flex flex-col gap-sm">\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke"\r
             *ngFor="let fascia of distribuzioneOrari">\r
          <span class="font-semibold text-mini">{{ fascia.fascia }}</span>\r
          <span class="chip-mini">{{ fascia.percentuale | percent }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== PERFORMANCE DIPENDENTI ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center gap-sm mb-sm">\r
      <lucide-angular name="trophy"></lucide-angular>\r
      <h2 class="text-md font-bold">Performance Dipendenti</h2>\r
    </div>\r
\r
    <div class="table-section">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Dipendente</th>\r
            <th>Ore Totali</th>\r
            <th>Ore Medie/Giorno</th>\r
            <th>Giorni Presente</th>\r
            <th>Puntualit\xE0</th>\r
            <th>Status</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let performance of performanceDipendenti">\r
            <td>\r
              <div class="flex items-center gap-sm">\r
                <div class="avatar-sm">{{ performance.nome.charAt(0) }}</div>\r
                <strong>{{ performance.nome }}</strong>\r
              </div>\r
            </td>\r
            <td>{{ performance.oreTotali | number:'1.1-1' }}h</td>\r
            <td>{{ performance.oreMedieGiorno | number:'1.1-1' }}h</td>\r
            <td>\r
              <span class="chip-mini">{{ performance.giorniPresente }}/{{ performance.giorniTotali }}</span>\r
            </td>\r
            <td>{{ performance.puntualita | percent }}</td>\r
            <td>\r
              <span class="chip"\r
                    [class.active]="performance.attivo"\r
                    [class.warning]="!performance.attivo">\r
                {{ performance.attivo ? 'Attivo' : 'Inattivo' }}\r
              </span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== STATISTICHE AVANZATE ===== -->\r
  <div class="grid-cards p-lg">\r
\r
    <!-- Andamento Settimanale -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="trending-up"></lucide-angular>\r
        <h3 class="card-title m-0">Andamento Settimanale</h3>\r
      </div>\r
      <div class="flex flex-col gap-sm">\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke"\r
             *ngFor="let giorno of andamentoSettimanale">\r
          <span class="font-semibold text-mini">{{ giorno.giorno }}</span>\r
          <span class="chip-mini">{{ giorno.ore | number:'1.1-1' }}h</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Anomalie Rilevate -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="triangle-alert"></lucide-angular>\r
        <h3 class="card-title m-0">Anomalie Rilevate</h3>\r
      </div>\r
\r
      <div class="flex flex-col gap-sm" *ngIf="anomalie.length > 0">\r
        <div class="flex items-start gap-sm p-sm rounded bg-smoke"\r
             *ngFor="let anomalia of anomalie">\r
          <lucide-angular name="info" style="flex-shrink: 0; margin-top: 2px;"></lucide-angular>\r
          <div class="flex flex-col gap-sm" style="min-width: 0;">\r
            <span class="font-semibold text-mini">{{ anomalia.tipo }}</span>\r
            <span class="text-mini">{{ anomalia.descrizione }}</span>\r
            <span class="chip-mini" style="width: fit-content;">\r
              {{ anomalia.dipendente }} \xB7 {{ anomalia.data | date:'dd/MM/yyyy' }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="anomalie.length === 0"\r
           class="flex flex-col items-center justify-center gap-md p-lg text-center empty-state">\r
        <div class="avatartondo" style="width: 56px; height: 56px;">\r
          <lucide-angular name="circle-check"></lucide-angular>\r
        </div>\r
        <div>\r
          <h3 class="font-bold mb-sm">Nessuna anomalia</h3>\r
          <p class="text-muted text-mini">Non sono state rilevate anomalie nelle timbrature</p>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
  </div>\r
\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KpiComponent, { className: "KpiComponent", filePath: "src/app/timbrature/features/kpi/kpi.component.ts", lineNumber: 45 });
})();
export {
  KpiComponent
};
//# sourceMappingURL=chunk-5WESRJYV.js.map
