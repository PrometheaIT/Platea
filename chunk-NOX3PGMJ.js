import {
  CompanyService
} from "./chunk-BY47AI6E.js";
import {
  TimbratureService
} from "./chunk-G6UJC4GH.js";
import {
  AuthService
} from "./chunk-YT7WS7HI.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-JWP3QZ4U.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
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
  ɵɵconditional,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/features/crea-timbratura/crea-timbratura.component.ts
function CreaTimbraturaComponent_div_2_lucide_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 41);
  }
}
function CreaTimbraturaComponent_div_2_lucide_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 42);
  }
}
function CreaTimbraturaComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 39);
    \u0275\u0275listener("click", function CreaTimbraturaComponent_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copiaGiornoPrecedente());
    });
    \u0275\u0275template(2, CreaTimbraturaComponent_div_2_lucide_icon_2_Template, 1, 0, "lucide-icon", 36)(3, CreaTimbraturaComponent_div_2_lucide_icon_3_Template, 1, 0, "lucide-icon", 40);
    \u0275\u0275text(4, " Copia Precedente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.caricandoTimbraturaPrecedente);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.caricandoTimbraturaPrecedente);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.caricandoTimbraturaPrecedente);
  }
}
function CreaTimbraturaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "lucide-icon", 44);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Modalit\xE0 Richiesta Modifica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6, "Le modifiche verranno inviate come richiesta all'amministratore che potr\xE0 approvarle o respingerle.");
    \u0275\u0275elementEnd()()();
  }
}
function CreaTimbraturaComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "lucide-icon", 47);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Modalit\xE0 Amministratore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6, "Le modifiche verranno applicate immediatamente alla timbratura.");
    \u0275\u0275elementEnd()()();
  }
}
function CreaTimbraturaComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "lucide-icon", 49);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Hai gi\xE0 una timbratura per questa data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.existingTimbraturaForDate ? "Ingresso alle " + \u0275\u0275pipeBind2(7, 1, ctx_r1.existingTimbraturaForDate.start_ts, "HH:mm") : "", ". Non \xE8 consentito creare pi\xF9 di una timbratura nello stesso giorno. ");
  }
}
function CreaTimbraturaComponent_Conditional_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Data obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_Conditional_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.timbraturaForm.get("data")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["futureDate"] == null ? null : tmp_2_0.errors["futureDate"].message);
  }
}
function CreaTimbraturaComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, CreaTimbraturaComponent_Conditional_19_span_1_Template, 2, 0, "span", 50)(2, CreaTimbraturaComponent_Conditional_19_span_2_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r1.timbraturaForm.get("data")) == null ? null : tmp_1_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.timbraturaForm.get("data")) == null ? null : tmp_2_0.hasError("futureDate"));
  }
}
function CreaTimbraturaComponent_Conditional_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Ora ingresso obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_Conditional_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.timbraturaForm.get("ora_inizio")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["futureTime"] == null ? null : tmp_2_0.errors["futureTime"].message);
  }
}
function CreaTimbraturaComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, CreaTimbraturaComponent_Conditional_25_span_1_Template, 2, 0, "span", 50)(2, CreaTimbraturaComponent_Conditional_25_span_2_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r1.timbraturaForm.get("ora_inizio")) == null ? null : tmp_1_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.timbraturaForm.get("ora_inizio")) == null ? null : tmp_2_0.hasError("futureTime"));
  }
}
function CreaTimbraturaComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.timeRangeErrorMessage);
  }
}
function CreaTimbraturaComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.timbraturaForm.get("ora_fine")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["futureTime"] == null ? null : tmp_1_0.errors["futureTime"].message);
  }
}
function CreaTimbraturaComponent_For_41_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function CreaTimbraturaComponent_For_41_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const \u0275$index_152_r4 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rimuoviPausa(\u0275$index_152_r4));
    });
    \u0275\u0275element(1, "lucide-icon", 59);
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_For_41_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const \u0275$index_152_r4 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r1.getPausaControl(\u0275$index_152_r4, "inizio").errors) == null ? null : tmp_12_0["futureTime"] == null ? null : tmp_12_0["futureTime"].message);
  }
}
function CreaTimbraturaComponent_For_41_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const \u0275$index_152_r4 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r1.getPausaControl(\u0275$index_152_r4, "fine").errors) == null ? null : tmp_12_0["futureTime"] == null ? null : tmp_12_0["futureTime"].message);
  }
}
function CreaTimbraturaComponent_For_41_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_152_r4 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getPauseTimeErrorMessage(\u0275$index_152_r4));
  }
}
function CreaTimbraturaComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 51)(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CreaTimbraturaComponent_For_41_button_5_Template, 2, 0, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 55)(7, "div", 12)(8, "label", 13);
    \u0275\u0275text(9, "Inizio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 56);
    \u0275\u0275template(11, CreaTimbraturaComponent_For_41_Conditional_11_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12)(13, "label", 13);
    \u0275\u0275text(14, "Fine");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 56);
    \u0275\u0275template(16, CreaTimbraturaComponent_For_41_Conditional_16_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CreaTimbraturaComponent_For_41_Conditional_17_Template, 2, 1, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_152_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Pausa ", \u0275$index_152_r4 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRemovePause(\u0275$index_152_r4));
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx_r1.getPausaControl(\u0275$index_152_r4, "inizio"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getPausaControl(\u0275$index_152_r4, "inizio").hasError("futureTime") ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.getPausaControl(\u0275$index_152_r4, "fine"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getPausaControl(\u0275$index_152_r4, "fine").hasError("futureTime") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasPauseTimeError(\u0275$index_152_r4) ? 17 : -1);
  }
}
function CreaTimbraturaComponent_div_57_lucide_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 41);
  }
}
function CreaTimbraturaComponent_div_57_lucide_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 70);
  }
}
function CreaTimbraturaComponent_div_57_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "Ottenendo posizione\u2026");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_div_57_span_10_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(2, 1, ctx_r1.posizioneAttuale.accuracy, "1.0-0"), " m)");
  }
}
function CreaTimbraturaComponent_div_57_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275element(1, "lucide-icon", 73);
    \u0275\u0275text(2, " Posizione ottenuta ");
    \u0275\u0275template(3, CreaTimbraturaComponent_div_57_span_10_small_3_Template, 3, 4, "small", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.posizioneAttuale.accuracy);
  }
}
function CreaTimbraturaComponent_div_57_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "Nessuna posizione");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_div_57_div_12_div_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "Disponibile");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_div_57_div_12_div_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275element(1, "lucide-icon", 73);
    \u0275\u0275text(2, " Selezionato ");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_div_57_div_12_div_3_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function CreaTimbraturaComponent_div_57_div_12_div_3_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const pt_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selezionaPunto(pt_r7));
    });
    \u0275\u0275element(1, "lucide-icon", 60);
    \u0275\u0275text(2, " Seleziona ");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_div_57_div_12_div_3_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function CreaTimbraturaComponent_div_57_div_12_div_3_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deselezionaPunto());
    });
    \u0275\u0275element(1, "lucide-icon", 85);
    \u0275\u0275text(2, " Deseleziona ");
    \u0275\u0275elementEnd();
  }
}
function CreaTimbraturaComponent_div_57_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 79)(2, "div", 23)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 80);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 52);
    \u0275\u0275template(10, CreaTimbraturaComponent_div_57_div_12_div_3_span_10_Template, 2, 0, "span", 65)(11, CreaTimbraturaComponent_div_57_div_12_div_3_span_11_Template, 3, 0, "span", 65)(12, CreaTimbraturaComponent_div_57_div_12_div_3_button_12_Template, 3, 0, "button", 81)(13, CreaTimbraturaComponent_div_57_div_12_div_3_button_13_Template, 3, 0, "button", 82);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pt_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((pt_r7 == null ? null : pt_r7.name) || "Punto di timbratura");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pointLabel(pt_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Distanza: ", ctx_r1.distanceToPoint(pt_r7), " m");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isPuntoSelezionato(pt_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPuntoSelezionato(pt_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPuntoSelezionato(pt_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPuntoSelezionato(pt_r7));
  }
}
function CreaTimbraturaComponent_div_57_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "lucide-icon", 44);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Seleziona un punto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6, "Seleziona il punto di timbratura corretto per procedere.");
    \u0275\u0275elementEnd()()();
  }
}
function CreaTimbraturaComponent_div_57_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "lucide-icon", 73);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Punto selezionato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (ctx_r1.puntoSelezionato == null ? null : ctx_r1.puntoSelezionato.name) || "Punto di timbratura", " \u2013 Puoi procedere con la timbratura.");
  }
}
function CreaTimbraturaComponent_div_57_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "p", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CreaTimbraturaComponent_div_57_div_12_div_3_Template, 14, 7, "div", 76)(4, CreaTimbraturaComponent_div_57_div_12_div_4_Template, 7, 0, "div", 77)(5, CreaTimbraturaComponent_div_57_div_12_div_5_Template, 7, 1, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Punti di timbratura disponibili (", ctx_r1.getPuntiNelRaggio().length, "):");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPuntiNelRaggio());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.puntoSelezionato);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.puntoSelezionato);
  }
}
function CreaTimbraturaComponent_div_57_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "p", 90);
    \u0275\u0275text(2, "Punto pi\xF9 vicino:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 75);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.nearestPoint == null ? null : ctx_r1.nearestPoint.name) || "Punto di timbratura");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.pointLabel(ctx_r1.nearestPoint), " \xB7 ", ctx_r1.distanceToNearest, " m");
  }
}
function CreaTimbraturaComponent_div_57_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "lucide-icon", 49);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Nessun punto disponibile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6, "Non ti trovi nel raggio di nessun punto di timbratura configurato.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CreaTimbraturaComponent_div_57_div_13_div_7_Template, 7, 3, "div", 88);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.nearestPoint);
  }
}
function CreaTimbraturaComponent_div_57_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "lucide-icon", 44);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Posizione non verificata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6, 'Usa "Ottieni Posizione" per vedere i punti di timbratura disponibili.');
    \u0275\u0275elementEnd()()();
  }
}
function CreaTimbraturaComponent_div_57_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "lucide-icon", 93);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Non puoi timbrare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6, "Non sono configurati punti di timbratura per la tua azienda.");
    \u0275\u0275elementEnd()()();
  }
}
function CreaTimbraturaComponent_div_57_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function CreaTimbraturaComponent_div_57_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function CreaTimbraturaComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275element(2, "lucide-icon", 60);
    \u0275\u0275text(3, " Posizione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 61)(5, "button", 62);
    \u0275\u0275listener("click", function CreaTimbraturaComponent_div_57_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ottieniPosizione());
    });
    \u0275\u0275template(6, CreaTimbraturaComponent_div_57_lucide_icon_6_Template, 1, 0, "lucide-icon", 36)(7, CreaTimbraturaComponent_div_57_lucide_icon_7_Template, 1, 0, "lucide-icon", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CreaTimbraturaComponent_div_57_span_9_Template, 2, 0, "span", 64)(10, CreaTimbraturaComponent_div_57_span_10_Template, 4, 1, "span", 65)(11, CreaTimbraturaComponent_div_57_span_11_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CreaTimbraturaComponent_div_57_div_12_Template, 6, 4, "div", 66)(13, CreaTimbraturaComponent_div_57_div_13_Template, 8, 1, "div", 16)(14, CreaTimbraturaComponent_div_57_div_14_Template, 7, 0, "div", 67)(15, CreaTimbraturaComponent_div_57_div_15_Template, 7, 0, "div", 68)(16, CreaTimbraturaComponent_div_57_div_16_Template, 2, 1, "div", 68)(17, CreaTimbraturaComponent_div_57_div_17_Template, 2, 1, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.ottenendoPosizione);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ottenendoPosizione);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.ottenendoPosizione);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.ottenendoPosizione ? "Ottenendo\u2026" : "Ottieni Posizione", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ottenendoPosizione);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.ottenendoPosizione && ctx_r1.posizioneAttuale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.ottenendoPosizione && !ctx_r1.posizioneAttuale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.posizioneAttuale && ctx_r1.getPuntiNelRaggio().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.posizioneAttuale && ctx_r1.getPuntiNelRaggio().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.posizioneAttuale && !ctx_r1.ottenendoPosizione);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.currentCompany == null ? null : ctx_r1.currentCompany.punch_points == null ? null : ctx_r1.currentCompany.punch_points.length) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : 0) === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
  }
}
function CreaTimbraturaComponent_Conditional_58_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 80);
    \u0275\u0275text(2, "Pause");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formattaOreMinuti(ctx_r1.calcolaPauseTotali()));
  }
}
function CreaTimbraturaComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "lucide-icon", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 10);
    \u0275\u0275text(5, "Riepilogo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 96)(7, "div", 97)(8, "span", 80);
    \u0275\u0275text(9, "Ore Totali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 98);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CreaTimbraturaComponent_Conditional_58_Conditional_12_Template, 5, 1, "div", 97);
    \u0275\u0275elementStart(13, "div", 97)(14, "span", 80);
    \u0275\u0275text(15, "Ore Lavorative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 98);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.formattaOreMinuti(ctx_r1.calcolaOreTotali()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calcolaPauseTotali() > 0 ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formattaOreMinuti(ctx_r1.calcolaLavoroEffettivo()));
  }
}
function CreaTimbraturaComponent_lucide_icon_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 41);
  }
}
function CreaTimbraturaComponent_lucide_icon_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 99);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r1.isEditMode ? ctx_r1.isAdmin ? "save" : "send" : "save");
  }
}
var CreaTimbraturaComponent = class _CreaTimbraturaComponent {
  fb = inject(FormBuilder);
  timbratureService = inject(TimbratureService);
  authService = inject(AuthService);
  companyService = inject(CompanyService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  // Form
  timbraturaForm;
  // Stato UI
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  ottenendoPosizione = false;
  caricandoTimbraturaPrecedente = false;
  // <-- Aggiunto
  // Dati
  currentUser = null;
  currentCompany = null;
  posizioneAttuale = null;
  posizioneValida = false;
  nearestPoint = null;
  distanceToNearest = null;
  puntoSelezionato = null;
  // Modalità modifica
  isEditMode = false;
  timbraturaId = null;
  timbraturaOriginale = null;
  // Copia dal giorno precedente
  timbraturaPrecedente = null;
  timbraturaPrecedenteDisponibile = false;
  // Controllo timbratura esistente per data selezionata (aggiunto)
  existingTimbraturaForDate = null;
  hasTimbraturaForSelectedDate = false;
  // Sottoscrizioni
  subs = new Subscription();
  // Validatori come arrow function
  noFutureDateValidator = (control) => {
    if (!control.value)
      return null;
    return new Date(control.value) > /* @__PURE__ */ new Date() ? { futureDate: true } : null;
  };
  noFutureTimeValidator = (control) => {
    if (!control.value)
      return null;
    const data = this.timbraturaForm?.get("data")?.value;
    if (data !== (/* @__PURE__ */ new Date()).toISOString().split("T")[0])
      return null;
    const now = /* @__PURE__ */ new Date();
    const current = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    return control.value > current ? { futureTime: true } : null;
  };
  timeRangeValidator = (group) => {
    const start = group.get("ora_inizio")?.value;
    const end = group.get("ora_fine")?.value;
    if (start && end && end <= start)
      return { invalidTimeRange: true };
    return null;
  };
  pauseTimeRangeValidator = (group) => {
    const start = group.get("inizio")?.value;
    const end = group.get("fine")?.value;
    if (start && end && end <= start)
      return { invalidPauseTimeRange: true };
    return null;
  };
  constructor() {
    this.timbraturaForm = this.createForm();
  }
  ngOnInit() {
    this.timbraturaForm.patchValue({ data: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
    this.subs.add(this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      const companyId = this.authService.companyId;
      if (companyId) {
        this.loadCompanyAndInit(companyId);
      }
    }));
    this.subs.add(this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.isEditMode = true;
        this.timbraturaId = id;
        this.loadTimbraturaForEdit(id);
      } else {
        this.isEditMode = false;
        this.timbraturaId = null;
      }
    }));
    this.timbraturaForm.get("data")?.valueChanges.subscribe((date) => {
      this.checkExistingTimbraturaForDate(date).catch(console.error);
      this.timbraturaForm.get("ora_inizio")?.updateValueAndValidity();
      this.timbraturaForm.get("ora_fine")?.updateValueAndValidity();
      this.revalidateAllPauses();
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  // --- Inizializzazione ---
  loadCompanyAndInit(companyId) {
    return __async(this, null, function* () {
      try {
        this.currentCompany = yield lastValueFrom(this.companyService.getById(companyId));
        if (!this.isEditMode) {
          yield this.checkPreviousDayTimbratura();
          yield this.checkExistingTimbraturaForDate(this.timbraturaForm.value.data);
        }
      } catch (err) {
        console.error("Errore caricamento azienda", err);
      }
    });
  }
  loadTimbraturaForEdit(id) {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        const timbratura = yield lastValueFrom(this.timbratureService.getTimbraturaBId(id));
        if (!timbratura)
          throw new Error("Timbratura non trovata");
        if (!this.authService.hasRole("admin") && timbratura.user_id !== this.currentUser?.id) {
          this.errorMessage = "Non hai i permessi per modificare questa timbratura";
          setTimeout(() => this.router.navigate(["/lista-timbrature"]), 2e3);
          return;
        }
        this.timbraturaOriginale = timbratura;
        this.popolaFormConDatiEsistenti(timbratura);
      } catch (err) {
        this.errorMessage = "Errore nel caricamento della timbratura";
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    });
  }
  // --- Controllo timbratura esistente per data ---
  checkExistingTimbraturaForDate(dateStr) {
    return __async(this, null, function* () {
      try {
        this.existingTimbraturaForDate = null;
        this.hasTimbraturaForSelectedDate = false;
        if (!this.currentUser || !dateStr)
          return;
        const timbrature = yield lastValueFrom(this.timbratureService.fetchTimbrature({ userId: this.currentUser.id }));
        const target = new Date(dateStr);
        target.setHours(0, 0, 0, 0);
        const found = timbrature.find((t) => {
          const d = new Date(t.start_ts);
          d.setHours(0, 0, 0, 0);
          return d.getTime() === target.getTime();
        }) || null;
        if (found) {
          this.existingTimbraturaForDate = found;
          this.hasTimbraturaForSelectedDate = true;
        }
      } catch (err) {
        console.error("[CreaTimbratura] checkExistingTimbraturaForDate error", err);
        this.hasTimbraturaForSelectedDate = false;
        this.existingTimbraturaForDate = null;
      }
    });
  }
  // --- Popola form con dati esistenti (per modifica) ---
  popolaFormConDatiEsistenti(timbratura) {
    const start = new Date(timbratura.start_ts);
    const end = timbratura.end_ts ? new Date(timbratura.end_ts) : null;
    this.timbraturaForm.patchValue({
      data: start.toISOString().split("T")[0],
      ora_inizio: start.toTimeString().substring(0, 5),
      ora_fine: end ? end.toTimeString().substring(0, 5) : "",
      notes: timbratura.notes || ""
    });
    while (this.pause.length)
      this.pause.removeAt(0);
    if (timbratura.breaks && Array.isArray(timbratura.breaks) && timbratura.breaks.length) {
      timbratura.breaks.forEach((b) => {
        const bs = new Date(b.start);
        const be = new Date(b.end);
        this.pause.push(this.fb.group({
          inizio: [bs.toTimeString().substring(0, 5), this.noFutureTimeValidator],
          fine: [be.toTimeString().substring(0, 5), this.noFutureTimeValidator]
        }, { validators: this.pauseTimeRangeValidator }));
      });
    } else {
      this.pause.push(this.creaPausaGroup());
    }
    if (timbratura.locations && timbratura.locations.length) {
      const loc = timbratura.locations[0];
      this.posizioneAttuale = {
        lat: loc.lat,
        lng: loc.lng,
        indirizzo: loc.address,
        timestamp: new Date(loc.timestamp),
        accuracy: 0
      };
      this.posizioneValida = true;
    }
  }
  // --- Form ---
  createForm() {
    return this.fb.group({
      data: ["", [Validators.required, this.noFutureDateValidator]],
      ora_inizio: ["", [Validators.required, this.noFutureTimeValidator]],
      ora_fine: ["", this.noFutureTimeValidator],
      notes: [""],
      pause: this.fb.array([this.creaPausaGroup()])
    }, { validators: this.timeRangeValidator });
  }
  creaPausaGroup() {
    return this.fb.group({
      inizio: ["", this.noFutureTimeValidator],
      fine: ["", this.noFutureTimeValidator]
    }, { validators: this.pauseTimeRangeValidator });
  }
  // Getter
  get pause() {
    return this.timbraturaForm.get("pause");
  }
  get isSelectedDateToday() {
    return this.timbraturaForm.value.data === (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  get maxDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  // Getter per errori del form
  get hasTimeRangeError() {
    return this.timbraturaForm.hasError("invalidTimeRange");
  }
  get timeRangeErrorMessage() {
    return this.timbraturaForm.getError("invalidTimeRange") ? "L'ora di uscita deve essere successiva all'ora di ingresso" : "";
  }
  // Metodi pause
  aggiungiPausa() {
    this.pause.push(this.creaPausaGroup());
  }
  rimuoviPausa(index) {
    if (this.pause.length > 1)
      this.pause.removeAt(index);
  }
  isPauseUsed(index) {
    const g = this.pause.at(index);
    return !!(g.get("inizio")?.value || g.get("fine")?.value);
  }
  canRemovePause(index) {
    return this.pause.length > 1 && this.isPauseUsed(index);
  }
  getPausaControl(index, field) {
    return this.pause.at(index).get(field);
  }
  hasPauseTimeError(index) {
    return this.pause.at(index).hasError("invalidPauseTimeRange");
  }
  getPauseTimeErrorMessage(index) {
    return this.pause.at(index).getError("invalidPauseTimeRange") ? "La fine pausa deve essere successiva all'inizio pausa" : "";
  }
  hasPauseErrors() {
    for (let i = 0; i < this.pause.length; i++) {
      if (this.pause.at(i).invalid)
        return true;
    }
    return false;
  }
  revalidateAllPauses() {
    this.pause.controls.forEach((g) => {
      g.get("inizio")?.updateValueAndValidity();
      g.get("fine")?.updateValueAndValidity();
    });
  }
  // --- Copia dal giorno precedente ---
  checkPreviousDayTimbratura() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      try {
        const timbrature = yield lastValueFrom(this.timbratureService.fetchTimbrature({ userId: this.currentUser.id }));
        const giorniChiusura = this.currentCompany?.closed_days ?? [0, 6];
        let giornoPrec = /* @__PURE__ */ new Date();
        giornoPrec.setDate(giornoPrec.getDate() - 1);
        while (giorniChiusura.includes(giornoPrec.getDay()) && giornoPrec > new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3)) {
          giornoPrec.setDate(giornoPrec.getDate() - 1);
        }
        const target = giornoPrec.toISOString().split("T")[0];
        this.timbraturaPrecedente = timbrature.find((t) => new Date(t.start_ts).toISOString().split("T")[0] === target) || null;
        this.timbraturaPrecedenteDisponibile = !!this.timbraturaPrecedente;
      } catch (err) {
        console.error("Errore verifica timbratura precedente", err);
      }
    });
  }
  copiaGiornoPrecedente() {
    return __async(this, null, function* () {
      if (!this.timbraturaPrecedente)
        return;
      this.caricandoTimbraturaPrecedente = true;
      try {
        const t = this.timbraturaPrecedente;
        const start = new Date(t.start_ts);
        const end = t.end_ts ? new Date(t.end_ts) : null;
        this.timbraturaForm.patchValue({
          ora_inizio: start.toTimeString().substring(0, 5),
          ora_fine: end ? end.toTimeString().substring(0, 5) : "",
          notes: t.notes || ""
        });
        while (this.pause.length)
          this.pause.removeAt(0);
        if (t.breaks && Array.isArray(t.breaks) && t.breaks.length) {
          t.breaks.forEach((b) => {
            const bs = new Date(b.start);
            const be = new Date(b.end);
            this.pause.push(this.fb.group({
              inizio: [bs.toTimeString().substring(0, 5), this.noFutureTimeValidator],
              fine: [be.toTimeString().substring(0, 5), this.noFutureTimeValidator]
            }, { validators: this.pauseTimeRangeValidator }));
          });
        } else {
          this.pause.push(this.creaPausaGroup());
        }
        this.successMessage = "Dati copiati dal giorno precedente!";
        setTimeout(() => this.successMessage = "", 3e3);
      } catch (err) {
        console.error("Errore copia", err);
      } finally {
        this.caricandoTimbraturaPrecedente = false;
      }
    });
  }
  // --- Geolocalizzazione ---
  ottieniPosizione() {
    this.ottenendoPosizione = true;
    this.errorMessage = "";
    navigator.geolocation.getCurrentPosition((pos) => {
      this.posizioneAttuale = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
        timestamp: /* @__PURE__ */ new Date()
      };
      this.verificaPosizioneRispettoPunti();
      this.ottenendoPosizione = false;
    }, (err) => {
      this.errorMessage = `Errore geolocalizzazione: ${err.message}`;
      this.ottenendoPosizione = false;
    }, { enableHighAccuracy: true, timeout: 1e4 });
  }
  verificaPosizioneRispettoPunti() {
    if (!this.posizioneAttuale || this.currentCompany?.timbratura_type !== "punti")
      return;
    const points = this.currentCompany.punch_points || [];
    let nearest = null;
    let minDist = Infinity;
    for (const pt of points) {
      const d = this.distanzaMetri(this.posizioneAttuale.lat, this.posizioneAttuale.lng, Number(pt.lat), Number(pt.lng));
      if (d < minDist) {
        minDist = d;
        nearest = pt;
      }
    }
    this.nearestPoint = nearest;
    this.distanceToNearest = minDist === Infinity ? null : Math.round(minDist);
    this.posizioneValida = this.nearestPoint && minDist <= (this.nearestPoint.radius_m || 50);
  }
  selezionaPunto(punto) {
    this.puntoSelezionato = punto;
    this.posizioneValida = true;
    this.posizioneAttuale = {
      lat: Number(punto.lat),
      lng: Number(punto.lng),
      timestamp: /* @__PURE__ */ new Date(),
      accuracy: 0
    };
    this.successMessage = `Punto selezionato: ${punto.name}`;
    setTimeout(() => this.successMessage = "", 3e3);
  }
  deselezionaPunto() {
    this.puntoSelezionato = null;
    this.posizioneValida = false;
  }
  distanzaMetri(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const \u03C61 = lat1 * Math.PI / 180;
    const \u03C62 = lat2 * Math.PI / 180;
    const \u0394\u03C6 = (lat2 - lat1) * Math.PI / 180;
    const \u0394\u03BB = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(\u0394\u03C6 / 2) * Math.sin(\u0394\u03C6 / 2) + Math.cos(\u03C61) * Math.cos(\u03C62) * Math.sin(\u0394\u03BB / 2) * Math.sin(\u0394\u03BB / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  // --- Calcoli ore ---
  calcolaOreTotali() {
    const f = this.timbraturaForm.value;
    if (!f.ora_inizio || !f.ora_fine)
      return 0;
    const inizio = /* @__PURE__ */ new Date(`2000-01-01T${f.ora_inizio}`);
    const fine = /* @__PURE__ */ new Date(`2000-01-01T${f.ora_fine}`);
    return (fine.getTime() - inizio.getTime()) / (1e3 * 60 * 60);
  }
  calcolaPauseTotali() {
    const f = this.timbraturaForm.value;
    let pause = 0;
    f.pause.forEach((p) => {
      if (p.inizio && p.fine) {
        const pi = /* @__PURE__ */ new Date(`2000-01-01T${p.inizio}`);
        const pf = /* @__PURE__ */ new Date(`2000-01-01T${p.fine}`);
        pause += (pf.getTime() - pi.getTime()) / (1e3 * 60 * 60);
      }
    });
    return pause;
  }
  calcolaLavoroEffettivo() {
    return Math.max(0, this.calcolaOreTotali() - this.calcolaPauseTotali());
  }
  formattaOreMinuti(ore) {
    const h = Math.floor(ore);
    const m = Math.round((ore - h) * 60);
    if (h === 0 && m === 0)
      return "0h";
    if (h === 0)
      return `${m}m`;
    if (m === 0)
      return `${h}h`;
    return `${h}h ${m}m`;
  }
  // --- Costruzione dati timbratura ---
  buildTimbraturaData() {
    const f = this.timbraturaForm.value;
    const start = /* @__PURE__ */ new Date(`${f.data}T${f.ora_inizio}`);
    const end = f.ora_fine ? /* @__PURE__ */ new Date(`${f.data}T${f.ora_fine}`) : null;
    const breaks = f.pause.filter((p) => p.inizio && p.fine).map((p) => ({
      start: (/* @__PURE__ */ new Date(`${f.data}T${p.inizio}`)).toISOString(),
      end: (/* @__PURE__ */ new Date(`${f.data}T${p.fine}`)).toISOString()
    }));
    const locations = this.posizioneAttuale ? [{
      lat: this.posizioneAttuale.lat,
      lng: this.posizioneAttuale.lng,
      address: this.posizioneAttuale.indirizzo,
      timestamp: this.posizioneAttuale.timestamp.toISOString()
    }] : null;
    const total_minutes = Math.round(this.calcolaLavoroEffettivo() * 60);
    return {
      start_ts: start.toISOString(),
      end_ts: end?.toISOString() || null,
      breaks: breaks.length ? breaks : null,
      locations,
      notes: f.notes || null,
      total_minutes,
      company_id: this.currentCompany?.id || this.currentUser?.company_id || "",
      user_id: this.currentUser?.id || ""
    };
  }
  // --- Salvataggio / invio richiesta ---
  onSubmit() {
    return __async(this, null, function* () {
      if (this.timbraturaForm.invalid) {
        this.timbraturaForm.markAllAsTouched();
        return;
      }
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      try {
        if (!this.authService.hasRole("admin") && !this.isEditMode) {
          const exists = yield this.timbratureService.hasTimbraturaPerGiorno(this.currentUser.id, this.timbraturaForm.value.data, this.timbraturaOriginale?.id);
          if (exists)
            throw new Error("Hai gi\xE0 una timbratura per questa data");
        }
        if (this.currentCompany?.timbratura_type === "punti") {
          const points = this.currentCompany.punch_points || [];
          if (!points.length)
            throw new Error("Nessun punto di timbratura configurato");
          if (!this.posizioneAttuale && !this.puntoSelezionato) {
            throw new Error("Devi prima ottenere la posizione o selezionare un punto");
          }
          if (!this.posizioneValida && !this.puntoSelezionato) {
            throw new Error("Posizione non valida rispetto ai punti di timbratura");
          }
        }
        if (this.isEditMode) {
          yield this.handleEdit();
        } else {
          yield this.handleCreate();
        }
      } catch (err) {
        this.errorMessage = err.message || "Errore durante il salvataggio";
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    });
  }
  handleCreate() {
    return __async(this, null, function* () {
      const data = this.buildTimbraturaData();
      yield lastValueFrom(this.timbratureService.creaTimbratura(data));
      this.successMessage = "Timbratura creata con successo!";
      setTimeout(() => this.router.navigate(["/lista-timbrature"]), 1500);
    });
  }
  handleEdit() {
    return __async(this, null, function* () {
      if (!this.timbraturaOriginale || !this.currentUser || !this.currentCompany) {
        throw new Error("Dati mancanti per la modifica");
      }
      const nuoviDati = this.buildTimbraturaData();
      nuoviDati.id = this.timbraturaOriginale.id;
      if (this.authService.hasRole("admin")) {
        yield lastValueFrom(this.timbratureService.aggiornaTimbratura(this.timbraturaOriginale.id, nuoviDati));
        this.successMessage = "Timbratura aggiornata!";
        setTimeout(() => this.router.navigate(["/lista-timbrature"]), 1500);
      } else {
        const payload = {
          timbratura_id: this.timbraturaOriginale.id,
          user_id: this.currentUser.id,
          company_id: this.currentCompany.id,
          requested_changes: nuoviDati,
          original_data: this.timbraturaOriginale,
          reason: "Richiesta di modifica"
        };
        yield this.timbratureService.creaRichiestaModifica(payload);
        this.successMessage = "Richiesta di modifica inviata!";
        setTimeout(() => this.router.navigate(["/lista-timbrature"]), 2e3);
      }
    });
  }
  // --- Metodi helper per template ---
  getSubmitButtonText() {
    if (this.isLoading)
      return "Salvando...";
    if (this.isEditMode) {
      return this.authService.hasRole("admin") ? "Salva Modifiche" : "Invia Richiesta";
    }
    return "Salva Timbratura";
  }
  pointLabel(pt) {
    return pt?.name || pt?.address || "Punto";
  }
  distanceToPoint(pt) {
    if (!this.posizioneAttuale)
      return null;
    return Math.round(this.distanzaMetri(this.posizioneAttuale.lat, this.posizioneAttuale.lng, Number(pt.lat), Number(pt.lng)));
  }
  isInsidePoint(pt) {
    const d = this.distanceToPoint(pt);
    return d !== null && d <= (pt.radius_m || 50);
  }
  getPuntiNelRaggio() {
    if (!this.posizioneAttuale || this.currentCompany?.timbratura_type !== "punti")
      return [];
    return (this.currentCompany.punch_points || []).filter((pt) => this.isInsidePoint(pt));
  }
  isPuntoSelezionato(punto) {
    return this.puntoSelezionato && this.puntoSelezionato.id === punto.id;
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
  static \u0275fac = function CreaTimbraturaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreaTimbraturaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreaTimbraturaComponent, selectors: [["app-crea-timbratura"]], decls: 67, vars: 17, consts: [[1, "page-container"], [1, "form-card", 2, "margin", "0 auto"], ["class", "flex justify-end mb-md", 4, "ngIf"], ["class", "info-message mb-md", 4, "ngIf"], ["class", "info-message info-warning mb-md", 4, "ngIf"], [1, "flex", "flex-col", "gap-lg", 3, "ngSubmit", "formGroup"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "icon-lucide"], ["name", "clock"], [1, "font-bold", "text-md", "m-0"], [1, "grid-form"], [1, "form-group"], [1, "standard-label"], ["name", "calendar"], ["type", "date", "formControlName", "data", 3, "max"], ["class", "info-message info-warning mt-sm", 4, "ngIf"], [1, "field-error"], ["name", "play"], ["type", "time", "formControlName", "ora_inizio"], ["name", "square"], ["type", "time", "formControlName", "ora_fine"], ["name", "coffee"], [1, "flex", "flex-col", "gap-sm"], [1, "card", "shadow-card"], ["type", "button", 1, "promethea-button", "outline", 3, "click", "disabled"], ["name", "plus"], ["name", "file-text"], [1, "form-group", "mb-md"], ["name", "sticky-note"], ["formControlName", "notes", "rows", "4", "placeholder", "Note opzionali sulla timbratura..."], ["class", "form-group", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-md", "justify-end", "p-sm0"], ["type", "button", "routerLink", "/lista-timbrature", 1, "promethea-button", "ghost"], ["name", "arrow-left"], ["type", "submit", 1, "promethea-button", 3, "disabled"], ["name", "refresh-cw", "class", "animate-spin", 4, "ngIf"], [3, "name", 4, "ngIf"], [1, "flex", "justify-end", "mb-md"], ["type", "button", 1, "promethea-button", "ghost", 3, "click", "disabled"], ["name", "copy", 4, "ngIf"], ["name", "refresh-cw", 1, "animate-spin"], ["name", "copy"], [1, "info-message", "mb-md"], ["name", "info"], [1, "text-muted", "text-mini", "m-0", "mt-sm"], [1, "info-message", "info-warning", "mb-md"], ["name", "shield-cog"], [1, "info-message", "info-warning", "mt-sm"], ["name", "triangle-alert"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "mb-sm"], [1, "flex", "items-center", "gap-sm"], [1, "chip-mini"], ["type", "button", "class", "icon-lucide", "title", "Rimuovi pausa", 3, "click", 4, "ngIf"], [1, "form-row"], ["type", "time", 3, "formControl"], [1, "field-error", "mt-sm"], ["type", "button", "title", "Rimuovi pausa", 1, "icon-lucide", 3, "click"], ["name", "trash-2"], ["name", "map-pin"], [1, "flex", "items-center", "flex-wrap", "gap-sm", "mb-sm"], ["type", "button", 1, "promethea-button", 3, "click", "disabled"], ["name", "locate", 4, "ngIf"], ["class", "chip", 4, "ngIf"], ["class", "chip active", 4, "ngIf"], ["class", "flex flex-col gap-sm mt-sm", 4, "ngIf"], ["class", "info-message mt-sm", 4, "ngIf"], ["class", "info-message info-error mt-sm", 4, "ngIf"], ["class", "info-message info-success mt-sm", 4, "ngIf"], ["name", "locate"], [1, "chip"], [1, "chip", "active"], ["name", "circle-check"], [1, "flex", "flex-col", "gap-sm", "mt-sm"], [1, "text-muted", "text-mini", "m-0"], ["class", "card shadow-card", 4, "ngFor", "ngForOf"], ["class", "info-message", 4, "ngIf"], ["class", "info-message info-success", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-sm", "flex-wrap"], [1, "text-muted", "text-mini"], ["type", "button", "class", "promethea-button", 3, "click", 4, "ngIf"], ["type", "button", "class", "promethea-button ghost", 3, "click", 4, "ngIf"], ["type", "button", 1, "promethea-button", 3, "click"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["name", "x"], [1, "info-message"], [1, "info-message", "info-success"], ["class", "card shadow-card mt-sm p-sm", 4, "ngIf"], [1, "card", "shadow-card", "mt-sm", "p-sm"], [1, "text-mini", "font-semibold", "m-0"], [1, "info-message", "mt-sm"], [1, "info-message", "info-error", "mt-sm"], ["name", "circle-x"], [1, "info-message", "info-success", "mt-sm"], ["name", "clipboard-list"], [1, "grid-cards"], [1, "card", "shadow-card", "text-center"], [1, "gradient-text", "text-lg", "font-bold"], [3, "name"]], template: function CreaTimbraturaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, CreaTimbraturaComponent_div_2_Template, 5, 3, "div", 2)(3, CreaTimbraturaComponent_div_3_Template, 7, 0, "div", 3)(4, CreaTimbraturaComponent_div_4_Template, 7, 0, "div", 4);
      \u0275\u0275elementStart(5, "form", 5);
      \u0275\u0275listener("ngSubmit", function CreaTimbraturaComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
      \u0275\u0275element(9, "lucide-icon", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h2", 10);
      \u0275\u0275text(11, "Orario Timbratura");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "label", 13);
      \u0275\u0275element(15, "lucide-icon", 14);
      \u0275\u0275text(16, " Data * ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 15);
      \u0275\u0275template(18, CreaTimbraturaComponent_div_18_Template, 8, 4, "div", 16)(19, CreaTimbraturaComponent_Conditional_19_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
      \u0275\u0275element(22, "lucide-icon", 18);
      \u0275\u0275text(23, " Ora Ingresso * ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 19);
      \u0275\u0275template(25, CreaTimbraturaComponent_Conditional_25_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 12)(27, "label", 13);
      \u0275\u0275element(28, "lucide-icon", 20);
      \u0275\u0275text(29, " Ora Uscita ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 21);
      \u0275\u0275template(31, CreaTimbraturaComponent_Conditional_31_Template, 2, 1, "div", 17)(32, CreaTimbraturaComponent_Conditional_32_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 6)(34, "div", 7)(35, "div", 8);
      \u0275\u0275element(36, "lucide-icon", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h2", 10);
      \u0275\u0275text(38, "Gestione Pause");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 23);
      \u0275\u0275repeaterCreate(40, CreaTimbraturaComponent_For_41_Template, 18, 7, "div", 24, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(42, "div")(43, "button", 25);
      \u0275\u0275listener("click", function CreaTimbraturaComponent_Template_button_click_43_listener() {
        return ctx.aggiungiPausa();
      });
      \u0275\u0275element(44, "lucide-icon", 26);
      \u0275\u0275text(45, " Aggiungi Pausa ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 6)(47, "div", 7)(48, "div", 8);
      \u0275\u0275element(49, "lucide-icon", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h2", 10);
      \u0275\u0275text(51, "Dettagli Aggiuntivi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 28)(53, "label", 13);
      \u0275\u0275element(54, "lucide-icon", 29);
      \u0275\u0275text(55, " Note ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "textarea", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, CreaTimbraturaComponent_div_57_Template, 18, 13, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, CreaTimbraturaComponent_Conditional_58_Template, 18, 3, "div", 6);
      \u0275\u0275elementStart(59, "div", 32)(60, "button", 33);
      \u0275\u0275element(61, "lucide-icon", 34);
      \u0275\u0275text(62, " Torna alle Timbrature ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 35);
      \u0275\u0275template(64, CreaTimbraturaComponent_lucide_icon_64_Template, 1, 0, "lucide-icon", 36)(65, CreaTimbraturaComponent_lucide_icon_65_Template, 1, 1, "lucide-icon", 37);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_7_0;
      let tmp_9_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isEditMode && ctx.timbraturaPrecedenteDisponibile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode && !ctx.isAdmin);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode && ctx.isAdmin);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.timbraturaForm);
      \u0275\u0275advance(12);
      \u0275\u0275property("max", ctx.maxDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasTimbraturaForSelectedDate && !ctx.isEditMode && !ctx.isAdmin);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.timbraturaForm.get("data")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.timbraturaForm.get("data")) == null ? null : tmp_6_0.touched) ? 19 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_7_0 = ctx.timbraturaForm.get("ora_inizio")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.timbraturaForm.get("ora_inizio")) == null ? null : tmp_7_0.touched) ? 25 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.hasTimeRangeError ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_9_0 = ctx.timbraturaForm.get("ora_fine")) == null ? null : tmp_9_0.hasError("futureTime")) ? 32 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.pause.controls);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.hasPauseErrors());
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", (ctx.currentCompany == null ? null : ctx.currentCompany.timbratura_type) === "punti");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.calcolaOreTotali() > 0 ? 58 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.timbraturaForm.invalid || ctx.isLoading || (ctx.currentCompany == null ? null : ctx.currentCompany.timbratura_type) === "punti" && !ctx.posizioneValida);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getSubmitButtonText(), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, RouterModule, RouterLink, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.info-message.info-warning[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 15%, transparent);\n  border-left-color: #f59e0b;\n}\n.info-message.info-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.info-message.info-success[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 15%, transparent);\n  border-left-color: #10b981;\n}\n.info-message.info-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.info-message.info-error[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 15%, transparent);\n  border-left-color: #ef4444;\n}\n.info-message.info-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n  color: #ef4444;\n  margin-top: calc(var(--gap-sm) / 2);\n  display: flex;\n  align-items: center;\n  gap: calc(var(--gap-sm) / 2);\n}\n/*# sourceMappingURL=crea-timbratura.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreaTimbraturaComponent, [{
    type: Component,
    args: [{ selector: "app-crea-timbratura", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, LucideAngularModule], template: `<div class="page-container">\r
  <div class="form-card" style="margin: 0 auto;">\r
\r
<div class="flex justify-end mb-md" *ngIf="!isEditMode && timbraturaPrecedenteDisponibile">\r
  <button type="button" (click)="copiaGiornoPrecedente()"\r
          class="promethea-button ghost"\r
          [disabled]="caricandoTimbraturaPrecedente">\r
    <lucide-icon name="refresh-cw" *ngIf="caricandoTimbraturaPrecedente" class="animate-spin"></lucide-icon>\r
    <lucide-icon name="copy" *ngIf="!caricandoTimbraturaPrecedente"></lucide-icon>\r
    Copia Precedente\r
  </button>\r
</div>\r
\r
    <!-- BANNER EDIT MODE -->\r
    <div *ngIf="isEditMode && !isAdmin" class="info-message mb-md">\r
      <lucide-icon name="info"></lucide-icon>\r
      <div>\r
        <strong>Modalit\xE0 Richiesta Modifica</strong>\r
        <p class="text-muted text-mini m-0 mt-sm">Le modifiche verranno inviate come richiesta all'amministratore che potr\xE0 approvarle o respingerle.</p>\r
      </div>\r
    </div>\r
    <div *ngIf="isEditMode && isAdmin" class="info-message info-warning mb-md">\r
      <lucide-icon name="shield-cog"></lucide-icon>\r
      <div>\r
        <strong>Modalit\xE0 Amministratore</strong>\r
        <p class="text-muted text-mini m-0 mt-sm">Le modifiche verranno applicate immediatamente alla timbratura.</p>\r
      </div>\r
    </div>\r
    <!-- FORM -->\r
    <form [formGroup]="timbraturaForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-lg">\r
      <!-- \u2591\u2591 SEZIONE 1 \u2013 ORARIO \u2591\u2591 -->\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <div class="icon-lucide">\r
            <lucide-icon name="clock"></lucide-icon>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Orario Timbratura</h2>\r
        </div>\r
        <div class="grid-form">\r
          <!-- Data -->\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-icon name="calendar"></lucide-icon>\r
              Data *\r
            </label>\r
            <input type="date" formControlName="data" [max]="maxDate">\r
            <div *ngIf="hasTimbraturaForSelectedDate && !isEditMode && !isAdmin"\r
                 class="info-message info-warning mt-sm">\r
              <lucide-icon name="triangle-alert"></lucide-icon>\r
              <div>\r
                <strong>Hai gi\xE0 una timbratura per questa data</strong>\r
                <p class="text-muted text-mini m-0 mt-sm">\r
                  {{ existingTimbraturaForDate ? ('Ingresso alle ' + (existingTimbraturaForDate.start_ts | date:'HH:mm')) : '' }}.\r
                  Non \xE8 consentito creare pi\xF9 di una timbratura nello stesso giorno.\r
                </p>\r
              </div>\r
            </div>\r
            @if (timbraturaForm.get('data')?.invalid && timbraturaForm.get('data')?.touched) {\r
              <div class="field-error">\r
                <span *ngIf="timbraturaForm.get('data')?.hasError('required')">Data obbligatoria</span>\r
                <span *ngIf="timbraturaForm.get('data')?.hasError('futureDate')">{{ timbraturaForm.get('data')?.errors?.['futureDate']?.message }}</span>\r
              </div>\r
            }\r
          </div>\r
          <!-- Ora Ingresso -->\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-icon name="play"></lucide-icon>\r
              Ora Ingresso *\r
            </label>\r
            <input type="time" formControlName="ora_inizio">\r
            @if (timbraturaForm.get('ora_inizio')?.invalid && timbraturaForm.get('ora_inizio')?.touched) {\r
              <div class="field-error">\r
                <span *ngIf="timbraturaForm.get('ora_inizio')?.hasError('required')">Ora ingresso obbligatoria</span>\r
                <span *ngIf="timbraturaForm.get('ora_inizio')?.hasError('futureTime')">{{ timbraturaForm.get('ora_inizio')?.errors?.['futureTime']?.message }}</span>\r
              </div>\r
            }\r
          </div>\r
          <!-- Ora Uscita -->\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-icon name="square"></lucide-icon>\r
              Ora Uscita\r
            </label>\r
            <input type="time" formControlName="ora_fine">\r
            @if (hasTimeRangeError) {\r
              <div class="field-error">{{ timeRangeErrorMessage }}</div>\r
            }\r
            @if (timbraturaForm.get('ora_fine')?.hasError('futureTime')) {\r
              <div class="field-error">{{ timbraturaForm.get('ora_fine')?.errors?.['futureTime']?.message }}</div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
      <!-- \u2591\u2591 SEZIONE 2 \u2013 PAUSE \u2591\u2591 -->\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <div class=icon-lucide>\r
            <lucide-icon name="coffee"></lucide-icon>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Gestione Pause</h2>\r
        </div>\r
        <div class="flex flex-col gap-sm">\r
          @for (pausa of pause.controls; track i; let i = $index) {\r
            <div class="card shadow-card">\r
              <div class="flex items-center justify-between mb-sm">\r
                <div class="flex items-center gap-sm">\r
                  <span class="chip-mini">Pausa {{ i + 1 }}</span>\r
                </div>\r
                <button type="button" (click)="rimuoviPausa(i)"\r
                        class=icon-lucide\r
                        *ngIf="canRemovePause(i)"\r
                        title="Rimuovi pausa">\r
                  <lucide-icon name="trash-2"></lucide-icon>\r
                </button>\r
              </div>\r
              <div class="form-row">\r
                <div class="form-group">\r
                  <label class="standard-label">Inizio</label>\r
                  <input type="time" [formControl]="getPausaControl(i, 'inizio')">\r
                  @if (getPausaControl(i, 'inizio').hasError('futureTime')) {\r
                    <div class="field-error">{{ getPausaControl(i, 'inizio').errors?.['futureTime']?.message }}</div>\r
                  }\r
                </div>\r
                <div class="form-group">\r
                  <label class="standard-label">Fine</label>\r
                  <input type="time" [formControl]="getPausaControl(i, 'fine')">\r
                  @if (getPausaControl(i, 'fine').hasError('futureTime')) {\r
                    <div class="field-error">{{ getPausaControl(i, 'fine').errors?.['futureTime']?.message }}</div>\r
                  }\r
                </div>\r
              </div>\r
              @if (hasPauseTimeError(i)) {\r
                <div class="field-error mt-sm">{{ getPauseTimeErrorMessage(i) }}</div>\r
              }\r
            </div>\r
          }\r
          <div>\r
            <button type="button" (click)="aggiungiPausa()"\r
                    class="promethea-button outline"\r
                    [disabled]="hasPauseErrors()">\r
              <lucide-icon name="plus"></lucide-icon>\r
              Aggiungi Pausa\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- \u2591\u2591 SEZIONE 3 \u2013 DETTAGLI \u2591\u2591 -->\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <div class=icon-lucide>\r
            <lucide-icon name="file-text"></lucide-icon>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Dettagli Aggiuntivi</h2>\r
        </div>\r
        <!-- Note -->\r
        <div class="form-group mb-md">\r
          <label class="standard-label">\r
            <lucide-icon name="sticky-note"></lucide-icon>\r
            Note\r
          </label>\r
          <textarea formControlName="notes" rows="4" placeholder="Note opzionali sulla timbratura..."></textarea>\r
        </div>\r
        <!-- Posizione (solo punti) -->\r
        <div *ngIf="currentCompany?.timbratura_type === 'punti'" class="form-group">\r
          <label class="standard-label">\r
            <lucide-icon name="map-pin"></lucide-icon>\r
            Posizione\r
          </label>\r
          <div class="flex items-center flex-wrap gap-sm mb-sm">\r
            <button type="button" (click)="ottieniPosizione()"\r
                    class="promethea-button"\r
                    [disabled]="ottenendoPosizione">\r
              <lucide-icon name="refresh-cw" *ngIf="ottenendoPosizione" class="animate-spin"></lucide-icon>\r
              <lucide-icon name="locate" *ngIf="!ottenendoPosizione"></lucide-icon>\r
              {{ ottenendoPosizione ? 'Ottenendo\u2026' : 'Ottieni Posizione' }}\r
            </button>\r
            <span class="chip" *ngIf="ottenendoPosizione">Ottenendo posizione\u2026</span>\r
            <span class="chip active" *ngIf="!ottenendoPosizione && posizioneAttuale">\r
              <lucide-icon name="circle-check"></lucide-icon>\r
              Posizione ottenuta\r
              <small *ngIf="posizioneAttuale.accuracy">({{ posizioneAttuale.accuracy | number:'1.0-0' }} m)</small>\r
            </span>\r
            <span class="chip" *ngIf="!ottenendoPosizione && !posizioneAttuale">Nessuna posizione</span>\r
          </div>\r
          <!-- CASO 1: punti nel raggio -->\r
          <div *ngIf="posizioneAttuale && getPuntiNelRaggio().length > 0" class="flex flex-col gap-sm mt-sm">\r
            <p class="text-muted text-mini m-0">Punti di timbratura disponibili ({{ getPuntiNelRaggio().length }}):</p>\r
            <div *ngFor="let pt of getPuntiNelRaggio()" class="card shadow-card">\r
              <div class="flex items-center justify-between gap-sm flex-wrap">\r
                <div class="flex flex-col gap-sm">\r
                  <strong>{{ pt?.name || 'Punto di timbratura' }}</strong>\r
                  <span class="text-muted text-mini">{{ pointLabel(pt) }}</span>\r
                  <span class="chip-mini">Distanza: {{ distanceToPoint(pt) }} m</span>\r
                </div>\r
                <div class="flex items-center gap-sm">\r
                  <span class="chip active" *ngIf="!isPuntoSelezionato(pt)">Disponibile</span>\r
                  <span class="chip active" *ngIf="isPuntoSelezionato(pt)">\r
                    <lucide-icon name="circle-check"></lucide-icon>\r
                    Selezionato\r
                  </span>\r
                  <button type="button" (click)="selezionaPunto(pt)"\r
                          class="promethea-button"\r
                          *ngIf="!isPuntoSelezionato(pt)">\r
                    <lucide-icon name="map-pin"></lucide-icon>\r
                    Seleziona\r
                  </button>\r
                  <button type="button" (click)="deselezionaPunto()"\r
                          class="promethea-button ghost"\r
                          *ngIf="isPuntoSelezionato(pt)">\r
                    <lucide-icon name="x"></lucide-icon>\r
                    Deseleziona\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
            <div *ngIf="!puntoSelezionato" class="info-message">\r
              <lucide-icon name="info"></lucide-icon>\r
              <div>\r
                <strong>Seleziona un punto</strong>\r
                <p class="text-muted text-mini m-0 mt-sm">Seleziona il punto di timbratura corretto per procedere.</p>\r
              </div>\r
            </div>\r
            <div *ngIf="puntoSelezionato" class="info-message info-success">\r
              <lucide-icon name="circle-check"></lucide-icon>\r
              <div>\r
                <strong>Punto selezionato</strong>\r
                <p class="text-muted text-mini m-0 mt-sm">{{ puntoSelezionato?.name || 'Punto di timbratura' }} \u2013 Puoi procedere con la timbratura.</p>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- CASO 2: nessun punto nel raggio -->\r
          <div *ngIf="posizioneAttuale && getPuntiNelRaggio().length === 0" class="info-message info-warning mt-sm">\r
            <lucide-icon name="triangle-alert"></lucide-icon>\r
            <div>\r
              <strong>Nessun punto disponibile</strong>\r
              <p class="text-muted text-mini m-0 mt-sm">Non ti trovi nel raggio di nessun punto di timbratura configurato.</p>\r
              <div *ngIf="nearestPoint" class="card shadow-card mt-sm p-sm">\r
                <p class="text-mini font-semibold m-0">Punto pi\xF9 vicino:</p>\r
                <strong>{{ nearestPoint?.name || 'Punto di timbratura' }}</strong>\r
                <p class="text-muted text-mini m-0">{{ pointLabel(nearestPoint) }} \xB7 {{ distanceToNearest }} m</p>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- CASO 3: posizione non ottenuta -->\r
          <div *ngIf="!posizioneAttuale && !ottenendoPosizione" class="info-message mt-sm">\r
            <lucide-icon name="info"></lucide-icon>\r
            <div>\r
              <strong>Posizione non verificata</strong>\r
              <p class="text-muted text-mini m-0 mt-sm">Usa "Ottieni Posizione" per vedere i punti di timbratura disponibili.</p>\r
            </div>\r
          </div>\r
          <!-- CASO 4: nessun punto configurato -->\r
          <div *ngIf="((currentCompany?.punch_points?.length ?? 0) === 0)" class="info-message info-error mt-sm">\r
            <lucide-icon name="circle-x"></lucide-icon>\r
            <div>\r
              <strong>Non puoi timbrare</strong>\r
              <p class="text-muted text-mini m-0 mt-sm">Non sono configurati punti di timbratura per la tua azienda.</p>\r
            </div>\r
          </div>\r
          <div *ngIf="errorMessage"   class="info-message info-error mt-sm">{{ errorMessage }}</div>\r
          <div *ngIf="successMessage" class="info-message info-success mt-sm">{{ successMessage }}</div>\r
        </div>\r
      </div>\r
      <!-- \u2591\u2591 RIEPILOGO \u2591\u2591 -->\r
      @if (calcolaOreTotali() > 0) {\r
        <div class="card">\r
          <div class="flex items-center gap-sm mb-md">\r
            <div class=icon-lucide>\r
              <lucide-icon name="clipboard-list"></lucide-icon>\r
            </div>\r
            <h2 class="font-bold text-md m-0">Riepilogo</h2>\r
          </div>\r
          <div class="grid-cards">\r
            <div class="card shadow-card text-center">\r
              <span class="text-muted text-mini">Ore Totali</span>\r
              <div class="gradient-text text-lg font-bold">{{ formattaOreMinuti(calcolaOreTotali()) }}</div>\r
            </div>\r
            @if (calcolaPauseTotali() > 0) {\r
              <div class="card shadow-card text-center">\r
                <span class="text-muted text-mini">Pause</span>\r
                <div class="gradient-text text-lg font-bold">{{ formattaOreMinuti(calcolaPauseTotali()) }}</div>\r
              </div>\r
            }\r
            <div class="card shadow-card text-center">\r
              <span class="text-muted text-mini">Ore Lavorative</span>\r
              <div class="gradient-text text-lg font-bold">{{ formattaOreMinuti(calcolaLavoroEffettivo()) }}</div>\r
            </div>\r
          </div>\r
        </div>\r
      }\r
      <!-- \u2591\u2591 AZIONI \u2591\u2591 -->\r
      <div class="flex flex-wrap gap-md justify-end p-sm0">\r
        <button type="button" routerLink="/lista-timbrature" class="promethea-button ghost">\r
          <lucide-icon name="arrow-left"></lucide-icon>\r
          Torna alle Timbrature\r
        </button>\r
        <button type="submit"\r
                [disabled]="timbraturaForm.invalid || isLoading || (currentCompany?.timbratura_type === 'punti' && !posizioneValida)"\r
                class="promethea-button">\r
          <lucide-icon name="refresh-cw" *ngIf="isLoading" class="animate-spin"></lucide-icon>\r
          <lucide-icon [name]="isEditMode ? (isAdmin ? 'save' : 'send') : 'save'" *ngIf="!isLoading"></lucide-icon>\r
          {{ getSubmitButtonText() }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
  \r
</div>`, styles: ["/* src/app/timbrature/features/crea-timbratura/crea-timbratura.component.css */\n.info-message.info-warning {\n  background: color-mix(in srgb, #f59e0b 15%, transparent);\n  border-left-color: #f59e0b;\n}\n.info-message.info-warning .material-icons {\n  color: #f59e0b;\n}\n.info-message.info-success {\n  background: color-mix(in srgb, #10b981 15%, transparent);\n  border-left-color: #10b981;\n}\n.info-message.info-success .material-icons {\n  color: #10b981;\n}\n.info-message.info-error {\n  background: color-mix(in srgb, #ef4444 15%, transparent);\n  border-left-color: #ef4444;\n}\n.info-message.info-error .material-icons {\n  color: #ef4444;\n}\n.field-error {\n  font-size: var(--fs-mini);\n  color: #ef4444;\n  margin-top: calc(var(--gap-sm) / 2);\n  display: flex;\n  align-items: center;\n  gap: calc(var(--gap-sm) / 2);\n}\n/*# sourceMappingURL=crea-timbratura.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreaTimbraturaComponent, { className: "CreaTimbraturaComponent", filePath: "src/app/timbrature/features/crea-timbratura/crea-timbratura.component.ts", lineNumber: 30 });
})();
export {
  CreaTimbraturaComponent
};
//# sourceMappingURL=chunk-NOX3PGMJ.js.map
