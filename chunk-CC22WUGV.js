import {
  PushNotificationService
} from "./chunk-5QIK5W7Z.js";
import {
  TutorialService
} from "./chunk-M5GH7LWB.js";
import {
  GeographyService
} from "./chunk-2TU7X2RF.js";
import {
  RestaurantPublicService
} from "./chunk-TT75TUX5.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-4SOHWVCI.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import {
  AuthService
} from "./chunk-77JDNC7M.js";
import "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YGNU4RXP.js";
import {
  ChangeDetectorRef,
  Component,
  Subject,
  ViewChild,
  catchError,
  filter,
  first,
  inject,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/profile/profile.ts
var _c0 = ["logoInput"];
function Profile_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r2 = ctx.$implicit;
    \u0275\u0275property("value", region_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(region_r2);
  }
}
function Profile_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const province_r3 = ctx.$implicit;
    \u0275\u0275property("value", province_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(province_r3.name);
  }
}
function Profile_img_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r3.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function Profile_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "add_a_photo");
    \u0275\u0275elementEnd();
  }
}
function Profile_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function Profile_button_64_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeLogo());
    });
    \u0275\u0275element(1, "lucide-angular", 49);
    \u0275\u0275text(2, " Rimuovi Logo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function Profile_div_67_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "Attive");
    \u0275\u0275elementEnd();
  }
}
function Profile_div_67_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "Bloccate dal browser");
    \u0275\u0275elementEnd();
  }
}
function Profile_div_67_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "Non attivate");
    \u0275\u0275elementEnd();
  }
}
function Profile_div_67_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "lucide-angular", 62);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, " Ai sensi del ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "GDPR Art.7");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ", il consenso \xE8 libero e revocabile in qualsiasi momento. Salviamo solo i dati tecnici necessari all'invio. Nessun dato \xE8 ceduto a terzi. ");
    \u0275\u0275elementEnd()();
  }
}
function Profile_div_67_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 63);
    \u0275\u0275text(2, " Le notifiche sono bloccate. Per attivarle clicca sull'icona del lucchetto nella barra degli indirizzi del browser e consenti le notifiche. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function Profile_div_67_ng_container_10_lucide_angular_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 69);
  }
}
function Profile_div_67_ng_container_10_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1, " Dovrai consentire le notifiche dal browser dopo il click. ");
    \u0275\u0275elementEnd();
  }
}
function Profile_div_67_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 63);
    \u0275\u0275text(2, " Ricevi notifiche la chat. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "label", 65)(5, "input", 66);
    \u0275\u0275listener("change", function Profile_div_67_ng_container_10_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.togglePush());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Attiva notifiche push");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, Profile_div_67_ng_container_10_lucide_angular_8_Template, 1, 0, "lucide-angular", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, Profile_div_67_ng_container_10_p_9_Template, 2, 0, "p", 68);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r3.isPushActive)("disabled", ctx_r3.pushLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.pushLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.pushPermission === "default");
  }
}
function Profile_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275element(2, "lucide-angular", 52);
    \u0275\u0275elementStart(3, "strong", 53);
    \u0275\u0275text(4, "Notifiche push");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Profile_div_67_span_5_Template, 2, 0, "span", 54)(6, Profile_div_67_span_6_Template, 2, 0, "span", 55)(7, Profile_div_67_span_7_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, Profile_div_67_div_8_Template, 7, 0, "div", 33)(9, Profile_div_67_ng_container_9_Template, 3, 0, "ng-container", 57)(10, Profile_div_67_ng_container_10_Template, 10, 4, "ng-container", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.pushPermission === "granted" && ctx_r3.hasActivePush);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.pushPermission === "denied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.pushPermission === "default");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.pushPermission !== "denied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.pushPermission === "denied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.pushPermission !== "denied");
  }
}
function Profile_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "lucide-angular", 71);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Le notifiche push non sono supportate su questo browser.");
    \u0275\u0275elementEnd()();
  }
}
function Profile_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function Profile_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function Profile_option_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    \u0275\u0275property("value", step_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r7.title, " ");
  }
}
var Profile = class _Profile {
  fb = inject(FormBuilder);
  restaurantService = inject(RestaurantPublicService);
  geographyService = inject(GeographyService);
  tutorialService = inject(TutorialService);
  authService = inject(AuthService);
  pushService = inject(PushNotificationService);
  cdr = inject(ChangeDetectorRef);
  pushPermission = "default";
  hasActivePush = false;
  pushLoading = false;
  isOwner = false;
  destroy$ = new Subject();
  profileForm;
  loading = false;
  logoPreview;
  restaurant = null;
  provinces = [];
  regions = [];
  filteredProvinces = [];
  logoInput;
  ngOnInit() {
    this.pushPermission = this.pushService.isSupported() ? Notification.permission : "unsupported";
    this.authService.currentUser$.pipe(filter((user) => !!user), first(), switchMap(() => this.pushService.hasActiveSubscription()), catchError((err) => {
      console.error("Errore nel controllo notifiche:", err);
      return of(false);
    }), takeUntil(this.destroy$)).subscribe((active) => {
      this.hasActivePush = active;
      console.log("hasActivePush after auth:", active);
    });
    this.initForm();
    this.loadProvinces();
    this.loadRestaurantData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.profileForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      address: ["", Validators.required],
      phone: ["", [Validators.required, Validators.pattern(/^[\+\d\s\-\(\)]{8,20}$/)]],
      email: ["", [Validators.required, Validators.email]],
      region: [""],
      province: [""]
    });
  }
  loadProvinces() {
    return __async(this, null, function* () {
      this.geographyService.getFilteredProvinces().pipe(takeUntil(this.destroy$)).subscribe((provinces) => {
        this.provinces = provinces;
        this.regions = [...new Set(provinces.map((p) => p.region))].filter((r) => r !== "Tutte").sort();
      });
    });
  }
  loadRestaurantData() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        this.restaurant = yield this.restaurantService.loadCurrentRestaurant();
        if (this.restaurant) {
          this.patchForm(this.restaurant);
          this.logoPreview = this.restaurant.logo_url || void 0;
          const currentUser = this.authService.currentUserValue;
          this.isOwner = currentUser ? this.restaurant.owner_id === currentUser.id : false;
          if (!this.isOwner) {
            this.profileForm.disable();
          }
        }
      } catch (error) {
        console.error("Errore caricamento profilo:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  patchForm(restaurant) {
    const provinceCode = restaurant.province;
    let regionFromProvince = "";
    if (provinceCode && this.provinces.length) {
      const province = this.provinces.find((p) => p.code === provinceCode);
      if (province) {
        regionFromProvince = province.region;
        this.filterProvincesByRegion(regionFromProvince);
      }
    }
    this.profileForm.patchValue({
      name: restaurant.name,
      description: restaurant.description || "",
      address: restaurant.address,
      phone: restaurant.phone,
      email: restaurant.email,
      region: regionFromProvince,
      province: provinceCode || ""
    });
  }
  filterProvincesByRegion(region) {
    this.filteredProvinces = region ? this.provinces.filter((p) => p.region === region) : [];
    const provinceControl = this.profileForm.get("province");
    if (this.filteredProvinces.length > 0) {
      provinceControl?.enable();
    } else {
      provinceControl?.disable();
      this.profileForm.patchValue({ province: "" });
    }
  }
  onRegionChange(event) {
    const region = event.target.value;
    this.filterProvincesByRegion(region);
  }
  onProvinceChange(event) {
    const provinceCode = event.target.value;
    if (provinceCode) {
      const province = this.provinces.find((p) => p.code === provinceCode);
      if (province) {
        this.profileForm.patchValue({ region: province.region });
        this.filterProvincesByRegion(province.region);
      }
    } else {
      this.profileForm.patchValue({ region: "" });
      this.filteredProvinces = [];
    }
  }
  triggerLogoInput() {
    this.logoInput.nativeElement.click();
  }
  onLogoSelected(event) {
    return __async(this, null, function* () {
      const input = event.target;
      if (!input.files?.length)
        return;
      const file = input.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Il file non pu\xF2 superare i 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("Seleziona un file immagine");
        return;
      }
      this.loading = true;
      try {
        const publicUrl = yield this.restaurantService.uploadLogo(file);
        if (publicUrl) {
          this.logoPreview = publicUrl;
          alert("Logo caricato con successo!");
        }
      } catch (error) {
        alert("Errore caricamento logo: " + error.message);
      } finally {
        this.loading = false;
        input.value = "";
      }
    });
  }
  removeLogo() {
    return __async(this, null, function* () {
      if (!this.logoPreview)
        return;
      if (!confirm("Rimuovere il logo?"))
        return;
      this.loading = true;
      try {
        const success = yield this.restaurantService.removeLogo();
        if (success) {
          this.logoPreview = void 0;
          alert("Logo rimosso");
        }
      } catch (error) {
        alert("Errore: " + error.message);
      } finally {
        this.loading = false;
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.isOwner) {
        alert("Non hai i permessi per modificare questo profilo.");
        return;
      }
      if (this.profileForm.invalid)
        return;
      this.loading = true;
      try {
        const formValue = this.profileForm.value;
        const restaurantId = yield this.restaurantService.getCurrentRestaurantId();
        if (!restaurantId)
          throw new Error("Ristorante non trovato");
        const updateData = {
          name: formValue.name,
          description: formValue.description || null,
          address: formValue.address,
          phone: this.cleanPhoneNumber(formValue.phone),
          email: formValue.email,
          province: formValue.province || null
        };
        if (formValue.address && formValue.province) {
          const coords = yield this.restaurantService.geocodeAddress(formValue.address, formValue.province);
          if (coords) {
            updateData.latitude = coords.lat;
            updateData.longitude = coords.lng;
            console.log("\u2705 Coordinate ottenute:", coords);
          } else {
            console.warn("\u26A0\uFE0F Geocoding fallito, procedo senza coordinate");
            alert("Indirizzo non geolocalizzato automaticamente. Puoi inserire le coordinate manualmente in seguito.");
          }
        }
        const success = yield this.restaurantService.updateRestaurant(restaurantId, updateData);
        if (success) {
          alert("Profilo aggiornato!");
          yield this.loadRestaurantData();
        }
      } catch (error) {
        alert("Errore salvataggio: " + error.message);
      } finally {
        this.loading = false;
      }
    });
  }
  cleanPhoneNumber(phone) {
    if (!phone)
      return "";
    return phone.startsWith("+") ? "+" + phone.substring(1).replace(/\D/g, "") : phone.replace(/\D/g, "");
  }
  // Espone gli step filtrati per il template
  get tutorialSteps() {
    return this.tutorialService.steps();
  }
  get tutorialSections() {
    const context = this.authService.getCurrentContext();
    const allSteps = context === "staff" ? TutorialService.BUSINESS_STEPS : TutorialService.CUSTOMER_STEPS;
    const visibleSteps = allSteps.filter((step) => {
      if (!step.requiredPermission)
        return true;
      return this.authService.hasPermission(step.requiredPermission);
    });
    return visibleSteps.filter((step) => step.tooltipTarget || step.subSteps && step.subSteps.length > 0);
  }
  selectedStepId = null;
  startSelectedTutorial() {
    if (this.selectedStepId) {
      this.tutorialService.startTutorialFromStep(this.selectedStepId, "single");
    }
  }
  restartFullTutorial() {
    const context = this.authService.getCurrentContext();
    const type = context === "staff" ? "business" : "customer";
    this.tutorialService.restartTutorial(type);
  }
  enablePushNotifications() {
    return __async(this, null, function* () {
      console.log("A. enablePushNotifications called");
      this.pushLoading = true;
      try {
        const success = yield this.pushService.requestPermissionAndSubscribe();
        console.log("B. Risultato:", success);
        this.pushPermission = Notification.permission;
        this.hasActivePush = success;
        console.log("C. Stato aggiornato - hasActivePush:", this.hasActivePush);
        this.cdr.detectChanges();
      } catch (err) {
        console.error("D. Errore in enablePushNotifications:", err);
      } finally {
        this.pushLoading = false;
        this.cdr.detectChanges();
        console.log("E. pushLoading = false");
      }
    });
  }
  disablePushNotifications() {
    return __async(this, null, function* () {
      console.log("disablePushNotifications - start");
      this.pushLoading = true;
      yield this.pushService.revokeConsent();
      this.hasActivePush = false;
      console.log("disablePushNotifications - hasActivePush set to false");
      this.pushLoading = false;
      this.cdr.detectChanges();
    });
  }
  get isPushActive() {
    const active = this.pushPermission === "granted" && this.hasActivePush;
    console.log("isPushActive computed:", active, "pushPermission:", this.pushPermission, "hasActivePush:", this.hasActivePush);
    return active;
  }
  togglePush() {
    return __async(this, null, function* () {
      if (this.pushLoading)
        return;
      if (this.isPushActive) {
        yield this.disablePushNotifications();
      } else {
        yield this.enablePushNotifications();
      }
    });
  }
  static \u0275fac = function Profile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Profile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile, selectors: [["app-profile"]], viewQuery: function Profile_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.logoInput = _t.first);
    }
  }, decls: 88, vars: 19, consts: [["logoInput", ""], [1, "page-container"], [1, "flex", "flex-col", "gap-sm", 3, "ngSubmit", "formGroup"], ["data-tutorial", "profile-info", 1, "form-card"], [1, "form-row", "mb-md"], [1, "material-icons", "text-md"], [1, "text-md", "font-semibold", "m-0"], [1, "form-row", "mb-sm"], [1, "form-group"], [1, "standard-label"], ["type", "text", "formControlName", "name", "placeholder", "Es: Trattoria da Mario"], ["type", "email", "formControlName", "email", "placeholder", "info@ristorante.it"], ["type", "tel", "formControlName", "phone", "placeholder", "+39 123 456 7890"], ["formControlName", "region", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "province", 3, "change"], ["type", "text", "formControlName", "address", "placeholder", "Via Roma 123, Milano"], ["formControlName", "description", "rows", "3", "placeholder", "Racconta la storia del tuo ristorante..."], ["data-tutorial", "profile-logo", 1, "form-card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "form-row"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "flex", "items-center", "gap-md", "flex-wrap"], [1, "logo-preview-container", 2, "width", "120px", "height", "120px", "border", "2px dashed var(--smoke-2)", "border-radius", "12px", "display", "flex", "align-items", "center", "justify-content", "center", "overflow", "hidden", "background", "var(--smoke-1)"], ["alt", "Logo", "style", "max-width: 100%; max-height: 100%; object-fit: contain;", 3, "src", 4, "ngIf"], ["class", "material-icons", "style", "font-size: 48px; color: var(--smoke-3);", 4, "ngIf"], [1, "flex", "flex-col", "gap-sm"], ["type", "button", 1, "promethea-button", "ghost", 3, "click", "disabled"], [1, "material-icons"], ["type", "button", "class", "promethea-button ghost", "style", "color: var(--danger);", 3, "disabled", "click", 4, "ngIf"], [1, "text-mini", "text-muted"], ["class", "card p-md gap-md", 4, "ngIf"], ["class", "info-message", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "promethea-button", 3, "disabled"], ["class", "material-icons", 4, "ngIf"], ["data-tutorial", "profile-actions", 1, "form-row", "p-sm"], ["for", "tutorial-step", 1, "standard-label"], ["id", "tutorial-step", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "flex", "gap-sm", "items-center", "p-sm"], [1, "promethea-button", "primary", "ml-2", 3, "click", "disabled"], ["type", "button", 1, "promethea-button", "outline", 3, "click"], ["name", "play-circle", 3, "size"], [3, "value"], ["alt", "Logo", 2, "max-width", "100%", "max-height", "100%", "object-fit", "contain", 3, "src"], [1, "material-icons", 2, "font-size", "48px", "color", "var(--smoke-3)"], ["type", "button", 1, "promethea-button", "ghost", 2, "color", "var(--danger)", 3, "click", "disabled"], ["name", "trash-2", 3, "size"], [1, "card", "p-md", "gap-md"], [1, "flex", "items-center", "gap-sm"], ["name", "bell", 1, "gradient-text"], [1, "text-md"], ["class", "chip active", 4, "ngIf"], ["class", "chip warning", 4, "ngIf"], ["class", "chip", 4, "ngIf"], [4, "ngIf"], [1, "chip", "active"], [1, "chip", "warning"], [1, "chip"], [1, "info-message"], ["name", "shield-check"], [1, "text-muted"], [1, "flex", "items-center", "gap-md"], [1, "checkbox-label", 2, "display", "flex", "align-items", "center", "gap", "0.5rem", "cursor", "pointer"], ["type", "checkbox", 3, "change", "checked", "disabled"], ["name", "refresh-cw", "class", "animate-spin", "style", "width: 1.2rem;", 4, "ngIf"], ["class", "text-xs text-muted", 4, "ngIf"], ["name", "refresh-cw", 1, "animate-spin", 2, "width", "1.2rem"], [1, "text-xs", "text-muted"], ["name", "alert-circle"]], template: function Profile_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "form", 2);
      \u0275\u0275listener("ngSubmit", function Profile_Template_form_ngSubmit_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "span", 5);
      \u0275\u0275text(5, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 6);
      \u0275\u0275text(7, "Informazioni Base");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "label", 9);
      \u0275\u0275text(11, "Nome Ristorante *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "label", 9);
      \u0275\u0275text(16, "Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "label", 9);
      \u0275\u0275text(20, "Telefono *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 7)(23, "div", 8)(24, "label", 9);
      \u0275\u0275text(25, "Regione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 13);
      \u0275\u0275listener("change", function Profile_Template_select_change_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRegionChange($event));
      });
      \u0275\u0275elementStart(27, "option", 14);
      \u0275\u0275text(28, "Seleziona Regione");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, Profile_option_29_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 8)(31, "label", 9);
      \u0275\u0275text(32, "Provincia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "select", 16);
      \u0275\u0275listener("change", function Profile_Template_select_change_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onProvinceChange($event));
      });
      \u0275\u0275elementStart(34, "option", 14);
      \u0275\u0275text(35, "Seleziona Provincia");
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, Profile_option_36_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 8)(38, "label", 9);
      \u0275\u0275text(39, "Indirizzo *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 8)(42, "label", 9);
      \u0275\u0275text(43, "Descrizione");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "textarea", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 19)(46, "div", 20)(47, "span", 5);
      \u0275\u0275text(48, "image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h2", 6);
      \u0275\u0275text(50, "Logo Ristorante");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 21)(52, "div", 8)(53, "input", 22, 0);
      \u0275\u0275listener("change", function Profile_Template_input_change_53_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogoSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 23)(56, "div", 24);
      \u0275\u0275template(57, Profile_img_57_Template, 1, 1, "img", 25)(58, Profile_span_58_Template, 2, 0, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 27)(60, "button", 28);
      \u0275\u0275listener("click", function Profile_Template_button_click_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.triggerLogoInput());
      });
      \u0275\u0275elementStart(61, "span", 29);
      \u0275\u0275text(62, "cloud_upload");
      \u0275\u0275elementEnd();
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, Profile_button_64_Template, 3, 2, "button", 30);
      \u0275\u0275elementStart(65, "span", 31);
      \u0275\u0275text(66, "Formati: JPG, PNG, WEBP. Max 5MB.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(67, Profile_div_67_Template, 11, 6, "div", 32)(68, Profile_div_68_Template, 4, 0, "div", 33);
      \u0275\u0275elementStart(69, "div", 34)(70, "button", 35);
      \u0275\u0275template(71, Profile_span_71_Template, 2, 0, "span", 36)(72, Profile_span_72_Template, 2, 0, "span", 36);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 37)(75, "div", 8)(76, "label", 38);
      \u0275\u0275text(77, "Scegli una sezione da rivedere:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "select", 39);
      \u0275\u0275twoWayListener("ngModelChange", function Profile_Template_select_ngModelChange_78_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedStepId, $event) || (ctx.selectedStepId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(79, "option", 40);
      \u0275\u0275text(80, "-- Seleziona --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, Profile_option_81_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 41)(83, "button", 42);
      \u0275\u0275listener("click", function Profile_Template_button_click_83_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.startSelectedTutorial());
      });
      \u0275\u0275text(84, " Avvia sezione ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "button", 43);
      \u0275\u0275listener("click", function Profile_Template_button_click_85_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.restartFullTutorial());
      });
      \u0275\u0275element(86, "lucide-angular", 44);
      \u0275\u0275text(87, " Tutorial completo ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(28);
      \u0275\u0275property("ngForOf", ctx.regions);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.filteredProvinces);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngIf", ctx.logoPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.logoPreview);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.logoPreview ? "Sostituisci" : "Carica", " Logo ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.logoPreview);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.pushService.isSupported());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.pushService.isSupported());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || ctx.profileForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Salvataggio..." : "Salva Profilo", " ");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStepId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tutorialSections);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.selectedStepId);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LucideAngularModule, LucideAngularComponent, FormsModule, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Profile, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideAngularModule, FormsModule], template: `<div class="page-container">\r
\r
  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-sm">\r
\r
    <!-- Informazioni Base -->\r
    <div class="form-card" data-tutorial="profile-info">\r
      <div class="form-row mb-md">\r
        <span class="material-icons text-md">info</span>\r
        <h2 class="text-md font-semibold m-0">Informazioni Base</h2>\r
      </div>\r
\r
      <div class="form-row mb-sm">\r
        <div class="form-group">\r
          <label class="standard-label">Nome Ristorante *</label>\r
          <input type="text" formControlName="name" placeholder="Es: Trattoria da Mario" />\r
        </div>\r
      </div>\r
\r
      <div class="form-row mb-sm">\r
        <div class="form-group">\r
          <label class="standard-label">Email *</label>\r
          <input type="email" formControlName="email" placeholder="info@ristorante.it" />\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Telefono *</label>\r
          <input type="tel" formControlName="phone" placeholder="+39 123 456 7890" />\r
        </div>\r
      </div>\r
\r
      <div class="form-row mb-sm">\r
        <div class="form-group">\r
          <label class="standard-label">Regione</label>\r
          <select formControlName="region" (change)="onRegionChange($event)">\r
            <option value="">Seleziona Regione</option>\r
            <option *ngFor="let region of regions" [value]="region">{{ region }}</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Provincia</label>\r
          <select formControlName="province" (change)="onProvinceChange($event)">\r
            <option value="">Seleziona Provincia</option>\r
            <option *ngFor="let province of filteredProvinces" [value]="province.code">{{ province.name }}</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="standard-label">Indirizzo *</label>\r
        <input type="text" formControlName="address" placeholder="Via Roma 123, Milano" />\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="standard-label">Descrizione</label>\r
        <textarea formControlName="description" rows="3" placeholder="Racconta la storia del tuo ristorante..."></textarea>\r
      </div>\r
    </div>\r
    <!-- Logo -->\r
    <div class="form-card" data-tutorial="profile-logo">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">image</span>\r
        <h2 class="text-md font-semibold m-0">Logo Ristorante</h2>\r
      </div>\r
      <div class="form-row">\r
        <div class="form-group">\r
          <input #logoInput type="file" accept="image/*" style="display: none;" (change)="onLogoSelected($event)" />\r
          <div class="flex items-center gap-md flex-wrap">\r
            <div class="logo-preview-container" style="width: 120px; height: 120px; border: 2px dashed var(--smoke-2); border-radius: 12px; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--smoke-1);">\r
              <img *ngIf="logoPreview" [src]="logoPreview" alt="Logo" style="max-width: 100%; max-height: 100%; object-fit: contain;" />\r
              <span *ngIf="!logoPreview" class="material-icons" style="font-size: 48px; color: var(--smoke-3);">add_a_photo</span>\r
            </div>\r
            <div class="flex flex-col gap-sm">\r
              <button type="button" class="promethea-button ghost" (click)="triggerLogoInput()" [disabled]="loading">\r
                <span class="material-icons">cloud_upload</span>\r
                {{ logoPreview ? 'Sostituisci' : 'Carica' }} Logo\r
              </button>\r
              <button type="button" *ngIf="logoPreview" class="promethea-button ghost" style="color: var(--danger);" (click)="removeLogo()" [disabled]="loading">\r
                <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                Rimuovi Logo\r
              </button>\r
              <span class="text-mini text-muted">Formati: JPG, PNG, WEBP. Max 5MB.</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
<!-- \u2500\u2500 NOTIFICHE PUSH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="card p-md gap-md" *ngIf="pushService.isSupported()">\r
\r
  <div class="flex items-center gap-sm">\r
    <lucide-angular name="bell" class="gradient-text"></lucide-angular>\r
    <strong class="text-md">Notifiche push</strong>\r
    <span class="chip active"  *ngIf="pushPermission === 'granted' && hasActivePush">Attive</span>\r
    <span class="chip warning" *ngIf="pushPermission === 'denied'">Bloccate dal browser</span>\r
    <span class="chip"         *ngIf="pushPermission === 'default'">Non attivate</span>\r
  </div>\r
\r
  <!-- Messaggio informativo GDPR (sempre visibile tranne quando bloccato) -->\r
  <div class="info-message" *ngIf="pushPermission !== 'denied'">\r
    <lucide-angular name="shield-check"></lucide-angular>\r
    <span>\r
      Ai sensi del <strong>GDPR Art.7</strong>, il consenso \xE8 libero e revocabile\r
      in qualsiasi momento. Salviamo solo i dati tecnici necessari all'invio.\r
      Nessun dato \xE8 ceduto a terzi.\r
    </span>\r
  </div>\r
\r
  <!-- Caso: permesso negato -->\r
  <ng-container *ngIf="pushPermission === 'denied'">\r
    <p class="text-muted">\r
      Le notifiche sono bloccate. Per attivarle clicca sull'icona del lucchetto\r
      nella barra degli indirizzi del browser e consenti le notifiche.\r
    </p>\r
  </ng-container>\r
\r
  <!-- Caso: permesso non negato (default o granted) -->\r
  <ng-container *ngIf="pushPermission !== 'denied'">\r
    <p class="text-muted">\r
      Ricevi notifiche la chat.\r
    </p>\r
\r
    <div class="flex items-center gap-md">\r
      <label class="checkbox-label" style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">\r
        <input type="checkbox"\r
               [checked]="isPushActive"\r
               [disabled]="pushLoading"\r
               (change)="togglePush()">\r
        <span>Attiva notifiche push</span>\r
      </label>\r
\r
      <!-- Indicatore di caricamento opzionale -->\r
      <lucide-angular name="refresh-cw" class="animate-spin" *ngIf="pushLoading" style="width: 1.2rem;"></lucide-angular>\r
    </div>\r
\r
    <p class="text-xs text-muted" *ngIf="pushPermission === 'default'">\r
      Dovrai consentire le notifiche dal browser dopo il click.\r
    </p>\r
  </ng-container>\r
\r
</div>\r
\r
<!-- Browser non supportato -->\r
<div class="info-message" *ngIf="!pushService.isSupported()">\r
  <lucide-angular name="alert-circle"></lucide-angular>\r
  <span>Le notifiche push non sono supportate su questo browser.</span>\r
</div>\r
\r
    <!-- Azioni -->\r
    <div class="modal-footer">\r
      <button type="submit" class="promethea-button" [disabled]="loading || profileForm.invalid">\r
        <span class="material-icons" *ngIf="loading">sync</span>\r
        <span class="material-icons" *ngIf="!loading">save</span>\r
        {{ loading ? 'Salvataggio...' : 'Salva Profilo' }}\r
      </button>\r
\r
\r
    </div>\r
\r
  </form>\r
\r
 \r
  \r
<div class="form-row p-sm" data-tutorial="profile-actions">\r
<div class="form-group">\r
  <label class="standard-label" for="tutorial-step">Scegli una sezione da rivedere:</label>\r
  <select id="tutorial-step" [(ngModel)]="selectedStepId">\r
    <option [ngValue]="null">-- Seleziona --</option>\r
    <option *ngFor="let step of tutorialSections" [value]="step.id">\r
      {{ step.title }}\r
    </option>\r
  </select>\r
</div>\r
\r
<div class="flex gap-sm items-center p-sm">\r
  <button class="promethea-button primary ml-2" (click)="startSelectedTutorial()" [disabled]="!selectedStepId">\r
    Avvia sezione\r
  </button>\r
  <button type="button" class="promethea-button outline" (click)="restartFullTutorial()">\r
    <lucide-angular name="play-circle" [size]="18"></lucide-angular>\r
    Tutorial completo\r
  </button>\r
</div>\r
</div>\r
</div>` }]
  }], null, { logoInput: [{
    type: ViewChild,
    args: ["logoInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile, { className: "Profile", filePath: "src/app/restaurant/profile/profile.ts", lineNumber: 20 });
})();
export {
  Profile
};
//# sourceMappingURL=chunk-CC22WUGV.js.map
