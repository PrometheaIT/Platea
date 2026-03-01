import {
  FloorPlanService
} from "./chunk-PV6E5C74.js";
import {
  TableService
} from "./chunk-ZPOZGJCN.js";
import {
  BreakpointObserver,
  Breakpoints
} from "./chunk-RMKOUF2K.js";
import "./chunk-TZX4E46J.js";
import {
  RestaurantPublicService
} from "./chunk-HZVXIAAV.js";
import {
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
} from "./chunk-PVOVUO2H.js";
import "./chunk-G2WSKIFL.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService
} from "./chunk-6SNKM7Z6.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Subscription,
  ViewChild,
  combineLatest,
  inject,
  map,
  setClassMetadata,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/customer/restaurant/restaurant-map-viewer/restaurant-map-viewer.ts
var _c0 = ["floorPlanCanvas"];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function RestaurantMapViewer_div_0_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_0_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.authService.toggleSidebar());
    });
    \u0275\u0275element(1, "lucide-icon", 46);
    \u0275\u0275elementEnd();
  }
}
function RestaurantMapViewer_div_0_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.restaurant.logo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.restaurant.name);
  }
}
function RestaurantMapViewer_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function RestaurantMapViewer_div_0_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.restaurant.additional_info == null ? null : ctx_r2.restaurant.additional_info.cuisine_types == null ? null : ctx_r2.restaurant.additional_info.cuisine_types.join(", "), " ");
  }
}
function RestaurantMapViewer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 33);
    \u0275\u0275template(2, RestaurantMapViewer_div_0_button_2_Template, 2, 0, "button", 38);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275template(5, RestaurantMapViewer_div_0_img_5_Template, 1, 2, "img", 40)(6, RestaurantMapViewer_div_0_span_6_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 42)(8, "h1", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RestaurantMapViewer_div_0_p_10_Template, 2, 1, "p", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r2.restaurant.cover_image_url ? "url(" + ctx_r2.restaurant.cover_image_url + ")" : "var(--vetro)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 7, ctx_r2.showToggle$));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.restaurant.logo_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.restaurant.logo_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.restaurant.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.additional_info == null ? null : ctx_r2.restaurant.additional_info.cuisine_types);
  }
}
function RestaurantMapViewer_div_2_div_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.restaurant.description, " ");
  }
}
function RestaurantMapViewer_div_2_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59)(1, "span", 32);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.restaurant.address, " ");
  }
}
function RestaurantMapViewer_div_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59)(1, "span", 32);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.restaurant.phone, " ");
  }
}
function RestaurantMapViewer_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, RestaurantMapViewer_div_2_div_1_p_1_Template, 2, 1, "p", 50);
    \u0275\u0275elementStart(2, "div", 57);
    \u0275\u0275template(3, RestaurantMapViewer_div_2_div_1_span_3_Template, 4, 1, "span", 58)(4, RestaurantMapViewer_div_2_div_1_span_4_Template, 4, 1, "span", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.restaurant.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.phone);
  }
}
function RestaurantMapViewer_div_2_div_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r2.tables.length, " tavoli) ");
  }
}
function RestaurantMapViewer_div_2_div_9_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", plan_r5.name === "Sala Grande" ? "7" : plan_r5.name === "Sala Piccola" ? "5" : "6", " tavoli) ");
  }
}
function RestaurantMapViewer_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_2_div_9_Template_div_click_0_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectFloorPlan(plan_r5));
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RestaurantMapViewer_div_2_div_9_span_6_Template, 2, 1, "span", 63)(7, RestaurantMapViewer_div_2_div_9_span_7_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", (ctx_r2.currentFloorPlan == null ? null : ctx_r2.currentFloorPlan.id) === plan_r5.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(plan_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r5.id === (ctx_r2.currentFloorPlan == null ? null : ctx_r2.currentFloorPlan.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r5.id !== (ctx_r2.currentFloorPlan == null ? null : ctx_r2.currentFloorPlan.id));
  }
}
function RestaurantMapViewer_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, RestaurantMapViewer_div_2_div_1_Template, 5, 3, "div", 50);
    \u0275\u0275elementStart(2, "div", 51)(3, "div", 52)(4, "span", 7);
    \u0275\u0275text(5, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 53);
    \u0275\u0275text(7, "Seleziona Area");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275template(9, RestaurantMapViewer_div_2_div_9_Template, 8, 5, "div", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.floorPlans);
  }
}
function RestaurantMapViewer_div_46_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 12);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantMapViewer_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_46_Template_div_click_0_listener() {
      const table_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTableClick(table_r7));
    });
    \u0275\u0275elementStart(1, "div", 66)(2, "div", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RestaurantMapViewer_div_46_div_6_Template, 3, 0, "div", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r2.getTableStyle(table_r7));
    \u0275\u0275classMap(ctx_r2.getTableClass(table_r7));
    \u0275\u0275property("title", ctx_r2.getTableTooltip(table_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(table_r7.table_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r7.capacity, " p");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTableReserved(table_r7));
  }
}
function RestaurantMapViewer_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "span", 12);
    \u0275\u0275text(3, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 73);
    \u0275\u0275text(5, "Nessun tavolo configurato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7, "Il ristorante non ha ancora configurato i tavoli per questa area");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantMapViewer_div_58_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 12);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "span", 15);
    \u0275\u0275text(5, "Tavolo Prenotato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7, " Questo tavolo \xE8 gi\xE0 prenotato per l'orario selezionato ");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantMapViewer_div_58_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 12);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "span", 15);
    \u0275\u0275text(5, "Disponibile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7, " Tavolo disponibile per la prenotazione ");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantMapViewer_div_58_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 12);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "span", 15);
    \u0275\u0275text(5, "Non prenotabile online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7, " Questo tavolo non \xE8 prenotabile online ");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantMapViewer_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deselectTable());
    });
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 76)(3, "div", 33)(4, "span", 12);
    \u0275\u0275text(5, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 77);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 78);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_58_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deselectTable());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 79)(12, "div", 80)(13, "div", 81)(14, "label", 82);
    \u0275\u0275text(15, "Capacit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 83)(17, "span", 84);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 64);
    \u0275\u0275text(20, "persone");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 81)(22, "label", 82);
    \u0275\u0275text(23, "Nome Tavolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 85);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 81)(27, "label", 82);
    \u0275\u0275text(28, "Forma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 86);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, RestaurantMapViewer_div_58_div_31_Template, 8, 0, "div", 87)(32, RestaurantMapViewer_div_58_div_32_Template, 8, 0, "div", 87)(33, RestaurantMapViewer_div_58_div_33_Template, 8, 0, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 88)(35, "button", 89);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_58_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deselectTable());
    });
    \u0275\u0275elementStart(36, "span", 12);
    \u0275\u0275text(37, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Chiudi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 90);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_58_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openReservationModal());
    });
    \u0275\u0275elementStart(41, "span", 12);
    \u0275\u0275text(42, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Prenota Questo Tavolo");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Tavolo ", ctx_r2.selectedTable.table_number, "");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.selectedTable.capacity);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedTable.table_name || "N/D", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedTable.shape, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTableReserved(ctx_r2.selectedTable));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isTableReserved(ctx_r2.selectedTable) && ctx_r2.selectedTable.is_online_bookable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedTable.is_online_bookable);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.isTableReserved(ctx_r2.selectedTable) || !ctx_r2.selectedTable.is_online_bookable);
  }
}
function RestaurantMapViewer_div_59_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 12);
    \u0275\u0275text(2, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Stai prenotando: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Tavolo ", ctx_r2.selectedTable.table_number, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r2.selectedTable.capacity, " persone)");
  }
}
function RestaurantMapViewer_div_59_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r10 = ctx.$implicit;
    \u0275\u0275property("value", time_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", time_r10, " ");
  }
}
function RestaurantMapViewer_div_59_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const num_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", num_r11)("disabled", ctx_r2.selectedTable ? num_r11 > ctx_r2.selectedTable.capacity : false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", num_r11, " ", num_r11 === 1 ? "persona" : "persone", " ");
  }
}
function RestaurantMapViewer_div_59_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "span", 12);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Tavolo disponibile per la data e ora selezionate");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantMapViewer_div_59_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Tavolo non disponibile per la data e ora selezionate");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantMapViewer_div_59_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275template(1, RestaurantMapViewer_div_59_div_30_div_1_Template, 5, 0, "div", 104)(2, RestaurantMapViewer_div_59_div_30_div_2_Template, 5, 0, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTableAvailable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isTableAvailable);
  }
}
function RestaurantMapViewer_div_59_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "h3", 115);
    \u0275\u0275text(2, "Dati Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 96)(4, "div", 81)(5, "label", 82);
    \u0275\u0275text(6, "Nome *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantMapViewer_div_59_div_31_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.restaurantReservationData.customer_name, $event) || (ctx_r2.restaurantReservationData.customer_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 81)(9, "label", 82);
    \u0275\u0275text(10, "Telefono *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantMapViewer_div_59_div_31_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.restaurantReservationData.customer_phone, $event) || (ctx_r2.restaurantReservationData.customer_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 81)(13, "label", 82);
    \u0275\u0275text(14, "Email (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantMapViewer_div_59_div_31_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.restaurantReservationData.customer_email, $event) || (ctx_r2.restaurantReservationData.customer_email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.restaurantReservationData.customer_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.restaurantReservationData.customer_phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.restaurantReservationData.customer_email);
  }
}
function RestaurantMapViewer_div_59_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275element(1, "lucide-angular", 119);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Prenotazione a nome di: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.currentUser.user_metadata == null ? null : ctx_r2.currentUser.user_metadata.first_name, " ", ctx_r2.currentUser.user_metadata == null ? null : ctx_r2.currentUser.user_metadata.last_name, "");
  }
}
function RestaurantMapViewer_div_59_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function RestaurantMapViewer_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "div", 76)(3, "h2", 43)(4, "span", 12);
    \u0275\u0275text(5, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Prenota Tavolo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 94);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_59_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeReservationModal());
    });
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 95);
    \u0275\u0275template(11, RestaurantMapViewer_div_59_div_11_Template, 8, 2, "div", 87);
    \u0275\u0275elementStart(12, "div", 96)(13, "div", 81)(14, "label", 82);
    \u0275\u0275text(15, "Data *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantMapViewer_div_59_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customerReservationData.reservation_date, $event) || (ctx_r2.customerReservationData.reservation_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RestaurantMapViewer_div_59_Template_input_change_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.syncReservationData();
      return \u0275\u0275resetView(ctx_r2.onDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 81)(18, "label", 82);
    \u0275\u0275text(19, "Ora *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 98);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantMapViewer_div_59_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customerReservationData.reservation_time, $event) || (ctx_r2.customerReservationData.reservation_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RestaurantMapViewer_div_59_Template_select_change_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.syncReservationData();
      return \u0275\u0275resetView(ctx_r2.onTimeChange());
    });
    \u0275\u0275elementStart(21, "option", 99);
    \u0275\u0275text(22, "Seleziona orario");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, RestaurantMapViewer_div_59_option_23_Template, 2, 2, "option", 100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 96)(25, "div", 81)(26, "label", 82);
    \u0275\u0275text(27, "Numero Persone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 98);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantMapViewer_div_59_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customerReservationData.party_size, $event) || (ctx_r2.customerReservationData.party_size = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RestaurantMapViewer_div_59_Template_select_change_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.syncReservationData());
    });
    \u0275\u0275template(29, RestaurantMapViewer_div_59_option_29_Template, 2, 4, "option", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, RestaurantMapViewer_div_59_div_30_Template, 3, 2, "div", 102)(31, RestaurantMapViewer_div_59_div_31_Template, 16, 3, "div", 103)(32, RestaurantMapViewer_div_59_div_32_Template, 6, 3, "div", 104);
    \u0275\u0275elementStart(33, "div", 105)(34, "label", 82);
    \u0275\u0275text(35, "Richieste Speciali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "textarea", 106);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantMapViewer_div_59_Template_textarea_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customerReservationData.special_requests, $event) || (ctx_r2.customerReservationData.special_requests = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function RestaurantMapViewer_div_59_Template_textarea_input_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.syncReservationData());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 88)(38, "button", 89);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_59_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeReservationModal());
    });
    \u0275\u0275text(39, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 107);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_59_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createReservation());
    });
    \u0275\u0275template(41, RestaurantMapViewer_div_59_span_41_Template, 2, 0, "span", 41);
    \u0275\u0275text(42, " Conferma Prenotazione ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.selectedTable);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customerReservationData.reservation_date);
    \u0275\u0275property("min", ctx_r2.minDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customerReservationData.reservation_time);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.availableTimes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customerReservationData.party_size);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.availabilityChecked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.currentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentUser);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customerReservationData.special_requests);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.isTableAvailable || ctx_r2.creatingReservation || !ctx_r2.customerReservationData.reservation_date || !ctx_r2.customerReservationData.reservation_time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.creatingReservation);
  }
}
function RestaurantMapViewer_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_60_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmationModal());
    });
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_60_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 120)(3, "div", 121)(4, "span", 122);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 123);
    \u0275\u0275text(7, "Prenotazione Confermata!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 124);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 125)(11, "div", 126)(12, "strong");
    \u0275\u0275text(13, "Numero prenotazione:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 127)(16, "strong");
    \u0275\u0275text(17, "Stato:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 128);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 88)(21, "button", 129);
    \u0275\u0275listener("click", function RestaurantMapViewer_div_60_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmationModal());
    });
    \u0275\u0275elementStart(22, "span", 12);
    \u0275\u0275text(23, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Ok, Grazie ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate3(" La tua prenotazione per il tavolo ", ctx_r2.lastReservation == null ? null : ctx_r2.lastReservation.tables == null ? null : ctx_r2.lastReservation.tables.table_number, " \xE8 stata confermata per il ", ctx_r2.formatDate(ctx_r2.lastReservation == null ? null : ctx_r2.lastReservation.reservation_date), " alle ", ctx_r2.lastReservation == null ? null : ctx_r2.lastReservation.reservation_time, ". ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.lastReservation == null ? null : ctx_r2.lastReservation.id.slice(-8).toUpperCase(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.lastReservation == null ? null : ctx_r2.lastReservation.status);
  }
}
var RestaurantMapViewer = class _RestaurantMapViewer {
  route = inject(ActivatedRoute);
  router = inject(Router);
  floorPlanService = inject(FloorPlanService);
  tableService = inject(TableService);
  reservationService = inject(ReservationService);
  restaurantPublicService = inject(RestaurantPublicService);
  authService = inject(AuthService);
  breakpointObserver = inject(BreakpointObserver);
  canvasRef;
  // Dati
  restaurant = null;
  floorPlans = [];
  currentFloorPlan = null;
  tables = [];
  reservations = [];
  // Stato UI
  selectedTable = null;
  showReservationModal = false;
  showConfirmationModal = false;
  creatingReservation = false;
  // Dati prenotazione
  customerReservationData = {
    restaurant_id: "",
    table_id: "",
    reservation_date: "",
    reservation_time: "",
    party_size: 2,
    special_requests: ""
  };
  restaurantReservationData = {
    restaurant_id: "",
    customer_name: "",
    customer_phone: "",
    reservation_date: "",
    reservation_time: "",
    party_size: 2,
    special_requests: "",
    table_id: void 0,
    status: "pending"
  };
  // Proprietà per lo zoom
  zoomLevel = 1;
  minZoom = 0.5;
  maxZoom = 3;
  isDragging = false;
  dragStart = { x: 0, y: 0 };
  canvasPosition = { x: 0, y: 0 };
  // Disponibilità
  availableTimes = [];
  isTableAvailable = false;
  availabilityChecked = false;
  // Utente corrente
  currentUser = null;
  lastReservation = null;
  // Configurazione
  minDate;
  today;
  isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.TabletPortrait]).pipe(map((result) => result.matches));
  showToggle$ = combineLatest([
    this.isMobile$,
    this.authService.sidebarCollapsed$
  ]).pipe(map(([isMobile, collapsed]) => isMobile && collapsed));
  subscriptions = new Subscription();
  restaurantId = "";
  constructor() {
    const today = /* @__PURE__ */ new Date();
    this.minDate = today.toISOString().split("T")[0];
    this.today = this.minDate;
    this.customerReservationData.reservation_date = this.minDate;
    this.restaurantReservationData.reservation_date = this.minDate;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("\u{1F504} RestaurantMapViewer initialized");
      this.route.params.subscribe((params) => {
        this.restaurantId = params["restaurantId"];
        console.log("\u{1F3EA} Restaurant ID from route:", this.restaurantId);
        if (this.restaurantId) {
          this.loadRestaurantData();
        } else {
          console.error("\u274C No restaurantId found in route params");
        }
      });
      this.subscriptions.add(this.authService.currentUser$.subscribe((user) => {
        this.currentUser = user;
        if (user) {
          this.restaurantReservationData.customer_name = `${user.first_name || ""} ${user.last_name || ""}`.trim();
          this.restaurantReservationData.customer_phone = user.phone || "";
        }
      }));
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadRestaurantData() {
    return __async(this, null, function* () {
      console.log("\u{1F4E5} Loading restaurant data for ID:", this.restaurantId);
      this.restaurant = yield this.restaurantPublicService.loadRestaurant(this.restaurantId);
      if (!this.restaurant) {
        console.error("\u274C Restaurant not found");
        return;
      }
      this.customerReservationData.restaurant_id = this.restaurantId;
      this.restaurantReservationData.restaurant_id = this.restaurantId;
      yield this.loadFloorPlans();
      yield this.loadReservationsForToday();
    });
  }
  loadFloorPlans() {
    return __async(this, null, function* () {
      try {
        const { data: floorPlans, error } = yield this.floorPlanService["supabaseService"].getSupabaseClient().from("restaurant_floor_plans").select("*").eq("restaurant_id", this.restaurantId).eq("is_active", true).order("created_at", { ascending: true });
        if (error)
          throw error;
        this.floorPlans = floorPlans || [];
        if (this.floorPlans.length > 0) {
          this.currentFloorPlan = this.floorPlans[0];
          yield this.loadTablesForCurrentFloorPlan();
        }
      } catch (error) {
        console.error("\u274C Error loading floor plans:", error);
      }
    });
  }
  loadTablesForCurrentFloorPlan() {
    return __async(this, null, function* () {
      if (!this.currentFloorPlan)
        return;
      console.log("\u{1F50D} Loading tables for floor plan:", {
        floorPlanId: this.currentFloorPlan.id,
        floorPlanName: this.currentFloorPlan.name,
        currentVersion: this.currentFloorPlan.current_version
      });
      try {
        const { data: tables, error } = yield this.tableService["supabaseService"].getSupabaseClient().from("tables").select("*").eq("floor_plan_id", this.currentFloorPlan.id).eq("is_active", true).eq("version", this.currentFloorPlan.current_version).order("table_number", { ascending: true });
        if (error) {
          console.error("\u274C Errore query tavoli:", error);
          this.tables = [];
          return;
        }
        const visibleTables = (tables || []).filter((table) => table.parent_table_id === null && !table.is_merged);
        console.log("\u{1F4CA} RISULTATI TAVOLI (solo versione pubblicata):", {
          tavoliTotaliNelDB: tables?.length || 0,
          tavoliVisibili: visibleTables.length,
          floorPlan: this.currentFloorPlan.name,
          currentVersion: this.currentFloorPlan.current_version
        });
        this.tables = visibleTables;
      } catch (error) {
        console.error("\u{1F4A5} Errore nel caricamento tavoli:", error);
        this.tables = [];
      }
    });
  }
  loadReservationsForToday() {
    return __async(this, null, function* () {
      try {
        const { data: reservations, error } = yield this.reservationService["supabaseService"].getSupabaseClient().from("reservations").select("*").eq("restaurant_id", this.restaurantId).eq("reservation_date", this.today).in("status", ["pending", "confirmed"]);
        if (error)
          throw error;
        this.reservations = reservations || [];
        console.log("\u{1F4C5} Prenotazioni per oggi:", this.reservations.length);
      } catch (error) {
        console.error("\u274C Error loading reservations:", error);
      }
    });
  }
  selectFloorPlan(plan) {
    return __async(this, null, function* () {
      console.log("\u{1F4CD} Selezionato floor plan:", plan.name);
      this.currentFloorPlan = plan;
      yield this.loadTablesForCurrentFloorPlan();
      this.deselectTable();
      this.resetZoom();
    });
  }
  // INTERAZIONI TAVOLI
  onTableClick(table) {
    if (!table.is_online_bookable) {
      console.log("\u274C Table not available for online booking:", table.table_number);
      alert("Questo tavolo non \xE8 prenotabile online");
      return;
    }
    if (this.isTableReserved(table)) {
      console.log("\u274C Table already reserved:", table.table_number);
      alert("Questo tavolo \xE8 gi\xE0 prenotato per la data e ora selezionate");
      return;
    }
    this.selectedTable = table;
    this.customerReservationData.table_id = table.id;
    this.restaurantReservationData.table_id = table.id;
    this.customerReservationData.party_size = Math.min(2, table.capacity);
    this.restaurantReservationData.party_size = Math.min(2, table.capacity);
    this.loadAvailableTimes();
  }
  deselectTable() {
    this.selectedTable = null;
    this.customerReservationData.table_id = "";
    this.restaurantReservationData.table_id = void 0;
    this.availabilityChecked = false;
    this.isTableAvailable = false;
  }
  isTableReserved(table) {
    if (!this.customerReservationData.reservation_date || !this.customerReservationData.reservation_time) {
      return false;
    }
    return this.reservations.some((reservation) => reservation.table_id === table.id && reservation.reservation_date === this.customerReservationData.reservation_date && reservation.reservation_time === this.customerReservationData.reservation_time && ["pending", "confirmed"].includes(reservation.status));
  }
  getTableClass(table) {
    const classes = ["table-element", `shape-${table.shape}`];
    if (this.selectedTable?.id === table.id) {
      classes.push("selected");
    } else if (!table.is_online_bookable) {
      classes.push("unavailable");
    } else if (this.isTableReserved(table)) {
      classes.push("reserved");
    } else {
      classes.push("available");
    }
    return classes.join(" ");
  }
  getTableStyle(table) {
    const minSize = 60;
    const width = Math.max(table.width || minSize, minSize);
    const height = Math.max(table.height || minSize, minSize);
    let borderRadius = "8px";
    if (table.shape === "circle") {
      borderRadius = "50%";
    } else if (table.shape === "square") {
      borderRadius = "8px";
    }
    return {
      left: table.position_x + "px",
      top: table.position_y + "px",
      width: width + "px",
      height: height + "px",
      "border-radius": borderRadius,
      transform: `rotate(${table.rotation || 0}deg)`
    };
  }
  getTableTooltip(table) {
    let tooltip = `Tavolo ${table.table_number} - ${table.capacity} persone`;
    if (!table.is_online_bookable) {
      tooltip += " (Non prenotabile online)";
    } else if (this.isTableReserved(table)) {
      tooltip += " (Prenotato)";
    } else {
      tooltip += " (Disponibile)";
    }
    return tooltip;
  }
  // MODAL PRENOTAZIONE
  openReservationModal() {
    if (!this.selectedTable || !this.selectedTable.is_online_bookable) {
      console.log("\u274C Cannot open reservation modal - table not available");
      return;
    }
    this.showReservationModal = true;
    this.loadAvailableTimes();
  }
  closeReservationModal() {
    this.showReservationModal = false;
    this.availabilityChecked = false;
  }
  onDateChange() {
    return __async(this, null, function* () {
      this.availabilityChecked = false;
      yield this.loadAvailableTimes();
    });
  }
  onTimeChange() {
    return __async(this, null, function* () {
      if (this.customerReservationData.reservation_time) {
        yield this.checkAvailability();
      }
    });
  }
  loadAvailableTimes() {
    return __async(this, null, function* () {
      if (!this.selectedTable || !this.customerReservationData.reservation_date) {
        return;
      }
      this.availableTimes = yield this.reservationService.getAvailableTimes(this.selectedTable.id, this.customerReservationData.reservation_date);
      if (this.customerReservationData.reservation_time) {
        yield this.checkAvailability();
      }
    });
  }
  checkAvailability() {
    return __async(this, null, function* () {
      if (!this.selectedTable || !this.customerReservationData.reservation_date || !this.customerReservationData.reservation_time) {
        return;
      }
      this.isTableAvailable = yield this.reservationService.checkTableAvailability(this.selectedTable.id, this.customerReservationData.reservation_date, this.customerReservationData.reservation_time);
      this.availabilityChecked = true;
    });
  }
  // CREAZIONE PRENOTAZIONE
  createReservation() {
    return __async(this, null, function* () {
      if (!this.selectedTable || !this.isTableAvailable || this.creatingReservation) {
        return;
      }
      this.creatingReservation = true;
      try {
        let result;
        if (this.currentUser) {
          this.customerReservationData.table_id = this.selectedTable.id;
          result = yield this.reservationService.createCustomerReservation(this.customerReservationData);
        } else {
          if (!this.restaurantReservationData.customer_name || !this.restaurantReservationData.customer_phone) {
            alert("Per favore compila nome e telefono per la prenotazione");
            this.creatingReservation = false;
            return;
          }
          this.restaurantReservationData.table_id = this.selectedTable.id;
          result = yield this.reservationService.createRestaurantReservation(this.restaurantReservationData);
        }
        if (result) {
          this.lastReservation = result;
          this.showReservationModal = false;
          this.showConfirmationModal = true;
          yield this.loadReservationsForToday();
          this.deselectTable();
        } else {
          alert("Errore durante la creazione della prenotazione. Riprova.");
        }
      } catch (error) {
        console.error("\u274C Error creating reservation:", error);
        alert("Errore durante la creazione della prenotazione.");
      } finally {
        this.creatingReservation = false;
      }
    });
  }
  closeConfirmationModal() {
    this.showConfirmationModal = false;
    this.resetReservationData();
  }
  // Reset dati prenotazione
  resetReservationData() {
    this.customerReservationData = {
      restaurant_id: this.restaurantId,
      table_id: "",
      reservation_date: this.minDate,
      reservation_time: "",
      party_size: 2,
      special_requests: ""
    };
    this.restaurantReservationData = {
      restaurant_id: this.restaurantId,
      customer_name: this.currentUser?.user_metadata?.first_name || "",
      customer_phone: this.currentUser?.user_metadata?.phone || "",
      customer_email: "",
      reservation_date: this.minDate,
      reservation_time: "",
      party_size: 2,
      special_requests: "",
      table_id: void 0,
      status: "pending"
    };
  }
  // UTILITIES
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  // Navigazione
  goToRestaurantList() {
    this.router.navigate(["/restaurants"]);
  }
  // Helper per sincronizzare i dati tra i due form
  syncReservationData() {
    this.restaurantReservationData.reservation_date = this.customerReservationData.reservation_date;
    this.restaurantReservationData.reservation_time = this.customerReservationData.reservation_time;
    this.restaurantReservationData.party_size = this.customerReservationData.party_size;
    this.restaurantReservationData.special_requests = this.customerReservationData.special_requests;
  }
  getTablesCountForPlan(floorPlanId) {
    if (this.currentFloorPlan?.id === floorPlanId) {
      return this.tables.length;
    }
    return 0;
  }
  loadTableCountsForAllFloorPlans() {
    return __async(this, null, function* () {
      try {
        const { data: allTables, error } = yield this.tableService["supabaseService"].getSupabaseClient().from("tables").select("*").eq("restaurant_id", this.restaurantId).eq("is_active", true);
        if (error)
          throw error;
        const tableCounts = /* @__PURE__ */ new Map();
        this.floorPlans.forEach((plan) => {
          tableCounts.set(plan.id, 0);
        });
        allTables?.forEach((table) => {
          if (table.floor_plan_id && tableCounts.has(table.floor_plan_id)) {
            if (table.parent_table_id === null && !table.is_merged) {
              tableCounts.set(table.floor_plan_id, tableCounts.get(table.floor_plan_id) + 1);
            }
          }
        });
        return tableCounts;
      } catch (error) {
        console.error("\u274C Error loading table counts:", error);
        return /* @__PURE__ */ new Map();
      }
    });
  }
  // Metodi per lo zoom
  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel * 1.25, this.maxZoom);
    this.updateCanvasTransform();
  }
  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel / 1.25, this.minZoom);
    this.updateCanvasTransform();
  }
  resetZoom() {
    this.zoomLevel = 1;
    this.canvasPosition = { x: 0, y: 0 };
    this.updateCanvasTransform();
  }
  getScaledWidth() {
    return (this.currentFloorPlan?.width || 1e3) * this.zoomLevel;
  }
  getScaledHeight() {
    return (this.currentFloorPlan?.height || 800) * this.zoomLevel;
  }
  updateCanvasTransform() {
    if (this.canvasRef && this.canvasRef.nativeElement) {
      const canvas = this.canvasRef.nativeElement;
      canvas.style.transform = `translate3d(${this.canvasPosition.x}px, ${this.canvasPosition.y}px, 0) scale3d(${this.zoomLevel}, ${this.zoomLevel}, 1)`;
      canvas.style.transformOrigin = "0 0";
    }
  }
  zoomTo(level) {
    this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, level));
    this.updateCanvasTransform();
  }
  zoomToFit() {
    if (!this.canvasRef || !this.canvasRef.nativeElement || !this.currentFloorPlan)
      return;
    const container = this.canvasRef.nativeElement.parentElement;
    if (!container)
      return;
    const containerWidth = container.clientWidth - 40;
    const containerHeight = container.clientHeight - 40;
    const scaleX = containerWidth / this.currentFloorPlan.width;
    const scaleY = containerHeight / this.currentFloorPlan.height;
    this.zoomLevel = Math.min(scaleX, scaleY, 1);
    this.canvasPosition = { x: 0, y: 0 };
    this.updateCanvasTransform();
  }
  // Metodi per il panning (trascinamento)
  onCanvasMouseDown(event) {
    event.preventDefault();
    this.isDragging = true;
    this.dragStart = { x: event.clientX - this.canvasPosition.x, y: event.clientY - this.canvasPosition.y };
  }
  onCanvasMouseMove(event) {
    if (!this.isDragging)
      return;
    event.preventDefault();
    this.canvasPosition.x = event.clientX - this.dragStart.x;
    this.canvasPosition.y = event.clientY - this.dragStart.y;
    this.updateCanvasTransform();
  }
  onCanvasMouseUp(event) {
    this.isDragging = false;
  }
  static \u0275fac = function RestaurantMapViewer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantMapViewer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantMapViewer, selectors: [["app-restaurant-map-viewer"]], viewQuery: function RestaurantMapViewer_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, decls: 61, vars: 22, consts: [["floorPlanCanvas", ""], ["class", "section-header", 3, "background", 4, "ngIf"], [1, "page-container"], ["class", "map-selector-section mt-lg", 4, "ngIf"], [1, "map-section", "p-sm"], [1, "border", "rounded-lg", "p-md", "flex-wrap"], [1, "flex", "gap-sm", "mb-md"], [1, "material-icons", "text-md"], [1, "text-md", "font-bold", "m-0"], [1, "flex", "flex-wrap", "items-center", "gap-md"], [1, "flex", "items-center", "gap-sm", "rounded-lg", "p-sm"], ["title", "Zoom Out (Ctrl -)", 1, "icon-button", 3, "click", "disabled"], [1, "material-icons"], [1, "flex", "items-center", "gap-sm", "p-sm", "justify-center", "bg-body", "rounded"], [1, "material-icons", "text-sm"], [1, "font-semibold"], ["title", "Zoom In (Ctrl +)", 1, "icon-button", 3, "click", "disabled"], ["title", "Reset Zoom (0)", 1, "icon-button", 3, "click"], ["title", "Adatta allo schermo", 1, "icon-button", 3, "click"], [1, "map-legend"], [1, "legend-item"], [1, "legend-color", "available"], [1, "text-mini", "font-semibold"], [1, "legend-color", "reserved"], [1, "legend-color", "selected"], [1, "canvas-container"], [1, "floor-plan-canvas", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "grid-overlay"], ["class", "table-element", 3, "class", "style", "title", "click", 4, "ngFor", "ngForOf"], ["class", "canvas-instructions", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-sm", "mt-sm", "p-sm", "bg-smoke", "rounded"], [1, "text-mini", "text-muted", "flex", "items-center", "gap-sm"], [1, "material-icons", "text-mini"], [1, "flex", "items-center", "gap-md"], [1, "text-mini", "text-muted"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "section-header"], ["class", "icon-button mobile-toggle", 3, "click", 4, "ngIf"], [1, "header-icon"], ["class", "logo-image rounded-full", 3, "src", "alt", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "section-titles"], [1, "section-title"], ["class", "text-muted", 4, "ngIf"], [1, "icon-button", "mobile-toggle", 3, "click"], ["name", "menu"], [1, "logo-image", "rounded-full", 3, "src", "alt"], [1, "text-muted"], [1, "map-selector-section", "mt-lg"], ["class", "p-sm", 4, "ngIf"], [1, "flex", "flex-col", "p-sm"], [1, "flex", "gap-sm", "p-sm"], [1, "text-md"], [1, "floor-plan-selector"], ["class", "floor-plan-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "p-sm"], [1, "flex", "flex-wrap", "gap-sm"], ["class", "chip flex items-center gap-sm", 4, "ngIf"], [1, "chip", "flex", "items-center", "gap-sm"], [1, "floor-plan-option", 3, "click"], [1, "flex", "flex-col"], [1, "plan-name", "font-semibold"], ["class", "text-mini", 4, "ngIf"], [1, "text-mini"], [1, "table-element", 3, "click", "title"], [1, "table-content"], [1, "table-number"], [1, "table-capacity"], ["class", "table-status", 4, "ngIf"], [1, "table-status"], [1, "canvas-instructions"], [1, "instruction-card"], [1, "font-bold", "mb-sm"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-sm", 3, "click"], [1, "modal-header"], [1, "section-title", "m-0"], ["title", "Chiudi", 1, "icon-button", 3, "click"], [1, "p-lg"], [1, "grid-form", "mb-lg"], [1, "form-group"], [1, "standard-label"], [1, "flex", "items-center", "gap-sm"], [1, "chip", "active"], [1, "p-sm", "bg-smoke", "rounded"], [1, "p-sm", "bg-smoke", "rounded", "text-capitalize"], ["class", "info-message mb-lg", 4, "ngIf"], [1, "modal-footer"], [1, "promethea-button", "ghost", 3, "click"], [1, "promethea-button", "primary", 3, "click", "disabled"], [1, "info-message", "mb-lg"], [1, "modal-overlay"], [1, "modal-container", "modal-md"], [1, "icon-button", 3, "click"], [1, "form-card"], [1, "form-row"], ["type", "date", "required", "", 1, "p-sm", 3, "ngModelChange", "change", "ngModel", "min"], ["required", "", 1, "p-sm", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["class", "mb-lg", 4, "ngIf"], ["class", "form-section", 4, "ngIf"], ["class", "info-message", 4, "ngIf"], [1, "form-group", "m-sm02"], ["placeholder", "Note o richieste speciali...", "rows", "3", 1, "p-sm", 3, "ngModelChange", "input", "ngModel"], [1, "promethea-button", 3, "click", "disabled"], [3, "value"], [3, "value", "disabled"], [1, "mb-lg"], ["class", "info-message", "style", "border-left-color: var(--primary);", 4, "ngIf"], [1, "info-message"], [1, "info-message", 2, "border-left-color", "var(--primary)"], [1, "form-section"], [1, "text-md", "mb-md"], ["type", "text", "placeholder", "Il tuo nome", "required", "", 1, "p-sm", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "Il tuo telefono", "required", "", 1, "p-sm", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "La tua email", 1, "p-sm", 3, "ngModelChange", "ngModel"], ["name", "user", 1, "nav-icon", 3, "size"], [1, "p-lg", "flex-1", "overflow-y-auto", "text-center"], [1, "confirmation-icon"], [1, "material-icons", "success", 2, "font-size", "48px", "color", "#10b981"], [1, "confirmation-title", 2, "margin-bottom", "var(--gap-sm)", "color", "var(--text-color)"], [1, "confirmation-message", 2, "margin-bottom", "var(--gap-md)", "color", "var(--text-color)", "opacity", "0.8"], [1, "confirmation-details", 2, "text-align", "left", "background", "color-mix(in srgb, var(--background) 95%, transparent)", "padding", "var(--gap-md)", "border-radius", "12px", "margin-bottom", "var(--gap-lg)"], [1, "detail-item", 2, "margin-bottom", "var(--gap-sm)"], [1, "detail-item"], [1, "chip", "active", 2, "margin-left", "var(--gap-sm)"], [1, "promethea-button", "primary", 3, "click"]], template: function RestaurantMapViewer_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, RestaurantMapViewer_div_0_Template, 11, 9, "div", 1);
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275template(2, RestaurantMapViewer_div_2_Template, 10, 2, "div", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "span", 7);
      \u0275\u0275text(7, "table_restaurant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h2", 8);
      \u0275\u0275text(9, "Seleziona un Tavolo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "button", 11);
      \u0275\u0275listener("click", function RestaurantMapViewer_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(13, "span", 12);
      \u0275\u0275text(14, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 13)(16, "span", 14);
      \u0275\u0275text(17, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 16);
      \u0275\u0275listener("click", function RestaurantMapViewer_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(21, "span", 12);
      \u0275\u0275text(22, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 17);
      \u0275\u0275listener("click", function RestaurantMapViewer_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetZoom());
      });
      \u0275\u0275elementStart(24, "span", 12);
      \u0275\u0275text(25, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 18);
      \u0275\u0275listener("click", function RestaurantMapViewer_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomToFit());
      });
      \u0275\u0275elementStart(27, "span", 12);
      \u0275\u0275text(28, "fit_screen");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 19)(30, "div", 20);
      \u0275\u0275element(31, "div", 21);
      \u0275\u0275elementStart(32, "span", 22);
      \u0275\u0275text(33, "Disponibile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275element(35, "div", 23);
      \u0275\u0275elementStart(36, "span", 22);
      \u0275\u0275text(37, "Prenotato");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 20);
      \u0275\u0275element(39, "div", 24);
      \u0275\u0275elementStart(40, "span", 22);
      \u0275\u0275text(41, "Selezionato");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(42, "div", 25)(43, "div", 26, 0);
      \u0275\u0275listener("mousedown", function RestaurantMapViewer_Template_div_mousedown_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCanvasMouseDown($event));
      })("mousemove", function RestaurantMapViewer_Template_div_mousemove_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCanvasMouseMove($event));
      })("mouseup", function RestaurantMapViewer_Template_div_mouseup_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCanvasMouseUp($event));
      })("mouseleave", function RestaurantMapViewer_Template_div_mouseleave_43_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.isDragging = false);
      });
      \u0275\u0275element(45, "div", 27);
      \u0275\u0275template(46, RestaurantMapViewer_div_46_Template, 7, 8, "div", 28)(47, RestaurantMapViewer_div_47_Template, 8, 0, "div", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 30)(49, "div", 31)(50, "span", 32);
      \u0275\u0275text(51, "touch_app");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Trascina per muoverti \u2022 Usa i pulsanti per zoommare ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 33)(54, "div", 22);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 34);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(58, RestaurantMapViewer_div_58_Template, 45, 8, "div", 35)(59, RestaurantMapViewer_div_59_Template, 43, 14, "div", 36)(60, RestaurantMapViewer_div_60_Template, 25, 5, "div", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.restaurant);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.floorPlans.length > 1);
      \u0275\u0275advance(10);
      \u0275\u0275property("disabled", ctx.zoomLevel <= ctx.minZoom);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", (ctx.zoomLevel * 100).toFixed(0), "%");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.zoomLevel >= ctx.maxZoom);
      \u0275\u0275advance(23);
      \u0275\u0275styleProp("min-width", ctx.getScaledWidth(), "px")("min-height", ctx.getScaledHeight(), "px")("cursor", ctx.isDragging ? "grabbing" : "grab");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", (ctx.currentFloorPlan == null ? null : ctx.currentFloorPlan.width) || 1e3, "px")("height", (ctx.currentFloorPlan == null ? null : ctx.currentFloorPlan.height) || 600, "px");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.tables);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tables.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.tables.length, " tavoli disponibili ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", (ctx.currentFloorPlan == null ? null : ctx.currentFloorPlan.name) || "", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showReservationModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showConfirmationModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.logo-image[_ngcontent-%COMP%] {\n  max-width: var(--fs-xl);\n  max-height: var(--fs-xl);\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n}\n.restaurant-hero[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0 0 24px 24px;\n  overflow: hidden;\n  margin-bottom: var(--gap-lg);\n  background: var(--gradiente);\n}\n.restaurant-cover[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: hidden;\n}\n.restaurant-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.9;\n}\n.restaurant-info[_ngcontent-%COMP%] {\n  padding: var(--gap-lg);\n  background:\n    linear-gradient(\n      to top,\n      var(--background) 20%,\n      transparent);\n  position: relative;\n}\n.restaurant-logo[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid var(--background);\n  background: var(--background);\n  box-shadow: 0 8px 24px var(--shadow-2);\n  overflow: hidden;\n}\n.restaurant-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: var(--gap-sm);\n  object-fit: cover;\n}\n.map-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.grid-overlay[_ngcontent-%COMP%] {\n  background-image: none;\n  border: 1px solid var(--smoke-2);\n  background: var(--smoke-1);\n}\n.table-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 2px solid;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 10;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.table-element[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  z-index: 20;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.table-element.selected[_ngcontent-%COMP%] {\n  z-index: 30;\n  border-width: 3px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.table-element.available[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: rgba(16, 185, 129, 0.15);\n}\n.table-element.available[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.25);\n}\n.table-element.reserved[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  background: rgba(245, 158, 11, 0.15);\n}\n.table-element.unavailable[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.table-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px;\n  width: 100%;\n}\n.table-number[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: clamp(1rem, 1.5vw, 1.25rem);\n  color: var(--text-color);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.table-capacity[_ngcontent-%COMP%] {\n  font-size: clamp(0.75rem, 1vw, 0.9rem);\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.canvas-container[_ngcontent-%COMP%] {\n  margin-top: var(--gap-lg);\n}\n.map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-md);\n  align-items: center;\n  flex-wrap: wrap;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n  border-radius: 12px;\n  margin-left: auto;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 2px solid;\n}\n.legend-color.available[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  border-color: #10b981;\n}\n.legend-color.reserved[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  border-color: #f59e0b;\n}\n.legend-color.unavailable[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  border-color: #ef4444;\n}\n.legend-color.selected[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  border-color: var(--primary);\n}\n.floor-plan-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n  flex-wrap: wrap;\n}\n.floor-plan-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n  border: 2px solid transparent;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.floor-plan-option[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-2);\n  transform: translateY(-2px);\n}\n.floor-plan-option.selected[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.canvas-instructions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  z-index: 5;\n}\n.instruction-card[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  padding: var(--gap-lg);\n  border-radius: 16px;\n  border: 1px solid var(--smoke-1);\n  box-shadow: 0 8px 32px var(--shadow-2);\n  max-width: 400px;\n}\n.instruction-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--text-muted);\n  margin-bottom: var(--gap-md);\n}\n.canvas-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.canvas-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--smoke-1);\n  border-radius: 6px;\n}\n.canvas-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gradiente);\n  border-radius: 6px;\n  border: 3px solid var(--background);\n}\n@media (max-width: 768px) {\n  .restaurant-logo[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    top: -40px;\n  }\n  .restaurant-cover[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .map-legend[_ngcontent-%COMP%] {\n    margin-left: 0;\n    justify-content: center;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(224, 62, 62, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(224, 62, 62, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(224, 62, 62, 0);\n  }\n}\n/*# sourceMappingURL=restaurant-map-viewer.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantMapViewer, [{
    type: Component,
    args: [{ selector: "app-restaurant-map-viewer", imports: [CommonModule, FormsModule, LucideAngularModule], template: `<!-- Header con copertina, logo e titolo (come restaurant-detail) -->\r
<div class="section-header" \r
     *ngIf="restaurant"\r
     [style.background]="restaurant.cover_image_url ? 'url(' + restaurant.cover_image_url + ')' : 'var(--vetro)'"\r
    >\r
    \r
  <div class="flex items-center gap-md">\r
  <!-- Pulsante toggle mobile -->\r
  <button \r
    *ngIf="showToggle$ | async"\r
    class="icon-button mobile-toggle"\r
    (click)="authService.toggleSidebar()">\r
    <lucide-icon name="menu"></lucide-icon>\r
  </button>\r
\r
    <div class="header-icon">\r
      <img *ngIf="restaurant.logo_url" \r
           [src]="restaurant.logo_url" \r
           [alt]="restaurant.name"\r
           class="logo-image rounded-full"\r
           >\r
      <span *ngIf="!restaurant.logo_url" class="material-icons">restaurant</span>\r
    </div>\r
    <div class="section-titles">\r
      <h1 class="section-title">{{ restaurant.name }}</h1>\r
      <p class="text-muted" *ngIf="restaurant.additional_info?.cuisine_types">\r
        {{ restaurant.additional_info?.cuisine_types?.join(', ') }}\r
      </p>\r
    </div>\r
  </div>\r
\r
</div>\r
<div class="page-container">\r
\r
  <!-- Selettore Mappa -->\r
    <div class="map-selector-section mt-lg" *ngIf="floorPlans.length > 1">\r
<!-- Dettagli aggiuntivi sotto l'header -->\r
<div *ngIf="restaurant" class="p-sm">\r
  <p class="p-sm" *ngIf="restaurant.description">\r
    {{ restaurant.description }}\r
  </p>\r
  <div class="flex flex-wrap gap-sm">\r
    <span class="chip flex items-center gap-sm" *ngIf="restaurant.address">\r
      <span class="material-icons text-mini">place</span>\r
      {{ restaurant.address }}\r
    </span>\r
    <span class="chip flex items-center gap-sm" *ngIf="restaurant.phone">\r
      <span class="material-icons text-mini">phone</span>\r
      {{ restaurant.phone }}\r
    </span>\r
  </div>\r
</div>\r
    <div class="flex flex-col p-sm">\r
      <div class="flex gap-sm p-sm">\r
        <span class="material-icons text-md">map</span>\r
        <h3 class="text-md">Seleziona Area</h3>\r
      </div>\r
        <div class="floor-plan-selector">\r
          <div *ngFor="let plan of floorPlans" \r
              class="floor-plan-option"\r
              [class.selected]="currentFloorPlan?.id === plan.id"\r
              (click)="selectFloorPlan(plan)">\r
            <span class="material-icons">location_on</span>\r
            <div class="flex flex-col">\r
            <span class="plan-name font-semibold">{{ plan.name }}</span>\r
            <span class="text-mini" *ngIf="plan.id === currentFloorPlan?.id">\r
              ({{ tables.length }} tavoli)\r
            </span>\r
            <span class="text-mini" *ngIf="plan.id !== currentFloorPlan?.id">\r
              ({{ plan.name === 'Sala Grande' ? '7' : plan.name === 'Sala Piccola' ? '5' : '6' }} tavoli)\r
            </span>\r
            </div>\r
          </div>\r
        </div>\r
    </div>\r
  </div>\r
\r
<!-- Mappa Interattiva -->\r
<div class="map-section p-sm">\r
  <div class="border rounded-lg p-md flex-wrap">\r
    <div class="flex gap-sm mb-md">\r
      <span class="material-icons text-md">table_restaurant</span>\r
      <h2 class="text-md font-bold m-0">Seleziona un Tavolo</h2>\r
    </div>\r
       <!-- Controlli Zoom Migliorati -->\r
      <div class="flex flex-wrap items-center gap-md">\r
        <div class="flex items-center gap-sm rounded-lg p-sm">\r
          <!-- Zoom Out -->\r
          <button class="icon-button" (click)="zoomOut()" [disabled]="zoomLevel <= minZoom" \r
                  title="Zoom Out (Ctrl -)">\r
            <span class="material-icons">zoom_out</span>\r
          </button>\r
                  \r
          <!-- Indicatore zoom -->\r
          <div class="flex items-center gap-sm p-sm justify-center bg-body rounded">\r
            <span class="material-icons text-sm">search</span>\r
            <span class="font-semibold">{{ (zoomLevel * 100).toFixed(0) }}%</span>\r
          </div>\r
\r
          <!-- Zoom In -->\r
          <button class="icon-button" (click)="zoomIn()" [disabled]="zoomLevel >= maxZoom" \r
                  title="Zoom In (Ctrl +)">\r
            <span class="material-icons">zoom_in</span>\r
          </button>\r
          \r
          <!-- Reset Zoom -->\r
          <button class="icon-button" (click)="resetZoom()" title="Reset Zoom (0)">\r
            <span class="material-icons">refresh</span>\r
          </button>\r
          \r
          <!-- Fit to Screen -->\r
          <button class="icon-button" (click)="zoomToFit()" title="Adatta allo schermo">\r
            <span class="material-icons">fit_screen</span>\r
          </button>\r
        </div>\r
        <!-- Legenda -->\r
        <div class="map-legend">\r
          <div class="legend-item">\r
            <div class="legend-color available"></div>\r
            <span class="text-mini font-semibold">Disponibile</span>\r
          </div>\r
          <div class="legend-item">\r
            <div class="legend-color reserved"></div>\r
            <span class="text-mini font-semibold">Prenotato</span>\r
          </div>\r
          <div class="legend-item">\r
            <div class="legend-color selected"></div>\r
            <span class="text-mini font-semibold">Selezionato</span>\r
          </div>\r
        </div>\r
      </div>   \r
    <div class="canvas-container">\r
      <div #floorPlanCanvas class="floor-plan-canvas" \r
           [style.minWidth.px]="getScaledWidth()" \r
           [style.minHeight.px]="getScaledHeight()"\r
           (mousedown)="onCanvasMouseDown($event)"\r
           (mousemove)="onCanvasMouseMove($event)"\r
           (mouseup)="onCanvasMouseUp($event)"\r
           (mouseleave)="isDragging = false"\r
           [style.cursor]="isDragging ? 'grabbing' : 'grab'">\r
        \r
        <!-- Griglia di sfondo -->\r
        <div class="grid-overlay" [style.width.px]="currentFloorPlan?.width || 1000" \r
             [style.height.px]="currentFloorPlan?.height || 600"></div>\r
        \r
        <!-- Tavoli -->\r
        <div *ngFor="let table of tables" \r
             class="table-element" \r
             [class]="getTableClass(table)"\r
             [style]="getTableStyle(table)"\r
             (click)="onTableClick(table)"\r
             [title]="getTableTooltip(table)">\r
          <div class="table-content">\r
            <div class="table-number">{{ table.table_number }}</div>\r
            <div class="table-capacity">{{ table.capacity }} p</div>\r
            <div class="table-status" *ngIf="isTableReserved(table)">\r
              <span class="material-icons">event_busy</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Istruzioni -->\r
        <div class="canvas-instructions" *ngIf="tables.length === 0">\r
          <div class="instruction-card">\r
            <span class="material-icons">table_restaurant</span>\r
            <h4 class="font-bold mb-sm">Nessun tavolo configurato</h4>\r
            <p class="text-muted">Il ristorante non ha ancora configurato i tavoli per questa area</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Informazioni Mappa -->\r
    <div class="flex flex-wrap items-center justify-between gap-sm mt-sm p-sm bg-smoke rounded">\r
      <div class="text-mini text-muted flex items-center gap-sm">\r
        <span class="material-icons text-mini">touch_app</span>\r
        Trascina per muoverti \u2022 Usa i pulsanti per zoommare\r
      </div>\r
      <div class="flex items-center gap-md">\r
        <div class="text-mini font-semibold">\r
          {{ tables.length }} tavoli disponibili\r
        </div>\r
        <div class="text-mini text-muted">\r
          {{ currentFloorPlan?.name || '' }}\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Info Tavolo Selezionato -->\r
<div class="modal-overlay" *ngIf="selectedTable" (click)="deselectTable()">\r
  <div class="modal-container modal-sm" (click)="$event.stopPropagation()">\r
    <!-- Header -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-md">\r
        <span class="material-icons">table_restaurant</span>\r
        <h3 class="section-title m-0">Tavolo {{ selectedTable.table_number }}</h3>\r
      </div>\r
      <button class="icon-button" (click)="deselectTable()" title="Chiudi">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
    \r
    <!-- Contenuto -->\r
    <div class="p-lg">\r
      <!-- Informazioni Tavolo -->\r
      <div class="grid-form mb-lg">\r
        <!-- Capacit\xE0 -->\r
        <div class="form-group">\r
          <label class="standard-label">Capacit\xE0</label>\r
          <div class="flex items-center gap-sm">\r
            <span class="chip active">{{ selectedTable.capacity }}</span>\r
            <span class="text-mini">persone</span>\r
          </div>\r
        </div>\r
        \r
        <!-- Nome -->\r
        <div class="form-group">\r
          <label class="standard-label">Nome Tavolo</label>\r
          <div class="p-sm bg-smoke rounded">\r
            {{ selectedTable.table_name || 'N/D' }}\r
          </div>\r
        </div>\r
        \r
        <!-- Forma -->\r
        <div class="form-group">\r
          <label class="standard-label">Forma</label>\r
          <div class="p-sm bg-smoke rounded text-capitalize">\r
            {{ selectedTable.shape }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Stato Prenotazione -->\r
      <div class="info-message mb-lg" *ngIf="isTableReserved(selectedTable)">\r
        <span class="material-icons">event_busy</span>\r
        <div class="flex flex-col">\r
          <span class="font-semibold">Tavolo Prenotato</span>\r
          <span class="text-mini text-muted">\r
            Questo tavolo \xE8 gi\xE0 prenotato per l'orario selezionato\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="info-message mb-lg" *ngIf="!isTableReserved(selectedTable) && selectedTable.is_online_bookable">\r
        <span class="material-icons">event_available</span>\r
        <div class="flex flex-col">\r
          <span class="font-semibold">Disponibile</span>\r
          <span class="text-mini text-muted">\r
            Tavolo disponibile per la prenotazione\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="info-message mb-lg" *ngIf="!selectedTable.is_online_bookable">\r
        <span class="material-icons">block</span>\r
        <div class="flex flex-col">\r
          <span class="font-semibold">Non prenotabile online</span>\r
          <span class="text-mini text-muted">\r
            Questo tavolo non \xE8 prenotabile online\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="modal-footer">\r
      <button class="promethea-button ghost" (click)="deselectTable()">\r
        <span class="material-icons">close</span>\r
        <span>Chiudi</span>\r
      </button>\r
      \r
      <button class="promethea-button primary" \r
              (click)="openReservationModal()"\r
              [disabled]="isTableReserved(selectedTable) || !selectedTable.is_online_bookable">\r
        <span class="material-icons">event_available</span>\r
        <span>Prenota Questo Tavolo</span>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
  <!-- Modal Prenotazione -->\r
  <div *ngIf="showReservationModal" class="modal-overlay">\r
    <div class="modal-container modal-md">\r
      <div class="modal-header">\r
        <h2 class="section-title">\r
          <span class="material-icons">event_available</span>\r
          Prenota Tavolo\r
        </h2>\r
        <button class="icon-button" (click)="closeReservationModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="form-card">\r
        <!-- Tavolo selezionato -->\r
        <div class="info-message mb-lg" *ngIf="selectedTable">\r
          <span class="material-icons">table_restaurant</span>\r
          <span>Stai prenotando: <strong>Tavolo {{selectedTable.table_number}}</strong> ({{selectedTable.capacity}} persone)</span>\r
        </div>\r
\r
        <!-- Dati comuni -->\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label class="standard-label">Data *</label>\r
            <input \r
              type="date" \r
              [(ngModel)]="customerReservationData.reservation_date"\r
              (change)="syncReservationData(); onDateChange()"\r
              [min]="minDate"\r
              class="p-sm"\r
              required>\r
          </div>\r
          \r
          <div class="form-group">\r
            <label class="standard-label">Ora *</label>\r
            <select \r
              [(ngModel)]="customerReservationData.reservation_time"\r
              (change)="syncReservationData(); onTimeChange()"\r
              class="p-sm"\r
              required>\r
              <option value="">Seleziona orario</option>\r
              <option \r
                *ngFor="let time of availableTimes" \r
                [value]="time">\r
                {{ time }}\r
              </option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label class="standard-label">Numero Persone *</label>\r
            <select \r
              [(ngModel)]="customerReservationData.party_size"\r
              (change)="syncReservationData()"\r
              class="p-sm"\r
              required>\r
              <option *ngFor="let num of [1,2,3,4,5,6,7,8]" \r
                      [value]="num"\r
                      [disabled]="selectedTable ? num > selectedTable.capacity : false">\r
                {{ num }} {{ num === 1 ? 'persona' : 'persone' }}\r
              </option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <!-- Disponibilit\xE0 -->\r
        <div *ngIf="availabilityChecked" class="mb-lg">\r
          <div *ngIf="isTableAvailable" class="info-message">\r
            <span class="material-icons">check_circle</span>\r
            <span>Tavolo disponibile per la data e ora selezionate</span>\r
          </div>\r
          <div *ngIf="!isTableAvailable" class="info-message" style="border-left-color: var(--primary);">\r
            <span class="material-icons">error</span>\r
            <span>Tavolo non disponibile per la data e ora selezionate</span>\r
          </div>\r
        </div>\r
\r
        <!-- Dati cliente (solo per utenti non loggati) -->\r
        <div *ngIf="!currentUser" class="form-section">\r
          <h3 class="text-md mb-md">Dati Cliente</h3>\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Nome *</label>\r
              <input \r
                type="text" \r
                [(ngModel)]="restaurantReservationData.customer_name"\r
                placeholder="Il tuo nome"\r
                class="p-sm"\r
                required>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label class="standard-label">Telefono *</label>\r
              <input \r
                type="tel" \r
                [(ngModel)]="restaurantReservationData.customer_phone"\r
                placeholder="Il tuo telefono"\r
                class="p-sm"\r
                required>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Email (opzionale)</label>\r
            <input \r
              type="email" \r
              [(ngModel)]="restaurantReservationData.customer_email"\r
              placeholder="La tua email"\r
              class="p-sm">\r
          </div>\r
        </div>\r
\r
        <!-- Utente loggato -->\r
        <div *ngIf="currentUser" class="info-message">\r
          <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
          <span>Prenotazione a nome di: <strong>{{currentUser.user_metadata?.first_name}} {{currentUser.user_metadata?.last_name}}</strong></span>\r
        </div>\r
\r
        <div class="form-group m-sm02">\r
          <label class="standard-label">Richieste Speciali</label>\r
          <textarea \r
            [(ngModel)]="customerReservationData.special_requests"\r
            (input)="syncReservationData()"\r
            placeholder="Note o richieste speciali..."\r
            rows="3"\r
            class="p-sm"></textarea>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button \r
          class="promethea-button ghost" \r
          (click)="closeReservationModal()">\r
          Annulla\r
        </button>\r
        <button \r
          class="promethea-button" \r
          (click)="createReservation()"\r
          [disabled]="!isTableAvailable || creatingReservation || !customerReservationData.reservation_date || !customerReservationData.reservation_time">\r
          <span *ngIf="creatingReservation" class="material-icons">refresh</span>\r
          Conferma Prenotazione\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
\r
  <!-- Conferma Prenotazione - USANDO LE CLASSI DI STYLES.CSS -->\r
  <div class="modal-overlay" *ngIf="showConfirmationModal" (click)="closeConfirmationModal()">\r
    <div class="modal-container modal-sm" (click)="$event.stopPropagation()">\r
      <div class="p-lg flex-1 overflow-y-auto text-center">\r
        <div class="confirmation-icon">\r
          <span class="material-icons success" style="font-size: 48px; color: #10b981;">check_circle</span>\r
        </div>\r
        <h3 class="confirmation-title" style="margin-bottom: var(--gap-sm); color: var(--text-color);">Prenotazione Confermata!</h3>\r
        <p class="confirmation-message" style="margin-bottom: var(--gap-md); color: var(--text-color); opacity: 0.8;">\r
          La tua prenotazione per il tavolo {{ lastReservation?.tables?.table_number }} \r
          \xE8 stata confermata per il {{ formatDate(lastReservation?.reservation_date) }} \r
          alle {{ lastReservation?.reservation_time }}.\r
        </p>\r
        <div class="confirmation-details" style="text-align: left; background: color-mix(in srgb, var(--background) 95%, transparent); padding: var(--gap-md); border-radius: 12px; margin-bottom: var(--gap-lg);">\r
          <div class="detail-item" style="margin-bottom: var(--gap-sm);">\r
            <strong>Numero prenotazione:</strong> {{ lastReservation?.id.slice(-8).toUpperCase() }}\r
          </div>\r
          <div class="detail-item">\r
            <strong>Stato:</strong> \r
            <span class="chip active" style="margin-left: var(--gap-sm);">{{ lastReservation?.status }}</span>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="promethea-button primary" (click)="closeConfirmationModal()">\r
          <span class="material-icons">done</span>\r
          Ok, Grazie\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/customer/restaurant/restaurant-map-viewer/restaurant-map-viewer.css */\n.logo-image {\n  max-width: var(--fs-xl);\n  max-height: var(--fs-xl);\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n}\n.restaurant-hero {\n  position: relative;\n  border-radius: 0 0 24px 24px;\n  overflow: hidden;\n  margin-bottom: var(--gap-lg);\n  background: var(--gradiente);\n}\n.restaurant-cover {\n  height: 300px;\n  overflow: hidden;\n}\n.restaurant-cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.9;\n}\n.restaurant-info {\n  padding: var(--gap-lg);\n  background:\n    linear-gradient(\n      to top,\n      var(--background) 20%,\n      transparent);\n  position: relative;\n}\n.restaurant-logo {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid var(--background);\n  background: var(--background);\n  box-shadow: 0 8px 24px var(--shadow-2);\n  overflow: hidden;\n}\n.restaurant-logo img {\n  width: 100%;\n  height: 100%;\n  padding: var(--gap-sm);\n  object-fit: cover;\n}\n.map-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.grid-overlay {\n  background-image: none;\n  border: 1px solid var(--smoke-2);\n  background: var(--smoke-1);\n}\n.table-element {\n  position: absolute;\n  border: 2px solid;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 10;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.table-element:hover {\n  transform: scale(1.05);\n  z-index: 20;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.table-element.selected {\n  z-index: 30;\n  border-width: 3px;\n  animation: pulse 2s infinite;\n}\n.table-element.available {\n  border-color: #10b981;\n  background: rgba(16, 185, 129, 0.15);\n}\n.table-element.available:hover {\n  background: rgba(16, 185, 129, 0.25);\n}\n.table-element.reserved {\n  border-color: #f59e0b;\n  background: rgba(245, 158, 11, 0.15);\n}\n.table-element.unavailable {\n  border-color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.table-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px;\n  width: 100%;\n}\n.table-number {\n  font-weight: 800;\n  font-size: clamp(1rem, 1.5vw, 1.25rem);\n  color: var(--text-color);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.table-capacity {\n  font-size: clamp(0.75rem, 1vw, 0.9rem);\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.canvas-container {\n  margin-top: var(--gap-lg);\n}\n.map-legend {\n  display: flex;\n  gap: var(--gap-md);\n  align-items: center;\n  flex-wrap: wrap;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n  border-radius: 12px;\n  margin-left: auto;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n}\n.legend-color {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 2px solid;\n}\n.legend-color.available {\n  background: rgba(16, 185, 129, 0.2);\n  border-color: #10b981;\n}\n.legend-color.reserved {\n  background: rgba(245, 158, 11, 0.2);\n  border-color: #f59e0b;\n}\n.legend-color.unavailable {\n  background: rgba(239, 68, 68, 0.2);\n  border-color: #ef4444;\n}\n.legend-color.selected {\n  background: var(--gradiente);\n  border-color: var(--primary);\n}\n.floor-plan-selector {\n  display: flex;\n  gap: var(--gap-sm);\n  flex-wrap: wrap;\n}\n.floor-plan-option {\n  display: flex;\n  align-items: center;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n  border: 2px solid transparent;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.floor-plan-option:hover {\n  background: var(--smoke-2);\n  transform: translateY(-2px);\n}\n.floor-plan-option.selected {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.canvas-instructions {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  z-index: 5;\n}\n.instruction-card {\n  background: var(--vetro);\n  padding: var(--gap-lg);\n  border-radius: 16px;\n  border: 1px solid var(--smoke-1);\n  box-shadow: 0 8px 32px var(--shadow-2);\n  max-width: 400px;\n}\n.instruction-card .material-icons {\n  font-size: 48px;\n  color: var(--text-muted);\n  margin-bottom: var(--gap-md);\n}\n.canvas-container::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.canvas-container::-webkit-scrollbar-track {\n  background: var(--smoke-1);\n  border-radius: 6px;\n}\n.canvas-container::-webkit-scrollbar-thumb {\n  background: var(--gradiente);\n  border-radius: 6px;\n  border: 3px solid var(--background);\n}\n@media (max-width: 768px) {\n  .restaurant-logo {\n    width: 80px;\n    height: 80px;\n    top: -40px;\n  }\n  .restaurant-cover {\n    height: 200px;\n  }\n  .map-legend {\n    margin-left: 0;\n    justify-content: center;\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(224, 62, 62, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(224, 62, 62, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(224, 62, 62, 0);\n  }\n}\n/*# sourceMappingURL=restaurant-map-viewer.css.map */\n"] }]
  }], () => [], { canvasRef: [{
    type: ViewChild,
    args: ["floorPlanCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantMapViewer, { className: "RestaurantMapViewer", filePath: "src/app/customer/restaurant/restaurant-map-viewer/restaurant-map-viewer.ts", lineNumber: 26 });
})();
export {
  RestaurantMapViewer
};
//# sourceMappingURL=chunk-E4QEEGFZ.js.map
