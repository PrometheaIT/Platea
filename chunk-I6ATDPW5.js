import {
  ReportService
} from "./chunk-DZLWY43S.js";
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
  SlicePipe
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Subscription,
  inject,
  lastValueFrom,
  setClassMetadata,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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

// src/app/timbrature/features/report/report.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function ReportComponent_div_20_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275property("value", m_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ("0" + m_r3).slice(-2), " ");
  }
}
function ReportComponent_div_20_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    \u0275\u0275property("value", y_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r4);
  }
}
function ReportComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275element(2, "lucide-angular", 29);
    \u0275\u0275text(3, " Mese ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ReportComponent_div_20_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.monthNumber, $event) || (ctx_r1.monthNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ReportComponent_div_20_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMonthChange());
    });
    \u0275\u0275template(6, ReportComponent_div_20_option_6_Template, 2, 2, "option", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ReportComponent_div_20_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.yearNumber, $event) || (ctx_r1.yearNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ReportComponent_div_20_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMonthChange());
    });
    \u0275\u0275template(8, ReportComponent_div_20_option_8_Template, 2, 2, "option", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.monthNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.yearNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.years);
  }
}
function ReportComponent_div_21_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r6 = ctx.$implicit;
    \u0275\u0275property("value", y_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r6);
  }
}
function ReportComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275element(2, "lucide-angular", 33);
    \u0275\u0275text(3, " Anno ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ReportComponent_div_21_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.yearNumber, $event) || (ctx_r1.yearNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ReportComponent_div_21_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYearChange());
    });
    \u0275\u0275template(5, ReportComponent_div_21_option_5_Template, 2, 2, "option", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.yearNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.years);
  }
}
function ReportComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275element(2, "lucide-angular", 34);
    \u0275\u0275text(3, " Data Inizio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ReportComponent_div_22_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dataInizio, $event) || (ctx_r1.dataInizio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dataInizio);
  }
}
function ReportComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275element(2, "lucide-angular", 36);
    \u0275\u0275text(3, " Data Fine ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ReportComponent_div_23_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dataFine, $event) || (ctx_r1.dataFine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dataFine);
  }
}
function ReportComponent_select_28_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    \u0275\u0275property("value", d_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", d_r10.first_name, " ", d_r10.last_name, " ");
  }
}
function ReportComponent_select_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ReportComponent_select_28_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dipendenteSelezionato, $event) || (ctx_r1.dipendenteSelezionato = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ReportComponent_select_28_Template_select_change_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFiltroChange());
    });
    \u0275\u0275elementStart(1, "option", 37);
    \u0275\u0275text(2, "Tutti i dipendenti");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportComponent_select_28_option_3_Template, 2, 3, "option", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dipendenteSelezionato);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.dipendenti);
  }
}
function ReportComponent_input_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.first_name) + " " + (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.last_name));
  }
}
function ReportComponent_lucide_angular_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 39);
  }
}
function ReportComponent_lucide_angular_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 40);
  }
}
function ReportComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 2);
    \u0275\u0275element(2, "lucide-angular", 42);
    \u0275\u0275elementStart(3, "h2", 4);
    \u0275\u0275text(4, "Statistiche");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43)(6, "div", 44)(7, "div", 45)(8, "div", 46);
    \u0275\u0275element(9, "lucide-angular", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11, "Ore Totali");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 49);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 50);
    \u0275\u0275text(16, "Periodo selezionato");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 44)(18, "div", 45)(19, "div", 46);
    \u0275\u0275element(20, "lucide-angular", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 48);
    \u0275\u0275text(22, "Media Giornaliera");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 49);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 50);
    \u0275\u0275text(27, "Per giorno lavorativo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 44)(29, "div", 45)(30, "div", 46);
    \u0275\u0275element(31, "lucide-angular", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 48);
    \u0275\u0275text(33, "Giorni Lavorati");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 49);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 50);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 44)(39, "div", 45)(40, "div", 46);
    \u0275\u0275element(41, "lucide-angular", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 48);
    \u0275\u0275text(43, "Ore di Pause");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 49);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 50);
    \u0275\u0275text(48, "Totale pause");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 5, ctx_r1.datiReport.oreTotali, "1.1-1"), "h ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 8, ctx_r1.datiReport.mediaGiornaliera, "1.1-1"), "h ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r1.datiReport.giorniLavorati, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Su ", ctx_r1.datiReport.giorniTotali, " giorni");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 11, ctx_r1.datiReport.orePause, "1.1-1"), "h ");
  }
}
function ReportComponent_div_45_tr_26_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const riga_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", riga_r11.note);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", riga_r11.note.length > 20 ? \u0275\u0275pipeBind3(2, 2, riga_r11.note, 0, 20) + "..." : riga_r11.note, " ");
  }
}
function ReportComponent_div_45_tr_26_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ReportComponent_div_45_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 46);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 60);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 61);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, ReportComponent_div_45_tr_26_span_23_Template, 3, 6, "span", 62)(24, ReportComponent_div_45_tr_26_span_24_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const riga_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 9, riga_r11.data, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(riga_r11.dipendente);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(riga_r11.oraInizio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(riga_r11.oraFine);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 12, riga_r11.oreLavorate, "1.1-1"), "h");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 15, riga_r11.pause, "1.1-1"), "h");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 18, riga_r11.oreEffettive, "1.1-1"), "h");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", riga_r11.note);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !riga_r11.note);
  }
}
function ReportComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 2);
    \u0275\u0275element(2, "lucide-angular", 54);
    \u0275\u0275elementStart(3, "h2", 4);
    \u0275\u0275text(4, "Dettaglio Timbrature");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 55)(6, "table", 56)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Ora Inizio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Ora Fine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Ore Lavorate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Pause");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Ore Effettive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, ReportComponent_div_45_tr_26_Template, 25, 21, "tr", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.datiReport.dettaglio);
  }
}
function ReportComponent_div_46_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 70);
    \u0275\u0275elementStart(5, "span", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const giorno_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, giorno_r12.ore, "1.1-1"), "h ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", giorno_r12.ore / ctx_r1.datiReport.maxOreGiornaliere * 140 + "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(giorno_r12.giorno);
  }
}
function ReportComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 2);
    \u0275\u0275element(2, "lucide-angular", 65);
    \u0275\u0275elementStart(3, "h2", 4);
    \u0275\u0275text(4, "Andamento Ore Lavorative");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 66);
    \u0275\u0275template(6, ReportComponent_div_46_div_6_Template, 7, 7, "div", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.datiReport.graficoOre);
  }
}
function ReportComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "lucide-angular", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75)(4, "h3", 4);
    \u0275\u0275text(5, "Nessun report generato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 60);
    \u0275\u0275text(7, "Seleziona i filtri e genera un report per visualizzare i dati.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 76);
    \u0275\u0275listener("click", function ReportComponent_div_47_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generaReport());
    });
    \u0275\u0275element(9, "lucide-angular", 77);
    \u0275\u0275text(10, " Genera il primo report ");
    \u0275\u0275elementEnd()();
  }
}
var ReportComponent = class _ReportComponent {
  // Servizi injectati
  authService = inject(AuthService);
  usersService = inject(UsersService);
  timbratureService = inject(TimbratureService);
  reportService = inject(ReportService);
  // Filtri UI
  tipoReport = "settimanale";
  dataInizio = "";
  dataFine = "";
  dipendenteSelezionato = "tutti";
  monthSelected = "";
  supportsMonthInput = false;
  monthNumber = 1;
  yearNumber = (/* @__PURE__ */ new Date()).getFullYear();
  years = [];
  // Dati
  currentUser = null;
  dipendenti = [];
  datiReport = null;
  isLoading = false;
  exportLoading = false;
  subscriptions = new Subscription();
  ngOnInit() {
    try {
      const input = document.createElement("input");
      input.setAttribute("type", "month");
      this.supportsMonthInput = input.type === "month";
    } catch (e) {
      this.supportsMonthInput = false;
    }
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.years = Array.from({ length: 8 }, (_, i) => currentYear - 5 + i);
    this.subscriptions.add(this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      if (user) {
        this.impostaDatePredefinite();
        if (this.hasRole("admin") || this.hasRole("manager")) {
          this.caricaDipendenti(this.authService.companyId);
        }
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  // Formatta data in YYYY-MM-DD
  formatDate(date) {
    return date.toISOString().split("T")[0];
  }
  // Imposta le date di default in base al tipo report
  impostaDatePredefinite() {
    const oggi = /* @__PURE__ */ new Date();
    switch (this.tipoReport) {
      case "settimanale":
        if (!this.dataInizio || !this.dataFine) {
          const inizioSettimana = new Date(oggi);
          const day = oggi.getDay();
          const offset = day === 0 ? -6 : 1 - day;
          inizioSettimana.setDate(oggi.getDate() + offset);
          this.dataInizio = this.formatDate(inizioSettimana);
          this.dataFine = this.formatDate(oggi);
        }
        break;
      case "mensile":
        if (!this.monthSelected) {
          const yyyy = oggi.getFullYear();
          const mm = String(oggi.getMonth() + 1).padStart(2, "0");
          this.monthSelected = `${yyyy}-${mm}`;
          this.monthNumber = Number(mm);
          this.yearNumber = yyyy;
          this.applyMonthToDates();
        } else {
          this.applyMonthToDates();
        }
        break;
      case "annuale":
        if (!this.yearNumber)
          this.yearNumber = oggi.getFullYear();
        if (!this.dataInizio || !this.dataFine)
          this.applyYearToDates();
        break;
      case "personalizzato":
        break;
    }
  }
  applyMonthToDates() {
    if (!this.monthSelected)
      return;
    const [yyyy, mm] = this.monthSelected.split("-").map(Number);
    const start = new Date(yyyy, mm - 1, 1);
    const end = new Date(yyyy, mm, 0);
    this.dataInizio = this.formatDate(start);
    this.dataFine = this.formatDate(end);
  }
  applyYearToDates() {
    const yyyy = Number(this.yearNumber) || (/* @__PURE__ */ new Date()).getFullYear();
    const start = new Date(yyyy, 0, 1);
    const end = new Date(yyyy, 11, 31);
    this.dataInizio = this.formatDate(start);
    this.dataFine = this.formatDate(end);
  }
  // Gestori cambiamenti filtri
  onFiltroChange() {
    if (this.isLoading)
      return;
    this.datiReport = null;
    this.generaReport().catch((err) => console.error("[Report] onFiltroChange error", err));
  }
  onTipoReportChange() {
    this.impostaDatePredefinite();
    this.onFiltroChange();
  }
  onYearChange() {
    this.applyYearToDates();
    this.onFiltroChange();
  }
  onMonthChange() {
    this.monthNumber = Number(this.monthNumber) || 1;
    this.yearNumber = Number(this.yearNumber) || (/* @__PURE__ */ new Date()).getFullYear();
    const mm = String(this.monthNumber).padStart(2, "0");
    this.monthSelected = `${this.yearNumber}-${mm}`;
    this.applyMonthToDates();
    this.onFiltroChange();
  }
  // Carica la lista dei dipendenti (solo admin/manager)
  caricaDipendenti(companyId) {
    return __async(this, null, function* () {
      try {
        const dipendenti = yield lastValueFrom(this.usersService.getByCompany(companyId, "employee"));
        this.dipendenti = dipendenti;
      } catch (error) {
        console.error("Errore caricamento dipendenti", error);
      }
    });
  }
  hasRole(role) {
    return this.authService.hasRole(role);
  }
  // Genera il report (client‑side) utilizzando i dati filtrati dal server
  generaReport() {
    return __async(this, null, function* () {
      if (!this.dataInizio || !this.dataFine) {
        alert("Seleziona le date per il report");
        return;
      }
      if (!this.currentUser?.company_id) {
        alert("Azienda non definita");
        return;
      }
      this.isLoading = true;
      this.datiReport = null;
      try {
        const companyId = this.currentUser.company_id;
        const startDate = new Date(this.dataInizio);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(this.dataFine);
        endDate.setHours(23, 59, 59, 999);
        const filters = {
          company_id: companyId,
          start_ts: {
            gte: startDate.toISOString(),
            lt: new Date(endDate.getTime() + 1).toISOString()
            // per includere tutta la giornata
          }
        };
        if (this.dipendenteSelezionato !== "tutti") {
          filters.user_id = this.dipendenteSelezionato;
        }
        const timbrature = yield lastValueFrom(this.timbratureService.getFiltered(filters));
        this.datiReport = this.calcolaDatiReport(timbrature, startDate, endDate);
      } catch (error) {
        console.error("Errore nel caricamento delle timbrature", error);
        alert("Errore nel caricamento dei dati");
      } finally {
        this.isLoading = false;
      }
    });
  }
  calcolaDatiReport(timbrature, startDate, endDate) {
    const dettaglio = timbrature.map((t) => {
      const data = new Date(t.start_ts);
      const dip = t.user ? `${t.user.first_name} ${t.user.last_name}` : t.user_id ?? "";
      const oraInizio = t.start_ts ? new Date(t.start_ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";
      const oraFine = t.end_ts ? new Date(t.end_ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";
      const oreLavorate = (t.total_minutes || 0) / 60;
      let pauseMin = 0;
      if (Array.isArray(t.breaks)) {
        try {
          pauseMin = t.breaks.reduce((acc, b) => {
            const bs = b.start_ts ? new Date(b.start_ts).getTime() : 0;
            const be = b.end_ts ? new Date(b.end_ts).getTime() : 0;
            if (bs && be && be > bs)
              return acc + Math.round((be - bs) / (1e3 * 60));
            return acc;
          }, 0);
        } catch (e) {
          pauseMin = 0;
        }
      }
      const pause = pauseMin / 60;
      const oreEffettive = Math.max(0, oreLavorate - pause);
      return {
        data,
        dipendente: dip,
        oraInizio,
        oraFine,
        oreLavorate: Math.round(oreLavorate * 10) / 10,
        pause: Math.round(pause * 10) / 10,
        oreEffettive: Math.round(oreEffettive * 10) / 10,
        note: t.notes ?? ""
      };
    });
    const giorni = [];
    const current = new Date(startDate);
    while (current <= endDate) {
      giorni.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    const graficoOre = giorni.map((g) => {
      const giornoStart = new Date(g);
      giornoStart.setHours(0, 0, 0, 0);
      const giornoEnd = new Date(g);
      giornoEnd.setHours(23, 59, 59, 999);
      const oreGiorno = timbrature.filter((t) => {
        const ts = new Date(t.start_ts);
        return ts >= giornoStart && ts <= giornoEnd;
      }).reduce((acc, t) => acc + (t.total_minutes || 0) / 60, 0);
      return {
        giorno: g.toLocaleDateString("it-IT", { weekday: "short", day: "2-digit", month: "2-digit" }),
        ore: Math.round(oreGiorno * 10) / 10
      };
    });
    const oreTotali = dettaglio.reduce((acc, r) => acc + r.oreEffettive, 0);
    const orePause = dettaglio.reduce((acc, r) => acc + r.pause, 0);
    const giorniLavorati = dettaglio.length;
    const giorniTotali = giorni.length;
    const maxOreGiornaliere = graficoOre.length ? Math.max(...graficoOre.map((g) => g.ore)) : 0;
    return {
      oreTotali,
      mediaGiornaliera: giorniTotali ? Math.round(oreTotali / giorniTotali * 10) / 10 : 0,
      giorniLavorati,
      giorniTotali,
      orePause,
      maxOreGiornaliere,
      dettaglio,
      graficoOre
    };
  }
  // Utility per il download
  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  // Esportazione CSV client‑side (usa i dati già presenti)
  esportaCSV() {
    if (!this.datiReport) {
      alert("Genera prima il report");
      return;
    }
    const header = "Data;Dipendente;Ora Inizio;Ora Fine;Ore Lavorate;Pause;Ore Effettive;Note";
    const rows = this.datiReport.dettaglio.map((r) => {
      const data = this.formatDate(r.data);
      const note = (r.note || "").replace(/\r?\n|\r/g, " ").replace(/;/g, ",");
      return `${data};${r.dipendente};${r.oraInizio};${r.oraFine};${r.oreLavorate};${r.pause};${r.oreEffettive};${note}`;
    });
    const csv = [header, ...rows].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    this.downloadBlob(blob, `report_${this.dataInizio}_${this.dataFine}.csv`);
  }
  // Esportazione PDF/Excel via server (chiamata sincrona)
  esportaPDF() {
    return __async(this, null, function* () {
      yield this.esportaConServer("pdf");
    });
  }
  esportaExcel() {
    return __async(this, null, function* () {
      yield this.esportaConServer("xlsx");
    });
  }
  esportaConServer(format) {
    return __async(this, null, function* () {
      if (!this.currentUser?.company_id || !this.dataInizio || !this.dataFine) {
        alert("Dati insufficienti per l'esportazione");
        return;
      }
      this.exportLoading = true;
      try {
        const filtri = {
          company_id: this.currentUser.company_id,
          start_date: this.dataInizio,
          end_date: this.dataFine,
          dipendente: this.dipendenteSelezionato !== "tutti" ? this.dipendenteSelezionato : null
        };
        const blob = yield lastValueFrom(this.reportService.exportReport(format, filtri));
        this.downloadBlob(blob, `report_${this.dataInizio}_${this.dataFine}.${format}`);
      } catch (error) {
        console.error("Errore esportazione", error);
        alert("Errore durante l'esportazione");
      } finally {
        this.exportLoading = false;
      }
    });
  }
  static \u0275fac = function ReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportComponent, selectors: [["app-report"]], decls: 48, vars: 18, consts: [[1, "page-container"], [1, "form-card", "gap-md", "flex", "flex-col", "p-lg"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "sliders-horizontal"], [1, "text-md", "font-bold"], [1, "form-row"], [1, "form-group"], [1, "standard-label"], ["name", "layout-list"], [3, "ngModelChange", "change", "ngModel"], ["value", "settimanale"], ["value", "mensile"], ["value", "annuale"], ["value", "personalizzato"], ["class", "form-group", 4, "ngIf"], ["name", "user"], [3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", "disabled", "", 3, "value", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-sm", "mt-sm"], [1, "promethea-button", 3, "click", "disabled"], ["name", "refresh-cw", 4, "ngIf"], ["name", "loader-circle", "class", "animate-spin", 4, "ngIf"], [1, "promethea-button", "outline", 3, "click", "disabled"], ["name", "file-down"], ["name", "table-2"], [1, "promethea-button", "ghost", 3, "click", "disabled"], ["name", "download"], ["class", "form-card flex flex-col gap-md p-lg", 4, "ngIf"], ["class", "flex flex-col items-center justify-center gap-lg p-lg text-center", "style", "min-height: 40vh;", 4, "ngIf"], ["name", "calendar"], [1, "flex", "gap-sm"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "calendar-days"], ["name", "calendar-arrow-up"], ["type", "date", 3, "ngModelChange", "ngModel"], ["name", "calendar-arrow-down"], ["value", "tutti"], ["type", "text", "disabled", "", 3, "value"], ["name", "refresh-cw"], ["name", "loader-circle", 1, "animate-spin"], [1, "form-card", "flex", "flex-col", "gap-md", "p-lg"], ["name", "trending-up"], [1, "grid-cards"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-sm"], [1, "chip"], ["name", "clock"], [1, "card-title"], [1, "text-lg", "font-bold", "gradient-text"], [1, "text-muted", "text-mini", "mt-sm"], ["name", "activity"], ["name", "calendar-check"], ["name", "coffee"], ["name", "list"], [1, "table-section"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [1, "chip-mini"], [1, "font-semibold"], [1, "text-muted"], [1, "chip", "active"], ["class", "text-muted text-interrupt", 3, "title", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted", "text-interrupt", 3, "title"], ["name", "bar-chart-3"], [1, "chart-bars", "flex", "items-end", "gap-sm", 2, "height", "180px", "align-items", "flex-end"], ["class", "flex flex-col items-center gap-sm", "style", "flex: 1; min-width: 0; height: 100%; justify-content: flex-end;", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "items-center", "gap-sm", 2, "flex", "1", "min-width", "0", "height", "100%", "justify-content", "flex-end"], [1, "text-mini", "text-muted", "font-semibold"], [1, "rounded", "bg-gradient", "transition", 2, "width", "100%", "border-radius", "8px 8px 4px 4px"], [1, "text-mini", "text-muted"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-lg", "p-lg", "text-center", 2, "min-height", "40vh"], [1, "avatartondo", 2, "width", "80px", "height", "80px"], ["name", "pie-chart"], [1, "flex", "flex-col", "gap-sm"], [1, "promethea-button", 3, "click"], ["name", "play"]], template: function ReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "lucide-angular", 3);
      \u0275\u0275elementStart(4, "h2", 4);
      \u0275\u0275text(5, "Filtri Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
      \u0275\u0275element(9, "lucide-angular", 8);
      \u0275\u0275text(10, " Tipo Report ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ReportComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tipoReport, $event) || (ctx.tipoReport = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReportComponent_Template_select_change_11_listener() {
        return ctx.onTipoReportChange();
      });
      \u0275\u0275elementStart(12, "option", 10);
      \u0275\u0275text(13, "Settimanale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 11);
      \u0275\u0275text(15, "Mensile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 12);
      \u0275\u0275text(17, "Annuale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 13);
      \u0275\u0275text(19, "Personalizzato");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(20, ReportComponent_div_20_Template, 9, 5, "div", 14)(21, ReportComponent_div_21_Template, 6, 2, "div", 14)(22, ReportComponent_div_22_Template, 5, 1, "div", 14)(23, ReportComponent_div_23_Template, 5, 1, "div", 14);
      \u0275\u0275elementStart(24, "div", 6)(25, "label", 7);
      \u0275\u0275element(26, "lucide-angular", 15);
      \u0275\u0275text(27, " Dipendente ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, ReportComponent_select_28_Template, 4, 2, "select", 16)(29, ReportComponent_input_29_Template, 1, 1, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "button", 19);
      \u0275\u0275listener("click", function ReportComponent_Template_button_click_31_listener() {
        return ctx.generaReport();
      });
      \u0275\u0275template(32, ReportComponent_lucide_angular_32_Template, 1, 0, "lucide-angular", 20)(33, ReportComponent_lucide_angular_33_Template, 1, 0, "lucide-angular", 21);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 22);
      \u0275\u0275listener("click", function ReportComponent_Template_button_click_35_listener() {
        return ctx.esportaPDF();
      });
      \u0275\u0275element(36, "lucide-angular", 23);
      \u0275\u0275text(37, " Esporta PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 22);
      \u0275\u0275listener("click", function ReportComponent_Template_button_click_38_listener() {
        return ctx.esportaExcel();
      });
      \u0275\u0275element(39, "lucide-angular", 24);
      \u0275\u0275text(40, " Esporta Excel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 25);
      \u0275\u0275listener("click", function ReportComponent_Template_button_click_41_listener() {
        return ctx.esportaCSV();
      });
      \u0275\u0275element(42, "lucide-angular", 26);
      \u0275\u0275text(43, " Esporta CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(44, ReportComponent_div_44_Template, 49, 14, "div", 27)(45, ReportComponent_div_45_Template, 27, 1, "div", 27)(46, ReportComponent_div_46_Template, 7, 1, "div", 27)(47, ReportComponent_div_47_Template, 11, 0, "div", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.tipoReport);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.tipoReport === "mensile");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tipoReport === "annuale");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tipoReport !== "mensile" && ctx.tipoReport !== "annuale");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tipoReport !== "mensile" && ctx.tipoReport !== "annuale");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.hasRole("admin") || ctx.hasRole("manager"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasRole("admin") && !ctx.hasRole("manager"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Generando..." : "Genera Report", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.datiReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.datiReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.datiReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.datiReport);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.datiReport);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.datiReport);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.datiReport && !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportComponent, [{
    type: Component,
    args: [{ selector: "app-report", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- ===== FILTRI ===== -->\r
  <div class="form-card gap-md flex flex-col p-lg">\r
\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="sliders-horizontal"></lucide-angular>\r
      <h2 class="text-md font-bold">Filtri Report</h2>\r
    </div>\r
\r
    <div class="form-row">\r
\r
      <!-- Tipo Report -->\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <lucide-angular name="layout-list"></lucide-angular>\r
          Tipo Report\r
        </label>\r
        <select [(ngModel)]="tipoReport" (change)="onTipoReportChange()">\r
          <option value="settimanale">Settimanale</option>\r
          <option value="mensile">Mensile</option>\r
          <option value="annuale">Annuale</option>\r
          <option value="personalizzato">Personalizzato</option>\r
        </select>\r
      </div>\r
\r
      <!-- Mese (solo se mensile) -->\r
      <div class="form-group" *ngIf="tipoReport === 'mensile'">\r
        <label class="standard-label">\r
          <lucide-angular name="calendar"></lucide-angular>\r
          Mese\r
        </label>\r
        <div class="flex gap-sm">\r
          <select [(ngModel)]="monthNumber" (change)="onMonthChange()">\r
            <option *ngFor="let m of [1,2,3,4,5,6,7,8,9,10,11,12]" [value]="m">\r
              {{ ('0' + m).slice(-2) }}\r
            </option>\r
          </select>\r
          <select [(ngModel)]="yearNumber" (change)="onMonthChange()">\r
            <option *ngFor="let y of years" [value]="y">{{ y }}</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <!-- Anno (solo se annuale) -->\r
      <div class="form-group" *ngIf="tipoReport === 'annuale'">\r
        <label class="standard-label">\r
          <lucide-angular name="calendar-days"></lucide-angular>\r
          Anno\r
        </label>\r
        <select [(ngModel)]="yearNumber" (change)="onYearChange()">\r
          <option *ngFor="let y of years" [value]="y">{{ y }}</option>\r
        </select>\r
      </div>\r
\r
      <!-- Data Inizio -->\r
      <div class="form-group" *ngIf="tipoReport !== 'mensile' && tipoReport !== 'annuale'">\r
        <label class="standard-label">\r
          <lucide-angular name="calendar-arrow-up"></lucide-angular>\r
          Data Inizio\r
        </label>\r
        <input type="date" [(ngModel)]="dataInizio">\r
      </div>\r
\r
      <!-- Data Fine -->\r
      <div class="form-group" *ngIf="tipoReport !== 'mensile' && tipoReport !== 'annuale'">\r
        <label class="standard-label">\r
          <lucide-angular name="calendar-arrow-down"></lucide-angular>\r
          Data Fine\r
        </label>\r
        <input type="date" [(ngModel)]="dataFine">\r
      </div>\r
\r
      <!-- Dipendente -->\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <lucide-angular name="user"></lucide-angular>\r
          Dipendente\r
        </label>\r
        <select *ngIf="hasRole('admin') || hasRole('manager')"\r
                [(ngModel)]="dipendenteSelezionato"\r
                (change)="onFiltroChange()">\r
          <option value="tutti">Tutti i dipendenti</option>\r
          <option *ngFor="let d of dipendenti" [value]="d.id">\r
            {{ d.first_name }} {{ d.last_name }}\r
          </option>\r
        </select>\r
        <input *ngIf="!hasRole('admin') && !hasRole('manager')"\r
               type="text"\r
               [value]="currentUser?.first_name + ' ' + currentUser?.last_name"\r
               disabled>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Azioni -->\r
    <div class="flex flex-wrap gap-sm mt-sm">\r
\r
      <button class="promethea-button" (click)="generaReport()" [disabled]="isLoading">\r
        <lucide-angular *ngIf="!isLoading" name="refresh-cw"></lucide-angular>\r
        <lucide-angular *ngIf="isLoading" name="loader-circle" class="animate-spin"></lucide-angular>\r
        {{ isLoading ? 'Generando...' : 'Genera Report' }}\r
      </button>\r
\r
      <button class="promethea-button outline" (click)="esportaPDF()" [disabled]="!datiReport">\r
        <lucide-angular name="file-down"></lucide-angular>\r
        Esporta PDF\r
      </button>\r
\r
      <button class="promethea-button outline" (click)="esportaExcel()" [disabled]="!datiReport">\r
        <lucide-angular name="table-2"></lucide-angular>\r
        Esporta Excel\r
      </button>\r
\r
      <button class="promethea-button ghost" (click)="esportaCSV()" [disabled]="!datiReport">\r
        <lucide-angular name="download"></lucide-angular>\r
        Esporta CSV\r
      </button>\r
\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== KPI ===== -->\r
  <div *ngIf="datiReport" class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="trending-up"></lucide-angular>\r
      <h2 class="text-md font-bold">Statistiche</h2>\r
    </div>\r
\r
    <div class="grid-cards">\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <div class="chip">\r
            <lucide-angular name="clock"></lucide-angular>\r
          </div>\r
          <span class="card-title">Ore Totali</span>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">\r
          {{ datiReport.oreTotali | number:'1.1-1' }}h\r
        </div>\r
        <p class="text-muted text-mini mt-sm">Periodo selezionato</p>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <div class="chip">\r
            <lucide-angular name="activity"></lucide-angular>\r
          </div>\r
          <span class="card-title">Media Giornaliera</span>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">\r
          {{ datiReport.mediaGiornaliera | number:'1.1-1' }}h\r
        </div>\r
        <p class="text-muted text-mini mt-sm">Per giorno lavorativo</p>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <div class="chip">\r
            <lucide-angular name="calendar-check"></lucide-angular>\r
          </div>\r
          <span class="card-title">Giorni Lavorati</span>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">\r
          {{ datiReport.giorniLavorati }}\r
        </div>\r
        <p class="text-muted text-mini mt-sm">Su {{ datiReport.giorniTotali }} giorni</p>\r
      </div>\r
\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-sm">\r
          <div class="chip">\r
            <lucide-angular name="coffee"></lucide-angular>\r
          </div>\r
          <span class="card-title">Ore di Pause</span>\r
        </div>\r
        <div class="text-lg font-bold gradient-text">\r
          {{ datiReport.orePause | number:'1.1-1' }}h\r
        </div>\r
        <p class="text-muted text-mini mt-sm">Totale pause</p>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- ===== TABELLA DETTAGLIO ===== -->\r
  <div *ngIf="datiReport" class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="list"></lucide-angular>\r
      <h2 class="text-md font-bold">Dettaglio Timbrature</h2>\r
    </div>\r
\r
    <div class="table-section">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Data</th>\r
            <th>Dipendente</th>\r
            <th>Ora Inizio</th>\r
            <th>Ora Fine</th>\r
            <th>Ore Lavorate</th>\r
            <th>Pause</th>\r
            <th>Ore Effettive</th>\r
            <th>Note</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let riga of datiReport.dettaglio">\r
            <td>\r
              <span class="chip-mini">{{ riga.data | date:'dd/MM/yyyy' }}</span>\r
            </td>\r
            <td class="font-semibold">{{ riga.dipendente }}</td>\r
            <td>{{ riga.oraInizio }}</td>\r
            <td>{{ riga.oraFine }}</td>\r
            <td>\r
              <span class="chip">{{ riga.oreLavorate | number:'1.1-1' }}h</span>\r
            </td>\r
            <td class="text-muted">{{ riga.pause | number:'1.1-1' }}h</td>\r
            <td>\r
              <span class="chip active">{{ riga.oreEffettive | number:'1.1-1' }}h</span>\r
            </td>\r
            <td>\r
                <span *ngIf="riga.note" class="text-muted text-interrupt" [title]="riga.note">\r
                {{ riga.note.length > 20 ? (riga.note | slice:0:20) + '...' : riga.note }}\r
                </span>\r
              <span *ngIf="!riga.note" class="text-muted">\u2014</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== GRAFICO ===== -->\r
  <div *ngIf="datiReport" class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="bar-chart-3"></lucide-angular>\r
      <h2 class="text-md font-bold">Andamento Ore Lavorative</h2>\r
    </div>\r
\r
    <div class="chart-bars flex items-end gap-sm" style="height: 180px; align-items: flex-end;">\r
      <div *ngFor="let giorno of datiReport.graficoOre"\r
           class="flex flex-col items-center gap-sm"\r
           style="flex: 1; min-width: 0; height: 100%; justify-content: flex-end;">\r
        <span class="text-mini text-muted font-semibold">\r
          {{ giorno.ore | number:'1.1-1' }}h\r
        </span>\r
        <div class="rounded bg-gradient transition"\r
             style="width: 100%; border-radius: 8px 8px 4px 4px;"\r
             [style.height]="(giorno.ore / datiReport.maxOreGiornaliere) * 140 + 'px'">\r
        </div>\r
        <span class="text-mini text-muted">{{ giorno.giorno }}</span>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== EMPTY STATE ===== -->\r
  <div *ngIf="!datiReport && !isLoading" class="flex flex-col items-center justify-center gap-lg p-lg text-center" style="min-height: 40vh;">\r
    <div class="avatartondo" style="width: 80px; height: 80px;">\r
      <lucide-angular name="pie-chart"></lucide-angular>\r
    </div>\r
    <div class="flex flex-col gap-sm">\r
      <h3 class="text-md font-bold">Nessun report generato</h3>\r
      <p class="text-muted">Seleziona i filtri e genera un report per visualizzare i dati.</p>\r
    </div>\r
    <button class="promethea-button" (click)="generaReport()">\r
      <lucide-angular name="play"></lucide-angular>\r
      Genera il primo report\r
    </button>\r
  </div>\r
\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportComponent, { className: "ReportComponent", filePath: "src/app/timbrature/features/report/report.component.ts", lineNumber: 47 });
})();
export {
  ReportComponent
};
//# sourceMappingURL=chunk-I6ATDPW5.js.map
