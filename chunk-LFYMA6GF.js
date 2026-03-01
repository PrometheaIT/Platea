import {
  takeUntilDestroyed
} from "./chunk-YSV36LK3.js";
import {
  PersonalAppointmentService
} from "./chunk-I4AX7APC.js";
import {
  ShiftService
} from "./chunk-J63TFP6U.js";
import {
  TaskService
} from "./chunk-LJEGTELM.js";
import {
  FloorPlanService
} from "./chunk-5XRBYBJN.js";
import {
  TableService
} from "./chunk-J3BKBXKA.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  ReservationService
} from "./chunk-PAOODSRL.js";
import "./chunk-K4QVN3EH.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService
} from "./chunk-JWP3QZ4U.js";
import {
  Router
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase
} from "./chunk-6GUAOFJT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ViewChild,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/reservation/calendar-view/calendar-view.ts
var _c0 = ["calendarContainer"];
var _c1 = ["calendarHeader"];
var _c2 = () => ["LUN", "MAR", "MER", "GIO", "VEN", "SAB", "DOM"];
function RestaurantCalendar_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Tavoli da ", item_r2.size, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.count);
  }
}
function RestaurantCalendar_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, RestaurantCalendar_div_23_div_1_Template, 5, 2, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getSimpleCapacityDistribution());
  }
}
function RestaurantCalendar_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r2.getAvailableTablesToday(), " tavoli liberi) ");
  }
}
function RestaurantCalendar_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 44);
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Disponibilit\xE0 ", \u0275\u0275pipeBind2(6, 4, ctx_r2.selectedDate, "dd/MM"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAvailableTablesForSelectedDate(), " tavoli ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Posti: ", ctx_r2.todayCapacity, " / ", ctx_r2.maxCapacityValue, " ");
  }
}
function RestaurantCalendar_div_67_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", weekday_r4, " ");
  }
}
function RestaurantCalendar_div_67_div_4_lucide_angular_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-angular", 58);
  }
}
function RestaurantCalendar_div_67_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r2.getEventColor(day_r6.events[0]));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r6.events.length);
  }
}
function RestaurantCalendar_div_67_div_4_div_6_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RestaurantCalendar_div_67_div_4_div_6_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const evt_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, evt_r8.start, "HH:mm"));
  }
}
function RestaurantCalendar_div_67_div_4_div_6_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", evt_r8.title, " ");
  }
}
function RestaurantCalendar_div_67_div_4_div_6_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69)(1, "span", 29);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", evt_r8.meta.customerName, " ");
  }
}
function RestaurantCalendar_div_67_div_4_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function RestaurantCalendar_div_67_div_4_div_6_div_1_Template_div_click_0_listener($event) {
      const evt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.onEventClick(evt_r8));
    });
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275template(2, RestaurantCalendar_div_67_div_4_div_6_div_1_ng_container_2_Template, 3, 0, "ng-container", 65)(3, RestaurantCalendar_div_67_div_4_div_6_div_1_ng_template_3_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(5, 66);
    \u0275\u0275template(6, RestaurantCalendar_div_67_div_4_div_6_div_1_span_6_Template, 2, 1, "span", 67)(7, RestaurantCalendar_div_67_div_4_div_6_div_1_span_7_Template, 4, 1, "span", 67);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r8 = ctx.$implicit;
    const normalTimeSmall_r9 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("border-color", ctx_r2.getEventColor(evt_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", evt_r8.meta.eventType === "personal" && evt_r8.meta.isAllDay)("ngIfElse", normalTimeSmall_r9);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", evt_r8.meta.eventType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "reservation");
  }
}
function RestaurantCalendar_div_67_div_4_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function RestaurantCalendar_div_67_div_4_div_6_div_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.onDayClick(day_r6.date));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r2.getEventsForDate(day_r6.date).length - 2, " ");
  }
}
function RestaurantCalendar_div_67_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, RestaurantCalendar_div_67_div_4_div_6_div_1_Template, 8, 7, "div", 61)(2, RestaurantCalendar_div_67_div_4_div_6_div_2_Template, 2, 1, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getLimitedEventsForDate(day_r6.date, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasMoreEvents(day_r6.date, 2));
  }
}
function RestaurantCalendar_div_67_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function RestaurantCalendar_div_67_div_4_Template_div_click_0_listener() {
      const day_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDayDetails(day_r6.date));
    });
    \u0275\u0275elementStart(1, "div", 53)(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RestaurantCalendar_div_67_div_4_lucide_angular_4_Template, 1, 0, "lucide-angular", 55)(5, RestaurantCalendar_div_67_div_4_span_5_Template, 2, 3, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RestaurantCalendar_div_67_div_4_div_6_Template, 3, 2, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r6.date))("current-month", day_r6.isCurrentMonth)("other-month", !day_r6.isCurrentMonth)("closed-day", ctx_r2.isDayClosed(day_r6.date));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("today-number", ctx_r2.isToday(day_r6.date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r6.date.getDate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isDayClosed(day_r6.date));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r6.events.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r6.events.length > 0);
  }
}
function RestaurantCalendar_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275template(2, RestaurantCalendar_div_67_div_2_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49);
    \u0275\u0275template(4, RestaurantCalendar_div_67_div_4_Template, 7, 14, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.monthDays);
  }
}
function RestaurantCalendar_div_68_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r11))("closed-day", ctx_r2.isDayClosed(day_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, day_r11, "EEE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r11.getDate());
  }
}
function RestaurantCalendar_div_68_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r12, " ");
  }
}
function RestaurantCalendar_div_68_div_7_div_1_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RestaurantCalendar_div_68_div_7_div_1_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const evt_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, evt_r16.start, "HH:mm"), " ");
  }
}
function RestaurantCalendar_div_68_div_7_div_1_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91);
    \u0275\u0275text(2, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", evt_r16.title, " ");
  }
}
function RestaurantCalendar_div_68_div_7_div_1_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", evt_r16.meta.customerName, " ");
  }
}
function RestaurantCalendar_div_68_div_7_div_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", evt_r16.meta.partySize, "p ");
  }
}
function RestaurantCalendar_div_68_div_7_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click", function RestaurantCalendar_div_68_div_7_div_1_div_1_Template_div_click_0_listener($event) {
      const evt_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.onEventClick(evt_r16));
    });
    \u0275\u0275elementStart(1, "div", 87);
    \u0275\u0275template(2, RestaurantCalendar_div_68_div_7_div_1_div_1_ng_container_2_Template, 3, 0, "ng-container", 65)(3, RestaurantCalendar_div_68_div_7_div_1_div_1_ng_template_3_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(5, 66);
    \u0275\u0275template(6, RestaurantCalendar_div_68_div_7_div_1_div_1_div_6_Template, 4, 1, "div", 88)(7, RestaurantCalendar_div_68_div_7_div_1_div_1_div_7_Template, 4, 1, "div", 88);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(8, RestaurantCalendar_div_68_div_7_div_1_div_1_div_8_Template, 2, 1, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r16 = ctx.$implicit;
    const normalTime_r17 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background", ctx_r2.getEventColor(evt_r16));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", evt_r16.meta.eventType === "personal" && evt_r16.meta.isAllDay)("ngIfElse", normalTime_r17);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", evt_r16.meta.eventType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "reservation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r16.meta.eventType === "reservation");
  }
}
function RestaurantCalendar_div_68_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function RestaurantCalendar_div_68_div_7_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const day_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDayDetails(day_r14));
    });
    \u0275\u0275template(1, RestaurantCalendar_div_68_div_7_div_1_div_1_Template, 9, 8, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r18 = ctx.$implicit;
    const day_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForSlot(day_r14, slot_r18));
  }
}
function RestaurantCalendar_div_68_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, RestaurantCalendar_div_68_div_7_div_1_Template, 2, 1, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("closed-day", ctx_r2.isDayClosed(day_r14));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getTimeSlotsForDay(day_r14));
  }
}
function RestaurantCalendar_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275element(2, "div", 73);
    \u0275\u0275template(3, RestaurantCalendar_div_68_div_3_Template, 6, 9, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75)(5, "div", 73);
    \u0275\u0275template(6, RestaurantCalendar_div_68_div_6_Template, 2, 1, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RestaurantCalendar_div_68_div_7_Template, 2, 3, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getTimeSlotsForDay(ctx_r2.weekDays[0]));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
  }
}
function RestaurantCalendar_div_69_div_6_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RestaurantCalendar_div_69_div_6_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const evt_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, evt_r21.start, "HH:mm"));
  }
}
function RestaurantCalendar_div_69_div_6_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CC} ", evt_r21.title, "");
  }
}
function RestaurantCalendar_div_69_div_6_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(evt_r21.meta.customerName);
  }
}
function RestaurantCalendar_div_69_div_6_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", evt_r21.meta.partySize, " persone \u2022 ", evt_r21.meta.tableInfo, " ");
  }
}
function RestaurantCalendar_div_69_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275listener("click", function RestaurantCalendar_div_69_div_6_div_4_Template_div_click_0_listener($event) {
      const evt_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.onEventClick(evt_r21));
    });
    \u0275\u0275elementStart(1, "div", 103);
    \u0275\u0275template(2, RestaurantCalendar_div_69_div_6_div_4_ng_container_2_Template, 3, 0, "ng-container", 65)(3, RestaurantCalendar_div_69_div_6_div_4_ng_template_3_Template, 2, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(5, 66);
    \u0275\u0275template(6, RestaurantCalendar_div_69_div_6_div_4_div_6_Template, 2, 1, "div", 104)(7, RestaurantCalendar_div_69_div_6_div_4_div_7_Template, 2, 1, "div", 104);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(8, RestaurantCalendar_div_69_div_6_div_4_div_8_Template, 2, 2, "div", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r21 = ctx.$implicit;
    const normalTime_r22 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r2.getEventColor(evt_r21));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", evt_r21.meta.eventType === "personal" && evt_r21.meta.isAllDay)("ngIfElse", normalTime_r22);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", evt_r21.meta.eventType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "reservation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r21.meta.eventType === "reservation");
  }
}
function RestaurantCalendar_div_69_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 100);
    \u0275\u0275listener("click", function RestaurantCalendar_div_69_div_6_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDayDetails(ctx_r2.viewDate));
    });
    \u0275\u0275template(4, RestaurantCalendar_div_69_div_6_div_4_Template, 9, 8, "div", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r23);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForSlot(ctx_r2.viewDate, slot_r23));
  }
}
function RestaurantCalendar_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "h2", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 96);
    \u0275\u0275template(6, RestaurantCalendar_div_69_div_6_Template, 5, 2, "div", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("closed-day", ctx_r2.isDayClosed(ctx_r2.viewDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, ctx_r2.viewDate, "fullDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getTimeSlotsForDay(ctx_r2.viewDate));
  }
}
function RestaurantCalendar_div_70_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timeSlot_r25 = ctx.$implicit;
    \u0275\u0275property("value", timeSlot_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", timeSlot_r25, " ");
  }
}
function RestaurantCalendar_div_70_small_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Capienza massima: ", ctx_r2.maxCapacity, " persone ");
  }
}
function RestaurantCalendar_div_70_small_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 144);
    \u0275\u0275text(1, " Nessun tavolo configurato \u2013 impossibile prenotare ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantCalendar_div_70_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "label", 145);
    \u0275\u0275element(2, "lucide-angular", 146);
    \u0275\u0275text(3, " Stato ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 147);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_div_62_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.status, $event) || (ctx_r2.newReservation.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 142);
    \u0275\u0275text(6, "Confermata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 142);
    \u0275\u0275text(8, "In attesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 142);
    \u0275\u0275text(10, "Cancellata");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.status);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.ReservationStatus.Confirmed);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.ReservationStatus.Pending);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.ReservationStatus.Cancelled);
  }
}
function RestaurantCalendar_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "h3", 111)(4, "span", 11);
    \u0275\u0275text(5, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Nuova Prenotazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function RestaurantCalendar_div_70_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewReservationModal());
    });
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div")(11, "form", 112);
    \u0275\u0275listener("ngSubmit", function RestaurantCalendar_div_70_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createManualReservation());
    });
    \u0275\u0275elementStart(12, "div", 113)(13, "div", 114)(14, "div", 115)(15, "label", 116);
    \u0275\u0275element(16, "lucide-angular", 117);
    \u0275\u0275text(17, " Nome * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.customer_name, $event) || (ctx_r2.newReservation.customer_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 115)(20, "label", 119)(21, "span", 29);
    \u0275\u0275text(22, "person_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Cognome * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.customer_surname, $event) || (ctx_r2.newReservation.customer_surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 114)(26, "div", 115)(27, "label", 121);
    \u0275\u0275element(28, "lucide-angular", 122);
    \u0275\u0275text(29, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.customer_email, $event) || (ctx_r2.newReservation.customer_email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 115)(32, "label", 124)(33, "span", 29);
    \u0275\u0275text(34, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Telefono * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.customer_phone, $event) || (ctx_r2.newReservation.customer_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 114)(38, "div", 115)(39, "label", 126)(40, "span", 29);
    \u0275\u0275text(41, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Data * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.reservation_date, $event) || (ctx_r2.newReservation.reservation_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RestaurantCalendar_div_70_Template_input_change_43_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onReservationDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 115)(45, "label", 128)(46, "span", 29);
    \u0275\u0275text(47, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Ora * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 129);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.reservation_time, $event) || (ctx_r2.newReservation.reservation_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(50, "option", 130);
    \u0275\u0275text(51, "Scegli un orario");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, RestaurantCalendar_div_70_option_52_Template, 2, 2, "option", 131);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 114)(54, "div", 115)(55, "label", 132)(56, "span", 29);
    \u0275\u0275text(57, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Numero Persone * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 133);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.party_size, $event) || (ctx_r2.newReservation.party_size = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, RestaurantCalendar_div_70_small_60_Template, 2, 1, "small", 134)(61, RestaurantCalendar_div_70_small_61_Template, 2, 0, "small", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, RestaurantCalendar_div_70_div_62_Template, 11, 4, "div", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 115)(64, "label", 137)(65, "span", 29);
    \u0275\u0275text(66, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Richieste Speciali ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "textarea", 138);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_70_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newReservation.special_requests, $event) || (ctx_r2.newReservation.special_requests = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 139)(70, "button", 140);
    \u0275\u0275listener("click", function RestaurantCalendar_div_70_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewReservationModal());
    });
    \u0275\u0275elementStart(71, "span", 29);
    \u0275\u0275text(72, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 141);
    \u0275\u0275element(75, "lucide-angular", 33);
    \u0275\u0275text(76, " Crea Prenotazione ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.customer_name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.customer_surname);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.customer_email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.customer_phone);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.reservation_date);
    \u0275\u0275property("min", ctx_r2.minDate);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.reservation_time);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getAvailableTimeSlotsForDate(ctx_r2.selectedDate));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.party_size);
    \u0275\u0275property("max", ctx_r2.maxCapacity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.maxCapacity > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.maxCapacity === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingReservationId);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReservation.special_requests);
    \u0275\u0275advance(7);
    \u0275\u0275property("size", 20);
  }
}
function RestaurantCalendar_div_71_div_24_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 177);
    \u0275\u0275text(2, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", evt_r29.title, " ");
  }
}
function RestaurantCalendar_div_71_div_24_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 177);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", evt_r29.meta.customerName, " ");
  }
}
function RestaurantCalendar_div_71_div_24_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.getReservationStatusClass(evt_r29.meta.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", evt_r29.meta.status, " ");
  }
}
function RestaurantCalendar_div_71_div_24_div_1_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180)(1, "span", 68);
    \u0275\u0275text(2, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 181);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(evt_r29.meta.customerEmail);
  }
}
function RestaurantCalendar_div_71_div_24_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179)(1, "div", 180)(2, "span", 68);
    \u0275\u0275text(3, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 181);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, RestaurantCalendar_div_71_div_24_div_1_div_11_div_6_Template, 5, 1, "div", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(evt_r29.meta.customerPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r29.meta.customerEmail);
  }
}
function RestaurantCalendar_div_71_div_24_div_1_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 172)(2, "span", 173);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 174);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 175);
    \u0275\u0275text(7, "Persone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 172)(9, "span", 173);
    \u0275\u0275text(10, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 174);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 175);
    \u0275\u0275text(14, "Tavolo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(evt_r29.meta.partySize);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(evt_r29.meta.tableInfo || "\u2014");
  }
}
function RestaurantCalendar_div_71_div_24_div_1_ng_container_29_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, evt_r29.start, "HH:mm"), " - ", \u0275\u0275pipeBind2(3, 5, evt_r29.end, "HH:mm"), " ");
  }
}
function RestaurantCalendar_div_71_div_24_div_1_ng_container_29_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tutto il giorno ");
  }
}
function RestaurantCalendar_div_71_div_24_div_1_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 172)(2, "span", 173);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 174);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 175);
    \u0275\u0275text(7, "Descrizione");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 172)(9, "span", 173);
    \u0275\u0275text(10, "access_time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 174);
    \u0275\u0275template(12, RestaurantCalendar_div_71_div_24_div_1_ng_container_29_ng_container_12_Template, 4, 8, "ng-container", 65)(13, RestaurantCalendar_div_71_div_24_div_1_ng_container_29_ng_template_13_Template, 1, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 175);
    \u0275\u0275text(16, "Orario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const allDay_r30 = \u0275\u0275reference(14);
    const evt_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(evt_r29.meta.description || "Nessuna descrizione");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !evt_r29.meta.isAllDay)("ngIfElse", allDay_r30);
  }
}
function RestaurantCalendar_div_71_div_24_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 183)(1, "div", 184)(2, "span", 185);
    \u0275\u0275text(3, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 181);
    \u0275\u0275text(5, "Note");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 186);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evt_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(evt_r29.meta.reservation.special_requests);
  }
}
function RestaurantCalendar_div_71_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 159)(1, "div", 160)(2, "div", 161)(3, "div", 162)(4, "h4", 163);
    \u0275\u0275elementContainerStart(5, 66);
    \u0275\u0275template(6, RestaurantCalendar_div_71_div_24_div_1_span_6_Template, 4, 1, "span", 164)(7, RestaurantCalendar_div_71_div_24_div_1_span_7_Template, 4, 1, "span", 164);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(8, "span", 165);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, RestaurantCalendar_div_71_div_24_div_1_span_10_Template, 2, 3, "span", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, RestaurantCalendar_div_71_div_24_div_1_div_11_Template, 7, 2, "div", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 161)(13, "button", 168);
    \u0275\u0275listener("click", function RestaurantCalendar_div_71_div_24_div_1_Template_button_click_13_listener() {
      const evt_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editEvent(evt_r29));
    });
    \u0275\u0275elementStart(14, "span", 29);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 169);
    \u0275\u0275listener("click", function RestaurantCalendar_div_71_div_24_div_1_Template_button_click_16_listener() {
      const evt_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteEvent(evt_r29));
    });
    \u0275\u0275element(17, "lucide-angular", 170);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 171)(19, "div", 172)(20, "span", 173);
    \u0275\u0275text(21, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 174);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 175);
    \u0275\u0275text(26, "Orario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerStart(27, 66);
    \u0275\u0275template(28, RestaurantCalendar_div_71_div_24_div_1_ng_container_28_Template, 15, 2, "ng-container", 164)(29, RestaurantCalendar_div_71_div_24_div_1_ng_container_29_Template, 17, 3, "ng-container", 164);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, RestaurantCalendar_div_71_div_24_div_1_div_30_Template, 8, 1, "div", 176);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r29 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngSwitch", evt_r29.meta.eventType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "reservation");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-purple", evt_r29.meta.eventType === "personal")("bg-primary", evt_r29.meta.eventType === "reservation");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", evt_r29.meta.eventType === "personal" ? "Personale" : "Prenotazione", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r29.meta.eventType === "reservation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r29.meta.eventType === "reservation");
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 16, evt_r29.start, "HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngSwitch", evt_r29.meta.eventType);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "reservation");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "personal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r29.meta.eventType === "reservation" && (evt_r29.meta.reservation == null ? null : evt_r29.meta.reservation.special_requests));
  }
}
function RestaurantCalendar_div_71_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275template(1, RestaurantCalendar_div_71_div_24_div_1_Template, 31, 19, "div", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedDayEvents);
  }
}
function RestaurantCalendar_div_71_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187)(1, "span", 188);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 189);
    \u0275\u0275text(4, "Nessun evento per questa data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 190);
    \u0275\u0275text(6, 'Clicca su "Nuovo Appuntamento" o "Nuova Prenotazione" per aggiungerne uno');
    \u0275\u0275elementEnd()();
  }
}
function RestaurantCalendar_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "div", 148)(4, "div", 149)(5, "span", 150);
    \u0275\u0275text(6, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h3", 151);
    \u0275\u0275text(9, "Eventi del giorno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 152);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 28);
    \u0275\u0275listener("click", function RestaurantCalendar_div_71_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayDetailsModal());
    });
    \u0275\u0275elementStart(14, "span", 29);
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 153)(17, "div", 154)(18, "span", 29);
    \u0275\u0275text(19, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, RestaurantCalendar_div_71_div_24_Template, 2, 1, "div", 155)(25, RestaurantCalendar_div_71_ng_template_25_Template, 7, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(27, "div", 139)(28, "button", 140);
    \u0275\u0275listener("click", function RestaurantCalendar_div_71_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayDetailsModal());
    });
    \u0275\u0275elementStart(29, "span", 29);
    \u0275\u0275text(30, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Chiudi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 140);
    \u0275\u0275listener("click", function RestaurantCalendar_div_71_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewPersonalAppointmentModal(ctx_r2.selectedDate));
    });
    \u0275\u0275elementStart(33, "span", 29);
    \u0275\u0275text(34, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Nuovo Appuntamento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 156);
    \u0275\u0275listener("click", function RestaurantCalendar_div_71_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewReservationForSelectedDay());
    });
    \u0275\u0275element(37, "lucide-angular", 33);
    \u0275\u0275text(38, " Nuova Prenotazione ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const noEvents_r31 = \u0275\u0275reference(26);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 6, ctx_r2.selectedDate, "EEEE d MMMM yyyy"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedDayEvents.length, " eventi");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r2.calculateTotalGuests(), " persone totali ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedDayEvents.length > 0)("ngIfElse", noEvents_r31);
    \u0275\u0275advance(13);
    \u0275\u0275property("size", 20);
  }
}
function RestaurantCalendar_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 191)(2, "div", 110)(3, "h3", 111)(4, "span", 29);
    \u0275\u0275text(5, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function RestaurantCalendar_div_72_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePersonalAppointmentModal());
    });
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 153)(11, "form", 112, 6);
    \u0275\u0275listener("ngSubmit", function RestaurantCalendar_div_72_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePersonalAppointment());
    });
    \u0275\u0275elementStart(13, "div", 115)(14, "label", 192);
    \u0275\u0275text(15, "Titolo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 193);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_72_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalAppointmentData.title, $event) || (ctx_r2.personalAppointmentData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 114)(18, "div", 115)(19, "label", 192);
    \u0275\u0275text(20, "Inizio *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 194);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_72_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalAppointmentData.start_datetime, $event) || (ctx_r2.personalAppointmentData.start_datetime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 115)(23, "label", 192);
    \u0275\u0275text(24, "Fine *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 195);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_72_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalAppointmentData.end_datetime, $event) || (ctx_r2.personalAppointmentData.end_datetime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 115)(27, "label", 192);
    \u0275\u0275text(28, "Descrizione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 196);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_72_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalAppointmentData.description, $event) || (ctx_r2.personalAppointmentData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 115)(31, "label", 192);
    \u0275\u0275text(32, "Colore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 180)(34, "input", 197);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_72_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalAppointmentData.color, $event) || (ctx_r2.personalAppointmentData.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "div", 198);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 199)(37, "input", 200);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantCalendar_div_72_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalAppointmentData.is_all_day, $event) || (ctx_r2.personalAppointmentData.is_all_day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Giornata intera");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 139)(41, "button", 140);
    \u0275\u0275listener("click", function RestaurantCalendar_div_72_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePersonalAppointmentModal());
    });
    \u0275\u0275text(42, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 201);
    \u0275\u0275text(44, " Salva ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const personalForm_r33 = \u0275\u0275reference(12);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingPersonalAppointment ? "Modifica" : "Nuovo", " Appuntamento Personale ");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalAppointmentData.title);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalAppointmentData.start_datetime);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalAppointmentData.end_datetime);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalAppointmentData.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalAppointmentData.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.personalAppointmentData.color);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalAppointmentData.is_all_day);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", personalForm_r33.invalid);
  }
}
var CalendarView;
(function(CalendarView2) {
  CalendarView2["Month"] = "month";
  CalendarView2["Week"] = "week";
  CalendarView2["Day"] = "day";
})(CalendarView || (CalendarView = {}));
var ReservationStatus;
(function(ReservationStatus2) {
  ReservationStatus2["Pending"] = "pending";
  ReservationStatus2["Confirmed"] = "confirmed";
  ReservationStatus2["Cancelled"] = "cancelled";
})(ReservationStatus || (ReservationStatus = {}));
var RestaurantCalendar = class _RestaurantCalendar {
  // Services
  reservationService = inject(ReservationService);
  shiftService = inject(ShiftService);
  tableService = inject(TableService);
  authService = inject(AuthService);
  personalAppointmentService = inject(PersonalAppointmentService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  taskService = inject(TaskService);
  floorPlanService = inject(FloorPlanService);
  // MODIFICA PRENOTAZIONE
  editingReservationId = null;
  // Proprietà calcolate — aggiornate solo quando cambiano i dati
  monthDays = [];
  maxCapacityValue = 0;
  capacityDistribution = [];
  // TASK
  taskEvents = [];
  // Touch swipe
  touchStartX = 0;
  touchEndX = 0;
  SWIPE_THRESHOLD = 50;
  isSwiping = false;
  // indica se stiamo tracciando uno swipe
  touchStartY = 0;
  isHorizontalSwipe = null;
  // null = non ancora determinato
  calendarContainerRef;
  calendarHeaderRef;
  // Calendar configuration - SEMPLICE
  view = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate = /* @__PURE__ */ new Date();
  minDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  // SETTIMANA
  weekDays = [];
  weekViewHours = [];
  // Events data
  events = [];
  ReservationStatus = ReservationStatus;
  // Appuntamenti personali
  personalEvents = [];
  showPersonalAppointmentModal = false;
  editingPersonalAppointment = null;
  personalAppointmentData = {
    title: "",
    description: "",
    start_datetime: "",
    end_datetime: "",
    color: "#3788d8",
    is_all_day: false
  };
  // Modal state
  showNewReservationModal = false;
  showDayDetailsModal = false;
  showReservationModal = false;
  saving = false;
  // Tables data
  tables = [];
  maxCapacity = 0;
  // Ora sarà calcolato dinamicamente
  tableStats = null;
  publishedTables = [];
  // Selected day for details
  selectedDate = /* @__PURE__ */ new Date();
  selectedDayEvents = [];
  // New reservation data
  newReservation = {
    customer_name: "",
    customer_surname: "",
    customer_email: "",
    customer_phone: "",
    reservation_date: this.formatDateForInput(/* @__PURE__ */ new Date()),
    reservation_time: "20:00",
    party_size: 2,
    special_requests: "",
    status: ReservationStatus.Confirmed
  };
  // ORARI PER TURNI
  closures = [];
  // Mobile
  mobileTooltipDay = null;
  mobileTooltipTimeout = null;
  // Restaurant capacity info
  todayCapacity = 0;
  // Loading states
  loading = false;
  // Shift management
  shifts = [];
  calendarStartHour = 8;
  calendarEndHour = 23;
  availableTimeSlots = [];
  ngOnInit() {
    return __async(this, null, function* () {
      this.minDate = this.formatDateForInput(/* @__PURE__ */ new Date());
      console.log("\u{1F504} Calendar component initialized");
      this.setupSubscriptions();
      yield this.loadShifts();
      yield this.loadTables();
      yield this.loadFloorPlans();
      yield this.loadCalendarData();
      yield this.loadPersonalAppointments();
      yield this.loadTaskEvents();
      this.updateWeekView();
    });
  }
  setupSubscriptions() {
    this.reservationService.restaurantReservations$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((reservations) => {
      this.events = this.mapReservationsToEvents(reservations);
      this.calculateTodayCapacity();
      this.refreshCalendarData();
      this.cdr.markForCheck();
    });
    this.tableService.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((tables) => {
      this.tables = tables || [];
      this.updatePublishedTables();
      this.refreshCalendarData();
      this.cdr.markForCheck();
    });
    this.floorPlanService.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.updatePublishedTables();
      this.refreshCalendarData();
      this.cdr.markForCheck();
    });
    this.shiftService.closures$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((closures) => {
      this.closures = closures;
      this.cdr.markForCheck();
    });
    this.taskService.tasksView$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => __async(this, null, function* () {
      yield this.loadTaskEvents();
      this.cdr.markForCheck();
    }));
  }
  loadShifts() {
    return __async(this, null, function* () {
      try {
        this.shifts = this.shiftService.data;
        if (!this.shifts || this.shifts.length === 0) {
          yield this.shiftService.loadData();
          this.shifts = this.shiftService.data;
        }
        this.calculateCalendarHoursFromShifts();
        this.calculateAvailableTimeSlots();
        this.updateWeekView();
        this.refreshCalendarData();
        this.cdr.markForCheck();
      } catch (error) {
        console.error("Error loading shifts:", error);
        this.calendarStartHour = 8;
        this.calendarEndHour = 23;
      }
    });
  }
  loadCalendarData() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        console.log("\u{1F4C5} Loading calendar data...");
        yield this.reservationService.loadRestaurantReservations();
        console.log("\u2705 Calendar data loaded successfully");
        console.log("\u{1F4CA} Events after load:", this.events.length);
      } catch (error) {
        console.error("Error loading calendar data:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  loadReservations() {
    this.reservationService.loadRestaurantReservations();
  }
  loadFloorPlans() {
    return __async(this, null, function* () {
      yield this.floorPlanService.loadData();
    });
  }
  // Metodo SEMPLICE per il colore
  getEventColor(event) {
    if (event.meta.eventType === "reservation") {
      return this.getEventColorBySize(event.meta.partySize);
    } else if (event.meta.eventType === "task") {
      return event.color?.primary || "var(--primary)";
    } else {
      return "var(--purple, #2196F3)";
    }
  }
  getEventColorBySize(partySize) {
    if (!partySize)
      return "var(--tertiary,  #FF9800)";
    if (partySize <= 2)
      return "var(--primary, #4CAF50)";
    if (partySize <= 4)
      return "var(--secondary, #2196F3)";
    return "var(--tertiary, #2196F3)";
  }
  mapReservationsToEvents(reservations) {
    return reservations.map((reservation) => {
      try {
        const [year, month, day] = reservation.reservation_date.split("-").map(Number);
        const [hours, minutes, seconds = 0] = reservation.reservation_time.split(":").map(Number);
        const eventDate = new Date(year, month - 1, day, hours, minutes, seconds);
        let customerName = "Cliente";
        let customerSurname = "";
        if (reservation.users) {
          customerName = reservation.users.first_name || "";
          customerSurname = reservation.users.last_name || "";
        } else if (reservation.customer_name) {
          if (reservation.customer_name && reservation.customer_surname) {
            customerName = reservation.customer_name;
            customerSurname = reservation.customer_surname;
          } else {
            const nameParts = reservation.customer_name.trim().split(" ");
            customerName = nameParts[0] || "";
            customerSurname = nameParts.slice(1).join(" ") || "";
          }
        }
        const customerPhone = reservation.users?.phone || reservation.customer_phone || "";
        const customerEmail = reservation.users?.email || reservation.customer_email || "";
        const tableInfo = reservation.tables ? `Tavolo ${reservation.tables.table_number}` : "Da assegnare";
        return {
          id: reservation.id,
          start: eventDate,
          title: `${customerName} ${customerSurname} - ${reservation.party_size} persone`,
          color: {
            primary: this.getEventColorBySize(reservation.party_size),
            secondary: "var(--background)"
          },
          meta: {
            eventType: "reservation",
            reservation,
            customerName: `${customerName} ${customerSurname}`.trim(),
            customerSurname,
            customerEmail,
            customerPhone,
            partySize: reservation.party_size,
            tableInfo,
            status: reservation.status || "confirmed"
          }
        };
      } catch (error) {
        console.error("\u274C Error mapping reservation:", reservation.id, error);
        const fallbackDate = /* @__PURE__ */ new Date();
        return {
          id: reservation.id,
          start: fallbackDate,
          title: "Errore nella prenotazione",
          color: { primary: "var(--danger)", secondary: "var(--background)" },
          meta: {
            eventType: "reservation",
            // AGGIUNTO
            reservation,
            customerName: "Errore",
            customerSurname: "",
            customerEmail: "",
            customerPhone: "",
            partySize: reservation.party_size || 0,
            tableInfo: "Errore",
            status: "error"
          }
        };
      }
    });
  }
  // Gestione eventi SEMPLICE
  onDayClick(day) {
    this.openDayDetails(day);
  }
  // 7. METODO PER ELIMINARE UNA PRENOTAZIONE
  deleteReservation(eventId) {
    return __async(this, null, function* () {
      if (!eventId)
        return;
      if (confirm("Sei sicuro di voler eliminare questa prenotazione?")) {
        try {
          yield this.reservationService.deleteReservation(eventId.toString());
          this.events = this.events.filter((event) => event.id !== eventId);
          this.selectedDayEvents = this.selectedDayEvents.filter((event) => event.id !== eventId);
          this.calculateTodayCapacity();
          this.reservationService.loadRestaurantReservations();
          alert("Prenotazione eliminata con successo!");
          if (this.selectedDayEvents.length === 0) {
            setTimeout(() => {
              this.closeDayDetailsModal();
            }, 1e3);
          }
        } catch (error) {
          console.error("Error deleting reservation:", error);
          alert("Errore durante l'eliminazione della prenotazione");
        }
      }
    });
  }
  onEventClick(event) {
    if (event.meta.eventType === "reservation") {
      alert(`${event.meta.customerName}
${event.start.toLocaleTimeString()}
${event.meta.partySize} persone`);
    } else if (event.meta.eventType === "task") {
      this.router.navigate(["/restaurant/task-detail", event.meta.taskId]);
    } else {
      const app = event.meta.appointment;
      let orarioTesto;
      if (app.is_all_day) {
        orarioTesto = "\u{1F5D3}\uFE0F Tutto il giorno";
      } else {
        orarioTesto = `\u{1F552} ${this.formatTimeForDisplay(app.start_datetime)} - ${this.formatTimeForDisplay(app.end_datetime)}`;
      }
      alert(`\u{1F4C5} Appuntamento personale

Titolo: ${app.title}
Descrizione: ${app.description || "Nessuna"}
${orarioTesto}`);
    }
  }
  deletePersonalAppointment(id) {
    return __async(this, null, function* () {
      if (!confirm("Eliminare questo appuntamento?"))
        return;
      try {
        yield this.personalAppointmentService.delete(id);
        yield this.loadPersonalAppointments();
      } catch (error) {
        console.error("Errore eliminazione:", error);
      }
    });
  }
  // Creazione prenotazione SEMPLICE
  createManualReservation() {
    return __async(this, null, function* () {
      if (!this.validateReservation())
        return;
      this.saving = true;
      try {
        const customerFullName = `${this.newReservation.customer_name} ${this.newReservation.customer_surname}`.trim();
        const formattedTime = this.newReservation.reservation_time.length === 5 ? `${this.newReservation.reservation_time}:00` : this.newReservation.reservation_time;
        const reservationData = {
          // restaurant_id non serve, lo prende il servizio
          customer_name: this.newReservation.customer_name,
          customer_surname: this.newReservation.customer_surname,
          customer_email: this.newReservation.customer_email,
          customer_phone: this.newReservation.customer_phone,
          reservation_date: this.newReservation.reservation_date,
          reservation_time: this.newReservation.reservation_time.length === 5 ? `${this.newReservation.reservation_time}:00` : this.newReservation.reservation_time,
          party_size: this.newReservation.party_size,
          special_requests: this.newReservation.special_requests,
          status: this.newReservation.status
        };
        console.log("\u{1F4E4} Invio dati prenotazione:", reservationData);
        const result = yield this.reservationService.createRestaurantReservation(reservationData);
        if (result) {
          console.log("\u2705 Prenotazione creata con successo:", result);
          alert("Prenotazione creata con successo!");
          yield this.reservationService.loadRestaurantReservations();
          this.closeNewReservationModal();
        } else {
          alert("Errore durante la creazione della prenotazione");
        }
      } catch (error) {
        console.error("\u274C Errore creazione prenotazione:", error);
        alert(`Errore: ${error.message || "Impossibile creare la prenotazione"}`);
      } finally {
        this.saving = false;
      }
    });
  }
  // Aggiungi questo metodo per aggiornare la data quando cambia
  onReservationDateChange() {
    this.selectedDate = new Date(this.newReservation.reservation_date);
    const slots = this.getAvailableTimeSlotsForDate(this.selectedDate);
    if (slots.length > 0 && !slots.includes(this.newReservation.reservation_time)) {
      this.newReservation.reservation_time = slots[0];
    }
  }
  validateReservation() {
    if (!this.newReservation.customer_name.trim()) {
      alert("Inserisci il nome del cliente");
      return false;
    }
    if (!this.newReservation.customer_surname.trim()) {
      alert("Inserisci il cognome del cliente");
      return false;
    }
    if (!this.newReservation.customer_phone.trim()) {
      alert("Inserisci il telefono del cliente");
      return false;
    }
    if (this.newReservation.customer_email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.newReservation.customer_email)) {
        alert("Inserisci un'email valida (es: nome@dominio.com)");
        return false;
      }
    }
    const selectedDate = new Date(this.newReservation.reservation_date);
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      alert("Non puoi prenotare per una data passata");
      return false;
    }
    if (this.newReservation.party_size < 1 || this.newReservation.party_size > 50) {
      alert("Il numero di persone deve essere tra 1 e 50");
      return false;
    }
    return true;
  }
  // Aggiungi questo metodo per validare l'email
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  closeReservationModal() {
    this.showReservationModal = false;
    this.resetReservationForm();
  }
  resetReservationForm() {
    const today = /* @__PURE__ */ new Date();
    this.newReservation = {
      customer_name: "",
      customer_surname: "",
      customer_email: "",
      customer_phone: "",
      reservation_date: this.formatDateForInput(today),
      reservation_time: "20:00",
      party_size: 2,
      special_requests: "",
      status: ReservationStatus.Confirmed
      // Usa l'enum
    };
  }
  // View management
  setView(view) {
    this.view = view;
    this.updateWeekView();
  }
  previous() {
    this.animateSwipe("swipe-right");
    if (this.view === CalendarView.Month) {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, 1);
    } else if (this.view === CalendarView.Week) {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() - 7);
    } else {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() - 1);
    }
    this.updateWeekView();
    this.refreshCalendarData();
    this.cdr.detectChanges();
  }
  next() {
    this.animateSwipe("swipe-left");
    if (this.view === CalendarView.Month) {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1);
    } else if (this.view === CalendarView.Week) {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() + 7);
    } else {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate() + 1);
    }
    this.updateWeekView();
    this.refreshCalendarData();
    this.cdr.detectChanges();
  }
  today() {
    this.viewDate = /* @__PURE__ */ new Date();
    this.updateWeekView();
    this.refreshCalendarData();
    this.cdr.detectChanges();
  }
  // Metodi per la vista settimanale
  getWeekDays() {
    console.log("getWeekDays called with viewDate:", this.viewDate);
    const days = [];
    const start = new Date(this.viewDate);
    const dayOfWeek = start.getDay();
    const diff = start.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(start.setDate(diff));
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      days.push(day);
    }
    return days;
  }
  getEventsForDay(day) {
    const dayStr = day.toISOString().split("T")[0];
    return this.events.filter((event) => event.start.toISOString().split("T")[0] === dayStr);
  }
  getEventsForHour(day, hour) {
    const dayStart = new Date(day);
    dayStart.setHours(hour, 0, 0, 0);
    const dayEnd = new Date(day);
    dayEnd.setHours(hour + 1, 0, 0, 0);
    return this.events.filter((event) => event.start >= dayStart && event.start < dayEnd);
  }
  // Metodi per la vista mensile
  getMonthDays() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const adjustedFirstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    const days = [];
    const daysFromPrevMonth = adjustedFirstDayOfWeek;
    for (let i = daysFromPrevMonth; i > 0; i--) {
      const date = new Date(firstDay);
      date.setDate(date.getDate() - i);
      days.push({
        date,
        isCurrentMonth: false,
        events: this.getEventsForDate(date)
      });
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        isCurrentMonth: true,
        events: this.getEventsForDate(date)
      });
    }
    const totalCells = 42;
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(lastDay);
      date.setDate(date.getDate() + i);
      days.push({
        date,
        isCurrentMonth: false,
        events: this.getEventsForDate(date)
      });
    }
    return days;
  }
  // Conta eventi per una data
  getEventCountForDate(date) {
    return this.getEventsForDate(date).length;
  }
  // Ottiene una versione abbreviata degli eventi (per non sovraccaricare la vista)
  getLimitedEventsForDate(date, limit = 3) {
    return this.getEventsForDate(date).slice(0, limit);
  }
  // Controlla se ci sono più eventi di quelli visualizzati
  hasMoreEvents(date, limit = 3) {
    return this.getEventsForDate(date).length > limit;
  }
  isToday(date) {
    const today = /* @__PURE__ */ new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }
  isCurrentMonth(date) {
    return date.getMonth() === this.viewDate.getMonth();
  }
  // Calcola l'orario di inizio e fine del calendario in base ai turni
  calculateCalendarHoursFromShifts() {
    if (!this.shifts || this.shifts.length === 0) {
      this.calendarStartHour = 8;
      this.calendarEndHour = 23;
      return;
    }
    let minStartHour = 24;
    let maxEndHour = 0;
    this.shifts.forEach((shift) => {
      if (shift.is_active) {
        const startHour = this.extractHourFromTime(shift.start_time);
        const endHour = this.extractHourFromTime(shift.end_time);
        if (startHour < minStartHour) {
          minStartHour = startHour;
        }
        if (endHour > maxEndHour) {
          maxEndHour = endHour;
        }
      }
    });
    this.calendarStartHour = minStartHour === 24 ? 8 : minStartHour;
    this.calendarEndHour = maxEndHour === 0 ? 23 : maxEndHour;
  }
  // Estrae l'ora da una stringa tempo (es: "12:30:00" -> 12)
  extractHourFromTime(timeString) {
    if (!timeString)
      return 0;
    return parseInt(timeString.split(":")[0], 10);
  }
  // Estrae i minuti da una stringa tempo
  extractMinutesFromTime(timeString) {
    if (!timeString)
      return 0;
    return parseInt(timeString.split(":")[1], 10);
  }
  // Calcola gli orari disponibili per prenotazione in base ai turni
  calculateAvailableTimeSlots() {
    if (!this.shifts || this.shifts.length === 0) {
      this.availableTimeSlots = this.generateTimeSlots(12, 23, 30);
      return;
    }
    const slots = [];
    const slotInterval = 30;
    this.shifts.forEach((shift) => {
      if (shift.is_active) {
        const startHour = this.extractHourFromTime(shift.start_time);
        const startMinute = this.extractMinutesFromTime(shift.start_time);
        const endHour = this.extractHourFromTime(shift.end_time);
        const endMinute = this.extractMinutesFromTime(shift.end_time);
        const shiftSlots = this.generateTimeSlotsWithStartEnd(startHour, startMinute, endHour, endMinute, slotInterval);
        slots.push(...shiftSlots);
      }
    });
    this.availableTimeSlots = [...new Set(slots)].sort();
  }
  // Genera slot orari con inizio e fine precisi
  generateTimeSlotsWithStartEnd(startHour, startMinute, endHour, endMinute, interval) {
    const slots = [];
    let currentHour = startHour;
    let currentMinute = startMinute;
    const roundedMinute = Math.floor(currentMinute / interval) * interval;
    if (roundedMinute > currentMinute) {
      currentMinute = roundedMinute;
    } else {
      currentMinute = roundedMinute;
    }
    while (currentHour < endHour || currentHour === endHour && currentMinute < endMinute) {
      const formattedHour = currentHour.toString().padStart(2, "0");
      const formattedMinute = currentMinute.toString().padStart(2, "0");
      slots.push(`${formattedHour}:${formattedMinute}`);
      currentMinute += interval;
      if (currentMinute >= 60) {
        currentMinute = 0;
        currentHour++;
      }
    }
    return slots;
  }
  // Genera slot orari semplici (per fallback)
  generateTimeSlots(startHour, endHour, interval) {
    const slots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        slots.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return slots;
  }
  // Ottiene gli slot disponibili per un determinato giorno
  getAvailableTimeSlotsForDate(date) {
    return this.availableTimeSlots;
  }
  // Metodi per la vista settimanale e giornaliera con orari dinamici
  getWeekViewHours() {
    const hours = [];
    const start = Math.max(0, Math.min(this.calendarStartHour || 8, 23));
    const end = Math.max(start, Math.min(this.calendarEndHour || 23, 23));
    for (let i = start; i <= end; i++) {
      hours.push(i);
    }
    return hours;
  }
  // 1. METODO PER APRIRE NUOVA PRENOTAZIONE (dal bottone)
  openNewReservationModal() {
    this.editingReservationId = null;
    this.selectedDate = /* @__PURE__ */ new Date();
    this.newReservation.reservation_date = this.formatDateForInput(this.selectedDate);
    const slots = this.getAvailableTimeSlotsForDate(this.selectedDate);
    if (slots.length > 0) {
      this.newReservation.reservation_time = slots[0];
    }
    this.showNewReservationModal = true;
    this.resetReservationForm();
  }
  // 2. METODO PER APRIRE DETTAGLI GIORNO (cliccando sul calendario)
  openDayDetails(day) {
    console.log("\u{1F4C5} Opening day details for:", day);
    console.log("\u{1F4CA} Current events count:", this.events.length);
    this.selectedDate = day;
    this.selectedDayEvents = this.getEventsForDate(day);
    console.log("\u{1F4CB} Events for selected day:", this.selectedDayEvents.length);
    console.log("\u{1F4CB} All events:");
    this.events.forEach((event, i) => {
      console.log(`Event ${i}:`, {
        date: event.start,
        customer: event.meta.eventType === "reservation" ? event.meta.customerName : "Appuntamento",
        localDate: event.start.toLocaleDateString("it-IT")
      });
    });
    this.showDayDetailsModal = true;
    setTimeout(() => {
      console.log("\u{1F504} Modal state:", this.showDayDetailsModal);
    }, 100);
  }
  // 3. CHIUDI MODAL NUOVA PRENOTAZIONE
  closeNewReservationModal() {
    this.showNewReservationModal = false;
    this.editingReservationId = null;
    this.resetReservationForm();
  }
  // 4. CHIUDI MODAL DETTAGLI GIORNO
  closeDayDetailsModal() {
    this.showDayDetailsModal = false;
  }
  // 5. APRI NUOVA PRENOTAZIONE PER UN GIORNO SPECIFICO (dal modal dei dettagli)
  openNewReservationForSelectedDay() {
    this.showDayDetailsModal = false;
    this.newReservation.reservation_date = this.formatDateForInput(this.selectedDate);
    const slots = this.getAvailableTimeSlotsForDate(this.selectedDate);
    if (slots.length > 0) {
      this.newReservation.reservation_time = slots[0];
    }
    this.showNewReservationModal = true;
  }
  // 8. METODO PER MODIFICARE UNA PRENOTAZIONE
  editReservation(event) {
    if (event.meta.eventType !== "reservation")
      return;
    this.editingReservationId = event.meta.reservation.id;
    const fullName = event.meta.customerName.split(" ");
    let customerName = fullName[0] || "";
    let customerSurname = fullName.slice(1).join(" ") || "";
    if (event.meta.customerSurname) {
      customerSurname = event.meta.customerSurname;
    }
    let status;
    const statusString = event.meta.status?.toLowerCase();
    if (statusString === "pending") {
      status = ReservationStatus.Pending;
    } else if (statusString === "cancelled" || statusString === "cancellata") {
      status = ReservationStatus.Cancelled;
    } else {
      status = ReservationStatus.Confirmed;
    }
    this.newReservation = {
      customer_name: customerName,
      customer_surname: customerSurname,
      customer_email: event.meta.customerEmail || "",
      customer_phone: event.meta.customerPhone || "",
      reservation_date: this.formatDateForInput(event.start),
      reservation_time: this.formatTime(event.start),
      party_size: event.meta.partySize,
      special_requests: event.meta.reservation.special_requests || "",
      status
      // Usa la variabile convertita
    };
    this.showDayDetailsModal = false;
    this.showNewReservationModal = true;
  }
  // 9. FORMATTA L'ORARIO DA DATE
  formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  // 10. AGGIUNGI UN METODO PER CALCOLARE LO STATO DELLA PRENOTAZIONE
  getReservationStatusClass(status) {
    switch (status?.toLowerCase()) {
      case "confirmed":
      case "confermata":
        return "status-confirmed";
      case "pending":
      case "in attesa":
        return "status-pending";
      case "cancelled":
      case "cancellata":
        return "status-cancelled";
      default:
        return "status-unknown";
    }
  }
  // 11. AGGIUNGI METODO PER FORMATTARE L'ORA
  formatTimeForDisplay(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  // Aggiungi questo metodo per formattare la data per l'input
  formatDateForInput(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatDateForDB(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // Carica i tavoli del ristorante
  loadTables() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F504} Loading restaurant tables...");
        yield this.tableService.loadData();
        const loadedTables = this.tableService.getTables();
        console.log("\u2705 Tables loaded from service:", loadedTables?.length);
        this.tables = loadedTables || [];
        this.calculateMaxCapacity();
      } catch (error) {
        console.error("Error loading tables:", error);
      }
    });
  }
  // Calcola la capienza massima dai tavoli
  calculateMaxCapacity() {
    if (this.tables.length === 0) {
      console.log("\u26A0\uFE0F No tables found, using default capacity");
      this.maxCapacity = 50;
      this.tableStats = null;
      return;
    }
    this.maxCapacity = this.tableService.calculateMaxCapacity(this.tables);
    this.tableStats = this.tableService.getTableStats(this.tables);
    console.log("\u{1F4CA} Capacity calculated:", {
      maxCapacity: this.maxCapacity,
      tableCount: this.tables.length,
      stats: this.tableStats
    });
  }
  // Metodo per ottenere la distribuzione delle capacità
  getCapacityDistribution() {
    if (!this.tables.length)
      return [];
    const capacityMap = this.tableService.getCapacityByTableType(this.tables);
    return Object.entries(capacityMap).map(([capacity, count]) => ({
      capacity: parseInt(capacity),
      count
    })).sort((a, b) => a.capacity - b.capacity);
  }
  // Metodo per ottenere tavoli disponibili per una data
  getAvailableTablesForDate(date) {
    const dateStr = this.formatDateForInput(date);
    const dateReservations = this.events.filter((event) => {
      const eventDateStr = this.formatDateForInput(event.start);
      return eventDateStr === dateStr && event.meta.eventType === "reservation";
    }).map((event) => event.meta.reservation);
    const reservedTableIds = dateReservations.filter((res) => res.table_id).map((res) => res.table_id);
    return this.tables.filter((table) => !reservedTableIds.includes(table.id));
  }
  // Metodo per ottenere statistiche dettagliate per una data
  getDateCapacityStats(date) {
    const dateStr = this.formatDateForInput(date);
    const dateEvents = this.events.filter((event) => {
      const eventDateStr = this.formatDateForInput(event.start);
      return eventDateStr === dateStr && event.meta.eventType === "reservation";
    });
    const usedCapacity = dateEvents.reduce((total, event) => total + (event.meta.partySize || 0), 0);
    const availableTables = this.getAvailableTablesForDate(date);
    const availableTablesCount = availableTables.length;
    const availableCapacity = availableTables.reduce((total, table) => total + (table.capacity || 0), 0);
    const percentage = this.maxCapacity > 0 ? usedCapacity / this.maxCapacity * 100 : 0;
    return {
      totalCapacity: this.maxCapacity,
      usedCapacity,
      availableCapacity,
      availableTables: availableTablesCount,
      percentage: Math.round(percentage)
    };
  }
  // Calcola la capienza massima - versione semplice
  calculateMaxCapacitySimple() {
    return this.publishedTables.reduce((total, table) => total + (table.capacity || 0), 0);
  }
  getAvailableTablesToday() {
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const reservedTableIds = this.events.filter((event) => event.meta.eventType === "reservation" && this.formatDateForInput(event.start) === todayStr && event.meta.reservation.table_id).map((event) => event.meta.reservation.table_id);
    return this.publishedTables.filter((table) => !reservedTableIds.includes(table.id)).length;
  }
  getAvailableTablesForSelectedDate() {
    if (!this.selectedDate)
      return 0;
    const selectedDateStr = this.formatDateForInput(this.selectedDate);
    const reservedTableIds = this.events.filter((event) => event.meta.eventType === "reservation" && this.formatDateForInput(event.start) === selectedDateStr && event.meta.reservation.table_id).map((event) => event.meta.reservation.table_id);
    return this.publishedTables.filter((table) => !reservedTableIds.includes(table.id)).length;
  }
  // Calcola la distribuzione delle capacità - versione semplice
  getSimpleCapacityDistribution() {
    const counts = {};
    this.publishedTables.forEach((table) => {
      const cap = table.capacity || 0;
      counts[cap] = (counts[cap] || 0) + 1;
    });
    return Object.entries(counts).map(([size, count]) => ({ size: parseInt(size), count })).sort((a, b) => a.size - b.size);
  }
  isSameDate(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  // Usalo nei tuoi metodi:
  getEventsForDate(date) {
    const dateStr = this.formatDateForInput(date);
    return this.allEvents.filter((event) => {
      const eventDateStr = this.formatDateForInput(event.start);
      return eventDateStr === dateStr;
    });
  }
  get allEvents() {
    return [...this.events, ...this.personalEvents, ...this.taskEvents];
  }
  getTodaysReservationCount() {
    const today = /* @__PURE__ */ new Date();
    return this.events.filter((event) => this.isSameDate(event.start, today)).length;
  }
  calculateTodayCapacity() {
    const today = /* @__PURE__ */ new Date();
    const todayEvents = this.events.filter((event) => this.isSameDate(event.start, today) && event.meta.eventType === "reservation");
    this.todayCapacity = todayEvents.reduce((total, event) => total + (event.meta.partySize || 0), 0);
    console.log("\u{1F4C5} Today capacity (local):", {
      today: today.toLocaleDateString("it-IT"),
      events: todayEvents.length,
      capacity: this.todayCapacity
    });
  }
  calculateTotalGuests() {
    return this.selectedDayEvents.reduce((total, event) => {
      if (event.meta.eventType === "reservation") {
        return total + event.meta.partySize;
      }
      return total;
    }, 0);
  }
  loadPersonalAppointments() {
    return __async(this, null, function* () {
      try {
        yield this.personalAppointmentService.loadData();
        this.personalEvents = this.mapPersonalToEvents(this.personalAppointmentService.data);
      } catch (error) {
        console.error("Errore caricamento appuntamenti personali:", error);
      }
    });
  }
  mapPersonalToEvents(appointments) {
    return appointments.filter((app) => !app.task_id).map((app) => ({
      id: app.id,
      start: new Date(app.start_datetime),
      end: new Date(app.end_datetime),
      title: app.title,
      color: {
        primary: app.color || "#3788d8",
        secondary: "var(--background)"
      },
      meta: {
        eventType: "personal",
        description: app.description,
        isAllDay: app.is_all_day,
        appointment: app
      }
    }));
  }
  openNewPersonalAppointmentModal(day) {
    const date = day || this.viewDate;
    const start = new Date(date);
    start.setHours(9, 0, 0, 0);
    const end = new Date(date);
    end.setHours(10, 0, 0, 0);
    this.personalAppointmentData = {
      title: "",
      description: "",
      start_datetime: this.formatDateTimeForInput(start),
      end_datetime: this.formatDateTimeForInput(end),
      color: "#3788d8",
      is_all_day: false
    };
    this.editingPersonalAppointment = null;
    this.showPersonalAppointmentModal = true;
  }
  editPersonalAppointment(event) {
    if (event.meta.eventType !== "personal")
      return;
    const app = event.meta.appointment;
    this.personalAppointmentData = {
      title: app.title,
      description: app.description || "",
      start_datetime: this.formatDateTimeForInput(new Date(app.start_datetime)),
      end_datetime: this.formatDateTimeForInput(new Date(app.end_datetime)),
      color: app.color || "#3788d8",
      is_all_day: app.is_all_day || false
    };
    this.editingPersonalAppointment = app;
    this.showPersonalAppointmentModal = true;
  }
  savePersonalAppointment() {
    return __async(this, null, function* () {
      if (!this.personalAppointmentData.title)
        return;
      const restaurantId = yield this.authService.getCurrentStaffRestaurantId();
      if (!restaurantId)
        return;
      const data = {
        restaurant_id: restaurantId,
        title: this.personalAppointmentData.title,
        description: this.personalAppointmentData.description || null,
        start_datetime: new Date(this.personalAppointmentData.start_datetime).toISOString(),
        end_datetime: new Date(this.personalAppointmentData.end_datetime).toISOString(),
        color: this.personalAppointmentData.color,
        is_all_day: this.personalAppointmentData.is_all_day
        // user_id: this.authService.currentUserValue?.id (opzionale)
      };
      try {
        if (this.editingPersonalAppointment) {
          yield this.personalAppointmentService.update(this.editingPersonalAppointment.id, data);
        } else {
          yield this.personalAppointmentService.create(data);
        }
        yield this.loadPersonalAppointments();
        this.closePersonalAppointmentModal();
      } catch (error) {
        console.error("Errore salvataggio appuntamento:", error);
        alert("Errore durante il salvataggio");
      }
    });
  }
  closePersonalAppointmentModal() {
    this.showPersonalAppointmentModal = false;
    this.editingPersonalAppointment = null;
  }
  formatDateTimeForInput(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  editEvent(event) {
    if (event.meta.eventType === "personal") {
      this.editPersonalAppointment(event);
    } else {
      this.editReservation(event);
    }
  }
  deleteEvent(event) {
    if (event.meta.eventType === "personal") {
      if (event.id) {
        this.deletePersonalAppointment(event.id);
      }
    } else {
      this.deleteReservation(event.id);
    }
  }
  // TOUCH SUL CALENDARIO
  onTouchStart(event) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
    this.isHorizontalSwipe = null;
  }
  onTouchMove(event) {
    if (this.isHorizontalSwipe === null) {
      const deltaX = Math.abs(event.changedTouches[0].screenX - this.touchStartX);
      const deltaY = Math.abs(event.changedTouches[0].screenY - this.touchStartY);
      if (deltaX < 5 && deltaY < 5)
        return;
      this.isHorizontalSwipe = deltaX > deltaY;
    }
    if (this.isHorizontalSwipe) {
      event.preventDefault();
    }
  }
  onTouchEnd(event) {
    this.touchEndX = event.changedTouches[0].screenX;
    if (this.isHorizontalSwipe) {
      this.handleSwipe();
    }
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.isHorizontalSwipe = null;
  }
  handleSwipe() {
    const diffX = this.touchStartX - this.touchEndX;
    console.log("Swipe diff:", diffX, "threshold:", this.SWIPE_THRESHOLD);
    if (Math.abs(diffX) > this.SWIPE_THRESHOLD) {
      if (diffX > 0) {
        console.log("\u{1F449} Swipe sinistra -> next()");
        this.next();
      } else {
        console.log("\u{1F448} Swipe destra -> previous()");
        this.previous();
      }
    } else {
      console.log("\u23F8\uFE0F Swipe troppo corto, ignorato");
    }
    this.touchStartX = 0;
    this.touchEndX = 0;
  }
  animateSwipe(directionClass) {
    const container = document.querySelector(".calendar-container");
    if (!container)
      return;
    container.classList.add(directionClass);
    setTimeout(() => {
      container.classList.remove(directionClass);
    }, 200);
  }
  computeWeekDays() {
    const days = [];
    const start = new Date(this.viewDate);
    const dayOfWeek = start.getDay();
    const diff = start.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(start.setDate(diff));
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      days.push(day);
    }
    return days;
  }
  updateWeekView() {
    this.weekDays = this.computeWeekDays();
    this.weekViewHours = this.getWeekViewHours();
  }
  getTimeSlotsForDay(day) {
    const dayOfWeek = day.getDay();
    const adjustedDay = dayOfWeek === 0 ? 7 : dayOfWeek;
    const activeShifts = this.shifts.filter((shift) => shift.is_active && shift.days_of_week.includes(adjustedDay));
    if (activeShifts.length === 0)
      return [];
    const slots = [];
    const interval = 30;
    activeShifts.forEach((shift) => {
      const startHour = this.extractHourFromTime(shift.start_time);
      const startMinute = this.extractMinutesFromTime(shift.start_time);
      const endHour = this.extractHourFromTime(shift.end_time);
      const endMinute = this.extractMinutesFromTime(shift.end_time);
      const shiftSlots = this.generateTimeSlotsWithStartEnd(startHour, startMinute, endHour, endMinute, interval);
      slots.push(...shiftSlots);
    });
    return [...new Set(slots)].sort();
  }
  getEventsForSlot(day, slot) {
    const [hour, minute] = slot.split(":").map(Number);
    const slotStart = new Date(day);
    slotStart.setHours(hour, minute, 0, 0);
    const slotEnd = new Date(slotStart);
    slotEnd.setMinutes(slotEnd.getMinutes() + 30);
    return this.events.filter((event) => event.start >= slotStart && event.start < slotEnd);
  }
  getAllWeekSlots() {
    const allSlots = /* @__PURE__ */ new Set();
    this.weekDays.forEach((day) => {
      this.getTimeSlotsForDay(day).forEach((slot) => allSlots.add(slot));
    });
    return Array.from(allSlots).sort();
  }
  isDayClosed(date) {
    const dayOfWeek = date.getDay();
    const adjustedDay = dayOfWeek === 0 ? 7 : dayOfWeek;
    const hasActiveShift = this.shifts.some((shift) => shift.is_active && shift.days_of_week.includes(adjustedDay));
    return !hasActiveShift;
  }
  refreshCalendarData() {
    this.monthDays = this.computeMonthDays();
    this.maxCapacityValue = this.calculateMaxCapacitySimple();
    this.capacityDistribution = this.getSimpleCapacityDistribution();
  }
  computeMonthDays() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const adjustedFirstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    const days = [];
    for (let i = adjustedFirstDayOfWeek; i > 0; i--) {
      const date = new Date(firstDay);
      date.setDate(date.getDate() - i);
      days.push({ date, isCurrentMonth: false, events: this.getEventsForDate(date), isClosed: this.isDayClosed(date) });
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      days.push({ date, isCurrentMonth: true, events: this.getEventsForDate(date), isClosed: this.isDayClosed(date) });
    }
    const remainingCells = 42 - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(lastDay);
      date.setDate(date.getDate() + i);
      days.push({ date, isCurrentMonth: false, events: this.getEventsForDate(date), isClosed: this.isDayClosed(date) });
    }
    return days;
  }
  // Carica le task con calendar_event_id
  loadTaskEvents() {
    return __async(this, null, function* () {
      const tasks = yield firstValueFrom(this.taskService.tasksView$);
      this.taskEvents = tasks.filter((task) => task.calendar_event_id && task.due_date).map((task) => this.mapTaskToEvent(task));
      this.cdr.markForCheck();
    });
  }
  mapTaskToEvent(task) {
    const dueDate = new Date(task.due_date);
    dueDate.setHours(0, 0, 0, 0);
    const endDate = new Date(dueDate);
    endDate.setHours(23, 59, 59, 999);
    return {
      id: task.calendar_event_id,
      // sarà sempre presente perché filtrato
      start: dueDate,
      end: endDate,
      title: `\u{1F4CB} ${task.title}`,
      color: {
        primary: this.getTaskColor(task.priority),
        secondary: "var(--background)"
      },
      meta: {
        eventType: "task",
        taskId: task.id,
        task
      }
    };
  }
  onHeaderTouchStart(event) {
    const target = event.target;
    if (!this.calendarHeaderRef?.nativeElement.contains(target)) {
      return;
    }
    this.isSwiping = true;
    this.touchStartX = event.changedTouches[0].screenX;
  }
  onHeaderTouchMove(event) {
    if (!this.isSwiping)
      return;
    if (this.isHorizontalSwipe === null) {
      const deltaX = Math.abs(event.changedTouches[0].screenX - this.touchStartX);
      const deltaY = Math.abs(event.changedTouches[0].screenY - this.touchStartY);
      if (deltaX < 5 && deltaY < 5)
        return;
      this.isHorizontalSwipe = deltaX > deltaY;
    }
    if (this.isHorizontalSwipe) {
      event.preventDefault();
    }
  }
  onHeaderTouchEnd(event) {
    if (!this.isSwiping)
      return;
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
    this.isSwiping = false;
  }
  getTaskColor(priority) {
    switch (priority) {
      case 5:
        return "#d32f2f";
      // urgente - rosso
      case 4:
        return "#f57c00";
      // alta - arancione
      case 3:
        return "#1976d2";
      // media - blu
      case 2:
        return "#7b1fa2";
      // bassa - viola
      case 1:
        return "#388e3c";
      // minima - verde
      default:
        return "var(--primary)";
    }
  }
  ngAfterViewInit() {
    this.calendarContainerRef.nativeElement.addEventListener("touchmove", (e) => this.onTouchMove(e), { passive: false });
    this.calendarHeaderRef.nativeElement.addEventListener("touchmove", (e) => this.onHeaderTouchMove(e), { passive: false });
  }
  updatePublishedTables() {
    if (!this.tables.length || !this.floorPlanService.data.length) {
      this.publishedTables = [];
      return;
    }
    const versionMap = /* @__PURE__ */ new Map();
    this.floorPlanService.data.filter((fp) => fp.is_active).forEach((fp) => versionMap.set(fp.id, fp.current_version));
    this.publishedTables = this.tables.filter((table) => {
      const requiredVersion = versionMap.get(table.floor_plan_id);
      return requiredVersion !== void 0 && table.version === requiredVersion;
    });
    console.log("\u{1F4CA} Tavoli pubblicati:", this.publishedTables.length);
  }
  static \u0275fac = function RestaurantCalendar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantCalendar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantCalendar, selectors: [["app-calendar-view"]], viewQuery: function RestaurantCalendar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.calendarContainerRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.calendarHeaderRef = _t.first);
    }
  }, decls: 73, vars: 41, consts: [["calendarHeader", ""], ["calendarContainer", ""], ["normalTimeSmall", ""], ["normalTime", ""], ["noEvents", ""], ["allDay", ""], ["personalForm", "ngForm"], [1, "page-container"], ["data-tutorial", "calendar-cards", 1, "grid-cards", "p-sm", "mb-lg"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "text-md", "font-semibold", "m-0"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "text-muted", "card-footer"], [1, "text-muted", "card-footer", "flex-col"], [1, "flex"], ["class", "mt-sm text-mini flex flex-col", 4, "ngIf"], [1, "material-icons", "text-md"], [1, "text-md", "font-bold", "justify-center", "flex"], ["class", "ml-sm text-mini", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "flex", "justify-center", "w-100", "p-sm"], [1, "text-md"], [1, "flex", "justify-between", "items-center", "gap-md", "p-sm", "calendar-controls", 3, "touchstart", "touchend"], ["data-tutorial", "calendar-mode", 1, "flex", "gap-sm"], [1, "promethea-button", "outline", 3, "click"], ["data-tutorial", "calendar-view", 1, "flex", "items-center", "gap-md", "justify-center"], [1, "icon-button", 3, "click"], [1, "material-icons"], [1, "promethea-button", "ghost", 3, "click"], ["data-tutorial", "calendar-add", 1, "flex", "gap-sm"], [1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], [1, "p-sm", "calendar-container", 3, "touchstart", "touchend"], ["data-tutorial", "calendar-day", "class", "calendar-month-view", 4, "ngIf"], ["class", "calendar-week-view", 4, "ngIf"], ["class", "calendar-day-view border rounded overflow-hidden", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "mt-sm", "text-mini", "flex", "flex-col"], ["class", "flex justify-between", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between"], [1, "font-semibold"], [1, "ml-sm", "text-mini"], [1, "material-icons", "text-md", "text-primary"], [1, "text-md", "font-bold", "text-info", "justify-center", "text-primary", "flex"], ["data-tutorial", "calendar-day", 1, "calendar-month-view"], [1, "month-weekdays"], ["class", "month-weekday p-sm text-center font-bold text-mini uppercase", 4, "ngFor", "ngForOf"], [1, "month-grid"], ["class", "month-day flex flex-col border bg-body p-0", 3, "today", "current-month", "other-month", "closed-day", "click", 4, "ngFor", "ngForOf"], [1, "month-weekday", "p-sm", "text-center", "font-bold", "text-mini", "uppercase"], [1, "month-day", "flex", "flex-col", "border", "bg-body", "p-0", 3, "click"], [1, "day-number-wrapper", "flex", "justify-between", "items-center", "p-sm"], [1, "day-number", "font-bold", "text-md"], ["name", "lock", "class", "text-mini", "title", "Chiuso", 4, "ngIf"], ["class", "day-events-indicator", 3, "background", 4, "ngIf"], ["class", "month-events-compact", 4, "ngIf"], ["name", "lock", "title", "Chiuso", 1, "text-mini"], [1, "day-events-indicator"], [1, "month-events-compact"], ["class", "month-event-compact p-mini flex", 3, "border-color", "click", 4, "ngFor", "ngForOf"], ["class", "more-events-compact text-mini text-primary text-center p-mini", 3, "click", 4, "ngIf"], [1, "month-event-compact", "p-mini", "flex", 3, "click"], [1, "event-time-small", "font-bold", "text-mini", "rounded"], [4, "ngIf", "ngIfElse"], [3, "ngSwitch"], ["class", "event-customer-small text-mini flex items-center gap-sm", 4, "ngSwitchCase"], [1, "material-icons", "text-mini"], [1, "event-customer-small", "text-mini", "flex", "items-center", "gap-sm"], [1, "more-events-compact", "text-mini", "text-primary", "text-center", "p-mini", 3, "click"], [1, "calendar-week-view"], [1, "week-header", "flex"], [1, "week-time-column"], ["class", "week-day-header", 3, "today", "closed-day", 4, "ngFor", "ngForOf"], [1, "week-body"], ["class", "week-hour", 4, "ngFor", "ngForOf"], ["class", "week-day-column", 3, "closed-day", 4, "ngFor", "ngForOf"], [1, "week-day-header"], [1, "week-day-name"], [1, "week-day-number"], [1, "week-hour"], [1, "week-day-column"], ["class", "week-hour-slot", 3, "click", 4, "ngFor", "ngForOf"], [1, "week-hour-slot", 3, "click"], ["class", "week-event", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "week-event", 3, "click"], [1, "event-time"], ["class", "event-customer", 4, "ngSwitchCase"], ["class", "event-details", 4, "ngIf"], [1, "event-customer"], [1, "material-icons", 2, "margin-right", "var(--gap-sm)"], [1, "event-details"], [1, "calendar-day-view", "border", "rounded", "overflow-hidden"], [1, "day-header", "p-md", "text-center", "bg-smoke"], [1, "text-md", "font-bold"], [1, "day-body", "overflow-auto"], ["class", "day-hour flex", 4, "ngFor", "ngForOf"], [1, "day-hour", "flex"], [1, "hour-label", "w-20", "bg-smoke", "flex", "items-center", "justify-center", "font-semibold", "text-mini"], [1, "hour-slot", "flex-1", "p-xs", 3, "click"], ["class", "day-event rounded shadow-card", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "day-event", "rounded", "shadow-card", 3, "click"], [1, "event-time", "font-bold", "text-mini"], ["class", "event-customer font-bold text-mini flex items-center gap-sm", 4, "ngSwitchCase"], ["class", "event-details text-mini", 4, "ngIf"], [1, "event-customer", "font-bold", "text-mini", "flex", "items-center", "gap-sm"], [1, "event-details", "text-mini"], [1, "modal-overlay"], [1, "modal-container", "modal-lg"], [1, "modal-header"], [1, "section-title"], [3, "ngSubmit"], [1, "form-card"], [1, "form-row"], [1, "form-group"], ["for", "customerName", 1, "standard-label"], ["name", "user", 1, "nav-icon", 3, "size"], ["type", "text", "id", "customerName", "name", "customerName", "required", "", "placeholder", "Inserisci nome", 3, "ngModelChange", "ngModel"], ["for", "customerSurname", 1, "standard-label"], ["type", "text", "id", "customerSurname", "name", "customerSurname", "required", "", "placeholder", "Inserisci cognome", 3, "ngModelChange", "ngModel"], ["for", "customerEmail", 1, "standard-label"], ["name", "mail", 1, "nav-icon", 3, "size"], ["type", "email", "id", "customerEmail", "name", "customerEmail", "placeholder", "Inserisci email (facoltativo)", 3, "ngModelChange", "ngModel"], ["for", "customerPhone", 1, "standard-label"], ["type", "tel", "id", "customerPhone", "name", "customerPhone", "required", "", "placeholder", "Inserisci telefono", 3, "ngModelChange", "ngModel"], ["for", "reservationDate", 1, "standard-label"], ["type", "date", "id", "reservationDate", "name", "reservationDate", "required", "", 3, "ngModelChange", "change", "ngModel", "min"], ["for", "reservationTime", 1, "standard-label"], ["id", "reservationTime", "name", "reservationTime", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "partySize", 1, "standard-label"], ["type", "number", "id", "partySize", "name", "partySize", "min", "1", "required", "", 3, "ngModelChange", "ngModel", "max"], ["class", "text-muted", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["for", "specialRequests", 1, "standard-label"], ["id", "specialRequests", "name", "specialRequests", "rows", "3", "placeholder", "Note o richieste particolari...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["type", "submit", 1, "promethea-button"], [3, "value"], [1, "text-muted"], [1, "text-danger"], ["for", "reservationStatus", 1, "standard-label"], ["name", "info"], ["id", "reservationStatus", "name", "reservationStatus", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-md"], [1, "header-icon"], [1, "material-icons", "text-primary", "text-lg"], [1, "section-title", "m-0"], [1, "text-muted", "m-0"], [1, "modal-content", "p-md"], [1, "info-message", "mb-lg"], ["class", "flex flex-col gap-md mb-sm", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "promethea-button", 3, "click"], [1, "flex", "flex-col", "gap-md", "mb-sm"], ["class", "card hover-lift", 4, "ngFor", "ngForOf"], [1, "card", "hover-lift"], [1, "flex", "justify-between", "items-start", "flex-wrap"], [1, "flex", "gap-sm"], [1, "flex", "items-center", "gap-sm", "mb-sm", "flex-wrap"], [1, "font-bold", "text-md", "m-0"], [4, "ngSwitchCase"], [1, "chip", "ml-sm"], ["class", "chip", 3, "class", 4, "ngIf"], ["class", "flex items-center gap-md flex-wrap", 4, "ngIf"], ["title", "Modifica", 1, "icon-button", "x-small", 3, "click"], ["title", "Elimina", 1, "icon-button", "x-small", 3, "click"], ["name", "trash-2", 3, "size"], [1, "card-body"], [1, "flex", "flex-col", "items-center", "text-center", "p-sm", "rounded", "bg-smoke"], [1, "material-icons", "text-primary", "mb-xs"], [1, "font-bold", "text-md"], [1, "text-mini", "font-semibold"], ["class", "mt-md p-sm rounded bg-smoke", 4, "ngIf"], [1, "material-icons", 2, "vertical-align", "middle"], [1, "chip"], [1, "flex", "items-center", "gap-md", "flex-wrap"], [1, "flex", "items-center", "gap-sm"], [1, "text-mini"], ["class", "flex items-center gap-sm", 4, "ngIf"], [1, "mt-md", "p-sm", "rounded", "bg-smoke"], [1, "flex", "items-center", "gap-sm", "mb-xs"], [1, "material-icons", "text-primary"], [1, "text-sm", "m-0"], [1, "empty-state", "text-center", "py-xl"], [1, "material-icons", "text-lg", "text-muted", "mb-md"], [1, "text-md", "font-bold", "mb-sm"], [1, "text-muted", "mb-lg"], [1, "modal-container", "modal-md"], [1, "standard-label"], ["type", "text", "name", "title", "required", "", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", "name", "start", "required", "", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", "name", "end", "required", "", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "3", 3, "ngModelChange", "ngModel"], ["type", "color", "name", "color", 3, "ngModelChange", "ngModel"], [1, "color-preview"], [1, "checkbox-label"], ["type", "checkbox", "name", "isAllDay", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "promethea-button", 3, "disabled"]], template: function RestaurantCalendar_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "span", 11);
      \u0275\u0275text(5, "event_available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 12);
      \u0275\u0275text(7, "Prenotazioni Oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 13);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 14);
      \u0275\u0275text(11, "Per oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "span", 11);
      \u0275\u0275text(15, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h3", 12);
      \u0275\u0275text(17, "Capienza Massima");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, RestaurantCalendar_div_23_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9)(25, "div", 10)(26, "span", 18);
      \u0275\u0275text(27, " table_restaurant ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3", 12);
      \u0275\u0275text(29, "Occupazione Oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 19);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 14);
      \u0275\u0275text(33);
      \u0275\u0275template(34, RestaurantCalendar_span_34_Template, 2, 1, "span", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, RestaurantCalendar_div_35_Template, 11, 7, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 22)(37, "strong", 23);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 24, 0);
      \u0275\u0275listener("touchstart", function RestaurantCalendar_Template_div_touchstart_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHeaderTouchStart($event));
      })("touchend", function RestaurantCalendar_Template_div_touchend_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHeaderTouchEnd($event));
      });
      \u0275\u0275elementStart(42, "div", 25)(43, "button", 26);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_43_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Month));
      });
      \u0275\u0275text(44, "Mese");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 26);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_45_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Week));
      });
      \u0275\u0275text(46, "Settimana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 26);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setView(ctx.CalendarView.Day));
      });
      \u0275\u0275text(48, "Giorno");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 27)(50, "button", 28);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.previous());
      });
      \u0275\u0275elementStart(51, "span", 29);
      \u0275\u0275text(52, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "button", 30);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_53_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.today());
      });
      \u0275\u0275text(54, "Oggi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 28);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_55_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.next());
      });
      \u0275\u0275elementStart(56, "span", 29);
      \u0275\u0275text(57, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 31)(59, "button", 32);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openNewReservationModal());
      });
      \u0275\u0275element(60, "lucide-angular", 33);
      \u0275\u0275text(61, "Prenotazione ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 30);
      \u0275\u0275listener("click", function RestaurantCalendar_Template_button_click_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openNewPersonalAppointmentModal());
      });
      \u0275\u0275element(63, "lucide-angular", 33);
      \u0275\u0275text(64, "Personale ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 34, 1);
      \u0275\u0275listener("touchstart", function RestaurantCalendar_Template_div_touchstart_65_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchStart($event));
      })("touchend", function RestaurantCalendar_Template_div_touchend_65_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouchEnd($event));
      });
      \u0275\u0275template(67, RestaurantCalendar_div_67_Template, 5, 3, "div", 35)(68, RestaurantCalendar_div_68_Template, 8, 3, "div", 36)(69, RestaurantCalendar_div_69_Template, 7, 7, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, RestaurantCalendar_div_70_Template, 77, 17, "div", 38)(71, RestaurantCalendar_div_71_Template, 39, 9, "div", 38)(72, RestaurantCalendar_div_72_Template, 45, 10, "div", 38);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.getTodaysReservationCount(), " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.maxCapacityValue, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.tables.length, " tavoli");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tables.length > 0);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("text-primary", ctx.todayCapacity / ctx.calculateMaxCapacitySimple() <= 0.7)("text-warning", ctx.todayCapacity / ctx.calculateMaxCapacitySimple() > 0.7 && ctx.todayCapacity / ctx.calculateMaxCapacitySimple() <= 0.9)("text-danger", ctx.todayCapacity / ctx.calculateMaxCapacitySimple() > 0.9);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("text-primary", ctx.todayCapacity / ctx.calculateMaxCapacitySimple() <= 0.7)("text-warning", ctx.todayCapacity / ctx.calculateMaxCapacitySimple() > 0.7 && ctx.todayCapacity / ctx.calculateMaxCapacitySimple() <= 0.9)("text-danger", ctx.todayCapacity / ctx.calculateMaxCapacitySimple() > 0.9);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.todayCapacity, " / ", ctx.maxCapacityValue, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", (ctx.todayCapacity / ctx.calculateMaxCapacitySimple() * 100 || 0).toFixed(0), "% ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getAvailableTablesToday() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedDate);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 38, ctx.viewDate, "MMMM yyyy"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Month);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Week);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Day);
      \u0275\u0275advance(13);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("loading", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.view === ctx.CalendarView.Month);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.view === ctx.CalendarView.Week);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.view === ctx.CalendarView.Day);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNewReservationModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDayDetailsModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPersonalAppointmentModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.calendar-container[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.calendar-container.swipe-left[_ngcontent-%COMP%] {\n  transform: translateX(-10px);\n  opacity: 0.7;\n}\n.calendar-container.swipe-right[_ngcontent-%COMP%] {\n  transform: translateX(10px);\n  opacity: 0.7;\n}\n.calendar-month-view[_ngcontent-%COMP%] {\n  background: var(--background);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.month-weekdays[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: var(--smoke-2);\n  border-bottom: 2px solid var(--primary);\n}\n.month-weekday[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--smoke-1);\n}\n.month-weekday[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.month-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-auto-rows: minmax(4rem, 1fr);\n  min-height: 30rem;\n}\n.month-day[_ngcontent-%COMP%] {\n  min-height: 120px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.month-day[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--smoke-1) 20%, transparent);\n  z-index: 10;\n}\n.month-day.today[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n  border-color: var(--primary);\n}\n.month-day.other-month[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--smoke-1) 10%, transparent);\n  opacity: 0.6;\n}\n.month-day.today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 900;\n}\n.day-events-indicator[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  color: white;\n  min-width: 16px;\n  text-align: center;\n  line-height: 1;\n}\n.month-events-compact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  flex: 1;\n}\n.month-event-compact[_ngcontent-%COMP%] {\n  border-left: 3px solid;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: var(--fs-mini);\n  line-height: 1.1;\n  margin: 0 var(--gap-mini);\n  gap: var(--gap-mini);\n}\n.month-event-compact[_ngcontent-%COMP%]:hover {\n  transform: translateX(2px);\n  box-shadow: 0 2px 4px var(--shadow-2);\n}\n.event-time-small[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n  padding: 1px 3px;\n  border-radius: 3px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.event-customer-small[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.more-events-compact[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 2px;\n}\n.more-events-compact[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--primary) 15%, transparent);\n}\n.calendar-week-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.week-header[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--smoke-2);\n  border-bottom: 2px solid var(--primary);\n  flex-shrink: 0;\n}\n.week-time-column[_ngcontent-%COMP%] {\n  width: 80px;\n  background: var(--smoke-1);\n  border-right: 2px solid var(--primary);\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n}\n.week-day-header[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--gap-sm);\n  text-align: center;\n  font-weight: 700;\n  color: var(--text-color);\n  border-right: 1px solid var(--smoke-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 60px;\n}\n.week-day-header.today[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.week-day-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  text-transform: uppercase;\n  margin-bottom: var(--gap-sm);\n}\n.week-day-number[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.week-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  overflow-y: auto;\n}\n.week-time-column[_ngcontent-%COMP%]   .week-hour[_ngcontent-%COMP%] {\n  height: 60px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--text-color);\n  border-bottom: 1px solid var(--smoke-1);\n  position: relative;\n}\n.week-hour[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  height: 1px;\n  background: var(--smoke-1);\n  z-index: 1;\n}\n.week-day-column[_ngcontent-%COMP%] {\n  flex: 1;\n  border-right: 1px solid var(--smoke-1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.week-day-column[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.week-hour-slot[_ngcontent-%COMP%] {\n  height: 60px;\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--smoke-1);\n  position: relative;\n  padding: 2px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  background: var(--background);\n}\n.week-hour-slot[_ngcontent-%COMP%]:nth-child(even) {\n  background: color-mix(in srgb, var(--smoke-1) 5%, transparent);\n}\n.week-hour-slot[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--smoke-1) 15%, transparent);\n}\n.week-event[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 2px;\n  right: 2px;\n  padding: 6px 8px;\n  border-radius: 6px;\n  color: white;\n  font-size: 11px;\n  cursor: pointer;\n  z-index: 2;\n  transition: all 0.2s ease;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.week-event[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px var(--shadow-2);\n  z-index: 100;\n}\n.calendar-day-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.day-header[_ngcontent-%COMP%] {\n  padding: var(--gap-md);\n  text-align: center;\n  background: var(--smoke-2);\n  border-bottom: 2px solid var(--primary);\n  border-radius: 12px 12px 0 0;\n  flex-shrink: 0;\n}\n.day-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.day-hour[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 60px;\n  border-bottom: 1px solid var(--smoke-1);\n  background: var(--background);\n}\n.day-hour[_ngcontent-%COMP%]:nth-child(even) {\n  background: color-mix(in srgb, var(--smoke-1) 5%, transparent);\n}\n.hour-label[_ngcontent-%COMP%] {\n  width: 80px;\n  background: var(--smoke-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  flex-shrink: 0;\n  font-size: var(--fs-sm);\n  border-right: 2px solid var(--primary);\n}\n.hour-slot[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  padding: 4px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.hour-slot[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--smoke-1) 10%, transparent);\n}\n.day-event[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin: 2px 0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.day-event[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  box-shadow: 0 4px 12px var(--shadow-2);\n}\n.closed-day[_ngcontent-%COMP%] {\n  background-color: var(--shadow-2);\n  color: #c62828;\n}\n.closed-day[_ngcontent-%COMP%]   .week-day-name[_ngcontent-%COMP%], \n.closed-day[_ngcontent-%COMP%]   .week-day-number[_ngcontent-%COMP%], \n.closed-day[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n@media (max-width: 768px) {\n  .calendar-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .month-grid[_ngcontent-%COMP%] {\n    min-height: 350px;\n  }\n  .month-day[_ngcontent-%COMP%] {\n    min-height: 70px;\n  }\n  .month-weekday[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 8px 4px;\n  }\n  .month-event-compact[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .event-time-small[_ngcontent-%COMP%] {\n    font-size: 7px;\n    min-width: 24px;\n  }\n  .day-events-indicator[_ngcontent-%COMP%] {\n    font-size: 8px;\n    padding: 1px 4px;\n  }\n  .week-time-column[_ngcontent-%COMP%], \n   .hour-label[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .week-time-column[_ngcontent-%COMP%]   .week-hour[_ngcontent-%COMP%], \n   .week-hour-slot[_ngcontent-%COMP%], \n   .day-hour[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .week-event[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 4px;\n  }\n  .week-day-header[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n  .week-day-name[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .week-day-number[_ngcontent-%COMP%] {\n    font-size: var(--fs-sm);\n  }\n}\n@media (max-width: 480px) {\n  .month-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n  }\n  .month-event-compact[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1px;\n  }\n  .event-customer-small[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n  .more-events-compact[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n}\n.week-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.week-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--smoke-2);\n  border-radius: 4px;\n}\n.week-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=calendar-view.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantCalendar, [{
    type: Component,
    args: [{ selector: "app-calendar-view", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- calendar-view.html -->\r
<div class="page-container">\r
\r
  <!-- Statistics Cards (gi\xE0 ottimizzate) -->\r
  <div class="grid-cards p-sm mb-lg" data-tutorial="calendar-cards">\r
    <!-- Card 1: Prenotazioni Oggi -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">event_available</span>\r
        <h3 class="text-md font-semibold m-0">Prenotazioni Oggi</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">\r
        {{ getTodaysReservationCount() }}\r
      </div>\r
      <div class="text-muted card-footer">Per oggi</div>\r
    </div>\r
    \r
    <!-- Card 2: Capienza Massima -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">group</span>\r
        <h3 class="text-md font-semibold m-0">Capienza Massima</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">\r
        {{ maxCapacityValue }}\r
      </div>\r
      <div class="text-muted card-footer flex-col">\r
        <div class="flex">{{ tables.length }} tavoli</div>\r
        <div *ngIf="tables.length > 0" class="mt-sm text-mini flex flex-col">\r
          <div *ngFor="let item of getSimpleCapacityDistribution()" \r
               class="flex justify-between">\r
            <span>Tavoli da {{ item.size }}:</span>\r
            <span class="font-semibold">{{ item.count }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <!-- Card 3: Occupazione Oggi -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md" \r
              [class.text-primary]="todayCapacity / calculateMaxCapacitySimple() <= 0.7"\r
              [class.text-warning]="todayCapacity / calculateMaxCapacitySimple() > 0.7 && todayCapacity / calculateMaxCapacitySimple() <= 0.9"\r
              [class.text-danger]="todayCapacity / calculateMaxCapacitySimple() > 0.9">\r
          table_restaurant\r
        </span>\r
        <h3 class="text-md font-semibold m-0">Occupazione Oggi</h3>\r
      </div>\r
      <div class="text-md font-bold justify-center flex"\r
           [class.text-primary]="todayCapacity / calculateMaxCapacitySimple() <= 0.7"\r
           [class.text-warning]="todayCapacity / calculateMaxCapacitySimple() > 0.7 && todayCapacity / calculateMaxCapacitySimple() <= 0.9"\r
           [class.text-danger]="todayCapacity / calculateMaxCapacitySimple() > 0.9">\r
        {{ todayCapacity }} / {{ maxCapacityValue }}\r
      </div>\r
      <div class="text-muted card-footer">\r
        {{ ((todayCapacity / calculateMaxCapacitySimple()) * 100 || 0).toFixed(0) }}%\r
        <span *ngIf="getAvailableTablesToday() > 0" class="ml-sm text-mini">\r
          ({{ getAvailableTablesToday() }} tavoli liberi)\r
        </span>\r
      </div>\r
    </div>\r
    \r
    <!-- Card 4: Disponibilit\xE0 Data Selezionata -->\r
    <div class="card" *ngIf="selectedDate">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md text-primary">event</span>\r
        <h3 class="text-md font-semibold m-0">Disponibilit\xE0 {{ selectedDate | date:'dd/MM' }}</h3>\r
      </div>\r
      <div class="text-md font-bold text-info justify-center text-primary flex">\r
        {{ getAvailableTablesForSelectedDate() }} tavoli\r
      </div>\r
      <div class="text-muted card-footer">\r
        Posti: {{ todayCapacity }} / {{ maxCapacityValue }}\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Current Date Display -->\r
  <div class="flex justify-center w-100 p-sm">\r
    <strong class="text-md">{{ viewDate | date:'MMMM yyyy' }}</strong>\r
  </div>\r
\r
  <!-- Calendar Controls (ristrutturati con utility) -->\r
<div class="flex justify-between items-center gap-md p-sm calendar-controls" #calendarHeader\r
     (touchstart)="onHeaderTouchStart($event)"\r
     (touchend)="onHeaderTouchEnd($event)">\r
    <!-- View Switcher -->\r
    <div class="flex gap-sm" data-tutorial="calendar-mode">\r
      <button class="promethea-button outline" (click)="setView(CalendarView.Month)" [class.active]="view === CalendarView.Month">Mese</button>\r
      <button class="promethea-button outline" (click)="setView(CalendarView.Week)" [class.active]="view === CalendarView.Week">Settimana</button>\r
      <button class="promethea-button outline" (click)="setView(CalendarView.Day)" [class.active]="view === CalendarView.Day">Giorno</button>\r
    </div>\r
    <!-- Navigation -->\r
    <div class="flex items-center gap-md justify-center" data-tutorial="calendar-view">\r
      <button class="icon-button" (click)="previous()"><span class="material-icons">chevron_left</span></button>\r
      <button class="promethea-button ghost" (click)="today()">Oggi</button>\r
      <button class="icon-button" (click)="next()"><span class="material-icons">chevron_right</span></button>\r
    </div>\r
    <!-- Action Buttons -->\r
    <div class="flex gap-sm" data-tutorial="calendar-add">\r
      <button class="promethea-button" (click)="openNewReservationModal()">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>Prenotazione\r
      </button>\r
      <button class="promethea-button ghost" (click)="openNewPersonalAppointmentModal()">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>Personale\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Calendar Views -->\r
<div #calendarContainer class="p-sm calendar-container" [class.loading]="loading"\r
     (touchstart)="onTouchStart($event)" \r
     (touchend)="onTouchEnd($event)">\r
\r
    <!-- VISTA MENSILE -->\r
    <div *ngIf="view === CalendarView.Month" data-tutorial="calendar-day" class="calendar-month-view">\r
      <div class="month-weekdays">\r
        <div *ngFor="let weekday of ['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM']" class="month-weekday p-sm text-center font-bold text-mini uppercase">\r
          {{ weekday }}\r
        </div>\r
      </div>\r
      <div class="month-grid">\r
        <div *ngFor="let day of monthDays" \r
             class="month-day flex flex-col border bg-body p-0"\r
             [class.today]="isToday(day.date)"\r
             [class.current-month]="day.isCurrentMonth"\r
             [class.other-month]="!day.isCurrentMonth"\r
             [class.closed-day]="isDayClosed(day.date)"\r
             (click)="openDayDetails(day.date)">\r
          \r
          <div class="day-number-wrapper flex justify-between items-center p-sm">\r
            <span class="day-number font-bold text-md" [class.today-number]="isToday(day.date)">{{ day.date.getDate() }}</span>\r
            <lucide-angular *ngIf="isDayClosed(day.date)" name="lock" class="text-mini" title="Chiuso"></lucide-angular>\r
            <span *ngIf="day.events.length > 0" class="day-events-indicator" [style.background]="getEventColor(day.events[0])">{{ day.events.length }}</span>\r
          </div>\r
          \r
          <div *ngIf="day.events.length > 0" class="month-events-compact">\r
            <div *ngFor="let evt of getLimitedEventsForDate(day.date, 2)" \r
                 class="month-event-compact p-mini flex"\r
                 [style.border-color]="getEventColor(evt)"\r
                 (click)="$event.stopPropagation(); onEventClick(evt)">\r
              \r
              <span class="event-time-small font-bold text-mini rounded">\r
                <ng-container *ngIf="evt.meta.eventType === 'personal' && evt.meta.isAllDay; else normalTimeSmall">\r
                  <span class="material-icons text-mini">event</span>\r
                </ng-container>\r
                <ng-template #normalTimeSmall>{{ evt.start | date:'HH:mm' }}</ng-template>\r
              </span>\r
              \r
              <ng-container [ngSwitch]="evt.meta.eventType">\r
                <span *ngSwitchCase="'personal'" class="event-customer-small text-mini flex items-center gap-sm">\r
                  {{ evt.title }}\r
                </span>\r
                <span *ngSwitchCase="'reservation'" class="event-customer-small text-mini flex items-center gap-sm">\r
                  <span class="material-icons" >restaurant</span>\r
                  {{ $any(evt.meta).customerName }}\r
                </span>\r
              </ng-container>\r
            </div>\r
            \r
            <div *ngIf="hasMoreEvents(day.date, 2)" \r
                 class="more-events-compact text-mini text-primary text-center p-mini"\r
                 (click)="$event.stopPropagation(); onDayClick(day.date)">\r
              +{{ getEventsForDate(day.date).length - 2 }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- VISTA SETTIMANALE -->\r
<!-- VISTA SETTIMANALE (identica all'originale) -->\r
<div *ngIf="view === CalendarView.Week" class="calendar-week-view">\r
  <div class="week-header flex">\r
    <div class="week-time-column"></div>\r
    <div *ngFor="let day of weekDays" \r
         class="week-day-header"\r
         [class.today]="isToday(day)"\r
         [class.closed-day]="isDayClosed(day)">\r
      <div class="week-day-name">{{ day | date:'EEE' }}</div>\r
      <div class="week-day-number">{{ day.getDate() }}</div>\r
    </div>\r
  </div>\r
  \r
  <div class="week-body">\r
    <div class="week-time-column">\r
      <div *ngFor="let slot of getTimeSlotsForDay(weekDays[0])" \r
           class="week-hour">\r
        {{ slot }}\r
      </div>\r
    </div>\r
    \r
    <div *ngFor="let day of weekDays" class="week-day-column"\r
         [class.closed-day]="isDayClosed(day)">\r
      <div *ngFor="let slot of getTimeSlotsForDay(day)" \r
           class="week-hour-slot"\r
           (click)="openDayDetails(day)">\r
        \r
        <div *ngFor="let evt of getEventsForSlot(day, slot)" \r
             class="week-event"\r
             [style.background]="getEventColor(evt)"\r
             (click)="$event.stopPropagation(); onEventClick(evt)">\r
          \r
          <div class="event-time">\r
            <ng-container *ngIf="evt.meta.eventType === 'personal' && evt.meta.isAllDay; else normalTime">\r
              <span class="material-icons" >event</span>\r
            </ng-container>\r
            <ng-template #normalTime>\r
              {{ evt.start | date:'HH:mm' }}\r
            </ng-template>\r
          </div>          \r
          <ng-container [ngSwitch]="evt.meta.eventType">\r
            <div *ngSwitchCase="'personal'" class="event-customer">\r
              <span class="material-icons" style="margin-right: var(--gap-sm);">event_note</span>\r
              {{ evt.title }}\r
            </div>\r
            <div *ngSwitchCase="'reservation'" class="event-customer">\r
              <span class="material-icons" style="margin-right: var(--gap-sm);">restaurant</span>\r
              {{ $any(evt.meta).customerName }}\r
            </div>\r
          </ng-container>\r
          \r
          <div *ngIf="evt.meta.eventType === 'reservation'" class="event-details">\r
            {{ $any(evt.meta).partySize }}p\r
          </div>\r
        </div>\r
        \r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
    <!-- VISTA GIORNALIERA -->\r
    <div *ngIf="view === CalendarView.Day" class="calendar-day-view border rounded overflow-hidden">\r
      <div class="day-header p-md text-center bg-smoke" [class.closed-day]="isDayClosed(viewDate)">\r
        <h2 class="text-md font-bold">{{ viewDate | date:'fullDate' }}</h2>\r
      </div>\r
      \r
      <div class="day-body overflow-auto">\r
        <div *ngFor="let slot of getTimeSlotsForDay(viewDate)" class="day-hour flex">\r
          <div class="hour-label w-20 bg-smoke flex items-center justify-center font-semibold text-mini">{{ slot }}</div>\r
          <div class="hour-slot flex-1 p-xs" (click)="openDayDetails(viewDate)">\r
            <div *ngFor="let evt of getEventsForSlot(viewDate, slot)" \r
                 class="day-event rounded shadow-card"\r
                 [style.background]="getEventColor(evt)"\r
                 (click)="$event.stopPropagation(); onEventClick(evt)">\r
              <div class="event-time font-bold text-mini">\r
                <ng-container *ngIf="evt.meta.eventType === 'personal' && evt.meta.isAllDay; else normalTime">\r
                  <span class="material-icons" >event</span>\r
                </ng-container>\r
                <ng-template #normalTime>{{ evt.start | date:'HH:mm' }}</ng-template>\r
              </div>\r
              <ng-container [ngSwitch]="evt.meta.eventType">\r
                <div *ngSwitchCase="'personal'" class="event-customer font-bold text-mini flex items-center gap-sm">\u{1F4CC} {{ evt.title }}</div>\r
                <div *ngSwitchCase="'reservation'" class="event-customer font-bold text-mini flex items-center gap-sm">{{ $any(evt.meta).customerName }}</div>\r
              </ng-container>\r
              <div *ngIf="evt.meta.eventType === 'reservation'" class="event-details text-mini">\r
                {{ $any(evt.meta).partySize }} persone \u2022 {{ $any(evt.meta).tableInfo }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ========== MODAL 1: NUOVA PRENOTAZIONE (aperto dal bottone) ========== -->\r
  <div *ngIf="showNewReservationModal" class="modal-overlay">\r
    <div class="modal-container modal-lg">\r
      <div class="modal-header">\r
        <h3 class="section-title">\r
          <span class="material-icons text-primary text-md">event_available</span>\r
          Nuova Prenotazione\r
        </h3>\r
        <button class="icon-button" (click)="closeNewReservationModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
     \r
      <div>\r
        <form (ngSubmit)="createManualReservation()">\r
          <div class="form-card">\r
            <!-- Customer Info -->\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label for="customerName" class="standard-label">\r
                  <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
                  Nome *\r
                </label>\r
                <input\r
                  type="text"\r
                  id="customerName"\r
                  [(ngModel)]="newReservation.customer_name"\r
                  name="customerName"\r
                  required\r
                  placeholder="Inserisci nome">\r
              </div>\r
              \r
              <div class="form-group">\r
                <label for="customerSurname" class="standard-label">\r
                  <span class="material-icons">person_outline</span>\r
                  Cognome *\r
                </label>\r
                <input\r
                  type="text"\r
                  id="customerSurname"\r
                  [(ngModel)]="newReservation.customer_surname"\r
                  name="customerSurname"\r
                  required\r
                  placeholder="Inserisci cognome">\r
              </div>\r
            </div>\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label for="customerEmail" class="standard-label">\r
                  <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
                  Email\r
                </label>\r
                <input\r
                  type="email"\r
                  id="customerEmail"\r
                  [(ngModel)]="newReservation.customer_email"\r
                  name="customerEmail"\r
                  placeholder="Inserisci email (facoltativo)">\r
              </div>\r
              \r
              <div class="form-group">\r
                <label for="customerPhone" class="standard-label">\r
                  <span class="material-icons">phone</span>\r
                  Telefono *\r
                </label>\r
                <input\r
                  type="tel"\r
                  id="customerPhone"\r
                  [(ngModel)]="newReservation.customer_phone"\r
                  name="customerPhone"\r
                  required\r
                  placeholder="Inserisci telefono">\r
              </div>\r
            </div>\r
\r
            <!-- Reservation Details con orari dai turni -->\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label for="reservationDate" class="standard-label">\r
                  <span class="material-icons">event</span>\r
                  Data *\r
                </label>\r
                <input\r
                  type="date"\r
                  id="reservationDate"\r
                  [(ngModel)]="newReservation.reservation_date"\r
                  name="reservationDate"\r
                  (change)="onReservationDateChange()"\r
                  required\r
                  [min]="minDate">\r
              </div>\r
              \r
              <div class="form-group">\r
                <label for="reservationTime" class="standard-label">\r
                  <span class="material-icons">schedule</span>\r
                  Ora *\r
                </label>\r
                <select\r
                  id="reservationTime"\r
                  [(ngModel)]="newReservation.reservation_time"\r
                  name="reservationTime"\r
                  required>\r
                  <option value="" disabled>Scegli un orario</option>\r
                  <option *ngFor="let timeSlot of getAvailableTimeSlotsForDate(selectedDate)" \r
                          [value]="timeSlot">\r
                    {{ timeSlot }}\r
                  </option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="form-row">\r
            <div class="form-group">\r
              <label for="partySize" class="standard-label">\r
                <span class="material-icons">group</span>\r
                Numero Persone *\r
              </label>\r
              <input\r
                type="number"\r
                id="partySize"\r
                [(ngModel)]="newReservation.party_size"\r
                name="partySize"\r
                min="1"\r
                [max]="maxCapacity"\r
                required\r
              />\r
              <!-- Opzionale: mostra la capienza massima sotto l'input -->\r
              <small class="text-muted" *ngIf="maxCapacity > 0">\r
                Capienza massima: {{ maxCapacity }} persone\r
              </small>\r
              <small class="text-danger" *ngIf="maxCapacity === 0">\r
                Nessun tavolo configurato \u2013 impossibile prenotare\r
              </small>\r
            </div>\r
\r
            <!-- Campo Stato - visibile solo in modifica -->             \r
            <div class="form-group" *ngIf="editingReservationId">\r
              <label for="reservationStatus" class="standard-label">\r
                <lucide-angular name="info"></lucide-angular>\r
                Stato\r
              </label>\r
              <select\r
                id="reservationStatus"\r
                [(ngModel)]="newReservation.status"\r
                name="reservationStatus">\r
                <option [value]="ReservationStatus.Confirmed">Confermata</option>\r
                <option [value]="ReservationStatus.Pending">In attesa</option>\r
                <option [value]="ReservationStatus.Cancelled">Cancellata</option>\r
              </select>\r
            </div>\r
\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="specialRequests" class="standard-label">\r
                <span class="material-icons">notes</span>\r
                Richieste Speciali\r
              </label>\r
              <textarea\r
                id="specialRequests"\r
                [(ngModel)]="newReservation.special_requests"\r
                name="specialRequests"\r
                rows="3"\r
                placeholder="Note o richieste particolari..."></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="button" class="promethea-button ghost" (click)="closeNewReservationModal()">\r
              <span class="material-icons">close</span>\r
              Annulla\r
            </button>\r
            <button type="submit" class="promethea-button">\r
              <lucide-angular name="plus" [size]="20"></lucide-angular>\r
              Crea Prenotazione\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ========== MODAL 2: DETTAGLI GIORNO ========== -->\r
  <div *ngIf="showDayDetailsModal" class="modal-overlay">\r
    <div class="modal-container modal-lg">\r
      <div class="modal-header">\r
        <div class="flex items-center gap-md">\r
          <div class="header-icon">\r
            <span class="material-icons text-primary text-lg">calendar_today</span>\r
          </div>\r
          <div>\r
            <h3 class="section-title m-0">Eventi del giorno</h3>\r
            <p class="text-muted m-0">{{ selectedDate | date:'EEEE d MMMM yyyy' }}</p>\r
          </div>\r
        </div>\r
        <button class="icon-button" (click)="closeDayDetailsModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
      \r
      <div class="modal-content p-md">\r
        <!-- Header statistiche -->\r
        <div class="info-message mb-lg">\r
          <span class="material-icons">event_available</span>\r
          <div>\r
            <strong>{{ selectedDayEvents.length }} eventi</strong> \xB7 \r
            {{ calculateTotalGuests() }} persone totali\r
          </div>\r
        </div>\r
        \r
        <!-- Lista eventi -->\r
        <div *ngIf="selectedDayEvents.length > 0; else noEvents" \r
             class="flex flex-col gap-md mb-sm">\r
          \r
          <div *ngFor="let evt of selectedDayEvents" class="card hover-lift">\r
            <!-- Intestazione condivisa -->\r
            <div class="flex justify-between items-start flex-wrap">\r
              <div class="flex gap-sm">\r
                <div class="flex items-center gap-sm mb-sm flex-wrap">\r
<h4 class="font-bold text-md m-0">\r
  <ng-container [ngSwitch]="evt.meta.eventType">\r
    <span *ngSwitchCase="'personal'">\r
      <span class="material-icons" style="vertical-align: middle;">event_note</span>\r
      {{ evt.title }}\r
    </span>\r
    <span *ngSwitchCase="'reservation'">\r
      <span class="material-icons" style="vertical-align: middle;">restaurant</span>\r
      {{ $any(evt.meta).customerName }}\r
    </span>\r
  </ng-container>\r
  <span class="chip ml-sm" \r
        [class.bg-purple]="evt.meta.eventType === 'personal'"\r
        [class.bg-primary]="evt.meta.eventType === 'reservation'">\r
    {{ evt.meta.eventType === 'personal' ? 'Personale' : 'Prenotazione' }}\r
  </span>\r
</h4>\r
\r
                  <span *ngIf="evt.meta.eventType === 'reservation'" \r
                        class="chip" \r
                        [class]="getReservationStatusClass($any(evt.meta).status)">\r
                    {{ $any(evt.meta).status }}\r
                  </span>\r
                </div>\r
                \r
                <!-- Contatti solo per prenotazioni -->\r
                <div *ngIf="evt.meta.eventType === 'reservation'" class="flex items-center gap-md flex-wrap">\r
                  <div class="flex items-center gap-sm">\r
                    <span class="material-icons text-mini">phone</span>\r
                    <span class="text-mini">{{ $any(evt.meta).customerPhone }}</span>\r
                  </div>\r
                  <div *ngIf="$any(evt.meta).customerEmail" class="flex items-center gap-sm">\r
                    <span class="material-icons text-mini">email</span>\r
                    <span class="text-mini">{{ $any(evt.meta).customerEmail }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <!-- Pulsanti che chiamano i metodi unificati -->\r
              <div class="flex gap-sm">\r
                <button class="icon-button x-small" \r
                        (click)="editEvent(evt)"\r
                        title="Modifica">\r
                  <span class="material-icons">edit</span>\r
                </button>\r
                <button class="icon-button x-small" \r
                        (click)="deleteEvent(evt)"\r
                        title="Elimina">\r
                  <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                </button>\r
              </div>\r
            </div>\r
            \r
            <!-- Dettagli in card-body -->\r
            <div class="card-body">\r
              <!-- Orario (comune) -->\r
              <div class="flex flex-col items-center text-center p-sm rounded bg-smoke">\r
                <span class="material-icons text-primary mb-xs">schedule</span>\r
                <div class="font-bold text-md">{{ evt.start | date:'HH:mm' }}</div>\r
                <div class="text-mini font-semibold">Orario</div>\r
              </div>\r
              \r
              <ng-container [ngSwitch]="evt.meta.eventType">\r
                <!-- Dettagli prenotazione -->\r
                <ng-container *ngSwitchCase="'reservation'">\r
                  <div class="flex flex-col items-center text-center p-sm rounded bg-smoke">\r
                    <span class="material-icons text-primary mb-xs">group</span>\r
                    <div class="font-bold text-md">{{ $any(evt.meta).partySize }}</div>\r
                    <div class="text-mini font-semibold">Persone</div>\r
                  </div>\r
                  <div class="flex flex-col items-center text-center p-sm rounded bg-smoke">\r
                    <span class="material-icons text-primary mb-xs">table_restaurant</span>\r
                    <div class="font-bold text-md">{{ $any(evt.meta).tableInfo || '\u2014' }}</div>\r
                    <div class="text-mini font-semibold">Tavolo</div>\r
                  </div>\r
                </ng-container>\r
                \r
              <!-- Dettagli appuntamento personale -->\r
              <ng-container *ngSwitchCase="'personal'">\r
                <div class="flex flex-col items-center text-center p-sm rounded bg-smoke">\r
                  <span class="material-icons text-primary mb-xs">description</span>\r
                  <div class="font-bold text-md">{{ $any(evt.meta).description || 'Nessuna descrizione' }}</div>\r
                  <div class="text-mini font-semibold">Descrizione</div>\r
                </div>\r
                <div class="flex flex-col items-center text-center p-sm rounded bg-smoke">\r
                  <span class="material-icons text-primary mb-xs">access_time</span>\r
                  <div class="font-bold text-md">\r
                    <ng-container *ngIf="!$any(evt.meta).isAllDay; else allDay">\r
                      {{ evt.start | date:'HH:mm' }} - {{ evt.end | date:'HH:mm' }}\r
                    </ng-container>\r
                    <ng-template #allDay>\r
                      Tutto il giorno\r
                    </ng-template>\r
                  </div>\r
                  <div class="text-mini font-semibold">Orario</div>\r
                </div>\r
              </ng-container>\r
              </ng-container>\r
            </div>\r
            \r
            <!-- Note speciali solo per prenotazioni -->\r
            <div *ngIf="evt.meta.eventType === 'reservation' && $any(evt.meta).reservation?.special_requests" \r
                 class="mt-md p-sm rounded bg-smoke">\r
              <div class="flex items-center gap-sm mb-xs">\r
                <span class="material-icons text-primary">notes</span>\r
                <strong class="text-mini">Note</strong>\r
              </div>\r
              <p class="text-sm m-0">{{ $any(evt.meta).reservation.special_requests }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <!-- Stato vuoto -->\r
        <ng-template #noEvents>\r
          <div class="empty-state text-center py-xl">\r
            <span class="material-icons text-lg text-muted mb-md">event_busy</span>\r
            <h3 class="text-md font-bold mb-sm">Nessun evento per questa data</h3>\r
            <p class="text-muted mb-lg">Clicca su "Nuovo Appuntamento" o "Nuova Prenotazione" per aggiungerne uno</p>\r
          </div>\r
        </ng-template>\r
        \r
        <!-- Footer con azioni -->\r
        <div class="modal-footer">\r
          <button type="button" class="promethea-button ghost" (click)="closeDayDetailsModal()">\r
            <span class="material-icons">close</span>\r
            Chiudi\r
          </button>\r
          <button type="button" class="promethea-button ghost" (click)="openNewPersonalAppointmentModal(selectedDate)">\r
            <span class="material-icons">event_note</span>\r
            Nuovo Appuntamento\r
          </button>\r
          <button type="button" class="promethea-button" (click)="openNewReservationForSelectedDay()">\r
            <lucide-angular name="plus" [size]="20"></lucide-angular>\r
            Nuova Prenotazione\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- MODALE APPUNTAMENTO PERSONALE -->\r
  <div *ngIf="showPersonalAppointmentModal" class="modal-overlay">\r
    <div class="modal-container modal-md">\r
      <div class="modal-header">\r
        <h3 class="section-title">\r
          <span class="material-icons">event_note</span>\r
          {{ editingPersonalAppointment ? 'Modifica' : 'Nuovo' }} Appuntamento Personale\r
        </h3>\r
        <button class="icon-button" (click)="closePersonalAppointmentModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
      \r
      <div class="modal-content p-md">\r
        <form (ngSubmit)="savePersonalAppointment()" #personalForm="ngForm">\r
          <div class="form-group">\r
            <label class="standard-label">Titolo *</label>\r
            <input type="text" [(ngModel)]="personalAppointmentData.title" name="title" required>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Inizio *</label>\r
              <input type="datetime-local" [(ngModel)]="personalAppointmentData.start_datetime" name="start" required>\r
            </div>\r
            <div class="form-group">\r
              <label class="standard-label">Fine *</label>\r
              <input type="datetime-local" [(ngModel)]="personalAppointmentData.end_datetime" name="end" required>\r
            </div>\r
          </div>\r
          \r
          <div class="form-group">\r
            <label class="standard-label">Descrizione</label>\r
            <textarea [(ngModel)]="personalAppointmentData.description" name="description" rows="3"></textarea>\r
          </div>\r
          \r
<div class="form-group">\r
  <label class="standard-label">Colore</label>\r
  <div class="flex items-center gap-sm">\r
    <input type="color" [(ngModel)]="personalAppointmentData.color" name="color">\r
    <div class="color-preview" [style.backgroundColor]="personalAppointmentData.color"></div>\r
  </div>\r
</div>\r
          \r
          <div class="checkbox-label">\r
            <input type="checkbox" [(ngModel)]="personalAppointmentData.is_all_day" name="isAllDay">\r
            <span>Giornata intera</span>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="button" class="promethea-button ghost" (click)="closePersonalAppointmentModal()">\r
              Annulla\r
            </button>\r
            <button type="submit" class="promethea-button" [disabled]="personalForm.invalid">\r
              Salva\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>`, styles: ['/* src/app/restaurant/reservation/calendar-view/calendar-view.css */\n.calendar-container {\n  touch-action: pan-y;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.calendar-container.swipe-left {\n  transform: translateX(-10px);\n  opacity: 0.7;\n}\n.calendar-container.swipe-right {\n  transform: translateX(10px);\n  opacity: 0.7;\n}\n.calendar-month-view {\n  background: var(--background);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.month-weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: var(--smoke-2);\n  border-bottom: 2px solid var(--primary);\n}\n.month-weekday {\n  border-right: 1px solid var(--smoke-1);\n}\n.month-weekday:last-child {\n  border-right: none;\n}\n.month-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-auto-rows: minmax(4rem, 1fr);\n  min-height: 30rem;\n}\n.month-day {\n  min-height: 120px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.month-day:hover {\n  background: color-mix(in srgb, var(--smoke-1) 20%, transparent);\n  z-index: 10;\n}\n.month-day.today {\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n  border-color: var(--primary);\n}\n.month-day.other-month {\n  background: color-mix(in srgb, var(--smoke-1) 10%, transparent);\n  opacity: 0.6;\n}\n.month-day.today .day-number {\n  color: var(--primary);\n  font-weight: 900;\n}\n.day-events-indicator {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  color: white;\n  min-width: 16px;\n  text-align: center;\n  line-height: 1;\n}\n.month-events-compact {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  flex: 1;\n}\n.month-event-compact {\n  border-left: 3px solid;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: var(--fs-mini);\n  line-height: 1.1;\n  margin: 0 var(--gap-mini);\n  gap: var(--gap-mini);\n}\n.month-event-compact:hover {\n  transform: translateX(2px);\n  box-shadow: 0 2px 4px var(--shadow-2);\n}\n.event-time-small {\n  font-size: var(--fs-mini);\n  padding: 1px 3px;\n  border-radius: 3px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.event-customer-small {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.more-events-compact {\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 2px;\n}\n.more-events-compact:hover {\n  background: color-mix(in srgb, var(--primary) 15%, transparent);\n}\n.calendar-week-view {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.week-header {\n  display: flex;\n  background: var(--smoke-2);\n  border-bottom: 2px solid var(--primary);\n  flex-shrink: 0;\n}\n.week-time-column {\n  width: 80px;\n  background: var(--smoke-1);\n  border-right: 2px solid var(--primary);\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n}\n.week-day-header {\n  flex: 1;\n  padding: var(--gap-sm);\n  text-align: center;\n  font-weight: 700;\n  color: var(--text-color);\n  border-right: 1px solid var(--smoke-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 60px;\n}\n.week-day-header.today {\n  background: var(--primary);\n  color: white;\n}\n.week-day-name {\n  font-size: var(--fs-sm);\n  text-transform: uppercase;\n  margin-bottom: var(--gap-sm);\n}\n.week-day-number {\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.week-body {\n  flex: 1;\n  display: flex;\n  overflow-y: auto;\n}\n.week-time-column .week-hour {\n  height: 60px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--text-color);\n  border-bottom: 1px solid var(--smoke-1);\n  position: relative;\n}\n.week-hour::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  height: 1px;\n  background: var(--smoke-1);\n  z-index: 1;\n}\n.week-day-column {\n  flex: 1;\n  border-right: 1px solid var(--smoke-1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.week-day-column:last-child {\n  border-right: none;\n}\n.week-hour-slot {\n  height: 60px;\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--smoke-1);\n  position: relative;\n  padding: 2px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  background: var(--background);\n}\n.week-hour-slot:nth-child(even) {\n  background: color-mix(in srgb, var(--smoke-1) 5%, transparent);\n}\n.week-hour-slot:hover {\n  background: color-mix(in srgb, var(--smoke-1) 15%, transparent);\n}\n.week-event {\n  position: absolute;\n  left: 2px;\n  right: 2px;\n  padding: 6px 8px;\n  border-radius: 6px;\n  color: white;\n  font-size: 11px;\n  cursor: pointer;\n  z-index: 2;\n  transition: all 0.2s ease;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.week-event:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px var(--shadow-2);\n  z-index: 100;\n}\n.calendar-day-view {\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.day-header {\n  padding: var(--gap-md);\n  text-align: center;\n  background: var(--smoke-2);\n  border-bottom: 2px solid var(--primary);\n  border-radius: 12px 12px 0 0;\n  flex-shrink: 0;\n}\n.day-body {\n  flex: 1;\n  overflow-y: auto;\n}\n.day-hour {\n  display: flex;\n  min-height: 60px;\n  border-bottom: 1px solid var(--smoke-1);\n  background: var(--background);\n}\n.day-hour:nth-child(even) {\n  background: color-mix(in srgb, var(--smoke-1) 5%, transparent);\n}\n.hour-label {\n  width: 80px;\n  background: var(--smoke-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  flex-shrink: 0;\n  font-size: var(--fs-sm);\n  border-right: 2px solid var(--primary);\n}\n.hour-slot {\n  flex: 1;\n  position: relative;\n  padding: 4px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.hour-slot:hover {\n  background: color-mix(in srgb, var(--smoke-1) 10%, transparent);\n}\n.day-event {\n  background: var(--gradiente);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin: 2px 0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.day-event:hover {\n  transform: translateX(4px);\n  box-shadow: 0 4px 12px var(--shadow-2);\n}\n.closed-day {\n  background-color: var(--shadow-2);\n  color: #c62828;\n}\n.closed-day .week-day-name,\n.closed-day .week-day-number,\n.closed-day .month-day {\n  color: #c62828;\n}\n@media (max-width: 768px) {\n  .calendar-controls {\n    flex-direction: column;\n  }\n  .month-grid {\n    min-height: 350px;\n  }\n  .month-day {\n    min-height: 70px;\n  }\n  .month-weekday {\n    font-size: 10px;\n    padding: 8px 4px;\n  }\n  .month-event-compact {\n    font-size: 8px;\n  }\n  .event-time-small {\n    font-size: 7px;\n    min-width: 24px;\n  }\n  .day-events-indicator {\n    font-size: 8px;\n    padding: 1px 4px;\n  }\n  .week-time-column,\n  .hour-label {\n    width: 60px;\n  }\n  .week-time-column .week-hour,\n  .week-hour-slot,\n  .day-hour {\n    height: 40px;\n  }\n  .week-event {\n    font-size: 9px;\n    padding: 4px;\n  }\n  .week-day-header {\n    min-height: 50px;\n  }\n  .week-day-name {\n    font-size: 10px;\n  }\n  .week-day-number {\n    font-size: var(--fs-sm);\n  }\n}\n@media (max-width: 480px) {\n  .month-day {\n    min-height: 60px;\n  }\n  .month-event-compact {\n    flex-direction: column;\n    gap: 1px;\n  }\n  .event-customer-small {\n    font-size: 7px;\n  }\n  .more-events-compact {\n    font-size: 7px;\n  }\n}\n.week-body::-webkit-scrollbar {\n  width: 8px;\n}\n.week-body::-webkit-scrollbar-thumb {\n  background: var(--smoke-2);\n  border-radius: 4px;\n}\n.week-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n@keyframes pulse {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=calendar-view.css.map */\n'] }]
  }], null, { calendarContainerRef: [{
    type: ViewChild,
    args: ["calendarContainer"]
  }], calendarHeaderRef: [{
    type: ViewChild,
    args: ["calendarHeader"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantCalendar, { className: "RestaurantCalendar", filePath: "src/app/restaurant/reservation/calendar-view/calendar-view.ts", lineNumber: 79 });
})();
export {
  CalendarView,
  ReservationStatus,
  RestaurantCalendar
};
//# sourceMappingURL=chunk-LFYMA6GF.js.map
