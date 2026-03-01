import {
  JobTitlesService
} from "./chunk-P7TNCHJZ.js";
import {
  DepartmentsService
} from "./chunk-7TAJVMKD.js";
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
  AuthService
} from "./chunk-UWK2IEAI.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-6SNKM7Z6.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-RFPONECI.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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
  __async,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/features/dipendente-dettaglio/dipendente-dettaglio.component.ts
function DipendenteDettaglioComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "lucide-angular", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.messaggioSuccesso, " ");
  }
}
function DipendenteDettaglioComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "lucide-angular", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.messaggioErrore, " ");
  }
}
function DipendenteDettaglioComponent_div_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.job_title, " ");
  }
}
function DipendenteDettaglioComponent_div_0_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \xB7 ");
    \u0275\u0275elementEnd();
  }
}
function DipendenteDettaglioComponent_div_0_lucide_angular_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 54);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 14);
  }
}
function DipendenteDettaglioComponent_div_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.dipendente == null ? null : ctx_r1.dipendente.phone);
  }
}
function DipendenteDettaglioComponent_div_0_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generaReport());
    });
    \u0275\u0275element(1, "lucide-angular", 55);
    \u0275\u0275text(2, " Report ");
    \u0275\u0275elementEnd();
  }
}
function DipendenteDettaglioComponent_div_0_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.beginEditWorkInfo());
    });
    \u0275\u0275element(1, "lucide-angular", 57);
    \u0275\u0275text(2, " Modifica ");
    \u0275\u0275elementEnd();
  }
}
function DipendenteDettaglioComponent_div_0_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275text(8, "Mansione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 34)(12, "span", 35);
    \u0275\u0275text(13, "Ruolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 34)(17, "span", 35);
    \u0275\u0275text(18, "Contratto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 34)(22, "span", 35);
    \u0275\u0275text(23, "Data assunzione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 36);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 34)(28, "span", 35);
    \u0275\u0275text(29, "Ore mensili previste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 36);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getDepartmentName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.job_title) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classMap("role-" + ((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.role) || "employee"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRuoloLabel(ctx_r1.dipendente == null ? null : ctx_r1.dipendente.role), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.full_time) ? "Full-Time" : "Part-Time");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dipendente == null ? null : ctx_r1.dipendente.hire_date) ? \u0275\u0275pipeBind2(26, 8, ctx_r1.dipendente == null ? null : ctx_r1.dipendente.hire_date, "dd/MM/yyyy") : "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (ctx_r1.dipendente == null ? null : ctx_r1.dipendente.monthly_hours) || 0, " ore");
  }
}
function DipendenteDettaglioComponent_div_0_div_127_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r6 = ctx.$implicit;
    \u0275\u0275property("value", dept_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r6.name);
  }
}
function DipendenteDettaglioComponent_div_0_div_127_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jt_r7 = ctx.$implicit;
    \u0275\u0275property("value", jt_r7.id)("disabled", !jt_r7.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(jt_r7.name);
  }
}
function DipendenteDettaglioComponent_div_0_div_127_input_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_input_17_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.job_title, $event) || (ctx_r1.editWorkModel.job_title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.job_title);
  }
}
function DipendenteDettaglioComponent_div_0_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 58)(2, "span", 35);
    \u0275\u0275text(3, "Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.department_id, $event) || (ctx_r1.editWorkModel.department_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 60);
    \u0275\u0275text(6, "Nessun reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DipendenteDettaglioComponent_div_0_div_127_option_7_Template, 2, 2, "option", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 58)(9, "span", 35);
    \u0275\u0275text(10, "Mansione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.job_title_id, $event) || (ctx_r1.editWorkModel.job_title_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 60);
    \u0275\u0275text(13, "\u2014 Seleziona \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DipendenteDettaglioComponent_div_0_div_127_option_14_Template, 2, 3, "option", 63);
    \u0275\u0275elementStart(15, "option", 64);
    \u0275\u0275text(16, "Altro (testo libero)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, DipendenteDettaglioComponent_div_0_div_127_input_17_Template, 1, 1, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 58)(19, "span", 35);
    \u0275\u0275text(20, "Ruolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.role, $event) || (ctx_r1.editWorkModel.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 67);
    \u0275\u0275text(23, "Dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 68);
    \u0275\u0275text(25, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 69);
    \u0275\u0275text(27, "Amministratore");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 58)(29, "span", 35);
    \u0275\u0275text(30, "Data assunzione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.hire_date, $event) || (ctx_r1.editWorkModel.hire_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 58)(33, "span", 35);
    \u0275\u0275text(34, "Ore mensili previste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.monthly_hours, $event) || (ctx_r1.editWorkModel.monthly_hours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 72)(37, "label", 73)(38, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.full_time, $event) || (ctx_r1.editWorkModel.full_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 75);
    \u0275\u0275text(40, "Full-Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "label", 73)(42, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function DipendenteDettaglioComponent_div_0_div_127_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editWorkModel.is_active, $event) || (ctx_r1.editWorkModel.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 75);
    \u0275\u0275text(44, "Attivo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 77)(46, "button", 56);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_div_127_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSaveWorkInfo());
    });
    \u0275\u0275element(47, "lucide-angular", 78);
    \u0275\u0275text(48, " Salva ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 19);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_div_127_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEditWorkInfo());
    });
    \u0275\u0275element(50, "lucide-angular", 79);
    \u0275\u0275text(51, " Annulla ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.department_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.departments);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.job_title_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.jobTitles);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.editWorkModel.job_title_id === "__altro" || !ctx_r1.editWorkModel.job_title_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.role);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.hire_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.monthly_hours);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.full_time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editWorkModel.is_active);
  }
}
function DipendenteDettaglioComponent_div_0_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 84);
    \u0275\u0275elementStart(5, "span", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const giorno_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 4, giorno_r9.ore, "1.0-1"), "h");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.getAltezzaBarra(giorno_r9.ore) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(giorno_r9.giorno);
  }
}
function DipendenteDettaglioComponent_div_0_div_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275element(2, "lucide-angular", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 88);
    \u0275\u0275text(5, "Nessuna timbratura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27);
    \u0275\u0275text(7, "Non sono state trovate timbrature recenti.");
    \u0275\u0275elementEnd()()();
  }
}
function DipendenteDettaglioComponent_div_0_div_145_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Azioni");
    \u0275\u0275elementEnd();
  }
}
function DipendenteDettaglioComponent_div_0_div_145_tr_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, t_r10.end_ts, "HH:mm"));
  }
}
function DipendenteDettaglioComponent_div_0_div_145_tr_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1, "In corso");
    \u0275\u0275elementEnd();
  }
}
function DipendenteDettaglioComponent_div_0_div_145_tr_16_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "div", 95)(2, "button", 96);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_div_145_tr_16_td_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const t_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.modificaTimbratura(t_r10));
    });
    \u0275\u0275element(3, "lucide-angular", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 97);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_div_145_tr_16_td_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const t_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.eliminaTimbratura(t_r10));
    });
    \u0275\u0275element(5, "lucide-angular", 98);
    \u0275\u0275elementEnd()()();
  }
}
function DipendenteDettaglioComponent_div_0_div_145_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, DipendenteDettaglioComponent_div_0_div_145_tr_16_span_9_Template, 3, 4, "span", 16)(10, DipendenteDettaglioComponent_div_0_div_145_tr_16_span_10_Template, 2, 0, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 93);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, DipendenteDettaglioComponent_div_0_div_145_tr_16_td_17_Template, 6, 0, "td", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 8, t_r10.start_ts, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, t_r10.start_ts, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", t_r10.end_ts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r10.end_ts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 14, t_r10.total_minutes / 60, "1.1-1"), " ore");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r10.notes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r10.notes || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin || ctx_r1.isManager);
  }
}
function DipendenteDettaglioComponent_div_0_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "table", 90)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Ingresso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Uscita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Ore totali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DipendenteDettaglioComponent_div_0_div_145_th_14_Template, 2, 0, "th", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, DipendenteDettaglioComponent_div_0_div_145_tr_16_Template, 18, 17, "tr", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin || ctx_r1.isManager);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.timbratureRecenti)("ngForTrackBy", ctx_r1.trackById);
  }
}
function DipendenteDettaglioComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, DipendenteDettaglioComponent_div_0_div_1_Template, 3, 1, "div", 3)(2, DipendenteDettaglioComponent_div_0_div_2_Template, 3, 1, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "h1", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10)(11, "span", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DipendenteDettaglioComponent_div_0_span_15_Template, 2, 1, "span", 12);
    \u0275\u0275elementStart(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275element(19, "lucide-angular", 15);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, DipendenteDettaglioComponent_div_0_span_22_Template, 2, 0, "span", 16)(23, DipendenteDettaglioComponent_div_0_lucide_angular_23_Template, 1, 1, "lucide-angular", 17)(24, DipendenteDettaglioComponent_div_0_span_24_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 18)(26, "button", 19);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vediTutteTimbrature());
    });
    \u0275\u0275element(27, "lucide-angular", 20);
    \u0275\u0275text(28, " Timbrature ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, DipendenteDettaglioComponent_div_0_button_29_Template, 3, 0, "button", 21)(30, DipendenteDettaglioComponent_div_0_button_30_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 23)(32, "div", 24)(33, "div", 25);
    \u0275\u0275text(34, "Ore lavorate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 26);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 27);
    \u0275\u0275text(39, "questo mese");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 24)(41, "div", 25);
    \u0275\u0275text(42, "Giorni presenti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 26);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 27);
    \u0275\u0275text(46, "questo mese");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 24)(48, "div", 25);
    \u0275\u0275text(49, "Media ore/giorno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 26);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 27);
    \u0275\u0275text(54, "ore al giorno");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 24)(56, "div", 25);
    \u0275\u0275text(57, "Ore previste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 26);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 27);
    \u0275\u0275text(61, "mensili");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 24)(63, "div", 25);
    \u0275\u0275text(64, "Differenza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 26);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 27);
    \u0275\u0275text(69, "ore");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 24)(71, "div", 25);
    \u0275\u0275text(72, "Progresso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 26);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 27);
    \u0275\u0275text(77, "del target");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 28)(79, "div", 29)(80, "div", 30);
    \u0275\u0275element(81, "lucide-angular", 31);
    \u0275\u0275elementStart(82, "h2", 32);
    \u0275\u0275text(83, "Informazioni Personali");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 33)(85, "div", 34)(86, "span", 35);
    \u0275\u0275text(87, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 36);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 34)(91, "span", 35);
    \u0275\u0275text(92, "Cognome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 36);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 34)(96, "span", 35);
    \u0275\u0275text(97, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 36);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 34)(101, "span", 35);
    \u0275\u0275text(102, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 36);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 34)(106, "span", 35);
    \u0275\u0275text(107, "Data di nascita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 36);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 34)(112, "span", 35);
    \u0275\u0275text(113, "Luogo di nascita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span", 36);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 34)(117, "span", 35);
    \u0275\u0275text(118, "Codice fiscale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span", 36);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(121, "div", 29)(122, "div", 30);
    \u0275\u0275element(123, "lucide-angular", 37);
    \u0275\u0275elementStart(124, "h2", 38);
    \u0275\u0275text(125, "Informazioni Lavorative");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(126, DipendenteDettaglioComponent_div_0_div_126_Template, 32, 11, "div", 39)(127, DipendenteDettaglioComponent_div_0_div_127_Template, 52, 10, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 29)(129, "div", 30);
    \u0275\u0275element(130, "lucide-angular", 40);
    \u0275\u0275elementStart(131, "h2", 32);
    \u0275\u0275text(132, "Andamento Settimanale");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 41);
    \u0275\u0275template(134, DipendenteDettaglioComponent_div_0_div_134_Template, 7, 7, "div", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(135, "div", 43)(136, "div", 44)(137, "div", 45);
    \u0275\u0275element(138, "lucide-angular", 20);
    \u0275\u0275elementStart(139, "h2", 32);
    \u0275\u0275text(140, "Timbrature Recenti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "button", 46);
    \u0275\u0275listener("click", function DipendenteDettaglioComponent_div_0_Template_button_click_141_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vediTutteTimbrature());
    });
    \u0275\u0275element(142, "lucide-angular", 47);
    \u0275\u0275text(143, " Vedi tutte ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(144, DipendenteDettaglioComponent_div_0_div_144_Template, 8, 0, "div", 48)(145, DipendenteDettaglioComponent_div_0_div_145_Template, 17, 3, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.messaggioSuccesso);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.messaggioErrore);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.first_name == null ? null : ctx_r1.dipendente.first_name.charAt(0), "", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.last_name == null ? null : ctx_r1.dipendente.last_name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.first_name, " ", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("role-" + ((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.role) || "employee"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRuoloLabel(ctx_r1.dipendente == null ? null : ctx_r1.dipendente.role), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.is_active)("warning", !(ctx_r1.dipendente == null ? null : ctx_r1.dipendente.is_active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dipendente == null ? null : ctx_r1.dipendente.is_active) ? "Attivo" : "Inattivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.job_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dipendente == null ? null : ctx_r1.dipendente.full_time) ? "Full-Time" : "Part-Time", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dipendente == null ? null : ctx_r1.dipendente.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dipendente == null ? null : ctx_r1.dipendente.phone);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin || ctx_r1.isManager);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin && !ctx_r1.editingWorkInfo);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 43, ctx_r1.statistiche.oreLavorate, "1.1-1"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.statistiche.giorniPresenti);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 46, ctx_r1.statistiche.mediaOreGiornaliere, "1.1-1"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.monthly_hours) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.getClasseDifferenzaOre());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(67, 49, ctx_r1.getDifferenzaOre(), "1.1-1"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 52, ctx_r1.getPercentualeCompletamento()));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.first_name) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.last_name) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.dipendente == null ? null : ctx_r1.dipendente.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.phone) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dipendente == null ? null : ctx_r1.dipendente.birth_date) ? \u0275\u0275pipeBind2(110, 54, ctx_r1.dipendente == null ? null : ctx_r1.dipendente.birth_date, "dd/MM/yyyy") : "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.birth_place) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.dipendente == null ? null : ctx_r1.dipendente.fiscal_code) || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.editingWorkInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingWorkInfo);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.andamentoSettimanale);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.timbratureRecenti.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.timbratureRecenti.length > 0);
  }
}
function DipendenteDettaglioComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 27);
    \u0275\u0275text(2, "Caricamento...");
    \u0275\u0275elementEnd()();
  }
}
var DipendenteDettaglioComponent = class _DipendenteDettaglioComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(AuthService);
  usersService = inject(UsersService);
  timbratureService = inject(TimbratureService);
  departmentsService = inject(DepartmentsService);
  jobTitlesService = inject(JobTitlesService);
  companyService = inject(CompanyService);
  isLoading = true;
  dipendente = null;
  timbratureRecenti = [];
  statistiche = {
    oreLavorate: 0,
    giorniPresenti: 0,
    mediaOreGiornaliere: 0,
    puntualita: 0
  };
  andamentoSettimanale = [];
  // Reparti e mansioni
  departments = [];
  jobTitles = [];
  isLoadingJobTitles = false;
  // Stato UI per editing
  editingWorkInfo = false;
  editWorkModel = {};
  // Messaggi
  messaggioSuccesso = "";
  messaggioErrore = "";
  destroy$ = new Subject();
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) {
      this.router.navigate(["/dipendenti"]);
      return;
    }
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe((currentUser) => __async(this, null, function* () {
      if (!currentUser) {
        this.router.navigate(["/login"]);
        return;
      }
      if (this.authService.hasRole("manager")) {
        const canEdit = yield this.checkManagerPermission(currentUser);
        if (!canEdit) {
          alert("Non hai i permessi per accedere al dettaglio dipendente.");
          this.router.navigate(["/dipendenti"]);
          return;
        }
      }
      yield this.loadDipendenteAndData(id);
    }));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  checkManagerPermission(manager) {
    return __async(this, null, function* () {
      try {
        const company = yield lastValueFrom(this.companyService.getForUser(manager.id, manager.company_id));
        const config = this.companyService.resolveManagerConfig(company, manager.id);
        return config.can_edit_employees ?? false;
      } catch {
        return false;
      }
    });
  }
  loadDipendenteAndData(id) {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        const user = yield lastValueFrom(this.usersService.getById(id));
        if (!user) {
          this.router.navigate(["/dipendenti"]);
          return;
        }
        this.dipendente = user;
        if (user.company_id) {
          yield Promise.all([
            this.loadDepartments(user.company_id),
            this.loadJobTitles(user.company_id)
          ]);
        }
        yield Promise.all([
          this.loadTimbratureRecenti(user.id),
          this.loadStatistiche(user.id),
          this.loadAndamentoSettimanale(user.id)
        ]);
      } catch (error) {
        console.error("Errore caricamento dipendente", error);
        this.messaggioErrore = "Errore nel caricamento dei dati";
        this.nascondiMessaggioDopoTimeout();
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadDepartments(companyId) {
    return __async(this, null, function* () {
      try {
        this.departments = yield lastValueFrom(this.departmentsService.getByCompany(companyId));
      } catch (error) {
        console.error("Errore caricamento reparti", error);
        this.departments = [];
      }
    });
  }
  loadJobTitles(companyId) {
    return __async(this, null, function* () {
      this.isLoadingJobTitles = true;
      try {
        this.jobTitles = yield lastValueFrom(this.jobTitlesService.getByCompany(companyId));
      } catch (error) {
        console.error("Errore caricamento mansioni", error);
        this.jobTitles = [];
      } finally {
        this.isLoadingJobTitles = false;
      }
    });
  }
  loadTimbratureRecenti(userId) {
    return __async(this, null, function* () {
      try {
        const timbrature = yield lastValueFrom(this.timbratureService.getFiltered({
          company_id: this.dipendente.company_id,
          user_id: userId
        }));
        this.timbratureRecenti = timbrature.sort((a, b) => new Date(b.start_ts).getTime() - new Date(a.start_ts).getTime()).slice(0, 10);
      } catch (error) {
        console.error("Errore caricamento timbrature recenti", error);
        this.timbratureRecenti = [];
      }
    });
  }
  loadStatistiche(userId) {
    return __async(this, null, function* () {
      try {
        const oggi = /* @__PURE__ */ new Date();
        const inizioMese = new Date(oggi.getFullYear(), oggi.getMonth(), 1);
        const inizioProssimoMese = new Date(oggi.getFullYear(), oggi.getMonth() + 1, 1);
        const timbratureMese = yield lastValueFrom(this.timbratureService.getFiltered({
          company_id: this.dipendente.company_id,
          user_id: userId,
          start_ts: {
            gte: inizioMese.toISOString(),
            lt: inizioProssimoMese.toISOString()
          }
        }));
        const oreTotali = timbratureMese.reduce((acc, t) => acc + (t.total_minutes || 0) / 60, 0);
        const giorniUnici = new Set(timbratureMese.map((t) => new Date(t.start_ts).toISOString().slice(0, 10))).size;
        this.statistiche = {
          oreLavorate: oreTotali,
          giorniPresenti: giorniUnici,
          mediaOreGiornaliere: giorniUnici > 0 ? oreTotali / giorniUnici : 0,
          puntualita: 0
          // da implementare se serve
        };
      } catch (error) {
        console.error("Errore caricamento statistiche", error);
      }
    });
  }
  loadAndamentoSettimanale(userId) {
    return __async(this, null, function* () {
      const labels = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
      try {
        const oggi = /* @__PURE__ */ new Date();
        const day = (oggi.getDay() + 6) % 7;
        const inizioSettimana = new Date(oggi);
        inizioSettimana.setHours(0, 0, 0, 0);
        inizioSettimana.setDate(inizioSettimana.getDate() - day);
        const fineSettimana = new Date(inizioSettimana);
        fineSettimana.setDate(inizioSettimana.getDate() + 7);
        const timbratureSettimana = yield lastValueFrom(this.timbratureService.getFiltered({
          company_id: this.dipendente.company_id,
          user_id: userId,
          start_ts: {
            gte: inizioSettimana.toISOString(),
            lt: fineSettimana.toISOString()
          }
        }));
        const risultato = [];
        for (let i = 0; i < 7; i++) {
          const giorno = new Date(inizioSettimana);
          giorno.setDate(inizioSettimana.getDate() + i);
          const giornoSuccessivo = new Date(giorno);
          giornoSuccessivo.setDate(giorno.getDate() + 1);
          const oreGiorno = timbratureSettimana.filter((t) => {
            const ts = new Date(t.start_ts);
            return ts >= giorno && ts < giornoSuccessivo;
          }).reduce((acc, t) => acc + (t.total_minutes || 0) / 60, 0);
          risultato.push({
            giorno: labels[i],
            ore: Math.round(oreGiorno * 10) / 10
          });
        }
        this.andamentoSettimanale = risultato;
      } catch (error) {
        console.error("Errore caricamento andamento settimanale", error);
        this.andamentoSettimanale = labels.map((g) => ({ giorno: g, ore: 0 }));
      }
    });
  }
  // --- Metodi per l'editing ---
  beginEditWorkInfo() {
    if (!this.dipendente)
      return;
    this.editWorkModel = {
      first_name: this.dipendente.first_name,
      last_name: this.dipendente.last_name,
      birth_place: this.dipendente.birth_place,
      hire_date: this.dipendente.hire_date,
      department_id: this.dipendente.department_id,
      job_title_id: this.dipendente.job_title_id,
      job_title: this.dipendente.job_title,
      role: this.dipendente.role,
      is_active: this.dipendente.is_active,
      full_time: this.dipendente.full_time,
      monthly_hours: this.dipendente.monthly_hours
    };
    this.editingWorkInfo = true;
  }
  cancelEditWorkInfo() {
    this.editingWorkInfo = false;
    this.editWorkModel = {};
  }
  onSaveWorkInfo() {
    return __async(this, null, function* () {
      if (!this.dipendente?.id)
        return;
      this.isLoading = true;
      try {
        if (this.editWorkModel.job_title_id === "__altro" && this.editWorkModel.job_title?.trim()) {
          if (!this.authService.hasRole("admin")) {
            this.editWorkModel.job_title_id = null;
          } else {
            const newTitle = yield lastValueFrom(this.jobTitlesService.create({
              company_id: this.dipendente.company_id,
              name: this.editWorkModel.job_title.trim(),
              is_active: true,
              created_by: this.authService.currentUserSubject.value.id
            }));
            this.jobTitles = [newTitle, ...this.jobTitles];
            this.editWorkModel.job_title_id = newTitle.id;
            this.editWorkModel.job_title = newTitle.name;
          }
        }
        const payload = {
          first_name: this.editWorkModel.first_name,
          last_name: this.editWorkModel.last_name,
          birth_place: this.editWorkModel.birth_place,
          hire_date: this.editWorkModel.hire_date,
          department_id: this.editWorkModel.department_id === "__none" ? null : this.editWorkModel.department_id,
          job_title_id: this.editWorkModel.job_title_id === "__altro" ? null : this.editWorkModel.job_title_id,
          job_title: this.editWorkModel.job_title,
          role: this.editWorkModel.role,
          is_active: this.editWorkModel.is_active,
          full_time: this.editWorkModel.full_time,
          monthly_hours: this.editWorkModel.monthly_hours ? Number(this.editWorkModel.monthly_hours) : null
        };
        Object.keys(payload).forEach((key) => payload[key] === void 0 && delete payload[key]);
        const updated = yield lastValueFrom(this.usersService.update(this.dipendente.id, payload, this.dipendente.company_id ?? void 0));
        this.dipendente = __spreadValues(__spreadValues({}, this.dipendente), updated);
        this.editingWorkInfo = false;
        this.messaggioSuccesso = "Informazioni aggiornate con successo";
        this.nascondiMessaggioDopoTimeout();
      } catch (error) {
        console.error("Errore salvataggio", error);
        this.messaggioErrore = "Errore durante il salvataggio";
        this.nascondiMessaggioDopoTimeout();
      } finally {
        this.isLoading = false;
      }
    });
  }
  // --- Metodi di utilità ---
  nascondiMessaggioDopoTimeout() {
    setTimeout(() => {
      this.messaggioSuccesso = "";
      this.messaggioErrore = "";
    }, 5e3);
  }
  getRuoloLabel(role) {
    const map = {
      admin: "Amministratore",
      manager: "Manager",
      employee: "Dipendente"
    };
    return role ? map[role] || role : "Dipendente";
  }
  getDifferenzaOre() {
    const previste = this.dipendente?.monthly_hours || 0;
    const lavorate = this.statistiche.oreLavorate;
    return lavorate - previste;
  }
  getClasseDifferenzaOre() {
    return this.getDifferenzaOre() >= 0 ? "positive" : "negative";
  }
  getPercentualeCompletamento() {
    const previste = this.dipendente?.monthly_hours || 0;
    const lavorate = this.statistiche.oreLavorate;
    return previste > 0 ? lavorate / previste : 0;
  }
  getAltezzaBarra(ore) {
    const max = Math.max(...this.andamentoSettimanale.map((item) => item.ore), 0.1);
    return ore / max * 100;
  }
  vediTutteTimbrature() {
    if (this.dipendente) {
      this.router.navigate(["/restaurant/timbrature/lista"], { queryParams: { dipendente: this.dipendente.id } });
    }
  }
  modificaTimbratura(timbratura) {
    this.router.navigate(["/restaurant/timbrature/crea"], { queryParams: { edit: timbratura.id, mode: "edit" } });
  }
  trackById(index, item) {
    return item.id;
  }
  eliminaTimbratura(timbratura) {
    if (!confirm("Sei sicuro di voler eliminare questa timbratura?"))
      return;
    this.timbratureRecenti = this.timbratureRecenti.filter((t) => t.id !== timbratura.id);
  }
  generaReport() {
    const content = `
      REPORT DIPENDENTE
      =================
      
      Nome: ${this.dipendente?.first_name} ${this.dipendente?.last_name}
      Email: ${this.dipendente?.email}
      Mansione: ${this.dipendente?.job_title}
      Reparto: ${this.getDepartmentName()}
      
      STATISTICHE MENSILI
      -------------------
      Ore lavorate: ${this.statistiche.oreLavorate.toFixed(1)}
      Giorni presenti: ${this.statistiche.giorniPresenti}
      Media ore/giorno: ${this.statistiche.mediaOreGiornaliere.toFixed(1)}
      Puntualit\xE0: ${(this.statistiche.puntualita * 100).toFixed(1)}%
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `report_${this.dipendente?.first_name}_${this.dipendente?.last_name}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }
  getDepartmentName() {
    if (!this.dipendente?.department_id)
      return "Nessun reparto";
    const dept = this.departments.find((d) => d.id === this.dipendente?.department_id);
    return dept?.name || "Nessun reparto";
  }
  hasRole(role) {
    return this.authService.hasRole(role);
  }
  get editingDepartment() {
    return this.editingWorkInfo;
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
  static \u0275fac = function DipendenteDettaglioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DipendenteDettaglioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DipendenteDettaglioComponent, selectors: [["app-dipendente-dettaglio"]], decls: 3, vars: 2, consts: [["loadingTpl", ""], ["class", "page-container p-sm", 4, "ngIf", "ngIfElse"], [1, "page-container", "p-sm"], ["class", "info-message m-sm02", 4, "ngIf"], ["class", "info-message m-sm02", "style", "border-left-color: #ef4444; background: color-mix(in srgb, #ef4444 10%, transparent);", 4, "ngIf"], [1, "form-card", "p-lg", "mb-md"], [1, "flex", "items-center", "gap-md", "flex-wrap"], [1, "avatartondo", 2, "width", "72px", "height", "72px", "font-size", "1.8rem", "flex-shrink", "0"], [1, "flex", "flex-col", "gap-sm", 2, "flex", "1", "min-width", "0"], [1, "section-title", "m-0"], [1, "flex", "items-center", "gap-sm", "flex-wrap"], [1, "chip"], ["class", "chip-mini", 4, "ngIf"], [1, "chip-mini"], [1, "flex", "items-center", "gap-sm", "text-muted", "text-mini"], ["name", "mail", 3, "size"], [4, "ngIf"], ["name", "phone", 3, "size", 4, "ngIf"], [1, "flex", "gap-sm", "flex-wrap", 2, "flex-shrink", "0"], [1, "promethea-button", "ghost", 3, "click"], ["name", "clock"], ["class", "promethea-button ghost", 3, "click", 4, "ngIf"], ["class", "promethea-button", 3, "click", 4, "ngIf"], [1, "grid-cards", "mb-md", 2, "grid-template-columns", "repeat(auto-fit, minmax(160px, 1fr))"], [1, "card", "text-center", "p-md"], [1, "text-muted", "text-mini", "mb-sm"], [1, "font-bold", 2, "font-size", "1.6rem"], [1, "text-muted", "text-mini"], [1, "grid-cards", "mb-md"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "id-card"], [1, "card-title", "m-0"], [1, "flex", "flex-col", "gap-sm"], [1, "flex", "justify-between", "items-center", "p-sm", "rounded", "bg-smoke"], [1, "text-mini", "text-muted"], [1, "font-semibold"], ["name", "briefcase"], [1, "card-title", "m-0", 2, "flex", "1"], ["class", "flex flex-col gap-sm", 4, "ngIf"], ["name", "bar-chart-3"], [1, "flex", "items-end", "gap-sm", 2, "height", "140px"], ["class", "flex flex-col items-center gap-sm", "style", "flex:1; min-width:0; height:100%; justify-content:flex-end;", 4, "ngFor", "ngForOf"], [1, "form-card", "p-lg"], [1, "flex", "items-center", "justify-between", "gap-sm", "mb-md"], [1, "flex", "items-center", "gap-sm"], [1, "promethea-button", "ghost", "btn-sm", 3, "click"], ["name", "list"], ["class", "flex flex-col items-center justify-center gap-md p-lg text-center empty-state", 4, "ngIf"], ["class", "table-section", 4, "ngIf"], [1, "info-message", "m-sm02"], ["name", "circle-check"], [1, "info-message", "m-sm02", 2, "border-left-color", "#ef4444", "background", "color-mix(in srgb, #ef4444 10%, transparent)"], ["name", "circle-alert"], ["name", "phone", 3, "size"], ["name", "download"], [1, "promethea-button", 3, "click"], ["name", "pencil"], [1, "flex", "flex-col", "gap-sm", "p-sm", "rounded", "bg-smoke"], ["name", "department_id", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "job_title_id", 3, "ngModelChange", "ngModel"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["value", "__altro"], ["name", "job_title", "type", "text", "placeholder", "Inserisci mansione", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "role", 3, "ngModelChange", "ngModel"], ["value", "employee"], ["value", "manager"], ["value", "admin"], ["name", "hire_date", "type", "date", 3, "ngModelChange", "ngModel"], ["name", "monthly_hours", "type", "number", 2, "max-width", "140px", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-md", "p-sm", "rounded", "bg-smoke"], [1, "checkbox-label", "p-0"], ["name", "full_time", "type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkbox-content"], ["name", "is_active", "type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-sm", "mt-sm"], ["name", "save"], ["name", "x"], [3, "value"], [3, "value", "disabled"], ["name", "job_title", "type", "text", "placeholder", "Inserisci mansione", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "items-center", "gap-sm", 2, "flex", "1", "min-width", "0", "height", "100%", "justify-content", "flex-end"], [1, "rounded", "transition", 2, "width", "100%", "border-radius", "6px 6px 3px 3px", "background", "var(--primary)", "opacity", "0.8", "min-height", "4px"], [1, "text-mini", "text-muted", "font-semibold"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md", "p-lg", "text-center", "empty-state"], [1, "avatartondo", 2, "width", "56px", "height", "56px"], [1, "font-bold", "mb-sm"], [1, "table-section"], [1, "crm-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "chip active text-mini", 4, "ngIf"], [1, "text-muted", "text-mini", "text-interrupt", 3, "title"], [1, "chip", "active", "text-mini"], [1, "flex", "gap-sm"], ["title", "Modifica", 1, "icon-lucide", 3, "click"], ["title", "Elimina", 1, "icon-lucide", 3, "click"], ["name", "trash-2"], [1, "flex", "items-center", "justify-center", "p-lg"]], template: function DipendenteDettaglioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DipendenteDettaglioComponent_div_0_Template, 146, 57, "div", 1)(1, DipendenteDettaglioComponent_ng_template_1_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loadingTpl_r12 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", loadingTpl_r12);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, PercentPipe, DatePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DipendenteDettaglioComponent, [{
    type: Component,
    args: [{ selector: "app-dipendente-dettaglio", standalone: true, imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule], template: `<div class="page-container p-sm" *ngIf="!isLoading; else loadingTpl">\r
\r
  <!-- ===== MESSAGGI ===== -->\r
  <div *ngIf="messaggioSuccesso" class="info-message m-sm02">\r
    <lucide-angular name="circle-check"></lucide-angular>\r
    {{ messaggioSuccesso }}\r
  </div>\r
  <div *ngIf="messaggioErrore" class="info-message m-sm02" style="border-left-color: #ef4444; background: color-mix(in srgb, #ef4444 10%, transparent);">\r
    <lucide-angular name="circle-alert"></lucide-angular>\r
    {{ messaggioErrore }}\r
  </div>\r
\r
  <!-- ===== HERO DIPENDENTE ===== -->\r
  <div class="form-card p-lg mb-md">\r
    <div class="flex items-center gap-md flex-wrap">\r
      <!-- Avatar -->\r
      <div class="avatartondo" style="width:72px; height:72px; font-size:1.8rem; flex-shrink:0;">\r
        {{ dipendente?.first_name?.charAt(0) }}{{ dipendente?.last_name?.charAt(0) }}\r
      </div>\r
      <!-- Info principali -->\r
      <div class="flex flex-col gap-sm" style="flex:1; min-width:0;">\r
        <h1 class="section-title m-0">{{ dipendente?.first_name }} {{ dipendente?.last_name }}</h1>\r
        <div class="flex items-center gap-sm flex-wrap">\r
          <span class="chip" [class]="'role-' + (dipendente?.role || 'employee')">\r
            {{ getRuoloLabel(dipendente?.role) }}\r
          </span>\r
          <span class="chip" [class.active]="dipendente?.is_active" [class.warning]="!dipendente?.is_active">\r
            {{ dipendente?.is_active ? 'Attivo' : 'Inattivo' }}\r
          </span>\r
          <span class="chip-mini" *ngIf="dipendente?.job_title">\r
            {{ dipendente?.job_title }}\r
          </span>\r
          <span class="chip-mini">\r
            {{ dipendente?.full_time ? 'Full-Time' : 'Part-Time' }}\r
          </span>\r
        </div>\r
        <div class="flex items-center gap-sm text-muted text-mini">\r
          <lucide-angular name="mail" [size]="14"></lucide-angular>\r
          <span>{{ dipendente?.email }}</span>\r
          <span *ngIf="dipendente?.phone"> \xB7 </span>\r
          <lucide-angular name="phone" [size]="14" *ngIf="dipendente?.phone"></lucide-angular>\r
          <span *ngIf="dipendente?.phone">{{ dipendente?.phone }}</span>\r
        </div>\r
      </div>\r
      <!-- Azioni -->\r
      <div class="flex gap-sm flex-wrap" style="flex-shrink:0;">\r
        <button class="promethea-button ghost" (click)="vediTutteTimbrature()">\r
          <lucide-angular name="clock"></lucide-angular>\r
          Timbrature\r
        </button>\r
        <button class="promethea-button ghost" (click)="generaReport()" *ngIf="isAdmin || isManager">\r
          <lucide-angular name="download"></lucide-angular>\r
          Report\r
        </button>\r
        <button class="promethea-button" (click)="beginEditWorkInfo()" *ngIf="isAdmin && !editingWorkInfo">\r
          <lucide-angular name="pencil"></lucide-angular>\r
          Modifica\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ===== STATISTICHE KPI ===== -->\r
  <div class="grid-cards mb-md" style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));">\r
    <div class="card text-center p-md">\r
      <div class="text-muted text-mini mb-sm">Ore lavorate</div>\r
      <div class="font-bold" style="font-size:1.6rem;">{{ statistiche.oreLavorate | number:'1.1-1' }}</div>\r
      <div class="text-muted text-mini">questo mese</div>\r
    </div>\r
    <div class="card text-center p-md">\r
      <div class="text-muted text-mini mb-sm">Giorni presenti</div>\r
      <div class="font-bold" style="font-size:1.6rem;">{{ statistiche.giorniPresenti }}</div>\r
      <div class="text-muted text-mini">questo mese</div>\r
    </div>\r
    <div class="card text-center p-md">\r
      <div class="text-muted text-mini mb-sm">Media ore/giorno</div>\r
      <div class="font-bold" style="font-size:1.6rem;">{{ statistiche.mediaOreGiornaliere | number:'1.1-1' }}</div>\r
      <div class="text-muted text-mini">ore al giorno</div>\r
    </div>\r
    <div class="card text-center p-md">\r
      <div class="text-muted text-mini mb-sm">Ore previste</div>\r
      <div class="font-bold" style="font-size:1.6rem;">{{ dipendente?.monthly_hours || 0 }}</div>\r
      <div class="text-muted text-mini">mensili</div>\r
    </div>\r
    <div class="card text-center p-md">\r
      <div class="text-muted text-mini mb-sm">Differenza</div>\r
      <div class="font-bold" [class]="getClasseDifferenzaOre()" style="font-size:1.6rem;">\r
        {{ getDifferenzaOre() | number:'1.1-1' }}\r
      </div>\r
      <div class="text-muted text-mini">ore</div>\r
    </div>\r
    <div class="card text-center p-md">\r
      <div class="text-muted text-mini mb-sm">Progresso</div>\r
      <div class="font-bold" style="font-size:1.6rem;">{{ getPercentualeCompletamento() | percent }}</div>\r
      <div class="text-muted text-mini">del target</div>\r
    </div>\r
  </div>\r
\r
  <!-- ===== GRID INFO + ANDAMENTO ===== -->\r
  <div class="grid-cards mb-md">\r
\r
    <!-- Info Personali -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="id-card"></lucide-angular>\r
        <h2 class="card-title m-0">Informazioni Personali</h2>\r
      </div>\r
      <div class="flex flex-col gap-sm">\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Nome</span>\r
          <span class="font-semibold">{{ dipendente?.first_name || '\u2014' }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Cognome</span>\r
          <span class="font-semibold">{{ dipendente?.last_name || '\u2014' }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Email</span>\r
          <span class="font-semibold">{{ dipendente?.email }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Telefono</span>\r
          <span class="font-semibold">{{ dipendente?.phone || '\u2014' }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Data di nascita</span>\r
          <span class="font-semibold">\r
            {{ dipendente?.birth_date ? (dipendente?.birth_date | date:'dd/MM/yyyy') : '\u2014' }}\r
          </span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Luogo di nascita</span>\r
          <span class="font-semibold">{{ dipendente?.birth_place || '\u2014' }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Codice fiscale</span>\r
          <span class="font-semibold">{{ dipendente?.fiscal_code || '\u2014' }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Info Lavorative -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="briefcase"></lucide-angular>\r
        <h2 class="card-title m-0" style="flex:1;">Informazioni Lavorative</h2>\r
      </div>\r
\r
      <!-- VIEW MODE -->\r
      <div class="flex flex-col gap-sm" *ngIf="!editingWorkInfo">\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Reparto</span>\r
          <span class="font-semibold">{{ getDepartmentName() }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Mansione</span>\r
          <span class="font-semibold">{{ dipendente?.job_title || '\u2014' }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Ruolo</span>\r
          <span class="chip" [class]="'role-' + (dipendente?.role || 'employee')">\r
            {{ getRuoloLabel(dipendente?.role) }}\r
          </span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Contratto</span>\r
          <span class="chip-mini">{{ dipendente?.full_time ? 'Full-Time' : 'Part-Time' }}</span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Data assunzione</span>\r
          <span class="font-semibold">\r
            {{ dipendente?.hire_date ? (dipendente?.hire_date | date:'dd/MM/yyyy') : '\u2014' }}\r
          </span>\r
        </div>\r
        <div class="flex justify-between items-center p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Ore mensili previste</span>\r
          <span class="font-semibold">{{ dipendente?.monthly_hours || 0 }} ore</span>\r
        </div>\r
      </div>\r
\r
      <!-- EDIT MODE -->\r
      <div class="flex flex-col gap-sm" *ngIf="editingWorkInfo">\r
        <div class="flex flex-col gap-sm p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Reparto</span>\r
          <select name="department_id" [(ngModel)]="editWorkModel.department_id">\r
            <option value="">Nessun reparto</option>\r
            <option *ngFor="let dept of departments" [value]="dept.id">{{ dept.name }}</option>\r
          </select>\r
        </div>\r
        <div class="flex flex-col gap-sm p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Mansione</span>\r
          <select name="job_title_id" [(ngModel)]="editWorkModel.job_title_id">\r
            <option value="">\u2014 Seleziona \u2014</option>\r
            <option *ngFor="let jt of jobTitles" [value]="jt.id" [disabled]="!jt.is_active">{{ jt.name }}</option>\r
            <option value="__altro">Altro (testo libero)</option>\r
          </select>\r
          <input *ngIf="editWorkModel.job_title_id === '__altro' || !editWorkModel.job_title_id"\r
                 name="job_title" type="text" [(ngModel)]="editWorkModel.job_title"\r
                 placeholder="Inserisci mansione" />\r
        </div>\r
        <div class="flex flex-col gap-sm p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Ruolo</span>\r
          <select name="role" [(ngModel)]="editWorkModel.role">\r
            <option value="employee">Dipendente</option>\r
            <option value="manager">Manager</option>\r
            <option value="admin">Amministratore</option>\r
          </select>\r
        </div>\r
        <div class="flex flex-col gap-sm p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Data assunzione</span>\r
          <input name="hire_date" type="date" [(ngModel)]="editWorkModel.hire_date" />\r
        </div>\r
        <div class="flex flex-col gap-sm p-sm rounded bg-smoke">\r
          <span class="text-mini text-muted">Ore mensili previste</span>\r
          <input name="monthly_hours" type="number" style="max-width:140px;"\r
                 [(ngModel)]="editWorkModel.monthly_hours" />\r
        </div>\r
        <div class="flex items-center gap-md p-sm rounded bg-smoke">\r
          <label class="checkbox-label p-0">\r
            <input name="full_time" type="checkbox" [(ngModel)]="editWorkModel.full_time" />\r
            <span class="checkbox-content">Full-Time</span>\r
          </label>\r
          <label class="checkbox-label p-0">\r
            <input name="is_active" type="checkbox" [(ngModel)]="editWorkModel.is_active" />\r
            <span class="checkbox-content">Attivo</span>\r
          </label>\r
        </div>\r
        <div class="flex gap-sm mt-sm">\r
          <button class="promethea-button" (click)="onSaveWorkInfo()">\r
            <lucide-angular name="save"></lucide-angular>\r
            Salva\r
          </button>\r
          <button class="promethea-button ghost" (click)="cancelEditWorkInfo()">\r
            <lucide-angular name="x"></lucide-angular>\r
            Annulla\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Andamento Settimanale -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <lucide-angular name="bar-chart-3"></lucide-angular>\r
        <h2 class="card-title m-0">Andamento Settimanale</h2>\r
      </div>\r
      <div class="flex items-end gap-sm" style="height:140px;">\r
        <div *ngFor="let giorno of andamentoSettimanale"\r
             class="flex flex-col items-center gap-sm"\r
             style="flex:1; min-width:0; height:100%; justify-content:flex-end;">\r
          <span class="text-mini text-muted">{{ giorno.ore | number:'1.0-1' }}h</span>\r
          <div class="rounded transition"\r
               style="width:100%; border-radius:6px 6px 3px 3px; background: var(--primary); opacity:0.8; min-height:4px;"\r
               [style.height]="getAltezzaBarra(giorno.ore) + '%'">\r
          </div>\r
          <span class="text-mini text-muted font-semibold">{{ giorno.giorno }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== TIMBRATURE RECENTI ===== -->\r
  <div class="form-card p-lg">\r
    <div class="flex items-center justify-between gap-sm mb-md">\r
      <div class="flex items-center gap-sm">\r
        <lucide-angular name="clock"></lucide-angular>\r
        <h2 class="card-title m-0">Timbrature Recenti</h2>\r
      </div>\r
      <button class="promethea-button ghost btn-sm" (click)="vediTutteTimbrature()">\r
        <lucide-angular name="list"></lucide-angular>\r
        Vedi tutte\r
      </button>\r
    </div>\r
\r
    <!-- Empty state -->\r
    <div *ngIf="timbratureRecenti.length === 0"\r
         class="flex flex-col items-center justify-center gap-md p-lg text-center empty-state">\r
      <div class="avatartondo" style="width:56px; height:56px;">\r
        <lucide-angular name="clock"></lucide-angular>\r
      </div>\r
      <div>\r
        <h3 class="font-bold mb-sm">Nessuna timbratura</h3>\r
        <p class="text-muted text-mini">Non sono state trovate timbrature recenti.</p>\r
      </div>\r
    </div>\r
\r
    <!-- Tabella -->\r
    <div class="table-section" *ngIf="timbratureRecenti.length > 0">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Data</th>\r
            <th>Ingresso</th>\r
            <th>Uscita</th>\r
            <th>Ore totali</th>\r
            <th>Note</th>\r
            <th *ngIf="isAdmin || isManager">Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let t of timbratureRecenti; trackBy: trackById">\r
            <td><span class="chip-mini">{{ t.start_ts | date:'dd/MM/yyyy' }}</span></td>\r
            <td>{{ t.start_ts | date:'HH:mm' }}</td>\r
            <td>\r
              <span *ngIf="t.end_ts">{{ t.end_ts | date:'HH:mm' }}</span>\r
              <span *ngIf="!t.end_ts" class="chip active text-mini">In corso</span>\r
            </td>\r
            <td>{{ (t.total_minutes / 60) | number:'1.1-1' }} ore</td>\r
            <td>\r
              <span class="text-muted text-mini text-interrupt" [title]="t.notes">\r
                {{ t.notes || '\u2014' }}\r
              </span>\r
            </td>\r
            <td *ngIf="isAdmin || isManager">\r
              <div class="flex gap-sm">\r
                <button class="icon-lucide" (click)="modificaTimbratura(t)" title="Modifica">\r
                  <lucide-angular name="pencil"></lucide-angular>\r
                </button>\r
                <button class="icon-lucide" (click)="eliminaTimbratura(t)" title="Elimina">\r
                  <lucide-angular name="trash-2"></lucide-angular>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- Loading state -->\r
<ng-template #loadingTpl>\r
  <div class="flex items-center justify-center p-lg">\r
    <div class="text-muted text-mini">Caricamento...</div>\r
  </div>\r
</ng-template>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DipendenteDettaglioComponent, { className: "DipendenteDettaglioComponent", filePath: "src/app/timbrature/features/dipendente-dettaglio/dipendente-dettaglio.component.ts", lineNumber: 31 });
})();
export {
  DipendenteDettaglioComponent
};
//# sourceMappingURL=chunk-YSFRCTA6.js.map
