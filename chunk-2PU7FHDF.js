import {
  PushNotificationService
} from "./chunk-FTKH6NMW.js";
import {
  CheckboxControlValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import {
  Router
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-6GUAOFJT.js";
import {
  ChangeDetectorRef,
  Component,
  Subject,
  filter,
  inject,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/customer/settings-customer/settings-customer.ts
function SettingsCustomer_div_23_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1, " Dovrai consentire le notifiche dal browser dopo il click. ");
    \u0275\u0275elementEnd();
  }
}
function SettingsCustomer_div_23_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1, " Notifiche bloccate dal browser. Per riattivarle, modifica le impostazioni del sito. ");
    \u0275\u0275elementEnd();
  }
}
function SettingsCustomer_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 29);
    \u0275\u0275text(2, "Notifiche Push");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "label", 7)(5, "input", 31);
    \u0275\u0275listener("change", function SettingsCustomer_div_23_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePush());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "strong");
    \u0275\u0275text(8, "Notifiche push");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10, "Ricevi notifiche in tempo reale sul tuo dispositivo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SettingsCustomer_div_23_p_13_Template, 2, 0, "p", 33)(14, SettingsCustomer_div_23_p_14_Template, 2, 0, "p", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.isPushActive)("disabled", ctx_r1.pushLoading);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.isPushActive)("warning", !ctx_r1.isPushActive && ctx_r1.pushPermission === "denied");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isPushActive ? "Attive" : ctx_r1.pushPermission === "denied" ? "Bloccate" : "Disattive", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pushPermission === "default");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pushPermission === "denied");
  }
}
function SettingsCustomer_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "lucide-angular", 36);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Il tuo account personale \xE8 disattivato.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Puoi riattivarlo dalle ");
    \u0275\u0275elementStart(7, "a", 37);
    \u0275\u0275text(8, "Impostazioni");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ".");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function SettingsCustomer_div_38_div_7_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 54);
    \u0275\u0275listener("error", function SettingsCustomer_div_38_div_7_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r3);
      const restaurant_r4 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(restaurant_r4.logo_url = null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", restaurant_r4.logo_url, \u0275\u0275sanitizeUrl)("alt", restaurant_r4.name);
  }
}
function SettingsCustomer_div_38_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 19);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd()();
  }
}
function SettingsCustomer_div_38_div_7_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56)(1, "span", 48);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", restaurant_r4.address, " ");
  }
}
function SettingsCustomer_div_38_div_7_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57)(1, "span", 48);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", restaurant_r4.cuisine_type, " ");
  }
}
function SettingsCustomer_div_38_div_7_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function SettingsCustomer_div_38_div_7_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const restaurant_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchToRestaurant(restaurant_r4));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", restaurant_r4.is_owner ? "Gestisci" : "Lavora qui", " ");
  }
}
function SettingsCustomer_div_38_div_7_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 19);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Attuale ");
    \u0275\u0275elementEnd();
  }
}
function SettingsCustomer_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42);
    \u0275\u0275template(3, SettingsCustomer_div_38_div_7_img_3_Template, 1, 2, "img", 43)(4, SettingsCustomer_div_38_div_7_div_4_Template, 3, 0, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "h3", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47)(9, "span", 32)(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, SettingsCustomer_div_38_div_7_p_16_Template, 4, 1, "p", 49)(17, SettingsCustomer_div_38_div_7_p_17_Template, 4, 1, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 51);
    \u0275\u0275template(19, SettingsCustomer_div_38_div_7_button_19_Template, 4, 2, "button", 52)(20, SettingsCustomer_div_38_div_7_div_20_Template, 4, 0, "div", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const restaurant_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", restaurant_r4.logo_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !restaurant_r4.logo_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(restaurant_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chip-owner", restaurant_r4.is_owner);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", restaurant_r4.is_owner ? "star" : "badge", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", restaurant_r4.is_owner ? "Proprietario" : \u0275\u0275pipeBind1(13, 14, restaurant_r4.staff_role), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", restaurant_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", restaurant_r4.is_active ? "Attivo" : "Inattivo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r4.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r4.cuisine_type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isCurrentRestaurant(restaurant_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCurrentRestaurant(restaurant_r4.id));
  }
}
function SettingsCustomer_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5, "I Tuoi Ristoranti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38);
    \u0275\u0275template(7, SettingsCustomer_div_38_div_7_Template, 21, 16, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.allRestaurants);
  }
}
function SettingsCustomer_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "lucide-angular", 36);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Questo ristorante \xE8 disattivato.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "I clienti non possono vederlo. Riattivalo dalle ");
    \u0275\u0275elementStart(7, "a", 60);
    \u0275\u0275text(8, "Impostazioni");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ".");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function SettingsCustomer_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 62);
    \u0275\u0275text(2, "business_center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 63);
    \u0275\u0275text(4, "Nessun ristorante associato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, " Non sei proprietario di nessun ristorante e non fai parte di nessuno staff. ");
    \u0275\u0275elementEnd()();
  }
}
function SettingsCustomer_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function SettingsCustomer_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function SettingsCustomer_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Salvataggio...");
    \u0275\u0275elementEnd();
  }
}
function SettingsCustomer_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Salva Impostazioni");
    \u0275\u0275elementEnd();
  }
}
function SettingsCustomer_div_56_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.accountActionError);
  }
}
function SettingsCustomer_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "div", 67);
    \u0275\u0275element(4, "lucide-angular", 68);
    \u0275\u0275elementStart(5, "h3", 69);
    \u0275\u0275text(6, "Disattiva account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 70);
    \u0275\u0275listener("click", function SettingsCustomer_div_56_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeactivateUserConfirm = false);
    });
    \u0275\u0275element(8, "lucide-angular", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 72)(10, "p");
    \u0275\u0275text(11, "Sei sicuro di voler disattivare il tuo account personale? Verrai disconnesso e potrai riattivarlo al prossimo accesso dalle impostazioni.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SettingsCustomer_div_56_p_12_Template, 2, 1, "p", 73);
    \u0275\u0275elementStart(13, "div", 74)(14, "button", 75);
    \u0275\u0275listener("click", function SettingsCustomer_div_56_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeactivateUserConfirm = false);
    });
    \u0275\u0275text(15, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 76);
    \u0275\u0275listener("click", function SettingsCustomer_div_56_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeactivateUser());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.accountActionLoading);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.accountActionError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.accountActionLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.accountActionLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.accountActionLoading ? "Attendere..." : "Disattiva", " ");
  }
}
function SettingsCustomer_div_57_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.accountActionError);
  }
}
function SettingsCustomer_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "div", 67);
    \u0275\u0275element(4, "lucide-angular", 68);
    \u0275\u0275elementStart(5, "h3", 69);
    \u0275\u0275text(6, "Elimina ristorante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 70);
    \u0275\u0275listener("click", function SettingsCustomer_div_57_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeleteUserConfirm = false);
    });
    \u0275\u0275element(8, "lucide-angular", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 72)(10, "p");
    \u0275\u0275text(11, "Sei assolutamente sicuro? Tutti i tuoi dati verranno eliminati ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "definitivamente");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, ". Questa azione \xE8 irreversibile.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SettingsCustomer_div_57_p_15_Template, 2, 1, "p", 73);
    \u0275\u0275elementStart(16, "div", 78)(17, "button", 75);
    \u0275\u0275listener("click", function SettingsCustomer_div_57_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeleteUserConfirm = false);
    });
    \u0275\u0275text(18, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 76);
    \u0275\u0275listener("click", function SettingsCustomer_div_57_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteUser());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.accountActionLoading);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.accountActionError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.accountActionLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.accountActionLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.accountActionLoading ? "Attendere..." : "Elimina definitivamente", " ");
  }
}
var SettingsCustomer = class _SettingsCustomer {
  fb;
  pushService = inject(PushNotificationService);
  cdr = inject(ChangeDetectorRef);
  settingsForm;
  loading = false;
  staffRestaurants = [];
  ownedRestaurants = [];
  userProfile = null;
  restaurant = null;
  // NOTIFICHE
  pushPermission = "default";
  hasActivePush = false;
  pushLoading = false;
  // Danger zone
  showDeactivateUserConfirm = false;
  showDeleteUserConfirm = false;
  accountActionLoading = false;
  accountActionError = "";
  destroy$ = new Subject();
  supabaseClient = inject(SupabaseService).getSupabaseClient();
  authService = inject(AuthService);
  router = inject(Router);
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.initForm();
    this.setupStaffRestaurantsSubscription();
    this.loadUserProfile();
    this.loadOwnedRestaurants();
    this.pushPermission = this.pushService.isSupported() ? Notification.permission : "unsupported";
    this.authService.currentUser$.pipe(filter((user) => !!user), takeUntil(this.destroy$), switchMap(() => this.pushService.hasActiveSubscription())).subscribe((active) => {
      this.hasActivePush = active;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.settingsForm = this.fb.group({
      email_notifications: [true],
      newsletter: [true],
      is_active: [true]
    });
  }
  loadUserProfile() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        const user = this.authService.currentUserValue;
        if (!user)
          return;
        const { data, error } = yield this.supabaseClient.from("users").select("preferences, is_active").eq("id", user.id).single();
        if (error) {
          if (error.code === "PGRST116") {
            yield this.createMinimalProfile(user.id);
            return;
          }
          throw error;
        }
        if (data) {
          this.settingsForm.patchValue({
            email_notifications: data.preferences?.email_notifications ?? true,
            newsletter: data.preferences?.newsletter ?? true,
            is_active: data.is_active ?? true
          });
        }
      } catch (err) {
        console.error("Errore caricamento profilo:", err);
      } finally {
        this.loading = false;
      }
    });
  }
  createMinimalProfile(userId) {
    return __async(this, null, function* () {
      const user = this.authService.currentUserValue;
      if (!user)
        return;
      const payload = {
        id: userId,
        email: user.email,
        preferences: {
          email_notifications: true,
          newsletter: true
        },
        is_active: true,
        role: "customer",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      const { error } = yield this.supabaseClient.from("users").insert(payload);
      if (!error) {
        this.settingsForm.patchValue({
          email_notifications: true,
          newsletter: true,
          is_active: true
        });
      }
    });
  }
  // ────────────────────────────────────────────────
  //          PARTE RISTORANTI – tienila tutta
  // ────────────────────────────────────────────────
  setupStaffRestaurantsSubscription() {
    this.authService.allStaffRecords$.pipe(takeUntil(this.destroy$)).subscribe((staffRecords) => __async(this, null, function* () {
      if (staffRecords?.length) {
        yield this.loadStaffRestaurants(staffRecords);
      } else {
        this.staffRestaurants = [];
      }
    }));
  }
  loadStaffRestaurants(staffRecords) {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        const promises = staffRecords.map((record) => __async(this, null, function* () {
          const { data, error } = yield this.supabaseClient.from("restaurants").select("*").eq("id", record.restaurant_id).single();
          if (error)
            return null;
          return __spreadProps(__spreadValues({}, data), {
            staff_role: record.role,
            staff_permissions: record.permissions,
            staff_invitation_status: record.invitation_status
          });
        }));
        const restaurants = yield Promise.all(promises);
        this.staffRestaurants = restaurants.filter(Boolean);
      } catch (err) {
        console.error("Errore staff restaurants:", err);
        this.staffRestaurants = [];
      } finally {
        this.loading = false;
      }
    });
  }
  loadOwnedRestaurants() {
    return __async(this, null, function* () {
      const user = this.authService.currentUserValue;
      if (!user)
        return;
      try {
        const { data, error } = yield this.supabaseClient.from("restaurants").select("*").eq("owner_id", user.id);
        if (error)
          throw error;
        this.ownedRestaurants = (data || []).map((r) => __spreadProps(__spreadValues({}, r), {
          staff_role: "owner",
          is_owner: true
        }));
        this.restaurant = this.ownedRestaurants[0] || null;
      } catch (err) {
        console.error("Errore owned restaurants:", err);
        this.ownedRestaurants = [];
      }
    });
  }
  get allRestaurants() {
    return [...this.ownedRestaurants, ...this.staffRestaurants];
  }
  isCurrentRestaurant(restaurantId) {
    return this.authService.getCurrentRestaurantId() === restaurantId;
  }
  switchToRestaurant(restaurant) {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        const success = yield this.authService.switchRestaurant(restaurant.id);
        if (!success)
          throw new Error("Switch fallito");
        setTimeout(() => {
          this.router.navigate(["/restaurant/dashboard"]);
        }, 400);
      } catch (err) {
        console.error(err);
        alert("Errore cambio ristorante: " + (err.message || "Errore sconosciuto"));
      } finally {
        this.loading = false;
      }
    });
  }
  // ────────────────────────────────────────────────
  onSubmit() {
    return __async(this, null, function* () {
      if (this.settingsForm.invalid)
        return;
      this.loading = true;
      try {
        const user = this.authService.currentUserValue;
        if (!user)
          throw new Error("Utente non loggato");
        const values = this.settingsForm.value;
        const updateData = {
          preferences: {
            email_notifications: values.email_notifications,
            newsletter: values.newsletter
          },
          is_active: values.is_active,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        const { error } = yield this.supabaseClient.from("users").update(updateData).eq("id", user.id);
        if (error)
          throw error;
        alert("Impostazioni salvate!");
      } catch (err) {
        console.error(err);
        alert("Errore salvataggio: " + (err.message || "Errore sconosciuto"));
      } finally {
        this.loading = false;
      }
    });
  }
  resetForm() {
    this.loadUserProfile();
  }
  confirmDeactivateUser() {
    return __async(this, null, function* () {
      this.accountActionLoading = true;
      this.accountActionError = "";
      const result = yield this.authService.deactivateUserAccount();
      if (result.success) {
        yield this.authService.logout();
      } else {
        this.accountActionError = result.error || "Errore durante la disattivazione";
        this.showDeactivateUserConfirm = false;
      }
      this.accountActionLoading = false;
    });
  }
  confirmDeleteUser() {
    return __async(this, null, function* () {
      this.accountActionLoading = true;
      this.accountActionError = "";
      const result = yield this.authService.deleteUserAccount();
      if (!result.success) {
        this.accountActionError = result.error || "Errore durante la cancellazione";
        this.showDeleteUserConfirm = false;
      }
      this.accountActionLoading = false;
    });
  }
  enablePushNotifications() {
    return __async(this, null, function* () {
      this.pushLoading = true;
      try {
        const success = yield this.pushService.requestPermissionAndSubscribe();
        this.hasActivePush = success;
        this.pushPermission = Notification.permission;
      } catch (err) {
        console.error(err);
      } finally {
        this.pushLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  disablePushNotifications() {
    return __async(this, null, function* () {
      this.pushLoading = true;
      yield this.pushService.revokeConsent();
      this.hasActivePush = false;
      this.pushLoading = false;
      this.cdr.detectChanges();
    });
  }
  get isPushActive() {
    return this.pushPermission === "granted" && this.hasActivePush;
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
  static \u0275fac = function SettingsCustomer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsCustomer)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsCustomer, selectors: [["app-settings-customer"]], decls: 58, vars: 14, consts: [[1, "page-container"], [1, "flex", "flex-col", 3, "ngSubmit", "formGroup"], [1, "form-card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-md"], [1, "text-md", "font-semibold", "m-0"], [1, "flex", "flex-col", "gap-md", 2, "display", "none"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "email_notifications"], [1, "checkbox-content"], [1, "text-muted"], ["type", "checkbox", "formControlName", "newsletter"], ["class", "form-group", 4, "ngIf"], ["type", "checkbox", "formControlName", "is_active"], ["class", "account-deactivated-banner", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "modal-footer", "p-sm"], ["type", "button", 1, "promethea-button", "ghost", 3, "click", "disabled"], [1, "material-icons"], ["type", "submit", 1, "promethea-button", 3, "disabled"], ["class", "material-icons", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer", "mt-lg", "p-sm", 2, "display", "none"], [1, "danger-item"], [1, "promethea-button", "outline", 3, "click"], ["name", "trash-2"], ["class", "modal-overlay", 4, "ngIf"], [1, "form-group"], [1, "standard-label"], [1, "flex", "items-center", "gap-sm"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "chip"], ["class", "text-xs text-muted", 4, "ngIf"], [1, "text-xs", "text-muted"], [1, "account-deactivated-banner"], ["name", "alert-triangle", 3, "size"], ["routerLink", "/customer/settings"], [1, "grid-cards"], ["class", "card p-md hover-lift transition", 4, "ngFor", "ngForOf"], [1, "card", "p-md", "hover-lift", "transition"], [1, "flex", "gap-md", "items-start"], [1, "flex-shrink-0"], ["class", "rounded-full", "style", "width: 56px; height: 56px; object-fit: cover;", 3, "src", "alt", "error", 4, "ngIf"], ["class", "rounded-full bg-smoke flex items-center justify-center", "style", "width: 56px; height: 56px;", 4, "ngIf"], [1, "flex-1"], [1, "card-title"], [1, "flex", "gap-sm", "flex-wrap", "mt-sm"], [1, "material-icons", "text-mini"], ["class", "text-muted text-mini mt-sm", 4, "ngIf"], ["class", "text-muted text-mini", 4, "ngIf"], [1, "flex", "flex-col", "gap-sm", "justify-center"], ["type", "button", "class", "promethea-button ghost x-small", 3, "disabled", "click", 4, "ngIf"], ["class", "chip active", 4, "ngIf"], [1, "rounded-full", 2, "width", "56px", "height", "56px", "object-fit", "cover", 3, "error", "src", "alt"], [1, "rounded-full", "bg-smoke", "flex", "items-center", "justify-center", 2, "width", "56px", "height", "56px"], [1, "text-muted", "text-mini", "mt-sm"], [1, "text-muted", "text-mini"], ["type", "button", 1, "promethea-button", "ghost", "x-small", 3, "click", "disabled"], [1, "chip", "active"], ["routerLink", "/restaurant/settings"], [1, "empty-state"], [1, "material-icons", "fs-lg"], [1, "text-md", "font-semibold", "mt-sm"], [1, "modal-overlay"], [1, "modal-container", "modal-md"], [1, "modal-header"], [1, "flex", "items-center", "gap-md"], ["name", "triangle-alert"], [1, "section-title", "m-0"], [1, "icon-button", 3, "click", "disabled"], ["name", "x"], [1, "form-card", "mt-lg"], ["class", "error-msg", 4, "ngIf"], [1, "modal-actions"], [1, "promethea-button", 3, "click", "disabled"], [1, "promethea-button", "outline", 3, "click", "disabled"], [1, "error-msg"], [1, "modal-footer"]], template: function SettingsCustomer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function SettingsCustomer_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 5);
      \u0275\u0275text(7, "Preferenze");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "label", 7);
      \u0275\u0275element(10, "input", 8);
      \u0275\u0275elementStart(11, "div", 9)(12, "strong");
      \u0275\u0275text(13, "Notifiche Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275text(15, "Ricevi aggiornamenti e promozioni via email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "label", 7);
      \u0275\u0275element(17, "input", 11);
      \u0275\u0275elementStart(18, "div", 9)(19, "strong");
      \u0275\u0275text(20, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10);
      \u0275\u0275text(22, "Ricevi le ultime novit\xE0 e offerte speciali");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(23, SettingsCustomer_div_23_Template, 15, 9, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 2)(25, "div", 3)(26, "span", 4);
      \u0275\u0275text(27, "visibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h2", 5);
      \u0275\u0275text(29, "Stato Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "label", 7);
      \u0275\u0275element(31, "input", 13);
      \u0275\u0275elementStart(32, "div", 9)(33, "strong");
      \u0275\u0275text(34, "Account attivo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 10);
      \u0275\u0275text(36, "Ricevi notifiche e puoi effettuare prenotazioni");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(37, SettingsCustomer_div_37_Template, 10, 1, "div", 14)(38, SettingsCustomer_div_38_Template, 8, 1, "div", 15)(39, SettingsCustomer_div_39_Template, 10, 1, "div", 14)(40, SettingsCustomer_div_40_Template, 7, 0, "div", 16);
      \u0275\u0275elementStart(41, "div", 17)(42, "button", 18);
      \u0275\u0275listener("click", function SettingsCustomer_Template_button_click_42_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275elementStart(43, "span", 19);
      \u0275\u0275text(44, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " Annulla Modifiche ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 20);
      \u0275\u0275template(47, SettingsCustomer_span_47_Template, 2, 0, "span", 21)(48, SettingsCustomer_span_48_Template, 2, 0, "span", 21)(49, SettingsCustomer_span_49_Template, 2, 0, "span", 22)(50, SettingsCustomer_span_50_Template, 2, 0, "span", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 23)(52, "div", 24)(53, "button", 25);
      \u0275\u0275listener("click", function SettingsCustomer_Template_button_click_53_listener() {
        return ctx.showDeleteUserConfirm = true;
      });
      \u0275\u0275element(54, "lucide-angular", 26);
      \u0275\u0275text(55, " Elimina Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(56, SettingsCustomer_div_56_Template, 18, 5, "div", 27)(57, SettingsCustomer_div_57_Template, 21, 5, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.settingsForm);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.pushService.isSupported());
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.userProfile && !ctx.userProfile.is_active);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.allRestaurants.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.restaurant && !ctx.restaurant.is_active);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.allRestaurants.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading || ctx.settingsForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showDeactivateUserConfirm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteUserConfirm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, ReactiveFormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.disabled-input[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--background) 80%, transparent);\n  border-color: color-mix(in srgb, var(--text-color) 20%, transparent);\n  color: color-mix(in srgb, var(--text-color) 60%, transparent);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.field-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: color-mix(in srgb, var(--text-color) 60%, transparent);\n  margin-top: 4px;\n  font-style: italic;\n}\n.avatar-upload-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  border: 2px dashed var(--smoke-1);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--background) 95%, transparent);\n  transition: all 0.3s ease;\n}\n.avatar-upload-container[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 5%, transparent);\n}\n.avatar-preview[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid var(--primary);\n  box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 20%, transparent);\n}\n.avatar-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid var(--smoke-1);\n}\n.avatar-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: white;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm) var(--gap-md);\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 600;\n  text-decoration: none;\n}\n.upload-button[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--primary) 80%, transparent);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 30%, transparent);\n}\n.upload-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: color-mix(in srgb, var(--text-color) 60%, transparent);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .avatar-preview[_ngcontent-%COMP%], \n   .avatar-placeholder[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .avatar-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .promethea-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.staff-restaurants-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-md);\n}\n.staff-restaurant-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 16px;\n  background: var(--background);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.staff-restaurant-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px color-mix(in srgb, var(--primary) 15%, transparent);\n}\n.staff-restaurant-item.current-restaurant[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n}\n.restaurant-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid var(--smoke-1);\n}\n.restaurant-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.restaurant-avatar-fallback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.restaurant-avatar-fallback[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.restaurant-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.restaurant-name[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-weight: 700;\n  color: var(--text-color);\n  font-size: var(--fs-sm);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.restaurant-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.restaurant-role[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.role-manager[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 20%, transparent);\n  color: var(--primary);\n}\n.role-chef[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n  color: #f59e0b;\n}\n.role-waiter[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.role-kitchen-staff[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #8b5cf6 20%, transparent);\n  color: #8b5cf6;\n}\n.role-default[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n  color: var(--text-color);\n}\n.restaurant-status[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.restaurant-status.active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.restaurant-status.inactive[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n  color: #6b7280;\n}\n.restaurant-address[_ngcontent-%COMP%], \n.restaurant-cuisine[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.restaurant-address[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.restaurant-cuisine[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.7;\n}\n.restaurant-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: var(--gap-sm);\n  flex-shrink: 0;\n}\n.promethea-button.small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n  min-height: 32px;\n}\n.promethea-button.small[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.current-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: color-mix(in srgb, var(--primary) 15%, transparent);\n  color: var(--primary);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.current-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--gutter-xl);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: var(--gap-md);\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--gap-sm) 0;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .staff-restaurant-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .restaurant-avatar[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .restaurant-actions[_ngcontent-%COMP%] {\n    align-self: stretch;\n    align-items: stretch;\n  }\n  .restaurant-actions[_ngcontent-%COMP%]   .promethea-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .restaurant-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n}\n.staff-restaurant-item.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=settings-customer.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsCustomer, [{
    type: Component,
    args: [{ selector: "app-settings-customer", standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
\r
  <!-- FORM -->\r
  <form [formGroup]="settingsForm" (ngSubmit)="onSubmit()" class="flex flex-col">\r
\r
\r
    <!-- PREFERENZE -->\r
    <div class="form-card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">settings</span>\r
        <h2 class="text-md font-semibold m-0">Preferenze</h2>\r
      </div>\r
\r
      <div class="flex flex-col gap-md" style="display: none;">\r
        <label class="checkbox-label">\r
          <input type="checkbox" formControlName="email_notifications" />\r
          <div class="checkbox-content">\r
            <strong>Notifiche Email</strong>\r
            <div class="text-muted">Ricevi aggiornamenti e promozioni via email</div>\r
          </div>\r
        </label>\r
\r
        <label class="checkbox-label">\r
          <input type="checkbox" formControlName="newsletter" />\r
          <div class="checkbox-content">\r
            <strong>Newsletter</strong>\r
            <div class="text-muted">Ricevi le ultime novit\xE0 e offerte speciali</div>\r
          </div>\r
        </label>\r
      </div>\r
      \r
      <!-- Notifiche Push -->\r
      <div class="form-group" *ngIf="pushService.isSupported()">\r
        <label class="standard-label">Notifiche Push</label>\r
        <div class="flex items-center gap-sm">\r
          <label class="checkbox-label">\r
            <input type="checkbox" \r
                  [checked]="isPushActive"\r
                  [disabled]="pushLoading"\r
                  (change)="togglePush()">\r
            <div class="checkbox-content">\r
              <strong>Notifiche push</strong>\r
              <div class="text-muted">Ricevi notifiche in tempo reale sul tuo dispositivo</div>\r
            </div>\r
          </label>\r
          <span class="chip" [class.active]="isPushActive" [class.warning]="!isPushActive && pushPermission === 'denied'">\r
            {{ isPushActive ? 'Attive' : (pushPermission === 'denied' ? 'Bloccate' : 'Disattive') }}\r
          </span>\r
        </div>\r
        <p class="text-xs text-muted" *ngIf="pushPermission === 'default'">\r
          Dovrai consentire le notifiche dal browser dopo il click.\r
        </p>\r
        <p class="text-xs text-muted" *ngIf="pushPermission === 'denied'">\r
          Notifiche bloccate dal browser. Per riattivarle, modifica le impostazioni del sito.\r
        </p>\r
      </div>\r
    </div>\r
\r
    <!-- STATO ACCOUNT -->\r
    <div class="form-card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">visibility</span>\r
        <h2 class="text-md font-semibold m-0">Stato Account</h2>\r
      </div>\r
\r
      <label class="checkbox-label">\r
        <input type="checkbox" formControlName="is_active" />\r
        <div class="checkbox-content">\r
          <strong>Account attivo</strong>\r
          <div class="text-muted">Ricevi notifiche e puoi effettuare prenotazioni</div>\r
        </div>\r
      </label>\r
    </div>\r
\r
    <!-- Banner account disattivato -->\r
    <div class="account-deactivated-banner" *ngIf="userProfile && !userProfile.is_active">\r
      <lucide-angular name="alert-triangle" [size]="20"></lucide-angular>\r
      <div>\r
        <strong>Il tuo account personale \xE8 disattivato.</strong>\r
        <span>Puoi riattivarlo dalle <a routerLink="/customer/settings">Impostazioni</a>.</span>\r
      </div>\r
    </div>\r
\r
    <!-- RISTORANTI IN CUI LAVORI -->\r
    <div class="form-card" *ngIf="allRestaurants.length > 0">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">business</span>\r
        <h2 class="text-md font-semibold m-0">I Tuoi Ristoranti</h2>\r
      </div>\r
\r
      <div class="grid-cards">\r
        <div *ngFor="let restaurant of allRestaurants" class="card p-md hover-lift transition">\r
          <div class="flex gap-md items-start">\r
            <!-- Avatar Ristorante -->\r
            <div class="flex-shrink-0">\r
              <img \r
                *ngIf="restaurant.logo_url" \r
                [src]="restaurant.logo_url" \r
                [alt]="restaurant.name"\r
                class="rounded-full" \r
                style="width: 56px; height: 56px; object-fit: cover;"\r
                (error)="restaurant.logo_url = null" \r
              />\r
              <div \r
                class="rounded-full bg-smoke flex items-center justify-center" \r
                style="width: 56px; height: 56px;"\r
                *ngIf="!restaurant.logo_url">\r
                <span class="material-icons">restaurant</span>\r
              </div>\r
            </div>\r
\r
            <!-- Dettagli -->\r
            <div class="flex-1">\r
              <h3 class="card-title">{{ restaurant.name }}</h3>\r
\r
              <div class="flex gap-sm flex-wrap mt-sm">\r
                <!-- \u{1F525} BADGE PERSONALIZZATO -->\r
                <span class="chip" [class.chip-owner]="restaurant.is_owner">\r
                  <span class="material-icons text-mini">\r
                    {{ restaurant.is_owner ? 'star' : 'badge' }}\r
                  </span>\r
                  {{ restaurant.is_owner ? 'Proprietario' : (restaurant.staff_role | titlecase) }}\r
                </span>\r
                \r
                <span class="chip" [class.active]="restaurant.is_active">\r
                  {{ restaurant.is_active ? 'Attivo' : 'Inattivo' }}\r
                </span>\r
              </div>\r
\r
              <p class="text-muted text-mini mt-sm" *ngIf="restaurant.address">\r
                <span class="material-icons text-mini">location_on</span>\r
                {{ restaurant.address }}\r
              </p>\r
              <p class="text-muted text-mini" *ngIf="restaurant.cuisine_type">\r
                <span class="material-icons text-mini">restaurant_menu</span>\r
                {{ restaurant.cuisine_type }}\r
              </p>\r
            </div>\r
\r
            <!-- Azioni -->\r
            <div class="flex flex-col gap-sm justify-center">\r
              <!-- \u{1F525} MOSTRA BOTTONE SOLO SE NON \xC8 IL RISTORANTE ATTUALE -->\r
              <button \r
                *ngIf="!isCurrentRestaurant(restaurant.id)" \r
                type="button" \r
                class="promethea-button ghost x-small"\r
                (click)="switchToRestaurant(restaurant)" \r
                [disabled]="loading">\r
                <span class="material-icons">swap_horiz</span>\r
                {{ restaurant.is_owner ? 'Gestisci' : 'Lavora qui' }}\r
              </button>\r
\r
              <div class="chip active" *ngIf="isCurrentRestaurant(restaurant.id)">\r
                <span class="material-icons">check_circle</span>\r
                Attuale\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
<!-- Banner ristorante disattivato -->\r
<div class="account-deactivated-banner" *ngIf="restaurant && !restaurant.is_active">\r
  <lucide-angular name="alert-triangle" [size]="20"></lucide-angular>\r
  <div>\r
    <strong>Questo ristorante \xE8 disattivato.</strong>\r
    <span>I clienti non possono vederlo. Riattivalo dalle <a routerLink="/restaurant/settings">Impostazioni</a>.</span>\r
  </div>\r
</div>\r
\r
<!-- Nessun ristorante -->\r
<div class="empty-state" *ngIf="allRestaurants.length === 0">\r
  <span class="material-icons fs-lg">business_center</span>\r
  <h3 class="text-md font-semibold mt-sm">Nessun ristorante associato</h3>\r
  <p class="text-muted">\r
    Non sei proprietario di nessun ristorante e non fai parte di nessuno staff.\r
  </p>\r
</div>\r
\r
    <!-- AZIONI FINALI -->\r
    <div class="modal-footer p-sm">\r
      <button type="button" (click)="resetForm()" class="promethea-button ghost" [disabled]="loading">\r
        <span class="material-icons">refresh</span>\r
        Annulla Modifiche\r
      </button>\r
\r
      <button type="submit" [disabled]="loading || settingsForm.invalid" class="promethea-button">\r
        <span class="material-icons" *ngIf="loading">sync</span>\r
        <span class="material-icons" *ngIf="!loading">save</span>\r
        <span *ngIf="loading">Salvataggio...</span>\r
        <span *ngIf="!loading">Salva Impostazioni</span>\r
      </button>\r
\r
    </div>\r
\r
  </form>\r
\r
  <!-- \u2500\u2500 ZONA PERICOLOSA \u2500\u2500 -->\r
<div class="modal-footer mt-lg p-sm" style="display: none;">\r
  <div class="danger-item">\r
    <button class="promethea-button outline" (click)="showDeleteUserConfirm = true">\r
    <lucide-angular name="trash-2"></lucide-angular>\r
    Elimina Account</button>\r
  </div>\r
</div>\r
\r
<!-- Modale disattiva account -->\r
<div class="modal-overlay" *ngIf="showDeactivateUserConfirm">\r
  <div class="modal-container modal-md">\r
    <!-- Header -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-md">\r
        <lucide-angular name="triangle-alert"></lucide-angular>\r
        <h3 class="section-title m-0">Disattiva account</h3>\r
      </div>\r
      <button (click)="showDeactivateUserConfirm = false" [disabled]="accountActionLoading"\r
      class="icon-button">\r
      <lucide-angular name="x"></lucide-angular>\r
    </button>\r
    </div>\r
\r
\r
    <div class="form-card mt-lg">\r
    <p>Sei sicuro di voler disattivare il tuo account personale? Verrai disconnesso e potrai riattivarlo al prossimo accesso dalle impostazioni.</p>\r
    <p class="error-msg" *ngIf="accountActionError">{{ accountActionError }}</p>\r
    <div class="modal-actions">\r
      <button (click)="showDeactivateUserConfirm = false" [disabled]="accountActionLoading"\r
      class="promethea-button">Annulla</button>\r
      <button class="promethea-button outline" (click)="confirmDeactivateUser()" [disabled]="accountActionLoading">\r
        {{ accountActionLoading ? 'Attendere...' : 'Disattiva' }}\r
      </button>\r
    </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modale conferma eliminazione Utente -->\r
<div class="modal-overlay" *ngIf="showDeleteUserConfirm">\r
  <div class="modal-container modal-md">\r
    <!-- Header -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-md">\r
        <lucide-angular name="triangle-alert"></lucide-angular>\r
        <h3 class="section-title m-0">Elimina ristorante</h3>\r
      </div>\r
      <button (click)="showDeleteUserConfirm = false" \r
      [disabled]="accountActionLoading" class="icon-button">\r
      <lucide-angular name="x"></lucide-angular>\r
    </button>\r
    </div>\r
\r
    <div class="form-card mt-lg">\r
    <p>Sei assolutamente sicuro? Tutti i tuoi dati verranno eliminati <strong>definitivamente</strong>. Questa azione \xE8 irreversibile.</p>\r
    <p class="error-msg" *ngIf="accountActionError">{{ accountActionError }}</p>\r
    <div class="modal-footer">\r
      <button (click)="showDeleteUserConfirm = false" [disabled]="accountActionLoading"\r
      class="promethea-button">Annulla</button>\r
      <button class="promethea-button outline" (click)="confirmDeleteUser()" [disabled]="accountActionLoading">\r
        {{ accountActionLoading ? 'Attendere...' : 'Elimina definitivamente' }}\r
      </button>\r
    </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
</div>`, styles: ["/* src/app/customer/settings-customer/settings-customer.css */\n.disabled-input {\n  background-color: color-mix(in srgb, var(--background) 80%, transparent);\n  border-color: color-mix(in srgb, var(--text-color) 20%, transparent);\n  color: color-mix(in srgb, var(--text-color) 60%, transparent);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.field-note {\n  font-size: 0.75rem;\n  color: color-mix(in srgb, var(--text-color) 60%, transparent);\n  margin-top: 4px;\n  font-style: italic;\n}\n.avatar-upload-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  border: 2px dashed var(--smoke-1);\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--background) 95%, transparent);\n  transition: all 0.3s ease;\n}\n.avatar-upload-container:hover {\n  border-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 5%, transparent);\n}\n.avatar-preview {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid var(--primary);\n  box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 20%, transparent);\n}\n.avatar-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-placeholder {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid var(--smoke-1);\n}\n.avatar-placeholder .material-icons {\n  font-size: 48px;\n  color: white;\n}\n.file-input {\n  display: none;\n}\n.upload-button {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm) var(--gap-md);\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 600;\n  text-decoration: none;\n}\n.upload-button:hover {\n  background: color-mix(in srgb, var(--primary) 80%, transparent);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 30%, transparent);\n}\n.upload-note {\n  font-size: 0.8rem;\n  color: color-mix(in srgb, var(--text-color) 60%, transparent);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .avatar-preview,\n  .avatar-placeholder {\n    width: 100px;\n    height: 100px;\n  }\n  .avatar-placeholder .material-icons {\n    font-size: 36px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions .promethea-button {\n    width: 100%;\n  }\n}\n.staff-restaurants-list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-md);\n}\n.staff-restaurant-item {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 16px;\n  background: var(--background);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.staff-restaurant-item:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px color-mix(in srgb, var(--primary) 15%, transparent);\n}\n.staff-restaurant-item.current-restaurant {\n  border-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n}\n.restaurant-avatar {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid var(--smoke-1);\n}\n.restaurant-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.restaurant-avatar-fallback {\n  width: 100%;\n  height: 100%;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.restaurant-avatar-fallback .material-icons {\n  font-size: 24px;\n}\n.restaurant-details {\n  flex: 1;\n  min-width: 0;\n}\n.restaurant-name {\n  margin: 0 0 8px 0;\n  font-weight: 700;\n  color: var(--text-color);\n  font-size: var(--fs-sm);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.restaurant-info {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.restaurant-role {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.role-manager {\n  background: color-mix(in srgb, var(--primary) 20%, transparent);\n  color: var(--primary);\n}\n.role-chef {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n  color: #f59e0b;\n}\n.role-waiter {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.role-kitchen-staff {\n  background: color-mix(in srgb, #8b5cf6 20%, transparent);\n  color: #8b5cf6;\n}\n.role-default {\n  background: var(--smoke-1);\n  color: var(--text-color);\n}\n.restaurant-status {\n  padding: 4px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.restaurant-status.active {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.restaurant-status.inactive {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n  color: #6b7280;\n}\n.restaurant-address,\n.restaurant-cuisine {\n  margin: 4px 0 0 0;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.restaurant-address .material-icons,\n.restaurant-cuisine .material-icons {\n  font-size: 14px;\n  opacity: 0.7;\n}\n.restaurant-actions {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: var(--gap-sm);\n  flex-shrink: 0;\n}\n.promethea-button.small {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n  min-height: 32px;\n}\n.promethea-button.small .material-icons {\n  font-size: 16px;\n}\n.current-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: color-mix(in srgb, var(--primary) 15%, transparent);\n  color: var(--primary);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.current-badge .material-icons {\n  font-size: 16px;\n}\n.empty-state {\n  text-align: center;\n  padding: var(--gutter-xl);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  margin-bottom: var(--gap-md);\n  opacity: 0.5;\n}\n.empty-state h3 {\n  margin: 0 0 var(--gap-sm) 0;\n  font-weight: 600;\n}\n.empty-state p {\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .staff-restaurant-item {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .restaurant-avatar {\n    align-self: flex-start;\n  }\n  .restaurant-actions {\n    align-self: stretch;\n    align-items: stretch;\n  }\n  .restaurant-actions .promethea-button {\n    width: 100%;\n    justify-content: center;\n  }\n  .restaurant-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n}\n.staff-restaurant-item.loading {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=settings-customer.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsCustomer, { className: "SettingsCustomer", filePath: "src/app/customer/settings-customer/settings-customer.ts", lineNumber: 20 });
})();
export {
  SettingsCustomer
};
//# sourceMappingURL=chunk-2PU7FHDF.js.map
