import {
  FloorManagementService
} from "./chunk-QCRNEMKY.js";
import {
  ShiftService
} from "./chunk-J63TFP6U.js";
import {
  MenuManagementService
} from "./chunk-WGPV5P3Z.js";
import "./chunk-IZHMOFAM.js";
import {
  TableService
} from "./chunk-J3BKBXKA.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
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
import "./chunk-JWP3QZ4U.js";
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
  Subscription,
  debounceTime,
  distinctUntilChanged,
  inject,
  map,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
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
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/reservation/reservation-manager/reservation-manager.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ReservationManager_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const shift_r1 = ctx.$implicit;
    \u0275\u0275property("value", shift_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", shift_r1.name, " (", shift_r1.start_time.substring(0, 5), " - ", shift_r1.end_time.substring(0, 5), ") ");
  }
}
function ReservationManager_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getActiveFiltersInfo().text, " ");
  }
}
function ReservationManager_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 29);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 44);
    \u0275\u0275listener("click", function ReservationManager_div_62_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = null);
    });
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ReservationManager_tr_89_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r5.customer_email, " ");
  }
}
function ReservationManager_tr_89_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "restaurant_menu");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_tr_89_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getReservationMenuInfo(reservation_r5), " ");
  }
}
function ReservationManager_tr_89_div_24_select_1_ng_container_4_ng_container_1_optgroup_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r8 = ctx.$implicit;
    const reservation_r5 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275property("value", table_r8.id)("title", "Capacit\xE0: " + table_r8.capacity + " posti");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", table_r8.table_name || "Tavolo " + table_r8.table_number, " (", table_r8.capacity, " posti) ", table_r8.capacity === reservation_r5.party_size ? "\u2B50" : "", " ");
  }
}
function ReservationManager_tr_89_div_24_select_1_ng_container_4_ng_container_1_optgroup_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 69);
    \u0275\u0275template(1, ReservationManager_tr_89_div_24_select_1_ng_container_4_ng_container_1_optgroup_1_option_1_Template, 2, 5, "option", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("label", group_r9.floorPlan.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r9.tables);
  }
}
function ReservationManager_tr_89_div_24_select_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservationManager_tr_89_div_24_select_1_ng_container_4_ng_container_1_optgroup_1_Template, 2, 2, "optgroup", 68);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r9.tables && group_r9.tables.length > 0);
  }
}
function ReservationManager_tr_89_div_24_select_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservationManager_tr_89_div_24_select_1_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const reservation_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getFilteredTableGroups(reservation_r5.party_size));
  }
}
function ReservationManager_tr_89_div_24_select_1_ng_container_5_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r10 = ctx.$implicit;
    const reservation_r5 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("value", table_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", table_r10.table_name || "Tavolo " + table_r10.table_number, " (", table_r10.capacity, " posti) ", table_r10.capacity === reservation_r5.party_size ? "\u2B50" : "", " ");
  }
}
function ReservationManager_tr_89_div_24_select_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservationManager_tr_89_div_24_select_1_ng_container_5_option_1_Template, 2, 4, "option", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const reservation_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getFilteredTables(reservation_r5.party_size));
  }
}
function ReservationManager_tr_89_div_24_select_1_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 72);
    \u0275\u0275text(1, " Nessun tavolo disponibile ");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_tr_89_div_24_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 64, 0);
    \u0275\u0275listener("change", function ReservationManager_tr_89_div_24_select_1_Template_select_change_0_listener() {
      \u0275\u0275restoreView(_r6);
      const tableSelect_r7 = \u0275\u0275reference(1);
      const reservation_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignTable(reservation_r5.id, tableSelect_r7.value));
    });
    \u0275\u0275elementStart(2, "option", 65);
    \u0275\u0275text(3, "Assegna tavolo...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ReservationManager_tr_89_div_24_select_1_ng_container_4_Template, 2, 1, "ng-container", 66)(5, ReservationManager_tr_89_div_24_select_1_ng_container_5_Template, 2, 1, "ng-container", 66)(6, ReservationManager_tr_89_div_24_select_1_option_6_Template, 2, 0, "option", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.tableGroups && ctx_r1.tableGroups.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (!ctx_r1.tableGroups || ctx_r1.tableGroups.length === 0) && ctx_r1.tables.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tables.length === 0 && ctx_r1.tableGroups.length === 0);
  }
}
function ReservationManager_tr_89_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, ReservationManager_tr_89_div_24_select_1_Template, 7, 3, "select", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !reservation_r5.table_id);
  }
}
function ReservationManager_tr_89_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, " Nessun tavolo ");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_tr_89_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function ReservationManager_tr_89_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const reservation_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.unassignTable(reservation_r5.id));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ReservationManager_tr_89_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function ReservationManager_tr_89_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const reservation_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateStatus(reservation_r5.id, "confirmed"));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function ReservationManager_tr_89_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function ReservationManager_tr_89_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const reservation_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateStatus(reservation_r5.id, "pending"));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd()();
  }
}
function ReservationManager_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 45)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ReservationManager_tr_89_div_9_Template, 2, 1, "div", 46);
    \u0275\u0275elementStart(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 48)(18, "div", 49);
    \u0275\u0275template(19, ReservationManager_tr_89_div_19_Template, 2, 0, "div", 50)(20, ReservationManager_tr_89_span_20_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 52)(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ReservationManager_tr_89_div_24_Template, 2, 1, "div", 53)(25, ReservationManager_tr_89_span_25_Template, 2, 0, "span", 46)(26, ReservationManager_tr_89_button_26_Template, 3, 0, "button", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "td")(28, "span", 55);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "span", 55);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "div", 27);
    \u0275\u0275template(35, ReservationManager_tr_89_button_35_Template, 3, 0, "button", 56)(36, ReservationManager_tr_89_button_36_Template, 3, 0, "button", 57);
    \u0275\u0275elementStart(37, "button", 58);
    \u0275\u0275listener("click", function ReservationManager_tr_89_Template_button_click_37_listener() {
      const reservation_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(reservation_r5));
    });
    \u0275\u0275elementStart(38, "span", 29);
    \u0275\u0275text(39, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 59);
    \u0275\u0275listener("click", function ReservationManager_tr_89_Template_button_click_40_listener() {
      const reservation_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteReservation(reservation_r5.id));
    });
    \u0275\u0275element(41, "lucide-angular", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reservation_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(reservation_r5.reservation_date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(reservation_r5.reservation_time));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getCustomerFullName(reservation_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reservation_r5.customer_email);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", reservation_r5.customer_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r5.customer_id ? "Cliente Registrato" : "Nuovo Cliente", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCustomerContact(reservation_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reservation_r5.party_size);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.getReservationMenuInfo(reservation_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getReservationMenuInfo(reservation_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTableName(reservation_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tables.length > 0 || ctx_r1.tableGroups.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tables.length === 0 && ctx_r1.tableGroups.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reservation_r5.table_id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.getStatusColor(reservation_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(reservation_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.getReservationShift(reservation_r5) !== "N/D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getReservationShift(reservation_r5), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", reservation_r5.status !== "confirmed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reservation_r5.status !== "pending");
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 20);
  }
}
function ReservationManager_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 29);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 77);
    \u0275\u0275text(4, "Nessuna prenotazione trovata con i filtri selezionati");
    \u0275\u0275elementEnd()();
  }
}
function ReservationManager_div_91_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "span", 111);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Caricamento orari... ");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_div_91_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "span", 29);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nessun turno disponibile per questa data ");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_div_91_select_43_ng_container_3_optgroup_1_option_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " - Non disponibile");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_div_91_select_43_ng_container_3_optgroup_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 116);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ReservationManager_div_91_select_43_ng_container_3_optgroup_1_option_1_span_2_Template, 2, 0, "span", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r16 = ctx.$implicit;
    \u0275\u0275property("value", time_r16.value)("disabled", time_r16.disabled)("title", time_r16.disabled ? time_r16.disabledReason : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", time_r16.display, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", time_r16.disabled);
  }
}
function ReservationManager_div_91_select_43_ng_container_3_optgroup_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 69);
    \u0275\u0275template(1, ReservationManager_div_91_select_43_ng_container_3_optgroup_1_option_1_Template, 3, 5, "option", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const shiftGroup_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.getShiftLabel(shiftGroup_r17.shift));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", shiftGroup_r17.times);
  }
}
function ReservationManager_div_91_select_43_ng_container_3_ng_container_2_option_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, " - Non disponibile");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_div_91_select_43_ng_container_3_ng_container_2_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 116);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ReservationManager_div_91_select_43_ng_container_3_ng_container_2_option_1_span_2_Template, 2, 0, "span", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r18 = ctx.$implicit;
    \u0275\u0275property("value", time_r18.value)("disabled", time_r18.disabled)("title", time_r18.disabled ? time_r18.disabledReason : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", time_r18.display, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", time_r18.disabled);
  }
}
function ReservationManager_div_91_select_43_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservationManager_div_91_select_43_ng_container_3_ng_container_2_option_1_Template, 3, 5, "option", 115);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const shiftGroup_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", shiftGroup_r17.times);
  }
}
function ReservationManager_div_91_select_43_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservationManager_div_91_select_43_ng_container_3_optgroup_1_Template, 2, 2, "optgroup", 68)(2, ReservationManager_div_91_select_43_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 66);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getAvailableTimesByShift().length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getAvailableTimesByShift().length === 1);
  }
}
function ReservationManager_div_91_select_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 113);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_select_43_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.reservation_time, $event) || (ctx_r1.newReservation.reservation_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReservationManager_div_91_select_43_ng_container_3_Template, 3, 2, "ng-container", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.reservation_time);
    \u0275\u0275property("disabled", ctx_r1.loadingTimes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAvailableTimesByShift().length > 1 ? "Seleziona un orario" : "Seleziona", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getAvailableTimesByShift());
  }
}
function ReservationManager_div_91_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "small")(2, "span", 100);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAvailableTimesSummary(), " ");
  }
}
function ReservationManager_div_91_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const num_r19 = ctx.$implicit;
    \u0275\u0275property("value", num_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", num_r19, " ", num_r19 === 1 ? "persona" : "persone", " ");
  }
}
function ReservationManager_div_91_optgroup_66_option_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2B50");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_div_91_optgroup_66_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ReservationManager_div_91_optgroup_66_option_1_span_2_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r20 = ctx.$implicit;
    \u0275\u0275property("ngValue", menu_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r20.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r20.is_default);
  }
}
function ReservationManager_div_91_optgroup_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 117);
    \u0275\u0275template(1, ReservationManager_div_91_optgroup_66_option_1_Template, 3, 3, "option", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.globalMenus);
  }
}
function ReservationManager_div_91_optgroup_67_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 77);
    \u0275\u0275text(3, "(dedicato)");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r21 = ctx.$implicit;
    \u0275\u0275property("ngValue", menu_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r21.name, " ");
  }
}
function ReservationManager_div_91_optgroup_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 119);
    \u0275\u0275template(1, ReservationManager_div_91_optgroup_67_option_1_Template, 4, 2, "option", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dedicatedMenus);
  }
}
function ReservationManager_div_91_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 121)(2, "span", 100);
    \u0275\u0275text(3, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 122);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 123);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Menu selezionato: ", ctx_r1.getSelectedMenuName(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedMenuType() === "global" ? "Globale" : "Dedicato", " ");
  }
}
function ReservationManager_div_91_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "button", 125);
    \u0275\u0275listener("click", function ReservationManager_div_91_div_73_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createNewDedicatedMenu());
    });
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Crea nuovo menu dedicato per questa prenotazione ");
    \u0275\u0275elementEnd()();
  }
}
function ReservationManager_div_91_optgroup_81_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", table_r23.id)("selected", table_r23.id === ctx_r1.newReservation.table_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", table_r23.table_name || "Tavolo " + table_r23.table_number, " (", table_r23.capacity, " posti) ");
  }
}
function ReservationManager_div_91_optgroup_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 126);
    \u0275\u0275template(1, ReservationManager_div_91_optgroup_81_option_1_Template, 2, 4, "option", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getTablesByExactCapacity(ctx_r1.newReservation.party_size));
  }
}
function ReservationManager_div_91_optgroup_82_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", table_r24.id)("selected", table_r24.id === ctx_r1.newReservation.table_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", table_r24.table_name || "Tavolo " + table_r24.table_number, " (", table_r24.capacity, " posti) ");
  }
}
function ReservationManager_div_91_optgroup_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 129);
    \u0275\u0275template(1, ReservationManager_div_91_optgroup_82_option_1_Template, 2, 4, "option", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getTablesByGreaterCapacity(ctx_r1.newReservation.party_size));
  }
}
function ReservationManager_div_91_option_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Nessun tavolo disponibile per ", ctx_r1.newReservation.party_size, " persone ");
  }
}
function ReservationManager_div_91_small_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Capacit\xE0 tavolo: ", ctx_r1.getSelectedTableCapacity(), " posti ");
  }
}
function ReservationManager_div_91_small_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2B50 Mostra tavoli con capacit\xE0 esatta per ", ctx_r1.newReservation.party_size, " persone ");
  }
}
function ReservationManager_div_91_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function ReservationManager_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "h2", 81)(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function ReservationManager_div_91_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateModal());
    });
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 82)(11, "div", 43);
    \u0275\u0275element(12, "lucide-angular", 83);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Stai creando una prenotazione per un cliente (registrato o nuovo)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 84)(16, "div", 3)(17, "label", 4);
    \u0275\u0275text(18, "Nome *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.customer_name, $event) || (ctx_r1.newReservation.customer_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 3)(21, "label", 4);
    \u0275\u0275text(22, "Cognome *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.customer_surname, $event) || (ctx_r1.newReservation.customer_surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 84)(25, "div", 3)(26, "label", 4);
    \u0275\u0275text(27, "Telefono *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.customer_phone, $event) || (ctx_r1.newReservation.customer_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 3)(30, "label", 4);
    \u0275\u0275text(31, "Email (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.customer_email, $event) || (ctx_r1.newReservation.customer_email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 84)(34, "div", 3)(35, "label", 4);
    \u0275\u0275text(36, "Data *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.reservation_date, $event) || (ctx_r1.newReservation.reservation_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ReservationManager_div_91_Template_input_change_37_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReservationDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 3)(39, "label", 4);
    \u0275\u0275text(40, "Ora *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, ReservationManager_div_91_div_41_Template, 4, 0, "div", 90)(42, ReservationManager_div_91_div_42_Template, 4, 0, "div", 91)(43, ReservationManager_div_91_select_43_Template, 4, 4, "select", 92)(44, ReservationManager_div_91_div_44_Template, 5, 1, "div", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 84)(46, "div", 3)(47, "label", 4);
    \u0275\u0275text(48, "Numero Persone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.party_size, $event) || (ctx_r1.newReservation.party_size = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(50, ReservationManager_div_91_option_50_Template, 2, 3, "option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 3)(52, "label", 4);
    \u0275\u0275text(53, "Stato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.status, $event) || (ctx_r1.newReservation.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(55, "option", 19);
    \u0275\u0275text(56, "Confermata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 20);
    \u0275\u0275text(58, "In attesa");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 84)(60, "div", 3)(61, "label", 4);
    \u0275\u0275text(62, "Menu Dedicato (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_select_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.menu_id, $event) || (ctx_r1.newReservation.menu_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(64, "option", 96);
    \u0275\u0275text(65, "Nessun menu dedicato");
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, ReservationManager_div_91_optgroup_66_Template, 2, 1, "optgroup", 97)(67, ReservationManager_div_91_optgroup_67_Template, 2, 1, "optgroup", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "small", 99)(69, "span", 100);
    \u0275\u0275text(70, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Se selezionato, questo menu sar\xE0 visibile solo per questa prenotazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, ReservationManager_div_91_div_72_Template, 8, 2, "div", 101)(73, ReservationManager_div_91_div_73_Template, 5, 0, "div", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 84)(75, "div", 3)(76, "label", 4);
    \u0275\u0275text(77, "Tavolo (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_select_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.table_id, $event) || (ctx_r1.newReservation.table_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(79, "option", 41);
    \u0275\u0275text(80, "Nessun tavolo assegnato");
    \u0275\u0275elementEnd();
    \u0275\u0275template(81, ReservationManager_div_91_optgroup_81_Template, 2, 1, "optgroup", 103)(82, ReservationManager_div_91_optgroup_82_Template, 2, 1, "optgroup", 104)(83, ReservationManager_div_91_option_83_Template, 2, 1, "option", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, ReservationManager_div_91_small_84_Template, 2, 1, "small", 105)(85, ReservationManager_div_91_small_85_Template, 2, 1, "small", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 9)(87, "div", 3)(88, "label", 4);
    \u0275\u0275text(89, "Richieste Speciali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "textarea", 106);
    \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_div_91_Template_textarea_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newReservation.special_requests, $event) || (ctx_r1.newReservation.special_requests = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 107)(92, "button", 108);
    \u0275\u0275listener("click", function ReservationManager_div_91_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateModal());
    });
    \u0275\u0275text(93, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 109);
    \u0275\u0275listener("click", function ReservationManager_div_91_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createReservation());
    });
    \u0275\u0275template(95, ReservationManager_div_91_span_95_Template, 2, 0, "span", 50);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "edit" : "add_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Modifica Prenotazione" : "Nuova Prenotazione Ristorante", " ");
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.customer_name);
    \u0275\u0275property("required", !ctx_r1.newReservation.customer_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.customer_surname);
    \u0275\u0275property("required", !ctx_r1.newReservation.customer_id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.customer_phone);
    \u0275\u0275property("required", !ctx_r1.newReservation.customer_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.customer_email);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.reservation_date);
    \u0275\u0275property("min", ctx_r1.getTodayDate());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingTimes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingTimes && ctx_r1.getAvailableTimesByShift().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingTimes && ctx_r1.getAvailableTimesByShift().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingTimes && ctx_r1.getAvailableTimesByShift().length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.party_size);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(35, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.status);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.menu_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasGlobalMenus());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasDedicatedMenus());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.newReservation.menu_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.table_id);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getTablesByExactCapacity(ctx_r1.newReservation.party_size).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTablesByGreaterCapacity(ctx_r1.newReservation.party_size).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTablesByExactCapacity(ctx_r1.newReservation.party_size).length === 0 && ctx_r1.getTablesByGreaterCapacity(ctx_r1.newReservation.party_size).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newReservation.table_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newReservation.table_id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReservation.special_requests);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.isFormValid() || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Aggiorna Prenotazione" : "Crea Prenotazione", " ");
  }
}
var ReservationManager = class _ReservationManager {
  reservationService = inject(ReservationService);
  tableService = inject(TableService);
  menuService = inject(MenuManagementService);
  floorManagementService = inject(FloorManagementService);
  subscriptions = new Subscription();
  // Stato componente
  allRestaurantReservations = [];
  filteredReservations = [];
  tables = [];
  tableGroups = [];
  loading = false;
  error = null;
  // Modal e form
  showCreateModal = false;
  newReservation = {
    restaurant_id: "",
    customer_name: "",
    customer_surname: "",
    customer_phone: "",
    customer_email: "",
    reservation_date: "",
    reservation_time: "19:00",
    party_size: 2,
    special_requests: "",
    table_id: void 0,
    status: "confirmed"
  };
  // Nuove proprietà per gestione orari
  loadingTimes = false;
  dateChangeSubject = new Subject();
  dateChangeSubscription;
  // Signal per caching degli orari
  cachedTimes = signal(/* @__PURE__ */ new Map());
  // Filtri
  selectedDate = null;
  startDate = null;
  endDate = null;
  statusFilter = "all";
  viewMode = "future";
  useDateFilter = false;
  useDateRangeFilter = false;
  shiftFilter = "all";
  // Menu assegnato
  availableMenus = [];
  // Modifica prenotazione
  isEditing = false;
  editingReservationId = null;
  // Nella classe ReservationManager, aggiungi:
  shiftService = inject(ShiftService);
  shifts = [];
  ngOnInit() {
    this.loadData();
    this.subscriptions.add(this.reservationService.restaurantReservations$.subscribe((reservations) => {
      this.allRestaurantReservations = reservations;
      this.filterReservations();
    }));
    this.subscriptions.add(this.shiftService.data$.subscribe((shifts) => {
      this.shifts = shifts;
      console.log("\u{1F504} Turni caricati:", shifts.length);
      this.cachedTimes.set(/* @__PURE__ */ new Map());
    }));
    this.dateChangeSubscription = this.dateChangeSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe(() => {
      this.updateAvailableTimes();
    });
    this.subscriptions.add(this.tableService.data$.subscribe((tables) => {
      this.tables = tables;
      console.log("Tavoli caricati:", tables.length);
    }));
    this.loadAvailableMenus();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.dateChangeSubscription?.unsubscribe();
  }
  loadData() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        yield this.reservationService.loadRestaurantReservations();
        yield this.shiftService.loadData();
        yield this.tableService.loadData();
        yield this.loadTablesGroupedByFloorPlan();
      } catch (error) {
        console.error("Error loading data:", error);
        this.error = "Errore nel caricamento dei dati";
      } finally {
        this.loading = false;
      }
    });
  }
  // 🔥 METODI PER GESTIRE I CHECKBOX
  onDateFilterToggle() {
    if (this.useDateFilter) {
      this.useDateRangeFilter = false;
    }
    this.filterReservations();
  }
  onDateRangeFilterToggle() {
    if (this.useDateRangeFilter) {
      this.useDateFilter = false;
    }
    this.filterReservations();
  }
  // Chiudi modal
  closeCreateModal() {
    this.showCreateModal = false;
    this.isEditing = false;
    this.editingReservationId = null;
  }
  // Crea nuova prenotazione come ristorante
  createReservation() {
    return __async(this, null, function* () {
      if (!this.isFormValid())
        return;
      this.loading = true;
      try {
        let result;
        if (this.isEditing && this.editingReservationId) {
          result = yield this.updateExistingReservation(this.editingReservationId, this.newReservation);
        } else {
          result = yield this.reservationService.createRestaurantReservation(this.newReservation);
        }
        if (result) {
          yield this.loadData();
          this.closeCreateModal();
          this.error = null;
          console.log("\u2705 Prenotazione salvata con successo");
        } else {
          this.error = "Errore durante il salvataggio della prenotazione";
        }
      } catch (error) {
        console.error("Error saving reservation:", error);
        this.error = error.message || "Errore durante il salvataggio della prenotazione";
      } finally {
        this.loading = false;
      }
    });
  }
  // Metodo per aggiornare una prenotazione esistente
  updateExistingReservation(reservationId, reservationData) {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F50D} DEBUG menu_id:", {
          original: reservationData.menu_id,
          type: typeof reservationData.menu_id
        });
        const updateData = {
          customer_name: reservationData.customer_name,
          customer_surname: reservationData.customer_surname,
          customer_phone: reservationData.customer_phone,
          customer_email: reservationData.customer_email,
          reservation_date: reservationData.reservation_date,
          reservation_time: reservationData.reservation_time,
          party_size: reservationData.party_size,
          special_requests: reservationData.special_requests,
          table_id: reservationData.table_id,
          status: reservationData.status
        };
        if (reservationData.customer_id) {
          updateData.customer_id = reservationData.customer_id;
        }
        if (reservationData.menu_id !== void 0) {
          if (reservationData.menu_id === "null" || reservationData.menu_id === "") {
            updateData.menu_id = null;
          } else {
            updateData.menu_id = reservationData.menu_id;
          }
        }
        console.log("\u{1F527} Dati di aggiornamento (con menu_id):", updateData);
        const success = yield this.reservationService.updateReservation(reservationId, updateData);
        if (success) {
          const updatedReservation = yield this.reservationService.getReservationWithMenu(reservationId);
          return updatedReservation;
        }
        return null;
      } catch (error) {
        console.error("Error updating reservation:", error);
        throw error;
      }
    });
  }
  // Valida form
  isFormValid() {
    if (this.newReservation.customer_id) {
      return !!(this.newReservation.customer_id && this.newReservation.reservation_date && this.newReservation.reservation_time && this.newReservation.party_size);
    }
    return !!(this.newReservation.customer_name && this.newReservation.customer_surname && this.newReservation.customer_phone && this.newReservation.reservation_date && this.newReservation.reservation_time && this.newReservation.party_size);
  }
  // Assegna tavolo - versione corretta con string
  assignTable(reservationId, tableId) {
    return __async(this, null, function* () {
      if (!tableId)
        return;
      this.loading = true;
      try {
        const success = yield this.floorManagementService.assignTableToReservation(reservationId, tableId);
        if (success) {
          yield this.reservationService.loadRestaurantReservations();
          console.log("\u2705 Tavolo assegnato e mappa aggiornata");
        } else {
          this.error = "Errore nell'assegnazione del tavolo";
        }
      } catch (error) {
        console.error("Error assigning table:", error);
        this.error = "Errore nell'assegnazione del tavolo";
      } finally {
        this.loading = false;
      }
    });
  }
  // Rimuovi assegnazione tavolo
  unassignTable(reservationId) {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        const success = yield this.floorManagementService.removeTableAssignment(reservationId);
        if (success) {
          yield this.reservationService.loadRestaurantReservations();
          console.log("\u2705 Assegnazione rimossa e mappa aggiornata");
        } else {
          this.error = "Errore nella rimozione del tavolo";
        }
      } catch (error) {
        console.error("Error unassigning table:", error);
        this.error = "Errore nella rimozione del tavolo";
      } finally {
        this.loading = false;
      }
    });
  }
  // Cambia stato prenotazione
  updateStatus(reservationId, status) {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        const success = yield this.reservationService.updateReservationStatus(reservationId, status);
        if (!success) {
          this.error = "Errore nell'aggiornamento dello stato";
        }
      } catch (error) {
        console.error("Error updating status:", error);
        this.error = "Errore nell'aggiornamento dello stato";
      } finally {
        this.loading = false;
      }
    });
  }
  // Elimina prenotazione
  deleteReservation(reservationId) {
    return __async(this, null, function* () {
      if (!confirm("Sei sicuro di voler eliminare questa prenotazione?")) {
        return;
      }
      this.loading = true;
      try {
        const success = yield this.reservationService.deleteReservation(reservationId);
        if (!success) {
          this.error = "Errore nell'eliminazione della prenotazione";
        }
      } catch (error) {
        console.error("Error deleting reservation:", error);
        this.error = "Errore nell'eliminazione della prenotazione";
      } finally {
        this.loading = false;
      }
    });
  }
  // Metodo aggiornato per ottenere la capacità del tavolo selezionato
  getSelectedTableCapacity() {
    if (!this.newReservation.table_id)
      return 0;
    for (const group of this.tableGroups) {
      const table2 = group.tables.find((t) => t.id === this.newReservation.table_id);
      if (table2)
        return table2.capacity;
    }
    const table = this.tables.find((t) => t.id === this.newReservation.table_id);
    if (table)
      return table.capacity;
    return 0;
  }
  // Utility methods
  formatTime(time) {
    return time.substring(0, 5);
  }
  // Aggiungi questo metodo per formattare la data
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  getCustomerName(reservation) {
    return this.reservationService.getCustomerName(reservation);
  }
  getCustomerContact(reservation) {
    return this.reservationService.getCustomerContact(reservation);
  }
  getTableName(reservation) {
    return this.reservationService.getTableInfo(reservation);
  }
  getStatusColor(status) {
    switch (status) {
      case "confirmed":
        return "active";
      case "pending":
        return "";
      case "cancelled":
        return "";
      default:
        return "";
    }
  }
  getStatusText(status) {
    switch (status) {
      case "confirmed":
        return "Confermata";
      case "pending":
        return "In attesa";
      case "cancelled":
        return "Cancellata";
      default:
        return status;
    }
  }
  // Genera orari disponibili
  getAvailableTimes() {
    return [
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30"
    ];
  }
  // Handler cambiamenti filtri
  onDateChange() {
    this.filterReservations();
  }
  onStatusFilterChange() {
    this.filterReservations();
  }
  onViewModeChange() {
    this.filterReservations();
  }
  // Ricarica dati
  refreshData() {
    this.loadData();
  }
  loadTablesGroupedByFloorPlan() {
    return __async(this, null, function* () {
      try {
        this.tableGroups = yield this.floorManagementService.getAllTablesGroupedByFloorPlan();
        console.log("Table groups:", this.tableGroups);
        if (!this.tableGroups || this.tableGroups.length === 0) {
          yield this.groupTablesManually();
        }
      } catch (error) {
        console.error("Error loading tables grouped by floor plan:", error);
        yield this.groupTablesManually();
      }
    });
  }
  groupTablesManually() {
    return __async(this, null, function* () {
      console.log("\u26A0\uFE0F Raggruppamento manuale dei tavoli...");
      const groupsMap = {};
      this.tables.forEach((table) => {
        const floorPlanId = table.floor_plan_id || "no-floor-plan";
        if (!groupsMap[floorPlanId]) {
          groupsMap[floorPlanId] = {
            floorPlan: {
              id: floorPlanId,
              name: `Mappa ${floorPlanId === "no-floor-plan" ? "senza nome" : floorPlanId}`
            },
            tables: []
          };
        }
        groupsMap[floorPlanId].tables.push(table);
      });
      this.tableGroups = Object.values(groupsMap);
      console.log("\u2705 Tavoli raggruppati manualmente:", this.tableGroups);
    });
  }
  // Metodo per ottenere tavoli filtrati per capacità
  getFilteredTables(partySize) {
    if (!this.tables || this.tables.length === 0) {
      return [];
    }
    const availableTables = this.tables.filter((table) => table.capacity >= partySize);
    return availableTables.sort((a, b) => {
      if (a.capacity === partySize && b.capacity !== partySize)
        return -1;
      if (a.capacity !== partySize && b.capacity === partySize)
        return 1;
      return a.capacity - b.capacity;
    });
  }
  // Metodo per ottenere tavoli raggruppati filtrati per capacità
  getFilteredTableGroups(partySize) {
    if (!this.tableGroups || this.tableGroups.length === 0) {
      return [];
    }
    return this.tableGroups.map((group) => {
      const filteredTables = group.tables.filter((table) => table.capacity >= partySize).sort((a, b) => {
        if (a.capacity === partySize && b.capacity !== partySize)
          return -1;
        if (a.capacity !== partySize && b.capacity === partySize)
          return 1;
        return a.capacity - b.capacity;
      });
      return __spreadProps(__spreadValues({}, group), {
        tables: filteredTables
      });
    }).filter((group) => group.tables.length > 0);
  }
  // Ottieni tavoli con capacità esatta
  getTablesByExactCapacity(partySize) {
    if (!this.tables || this.tables.length === 0) {
      return [];
    }
    return this.tables.filter((table) => table.capacity === partySize);
  }
  // Ottieni tavoli con capacità maggiore (ma non esatta)
  getTablesByGreaterCapacity(partySize) {
    if (!this.tables || this.tables.length === 0) {
      return [];
    }
    const allAvailableTables = this.tables.filter((table) => table.capacity >= partySize).sort((a, b) => a.capacity - b.capacity);
    const exactCapacityTables = this.getTablesByExactCapacity(partySize);
    const exactCapacityTableIds = new Set(exactCapacityTables.map((t) => t.id));
    return allAvailableTables.filter((table) => !exactCapacityTableIds.has(table.id));
  }
  // Metodo per ottenere tutti i tavoli disponibili (capacità >= partySize)
  getAllAvailableTables(partySize) {
    if (!this.tables || this.tables.length === 0) {
      return [];
    }
    return this.tables.filter((table) => table.capacity >= partySize).sort((a, b) => {
      if (a.capacity === partySize && b.capacity !== partySize)
        return -1;
      if (a.capacity !== partySize && b.capacity === partySize)
        return 1;
      return a.capacity - b.capacity;
    });
  }
  getCustomerFullName(reservation) {
    if (reservation.users) {
      return `${reservation.users.first_name || ""} ${reservation.users.last_name || ""}`.trim();
    }
    if (reservation.customer_name || reservation.customer_surname) {
      return `${reservation.customer_name || ""} ${reservation.customer_surname || ""}`.trim();
    }
    return "Cliente";
  }
  // Metodo per formattare l'ora per l'input (da "HH:MM:SS" a "HH:MM")
  formatTimeForInput(time) {
    if (!time)
      return "19:00";
    if (time.length > 5) {
      return time.substring(0, 5);
    }
    return time;
  }
  // Metodo per determinare il turno di una prenotazione
  getReservationShift(reservation) {
    if (!this.shifts || this.shifts.length === 0) {
      return "N/D";
    }
    const reservationDate = new Date(reservation.reservation_date);
    const reservationDay = reservationDate.getDay();
    const adjustedDay = reservationDay === 0 ? 7 : reservationDay;
    const reservationTime = reservation.reservation_time.substring(0, 5);
    const reservationSeconds = this.timeToSeconds(reservationTime);
    for (const shift of this.shifts) {
      if (!shift.is_active)
        continue;
      if (shift.days_of_week.includes(adjustedDay)) {
        const shiftStartSeconds = this.timeToSeconds(shift.start_time.substring(0, 5));
        const shiftEndSeconds = this.timeToSeconds(shift.end_time.substring(0, 5));
        if (reservationSeconds >= shiftStartSeconds && reservationSeconds <= shiftEndSeconds) {
          return shift.name;
        }
      }
    }
    return this.getClosestShift(reservationTime, adjustedDay) || "N/D";
  }
  // Metodo helper per convertire "HH:MM" in secondi
  timeToSeconds(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60;
  }
  // Metodo per trovare il turno più vicino (se la prenotazione è fuori orario)
  getClosestShift(reservationTime, dayOfWeek) {
    let closestShift = null;
    let minDiff = Infinity;
    const reservationSeconds = this.timeToSeconds(reservationTime);
    for (const shift of this.shifts) {
      if (!shift.is_active || !shift.days_of_week.includes(dayOfWeek))
        continue;
      const shiftStartSeconds = this.timeToSeconds(shift.start_time.substring(0, 5));
      const shiftEndSeconds = this.timeToSeconds(shift.end_time.substring(0, 5));
      const diffToStart = Math.abs(reservationSeconds - shiftStartSeconds);
      const diffToEnd = Math.abs(reservationSeconds - shiftEndSeconds);
      const minDiffForShift = Math.min(diffToStart, diffToEnd);
      if (minDiffForShift < minDiff) {
        minDiff = minDiffForShift;
        closestShift = shift;
      }
    }
    if (closestShift && minDiff <= 3600) {
      return `${closestShift.name} (\u2248)`;
    }
    return null;
  }
  // Aggiungi questo getter per ottenere i turni attivi
  get activeShifts() {
    return this.shifts.filter((shift) => shift.is_active);
  }
  // Aggiungi questo metodo per ottenere il nome del turno di una prenotazione (cached)
  getReservationShiftName(reservation) {
    return this.getReservationShift(reservation);
  }
  // Modifica filterReservations per includere il filtro turno
  filterReservations() {
    let filtered = this.allRestaurantReservations;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    switch (this.viewMode) {
      case "today":
        filtered = this.reservationService.getActiveReservations(filtered);
        break;
      case "future":
        filtered = this.reservationService.getFutureReservations(filtered);
        break;
      case "all":
        break;
    }
    if (this.useDateFilter && this.selectedDate) {
      filtered = filtered.filter((r) => r.reservation_date === this.selectedDate);
    }
    if (this.useDateRangeFilter && this.startDate && this.endDate) {
      filtered = filtered.filter((r) => r.reservation_date >= this.startDate && r.reservation_date <= this.endDate);
    }
    if (this.statusFilter !== "all") {
      filtered = filtered.filter((r) => r.status === this.statusFilter);
    }
    if (this.shiftFilter !== "all") {
      filtered = filtered.filter((r) => this.getReservationShiftName(r) === this.shiftFilter);
    }
    this.filteredReservations = filtered;
  }
  // Metodo per resettare tutti i filtri
  resetFilters() {
    this.viewMode = "future";
    this.selectedDate = null;
    this.startDate = null;
    this.endDate = null;
    this.statusFilter = "all";
    this.shiftFilter = "all";
    this.useDateFilter = false;
    this.useDateRangeFilter = false;
    this.filterReservations();
  }
  // Metodo per ottenere il conteggio dei filtri attivi
  getActiveFiltersInfo() {
    const count = this.getActiveFiltersCount();
    if (count === 1) {
      return { count, text: "1 filtro attivo" };
    } else if (count > 1) {
      return { count, text: `${count} filtri attivi` };
    } else {
      return { count: 0, text: "" };
    }
  }
  // Mantieni il vecchio metodo per compatibilità
  getActiveFiltersCount() {
    let count = 0;
    if (this.viewMode !== "future")
      count++;
    if (this.useDateFilter && this.selectedDate)
      count++;
    if (this.useDateRangeFilter && this.startDate && this.endDate)
      count++;
    if (this.statusFilter !== "all")
      count++;
    if (this.shiftFilter !== "all")
      count++;
    return count;
  }
  // Nel metodo di inizializzazione
  loadAvailableMenus() {
    return __async(this, null, function* () {
      try {
        yield this.menuService.loadData();
        this.availableMenus = (yield this.menuService.data$.pipe(take(1), map((menus) => menus.filter((menu) => menu.is_active))).toPromise()) || [];
        console.log("\u{1F4CB} Menu disponibili per assegnazione:", this.availableMenus.length);
      } catch (error) {
        console.error("\u274C Errore caricamento menu:", error);
        this.availableMenus = [];
      }
    });
  }
  // Aggiungi un metodo per creare menu dedicati (opzionale):
  createDedicatedMenuForReservation(reservationId, menuName) {
    return __async(this, null, function* () {
      try {
        console.log(`\u2795 Creazione menu dedicato per prenotazione ${reservationId}`);
        const dedicatedMenu = yield this.menuService.createDedicatedMenu(`${menuName} - Prenotazione ${reservationId.slice(0, 8)}`);
        if (!dedicatedMenu) {
          console.error("\u274C Errore creazione menu dedicato");
          return null;
        }
        console.log(`\u2705 Menu dedicato creato: ${dedicatedMenu.id}`);
        return dedicatedMenu.id;
      } catch (error) {
        console.error("\u274C Errore creazione menu dedicato:", error);
        return null;
      }
    });
  }
  getSelectedMenuName() {
    if (!this.newReservation.menu_id)
      return "Nessuno";
    const selectedMenu = this.availableMenus.find((menu) => menu.id === this.newReservation.menu_id);
    if (!selectedMenu)
      return "Menu non trovato";
    return selectedMenu.name;
  }
  // Aggiungi questo metodo per mostrare il menu nella lista prenotazioni
  getReservationMenuInfo(reservation) {
    if (!reservation.menu_id)
      return "";
    if (reservation.menus) {
      return reservation.menus.name;
    }
    const menu = this.availableMenus.find((m) => m.id === reservation.menu_id);
    return menu ? menu.name : "(menu dedicato)";
  }
  // Getter per menu globali
  get globalMenus() {
    if (!this.availableMenus || this.availableMenus.length === 0) {
      return [];
    }
    return this.availableMenus.filter((menu) => menu.type === "global");
  }
  // Getter per menu dedicati
  get dedicatedMenus() {
    if (!this.availableMenus || this.availableMenus.length === 0) {
      return [];
    }
    return this.availableMenus.filter((menu) => menu.type === "dedicated");
  }
  // Getter per verificare se ci sono menu globali
  hasGlobalMenus() {
    return this.globalMenus.length > 0;
  }
  // Getter per verificare se ci sono menu dedicati
  hasDedicatedMenus() {
    return this.dedicatedMenus.length > 0;
  }
  // Metodo per creare nuovo menu dedicato (mancante)
  createNewDedicatedMenu() {
    return __async(this, null, function* () {
      if (!this.editingReservationId) {
        alert("Devi essere in modalit\xE0 modifica per creare un menu dedicato");
        return;
      }
      const menuName = prompt("Nome del nuovo menu dedicato:");
      if (!menuName || menuName.trim() === "")
        return;
      try {
        const newMenu = yield this.menuService.createDedicatedMenu(`${menuName} - Prenotazione ${this.editingReservationId.slice(0, 8)}`, `Menu dedicato per la prenotazione ${this.editingReservationId.slice(0, 8)}`);
        if (newMenu) {
          yield this.loadAvailableMenus();
          this.newReservation.menu_id = newMenu.id;
          alert(`\u2705 Menu dedicato "${newMenu.name}" creato e assegnato!`);
        } else {
          alert("\u274C Errore nella creazione del menu dedicato");
        }
      } catch (error) {
        console.error("Errore creazione menu dedicato:", error);
        alert("\u274C Errore nella creazione del menu dedicato");
      }
    });
  }
  // Aggiungi questo metodo per ottenere il tipo del menu selezionato
  getSelectedMenuType() {
    if (!this.newReservation.menu_id)
      return null;
    const selectedMenu = this.availableMenus.find((menu) => menu.id === this.newReservation.menu_id);
    return selectedMenu?.type || null;
  }
  /**
   * Handler per cambio data
   */
  onReservationDateChange() {
    this.dateChangeSubject.next();
  }
  /**
   * Aggiorna gli orari disponibili per la data selezionata
   */
  updateAvailableTimes() {
    return __async(this, null, function* () {
      if (!this.newReservation.reservation_date) {
        return;
      }
      const cacheKey = this.newReservation.reservation_date;
      const cached = this.cachedTimes().get(cacheKey);
      if (cached) {
        console.log("\u26A1 Orari dalla cache per", cacheKey);
        return;
      }
      this.loadingTimes = true;
      try {
        const shiftGroups = this.calculateAvailableTimesForDate(this.newReservation.reservation_date);
        const newCache = new Map(this.cachedTimes());
        newCache.set(cacheKey, shiftGroups);
        this.cachedTimes.set(newCache);
        this.validateAndResetSelectedTime(shiftGroups);
        console.log("\u2705 Orari calcolati per", cacheKey, ":", shiftGroups);
      } catch (error) {
        console.error("\u274C Errore calcolo orari:", error);
      } finally {
        this.loadingTimes = false;
      }
    });
  }
  /**
   * Calcola gli orari disponibili per una data specifica
   */
  calculateAvailableTimesForDate(dateString) {
    if (!dateString || !this.shifts?.length) {
      return [];
    }
    const selectedDate = new Date(dateString);
    const dayOfWeek = selectedDate.getDay();
    const adjustedDay = dayOfWeek === 0 ? 7 : dayOfWeek;
    const activeShifts = this.shifts.filter((shift) => shift.is_active && shift.days_of_week.includes(adjustedDay));
    if (activeShifts.length === 0) {
      return [];
    }
    return activeShifts.map((shift) => {
      const times = this.generateTimeSlotsForShift(shift);
      return {
        shift,
        times
      };
    });
  }
  /**
   * Genera tutti gli orari disponibili per un turno
   */
  generateTimeSlotsForShift(shift) {
    const times = [];
    const startTime = shift.start_time.substring(0, 5);
    const endTime = shift.end_time.substring(0, 5);
    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);
    const effectiveEndMinutes = endMinutes < startMinutes ? endMinutes + 24 * 60 : endMinutes;
    const interval = shift.interval_minutes || 30;
    for (let minutes = startMinutes; minutes < effectiveEndMinutes; minutes += interval) {
      const actualMinutes = minutes % (24 * 60);
      const timeString = this.minutesToTime(actualMinutes);
      times.push({
        value: timeString,
        display: timeString,
        shiftId: shift.id
      });
    }
    return times;
  }
  /**
   * Ottiene gli orari raggruppati per turno (con cache)
   */
  getAvailableTimesByShift() {
    if (!this.newReservation.reservation_date) {
      return [];
    }
    const cacheKey = this.newReservation.reservation_date;
    const cached = this.cachedTimes().get(cacheKey);
    return cached || [];
  }
  /**
   * Valida e resetta l'orario selezionato se non è più valido
   */
  validateAndResetSelectedTime(shiftGroups) {
    if (!this.newReservation.reservation_time) {
      return;
    }
    const isValid = shiftGroups.some((group) => group.times.some((time) => time.value === this.newReservation.reservation_time && !time.disabled));
    if (!isValid) {
      this.newReservation.reservation_time = "";
    }
  }
  /**
   * Helper: converte "HH:MM" in minuti dalla mezzanotte
   */
  timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
  /**
   * Helper: converte minuti in "HH:MM"
   */
  minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
  }
  /**
   * Ottiene l'etichetta per un turno (per optgroup)
   */
  getShiftLabel(shift) {
    const start = shift.start_time.substring(0, 5);
    const end = shift.end_time.substring(0, 5);
    return `${shift.name} (${start} - ${end})`;
  }
  /**
   * Ottiene un sommario dei turni disponibili
   */
  getAvailableTimesSummary() {
    const groups = this.getAvailableTimesByShift();
    if (groups.length === 0) {
      return "Nessun turno disponibile";
    }
    if (groups.length === 1) {
      const shift = groups[0].shift;
      return `Turno ${shift.name}: ${shift.start_time.substring(0, 5)} - ${shift.end_time.substring(0, 5)}`;
    }
    const shiftNames = groups.map((g) => g.shift.name).join(", ");
    return `${groups.length} turni disponibili: ${shiftNames}`;
  }
  /**
   * Ottiene la data di oggi in formato YYYY-MM-DD
   */
  getTodayDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  /**
   * Quando si apre il modal, calcola subito gli orari
   */
  openCreateModal() {
    this.newReservation = {
      restaurant_id: "",
      customer_name: "",
      customer_surname: "",
      customer_phone: "",
      customer_email: "",
      reservation_date: this.selectedDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      reservation_time: "",
      // Non impostiamo default
      party_size: 2,
      special_requests: "",
      table_id: void 0,
      status: "confirmed"
    };
    this.showCreateModal = true;
    setTimeout(() => {
      this.updateAvailableTimes();
    }, 100);
  }
  /**
   * Quando si modifica, calcola gli orari per la data della prenotazione
   */
  openEditModal(reservation) {
    this.isEditing = true;
    this.editingReservationId = reservation.id;
    this.newReservation = {
      restaurant_id: reservation.restaurant_id || "",
      customer_name: reservation.customer_name || "",
      customer_surname: reservation.customer_surname || "",
      customer_phone: reservation.customer_phone || "",
      customer_email: reservation.customer_email || "",
      reservation_date: reservation.reservation_date,
      reservation_time: this.formatTimeForInput(reservation.reservation_time),
      party_size: reservation.party_size,
      special_requests: reservation.special_requests || "",
      table_id: reservation.table_id || void 0,
      status: reservation.status,
      customer_id: reservation.customer_id || void 0,
      menu_id: reservation.menu_id || void 0
    };
    this.showCreateModal = true;
    setTimeout(() => {
      this.updateAvailableTimes();
    }, 100);
  }
  static \u0275fac = function ReservationManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationManager)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationManager, selectors: [["app-reservation-manager"]], decls: 92, vars: 18, consts: [["tableSelect", ""], [1, "page-container"], ["data-tutorial", "reservation-filters", 1, "form-card", "mb-lg"], [1, "form-group"], [1, "standard-label"], [1, "p-sm", 3, "ngModelChange", "change", "ngModel"], ["value", "today"], ["value", "future"], ["value", "all"], [1, "form-row"], [1, "flex", "align-center", "gap-sm"], ["type", "checkbox", "id", "dateFilter", 3, "ngModelChange", "change", "ngModel"], ["for", "dateFilter", 1, "standard-label"], ["type", "date", 1, "p-sm", 2, "max-width", "fit-content", 3, "ngModelChange", "change", "ngModel", "disabled"], ["type", "checkbox", "id", "dateRangeFilter", 3, "ngModelChange", "change", "ngModel"], ["for", "dateRangeFilter", 1, "standard-label"], [1, "flex", "gap-sm", "flex-wrap"], ["type", "date", "placeholder", "Da", 1, "p-sm", 2, "max-width", "fit-content", 3, "ngModelChange", "change", "ngModel", "disabled"], ["type", "date", "placeholder", "A", 1, "p-sm", 2, "max-width", "fit-content", 3, "ngModelChange", "change", "ngModel", "disabled"], ["value", "confirmed"], ["value", "pending"], ["value", "cancelled"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "N/D"], [1, "w-100", "flex", 2, "justify-content", "end"], ["data-tutorial", "reservation-add", 1, "modal-footer", 2, "max-width", "max-content"], ["class", "filter-badge", 4, "ngIf"], [1, "flex", "gap-sm"], ["title", "Resetta filtri", 1, "icon-button", 3, "click"], [1, "material-icons"], ["title", "Aggiorna", 1, "icon-button", 3, "click"], [1, "promethea-button", 3, "click"], ["name", "plus", 3, "size"], ["class", "info-message mb-lg", 4, "ngIf"], ["data-tutorial", "reservation-table", 1, "table-section", "p-sm"], [1, "crm-table", "custom-widths"], [2, "text-align", "center"], [1, "material-icons", "text-md"], [4, "ngFor", "ngForOf"], ["class", "empty-state p-lg", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "value"], [1, "filter-badge"], [1, "info-message", "mb-lg"], [1, "icon-button", 3, "click"], [1, "flex", "gap-sm", "justify-between", "flex-wrap", "items-center"], ["class", "text-mini text-muted", 4, "ngIf"], [1, "chip", "text-mini", 2, "max-width", "fit-content"], [1, "flex", "gap-sm", "flex-col", "items-center", "flex-wrap"], [1, "flex", "gap-sm", "items-center"], ["class", "material-icons", 4, "ngIf"], ["class", "flex", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "gap-sm"], ["class", "flex gap-sm", 4, "ngIf"], ["class", "icon-button", "title", "Rimuovi tavolo", 3, "click", 4, "ngIf"], [1, "chip"], ["class", "icon-button", "title", "Conferma", 3, "click", 4, "ngIf"], ["class", "icon-button", "title", "Metti in attesa", 3, "click", 4, "ngIf"], ["title", "Modifica", 1, "icon-button", 3, "click"], ["title", "Elimina", 1, "icon-button", 3, "click"], ["name", "trash-2", 3, "size"], [1, "text-mini", "text-muted"], [1, "flex"], ["style", "max-width: fit-content;", "class", "text-mini x-small custom-select", 3, "change", 4, "ngIf"], [1, "text-mini", "x-small", "custom-select", 2, "max-width", "fit-content", 3, "change"], ["value", ""], [4, "ngIf"], ["disabled", "", 4, "ngIf"], [3, "label", 4, "ngIf"], [3, "label"], [3, "value", "title", 4, "ngFor", "ngForOf"], [3, "value", "title"], ["disabled", ""], ["title", "Rimuovi tavolo", 1, "icon-button", 3, "click"], ["title", "Conferma", 1, "icon-button", 3, "click"], ["title", "Metti in attesa", 1, "icon-button", 3, "click"], [1, "empty-state", "p-lg"], [1, "text-muted"], [1, "modal-overlay"], [1, "modal-container", "modal-lg"], [1, "modal-header"], [1, "section-title"], [1, "form-card"], ["name", "info"], [1, "form-row", "mb-md"], ["type", "text", "placeholder", "Inserisci nome", 1, "p-sm", 3, "ngModelChange", "ngModel", "required"], ["type", "text", "placeholder", "Inserisci cognome", 1, "p-sm", 3, "ngModelChange", "ngModel", "required"], ["type", "tel", "placeholder", "Inserisci telefono", 1, "p-sm", 3, "ngModelChange", "ngModel", "required"], ["type", "email", "placeholder", "Inserisci email", 1, "p-sm", 3, "ngModelChange", "ngModel"], ["type", "date", "required", "", 1, "p-sm", 3, "ngModelChange", "change", "ngModel", "min"], ["class", "loading-indicator", 4, "ngIf"], ["class", "alert warning", 4, "ngIf"], ["class", "p-sm", "required", "", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["class", "text-muted mt-sm", 4, "ngIf"], ["required", "", 1, "p-sm", 3, "ngModelChange", "ngModel"], [1, "p-sm", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["label", "Menu globali (visibili a tutti)", 4, "ngIf"], ["label", "Menu dedicati esistenti", 4, "ngIf"], [1, "text-muted", "mt-sm"], [1, "material-icons", "text-mini"], ["class", "mt-sm p-sm bg-smoke rounded", 4, "ngIf"], ["class", "mt-sm", 4, "ngIf"], ["label", "Tavoli con capacit\xE0 esatta \u2B50", 4, "ngIf"], ["label", "Tavoli con capacit\xE0 maggiore", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["placeholder", "Note o richieste speciali del cliente...", "rows", "3", 1, "p-sm", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "promethea-button", "ghost", 3, "click"], [1, "promethea-button", 3, "click", "disabled"], [1, "loading-indicator"], [1, "material-icons", "rotating"], [1, "alert", "warning"], ["required", "", 1, "p-sm", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", "disabled", "", "selected", ""], [3, "value", "disabled", "title", 4, "ngFor", "ngForOf"], [3, "value", "disabled", "title"], ["label", "Menu globali (visibili a tutti)"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["label", "Menu dedicati esistenti"], [1, "mt-sm", "p-sm", "bg-smoke", "rounded"], [1, "flex", "items-center", "gap-sm"], [1, "text-mini", "font-semibold"], [1, "chip", "bg-glass", "ml-auto"], [1, "mt-sm"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["label", "Tavoli con capacit\xE0 esatta \u2B50"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], ["label", "Tavoli con capacit\xE0 maggiore"]], template: function ReservationManager_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "label", 4);
      \u0275\u0275text(4, "Visualizza");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.viewMode, $event) || (ctx.viewMode = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_select_change_5_listener() {
        return ctx.filterReservations();
      });
      \u0275\u0275elementStart(6, "option", 6);
      \u0275\u0275text(7, "Oggi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "option", 7);
      \u0275\u0275text(9, "Prenotazioni Future");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 8);
      \u0275\u0275text(11, "Tutte le Prenotazioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 3)(14, "div", 10)(15, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.useDateFilter, $event) || (ctx.useDateFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_input_change_15_listener() {
        return ctx.onDateFilterToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "label", 12);
      \u0275\u0275text(17, "Data specifica");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_input_change_18_listener() {
        return ctx.filterReservations();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 3)(20, "div", 10)(21, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.useDateRangeFilter, $event) || (ctx.useDateRangeFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_input_change_21_listener() {
        return ctx.onDateRangeFilterToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "label", 15);
      \u0275\u0275text(23, "Intervallo date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 16)(25, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_input_change_25_listener() {
        return ctx.filterReservations();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_input_change_26_listener() {
        return ctx.filterReservations();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 3)(29, "label", 4);
      \u0275\u0275text(30, "Stato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_select_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_select_change_31_listener() {
        return ctx.filterReservations();
      });
      \u0275\u0275elementStart(32, "option", 8);
      \u0275\u0275text(33, "Tutti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 19);
      \u0275\u0275text(35, "Confermate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 20);
      \u0275\u0275text(37, "In attesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 21);
      \u0275\u0275text(39, "Cancellate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 3)(41, "label", 4);
      \u0275\u0275text(42, "Turno");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationManager_Template_select_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.shiftFilter, $event) || (ctx.shiftFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReservationManager_Template_select_change_43_listener() {
        return ctx.filterReservations();
      });
      \u0275\u0275elementStart(44, "option", 8);
      \u0275\u0275text(45, "Tutti i turni");
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, ReservationManager_option_46_Template, 2, 4, "option", 22);
      \u0275\u0275elementStart(47, "option", 23);
      \u0275\u0275text(48, "Fuori orario");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 25);
      \u0275\u0275template(51, ReservationManager_span_51_Template, 2, 1, "span", 26);
      \u0275\u0275elementStart(52, "div", 27)(53, "button", 28);
      \u0275\u0275listener("click", function ReservationManager_Template_button_click_53_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275elementStart(54, "span", 29);
      \u0275\u0275text(55, "filter_alt_off");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "button", 30);
      \u0275\u0275listener("click", function ReservationManager_Template_button_click_56_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementStart(57, "span", 29);
      \u0275\u0275text(58, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "button", 31);
      \u0275\u0275listener("click", function ReservationManager_Template_button_click_59_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275element(60, "lucide-angular", 32);
      \u0275\u0275text(61, " Nuova Prenotazione ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(62, ReservationManager_div_62_Template, 7, 1, "div", 33);
      \u0275\u0275elementStart(63, "div", 34)(64, "table", 35)(65, "thead")(66, "tr")(67, "th");
      \u0275\u0275text(68, "Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th");
      \u0275\u0275text(70, "Ora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th");
      \u0275\u0275text(72, "Cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 36)(74, "span", 37);
      \u0275\u0275text(75, "phone_enabled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "th", 36)(77, "span", 37);
      \u0275\u0275text(78, "groups");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "th", 36)(80, "span", 37);
      \u0275\u0275text(81, "table_restaurant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Stato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th");
      \u0275\u0275text(85, "Turno");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th");
      \u0275\u0275text(87, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "tbody");
      \u0275\u0275template(89, ReservationManager_tr_89_Template, 42, 24, "tr", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(90, ReservationManager_div_90_Template, 5, 0, "div", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275template(91, ReservationManager_div_91_Template, 97, 36, "div", 40);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.viewMode);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.useDateFilter);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDate);
      \u0275\u0275property("disabled", !ctx.useDateFilter);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.useDateRangeFilter);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275property("disabled", !ctx.useDateRangeFilter);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275property("disabled", !ctx.useDateRangeFilter);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.shiftFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.activeShifts);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.getActiveFiltersInfo().count > 0);
      \u0275\u0275advance(9);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(27);
      \u0275\u0275property("ngForOf", ctx.filteredReservations);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredReservations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCreateModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\nselect[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: var(--smoke-1);\n  padding: var(--gap-sm);\n  border-bottom: 1px solid var(--smoke-2);\n}\nselect[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding-left: var(--gap-sm);\n  background-color: var(--background);\n}\nselect[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {\n  background-color: var(--smoke-1);\n}\nselect[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled {\n  font-style: italic;\n  background-color: var(--smoke-1);\n}\nselect[_ngcontent-%COMP%]:focus   optgroup[_ngcontent-%COMP%] {\n  background-color: var(--smoke-1);\n}\n.filter-badge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n  border-radius: 12px;\n}\n.custom-select[_ngcontent-%COMP%] {\n  max-width: fit-content !important;\n  min-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.custom-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.custom-select[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 8%;\n  min-width: 90px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 6%;\n  min-width: 70px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 25%;\n  min-width: 250px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 8%;\n  min-width: 80px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  width: 6%;\n  min-width: 70px;\n  text-align: center;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  width: 15%;\n  min-width: 150px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n  width: 12%;\n  min-width: 120px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n  width: 10%;\n  min-width: 100px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(9), \n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(9) {\n  width: 10%;\n  min-width: 140px;\n  text-align: center;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--gap-sm) calc(var(--gap-sm) / 2);\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  padding: var(--gap-sm);\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3)   .flex-col[_ngcontent-%COMP%] {\n  gap: 4px;\n}\n.crm-table.custom-widths[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3)   strong[_ngcontent-%COMP%] {\n  white-space: normal;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=reservation-manager.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationManager, [{
    type: Component,
    args: [{ selector: "app-reservation-manager", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- Controlli e Filtri -->\r
  <div class="form-card mb-lg" data-tutorial="reservation-filters">\r
\r
      <!-- Selezione Vista -->\r
      <div class="form-group">\r
        <label class="standard-label">Visualizza</label>\r
        <select [(ngModel)]="viewMode" (change)="filterReservations()" class="p-sm">\r
          <option value="today">Oggi</option>\r
          <option value="future">Prenotazioni Future</option>\r
          <option value="all">Tutte le Prenotazioni</option>\r
        </select>\r
      </div>\r
    <div class="form-row">\r
      <!-- \u{1F525} FILTRO PER DATA SPECIFICA (checkbox + input) -->\r
      <div class="form-group">\r
        <div class="flex align-center gap-sm">\r
          <input type="checkbox" id="dateFilter"          \r
          [(ngModel)]="useDateFilter" (change)="onDateFilterToggle()">\r
          <label for="dateFilter" class="standard-label">Data specifica</label>\r
        </div>\r
        <input type="date" \r
        style="max-width: fit-content;" \r
        [(ngModel)]="selectedDate" (change)="filterReservations()" [disabled]="!useDateFilter"\r
          class="p-sm">\r
      </div>\r
\r
      <!-- \u{1F525} FILTRO PER RANGE DI DATE (checkbox + due input) -->\r
      <div class="form-group">\r
        <div class="flex align-center gap-sm">\r
          <input type="checkbox" id="dateRangeFilter" \r
          [(ngModel)]="useDateRangeFilter"\r
            (change)="onDateRangeFilterToggle()">\r
          <label for="dateRangeFilter" class="standard-label">Intervallo date</label>\r
        </div>\r
        <div class="flex gap-sm flex-wrap">\r
          <input type="date" \r
          style="max-width: fit-content;"\r
          [(ngModel)]="startDate" (change)="filterReservations()" [disabled]="!useDateRangeFilter"\r
            placeholder="Da" class="p-sm">\r
          <input type="date" \r
          style="max-width: fit-content;"\r
          [(ngModel)]="endDate" (change)="filterReservations()" [disabled]="!useDateRangeFilter"\r
            placeholder="A" class="p-sm">\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <!-- Filtro Stato -->\r
      <div class="form-group">\r
        <label class="standard-label">Stato</label>\r
        <select [(ngModel)]="statusFilter" (change)="filterReservations()" class="p-sm">\r
          <option value="all">Tutti</option>\r
          <option value="confirmed">Confermate</option>\r
          <option value="pending">In attesa</option>\r
          <option value="cancelled">Cancellate</option>\r
        </select>\r
      </div>\r
      <!-- Filtro per Turno -->\r
      <div class="form-group">\r
        <label class="standard-label">Turno</label>\r
        <select \r
          [(ngModel)]="shiftFilter" \r
          (change)="filterReservations()"\r
          class="p-sm">\r
          <option value="all">Tutti i turni</option>\r
          <option *ngFor="let shift of activeShifts" [value]="shift.name">\r
            {{ shift.name }} ({{ shift.start_time.substring(0,5) }} - {{ shift.end_time.substring(0,5) }})\r
          </option>\r
          <option value="N/D">Fuori orario</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
  </div>\r
  <!-- Pulsanti Azione -->\r
  <div class="w-100 flex" style="justify-content: end;">\r
  <div class="modal-footer" \r
  style="max-width: max-content;"\r
  data-tutorial="reservation-add">\r
    <span *ngIf="getActiveFiltersInfo().count > 0" class="filter-badge">\r
      {{ getActiveFiltersInfo().text }}\r
    </span>\r
    <div class="flex gap-sm">\r
      <button \r
        class="icon-button" \r
        (click)="resetFilters()"\r
        title="Resetta filtri">\r
        <span class="material-icons">filter_alt_off</span>\r
      </button>\r
      <button class="icon-button" (click)="refreshData()" title="Aggiorna">\r
        <span class="material-icons">refresh</span>\r
      </button>\r
      <button class="promethea-button" (click)="openCreateModal()">\r
        <lucide-angular name="plus" [size]="20"></lucide-angular>\r
        Nuova Prenotazione\r
      </button>\r
    </div>\r
  </div>\r
  </div>\r
  <!-- Messaggio di errore -->\r
  <div *ngIf="error" class="info-message mb-lg">\r
    <span class="material-icons">error</span>\r
    {{ error }}\r
    <button class="icon-button" (click)="error = null">\r
      <span class="material-icons">close</span>\r
    </button>\r
  </div>\r
\r
  <!-- Tabella prenotazioni -->\r
  <div class="table-section p-sm" data-tutorial="reservation-table">\r
    <table class="crm-table custom-widths">\r
      <thead>\r
        <tr>\r
          <th>Data</th>\r
          <th>Ora</th>\r
          <th>Cliente</th>\r
          <th style="text-align: center;"><span class="material-icons text-md">phone_enabled</span></th>\r
          <th style="text-align: center;"><span class="material-icons text-md">groups</span></th>\r
          <th style="text-align: center;"><span class="material-icons text-md">table_restaurant</span></th>\r
          <th>Stato</th>\r
          <th>Turno</th>\r
          <th>Azioni</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let reservation of filteredReservations">\r
          <td>{{ formatDate(reservation.reservation_date) }}</td>\r
\r
          <td>{{ formatTime(reservation.reservation_time) }}</td>\r
          <td>\r
            <div class="flex gap-sm justify-between flex-wrap items-center">\r
              <strong>{{ getCustomerFullName(reservation) }}</strong>\r
              <div *ngIf="reservation.customer_email" class="text-mini text-muted">\r
                {{ reservation.customer_email }}\r
              </div>\r
                <span class="chip text-mini" [class.active]="reservation.customer_id"\r
                style="max-width: fit-content;">\r
                  {{ reservation.customer_id ? 'Cliente Registrato' : 'Nuovo Cliente' }}\r
                </span>\r
            </div>\r
          </td>\r
          <td>{{ getCustomerContact(reservation) }}</td>\r
          <td>{{ reservation.party_size }}</td>\r
          <td>\r
            <div class="flex gap-sm flex-col items-center flex-wrap">\r
              <div class="flex gap-sm items-center">\r
              <div *ngIf="getReservationMenuInfo(reservation)" \r
              class="material-icons">restaurant_menu</div>\r
                <span *ngIf="getReservationMenuInfo(reservation)" class="flex">\r
                  {{ getReservationMenuInfo(reservation) }}\r
                </span>\r
              </div>\r
            <div class="flex justify-between items-center gap-sm">\r
              <span>{{ getTableName(reservation) }}</span>\r
              <!-- CAMBIA: usa una condizione che funzioni sempre -->\r
              <div class="flex gap-sm" *ngIf="tables.length > 0 || tableGroups.length > 0">\r
                <select *ngIf="!reservation.table_id" #tableSelect\r
                  (change)="assignTable(reservation.id, tableSelect.value)" \r
                  style="max-width: fit-content;"\r
                  class="text-mini x-small custom-select">\r
                  <option value="">Assegna tavolo...</option>\r
\r
                  <!-- PRIMA: se ci sono tableGroups raggruppati, mostra per mappa -->\r
                  <ng-container *ngIf="tableGroups && tableGroups.length > 0">\r
                    <ng-container *ngFor="let group of getFilteredTableGroups(reservation.party_size)">\r
                      <optgroup *ngIf="group.tables && group.tables.length > 0" [label]="group.floorPlan.name">\r
                        <option *ngFor="let table of group.tables" [value]="table.id"\r
                          [title]="'Capacit\xE0: ' + table.capacity + ' posti'">\r
                          {{ table.table_name || 'Tavolo ' + table.table_number }}\r
                          ({{ table.capacity }} posti)\r
                          {{ table.capacity === reservation.party_size ? '\u2B50' : '' }}\r
                        </option>\r
                      </optgroup>\r
                    </ng-container>\r
                  </ng-container>\r
\r
                  <!-- ALTRIMENTI: mostra i tavoli normalmente (senza raggruppamento) -->\r
                  <ng-container *ngIf="(!tableGroups || tableGroups.length === 0) && tables.length > 0">\r
                    <option *ngFor="let table of getFilteredTables(reservation.party_size)" [value]="table.id">\r
                      {{ table.table_name || 'Tavolo ' + table.table_number }}\r
                      ({{ table.capacity }} posti)\r
                      {{ table.capacity === reservation.party_size ? '\u2B50' : '' }}\r
                    </option>\r
                  </ng-container>\r
\r
                  <!-- Se non ci sono tavoli -->\r
                  <option *ngIf="tables.length === 0 && tableGroups.length === 0" disabled>\r
                    Nessun tavolo disponibile\r
                  </option>\r
                </select>\r
\r
\r
              </div>\r
              <!-- Messaggio se non ci sono tavoli -->\r
              <span *ngIf="tables.length === 0 && tableGroups.length === 0" class="text-mini text-muted">\r
                Nessun tavolo\r
              </span>\r
              <button *ngIf="reservation.table_id" (click)="unassignTable(reservation.id)" class="icon-button"\r
                title="Rimuovi tavolo">\r
                <span class="material-icons">close</span>\r
              </button>\r
            </div>\r
\r
            </div>\r
          </td>\r
          <td>\r
            <span class="chip" [class.active]="getStatusColor(reservation.status)">\r
              {{ getStatusText(reservation.status) }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="chip" [class.active]="getReservationShift(reservation) !== 'N/D'">\r
              {{ getReservationShift(reservation) }}\r
            </span>\r
          </td>\r
          <td>\r
            <div class="flex gap-sm">\r
              <!-- Cambia Stato -->\r
              <button *ngIf="reservation.status !== 'confirmed'" (click)="updateStatus(reservation.id, 'confirmed')"\r
                class="icon-button" title="Conferma">\r
                <span class="material-icons">check</span>\r
              </button>\r
              <button *ngIf="reservation.status !== 'pending'" (click)="updateStatus(reservation.id, 'pending')"\r
                class="icon-button" title="Metti in attesa">\r
                <span class="material-icons">schedule</span>\r
              </button>\r
\r
              <!-- Modifica -->\r
              <button (click)="openEditModal(reservation)" class="icon-button" title="Modifica">\r
                <span class="material-icons">edit</span>\r
              </button>\r
\r
              <!-- Elimina -->\r
              <button (click)="deleteReservation(reservation.id)" class="icon-button" title="Elimina">\r
                <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Stato vuoto -->\r
    <div *ngIf="filteredReservations.length === 0" class="empty-state p-lg">\r
      <span class="material-icons">event_busy</span>\r
      <p class="text-muted">Nessuna prenotazione trovata con i filtri selezionati</p>\r
    </div>\r
  </div>\r
\r
  <!-- Modal Creazione Prenotazione -->\r
  <div *ngIf="showCreateModal" class="modal-overlay">\r
    <div class="modal-container modal-lg">\r
      <div class="modal-header">\r
        <h2 class="section-title">\r
          <span class="material-icons">{{ isEditing ? 'edit' : 'add_circle' }}</span>\r
          {{ isEditing ? 'Modifica Prenotazione' : 'Nuova Prenotazione Ristorante' }}\r
        </h2>\r
        <button class="icon-button" (click)="closeCreateModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="form-card">\r
        <div class="info-message mb-lg">\r
          <lucide-angular name="info"></lucide-angular>\r
          <span>Stai creando una prenotazione per un cliente (registrato o nuovo)</span>\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">Nome *</label>\r
            <input type="text" [(ngModel)]="newReservation.customer_name" placeholder="Inserisci nome" class="p-sm"\r
              [required]="!newReservation.customer_id">\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Cognome *</label>\r
            <input type="text" [(ngModel)]="newReservation.customer_surname" placeholder="Inserisci cognome"\r
              class="p-sm" [required]="!newReservation.customer_id">\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">Telefono *</label>\r
            <input type="tel" [(ngModel)]="newReservation.customer_phone" placeholder="Inserisci telefono" class="p-sm"\r
              [required]="!newReservation.customer_id">\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Email (opzionale)</label>\r
            <input type="email" [(ngModel)]="newReservation.customer_email" placeholder="Inserisci email" class="p-sm">\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">Data *</label>\r
            <input type="date" \r
                  [(ngModel)]="newReservation.reservation_date" \r
                  (change)="onReservationDateChange()"\r
                  [min]="getTodayDate()"\r
                  class="p-sm" \r
                  required>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Ora *</label>\r
            \r
            <!-- Stato di caricamento -->\r
            <div *ngIf="loadingTimes" class="loading-indicator">\r
              <span class="material-icons rotating">refresh</span>\r
              Caricamento orari...\r
            </div>\r
            \r
            <!-- Nessun turno disponibile -->\r
            <div *ngIf="!loadingTimes && getAvailableTimesByShift().length === 0" \r
                class="alert warning">\r
              <span class="material-icons">warning</span>\r
              Nessun turno disponibile per questa data\r
            </div>\r
            \r
            <!-- Dropdown con turni -->\r
            <select *ngIf="!loadingTimes && getAvailableTimesByShift().length > 0"\r
                    [(ngModel)]="newReservation.reservation_time" \r
                    class="p-sm" \r
                    required\r
                    [disabled]="loadingTimes">\r
              \r
              <!-- Opzione vuota -->\r
              <option value="" disabled selected>\r
                {{ getAvailableTimesByShift().length > 1 ? 'Seleziona un orario' : 'Seleziona' }}\r
              </option>\r
              \r
              <!-- Raggruppamento per turno -->\r
              <ng-container *ngFor="let shiftGroup of getAvailableTimesByShift()">\r
                \r
                <!-- Se ci sono pi\xF9 turni, usa optgroup -->\r
                <optgroup *ngIf="getAvailableTimesByShift().length > 1"\r
                          [label]="getShiftLabel(shiftGroup.shift)">\r
                  <option *ngFor="let time of shiftGroup.times" \r
                          [value]="time.value"\r
                          [disabled]="time.disabled"\r
                          [title]="time.disabled ? time.disabledReason : ''">\r
                    {{ time.display }}\r
                    <span *ngIf="time.disabled" class="text-muted"> - Non disponibile</span>\r
                  </option>\r
                </optgroup>\r
                \r
                <!-- Se c'\xE8 un solo turno, mostra senza optgroup -->\r
                <ng-container *ngIf="getAvailableTimesByShift().length === 1">\r
                  <option *ngFor="let time of shiftGroup.times" \r
                          [value]="time.value"\r
                          [disabled]="time.disabled"\r
                          [title]="time.disabled ? time.disabledReason : ''">\r
                    {{ time.display }}\r
                    <span *ngIf="time.disabled" class="text-muted"> - Non disponibile</span>\r
                  </option>\r
                </ng-container>\r
              </ng-container>\r
            </select>\r
            \r
            <!-- Info sui turni disponibili -->\r
            <div *ngIf="!loadingTimes && getAvailableTimesByShift().length > 0" \r
                class="text-muted mt-sm">\r
              <small>\r
                <span class="material-icons text-mini">info</span>\r
                {{ getAvailableTimesSummary() }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">Numero Persone *</label>\r
            <select [(ngModel)]="newReservation.party_size" class="p-sm" required>\r
              <option *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]" [value]="num">\r
                {{ num }} {{ num === 1 ? 'persona' : 'persone' }}\r
              </option>\r
            </select>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Stato</label>\r
            <select [(ngModel)]="newReservation.status" class="p-sm">\r
              <option value="confirmed">Confermata</option>\r
              <option value="pending">In attesa</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
<div class="form-row mb-md">\r
  <div class="form-group">\r
    <label class="standard-label">Menu Dedicato (opzionale)</label>\r
    \r
    <select [(ngModel)]="newReservation.menu_id" class="p-sm">\r
      <option [ngValue]="null">Nessun menu dedicato</option>\r
      \r
      <!-- Separatore per menu globali -->\r
      <optgroup *ngIf="hasGlobalMenus()" \r
                label="Menu globali (visibili a tutti)">\r
        <option *ngFor="let menu of globalMenus" \r
                [ngValue]="menu.id">\r
          {{ menu.name }} \r
          <span *ngIf="menu.is_default">\u2B50</span>\r
        </option>\r
      </optgroup>\r
      \r
      <!-- Separatore per menu dedicati esistenti -->\r
      <optgroup *ngIf="hasDedicatedMenus()" \r
                label="Menu dedicati esistenti">\r
        <option *ngFor="let menu of dedicatedMenus" \r
                [ngValue]="menu.id">\r
          {{ menu.name }} \r
          <span class="text-muted">(dedicato)</span>\r
        </option>\r
      </optgroup>\r
    </select>\r
    \r
    <!-- Informazioni aggiuntive -->\r
    <small class="text-muted mt-sm">\r
      <span class="material-icons text-mini">info</span>\r
      Se selezionato, questo menu sar\xE0 visibile solo per questa prenotazione\r
    </small>\r
    \r
    <!-- Mostra informazioni sul menu selezionato -->\r
    <div *ngIf="newReservation.menu_id" class="mt-sm p-sm bg-smoke rounded">\r
      <div class="flex items-center gap-sm">\r
        <span class="material-icons text-mini">restaurant_menu</span>\r
        <span class="text-mini font-semibold">\r
          Menu selezionato: {{ getSelectedMenuName() }}\r
        </span>\r
        <span class="chip bg-glass ml-auto">\r
          {{ getSelectedMenuType() === 'global' ? 'Globale' : 'Dedicato' }}\r
        </span>\r
      </div>\r
    </div>\r
    \r
    <!-- Opzione per creare nuovo menu dedicato -->\r
    <div *ngIf="isEditing" class="mt-sm">\r
      <button type="button" class="promethea-button ghost" \r
              (click)="createNewDedicatedMenu()">\r
        <span class="material-icons">add_circle</span>\r
        Crea nuovo menu dedicato per questa prenotazione\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
        <div class="form-row mb-md">\r
          <div class="form-group">\r
            <label class="standard-label">Tavolo (opzionale)</label>\r
            <select [(ngModel)]="newReservation.table_id" class="p-sm">\r
              <option [value]="undefined">Nessun tavolo assegnato</option>\r
\r
              <!-- PRIMA: Tavoli con capacit\xE0 esatta -->\r
              <optgroup *ngIf="getTablesByExactCapacity(newReservation.party_size).length > 0"\r
                label="Tavoli con capacit\xE0 esatta \u2B50">\r
                <option *ngFor="let table of getTablesByExactCapacity(newReservation.party_size)" [value]="table.id"\r
                  [selected]="table.id === newReservation.table_id">\r
                  {{ table.table_name || 'Tavolo ' + table.table_number }} ({{ table.capacity }} posti)\r
                </option>\r
              </optgroup>\r
\r
              <!-- POI: Tavoli con capacit\xE0 maggiore (>= partySize) -->\r
              <optgroup *ngIf="getTablesByGreaterCapacity(newReservation.party_size).length > 0"\r
                label="Tavoli con capacit\xE0 maggiore">\r
                <option *ngFor="let table of getTablesByGreaterCapacity(newReservation.party_size)" [value]="table.id"\r
                  [selected]="table.id === newReservation.table_id">\r
                  {{ table.table_name || 'Tavolo ' + table.table_number }} ({{ table.capacity }} posti)\r
                </option>\r
              </optgroup>\r
\r
              <!-- Se non ci sono tavoli disponibili -->\r
              <option *ngIf="getTablesByExactCapacity(newReservation.party_size).length === 0 && \r
                            getTablesByGreaterCapacity(newReservation.party_size).length === 0" disabled>\r
                Nessun tavolo disponibile per {{ newReservation.party_size }} persone\r
              </option>\r
            </select>\r
\r
            <small class="text-muted" *ngIf="newReservation.table_id">\r
              Capacit\xE0 tavolo: {{ getSelectedTableCapacity() }} posti\r
            </small>\r
            <small class="text-muted" *ngIf="!newReservation.table_id">\r
              \u2B50 Mostra tavoli con capacit\xE0 esatta per {{ newReservation.party_size }} persone\r
            </small>\r
          </div>\r
        </div>\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label class="standard-label">Richieste Speciali</label>\r
            <textarea [(ngModel)]="newReservation.special_requests"\r
              placeholder="Note o richieste speciali del cliente..." rows="3" class="p-sm"></textarea>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button class="promethea-button ghost" (click)="closeCreateModal()">\r
          Annulla\r
        </button>\r
        <button class="promethea-button" (click)="createReservation()" [disabled]="!isFormValid() || loading">\r
          <span *ngIf="loading" class="material-icons">refresh</span>\r
          {{ isEditing ? 'Aggiorna Prenotazione' : 'Crea Prenotazione' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/reservation/reservation-manager/reservation-manager.css */\nselect optgroup {\n  font-weight: 600;\n  background-color: var(--smoke-1);\n  padding: var(--gap-sm);\n  border-bottom: 1px solid var(--smoke-2);\n}\nselect optgroup option {\n  font-weight: normal;\n  padding-left: var(--gap-sm);\n  background-color: var(--background);\n}\nselect optgroup option:hover {\n  background-color: var(--smoke-1);\n}\nselect optgroup option:disabled {\n  font-style: italic;\n  background-color: var(--smoke-1);\n}\nselect:focus optgroup {\n  background-color: var(--smoke-1);\n}\n.filter-badge {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n  border-radius: 12px;\n}\n.custom-select {\n  max-width: fit-content !important;\n  min-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.custom-select option {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.custom-select optgroup {\n  max-width: 200px;\n}\n.crm-table.custom-widths th:nth-child(1),\n.crm-table.custom-widths td:nth-child(1) {\n  width: 8%;\n  min-width: 90px;\n}\n.crm-table.custom-widths th:nth-child(2),\n.crm-table.custom-widths td:nth-child(2) {\n  width: 6%;\n  min-width: 70px;\n}\n.crm-table.custom-widths th:nth-child(3),\n.crm-table.custom-widths td:nth-child(3) {\n  width: 25%;\n  min-width: 250px;\n}\n.crm-table.custom-widths th:nth-child(4),\n.crm-table.custom-widths td:nth-child(4) {\n  width: 8%;\n  min-width: 80px;\n}\n.crm-table.custom-widths th:nth-child(5),\n.crm-table.custom-widths td:nth-child(5) {\n  width: 6%;\n  min-width: 70px;\n  text-align: center;\n}\n.crm-table.custom-widths th:nth-child(6),\n.crm-table.custom-widths td:nth-child(6) {\n  width: 15%;\n  min-width: 150px;\n}\n.crm-table.custom-widths th:nth-child(7),\n.crm-table.custom-widths td:nth-child(7) {\n  width: 12%;\n  min-width: 120px;\n}\n.crm-table.custom-widths th:nth-child(8),\n.crm-table.custom-widths td:nth-child(8) {\n  width: 10%;\n  min-width: 100px;\n}\n.crm-table.custom-widths th:nth-child(9),\n.crm-table.custom-widths td:nth-child(9) {\n  width: 10%;\n  min-width: 140px;\n  text-align: center;\n}\n.crm-table.custom-widths td {\n  padding: var(--gap-sm) calc(var(--gap-sm) / 2);\n}\n.crm-table.custom-widths td:nth-child(3) {\n  padding: var(--gap-sm);\n}\n.crm-table.custom-widths td:nth-child(3) .flex-col {\n  gap: 4px;\n}\n.crm-table.custom-widths td:nth-child(3) strong {\n  white-space: normal;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=reservation-manager.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationManager, { className: "ReservationManager", filePath: "src/app/restaurant/reservation/reservation-manager/reservation-manager.ts", lineNumber: 33 });
})();
export {
  ReservationManager
};
//# sourceMappingURL=chunk-CEVV6WKB.js.map
