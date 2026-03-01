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
import {
  Router,
  RouterModule
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Subscription,
  inject,
  lastValueFrom,
  setClassMetadata,
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
  ɵɵpipeBind2,
  ɵɵproperty,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/features/lista-timbrature/lista-timbrature.component.ts
function ListaTimbratureComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ListaTimbratureComponent_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowDeleted());
    });
    \u0275\u0275element(1, "lucide-angular", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showDeletedSection ? "Nascondi cestino" : "Cancellate (" + (ctx_r1.deletedTimbrature.length || 0) + ")", " ");
  }
}
function ListaTimbratureComponent_ng_container_33_div_1_tr_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "lucide-angular", 45);
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r4.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.old);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.newVal);
  }
}
function ListaTimbratureComponent_ng_container_33_div_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, ListaTimbratureComponent_ng_container_33_div_1_tr_20_div_8_Template, 8, 3, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 38)(11, "button", 39);
    \u0275\u0275listener("click", function ListaTimbratureComponent_ng_container_33_div_1_tr_20_Template_button_click_11_listener() {
      const r_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleRichiestaAction(r_r5, "approve"));
    });
    \u0275\u0275element(12, "lucide-angular", 40);
    \u0275\u0275text(13, " Approva ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 41);
    \u0275\u0275listener("click", function ListaTimbratureComponent_ng_container_33_div_1_tr_20_Template_button_click_14_listener() {
      const r_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleRichiestaAction(r_r5, "reject"));
    });
    \u0275\u0275element(15, "lucide-angular", 42);
    \u0275\u0275text(16, " Rifiuta ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r5.user == null ? null : r_r5.user.first_name, " ", r_r5.user == null ? null : r_r5.user.last_name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 4, r_r5.timbratura == null ? null : r_r5.timbratura.start_ts, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formatRequestedChanges(r_r5));
  }
}
function ListaTimbratureComponent_ng_container_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 30);
    \u0275\u0275element(2, "lucide-angular", 31);
    \u0275\u0275elementStart(3, "h2", 32);
    \u0275\u0275text(4, "Richieste di modifica timbrature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "table", 22)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Utente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Richiesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ListaTimbratureComponent_ng_container_33_div_1_tr_20_Template, 17, 7, "tr", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.richiesteModifica.length);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.richiesteModifica);
  }
}
function ListaTimbratureComponent_ng_container_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "lucide-angular", 47);
    \u0275\u0275text(2, " Nessuna richiesta di modifica in attesa. ");
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ListaTimbratureComponent_ng_container_33_div_1_Template, 21, 2, "div", 26)(2, ListaTimbratureComponent_ng_container_33_div_2_Template, 3, 0, "div", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.richiesteModifica.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.richiesteModifica.length === 0);
  }
}
function ListaTimbratureComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Dipendente");
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_tr_55_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const timbratura_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(timbratura_r7.user == null ? null : timbratura_r7.user.first_name, timbratura_r7.user == null ? null : timbratura_r7.user.last_name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", timbratura_r7.user == null ? null : timbratura_r7.user.first_name, " ", timbratura_r7.user == null ? null : timbratura_r7.user.last_name, "");
  }
}
function ListaTimbratureComponent_tr_55_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timbratura_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, timbratura_r7.end_ts, "HH:mm"));
  }
}
function ListaTimbratureComponent_tr_55_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "In corso");
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_tr_55_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timbratura_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", timbratura_r7.breaks.length, " ");
  }
}
function ListaTimbratureComponent_tr_55_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_tr_55_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timbratura_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", timbratura_r7.notes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.troncaTesto(timbratura_r7.notes, 30), " ");
  }
}
function ListaTimbratureComponent_tr_55_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_tr_55_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "lucide-angular", 62);
    \u0275\u0275elementStart(2, "span", 63);
    \u0275\u0275text(3, "In attesa di approvazione modifica");
    \u0275\u0275elementEnd()();
  }
}
function ListaTimbratureComponent_tr_55_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ListaTimbratureComponent_tr_55_button_24_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const timbratura_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.completaTimbratura(timbratura_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "lucide-angular", 64);
    \u0275\u0275text(2, " Completa ");
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_tr_55_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ListaTimbratureComponent_tr_55_button_25_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const timbratura_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.eliminaTimbratura(timbratura_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "lucide-angular", 28);
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 48);
    \u0275\u0275listener("click", function ListaTimbratureComponent_tr_55_Template_tr_click_0_listener() {
      const timbratura_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(timbratura_r7.end_ts ? ctx_r1.visualizzaTimbratura(timbratura_r7) : ctx_r1.completaTimbratura(timbratura_r7));
    });
    \u0275\u0275template(1, ListaTimbratureComponent_tr_55_td_1_Template, 6, 3, "td", 20);
    \u0275\u0275elementStart(2, "td")(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ListaTimbratureComponent_tr_55_span_10_Template, 3, 4, "span", 20)(11, ListaTimbratureComponent_tr_55_span_11_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, ListaTimbratureComponent_tr_55_span_16_Template, 2, 1, "span", 50)(17, ListaTimbratureComponent_tr_55_span_17_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, ListaTimbratureComponent_tr_55_span_19_Template, 2, 2, "span", 52)(20, ListaTimbratureComponent_tr_55_span_20_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, ListaTimbratureComponent_tr_55_div_22_Template, 4, 0, "div", 53);
    \u0275\u0275elementStart(23, "div", 54);
    \u0275\u0275template(24, ListaTimbratureComponent_tr_55_button_24_Template, 3, 0, "button", 55)(25, ListaTimbratureComponent_tr_55_button_25_Template, 2, 0, "button", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const timbratura_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasRole("admin") || ctx_r1.managerViewingOthers);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, timbratura_r7.start_ts, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 16, timbratura_r7.start_ts, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", timbratura_r7.end_ts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !timbratura_r7.end_ts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 19, timbratura_r7.total_minutes / 60, "1.1-1"), "h");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (timbratura_r7.breaks == null ? null : timbratura_r7.breaks.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !timbratura_r7.breaks || timbratura_r7.breaks.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", timbratura_r7.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !timbratura_r7.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEmployee && (timbratura_r7.id ? ctx_r1.pendingTimbraturaIds.has(timbratura_r7.id) : false));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !timbratura_r7.end_ts && (ctx_r1.canModifyTimbratura || timbratura_r7.user_id === (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.id)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasRole("admin"));
  }
}
function ListaTimbratureComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "lucide-angular", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 69);
    \u0275\u0275text(5, "Nessuna timbratura trovata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 70);
    \u0275\u0275text(7, "Non sono state trovate timbrature con i filtri attuali.");
    \u0275\u0275elementEnd()()();
  }
}
function ListaTimbratureComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 70);
    \u0275\u0275text(2, " Mostrando ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " di ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " timbrature ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.timbratureFiltrate.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.timbrature.length);
  }
}
function ListaTimbratureComponent_div_58_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "lucide-angular", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4, "Nessuna timbratura nel cestino");
    \u0275\u0275elementEnd()();
  }
}
function ListaTimbratureComponent_div_58_div_8_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Dipendente");
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_div_58_div_8_tr_16_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r10.user == null ? null : t_r10.user.first_name, " ", t_r10.user == null ? null : t_r10.user.last_name, " ");
  }
}
function ListaTimbratureComponent_div_58_div_8_tr_16_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ListaTimbratureComponent_div_58_div_8_tr_16_button_16_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const t_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.ripristinaTimbratura(t_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "lucide-angular", 77);
    \u0275\u0275elementEnd();
  }
}
function ListaTimbratureComponent_div_58_div_8_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, ListaTimbratureComponent_div_58_div_8_tr_16_td_1_Template, 2, 2, "td", 74);
    \u0275\u0275elementStart(2, "td")(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 70);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, ListaTimbratureComponent_div_58_div_8_tr_16_button_16_Template, 2, 0, "button", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasRole("admin") || ctx_r1.managerViewingOthers);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, t_r10.start_ts, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, t_r10.start_ts, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 12, t_r10.total_minutes / 60, "1.1-1"), "h");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r10.deleted_at ? \u0275\u0275pipeBind2(14, 15, t_r10.deleted_at, "dd/MM/yyyy HH:mm") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hasRole("admin") || ctx_r1.hasRole("manager") && (t_r10.user_id ? ctx_r1.visibleEmployeeIds.has(t_r10.user_id) : false));
  }
}
function ListaTimbratureComponent_div_58_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr");
    \u0275\u0275template(4, ListaTimbratureComponent_div_58_div_8_th_4_Template, 2, 0, "th", 20);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Ora Inizio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Ore Totali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Eliminata il");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, ListaTimbratureComponent_div_58_div_8_tr_16_Template, 17, 18, "tr", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.hasRole("admin") || ctx_r1.managerViewingOthers);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.deletedTimbrature);
  }
}
function ListaTimbratureComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 30);
    \u0275\u0275element(2, "lucide-angular", 28);
    \u0275\u0275elementStart(3, "h2", 32);
    \u0275\u0275text(4, "Timbrature cancellate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ListaTimbratureComponent_div_58_div_7_Template, 5, 0, "div", 24)(8, ListaTimbratureComponent_div_58_div_8_Template, 17, 2, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.deletedTimbrature.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletedTimbrature.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletedTimbrature.length > 0);
  }
}
var ListaTimbratureComponent = class _ListaTimbratureComponent {
  // Servizi
  authService = inject(AuthService);
  timbratureService = inject(TimbratureService);
  usersService = inject(UsersService);
  companyService = inject(CompanyService);
  router = inject(Router);
  // Dati principali
  currentUser = null;
  timbrature = [];
  timbratureFiltrate = [];
  deletedTimbrature = [];
  richiesteModifica = [];
  userPendingRequests = [];
  pendingTimbraturaIds = /* @__PURE__ */ new Set();
  // UI State
  isLoading = false;
  showDeletedSection = false;
  filtroDataInizio = "";
  filtroDataFine = "";
  filtroStato = "";
  filtroOggi = false;
  // Permessi e visibilità manager
  managerCanModifyTimbrature = false;
  visibleEmployeeIds = /* @__PURE__ */ new Set();
  // ID dei dipendenti che il manager può vedere
  managerViewingOthers = false;
  // true se sta vedendo timbrature di altri
  subscriptions = new Subscription();
  ngOnInit() {
    this.subscriptions.add(this.authService.currentUser$.subscribe((user) => __async(this, null, function* () {
      this.currentUser = user;
      if (user) {
        yield this.initPermissionsAndData();
      } else {
        this.resetData();
      }
    })));
    this.subscriptions.add(this.timbratureService.pendingRequests$.subscribe(() => {
      if (this.currentUser) {
        this.loadRichiesteModifica();
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  initPermissionsAndData() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      if (this.authService.hasRole("manager")) {
        yield this.computeManagerPermissions();
        yield this.computeVisibleEmployees();
      }
      yield Promise.all([
        this.loadTimbrature(),
        this.loadRichiesteModifica(),
        this.loadDeletedTimbrature()
        // pre-carica cestino (senza attesa)
      ]);
    });
  }
  resetData() {
    this.timbrature = [];
    this.timbratureFiltrate = [];
    this.deletedTimbrature = [];
    this.richiesteModifica = [];
    this.userPendingRequests = [];
    this.pendingTimbraturaIds.clear();
    this.visibleEmployeeIds.clear();
    this.managerCanModifyTimbrature = false;
    this.managerViewingOthers = false;
  }
  // --- Gestione permessi manager ---
  computeManagerPermissions() {
    return __async(this, null, function* () {
      if (!this.currentUser || !this.authService.hasRole("manager"))
        return;
      try {
        const company = yield lastValueFrom(this.companyService.getById(this.currentUser.company_id));
        this.managerCanModifyTimbrature = yield this.authService.hasManagerPermission(
          "manage_departments",
          // o un permesso specifico per timbrature? Nel vecchio era "can_modify_timbrature"
          this.currentUser.company_id
        );
        const visibilityMap = company?.manager_visibility || {};
        const config = visibilityMap[this.currentUser.id] || {};
        const mode = config.mode || "self";
        const hasLists = config.user_ids?.length > 0 || config.roles?.length > 0 || config.department_ids?.length > 0;
        this.managerViewingOthers = mode !== "self" || config.can_view_all_employees || hasLists;
      } catch (error) {
        console.error("Errore nel calcolo permessi manager", error);
        this.managerCanModifyTimbrature = false;
        this.managerViewingOthers = false;
      }
    });
  }
  computeVisibleEmployees() {
    return __async(this, null, function* () {
      if (!this.currentUser || !this.authService.hasRole("manager") || !this.authService.companyId)
        return;
      try {
        const companyId = this.authService.companyId;
        const employees = yield lastValueFrom(this.usersService.getByCompany(companyId, "employee"));
        const company = yield lastValueFrom(this.companyService.getById(companyId));
        const visible = this.companyService.filterEmployeesByVisibility(employees, company, this.currentUser.id);
        this.visibleEmployeeIds = new Set(visible.map((e) => e.id));
      } catch (error) {
        console.error("Errore nel calcolo dipendenti visibili", error);
        this.visibleEmployeeIds.clear();
      }
    });
  }
  // --- Caricamento dati ---
  loadTimbrature() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      this.isLoading = true;
      try {
        let items = [];
        const user = this.currentUser;
        if (this.authService.hasRole("employee")) {
          items = yield lastValueFrom(this.timbratureService.getFiltered({
            company_id: user.company_id,
            user_id: user.id
          }));
        } else if (this.authService.hasRole("admin")) {
          items = yield lastValueFrom(this.timbratureService.getAll(user.company_id ?? void 0));
        } else if (this.authService.hasRole("manager")) {
          const all = yield lastValueFrom(this.timbratureService.getAll(user.company_id ?? void 0));
          if (this.managerViewingOthers && this.visibleEmployeeIds.size > 0) {
            items = all.filter((t) => this.visibleEmployeeIds.has(t.user_id));
          } else if (this.managerViewingOthers) {
            items = all;
          } else {
            items = all.filter((t) => t.user_id === user.id);
          }
        } else {
          items = [];
        }
        this.timbrature = items || [];
        this.applicaFiltri();
        if (this.authService.hasRole("manager") && this.managerViewingOthers) {
          yield this.enrichTimbratureWithUserData();
        }
      } catch (error) {
        console.error("Errore caricamento timbrature", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  enrichTimbratureWithUserData() {
    return __async(this, null, function* () {
      const needEnrich = this.timbrature.some((t) => !t.user);
      if (!needEnrich)
        return;
      try {
        const employees = yield lastValueFrom(this.usersService.getByCompany(this.currentUser.company_id));
        const userMap = new Map(employees.map((u) => [u.id, u]));
        this.timbrature = this.timbrature.map((t) => __spreadProps(__spreadValues({}, t), {
          user: t.user || userMap.get(t.user_id)
        }));
        this.applicaFiltri();
      } catch (error) {
        console.warn("Errore arricchimento dati utente", error);
      }
    });
  }
  loadDeletedTimbrature() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      try {
        if (this.authService.hasRole("admin")) {
          this.deletedTimbrature = yield lastValueFrom(this.timbratureService.getDeletedTimbrature());
        } else {
          this.deletedTimbrature = yield lastValueFrom(this.timbratureService.getDeletedTimbrature(this.currentUser.id));
        }
      } catch (error) {
        console.error("Errore caricamento cestino", error);
        this.deletedTimbrature = [];
      }
    });
  }
  loadRichiesteModifica() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      try {
        const companyId = this.currentUser.company_id;
        const all = yield lastValueFrom(this.timbratureService.getRichiesteModifica(companyId ?? void 0, "pending"));
        if (this.authService.hasRole("admin")) {
          this.richiesteModifica = all;
        } else if (this.authService.hasRole("manager") && this.managerCanModifyTimbrature) {
          if (this.visibleEmployeeIds.size > 0) {
            this.richiesteModifica = all.filter((r) => this.visibleEmployeeIds.has(r.user_id || r.timbratura?.user_id || ""));
          } else {
            this.richiesteModifica = [];
          }
        } else {
          this.richiesteModifica = all.filter((r) => (r.user_id || r.timbratura?.user_id) === this.currentUser.id);
        }
        this.userPendingRequests = all.filter((r) => (r.user_id || r.timbratura?.user_id) === this.currentUser.id);
        this.pendingTimbraturaIds = new Set(this.userPendingRequests.map((r) => r.timbratura_id || r.timbratura?.id || ""));
      } catch (error) {
        console.error("Errore caricamento richieste", error);
      }
    });
  }
  // --- Filtri ---
  applicaFiltri() {
    let filtrate = this.timbrature;
    if (this.filtroDataInizio) {
      const dataInizio = new Date(this.filtroDataInizio);
      filtrate = filtrate.filter((t) => new Date(t.start_ts) >= dataInizio);
    }
    if (this.filtroDataFine) {
      const dataFine = new Date(this.filtroDataFine);
      dataFine.setHours(23, 59, 59, 999);
      filtrate = filtrate.filter((t) => new Date(t.start_ts) <= dataFine);
    }
    if (this.filtroStato) {
      if (this.filtroStato === "attiva") {
        filtrate = filtrate.filter((t) => !t.end_ts);
      } else if (this.filtroStato === "completata") {
        filtrate = filtrate.filter((t) => !!t.end_ts);
      }
    }
    if (this.filtroOggi) {
      const oggi = /* @__PURE__ */ new Date();
      oggi.setHours(0, 0, 0, 0);
      const domani = new Date(oggi);
      domani.setDate(domani.getDate() + 1);
      filtrate = filtrate.filter((t) => {
        const data = new Date(t.start_ts);
        return data >= oggi && data < domani;
      });
    }
    this.timbratureFiltrate = filtrate;
  }
  filtraOggi() {
    this.filtroOggi = !this.filtroOggi;
    if (this.filtroOggi) {
      this.filtroDataInizio = "";
      this.filtroDataFine = "";
    }
    this.applicaFiltri();
  }
  // --- Azioni sulle timbrature ---
  nuovaTimbratura() {
    return __async(this, null, function* () {
      if (!this.currentUser) {
        this.router.navigate(["/crea-timbratura"]);
        return;
      }
      try {
        const oggi = /* @__PURE__ */ new Date();
        oggi.setHours(0, 0, 0, 0);
        const domani = new Date(oggi);
        domani.setDate(domani.getDate() + 1);
        const timbratureOggi = yield lastValueFrom(this.timbratureService.getFiltered({
          company_id: this.currentUser.company_id,
          user_id: this.currentUser.id,
          start_ts: {
            gte: oggi.toISOString(),
            lt: domani.toISOString()
          }
        }));
        if (timbratureOggi.length > 0) {
          const existing = timbratureOggi[0];
          const ingressTime = new Date(existing.start_ts).toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit"
          });
          const conferma = confirm(`\xC8 gi\xE0 presente una timbratura oggi con ingresso alle ${ingressTime}. Vuoi modificarla?`);
          if (conferma) {
            this.router.navigate(["/crea-timbratura", existing.id]);
          }
        } else {
          this.router.navigate(["/crea-timbratura"]);
        }
      } catch (error) {
        console.error("Errore in nuovaTimbratura", error);
        this.router.navigate(["/crea-timbratura"]);
      }
    });
  }
  visualizzaTimbratura(timbratura) {
    this.router.navigate(["/crea-timbratura", timbratura.id], {
      queryParams: { edit: timbratura.id, mode: "edit" }
    });
  }
  completaTimbratura(t) {
    return __async(this, null, function* () {
      if (!t?.id || !this.currentUser)
        return;
      const isOwner = t.user_id === this.currentUser.id;
      const canAdmin = this.authService.hasRole("admin");
      const canManager = this.authService.hasRole("manager") && this.managerCanModifyTimbrature;
      if (!(isOwner || canAdmin || canManager)) {
        alert("Non hai i permessi per completare questa timbratura.");
        return;
      }
      const chiudiOra = confirm("Chiudere la timbratura ora? (OK = ora, Annulla = inserisci orario manuale)");
      let endIso = null;
      if (chiudiOra) {
        endIso = (/* @__PURE__ */ new Date()).toISOString();
      } else {
        const input = prompt('Inserisci orario di fine (formati: "YYYY-MM-DD HH:mm" o "HH:mm" per oggi). Esempio: 2025-11-13 18:30');
        if (!input)
          return;
        endIso = this.parseInputToIso(input);
        if (!endIso) {
          alert("Orario non valido. Operazione annullata.");
          return;
        }
      }
      try {
        this.isLoading = true;
        yield lastValueFrom(this.timbratureService.completeTimbratura(t.id, endIso));
        yield this.loadTimbrature();
        yield this.loadRichiesteModifica();
      } catch (error) {
        console.error("Errore completamento timbratura", error);
        alert("Errore durante la chiusura.");
      } finally {
        this.isLoading = false;
      }
    });
  }
  parseInputToIso(input) {
    input = input.trim();
    const tryIso = new Date(input);
    if (!isNaN(tryIso.getTime()) && /\d{4}-\d{2}-\d{2}T/.test(input)) {
      return tryIso.toISOString();
    }
    const dtMatch = input.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{1,2}):(\d{2})$/);
    if (dtMatch) {
      const [, y, m, d, hh, mm] = dtMatch;
      const dt = new Date(Number(y), Number(m) - 1, Number(d), Number(hh), Number(mm));
      return isNaN(dt.getTime()) ? null : dt.toISOString();
    }
    const timeMatch = input.match(/^(\d{1,2}):(\d{2})$/);
    if (timeMatch) {
      const now = /* @__PURE__ */ new Date();
      const [, hh, mm] = timeMatch;
      const dt = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Number(hh), Number(mm));
      return isNaN(dt.getTime()) ? null : dt.toISOString();
    }
    return null;
  }
  // --- Soft delete e ripristino ---
  eliminaTimbratura(t) {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      const conferma = confirm("Spostare la timbratura nel cestino? (Potrai ripristinarla)");
      if (!conferma)
        return;
      try {
        yield lastValueFrom(this.timbratureService.softDelete(t.id, this.currentUser.id));
        yield this.loadTimbrature();
        if (this.showDeletedSection)
          yield this.loadDeletedTimbrature();
      } catch (error) {
        console.error("Errore eliminazione", error);
        alert("Errore durante lo spostamento nel cestino.");
      }
    });
  }
  ripristinaTimbratura(t) {
    return __async(this, null, function* () {
      const conferma = confirm("Ripristinare la timbratura?");
      if (!conferma)
        return;
      try {
        yield lastValueFrom(this.timbratureService.restore(t.id));
        yield this.loadTimbrature();
        yield this.loadDeletedTimbrature();
      } catch (error) {
        console.error("Errore ripristino", error);
        alert("Errore durante il ripristino.");
      }
    });
  }
  toggleShowDeleted() {
    this.showDeletedSection = !this.showDeletedSection;
    if (this.showDeletedSection)
      this.loadDeletedTimbrature();
  }
  // --- Gestione richieste di modifica ---
  handleRichiestaAction(richiesta, action) {
    return __async(this, null, function* () {
      const conferma = confirm(`Confermi ${action === "approve" ? "approvazione" : "rifiuto"}?`);
      if (!conferma)
        return;
      if (this.authService.hasRole("manager") && !this.managerCanModifyTimbrature) {
        alert("Non hai permessi per gestire richieste.");
        return;
      }
      try {
        const adminResponse = this.authService.hasRole("admin") ? action === "approve" ? "Approvata da admin" : "Rifiutata da admin" : action === "approve" ? "Approvata da manager" : "Rifiutata da manager";
        yield lastValueFrom(this.timbratureService.aggiornaRichiestaModifica(
          richiesta.id,
          action === "approve" ? "approved" : "rejected",
          adminResponse,
          action === "approve"
          // applyChanges solo se approve
        ));
        yield Promise.all([this.loadTimbrature(), this.loadRichiesteModifica()]);
      } catch (error) {
        console.error("Errore gestione richiesta", error);
        alert("Errore durante l'operazione.");
      }
    });
  }
  formatRequestedChanges(richiesta) {
    const out = [];
    if (!richiesta?.requested_changes)
      return out;
    const rc = richiesta.requested_changes;
    const od = richiesta.original_data || {};
    const fmtDate = (iso) => iso ? new Date(iso).toLocaleString() : "\u2014";
    if (rc.start_ts !== void 0) {
      out.push({ label: "Inizio", old: fmtDate(od.start_ts), newVal: fmtDate(rc.start_ts) });
    }
    if (rc.end_ts !== void 0) {
      out.push({ label: "Fine", old: fmtDate(od.end_ts), newVal: fmtDate(rc.end_ts) });
    }
    if (rc.notes !== void 0) {
      out.push({ label: "Note", old: od.notes ?? "\u2014", newVal: rc.notes ?? "\u2014" });
    }
    return out;
  }
  // --- Utility ---
  hasRole(role) {
    return this.currentUser?.role === role;
  }
  getInitials(firstName, lastName) {
    if (!firstName && !lastName)
      return "?";
    const first = firstName?.charAt(0)?.toUpperCase() || "";
    const last = lastName?.charAt(0)?.toUpperCase() || "";
    return first + last;
  }
  // Metodo per il template (già presente)
  troncaTesto(testo, max) {
    if (!testo)
      return "";
    return testo.length > max ? testo.substring(0, max) + "..." : testo;
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
  get canModifyTimbratura() {
    return this.authService.hasRole("admin") || this.authService.hasRole("manager") && this.managerCanModifyTimbrature;
  }
  static \u0275fac = function ListaTimbratureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaTimbratureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTimbratureComponent, selectors: [["app-lista-timbrature"]], decls: 59, vars: 12, consts: [[1, "page-container"], [1, "form-card", "flex", "flex-col", "gap-md", "p-lg"], [1, "flex", "flex-wrap", "justify-between", "gap-md"], [1, "form-row", 2, "flex", "1"], [1, "form-group"], [1, "standard-label"], ["name", "calendar-arrow-up"], ["type", "date", 3, "ngModelChange", "change", "ngModel"], ["name", "calendar-arrow-down"], ["name", "filter"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "attiva"], ["value", "completata"], [1, "flex", "flex-wrap", "items-center", "gap-sm", 2, "align-self", "flex-end"], [1, "promethea-button", "ghost", 3, "click"], ["name", "calendar-clock"], [1, "promethea-button", 3, "click"], ["name", "plus"], ["class", "promethea-button outline", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "table-section"], [1, "crm-table"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["class", "flex flex-col items-center justify-center gap-md p-lg text-center empty-state", 4, "ngIf"], ["class", "flex justify-between items-center pt-lg", "style", "border-top: 1px solid var(--smoke-1);", 4, "ngIf"], ["class", "form-card flex flex-col gap-md p-lg", 4, "ngIf"], [1, "promethea-button", "outline", 3, "click"], ["name", "trash-2"], ["class", "info-message m-sm01", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "mb-sm"], ["name", "clock-alert"], [1, "text-md", "font-bold"], [1, "chip", "warning"], [4, "ngFor", "ngForOf"], [1, "font-semibold"], [1, "chip-mini"], ["class", "flex gap-sm items-center text-mini p-sm0", 4, "ngFor", "ngForOf"], [1, "flex", "gap-sm"], [1, "promethea-button", "btn-sm", 3, "click"], ["name", "check"], [1, "promethea-button", "ghost", "btn-sm", 3, "click"], ["name", "x"], [1, "flex", "gap-sm", "items-center", "text-mini", "p-sm0"], [1, "text-muted"], ["name", "arrow-right", 2, "width", "12px", "height", "12px", "flex-shrink", "0"], [1, "info-message", "m-sm01"], ["name", "info"], [2, "cursor", "pointer", 3, "click"], ["class", "chip active text-mini", 4, "ngIf"], ["class", "chip-mini", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "text-muted text-interrupt text-mini", 3, "title", 4, "ngIf"], ["class", "info-message mb-sm", "style", "border-left-color: #f59e0b; background: color-mix(in srgb, #f59e0b 12%, transparent);", 4, "ngIf"], [1, "flex", "gap-sm", "items-center"], ["class", "promethea-button ghost btn-sm", 3, "click", 4, "ngIf"], ["class", "icon-button", "title", "Elimina", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "gap-sm"], [1, "avatar-sm"], [1, "chip", "active", "text-mini"], [1, "text-muted", "text-interrupt", "text-mini", 3, "title"], [1, "info-message", "mb-sm", 2, "border-left-color", "#f59e0b", "background", "color-mix(in srgb, #f59e0b 12%, transparent)"], ["name", "hourglass"], [1, "text-mini"], ["name", "clock-check"], ["title", "Elimina", 1, "icon-button", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md", "p-lg", "text-center", "empty-state"], [1, "avatartondo", 2, "width", "64px", "height", "64px"], ["name", "inbox"], [1, "font-bold", "mb-sm"], [1, "text-muted", "text-mini"], [1, "flex", "justify-between", "items-center", "pt-lg", 2, "border-top", "1px solid var(--smoke-1)"], ["class", "table-section", 4, "ngIf"], ["name", "package-open"], ["class", "font-semibold", 4, "ngIf"], ["class", "icon-lucide", "title", "Ripristina", 3, "click", 4, "ngIf"], ["title", "Ripristina", 1, "icon-lucide", 3, "click"], ["name", "undo-2"]], template: function ListaTimbratureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      \u0275\u0275element(6, "lucide-angular", 6);
      \u0275\u0275text(7, " Data Inizio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTimbratureComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroDataInizio, $event) || (ctx.filtroDataInizio = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ListaTimbratureComponent_Template_input_change_8_listener() {
        return ctx.applicaFiltri();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
      \u0275\u0275element(11, "lucide-angular", 8);
      \u0275\u0275text(12, " Data Fine ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTimbratureComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroDataFine, $event) || (ctx.filtroDataFine = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ListaTimbratureComponent_Template_input_change_13_listener() {
        return ctx.applicaFiltri();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 4)(15, "label", 5);
      \u0275\u0275element(16, "lucide-angular", 9);
      \u0275\u0275text(17, " Stato ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTimbratureComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroStato, $event) || (ctx.filtroStato = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ListaTimbratureComponent_Template_select_change_18_listener() {
        return ctx.applicaFiltri();
      });
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Tutti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "Attive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 13);
      \u0275\u0275text(24, "Completate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
      \u0275\u0275listener("click", function ListaTimbratureComponent_Template_button_click_26_listener() {
        return ctx.filtraOggi();
      });
      \u0275\u0275element(27, "lucide-angular", 16);
      \u0275\u0275text(28, " Oggi ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 17);
      \u0275\u0275listener("click", function ListaTimbratureComponent_Template_button_click_29_listener() {
        return ctx.nuovaTimbratura();
      });
      \u0275\u0275element(30, "lucide-angular", 18);
      \u0275\u0275text(31, " Nuova Timbratura ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, ListaTimbratureComponent_button_32_Template, 3, 1, "button", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, ListaTimbratureComponent_ng_container_33_Template, 3, 2, "ng-container", 20);
      \u0275\u0275elementStart(34, "div", 1)(35, "div", 21)(36, "table", 22)(37, "thead")(38, "tr");
      \u0275\u0275template(39, ListaTimbratureComponent_th_39_Template, 2, 0, "th", 20);
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "Inizio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Fine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47, "Ore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th");
      \u0275\u0275text(49, "Pause");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th");
      \u0275\u0275text(51, "Note");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th");
      \u0275\u0275text(53, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "tbody");
      \u0275\u0275template(55, ListaTimbratureComponent_tr_55_Template, 26, 22, "tr", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(56, ListaTimbratureComponent_div_56_Template, 8, 0, "div", 24)(57, ListaTimbratureComponent_div_57_Template, 9, 2, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, ListaTimbratureComponent_div_58_Template, 9, 3, "div", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroDataInizio);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroDataFine);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroStato);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.filtroOggi);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.currentUser);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canModifyTimbratura);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.hasRole("admin") || ctx.managerViewingOthers);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.timbratureFiltrate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.timbratureFiltrate.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.timbratureFiltrate.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeletedSection);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.promethea-button.btn-sm[_ngcontent-%COMP%] {\n  padding: calc(var(--gap-sm) / 2) var(--gap-sm);\n  font-size: var(--fs-mini);\n  min-height: 32px;\n  border-radius: 24px 6px 24px 6px;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  min-width: var(--fs-lg);\n  border-radius: 50%;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FAFAFC;\n  font-weight: 700;\n  font-size: var(--fs-mini);\n}\n/*# sourceMappingURL=lista-timbrature.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaTimbratureComponent, [{
    type: Component,
    args: [{ selector: "app-lista-timbrature", standalone: true, imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- ===== FILTRI & AZIONI ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
    <div class="flex flex-wrap justify-between gap-md">\r
\r
      <!-- Filtri -->\r
      <div class="form-row" style="flex: 1;">\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="calendar-arrow-up"></lucide-angular>\r
            Data Inizio\r
          </label>\r
          <input type="date" [(ngModel)]="filtroDataInizio" (change)="applicaFiltri()">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="calendar-arrow-down"></lucide-angular>\r
            Data Fine\r
          </label>\r
          <input type="date" [(ngModel)]="filtroDataFine" (change)="applicaFiltri()">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="filter"></lucide-angular>\r
            Stato\r
          </label>\r
          <select [(ngModel)]="filtroStato" (change)="applicaFiltri()">\r
            <option value="">Tutti</option>\r
            <option value="attiva">Attive</option>\r
            <option value="completata">Completate</option>\r
          </select>\r
        </div>\r
      </div>\r
    </div>\r
      <!-- Azioni -->\r
      <div class="flex flex-wrap items-center gap-sm" style="align-self: flex-end;">\r
        <button class="promethea-button ghost" (click)="filtraOggi()" [class.active]="filtroOggi">\r
          <lucide-angular name="calendar-clock"></lucide-angular>\r
          Oggi\r
        </button>\r
        <button class="promethea-button" (click)="nuovaTimbratura()">\r
          <lucide-angular name="plus"></lucide-angular>\r
          Nuova Timbratura\r
        </button>\r
        <button class="promethea-button outline" *ngIf="currentUser" (click)="toggleShowDeleted()">\r
          <lucide-angular name="trash-2"></lucide-angular>\r
          {{ showDeletedSection ? 'Nascondi cestino' : ('Cancellate (' + (deletedTimbrature.length || 0) + ')') }}\r
        </button>\r
      </div>\r
  </div>\r
\r
  <!-- ===== RICHIESTE MODIFICA (admin/manager) ===== -->\r
  <ng-container *ngIf="canModifyTimbratura">\r
\r
    <div class="form-card flex flex-col gap-md p-lg" *ngIf="richiesteModifica.length > 0">\r
      <div class="flex items-center gap-sm mb-sm">\r
        <lucide-angular name="clock-alert"></lucide-angular>\r
        <h2 class="text-md font-bold">Richieste di modifica timbrature</h2>\r
        <span class="chip warning">{{ richiesteModifica.length }}</span>\r
      </div>\r
\r
      <div class="table-section">\r
        <table class="crm-table">\r
          <thead>\r
            <tr>\r
              <th>Utente</th>\r
              <th>Data</th>\r
              <th>Richiesta</th>\r
              <th>Azioni</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let r of richiesteModifica">\r
              <td class="font-semibold">{{ r.user?.first_name }} {{ r.user?.last_name }}</td>\r
              <td>\r
                <span class="chip-mini">{{ r.timbratura?.start_ts | date:'dd/MM/yyyy' }}</span>\r
              </td>\r
              <td>\r
                <div *ngFor="let c of formatRequestedChanges(r)" class="flex gap-sm items-center text-mini p-sm0">\r
                  <strong>{{ c.label }}:</strong>\r
                  <span class="text-muted">{{ c.old }}</span>\r
                  <lucide-angular name="arrow-right" style="width: 12px; height: 12px; flex-shrink: 0;"></lucide-angular>\r
                  <span class="font-semibold">{{ c.newVal }}</span>\r
                </div>\r
              </td>\r
              <td>\r
                <div class="flex gap-sm">\r
                  <button class="promethea-button btn-sm" (click)="handleRichiestaAction(r, 'approve')">\r
                    <lucide-angular name="check"></lucide-angular>\r
                    Approva\r
                  </button>\r
                  <button class="promethea-button ghost btn-sm" (click)="handleRichiestaAction(r, 'reject')">\r
                    <lucide-angular name="x"></lucide-angular>\r
                    Rifiuta\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="richiesteModifica.length === 0"\r
         class="info-message m-sm01">\r
      <lucide-angular name="info"></lucide-angular>\r
      Nessuna richiesta di modifica in attesa.\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- ===== TABELLA TIMBRATURE ===== -->\r
  <div class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="table-section">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th *ngIf="hasRole('admin') || managerViewingOthers">Dipendente</th>\r
            <th>Data</th>\r
            <th>Inizio</th>\r
            <th>Fine</th>\r
            <th>Ore</th>\r
            <th>Pause</th>\r
            <th>Note</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let timbratura of timbratureFiltrate"\r
              (click)="timbratura.end_ts ? visualizzaTimbratura(timbratura) : completaTimbratura(timbratura)"\r
              style="cursor: pointer;">\r
\r
            <!-- Dipendente (solo admin/manager) -->\r
            <td *ngIf="hasRole('admin') || managerViewingOthers">\r
              <div class="flex items-center gap-sm">\r
                <div class="avatar-sm">\r
                  {{ getInitials(timbratura.user?.first_name, timbratura.user?.last_name) }}\r
                </div>\r
                <strong>{{ timbratura.user?.first_name }} {{ timbratura.user?.last_name }}</strong>\r
              </div>\r
            </td>\r
\r
            <td>\r
              <span class="chip-mini">{{ timbratura.start_ts | date:'dd/MM/yyyy' }}</span>\r
            </td>\r
            <td>{{ timbratura.start_ts | date:'HH:mm' }}</td>\r
            <td>\r
              <span *ngIf="timbratura.end_ts">{{ timbratura.end_ts | date:'HH:mm' }}</span>\r
              <span *ngIf="!timbratura.end_ts" class="chip active text-mini">In corso</span>\r
            </td>\r
            <td>{{ timbratura.total_minutes / 60 | number:'1.1-1' }}h</td>\r
            <td>\r
              <span *ngIf="timbratura.breaks?.length > 0" class="chip-mini">\r
                {{ timbratura.breaks.length }}\r
              </span>\r
              <span *ngIf="!timbratura.breaks || timbratura.breaks.length === 0" class="text-muted">\u2014</span>\r
            </td>\r
            <td>\r
              <span *ngIf="timbratura.notes" class="text-muted text-interrupt text-mini" [title]="timbratura.notes">\r
                {{ troncaTesto(timbratura.notes, 30) }}\r
              </span>\r
              <span *ngIf="!timbratura.notes" class="text-muted">\u2014</span>\r
            </td>\r
            <td>\r
              <!-- Banner pending (employee) -->\r
              <div *ngIf="isEmployee && (timbratura.id ? pendingTimbraturaIds.has(timbratura.id) : false)"\r
                   class="info-message mb-sm" style="border-left-color: #f59e0b; background: color-mix(in srgb, #f59e0b 12%, transparent);">\r
                <lucide-angular name="hourglass"></lucide-angular>\r
                <span class="text-mini">In attesa di approvazione modifica</span>\r
              </div>\r
\r
              <div class="flex gap-sm items-center">\r
                <button class="promethea-button ghost btn-sm"\r
                        *ngIf="!timbratura.end_ts && (canModifyTimbratura || timbratura.user_id === currentUser?.id)"\r
                        (click)="completaTimbratura(timbratura); $event.stopPropagation()">\r
                  <lucide-angular name="clock-check"></lucide-angular>\r
                  Completa\r
                </button>\r
\r
                <button class=icon-button\r
                        *ngIf="hasRole('admin')"\r
                        (click)="eliminaTimbratura(timbratura); $event.stopPropagation()"\r
                        title="Elimina">\r
                  <lucide-angular name="trash-2"></lucide-angular>\r
                </button>\r
              </div>\r
            </td>\r
\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Empty state -->\r
    <div *ngIf="timbratureFiltrate.length === 0"\r
         class="flex flex-col items-center justify-center gap-md p-lg text-center empty-state">\r
      <div class="avatartondo" style="width: 64px; height: 64px;">\r
        <lucide-angular name="inbox"></lucide-angular>\r
      </div>\r
      <div>\r
        <h3 class="font-bold mb-sm">Nessuna timbratura trovata</h3>\r
        <p class="text-muted text-mini">Non sono state trovate timbrature con i filtri attuali.</p>\r
      </div>\r
    </div>\r
\r
    <!-- Paginazione info -->\r
    <div *ngIf="timbratureFiltrate.length > 0"\r
         class="flex justify-between items-center pt-lg" style="border-top: 1px solid var(--smoke-1);">\r
      <span class="text-muted text-mini">\r
        Mostrando <strong>{{ timbratureFiltrate.length }}</strong> di <strong>{{ timbrature.length }}</strong> timbrature\r
      </span>\r
    </div>\r
\r
  </div>\r
\r
  <!-- ===== CESTINO ===== -->\r
  <div *ngIf="showDeletedSection" class="form-card flex flex-col gap-md p-lg">\r
\r
    <div class="flex items-center gap-sm mb-sm">\r
      <lucide-angular name="trash-2"></lucide-angular>\r
      <h2 class="text-md font-bold">Timbrature cancellate</h2>\r
      <span class="chip warning">{{ deletedTimbrature.length }}</span>\r
    </div>\r
\r
    <!-- Empty cestino -->\r
    <div *ngIf="deletedTimbrature.length === 0"\r
         class="flex flex-col items-center justify-center gap-md p-lg text-center empty-state">\r
      <div class="avatartondo" style="width: 64px; height: 64px;">\r
        <lucide-angular name="package-open"></lucide-angular>\r
      </div>\r
      <p class="text-muted text-mini">Nessuna timbratura nel cestino</p>\r
    </div>\r
\r
    <div *ngIf="deletedTimbrature.length > 0" class="table-section">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th *ngIf="hasRole('admin') || managerViewingOthers">Dipendente</th>\r
            <th>Data</th>\r
            <th>Ora Inizio</th>\r
            <th>Ore Totali</th>\r
            <th>Eliminata il</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let t of deletedTimbrature">\r
            <td *ngIf="hasRole('admin') || managerViewingOthers" class="font-semibold">\r
              {{ t.user?.first_name }} {{ t.user?.last_name }}\r
            </td>\r
            <td>\r
              <span class="chip-mini">{{ t.start_ts | date:'dd/MM/yyyy' }}</span>\r
            </td>\r
            <td>{{ t.start_ts | date:'HH:mm' }}</td>\r
            <td>{{ t.total_minutes / 60 | number:'1.1-1' }}h</td>\r
            <td class="text-muted text-mini">\r
              {{ t.deleted_at ? (t.deleted_at | date:'dd/MM/yyyy HH:mm') : '\u2014' }}\r
            </td>\r
            <td>\r
              <button class=icon-lucide\r
                      *ngIf="hasRole('admin') || (hasRole('manager') && (t.user_id ? visibleEmployeeIds.has(t.user_id) : false))"\r
                      (click)="ripristinaTimbratura(t); $event.stopPropagation()"\r
                      title="Ripristina">\r
                <lucide-angular name="undo-2"></lucide-angular>\r
              </button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
  </div>\r
\r
</div>`, styles: ["/* src/app/timbrature/features/lista-timbrature/lista-timbrature.component.css */\n.promethea-button.btn-sm {\n  padding: calc(var(--gap-sm) / 2) var(--gap-sm);\n  font-size: var(--fs-mini);\n  min-height: 32px;\n  border-radius: 24px 6px 24px 6px;\n}\n.avatar-sm {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  min-width: var(--fs-lg);\n  border-radius: 50%;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FAFAFC;\n  font-weight: 700;\n  font-size: var(--fs-mini);\n}\n/*# sourceMappingURL=lista-timbrature.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTimbratureComponent, { className: "ListaTimbratureComponent", filePath: "src/app/timbrature/features/lista-timbrature/lista-timbrature.component.ts", lineNumber: 22 });
})();
export {
  ListaTimbratureComponent
};
//# sourceMappingURL=chunk-A6G6W476.js.map
