import {
  PushNotificationService
} from "./chunk-FTKH6NMW.js";
import {
  TutorialService
} from "./chunk-DUZGO5NE.js";
import {
  GeographyService
} from "./chunk-BF5ZNUI6.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  ChangeDetectorRef,
  Component,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/customer/profile-user/profile-user.ts
function ProfileUser_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", region_r1, " ");
  }
}
function ProfileUser_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const province_r2 = ctx.$implicit;
    \u0275\u0275property("value", province_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", province_r2.name, " ");
  }
}
function ProfileUser_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "lucide-angular", 31);
    \u0275\u0275text(2, " Nessuna provincia disponibile per questa regione ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
function ProfileUser_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "lucide-angular", 31);
    \u0275\u0275text(2, " Seleziona prima una regione ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
function ProfileUser_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Salvataggio...");
    \u0275\u0275elementEnd();
  }
}
function ProfileUser_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Salva modifiche");
    \u0275\u0275elementEnd();
  }
}
var ProfileUser = class _ProfileUser {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  supabaseService = inject(SupabaseService);
  tutorialService = inject(TutorialService);
  geographyService = inject(GeographyService);
  cdRef = inject(ChangeDetectorRef);
  pushService = inject(PushNotificationService);
  pushPermission = "default";
  hasActivePush = false;
  pushLoading = false;
  destroy$ = new Subject();
  supabaseClient = this.supabaseService.getSupabaseClient();
  profileForm;
  loading = false;
  userProfile;
  // Province e regioni
  provinces = [];
  regions = [];
  filteredProvinces = [];
  selectedProvinceName = "";
  ngOnInit() {
    this.pushPermission = this.pushService.isSupported() ? Notification.permission : "unsupported";
    this.pushService.hasActiveSubscription().then((v) => this.hasActivePush = v);
    this.initForm();
    this.loadProvinces();
    this.loadUserProfile();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.profileForm = this.fb.group({
      phone: [""],
      address: [""],
      region: [""],
      province: [""]
    });
  }
  loadProvinces() {
    return __async(this, null, function* () {
      this.geographyService.getFilteredProvinces().pipe(takeUntil(this.destroy$)).subscribe({
        next: (provinces) => {
          this.provinces = provinces;
          this.regions = [...new Set(provinces.map((p) => p.region))].filter((region) => region !== "Tutte").sort();
          const currentRegion = this.profileForm.get("region")?.value;
          if (currentRegion) {
            this.filterProvincesByRegion(currentRegion);
          }
          this.cdRef.detectChanges();
        },
        error: (err) => console.error("Errore caricamento province:", err)
      });
    });
  }
  filterProvincesByRegion(region) {
    this.filteredProvinces = region ? this.provinces.filter((p) => p.region === region) : [];
    if (!region) {
      this.profileForm.patchValue({ province: "" });
    }
  }
  onRegionChange(event) {
    const select = event.target;
    const region = select.value;
    this.filterProvincesByRegion(region);
  }
  onProvinceChange(event) {
    const select = event.target;
    const provinceCode = select.value;
    const province = this.provinces.find((p) => p.code === provinceCode);
    this.selectedProvinceName = province ? province.name : "";
  }
  loadUserProfile() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        const user = this.authService.currentUserValue;
        if (!user)
          throw new Error("Utente non autenticato");
        const { data: userData, error } = yield this.supabaseClient.from("users").select("*").eq("id", user.id).single();
        if (error) {
          if (error.code === "PGRST116") {
            yield this.createUserProfile(user.id);
            return;
          }
          throw error;
        }
        if (userData) {
          this.userProfile = userData;
          this.patchForm(userData);
        }
      } catch (err) {
        console.error("Errore caricamento profilo:", err);
      } finally {
        this.loading = false;
        this.cdRef.detectChanges();
      }
    });
  }
  createUserProfile(userId) {
    return __async(this, null, function* () {
      const user = this.authService.currentUserValue;
      if (!user)
        return;
      const userPayload = {
        id: userId,
        email: user.email,
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        phone: null,
        address: null,
        avatar_url: null,
        preferences: {
          email_notifications: true,
          newsletter: true
        },
        is_active: true,
        role: "customer",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      const { data, error } = yield this.supabaseClient.from("users").insert(userPayload).select().single();
      if (error) {
        console.error("Errore creazione profilo:", error);
        return;
      }
      if (data) {
        this.userProfile = data;
        this.patchForm(data);
      }
    });
  }
  patchForm(data) {
    let regionToSet = "";
    if (data.province) {
      const savedProvince = this.provinces.find((p) => p.code === data.province);
      if (savedProvince) {
        regionToSet = savedProvince.region;
        this.filterProvincesByRegion(regionToSet);
      }
    }
    this.profileForm.patchValue({
      phone: data.phone || "",
      address: data.address || "",
      region: regionToSet,
      province: data.province || ""
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.profileForm.invalid)
        return;
      this.loading = true;
      try {
        const user = this.authService.currentUserValue;
        if (!user)
          throw new Error("Utente non autenticato");
        const formValue = this.profileForm.value;
        const updateData = {
          phone: formValue.phone || null,
          address: formValue.address || null,
          province: formValue.province || null,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        const { error } = yield this.supabaseClient.from("users").update(updateData).eq("id", user.id);
        if (error)
          throw error;
        alert("Profilo aggiornato con successo!");
      } catch (err) {
        console.error("Errore salvataggio:", err);
        alert("Errore durante il salvataggio: " + (err.message || "Errore sconosciuto"));
      } finally {
        this.loading = false;
        this.cdRef.detectChanges();
      }
    });
  }
  restartTutorial() {
    const context = this.authService.getCurrentContext();
    const type = context === "staff" ? "business" : "customer";
    this.tutorialService.restartTutorial(type);
  }
  static \u0275fac = function ProfileUser_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileUser)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileUser, selectors: [["app-profile-user"]], decls: 76, vars: 15, consts: [[1, "page-container"], [1, "profile-form", 3, "ngSubmit", "formGroup"], [1, "form-card"], [1, "form-row"], [1, "form-group"], [1, "standard-label"], ["name", "user", 1, "nav-icon", 3, "size"], ["type", "text", "disabled", "", 1, "disabled-input", 3, "value"], [1, "text-muted", "text-mini", "mt-sm"], [1, "material-icons"], ["name", "mail", 1, "nav-icon", 3, "size"], ["type", "email", "disabled", "", 1, "disabled-input", 3, "value"], [1, "flex", "items-center", "gap-sm", "mb-md", "mt-lg"], [1, "material-icons", "text-md"], [1, "text-md", "font-semibold", "m-0"], [1, "form-row", "mt-sm"], ["formControlName", "region", 1, "standard-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "province", 1, "standard-select", 3, "change", "disabled"], ["class", "text-warning text-mini mt-sm", 4, "ngIf"], ["class", "text-muted text-mini mt-sm", 4, "ngIf"], ["type", "tel", "formControlName", "phone", "placeholder", "+39 123 456 7890"], ["type", "text", "formControlName", "address", "placeholder", "Via Roma 123, Milano"], [1, "modal-footer", "p-sm"], ["type", "submit", 1, "promethea-button", 3, "disabled"], [4, "ngIf"], ["type", "button", 1, "promethea-button", "outline", 3, "click"], ["name", "play-circle", 3, "size"], [3, "value"], [1, "text-warning", "text-mini", "mt-sm"], ["name", "info", 3, "size"]], template: function ProfileUser_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function ProfileUser_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      \u0275\u0275element(6, "lucide-angular", 6);
      \u0275\u0275text(7, " Nome ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 7);
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275text(10, "Il nome non pu\xF2 essere modificato");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "label", 5)(13, "span", 9);
      \u0275\u0275text(14, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Cognome ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 7);
      \u0275\u0275elementStart(17, "div", 8);
      \u0275\u0275text(18, "Il cognome non pu\xF2 essere modificato");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 4)(20, "label", 5);
      \u0275\u0275element(21, "lucide-angular", 10);
      \u0275\u0275text(22, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 11);
      \u0275\u0275elementStart(24, "div", 8);
      \u0275\u0275text(25, "L'email non pu\xF2 essere modificata");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 12)(27, "span", 13);
      \u0275\u0275text(28, "contact_phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h2", 14);
      \u0275\u0275text(30, "Informazioni di Contatto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 15)(32, "div", 4)(33, "label", 5)(34, "span", 9);
      \u0275\u0275text(35, "public");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Regione ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "select", 16);
      \u0275\u0275listener("change", function ProfileUser_Template_select_change_37_listener($event) {
        return ctx.onRegionChange($event);
      });
      \u0275\u0275elementStart(38, "option", 17);
      \u0275\u0275text(39, "Seleziona Regione");
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, ProfileUser_option_40_Template, 2, 2, "option", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 4)(42, "label", 5)(43, "span", 9);
      \u0275\u0275text(44, "map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " Provincia ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 19);
      \u0275\u0275listener("change", function ProfileUser_Template_select_change_46_listener($event) {
        return ctx.onProvinceChange($event);
      });
      \u0275\u0275elementStart(47, "option", 17);
      \u0275\u0275text(48, "Seleziona Provincia");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, ProfileUser_option_49_Template, 2, 2, "option", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, ProfileUser_div_50_Template, 3, 1, "div", 20)(51, ProfileUser_div_51_Template, 3, 1, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 3)(53, "div", 4)(54, "label", 5)(55, "span", 9);
      \u0275\u0275text(56, "phone");
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " Telefono ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 22);
      \u0275\u0275elementStart(59, "div", 8);
      \u0275\u0275text(60, "Numero per le notifiche e prenotazioni");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 4)(62, "label", 5)(63, "span", 9);
      \u0275\u0275text(64, "location_on");
      \u0275\u0275elementEnd();
      \u0275\u0275text(65, " Indirizzo ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 23);
      \u0275\u0275elementStart(67, "div", 8);
      \u0275\u0275text(68, "Indirizzo per consegne a domicilio");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "div", 24)(70, "button", 25);
      \u0275\u0275template(71, ProfileUser_span_71_Template, 2, 0, "span", 26)(72, ProfileUser_span_72_Template, 2, 0, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 27);
      \u0275\u0275listener("click", function ProfileUser_Template_button_click_73_listener() {
        return ctx.restartTutorial();
      });
      \u0275\u0275element(74, "lucide-angular", 28);
      \u0275\u0275text(75, " Rivedi il tutorial ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_9_0;
      let tmp_10_0;
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.userProfile == null ? null : ctx.userProfile.first_name);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.userProfile == null ? null : ctx.userProfile.last_name);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.userProfile == null ? null : ctx.userProfile.email);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.regions);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.filteredProvinces.length);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filteredProvinces);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.filteredProvinces.length && ((tmp_9_0 = ctx.profileForm.get("region")) == null ? null : tmp_9_0.value));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !((tmp_10_0 = ctx.profileForm.get("region")) == null ? null : tmp_10_0.value));
      \u0275\u0275advance(19);
      \u0275\u0275property("disabled", ctx.loading || ctx.profileForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 18);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileUser, [{
    type: Component,
    args: [{ selector: "app-profile-user", standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="profile-form">\r
\r
    <!-- INFORMAZIONI DI CONTATTO -->\r
    <div class="form-card">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
            Nome\r
          </label>\r
          <input type="text" [value]="userProfile?.first_name" disabled class="disabled-input" />\r
          <div class="text-muted text-mini mt-sm">Il nome non pu\xF2 essere modificato</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">person</span>\r
            Cognome\r
          </label>\r
          <input type="text" [value]="userProfile?.last_name" disabled class="disabled-input" />\r
          <div class="text-muted text-mini mt-sm">Il cognome non pu\xF2 essere modificato</div>\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
          Email\r
        </label>\r
        <input type="email" [value]="userProfile?.email" disabled class="disabled-input" />\r
        <div class="text-muted text-mini mt-sm">L'email non pu\xF2 essere modificata</div>\r
      </div>\r
\r
      <div class="flex items-center gap-sm mb-md mt-lg">\r
        <span class="material-icons text-md">contact_phone</span>\r
        <h2 class="text-md font-semibold m-0">Informazioni di Contatto</h2>\r
      </div>\r
      \r
      <div class="form-row mt-sm">\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">public</span>\r
            Regione\r
          </label>\r
          <select \r
            formControlName="region" \r
            class="standard-select"\r
            (change)="onRegionChange($event)">\r
            <option value="">Seleziona Regione</option>\r
            <option *ngFor="let region of regions" [value]="region">\r
              {{ region }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">map</span>\r
            Provincia\r
          </label>\r
          <select \r
            formControlName="province" \r
            class="standard-select"\r
            [disabled]="!filteredProvinces.length"\r
            (change)="onProvinceChange($event)">\r
            <option value="">Seleziona Provincia</option>\r
            <option *ngFor="let province of filteredProvinces" [value]="province.code">\r
              {{ province.name }}\r
            </option>\r
          </select>\r
          \r
          <!-- Messaggio informativo -->\r
          <div *ngIf="!filteredProvinces.length && profileForm.get('region')?.value" \r
              class="text-warning text-mini mt-sm">\r
            <lucide-angular name="info" [size]="16"></lucide-angular>\r
            Nessuna provincia disponibile per questa regione\r
          </div>\r
          \r
          <div *ngIf="!profileForm.get('region')?.value" \r
              class="text-muted text-mini mt-sm">\r
            <lucide-angular name="info" [size]="16"></lucide-angular>\r
            Seleziona prima una regione\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">phone</span>\r
            Telefono\r
          </label>\r
          <input type="tel" formControlName="phone" placeholder="+39 123 456 7890" />\r
          <div class="text-muted text-mini mt-sm">Numero per le notifiche e prenotazioni</div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">location_on</span>\r
            Indirizzo\r
          </label>\r
          <input type="text" formControlName="address" placeholder="Via Roma 123, Milano" />\r
          <div class="text-muted text-mini mt-sm">Indirizzo per consegne a domicilio</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Bottone di salvataggio -->\r
    <div class="modal-footer p-sm">\r
      <button type="submit" class="promethea-button" [disabled]="loading || profileForm.invalid">\r
        <span *ngIf="loading">Salvataggio...</span>\r
        <span *ngIf="!loading">Salva modifiche</span>\r
      </button>\r
      <button type="button"  class="promethea-button outline" (click)="restartTutorial()">\r
        <lucide-angular name="play-circle" [size]="18"></lucide-angular>\r
        Rivedi il tutorial\r
      </button>\r
    </div>\r
  </form>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileUser, { className: "ProfileUser", filePath: "src/app/customer/profile-user/profile-user.ts", lineNumber: 33 });
})();
export {
  ProfileUser
};
//# sourceMappingURL=chunk-IV5TMQAU.js.map
