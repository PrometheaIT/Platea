import {
  ShiftService
} from "./chunk-WGCCOIKJ.js";
import {
  RestaurantPublicService
} from "./chunk-HZVXIAAV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import "./chunk-G2WSKIFL.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-6SNKM7Z6.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Subject,
  ViewChild,
  debounceTime,
  filter,
  inject,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/settings/restaurant-settings/restaurant-settings.ts
var _c0 = ["fileInput"];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c2 = () => ({ standalone: true });
function RestaurantSettings_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    \u0275\u0275property("value", opt_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r1.label, " ");
  }
}
function RestaurantSettings_label_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 8)(1, "input", 48);
    \u0275\u0275listener("change", function RestaurantSettings_label_50_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePayment($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payment_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", payment_r4.value)("checked", ctx_r2.isPaymentSelected(payment_r4.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r4.label);
  }
}
function RestaurantSettings_label_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 8)(1, "input", 48);
    \u0275\u0275listener("change", function RestaurantSettings_label_63_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCuisine($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cuisine_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", cuisine_r6.value)("checked", ctx_r2.isCuisineSelected(cuisine_r6.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cuisine_r6.label);
  }
}
function RestaurantSettings_div_64_label_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 8);
    \u0275\u0275element(1, "input", 50);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const food_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", food_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(food_r7.label);
  }
}
function RestaurantSettings_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "label", 17);
    \u0275\u0275text(2, "Info aggiuntive sul cibo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275template(4, RestaurantSettings_div_64_label_4_Template, 4, 2, "label", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.foodOptions);
  }
}
function RestaurantSettings_div_86_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function RestaurantSettings_div_86_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const i_r9 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteShift(i_r9));
    });
    \u0275\u0275element(1, "lucide-angular", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function RestaurantSettings_div_86_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r11 = ctx.$implicit;
    const j_r12 = ctx.index;
    const shift_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.isDaySelected(shift_r13.days_of_week, j_r12))("warning", !ctx_r2.isDaySelected(shift_r13.days_of_week, j_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r11, " ");
  }
}
function RestaurantSettings_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "h3", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "span", 56)(7, "span", 57);
    \u0275\u0275text(8, "access_time");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 58)(13, "button", 59);
    \u0275\u0275listener("click", function RestaurantSettings_div_86_Template_button_click_13_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleShiftActive(i_r9));
    });
    \u0275\u0275elementStart(14, "span", 60);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 61);
    \u0275\u0275listener("click", function RestaurantSettings_div_86_Template_button_click_16_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editShift(i_r9));
    });
    \u0275\u0275elementStart(17, "span", 60);
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, RestaurantSettings_div_86_button_19_Template, 2, 1, "button", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 63);
    \u0275\u0275template(21, RestaurantSettings_div_86_span_21_Template, 2, 5, "span", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const shift_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("shift-disabled", !shift_r13.is_active);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(shift_r13.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", shift_r13.start_time.substring(0, 5), " - ", shift_r13.end_time.substring(0, 5), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(shift_r13.is_active ? "active" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", shift_r13.is_active ? "Attivo" : "Disattivato", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-green-500", !shift_r13.is_active)("text-orange-500", shift_r13.is_active);
    \u0275\u0275property("title", shift_r13.is_active ? "Disattiva turno" : "Attiva turno");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", shift_r13.is_active ? "pause" : "play_arrow", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.shifts.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
  }
}
function RestaurantSettings_button_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function RestaurantSettings_button_87_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addNewShift());
    });
    \u0275\u0275element(1, "lucide-angular", 68);
    \u0275\u0275text(2, " Aggiungi Nuovo Turno ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function RestaurantSettings_div_88_div_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87)(1, "span", 88);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Copertina ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantSettings_div_88_div_12_div_6_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const num_r19 = ctx.$implicit;
    const photo_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", num_r19)("selected", (photo_r20 == null ? null : photo_r20.display_order) === num_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", num_r19, " ");
  }
}
function RestaurantSettings_div_88_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "label", 90);
    \u0275\u0275text(2, "Posizione:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 91);
    \u0275\u0275listener("change", function RestaurantSettings_div_88_div_12_div_6_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const i_r18 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPhotoOrderChange(i_r18, $event));
    });
    \u0275\u0275template(4, RestaurantSettings_div_88_div_12_div_6_option_4_Template, 2, 3, "option", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.loadingPhotos);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c1));
  }
}
function RestaurantSettings_div_88_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "img", 95);
    \u0275\u0275listener("error", function RestaurantSettings_div_88_div_12_div_8_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r18 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageError($event, i_r18));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 96)(3, "span", 60);
    \u0275\u0275text(4, "zoom_in");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const photo_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", photo_r20.url, \u0275\u0275sanitizeUrl)("alt", "Foto " + photo_r20.display_order);
  }
}
function RestaurantSettings_div_88_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2, "add_photo_alternate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r18 = \u0275\u0275nextContext().index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Slot ", i_r18 + 1, " vuoto");
  }
}
function RestaurantSettings_div_88_div_12_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function RestaurantSettings_div_88_div_12_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const photo_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setCoverPhoto(photo_r20));
    });
    \u0275\u0275elementStart(1, "span", 60);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.loadingPhotos);
  }
}
function RestaurantSettings_div_88_div_12_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function RestaurantSettings_div_88_div_12_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const i_r18 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePhoto(i_r18));
    });
    \u0275\u0275element(1, "lucide-angular", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.loadingPhotos);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function RestaurantSettings_div_88_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 77)(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RestaurantSettings_div_88_div_12_span_5_Template, 4, 0, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RestaurantSettings_div_88_div_12_div_6_Template, 5, 3, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 80);
    \u0275\u0275listener("click", function RestaurantSettings_div_88_div_12_Template_div_click_7_listener() {
      const ctx_r20 = \u0275\u0275restoreView(_r16);
      const photo_r20 = ctx_r20.$implicit;
      const i_r18 = ctx_r20.index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(photo_r20 ? ctx_r2.openPhoto(photo_r20, i_r18) : null);
    });
    \u0275\u0275template(8, RestaurantSettings_div_88_div_12_div_8_Template, 5, 2, "div", 81)(9, RestaurantSettings_div_88_div_12_div_9_Template, 5, 1, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 83)(11, "button", 84);
    \u0275\u0275listener("click", function RestaurantSettings_div_88_div_12_Template_button_click_11_listener() {
      const i_r18 = \u0275\u0275restoreView(_r16).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.triggerFileInput(i_r18));
    });
    \u0275\u0275elementStart(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, RestaurantSettings_div_88_div_12_button_14_Template, 3, 1, "button", 85)(15, RestaurantSettings_div_88_div_12_button_15_Template, 2, 2, "button", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r20 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(i_r18 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", photo_r20 && photo_r20.url === ctx_r2.currentCoverUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", photo_r20);
    \u0275\u0275advance();
    \u0275\u0275styleMap(photo_r20 ? "border: 2px solid var(--smoke-2); background: transparent;" : "border: 2px dashed var(--smoke-1); background: var(--smoke-1);");
    \u0275\u0275classProp("has-photo", photo_r20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", photo_r20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !photo_r20);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", photo_r20 ? "Sostituisci foto" : "Aggiungi foto")("disabled", ctx_r2.loadingPhotos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(photo_r20 ? "camera_alt" : "add_a_photo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", photo_r20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", photo_r20);
  }
}
function RestaurantSettings_div_88_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "div", 103);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3, "Caricamento in corso...");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantSettings_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 6);
    \u0275\u0275text(5, "Galleria Foto del Ristorante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 70);
    \u0275\u0275text(7, " Carica fino a 8 foto (max 10MB ciascuna) per mostrare il tuo ristorante ai clienti. Solo immagini sono permesse. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 71, 0);
    \u0275\u0275listener("change", function RestaurantSettings_div_88_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPhotoFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 72)(11, "div", 7);
    \u0275\u0275template(12, RestaurantSettings_div_88_div_12_Template, 16, 14, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, RestaurantSettings_div_88_div_13_Template, 4, 0, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r2.loadingPhotos);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("loading", ctx_r2.loadingPhotos);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.photos)("ngForTrackBy", ctx_r2.trackByIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingPhotos);
  }
}
function RestaurantSettings_div_89_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function RestaurantSettings_div_89_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.navigateFullscreenPhoto("prev");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 60);
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantSettings_div_89_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function RestaurantSettings_div_89_button_15_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.navigateFullscreenPhoto("next");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 60);
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantSettings_div_89_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.currentPhotoIndex + 1, " / ", ctx_r2.photos.length, " ");
  }
}
function RestaurantSettings_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275listener("click", function RestaurantSettings_div_89_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFullscreenPhoto());
    });
    \u0275\u0275elementStart(1, "div", 105);
    \u0275\u0275listener("click", function RestaurantSettings_div_89_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 106)(3, "h2", 107)(4, "span", 60);
    \u0275\u0275text(5, "photo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Galleria Foto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 108);
    \u0275\u0275listener("click", function RestaurantSettings_div_89_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFullscreenPhoto());
    });
    \u0275\u0275elementStart(8, "span", 60);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 109)(11, "div", 110);
    \u0275\u0275template(12, RestaurantSettings_div_89_button_12_Template, 3, 0, "button", 111);
    \u0275\u0275elementStart(13, "div", 112);
    \u0275\u0275element(14, "img", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RestaurantSettings_div_89_button_15_Template, 3, 0, "button", 114)(16, RestaurantSettings_div_89_div_16_Template, 2, 2, "div", 115);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.hasMultiplePhotos);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.fullscreenPhoto, \u0275\u0275sanitizeUrl)("alt", "Foto galleria " + (ctx_r2.currentPhotoIndex || 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasMultiplePhotos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentPhotoIndex !== null);
  }
}
function RestaurantSettings_lucide_angular_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 119);
  }
}
function RestaurantSettings_lucide_angular_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 120);
  }
}
function RestaurantSettings_span_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Salvataggio...");
    \u0275\u0275elementEnd();
  }
}
function RestaurantSettings_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Salva Impostazioni");
    \u0275\u0275elementEnd();
  }
}
function RestaurantSettings_div_101_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.deleteRestaurantError);
  }
}
function RestaurantSettings_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "div", 106)(3, "div", 123);
    \u0275\u0275element(4, "lucide-angular", 124);
    \u0275\u0275elementStart(5, "h3", 125);
    \u0275\u0275text(6, "Elimina ristorante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 126);
    \u0275\u0275listener("click", function RestaurantSettings_div_101_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDeleteRestaurantConfirm = false);
    });
    \u0275\u0275element(8, "lucide-angular", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 128)(10, "p", 129);
    \u0275\u0275text(11, "Sei assolutamente sicuro? Questa azione \xE8 ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "irreversibile");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, ". Tutti i dati del ristorante (menu, ordini, prenotazioni, staff) verranno eliminati definitivamente.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RestaurantSettings_div_101_p_15_Template, 2, 1, "p", 130);
    \u0275\u0275elementStart(16, "div", 131)(17, "button", 132);
    \u0275\u0275listener("click", function RestaurantSettings_div_101_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDeleteRestaurantConfirm = false);
    });
    \u0275\u0275text(18, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 133);
    \u0275\u0275listener("click", function RestaurantSettings_div_101_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDeleteRestaurant());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.deleteRestaurantLoading);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.deleteRestaurantError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.deleteRestaurantLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.deleteRestaurantLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.deleteRestaurantLoading ? "Eliminazione..." : "Elimina definitivamente", " ");
  }
}
function RestaurantSettings_div_102_label_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 8)(1, "input", 142);
    \u0275\u0275listener("change", function RestaurantSettings_div_102_label_45_Template_input_change_1_listener($event) {
      const j_r31 = \u0275\u0275restoreView(_r30).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCurrentShiftDay(j_r31, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 11)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const day_r32 = ctx.$implicit;
    const j_r31 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isDaySelected(ctx_r2.currentShift.days_of_week, j_r31));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r32);
  }
}
function RestaurantSettings_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275listener("click", function RestaurantSettings_div_102_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeShiftModal());
    });
    \u0275\u0275elementStart(1, "div", 135);
    \u0275\u0275listener("click", function RestaurantSettings_div_102_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 106)(3, "h2", 125)(4, "span", 60);
    \u0275\u0275text(5, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 108);
    \u0275\u0275listener("click", function RestaurantSettings_div_102_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeShiftModal());
    });
    \u0275\u0275elementStart(8, "span", 60);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 136)(11, "div", 29)(12, "div", 137)(13, "label", 17)(14, "span", 60);
    \u0275\u0275text(15, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Nome Turno * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantSettings_div_102_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentShift.name, $event) || (ctx_r2.currentShift.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 137)(19, "div", 16)(20, "label", 17)(21, "span", 60);
    \u0275\u0275text(22, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Ora Inizio * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantSettings_div_102_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentShift.start_time, $event) || (ctx_r2.currentShift.start_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 16)(26, "label", 17)(27, "span", 60);
    \u0275\u0275text(28, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Ora Fine * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantSettings_div_102_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentShift.end_time, $event) || (ctx_r2.currentShift.end_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 137)(32, "label", 8)(33, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantSettings_div_102_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentShift.is_active, $event) || (ctx_r2.currentShift.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 11)(35, "strong");
    \u0275\u0275text(36, "Turno attivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 12);
    \u0275\u0275text(38, "Il turno sar\xE0 disponibile per le prenotazioni");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 53)(40, "label", 17)(41, "span", 60);
    \u0275\u0275text(42, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Giorni Attivi * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 7);
    \u0275\u0275template(45, RestaurantSettings_div_102_label_45_Template, 5, 2, "label", 23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 131)(47, "button", 67);
    \u0275\u0275listener("click", function RestaurantSettings_div_102_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeShiftModal());
    });
    \u0275\u0275elementStart(48, "span", 60);
    \u0275\u0275text(49, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 141);
    \u0275\u0275listener("click", function RestaurantSettings_div_102_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveShift());
    });
    \u0275\u0275element(52, "lucide-angular", 120);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingShift === "new" ? "Aggiungi Nuovo Turno" : "Modifica Turno", " ");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentShift.name);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c2));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentShift.start_time);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c2));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentShift.end_time);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentShift.is_active);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c2));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r2.isCurrentShiftValid());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingShift === "new" ? "Aggiungi Turno" : "Salva Modifiche", " ");
  }
}
var RestaurantSettings = class _RestaurantSettings {
  // Form
  settingsForm;
  canEditSettings = false;
  // State
  loading = false;
  loadingPhotos = false;
  restaurantId = null;
  // UI State
  showShiftModal = false;
  editingShift = null;
  currentSlotIndex = null;
  fullscreenPhoto = null;
  currentPhotoIndex = null;
  canManagePhotos = false;
  // Info Aggiuntive
  paymentOptions = [
    { value: "cash", label: "Contanti" },
    { value: "credit_card", label: "Carta di credito" },
    { value: "debit_card", label: "Bancomat" },
    { value: "satispay", label: "Satispay" },
    { value: "paypal", label: "PayPal" }
  ];
  foodOptions = [
    { value: "vegan", label: "Vegan" },
    { value: "gourmet", label: "Gourmet" },
    { value: "fish", label: "Pesce" },
    { value: "meat", label: "Carne" }
  ];
  // Opzioni parcheggio (singola scelta)
  parkingOptions = [
    { value: "free_private", label: "Parcheggio privato gratuito" },
    { value: "paid_private", label: "Parcheggio privato a pagamento" },
    { value: "free_public", label: "Parcheggio pubblico gratuito" },
    { value: "paid_public", label: "Parcheggio pubblico a pagamento" },
    { value: "none", label: "Nessun parcheggio" }
  ];
  // Tipi di cucina (multipla scelta)
  cuisineOptions = [
    { value: "italian", label: "Italiana" },
    { value: "pizza", label: "Pizzeria" },
    { value: "chinese", label: "Cinese" },
    { value: "japanese", label: "Giapponese" },
    { value: "mediterranean", label: "Mediterranea" },
    { value: "vegan", label: "Vegan" },
    { value: "vegetarian", label: "Vegetariana" },
    { value: "gluten_free", label: "Senza glutine" },
    { value: "fish", label: "Pesce" },
    { value: "meat", label: "Carne" },
    { value: "gourmet", label: "Gourmet" }
    // aggiungi tutte le opzioni che desideri
  ];
  // Data
  shifts = [];
  photos = Array(8).fill(null);
  currentCoverUrl = null;
  // Constants
  weekDays = ["Luned\xEC", "Marted\xEC", "Mercoled\xEC", "Gioved\xEC", "Venerd\xEC", "Sabato", "Domenica"];
  // ViewChild
  fileInput;
  // Services
  fb = inject(FormBuilder);
  supabaseService = inject(SupabaseService);
  shiftService = inject(ShiftService);
  authService = inject(AuthService);
  restaurantService = inject(RestaurantPublicService);
  destroy$ = new Subject();
  supabaseClient = this.supabaseService.getSupabaseClient();
  autoSaveTrigger = new Subject();
  // Shift management properties
  currentShift = this.createEmptyShift();
  // Danger zone
  showDeleteRestaurantConfirm = false;
  deleteRestaurantLoading = false;
  deleteRestaurantError = "";
  ngOnInit() {
    this.initForm();
    this.setupSubscriptions();
    this.loadInitialData();
    this.canEditSettings = this.authService.hasPermission("manage_restaurant_settings");
    if (!this.canEditSettings) {
      this.settingsForm.disable();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.settingsForm = this.fb.group({
      accepts_delivery: [false],
      accepts_takeaway: [false],
      allow_table_selection: [false],
      is_active: [true],
      additional_info: this.fb.group({
        parking: [""],
        accepted_payments: [[]],
        wifi: this.fb.group({
          ssid: [""],
          password: [""]
        }),
        food_info: this.fb.group({
          vegan: [false],
          gourmet: [false],
          fish: [false],
          meat: [false]
        }),
        cuisine_types: [[]]
      })
    });
  }
  setupSubscriptions() {
    this.shiftService.data$.pipe(takeUntil(this.destroy$)).subscribe((shifts) => {
      this.shifts = shifts;
    });
    this.settingsForm.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1500), filter(() => this.settingsForm.valid && !!this.restaurantId)).subscribe(() => this.autoSaveChanges());
    this.autoSaveTrigger.pipe(takeUntil(this.destroy$), debounceTime(1e3), filter(() => !!this.restaurantId)).subscribe(() => this.autoSaveChanges());
  }
  triggerAutoSave() {
    this.autoSaveTrigger.next();
  }
  loadInitialData() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        this.restaurantId = yield this.restaurantService.getCurrentRestaurantId();
        if (!this.restaurantId)
          throw new Error("Nessun ristorante associato all'utente");
        yield this.loadRestaurantData();
        yield this.shiftService.loadData();
        this.canManagePhotos = this.authService.hasPermission("manage_restaurant_settings") || this.authService.hasPermission("manage_dish_photos");
        if (this.canManagePhotos) {
          yield this.loadRestaurantPhotos();
        }
      } catch (error) {
        console.error("Errore caricamento iniziale:", error);
        alert("Errore durante il caricamento dei dati: " + error.message);
      } finally {
        this.loading = false;
      }
    });
  }
  loadRestaurantData() {
    return __async(this, null, function* () {
      const restaurant = yield this.restaurantService.loadCurrentRestaurant();
      if (!restaurant)
        throw new Error("Ristorante non trovato");
      this.currentCoverUrl = restaurant.cover_image_url ?? null;
      this.settingsForm.patchValue({
        accepts_delivery: restaurant.accepts_delivery,
        accepts_takeaway: restaurant.accepts_takeaway,
        allow_table_selection: restaurant.allow_table_selection,
        is_active: restaurant.is_active,
        additional_info: {
          parking: restaurant.additional_info?.parking || "",
          accepted_payments: restaurant.additional_info?.accepted_payments || [],
          wifi: restaurant.additional_info?.wifi || { ssid: "", password: "" },
          food_info: restaurant.additional_info?.food_info || { vegan: false, gourmet: false, fish: false, meat: false },
          cuisine_types: restaurant.additional_info?.cuisine_types || []
        }
      });
    });
  }
  loadRestaurantPhotos() {
    return __async(this, null, function* () {
      if (!this.restaurantId)
        return;
      this.loadingPhotos = true;
      try {
        const photos = yield this.supabaseService.getRestaurantPhotos(this.restaurantId);
        this.photos = Array(8).fill(null);
        photos.forEach((photo) => {
          const index = photo.display_order - 1;
          if (index >= 0 && index < 8) {
            if (!photo.url && photo.file_path) {
              const { data: { publicUrl } } = this.supabaseClient.storage.from("restaurant-images").getPublicUrl(photo.file_path);
              photo.url = publicUrl;
            }
            this.photos[index] = photo;
          }
        });
      } catch (error) {
        console.error("Errore caricamento foto:", error);
      } finally {
        this.loadingPhotos = false;
      }
    });
  }
  autoSaveChanges() {
    return __async(this, null, function* () {
      if (this.settingsForm.invalid || !this.restaurantId)
        return;
      try {
        yield this.saveFormData();
        console.log("\u2705 Salvataggio automatico completato");
      } catch (error) {
        console.error("\u274C Errore salvataggio automatico:", error);
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.settingsForm.invalid || !this.restaurantId)
        return;
      this.loading = true;
      try {
        yield this.saveFormData();
        alert("Impostazioni salvate con successo!");
      } catch (err) {
        console.error("\u274C Errore salvataggio:", err);
        alert("Errore durante il salvataggio: " + err.message);
      } finally {
        this.loading = false;
      }
    });
  }
  saveFormData() {
    return __async(this, null, function* () {
      const formValue = this.settingsForm.value;
      const success = yield this.restaurantService.updateRestaurant(this.restaurantId, {
        accepts_delivery: formValue.accepts_delivery,
        accepts_takeaway: formValue.accepts_takeaway,
        allow_table_selection: formValue.allow_table_selection,
        is_active: formValue.is_active,
        additional_info: formValue.additional_info
      });
      if (!success) {
        throw new Error("Salvataggio fallito: verifica i permessi o contatta il supporto");
      }
    });
  }
  // ==================== SHIFT MANAGEMENT ====================
  createEmptyShift() {
    return {
      name: "",
      start_time: "12:00",
      end_time: "15:00",
      days_of_week: [1, 2, 3, 4, 5, 6, 7],
      is_active: true
    };
  }
  addNewShift() {
    this.editingShift = "new";
    this.currentShift = this.createEmptyShift();
    this.showShiftModal = true;
  }
  editShift(index) {
    this.editingShift = index;
    const shift = this.shifts[index];
    this.currentShift = {
      name: shift.name,
      start_time: shift.start_time,
      end_time: shift.end_time,
      days_of_week: [...shift.days_of_week],
      is_active: shift.is_active
    };
    this.showShiftModal = true;
  }
  saveShift() {
    return __async(this, null, function* () {
      if (!this.isCurrentShiftValid() || !this.restaurantId)
        return;
      this.loading = true;
      try {
        if (this.editingShift === "new") {
          const created = yield this.shiftService.create(this.currentShift);
          if (!created)
            throw new Error("Creazione fallita");
          alert("Turno creato con successo!");
        } else if (typeof this.editingShift === "number") {
          const shiftId = this.shifts[this.editingShift].id;
          const success = yield this.shiftService.update(shiftId, this.currentShift);
          if (!success)
            throw new Error("Aggiornamento fallito");
          alert("Turno aggiornato con successo!");
        }
        this.closeShiftModal();
      } catch (err) {
        alert("Errore salvataggio turno: " + err.message);
        console.error(err);
      } finally {
        this.loading = false;
      }
    });
  }
  deleteShift(index) {
    return __async(this, null, function* () {
      if (!confirm("Sei sicuro di voler eliminare questo turno?"))
        return;
      const shiftId = this.shifts[index].id;
      if (!shiftId)
        return;
      this.loading = true;
      try {
        const success = yield this.shiftService.delete(shiftId);
        if (!success)
          throw new Error("Eliminazione fallita");
        alert("Turno eliminato con successo!");
      } catch (err) {
        alert("Errore eliminazione turno: " + err.message);
        console.error(err);
      } finally {
        this.loading = false;
      }
    });
  }
  toggleShiftActive(index) {
    return __async(this, null, function* () {
      const shift = this.shifts[index];
      const newActiveState = !shift.is_active;
      if (!confirm(`Sei sicuro di voler ${newActiveState ? "attivare" : "disattivare"} il turno "${shift.name}"?`)) {
        return;
      }
      this.loading = true;
      try {
        const success = yield this.shiftService.update(shift.id, { is_active: newActiveState });
        if (!success)
          throw new Error("Operazione fallita");
        alert(`Turno "${shift.name}" ${newActiveState ? "attivato" : "disattivato"} con successo!`);
      } catch (err) {
        alert(`Errore: ${err.message}`);
        console.error(err);
      } finally {
        this.loading = false;
      }
    });
  }
  isCurrentShiftValid() {
    return !!(this.currentShift?.name && this.currentShift?.start_time && this.currentShift?.end_time && this.currentShift?.days_of_week?.length > 0);
  }
  closeShiftModal() {
    this.showShiftModal = false;
    this.editingShift = null;
  }
  toggleCurrentShiftDay(dayIndex, event) {
    const checked = event.target.checked;
    const dayNumber = dayIndex + 1;
    if (checked) {
      if (!this.currentShift.days_of_week.includes(dayNumber)) {
        this.currentShift.days_of_week.push(dayNumber);
      }
    } else {
      this.currentShift.days_of_week = this.currentShift.days_of_week.filter((d) => d !== dayNumber);
    }
  }
  isDaySelected(shiftDays, dayIndex) {
    return shiftDays.includes(dayIndex + 1);
  }
  // ==================== PHOTO MANAGEMENT ====================
  triggerFileInput(slotIndex) {
    this.currentSlotIndex = slotIndex;
    this.fileInput.nativeElement.click();
  }
  onPhotoFileSelected(event) {
    const input = event.target;
    if (!input.files?.length || this.currentSlotIndex === null || !this.restaurantId)
      return;
    const file = input.files[0];
    const slotIndex = this.currentSlotIndex;
    this.currentSlotIndex = null;
    input.value = "";
    this.onPhotoFileSelect(file, slotIndex);
  }
  onPhotoFileSelect(file, slotIndex) {
    return __async(this, null, function* () {
      if (!this.restaurantId)
        return;
      if (file.size > 10 * 1024 * 1024) {
        alert("File troppo grande (max 10MB)");
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("Solo file immagine sono permessi");
        return;
      }
      this.loadingPhotos = true;
      try {
        const displayOrder = slotIndex + 1;
        const uploadResult = yield this.supabaseService.uploadRestaurantPhoto(this.restaurantId, file, displayOrder);
        if (!uploadResult)
          throw new Error("Upload fallito");
        const photoRecord = yield this.supabaseService.saveRestaurantPhotoRecord({
          restaurant_id: this.restaurantId,
          file_path: uploadResult.filePath,
          display_order: displayOrder
        });
        if (!photoRecord)
          throw new Error("Salvataggio record fallito");
        this.photos[slotIndex] = __spreadProps(__spreadValues({}, photoRecord), {
          url: uploadResult.publicUrl
        });
        yield this.syncCoverImage();
        this.triggerAutoSave();
        alert(`Foto ${displayOrder} caricata con successo!`);
      } catch (error) {
        console.error("Errore upload foto:", error);
        alert("Errore durante l'upload: " + error.message);
      } finally {
        this.loadingPhotos = false;
      }
    });
  }
  deletePhoto(slotIndex) {
    return __async(this, null, function* () {
      if (!this.restaurantId)
        return;
      const photo = this.photos[slotIndex];
      if (!photo || !confirm("Sei sicuro di voler eliminare questa foto?"))
        return;
      this.loadingPhotos = true;
      try {
        yield this.supabaseService.deleteRestaurantPhoto(photo.id, photo.file_path);
        this.photos[slotIndex] = null;
        yield this.syncCoverImage();
        this.triggerAutoSave();
        alert("Foto eliminata con successo!");
      } catch (error) {
        console.error("Errore eliminazione foto:", error);
        alert("Errore durante l'eliminazione: " + error.message);
      } finally {
        this.loadingPhotos = false;
      }
    });
  }
  onPhotoOrderChange(slotIndex, event) {
    return __async(this, null, function* () {
      const select = event.target;
      const newOrder = Number(select.value);
      if (newOrder < 1 || newOrder > 8) {
        alert("Ordine non valido. Deve essere tra 1 e 8.");
        const photo2 = this.photos[slotIndex];
        if (photo2)
          select.value = photo2.display_order.toString();
        return;
      }
      const photo = this.photos[slotIndex];
      if (!photo) {
        alert("Nessuna foto in questo slot");
        return;
      }
      if (photo.display_order === newOrder)
        return;
      const oldOrder = photo.display_order;
      try {
        this.loadingPhotos = true;
        const photoAtNewOrder = this.photos.find((p) => p && p.display_order === newOrder);
        if (photoAtNewOrder) {
          yield Promise.all([
            this.supabaseService.updatePhotoOrder(photo.id, newOrder),
            this.supabaseService.updatePhotoOrder(photoAtNewOrder.id, oldOrder)
          ]);
          photo.display_order = newOrder;
          photoAtNewOrder.display_order = oldOrder;
        } else {
          yield this.supabaseService.updatePhotoOrder(photo.id, newOrder);
          photo.display_order = newOrder;
        }
        this.reorganizePhotosByOrder();
        yield this.syncCoverImage();
        this.triggerAutoSave();
        console.log("\u2705 Ordine aggiornato");
      } catch (error) {
        console.error("\u274C Errore aggiornamento ordine:", error);
        alert("Errore durante l'aggiornamento: " + error.message);
        select.value = oldOrder.toString();
        photo.display_order = oldOrder;
      } finally {
        this.loadingPhotos = false;
      }
    });
  }
  reorganizePhotosByOrder() {
    const sortedPhotos = this.photos.filter((p) => p !== null).sort((a, b) => a.display_order - b.display_order);
    const newArray = Array(8).fill(null);
    sortedPhotos.forEach((photo) => {
      const index = photo.display_order - 1;
      if (index >= 0 && index < 8)
        newArray[index] = photo;
    });
    this.photos = newArray;
  }
  openPhoto(photo, index) {
    if (photo?.url) {
      this.fullscreenPhoto = photo.url;
      this.currentPhotoIndex = index;
    }
  }
  closeFullscreenPhoto() {
    this.fullscreenPhoto = null;
    this.currentPhotoIndex = null;
  }
  navigateFullscreenPhoto(direction) {
    if (this.currentPhotoIndex === null || !this.photos)
      return;
    let nextIndex = direction === "next" ? this.currentPhotoIndex + 1 : this.currentPhotoIndex - 1;
    if (nextIndex < 0)
      nextIndex = this.photos.length - 1;
    if (nextIndex >= this.photos.length)
      nextIndex = 0;
    let foundPhoto = false;
    let attempts = 0;
    while (!foundPhoto && attempts < this.photos.length) {
      const photo = this.photos[nextIndex];
      if (photo?.url) {
        this.fullscreenPhoto = photo.url;
        this.currentPhotoIndex = nextIndex;
        foundPhoto = true;
      } else {
        nextIndex = direction === "next" ? nextIndex + 1 : nextIndex - 1;
        if (nextIndex < 0)
          nextIndex = this.photos.length - 1;
        if (nextIndex >= this.photos.length)
          nextIndex = 0;
        attempts++;
      }
    }
  }
  onImageError(event, slotIndex) {
    const img = event.target;
    console.error(`Errore caricamento immagine slot ${slotIndex}:`, img.src);
    img.style.display = "none";
    const container = img.parentElement;
    if (container) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-placeholder";
      errorDiv.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--danger); font-size: 12px;";
      errorDiv.textContent = "Errore caricamento";
      container.appendChild(errorDiv);
    }
  }
  get loadedPhotosCount() {
    return this.photos.filter((p) => p !== null).length;
  }
  get hasMultiplePhotos() {
    return this.loadedPhotosCount > 1;
  }
  trackByIndex(index) {
    return index;
  }
  toggleRestaurantActive() {
    return __async(this, null, function* () {
      if (!this.restaurantId)
        return;
      const newValue = this.settingsForm.get("is_active")?.value;
      const oldValue = !newValue;
      if (!newValue) {
        const confirmed = confirm("Sei sicuro di voler disattivare il ristorante?\n\nI clienti non potranno pi\xF9 vederlo n\xE9 effettuare ordini. L'account verr\xE0 eliminato automaticamente dopo 24 mesi di inattivit\xE0.");
        if (!confirmed) {
          this.settingsForm.patchValue({ is_active: oldValue }, { emitEvent: false });
          return;
        }
      }
      this.loading = true;
      try {
        yield this.restaurantService.updateRestaurant(this.restaurantId, {
          is_active: newValue,
          deactivated_at: newValue ? null : (/* @__PURE__ */ new Date()).toISOString()
        });
        this.triggerAutoSave();
        alert(newValue ? "Ristorante riattivato! Ora \xE8 visibile ai clienti." : "Ristorante disattivato correttamente.");
      } catch (err) {
        alert("Errore: " + err.message);
        this.settingsForm.patchValue({ is_active: oldValue }, { emitEvent: false });
      } finally {
        this.loading = false;
      }
    });
  }
  togglePayment(event) {
    const payments = this.settingsForm.get("additional_info.accepted_payments")?.value || [];
    const value = event.target.value;
    if (event.target.checked) {
      if (!payments.includes(value)) {
        payments.push(value);
      }
    } else {
      const index = payments.indexOf(value);
      if (index > -1) {
        payments.splice(index, 1);
      }
    }
    this.settingsForm.get("additional_info.accepted_payments")?.setValue(payments);
  }
  isPaymentSelected(value) {
    const payments = this.settingsForm.get("additional_info.accepted_payments")?.value;
    return payments ? payments.includes(value) : false;
  }
  toggleCuisine(event) {
    const cuisines = this.settingsForm.get("additional_info.cuisine_types")?.value || [];
    const value = event.target.value;
    if (event.target.checked) {
      if (!cuisines.includes(value)) {
        cuisines.push(value);
      }
    } else {
      const index = cuisines.indexOf(value);
      if (index > -1) {
        cuisines.splice(index, 1);
      }
    }
    this.settingsForm.get("additional_info.cuisine_types")?.setValue(cuisines);
  }
  isCuisineSelected(value) {
    const cuisines = this.settingsForm.get("additional_info.cuisine_types")?.value;
    return cuisines ? cuisines.includes(value) : false;
  }
  confirmDeleteRestaurant() {
    return __async(this, null, function* () {
      if (!this.restaurantId)
        return;
      this.deleteRestaurantLoading = true;
      this.deleteRestaurantError = "";
      try {
        const result = yield this.authService.deleteRestaurant(this.restaurantId);
        if (!result.success) {
          this.deleteRestaurantError = result.error || "Errore durante l'eliminazione";
          return;
        }
      } catch (err) {
        this.deleteRestaurantError = err.message || "Errore sconosciuto";
      } finally {
        this.deleteRestaurantLoading = false;
        this.showDeleteRestaurantConfirm = false;
      }
    });
  }
  syncCoverImage() {
    return __async(this, null, function* () {
      if (!this.restaurantId)
        return;
      const coverPhoto = this.photos.find((p) => p?.display_order === 1);
      const coverUrl = coverPhoto?.url ?? null;
      yield this.supabaseService.getSupabaseClient().from("restaurants").update({ cover_image_url: coverUrl }).eq("id", this.restaurantId);
    });
  }
  setCoverPhoto(photo) {
    return __async(this, null, function* () {
      if (!this.restaurantId)
        return;
      this.loadingPhotos = true;
      try {
        yield this.supabaseService.getSupabaseClient().from("restaurants").update({ cover_image_url: photo.url }).eq("id", this.restaurantId);
        this.currentCoverUrl = photo.url ?? null;
        alert("Foto impostata come copertina!");
      } catch (error) {
        console.error("Errore impostazione copertina:", error);
        alert("Errore: " + error.message);
      } finally {
        this.loadingPhotos = false;
      }
    });
  }
  static \u0275fac = function RestaurantSettings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantSettings)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantSettings, selectors: [["app-restaurant-settings"]], viewQuery: function RestaurantSettings_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, decls: 103, vars: 16, consts: [["fileInput", ""], [1, "page-container"], [1, "flex", "flex-col", "gap-sm", 3, "ngSubmit", "formGroup"], ["data-tutorial", "settings-services", 1, "form-card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-md"], [1, "text-md", "font-semibold", "m-0"], [1, "grid-cards"], [1, "checkbox-label"], [1, "checkbox-grid"], ["type", "checkbox", "formControlName", "accepts_delivery"], [1, "checkbox-content"], [1, "text-muted"], ["type", "checkbox", "formControlName", "accepts_takeaway"], ["type", "checkbox", "formControlName", "allow_table_selection"], ["formGroupName", "additional_info", "data-tutorial", "settings-additional", 1, "form-card"], [1, "form-group"], [1, "standard-label"], ["formControlName", "parking", 1, "form-input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "mt-lg"], [1, "flex", "flex-wrap", "gap-lg"], ["class", "checkbox-label", 4, "ngFor", "ngForOf"], ["formGroupName", "wifi", 1, "mt-lg"], [1, "form-row"], ["type", "text", "formControlName", "ssid", "placeholder", "Nome rete (SSID)", 1, "form-input"], ["type", "text", "formControlName", "password", "placeholder", "Password", 1, "form-input"], ["formGroupName", "food_info", "class", "mb-md", 4, "ngIf"], [1, "form-card"], ["type", "checkbox", "formControlName", "is_active", 3, "change"], ["data-tutorial", "settings-shifts", 1, "form-card"], [1, "flex", "flex-col", "gap-md"], ["class", "shift-item", 3, "shift-disabled", 4, "ngFor", "ngForOf"], ["type", "button", "class", "promethea-button ghost", 3, "click", 4, "ngIf"], ["class", "form-card", "data-tutorial", "settings-gallery", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-footer", "p-sm"], ["type", "submit", 1, "promethea-button", 3, "disabled"], ["name", "refresh-cw", 4, "ngIf"], ["name", "save", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer", "mt-lg", "p-sm", 2, "display", "none"], [1, "danger-item"], [1, "promethea-button", "outline", 3, "click"], ["name", "trash-2"], ["class", "modal-overlay", 4, "ngIf"], [3, "value"], ["type", "checkbox", 3, "change", "value", "checked"], ["formGroupName", "food_info", 1, "mb-md"], ["type", "checkbox", 3, "formControlName"], [1, "shift-item"], [1, "flex", "justify-between", "items-start", "mb-sm", "p-sm"], [1, "flex", "flex-col", "gap-sm"], [1, "font-semibold"], [1, "flex", "flex-wrap", "gap-sm"], [1, "chip"], [1, "material-icons", "text-sm"], [1, "flex", "gap-sm"], ["type", "button", 1, "icon-button", 3, "click", "title"], [1, "material-icons"], ["type", "button", "title", "Modifica turno", 1, "icon-button", 3, "click"], ["type", "button", "class", "icon-button", "title", "Elimina turno", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-sm", "mt-sm", "p-sm0"], ["class", "chip", 3, "active", "warning", 4, "ngFor", "ngForOf"], ["type", "button", "title", "Elimina turno", 1, "icon-button", 3, "click"], ["name", "trash-2", 3, "size"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["name", "plus", 3, "size"], ["data-tutorial", "settings-gallery", 1, "form-card"], [1, "text-muted", "mb-md"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change", "disabled"], [1, "gallery-container"], ["class", "card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.9); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center;", 4, "ngIf"], [1, "card"], [1, "flex", "flex-wrap", "justify-between", "items-center", "mb-sm"], [1, "flex", "items-center", "gap-sm"], ["class", "chip active text-mini", 4, "ngIf"], ["class", "order-selector flex items-center gap-sm", 4, "ngIf"], [1, "photo-preview", "rounded-lg", "border", "transition", "cursor-pointer", "mb-sm", 2, "min-height", "150px", "display", "flex", "align-items", "center", "justify-content", "center", "overflow", "hidden", "position", "relative", 3, "click"], ["class", "w-full h-full", 4, "ngIf"], ["class", "empty-photo-slot flex flex-col items-center justify-center p-md", 4, "ngIf"], [1, "card-footer", "gap-sm"], ["type", "button", 1, "icon-button", "x-small", 3, "click", "title", "disabled"], ["type", "button", "class", "icon-button x-small", "title", "Imposta come copertina", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "icon-button x-small", "title", "Elimina foto", "style", "color: var(--primary);", 3, "disabled", "click", 4, "ngIf"], [1, "chip", "active", "text-mini"], [1, "material-icons", 2, "font-size", "14px"], [1, "order-selector", "flex", "items-center", "gap-sm"], [1, "text-mini"], [1, "text-mini", 3, "change", "disabled"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [1, "w-full", "h-full"], [2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "8px", 3, "error", "src", "alt"], [1, "photo-hover-overlay"], [1, "empty-photo-slot", "flex", "flex-col", "items-center", "justify-center", "p-md"], [1, "material-icons", "empty-icon", 2, "font-size", "48px", "color", "var(--smoke-3)", "margin-bottom", "8px"], [1, "text-sm", "text-muted"], ["type", "button", "title", "Imposta come copertina", 1, "icon-button", "x-small", 3, "click", "disabled"], ["type", "button", "title", "Elimina foto", 1, "icon-button", "x-small", 2, "color", "var(--primary)", 3, "click", "disabled"], [2, "position", "absolute", "top", "0", "left", "0", "right", "0", "bottom", "0", "background", "rgba(255,255,255,0.9)", "z-index", "10", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center"], [1, "spinner", 2, "width", "40px", "height", "40px", "border", "3px solid var(--smoke-1)", "border-top-color", "var(--primary)", "border-radius", "50%", "animation", "spin 1s linear infinite", "margin-bottom", "var(--gap-sm)"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "text-md", "font-semibold", "m-0", "flex", "items-center", "gap-sm"], [1, "icon-button", 3, "click"], [1, "modal-content", "p-lg", "flex", "items-center", "justify-center", 2, "min-height", "60vh"], [2, "position", "relative", "width", "100%", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], ["style", "position: absolute; left: 0; z-index: 20; background: var(--smoke-2); margin: 0 var(--gap-sm);", "class", "icon-button", 3, "click", 4, "ngIf"], [2, "max-width", "64rem", "max-height", "70vh", "display", "flex", "align-items", "center", "justify-content", "center"], [2, "max-width", "100%", "max-height", "70vh", "object-fit", "contain", "border-radius", "12px", 3, "src", "alt"], ["style", "position: absolute; right: 0; z-index: 20; background: var(--smoke-2); margin: 0 var(--gap-sm);", "class", "icon-button", 3, "click", 4, "ngIf"], ["style", "position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.7); color: white; padding: 0.25rem 1rem; border-radius: 999px; font-size: 0.875rem;", 4, "ngIf"], [1, "icon-button", 2, "position", "absolute", "left", "0", "z-index", "20", "background", "var(--smoke-2)", "margin", "0 var(--gap-sm)", 3, "click"], [1, "icon-button", 2, "position", "absolute", "right", "0", "z-index", "20", "background", "var(--smoke-2)", "margin", "0 var(--gap-sm)", 3, "click"], [2, "position", "absolute", "bottom", "1rem", "left", "50%", "transform", "translateX(-50%)", "background", "rgba(0,0,0,0.7)", "color", "white", "padding", "0.25rem 1rem", "border-radius", "999px", "font-size", "0.875rem"], ["name", "refresh-cw"], ["name", "save"], [1, "modal-overlay"], [1, "modal-container", "modal-md"], [1, "flex", "items-center", "gap-md"], ["name", "triangle-alert"], [1, "section-title", "m-0"], [1, "icon-button", 3, "click", "disabled"], ["name", "x"], [1, "form-card", "mt-lg"], [2, "line-height", "1.4"], ["class", "error-msg", 4, "ngIf"], [1, "modal-footer"], [1, "promethea-button", 3, "click", "disabled"], [1, "promethea-button", "outline", 3, "click", "disabled"], [1, "error-msg"], [1, "modal-container", 3, "click"], [1, "modal-content"], [1, "form-row", "mb-md"], ["type", "text", "placeholder", "Es: Pranzo, Cena", "autofocus", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "time", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", 1, "promethea-button", 3, "click", "disabled"], ["type", "checkbox", 3, "change", "checked"]], template: function RestaurantSettings_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "form", 2);
      \u0275\u0275listener("ngSubmit", function RestaurantSettings_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "span", 5);
      \u0275\u0275text(5, "room_service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 6);
      \u0275\u0275text(7, "Servizi Offerti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "label", 8)(10, "div", 9);
      \u0275\u0275element(11, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 11)(13, "strong");
      \u0275\u0275text(14, "Consegna a domicilio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "I clienti possono ordinare con consegna");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "label", 8)(18, "div", 9);
      \u0275\u0275element(19, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11)(21, "strong");
      \u0275\u0275text(22, "Asporto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12);
      \u0275\u0275text(24, "I clienti possono ritirare in loco");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "label", 8)(26, "div", 9);
      \u0275\u0275element(27, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11)(29, "strong");
      \u0275\u0275text(30, "Prenotazione tavolo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 12);
      \u0275\u0275text(32, "I clienti possono scegliere il tavolo");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(33, "div", 15)(34, "div", 4)(35, "span", 5);
      \u0275\u0275text(36, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h2", 6);
      \u0275\u0275text(38, "Informazioni Aggiuntive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 16)(40, "label", 17);
      \u0275\u0275text(41, "Parcheggio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "select", 18)(43, "option", 19);
      \u0275\u0275text(44, "Seleziona un'opzione");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, RestaurantSettings_option_45_Template, 2, 2, "option", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 21)(47, "label", 17);
      \u0275\u0275text(48, "Pagamenti accettati");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 22);
      \u0275\u0275template(50, RestaurantSettings_label_50_Template, 4, 3, "label", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 24)(52, "label", 17);
      \u0275\u0275text(53, "WiFi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 25)(55, "div", 16);
      \u0275\u0275element(56, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 16);
      \u0275\u0275element(58, "input", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 21)(60, "label", 17);
      \u0275\u0275text(61, "Tipi di cucina");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 22);
      \u0275\u0275template(63, RestaurantSettings_label_63_Template, 4, 3, "label", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(64, RestaurantSettings_div_64_Template, 5, 1, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 29)(66, "div", 4)(67, "span", 5);
      \u0275\u0275text(68, "visibility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "h2", 6);
      \u0275\u0275text(70, "Stato Ristorante");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "label", 8)(72, "div", 9)(73, "input", 30);
      \u0275\u0275listener("change", function RestaurantSettings_Template_input_change_73_listener() {
        return ctx.toggleRestaurantActive();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 11)(75, "strong");
      \u0275\u0275text(76, "Ristorante attivo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 12);
      \u0275\u0275text(78, "Visibile ai clienti e accettazione ordini");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 31)(80, "div", 4)(81, "span", 5);
      \u0275\u0275text(82, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "h2", 6);
      \u0275\u0275text(84, "Turni di Lavoro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 32);
      \u0275\u0275template(86, RestaurantSettings_div_86_Template, 22, 16, "div", 33)(87, RestaurantSettings_button_87_Template, 3, 1, "button", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(88, RestaurantSettings_div_88_Template, 14, 6, "div", 35)(89, RestaurantSettings_div_89_Template, 17, 5, "div", 36);
      \u0275\u0275elementStart(90, "div", 37)(91, "button", 38);
      \u0275\u0275template(92, RestaurantSettings_lucide_angular_92_Template, 1, 0, "lucide-angular", 39)(93, RestaurantSettings_lucide_angular_93_Template, 1, 0, "lucide-angular", 40)(94, RestaurantSettings_span_94_Template, 2, 0, "span", 41)(95, RestaurantSettings_span_95_Template, 2, 0, "span", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 42)(97, "div", 43)(98, "button", 44);
      \u0275\u0275listener("click", function RestaurantSettings_Template_button_click_98_listener() {
        return ctx.showDeleteRestaurantConfirm = true;
      });
      \u0275\u0275element(99, "lucide-angular", 45);
      \u0275\u0275text(100, " Elimina Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(101, RestaurantSettings_div_101_Template, 21, 5, "div", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275template(102, RestaurantSettings_div_102_Template, 54, 16, "div", 36);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.settingsForm);
      \u0275\u0275advance(44);
      \u0275\u0275property("ngForOf", ctx.parkingOptions);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.paymentOptions);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.cuisineOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", false);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.shifts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editingShift === null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canManagePhotos);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.fullscreenPhoto);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || ctx.settingsForm.invalid || !ctx.canEditSettings);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showDeleteRestaurantConfirm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showShiftModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormsModule, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.shift-item[_ngcontent-%COMP%] {\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.shift-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--secondary);\n  background: var(--background2);\n}\n.shift-form[_ngcontent-%COMP%] {\n  border: 2px solid var(--smoke-2);\n}\n.shift-disabled[_ngcontent-%COMP%] {\n  background: var(--smoke-3);\n  opacity: 0.8;\n}\n.text-green-500[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.text-orange-500[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.material-icons[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n@media (max-width: 768px) {\n  .shift-item[_ngcontent-%COMP%] {\n    padding: var(--gap-sm);\n  }\n  .shift-item[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .grid-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .md\\\\[_ngcontent-%COMP%]:col-span-2 {\n    grid-column: 1;\n  }\n}\n.gallery-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 300px;\n}\n.photo-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.photo-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border-radius: 8px;\n}\n.photo-hover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  border-radius: 8px;\n  pointer-events: none;\n}\n.photo-preview[_ngcontent-%COMP%]:hover   .photo-hover-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.photo-hover-overlay[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2rem;\n}\n.empty-photo-slot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  padding: var(--gap-lg);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: var(--gap-sm);\n  opacity: 0.5;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--smoke-1);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: var(--gap-sm);\n}\n.nav-button[_ngcontent-%COMP%] {\n  background: var(--smoke-2);\n  margin: 0 var(--gap-sm);\n}\n.nav-button[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-3);\n}\n.photo-counter[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 0.25rem 1rem;\n  border-radius: 999px;\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .grid-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;\n  }\n  .photo-preview[_ngcontent-%COMP%] {\n    min-height: 120px !important;\n  }\n}\n/*# sourceMappingURL=restaurant-settings.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantSettings, [{
    type: Component,
    args: [{ selector: "app-restaurant-settings", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
  <!-- FORM -->\r
  <form [formGroup]="settingsForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-sm">\r
\r
    <!-- SERVIZI OFFERTI -->\r
    <div class="form-card" data-tutorial="settings-services">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">room_service</span>\r
        <h2 class="text-md font-semibold m-0">Servizi Offerti</h2>\r
      </div>\r
      \r
      <div class="grid-cards">\r
        <label class="checkbox-label">\r
          <div class="checkbox-grid">\r
          <input type="checkbox" formControlName="accepts_delivery" />\r
          </div>\r
          <div class="checkbox-content">\r
            <strong>Consegna a domicilio</strong>\r
            <div class="text-muted">I clienti possono ordinare con consegna</div>\r
          </div>\r
        </label>\r
\r
        <label class="checkbox-label">\r
          <div class="checkbox-grid">\r
          <input type="checkbox" formControlName="accepts_takeaway" />\r
          </div>\r
          <div class="checkbox-content">\r
            <strong>Asporto</strong>\r
            <div class="text-muted">I clienti possono ritirare in loco</div>\r
          </div>\r
        </label>\r
\r
        <label class="checkbox-label">\r
          <div class="checkbox-grid">\r
          <input type="checkbox" formControlName="allow_table_selection" />\r
          </div>\r
          <div class="checkbox-content">\r
            <strong>Prenotazione tavolo</strong>\r
            <div class="text-muted">I clienti possono scegliere il tavolo</div>\r
          </div>\r
        </label>\r
      </div>\r
    </div>\r
    <!-- INFO AGGIUNTIVE -->\r
    <div class="form-card" formGroupName="additional_info" data-tutorial="settings-additional">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">info</span>\r
        <h2 class="text-md font-semibold m-0">Informazioni Aggiuntive</h2>\r
      </div>\r
\r
      <!-- Parcheggio (singola scelta) -->\r
      <div class="form-group">\r
        <label class="standard-label">Parcheggio</label>\r
        <select formControlName="parking" class="form-input">\r
          <option value="">Seleziona un'opzione</option>\r
          <option *ngFor="let opt of parkingOptions" [value]="opt.value">\r
            {{ opt.label }}\r
          </option>\r
        </select>\r
      </div>\r
\r
      <!-- Pagamenti accettati (gi\xE0 presente) -->\r
      <div class="form-group mt-lg">\r
        <label class="standard-label">Pagamenti accettati</label>\r
        <div class="flex flex-wrap gap-lg">\r
          <label class="checkbox-label" *ngFor="let payment of paymentOptions">\r
            <input \r
              type="checkbox" \r
              [value]="payment.value"\r
              (change)="togglePayment($event)"\r
              [checked]="isPaymentSelected(payment.value)"\r
            />\r
            <span>{{ payment.label }}</span>\r
          </label>\r
        </div>\r
      </div>\r
\r
      <!-- WiFi -->\r
      <div formGroupName="wifi" class="mt-lg">\r
        <label class="standard-label">WiFi</label>\r
        <div class="form-row">\r
          <div class="form-group">\r
            <input \r
              type="text" \r
              formControlName="ssid"\r
              class="form-input"\r
              placeholder="Nome rete (SSID)"\r
            />\r
          </div>\r
          <div class="form-group">\r
            <input \r
              type="text" \r
              formControlName="password"\r
              class="form-input"\r
              placeholder="Password"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Tipi di cucina (multipla) -->\r
      <div class="form-group mt-lg">\r
        <label class="standard-label">Tipi di cucina</label>\r
        <div class="flex flex-wrap gap-lg">\r
          <label class="checkbox-label" *ngFor="let cuisine of cuisineOptions">\r
            <input \r
              type="checkbox" \r
              [value]="cuisine.value"\r
              (change)="toggleCuisine($event)"\r
              [checked]="isCuisineSelected(cuisine.value)"\r
            />\r
            <span>{{ cuisine.label }}</span>\r
          </label>\r
        </div>\r
      </div>\r
\r
      <!-- (Opzionale) Mantieni i vecchi flag booleani se necessario -->\r
      <div formGroupName="food_info" class="mb-md" *ngIf="false"> <!-- Nascondi se non serve -->\r
        <label class="standard-label">Info aggiuntive sul cibo</label>\r
        <div class="flex flex-wrap gap-lg">\r
          <label class="checkbox-label" *ngFor="let food of foodOptions">\r
            <input type="checkbox" [formControlName]="food.value" />\r
            <span>{{ food.label }}</span>\r
          </label>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- STATO RISTORANTE -->\r
    <div class="form-card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">visibility</span>\r
        <h2 class="text-md font-semibold m-0">Stato Ristorante</h2>\r
      </div>\r
      <label class="checkbox-label">\r
        <div class="checkbox-grid">\r
        <input \r
          type="checkbox" \r
          formControlName="is_active"\r
          (change)="toggleRestaurantActive()" />\r
        </div>\r
        <div class="checkbox-content">\r
          <strong>Ristorante attivo</strong>\r
          <div class="text-muted">Visibile ai clienti e accettazione ordini</div>\r
        </div>\r
      </label>\r
    </div>\r
\r
    <!-- TURNI DEL RISTORANTE -->\r
    <div class="form-card" data-tutorial="settings-shifts">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">schedule</span>\r
        <h2 class="text-md font-semibold m-0">Turni di Lavoro</h2>\r
      </div>\r
      \r
      <div class="flex flex-col gap-md">\r
        <!-- Lista Turni Esistenti -->\r
        <div *ngFor="let shift of shifts; let i = index" class="shift-item" \r
        [class.shift-disabled]="!shift.is_active">\r
          <div class="flex justify-between items-start mb-sm p-sm">\r
            <div class="flex flex-col gap-sm">\r
              <h3 class="font-semibold">{{ shift.name }}</h3>\r
              <div class="flex flex-wrap gap-sm">\r
                <span class="chip">\r
                  <span class="material-icons text-sm">access_time</span>\r
                  {{ shift.start_time.substring(0, 5) }} - {{ shift.end_time.substring(0, 5) }}\r
                </span>\r
                <span class="chip" [class]="shift.is_active ? 'active' : 'warning'">\r
                  {{ shift.is_active ? 'Attivo' : 'Disattivato' }}\r
                </span>\r
              </div>\r
            </div>\r
            \r
            <div class="flex gap-sm">\r
              <button \r
                type="button" \r
                (click)="toggleShiftActive(i)"\r
                class="icon-button"\r
                [class.text-green-500]="!shift.is_active"\r
                [class.text-orange-500]="shift.is_active"\r
                [title]="shift.is_active ? 'Disattiva turno' : 'Attiva turno'"\r
              >\r
                <span class="material-icons">\r
                  {{ shift.is_active ? 'pause' : 'play_arrow' }}\r
                </span>\r
              </button>\r
\r
              <button \r
                type="button" \r
                (click)="editShift(i)"\r
                class="icon-button"\r
                title="Modifica turno"\r
              >\r
                <span class="material-icons">edit</span>\r
              </button>\r
              \r
              <button \r
                type="button" \r
                (click)="deleteShift(i)"\r
                class="icon-button"\r
                *ngIf="shifts.length > 1"\r
                title="Elimina turno"\r
              >\r
                <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
              </button>\r
            </div>\r
          </div>\r
          \r
          <!-- Giorni della settimana -->\r
          <div class="flex flex-wrap gap-sm mt-sm p-sm0">\r
            <span *ngFor="let day of weekDays; let j = index" \r
                  class="chip" \r
                  [class.active]="isDaySelected(shift.days_of_week, j)"\r
                  [class.warning]="!isDaySelected(shift.days_of_week, j)">\r
              {{ day }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Bottone Aggiungi Turno -->\r
        <button \r
          type="button" \r
          (click)="addNewShift()"\r
          class="promethea-button ghost"\r
          *ngIf="editingShift === null"\r
        >\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          Aggiungi Nuovo Turno\r
        </button>\r
      </div>\r
    </div>\r
    \r
\r
    <!-- GALLERIA FOTO -->\r
    <div class="form-card" *ngIf="canManagePhotos" data-tutorial="settings-gallery">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">photo_library</span>\r
        <h2 class="text-md font-semibold m-0">Galleria Foto del Ristorante</h2>\r
      </div>\r
      \r
      <p class="text-muted mb-md">\r
        Carica fino a 8 foto (max 10MB ciascuna) per mostrare il tuo ristorante ai clienti.\r
        Solo immagini sono permesse.\r
      </p>\r
\r
      <!-- Input file unico nascosto -->\r
      <input\r
        type="file"\r
        #fileInput\r
        accept="image/*"\r
        style="display: none;"\r
        (change)="onPhotoFileSelected($event)"\r
        [disabled]="loadingPhotos"\r
      />\r
\r
      <div class="gallery-container" [class.loading]="loadingPhotos">\r
        <div class="grid-cards">\r
          <div class="card" *ngFor="let photo of photos; let i = index; trackBy: trackByIndex">\r
            \r
            <!-- Header con numero e selezione ordine -->\r
            <div class="flex flex-wrap justify-between items-center mb-sm">\r
              <div class="flex items-center gap-sm">\r
                <div class="chip">{{ i + 1 }}</div>\r
                <span class="chip active text-mini" *ngIf="photo && photo.url === currentCoverUrl">\r
                  <span class="material-icons" style="font-size:14px">star</span>\r
                  Copertina\r
                </span>\r
              </div>\r
              <div class="order-selector flex items-center gap-sm" *ngIf="photo">\r
                <label class="text-mini">Posizione:</label>\r
                <select \r
                  (change)="onPhotoOrderChange(i, $event)"\r
                  [disabled]="loadingPhotos"\r
                  class="text-mini"\r
                  >\r
                  <option *ngFor="let num of [1,2,3,4,5,6,7,8]" \r
                          [value]="num"\r
                          [selected]="photo?.display_order === num">\r
                    {{ num }}\r
                  </option>\r
                </select>\r
              </div>\r
            </div>\r
\r
    <!-- Anteprima foto -->\r
    <div \r
      class="photo-preview rounded-lg border transition cursor-pointer mb-sm"\r
      [class.has-photo]="photo"\r
      [style]="photo ? \r
        'border: 2px solid var(--smoke-2); background: transparent;' : \r
        'border: 2px dashed var(--smoke-1); background: var(--smoke-1);'"\r
      style="min-height: 150px; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;"\r
      (click)="photo ? openPhoto(photo, i) : null"\r
    >\r
      <!-- Quando c'\xE8 una foto -->\r
      <div *ngIf="photo" class="w-full h-full">\r
        <img \r
          [src]="photo.url" \r
          [alt]="'Foto ' + photo.display_order" \r
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"\r
          (error)="onImageError($event, i)"\r
        />\r
        <div class="photo-hover-overlay">\r
          <span class="material-icons">zoom_in</span>\r
        </div>\r
      </div>\r
      \r
      <!-- Quando non c'\xE8 foto -->\r
      <div *ngIf="!photo" class="empty-photo-slot flex flex-col items-center justify-center p-md">\r
        <span class="material-icons empty-icon" style="font-size: 48px; color: var(--smoke-3); margin-bottom: 8px;">add_photo_alternate</span>\r
        <p class="text-sm text-muted">Slot {{ i + 1 }} vuoto</p>\r
      </div>\r
    </div>\r
\r
            <!-- Azioni -->\r
            <div class="card-footer gap-sm">\r
              <!-- Pulsante Aggiungi/Sostituisci -->\r
              <button\r
                type="button"\r
                class="icon-button x-small"\r
                [title]="photo ? 'Sostituisci foto' : 'Aggiungi foto'"\r
                (click)="triggerFileInput(i)"\r
                [disabled]="loadingPhotos"\r
              >\r
                <span class="material-icons">{{ photo ? 'camera_alt' : 'add_a_photo' }}</span>\r
              </button>\r
              <button\r
                type="button"\r
                class="icon-button x-small"\r
                *ngIf="photo"\r
                title="Imposta come copertina"\r
                (click)="setCoverPhoto(photo)"\r
                [disabled]="loadingPhotos">\r
                <span class="material-icons">star</span>\r
              </button>\r
\r
              <!-- Pulsante Elimina -->\r
              <button\r
                type="button"\r
                class="icon-button x-small"\r
                *ngIf="photo"\r
                title="Elimina foto"\r
                (click)="deletePhoto(i)"\r
                [disabled]="loadingPhotos"\r
                style="color: var(--primary);"\r
              >\r
                <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <!-- Loading overlay -->\r
        <div \r
          *ngIf="loadingPhotos"\r
          style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.9); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center;"\r
        >\r
          <div class="spinner" style="width: 40px; height: 40px; border: 3px solid var(--smoke-1); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: var(--gap-sm);"></div>\r
          <p class="text-muted">Caricamento in corso...</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
<!-- MODAL FULLSCREEN -->\r
<div \r
  *ngIf="fullscreenPhoto" \r
  class="modal-overlay"\r
  (click)="closeFullscreenPhoto()"\r
>\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2 class="text-md font-semibold m-0 flex items-center gap-sm">\r
        <span class="material-icons">photo</span>\r
        Galleria Foto\r
      </h2>\r
      <button class="icon-button" (click)="closeFullscreenPhoto()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
    \r
    <div class="modal-content p-lg flex items-center justify-center" style="min-height: 60vh;">\r
      <div style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">\r
        <!-- Navigazione sinistra -->\r
        <button \r
          *ngIf="hasMultiplePhotos"\r
          style="position: absolute; left: 0; z-index: 20; background: var(--smoke-2); margin: 0 var(--gap-sm);"\r
          class="icon-button"\r
          (click)="navigateFullscreenPhoto('prev'); $event.stopPropagation()"\r
        >\r
          <span class="material-icons">chevron_left</span>\r
        </button>\r
        \r
        <!-- Immagine -->\r
        <div style="max-width: 64rem; max-height: 70vh; display: flex; align-items: center; justify-content: center;">\r
          <img \r
            [src]="fullscreenPhoto" \r
            [alt]="'Foto galleria ' + (currentPhotoIndex || 0)" \r
            style="max-width: 100%; max-height: 70vh; object-fit: contain; border-radius: 12px;"\r
          />\r
        </div>\r
        \r
        <!-- Navigazione destra -->\r
        <button \r
          *ngIf="hasMultiplePhotos"\r
          style="position: absolute; right: 0; z-index: 20; background: var(--smoke-2); margin: 0 var(--gap-sm);"\r
          class="icon-button"\r
          (click)="navigateFullscreenPhoto('next'); $event.stopPropagation()"\r
        >\r
          <span class="material-icons">chevron_right</span>\r
        </button>\r
        \r
        <!-- Contatore -->\r
        <div \r
          *ngIf="currentPhotoIndex !== null"\r
          style="position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.7); color: white; padding: 0.25rem 1rem; border-radius: 999px; font-size: 0.875rem;"\r
        >\r
          {{ (currentPhotoIndex + 1) }} / {{ photos.length }}\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
    <!-- AZIONI -->\r
    <div class="modal-footer p-sm">\r
      <button \r
        type="submit" \r
        [disabled]="loading || settingsForm.invalid || !canEditSettings"\r
        class="promethea-button"\r
      >\r
      <lucide-angular name="refresh-cw" *ngIf="loading"></lucide-angular>\r
      <lucide-angular name="save" *ngIf="!loading"></lucide-angular>\r
        <span *ngIf="loading">Salvataggio...</span>\r
        <span *ngIf="!loading">Salva Impostazioni</span>\r
      </button>\r
    </div>\r
  </form>\r
<!-- \u2500\u2500 ZONA PERICOLOSA \u2500\u2500 -->\r
<div class="modal-footer mt-lg p-sm" style="display: none;">\r
  <div class="danger-item">\r
    <button class="promethea-button outline" \r
    (click)="showDeleteRestaurantConfirm = true">\r
    <lucide-angular name="trash-2"></lucide-angular>\r
    Elimina Account</button>\r
  </div>\r
</div>\r
\r
<!-- Modale conferma eliminazione ristorante -->\r
<div class="modal-overlay" *ngIf="showDeleteRestaurantConfirm">\r
  <div class="modal-container modal-md">\r
    <!-- Header -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-md">\r
        <lucide-angular name="triangle-alert"></lucide-angular>\r
        <h3 class="section-title m-0">Elimina ristorante</h3>\r
      </div>\r
      <button (click)="showDeleteRestaurantConfirm = false" \r
      [disabled]="deleteRestaurantLoading"\r
      class="icon-button">\r
      <lucide-angular name="x"></lucide-angular>\r
    </button>\r
    </div>\r
\r
    <div class="form-card mt-lg">\r
    <p style="line-height: 1.4;">Sei assolutamente sicuro? Questa azione \xE8 <strong>irreversibile</strong>. Tutti i dati del ristorante (menu, ordini, prenotazioni, staff) verranno eliminati definitivamente.</p>\r
    <p class="error-msg" *ngIf="deleteRestaurantError">{{ deleteRestaurantError }}</p>\r
    <div class="modal-footer">\r
      <button (click)="showDeleteRestaurantConfirm = false" \r
      [disabled]="deleteRestaurantLoading"\r
      class="promethea-button">Annulla</button>\r
      <button class="promethea-button outline" (click)="confirmDeleteRestaurant()" [disabled]="deleteRestaurantLoading">\r
        {{ deleteRestaurantLoading ? 'Eliminazione...' : 'Elimina definitivamente' }}\r
      </button>\r
    </div>\r
    </div>\r
  </div>\r
</div>\r
</div>\r
\r
<!-- Modal per Aggiungi/Modifica Turno -->\r
<div *ngIf="showShiftModal" class="modal-overlay" (click)="closeShiftModal()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    \r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <h2 class="section-title m-0">\r
        <span class="material-icons">schedule</span>\r
        {{ editingShift === 'new' ? 'Aggiungi Nuovo Turno' : 'Modifica Turno' }}\r
      </h2>\r
      <button class="icon-button" (click)="closeShiftModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Contenuto Modal -->\r
    <div class="modal-content">\r
      <div class="form-card">\r
        <div class="form-row mb-md">\r
          <label class="standard-label">\r
            <span class="material-icons">badge</span>\r
            Nome Turno *\r
          </label>\r
          <input \r
            type="text" \r
            [(ngModel)]="currentShift.name"\r
            [ngModelOptions]="{standalone: true}"\r
            placeholder="Es: Pranzo, Cena"\r
            autofocus\r
          />\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <span class="material-icons">schedule</span>\r
              Ora Inizio *\r
            </label>\r
            <input \r
              type="time" \r
              [(ngModel)]="currentShift.start_time"\r
              [ngModelOptions]="{standalone: true}"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <span class="material-icons">schedule</span>\r
              Ora Fine *\r
            </label>\r
            <input \r
              type="time" \r
              [(ngModel)]="currentShift.end_time"\r
              [ngModelOptions]="{standalone: true}"\r
            />\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <label class="checkbox-label">\r
            <input \r
              type="checkbox" \r
              [(ngModel)]="currentShift.is_active"\r
              [ngModelOptions]="{standalone: true}"\r
            />\r
            <div class="checkbox-content">\r
              <strong>Turno attivo</strong>\r
              <div class="text-muted">Il turno sar\xE0 disponibile per le prenotazioni</div>\r
            </div>\r
          </label>\r
        </div>\r
\r
        <div class="flex flex-col gap-sm">\r
          <label class="standard-label">\r
            <span class="material-icons">event</span>\r
            Giorni Attivi *\r
          </label>\r
          <div class="grid-cards">\r
            <label class="checkbox-label" *ngFor="let day of weekDays; let j = index">\r
              <input \r
                type="checkbox" \r
                [checked]="isDaySelected(currentShift.days_of_week, j)"\r
                (change)="toggleCurrentShiftDay(j, $event)"\r
              />\r
              <div class="checkbox-content">\r
                <strong>{{ day }}</strong>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button \r
        type="button" \r
        (click)="closeShiftModal()"\r
        class="promethea-button ghost"\r
      >\r
        <span class="material-icons">close</span>\r
        Annulla\r
      </button>\r
      <button \r
        type="button" \r
        (click)="saveShift()"\r
        [disabled]="!isCurrentShiftValid()"\r
        class="promethea-button"\r
      >\r
       <lucide-angular name="save"></lucide-angular>\r
        {{ editingShift === 'new' ? 'Aggiungi Turno' : 'Salva Modifiche' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/restaurant/settings/restaurant-settings/restaurant-settings.css */\n.shift-item {\n  padding: var(--gap-md);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.shift-item:hover {\n  border-color: var(--secondary);\n  background: var(--background2);\n}\n.shift-form {\n  border: 2px solid var(--smoke-2);\n}\n.shift-disabled {\n  background: var(--smoke-3);\n  opacity: 0.8;\n}\n.text-green-500 {\n  color: #10b981;\n}\n.text-orange-500 {\n  color: #f59e0b;\n}\n.material-icons {\n  transition: all 0.2s ease;\n}\n@media (max-width: 768px) {\n  .shift-item {\n    padding: var(--gap-sm);\n  }\n  .shift-item .flex-wrap {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .grid-form {\n    grid-template-columns: 1fr;\n  }\n  .md\\\\:col-span-2 {\n    grid-column: 1;\n  }\n}\n.gallery-container {\n  position: relative;\n  min-height: 300px;\n}\n.photo-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.photo-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  border-radius: 8px;\n}\n.photo-hover-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  border-radius: 8px;\n  pointer-events: none;\n}\n.photo-preview:hover .photo-hover-overlay {\n  opacity: 1;\n}\n.photo-hover-overlay .material-icons {\n  color: white;\n  font-size: 2rem;\n}\n.empty-photo-slot {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  padding: var(--gap-lg);\n}\n.empty-icon {\n  font-size: 3rem;\n  margin-bottom: var(--gap-sm);\n  opacity: 0.5;\n}\n.loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--smoke-1);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: var(--gap-sm);\n}\n.nav-button {\n  background: var(--smoke-2);\n  margin: 0 var(--gap-sm);\n}\n.nav-button:hover {\n  background: var(--smoke-3);\n}\n.photo-counter {\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 0.25rem 1rem;\n  border-radius: 999px;\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .grid-cards {\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;\n  }\n  .photo-preview {\n    min-height: 120px !important;\n  }\n}\n/*# sourceMappingURL=restaurant-settings.css.map */\n"] }]
  }], null, { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantSettings, { className: "RestaurantSettings", filePath: "src/app/restaurant/settings/restaurant-settings/restaurant-settings.ts", lineNumber: 23 });
})();
export {
  RestaurantSettings
};
//# sourceMappingURL=chunk-NGC3YTXO.js.map
