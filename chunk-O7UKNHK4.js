import {
  CompanyService
} from "./chunk-BY47AI6E.js";
import {
  UsersService
} from "./chunk-KKPCYEAQ.js";
import {
  AuthService,
  BaseService
} from "./chunk-YT7WS7HI.js";
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
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Injectable,
  forkJoin,
  from,
  inject,
  map,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/timbrature/services/shift-requests.service.ts
var ShiftRequestsService = class _ShiftRequestsService extends BaseService {
  tableName = "shift_requests";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ShiftRequestsService_BaseFactory;
    return function ShiftRequestsService_Factory(__ngFactoryType__) {
      return (\u0275ShiftRequestsService_BaseFactory || (\u0275ShiftRequestsService_BaseFactory = \u0275\u0275getInheritedFactory(_ShiftRequestsService)))(__ngFactoryType__ || _ShiftRequestsService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShiftRequestsService, factory: _ShiftRequestsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShiftRequestsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/timbrature/services/shifts.service.ts
var ShiftsService = class _ShiftsService extends BaseService {
  tableName = "shifts";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ShiftsService_BaseFactory;
    return function ShiftsService_Factory(__ngFactoryType__) {
      return (\u0275ShiftsService_BaseFactory || (\u0275ShiftsService_BaseFactory = \u0275\u0275getInheritedFactory(_ShiftsService)))(__ngFactoryType__ || _ShiftsService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShiftsService, factory: _ShiftsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShiftsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/timbrature/services/employee-shifts.service.ts
var EmployeeShiftsService = class _EmployeeShiftsService extends BaseService {
  tableName = "employee_shifts";
  // Metodo per ottenere i turni di un utente specifico
  getByUser(userId) {
    return from(this.supabase.from(this.tableName).select("*").eq("user_id", userId)).pipe(map((result) => result.data));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmployeeShiftsService_BaseFactory;
    return function EmployeeShiftsService_Factory(__ngFactoryType__) {
      return (\u0275EmployeeShiftsService_BaseFactory || (\u0275EmployeeShiftsService_BaseFactory = \u0275\u0275getInheritedFactory(_EmployeeShiftsService)))(__ngFactoryType__ || _EmployeeShiftsService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeShiftsService, factory: _EmployeeShiftsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeShiftsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/timbrature/features/shift-management/shift-management.component.ts
var _c0 = () => ({ standalone: true });
function ShiftManagementComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "lucide-angular", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ShiftManagementComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "lucide-angular", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ShiftManagementComponent_div_3_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "h3", 35);
    \u0275\u0275text(2, "Nuovo turno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 36);
    \u0275\u0275listener("ngSubmit", function ShiftManagementComponent_div_3_div_8_div_5_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createShift());
    });
    \u0275\u0275elementStart(4, "div", 37)(5, "label", 38);
    \u0275\u0275text(6, "Nome turno");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 40)(9, "div", 37)(10, "label", 38);
    \u0275\u0275text(11, "Inizio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37)(14, "label", 38);
    \u0275\u0275text(15, "Fine");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "label", 43);
    \u0275\u0275text(19, "Giorni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 44)(21, "label", 45);
    \u0275\u0275element(22, "input", 46);
    \u0275\u0275text(23, " Luned\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 45);
    \u0275\u0275element(25, "input", 47);
    \u0275\u0275text(26, " Marted\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 45);
    \u0275\u0275element(28, "input", 48);
    \u0275\u0275text(29, " Mercoled\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 45);
    \u0275\u0275element(31, "input", 49);
    \u0275\u0275text(32, " Gioved\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label", 45);
    \u0275\u0275element(34, "input", 50);
    \u0275\u0275text(35, " Venerd\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label", 45);
    \u0275\u0275element(37, "input", 51);
    \u0275\u0275text(38, " Sabato ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 45);
    \u0275\u0275element(40, "input", 52);
    \u0275\u0275text(41, " Domenica ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 37)(43, "label", 38);
    \u0275\u0275text(44, "Colore");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 54)(47, "button", 55);
    \u0275\u0275text(48, "Salva turno");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.newShiftForm);
    \u0275\u0275advance(18);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("monday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("tuesday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("wednesday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("thursday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("friday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("saturday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("sunday"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.newShiftForm.invalid);
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const shift_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", shift_r5.name, " ");
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_template_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.name, $event) || (ctx_r0.editingShiftData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_template_3_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.saveEditShift());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.name);
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const shift_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", shift_r5.start_time, " - ", shift_r5.end_time, " ");
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 61)(2, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_7_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.start_time, $event) || (ctx_r0.editingShiftData.start_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_7_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.end_time, $event) || (ctx_r0.editingShiftData.end_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.start_time);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.end_time);
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "L");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("monday"));
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Ma");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("tuesday"));
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Me");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("wednesday"));
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "G");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("thursday"));
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "V");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("friday"));
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "S");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("saturday"));
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "D");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("sunday"));
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275template(2, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_2_Template, 2, 2, "span", 65)(3, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_3_Template, 2, 2, "span", 65)(4, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_4_Template, 2, 2, "span", 65)(5, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_5_Template, 2, 2, "span", 65)(6, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_6_Template, 2, 2, "span", 65)(7, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_7_Template, 2, 2, "span", 65)(8, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_span_8_Template, 2, 2, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const shift_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", shift_r5.mon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shift_r5.tue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shift_r5.wed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shift_r5.thu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shift_r5.fri);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shift_r5.sat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shift_r5.sun);
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "label")(3, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.mon, $event) || (ctx_r0.editingShiftData.mon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label")(6, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.tue, $event) || (ctx_r0.editingShiftData.tue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Ma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label")(9, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.wed, $event) || (ctx_r0.editingShiftData.wed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label")(12, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.thu, $event) || (ctx_r0.editingShiftData.thu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " G");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label")(15, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.fri, $event) || (ctx_r0.editingShiftData.fri = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label")(18, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.sat, $event) || (ctx_r0.editingShiftData.sat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label")(21, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingShiftData.sun, $event) || (ctx_r0.editingShiftData.sun = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.mon);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.tue);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.wed);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.thu);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.fri);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.sat);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingShiftData.sun);
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 68);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const shift_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.beginEditShift(shift_r5));
    });
    \u0275\u0275element(2, "lucide-angular", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 68);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const shift_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteShift(shift_r5.id));
    });
    \u0275\u0275element(4, "lucide-angular", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 68);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.saveEditShift());
    });
    \u0275\u0275element(2, "lucide-angular", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 68);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.cancelEditShift());
    });
    \u0275\u0275element(4, "lucide-angular", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_2_Template, 2, 1, "ng-container", 58)(3, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_6_Template, 2, 2, "ng-container", 59)(7, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_7_Template, 4, 2, "ng-container", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_9_Template, 9, 7, "ng-container", 59)(10, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_10_Template, 23, 7, "ng-container", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 61);
    \u0275\u0275template(15, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_15_Template, 5, 0, "ng-container", 59)(16, ShiftManagementComponent_div_3_div_8_table_7_tr_14_ng_container_16_Template, 5, 0, "ng-container", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const shift_r5 = ctx.$implicit;
    const editName_r11 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.editingShiftId !== shift_r5.id)("ngIfElse", editName_r11);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.editingShiftId !== shift_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingShiftId === shift_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.editingShiftId !== shift_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingShiftId === shift_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", shift_r5.color);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.editingShiftId !== shift_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingShiftId === shift_r5.id);
  }
}
function ShiftManagementComponent_div_3_div_8_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 56)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Orario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Giorni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Colore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ShiftManagementComponent_div_3_div_8_table_7_tr_14_Template, 17, 10, "tr", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.availableShifts);
  }
}
function ShiftManagementComponent_div_3_div_8_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, "Nessun turno predefinito. Creane uno.");
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "button", 30);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_3_div_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showAddShiftForm = !ctx_r0.showAddShiftForm);
    });
    \u0275\u0275element(3, "lucide-angular", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ShiftManagementComponent_div_3_div_8_div_5_Template, 49, 16, "div", 31);
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275template(7, ShiftManagementComponent_div_3_div_8_table_7_Template, 15, 1, "table", 33)(8, ShiftManagementComponent_div_3_div_8_ng_template_8_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noShifts_r12 = \u0275\u0275reference(9);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx_r0.showAddShiftForm ? "x" : "plus");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showAddShiftForm ? "Annulla" : "Nuovo turno", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddShiftForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.availableShifts.length)("ngIfElse", noShifts_r12);
  }
}
function ShiftManagementComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 22);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showShiftsList = !ctx_r0.showShiftsList);
    });
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275element(3, "lucide-angular", 24);
    \u0275\u0275elementStart(4, "h2", 12);
    \u0275\u0275text(5, "Turni predefiniti");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 25);
    \u0275\u0275element(7, "lucide-angular", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ShiftManagementComponent_div_3_div_8_Template, 10, 5, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-expanded", ctx_r0.showShiftsList);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r0.showShiftsList ? "chevron-up" : "chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showShiftsList);
  }
}
function ShiftManagementComponent_div_4_div_8_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r15 = ctx.$implicit;
    \u0275\u0275property("ngValue", u_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r15.first_name, " ", u_r15.last_name, "");
  }
}
function ShiftManagementComponent_div_4_div_8_div_18_div_3_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", s_r18.name, " (", s_r18.start_time, "-", s_r18.end_time, ")");
  }
}
function ShiftManagementComponent_div_4_div_8_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftManagementComponent_div_4_div_8_div_18_div_3_Template_select_ngModelChange_5_listener($event) {
      const week_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(week_r17.shiftId, $event) || (week_r17.shiftId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 79);
    \u0275\u0275text(7, "Seleziona turno");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ShiftManagementComponent_div_4_div_8_div_18_div_3_option_8_Template, 2, 4, "option", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const week_r17 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Sett. ", week_r17.weekNumber, ": ", \u0275\u0275pipeBind1(3, 7, week_r17.start), " - ", \u0275\u0275pipeBind1(4, 9, week_r17.end), "");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", week_r17.shiftId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.availableShifts);
  }
}
function ShiftManagementComponent_div_4_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h3", 84);
    \u0275\u0275text(2, "Settimane nel periodo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ShiftManagementComponent_div_4_div_8_div_18_div_3_Template, 9, 12, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.weeks);
  }
}
function ShiftManagementComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "form", 36);
    \u0275\u0275listener("ngSubmit", function ShiftManagementComponent_div_4_div_8_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.assignWeeklyShifts());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "label", 38);
    \u0275\u0275text(4, "Dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 78)(6, "option", 79);
    \u0275\u0275text(7, "Seleziona dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ShiftManagementComponent_div_4_div_8_option_8_Template, 2, 3, "option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40)(10, "div", 37)(11, "label", 38);
    \u0275\u0275text(12, "Dal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 37)(15, "label", 38);
    \u0275\u0275text(16, "Al");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ShiftManagementComponent_div_4_div_8_div_18_Template, 4, 1, "div", 27);
    \u0275\u0275elementStart(19, "div", 83)(20, "button", 55);
    \u0275\u0275text(21, " Crea programma ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.weeklyProgramForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.employees);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.weeks.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.isWeeklyProgramCompleto);
  }
}
function ShiftManagementComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10);
    \u0275\u0275element(2, "lucide-angular", 74);
    \u0275\u0275elementStart(3, "h2", 12);
    \u0275\u0275text(4, "Programma settimanale turni");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showWeeklyProgramForm = !ctx_r0.showWeeklyProgramForm);
    });
    \u0275\u0275element(6, "lucide-angular", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ShiftManagementComponent_div_4_div_8_Template, 22, 5, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("name", ctx_r0.showWeeklyProgramForm ? "x" : "plus");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showWeeklyProgramForm ? "Annulla" : "Nuovo programma settimanale", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showWeeklyProgramForm);
  }
}
function ShiftManagementComponent_div_5_div_8_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r21 = ctx.$implicit;
    \u0275\u0275property("ngValue", u_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r21.first_name, " ", u_r21.last_name, "");
  }
}
function ShiftManagementComponent_div_5_div_8_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r22 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", s_r22.name, " (", s_r22.start_time, "-", s_r22.end_time, ")");
  }
}
function ShiftManagementComponent_div_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "form", 36);
    \u0275\u0275listener("ngSubmit", function ShiftManagementComponent_div_5_div_8_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.assignShift());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "label", 38);
    \u0275\u0275text(4, "Dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 78)(6, "option", 79);
    \u0275\u0275text(7, "Seleziona dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ShiftManagementComponent_div_5_div_8_option_8_Template, 2, 3, "option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 37)(10, "label", 38);
    \u0275\u0275text(11, "Turno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 90)(13, "option", 79);
    \u0275\u0275text(14, "Seleziona turno");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ShiftManagementComponent_div_5_div_8_option_15_Template, 2, 4, "option", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label", 38);
    \u0275\u0275text(18, "Dal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 37)(21, "label", 38);
    \u0275\u0275text(22, "Al (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 54)(25, "button", 55);
    \u0275\u0275text(26, "Assegna");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.assignForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.employees);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.availableShifts);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r0.assignForm.invalid);
  }
}
function ShiftManagementComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10);
    \u0275\u0275element(2, "lucide-angular", 89);
    \u0275\u0275elementStart(3, "h2", 12);
    \u0275\u0275text(4, "Assegna turno a dipendente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAssignForm = !ctx_r0.showAssignForm);
    });
    \u0275\u0275element(6, "lucide-angular", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ShiftManagementComponent_div_5_div_8_Template, 27, 6, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("name", ctx_r0.showAssignForm ? "x" : "plus");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showAssignForm ? "Annulla" : "Nuova assegnazione", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAssignForm);
  }
}
function ShiftManagementComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.expiringShiftsCount, " in scadenza ");
  }
}
function ShiftManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "lucide-angular", 95);
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_14_table_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Dipendente");
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cs_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cs_r23.user_name);
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "L");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("monday"));
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Ma");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("tuesday"));
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Me");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("wednesday"));
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "G");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("thursday"));
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "V");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("friday"));
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "S");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("saturday"));
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "D");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("sunday"));
  }
}
function ShiftManagementComponent_div_14_table_1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, ShiftManagementComponent_div_14_table_1_tr_15_td_1_Template, 2, 1, "td", 59);
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 64);
    \u0275\u0275template(8, ShiftManagementComponent_div_14_table_1_tr_15_span_8_Template, 2, 2, "span", 65)(9, ShiftManagementComponent_div_14_table_1_tr_15_span_9_Template, 2, 2, "span", 65)(10, ShiftManagementComponent_div_14_table_1_tr_15_span_10_Template, 2, 2, "span", 65)(11, ShiftManagementComponent_div_14_table_1_tr_15_span_11_Template, 2, 2, "span", 65)(12, ShiftManagementComponent_div_14_table_1_tr_15_span_12_Template, 2, 2, "span", 65)(13, ShiftManagementComponent_div_14_table_1_tr_15_span_13_Template, 2, 2, "span", 65)(14, ShiftManagementComponent_div_14_table_1_tr_15_span_14_Template, 2, 2, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cs_r23 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userRole !== "employee");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.name) || "Personalizzato");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.start_time, " - ", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.end_time, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.mon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.tue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.wed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.thu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.fri);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.sat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cs_r23.shiftDetails == null ? null : cs_r23.shiftDetails.sun);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, cs_r23.valid_from));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cs_r23.valid_to ? \u0275\u0275pipeBind1(20, 15, cs_r23.valid_to) : "\u221E");
  }
}
function ShiftManagementComponent_div_14_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 56)(1, "thead")(2, "tr");
    \u0275\u0275template(3, ShiftManagementComponent_div_14_table_1_th_3_Template, 2, 0, "th", 59);
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Turno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Orario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Giorni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Dal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Al");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, ShiftManagementComponent_div_14_table_1_tr_15_Template, 21, 17, "tr", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.userRole !== "employee");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.currentShifts);
  }
}
function ShiftManagementComponent_div_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, "Nessun turno assegnato");
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275template(1, ShiftManagementComponent_div_14_table_1_Template, 16, 2, "table", 33)(2, ShiftManagementComponent_div_14_ng_template_2_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noShiftsAttuali_r24 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentShifts.length)("ngIfElse", noShiftsAttuali_r24);
  }
}
function ShiftManagementComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "button", 30);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showRequestForm = !ctx_r0.showRequestForm);
    });
    \u0275\u0275element(2, "lucide-angular", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r0.showRequestForm ? "x" : "plus");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showRequestForm ? "Annulla" : "Richiedi nuovo turno", " ");
  }
}
function ShiftManagementComponent_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "label", 45);
    \u0275\u0275element(2, "input", 105);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Turno predefinito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 45);
    \u0275\u0275element(6, "input", 106);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Turno personalizzato");
    \u0275\u0275elementEnd()()();
  }
}
function ShiftManagementComponent_div_16_div_5_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r27 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", s_r27.name, " (", s_r27.start_time, "-", s_r27.end_time, ")");
  }
}
function ShiftManagementComponent_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 37)(2, "label", 38);
    \u0275\u0275text(3, "Turno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 90)(5, "option", 79);
    \u0275\u0275text(6, "Seleziona turno");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ShiftManagementComponent_div_16_div_5_option_7_Template, 2, 4, "option", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.availableShifts);
  }
}
function ShiftManagementComponent_div_16_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " \u26A0\uFE0F Fuori orario di lavoro ");
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_16_div_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " \u26A0\uFE0F Fuori orario di lavoro ");
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 40)(2, "div", 37)(3, "label", 38);
    \u0275\u0275text(4, "Nome turno");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 37)(7, "label", 38);
    \u0275\u0275text(8, "Colore");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 109)(11, "div", 37)(12, "label", 38);
    \u0275\u0275text(13, "Inizio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 41);
    \u0275\u0275template(15, ShiftManagementComponent_div_16_div_6_div_15_Template, 2, 0, "div", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 37)(17, "label", 38);
    \u0275\u0275text(18, "Fine");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 42);
    \u0275\u0275template(20, ShiftManagementComponent_div_16_div_6_div_20_Template, 2, 0, "div", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 111)(22, "label", 43);
    \u0275\u0275text(23, "Giorni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 44)(25, "label", 45);
    \u0275\u0275element(26, "input", 46);
    \u0275\u0275text(27, " Luned\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 45);
    \u0275\u0275element(29, "input", 47);
    \u0275\u0275text(30, " Marted\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 45);
    \u0275\u0275element(32, "input", 48);
    \u0275\u0275text(33, " Mercoled\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 45);
    \u0275\u0275element(35, "input", 49);
    \u0275\u0275text(36, " Gioved\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label", 45);
    \u0275\u0275element(38, "input", 50);
    \u0275\u0275text(39, " Venerd\xEC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 45);
    \u0275\u0275element(41, "input", 51);
    \u0275\u0275text(42, " Sabato ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "label", 45);
    \u0275\u0275element(44, "input", 52);
    \u0275\u0275text(45, " Domenica ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r0.isTimeOutsideWorkHours("monday", (tmp_2_0 = ctx_r0.newShiftForm.get("start_time")) == null ? null : tmp_2_0.value));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.isTimeOutsideWorkHours("monday", (tmp_3_0 = ctx_r0.newShiftForm.get("end_time")) == null ? null : tmp_3_0.value));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("monday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("tuesday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("wednesday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("thursday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("friday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("saturday"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.isDayClosed("sunday"));
  }
}
function ShiftManagementComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h3", 35);
    \u0275\u0275text(2, "Nuova richiesta turno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 98);
    \u0275\u0275listener("ngSubmit", function ShiftManagementComponent_div_16_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitRequest());
    });
    \u0275\u0275template(4, ShiftManagementComponent_div_16_div_4_Template, 9, 0, "div", 99)(5, ShiftManagementComponent_div_16_div_5_Template, 8, 2, "div", 100)(6, ShiftManagementComponent_div_16_div_6_Template, 46, 16, "div", 101);
    \u0275\u0275elementStart(7, "div", 102)(8, "div", 40)(9, "div", 37)(10, "label", 38);
    \u0275\u0275text(11, "Dal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37)(14, "label", 38);
    \u0275\u0275text(15, "Al (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "label", 38);
    \u0275\u0275text(19, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 83)(22, "button", 55);
    \u0275\u0275text(23, "Invia richiesta");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.requestForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userCanCreateCustomShifts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.requestForm.get("requestType")) == null ? null : tmp_3_0.value) === "predefined");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.requestForm.get("requestType")) == null ? null : tmp_4_0.value) === "custom");
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r0.requestForm.invalid);
  }
}
function ShiftManagementComponent_div_17_table_6_tr_18_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 116);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_17_table_6_tr_18_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r28);
      const req_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.approveRequest(req_r29.id));
    });
    \u0275\u0275element(2, "lucide-angular", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 117);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_17_table_6_tr_18_div_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r28);
      const req_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.rejectRequest(req_r29.id));
    });
    \u0275\u0275element(4, "lucide-angular", 72);
    \u0275\u0275elementEnd()();
  }
}
function ShiftManagementComponent_div_17_table_6_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 114);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, ShiftManagementComponent_div_17_table_6_tr_18_div_18_Template, 5, 0, "div", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r29 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r29.user_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getShiftName(req_r29.shift_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 13, req_r29.valid_from));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r29.valid_to ? \u0275\u0275pipeBind1(10, 15, req_r29.valid_to) : "\u221E");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", req_r29.status === "pending")("success", req_r29.status === "approved")("error", req_r29.status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r29.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 17, req_r29.requested_at, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", req_r29.status === "pending");
  }
}
function ShiftManagementComponent_div_17_table_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 56)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Dipendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Turno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Dal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Al");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Stato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Richiesto il");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, ShiftManagementComponent_div_17_table_6_tr_18_Template, 19, 20, "tr", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.shiftRequests);
  }
}
function ShiftManagementComponent_div_17_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, "Nessuna richiesta in attesa");
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10);
    \u0275\u0275element(2, "lucide-angular", 113);
    \u0275\u0275elementStart(3, "h2", 12);
    \u0275\u0275text(4, "Richieste di turno");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275template(6, ShiftManagementComponent_div_17_table_6_Template, 19, 1, "table", 33)(7, ShiftManagementComponent_div_17_ng_template_7_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noRequests_r30 = \u0275\u0275reference(8);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.shiftRequests.length)("ngIfElse", noRequests_r30);
  }
}
function ShiftManagementComponent_div_18_table_6_tr_16_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function ShiftManagementComponent_div_18_table_6_tr_16_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const req_r32 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelRequest(req_r32.id));
    });
    \u0275\u0275element(1, "lucide-angular", 70);
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_18_table_6_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 114);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, ShiftManagementComponent_div_18_table_6_tr_16_button_16_Template, 2, 0, "button", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r32 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getShiftName(req_r32.shift_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, req_r32.valid_from));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(req_r32.valid_to ? \u0275\u0275pipeBind1(8, 14, req_r32.valid_to) : "\u221E");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", req_r32.status === "pending")("success", req_r32.status === "approved")("error", req_r32.status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r32.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 16, req_r32.requested_at, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", req_r32.status === "pending");
  }
}
function ShiftManagementComponent_div_18_table_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 56)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Turno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Dal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Al");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Stato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Richiesto il");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Azioni");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, ShiftManagementComponent_div_18_table_6_tr_16_Template, 17, 19, "tr", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.shiftRequests);
  }
}
function ShiftManagementComponent_div_18_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, "Nessuna richiesta");
    \u0275\u0275elementEnd();
  }
}
function ShiftManagementComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 10);
    \u0275\u0275element(2, "lucide-angular", 113);
    \u0275\u0275elementStart(3, "h2", 12);
    \u0275\u0275text(4, "Le mie richieste");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275template(6, ShiftManagementComponent_div_18_table_6_Template, 17, 1, "table", 33)(7, ShiftManagementComponent_div_18_ng_template_7_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noRequests_r33 = \u0275\u0275reference(8);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.shiftRequests.length)("ngIfElse", noRequests_r33);
  }
}
var ShiftManagementComponent = class _ShiftManagementComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  shiftRequestsService = inject(ShiftRequestsService);
  shiftsService = inject(ShiftsService);
  employeeShiftsService = inject(EmployeeShiftsService);
  usersService = inject(UsersService);
  companiesService = inject(CompanyService);
  currentUser;
  companyId;
  userRole;
  companyDetails;
  // dati azienda con opening_hours e closed_days
  // Programma di turni
  showWeeklyProgramForm = false;
  weeklyProgramForm;
  weeks = [];
  // Permessi utente
  userCanRequestShifts = false;
  userCanCreateCustomShifts = false;
  managerVisibilityMap = {};
  // Turni attuali arricchiti
  currentShifts = [];
  // Richieste
  shiftRequests = [];
  // Turni predefiniti
  availableShifts = [];
  // Dipendenti (per admin/manager)
  employees = [];
  // Stato UI
  loading = false;
  successMessage = "";
  errorMessage = "";
  // Gestione turni predefiniti
  showShiftsList = true;
  showAddShiftForm = false;
  newShiftForm;
  editingShiftId = null;
  editingShiftData = {};
  // Assegnazione turni
  showAssignForm = false;
  assignForm;
  // Richiesta turno (employee)
  showRequestForm = false;
  requestForm;
  requestType = "predefined";
  // Messaggi di warning
  timeWarning = null;
  constructor() {
    this.currentUser = this.authService.currentUserSubject.value;
    this.companyId = this.authService.companyId;
    this.userRole = this.currentUser?.role || "";
    this.userCanRequestShifts = this.currentUser?.can_request_shifts || false;
    this.userCanCreateCustomShifts = this.currentUser?.can_create_custom_shifts || false;
    this.weeklyProgramForm = this.fb.group({
      user_id: ["", Validators.required],
      period_start: ["", Validators.required],
      period_end: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.initShiftForm();
    this.initAssignForm();
    this.initRequestForm();
    this.loadCompanyDetails();
    this.loadData();
    this.weeklyProgramForm.get("period_start")?.valueChanges.subscribe(() => this.generateWeeks());
    this.weeklyProgramForm.get("period_end")?.valueChanges.subscribe(() => this.generateWeeks());
  }
  // Inizializzazioni form
  initShiftForm() {
    this.newShiftForm = this.fb.group({
      name: ["", Validators.required],
      start_time: ["", Validators.required],
      end_time: ["", Validators.required],
      mon: [false],
      tue: [false],
      wed: [false],
      thu: [false],
      fri: [false],
      sat: [false],
      sun: [false],
      color: ["#00530b"],
      days: this.fb.group({})
    });
  }
  addDayControl(day) {
    const dayArray = this.fb.array([]);
    this.newShiftForm.get("days").addControl(day, dayArray);
    this.addTimeSlot(day);
  }
  addTimeSlot(day) {
    const dayArray = this.newShiftForm.get("days").get(day);
    dayArray.push(this.fb.group({
      start: ["", Validators.required],
      end: ["", Validators.required]
    }));
  }
  removeTimeSlot(day, index) {
    const dayArray = this.newShiftForm.get("days").get(day);
    dayArray.removeAt(index);
  }
  initAssignForm() {
    this.assignForm = this.fb.group({
      user_id: ["", Validators.required],
      shift_id: ["", Validators.required],
      valid_from: ["", Validators.required],
      valid_to: [null]
    });
  }
  initRequestForm() {
    this.requestForm = this.fb.group({
      requestType: ["predefined"],
      shift_id: [null, Validators.required],
      // required per predefined
      custom_shift: this.fb.group({
        name: ["", Validators.required],
        start_time: ["", Validators.required],
        end_time: ["", Validators.required],
        mon: [false],
        tue: [false],
        wed: [false],
        thu: [false],
        fri: [false],
        sat: [false],
        sun: [false],
        color: ["#00530b"]
      }),
      valid_from: ["", Validators.required],
      valid_to: [null],
      notes: [""]
    });
    this.requestForm.get("requestType")?.valueChanges.subscribe((type) => {
      const shiftIdControl = this.requestForm.get("shift_id");
      const customGroup = this.requestForm.get("custom_shift");
      if (type === "predefined") {
        shiftIdControl?.setValidators([Validators.required]);
        customGroup?.disable();
      } else {
        shiftIdControl?.clearValidators();
        shiftIdControl?.setValue(null);
        customGroup?.enable();
      }
      shiftIdControl?.updateValueAndValidity();
    });
  }
  // Carica dettagli azienda
  loadCompanyDetails() {
    this.companiesService.getById(this.companyId).subscribe((company) => {
      this.companyDetails = company;
      this.managerVisibilityMap = company.manager_visibility || {};
    });
  }
  // Carica tutti i dati
  loadData() {
    this.loading = true;
    this.loadShifts();
    if (this.userRole === "admin" || this.userRole === "manager") {
      this.usersService.getAll(this.companyId).subscribe((users) => {
        this.employees = users;
      });
    }
    if (this.userRole === "admin") {
      forkJoin({
        empShifts: this.employeeShiftsService.getAll(this.companyId),
        users: this.usersService.getAll(this.companyId)
      }).subscribe({
        next: ({ empShifts, users }) => {
          this.employees = users;
          this.currentShifts = this.enrichShifts(empShifts);
          this.loading = false;
        },
        error: () => this.loading = false
      });
    } else if (this.userRole === "manager") {
      forkJoin({
        empShifts: this.employeeShiftsService.getAll(this.companyId),
        users: this.usersService.getAll(this.companyId)
      }).pipe(map(({ empShifts, users }) => {
        this.employees = users;
        return this.enrichShifts(empShifts);
      })).subscribe({
        next: (shifts) => {
          this.currentShifts = shifts;
          this.loading = false;
        },
        error: () => this.loading = false
      });
    } else {
      this.employeeShiftsService.getByUser(this.currentUser.id).subscribe({
        next: (empShifts) => {
          this.currentShifts = this.enrichShifts(empShifts);
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
    this.loadShiftRequests();
  }
  loadShifts() {
    this.shiftsService.getAll(this.companyId).subscribe((shifts) => {
      this.availableShifts = shifts;
    });
  }
  enrichShifts(empShifts) {
    return empShifts.map((es) => {
      const shift = this.availableShifts.find((s) => s.id === es.shift_id);
      const user = this.employees.find((u) => u.id === es.user_id);
      return __spreadProps(__spreadValues({}, es), { shiftDetails: shift, user_name: user ? `${user.first_name} ${user.last_name}` : "N/A" });
    });
  }
  loadShiftRequests() {
    if (this.userRole === "admin") {
      this.shiftRequestsService.getAll(this.companyId, { orderBy: "requested_at", ascending: false }).subscribe((requests) => this.shiftRequests = this.enrichRequests(requests));
    } else if (this.userRole === "manager") {
      this.shiftRequestsService.getAll(this.companyId).subscribe((requests) => {
        this.shiftRequests = this.enrichRequests(requests);
      });
    } else {
      this.shiftRequestsService.getAll(this.companyId).subscribe((requests) => {
        const filtered = requests.filter((r) => r.user_id === this.currentUser.id);
        this.shiftRequests = this.enrichRequests(filtered);
      });
    }
  }
  enrichRequests(requests) {
    return requests.map((req) => {
      const user = this.employees.find((u) => u.id === req.user_id);
      return __spreadProps(__spreadValues({}, req), { user_name: user ? `${user.first_name} ${user.last_name}` : "N/A" });
    });
  }
  // Helper per permessi manager (da completare con logica reale)
  canManageShifts() {
    if (this.userRole === "admin")
      return true;
    if (this.userRole === "manager") {
      const perms = this.managerVisibilityMap[this.currentUser.id] || {};
      return !!perms.can_manage_shifts;
    }
    return false;
  }
  // Controlli su orari e giorni chiusi
  isDayClosed(day) {
    if (!this.companyDetails?.opening_hours) {
      return false;
    }
    const dayData = this.companyDetails.opening_hours[day];
    return dayData?.closed === true;
  }
  isDateClosed(date) {
    if (!this.companyDetails?.closed_days)
      return false;
    return this.companyDetails.closed_days.some((cd) => {
      if (cd.type === "single") {
        return cd.start === date;
      } else if (cd.type === "range") {
        return date >= cd.start && date <= cd.end;
      }
      return false;
    });
  }
  isTimeOutsideWorkHours(day, time) {
    if (!this.companyDetails?.opening_hours)
      return false;
    const dayData = this.companyDetails.opening_hours[day];
    if (!dayData || dayData.closed)
      return true;
    const open = dayData.open;
    const close = dayData.close;
    if (!open || !close)
      return true;
    return time < open || time > close;
  }
  // Metodi CRUD turni predefiniti
  createShift() {
    if (this.newShiftForm.invalid)
      return;
    const shiftData = __spreadProps(__spreadValues({}, this.newShiftForm.value), {
      company_id: this.companyId
    });
    this.shiftsService.create(shiftData).subscribe({
      next: () => {
        this.successMessage = "Turno creato";
        this.showAddShiftForm = false;
        this.newShiftForm.reset({
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false,
          color: "#00530b"
        });
        this.loadShifts();
      },
      error: (err) => this.errorMessage = "Errore creazione turno"
    });
  }
  beginEditShift(shift) {
    this.editingShiftId = shift.id;
    this.editingShiftData = __spreadValues({}, shift);
  }
  saveEditShift() {
    if (!this.editingShiftId)
      return;
    this.shiftsService.update(this.editingShiftId, this.editingShiftData).subscribe({
      next: () => {
        this.successMessage = "Turno aggiornato";
        this.editingShiftId = null;
        this.editingShiftData = {};
        this.loadShifts();
      },
      error: (err) => this.errorMessage = "Errore aggiornamento"
    });
  }
  cancelEditShift() {
    this.editingShiftId = null;
    this.editingShiftData = {};
  }
  deleteShift(shiftId) {
    if (confirm("Sei sicuro di voler eliminare questo turno?")) {
      this.shiftsService.delete(shiftId, this.companyId).subscribe({
        next: () => {
          this.successMessage = "Turno eliminato";
          this.loadShifts();
        },
        error: (err) => this.errorMessage = "Errore eliminazione"
      });
    }
  }
  // Assegnazione turno
  assignShift() {
    if (this.assignForm.invalid)
      return;
    const assignData = {
      company_id: this.companyId,
      user_id: this.assignForm.value.user_id,
      shift_id: this.assignForm.value.shift_id,
      valid_from: this.assignForm.value.valid_from,
      valid_to: this.assignForm.value.valid_to || null
    };
    this.employeeShiftsService.create(assignData).subscribe({
      next: () => {
        this.successMessage = "Turno assegnato";
        this.showAssignForm = false;
        this.assignForm.reset();
        this.loadData();
      },
      error: (err) => this.errorMessage = "Errore assegnazione"
    });
  }
  // Richiesta turno (employee)
  submitRequest() {
    if (this.requestForm.invalid)
      return;
    const formValue = this.requestForm.value;
    const request = {
      company_id: this.companyId,
      user_id: this.currentUser.id,
      valid_from: formValue.valid_from,
      valid_to: formValue.valid_to || null,
      notes: formValue.notes,
      status: "pending"
    };
    if (formValue.requestType === "predefined") {
      request.shift_id = formValue.shift_id;
      request.custom_shift = null;
    } else {
      request.shift_id = null;
      request.custom_shift = formValue.custom_shift;
    }
    this.shiftRequestsService.create(request).subscribe({
      next: () => {
        this.successMessage = "Richiesta inviata con successo";
        this.showRequestForm = false;
        this.requestForm.reset({ requestType: "predefined" });
        this.loadShiftRequests();
      },
      error: (err) => this.errorMessage = "Errore durante l'invio"
    });
  }
  // Gestione richieste (admin/manager)
  approveRequest(requestId) {
    const request = this.shiftRequests.find((r) => r.id === requestId);
    if (!request)
      return;
    if (!request.shift_id && !request.custom_shift) {
      this.errorMessage = "La richiesta non ha un turno valido";
      return;
    }
    this.shiftRequestsService.update(requestId, {
      status: "approved",
      reviewed_by: this.currentUser.id,
      reviewed_at: (/* @__PURE__ */ new Date()).toISOString()
    }).pipe(switchMap((updated) => {
      if (updated.shift_id) {
        const employeeShift = {
          company_id: this.companyId,
          user_id: updated.user_id,
          shift_id: updated.shift_id,
          valid_from: updated.valid_from,
          valid_to: updated.valid_to
        };
        return this.employeeShiftsService.create(employeeShift);
      } else {
        const custom = updated.custom_shift;
        const newShift = {
          company_id: this.companyId,
          name: custom.name,
          start_time: custom.start_time,
          end_time: custom.end_time,
          mon: custom.mon,
          tue: custom.tue,
          wed: custom.wed,
          thu: custom.thu,
          fri: custom.fri,
          sat: custom.sat,
          sun: custom.sun,
          color: custom.color
        };
        return this.shiftsService.create(newShift).pipe(switchMap((createdShift) => {
          const employeeShift = {
            company_id: this.companyId,
            user_id: updated.user_id,
            shift_id: createdShift.id,
            valid_from: updated.valid_from,
            valid_to: updated.valid_to
          };
          return this.employeeShiftsService.create(employeeShift);
        }));
      }
    })).subscribe({
      next: () => {
        this.successMessage = "Richiesta approvata e turno assegnato";
        this.loadShiftRequests();
        this.loadData();
      },
      error: () => this.errorMessage = "Errore nell'approvazione"
    });
  }
  rejectRequest(requestId) {
    this.shiftRequestsService.update(requestId, {
      status: "rejected",
      reviewed_by: this.currentUser.id,
      reviewed_at: (/* @__PURE__ */ new Date()).toISOString()
    }).subscribe({
      next: () => {
        this.successMessage = "Richiesta rifiutata";
        this.loadShiftRequests();
      },
      error: () => this.errorMessage = "Errore"
    });
  }
  cancelRequest(requestId) {
    this.shiftRequestsService.update(requestId, { status: "cancelled" }).subscribe({
      next: () => {
        this.successMessage = "Richiesta cancellata";
        this.loadShiftRequests();
      },
      error: () => this.errorMessage = "Errore"
    });
  }
  getShiftName(shiftId) {
    if (!shiftId)
      return "Personalizzato";
    const shift = this.availableShifts.find((s) => s.id === shiftId);
    return shift ? shift.name : "Sconosciuto";
  }
  get expiringShiftsCount() {
    const today = /* @__PURE__ */ new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    return this.currentShifts.filter((cs) => cs.valid_to && new Date(cs.valid_to) <= nextWeek && new Date(cs.valid_to) >= today).length;
  }
  generateWeeks() {
    const start = this.weeklyProgramForm.get("period_start")?.value;
    const end = this.weeklyProgramForm.get("period_end")?.value;
    if (!start || !end) {
      this.weeks = [];
      return;
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    this.weeks = [];
    let current = new Date(startDate);
    const day = current.getDay();
    const diff = day === 0 ? 6 : day - 1;
    current.setDate(current.getDate() - diff);
    let weekNumber = 1;
    while (current <= endDate) {
      const weekStart = new Date(current);
      const weekEnd = new Date(current);
      weekEnd.setDate(weekEnd.getDate() + 6);
      if (weekEnd > endDate) {
        weekEnd.setTime(endDate.getTime());
      }
      this.weeks.push({
        weekNumber: weekNumber++,
        start: this.formatDate(weekStart),
        end: this.formatDate(weekEnd),
        shiftId: null
      });
      current.setDate(current.getDate() + 7);
    }
  }
  formatDate(date) {
    return date.toISOString().split("T")[0];
  }
  assignWeeklyShifts() {
    if (this.weeklyProgramForm.invalid || this.weeks.some((w) => !w.shiftId)) {
      this.errorMessage = "Completa tutti i campi e seleziona un turno per ogni settimana";
      return;
    }
    const userId = this.weeklyProgramForm.value.user_id;
    const assignments = this.weeks.map((week) => ({
      company_id: this.companyId,
      user_id: userId,
      shift_id: week.shiftId,
      // cast sicuro perché abbiamo controllato
      valid_from: week.start,
      valid_to: week.end
    }));
    this.loading = true;
    forkJoin(assignments.map((a) => this.employeeShiftsService.create(a))).subscribe({
      next: () => {
        this.successMessage = "Programma settimanale creato con successo";
        this.showWeeklyProgramForm = false;
        this.loadData();
      },
      error: (err) => {
        this.errorMessage = "Errore nella creazione del programma";
        this.loading = false;
      }
    });
  }
  get isWeeklyProgramCompleto() {
    return this.weeklyProgramForm.valid && this.weeks.every((w) => w.shiftId !== null);
  }
  static \u0275fac = function ShiftManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShiftManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShiftManagementComponent, selectors: [["app-shift-management"]], decls: 19, vars: 12, consts: [["noShifts", ""], ["editName", ""], ["noShiftsAttuali", ""], ["noRequests", ""], [1, "page-container", "p-lg"], ["class", "info-message info-success mb-md", 4, "ngIf"], ["class", "info-message info-error mb-md", 4, "ngIf"], ["class", "card mb-lg", 4, "ngIf"], [1, "card", "mb-lg"], [1, "flex", "justify-between", "gap-sm", "flex-wrap"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "calendar"], [1, "font-bold", "text-md", "m-0"], ["class", "chip warning ml-sm", 4, "ngIf"], ["class", "flex justify-center mt-sm p-lg", 4, "ngIf"], ["class", "table-section mt-sm", 4, "ngIf"], ["class", "flex justify-end mb-lg", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "info-message", "info-success", "mb-md"], ["name", "check-circle"], [1, "info-message", "info-error", "mb-md"], ["name", "alert-circle"], [1, "flex", "items-center", "justify-between", "gap-sm", "settings-toggle", 3, "click"], [1, "flex", "items-center", "gap-sm"], ["name", "clock"], ["type", "button", 1, "icon-button"], [3, "name"], ["class", "mt-md", 4, "ngIf"], [1, "mt-md"], [1, "flex", "justify-end", "mb-md"], [1, "promethea-button", 3, "click"], ["class", "card shadow-card mb-md", 4, "ngIf"], [1, "table-section"], ["class", "crm-table", 4, "ngIf", "ngIfElse"], [1, "card", "shadow-card", "mb-md"], [1, "font-semibold", "mb-md"], [1, "grid-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "standard-label"], ["type", "text", "formControlName", "name", "placeholder", "es. Mattina"], [1, "form-row"], ["type", "time", "formControlName", "start_time"], ["type", "time", "formControlName", "end_time"], [1, "standard-label", "mb-sm"], [1, "flex", "flex-wrap", "gap-sm"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "mon"], ["type", "checkbox", "formControlName", "tue"], ["type", "checkbox", "formControlName", "wed"], ["type", "checkbox", "formControlName", "thu"], ["type", "checkbox", "formControlName", "fri"], ["type", "checkbox", "formControlName", "sat"], ["type", "checkbox", "formControlName", "sun"], ["type", "color", "formControlName", "color"], [1, "flex", "justify-end"], ["type", "submit", 1, "promethea-button", 3, "disabled"], [1, "crm-table"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "chip-mini", 2, "width", "30px", "height", "20px"], [1, "flex", "gap-sm"], ["type", "text", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "time", 2, "width", "80px", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-mini", "flex-wrap"], ["class", "chip-mini", 3, "warning", 4, "ngIf"], [1, "chip-mini"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "icon-button", 3, "click"], ["name", "pencil"], ["name", "trash-2"], ["name", "check"], ["name", "x"], [1, "text-muted"], ["name", "calendar-range"], [1, "promethea-button", "mb-md", 3, "click"], ["class", "card shadow-card", 4, "ngIf"], [1, "card", "shadow-card"], ["formControlName", "user_id"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "period_start"], ["type", "date", "formControlName", "period_end"], [1, "flex", "justify-end", "mt-lg"], [1, "font-semibold", "mb-sm"], ["class", "flex items-center gap-md mb-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-md", "mb-sm"], [1, "text-sm", 2, "min-width", "150px"], [1, "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["name", "user-plus"], ["formControlName", "shift_id"], ["type", "date", "formControlName", "valid_from"], ["type", "date", "formControlName", "valid_to"], [1, "chip", "warning", "ml-sm"], [1, "flex", "justify-center", "mt-sm", "p-lg"], ["name", "refresh-cw", 1, "animate-spin"], [1, "table-section", "mt-sm"], [1, "flex", "justify-end", "mb-lg"], [3, "ngSubmit", "formGroup"], ["class", "flex gap-lg mb-md", 4, "ngIf"], ["class", "grid-form", 4, "ngIf"], ["class", "form-card", "formGroupName", "custom_shift", 4, "ngIf"], [1, "flex", "flex-col", "gap-sm", "mt-md"], ["type", "text", "formControlName", "notes"], [1, "flex", "gap-lg", "mb-md"], ["type", "radio", "formControlName", "requestType", "value", "predefined"], ["type", "radio", "formControlName", "requestType", "value", "custom"], [1, "grid-form"], ["formGroupName", "custom_shift", 1, "form-card"], [1, "form-row", "mt-sm"], ["class", "text-mini warning", 4, "ngIf"], [1, "form-group", "mt-sm"], [1, "text-mini", "warning"], ["name", "inbox"], [1, "chip"], ["class", "flex gap-sm", 4, "ngIf"], ["title", "Approva", 1, "icon-button", 3, "click"], ["title", "Rifiuta", 1, "icon-button", 3, "click"], [1, "card"], ["class", "icon-button", "title", "Cancella", 3, "click", 4, "ngIf"], ["title", "Cancella", 1, "icon-button", 3, "click"]], template: function ShiftManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4);
      \u0275\u0275template(1, ShiftManagementComponent_div_1_Template, 3, 1, "div", 5)(2, ShiftManagementComponent_div_2_Template, 3, 1, "div", 6)(3, ShiftManagementComponent_div_3_Template, 9, 3, "div", 7)(4, ShiftManagementComponent_div_4_Template, 9, 3, "div", 7)(5, ShiftManagementComponent_div_5_Template, 9, 3, "div", 7);
      \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "div", 10);
      \u0275\u0275element(9, "lucide-angular", 11);
      \u0275\u0275elementStart(10, "h2", 12);
      \u0275\u0275text(11, "Turni attuali");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, ShiftManagementComponent_span_12_Template, 2, 1, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ShiftManagementComponent_div_13_Template, 2, 0, "div", 14)(14, ShiftManagementComponent_div_14_Template, 4, 2, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, ShiftManagementComponent_div_15_Template, 4, 2, "div", 16)(16, ShiftManagementComponent_div_16_Template, 24, 5, "div", 7)(17, ShiftManagementComponent_div_17_Template, 9, 2, "div", 7)(18, ShiftManagementComponent_div_18_Template, 9, 2, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canManageShifts());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canManageShifts());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canManageShifts());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.expiringShiftsCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userRole === "employee" && ctx.userCanRequestShifts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRequestForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userRole !== "employee");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userRole === "employee");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormsModule, NgModel, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShiftManagementComponent, [{
    type: Component,
    args: [{ selector: "app-shift-management", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, LucideAngularModule], template: `<div class="page-container p-lg">\r
\r
  <!-- Messaggi -->\r
  <div *ngIf="successMessage" class="info-message info-success mb-md">\r
    <lucide-angular name="check-circle"></lucide-angular>\r
    {{ successMessage }}\r
  </div>\r
  <div *ngIf="errorMessage" class="info-message info-error mb-md">\r
    <lucide-angular name="alert-circle"></lucide-angular>\r
    {{ errorMessage }}\r
  </div>\r
\r
  <!-- Turni predefiniti (solo chi pu\xF2 gestirli) -->\r
  <div class="card mb-lg" *ngIf="canManageShifts()">\r
    <div class="flex items-center justify-between gap-sm settings-toggle" (click)="showShiftsList = !showShiftsList">\r
      <div class="flex items-center gap-sm">\r
        <lucide-angular name="clock"></lucide-angular>\r
        <h2 class="font-bold text-md m-0">Turni predefiniti</h2>\r
      </div>\r
      <button type="button" class="icon-button" [attr.aria-expanded]="showShiftsList">\r
        <lucide-angular [name]="showShiftsList ? 'chevron-up' : 'chevron-down'"></lucide-angular>\r
      </button>\r
    </div>\r
\r
    <div *ngIf="showShiftsList" class="mt-md">\r
      <div class="flex justify-end mb-md">\r
        <button class="promethea-button" (click)="showAddShiftForm = !showAddShiftForm">\r
          <lucide-angular [name]="showAddShiftForm ? 'x' : 'plus'"></lucide-angular>\r
          {{ showAddShiftForm ? 'Annulla' : 'Nuovo turno' }}\r
        </button>\r
      </div>\r
\r
      <!-- Form nuovo turno -->\r
      <div *ngIf="showAddShiftForm" class="card shadow-card mb-md">\r
        <h3 class="font-semibold mb-md">Nuovo turno</h3>\r
        <form [formGroup]="newShiftForm" (ngSubmit)="createShift()" class="grid-form">\r
          <div class="form-group">\r
            <label class="standard-label">Nome turno</label>\r
            <input type="text" formControlName="name" placeholder="es. Mattina">\r
          </div>\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Inizio</label>\r
              <input type="time" formControlName="start_time">\r
            </div>\r
            <div class="form-group">\r
              <label class="standard-label">Fine</label>\r
              <input type="time" formControlName="end_time">\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label class="standard-label mb-sm">Giorni</label>\r
            <div class="flex flex-wrap gap-sm">\r
              <label class="checkbox-label" [class.warning]="isDayClosed('monday')">\r
                <input type="checkbox" formControlName="mon"> Luned\xEC\r
              </label>\r
              <label class="checkbox-label" [class.warning]="isDayClosed('tuesday')">\r
                <input type="checkbox" formControlName="tue"> Marted\xEC\r
              </label>\r
              <label class="checkbox-label" [class.warning]="isDayClosed('wednesday')">\r
                <input type="checkbox" formControlName="wed"> Mercoled\xEC\r
              </label>\r
              <label class="checkbox-label" [class.warning]="isDayClosed('thursday')">\r
                <input type="checkbox" formControlName="thu"> Gioved\xEC\r
              </label>\r
              <label class="checkbox-label" [class.warning]="isDayClosed('friday')">\r
                <input type="checkbox" formControlName="fri"> Venerd\xEC\r
              </label>\r
              <label class="checkbox-label" [class.warning]="isDayClosed('saturday')">\r
                <input type="checkbox" formControlName="sat"> Sabato\r
              </label>\r
              <label class="checkbox-label" [class.warning]="isDayClosed('sunday')">\r
                <input type="checkbox" formControlName="sun"> Domenica\r
              </label>\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label class="standard-label">Colore</label>\r
            <input type="color" formControlName="color">\r
          </div>\r
          <div class="flex justify-end">\r
            <button type="submit" class="promethea-button" [disabled]="newShiftForm.invalid">Salva turno</button>\r
          </div>\r
        </form>\r
      </div>\r
\r
      <!-- Lista turni -->\r
      <div class="table-section">\r
        <table class="crm-table" *ngIf="availableShifts.length; else noShifts">\r
          <thead>\r
            <tr>\r
              <th>Nome</th>\r
              <th>Orario</th>\r
              <th>Giorni</th>\r
              <th>Colore</th>\r
              <th>Azioni</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let shift of availableShifts">\r
              <td>\r
                <ng-container *ngIf="editingShiftId !== shift.id; else editName">\r
                  {{ shift.name }}\r
                </ng-container>\r
                <ng-template #editName>\r
                  <input type="text" [(ngModel)]="editingShiftData.name" (keyup.enter)="saveEditShift()">\r
                </ng-template>\r
              </td>\r
              <td>\r
                <ng-container *ngIf="editingShiftId !== shift.id">\r
                  {{ shift.start_time }} - {{ shift.end_time }}\r
                </ng-container>\r
                <ng-container *ngIf="editingShiftId === shift.id">\r
                  <div class="flex gap-sm">\r
                    <input type="time" [(ngModel)]="editingShiftData.start_time" style="width:80px">\r
                    <input type="time" [(ngModel)]="editingShiftData.end_time" style="width:80px">\r
                  </div>\r
                </ng-container>\r
              </td>\r
              <td>\r
                <ng-container *ngIf="editingShiftId !== shift.id">\r
                  <div class="flex gap-mini flex-wrap">\r
                    <span *ngIf="shift.mon" class="chip-mini" [class.warning]="isDayClosed('monday')">L</span>\r
                    <span *ngIf="shift.tue" class="chip-mini" [class.warning]="isDayClosed('tuesday')">Ma</span>\r
                    <span *ngIf="shift.wed" class="chip-mini" [class.warning]="isDayClosed('wednesday')">Me</span>\r
                    <span *ngIf="shift.thu" class="chip-mini" [class.warning]="isDayClosed('thursday')">G</span>\r
                    <span *ngIf="shift.fri" class="chip-mini" [class.warning]="isDayClosed('friday')">V</span>\r
                    <span *ngIf="shift.sat" class="chip-mini" [class.warning]="isDayClosed('saturday')">S</span>\r
                    <span *ngIf="shift.sun" class="chip-mini" [class.warning]="isDayClosed('sunday')">D</span>\r
                  </div>\r
                </ng-container>\r
                <ng-container *ngIf="editingShiftId === shift.id">\r
                  <div class="flex flex-wrap gap-sm">\r
                    <label><input type="checkbox" [(ngModel)]="editingShiftData.mon"> L</label>\r
                    <label><input type="checkbox" [(ngModel)]="editingShiftData.tue"> Ma</label>\r
                    <label><input type="checkbox" [(ngModel)]="editingShiftData.wed"> Me</label>\r
                    <label><input type="checkbox" [(ngModel)]="editingShiftData.thu"> G</label>\r
                    <label><input type="checkbox" [(ngModel)]="editingShiftData.fri"> V</label>\r
                    <label><input type="checkbox" [(ngModel)]="editingShiftData.sat"> S</label>\r
                    <label><input type="checkbox" [(ngModel)]="editingShiftData.sun"> D</label>\r
                  </div>\r
                </ng-container>\r
              </td>\r
              <td>\r
                <div [style.background]="shift.color" class="chip-mini" style="width:30px; height:20px;"></div>\r
              </td>\r
              <td>\r
                <div class="flex gap-sm">\r
                  <ng-container *ngIf="editingShiftId !== shift.id">\r
                    <button class="icon-button" (click)="beginEditShift(shift)">\r
                      <lucide-angular name="pencil"></lucide-angular>\r
                    </button>\r
                    <button class="icon-button" (click)="deleteShift(shift.id)">\r
                      <lucide-angular name="trash-2"></lucide-angular>\r
                    </button>\r
                  </ng-container>\r
                  <ng-container *ngIf="editingShiftId === shift.id">\r
                    <button class="icon-button" (click)="saveEditShift()">\r
                      <lucide-angular name="check"></lucide-angular>\r
                    </button>\r
                    <button class="icon-button" (click)="cancelEditShift()">\r
                      <lucide-angular name="x"></lucide-angular>\r
                    </button>\r
                  </ng-container>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
        <ng-template #noShifts>\r
          <p class="text-muted">Nessun turno predefinito. Creane uno.</p>\r
        </ng-template>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Assegnazione turni (solo chi pu\xF2 gestirli) -->\r
<div class="card mb-lg" *ngIf="canManageShifts()">\r
  <div class="flex items-center gap-sm mb-md">\r
    <lucide-angular name="calendar-range"></lucide-angular>\r
    <h2 class="font-bold text-md m-0">Programma settimanale turni</h2>\r
  </div>\r
  <button class="promethea-button mb-md" (click)="showWeeklyProgramForm = !showWeeklyProgramForm">\r
    <lucide-angular [name]="showWeeklyProgramForm ? 'x' : 'plus'"></lucide-angular>\r
    {{ showWeeklyProgramForm ? 'Annulla' : 'Nuovo programma settimanale' }}\r
  </button>\r
\r
  <div *ngIf="showWeeklyProgramForm" class="card shadow-card">\r
    <form [formGroup]="weeklyProgramForm" (ngSubmit)="assignWeeklyShifts()" class="grid-form">\r
      <div class="form-group">\r
        <label class="standard-label">Dipendente</label>\r
        <select formControlName="user_id">\r
          <option [ngValue]="null">Seleziona dipendente</option>\r
          <option *ngFor="let u of employees" [ngValue]="u.id">{{ u.first_name }} {{ u.last_name }}</option>\r
        </select>\r
      </div>\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">Dal</label>\r
          <input type="date" formControlName="period_start">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Al</label>\r
          <input type="date" formControlName="period_end">\r
        </div>\r
      </div>\r
\r
      <div *ngIf="weeks.length > 0" class="mt-md">\r
        <h3 class="font-semibold mb-sm">Settimane nel periodo</h3>\r
        <div *ngFor="let week of weeks; let i = index" class="flex items-center gap-md mb-sm">\r
          <span class="text-sm" style="min-width: 150px;">Sett. {{ week.weekNumber }}: {{ week.start | date }} - {{ week.end | date }}</span>\r
          <select [(ngModel)]="week.shiftId" [ngModelOptions]="{standalone: true}" class="flex-1">\r
            <option [ngValue]="null">Seleziona turno</option>\r
            <option *ngFor="let s of availableShifts" [ngValue]="s.id">{{ s.name }} ({{ s.start_time }}-{{ s.end_time }})</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div class="flex justify-end mt-lg">\r
      <button type="submit" class="promethea-button" [disabled]="!isWeeklyProgramCompleto">\r
        Crea programma\r
      </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
  <div class="card mb-lg" *ngIf="canManageShifts()">\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="user-plus"></lucide-angular>\r
      <h2 class="font-bold text-md m-0">Assegna turno a dipendente</h2>\r
    </div>\r
    <button class="promethea-button mb-md" (click)="showAssignForm = !showAssignForm">\r
      <lucide-angular [name]="showAssignForm ? 'x' : 'plus'"></lucide-angular>\r
      {{ showAssignForm ? 'Annulla' : 'Nuova assegnazione' }}\r
    </button>\r
\r
    <div *ngIf="showAssignForm" class="card shadow-card">\r
      <form [formGroup]="assignForm" (ngSubmit)="assignShift()" class="grid-form">\r
        <div class="form-group">\r
          <label class="standard-label">Dipendente</label>\r
          <select formControlName="user_id">\r
            <option [ngValue]="null">Seleziona dipendente</option>\r
            <option *ngFor="let u of employees" [ngValue]="u.id">{{ u.first_name }} {{ u.last_name }}</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Turno</label>\r
          <select formControlName="shift_id">\r
            <option [ngValue]="null">Seleziona turno</option>\r
            <option *ngFor="let s of availableShifts" [ngValue]="s.id">{{ s.name }} ({{ s.start_time }}-{{ s.end_time }})</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Dal</label>\r
          <input type="date" formControlName="valid_from">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Al (opzionale)</label>\r
          <input type="date" formControlName="valid_to">\r
        </div>\r
        <div class="flex justify-end">\r
          <button type="submit" class="promethea-button" [disabled]="assignForm.invalid">Assegna</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
  <!-- Turni attuali -->\r
  <div class="card mb-lg">\r
    <div class="flex justify-between gap-sm flex-wrap">\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="calendar"></lucide-angular>\r
      <h2 class="font-bold text-md m-0">Turni attuali</h2>\r
    </div>\r
      <span *ngIf="expiringShiftsCount > 0" class="chip warning ml-sm">\r
        {{ expiringShiftsCount }} in scadenza\r
      </span>\r
      </div>\r
    <div *ngIf="loading" class="flex justify-center mt-sm p-lg">\r
      <lucide-angular name="refresh-cw" class="animate-spin"></lucide-angular>\r
    </div>\r
\r
    <div *ngIf="!loading" class="table-section mt-sm">\r
      <table class="crm-table" *ngIf="currentShifts.length; else noShiftsAttuali">\r
        <thead>\r
          <tr>\r
            <th *ngIf="userRole !== 'employee'">Dipendente</th>\r
            <th>Turno</th>\r
            <th>Orario</th>\r
            <th>Giorni</th>\r
            <th>Dal</th>\r
            <th>Al</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let cs of currentShifts">\r
            <td *ngIf="userRole !== 'employee'">{{ cs.user_name }}</td>\r
            <td>{{ cs.shiftDetails?.name || 'Personalizzato' }}</td>\r
            <td>{{ cs.shiftDetails?.start_time }} - {{ cs.shiftDetails?.end_time }}</td>\r
            <td>\r
              <div class="flex gap-mini flex-wrap">\r
                <span *ngIf="cs.shiftDetails?.mon" class="chip-mini" [class.warning]="isDayClosed('monday')">L</span>\r
                <span *ngIf="cs.shiftDetails?.tue" class="chip-mini" [class.warning]="isDayClosed('tuesday')">Ma</span>\r
                <span *ngIf="cs.shiftDetails?.wed" class="chip-mini" [class.warning]="isDayClosed('wednesday')">Me</span>\r
                <span *ngIf="cs.shiftDetails?.thu" class="chip-mini" [class.warning]="isDayClosed('thursday')">G</span>\r
                <span *ngIf="cs.shiftDetails?.fri" class="chip-mini" [class.warning]="isDayClosed('friday')">V</span>\r
                <span *ngIf="cs.shiftDetails?.sat" class="chip-mini" [class.warning]="isDayClosed('saturday')">S</span>\r
                <span *ngIf="cs.shiftDetails?.sun" class="chip-mini" [class.warning]="isDayClosed('sunday')">D</span>\r
              </div>\r
            </td>\r
            <td>{{ cs.valid_from | date }}</td>\r
            <td>{{ cs.valid_to ? (cs.valid_to | date) : '\u221E' }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
      <ng-template #noShiftsAttuali>\r
        <p class="text-muted">Nessun turno assegnato</p>\r
      </ng-template>\r
    </div>\r
  </div>\r
\r
  <!-- Sezione employee: pulsante nuova richiesta (solo se autorizzato) -->\r
  <div *ngIf="userRole === 'employee' && userCanRequestShifts" class="flex justify-end mb-lg">\r
    <button class="promethea-button" (click)="showRequestForm = !showRequestForm">\r
      <lucide-angular [name]="showRequestForm ? 'x' : 'plus'"></lucide-angular>\r
      {{ showRequestForm ? 'Annulla' : 'Richiedi nuovo turno' }}\r
    </button>\r
  </div>\r
\r
  <!-- Form nuova richiesta (employee) -->\r
  <div *ngIf="showRequestForm" class="card mb-lg">\r
    <h3 class="font-semibold mb-md">Nuova richiesta turno</h3>\r
    <form [formGroup]="requestForm" (ngSubmit)="submitRequest()">\r
      <!-- Toggle tipo turno -->\r
      <div class="flex gap-lg mb-md" *ngIf="userCanCreateCustomShifts">\r
        <label class="checkbox-label">\r
          <input type="radio" formControlName="requestType" value="predefined">\r
          <span>Turno predefinito</span>\r
        </label>\r
        <label class="checkbox-label">\r
          <input type="radio" formControlName="requestType" value="custom">\r
          <span>Turno personalizzato</span>\r
        </label>\r
      </div>\r
\r
      <!-- Campi per turno predefinito -->\r
      <div *ngIf="requestForm.get('requestType')?.value === 'predefined'" class="grid-form">\r
        <div class="form-group">\r
          <label class="standard-label">Turno</label>\r
          <select formControlName="shift_id">\r
            <option [ngValue]="null">Seleziona turno</option>\r
            <option *ngFor="let s of availableShifts" [ngValue]="s.id">{{ s.name }} ({{ s.start_time }}-{{ s.end_time }})</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <!-- Campi per turno personalizzato -->\r
      <div *ngIf="requestForm.get('requestType')?.value === 'custom'" class="form-card" formGroupName="custom_shift">\r
        <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">Nome turno</label>\r
          <input type="text" formControlName="name" placeholder="es. Mattina">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Colore</label>\r
          <input type="color" formControlName="color">\r
        </div>\r
        </div>\r
        <div class="form-row mt-sm">\r
          <div class="form-group">\r
            <label class="standard-label">Inizio</label>\r
            <input type="time" formControlName="start_time">\r
            <div *ngIf="isTimeOutsideWorkHours('monday', newShiftForm.get('start_time')?.value)" class="text-mini warning">\r
              \u26A0\uFE0F Fuori orario di lavoro\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label class="standard-label">Fine</label>\r
            <input type="time" formControlName="end_time">\r
            <div *ngIf="isTimeOutsideWorkHours('monday', newShiftForm.get('end_time')?.value)" class="text-mini warning">\r
              \u26A0\uFE0F Fuori orario di lavoro\r
            </div>\r
          </div>\r
        </div>\r
        <div class="form-group mt-sm">\r
          <label class="standard-label mb-sm">Giorni</label>\r
          <div class="flex flex-wrap gap-sm">\r
            <label class="checkbox-label" [class.warning]="isDayClosed('monday')">\r
              <input type="checkbox" formControlName="mon"> Luned\xEC\r
            </label>\r
            <label class="checkbox-label" [class.warning]="isDayClosed('tuesday')">\r
              <input type="checkbox" formControlName="tue"> Marted\xEC\r
            </label>\r
            <label class="checkbox-label" [class.warning]="isDayClosed('wednesday')">\r
              <input type="checkbox" formControlName="wed"> Mercoled\xEC\r
            </label>\r
            <label class="checkbox-label" [class.warning]="isDayClosed('thursday')">\r
              <input type="checkbox" formControlName="thu"> Gioved\xEC\r
            </label>\r
            <label class="checkbox-label" [class.warning]="isDayClosed('friday')">\r
              <input type="checkbox" formControlName="fri"> Venerd\xEC\r
            </label>\r
            <label class="checkbox-label" [class.warning]="isDayClosed('saturday')">\r
              <input type="checkbox" formControlName="sat"> Sabato\r
            </label>\r
            <label class="checkbox-label" [class.warning]="isDayClosed('sunday')">\r
              <input type="checkbox" formControlName="sun"> Domenica\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Campi comuni -->\r
      <div class="flex flex-col gap-sm mt-md">\r
        <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">Dal</label>\r
          <input type="date" formControlName="valid_from">\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Al (opzionale)</label>\r
          <input type="date" formControlName="valid_to">\r
        </div>\r
        </div>\r
        <div class="form-group">\r
          <label class="standard-label">Note</label>\r
          <input type="text" formControlName="notes">\r
        </div>\r
      </div>\r
\r
      <div class="flex justify-end mt-lg">\r
        <button type="submit" class="promethea-button" [disabled]="requestForm.invalid">Invia richiesta</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <!-- Richieste (per admin/manager) -->\r
  <div *ngIf="userRole !== 'employee'" class="card mb-lg">\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="inbox"></lucide-angular>\r
      <h2 class="font-bold text-md m-0">Richieste di turno</h2>\r
    </div>\r
    <div class="table-section">\r
      <table class="crm-table" *ngIf="shiftRequests.length; else noRequests">\r
        <thead>\r
          <tr>\r
            <th>Dipendente</th>\r
            <th>Turno</th>\r
            <th>Dal</th>\r
            <th>Al</th>\r
            <th>Stato</th>\r
            <th>Richiesto il</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let req of shiftRequests">\r
            <td>{{ req.user_name }}</td>\r
            <td>{{ getShiftName(req.shift_id) }}</td>\r
            <td>{{ req.valid_from | date }}</td>\r
            <td>{{ req.valid_to ? (req.valid_to | date) : '\u221E' }}</td>\r
            <td>\r
              <span class="chip" \r
                    [class.warning]="req.status === 'pending'"\r
                    [class.success]="req.status === 'approved'"\r
                    [class.error]="req.status === 'rejected'">\r
                {{ req.status }}\r
              </span>\r
            </td>\r
            <td>{{ req.requested_at | date:'short' }}</td>\r
            <td>\r
              <div *ngIf="req.status === 'pending'" class="flex gap-sm">\r
                <button class="icon-button" (click)="approveRequest(req.id)" title="Approva">\r
                  <lucide-angular name="check"></lucide-angular>\r
                </button>\r
                <button class="icon-button" (click)="rejectRequest(req.id)" title="Rifiuta">\r
                  <lucide-angular name="x"></lucide-angular>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
      <ng-template #noRequests>\r
        <p class="text-muted">Nessuna richiesta in attesa</p>\r
      </ng-template>\r
    </div>\r
  </div>\r
\r
  <!-- Richieste per employee -->\r
  <div *ngIf="userRole === 'employee'" class="card">\r
    <div class="flex items-center gap-sm mb-md">\r
      <lucide-angular name="inbox"></lucide-angular>\r
      <h2 class="font-bold text-md m-0">Le mie richieste</h2>\r
    </div>\r
    <div class="table-section">\r
      <table class="crm-table" *ngIf="shiftRequests.length; else noRequests">\r
        <thead>\r
          <tr>\r
            <th>Turno</th>\r
            <th>Dal</th>\r
            <th>Al</th>\r
            <th>Stato</th>\r
            <th>Richiesto il</th>\r
            <th>Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let req of shiftRequests">\r
            <td>{{ getShiftName(req.shift_id) }}</td>\r
            <td>{{ req.valid_from | date }}</td>\r
            <td>{{ req.valid_to ? (req.valid_to | date) : '\u221E' }}</td>\r
            <td>\r
              <span class="chip" \r
                    [class.warning]="req.status === 'pending'"\r
                    [class.success]="req.status === 'approved'"\r
                    [class.error]="req.status === 'rejected'">\r
                {{ req.status }}\r
              </span>\r
            </td>\r
            <td>{{ req.requested_at | date:'short' }}</td>\r
            <td>\r
              <button *ngIf="req.status === 'pending'" class="icon-button" (click)="cancelRequest(req.id)" title="Cancella">\r
                <lucide-angular name="trash-2"></lucide-angular>\r
              </button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
      <ng-template #noRequests>\r
        <p class="text-muted">Nessuna richiesta</p>\r
      </ng-template>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShiftManagementComponent, { className: "ShiftManagementComponent", filePath: "src/app/timbrature/features/shift-management/shift-management.component.ts", lineNumber: 21 });
})();
export {
  ShiftManagementComponent
};
//# sourceMappingURL=chunk-O7UKNHK4.js.map
