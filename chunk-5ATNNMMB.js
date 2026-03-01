import {
  InvitiDipendentiComponent
} from "./chunk-JL2IQQA5.js";
import {
  CompanyService
} from "./chunk-BY47AI6E.js";
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
import {
  Router,
  RouterModule
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
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

// src/app/timbrature/features/lista-dipendenti/lista-dipendenti.component.ts
var _c0 = () => [];
var _c1 = (a0) => ["chip", a0];
function ListaDipendentiComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jt_r1 = ctx.$implicit;
    \u0275\u0275property("value", jt_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(jt_r1);
  }
}
function ListaDipendentiComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ListaDipendentiComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openInvitiModal());
    });
    \u0275\u0275element(1, "lucide-angular", 31);
    \u0275\u0275text(2, " Nuovo Dipendente ");
    \u0275\u0275elementEnd();
  }
}
function ListaDipendentiComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.dipendentiCestino.length || 0);
  }
}
function ListaDipendentiComponent_tr_58_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dipendente_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dipendente_r5.job_title);
  }
}
function ListaDipendentiComponent_tr_58_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ListaDipendentiComponent_tr_58_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ListaDipendentiComponent_tr_58_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const dipendente_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eliminaDipendente(dipendente_r5));
    });
    \u0275\u0275element(1, "lucide-angular", 43);
    \u0275\u0275elementEnd();
  }
}
function ListaDipendentiComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 33)(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 35);
    \u0275\u0275listener("click", function ListaDipendentiComponent_tr_58_Template_a_click_5_listener($event) {
      const dipendente_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.apriDettaglio(dipendente_r5.id, $event));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ListaDipendentiComponent_tr_58_span_13_Template, 2, 1, "span", 21)(14, ListaDipendentiComponent_tr_58_span_14_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 32);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, ListaDipendentiComponent_tr_58_button_22_Template, 2, 0, "button", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dipendente_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", (dipendente_r5.first_name || "")[0], "", (dipendente_r5.last_name || "")[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", dipendente_r5.first_name || "-", " ", dipendente_r5.last_name || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dipendente_r5.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c1, "role-" + (dipendente_r5.role || "unknown")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dipendente_r5.role || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dipendente_r5.job_title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dipendente_r5.job_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dipendente_r5.phone || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (dipendente_r5 == null ? null : dipendente_r5.hire_date) ? \u0275\u0275pipeBind2(20, 12, dipendente_r5.hire_date, "dd/MM/yyyy") : "Non specificata", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.hasRole("admin"));
  }
}
function ListaDipendentiComponent_div_59_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ListaDipendentiComponent_div_59_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openInvitiModal());
    });
    \u0275\u0275element(1, "lucide-angular", 31);
    \u0275\u0275text(2, " Aggiungi il primo dipendente ");
    \u0275\u0275elementEnd();
  }
}
function ListaDipendentiComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275element(2, "lucide-angular", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 47);
    \u0275\u0275text(5, "Nessun dipendente trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7, "Non sono stati trovati dipendenti con i filtri attuali.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ListaDipendentiComponent_div_59_button_8_Template, 3, 0, "button", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.hasRole("admin"));
  }
}
function ListaDipendentiComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 36);
    \u0275\u0275text(2, " Mostrando ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " di ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " dipendenti ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.dipendentiFiltrati.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.dipendenti.length);
  }
}
function ListaDipendentiComponent_div_61_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275element(2, "lucide-angular", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 36);
    \u0275\u0275text(4, "Nessun dipendente nel cestino.");
    \u0275\u0275elementEnd()();
  }
}
function ListaDipendentiComponent_div_61_div_8_tr_19_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dipendente_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dipendente_r9.job_title);
  }
}
function ListaDipendentiComponent_div_61_div_8_tr_19_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ListaDipendentiComponent_div_61_div_8_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 33)(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 35);
    \u0275\u0275listener("click", function ListaDipendentiComponent_div_61_div_8_tr_19_Template_a_click_5_listener($event) {
      const dipendente_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.apriDettaglio(dipendente_r9.id, $event));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ListaDipendentiComponent_div_61_div_8_tr_19_span_13_Template, 2, 1, "span", 21)(14, ListaDipendentiComponent_div_61_div_8_tr_19_span_14_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 32);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "button", 57);
    \u0275\u0275listener("click", function ListaDipendentiComponent_div_61_div_8_tr_19_Template_button_click_22_listener() {
      const dipendente_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.riattivaDipendente(dipendente_r9));
    });
    \u0275\u0275element(23, "lucide-angular", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dipendente_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", (dipendente_r9.first_name || "")[0], "", (dipendente_r9.last_name || "")[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", dipendente_r9.first_name || "-", " ", dipendente_r9.last_name || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dipendente_r9.email || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dipendente_r9.role || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dipendente_r9.job_title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dipendente_r9.job_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dipendente_r9.phone || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (dipendente_r9 == null ? null : dipendente_r9.hire_date) ? \u0275\u0275pipeBind2(20, 10, dipendente_r9.hire_date, "dd/MM/yyyy") : "Non specificata", " ");
  }
}
function ListaDipendentiComponent_div_61_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Ruolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Mansione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Data Assunzione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ListaDipendentiComponent_div_61_div_8_tr_19_Template, 24, 13, "tr", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r2.dipendentiFiltratiCestino || \u0275\u0275pureFunction0(2, _c0))("ngForTrackBy", ctx_r2.trackById);
  }
}
function ListaDipendentiComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 49);
    \u0275\u0275element(2, "lucide-angular", 50);
    \u0275\u0275elementStart(3, "h2", 51);
    \u0275\u0275text(4, "Cestino \u2014 dipendenti disattivati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ListaDipendentiComponent_div_61_div_7_Template, 5, 0, "div", 25)(8, ListaDipendentiComponent_div_61_div_8_Template, 20, 3, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.dipendentiCestino.length || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dipendentiFiltratiCestino.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dipendentiFiltratiCestino.length > 0);
  }
}
function ListaDipendentiComponent_app_inviti_dipendenti_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-inviti-dipendenti", 59);
    \u0275\u0275listener("closeModal", function ListaDipendentiComponent_app_inviti_dipendenti_62_Template_app_inviti_dipendenti_closeModal_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showInvitiModal = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("companyId", (tmp_1_0 = ctx_r2.aziendaCorrente == null ? null : ctx_r2.aziendaCorrente.id) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : null);
  }
}
var ListaDipendentiComponent = class _ListaDipendentiComponent {
  authService = inject(AuthService);
  usersService = inject(UsersService);
  companyService = inject(CompanyService);
  router = inject(Router);
  currentUser = null;
  aziendaCorrente = null;
  isLoading = false;
  showInvitiModal = false;
  // Liste dipendenti
  dipendentiAttivi = [];
  dipendentiCestino = [];
  dipendentiFiltratiAttivi = [];
  dipendentiFiltratiCestino = [];
  mostraDisattivati = false;
  dipendenti = [];
  dipendentiFiltrati = [];
  // Filtri
  filtroTesto = "";
  filtroRuolo = "";
  filtroStato = "";
  // 'attivo' | 'inattivo' | ''
  filtroMansione = "";
  // nome mansione o '__none__'
  jobTitles = [];
  // lista mansioni uniche
  // Permessi manager
  canEditEmployees = false;
  destroy$ = new Subject();
  ngOnInit() {
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe((user) => __async(this, null, function* () {
      this.currentUser = user;
      if (!user) {
        this.resetData();
        return;
      }
      yield this.loadAziendaAndData();
    }));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  resetData() {
    this.aziendaCorrente = null;
    this.dipendentiAttivi = [];
    this.dipendentiCestino = [];
    this.dipendentiFiltratiAttivi = [];
    this.dipendentiFiltratiCestino = [];
    this.canEditEmployees = false;
  }
  loadAziendaAndData() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      this.isLoading = true;
      try {
        this.aziendaCorrente = yield lastValueFrom(this.companyService.getForUser(this.currentUser.id, this.authService.companyId));
        if (this.authService.hasRole("manager")) {
          this.computeManagerPermissions();
        } else {
          this.canEditEmployees = this.authService.hasRole("admin");
        }
        yield this.loadDipendenti();
      } catch (error) {
        console.error("Errore caricamento azienda/dipendenti", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  computeManagerPermissions() {
    if (!this.currentUser || !this.aziendaCorrente)
      return;
    const config = this.companyService.resolveManagerConfig(this.aziendaCorrente, this.currentUser.id);
    this.canEditEmployees = config.can_edit_employees ?? false;
  }
  loadDipendenti() {
    return __async(this, null, function* () {
      const companyId = this.authService.companyId;
      console.log("\u{1F50D} loadDipendenti - companyId:", companyId);
      if (!companyId) {
        this.dipendentiAttivi = [];
        this.dipendentiCestino = [];
        this.applicaFiltri();
        return;
      }
      try {
        const all = yield lastValueFrom(this.usersService.getByCompany(companyId));
        let filtered = all;
        if (this.authService.hasRole("manager") && this.aziendaCorrente) {
          filtered = this.companyService.filterEmployeesByVisibility(all, this.aziendaCorrente, this.currentUser.id);
        }
        this.dipendentiAttivi = filtered.filter((u) => u.is_active && !u.deleted_at);
        this.dipendentiCestino = filtered.filter((u) => u.deleted_at);
        this.dipendenti = [...this.dipendentiAttivi, ...this.dipendentiCestino];
        this.jobTitles = [...new Set(filtered.map((u) => u.job_title).filter(Boolean))];
        this.applicaFiltri();
      } catch (error) {
        console.error("Errore caricamento dipendenti", error);
      }
    });
  }
  applicaFiltri() {
    const testo = this.filtroTesto.toLowerCase();
    const ruolo = this.filtroRuolo;
    const mansione = this.filtroMansione;
    const stato = this.filtroStato;
    const filterFn = (u) => {
      if (mansione) {
        if (mansione === "__none__") {
          if (u.job_title)
            return false;
        } else {
          if ((u.job_title || "").toLowerCase() !== mansione.toLowerCase())
            return false;
        }
      }
      if (ruolo && u.role !== ruolo)
        return false;
      if (stato === "attivo" && !u.is_active)
        return false;
      if (stato === "inattivo" && u.is_active)
        return false;
      if (testo) {
        const fullText = `${u.first_name} ${u.last_name} ${u.email}`.toLowerCase();
        if (!fullText.includes(testo))
          return false;
      }
      return true;
    };
    this.dipendentiFiltratiAttivi = this.dipendentiAttivi.filter(filterFn);
    this.dipendentiFiltratiCestino = this.dipendentiCestino.filter(filterFn);
    this.dipendentiFiltrati = this.mostraDisattivati ? this.dipendentiFiltratiCestino : this.dipendentiFiltratiAttivi;
  }
  toggleMostraDisattivati() {
    this.mostraDisattivati = !this.mostraDisattivati;
    this.applicaFiltri();
  }
  onFiltroChange() {
    this.applicaFiltri();
  }
  // Gestione modale inviti
  openInvitiModal() {
    if (!this.aziendaCorrente?.id) {
      alert("Azienda non disponibile. Impossibile invitare dipendenti.");
      return;
    }
    this.showInvitiModal = true;
  }
  closeInvitiModal() {
    this.showInvitiModal = false;
    this.loadDipendenti();
  }
  // Azioni sui dipendenti
  // Attiva/disattiva (cambia is_active)
  cambiaStatoDipendente(d) {
    return __async(this, null, function* () {
      if (!d.id)
        return;
      const targetState = !d.is_active;
      const action = targetState ? "attivare" : "disattivare";
      if (!confirm(`Vuoi ${action} il dipendente ${d.first_name} ${d.last_name}?`))
        return;
      this.isLoading = true;
      try {
        yield lastValueFrom(this.usersService.setActiveStatus(d.id, targetState, d.company_id ?? void 0));
        yield this.loadDipendenti();
      } catch (error) {
        console.error("Errore cambio stato", error);
        alert("Errore durante l'operazione");
      } finally {
        this.isLoading = false;
      }
    });
  }
  // Sposta nel cestino (soft delete)
  eliminaDipendente(d) {
    return __async(this, null, function* () {
      if (!d.id)
        return;
      if (!confirm(`Sei sicuro di voler spostare nel cestino ${d.first_name} ${d.last_name}?`))
        return;
      this.isLoading = true;
      try {
        yield lastValueFrom(this.usersService.softDelete(d.id, this.currentUser.id, d.company_id ?? void 0));
        yield this.loadDipendenti();
      } catch (error) {
        console.error("Errore eliminazione", error);
        alert("Errore durante l'eliminazione");
      } finally {
        this.isLoading = false;
      }
    });
  }
  // Ripristina dal cestino (restore)
  riattivaDipendente(d) {
    return __async(this, null, function* () {
      if (!d.id)
        return;
      if (!confirm(`Vuoi riattivare ${d.first_name} ${d.last_name}?`))
        return;
      this.isLoading = true;
      try {
        yield lastValueFrom(this.usersService.restore(d.id, d.company_id ?? void 0));
        yield this.loadDipendenti();
      } catch (error) {
        console.error("Errore ripristino", error);
        alert("Errore durante il ripristino");
      } finally {
        this.isLoading = false;
      }
    });
  }
  // Navigazione al dettaglio
  apriDettaglio(id, event) {
    event?.preventDefault();
    if (this.authService.hasRole("manager") && !this.canEditEmployees) {
      alert("Non hai i permessi per vedere i dettagli dei dipendenti.");
      return;
    }
    this.router.navigate(["/restaurant/timbrature/dipendenti", id]);
  }
  // Utility
  hasRole(role) {
    return this.authService.hasRole(role);
  }
  trackById(index, item) {
    return item.id;
  }
  static \u0275fac = function ListaDipendentiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaDipendentiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaDipendentiComponent, selectors: [["app-lista-dipendenti"]], decls: 63, vars: 15, consts: [[1, "page-container"], [1, "form-card", "flex", "flex-col", "gap-md", "p-lg"], [1, "flex", "flex-wrap", "justify-between", "gap-md"], [1, "form-row", 2, "flex", "1"], [1, "form-group"], [1, "standard-label"], ["name", "search"], ["type", "text", "placeholder", "Nome, cognome, email...", 3, "ngModelChange", "input", "ngModel"], ["name", "shield"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "admin"], ["value", "manager"], ["value", "employee"], ["name", "briefcase"], ["value", "__none__"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "gap-sm", 2, "align-self", "flex-end"], ["class", "promethea-button", 3, "click", 4, "ngIf"], [1, "promethea-button", "outline", 3, "click"], [3, "name"], ["class", "chip-mini", 4, "ngIf"], [1, "table-section"], [1, "crm-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "flex flex-col items-center justify-center gap-md p-lg text-center empty-state", 4, "ngIf"], ["class", "flex justify-between items-center pt-lg", "style", "border-top: 1px solid var(--smoke-1);", 4, "ngIf"], ["class", "form-card flex flex-col gap-md p-lg", 4, "ngIf"], [3, "companyId", "closeModal", 4, "ngIf"], [3, "value"], [1, "promethea-button", 3, "click"], ["name", "user-plus"], [1, "chip-mini"], [1, "flex", "items-center", "gap-sm"], [1, "avatartondo"], ["href", "#", "title", "Apri dettaglio", 1, "link", "font-semibold", 3, "click"], [1, "text-muted", "text-mini"], [3, "ngClass"], ["class", "text-muted", 4, "ngIf"], [1, "text-mini"], ["class", "icon-button", "title", "Disattiva dipendente", 3, "click", 4, "ngIf"], [1, "text-muted"], ["title", "Disattiva dipendente", 1, "icon-button", 3, "click"], ["name", "user-x"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md", "p-lg", "text-center", "empty-state"], [1, "avatartondo", 2, "width", "64px", "height", "64px"], ["name", "users"], [1, "font-bold", "mb-sm"], [1, "flex", "justify-between", "items-center", "pt-lg", 2, "border-top", "1px solid var(--smoke-1)"], [1, "flex", "items-center", "gap-sm", "mb-sm"], ["name", "archive"], [1, "text-md", "font-bold"], [1, "chip", "warning"], ["class", "table-section", 4, "ngIf"], ["name", "package-open"], [1, "avatar-sm", 2, "opacity", "0.6"], [1, "chip"], ["title", "Ripristina dipendente", 1, "icon-lucide", 3, "click"], ["name", "user-check"], [3, "closeModal", "companyId"]], template: function ListaDipendentiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      \u0275\u0275element(6, "lucide-angular", 6);
      \u0275\u0275text(7, " Cerca ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ListaDipendentiComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroTesto, $event) || (ctx.filtroTesto = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ListaDipendentiComponent_Template_input_input_8_listener() {
        return ctx.applicaFiltri();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
      \u0275\u0275element(11, "lucide-angular", 8);
      \u0275\u0275text(12, " Ruolo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ListaDipendentiComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroRuolo, $event) || (ctx.filtroRuolo = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ListaDipendentiComponent_Template_select_change_13_listener() {
        return ctx.applicaFiltri();
      });
      \u0275\u0275elementStart(14, "option", 10);
      \u0275\u0275text(15, "Tutti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 11);
      \u0275\u0275text(17, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 12);
      \u0275\u0275text(19, "Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 13);
      \u0275\u0275text(21, "Dipendente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 4)(23, "label", 5);
      \u0275\u0275element(24, "lucide-angular", 14);
      \u0275\u0275text(25, " Mansione ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ListaDipendentiComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroMansione, $event) || (ctx.filtroMansione = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ListaDipendentiComponent_Template_select_change_26_listener() {
        return ctx.applicaFiltri();
      });
      \u0275\u0275elementStart(27, "option", 10);
      \u0275\u0275text(28, "Tutte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 15);
      \u0275\u0275text(30, "Senza mansione");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, ListaDipendentiComponent_option_31_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 17);
      \u0275\u0275template(33, ListaDipendentiComponent_button_33_Template, 3, 0, "button", 18);
      \u0275\u0275elementStart(34, "button", 19);
      \u0275\u0275listener("click", function ListaDipendentiComponent_Template_button_click_34_listener() {
        return ctx.toggleMostraDisattivati();
      });
      \u0275\u0275element(35, "lucide-angular", 20);
      \u0275\u0275text(36);
      \u0275\u0275template(37, ListaDipendentiComponent_span_37_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 1)(39, "div", 22)(40, "table", 23)(41, "thead")(42, "tr")(43, "th");
      \u0275\u0275text(44, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th");
      \u0275\u0275text(46, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48, "Ruolo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th");
      \u0275\u0275text(50, "Mansione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th");
      \u0275\u0275text(52, "Telefono");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54, "Data Assunzione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "tbody");
      \u0275\u0275template(58, ListaDipendentiComponent_tr_58_Template, 23, 17, "tr", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(59, ListaDipendentiComponent_div_59_Template, 9, 1, "div", 25)(60, ListaDipendentiComponent_div_60_Template, 9, 2, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, ListaDipendentiComponent_div_61_Template, 9, 3, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, ListaDipendentiComponent_app_inviti_dipendenti_62_Template, 1, 1, "app-inviti-dipendenti", 28);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroTesto);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroRuolo);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroMansione);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.jobTitles);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasRole("admin"));
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.mostraDisattivati ? "eye-off" : "eye");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.mostraDisattivati ? "Nascondi cestino" : "Mostra cestino", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mostraDisattivati);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.dipendentiFiltratiAttivi || \u0275\u0275pureFunction0(14, _c0))("ngForTrackBy", ctx.trackById);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dipendentiFiltrati.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dipendentiFiltrati.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mostraDisattivati);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showInvitiModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, InvitiDipendentiComponent, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaDipendentiComponent, [{
    type: Component,
    args: [{ selector: "app-lista-dipendenti", standalone: true, imports: [CommonModule, RouterModule, FormsModule, InvitiDipendentiComponent, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- ===== FILTRI & AZIONI ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
    <div class="flex flex-wrap justify-between gap-md">\r
\r
      <!-- Filtri -->\r
      <div class="form-row" style="flex: 1;">\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="search"></lucide-angular>\r
            Cerca\r
          </label>\r
          <input type="text"\r
                 [(ngModel)]="filtroTesto"\r
                 (input)="applicaFiltri()"\r
                 placeholder="Nome, cognome, email...">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="shield"></lucide-angular>\r
            Ruolo\r
          </label>\r
          <select [(ngModel)]="filtroRuolo" (change)="applicaFiltri()">\r
            <option value="">Tutti</option>\r
            <option value="admin">Admin</option>\r
            <option value="manager">Manager</option>\r
            <option value="employee">Dipendente</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="briefcase"></lucide-angular>\r
            Mansione\r
          </label>\r
          <select [(ngModel)]="filtroMansione" (change)="applicaFiltri()">\r
            <option value="">Tutte</option>\r
            <option value="__none__">Senza mansione</option>\r
            <option *ngFor="let jt of jobTitles" [value]="jt">{{ jt }}</option>\r
          </select>\r
        </div>\r
      </div>\r
    </div>\r
      <!-- Azioni -->\r
      <div class="flex flex-wrap items-center gap-sm" style="align-self: flex-end;">\r
        <button class="promethea-button" (click)="openInvitiModal()" *ngIf="hasRole('admin')">\r
          <lucide-angular name="user-plus"></lucide-angular>\r
          Nuovo Dipendente\r
        </button>\r
        <button class="promethea-button outline" (click)="toggleMostraDisattivati()">\r
          <lucide-angular [name]="mostraDisattivati ? 'eye-off' : 'eye'"></lucide-angular>\r
          {{ mostraDisattivati ? 'Nascondi cestino' : 'Mostra cestino' }}\r
          <span *ngIf="mostraDisattivati" class="chip-mini">{{ dipendentiCestino.length || 0 }}</span>\r
        </button>\r
      </div>\r
  </div>\r
\r
  <!-- ===== TABELLA DIPENDENTI ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="table-section">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Nome</th>\r
            <th>Email</th>\r
            <th>Ruolo</th>\r
            <th>Mansione</th>\r
            <th>Telefono</th>\r
            <th>Data Assunzione</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let dipendente of (dipendentiFiltratiAttivi || []); trackBy: trackById">\r
\r
            <td>\r
              <div class="flex items-center gap-sm">\r
                <div class="avatartondo">\r
                  {{ (dipendente.first_name || '')[0] }}{{ (dipendente.last_name || '')[0] }}\r
                </div>\r
                <a href="#" class="link font-semibold"\r
                   (click)="apriDettaglio(dipendente.id, $event)"\r
                   title="Apri dettaglio">\r
                  {{ dipendente.first_name || '-' }} {{ dipendente.last_name || '-' }}\r
                </a>\r
              </div>\r
            </td>\r
\r
            <td class="text-muted text-mini">{{ dipendente.email || '-' }}</td>\r
\r
            <td>\r
              <span [ngClass]="['chip', 'role-' + (dipendente.role || 'unknown')]">\r
                {{ dipendente.role || '\u2014' }}\r
              </span>\r
            </td>\r
\r
            <td>\r
              <span *ngIf="dipendente.job_title" class="chip-mini">{{ dipendente.job_title }}</span>\r
              <span *ngIf="!dipendente.job_title" class="text-muted">\u2014</span>\r
            </td>\r
\r
            <td class="text-mini">{{ dipendente.phone || '-' }}</td>\r
\r
            <td>\r
              <span class="chip-mini">\r
                {{ dipendente?.hire_date ? (dipendente.hire_date | date:'dd/MM/yyyy') : 'Non specificata' }}\r
              </span>\r
            </td>\r
\r
            <td>\r
              <button class=icon-button\r
                      (click)="eliminaDipendente(dipendente)"\r
                      title="Disattiva dipendente"\r
                      *ngIf="hasRole('admin')">\r
                <lucide-angular name="user-x"></lucide-angular>\r
              </button>\r
            </td>\r
\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Empty state -->\r
    <div *ngIf="dipendentiFiltrati.length === 0"\r
         class="flex flex-col items-center justify-center gap-md p-lg text-center empty-state">\r
      <div class="avatartondo" style="width: 64px; height: 64px;">\r
        <lucide-angular name="users"></lucide-angular>\r
      </div>\r
      <div>\r
        <h3 class="font-bold mb-sm">Nessun dipendente trovato</h3>\r
        <p class="text-muted text-mini">Non sono stati trovati dipendenti con i filtri attuali.</p>\r
      </div>\r
      <button class="promethea-button" (click)="openInvitiModal()" *ngIf="hasRole('admin')">\r
        <lucide-angular name="user-plus"></lucide-angular>\r
        Aggiungi il primo dipendente\r
      </button>\r
    </div>\r
\r
    <!-- Paginazione info -->\r
    <div *ngIf="dipendentiFiltrati.length > 0"\r
         class="flex justify-between items-center pt-lg" style="border-top: 1px solid var(--smoke-1);">\r
      <span class="text-muted text-mini">\r
        Mostrando <strong>{{ dipendentiFiltrati.length }}</strong> di <strong>{{ dipendenti.length }}</strong> dipendenti\r
      </span>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== CESTINO ===== -->\r
  <div *ngIf="mostraDisattivati" class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center gap-sm mb-sm">\r
      <lucide-angular name="archive"></lucide-angular>\r
      <h2 class="text-md font-bold">Cestino \u2014 dipendenti disattivati</h2>\r
      <span class="chip warning">{{ dipendentiCestino.length || 0 }}</span>\r
    </div>\r
\r
    <!-- Empty cestino -->\r
    <div *ngIf="dipendentiFiltratiCestino.length === 0"\r
         class="flex flex-col items-center justify-center gap-md p-lg text-center empty-state">\r
      <div class="avatartondo" style="width: 64px; height: 64px;">\r
        <lucide-angular name="package-open"></lucide-angular>\r
      </div>\r
      <p class="text-muted text-mini">Nessun dipendente nel cestino.</p>\r
    </div>\r
\r
    <div *ngIf="dipendentiFiltratiCestino.length > 0" class="table-section">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Nome</th>\r
            <th>Email</th>\r
            <th>Ruolo</th>\r
            <th>Mansione</th>\r
            <th>Telefono</th>\r
            <th>Data Assunzione</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let dipendente of (dipendentiFiltratiCestino || []); trackBy: trackById">\r
\r
            <td>\r
              <div class="flex items-center gap-sm">\r
                <div class="avatar-sm" style="opacity: 0.6;">\r
                  {{ (dipendente.first_name || '')[0] }}{{ (dipendente.last_name || '')[0] }}\r
                </div>\r
                <a href="#" class="link font-semibold"\r
                   (click)="apriDettaglio(dipendente.id, $event)"\r
                   title="Apri dettaglio">\r
                  {{ dipendente.first_name || '-' }} {{ dipendente.last_name || '-' }}\r
                </a>\r
              </div>\r
            </td>\r
\r
            <td class="text-muted text-mini">{{ dipendente.email || '-' }}</td>\r
\r
            <td>\r
              <span class="chip">{{ dipendente.role || '\u2014' }}</span>\r
            </td>\r
\r
            <td>\r
              <span *ngIf="dipendente.job_title" class="chip-mini">{{ dipendente.job_title }}</span>\r
              <span *ngIf="!dipendente.job_title" class="text-muted">\u2014</span>\r
            </td>\r
\r
            <td class="text-mini">{{ dipendente.phone || '-' }}</td>\r
\r
            <td>\r
              <span class="chip-mini">\r
                {{ dipendente?.hire_date ? (dipendente.hire_date | date:'dd/MM/yyyy') : 'Non specificata' }}\r
              </span>\r
            </td>\r
\r
            <td>\r
              <button class=icon-lucide\r
                      (click)="riattivaDipendente(dipendente)"\r
                      title="Ripristina dipendente">\r
                <lucide-angular name="user-check"></lucide-angular>\r
              </button>\r
            </td>\r
\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
  </div>\r
\r
</div>\r
\r
<!-- ===== MODALE INVITI (fuori dal page-container) ===== -->\r
<app-inviti-dipendenti\r
  *ngIf="showInvitiModal"\r
  [companyId]="aziendaCorrente?.id ?? null"\r
  (closeModal)="showInvitiModal = false">\r
</app-inviti-dipendenti>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaDipendentiComponent, { className: "ListaDipendentiComponent", filePath: "src/app/timbrature/features/lista-dipendenti/lista-dipendenti.component.ts", lineNumber: 22 });
})();
export {
  ListaDipendentiComponent
};
//# sourceMappingURL=chunk-5ATNNMMB.js.map
