import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
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
import {
  AuthService,
  SupabaseService,
  environment
} from "./chunk-6SNKM7Z6.js";
import {
  Router,
  RouterLink
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/auth/login/login.ts
function Login_div_44_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "L'email \xE8 obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function Login_div_44_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Inserisci un'email valida");
    \u0275\u0275elementEnd();
  }
}
function Login_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "lucide-angular", 58);
    \u0275\u0275template(2, Login_div_44_span_2_Template, 2, 0, "span", 59)(3, Login_div_44_span_3_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("size", 14);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function Login_div_53_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "La password \xE8 obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function Login_div_53_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Minimo 6 caratteri");
    \u0275\u0275elementEnd();
  }
}
function Login_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "lucide-angular", 58);
    \u0275\u0275template(2, Login_div_53_span_2_Template, 2, 0, "span", 59)(3, Login_div_53_span_3_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("size", 14);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]);
  }
}
function Login_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "lucide-angular", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("login-message--error", !ctx_r0.errorMessage.includes("effettuato"))("login-message--success", ctx_r0.errorMessage.includes("effettuato"));
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r0.errorMessage.includes("effettuato") ? "check-circle" : "alert-triangle")("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function Login_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function Login_lucide_angular_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 62);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
var Login = class _Login {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  supabaseService = inject(SupabaseService);
  // AGGIUNGI
  loginForm;
  isLoading = false;
  errorMessage = "";
  showPassword = false;
  constructor() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
    if (!this.isProduction) {
      this.prefillDemoCredentials();
    }
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.loginForm.invalid) {
        this.markFormGroupTouched();
        return;
      }
      this.isLoading = true;
      this.errorMessage = "";
      const { email, password, rememberMe } = this.loginForm.value;
      try {
        const result = yield this.authService.login(email, password, rememberMe);
        if (result.error) {
          const errorMessage = result.error instanceof Error ? result.error.message : String(result.error);
          this.errorMessage = this.getErrorMessage(errorMessage);
        } else if (result.data?.user) {
          console.log("\u2705 Login effettuato con successo");
          const currentContext = this.authService.getCurrentContext();
          const contextNames = {
            "staff": "Dipendente",
            "supplier": "Fornitore",
            "customer": "Cliente"
          };
          this.errorMessage = `Accesso effettuato come ${contextNames[currentContext]}! Reindirizzamento...`;
          setTimeout(() => {
            this.navigateBasedOnContext();
          }, 1e3);
        }
      } catch (error) {
        console.error("Login error:", error);
        this.errorMessage = "Errore durante il login. Riprova pi\xF9 tardi.";
      } finally {
        this.isLoading = false;
      }
    });
  }
  // METODO PER VERIFICARE SE L'UTENTE È STAFF
  checkStaffMembership(email) {
    return __async(this, null, function* () {
      try {
        const { data: staffRecords, error } = yield this.supabaseService.getSupabaseClient().from("restaurant_staff").select("*").eq("email", email.toLowerCase()).in("invitation_status", ["accepted", "pending"]);
        if (staffRecords && staffRecords.length > 0) {
          console.log("\u{1F3AF} Utente trovato come staff member:", staffRecords);
        } else {
          console.log("\u2139\uFE0F Utente non \xE8 staff member");
        }
      } catch (error) {
        console.log("\u2139\uFE0F Errore nel controllo staff membership:", error);
      }
    });
  }
  // METODO PER NAVIGARE IN BASE AL CONTESTO
  navigateBasedOnContext() {
    const context = this.authService.getCurrentContext();
    switch (context) {
      case "staff":
        this.router.navigate(["/restaurant/dashboard"]);
        break;
      case "supplier":
        this.router.navigate(["/supplier/dashboard"]);
        break;
      case "customer":
      default:
        this.router.navigate(["/customer"]);
        break;
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }
  getErrorMessage(error) {
    const errorMap = {
      "Invalid login credentials": "Email o password non validi.",
      "Email not confirmed": "Email non confermata. Controlla la tua casella di posta.",
      "Invalid email": "Email non valida.",
      "Network error": "Errore di rete. Controlla la tua connessione.",
      "Email rate limit exceeded": "Troppi tentativi. Riprova pi\xF9 tardi."
    };
    return errorMap[error] || `Errore: ${error}`;
  }
  prefillDemoCredentials() {
    console.log("Modalit\xE0 sviluppo: credenziali demo disponibili");
  }
  useDemoCredentials(role) {
    if (role === "restaurant") {
      this.loginForm.patchValue({
        email: "ristorante@demo.com",
        password: "demodemo"
      });
    } else {
      this.loginForm.patchValue({
        email: "cliente@demo.com",
        password: "demodemo"
      });
    }
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  get isProduction() {
    return environment.production;
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 79, vars: 21, consts: [[1, "login-page"], ["aria-hidden", "true", 1, "login-bg"], [1, "login-blob", "login-blob--1"], [1, "login-blob", "login-blob--2"], [1, "login-blob", "login-blob--3"], [1, "login-aurora"], [1, "login-grid"], [1, "login-split"], [1, "login-brand", "flex", "flex-col", "justify-between", "p-lg"], [1, "login-text"], [1, "immaginebrand"], ["src", "logoristoapp.png", 1, "logopiccolo"], [1, "flex", "flex-col", "gap-sm"], [1, "text-xl", "gradient-text"], [1, "text-md", "gradient-text"], [1, "text-muted", 2, "max-width", "32ch"], [1, "flex", "flex-wrap", "gap-sm"], [1, "chip"], [1, "login-form-panel", "flex", "flex-col", "justify-center", "p-sm"], [1, "login-card"], [1, "flex", "flex-col", "items-center", "gap-sm", "mb-lg"], [1, "login-avatar", "bg-gradient"], ["name", "user", 2, "color", "#fff", 3, "size"], [1, "text-center"], [1, "font-bold", 2, "font-size", "var(--fs-md)", "line-height", "1.2"], [1, "text-muted", 2, "margin", "0"], [1, "generic-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "standard-label"], ["name", "mail", 1, "nav-icon", 3, "size"], ["id", "email", "formControlName", "email", "type", "email", "placeholder", "tua.email@esempio.com"], ["class", "login-field-error", 4, "ngIf"], [1, "form-group", "mb-lg"], ["name", "lock", 1, "nav-icon", 3, "size"], [1, "login-input-wrap"], ["id", "password", "formControlName", "password", "placeholder", "La tua password", 3, "type"], ["type", "button", 1, "login-eye-btn", 3, "click"], [3, "name", "size"], [1, "flex", "justify-between", "items-center", "mb-lg"], [1, "checkbox-label", 2, "padding", "var(--gap-sm) var(--gap-sm) var(--gap-sm) 0"], ["type", "checkbox", "formControlName", "rememberMe"], [1, "checkbox-content"], [2, "font-weight", "500", "font-size", "var(--fs-mini)"], ["class", "login-message mb-lg", 3, "login-message--error", "login-message--success", 4, "ngIf"], ["type", "submit", 1, "promethea-button", "w-100", "mb-lg", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], ["name", "log-in", 3, "size", 4, "ngIf"], [1, "login-divider", "mb-lg"], [1, "text-muted"], [1, "flex", "flex-col", "gap-md"], [1, "flex", "gap-sm", "w-100"], ["routerLink", "/register/restaurant", 1, "promethea-button", "w-100"], ["name", "utensils", 3, "size"], ["routerLink", "/register/supplier", 1, "promethea-button", "w-100"], ["name", "truck", 3, "size"], ["routerLink", "/register/customer", 1, "promethea-button", "ghost", "w-100"], ["name", "user", 3, "size"], [1, "login-field-error"], ["name", "alert-circle", 3, "size"], [4, "ngIf"], [1, "login-message", "mb-lg"], [1, "loading-spinner"], ["name", "log-in", 3, "size"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      \u0275\u0275element(11, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 12)(13, "h2", 13);
      \u0275\u0275text(14, "Gestisci il tuo");
      \u0275\u0275element(15, "br");
      \u0275\u0275text(16, "ristorante.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h3", 14);
      \u0275\u0275text(18, "makin' life easier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 15);
      \u0275\u0275text(20, " Ordini, fornitori, tavoli e clienti \u2014 tutto in un'unica piattaforma. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 16)(22, "span", 17);
      \u0275\u0275text(23, "Ordini in tempo reale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275text(25, "Gestione fornitori");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 17);
      \u0275\u0275text(27, "Sala & prenotazioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "div", 21);
      \u0275\u0275element(32, "lucide-angular", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 23)(34, "h1", 24);
      \u0275\u0275text(35, "Bentornato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 25);
      \u0275\u0275text(37, "Accedi al tuo account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "form", 26);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_38_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(39, "div", 27)(40, "label", 28);
      \u0275\u0275element(41, "lucide-angular", 29);
      \u0275\u0275text(42, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 30);
      \u0275\u0275template(44, Login_div_44_Template, 4, 3, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 32)(46, "label", 28);
      \u0275\u0275element(47, "lucide-angular", 33);
      \u0275\u0275text(48, " Password ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 34);
      \u0275\u0275element(50, "input", 35);
      \u0275\u0275elementStart(51, "button", 36);
      \u0275\u0275listener("click", function Login_Template_button_click_51_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(52, "lucide-angular", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(53, Login_div_53_Template, 4, 3, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 38)(55, "label", 39);
      \u0275\u0275element(56, "input", 40);
      \u0275\u0275elementStart(57, "div", 41)(58, "strong", 42);
      \u0275\u0275text(59, "Ricordami");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(60, Login_div_60_Template, 3, 7, "div", 43);
      \u0275\u0275elementStart(61, "button", 44);
      \u0275\u0275template(62, Login_span_62_Template, 1, 0, "span", 45)(63, Login_lucide_angular_63_Template, 1, 1, "lucide-angular", 46);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 47)(66, "span", 48);
      \u0275\u0275text(67, "oppure registrati come");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 49)(69, "div", 50)(70, "a", 51);
      \u0275\u0275element(71, "lucide-angular", 52);
      \u0275\u0275text(72, " Ristorante ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 53);
      \u0275\u0275element(74, "lucide-angular", 54);
      \u0275\u0275text(75, " Fornitore ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "a", 55);
      \u0275\u0275element(77, "lucide-angular", 56);
      \u0275\u0275text(78, " Registrati come Cliente ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(32);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.showPassword ? "eye-off" : "eye")("size", 18);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || ctx.loginForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Accesso in corso..." : "Accedi", " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 16);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  background: var(--background);\n}\n.login-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n.login-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.35;\n  animation: _ngcontent-%COMP%_blobFloat 12s ease-in-out infinite alternate;\n}\n.login-blob--1[_ngcontent-%COMP%] {\n  width: 55vw;\n  height: 55vw;\n  top: -15%;\n  left: -10%;\n  background:\n    radial-gradient(\n      circle,\n      var(--primary),\n      transparent 70%);\n  animation-duration: 14s;\n}\n.login-blob--2[_ngcontent-%COMP%] {\n  width: 45vw;\n  height: 45vw;\n  bottom: -15%;\n  right: -5%;\n  background:\n    radial-gradient(\n      circle,\n      var(--secondary),\n      transparent 70%);\n  animation-duration: 10s;\n  animation-delay: -4s;\n}\n.login-blob--3[_ngcontent-%COMP%] {\n  width: 30vw;\n  height: 30vw;\n  top: 40%;\n  left: 35%;\n  background:\n    radial-gradient(\n      circle,\n      var(--tertiary),\n      transparent 70%);\n  opacity: 0.2;\n  animation-duration: 16s;\n  animation-delay: -8s;\n}\n.login-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--smoke-1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--smoke-1) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      ellipse 80% 80% at 50% 50%,\n      var(--background) 30%,\n      transparent 100%);\n}\n@keyframes _ngcontent-%COMP%_blobFloat {\n  0% {\n    transform: translate(0, 0) scale(1) rotate(0deg);\n  }\n  33% {\n    transform: translate(2%, 4%) scale(1.05) rotate(3deg);\n  }\n  66% {\n    transform: translate(-2%, 2%) scale(0.97) rotate(-2deg);\n  }\n  100% {\n    transform: translate(3%, -3%) scale(1.08) rotate(5deg);\n  }\n}\n.login-aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      -45deg,\n      transparent 0px,\n      transparent 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 61px);\n  animation: _ngcontent-%COMP%_auroraShift 20s linear infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_auroraShift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 120px 120px;\n  }\n}\n.login-split[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100dvh;\n  padding: var(--gap-sm);\n}\n.login-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: var(--gap-lg);\n}\n.login-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  width: 100%;\n}\n.login-form-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  border: 1px solid var(--smoke-1);\n  border-radius: 24px;\n  padding: var(--gap-md);\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  box-shadow:\n    0 0 0 1px var(--smoke-1),\n    0 32px 64px -16px color-mix(in srgb, var(--primary) 20%, transparent),\n    0 8px 32px -8px color-mix(in srgb, var(--text-color) 10%, transparent);\n}\n.login-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px var(--shadow-1);\n}\n.login-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.login-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: var(--gap-lg);\n}\n.login-eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--gap-sm);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0;\n  transition: color 0.2s;\n}\n.login-eye-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.login-field-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  margin-top: calc(var(--gap-sm) / 2);\n  font-size: var(--fs-mini);\n  color: #ef4444;\n}\n.login-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  border-radius: 12px;\n  font-size: var(--fs-mini);\n  border: 1px solid transparent;\n}\n.login-message--error[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 10%, transparent);\n  border-color: color-mix(in srgb, #ef4444 30%, transparent);\n  color: #ef4444;\n}\n.login-message--success[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 10%, transparent);\n  border-color: color-mix(in srgb, #10b981 30%, transparent);\n  color: #10b981;\n}\n.login-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  text-align: center;\n}\n.login-divider[_ngcontent-%COMP%]::before, \n.login-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--smoke-1);\n}\n.login-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .login-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n  }\n  .login-text[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .login-brand[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--gap-md);\n    border-bottom: 1px solid var(--smoke-1);\n  }\n  .login-brand[_ngcontent-%COMP%]   .flex.flex-wrap[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-form-panel[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: var(--gap-lg) var(--gap-md);\n  }\n  .login-card[_ngcontent-%COMP%] {\n    border-radius: 16px;\n  }\n}\n.login-brand[_ngcontent-%COMP%]   img.logopiccolo[_ngcontent-%COMP%] {\n  height: clamp(64px, 15vw, 200px);\n  width: fit-content;\n  object-fit: contain;\n  object-position: left center;\n}\n.immaginebrand[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n.register-center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: var(--gap-lg) var(--gap-md);\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule], template: `<div class="login-page">\r
\r
  <!-- Background visual layer -->\r
  <div class="login-bg" aria-hidden="true">\r
    <div class="login-blob login-blob--1"></div>\r
    <div class="login-blob login-blob--2"></div>\r
    <div class="login-blob login-blob--3"></div>\r
    <div class="login-aurora"></div>\r
    <div class="login-grid"></div>\r
  </div>\r
\r
  <!-- Split layout -->\r
  <div class="login-split">\r
\r
    <!-- LEFT PANEL: Branding -->\r
    <div class="login-brand flex flex-col justify-between p-lg">\r
      <div class="login-text">\r
        <div class="immaginebrand">\r
        <img src="logoristoapp.png" class="logopiccolo">\r
        </div>\r
        <div class="flex flex-col gap-sm">\r
          <h2 class="text-xl gradient-text">Gestisci il tuo<br>ristorante.</h2>\r
          <h3 class="text-md gradient-text">makin' life easier</h3>\r
          <p class="text-muted" style="max-width: 32ch;">\r
            Ordini, fornitori, tavoli e clienti \u2014 tutto in un'unica piattaforma.\r
          </p>\r
        </div>\r
      </div>\r
\r
      <!-- Feature pills -->\r
      <div class="flex flex-wrap gap-sm">\r
        <span class="chip">Ordini in tempo reale</span>\r
        <span class="chip">Gestione fornitori</span>\r
        <span class="chip">Sala & prenotazioni</span>\r
      </div>\r
    </div>\r
\r
    <!-- RIGHT PANEL: Form -->\r
    <div class="login-form-panel flex flex-col justify-center p-sm">\r
\r
      <div class="login-card">\r
\r
        <!-- Header -->\r
        <div class="flex flex-col items-center gap-sm mb-lg">\r
          <div class="login-avatar bg-gradient">\r
            <lucide-angular name="user" [size]="22" style="color:#fff"></lucide-angular>\r
          </div>\r
          <div class="text-center">\r
            <h1 class="font-bold" style="font-size: var(--fs-md); line-height:1.2;">Bentornato</h1>\r
            <p class="text-muted" style="margin:0;">Accedi al tuo account</p>\r
          </div>\r
        </div>\r
\r
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="generic-form">\r
\r
          <!-- Email -->\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-angular name="mail" [size]="16" class="nav-icon"></lucide-angular>\r
              Email\r
            </label>\r
            <input\r
              id="email"\r
              formControlName="email"\r
              type="email"\r
              placeholder="tua.email@esempio.com"\r
              [class.error]="email?.invalid && email?.touched">\r
            <div *ngIf="email?.invalid && email?.touched" class="login-field-error">\r
              <lucide-angular name="alert-circle" [size]="14"></lucide-angular>\r
              <span *ngIf="email?.errors?.['required']">L'email \xE8 obbligatoria</span>\r
              <span *ngIf="email?.errors?.['email']">Inserisci un'email valida</span>\r
            </div>\r
          </div>\r
\r
          <!-- Password -->\r
          <div class="form-group mb-lg">\r
            <label class="standard-label">\r
              <lucide-angular name="lock" [size]="16" class="nav-icon"></lucide-angular>\r
              Password\r
            </label>\r
            <div class="login-input-wrap">\r
              <input\r
                id="password"\r
                formControlName="password"\r
                [type]="showPassword ? 'text' : 'password'"\r
                placeholder="La tua password"\r
                [class.error]="password?.invalid && password?.touched">\r
              <button\r
                type="button"\r
                class="login-eye-btn"\r
                (click)="togglePasswordVisibility()">\r
                <lucide-angular [name]="showPassword ? 'eye-off' : 'eye'" [size]="18"></lucide-angular>\r
              </button>\r
            </div>\r
            <div *ngIf="password?.invalid && password?.touched" class="login-field-error">\r
              <lucide-angular name="alert-circle" [size]="14"></lucide-angular>\r
              <span *ngIf="password?.errors?.['required']">La password \xE8 obbligatoria</span>\r
              <span *ngIf="password?.errors?.['minlength']">Minimo 6 caratteri</span>\r
            </div>\r
          </div>\r
\r
          <!-- Remember + Forgot -->\r
          <div class="flex justify-between items-center mb-lg">\r
            <label class="checkbox-label" style="padding: var(--gap-sm) var(--gap-sm) var(--gap-sm) 0">\r
              <input type="checkbox" formControlName="rememberMe">\r
              <div class="checkbox-content">\r
                <strong style="font-weight:500; font-size: var(--fs-mini);">Ricordami</strong>\r
              </div>\r
            </label>\r
            <!-- <a routerLink="/forgot-password" class="link text-mini">Password dimenticata?</a> -->\r
          </div>\r
\r
          <!-- Error / Success message -->\r
          <div *ngIf="errorMessage" class="login-message mb-lg"\r
               [class.login-message--error]="!errorMessage.includes('effettuato')"\r
               [class.login-message--success]="errorMessage.includes('effettuato')">\r
            <lucide-angular [name]="errorMessage.includes('effettuato') ? 'check-circle' : 'alert-triangle'" [size]="16"></lucide-angular>\r
            {{ errorMessage }}\r
          </div>\r
\r
          <!-- Submit -->\r
          <button type="submit"\r
                  [disabled]="isLoading || loginForm.invalid"\r
                  class="promethea-button w-100 mb-lg">\r
            <span *ngIf="isLoading" class="loading-spinner"></span>\r
            <lucide-angular *ngIf="!isLoading" name="log-in" [size]="18"></lucide-angular>\r
            {{ isLoading ? 'Accesso in corso...' : 'Accedi' }}\r
          </button>\r
\r
          <!-- Divider -->\r
          <div class="login-divider mb-lg">\r
            <span class="text-muted">oppure registrati come</span>\r
          </div>\r
\r
          <!-- Registration links -->\r
          <div class="flex flex-col gap-md">\r
            <div class="flex gap-sm w-100">\r
              <a routerLink="/register/restaurant" class="promethea-button w-100" >\r
                <lucide-angular name="utensils" [size]="16"></lucide-angular>\r
                Ristorante\r
              </a>\r
              <a routerLink="/register/supplier" class="promethea-button w-100" >\r
                <lucide-angular name="truck" [size]="16"></lucide-angular>\r
                Fornitore\r
              </a>\r
            </div>\r
            <a routerLink="/register/customer" class="promethea-button ghost w-100">\r
              <lucide-angular name="user" [size]="16"></lucide-angular>\r
              Registrati come Cliente\r
            </a>\r
          </div>\r
\r
        </form>\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>`, styles: ['/* src/app/auth/login/login.css */\n.login-page {\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  background: var(--background);\n}\n.login-bg {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n.login-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.35;\n  animation: blobFloat 12s ease-in-out infinite alternate;\n}\n.login-blob--1 {\n  width: 55vw;\n  height: 55vw;\n  top: -15%;\n  left: -10%;\n  background:\n    radial-gradient(\n      circle,\n      var(--primary),\n      transparent 70%);\n  animation-duration: 14s;\n}\n.login-blob--2 {\n  width: 45vw;\n  height: 45vw;\n  bottom: -15%;\n  right: -5%;\n  background:\n    radial-gradient(\n      circle,\n      var(--secondary),\n      transparent 70%);\n  animation-duration: 10s;\n  animation-delay: -4s;\n}\n.login-blob--3 {\n  width: 30vw;\n  height: 30vw;\n  top: 40%;\n  left: 35%;\n  background:\n    radial-gradient(\n      circle,\n      var(--tertiary),\n      transparent 70%);\n  opacity: 0.2;\n  animation-duration: 16s;\n  animation-delay: -8s;\n}\n.login-grid {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--smoke-1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--smoke-1) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      ellipse 80% 80% at 50% 50%,\n      var(--background) 30%,\n      transparent 100%);\n}\n@keyframes blobFloat {\n  0% {\n    transform: translate(0, 0) scale(1) rotate(0deg);\n  }\n  33% {\n    transform: translate(2%, 4%) scale(1.05) rotate(3deg);\n  }\n  66% {\n    transform: translate(-2%, 2%) scale(0.97) rotate(-2deg);\n  }\n  100% {\n    transform: translate(3%, -3%) scale(1.08) rotate(5deg);\n  }\n}\n.login-aurora {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      -45deg,\n      transparent 0px,\n      transparent 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 61px);\n  animation: auroraShift 20s linear infinite;\n  pointer-events: none;\n}\n@keyframes auroraShift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 120px 120px;\n  }\n}\n.login-split {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100dvh;\n  padding: var(--gap-sm);\n}\n.login-brand {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: var(--gap-lg);\n}\n.login-text {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  width: 100%;\n}\n.login-form-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-card {\n  width: 100%;\n  margin: 0;\n  border: 1px solid var(--smoke-1);\n  border-radius: 24px;\n  padding: var(--gap-md);\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  box-shadow:\n    0 0 0 1px var(--smoke-1),\n    0 32px 64px -16px color-mix(in srgb, var(--primary) 20%, transparent),\n    0 8px 32px -8px color-mix(in srgb, var(--text-color) 10%, transparent);\n}\n.login-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px var(--shadow-1);\n}\n.login-input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.login-input-wrap input {\n  width: 100%;\n  padding-right: var(--gap-lg);\n}\n.login-eye-btn {\n  position: absolute;\n  right: var(--gap-sm);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0;\n  transition: color 0.2s;\n}\n.login-eye-btn:hover {\n  color: var(--primary);\n}\n.login-field-error {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  margin-top: calc(var(--gap-sm) / 2);\n  font-size: var(--fs-mini);\n  color: #ef4444;\n}\n.login-message {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  border-radius: 12px;\n  font-size: var(--fs-mini);\n  border: 1px solid transparent;\n}\n.login-message--error {\n  background: color-mix(in srgb, #ef4444 10%, transparent);\n  border-color: color-mix(in srgb, #ef4444 30%, transparent);\n  color: #ef4444;\n}\n.login-message--success {\n  background: color-mix(in srgb, #10b981 10%, transparent);\n  border-color: color-mix(in srgb, #10b981 30%, transparent);\n  color: #10b981;\n}\n.login-divider {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  text-align: center;\n}\n.login-divider::before,\n.login-divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--smoke-1);\n}\n.login-divider span {\n  font-size: var(--fs-mini);\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .login-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n  }\n  .login-text {\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .login-brand {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--gap-md);\n    border-bottom: 1px solid var(--smoke-1);\n  }\n  .login-brand .flex.flex-wrap {\n    display: none;\n  }\n  .login-form-panel {\n    align-items: flex-start;\n    padding: var(--gap-lg) var(--gap-md);\n  }\n  .login-card {\n    border-radius: 16px;\n  }\n}\n.login-brand img.logopiccolo {\n  height: clamp(64px, 15vw, 200px);\n  width: fit-content;\n  object-fit: contain;\n  object-position: left center;\n}\n.immaginebrand {\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n.register-center {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: var(--gap-lg) var(--gap-md);\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/auth/login/login.ts", lineNumber: 18 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-I6FPQCKX.js.map
