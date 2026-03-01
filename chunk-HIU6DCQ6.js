import {
  Header
} from "./chunk-MA2TXP7X.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-4SOHWVCI.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import {
  AuthService
} from "./chunk-77JDNC7M.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule,
  NgIf
} from "./chunk-YGNU4RXP.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/auth/register/register.ts
function Register_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Il nome \xE8 obbligatorio ");
    \u0275\u0275elementEnd();
  }
}
function Register_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Il cognome \xE8 obbligatorio ");
    \u0275\u0275elementEnd();
  }
}
function Register_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function Register_div_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email non valida");
    \u0275\u0275elementEnd();
  }
}
function Register_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, Register_div_30_span_1_Template, 2, 0, "span", 43)(2, Register_div_30_span_2_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function Register_div_35_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Il nome del ristorante \xE8 obbligatorio ");
    \u0275\u0275elementEnd();
  }
}
function Register_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h2", 11);
    \u0275\u0275element(2, "lucide-icon", 45);
    \u0275\u0275text(3, " Informazioni Ristorante ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "label", 15);
    \u0275\u0275text(6, "Nome Ristorante *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 46);
    \u0275\u0275template(8, Register_div_35_div_8_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", (ctx_r0.restaurantName == null ? null : ctx_r0.restaurantName.invalid) && (ctx_r0.restaurantName == null ? null : ctx_r0.restaurantName.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.restaurantName == null ? null : ctx_r0.restaurantName.invalid) && (ctx_r0.restaurantName == null ? null : ctx_r0.restaurantName.touched));
  }
}
function Register_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Password obbligatoria (min. 6 caratteri) ");
    \u0275\u0275elementEnd();
  }
}
function Register_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Le password non coincidono ");
    \u0275\u0275elementEnd();
  }
}
function Register_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "lucide-icon", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function Register_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function Register_lucide_icon_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 50);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
var Register = class _Register {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  registerForm;
  isLoading = false;
  errorMessage = "";
  isRestaurant = false;
  isSupplier = false;
  showPassword = false;
  showConfirmPassword = false;
  ngOnInit() {
    const role = this.route.snapshot.paramMap.get("role");
    this.isRestaurant = role === "restaurant";
    this.isSupplier = role === "supplier";
    this.initializeForm();
  }
  initializeForm() {
    this.registerForm = this.fb.group({
      // Campi base
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      phone: [""],
      policy: [false, [Validators.requiredTrue]],
      // Campi condizionali
      restaurantName: [this.isRestaurant ? "" : "", this.isRestaurant ? Validators.required : []],
      // NUOVI CAMPI FORNITORE
      companyName: [this.isSupplier ? "" : "", this.isSupplier ? Validators.required : []],
      contactName: [this.isSupplier ? "" : "", this.isSupplier ? Validators.required : []],
      supplierAddress: [this.isSupplier ? "" : ""],
      supplierDescription: [this.isSupplier ? "" : ""]
    }, { validators: this.passwordMatchValidator });
  }
  get rememberMe() {
    return this.registerForm.get("policy");
  }
  passwordMatchValidator(form) {
    const password = form.get("password")?.value;
    const confirmPassword = form.get("confirmPassword")?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.registerForm.invalid || this.isLoading)
        return;
      this.isLoading = true;
      this.errorMessage = "";
      const formValue = this.registerForm.value;
      try {
        const userRole = this.determineUserRole();
        const registerData = {
          email: formValue.email.toLowerCase().trim(),
          password: formValue.password,
          user_data: {
            first_name: formValue.firstName,
            last_name: formValue.lastName,
            phone: formValue.phone,
            role: userRole
          },
          restaurant_data: this.isRestaurant ? {
            name: formValue.restaurantName,
            address: "",
            phone: formValue.phone || "",
            email: formValue.email,
            description: "",
            cuisine_type: "",
            allow_table_selection: false,
            accepts_delivery: false,
            accepts_takeaway: false
          } : void 0,
          // NUOVO: Dati fornitore
          supplier_data: this.isSupplier ? {
            company_name: formValue.companyName,
            contact_name: formValue.contactName,
            email: formValue.email,
            phone: formValue.phone || "",
            address: formValue.supplierAddress,
            description: formValue.supplierDescription
          } : void 0
        };
        const result = yield this.authService.register(registerData);
        if (result.error) {
          if (typeof result.error === "string") {
            this.errorMessage = result.error;
          } else if (result.error && typeof result.error === "object") {
            const errorObj = result.error;
            this.errorMessage = errorObj.message || errorObj.toString();
          } else {
            this.errorMessage = "Errore durante la registrazione";
          }
          console.error("Registration error details:", result.error);
        } else if (result.user) {
          console.log("\u2705 Registration successful, user:", result.user.id);
          this.errorMessage = "Registrazione completata! Reindirizzamento...";
          this.redirectAfterRegistration(result);
        }
      } catch (error) {
        if (error instanceof Error) {
          this.errorMessage = "Errore durante la registrazione: " + error.message;
        } else if (typeof error === "string") {
          this.errorMessage = "Errore durante la registrazione: " + error;
        } else {
          this.errorMessage = "Errore sconosciuto durante la registrazione";
        }
        console.error("Registration exception:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  determineUserRole() {
    if (this.isRestaurant)
      return "restaurant_owner";
    if (this.isSupplier)
      return "supplier";
    return "customer";
  }
  redirectAfterRegistration(result) {
    setTimeout(() => {
      if (this.isRestaurant && result.restaurant) {
        this.router.navigate(["/restaurant/dashboard"]);
      } else if (this.isSupplier) {
        this.router.navigate(["/supplier/dashboard"]);
      } else {
        this.router.navigate(["/customer/menu-display"]);
      }
    }, 2e3);
  }
  // Getters per template
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }
  get firstName() {
    return this.registerForm.get("firstName");
  }
  get lastName() {
    return this.registerForm.get("lastName");
  }
  get restaurantName() {
    return this.registerForm.get("restaurantName");
  }
  // NUOVI GETTERS FORNITORE
  get companyName() {
    return this.registerForm.get("companyName");
  }
  get contactName() {
    return this.registerForm.get("contactName");
  }
  get supplierAddress() {
    return this.registerForm.get("supplierAddress");
  }
  get supplierDescription() {
    return this.registerForm.get("supplierDescription");
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 74, vars: 33, consts: [[3, "title", "icon", "showToggle"], [1, "login-page", "page-container"], ["aria-hidden", "true", 1, "login-bg"], [1, "login-blob", "login-blob--1"], [1, "login-blob", "login-blob--2"], [1, "login-blob", "login-blob--3"], [1, "login-aurora"], [1, "login-grid"], [1, "register-center"], [1, "login-card", "register-card"], [1, "generic-form", 3, "ngSubmit", "formGroup"], [1, "text-md", "font-semibold", "mb-md", "flex", "gap-sm", "items-center"], ["name", "user", 1, "nav-icon", 3, "size"], [1, "form-row", "mb-md"], [1, "form-group"], [1, "standard-label"], ["formControlName", "firstName", "placeholder", "Il tuo nome", "type", "text"], ["class", "login-field-error", 4, "ngIf"], ["formControlName", "lastName", "placeholder", "Il tuo cognome", "type", "text"], ["formControlName", "email", "type", "email", "placeholder", "tua.email@esempio.com"], ["formControlName", "phone", "placeholder", "+39 123 456 7890", "type", "number"], ["class", "mb-md", 4, "ngIf"], [1, "mt-lg", "mb-md"], ["name", "lock", 1, "nav-icon", 3, "size"], [1, "form-row"], [1, "login-input-wrap"], ["formControlName", "password", "placeholder", "Almeno 6 caratteri", 3, "type"], ["type", "button", 1, "login-eye-btn", 3, "click"], [3, "name", "size"], ["formControlName", "confirmPassword", "placeholder", "Ripeti la password", 3, "type"], [1, "flex", "items-center", "my-md"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "policy"], [1, "checkbox-content", "text-muted"], ["href", "#/policy", 1, "link"], ["class", "login-message login-message--error mb-md", 4, "ngIf"], [1, "login-divider", "mb-md"], [1, "flex", "justify-between", "items-center", "gap-md"], ["routerLink", "/login", 1, "link"], ["type", "submit", 1, "promethea-button", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], ["name", "user-check", 3, "size", 4, "ngIf"], [1, "login-field-error"], [4, "ngIf"], [1, "mb-md"], ["name", "building-2", 1, "nav-icon", 3, "size"], ["formControlName", "restaurantName", "placeholder", "Il nome del tuo ristorante", "type", "text"], [1, "login-message", "login-message--error", "mb-md"], ["name", "alert-triangle", 3, "size"], [1, "loading-spinner"], ["name", "user-check", 3, "size"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "form", 10);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "h2", 11);
      \u0275\u0275element(12, "lucide-icon", 12);
      \u0275\u0275text(13, " Informazioni Personali ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "label", 15);
      \u0275\u0275text(17, "Nome *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 16);
      \u0275\u0275template(19, Register_div_19_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "label", 15);
      \u0275\u0275text(22, "Cognome *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 18);
      \u0275\u0275template(24, Register_div_24_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 14)(27, "label", 15);
      \u0275\u0275text(28, "Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 19);
      \u0275\u0275template(30, Register_div_30_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14)(32, "label", 15);
      \u0275\u0275text(33, "Telefono");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, Register_div_35_Template, 9, 4, "div", 21);
      \u0275\u0275elementStart(36, "div", 22)(37, "h2", 11);
      \u0275\u0275element(38, "lucide-icon", 23);
      \u0275\u0275text(39, " Password ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 24)(41, "div", 14)(42, "label", 15);
      \u0275\u0275text(43, "Password *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 25);
      \u0275\u0275element(45, "input", 26);
      \u0275\u0275elementStart(46, "button", 27);
      \u0275\u0275listener("click", function Register_Template_button_click_46_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(47, "lucide-icon", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(48, Register_div_48_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 14)(50, "label", 15);
      \u0275\u0275text(51, "Conferma Password *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 25);
      \u0275\u0275element(53, "input", 29);
      \u0275\u0275elementStart(54, "button", 27);
      \u0275\u0275listener("click", function Register_Template_button_click_54_listener() {
        return ctx.toggleConfirmPasswordVisibility();
      });
      \u0275\u0275element(55, "lucide-icon", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(56, Register_div_56_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 30)(58, "label", 31);
      \u0275\u0275element(59, "input", 32);
      \u0275\u0275elementStart(60, "div", 33);
      \u0275\u0275text(61, " Dichiaro di aver letto, compreso e accettato la ");
      \u0275\u0275elementStart(62, "a", 34);
      \u0275\u0275text(63, "Privacy Policy e i Termini e Condizioni");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(64, Register_div_64_Template, 3, 2, "div", 35);
      \u0275\u0275element(65, "div", 36);
      \u0275\u0275elementStart(66, "div", 37)(67, "a", 38);
      \u0275\u0275text(68, " \u2190 Hai gi\xE0 un account? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 39);
      \u0275\u0275template(70, Register_span_70_Template, 1, 0, "span", 40)(71, Register_lucide_icon_71_Template, 1, 1, "lucide-icon", 41);
      \u0275\u0275elementStart(72, "span");
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.isRestaurant ? "Registra il tuo Ristorante" : "Crea Account")("icon", ctx.isRestaurant ? "utensils-crossed" : "user")("showToggle", false);
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", (ctx.firstName == null ? null : ctx.firstName.invalid) && (ctx.firstName == null ? null : ctx.firstName.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.firstName == null ? null : ctx.firstName.invalid) && (ctx.firstName == null ? null : ctx.firstName.touched));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("error", (ctx.lastName == null ? null : ctx.lastName.invalid) && (ctx.lastName == null ? null : ctx.lastName.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.lastName == null ? null : ctx.lastName.invalid) && (ctx.lastName == null ? null : ctx.lastName.touched));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("error", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isRestaurant);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("error", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.showPassword ? "eye-off" : "eye")("size", 18);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("error", (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"]) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.showConfirmPassword ? "eye-off" : "eye")("size", 18);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"]) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isRestaurant ? "Registra Ristorante" : "Crea Account");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, LucideAngularModule, LucideAngularComponent, Header], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  background: var(--background);\n}\n.login-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n.login-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.35;\n  animation: _ngcontent-%COMP%_blobFloat 12s ease-in-out infinite alternate;\n}\n.login-blob--1[_ngcontent-%COMP%] {\n  width: 55vw;\n  height: 55vw;\n  top: -15%;\n  left: -10%;\n  background:\n    radial-gradient(\n      circle,\n      var(--primary),\n      transparent 70%);\n  animation-duration: 14s;\n}\n.login-blob--2[_ngcontent-%COMP%] {\n  width: 45vw;\n  height: 45vw;\n  bottom: -15%;\n  right: -5%;\n  background:\n    radial-gradient(\n      circle,\n      var(--secondary),\n      transparent 70%);\n  animation-duration: 10s;\n  animation-delay: -4s;\n}\n.login-blob--3[_ngcontent-%COMP%] {\n  width: 30vw;\n  height: 30vw;\n  top: 40%;\n  left: 35%;\n  background:\n    radial-gradient(\n      circle,\n      var(--tertiary),\n      transparent 70%);\n  opacity: 0.2;\n  animation-duration: 16s;\n  animation-delay: -8s;\n}\n.login-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--smoke-1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--smoke-1) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      ellipse 80% 80% at 50% 50%,\n      var(--background) 30%,\n      transparent 100%);\n}\n@keyframes _ngcontent-%COMP%_blobFloat {\n  0% {\n    transform: translate(0, 0) scale(1) rotate(0deg);\n  }\n  33% {\n    transform: translate(2%, 4%) scale(1.05) rotate(3deg);\n  }\n  66% {\n    transform: translate(-2%, 2%) scale(0.97) rotate(-2deg);\n  }\n  100% {\n    transform: translate(3%, -3%) scale(1.08) rotate(5deg);\n  }\n}\n.login-aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      -45deg,\n      transparent 0px,\n      transparent 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 61px);\n  animation: _ngcontent-%COMP%_auroraShift 20s linear infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_auroraShift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 120px 120px;\n  }\n}\n.login-split[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100dvh;\n  padding: var(--gap-sm);\n}\n.login-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: var(--gap-lg);\n}\n.login-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  width: 100%;\n}\n.login-form-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  border: 1px solid var(--smoke-1);\n  border-radius: 24px;\n  padding: var(--gap-md);\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  box-shadow:\n    0 0 0 1px var(--smoke-1),\n    0 32px 64px -16px color-mix(in srgb, var(--primary) 20%, transparent),\n    0 8px 32px -8px color-mix(in srgb, var(--text-color) 10%, transparent);\n}\n.login-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px var(--shadow-1);\n}\n.login-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.login-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: var(--gap-lg);\n}\n.login-eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--gap-sm);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0;\n  transition: color 0.2s;\n}\n.login-eye-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.login-field-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  margin-top: calc(var(--gap-sm) / 2);\n  font-size: var(--fs-mini);\n  color: #ef4444;\n}\n.login-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  border-radius: 12px;\n  font-size: var(--fs-mini);\n  border: 1px solid transparent;\n}\n.login-message--error[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 10%, transparent);\n  border-color: color-mix(in srgb, #ef4444 30%, transparent);\n  color: #ef4444;\n}\n.login-message--success[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 10%, transparent);\n  border-color: color-mix(in srgb, #10b981 30%, transparent);\n  color: #10b981;\n}\n.login-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  text-align: center;\n}\n.login-divider[_ngcontent-%COMP%]::before, \n.login-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--smoke-1);\n}\n.login-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .login-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n  }\n  .login-text[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .login-brand[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--gap-md);\n    border-bottom: 1px solid var(--smoke-1);\n  }\n  .login-brand[_ngcontent-%COMP%]   .flex.flex-wrap[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-form-panel[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: var(--gap-lg) var(--gap-md);\n  }\n  .login-card[_ngcontent-%COMP%] {\n    border-radius: 16px;\n  }\n}\n.login-brand[_ngcontent-%COMP%]   img.logopiccolo[_ngcontent-%COMP%] {\n  height: clamp(64px, 15vw, 200px);\n  width: fit-content;\n  object-fit: contain;\n  object-position: left center;\n}\n.immaginebrand[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n.register-center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: var(--gap-lg) var(--gap-md);\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule, Header], template: `<app-header \r
  [title]="isRestaurant ? 'Registra il tuo Ristorante' : 'Crea Account'"\r
  [icon]="isRestaurant ? 'utensils-crossed' : 'user'"\r
  [showToggle]="false">\r
</app-header>\r
\r
<div class="login-page page-container">\r
\r
  <!-- sfondo animato -->\r
  <div class="login-bg" aria-hidden="true">\r
    <div class="login-blob login-blob--1"></div>\r
    <div class="login-blob login-blob--2"></div>\r
    <div class="login-blob login-blob--3"></div>\r
    <div class="login-aurora"></div>\r
    <div class="login-grid"></div>\r
  </div>\r
\r
  <!-- Card centrato -->\r
  <div class="register-center">\r
    <div class="login-card register-card">\r
\r
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="generic-form">\r
\r
        <!-- Informazioni Personali -->\r
        <h2 class="text-md font-semibold mb-md flex gap-sm items-center">\r
          <lucide-icon name="user" [size]="20" class="nav-icon"></lucide-icon>\r
          Informazioni Personali\r
        </h2>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">Nome *</label>\r
            <input formControlName="firstName" placeholder="Il tuo nome" type="text"\r
                   [class.error]="firstName?.invalid && firstName?.touched">\r
            <div *ngIf="firstName?.invalid && firstName?.touched" class="login-field-error">\r
              Il nome \xE8 obbligatorio\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Cognome *</label>\r
            <input formControlName="lastName" placeholder="Il tuo cognome" type="text"\r
                   [class.error]="lastName?.invalid && lastName?.touched">\r
            <div *ngIf="lastName?.invalid && lastName?.touched" class="login-field-error">\r
              Il cognome \xE8 obbligatorio\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">Email *</label>\r
            <input formControlName="email" type="email" placeholder="tua.email@esempio.com"\r
                   [class.error]="email?.invalid && email?.touched">\r
            <div *ngIf="email?.invalid && email?.touched" class="login-field-error">\r
              <span *ngIf="email?.errors?.['required']">Email obbligatoria</span>\r
              <span *ngIf="email?.errors?.['email']">Email non valida</span>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Telefono</label>\r
            <input formControlName="phone" placeholder="+39 123 456 7890" type="number">\r
          </div>\r
        </div>\r
\r
        <!-- Informazioni Ristorante -->\r
        <div *ngIf="isRestaurant" class="mb-md">\r
          <h2 class="text-md font-semibold mb-md flex gap-sm items-center">\r
            <lucide-icon name="building-2" [size]="20" class="nav-icon"></lucide-icon>\r
            Informazioni Ristorante\r
          </h2>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Nome Ristorante *</label>\r
            <input formControlName="restaurantName" placeholder="Il nome del tuo ristorante" type="text"\r
                   [class.error]="restaurantName?.invalid && restaurantName?.touched">\r
            <div *ngIf="restaurantName?.invalid && restaurantName?.touched" class="login-field-error">\r
              Il nome del ristorante \xE8 obbligatorio\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Password -->\r
        <div class="mt-lg mb-md">\r
          <h2 class="text-md font-semibold mb-md flex gap-sm items-center">\r
            <lucide-icon name="lock" [size]="20" class="nav-icon"></lucide-icon>\r
            Password\r
          </h2>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Password *</label>\r
              <div class="login-input-wrap">\r
                <input\r
                  formControlName="password"\r
                  [type]="showPassword ? 'text' : 'password'"\r
                  placeholder="Almeno 6 caratteri"\r
                  [class.error]="password?.invalid && password?.touched">\r
                <button type="button" class="login-eye-btn" (click)="togglePasswordVisibility()">\r
                  <lucide-icon [name]="showPassword ? 'eye-off' : 'eye'" [size]="18"></lucide-icon>\r
                </button>\r
              </div>\r
              <div *ngIf="password?.invalid && password?.touched" class="login-field-error">\r
                Password obbligatoria (min. 6 caratteri)\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">Conferma Password *</label>\r
              <div class="login-input-wrap">\r
                <input\r
                  formControlName="confirmPassword"\r
                  [type]="showConfirmPassword ? 'text' : 'password'"\r
                  placeholder="Ripeti la password"\r
                  [class.error]="registerForm.errors?.['passwordMismatch'] && confirmPassword?.touched">\r
                <button type="button" class="login-eye-btn" (click)="toggleConfirmPasswordVisibility()">\r
                  <lucide-icon [name]="showConfirmPassword ? 'eye-off' : 'eye'" [size]="18"></lucide-icon>\r
                </button>\r
              </div>\r
              <div *ngIf="registerForm.errors?.['passwordMismatch'] && confirmPassword?.touched" class="login-field-error">\r
                Le password non coincidono\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Privacy Policy -->\r
        <div class="flex items-center my-md">\r
          <label class="checkbox-label">\r
            <input type="checkbox" formControlName="policy">\r
            <div class="checkbox-content text-muted">\r
              Dichiaro di aver letto, compreso e accettato la\r
              <a href="#/policy" class="link">Privacy Policy e i Termini e Condizioni</a>\r
            </div>\r
          </label>\r
        </div>\r
\r
        <!-- Errore globale -->\r
        <div *ngIf="errorMessage" class="login-message login-message--error mb-md">\r
          <lucide-icon name="alert-triangle" [size]="16"></lucide-icon>\r
          {{ errorMessage }}\r
        </div>\r
\r
        <!-- Azioni -->\r
        <div class="login-divider mb-md"></div>\r
\r
        <div class="flex justify-between items-center gap-md">\r
          <a routerLink="/login" class="link">\r
            \u2190 Hai gi\xE0 un account?\r
          </a>\r
          <button type="submit" [disabled]="registerForm.invalid || isLoading" class="promethea-button">\r
            <span *ngIf="isLoading" class="loading-spinner"></span>\r
            <lucide-icon *ngIf="!isLoading" name="user-check" [size]="18"></lucide-icon>\r
            <span>{{ isRestaurant ? 'Registra Ristorante' : 'Crea Account' }}</span>\r
          </button>\r
        </div>\r
\r
      </form>\r
    </div>\r
  </div>\r
\r
</div>`, styles: ['/* src/app/auth/login/login.css */\n.login-page {\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  background: var(--background);\n}\n.login-bg {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n.login-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.35;\n  animation: blobFloat 12s ease-in-out infinite alternate;\n}\n.login-blob--1 {\n  width: 55vw;\n  height: 55vw;\n  top: -15%;\n  left: -10%;\n  background:\n    radial-gradient(\n      circle,\n      var(--primary),\n      transparent 70%);\n  animation-duration: 14s;\n}\n.login-blob--2 {\n  width: 45vw;\n  height: 45vw;\n  bottom: -15%;\n  right: -5%;\n  background:\n    radial-gradient(\n      circle,\n      var(--secondary),\n      transparent 70%);\n  animation-duration: 10s;\n  animation-delay: -4s;\n}\n.login-blob--3 {\n  width: 30vw;\n  height: 30vw;\n  top: 40%;\n  left: 35%;\n  background:\n    radial-gradient(\n      circle,\n      var(--tertiary),\n      transparent 70%);\n  opacity: 0.2;\n  animation-duration: 16s;\n  animation-delay: -8s;\n}\n.login-grid {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--smoke-1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--smoke-1) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      ellipse 80% 80% at 50% 50%,\n      var(--background) 30%,\n      transparent 100%);\n}\n@keyframes blobFloat {\n  0% {\n    transform: translate(0, 0) scale(1) rotate(0deg);\n  }\n  33% {\n    transform: translate(2%, 4%) scale(1.05) rotate(3deg);\n  }\n  66% {\n    transform: translate(-2%, 2%) scale(0.97) rotate(-2deg);\n  }\n  100% {\n    transform: translate(3%, -3%) scale(1.08) rotate(5deg);\n  }\n}\n.login-aurora {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      -45deg,\n      transparent 0px,\n      transparent 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 60px,\n      color-mix(in srgb, var(--primary) 3%, transparent) 61px);\n  animation: auroraShift 20s linear infinite;\n  pointer-events: none;\n}\n@keyframes auroraShift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 120px 120px;\n  }\n}\n.login-split {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100dvh;\n  padding: var(--gap-sm);\n}\n.login-brand {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: var(--gap-lg);\n}\n.login-text {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  width: 100%;\n}\n.login-form-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-card {\n  width: 100%;\n  margin: 0;\n  border: 1px solid var(--smoke-1);\n  border-radius: 24px;\n  padding: var(--gap-md);\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  box-shadow:\n    0 0 0 1px var(--smoke-1),\n    0 32px 64px -16px color-mix(in srgb, var(--primary) 20%, transparent),\n    0 8px 32px -8px color-mix(in srgb, var(--text-color) 10%, transparent);\n}\n.login-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px var(--shadow-1);\n}\n.login-input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.login-input-wrap input {\n  width: 100%;\n  padding-right: var(--gap-lg);\n}\n.login-eye-btn {\n  position: absolute;\n  right: var(--gap-sm);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0;\n  transition: color 0.2s;\n}\n.login-eye-btn:hover {\n  color: var(--primary);\n}\n.login-field-error {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  margin-top: calc(var(--gap-sm) / 2);\n  font-size: var(--fs-mini);\n  color: #ef4444;\n}\n.login-message {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  border-radius: 12px;\n  font-size: var(--fs-mini);\n  border: 1px solid transparent;\n}\n.login-message--error {\n  background: color-mix(in srgb, #ef4444 10%, transparent);\n  border-color: color-mix(in srgb, #ef4444 30%, transparent);\n  color: #ef4444;\n}\n.login-message--success {\n  background: color-mix(in srgb, #10b981 10%, transparent);\n  border-color: color-mix(in srgb, #10b981 30%, transparent);\n  color: #10b981;\n}\n.login-divider {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  text-align: center;\n}\n.login-divider::before,\n.login-divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--smoke-1);\n}\n.login-divider span {\n  font-size: var(--fs-mini);\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .login-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n  }\n  .login-text {\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .login-brand {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--gap-md);\n    border-bottom: 1px solid var(--smoke-1);\n  }\n  .login-brand .flex.flex-wrap {\n    display: none;\n  }\n  .login-form-panel {\n    align-items: flex-start;\n    padding: var(--gap-lg) var(--gap-md);\n  }\n  .login-card {\n    border-radius: 16px;\n  }\n}\n.login-brand img.logopiccolo {\n  height: clamp(64px, 15vw, 200px);\n  width: fit-content;\n  object-fit: contain;\n  object-position: left center;\n}\n.immaginebrand {\n  justify-content: center;\n  display: flex;\n  width: 100%;\n}\n.register-center {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: var(--gap-lg) var(--gap-md);\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "src/app/auth/register/register.ts", lineNumber: 18 });
})();
export {
  Register
};
//# sourceMappingURL=chunk-HIU6DCQ6.js.map
