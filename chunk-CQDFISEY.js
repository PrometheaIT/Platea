import {
  JobTitlesService
} from "./chunk-VG6ZT32Y.js";
import {
  DepartmentsService
} from "./chunk-XFT2VFKL.js";
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
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
  DecimalPipe,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  inject,
  lastValueFrom,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/features/impostazioni/impostazioni.component.ts
var _c0 = () => ({ standalone: true });
function ImpostazioniComponent_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "Nome obbligatorio");
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "Cognome obbligatorio");
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_11_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "Email obbligatoria e valida");
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_11_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "lucide-angular", 74);
    \u0275\u0275elementStart(2, "span", 75);
    \u0275\u0275text(3, "Modificabile solo dall'amministratore");
    \u0275\u0275elementEnd()();
  }
}
function ImpostazioniComponent_div_11_lucide_angular_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 76);
  }
}
function ImpostazioniComponent_div_11_lucide_angular_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 77);
  }
}
function ImpostazioniComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "form", 18);
    \u0275\u0275listener("ngSubmit", function ImpostazioniComponent_div_11_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvaProfilo());
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 44)(4, "div", 20)(5, "label", 21);
    \u0275\u0275element(6, "lucide-angular", 45);
    \u0275\u0275text(7, " Nome * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 46);
    \u0275\u0275template(9, ImpostazioniComponent_div_11_div_9_Template, 2, 0, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 20)(11, "label", 21);
    \u0275\u0275element(12, "lucide-angular", 45);
    \u0275\u0275text(13, " Cognome * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 48);
    \u0275\u0275template(15, ImpostazioniComponent_div_11_div_15_Template, 2, 0, "div", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44)(17, "div", 20)(18, "label", 21);
    \u0275\u0275element(19, "lucide-angular", 49);
    \u0275\u0275text(20, " Email * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 50);
    \u0275\u0275template(22, ImpostazioniComponent_div_11_div_22_Template, 2, 0, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 20)(24, "label", 21);
    \u0275\u0275element(25, "lucide-angular", 51);
    \u0275\u0275text(26, " Telefono ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 44)(29, "div", 20)(30, "label", 21);
    \u0275\u0275element(31, "lucide-angular", 53);
    \u0275\u0275text(32, " Data di Nascita ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 20)(35, "label", 21);
    \u0275\u0275element(36, "lucide-angular", 55);
    \u0275\u0275text(37, " Luogo di Nascita ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 20)(40, "label", 21);
    \u0275\u0275element(41, "lucide-angular", 57);
    \u0275\u0275text(42, " Data di Assunzione ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 58);
    \u0275\u0275template(44, ImpostazioniComponent_div_11_div_44_Template, 4, 0, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 20)(46, "label", 21);
    \u0275\u0275element(47, "lucide-angular", 60);
    \u0275\u0275text(48, " Codice Fiscale ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 44)(51, "div", 20)(52, "label", 21);
    \u0275\u0275element(53, "lucide-angular", 62);
    \u0275\u0275text(54, " Job Title ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 20)(57, "label", 21);
    \u0275\u0275element(58, "lucide-angular", 64);
    \u0275\u0275text(59, " Ore Mensili ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 20)(62, "label", 34);
    \u0275\u0275element(63, "input", 66);
    \u0275\u0275elementStart(64, "div", 36)(65, "strong");
    \u0275\u0275text(66, "Full time");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(67, "div", 67)(68, "label", 21);
    \u0275\u0275element(69, "lucide-angular", 68);
    \u0275\u0275text(70, " Timezone ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 44)(73, "div", 20)(74, "label", 21);
    \u0275\u0275element(75, "lucide-angular", 17);
    \u0275\u0275text(76, " Ruolo ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 20)(79, "label", 21);
    \u0275\u0275element(80, "lucide-angular", 71);
    \u0275\u0275text(81, " Azienda ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 28)(84, "button", 29);
    \u0275\u0275template(85, ImpostazioniComponent_div_11_lucide_angular_85_Template, 1, 0, "lucide-angular", 30)(86, ImpostazioniComponent_div_11_lucide_angular_86_Template, 1, 0, "lucide-angular", 40);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.profiloForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.profiloForm.get("first_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.profiloForm.get("first_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("disabled-field", !ctx_r1.isAdmin());
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.profiloForm.get("last_name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.profiloForm.get("last_name")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("disabled-field", !ctx_r1.isAdmin());
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.profiloForm.get("email")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.profiloForm.get("email")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAdmin());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (ctx_r1.currentCompany == null ? null : ctx_r1.currentCompany.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.profiloForm.invalid || ctx_r1.salvataggioProfilo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.salvataggioProfilo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.salvataggioProfilo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.salvataggioProfilo ? "Salvando\u2026" : "Salva Profilo", " ");
  }
}
function ImpostazioniComponent_div_12_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "Nome azienda obbligatorio");
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_12_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "Partita IVA obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_12_div_9_div_58_div_7_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(2, 2, p_r7.lat, "1.5-5"), ", ", \u0275\u0275pipeBind2(3, 5, p_r7.lng, "1.5-5"), "");
  }
}
function ImpostazioniComponent_div_12_div_9_div_58_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 108)(2, "div", 7)(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 104)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 110)(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ImpostazioniComponent_div_12_div_9_div_58_div_7_span_13_Template, 4, 8, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 112);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 113);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_div_58_div_7_Template_button_click_16_listener() {
      const i_r8 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removePunchPoint(i_r8));
    });
    \u0275\u0275element(17, "lucide-angular", 114);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (p_r7.name || p_r7.address || "Punto " + (i_r8 + 1)).charAt(0) || i_r8 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.name || p_r7.address || "Punto " + (i_r8 + 1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getStreet(p_r7), " ", ctx_r1.getCivic(p_r7), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCityProvince(p_r7) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (p_r7 == null ? null : p_r7.lat) && (p_r7 == null ? null : p_r7.lng));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("raggio: ", p_r7.radius_m || 50, " m");
  }
}
function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 80)(2, "div", 20)(3, "label", 21);
    \u0275\u0275text(4, "Nome Punto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPoint.name, $event) || (ctx_r1.newPoint.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "label", 21);
    \u0275\u0275text(8, "Via / Indirizzo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPoint.address, $event) || (ctx_r1.newPoint.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "label", 21);
    \u0275\u0275text(12, "Civico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPoint.civic_number, $event) || (ctx_r1.newPoint.civic_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 20)(15, "label", 21);
    \u0275\u0275text(16, "Citt\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPoint.city, $event) || (ctx_r1.newPoint.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 20)(19, "label", 21);
    \u0275\u0275text(20, "Provincia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPoint.province, $event) || (ctx_r1.newPoint.province = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "label", 21);
    \u0275\u0275text(24, "Raggio (m)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 121);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPoint.radius_m, $event) || (ctx_r1.newPoint.radius_m = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 122)(27, "button", 39);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_div_58_div_12_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addPunchPoint());
    });
    \u0275\u0275element(28, "lucide-angular", 77);
    \u0275\u0275text(29, " Salva Punto ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPoint.name);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPoint.address);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPoint.civic_number);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPoint.city);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPoint.province);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPoint.radius_m);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(ctx_r1.currentCompany == null ? null : ctx_r1.currentCompany.id) || ctx_r1.salvataggioAzienda);
  }
}
function ImpostazioniComponent_div_12_div_9_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 16)(2, "div", 8);
    \u0275\u0275element(3, "lucide-angular", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 10);
    \u0275\u0275text(5, "Punti di Timbratura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 104);
    \u0275\u0275template(7, ImpostazioniComponent_div_12_div_9_div_58_div_7_Template, 18, 7, "div", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 106)(9, "button", 39);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_div_58_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAddPointForm());
    });
    \u0275\u0275element(10, "lucide-angular", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ImpostazioniComponent_div_12_div_9_div_58_div_12_Template, 30, 19, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.punchPoints);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvataggioAzienda);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showAddPointForm ? "x" : "plus");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showAddPointForm ? "Annulla" : "Aggiungi Punto", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAddPointForm);
  }
}
function ImpostazioniComponent_div_12_div_9_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 132)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 133);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 134);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_div_68_div_1_Template_button_click_7_listener() {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.rimuoviGiornoChiusura(i_r12));
    });
    \u0275\u0275element(8, "lucide-angular", 114);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cd_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatClosedDay(cd_r13));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cd_r13.label || (cd_r13.type === "range" ? "Intervallo" : "Giorno singolo"));
  }
}
function ImpostazioniComponent_div_12_div_9_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275template(1, ImpostazioniComponent_div_12_div_9_div_68_div_1_Template, 9, 2, "div", 105);
    \u0275\u0275elementStart(2, "div", 100)(3, "p", 124);
    \u0275\u0275text(4, "Aggiungi giorno singolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44)(6, "div", 20)(7, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_68_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newDate, $event) || (ctx_r1.newDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_68_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newDateLabel, $event) || (ctx_r1.newDateLabel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 127)(11, "button", 128);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_div_68_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aggiungiGiornoSingolo());
    });
    \u0275\u0275element(12, "lucide-angular", 129);
    \u0275\u0275text(13, " Aggiungi Giorno ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 100)(15, "p", 124);
    \u0275\u0275text(16, "Aggiungi intervallo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 44)(18, "div", 20)(19, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_68_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.rangeStart, $event) || (ctx_r1.rangeStart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_12_div_9_div_68_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.rangeEnd, $event) || (ctx_r1.rangeEnd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 127)(23, "button", 128);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_div_68_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aggiungiIntervallo());
    });
    \u0275\u0275element(24, "lucide-angular", 129);
    \u0275\u0275text(25, " Aggiungi Intervallo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 103)(27, "button", 130);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_div_68_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ripristinaFestivita());
    });
    \u0275\u0275element(28, "lucide-angular", 131);
    \u0275\u0275text(29, " Ripristina Festivit\xE0 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.giorniChiusura);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newDate);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newDateLabel);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rangeStart);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rangeEnd);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
  }
}
function ImpostazioniComponent_div_12_div_9_lucide_angular_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 76);
  }
}
function ImpostazioniComponent_div_12_div_9_lucide_angular_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 77);
  }
}
function ImpostazioniComponent_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "form", 79);
    \u0275\u0275listener("ngSubmit", function ImpostazioniComponent_div_12_div_9_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.salvaAzienda());
    });
    \u0275\u0275elementStart(2, "div", 80)(3, "div", 20)(4, "label", 21);
    \u0275\u0275element(5, "lucide-angular", 78);
    \u0275\u0275text(6, " Nome Azienda *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 81);
    \u0275\u0275template(8, ImpostazioniComponent_div_12_div_9_div_8_Template, 2, 0, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20)(10, "label", 21);
    \u0275\u0275element(11, "lucide-angular", 82);
    \u0275\u0275text(12, " Partita IVA *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 83);
    \u0275\u0275template(14, ImpostazioniComponent_div_12_div_9_div_14_Template, 2, 0, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20)(16, "label", 21);
    \u0275\u0275element(17, "lucide-angular", 55);
    \u0275\u0275text(18, " Indirizzo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 20)(21, "label", 21);
    \u0275\u0275element(22, "lucide-angular", 85);
    \u0275\u0275text(23, " Citt\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 20)(26, "label", 21);
    \u0275\u0275element(27, "lucide-angular", 87);
    \u0275\u0275text(28, " Provincia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 20)(31, "label", 21);
    \u0275\u0275element(32, "lucide-angular", 68);
    \u0275\u0275text(33, " Sito Web");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 20)(36, "label", 21);
    \u0275\u0275element(37, "lucide-angular", 51);
    \u0275\u0275text(38, " Telefono Aziendale");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 20)(41, "label", 21);
    \u0275\u0275element(42, "lucide-angular", 49);
    \u0275\u0275text(43, " Email Aziendale");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 92)(46, "label", 21);
    \u0275\u0275element(47, "lucide-angular", 93);
    \u0275\u0275text(48, " Tipologia Timbratura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 94)(50, "label", 95);
    \u0275\u0275element(51, "input", 96);
    \u0275\u0275elementStart(52, "span", 97);
    \u0275\u0275text(53, "Libera");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "label", 95);
    \u0275\u0275element(55, "input", 98);
    \u0275\u0275elementStart(56, "span", 97);
    \u0275\u0275text(57, "Punti Timbratura");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(58, ImpostazioniComponent_div_12_div_9_div_58_Template, 13, 5, "div", 99);
    \u0275\u0275elementStart(59, "div", 100)(60, "div", 6);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_div_9_Template_div_click_60_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleClosedDays());
    });
    \u0275\u0275elementStart(61, "div", 7)(62, "div", 8);
    \u0275\u0275element(63, "lucide-angular", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "h3", 10);
    \u0275\u0275text(65, "Giorni di Chiusura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "button", 11);
    \u0275\u0275element(67, "lucide-angular", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(68, ImpostazioniComponent_div_12_div_9_div_68_Template, 30, 13, "div", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 103)(70, "button", 29);
    \u0275\u0275template(71, ImpostazioniComponent_div_12_div_9_lucide_angular_71_Template, 1, 0, "lucide-angular", 30)(72, ImpostazioniComponent_div_12_div_9_lucide_angular_72_Template, 1, 0, "lucide-angular", 40);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.aziendaForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.aziendaForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.aziendaForm.get("name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.aziendaForm.get("vat")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.aziendaForm.get("vat")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(44);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.aziendaForm.get("timbratura_type")) == null ? null : tmp_5_0.value) === "punti");
    \u0275\u0275advance(8);
    \u0275\u0275attribute("aria-expanded", ctx_r1.showClosedDays);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showClosedDays ? "chevron-up" : "chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showClosedDays);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.aziendaForm.invalid || ctx_r1.salvataggioAzienda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.salvataggioAzienda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.salvataggioAzienda);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.salvataggioAzienda ? "Salvando\u2026" : "Salva Azienda", " ");
  }
}
function ImpostazioniComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_12_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAzienda());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 8);
    \u0275\u0275element(4, "lucide-angular", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6, "Dati Azienda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275element(8, "lucide-angular", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ImpostazioniComponent_div_12_div_9_Template, 74, 11, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-expanded", ctx_r1.showAzienda);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showAzienda ? "chevron-up" : "chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAzienda);
  }
}
function ImpostazioniComponent_div_13_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275element(1, "lucide-angular", 76);
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingJobTitle.name, $event) || (ctx_r1.editingJobTitle.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_2_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.saveEditJobTitle());
    })("blur", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_2_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.cancelEditJobTitle());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingJobTitle.name);
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const jt_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(jt_r18.name);
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingJobTitle.description, $event) || (ctx_r1.editingJobTitle.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_6_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.saveEditJobTitle());
    })("blur", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_6_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.cancelEditJobTitle());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingJobTitle.description);
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const jt_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(jt_r18.description || "\u2014");
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 155);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const jt_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.beginEditJobTitle(jt_r18));
    });
    \u0275\u0275element(1, "lucide-angular", 156);
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 155);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.saveEditJobTitle());
    });
    \u0275\u0275element(1, "lucide-angular", 157);
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 155);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.cancelEditJobTitle());
    });
    \u0275\u0275element(1, "lucide-angular", 158);
    \u0275\u0275elementEnd();
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_2_Template, 2, 1, "ng-container", 150)(3, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_container_6_Template, 2, 1, "ng-container", 150)(7, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_ng_template_7_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 97);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 151);
    \u0275\u0275template(14, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_14_Template, 2, 0, "button", 152)(15, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_15_Template, 2, 0, "button", 152)(16, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_button_16_Template, 2, 0, "button", 152);
    \u0275\u0275elementStart(17, "button", 153);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_Template_button_click_17_listener($event) {
      const jt_r18 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.toggleJobTitleActive(jt_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(18, "lucide-angular", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const jt_r18 = ctx.$implicit;
    const showName_r23 = \u0275\u0275reference(4);
    const showDesc_r24 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.editingJobTitle && ctx_r1.editingJobTitle.id === jt_r18.id)("ngIfElse", showName_r23);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingJobTitle && ctx_r1.editingJobTitle.id === jt_r18.id)("ngIfElse", showDesc_r24);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", jt_r18.is_active)("warning", !jt_r18.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", jt_r18.is_active ? "Attiva" : "Disattiva", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.editingJobTitle == null ? null : ctx_r1.editingJobTitle.id) !== jt_r18.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingJobTitle == null ? null : ctx_r1.editingJobTitle.id) === jt_r18.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingJobTitle == null ? null : ctx_r1.editingJobTitle.id) === jt_r18.id);
    \u0275\u0275advance();
    \u0275\u0275property("title", jt_r18.is_active ? "Disattiva" : "Riattiva");
    \u0275\u0275advance();
    \u0275\u0275property("name", jt_r18.is_active ? "toggle-right" : "toggle-left");
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 148)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Descrizione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Stato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, ImpostazioniComponent_div_13_div_9_div_10_table_1_tr_12_Template, 19, 14, "tr", 149);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.jobTitles);
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275element(1, "lucide-angular", 160);
    \u0275\u0275elementStart(2, "p", 161);
    \u0275\u0275text(3, "Aggiungi una nuova mansione per iniziare ad assegnarla ai dipendenti.");
    \u0275\u0275elementEnd()();
  }
}
function ImpostazioniComponent_div_13_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275template(1, ImpostazioniComponent_div_13_div_9_div_10_table_1_Template, 13, 1, "table", 147)(2, ImpostazioniComponent_div_13_div_9_div_10_ng_template_2_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noMansioni_r25 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobTitles.length > 0)("ngIfElse", noMansioni_r25);
  }
}
function ImpostazioniComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 137)(2, "div", 138)(3, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_13_div_9_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newJobTitleName, $event) || (ctx_r1.newJobTitleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 140)(5, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_13_div_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newJobTitleDescription, $event) || (ctx_r1.newJobTitleDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 142);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_13_div_9_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createJobTitle());
    });
    \u0275\u0275element(7, "lucide-angular", 129);
    \u0275\u0275text(8, " Aggiungi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ImpostazioniComponent_div_13_div_9_div_9_Template, 2, 0, "div", 143)(10, ImpostazioniComponent_div_13_div_9_div_10_Template, 4, 2, "div", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newJobTitleName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newJobTitleDescription);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingJobTitles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingJobTitles);
  }
}
function ImpostazioniComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_13_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMansioni());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 8);
    \u0275\u0275element(4, "lucide-angular", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6, "Mansioni");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275element(8, "lucide-angular", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ImpostazioniComponent_div_13_div_9_Template, 11, 4, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-expanded", ctx_r1.showMansioni);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showMansioni ? "chevron-up" : "chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showMansioni);
  }
}
function ImpostazioniComponent_div_14_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275element(1, "lucide-angular", 160);
    \u0275\u0275elementStart(2, "p", 161);
    \u0275\u0275text(3, "Nessun reparto creato");
    \u0275\u0275elementEnd()();
  }
}
function ImpostazioniComponent_div_14_div_9_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 110)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r28.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r28.description || "Nessuna descrizione");
  }
}
function ImpostazioniComponent_div_14_div_9_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170)(1, "input", 171);
    \u0275\u0275listener("ngModelChange", function ImpostazioniComponent_div_14_div_9_div_18_div_3_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editingDepartment && (ctx_r1.editingDepartment.name = $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "textarea", 172);
    \u0275\u0275listener("ngModelChange", function ImpostazioniComponent_div_14_div_9_div_18_div_3_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editingDepartment && (ctx_r1.editingDepartment.description = $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (ctx_r1.editingDepartment == null ? null : ctx_r1.editingDepartment.name) || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (ctx_r1.editingDepartment == null ? null : ctx_r1.editingDepartment.description) || "");
  }
}
function ImpostazioniComponent_div_14_div_9_div_18_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 134);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_14_div_9_div_18_ng_container_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r30);
      const dept_r28 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.avviaModificaReparto(dept_r28));
    });
    \u0275\u0275element(2, "lucide-angular", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 134);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_14_div_9_div_18_ng_container_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r30);
      const dept_r28 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.eliminaReparto(dept_r28));
    });
    \u0275\u0275element(4, "lucide-angular", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ImpostazioniComponent_div_14_div_9_div_18_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 134);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_14_div_9_div_18_ng_container_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.salvaModificaReparto());
    });
    \u0275\u0275element(2, "lucide-angular", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 134);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_14_div_9_div_18_ng_container_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.annullaModificaReparto());
    });
    \u0275\u0275element(4, "lucide-angular", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ImpostazioniComponent_div_14_div_9_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 167);
    \u0275\u0275template(2, ImpostazioniComponent_div_14_div_9_div_18_div_2_Template, 6, 2, "div", 168)(3, ImpostazioniComponent_div_14_div_9_div_18_div_3_Template, 3, 2, "div", 168);
    \u0275\u0275elementStart(4, "div", 151);
    \u0275\u0275template(5, ImpostazioniComponent_div_14_div_9_div_18_ng_container_5_Template, 5, 0, "ng-container", 169)(6, ImpostazioniComponent_div_14_div_9_div_18_ng_container_6_Template, 5, 0, "ng-container", 169);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dept_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.editingDepartment == null ? null : ctx_r1.editingDepartment.id) !== dept_r28.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingDepartment == null ? null : ctx_r1.editingDepartment.id) === dept_r28.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.editingDepartment == null ? null : ctx_r1.editingDepartment.id) !== dept_r28.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingDepartment == null ? null : ctx_r1.editingDepartment.id) === dept_r28.id);
  }
}
function ImpostazioniComponent_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 100)(2, "p", 163);
    \u0275\u0275text(3, "Aggiungi Nuovo Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80)(5, "div", 20)(6, "label", 21);
    \u0275\u0275text(7, "Nome Reparto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 164);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_14_div_9_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newDepartmentName, $event) || (ctx_r1.newDepartmentName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20)(10, "label", 21);
    \u0275\u0275text(11, "Descrizione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 165);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_14_div_9_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newDepartmentDescription, $event) || (ctx_r1.newDepartmentDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 127)(14, "button", 39);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_14_div_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aggiungiReparto());
    });
    \u0275\u0275element(15, "lucide-angular", 129);
    \u0275\u0275text(16, " Aggiungi Reparto ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, ImpostazioniComponent_div_14_div_9_div_17_Template, 4, 0, "div", 166)(18, ImpostazioniComponent_div_14_div_9_div_18_Template, 7, 4, "div", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newDepartmentName);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newDepartmentDescription);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.newDepartmentName || !ctx_r1.newDepartmentName.trim() || ctx_r1.salvataggioAzienda);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.departments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.departments);
  }
}
function ImpostazioniComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_14_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGestioneReparti());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 8);
    \u0275\u0275element(4, "lucide-angular", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6, "Gestione Reparti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275element(8, "lucide-angular", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ImpostazioniComponent_div_14_div_9_Template, 19, 9, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-expanded", ctx_r1.showGestioneReparti);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showGestioneReparti ? "chevron-up" : "chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showGestioneReparti);
  }
}
function ImpostazioniComponent_div_15_div_9_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r34 = ctx.$implicit;
    \u0275\u0275property("ngValue", u_r34.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", u_r34.first_name, " ", u_r34.last_name, " (", u_r34.email, ")");
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_div_22_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 34)(1, "input", 190);
    \u0275\u0275listener("change", function ImpostazioniComponent_div_15_div_9_div_8_div_22_label_1_Template_input_change_1_listener($event) {
      const u_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleManagerUser(u_r37.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r37 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("value", u_r37.id)("checked", ctx_r1.managerConfig.user_ids.includes(u_r37.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r37.first_name, " ", u_r37.last_name, "");
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_div_22_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 130);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_15_div_9_div_8_div_22_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleShowEmployees());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showAllEmployees ? "Mostra meno" : "Mostra tutti (" + ctx_r1.companyEmployees.length + ")", " ");
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275template(1, ImpostazioniComponent_div_15_div_9_div_8_div_22_label_1_Template, 4, 4, "label", 188);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, ImpostazioniComponent_div_15_div_9_div_8_div_22_button_3_Template, 2, 1, "button", 189);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.showAllEmployees ? ctx_r1.companyEmployees : \u0275\u0275pipeBind3(2, 2, ctx_r1.companyEmployees, 0, 10));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.companyEmployees.length > 10);
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_div_28_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 34)(1, "input", 190);
    \u0275\u0275listener("change", function ImpostazioniComponent_div_15_div_9_div_8_div_28_label_1_Template_input_change_1_listener($event) {
      const r_r40 = \u0275\u0275restoreView(_r39).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleManagerRole(r_r40, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r40 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("value", r_r40)("checked", ctx_r1.managerConfig.roles.includes(r_r40));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r40);
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275template(1, ImpostazioniComponent_div_15_div_9_div_8_div_28_label_1_Template, 4, 3, "label", 188);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableRoles);
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_div_34_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 34)(1, "input", 190);
    \u0275\u0275listener("change", function ImpostazioniComponent_div_15_div_9_div_8_div_34_label_1_Template_input_change_1_listener($event) {
      const dept_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleManagerDepartment(dept_r42.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r42 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("value", dept_r42.id)("checked", ctx_r1.managerConfig.department_ids == null ? null : ctx_r1.managerConfig.department_ids.includes(dept_r42.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r42.name);
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275template(1, ImpostazioniComponent_div_15_div_9_div_8_div_34_label_1_Template, 4, 3, "label", 188);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.departments);
  }
}
function ImpostazioniComponent_div_15_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 20)(2, "label", 179);
    \u0275\u0275text(3, "Modalit\xE0 di visibilit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 104)(5, "label", 34)(6, "input", 180);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.mode, $event) || (ctx_r1.managerConfig.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "strong");
    \u0275\u0275text(9, "Solo proprie timbrature");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "label", 34)(11, "input", 181);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.mode, $event) || (ctx_r1.managerConfig.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "strong");
    \u0275\u0275text(14, "Lista utenti selezionati");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "label", 34)(16, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.can_manage_shifts, $event) || (ctx_r1.managerConfig.can_manage_shifts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 36)(18, "strong");
    \u0275\u0275text(19, "Gestione turni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 37);
    \u0275\u0275text(21, "Pu\xF2 creare, modificare ed eliminare turni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ImpostazioniComponent_div_15_div_9_div_8_div_22_Template, 4, 6, "div", 182);
    \u0275\u0275elementStart(23, "label", 34)(24, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.mode, $event) || (ctx_r1.managerConfig.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 36)(26, "strong");
    \u0275\u0275text(27, "Per ruolo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, ImpostazioniComponent_div_15_div_9_div_8_div_28_Template, 2, 1, "div", 182);
    \u0275\u0275elementStart(29, "label", 34)(30, "input", 184);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.mode, $event) || (ctx_r1.managerConfig.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 36)(32, "strong");
    \u0275\u0275text(33, "Per reparto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, ImpostazioniComponent_div_15_div_9_div_8_div_34_Template, 2, 1, "div", 182);
    \u0275\u0275elementStart(35, "label", 34)(36, "input", 185);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.mode, $event) || (ctx_r1.managerConfig.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.managerConfig.can_view_all_employees = $event === "all");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 36)(38, "strong");
    \u0275\u0275text(39, "Pu\xF2 vedere tutti i dipendenti dell'azienda");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "div", 100)(41, "p", 163);
    \u0275\u0275text(42, "Permessi Responsabile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 104)(44, "label", 34)(45, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.can_manage_departments, $event) || (ctx_r1.managerConfig.can_manage_departments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 36)(47, "strong");
    \u0275\u0275text(48, "Gestione reparti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 37);
    \u0275\u0275text(50, "Pu\xF2 creare, modificare ed eliminare reparti");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "label", 34)(52, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.can_manage_job_titles, $event) || (ctx_r1.managerConfig.can_manage_job_titles = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 36)(54, "strong");
    \u0275\u0275text(55, "Gestione mansioni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 37);
    \u0275\u0275text(57, "Pu\xF2 aggiungere, modificare e disattivare mansioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "label", 34)(59, "input", 186);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.can_view_reports, $event) || (ctx_r1.managerConfig.can_view_reports = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 36)(61, "strong");
    \u0275\u0275text(62, "Report aziendali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 37);
    \u0275\u0275text(64, "Pu\xF2 visualizzare i report aziendali");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "label", 34)(66, "input", 186);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.can_edit_employees, $event) || (ctx_r1.managerConfig.can_edit_employees = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 36)(68, "strong");
    \u0275\u0275text(69, "Modifica dipendenti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 37);
    \u0275\u0275text(71, "Pu\xF2 modificare i dati anagrafici dei dipendenti");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "label", 34)(73, "input", 186);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_div_8_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.managerConfig.can_modify_timbrature, $event) || (ctx_r1.managerConfig.can_modify_timbrature = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 36)(75, "strong");
    \u0275\u0275text(76, "Modifica timbrature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 37);
    \u0275\u0275text(78, "Pu\xF2 approvare o applicare richieste di modifica");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(79, "div", 103)(80, "button", 39);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_15_div_9_div_8_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.salvaManagerVisibility());
    });
    \u0275\u0275element(81, "lucide-angular", 77);
    \u0275\u0275text(82, " Salva Visibilit\xE0 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.mode);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.mode);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.can_manage_shifts);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.managerConfig.mode === "selected_users");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.mode);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.managerConfig.mode === "roles");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.mode);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.managerConfig.mode === "department");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.mode);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.can_manage_departments);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.can_manage_job_titles);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.can_view_reports);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.can_edit_employees);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.managerConfig.can_modify_timbrature);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.salvataggioAzienda);
  }
}
function ImpostazioniComponent_div_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3, "Seleziona Responsabile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 174);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_div_15_div_9_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedManagerId, $event) || (ctx_r1.selectedManagerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ImpostazioniComponent_div_15_div_9_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onManagerSelected());
    });
    \u0275\u0275elementStart(5, "option", 175);
    \u0275\u0275text(6, "\u2014 Seleziona \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ImpostazioniComponent_div_15_div_9_option_7_Template, 2, 4, "option", 176);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ImpostazioniComponent_div_15_div_9_div_8_Template, 83, 21, "div", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedManagerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.managerUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedManagerId);
  }
}
function ImpostazioniComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_15_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilitaResponsabili());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 8);
    \u0275\u0275element(4, "lucide-angular", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6, "Visibilit\xE0 Responsabili");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275element(8, "lucide-angular", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ImpostazioniComponent_div_15_div_9_Template, 9, 4, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-expanded", ctx_r1.showVisibilitaResponsabili);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showVisibilitaResponsabili ? "chevron-up" : "chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showVisibilitaResponsabili);
  }
}
function ImpostazioniComponent_div_16_div_9_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "label", 34)(5, "input", 192);
    \u0275\u0275listener("change", function ImpostazioniComponent_div_16_div_9_tr_14_Template_input_change_5_listener($event) {
      const emp_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateEmployeePermissionFromEvent(emp_r45.id, "can_request_shifts", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td")(7, "label", 34)(8, "input", 192);
    \u0275\u0275listener("change", function ImpostazioniComponent_div_16_div_9_tr_14_Template_input_change_8_listener($event) {
      const emp_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateEmployeePermissionFromEvent(emp_r45.id, "can_create_custom_shifts", $event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const emp_r45 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", emp_r45.first_name, " ", emp_r45.last_name, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.editingPermissions[emp_r45.id].can_request_shifts);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.editingPermissions[emp_r45.id].can_create_custom_shifts);
  }
}
function ImpostazioniComponent_div_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "p", 191);
    \u0275\u0275text(2, "Abilita i dipendenti a richiedere turni e creare turni personalizzati.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 146)(4, "table", 148)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Richiedi turni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Crea turni personalizzati");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ImpostazioniComponent_div_16_div_9_tr_14_Template, 9, 4, "tr", 149);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.employeePermissions);
  }
}
function ImpostazioniComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275listener("click", function ImpostazioniComponent_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePermessiDipendenti());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 8);
    \u0275\u0275element(4, "lucide-angular", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6, "Permessi Dipendenti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275element(8, "lucide-angular", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ImpostazioniComponent_div_16_div_9_Template, 15, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-expanded", ctx_r1.showPermessiDipendenti);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.showPermessiDipendenti ? "chevron-up" : "chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPermessiDipendenti);
  }
}
function ImpostazioniComponent_lucide_angular_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 76);
  }
}
function ImpostazioniComponent_lucide_angular_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 22);
  }
}
function ImpostazioniComponent_label_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 34)(1, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_label_67_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.impostazioniNotifiche.notificheAmministratore, $event) || (ctx_r1.impostazioniNotifiche.notificheAmministratore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 36)(3, "strong");
    \u0275\u0275text(4, "Notifiche Amministratore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6, "Ricevi notifiche per le attivit\xE0 aziendali");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.impostazioniNotifiche.notificheAmministratore);
  }
}
function ImpostazioniComponent_lucide_angular_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 76);
  }
}
function ImpostazioniComponent_lucide_angular_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 77);
  }
}
function ImpostazioniComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193);
    \u0275\u0275element(1, "lucide-angular", 194);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.messaggioSuccesso, " ");
  }
}
function ImpostazioniComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275element(1, "lucide-angular", 196);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.messaggioErrore, " ");
  }
}
var ImpostazioniComponent = class _ImpostazioniComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  companyService = inject(CompanyService);
  usersService = inject(UsersService);
  departmentsService = inject(DepartmentsService);
  jobTitlesService = inject(JobTitlesService);
  // Forms
  profiloForm;
  aziendaForm;
  sicurezzaForm;
  showAllEmployees = false;
  // Dati correnti
  currentUser = null;
  currentCompany = null;
  // UI State
  salvataggioProfilo = false;
  salvataggioAzienda = false;
  salvataggioPassword = false;
  salvataggioNotifiche = false;
  messaggioSuccesso = "";
  messaggioErrore = "";
  // Notifiche
  impostazioniNotifiche = {
    emailNotifiche: true,
    riepilogoGiornaliero: false,
    notificheAmministratore: true
  };
  // Giorni di chiusura
  giorniChiusura = [];
  newDate = null;
  newDateLabel = null;
  rangeStart = null;
  rangeEnd = null;
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Punti di timbratura
  punchPoints = [];
  newPoint = { name: "", address: "", civic_number: "", city: null, province: null, lat: null, lng: null, radius_m: 50 };
  showAddPointForm = false;
  // Giorni della settimana (per orari)
  giorniSettimana = [
    { key: "monday", label: "Luned\xEC" },
    { key: "tuesday", label: "Marted\xEC" },
    { key: "wednesday", label: "Mercoled\xEC" },
    { key: "thursday", label: "Gioved\xEC" },
    { key: "friday", label: "Venerd\xEC" },
    { key: "saturday", label: "Sabato" },
    { key: "sunday", label: "Domenica" }
  ];
  // Visibilità responsabili
  companyEmployees = [];
  availableRoles = [];
  selectedManagerId = null;
  managerVisibilityMap = {};
  managerConfig = {
    mode: "self",
    user_ids: [],
    roles: [],
    department_ids: [],
    can_view_all_employees: false,
    can_manage_departments: false,
    can_manage_job_titles: false,
    can_view_reports: false,
    can_edit_employees: false,
    can_modify_timbrature: false
  };
  // Reparti
  departments = [];
  newDepartmentName = "";
  newDepartmentDescription = "";
  editingDepartment = null;
  // Mansioni
  jobTitles = [];
  isLoadingJobTitles = false;
  newJobTitleName = null;
  newJobTitleDescription = null;
  editingJobTitle = null;
  // Toggle sezioni
  showOpeningHours = false;
  showProfilo = false;
  showAzienda = false;
  showReparti = false;
  showGestioneReparti = false;
  showVisibilitaResponsabili = false;
  showPermessiDipendenti = true;
  showClosedDays = false;
  showMansioni = false;
  // Permessi dipendenti
  employeePermissions = [];
  editingPermissions = {};
  subscriptions = new Subscription();
  destroy$ = new Subject();
  constructor() {
    this.profiloForm = this.createProfiloForm();
    this.aziendaForm = this.createAziendaForm();
    this.sicurezzaForm = this.createSicurezzaForm();
  }
  ngOnInit() {
    this.authService.currentUser$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.currentUser = user;
      const companyId = this.authService.companyId;
      if (companyId) {
        this.loadCompanyData(companyId);
        this.loadUserProfile();
        this.loadEmployees(companyId).then(() => {
          this.loadEmployeePermissions();
        });
        this.loadDepartments(companyId);
        this.loadJobTitles(companyId);
      }
    });
    const ohGroup = this.openingHoursGroup;
    if (ohGroup) {
      this.subscriptions.add(ohGroup.valueChanges.pipe(debounceTime(800), distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)), takeUntil(this.destroy$)).subscribe(() => {
        if (this.currentCompany?.id) {
          this.autoSaveOpeningHours();
        }
      }));
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptions.unsubscribe();
  }
  // --- Form creation ---
  createProfiloForm() {
    return this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: [{ value: "", disabled: true }, [Validators.required, Validators.email]],
      phone: [""],
      hire_date: [""],
      birth_date: [""],
      birth_place: [""],
      fiscal_code: [""],
      job_title: [""],
      monthly_hours: [null],
      full_time: [false],
      timezone: ["Europe/Rome"]
    });
  }
  createAziendaForm() {
    const openingHoursGroup = this.fb.group({});
    this.giorniSettimana.forEach((d) => {
      openingHoursGroup.addControl(d.key, this.fb.group({
        open: [""],
        close: [""],
        closed: [false],
        slots: this.fb.array([])
      }));
    });
    return this.fb.group({
      name: ["", Validators.required],
      vat: ["", Validators.required],
      address: [""],
      city: [""],
      province: [""],
      numero_telefono: [""],
      email: [{ value: "", disabled: true }, [Validators.email]],
      website: [""],
      opening_hours: openingHoursGroup,
      timbratura_type: ["libera"]
    });
  }
  createSicurezzaForm() {
    return this.fb.group({
      currentPassword: [""],
      newPassword: [""],
      confirmPassword: [""]
    });
  }
  // Getter per openingHoursGroup
  get openingHoursGroup() {
    return this.aziendaForm.get("opening_hours");
  }
  // --- Caricamento dati ---
  loadCompanyData(companyId) {
    return __async(this, null, function* () {
      try {
        this.currentCompany = yield lastValueFrom(this.companyService.getById(companyId));
        if (this.currentCompany) {
          this.patchAziendaForm(this.currentCompany);
          this.punchPoints = this.currentCompany.punch_points || [];
          this.giorniChiusura = this.parseClosedDays(this.currentCompany.closed_days);
          this.managerVisibilityMap = this.currentCompany.manager_visibility || {};
        }
      } catch (err) {
        console.error("Errore caricamento azienda", err);
      }
    });
  }
  loadUserProfile() {
    if (!this.currentUser)
      return;
    this.profiloForm.patchValue({
      first_name: this.currentUser.first_name,
      last_name: this.currentUser.last_name,
      email: this.currentUser.email,
      phone: this.currentUser.phone || "",
      hire_date: this.currentUser.hire_date ?? "",
      birth_date: this.currentUser.birth_date ?? "",
      birth_place: this.currentUser.birth_place ?? "",
      fiscal_code: this.currentUser.fiscal_code ?? "",
      job_title: this.currentUser.job_title ?? "",
      monthly_hours: this.currentUser.monthly_hours ?? null,
      full_time: this.currentUser.full_time ?? false,
      timezone: this.currentUser.timezone ?? "Europe/Rome"
    });
    if (this.currentUser.notifications_preferences) {
      this.impostazioniNotifiche = __spreadValues(__spreadValues({}, this.impostazioniNotifiche), this.currentUser.notifications_preferences);
    }
    const isAdmin = this.hasRole("admin");
    const fieldsToToggle = [
      "first_name",
      "last_name",
      "hire_date",
      "birth_date",
      "birth_place",
      "fiscal_code",
      "job_title",
      "monthly_hours",
      "full_time"
    ];
    fieldsToToggle.forEach((field) => {
      const control = this.profiloForm.get(field);
      if (isAdmin) {
        control?.enable();
      } else {
        control?.disable();
      }
    });
  }
  loadEmployees(companyId) {
    return __async(this, null, function* () {
      try {
        this.companyEmployees = yield lastValueFrom(this.usersService.getByCompany(companyId));
        const roles = new Set(this.companyEmployees.map((u) => u.role).filter(Boolean));
        this.availableRoles = Array.from(roles);
      } catch (err) {
        console.error("Errore caricamento dipendenti", err);
      }
    });
  }
  loadDepartments(companyId) {
    return __async(this, null, function* () {
      try {
        this.departments = yield lastValueFrom(this.departmentsService.getByCompany(companyId));
      } catch (err) {
        console.error("Errore caricamento reparti", err);
      }
    });
  }
  loadJobTitles(companyId) {
    return __async(this, null, function* () {
      try {
        this.jobTitles = yield lastValueFrom(this.jobTitlesService.getByCompany(companyId));
      } catch (err) {
        console.error("Errore caricamento mansioni", err);
      }
    });
  }
  // --- Patch del form azienda ---
  patchAziendaForm(azienda) {
    const patch = {
      name: azienda.name,
      vat: azienda.vat,
      address: azienda.address,
      city: azienda.city,
      province: azienda.province,
      numero_telefono: azienda.numero_telefono,
      email: azienda.email,
      website: azienda.website,
      timbratura_type: azienda.timbratura_type ?? "libera"
    };
    this.aziendaForm.patchValue(patch);
    const oh = azienda.opening_hours;
    if (oh && typeof oh === "object") {
      this.giorniSettimana.forEach((d) => {
        const dayGroup = this.openingHoursGroup.get(d.key);
        const dayData = oh[d.key];
        if (dayData) {
          dayGroup.get("closed")?.patchValue(dayData.closed || false, { emitEvent: false });
          const slotsArray = dayGroup.get("slots");
          slotsArray.clear();
          let slots = [];
          if (dayData.slots) {
            slots = dayData.slots;
          } else if (dayData.open !== void 0) {
            slots = [{ open: dayData.open, close: dayData.close }];
          }
          slots.forEach((s) => {
            slotsArray.push(this.fb.group({
              open: s.open,
              close: s.close
            }));
          });
          const closedControl = dayGroup.get("closed");
          if (closedControl) {
            this.updateSlotsDisabledState(d.key, closedControl.value);
            closedControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((closed) => {
              this.updateSlotsDisabledState(d.key, closed);
            });
          }
        }
      });
    }
  }
  // --- Giorni di chiusura ---
  parseClosedDays(data) {
    if (!Array.isArray(data))
      return this.getFestivitaItaliane(this.currentYear);
    return data.map((item) => {
      if (typeof item === "string") {
        if (item.includes("/")) {
          const [start, end] = item.split("/");
          return { type: "range", start, end, label: `Chiusura ${this.formatDateDisplay(start)}` };
        } else {
          return { type: "single", start: item, label: this.festivitaMap()[item] ?? "Festa" };
        }
      } else {
        return {
          type: item.type,
          start: item.start,
          end: item.end,
          label: item.label
        };
      }
    });
  }
  getFestivitaItaliane(year) {
    const pad = (d) => d.toString().padStart(2, "0");
    const fmt = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const fixed = [
      { date: new Date(year, 0, 1), name: "Capodanno" },
      { date: new Date(year, 0, 6), name: "Epifania" },
      { date: new Date(year, 3, 25), name: "Festa della Liberazione" },
      { date: new Date(year, 4, 1), name: "Festa del Lavoro" },
      { date: new Date(year, 5, 2), name: "Festa della Repubblica" },
      { date: new Date(year, 7, 15), name: "Ferragosto" },
      { date: new Date(year, 10, 1), name: "Ognissanti" },
      { date: new Date(year, 11, 8), name: "Immacolata Concezione" },
      { date: new Date(year, 11, 25), name: "Natale" },
      { date: new Date(year, 11, 26), name: "Santo Stefano" }
    ];
    const easter = this.calculateEaster(year);
    const pasquetta = new Date(easter);
    pasquetta.setDate(pasquetta.getDate() + 1);
    return [
      ...fixed.map((f) => ({ type: "single", start: fmt(f.date), label: f.name })),
      { type: "single", start: fmt(easter), label: "Pasqua" },
      { type: "single", start: fmt(pasquetta), label: "Pasquetta" }
    ].sort((a, b) => a.start.localeCompare(b.start));
  }
  festivitaMap() {
    const map = {};
    this.getFestivitaItaliane(this.currentYear).forEach((f) => {
      if (f.type === "single")
        map[f.start] = f.label;
    });
    return map;
  }
  calculateEaster(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = (h + l - 7 * m + 114) % 31 + 1;
    return new Date(year, month - 1, day);
  }
  aggiungiGiornoSingolo() {
    if (!this.newDate)
      return;
    const label = this.newDateLabel?.trim() || "Festa personalizzata";
    if (!this.giorniChiusura.some((g) => g.type === "single" && g.start === this.newDate)) {
      this.giorniChiusura.push({ type: "single", start: this.newDate, label });
    }
    this.newDate = null;
    this.newDateLabel = null;
    this.persistClosedDays();
  }
  aggiungiIntervallo() {
    if (!this.rangeStart || !this.rangeEnd)
      return;
    if (this.rangeEnd < this.rangeStart) {
      [this.rangeStart, this.rangeEnd] = [this.rangeEnd, this.rangeStart];
    }
    if (!this.giorniChiusura.some((g) => g.type === "range" && g.start === this.rangeStart && g.end === this.rangeEnd)) {
      this.giorniChiusura.push({ type: "range", start: this.rangeStart, end: this.rangeEnd, label: "Intervallo personalizzato" });
    }
    this.rangeStart = null;
    this.rangeEnd = null;
    this.persistClosedDays();
  }
  rimuoviGiornoChiusura(index) {
    this.giorniChiusura.splice(index, 1);
    this.persistClosedDays();
  }
  ripristinaFestivita() {
    this.giorniChiusura = this.getFestivitaItaliane(this.currentYear);
    this.persistClosedDays();
  }
  persistClosedDays() {
    if (!this.currentCompany?.id)
      return;
    const payload = this.giorniChiusura.map((g) => {
      if (g.type === "range")
        return { type: "range", start: g.start, end: g.end, label: g.label };
      return { type: "single", start: g.start, label: g.label };
    });
    this.updateCompany({ closed_days: payload });
  }
  // --- Punti di timbratura ---
  addPunchPoint() {
    return __async(this, null, function* () {
      if (!this.currentCompany?.id || !this.currentUser)
        return;
      const p = __spreadValues({}, this.newPoint);
      p.radius_m = Number(p.radius_m) || 50;
      const address = p.address || "";
      const civic = p.civic_number || "";
      const city = p.city || this.currentCompany.city || "";
      const province = p.province || this.currentCompany.province || "";
      const geo = yield this.geocodeAddress(address, civic, city, province);
      if (!geo) {
        this.messaggioErrore = "Impossibile trovare coordinate per l'indirizzo.";
        return;
      }
      p.lat = geo.lat;
      p.lng = geo.lng;
      p.address = geo.displayName;
      p.id = Math.random().toString(36).slice(2, 9);
      delete p.civic_number;
      const newPunchPoints = [...this.punchPoints || [], p];
      this.updateCompany({ punch_points: newPunchPoints });
    });
  }
  removePunchPoint(index) {
    this.punchPoints.splice(index, 1);
    this.updateCompany({ punch_points: this.punchPoints });
  }
  toggleAddPointForm() {
    this.showAddPointForm = !this.showAddPointForm;
    if (!this.showAddPointForm) {
      this.newPoint = { name: "", address: "", civic_number: "", city: this.currentCompany?.city || null, province: this.currentCompany?.province || null, lat: null, lng: null, radius_m: 50 };
    }
  }
  geocodeAddress(address, civic, city, province) {
    return __async(this, null, function* () {
      const parts = [address, civic, city, province].filter(Boolean);
      const q = parts.join(", ");
      if (!q)
        return null;
      try {
        const res = yield fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`, {
          headers: { "Accept": "application/json" }
        });
        if (!res.ok)
          return null;
        const data = yield res.json();
        if (!data.length)
          return null;
        return { lat: Number(data[0].lat), lng: Number(data[0].lon), displayName: data[0].display_name };
      } catch (err) {
        console.error("Geocode error", err);
        return null;
      }
    });
  }
  // --- Visibilità manager ---
  onManagerSelected() {
    if (!this.selectedManagerId) {
      this.managerConfig = { mode: "self", user_ids: [], roles: [], department_ids: [] };
      return;
    }
    const cfg = this.managerVisibilityMap[this.selectedManagerId] || { mode: "self", user_ids: [], roles: [] };
    this.managerConfig = {
      mode: cfg.mode ?? "self",
      user_ids: Array.isArray(cfg.user_ids) ? cfg.user_ids : [],
      roles: Array.isArray(cfg.roles) ? cfg.roles : [],
      department_ids: Array.isArray(cfg.department_ids) ? cfg.department_ids : [],
      can_view_all_employees: !!cfg.can_view_all_employees,
      can_manage_departments: !!cfg.can_manage_departments,
      can_manage_job_titles: !!cfg.can_manage_job_titles,
      can_view_reports: !!cfg.can_view_reports,
      can_edit_employees: !!cfg.can_edit_employees,
      can_modify_timbrature: !!cfg.can_modify_timbrature
    };
  }
  toggleManagerUser(userId, event) {
    const checked = event.target.checked;
    const idx = this.managerConfig.user_ids.indexOf(userId);
    if (checked && idx === -1)
      this.managerConfig.user_ids.push(userId);
    else if (!checked && idx !== -1)
      this.managerConfig.user_ids.splice(idx, 1);
  }
  toggleManagerRole(role, event) {
    const checked = event.target.checked;
    if (checked) {
      if (!this.managerConfig.roles.includes(role))
        this.managerConfig.roles.push(role);
    } else {
      this.managerConfig.roles = this.managerConfig.roles.filter((r) => r !== role);
    }
  }
  toggleManagerDepartment(deptId, event) {
    const checked = event.target.checked;
    if (!this.managerConfig.department_ids)
      this.managerConfig.department_ids = [];
    const idx = this.managerConfig.department_ids.indexOf(deptId);
    if (checked && idx === -1)
      this.managerConfig.department_ids.push(deptId);
    else if (!checked && idx !== -1)
      this.managerConfig.department_ids.splice(idx, 1);
  }
  salvaManagerVisibility() {
    if (!this.currentCompany?.id || !this.selectedManagerId)
      return;
    this.managerVisibilityMap[this.selectedManagerId] = __spreadValues({}, this.managerConfig);
    this.updateCompany({ manager_visibility: this.managerVisibilityMap });
  }
  // --- Reparti ---
  aggiungiReparto() {
    if (!this.newDepartmentName.trim() || !this.currentCompany?.id)
      return;
    this.departmentsService.create({
      company_id: this.currentCompany.id,
      name: this.newDepartmentName.trim(),
      description: this.newDepartmentDescription.trim() || void 0
    }).subscribe({
      next: (dept) => {
        this.departments.push(dept);
        this.newDepartmentName = "";
        this.newDepartmentDescription = "";
        this.messaggioSuccesso = "Reparto aggiunto";
        this.nascondiMessaggio();
      },
      error: (err) => {
        console.error(err);
        this.messaggioErrore = "Errore aggiunta reparto";
      }
    });
  }
  avviaModificaReparto(dept) {
    this.editingDepartment = __spreadValues({}, dept);
  }
  salvaModificaReparto() {
    if (!this.editingDepartment)
      return;
    this.departmentsService.update(this.editingDepartment.id, {
      name: this.editingDepartment.name,
      description: this.editingDepartment.description
    }).subscribe({
      next: (updated) => {
        const idx = this.departments.findIndex((d) => d.id === updated.id);
        if (idx !== -1)
          this.departments[idx] = updated;
        this.editingDepartment = null;
        this.messaggioSuccesso = "Reparto aggiornato";
        this.nascondiMessaggio();
      },
      error: (err) => {
        console.error(err);
        this.messaggioErrore = "Errore modifica reparto";
      }
    });
  }
  annullaModificaReparto() {
    this.editingDepartment = null;
  }
  eliminaReparto(dept) {
    if (!confirm(`Eliminare il reparto "${dept.name}"?`))
      return;
    this.departmentsService.delete(dept.id).subscribe({
      next: () => {
        this.departments = this.departments.filter((d) => d.id !== dept.id);
        this.messaggioSuccesso = "Reparto eliminato";
        this.nascondiMessaggio();
      },
      error: (err) => {
        console.error(err);
        this.messaggioErrore = "Errore eliminazione reparto";
      }
    });
  }
  // --- Mansioni ---
  createJobTitle() {
    if (!this.currentCompany?.id)
      return;
    const name = this.newJobTitleName?.trim();
    if (!name)
      return;
    this.isLoadingJobTitles = true;
    this.jobTitlesService.create({
      company_id: this.currentCompany.id,
      name,
      description: this.newJobTitleDescription || void 0,
      is_active: true,
      created_by: this.currentUser.id
    }).subscribe({
      next: (jt) => {
        this.jobTitles.unshift(jt);
        this.newJobTitleName = null;
        this.newJobTitleDescription = null;
        this.isLoadingJobTitles = false;
      },
      error: (err) => {
        console.error(err);
        alert("Errore creazione mansione");
        this.isLoadingJobTitles = false;
      }
    });
  }
  beginEditJobTitle(jt) {
    this.editingJobTitle = __spreadValues({}, jt);
  }
  saveEditJobTitle() {
    if (!this.editingJobTitle)
      return;
    this.isLoadingJobTitles = true;
    this.jobTitlesService.update(this.editingJobTitle.id, {
      name: this.editingJobTitle.name,
      description: this.editingJobTitle.description
    }).subscribe({
      next: (updated) => {
        const idx = this.jobTitles.findIndex((j) => j.id === updated.id);
        if (idx !== -1)
          this.jobTitles[idx] = updated;
        this.editingJobTitle = null;
        this.isLoadingJobTitles = false;
      },
      error: (err) => {
        console.error(err);
        alert("Errore salvataggio");
        this.isLoadingJobTitles = false;
      }
    });
  }
  cancelEditJobTitle() {
    this.editingJobTitle = null;
  }
  toggleJobTitleActive(jt) {
    if (!jt.id)
      return;
    const newState = !jt.is_active;
    if (!newState && !confirm(`Disattivare la mansione "${jt.name}"?`))
      return;
    this.isLoadingJobTitles = true;
    this.jobTitlesService.update(jt.id, { is_active: newState }).subscribe({
      next: (updated) => {
        const idx = this.jobTitles.findIndex((j) => j.id === updated.id);
        if (idx !== -1)
          this.jobTitles[idx] = updated;
        this.isLoadingJobTitles = false;
      },
      error: (err) => {
        console.error(err);
        alert("Errore aggiornamento");
        this.isLoadingJobTitles = false;
      }
    });
  }
  // --- Salvataggi ---
  salvaProfilo() {
    return __async(this, null, function* () {
      if (this.profiloForm.invalid || !this.currentUser)
        return;
      this.salvataggioProfilo = true;
      try {
        const raw = this.profiloForm.getRawValue();
        const patch = {
          first_name: raw.first_name,
          last_name: raw.last_name,
          phone: raw.phone || null,
          birth_date: raw.birth_date || null,
          birth_place: raw.birth_place || null,
          fiscal_code: raw.fiscal_code || null,
          job_title: raw.job_title || null,
          monthly_hours: raw.monthly_hours != null ? Number(raw.monthly_hours) : null,
          full_time: !!raw.full_time,
          timezone: raw.timezone || null,
          notifications_preferences: this.impostazioniNotifiche
        };
        if (this.hasRole("admin")) {
          patch.hire_date = raw.hire_date || null;
        }
        yield this.authService.updateUserProfile(this.currentUser.id, patch);
        this.messaggioSuccesso = "Profilo aggiornato";
      } catch (err) {
        console.error(err);
        this.messaggioErrore = "Errore salvataggio profilo";
      } finally {
        this.salvataggioProfilo = false;
        this.nascondiMessaggio();
      }
    });
  }
  salvaAzienda() {
    if (this.aziendaForm.invalid || !this.currentCompany?.id)
      return;
    this.salvataggioAzienda = true;
    const formValue = this.aziendaForm.value;
    const opening_hours = {};
    this.giorniSettimana.forEach((d) => {
      const dayGroup = this.openingHoursGroup.get(d.key);
      const closed = dayGroup.get("closed")?.value;
      const slotsArray = dayGroup.get("slots");
      const slots = slotsArray.value.map((slot) => ({
        open: slot.open,
        close: slot.close
      }));
      opening_hours[d.key] = { closed, slots };
    });
    const datiAzienda = {
      name: formValue.name,
      vat: formValue.vat,
      address: formValue.address,
      city: formValue.city,
      province: formValue.province,
      numero_telefono: formValue.numero_telefono,
      website: formValue.website,
      opening_hours,
      timbratura_type: formValue.timbratura_type,
      punch_points: this.punchPoints,
      closed_days: this.giorniChiusura.map((g) => g.type === "range" ? { type: "range", start: g.start, end: g.end, label: g.label } : { type: "single", start: g.start, label: g.label })
    };
    this.companyService.updateCompany(this.currentCompany.id, datiAzienda).subscribe({
      next: (updated) => {
        this.currentCompany = updated;
        this.messaggioSuccesso = "Azienda aggiornata";
        this.salvataggioAzienda = false;
        this.nascondiMessaggio();
      },
      error: (err) => {
        console.error(err);
        this.messaggioErrore = "Errore aggiornamento azienda";
        this.salvataggioAzienda = false;
      }
    });
  }
  cambiaPassword() {
    this.messaggioErrore = "Funzione non ancora implementata";
  }
  salvaNotifiche() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      this.salvataggioNotifiche = true;
      try {
        yield this.authService.updateUserProfile(this.currentUser.id, {
          notifications_preferences: this.impostazioniNotifiche
        });
        this.messaggioSuccesso = "Preferenze notifiche salvate";
      } catch (err) {
        console.error(err);
        this.messaggioErrore = "Errore salvataggio notifiche";
      } finally {
        this.salvataggioNotifiche = false;
        this.nascondiMessaggio();
      }
    });
  }
  // --- Autosave opening hours ---
  autoSaveOpeningHours() {
    if (!this.currentCompany?.id)
      return;
    const opening_hours = {};
    this.giorniSettimana.forEach((d) => {
      const g = this.openingHoursGroup.get(d.key);
      opening_hours[d.key] = {
        open: g.get("open")?.value || null,
        close: g.get("close")?.value || null,
        closed: !!g.get("closed")?.value
      };
    });
    this.companyService.updateCompany(this.currentCompany.id, { opening_hours }).subscribe({
      error: (err) => console.error("Autosave opening hours failed", err)
    });
  }
  // --- Utility ---
  updateCompany(payload) {
    if (!this.currentCompany?.id)
      return;
    this.salvataggioAzienda = true;
    this.companyService.updateCompany(this.currentCompany.id, payload).subscribe({
      next: (updated) => {
        this.currentCompany = updated;
        if (payload.punch_points)
          this.punchPoints = updated.punch_points || [];
        if (payload.closed_days)
          this.giorniChiusura = this.parseClosedDays(updated.closed_days);
        if (payload.manager_visibility)
          this.managerVisibilityMap = updated.manager_visibility || {};
        this.salvataggioAzienda = false;
        this.messaggioSuccesso = "Aggiornato";
        this.nascondiMessaggio();
      },
      error: (err) => {
        console.error(err);
        this.salvataggioAzienda = false;
        this.messaggioErrore = "Errore aggiornamento";
        this.nascondiMessaggio();
      }
    });
  }
  hasRole(role) {
    return this.authService.hasRole(role);
  }
  formatDateDisplay(date) {
    if (!date)
      return "";
    const [y, m, d] = date.split("-");
    return `${d}/${m}/${y}`;
  }
  nascondiMessaggio() {
    setTimeout(() => {
      this.messaggioSuccesso = "";
      this.messaggioErrore = "";
    }, 5e3);
  }
  // Getter per manager users
  get managerUsers() {
    return this.companyEmployees.filter((u) => u.role === "manager" || this.authService.hasRole("manager"));
  }
  // Toggle sections
  toggleOpeningHours() {
    this.showOpeningHours = !this.showOpeningHours;
  }
  toggleProfilo() {
    this.showProfilo = !this.showProfilo;
  }
  toggleAzienda() {
    this.showAzienda = !this.showAzienda;
  }
  toggleReparti() {
    this.showReparti = !this.showReparti;
  }
  toggleGestioneReparti() {
    this.showGestioneReparti = !this.showGestioneReparti;
  }
  toggleVisibilitaResponsabili() {
    this.showVisibilitaResponsabili = !this.showVisibilitaResponsabili;
  }
  toggleClosedDays() {
    this.showClosedDays = !this.showClosedDays;
  }
  toggleMansioni() {
    this.showMansioni = !this.showMansioni;
    if (this.showMansioni && this.currentCompany?.id) {
      this.loadJobTitles(this.currentCompany.id);
    }
  }
  togglePermessiDipendenti() {
    this.showPermessiDipendenti = !this.showPermessiDipendenti;
  }
  toggleShowEmployees() {
    this.showAllEmployees = !this.showAllEmployees;
  }
  getStreet(pt) {
    const addr = pt?.address || pt?.name || "";
    if (!addr)
      return "";
    const parts = addr.split(",").map((s) => s.trim()).filter(Boolean);
    const first = parts[0] || "";
    const m = first.match(/^(.*\D)\s+(\d+\S*)$/);
    if (m)
      return m[1].trim();
    if (parts.length >= 2 && /^\d+\S*$/.test(parts[0]))
      return parts[1];
    return first;
  }
  getCivic(pt) {
    const addr = pt?.address || "";
    if (!addr)
      return "";
    const parts = addr.split(",").map((s) => s.trim()).filter(Boolean);
    const first = parts[0] || "";
    const m = first.match(/^(.*\D)\s+(\d+\S*)$/);
    if (m)
      return m[2].trim();
    if (parts.length >= 2 && /^\d+\S*$/.test(parts[0]))
      return parts[0];
    if (parts.length >= 2 && /^\d+\S*$/.test(parts[1]))
      return parts[1];
    return "";
  }
  getCityProvince(pt) {
    const cityField = pt?.city || "";
    const provinceField = pt?.province || "";
    if (cityField || provinceField) {
      return `${cityField}${provinceField && cityField !== provinceField ? " " + provinceField : ""}`.trim();
    }
    const addr = pt?.address || "";
    if (!addr)
      return "";
    const parts = addr.split(",").map((s) => s.trim()).filter(Boolean);
    const countryTokens = ["italia", "italy"];
    while (parts.length && countryTokens.includes(parts[parts.length - 1].toLowerCase()))
      parts.pop();
    while (parts.length && /^\d{4,}$/.test(parts[parts.length - 1]))
      parts.pop();
    const street = this.getStreet(pt);
    const civic = this.getCivic(pt);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      if (!p)
        continue;
      if (p === street || p === civic)
        continue;
      if (/^\d+$/.test(p) || p.length > 40)
        continue;
      return p;
    }
    return "";
  }
  // Metodo per resettare gli orari di apertura
  resetOrariDefault() {
    const defaultSlots = {
      monday: [{ open: "09:00", close: "18:00" }],
      tuesday: [{ open: "09:00", close: "18:00" }],
      wednesday: [{ open: "09:00", close: "18:00" }],
      thursday: [{ open: "09:00", close: "18:00" }],
      friday: [{ open: "09:00", close: "18:00" }],
      saturday: [{ open: "09:00", close: "13:00" }],
      sunday: []
    };
    this.giorniSettimana.forEach((d) => {
      const dayGroup = this.getDayGroup(d.key);
      dayGroup.get("closed")?.patchValue(defaultSlots[d.key].length === 0);
      const slotsArray = dayGroup.get("slots");
      slotsArray.clear();
      defaultSlots[d.key].forEach((s) => {
        slotsArray.push(this.fb.group({
          open: s.open,
          close: s.close
        }));
      });
    });
    this.messaggioSuccesso = "Orari reimpostati ai valori predefiniti";
    this.nascondiMessaggio();
  }
  // Helper per formattare i giorni di chiusura nel template
  formatClosedDay(cd) {
    if (!cd)
      return "";
    if (cd.type === "range") {
      return `${this.formatDateDisplay(cd.start)} \u2192 ${this.formatDateDisplay(cd.end)}`;
    }
    return this.formatDateDisplay(cd.start);
  }
  // Metodi di permesso per manager
  canManageJobTitles() {
    if (this.hasRole("admin"))
      return true;
    if (!this.currentUser)
      return false;
    const cfg = this.managerVisibilityMap[this.currentUser.id] || {};
    return !!cfg.can_manage_job_titles;
  }
  canManageDepartments() {
    if (this.hasRole("admin"))
      return true;
    if (!this.currentUser)
      return false;
    const cfg = this.managerVisibilityMap[this.currentUser.id] || {};
    return !!cfg.can_manage_departments;
  }
  isAdmin() {
    return this.hasRole("admin");
  }
  // Permessi dipendenti
  updateEmployeePermission(userId, field, value) {
    if (!this.editingPermissions[userId]) {
      this.editingPermissions[userId] = { can_request_shifts: false, can_create_custom_shifts: false };
    }
    this.editingPermissions[userId][field] = value;
  }
  saveEmployeePermission(userId, field, value) {
    const updatePayload = { [field]: value };
    this.usersService.update(userId, updatePayload).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.messaggioSuccesso = "Permesso aggiornato";
        this.nascondiMessaggio();
      },
      error: (err) => {
        console.error("Errore aggiornamento permesso", err);
        this.messaggioErrore = "Errore aggiornamento permesso";
        this.nascondiMessaggio();
      }
    });
  }
  saveEmployeePermissions() {
    const updates = Object.entries(this.editingPermissions).filter(([, perms]) => perms !== void 0).map(([userId, perms]) => this.usersService.update(userId, perms).pipe(takeUntil(this.destroy$)));
    forkJoin(updates).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.messaggioSuccesso = "Permessi aggiornati";
        this.loadEmployeePermissions();
      },
      error: () => this.messaggioErrore = "Errore aggiornamento permessi"
    });
  }
  loadEmployeePermissions() {
    const companyId = this.authService.companyId;
    if (!companyId)
      return;
    this.usersService.getAll(companyId).pipe(takeUntil(this.destroy$)).subscribe((users) => {
      this.employeePermissions = users.filter((u) => u.role === "employee");
      this.employeePermissions.forEach((u) => {
        this.editingPermissions[u.id] = {
          can_request_shifts: u.can_request_shifts || false,
          can_create_custom_shifts: u.can_create_custom_shifts || false
        };
      });
    });
  }
  get managerPermissions() {
    if (!this.currentUser) {
      return {
        can_manage_job_titles: false,
        can_manage_departments: false,
        can_manage_shifts: false,
        can_view_reports: false,
        can_edit_employees: false,
        can_modify_timbrature: false
      };
    }
    const perms = this.managerVisibilityMap[this.currentUser.id] || {};
    return {
      can_manage_job_titles: !!perms.can_manage_job_titles,
      can_manage_departments: !!perms.can_manage_departments,
      can_manage_shifts: !!perms.can_manage_shifts,
      can_view_reports: !!perms.can_view_reports,
      can_edit_employees: !!perms.can_edit_employees,
      can_modify_timbrature: !!perms.can_modify_timbrature
    };
  }
  updateEmployeePermissionFromEvent(userId, field, event) {
    const input = event.target;
    const value = input.checked;
    if (!this.editingPermissions[userId]) {
      this.editingPermissions[userId] = { can_request_shifts: false, can_create_custom_shifts: false };
    }
    this.editingPermissions[userId][field] = value;
    this.saveEmployeePermission(userId, field, value);
  }
  // SLOT TIME
  // Metodo per ottenere il FormArray degli slot di un giorno
  getSlots(dayKey) {
    return this.openingHoursGroup.get(dayKey).get("slots");
  }
  // Aggiunge una nuova fascia oraria vuota
  addSlot(dayKey) {
    const slots = this.getSlots(dayKey);
    const newSlot = this.fb.group({
      open: ["", Validators.required],
      close: ["", Validators.required]
    });
    slots.push(newSlot);
    const closed = this.getDayGroup(dayKey).get("closed")?.value;
    if (closed) {
      newSlot.get("open")?.disable({ emitEvent: false });
      newSlot.get("close")?.disable({ emitEvent: false });
    }
  }
  // Rimuove una fascia oraria
  removeSlot(dayKey, index) {
    const slots = this.getSlots(dayKey);
    slots.removeAt(index);
  }
  // Copia gli slot dal giorno precedente (per indice)
  copyFromPreviousDay(currentIndex) {
    if (currentIndex === 0)
      return;
    const prevDayKey = this.giorniSettimana[currentIndex - 1].key;
    const currentDayKey = this.giorniSettimana[currentIndex].key;
    const prevSlots = this.getSlots(prevDayKey).value;
    const currentSlots = this.getSlots(currentDayKey);
    currentSlots.clear();
    prevSlots.forEach((slot) => {
      currentSlots.push(this.fb.group({
        open: slot.open,
        close: slot.close
      }));
    });
  }
  // Restituisce il FormGroup di un giorno
  getDayGroup(dayKey) {
    return this.openingHoursGroup.get(dayKey);
  }
  updateSlotsDisabledState(dayKey, disabled) {
    const slotsArray = this.getSlots(dayKey);
    slotsArray.controls.forEach((slot) => {
      const openControl = slot.get("open");
      const closeControl = slot.get("close");
      if (disabled) {
        openControl?.disable({ emitEvent: false });
        closeControl?.disable({ emitEvent: false });
      } else {
        openControl?.enable({ emitEvent: false });
        closeControl?.enable({ emitEvent: false });
      }
    });
  }
  // Verifica se un giorno ha almeno uno slot
  hasSlots(dayKey) {
    const slots = this.getSlots(dayKey);
    return slots.length > 0;
  }
  static \u0275fac = function ImpostazioniComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImpostazioniComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImpostazioniComponent, selectors: [["app-impostazioni"]], decls: 75, vars: 22, consts: [["noMansioni", ""], ["showName", ""], ["showDesc", ""], [1, "page-container"], [1, "p-lg", "flex", "flex-col", "gap-lg"], [1, "card"], [1, "flex", "items-center", "justify-between", "gap-sm", "settings-toggle", 3, "click"], [1, "flex", "items-center", "gap-sm"], [1, "icon-lucide"], ["name", "user"], [1, "font-bold", "text-md", "m-0"], ["type", "button", 1, "icon-button"], [3, "name"], ["class", "mt-md", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "card", 2, "display", "none"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "shield"], [1, "flex", "flex-col", "gap-sm", 3, "ngSubmit", "formGroup"], [1, "form-card"], [1, "form-group"], [1, "standard-label"], ["name", "lock"], ["type", "password", "formControlName", "currentPassword", "autocomplete", "current-password"], [1, "form-row", "mt-sm"], ["name", "lock-keyhole"], ["type", "password", "formControlName", "newPassword", "autocomplete", "new-password"], ["type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password"], [1, "flex", "justify-end", "pt-lg"], ["type", "submit", 1, "promethea-button", 3, "disabled"], ["name", "refresh-cw", "class", "animate-spin", 4, "ngIf"], ["name", "lock", 4, "ngIf"], ["name", "bell"], [1, "grid-cards"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkbox-content"], [1, "text-muted", "text-mini"], ["class", "checkbox-label", 4, "ngIf"], ["type", "button", 1, "promethea-button", 3, "click", "disabled"], ["name", "save", 4, "ngIf"], ["class", "info-message info-success", 4, "ngIf"], ["class", "info-message info-error", 4, "ngIf"], [1, "mt-md"], [1, "form-row"], ["name", "id-card"], ["type", "text", "formControlName", "first_name"], ["class", "field-error", 4, "ngIf"], ["type", "text", "formControlName", "last_name", 3, "disabled"], ["name", "mail"], ["type", "email", "formControlName", "email", "title", "Email non modificabile", 3, "disabled"], ["name", "phone"], ["type", "tel", "formControlName", "phone"], ["name", "cake"], ["type", "date", "formControlName", "birth_date", 3, "disabled"], ["name", "map-pin"], ["type", "text", "formControlName", "birth_place", 3, "disabled"], ["name", "calendar-check"], ["type", "date", "formControlName", "hire_date", 3, "disabled"], ["class", "info-message mt-sm", 4, "ngIf"], ["name", "fingerprint"], ["type", "text", "formControlName", "fiscal_code", 3, "disabled"], ["name", "briefcase"], ["type", "text", "formControlName", "job_title", 3, "disabled"], ["name", "clock"], ["type", "number", "min", "0", "formControlName", "monthly_hours", 3, "disabled"], ["type", "checkbox", "formControlName", "full_time", 3, "disabled"], [1, "form-group", 2, "display", "none"], ["name", "globe"], ["type", "text", "formControlName", "timezone", "placeholder", "Europe/Rome"], ["type", "text", "disabled", "", 3, "value"], ["name", "building-2"], [1, "field-error"], [1, "info-message", "mt-sm"], ["name", "info"], [1, "text-mini"], ["name", "refresh-cw", 1, "animate-spin"], ["name", "save"], ["name", "building"], [1, "flex", "flex-col", "gap-lg", 3, "ngSubmit", "formGroup"], [1, "grid-form"], ["type", "text", "formControlName", "name"], ["name", "receipt"], ["type", "text", "formControlName", "vat"], ["type", "text", "formControlName", "address"], ["name", "landmark"], ["type", "text", "formControlName", "city"], ["name", "map"], ["type", "text", "formControlName", "province"], ["type", "url", "formControlName", "website"], ["type", "tel", "formControlName", "numero_telefono"], ["type", "email", "formControlName", "email"], [1, "form-group", 2, "grid-column", "1 / -1"], ["name", "sliders"], [1, "flex", "flex-wrap", "gap-sm", "mt-sm"], [1, "radio-option"], ["type", "radio", "formControlName", "timbratura_type", "value", "libera"], [1, "chip"], ["type", "radio", "formControlName", "timbratura_type", "value", "punti"], ["class", "card shadow-card", 4, "ngIf"], [1, "card", "shadow-card"], ["name", "calendar-x"], ["class", "mt-md flex flex-col gap-sm", 4, "ngIf"], [1, "flex", "justify-end"], [1, "flex", "flex-col", "gap-sm"], ["class", "card shadow-card", 4, "ngFor", "ngForOf"], [1, "flex", "gap-sm", "mt-md"], ["class", "card shadow-card mt-md", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-sm", "flex-wrap"], [1, "avatartondo"], [1, "flex", "items-center", "gap-sm", "flex-wrap"], ["class", "text-muted text-mini", 4, "ngIf"], [1, "chip-mini"], ["type", "button", "title", "Rimuovi", 1, "icon-lucide", 3, "click"], ["name", "trash-2"], [1, "card", "shadow-card", "mt-md"], ["type", "text", "placeholder", "Es. Sede Principale", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Es. Via Roma", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Es. 12/A", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Citt\xE0", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Es. RM", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "placeholder", "50", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "justify-end", "mt-md"], [1, "mt-md", "flex", "flex-col", "gap-sm"], [1, "font-semibold", "text-mini", "mb-sm"], ["type", "date", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Nome festivit\xE0 (es. Chiusura estiva)", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "justify-end", "mt-sm"], ["type", "button", 1, "promethea-button", "outline", 3, "click"], ["name", "plus"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["name", "rotate-ccw"], [1, "flex", "items-center", "justify-between", "gap-sm"], [1, "text-muted", "text-mini", "m-0"], ["type", "button", 1, "icon-lucide", 3, "click"], ["class", "mt-md flex flex-col gap-md", 4, "ngIf"], [1, "mt-md", "flex", "flex-col", "gap-md"], [1, "flex", "flex-wrap", "gap-sm", "items-center"], [1, "form-group", 2, "flex", "2 1 200px"], ["type", "text", "placeholder", "Nome mansione", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "flex", "3 1 280px"], ["type", "text", "placeholder", "Descrizione (opzionale)", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "promethea-button", 3, "click"], ["class", "flex justify-center p-md", 4, "ngIf"], ["class", "table-section", 4, "ngIf"], [1, "flex", "justify-center", "p-md"], [1, "table-section"], ["class", "crm-table", 4, "ngIf", "ngIfElse"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "flex", "gap-sm"], ["class", "icon-button", 3, "click", 4, "ngIf"], [1, "icon-button", 3, "click", "title"], ["type", "text", 3, "ngModelChange", "keyup.enter", "blur", "ngModel"], [1, "icon-button", 3, "click"], ["name", "pencil"], ["name", "check"], ["name", "x"], [1, "empty-state", "p-lg"], ["name", "inbox"], [1, "text-muted", "m-0"], ["name", "users"], [1, "font-semibold", "mb-sm"], ["type", "text", "placeholder", "Es. Commerciale, Amministrazione", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "Descrizione opzionale del reparto", "rows", "2", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "empty-state p-lg", 4, "ngIf"], [1, "flex", "items-start", "justify-between", "gap-sm"], ["class", "flex flex-col gap-sm flex-1", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "gap-sm", "flex-1"], ["type", "text", "placeholder", "Nome reparto", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Descrizione", 3, "ngModelChange", "ngModel"], ["name", "eye"], ["name", "selectedManager", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "flex flex-col gap-md", 4, "ngIf"], [1, "flex", "flex-col", "gap-md"], [1, "standard-label", "mb-sm"], ["type", "radio", "name", "mode", "value", "self", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "mode", "value", "selected_users", 3, "ngModelChange", "ngModel"], ["class", "card shadow-card flex flex-col gap-sm", 4, "ngIf"], ["type", "radio", "name", "mode", "value", "roles", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "mode", "value", "department", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "mode", "value", "all", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "card", "shadow-card", "flex", "flex-col", "gap-sm"], ["class", "checkbox-label", 4, "ngFor", "ngForOf"], ["type", "button", "class", "promethea-button ghost", 3, "click", 4, "ngIf"], ["type", "checkbox", 3, "change", "value", "checked"], [1, "text-muted", "mb-md"], ["type", "checkbox", 3, "change", "checked"], [1, "info-message", "info-success"], ["name", "check-circle"], [1, "info-message", "info-error"], ["name", "alert-circle"]], template: function ImpostazioniComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
      \u0275\u0275listener("click", function ImpostazioniComponent_Template_div_click_3_listener() {
        return ctx.toggleProfilo();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
      \u0275\u0275element(6, "lucide-angular", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 10);
      \u0275\u0275text(8, "Profilo Utente");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 11);
      \u0275\u0275element(10, "lucide-angular", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, ImpostazioniComponent_div_11_Template, 88, 24, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ImpostazioniComponent_div_12_Template, 10, 3, "div", 14)(13, ImpostazioniComponent_div_13_Template, 10, 3, "div", 14)(14, ImpostazioniComponent_div_14_Template, 10, 3, "div", 14)(15, ImpostazioniComponent_div_15_Template, 10, 3, "div", 14)(16, ImpostazioniComponent_div_16_Template, 10, 3, "div", 14);
      \u0275\u0275elementStart(17, "div", 15)(18, "div", 16)(19, "div", 8);
      \u0275\u0275element(20, "lucide-angular", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h2", 10);
      \u0275\u0275text(22, "Sicurezza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "form", 18);
      \u0275\u0275listener("ngSubmit", function ImpostazioniComponent_Template_form_ngSubmit_23_listener() {
        return ctx.cambiaPassword();
      });
      \u0275\u0275elementStart(24, "div", 19)(25, "div", 20)(26, "label", 21);
      \u0275\u0275element(27, "lucide-angular", 22);
      \u0275\u0275text(28, " Password Attuale");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 24)(31, "div", 20)(32, "label", 21);
      \u0275\u0275element(33, "lucide-angular", 25);
      \u0275\u0275text(34, " Nuova Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 20)(37, "label", 21);
      \u0275\u0275element(38, "lucide-angular", 25);
      \u0275\u0275text(39, " Conferma Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 28)(42, "button", 29);
      \u0275\u0275template(43, ImpostazioniComponent_lucide_angular_43_Template, 1, 0, "lucide-angular", 30)(44, ImpostazioniComponent_lucide_angular_44_Template, 1, 0, "lucide-angular", 31);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(46, "div", 5)(47, "div", 16)(48, "div", 8);
      \u0275\u0275element(49, "lucide-angular", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h2", 10);
      \u0275\u0275text(51, "Notifiche");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 33)(53, "label", 34)(54, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.impostazioniNotifiche.emailNotifiche, $event) || (ctx.impostazioniNotifiche.emailNotifiche = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 36)(56, "strong");
      \u0275\u0275text(57, "Notifiche Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 37);
      \u0275\u0275text(59, "Ricevi notifiche via email per le tue timbrature");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "label", 34)(61, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function ImpostazioniComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.impostazioniNotifiche.riepilogoGiornaliero, $event) || (ctx.impostazioniNotifiche.riepilogoGiornaliero = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 36)(63, "strong");
      \u0275\u0275text(64, "Riepilogo Giornaliero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 37);
      \u0275\u0275text(66, "Ricevi un riepilogo giornaliero delle tue ore");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(67, ImpostazioniComponent_label_67_Template, 7, 1, "label", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 28)(69, "button", 39);
      \u0275\u0275listener("click", function ImpostazioniComponent_Template_button_click_69_listener() {
        return ctx.salvaNotifiche();
      });
      \u0275\u0275template(70, ImpostazioniComponent_lucide_angular_70_Template, 1, 0, "lucide-angular", 30)(71, ImpostazioniComponent_lucide_angular_71_Template, 1, 0, "lucide-angular", 40);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(73, ImpostazioniComponent_div_73_Template, 3, 1, "div", 41)(74, ImpostazioniComponent_div_74_Template, 3, 1, "div", 42);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275attribute("aria-expanded", ctx.showProfilo);
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.showProfilo ? "chevron-up" : "chevron-down");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showProfilo);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRole("admin"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRole("admin") || ctx.hasRole("manager") && ctx.canManageJobTitles());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRole("admin") || ctx.hasRole("manager") && ctx.canManageDepartments());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRole("admin"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRole("admin"));
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.sicurezzaForm);
      \u0275\u0275advance(19);
      \u0275\u0275property("disabled", ctx.sicurezzaForm.invalid || ctx.salvataggioPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.salvataggioPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.salvataggioPassword);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.salvataggioPassword ? "Salvando\u2026" : "Cambia Password", " ");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.impostazioniNotifiche.emailNotifiche);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.impostazioniNotifiche.riepilogoGiornaliero);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.hasRole("admin"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.salvataggioNotifiche);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.salvataggioNotifiche);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.salvataggioNotifiche);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.salvataggioNotifiche ? "Salvando\u2026" : "Salva Notifiche", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.messaggioSuccesso);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.messaggioErrore);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.settings-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.radio-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  cursor: pointer;\n}\n.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .chip[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: #FAFAFC;\n  border-color: transparent;\n}\nlucide-angular[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: var(--fs-sm);\n  height: var(--fs-sm);\n  flex-shrink: 0;\n}\n.icon-button[_ngcontent-%COMP%]   lucide-angular[_ngcontent-%COMP%], \n.header-icon[_ngcontent-%COMP%]   lucide-angular[_ngcontent-%COMP%] {\n  width: var(--fs-md);\n  height: var(--fs-md);\n}\n.section-header[_ngcontent-%COMP%]   lucide-angular[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n}\n.day-row[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--text-muted);\n  padding: var(--gap-md) 0;\n  margin: var(--gap-sm) 0;\n}\n/*# sourceMappingURL=impostazioni.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImpostazioniComponent, [{
    type: Component,
    args: [{ selector: "app-impostazioni", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <div class="p-lg flex flex-col gap-lg">\r
\r
    <!-- \u2591\u2591 1 \u2013 PROFILO UTENTE \u2591\u2591 -->\r
    <div class="card">\r
      <div class="flex items-center justify-between gap-sm settings-toggle" (click)="toggleProfilo()">\r
        <div class="flex items-center gap-sm">\r
          <div class="icon-lucide">\r
            <lucide-angular name="user"></lucide-angular>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Profilo Utente</h2>\r
        </div>\r
        <button type="button" class="icon-button" [attr.aria-expanded]="showProfilo">\r
          <lucide-angular [name]="showProfilo ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
        </button>\r
      </div>\r
\r
      <div *ngIf="showProfilo" class="mt-md">\r
        <form [formGroup]="profiloForm" (ngSubmit)="salvaProfilo()" class="flex flex-col gap-sm">\r
          <div class="form-card">\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="id-card"></lucide-angular> Nome *\r
                </label>\r
                <input type="text" formControlName="first_name">\r
                <div class="field-error" *ngIf="profiloForm.get('first_name')?.invalid && profiloForm.get('first_name')?.touched">Nome obbligatorio</div>\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="id-card"></lucide-angular> Cognome *\r
                </label>\r
                <input type="text" formControlName="last_name" [disabled]="!isAdmin()" [class.disabled-field]="!isAdmin()">\r
                <div class="field-error" *ngIf="profiloForm.get('last_name')?.invalid && profiloForm.get('last_name')?.touched">Cognome obbligatorio</div>\r
              </div>\r
            </div>\r
\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="mail"></lucide-angular> Email *\r
                </label>\r
                <input type="email" formControlName="email" [disabled]="true" [class.disabled-field]="!isAdmin()" title="Email non modificabile">\r
                <div class="field-error" *ngIf="profiloForm.get('email')?.invalid && profiloForm.get('email')?.touched">Email obbligatoria e valida</div>\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="phone"></lucide-angular> Telefono\r
                </label>\r
                <input type="tel" formControlName="phone">\r
              </div>\r
            </div>\r
\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="cake"></lucide-angular> Data di Nascita\r
                </label>\r
                <input type="date" formControlName="birth_date" [disabled]="!isAdmin()">\r
              </div>\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="map-pin"></lucide-angular> Luogo di Nascita\r
                </label>\r
                <input type="text" formControlName="birth_place" [disabled]="!isAdmin()">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-angular name="calendar-check"></lucide-angular> Data di Assunzione\r
              </label>\r
              <input type="date" formControlName="hire_date" [disabled]="!isAdmin()">\r
              <div class="info-message mt-sm" *ngIf="!isAdmin()">\r
                <lucide-angular name="info"></lucide-angular>\r
                <span class="text-mini">Modificabile solo dall'amministratore</span>\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-angular name="fingerprint"></lucide-angular> Codice Fiscale\r
              </label>\r
              <input type="text" formControlName="fiscal_code" [disabled]="!isAdmin()">\r
            </div>\r
\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="briefcase"></lucide-angular> Job Title\r
                </label>\r
                <input type="text" formControlName="job_title" [disabled]="!isAdmin()">\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="clock"></lucide-angular> Ore Mensili\r
                </label>\r
                <input type="number" min="0" formControlName="monthly_hours" [disabled]="!isAdmin()">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="checkbox-label">\r
                <input type="checkbox" formControlName="full_time" [disabled]="!isAdmin()">\r
                <div class="checkbox-content">\r
                  <strong>Full time</strong>\r
                </div>\r
              </label>\r
            </div>\r
\r
            <!-- timezone nascosto -->\r
            <div class="form-group" style="display: none;">\r
              <label class="standard-label">\r
                <lucide-angular name="globe"></lucide-angular> Timezone\r
              </label>\r
              <input type="text" formControlName="timezone" placeholder="Europe/Rome">\r
            </div>\r
\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="shield"></lucide-angular> Ruolo\r
                </label>\r
                <input type="text" [value]="currentUser?.role" disabled>\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-angular name="building-2"></lucide-angular> Azienda\r
                </label>\r
                <input type="text" [value]="currentCompany?.name || 'N/A'" disabled>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="flex justify-end pt-lg">\r
            <button type="submit" [disabled]="profiloForm.invalid || salvataggioProfilo" class="promethea-button">\r
              <lucide-angular name="refresh-cw" class="animate-spin" *ngIf="salvataggioProfilo"></lucide-angular>\r
              <lucide-angular name="save" *ngIf="!salvataggioProfilo"></lucide-angular>\r
              {{ salvataggioProfilo ? 'Salvando\u2026' : 'Salva Profilo' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
\r
    <!-- \u2591\u2591 2 \u2013 DATI AZIENDA (solo admin) \u2591\u2591 -->\r
    <div class="card" *ngIf="hasRole('admin')">\r
      <div class="flex items-center justify-between gap-sm settings-toggle" (click)="toggleAzienda()">\r
        <div class="flex items-center gap-sm">\r
          <div class=icon-lucide>\r
            <lucide-angular name="building"></lucide-angular>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Dati Azienda</h2>\r
        </div>\r
        <button type="button" class="icon-button" [attr.aria-expanded]="showAzienda">\r
          <lucide-angular [name]="showAzienda ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
        </button>\r
      </div>\r
\r
      <div *ngIf="showAzienda" class="mt-md">\r
        <form [formGroup]="aziendaForm" (ngSubmit)="salvaAzienda()" class="flex flex-col gap-lg">\r
          <div class="grid-form">\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="building"></lucide-angular> Nome Azienda *</label>\r
              <input type="text" formControlName="name">\r
              <div class="field-error" *ngIf="aziendaForm.get('name')?.invalid && aziendaForm.get('name')?.touched">Nome azienda obbligatorio</div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="receipt"></lucide-angular> Partita IVA *</label>\r
              <input type="text" formControlName="vat">\r
              <div class="field-error" *ngIf="aziendaForm.get('vat')?.invalid && aziendaForm.get('vat')?.touched">Partita IVA obbligatoria</div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="map-pin"></lucide-angular> Indirizzo</label>\r
              <input type="text" formControlName="address">\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="landmark"></lucide-angular> Citt\xE0</label>\r
              <input type="text" formControlName="city">\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="map"></lucide-angular> Provincia</label>\r
              <input type="text" formControlName="province">\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="globe"></lucide-angular> Sito Web</label>\r
              <input type="url" formControlName="website">\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="phone"></lucide-angular> Telefono Aziendale</label>\r
              <input type="tel" formControlName="numero_telefono">\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label"><lucide-angular name="mail"></lucide-angular> Email Aziendale</label>\r
              <input type="email" formControlName="email" >\r
            </div>\r
\r
            <!-- Tipologia Timbratura -->\r
            <div class="form-group" style="grid-column: 1 / -1;">\r
              <label class="standard-label"><lucide-angular name="sliders"></lucide-angular> Tipologia Timbratura</label>\r
              <div class="flex flex-wrap gap-sm mt-sm">\r
                <label class="radio-option">\r
                  <input type="radio" formControlName="timbratura_type" value="libera">\r
                  <span class="chip">Libera</span>\r
                </label>\r
                <label class="radio-option">\r
                  <input type="radio" formControlName="timbratura_type" value="punti">\r
                  <span class="chip">Punti Timbratura</span>\r
                </label>\r
              </div>\r
            </div>\r
\r
          </div>\r
\r
          <!-- Punti di Timbratura -->\r
          <div *ngIf="aziendaForm.get('timbratura_type')?.value === 'punti'" class="card shadow-card">\r
            <div class="flex items-center gap-sm mb-md">\r
              <div class=icon-lucide>\r
                <lucide-angular name="map-pin"></lucide-angular>\r
              </div>\r
              <h3 class="font-bold text-md m-0">Punti di Timbratura</h3>\r
            </div>\r
\r
            <div class="flex flex-col gap-sm">\r
              <div *ngFor="let p of punchPoints; let i = index" class="card shadow-card">\r
                <div class="flex items-center justify-between gap-sm flex-wrap">\r
                  <div class="flex items-center gap-sm">\r
                    <div class="avatartondo">\r
                      {{ (p.name || p.address || ('Punto ' + (i+1))).charAt(0) || (i+1) }}\r
                    </div>\r
                    <div class="flex flex-col gap-sm">\r
                      <strong>{{ p.name || p.address || ('Punto ' + (i+1)) }}</strong>\r
                      <div class="flex items-center gap-sm flex-wrap">\r
                        <span class="text-muted text-mini">{{ getStreet(p) }} {{ getCivic(p) }}</span>\r
                        <span class="text-muted text-mini">{{ getCityProvince(p) || '\u2014' }}</span>\r
                        <span *ngIf="p?.lat && p?.lng" class="text-muted text-mini">{{ p.lat | number:'1.5-5' }}, {{ p.lng | number:'1.5-5' }}</span>\r
                      </div>\r
                      <span class="chip-mini">raggio: {{ p.radius_m || 50 }} m</span>\r
                    </div>\r
                  </div>\r
                  <button type="button" class=icon-lucide (click)="removePunchPoint(i)" title="Rimuovi">\r
                    <lucide-angular name="trash-2"></lucide-angular>\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="flex gap-sm mt-md">\r
              <button type="button" class="promethea-button" (click)="toggleAddPointForm()" [disabled]="salvataggioAzienda">\r
                <lucide-angular [name]="showAddPointForm ? 'x' : 'plus'"></lucide-angular>\r
                {{ showAddPointForm ? 'Annulla' : 'Aggiungi Punto' }}\r
              </button>\r
            </div>\r
\r
            <div *ngIf="showAddPointForm" class="card shadow-card mt-md">\r
              <div class="grid-form">\r
                <div class="form-group">\r
                  <label class="standard-label">Nome Punto</label>\r
                  <input type="text" placeholder="Es. Sede Principale" [(ngModel)]="newPoint.name" [ngModelOptions]="{standalone:true}">\r
                </div>\r
                <div class="form-group">\r
                  <label class="standard-label">Via / Indirizzo</label>\r
                  <input type="text" placeholder="Es. Via Roma" [(ngModel)]="newPoint.address" [ngModelOptions]="{standalone:true}">\r
                </div>\r
                <div class="form-group">\r
                  <label class="standard-label">Civico</label>\r
                  <input type="text" placeholder="Es. 12/A" [(ngModel)]="newPoint.civic_number" [ngModelOptions]="{standalone:true}">\r
                </div>\r
                <div class="form-group">\r
                  <label class="standard-label">Citt\xE0</label>\r
                  <input type="text" placeholder="Citt\xE0" [(ngModel)]="newPoint.city" [ngModelOptions]="{standalone:true}">\r
                </div>\r
                <div class="form-group">\r
                  <label class="standard-label">Provincia</label>\r
                  <input type="text" placeholder="Es. RM" [(ngModel)]="newPoint.province" [ngModelOptions]="{standalone:true}">\r
                </div>\r
                <div class="form-group">\r
                  <label class="standard-label">Raggio (m)</label>\r
                  <input type="number" placeholder="50" [(ngModel)]="newPoint.radius_m" [ngModelOptions]="{standalone:true}">\r
                </div>\r
              </div>\r
              <div class="flex justify-end mt-md">\r
                <button type="button" class="promethea-button" (click)="addPunchPoint()" [disabled]="!currentCompany?.id || salvataggioAzienda">\r
                  <lucide-angular name="save"></lucide-angular>\r
                  Salva Punto\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Giorni di Chiusura -->\r
          <div class="card shadow-card">\r
            <div class="flex items-center justify-between gap-sm settings-toggle" (click)="toggleClosedDays()">\r
              <div class="flex items-center gap-sm">\r
                <div class=icon-lucide>\r
                  <lucide-angular name="calendar-x"></lucide-angular>\r
                </div>\r
                <h3 class="font-bold text-md m-0">Giorni di Chiusura</h3>\r
              </div>\r
              <button type="button" class="icon-button" [attr.aria-expanded]="showClosedDays">\r
                <lucide-angular [name]="showClosedDays ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
              </button>\r
            </div>\r
\r
            <div *ngIf="showClosedDays" class="mt-md flex flex-col gap-sm">\r
              <div *ngFor="let cd of giorniChiusura; let i = index" class="card shadow-card">\r
                <div class="flex items-center justify-between gap-sm">\r
                  <div>\r
                    <strong>{{ formatClosedDay(cd) }}</strong>\r
                    <p class="text-muted text-mini m-0">{{ cd.label || (cd.type === 'range' ? 'Intervallo' : 'Giorno singolo') }}</p>\r
                  </div>\r
                  <button type="button" class=icon-lucide (click)="rimuoviGiornoChiusura(i)">\r
                    <lucide-angular name="trash-2"></lucide-angular>\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- Aggiungi giorno singolo -->\r
              <div class="card shadow-card">\r
                <p class="font-semibold text-mini mb-sm">Aggiungi giorno singolo</p>\r
                <div class="form-row">\r
                  <div class="form-group">\r
                    <input type="date" [(ngModel)]="newDate" [ngModelOptions]="{standalone: true}">\r
                  </div>\r
                  <div class="form-group">\r
                    <input type="text" placeholder="Nome festivit\xE0 (es. Chiusura estiva)" [(ngModel)]="newDateLabel" [ngModelOptions]="{standalone: true}">\r
                  </div>\r
                </div>\r
                <div class="flex justify-end mt-sm">\r
                  <button type="button" class="promethea-button outline" (click)="aggiungiGiornoSingolo()">\r
                    <lucide-angular name="plus"></lucide-angular>\r
                    Aggiungi Giorno\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- Aggiungi intervallo -->\r
              <div class="card shadow-card">\r
                <p class="font-semibold text-mini mb-sm">Aggiungi intervallo</p>\r
                <div class="form-row">\r
                  <div class="form-group">\r
                    <input type="date" [(ngModel)]="rangeStart" [ngModelOptions]="{standalone: true}">\r
                  </div>\r
                  <div class="form-group">\r
                    <input type="date" [(ngModel)]="rangeEnd" [ngModelOptions]="{standalone: true}">\r
                  </div>\r
                </div>\r
                <div class="flex justify-end mt-sm">\r
                  <button type="button" class="promethea-button outline" (click)="aggiungiIntervallo()">\r
                    <lucide-angular name="plus"></lucide-angular>\r
                    Aggiungi Intervallo\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <div class="flex justify-end">\r
                <button type="button" class="promethea-button ghost" (click)="ripristinaFestivita()">\r
                  <lucide-angular name="rotate-ccw"></lucide-angular>\r
                  Ripristina Festivit\xE0\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="flex justify-end">\r
            <button type="submit" [disabled]="aziendaForm.invalid || salvataggioAzienda" class="promethea-button">\r
              <lucide-angular name="refresh-cw" class="animate-spin" *ngIf="salvataggioAzienda"></lucide-angular>\r
              <lucide-angular name="save" *ngIf="!salvataggioAzienda"></lucide-angular>\r
              {{ salvataggioAzienda ? 'Salvando\u2026' : 'Salva Azienda' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
\r
    <!-- \u2591\u2591 3 \u2013 MANSIONI \u2591\u2591 -->\r
    <div class="card" *ngIf="hasRole('admin') || (hasRole('manager') && canManageJobTitles())">\r
      <div class="flex items-center justify-between gap-sm settings-toggle" (click)="toggleMansioni()">\r
        <div class="flex items-center gap-sm">\r
          <div class=icon-lucide>\r
            <lucide-angular name="briefcase"></lucide-angular>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Mansioni</h2>\r
        </div>\r
        <button type="button" class="icon-button" [attr.aria-expanded]="showMansioni">\r
          <lucide-angular [name]="showMansioni ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
        </button>\r
      </div>\r
\r
      <div *ngIf="showMansioni" class="mt-md flex flex-col gap-md">\r
        <!-- Form aggiunta -->\r
        <div class="flex flex-wrap gap-sm items-center">\r
          <div class="form-group" style="flex: 2 1 200px;">\r
            <input type="text" placeholder="Nome mansione" [(ngModel)]="newJobTitleName">\r
          </div>\r
          <div class="form-group" style="flex: 3 1 280px;">\r
            <input type="text" placeholder="Descrizione (opzionale)" [(ngModel)]="newJobTitleDescription">\r
          </div>\r
            <button class="promethea-button" type="button" (click)="createJobTitle()">\r
            <lucide-angular name="plus"></lucide-angular>\r
            Aggiungi\r
            </button>\r
        </div>\r
\r
        <!-- Loading -->\r
        <div *ngIf="isLoadingJobTitles" class="flex justify-center p-md">\r
          <lucide-angular name="refresh-cw" class="animate-spin"></lucide-angular>\r
        </div>\r
\r
        <!-- Tabella -->\r
        <div *ngIf="!isLoadingJobTitles" class="table-section">\r
          <table class="crm-table" *ngIf="jobTitles.length > 0; else noMansioni">\r
            <thead>\r
              <tr>\r
                <th>Nome</th>\r
                <th>Descrizione</th>\r
                <th>Stato</th>\r
                <th>Azioni</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let jt of jobTitles">\r
                <td>\r
                <ng-container *ngIf="editingJobTitle && editingJobTitle.id === jt.id; else showName">\r
                  <input type="text" [(ngModel)]="editingJobTitle.name" (keyup.enter)="saveEditJobTitle()" (blur)="cancelEditJobTitle()">\r
                </ng-container>\r
                <ng-template #showName>{{ jt.name }}</ng-template>\r
              </td>\r
                <td>\r
                <ng-container *ngIf="editingJobTitle && editingJobTitle.id === jt.id; else showDesc">\r
                <input type="text" [(ngModel)]="editingJobTitle!.description" (keyup.enter)="saveEditJobTitle()" (blur)="cancelEditJobTitle()">\r
                </ng-container>\r
                  <ng-template #showDesc>{{ jt.description || '\u2014' }}</ng-template>\r
                </td>\r
                <td>\r
                  <span class="chip" [class.active]="jt.is_active" [class.warning]="!jt.is_active">\r
                    {{ jt.is_active ? 'Attiva' : 'Disattiva' }}\r
                  </span>\r
                </td>\r
                <td>\r
                  <div class="flex gap-sm">\r
                    <button class=icon-button *ngIf="editingJobTitle?.id !== jt.id" (click)="beginEditJobTitle(jt)">\r
                      <lucide-angular name="pencil"></lucide-angular>\r
                    </button>\r
                    <button class=icon-button *ngIf="editingJobTitle?.id === jt.id" (click)="saveEditJobTitle()">\r
                      <lucide-angular name="check"></lucide-angular>\r
                    </button>\r
                    <button class=icon-button *ngIf="editingJobTitle?.id === jt.id" (click)="cancelEditJobTitle()">\r
                      <lucide-angular name="x"></lucide-angular>\r
                    </button>\r
                    <button class=icon-button [title]="jt.is_active ? 'Disattiva' : 'Riattiva'" (click)="toggleJobTitleActive(jt); $event.stopPropagation()">\r
                      <lucide-angular [name]="jt.is_active ? 'toggle-right' : 'toggle-left'"></lucide-angular>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
          <ng-template #noMansioni>\r
            <div class="empty-state p-lg">\r
              <lucide-angular name="inbox"></lucide-angular>\r
              <p class="text-muted m-0">Aggiungi una nuova mansione per iniziare ad assegnarla ai dipendenti.</p>\r
            </div>\r
          </ng-template>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2591\u2591 4 \u2013 GESTIONE REPARTI \u2591\u2591 -->\r
    <div class="card" *ngIf="hasRole('admin') || (hasRole('manager') && canManageDepartments())">\r
      <div class="flex items-center justify-between gap-sm settings-toggle" (click)="toggleGestioneReparti()">\r
        <div class="flex items-center gap-sm">\r
          <div class=icon-lucide>\r
            <lucide-angular name="users"></lucide-angular>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Gestione Reparti</h2>\r
        </div>\r
        <button type="button" class="icon-button" [attr.aria-expanded]="showGestioneReparti">\r
          <lucide-angular [name]="showGestioneReparti ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
        </button>\r
      </div>\r
\r
      <div *ngIf="showGestioneReparti" class="mt-md flex flex-col gap-md">\r
\r
        <!-- Aggiungi reparto -->\r
        <div class="card shadow-card">\r
          <p class="font-semibold mb-sm">Aggiungi Nuovo Reparto</p>\r
          <div class="grid-form">\r
            <div class="form-group">\r
              <label class="standard-label">Nome Reparto *</label>\r
              <input type="text" [(ngModel)]="newDepartmentName" [ngModelOptions]="{standalone:true}" placeholder="Es. Commerciale, Amministrazione">\r
            </div>\r
            <div class="form-group">\r
              <label class="standard-label">Descrizione</label>\r
              <textarea [(ngModel)]="newDepartmentDescription" [ngModelOptions]="{standalone:true}" placeholder="Descrizione opzionale del reparto" rows="2"></textarea>\r
            </div>\r
          </div>\r
          <div class="flex justify-end mt-sm">\r
            <button type="button" class="promethea-button"\r
                    (click)="aggiungiReparto()"\r
                    [disabled]="!newDepartmentName || !newDepartmentName.trim() || salvataggioAzienda">\r
              <lucide-angular name="plus"></lucide-angular>\r
              Aggiungi Reparto\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Lista reparti -->\r
        <div *ngIf="departments.length === 0" class="empty-state p-lg">\r
          <lucide-angular name="inbox"></lucide-angular>\r
          <p class="text-muted m-0">Nessun reparto creato</p>\r
        </div>\r
\r
        <div *ngFor="let dept of departments" class="card shadow-card">\r
          <div class="flex items-start justify-between gap-sm">\r
\r
            <!-- Vista normale -->\r
            <div *ngIf="editingDepartment?.id !== dept.id" class="flex flex-col gap-sm flex-1">\r
              <div class="flex items-center gap-sm flex-wrap">\r
                <strong>{{ dept.name }}</strong>\r
              </div>\r
              <p class="text-muted text-mini m-0">{{ dept.description || 'Nessuna descrizione' }}</p>\r
            </div>\r
\r
            <!-- Form modifica -->\r
            <div *ngIf="editingDepartment?.id === dept.id" class="flex flex-col gap-sm flex-1">\r
              <input type="text"\r
                    [ngModel]="editingDepartment?.name || ''"\r
                    (ngModelChange)="editingDepartment && (editingDepartment.name = $event)"\r
                    placeholder="Nome reparto">\r
              <textarea\r
                    [ngModel]="editingDepartment?.description || ''"\r
                    (ngModelChange)="editingDepartment && (editingDepartment.description = $event)"\r
                    rows="2"\r
                    placeholder="Descrizione"></textarea>\r
            </div>\r
\r
            <!-- Azioni -->\r
            <div class="flex gap-sm">\r
              <ng-container *ngIf="editingDepartment?.id !== dept.id">\r
                <button type="button" class=icon-lucide (click)="avviaModificaReparto(dept)">\r
                  <lucide-angular name="pencil"></lucide-angular>\r
                </button>\r
                <button type="button" class=icon-lucide (click)="eliminaReparto(dept)">\r
                <lucide-angular name="trash-2"></lucide-angular>\r
                </button>\r
              </ng-container>\r
              <ng-container *ngIf="editingDepartment?.id === dept.id">\r
                <button type="button" class=icon-lucide (click)="salvaModificaReparto()">\r
                  <lucide-angular name="check"></lucide-angular>\r
                </button>\r
                <button type="button" class=icon-lucide (click)="annullaModificaReparto()">\r
                  <lucide-angular name="x"></lucide-angular>\r
                </button>\r
              </ng-container>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2591\u2591 5 \u2013 VISIBILIT\xC0 RESPONSABILI \u2591\u2591 -->\r
    <div class="card" *ngIf="hasRole('admin')">\r
      <div class="flex items-center justify-between gap-sm settings-toggle" (click)="toggleVisibilitaResponsabili()">\r
        <div class="flex items-center gap-sm">\r
          <div class=icon-lucide>\r
            <lucide-angular name="eye"></lucide-angular>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Visibilit\xE0 Responsabili</h2>\r
        </div>\r
        <button type="button" class="icon-button" [attr.aria-expanded]="showVisibilitaResponsabili">\r
          <lucide-angular [name]="showVisibilitaResponsabili ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
        </button>\r
      </div>\r
\r
      <div *ngIf="showVisibilitaResponsabili" class="mt-md flex flex-col gap-md">\r
        <div class="form-group">\r
          <label class="standard-label">Seleziona Responsabile</label>\r
          <select [(ngModel)]="selectedManagerId" name="selectedManager" (change)="onManagerSelected()">\r
            <option [ngValue]="null">\u2014 Seleziona \u2014</option>\r
            <option *ngFor="let u of managerUsers" [ngValue]="u.id">{{ u.first_name }} {{ u.last_name }} ({{ u.email }})</option>\r
          </select>\r
        </div>\r
\r
        <div *ngIf="selectedManagerId" class="flex flex-col gap-md">\r
          <div class="form-group">\r
            <label class="standard-label mb-sm">Modalit\xE0 di visibilit\xE0</label>\r
            <div class="flex flex-col gap-sm">\r
\r
              <label class="checkbox-label">\r
                <input type="radio" name="mode" value="self" [(ngModel)]="managerConfig.mode">\r
                <div class="checkbox-content"><strong>Solo proprie timbrature</strong></div>\r
              </label>\r
\r
              <label class="checkbox-label">\r
                <input type="radio" name="mode" value="selected_users" [(ngModel)]="managerConfig.mode">\r
                <div class="checkbox-content"><strong>Lista utenti selezionati</strong></div>\r
              </label>\r
\r
              <label class="checkbox-label">\r
                <input type="checkbox" [(ngModel)]="managerConfig.can_manage_shifts">\r
                <div class="checkbox-content">\r
                  <strong>Gestione turni</strong>\r
                  <span class="text-muted text-mini">Pu\xF2 creare, modificare ed eliminare turni</span>\r
                </div>\r
              </label>\r
              <div *ngIf="managerConfig.mode === 'selected_users'" class="card shadow-card flex flex-col gap-sm">\r
                <label *ngFor="let u of (showAllEmployees ? companyEmployees : (companyEmployees | slice:0:10))" class="checkbox-label">\r
                  <input type="checkbox" [value]="u.id" (change)="toggleManagerUser(u.id, $event)" [checked]="managerConfig.user_ids.includes(u.id)">\r
                  <span>{{ u.first_name }} {{ u.last_name }}</span>\r
                </label>\r
                <button *ngIf="companyEmployees.length > 10" type="button" class="promethea-button ghost" (click)="toggleShowEmployees()">\r
                  {{ showAllEmployees ? 'Mostra meno' : 'Mostra tutti (' + companyEmployees.length + ')' }}\r
                </button>\r
              </div>\r
\r
              <label class="checkbox-label">\r
                <input type="radio" name="mode" value="roles" [(ngModel)]="managerConfig.mode">\r
                <div class="checkbox-content"><strong>Per ruolo</strong></div>\r
              </label>\r
              <div *ngIf="managerConfig.mode === 'roles'" class="card shadow-card flex flex-col gap-sm">\r
                <label *ngFor="let r of availableRoles" class="checkbox-label">\r
                  <input type="checkbox" [value]="r" (change)="toggleManagerRole(r, $event)" [checked]="managerConfig.roles.includes(r)">\r
                  <span>{{ r }}</span>\r
                </label>\r
              </div>\r
\r
              <label class="checkbox-label">\r
                <input type="radio" name="mode" value="department" [(ngModel)]="managerConfig.mode">\r
                <div class="checkbox-content"><strong>Per reparto</strong></div>\r
              </label>\r
              <div *ngIf="managerConfig.mode === 'department'" class="card shadow-card flex flex-col gap-sm">\r
                <label *ngFor="let dept of departments" class="checkbox-label">\r
                  <input type="checkbox" [value]="dept.id" (change)="toggleManagerDepartment(dept.id, $event)" [checked]="managerConfig.department_ids?.includes(dept.id)">\r
                  <span>{{ dept.name }}</span>\r
                </label>\r
              </div>\r
\r
              <label class="checkbox-label">\r
                <input type="radio" name="mode" value="all" [(ngModel)]="managerConfig.mode" (ngModelChange)="managerConfig.can_view_all_employees = $event === 'all'">\r
                <div class="checkbox-content"><strong>Pu\xF2 vedere tutti i dipendenti dell'azienda</strong></div>\r
              </label>\r
\r
            </div>\r
          </div>\r
\r
          <!-- Permessi aggiuntivi -->\r
          <div class="card shadow-card">\r
            <p class="font-semibold mb-sm">Permessi Responsabile</p>\r
            <div class="flex flex-col gap-sm">\r
              <label class="checkbox-label">\r
                <input type="checkbox" [(ngModel)]="managerConfig.can_manage_departments">\r
                <div class="checkbox-content">\r
                  <strong>Gestione reparti</strong>\r
                  <span class="text-muted text-mini">Pu\xF2 creare, modificare ed eliminare reparti</span>\r
                </div>\r
              </label>\r
              <label class="checkbox-label">\r
                <input type="checkbox" [(ngModel)]="managerConfig.can_manage_job_titles">\r
                <div class="checkbox-content">\r
                  <strong>Gestione mansioni</strong>\r
                  <span class="text-muted text-mini">Pu\xF2 aggiungere, modificare e disattivare mansioni</span>\r
                </div>\r
              </label>\r
              <label class="checkbox-label">\r
                <input type="checkbox" [(ngModel)]="managerConfig.can_view_reports" [ngModelOptions]="{standalone:true}">\r
                <div class="checkbox-content">\r
                  <strong>Report aziendali</strong>\r
                  <span class="text-muted text-mini">Pu\xF2 visualizzare i report aziendali</span>\r
                </div>\r
              </label>\r
              <label class="checkbox-label">\r
                <input type="checkbox" [(ngModel)]="managerConfig.can_edit_employees" [ngModelOptions]="{standalone:true}">\r
                <div class="checkbox-content">\r
                  <strong>Modifica dipendenti</strong>\r
                  <span class="text-muted text-mini">Pu\xF2 modificare i dati anagrafici dei dipendenti</span>\r
                </div>\r
              </label>\r
              <label class="checkbox-label">\r
                <input type="checkbox" [(ngModel)]="managerConfig.can_modify_timbrature" [ngModelOptions]="{standalone:true}">\r
                <div class="checkbox-content">\r
                  <strong>Modifica timbrature</strong>\r
                  <span class="text-muted text-mini">Pu\xF2 approvare o applicare richieste di modifica</span>\r
                </div>\r
              </label>\r
            </div>\r
          </div>\r
\r
          <div class="flex justify-end">\r
            <button type="button" class="promethea-button" (click)="salvaManagerVisibility()" [disabled]="salvataggioAzienda">\r
              <lucide-angular name="save"></lucide-angular>\r
              Salva Visibilit\xE0\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2591\u2591 5B \u2013 PERMESSI DIPENDENTI (solo admin) \u2591\u2591 -->\r
    <div class="card" *ngIf="hasRole('admin')">\r
      <div class="flex items-center justify-between gap-sm settings-toggle" (click)="togglePermessiDipendenti()">\r
        <div class="flex items-center gap-sm">\r
          <div class="icon-lucide">\r
            <lucide-angular name="users"></lucide-angular>\r
          </div>\r
          <h2 class="font-bold text-md m-0">Permessi Dipendenti</h2>\r
        </div>\r
        <button type="button" class="icon-button" [attr.aria-expanded]="showPermessiDipendenti">\r
          <lucide-angular [name]="showPermessiDipendenti ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
        </button>\r
      </div>\r
\r
      <div *ngIf="showPermessiDipendenti" class="mt-md">\r
        <p class="text-muted mb-md">Abilita i dipendenti a richiedere turni e creare turni personalizzati.</p>\r
        <div class="table-section">\r
          <table class="crm-table">\r
            <thead>\r
              <tr>\r
                <th>Dipendente</th>\r
                <th>Richiedi turni</th>\r
                <th>Crea turni personalizzati</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let emp of employeePermissions">\r
                <td>{{ emp.first_name }} {{ emp.last_name }}</td>\r
                <td>\r
                  <label class="checkbox-label">\r
                    <input type="checkbox" \r
                          [checked]="editingPermissions[emp.id].can_request_shifts"\r
                          (change)="updateEmployeePermissionFromEvent(emp.id, 'can_request_shifts', $event)">\r
                  </label>\r
                </td>\r
                <td>\r
                  <label class="checkbox-label">\r
                    <input type="checkbox" \r
                          [checked]="editingPermissions[emp.id].can_create_custom_shifts"\r
                          (change)="updateEmployeePermissionFromEvent(emp.id, 'can_create_custom_shifts', $event)">\r
                  </label>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2591\u2591 6 \u2013 SICUREZZA \u2591\u2591 -->\r
    <div class="card" style="display:none">\r
      <div class="flex items-center gap-sm mb-md">\r
        <div class=icon-lucide>\r
          <lucide-angular name="shield"></lucide-angular>\r
        </div>\r
        <h2 class="font-bold text-md m-0">Sicurezza</h2>\r
      </div>\r
\r
      <form [formGroup]="sicurezzaForm" (ngSubmit)="cambiaPassword()" class="flex flex-col gap-sm">\r
        <div class="form-card">\r
          <div class="form-group">\r
            <label class="standard-label"><lucide-angular name="lock"></lucide-angular> Password Attuale</label>\r
            <input type="password" formControlName="currentPassword" autocomplete="current-password">\r
          </div>\r
          <div class="form-row mt-sm">\r
          <div class="form-group">\r
            <label class="standard-label"><lucide-angular name="lock-keyhole"></lucide-angular> Nuova Password</label>\r
            <input type="password" formControlName="newPassword" autocomplete="new-password">\r
          </div>\r
          <div class="form-group">\r
            <label class="standard-label"><lucide-angular name="lock-keyhole"></lucide-angular> Conferma Password</label>\r
            <input type="password" formControlName="confirmPassword" autocomplete="new-password">\r
          </div>\r
          </div>\r
          <div class="flex justify-end pt-lg">\r
            <button type="submit" [disabled]="sicurezzaForm.invalid || salvataggioPassword" class="promethea-button">\r
              <lucide-angular name="refresh-cw" class="animate-spin" *ngIf="salvataggioPassword"></lucide-angular>\r
              <lucide-angular name="lock" *ngIf="!salvataggioPassword"></lucide-angular>\r
              {{ salvataggioPassword ? 'Salvando\u2026' : 'Cambia Password' }}\r
            </button>\r
          </div>\r
        </div>\r
\r
      </form>\r
    </div>\r
\r
    <!-- \u2591\u2591 7 \u2013 NOTIFICHE \u2591\u2591 -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <div class=icon-lucide>\r
          <lucide-angular name="bell"></lucide-angular>\r
        </div>\r
        <h2 class="font-bold text-md m-0">Notifiche</h2>\r
      </div>\r
\r
      <div class="grid-cards">\r
        <label class="checkbox-label">\r
          <input type="checkbox" [(ngModel)]="impostazioniNotifiche.emailNotifiche">\r
          <div class="checkbox-content">\r
            <strong>Notifiche Email</strong>\r
            <span class="text-muted text-mini">Ricevi notifiche via email per le tue timbrature</span>\r
          </div>\r
        </label>\r
        <label class="checkbox-label">\r
          <input type="checkbox" [(ngModel)]="impostazioniNotifiche.riepilogoGiornaliero">\r
          <div class="checkbox-content">\r
            <strong>Riepilogo Giornaliero</strong>\r
            <span class="text-muted text-mini">Ricevi un riepilogo giornaliero delle tue ore</span>\r
          </div>\r
        </label>\r
        <label class="checkbox-label" *ngIf="hasRole('admin')">\r
          <input type="checkbox" [(ngModel)]="impostazioniNotifiche.notificheAmministratore">\r
          <div class="checkbox-content">\r
            <strong>Notifiche Amministratore</strong>\r
            <span class="text-muted text-mini">Ricevi notifiche per le attivit\xE0 aziendali</span>\r
          </div>\r
        </label>\r
      </div>\r
\r
      <div class="flex justify-end pt-lg">\r
        <button type="button" (click)="salvaNotifiche()" [disabled]="salvataggioNotifiche" class="promethea-button">\r
          <lucide-angular name="refresh-cw" class="animate-spin" *ngIf="salvataggioNotifiche"></lucide-angular>\r
          <lucide-angular name="save" *ngIf="!salvataggioNotifiche"></lucide-angular>\r
          {{ salvataggioNotifiche ? 'Salvando\u2026' : 'Salva Notifiche' }}\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- \u2591\u2591 STATUS MESSAGES \u2591\u2591 -->\r
    <div *ngIf="messaggioSuccesso" class="info-message info-success">\r
      <lucide-angular name="check-circle"></lucide-angular>\r
      {{ messaggioSuccesso }}\r
    </div>\r
    <div *ngIf="messaggioErrore" class="info-message info-error">\r
      <lucide-angular name="alert-circle"></lucide-angular>\r
      {{ messaggioErrore }}\r
    </div>\r
\r
  </div>\r
</div>`, styles: ["/* src/app/timbrature/features/impostazioni/impostazioni.component.css */\n.settings-toggle {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.radio-option {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  cursor: pointer;\n}\n.radio-option input[type=radio] {\n  display: none;\n}\n.radio-option input[type=radio]:checked + .chip {\n  background: var(--gradiente);\n  color: #FAFAFC;\n  border-color: transparent;\n}\nlucide-angular {\n  display: inline-flex;\n  width: var(--fs-sm);\n  height: var(--fs-sm);\n  flex-shrink: 0;\n}\n.icon-button lucide-angular,\n.header-icon lucide-angular {\n  width: var(--fs-md);\n  height: var(--fs-md);\n}\n.section-header lucide-angular {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n}\n.day-row {\n  border-top: 1px dashed var(--text-muted);\n  padding: var(--gap-md) 0;\n  margin: var(--gap-sm) 0;\n}\n/*# sourceMappingURL=impostazioni.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImpostazioniComponent, { className: "ImpostazioniComponent", filePath: "src/app/timbrature/features/impostazioni/impostazioni.component.ts", lineNumber: 47 });
})();
export {
  ImpostazioniComponent
};
//# sourceMappingURL=chunk-CQDFISEY.js.map
