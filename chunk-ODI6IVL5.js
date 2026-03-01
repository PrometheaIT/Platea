import {
  OrderStateService
} from "./chunk-77LJZULL.js";
import {
  FloorManagementService
} from "./chunk-QCRNEMKY.js";
import {
  ShiftService
} from "./chunk-J63TFP6U.js";
import {
  CategoryService
} from "./chunk-Q2MBH5GU.js";
import {
  MenuManagementService
} from "./chunk-WGPV5P3Z.js";
import "./chunk-IZHMOFAM.js";
import {
  Loader
} from "./chunk-635BUGKR.js";
import {
  TutorialService
} from "./chunk-DUZGO5NE.js";
import {
  FloorPlanService
} from "./chunk-5XRBYBJN.js";
import {
  TableService
} from "./chunk-J3BKBXKA.js";
import {
  RestaurantPublicService
} from "./chunk-AXPZZFBQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  ComandaService,
  OrderHeaderService,
  OrderHelperService,
  OrderItemService
} from "./chunk-UJMRF3JB.js";
import {
  DishService
} from "./chunk-5FIUGXYI.js";
import {
  ReservationService
} from "./chunk-PAOODSRL.js";
import {
  BaseService
} from "./chunk-K4QVN3EH.js";
import {
  LoadingService
} from "./chunk-XWVRHBBC.js";
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
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  NgStyle,
  SlicePipe
} from "./chunk-6GUAOFJT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgZone,
  Output,
  Subscription,
  ViewChild,
  effect,
  inject,
  interval,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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
  ɵɵtextInterpolate3,
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

// src/app/services/Tavoli/table-status.service.ts
var TableStatusService = class _TableStatusService extends BaseService {
  getTableName() {
    return "tables";
  }
  // 🟢 CALCOLA STATO TAVOLO
  calculateTableStatus(tables) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const tableIds = tables.map((t) => t.id);
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const { data: activeHeaders, error: headersError } = yield this.supabaseService.getSupabaseClient().from("order_headers").select(`
          *,
          comande (*)
        `).eq("restaurant_id", restaurantId).eq("status", "active").in("table_id", tableIds);
        if (headersError) {
          console.error("Errore order headers:", headersError);
        }
        const { data: reservations, error: resError } = yield this.supabaseService.getSupabaseClient().from("reservations").select("*").eq("restaurant_id", restaurantId).eq("reservation_date", today).in("status", ["confirmed", "pending"]).in("table_id", tableIds);
        if (resError)
          console.error("Errore prenotazioni:", resError);
        return tables.map((table) => {
          const tableActiveHeaders = (activeHeaders || []).filter((h) => h.table_id === table.id);
          const tableReservations = (reservations || []).filter((r) => r.table_id === table.id);
          let status = "free";
          let currentReservation = null;
          let currentOrders = [];
          let tavolataId = null;
          if (tableActiveHeaders.length > 0) {
            status = "occupied";
            tavolataId = tableActiveHeaders[0].id;
            tableActiveHeaders.forEach((header) => {
              if (header.comande && header.comande.length > 0) {
                const comande = header.comande.map((comandaData) => __spreadProps(__spreadValues({}, comandaData), {
                  // Assicurati che i campi obbligatori siano presenti
                  restaurant_id: comandaData.restaurant_id || restaurantId,
                  order_header_id: comandaData.order_header_id || header.id,
                  table_id: comandaData.table_id || table.id,
                  subtotal: comandaData.subtotal || 0,
                  tax_amount: comandaData.tax_amount || 0,
                  discount_amount: comandaData.discount_amount || 0,
                  total_amount: comandaData.total_amount || 0,
                  created_at: comandaData.created_at,
                  updated_at: comandaData.updated_at,
                  // Campi opzionali con valori di default
                  customer_name: comandaData.customer_name || null,
                  customer_phone: comandaData.customer_phone || null,
                  customer_notes: comandaData.customer_notes || null,
                  order_type: comandaData.order_type || "dine_in",
                  status: comandaData.status || "ordered"
                }));
                currentOrders = currentOrders.concat(comande);
              }
            });
          } else if (tableReservations.length > 0) {
            status = "reserved";
            currentReservation = tableReservations[0];
          }
          return {
            table,
            status,
            currentReservation,
            currentOrders,
            tavolataId
          };
        });
      } catch (error) {
        console.error("\u274C Errore calcolo stato tavoli:", error);
        return [];
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TableStatusService_BaseFactory;
    return function TableStatusService_Factory(__ngFactoryType__) {
      return (\u0275TableStatusService_BaseFactory || (\u0275TableStatusService_BaseFactory = \u0275\u0275getInheritedFactory(_TableStatusService)))(__ngFactoryType__ || _TableStatusService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TableStatusService, factory: _TableStatusService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableStatusService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/restaurant/layout/table-map/order-editor/order-editor.ts
var _c0 = () => ({ id: "all", name: "\u{1F37D}\uFE0F Tutti i piatti" });
var _c1 = () => [];
function OrderEditor_div_1_app_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 35);
  }
  if (rf & 2) {
    \u0275\u0275property("isLoading", true);
  }
}
function OrderEditor_div_1_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", comanda_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" Comanda ", comanda_r3.comanda_number, " (", ctx_r1.getComandaTotalQuantity(comanda_r3), " piatti) - \u20AC", \u0275\u0275pipeBind2(2, 4, ctx_r1.getComandaTotal(comanda_r3), "1.2-2"), " ");
  }
}
function OrderEditor_div_1_div_29_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, " Menu Dedicato ");
    \u0275\u0275elementEnd();
  }
}
function OrderEditor_div_1_div_29_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Seleziona Menu ");
    \u0275\u0275elementEnd();
  }
}
function OrderEditor_div_1_div_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7, "Dedicato");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.dedicatedMenu.name);
  }
}
function OrderEditor_div_1_div_29_div_8_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54)(1, "span", 55);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Default ");
    \u0275\u0275elementEnd();
  }
}
function OrderEditor_div_1_div_29_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 46)(3, "span", 15);
    \u0275\u0275text(4, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, OrderEditor_div_1_div_29_div_8_div_1_span_7_Template, 4, 0, "span", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.globalMenus[0].name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.globalMenus[0].is_default);
  }
}
function OrderEditor_div_1_div_29_div_8_div_2_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", menu_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", menu_r5.is_default ? "\u2B50 " : "", "", menu_r5.name, " ");
  }
}
function OrderEditor_div_1_div_29_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function OrderEditor_div_1_div_29_div_8_div_2_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMenu, $event) || (ctx_r1.selectedMenu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderEditor_div_1_div_29_div_8_div_2_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMenuSelectChange($event));
    });
    \u0275\u0275elementStart(2, "option", 56);
    \u0275\u0275text(3, " \u{1F37D}\uFE0F Tutti i piatti ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, OrderEditor_div_1_div_29_div_8_div_2_option_4_Template, 2, 3, "option", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.globalMenus);
  }
}
function OrderEditor_div_1_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, OrderEditor_div_1_div_29_div_8_div_1_Template, 8, 2, "div", 50)(2, OrderEditor_div_1_div_29_div_8_div_2_Template, 5, 4, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.globalMenus.length === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.globalMenus.length > 1);
  }
}
function OrderEditor_div_1_div_29_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275text(4, "Nessun menu disponibile");
    \u0275\u0275elementEnd()();
  }
}
function OrderEditor_div_1_div_29_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62)(1, "span", 55);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Dedicato ");
    \u0275\u0275elementEnd();
  }
}
function OrderEditor_div_1_div_29_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, OrderEditor_div_1_div_29_div_10_span_1_Template, 4, 0, "span", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMenu.type === "dedicated");
  }
}
function OrderEditor_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 30)(2, "label", 38)(3, "span", 15);
    \u0275\u0275text(4, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, OrderEditor_div_1_div_29_span_5_Template, 2, 0, "span", 39)(6, OrderEditor_div_1_div_29_span_6_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, OrderEditor_div_1_div_29_div_7_Template, 8, 1, "div", 41)(8, OrderEditor_div_1_div_29_div_8_Template, 3, 2, "div", 40)(9, OrderEditor_div_1_div_29_div_9_Template, 5, 0, "div", 42)(10, OrderEditor_div_1_div_29_div_10_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.dedicatedMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dedicatedMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dedicatedMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dedicatedMenu && ctx_r1.globalMenus.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasMenusToShow());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMenu);
  }
}
function OrderEditor_div_1_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_38_div_7_Template_div_click_0_listener() {
      const category_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedCategory = category_r8.id);
    });
    \u0275\u0275elementStart(1, "span", 65);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.selectedCategory === category_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(3, 5, category_r8.name, 0, 15), "", category_r8.name.length > 15 ? "..." : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDishesCountByCategory(category_r8.id));
  }
}
function OrderEditor_div_1_div_38_ng_container_9_ng_container_1_div_9_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(2, 2, dish_r10.description, 0, 200), "", dish_r10.description.length > 200 ? "..." : "", " ");
  }
}
function OrderEditor_div_1_div_38_ng_container_9_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "div", 80)(4, "strong", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "button", 82);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_38_ng_container_9_ng_container_1_div_9_Template_button_click_7_listener() {
      const dish_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addDishToOrder(dish_r10));
    });
    \u0275\u0275element(8, "lucide-angular", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 84);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, OrderEditor_div_1_div_38_ng_container_9_ng_container_1_div_9_small_12_Template, 3, 6, "small", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dish_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(dish_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.orderingStatus.allowed || !ctx_r1.canAddItemsToCurrentComanda())("title", !ctx_r1.canAddItemsToCurrentComanda() ? "Comanda in stato avanzato, non modificabile" : !ctx_r1.orderingStatus.allowed ? ctx_r1.orderingStatus.reason : "Aggiungi 1");
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(11, 6, dish_r10.base_price, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showDescriptions && dish_r10.description);
  }
}
function OrderEditor_div_1_div_38_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 71)(2, "div", 72)(3, "span", 73);
    \u0275\u0275text(4, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 74);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 75);
    \u0275\u0275template(9, OrderEditor_div_1_div_38_ng_container_9_ng_container_1_div_9_Template, 13, 9, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", group_r11.category.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r11.dishes.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r11.dishes)("ngForTrackBy", ctx_r1.trackByDishId);
  }
}
function OrderEditor_div_1_div_38_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderEditor_div_1_div_38_ng_container_9_ng_container_1_Template, 10, 4, "ng-container", 70);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getDishesGroupedByCategory())("ngForTrackBy", ctx_r1.trackByCategoryId);
  }
}
function OrderEditor_div_1_div_38_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 15);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 87);
    \u0275\u0275text(4, "Nessun piatto trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 88);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_38_ng_template_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetDishFilters());
    });
    \u0275\u0275text(6, " Reset filtri ");
    \u0275\u0275elementEnd()();
  }
}
function OrderEditor_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 63)(2, "div", 64);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_38_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCategory = "all");
    });
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4, "Tutti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, OrderEditor_div_1_div_38_div_7_Template, 6, 9, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 68);
    \u0275\u0275template(9, OrderEditor_div_1_div_38_ng_container_9_Template, 2, 2, "ng-container", 69)(10, OrderEditor_div_1_div_38_ng_template_10_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noDishes_r13 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedCategory === "all");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getDishesCountByCategory("all"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categoryService.data.slice(0, 4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getDishesGroupedByCategory().length > 0)("ngIfElse", noDishes_r13);
  }
}
function OrderEditor_div_1_div_39_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r15 = ctx.$implicit;
    \u0275\u0275property("value", comanda_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Comanda ", comanda_r15.comanda_number, " (", (comanda_r15.order_items == null ? null : comanda_r15.order_items.length) || 0, " piatti) ");
  }
}
function OrderEditor_div_1_div_39_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "span", 48);
    \u0275\u0275text(2, "Riepilogo di tutte le comande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 103);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" (", (ctx_r1.orderHeader == null ? null : ctx_r1.orderHeader.comande == null ? null : ctx_r1.orderHeader.comande.length) || 0, " comande) ");
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 112);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const item_r17 = \u0275\u0275nextContext().$implicit;
      const comanda_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.startMoveItem(item_r17, comanda_r18.id));
    });
    \u0275\u0275element(2, "lucide-icon", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_15_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const other_r21 = ctx.$implicit;
    \u0275\u0275property("value", other_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Comanda ", other_r21.comanda_number, " ");
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 114, 3);
    \u0275\u0275listener("change", function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_15_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r19);
      const moveSelect_r20 = \u0275\u0275reference(2);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.executeMove(moveSelect_r20.value));
    })("blur", function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_15_Template_select_blur_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.cancelMove());
    });
    \u0275\u0275elementStart(3, "option", 115);
    \u0275\u0275text(4, "Sposta in...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_15_option_5_Template, 2, 2, "option", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 116);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.cancelMove());
    });
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const comanda_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getOtherComandas(comanda_r18.id));
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "div", 111)(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 66);
    \u0275\u0275text(9, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275template(14, OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_14_Template, 3, 0, "ng-container", 40)(15, OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_ng_container_15_Template, 9, 1, "ng-container", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r17.dish_name || "Piatto", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(7, 5, item_r17.unit_price, "1.2-2"), " cad.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Tot: \u20AC", \u0275\u0275pipeBind2(12, 8, item_r17.unit_price * item_r17.quantity, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.movingItem || ctx_r1.movingItem.item.id !== item_r17.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.movingItem == null ? null : ctx_r1.movingItem.item == null ? null : ctx_r1.movingItem.item.id) === item_r17.id);
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_div_6_Template, 16, 11, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Comanda ", comanda_r18.comanda_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.getComandaTotalQuantity(comanda_r18), " piatti)");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", comanda_r18.order_items || \u0275\u0275pureFunction0(3, _c1));
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_div_1_Template, 7, 4, "div", 104);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.orderHeader == null ? null : ctx_r1.orderHeader.comande);
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderEditor_div_1_div_39_ng_container_15_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.orderHeader == null ? null : ctx_r1.orderHeader.comande);
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 109)(2, "div", 110)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 111)(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 66);
    \u0275\u0275text(10, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 66);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 46)(15, "button", 119);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_39_ng_container_15_ng_template_3_div_0_Template_button_click_15_listener($event) {
      const item_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.updateQuantity(item_r23, -1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(16, "span", 15);
    \u0275\u0275text(17, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 120);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 121);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_39_ng_container_15_ng_template_3_div_0_Template_button_click_20_listener($event) {
      const item_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.updateQuantity(item_r23, 1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(21, "lucide-angular", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 122);
    \u0275\u0275listener("click", function OrderEditor_div_1_div_39_ng_container_15_ng_template_3_div_0_Template_button_click_22_listener($event) {
      const item_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.removeItemLocal(item_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(23, "lucide-angular", 123);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r23.dish_name || "Piatto");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(8, 9, item_r23.unit_price, "1.2-2"), " cad.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Tot: \u20AC", \u0275\u0275pipeBind2(13, 12, item_r23.unit_price * item_r23.quantity, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.isItemEditable(item_r23));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r23.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isItemEditable(item_r23) || !ctx_r1.orderingStatus.allowed);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isItemEditable(item_r23));
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderEditor_div_1_div_39_ng_container_15_ng_template_3_div_0_Template, 24, 15, "div", 117);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngForOf", ctx_r1.displayItems);
  }
}
function OrderEditor_div_1_div_39_ng_container_15_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 124)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 125);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Totale generale (", (ctx_r1.orderHeader == null ? null : ctx_r1.orderHeader.comande == null ? null : ctx_r1.orderHeader.comande.length) || 0, " comande):");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(6, 2, ctx_r1.calcolaTotaleTavolata(), "1.2-2"), "");
  }
}
function OrderEditor_div_1_div_39_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderEditor_div_1_div_39_ng_container_15_div_1_Template, 5, 1, "div", 97)(2, OrderEditor_div_1_div_39_ng_container_15_ng_container_2_Template, 2, 1, "ng-container", 69)(3, OrderEditor_div_1_div_39_ng_container_15_ng_template_3_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(5, "div", 98)(6, "div", 99)(7, "strong", 100);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong", 101);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, OrderEditor_div_1_div_39_ng_container_15_ng_container_12_Template, 7, 5, "ng-container", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const singleComandaList_r24 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentComandaId === "all");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentComandaId === "all")("ngIfElse", singleComandaList_r24);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentComandaId === "all" ? "Totale generale" : "Totale Comanda", ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(11, 6, ctx_r1.displayTotal, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentComandaId !== "all" && ctx_r1.hasMultipleComande);
  }
}
function OrderEditor_div_1_div_39_ng_template_16_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1, " Clicca sui piatti per aggiungerli ");
    \u0275\u0275elementEnd();
  }
}
function OrderEditor_div_1_div_39_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "span", 127);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 87);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, OrderEditor_div_1_div_39_ng_template_16_p_5_Template, 2, 0, "p", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentComandaId === "all" ? "Nessun piatto in nessuna comanda" : "Nessun piatto in questa comanda", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentComandaId !== "all");
  }
}
function OrderEditor_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91)(3, "h3", 92)(4, "span", 93);
    \u0275\u0275text(5, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 94);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 95)(10, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function OrderEditor_div_1_div_39_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.currentComandaId, $event) || (ctx_r1.currentComandaId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderEditor_div_1_div_39_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchComanda($event));
    });
    \u0275\u0275elementStart(11, "option", 22);
    \u0275\u0275text(12, "\u{1F4CB} Tutte le comande (riepilogo)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, OrderEditor_div_1_div_39_option_13_Template, 2, 3, "option", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 90);
    \u0275\u0275template(15, OrderEditor_div_1_div_39_ng_container_15_Template, 13, 9, "ng-container", 69)(16, OrderEditor_div_1_div_39_ng_template_16_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emptyOrder_r25 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Comanda ", (ctx_r1.currentComanda == null ? null : ctx_r1.currentComanda.comanda_number) || "1", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getComandaItems().length, " piatt", ctx_r1.getComandaItems().length !== 1 ? "i" : "o", " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentComandaId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getComandeForDropdown());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.displayItems.length > 0)("ngIfElse", emptyOrder_r25);
  }
}
function OrderEditor_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, OrderEditor_div_1_app_loader_2_Template, 1, 1, "app-loader", 8);
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "h1", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "button", 13);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDescriptions());
    });
    \u0275\u0275element(9, "lucide-angular", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 13);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleComandaPage());
    });
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createNewComanda());
    });
    \u0275\u0275elementStart(14, "span", 15);
    \u0275\u0275text(15, "post_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 17);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 18)(20, "span", 19);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 20)(24, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function OrderEditor_div_1_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentComandaId, $event) || (ctx_r1.currentComandaId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderEditor_div_1_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchComanda($event));
    });
    \u0275\u0275elementStart(25, "option", 22);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, OrderEditor_div_1_option_27_Template, 3, 7, "option", 23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 24);
    \u0275\u0275template(29, OrderEditor_div_1_div_29_Template, 11, 6, "div", 25);
    \u0275\u0275elementStart(30, "div", 26)(31, "div", 27)(32, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function OrderEditor_div_1_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dishSearchTerm, $event) || (ctx_r1.dishSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 29)(34, "button", 13);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetDishFilters());
    });
    \u0275\u0275elementStart(35, "span", 15);
    \u0275\u0275text(36, "refresh");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "div", 30);
    \u0275\u0275template(38, OrderEditor_div_1_div_38_Template, 12, 6, "div", 31)(39, OrderEditor_div_1_div_39_Template, 18, 7, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 33)(41, "button", 34);
    \u0275\u0275listener("click", function OrderEditor_div_1_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveOrder());
    });
    \u0275\u0275elementStart(42, "span", 15);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("fullscreen-mobile", ctx_r1.isMobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Tavolo ", ctx_r1.table.table_number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.showDescriptions);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-primary", ctx_r1.showDescriptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.showComandaPage ? "restaurant" : "receipt_long");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.orderHeader || !ctx_r1.isComandaEditable())("title", !ctx_r1.isComandaEditable() ? "La comanda corrente \xE8 in stato avanzato, completa prima di crearne una nuova" : "Crea una nuova comanda nella tavolata corrente");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate3(" ", ctx_r1.getTotalePiattiTutteComande(), " piatt", ctx_r1.getTotalePiattiTutteComande() !== 1 ? "i" : "o", " \u2022 \u20AC", \u0275\u0275pipeBind2(22, 25, ctx_r1.totaleTavolata, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentComandaId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F4CB} Tutte le comande (", ctx_r1.getTotalePiattiTutteComande(), " piatti) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getComandeForDropdown());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasMenusToShow());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dishSearchTerm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.showComandaPage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showComandaPage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.hasUnsavedChanges && !ctx_r1.orderingStatus.allowed)("title", !ctx_r1.orderingStatus.allowed ? ctx_r1.orderingStatus.reason : ctx_r1.hasUnsavedChanges ? "Salva modifiche" : "Nessuna modifica da salvare");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hasUnsavedChanges ? "save" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasUnsavedChanges ? "Salva Modifiche" : "Gi\xE0 salvato", " ");
  }
}
function OrderEditor_div_2_app_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 35);
  }
  if (rf & 2) {
    \u0275\u0275property("isLoading", true);
  }
}
function OrderEditor_div_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 15);
    \u0275\u0275text(2, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun ordine attivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 87);
    \u0275\u0275text(6, "Non ci sono ordini per questo tavolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 140);
    \u0275\u0275listener("click", function OrderEditor_div_2_div_21_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchToEditMode());
    });
    \u0275\u0275element(8, "lucide-angular", 83);
    \u0275\u0275text(9, " Crea Primo Ordine ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("size", 20);
  }
}
function OrderEditor_div_2_div_22_div_1_div_19_div_1_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "small", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Note: ", item_r30.item_notes, "");
  }
}
function OrderEditor_div_2_div_22_div_1_div_19_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "div", 110)(2, "div", 160)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, OrderEditor_div_2_div_22_div_1_div_19_div_1_div_1_div_5_Template, 3, 1, "div", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 162)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 163);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 152)(17, "span", 48);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "small", 150);
    \u0275\u0275text(21, "Totale");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getDishName(item_r30));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r30.item_notes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(9, 8, item_r30.unit_price, "1.2-2"), " cad.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Quantit\xE0: ", item_r30.quantity, "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getOrderStatusColor(item_r30.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOrderStatusText(item_r30.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(19, 11, item_r30.total_price, "1.2-2"), "");
  }
}
function OrderEditor_div_2_div_22_div_1_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275template(1, OrderEditor_div_2_div_22_div_1_div_19_div_1_div_1_Template, 22, 14, "div", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r29 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", comanda_r29.order_items);
  }
}
function OrderEditor_div_2_div_22_div_1_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "span", 15);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 87);
    \u0275\u0275text(4, "Nessun piatto in questa comanda");
    \u0275\u0275elementEnd()();
  }
}
function OrderEditor_div_2_div_22_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, OrderEditor_div_2_div_22_div_1_div_19_div_1_Template, 2, 1, "div", 154)(2, OrderEditor_div_2_div_22_div_1_div_19_div_2_Template, 5, 0, "div", 155);
    \u0275\u0275elementStart(3, "div", 156)(4, "strong", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong", 101);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comanda_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comanda_r29.order_items && comanda_r29.order_items.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !comanda_r29.order_items || comanda_r29.order_items.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Totale Comanda ", comanda_r29.comanda_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20AC", \u0275\u0275pipeBind2(8, 4, ctx_r1.getComandaTotal(comanda_r29), "1.2-2"), " ");
  }
}
function OrderEditor_div_2_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145)(1, "div", 146);
    \u0275\u0275listener("click", function OrderEditor_div_2_div_22_div_1_Template_div_click_1_listener() {
      const comanda_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleComandaExpansion(comanda_r29.id));
    });
    \u0275\u0275elementStart(2, "div", 147)(3, "div", 30)(4, "div", 148)(5, "h3", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 149);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 150);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 151)(13, "div", 152)(14, "span", 74);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 66);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(19, OrderEditor_div_2_div_22_div_1_div_19_Template, 9, 7, "div", 153);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Comanda ", comanda_r29.comanda_number, "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getOrderStatusColor(comanda_r29.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOrderStatusText(comanda_r29.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 9, comanda_r29.created_at, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20AC", \u0275\u0275pipeBind2(16, 12, ctx_r1.getComandaTotal(comanda_r29), "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (comanda_r29.order_items == null ? null : comanda_r29.order_items.length) || 0, " piatto", (comanda_r29.order_items == null ? null : comanda_r29.order_items.length) !== 1 ? "i" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isComandaExpanded(comanda_r29.id));
  }
}
function OrderEditor_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, OrderEditor_div_2_div_22_div_1_Template, 20, 15, "div", 141);
    \u0275\u0275elementStart(2, "div", 142)(3, "div", 91)(4, "div")(5, "strong", 143);
    \u0275\u0275text(6, "TOTALE TAVOLO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 144);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "strong", 100);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.orderHeader.comande);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTotalComandeCount(), " comande ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20AC", \u0275\u0275pipeBind2(11, 3, ctx_r1.calcolaTotaleTavolata(), "1.2-2"), " ");
  }
}
function OrderEditor_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function OrderEditor_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 129);
    \u0275\u0275listener("click", function OrderEditor_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, OrderEditor_div_2_app_loader_2_Template, 1, 1, "app-loader", 8);
    \u0275\u0275elementStart(3, "div", 130)(4, "div", 46)(5, "div", 131)(6, "span", 15);
    \u0275\u0275text(7, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "h1", 132);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 111)(12, "span", 94);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 133);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function OrderEditor_div_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 134);
    \u0275\u0275template(21, OrderEditor_div_2_div_21_Template, 10, 1, "div", 135)(22, OrderEditor_div_2_div_22_Template, 12, 6, "div", 136);
    \u0275\u0275elementStart(23, "div", 137)(24, "button", 138);
    \u0275\u0275listener("click", function OrderEditor_div_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printBillAndFreeTable());
    });
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " STAMPA SCONTRINO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 139);
    \u0275\u0275listener("click", function OrderEditor_div_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(29, "span", 15);
    \u0275\u0275text(30, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Chiudi ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("fullscreen-mobile", ctx_r1.isMobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Ordini Tavolo ", ctx_r1.table.table_number || "N/A", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (ctx_r1.orderHeader == null ? null : ctx_r1.orderHeader.comande == null ? null : ctx_r1.orderHeader.comande.length) || 0, " Ordine", (ctx_r1.orderHeader == null ? null : ctx_r1.orderHeader.comande == null ? null : ctx_r1.orderHeader.comande.length) !== 1 ? "i" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Totale: \u20AC", \u0275\u0275pipeBind2(16, 10, ctx_r1.calcolaTotaleTavolata(), "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.orderHeader || !ctx_r1.orderHeader.comande || ctx_r1.orderHeader.comande.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.orderHeader && ctx_r1.orderHeader.comande && ctx_r1.orderHeader.comande.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.orderHeader || !ctx_r1.orderHeader.comande || ctx_r1.orderHeader.comande.length === 0);
  }
}
var OrderEditor = class _OrderEditor {
  // ===== SERVIZI =====
  orderHelper = inject(OrderHelperService);
  orderHeaderService = inject(OrderHeaderService);
  comandaService = inject(ComandaService);
  orderItemService = inject(OrderItemService);
  dishService = inject(DishService);
  loadingService = inject(LoadingService);
  categoryService = inject(CategoryService);
  menuService = inject(MenuManagementService);
  cdr = inject(ChangeDetectorRef);
  restaurantPublicService = inject(RestaurantPublicService);
  authService = inject(AuthService);
  orderStateService = inject(OrderStateService);
  tutorialService = inject(TutorialService);
  isTutorialStep = signal(false);
  ngZone = inject(NgZone);
  // POSIZIONE
  cachedDishGroups = [];
  lastDishesLength = 0;
  lastCategoryId = "";
  lastSearchTerm = "";
  // ===== INPUT/OUTPUT =====
  table;
  mode = "edit";
  existingOrderHeader;
  orderingStatus = { allowed: true, reason: "" };
  selectedComandaId;
  saved = new EventEmitter();
  closeRequested = new EventEmitter();
  // ===== STATO =====
  orderHeader = null;
  currentComanda = null;
  dishes = [];
  currentComandaId = "";
  isLoading = false;
  restaurantData = null;
  // SPOSTAMENTO
  movingItem = null;
  // DESCRIZIONE PIATTO
  showDescriptions = false;
  // Solo i dati essenziali per l'UI
  searchTerm = "";
  selectedCategory = "all";
  dishSearchTerm = "";
  isMobile = false;
  isNewOrder = false;
  // ===== MENU =====
  activeMenus = [];
  selectedMenu = { id: "all", name: "Tutti i piatti" };
  menuDishes = [];
  // Per espansione (view mode)
  comandeExpanded = {};
  // Per scontrino
  // Comanda Page
  showComandaPage = false;
  // Salvataggio locale 
  draftOrder = null;
  localChanges = [];
  hasUnsavedChanges = false;
  constructor() {
    effect(() => {
      const step = this.tutorialService.currentStepData();
      const isStep = step?.id === "order-editor";
      if (isStep !== this.isTutorialStep()) {
        setTimeout(() => {
          this.isTutorialStep.set(isStep);
          if (isStep) {
            setTimeout(() => {
              this.tutorialService.refreshTooltip();
            }, 1e3);
          }
        });
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("\u{1F504} OrderEditor init - mode:", this.mode);
      this.loadingService.start();
      this.isLoading = true;
      try {
        console.log("\u{1F4CA} Tavolo:", this.table?.table_number);
        console.log("\u{1F4E6} Existing Order Header:", this.existingOrderHeader?.id);
        console.log("\u{1F37D}\uFE0F Caricamento piatti...");
        yield this.dishService.loadData();
        const allDishes = this.dishService.getDishes();
        const activeDishes = this.dishService.getActiveDishes();
        console.log(`\u{1F50D} DEBUG Piatti: Totali=${allDishes.length}, Attivi=${activeDishes.length}`);
        const deletedDishes = allDishes.filter((dish) => dish.deleted_at);
        if (deletedDishes.length > 0) {
          console.warn("\u26A0\uFE0F Piatti eliminati trovati:", deletedDishes.map((d) => ({
            id: d.id,
            name: d.name,
            deleted_at: d.deleted_at
          })));
        }
        this.dishes = this.dishService.getActiveDishes();
        console.log("\u2705 Piatti attivi per order-editor:", this.dishes.length);
        yield this.categoryService.loadData();
        yield this.loadActiveMenus();
        if (this.mode === "view" && this.existingOrderHeader) {
          yield this.loadOrderForView();
        } else if (this.mode === "edit") {
          yield this.setupForEdit();
        }
        this.initializeComandaDropdown();
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (restaurantId) {
          this.restaurantData = yield this.restaurantPublicService.loadRestaurantById(restaurantId);
          console.log("\u{1F3E2} Dati ristorante caricati:", this.restaurantData);
        }
      } catch (error) {
        console.error("\u274C Errore inizializzazione order-editor:", error);
      } finally {
        this.loadingService.stop();
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  initializeComandaDropdown() {
    if (!this.orderHeader?.comande || this.orderHeader.comande.length === 0) {
      if (this.mode === "edit") {
        this.createNewComandaLocal();
      }
    }
    if (this.currentComanda) {
      this.currentComandaId = this.currentComanda.id;
    } else if (this.orderHeader?.comande && this.orderHeader.comande.length > 0) {
      this.currentComanda = this.orderHeader.comande[0];
      this.currentComandaId = this.currentComanda.id;
    }
  }
  // ===== METODI PER I MENU =====
  loadActiveMenus() {
    return __async(this, null, function* () {
      try {
        yield this.menuService.loadMenus();
        this.activeMenus = this.menuService.getCurrentMenus().filter((menu) => menu.is_active);
        console.log("\u{1F4CB} Menu attivi:", this.activeMenus.length);
        if (this.activeMenus.length > 0) {
          const defaultMenu = this.activeMenus.find((m) => m.is_default);
          this.selectedMenu = defaultMenu || this.activeMenus[0];
          yield this.loadDishesForSelectedMenu();
        }
      } catch (error) {
        console.error("\u274C Errore caricamento menu:", error);
      }
    });
  }
  loadDishesForSelectedMenu() {
    return __async(this, null, function* () {
      if (this.selectedMenu.id === "all") {
        this.dishes = this.dishService.getActiveDishes();
        this.menuDishes = [];
        console.log(`\u2705 Menu 'Tutti i piatti': ${this.dishes.length} piatti attivi`);
      } else {
        try {
          this.menuDishes = yield this.menuService.getDishesWithDetailsByMenu(this.selectedMenu.id);
          this.dishes = this.menuDishes.filter((item) => {
            const hasDish = item.dish && item.dish.id;
            const isDeleted = item.dish?.deleted_at;
            const isActive = item.dish?.status === "available" && !isDeleted;
            return hasDish && isActive;
          }).map((item) => item.dish);
          console.log(`\u2705 Menu '${this.selectedMenu.name}': ${this.dishes.length} piatti attivi`);
        } catch (error) {
          console.error("\u274C Errore caricamento piatti menu:", error);
          this.dishes = this.dishService.getActiveDishes();
        }
      }
      this.cachedDishGroups = [];
      this.cdr.markForCheck();
    });
  }
  // ===== MODALITÀ VIEW =====
  loadOrderForView() {
    return __async(this, null, function* () {
      if (!this.existingOrderHeader)
        return;
      try {
        this.loadingService.start();
        this.isLoading = true;
        console.log("\u{1F441}\uFE0F Caricamento ordine per visualizzazione:", this.existingOrderHeader.id);
        const fullOrder = yield this.orderHelper.loadFullOrder(this.existingOrderHeader.id);
        if (fullOrder) {
          this.orderHeader = fullOrder;
          console.log("\u2705 Ordine caricato con", fullOrder.comande?.length, "comande");
          if (fullOrder.comande) {
            fullOrder.comande.forEach((comanda, index) => {
              console.log(`\u{1F4CA} Comanda ${index + 1}:`, {
                comanda_number: comanda.comanda_number,
                total_amount: comanda.total_amount,
                items_count: comanda.order_items?.length,
                items_total: comanda.order_items?.reduce((sum, item) => sum + (item.total_price || 0), 0)
              });
            });
          }
          if (fullOrder.comande && fullOrder.comande.length > 0) {
            const activeComanda = fullOrder.comande.find((c) => c.status !== "cancelled");
            this.currentComanda = activeComanda || fullOrder.comande[0];
            console.log("\u{1F4CB} Comanda corrente:", this.currentComanda?.comanda_number);
          }
        } else {
          console.error("\u274C Ordine non trovato");
        }
      } catch (error) {
        console.error("\u274C Errore caricamento ordine:", error);
      } finally {
        this.loadingService.stop();
        this.isLoading = false;
      }
    });
  }
  // ===== MODALITÀ EDIT =====
  setupForEdit() {
    return __async(this, null, function* () {
      try {
        console.log("\u270F\uFE0F Setup modalit\xE0 edit in DRAFT per tavolo:", this.table.table_number);
        if (this.existingOrderHeader) {
          console.log("\u{1F4E6} Carico ordine esistente in draft:", this.existingOrderHeader.id);
          this.draftOrder = yield this.orderHelper.loadFullOrder(this.existingOrderHeader.id);
          this.updateOrderHeader();
          this.isNewOrder = false;
        } else {
          const existingTavolata = yield this.orderHeaderService.getActiveByTable(this.table.id);
          if (existingTavolata) {
            console.log("\u2705 Tavolata esistente trovata, carico in draft");
            this.draftOrder = yield this.orderHelper.loadFullOrder(existingTavolata.id);
            this.updateOrderHeader();
            this.isNewOrder = false;
          } else {
            console.log("\u{1F195} Creo nuova struttura vuota in draft");
            this.draftOrder = this.createEmptyOrderHeader();
            this.updateOrderHeader();
            this.isNewOrder = true;
          }
        }
        if (this.draftOrder?.comande && this.draftOrder.comande.length > 0) {
          if (this.selectedComandaId) {
            const selectedComanda = this.draftOrder.comande.find((c) => c.id === this.selectedComandaId);
            this.currentComanda = selectedComanda || this.draftOrder.comande[0];
            console.log("\u{1F3AF} Comanda selezionata tramite ID:", this.selectedComandaId);
          } else {
            const lastComanda = this.draftOrder.comande.slice().reverse().find((c) => c.status !== "cancelled");
            this.currentComanda = lastComanda || this.draftOrder.comande[0];
          }
          if (this.currentComanda) {
            this.currentComandaId = this.currentComanda.id;
          }
        }
        this.dishes = this.dishService.getActiveDishes();
        yield this.loadActiveMenus();
      } catch (error) {
        console.error("\u274C Errore setup edit:", error);
      }
    });
  }
  // Metodo per creare struttura vuota
  createEmptyOrderHeader() {
    return {
      id: "draft-" + Date.now(),
      restaurant_id: "",
      table_id: this.table.id,
      order_number: "DRAFT-" + this.table.table_number + "-" + Date.now(),
      status: "draft",
      // Ora è valido
      customer_name: "Cliente",
      total_amount: 0,
      comande: [],
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  loadOrderForEdit(orderHeaderId) {
    return __async(this, null, function* () {
      console.log("\u{1F504} Caricamento ordine per edit:", orderHeaderId);
      const orderHeader = yield this.orderHelper.loadFullOrder(orderHeaderId);
      if (!orderHeader) {
        console.error("\u274C Ordine non trovato per edit");
        return;
      }
      this.orderHeader = orderHeader;
      if (orderHeader.comande && orderHeader.comande.length > 0) {
        const activeComanda = orderHeader.comande.slice().reverse().find((c) => c.status !== "cancelled");
        this.currentComanda = activeComanda || orderHeader.comande[0];
        console.log("\u{1F4CB} Comanda attiva per edit:", this.currentComanda?.comanda_number);
      }
    });
  }
  // ===== CREAZIONE NUOVA TAVOLATA =====
  createNewOrder() {
    return __async(this, null, function* () {
      console.log("\u{1F195} Creazione tavolata per tavolo:", this.table.table_number);
      try {
        const result = yield this.orderHelper.occupyTable(this.table.id, "Cliente");
        if (!result.orderHeader || !result.comanda) {
          console.error("\u274C Impossibile creare tavolata");
          return false;
        }
        this.orderHeader = yield this.orderHelper.loadFullOrder(result.orderHeader.id);
        if (this.orderHeader?.comande && this.orderHeader.comande.length > 0) {
          this.currentComanda = this.orderHeader.comande[0];
        }
        console.log("\u2705 Tavolata creata:", result.orderHeader.id);
        return true;
      } catch (error) {
        console.error("\u274C Errore creazione tavolata:", error);
        return false;
      }
    });
  }
  // ===== CREAZIONE NUOVA COMANDA =====
  createNewComanda() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F195} Creazione nuova comanda in modalit\xE0 DRAFT");
        if (!this.draftOrder) {
          console.log("\u{1F4DD} Creo prima una struttura draft");
          this.draftOrder = this.createEmptyOrderHeader();
          this.updateOrderHeader();
        }
        yield this.createNewComandaLocal();
        console.log("\u2705 Nuova comanda creata in draft");
      } catch (error) {
        console.error("\u274C Errore creazione nuova comanda:", error);
      }
    });
  }
  // ===== OPERAZIONI PIATTI =====
  addDish(dish) {
    return __async(this, null, function* () {
      try {
        console.log("\u2795 Aggiungi piatto in DRAFT:", dish.name);
        if (!this.draftOrder) {
          this.draftOrder = this.createEmptyOrderHeader();
          this.orderHeader = __spreadValues({}, this.draftOrder);
          if (this.orderHeader.comande) {
            this.orderHeader.comande = [...this.orderHeader.comande];
          }
        }
        if (!this.currentComanda) {
          yield this.createNewComandaLocal();
        }
        if (this.currentComanda && this.currentComanda.order_items) {
          const existingItem = this.currentComanda.order_items.find((item) => item.dish_id === dish.id);
          if (existingItem) {
            console.log("\u{1F4C8} Piatto gi\xE0 presente, incremento quantit\xE0");
            this.cdr.markForCheck();
            yield this.updateQuantity(existingItem, 1);
            return;
          }
        }
        if (!this.currentComanda) {
          console.error("\u274C currentComanda \xE8 ancora null");
          this.cdr.markForCheck();
          return;
        }
        const newItem = {
          id: "draft-item-" + Date.now(),
          order_id: this.currentComanda.id,
          dish_id: dish.id,
          dish_name: dish.name,
          quantity: 1,
          unit_price: dish.base_price,
          total_price: dish.base_price,
          status: "ordered",
          item_notes: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        if (!this.currentComanda.order_items) {
          this.currentComanda.order_items = [];
        }
        this.currentComanda.order_items.push(newItem);
        if (!this.draftOrder.comande) {
          this.draftOrder.comande = [];
        }
        const comandaIndex = this.draftOrder.comande.findIndex((c) => c.id === this.currentComanda.id);
        if (comandaIndex >= 0) {
          this.draftOrder.comande[comandaIndex] = this.currentComanda;
        } else {
          this.draftOrder.comande.push(this.currentComanda);
        }
        this.localChanges.push({
          type: "add",
          data: newItem,
          timestamp: /* @__PURE__ */ new Date()
        });
        this.hasUnsavedChanges = true;
        this.updateLocalTotals();
        console.log("\u2705 Piatto aggiunto in draft. Modifiche in sospeso:", this.localChanges.length);
      } catch (error) {
        console.error("\u{1F4A5} Errore in addDish (draft):", error);
      } finally {
        this.cdr.markForCheck();
      }
    });
  }
  // Metodo per creare nuova comanda in locale
  createNewComandaLocal() {
    return __async(this, null, function* () {
      if (!this.draftOrder) {
        this.draftOrder = this.createEmptyOrderHeader();
        this.updateOrderHeader();
      }
      console.log("\u{1F195} Creo nuova comanda in DRAFT per tavolata:", this.draftOrder.id);
      const comandaNumber = (this.draftOrder.comande?.length || 0) + 1;
      const newComanda = {
        id: "draft-comanda-" + Date.now(),
        order_number: `${this.draftOrder.order_number}-${comandaNumber}`,
        restaurant_id: "",
        order_header_id: this.draftOrder.id,
        tavolata_id: this.draftOrder.id,
        comanda_number: comandaNumber,
        table_id: this.table.id,
        customer_name: this.draftOrder.customer_name,
        status: "ordered",
        order_type: "dine_in",
        subtotal: 0,
        tax_amount: 0,
        discount_amount: 0,
        total_amount: 0,
        order_items: [],
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (!this.draftOrder.comande) {
        this.draftOrder.comande = [];
      }
      this.draftOrder.comande.push(newComanda);
      this.currentComanda = newComanda;
      this.currentComandaId = newComanda.id;
      this.updateOrderHeader();
      this.localChanges.push({
        type: "new_comanda",
        data: newComanda,
        timestamp: /* @__PURE__ */ new Date()
      });
      this.hasUnsavedChanges = true;
      console.log("\u2705 Nuova comanda creata in draft:", comandaNumber);
    });
  }
  // Alias per il template
  addDishToOrder(dish) {
    this.addDish(dish);
  }
  updateQuantity(item, delta) {
    return __async(this, null, function* () {
      if (!this.currentComanda?.order_items)
        return;
      try {
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1) {
          this.cdr.markForCheck();
          yield this.removeItemLocal(item);
          return;
        }
        const itemIndex = this.currentComanda.order_items.findIndex((i) => i.id === item.id);
        if (itemIndex === -1)
          return;
        const targetItem = this.currentComanda.order_items[itemIndex];
        targetItem.quantity = newQuantity;
        targetItem.total_price = targetItem.unit_price * newQuantity;
        this.updateLocalTotals();
        this.localChanges.push({
          type: "update",
          data: { itemId: item.id, quantity: newQuantity },
          timestamp: /* @__PURE__ */ new Date()
        });
        this.hasUnsavedChanges = true;
        console.log("\u{1F4C8} Quantit\xE0 aggiornata in draft:", newQuantity);
      } catch (error) {
        console.error("\u274C Errore in updateQuantity:", error);
      } finally {
        this.cdr.markForCheck();
      }
    });
  }
  // Metodo per rimuovere in locale
  removeItemLocal(item) {
    return __async(this, null, function* () {
      if (!this.currentComanda?.order_items)
        return;
      try {
        const itemIndex = this.currentComanda.order_items.findIndex((i) => i.id === item.id);
        if (itemIndex === -1)
          return;
        this.currentComanda.order_items.splice(itemIndex, 1);
        this.localChanges.push({
          type: "delete",
          data: item,
          timestamp: /* @__PURE__ */ new Date()
        });
        this.hasUnsavedChanges = true;
        this.updateLocalTotals();
        console.log("\u{1F5D1}\uFE0F Piatto rimosso in draft:", item.id);
      } catch (error) {
        console.error("\u274C Errore in removeItemLocal:", error);
      } finally {
        this.cdr.markForCheck();
      }
    });
  }
  // Aggiorna totali in locale
  updateLocalTotals() {
    if (!this.currentComanda || !this.currentComanda.order_items)
      return;
    this.recalculateComandaTotal(this.currentComanda);
    if (this.draftOrder && this.draftOrder.comande) {
      this.draftOrder.comande.forEach((comanda) => {
        this.recalculateComandaTotal(comanda);
      });
      this.draftOrder.total_amount = this.draftOrder.comande.reduce((total, comanda) => total + (comanda.total_amount || 0), 0);
      if (this.orderHeader) {
        this.orderHeader.total_amount = this.draftOrder.total_amount;
        const comandaIndex = this.orderHeader.comande?.findIndex((c) => c.id === this.currentComanda?.id);
        if (comandaIndex !== void 0 && comandaIndex >= 0 && this.orderHeader.comande) {
          this.orderHeader.comande[comandaIndex].total_amount = this.currentComanda.total_amount;
          this.orderHeader.comande[comandaIndex].order_items = this.currentComanda.order_items;
        }
      }
    }
  }
  // Nuovo metodo per salvare tutto nel database
  saveAllToDatabase() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F4BE} Salvando tutte le modifiche in database...", this.localChanges.length, "modifiche");
        if (!this.draftOrder) {
          console.error("\u274C Nessun draft da salvare");
          return false;
        }
        if (this.draftOrder.comande) {
          this.draftOrder.comande = this.draftOrder.comande.filter((comanda) => comanda.order_items && comanda.order_items.length > 0);
        }
        if (!this.draftOrder.comande || this.draftOrder.comande.length === 0) {
          console.log("\u26A0\uFE0F Nessuna comanda con piatti da salvare");
          if (this.isNewOrder) {
            console.log("\u2705 Nessun ordine creato (tutte le comande erano vuote)");
            return true;
          }
        }
        let success = true;
        let realOrderHeaderId = this.draftOrder.id;
        if (this.isNewOrder && this.draftOrder.id.startsWith("draft-")) {
          console.log("\u{1F195} Creazione nuova tavolata nel database...");
          const newHeader = yield this.orderHeaderService.createForTable(this.table.id, this.draftOrder.customer_name || "Cliente");
          if (!newHeader) {
            console.error("\u274C Impossibile creare order header");
            return false;
          }
          realOrderHeaderId = newHeader.id;
          console.log("\u2705 Order header creato:", realOrderHeaderId);
        }
        const comandaIdMap = /* @__PURE__ */ new Map();
        for (const change of this.localChanges.filter((c) => c.type === "new_comanda")) {
          const comandaData = change.data;
          console.log("\u{1F4E6} Creazione comanda nel database...");
          const newComanda = yield this.comandaService.createForOrderHeader(realOrderHeaderId, comandaData.comanda_number);
          if (newComanda) {
            comandaIdMap.set(comandaData.id, newComanda.id);
            console.log(`\u2705 Comanda creata: draft ${comandaData.id} -> real ${newComanda.id}`);
          } else {
            console.error("\u274C Errore creazione comanda per:", comandaData.id);
            success = false;
          }
        }
        for (const change of this.localChanges) {
          switch (change.type) {
            case "add":
              const itemData = change.data;
              let targetComandaId = itemData.order_id;
              if (comandaIdMap.has(itemData.order_id)) {
                targetComandaId = comandaIdMap.get(itemData.order_id);
              }
              console.log("\u2795 Aggiungo piatto al database...");
              const itemAdded = yield this.orderItemService.addItemToComanda(targetComandaId, itemData.dish_id, itemData.quantity, itemData.unit_price, itemData.item_notes || "");
              if (!itemAdded) {
                console.error("\u274C Errore aggiunta piatto:", itemData);
                success = false;
              }
              break;
            case "update":
              const updateData = change.data;
              if (!updateData.itemId.startsWith("draft-")) {
                console.log("\u{1F4C8} Aggiorno quantit\xE0 nel database...");
                const updated = yield this.orderHelper.updateItemQuantity(updateData.itemId, updateData.quantity);
                if (!updated) {
                  console.error("\u274C Errore aggiornamento quantit\xE0:", updateData);
                  success = false;
                }
              }
              break;
            case "delete":
              const deleteData = change.data;
              if (!deleteData.id.startsWith("draft-")) {
                console.log("\u{1F5D1}\uFE0F Rimuovo piatto dal database...");
                const deleted = yield this.orderHelper.removeItem(deleteData.id);
                if (!deleted) {
                  console.error("\u274C Errore rimozione piatto:", deleteData);
                  success = false;
                }
              }
              break;
          }
        }
        return success;
      } catch (error) {
        console.error("\u{1F4A5} Errore durante il salvataggio:", error);
        return false;
      }
    });
  }
  confirmRemoveItem(item) {
    const confirm2 = window.confirm(`Vuoi eliminare "${item.dish_name}" dalla comanda?`);
    if (confirm2) {
      this.removeItemLocal(item);
    }
  }
  // ===== UTILITY =====
  updateTotals() {
    if (!this.currentComanda || !this.currentComanda.order_items)
      return;
    this.currentComanda.total_amount = this.currentComanda.order_items.reduce((total, item) => total + (item.total_price || 0), 0);
    if (this.orderHeader && this.orderHeader.comande) {
      this.orderHeader.total_amount = this.orderHeader.comande.reduce((total, comanda) => total + (comanda.total_amount || 0), 0);
    }
    console.log("\u{1F4B0} Totale aggiornato:", this.currentComanda.total_amount);
  }
  getFilteredDishes() {
    let filtered = this.dishes.filter((dish) => {
      const isDeleted = dish.deleted_at !== null && dish.deleted_at !== void 0;
      const isActive = dish.status === "available";
      if (isDeleted) {
        console.warn(`\u26A0\uFE0F Piatto eliminato filtrato: ${dish.name} (ID: ${dish.id})`);
        return false;
      }
      return isActive && !isDeleted;
    });
    console.log(`\u{1F50D} Dopo filtro eliminati: ${filtered.length} piatti`);
    if (this.selectedCategory !== "all") {
      filtered = filtered.filter((d) => d.category_id === this.selectedCategory);
    }
    if (this.dishSearchTerm) {
      const term = this.dishSearchTerm.toLowerCase();
      filtered = filtered.filter((d) => d.name.toLowerCase().includes(term) || d.description?.toLowerCase().includes(term));
    }
    return filtered;
  }
  getComandaItems() {
    return this.currentComanda?.order_items || [];
  }
  getComandaTotal(comanda) {
    const target = comanda || this.currentComanda;
    if (!target || !target.order_items)
      return 0;
    if (target.total_amount === 0 && target.order_items.length > 0) {
      const calculatedTotal = target.order_items.reduce((sum, item) => {
        const itemTotal = item.total_price || item.unit_price * item.quantity;
        return sum + itemTotal;
      }, 0);
      target.total_amount = calculatedTotal;
      return calculatedTotal;
    }
    return target.total_amount || 0;
  }
  // ===== METODI PER CATEGORIE =====
  getDishesCountByCategory(categoryId) {
    const filtered = this.getFilteredDishes();
    if (categoryId === "all")
      return filtered.length;
    return filtered.filter((d) => d.category_id === categoryId).length;
  }
  debugRealTimeGroups() {
    console.log("\u{1F50D} [DEBUG REAL-TIME] Analisi immediata dei gruppi:");
    const groups = this.getDishesGroupedByCategory();
    groups.forEach((group, groupIndex) => {
      console.log(`
\u{1F4C1} Categoria: ${group.category.name} (${group.dishes.length} piatti)`);
      const deletedInThisGroup = group.dishes.filter((dish) => dish.deleted_at);
      if (deletedInThisGroup.length > 0) {
        console.error(`\u274C\u274C\u274C PIATTI ELIMINATI TROVATI in ${group.category.name}:`);
        deletedInThisGroup.forEach((dish, index) => {
          console.error(`   ${index + 1}. ${dish.name} - deleted_at: ${dish.deleted_at}`);
        });
      }
    });
    const totalDeleted = groups.flatMap((g) => g.dishes).filter((d) => d.deleted_at).length;
    console.log(`
\u{1F4CA} TOTALE PIATTI ELIMINATI NEI GRUPPI: ${totalDeleted}`);
    if (totalDeleted > 0) {
      console.error("\u{1F525}\u{1F525}\u{1F525} PROBLEMA CONFERMATO: Piatti eliminati nei gruppi visualizzati!");
    }
  }
  getDishesGroupedByCategory() {
    console.log("\u{1F504} Ricreazione gruppi piatti...");
    this.cachedDishGroups = [];
    this.lastCategoryId = "";
    this.lastSearchTerm = "";
    this.lastDishesLength = 0;
    const filteredDishes = this.getFilteredDishes();
    console.log(`\u{1F4CA} Gruppi: ${filteredDishes.length} piatti filtrati`);
    const deletedInFiltered = filteredDishes.filter((dish) => dish.deleted_at);
    if (deletedInFiltered.length > 0) {
      console.error("\u274C\u274C\u274C PIATTI ELIMINATI NEI FILTRATI:", deletedInFiltered.map((d) => d.name));
    }
    const categories = this.categoryService.data;
    const groups = [];
    categories.forEach((category) => {
      const categoryDishes = filteredDishes.filter((dish) => {
        const matchesCategory = dish.category_id === category.id;
        const isNotDeleted = !dish.deleted_at;
        const isAvailable = dish.status === "available";
        if (matchesCategory && (!isNotDeleted || !isAvailable)) {
          console.warn(`\u26A0\uFE0F Piatto problematico in categoria ${category.name}:`, {
            name: dish.name,
            deleted_at: dish.deleted_at,
            status: dish.status
          });
        }
        return matchesCategory && isNotDeleted && isAvailable;
      });
      if (categoryDishes.length > 0) {
        groups.push({
          category,
          dishes: categoryDishes
        });
      }
    });
    this.cachedDishGroups = groups;
    return groups;
  }
  // Metodo per ottenere categorie (sincrono)
  getCategories() {
    return this.categoryService.data;
  }
  // ===== METODI PER GESTIONE COMANDE =====
  getComandeForDropdown() {
    return this.orderHeader?.comande || [];
  }
  getCurrentComande() {
    return this.orderHeader?.comande || [];
  }
  switchComanda(comandaId) {
    if (comandaId === "all") {
      this.currentComanda = null;
      this.currentComandaId = "all";
      this.cdr.markForCheck();
      return;
    }
    const newComanda = this.orderHeader?.comande?.find((c) => c.id === comandaId);
    if (newComanda) {
      this.currentComanda = newComanda;
      this.currentComandaId = comandaId;
      this.recalculateComandaTotal(this.currentComanda);
      this.cdr.markForCheck();
    }
  }
  // Getter per gli items da mostrare
  get displayItems() {
    if (this.currentComandaId === "all") {
      return this.orderHeader?.comande?.flatMap((c) => c.order_items || []) || [];
    }
    return this.currentComanda?.order_items || [];
  }
  // Getter per il totale da mostrare
  get displayTotal() {
    if (this.currentComandaId === "all") {
      return this.orderHeader?.total_amount || 0;
    }
    return this.currentComanda?.total_amount || 0;
  }
  // Getter per il conteggio piatti
  get displayQuantity() {
    if (this.currentComandaId === "all") {
      return this.getTotalePiattiTutteComande();
    }
    return this.getComandaTotalQuantity(this.currentComanda);
  }
  // (Opzionale) Impedisci modifiche in modalità "tutte"
  get isSingleComandaMode() {
    return this.currentComandaId !== "all";
  }
  recalculateComandaTotal(comanda) {
    if (!comanda.order_items || comanda.order_items.length === 0) {
      comanda.total_amount = 0;
      return;
    }
    const calculatedTotal = comanda.order_items.reduce((sum, item) => {
      const itemTotal = item.total_price || item.unit_price * item.quantity;
      return sum + itemTotal;
    }, 0);
    comanda.total_amount = calculatedTotal;
    console.log(`\u{1F4B0} Comanda ${comanda.comanda_number} totale ricalcolato:`, calculatedTotal);
  }
  // ===== METODI PER QUANTITÀ =====
  getComandaTotalQuantity(comanda) {
    if (!comanda)
      return 0;
    if (!comanda.order_items || comanda.order_items.length === 0)
      return 0;
    return comanda.order_items.reduce((total, item) => total + (item.quantity || 1), 0);
  }
  // Metodo che RIUTILIZZA getComandaTotalQuantity
  getTotalePiattiTutteComande() {
    if (!this.orderHeader?.comande)
      return 0;
    let totale = 0;
    for (const comanda of this.orderHeader.comande) {
      totale += this.getComandaTotalQuantity(comanda);
    }
    return totale;
  }
  // ===== METODI PER ESPANSIONE VIEW MODE =====
  toggleComandaExpansion(comandaId) {
    this.comandeExpanded[comandaId] = !this.comandeExpanded[comandaId];
  }
  isComandaExpanded(comandaId) {
    return this.comandeExpanded[comandaId] || false;
  }
  // ===== METODI PER AZIONI =====
  saveOrder() {
    return __async(this, null, function* () {
      try {
        const emptyComande = this.getEmptyComande();
        if (emptyComande.length > 0) {
          const comandeNumbers = emptyComande.map((c) => c.comanda_number).join(", ");
          const confirmMessage = `Le seguenti comande sono vuote: ${comandeNumbers}. 
Se procedi, queste comande vuote verranno eliminate dal salvataggio. 
Vuoi continuare comunque?`;
          const userConfirmed = window.confirm(confirmMessage);
          if (!userConfirmed) {
            console.log("\u274C Salvataggio annullato dall'utente");
            return;
          }
          this.removeEmptyComandeFromDraft(emptyComande);
        }
        this.loadingService.start();
        this.isLoading = true;
        console.log("\u{1F4BE} Salvando ordine...");
        const success = yield this.saveAllToDatabase();
        if (success) {
          console.log("\u2705 Ordine salvato nel database");
          if (this.draftOrder && !this.draftOrder.id.startsWith("draft-")) {
            const freshOrder = yield this.orderHelper.loadFullOrder(this.draftOrder.id);
            if (freshOrder) {
              this.draftOrder = freshOrder;
              this.orderHeader = JSON.parse(JSON.stringify(freshOrder));
              if (freshOrder.comande && freshOrder.comande.length > 0) {
                const lastComanda = freshOrder.comande.slice().reverse().find((c) => c.status !== "cancelled");
                this.currentComanda = lastComanda || freshOrder.comande[0];
              }
            }
          }
          this.saved.emit(this.orderHeader);
          this.localChanges = [];
          this.hasUnsavedChanges = false;
          console.log("\u{1F389} Ordine salvato con successo");
        } else {
          console.error("\u274C Errore durante il salvataggio");
          alert("Errore durante il salvataggio dell'ordine");
        }
      } catch (error) {
        console.error("\u274C Errore salvataggio ordine:", error);
        alert("Errore durante il salvataggio: " + error.message);
      } finally {
        this.loadingService.stop();
        this.isLoading = false;
      }
    });
  }
  removeEmptyComandeFromDraft(emptyComande) {
    if (!this.draftOrder?.comande)
      return;
    console.log("\u{1F5D1}\uFE0F Rimozione comande vuote dal draft:", emptyComande.map((c) => c.comanda_number));
    this.draftOrder.comande = this.draftOrder.comande.filter((comanda) => !emptyComande.some((empty) => empty.id === comanda.id));
    this.updateOrderHeader();
    if (this.currentComanda && emptyComande.some((c) => c.id === this.currentComanda.id)) {
      const firstNonEmpty = this.draftOrder.comande.find((c) => c.order_items && c.order_items.length > 0);
      this.currentComanda = firstNonEmpty || (this.draftOrder.comande[0] || null);
    }
    this.localChanges = this.localChanges.filter((change) => {
      if (change.type === "new_comanda" && emptyComande.some((c) => c.id === change.data.id)) {
        return false;
      }
      if (change.type === "add" && emptyComande.some((c) => c.id === change.data.order_id)) {
        return false;
      }
      return true;
    });
    console.log("\u2705 Comande vuote rimosse dal draft");
  }
  close() {
    if (this.hasUnsavedChanges) {
      const confirm2 = window.confirm("Hai modifiche non salvate. Vuoi davvero chiudere senza salvare?");
      if (!confirm2)
        return;
    }
    console.log("\u{1F6AA} Chiusura order editor");
    this.closeRequested.emit();
  }
  // ===== METODI PER VIEW MODE =====
  calcolaTotaleTavolata() {
    if (!this.orderHeader || !this.orderHeader.comande)
      return 0;
    return this.orderHeader.comande.reduce((total, comanda) => {
      return total + this.getComandaTotal(comanda);
    }, 0);
  }
  calcolaTotaleOrderHeader(header) {
    return header.total_amount || 0;
  }
  getTotalComandeCount() {
    return this.orderHeader?.comande?.length || 0;
  }
  // ===== METODI PER STATI =====
  getOrderStatusColor(status) {
    const colorMap = {
      "ordered": "#f39c12",
      "waiting": "#3498db",
      "preparing": "#9b59b6",
      "ready": "#2ecc71",
      "served": "#27ae60",
      "cancelled": "#e74c3c",
      // Aggiungi questo per debug
      "error": "#e74c3c"
    };
    return colorMap[status] || "#95a5a6";
  }
  getOrderStatusText(status) {
    const statusMap = {
      "ordered": "Ordinato",
      "waiting": "In attesa",
      "preparing": "In preparazione",
      "ready": "Pronto",
      "served": "Servito",
      "cancelled": "Cancellato"
    };
    return statusMap[status] || status;
  }
  getDishName(item) {
    return item.dish_name || "Piatto";
  }
  resetDishFilters() {
    this.dishSearchTerm = "";
    this.selectedCategory = "all";
    this.cachedDishGroups = [];
  }
  trackByDishId(index, dish) {
    return dish.id;
  }
  trackByCategoryId(index, group) {
    return group.category.id;
  }
  onMenuSelectChange(menu) {
    this.selectedMenu = menu;
    this.cachedDishGroups = [];
    this.loadDishesForSelectedMenu();
  }
  // ===== METODI PER SCONTRINO =====
  printBillAndFreeTable() {
    return __async(this, null, function* () {
      const confirm2 = window.confirm(`Vuoi stampare lo scontrino e liberare il tavolo ${this.table.table_number}?`);
      if (!confirm2)
        return;
      try {
        this.loadingService.start();
        const billHtml = this.generateProfessionalBill();
        const printWindow = window.open("", "_blank", "width=800,height=600");
        if (!printWindow) {
          alert("Impossibile aprire la finestra di stampa. Controlla il blocco popup.");
          return;
        }
        printWindow.document.write(billHtml);
        printWindow.document.close();
        printWindow.onload = () => {
          printWindow.print();
          printWindow.onafterprint = () => __async(this, null, function* () {
            printWindow.close();
            yield this.freeTableAfterBill();
          });
        };
      } catch (error) {
        console.error("\u274C Errore stampa scontrino:", error);
        alert("Errore durante la stampa dello scontrino");
      } finally {
        this.loadingService.stop();
      }
    });
  }
  freeTableAfterBill() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F193} Liberazione tavolo dopo scontrino per tavolo:", this.table.table_number);
        if (!this.orderHeader) {
          console.error("\u274C Nessun order header da chiudere");
          return;
        }
        const success = yield this.orderHelper.closeTavolata(this.orderHeader.id);
        if (success) {
          console.log("\u2705 Tavolata chiusa con successo");
          if (this.orderHeader.comande) {
            for (const comanda of this.orderHeader.comande) {
              if (comanda.status !== "cancelled" && comanda.status !== "served") {
                yield this.orderHelper.updateComandaStatus(comanda.id, "served");
                console.log(`\u2705 Comanda ${comanda.comanda_number} aggiornata a 'served'`);
              }
            }
          }
          this.saved.emit(this.orderHeader);
          this.closeRequested.emit();
          console.log("\u2705 Tavolo liberato con successo");
        } else {
          console.error("\u274C Errore nella chiusura della tavolata");
          alert("Errore nella chiusura del tavolo");
        }
      } catch (error) {
        console.error("\u{1F4A5} Errore in freeTableAfterBill:", error);
        alert("Errore nella chiusura del tavolo: " + error.message);
      }
    });
  }
  generateProfessionalBill() {
    const now = /* @__PURE__ */ new Date();
    const date = now.toLocaleDateString("it-IT");
    const time = now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    const logoHtml = this.restaurantData?.logo_url ? `<img src="${this.restaurantData.logo_url}" alt="Logo" style="max-width: 150px; margin: 0 auto 20px;">` : "";
    let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Scontrino - Tavolo ${this.table.table_number}</title>
      <style>
        @media print {
          @page { margin: 0; size: 80mm auto; }
          body { margin: 0; padding: 10mm; }
        }
        
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.4;
          max-width: 80mm;
          margin: 0 auto;
          padding: 10px;
        }
        
        .header {
          text-align: center;
          border-bottom: 2px dashed #000;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        
        .restaurant-name {
          font-size: 18px;
          font-weight: bold;
          margin: 10px 0;
        }
        
        .restaurant-info {
          font-size: 10px;
          margin: 3px 0;
        }
        
        .receipt-info {
          margin: 15px 0;
          font-size: 11px;
        }
        
        .comanda-section {
          margin: 15px 0;
          border-top: 1px solid #000;
          padding-top: 10px;
        }
        
        .comanda-title {
          font-weight: bold;
          margin-bottom: 8px;
        }
        
        .item-row {
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
        }
        
        .item-name {
          flex: 1;
        }
        
        .item-price {
          text-align: right;
          min-width: 60px;
        }
        
        .totals {
          border-top: 2px solid #000;
          margin-top: 15px;
          padding-top: 10px;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
          font-size: 14px;
        }
        
        .grand-total {
          font-weight: bold;
          font-size: 16px;
          border-top: 2px dashed #000;
          margin-top: 10px;
          padding-top: 10px;
        }
        
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 2px dashed #000;
          font-size: 10px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        ${logoHtml}
        <div class="restaurant-name">${this.restaurantData?.name || "RISTORANTE"}</div>
        ${this.restaurantData?.address ? `<div class="restaurant-info">${this.restaurantData.address}</div>` : ""}
        ${this.restaurantData?.phone ? `<div class="restaurant-info">Tel: ${this.restaurantData.phone}</div>` : ""}
        ${this.restaurantData?.email ? `<div class="restaurant-info">${this.restaurantData.email}</div>` : ""}
      </div>
      
      <div class="receipt-info">
        <div><strong>Tavolo:</strong> ${this.table.table_number}</div>
        <div><strong>Data:</strong> ${date}</div>
        <div><strong>Ora:</strong> ${time}</div>
        <div><strong>Scontrino:</strong> #${this.orderHeader?.order_number || "N/A"}</div>
      </div>
  `;
    if (this.orderHeader?.comande) {
      this.orderHeader.comande.forEach((comanda, index) => {
        html += `
        <div class="comanda-section">
          <div class="comanda-title">COMANDA ${comanda.comanda_number}</div>
      `;
        if (comanda.order_items) {
          comanda.order_items.forEach((item) => {
            const itemTotal = item.unit_price * item.quantity;
            html += `
            <div class="item-row">
              <span class="item-name">${item.quantity}x ${item.dish_name}</span>
              <span class="item-price">\u20AC ${itemTotal.toFixed(2)}</span>
            </div>
          `;
          });
        }
        html += `
          <div class="item-row" style="margin-top: 8px; font-weight: bold;">
            <span>Subtotale Comanda ${comanda.comanda_number}:</span>
            <span class="item-price">\u20AC ${(comanda.total_amount || 0).toFixed(2)}</span>
          </div>
        </div>
      `;
      });
    }
    const totalAmount = this.calcolaTotaleTavolata();
    html += `
      <div class="totals">
        <div class="total-row grand-total">
          <span>TOTALE DA PAGARE</span>
          <span>\u20AC ${totalAmount.toFixed(2)}</span>
        </div>
      </div>
      
      <div class="footer">
        <div>Grazie per la visita!</div>
        <div style="margin-top: 5px;">Arrivederci</div>
      </div>
    </body>
    </html>
  `;
    return html;
  }
  // ===== METODI PER MENU =====
  get dedicatedMenu() {
    return this.activeMenus.find((menu) => menu.type === "dedicated") || null;
  }
  get globalMenus() {
    return this.activeMenus.filter((menu) => menu.type === "global");
  }
  hasMenusToShow() {
    return this.activeMenus.length > 0;
  }
  hasDedicatedMenu() {
    return this.activeMenus.some((menu) => menu.type === "dedicated");
  }
  hasGlobalMenus() {
    return this.activeMenus.some((menu) => menu.type === "global");
  }
  // ===== METODI PER CAMBIO MODALITÀ =====
  switchToEditMode() {
    this.closeRequested.emit();
  }
  updateOrderHeader() {
    if (!this.draftOrder)
      return;
    this.orderHeader = __spreadProps(__spreadValues({}, this.draftOrder), {
      comande: this.draftOrder.comande
      // Stessa reference, non copiare!
    });
  }
  trackByOrderItemId(index, item) {
    return item.id;
  }
  get comandaItemsCount() {
    return this.currentComanda?.order_items?.length || 0;
  }
  get totaleTavolata() {
    if (!this.orderHeader || !this.orderHeader.comande)
      return 0;
    return this.orderHeader.comande.reduce((total, comanda) => {
      return total + (comanda.total_amount || 0);
    }, 0);
  }
  /**
  * Verifica se una comanda può essere modificata
  */
  isComandaEditable(comanda) {
    const target = comanda || this.currentComanda;
    if (!target)
      return true;
    const editableStatuses = ["ordered", "waiting", "draft"];
    return editableStatuses.includes(target.status);
  }
  /**
   * Verifica se un piatto può essere modificato
   */
  isItemEditable(item) {
    const editableStatuses = ["ordered", "waiting", "draft"];
    return editableStatuses.includes(item.status);
  }
  /**
   * Verifica se si possono aggiungere nuovi piatti alla comanda corrente
   */
  canAddItemsToCurrentComanda() {
    if (!this.currentComanda)
      return true;
    return this.isComandaEditable(this.currentComanda);
  }
  getEmptyComande() {
    if (!this.draftOrder?.comande)
      return [];
    return this.draftOrder.comande.filter((comanda) => {
      return !comanda.order_items || comanda.order_items.length === 0;
    });
  }
  ngAfterViewInit() {
    if (this.tutorialService.currentStepData()?.id === "order-editor") {
      setTimeout(() => {
        this.tutorialService.refreshTooltip();
        setTimeout(() => this.tutorialService.refreshTooltip(), 200);
      }, 400);
    }
  }
  get hasMultipleComande() {
    return (this.orderHeader?.comande?.length ?? 0) > 1;
  }
  toggleComandaPage() {
    const wasShowingComanda = this.showComandaPage;
    this.showComandaPage = !this.showComandaPage;
    if (wasShowingComanda && this.currentComandaId === "all") {
      const firstComanda = this.orderHeader?.comande?.find((c) => c.status !== "cancelled") || this.orderHeader?.comande?.[0];
      if (firstComanda) {
        this.switchComanda(firstComanda.id);
      }
    }
  }
  /**
   * Avvia lo spostamento di un item
   */
  startMoveItem(item, fromComandaId) {
    this.movingItem = { item, fromComandaId };
  }
  /**
   * Annulla lo spostamento
   */
  cancelMove() {
    this.movingItem = null;
  }
  /**
   * Esegue lo spostamento verso la comanda di destinazione
   */
  executeMove(toComandaId) {
    return __async(this, null, function* () {
      if (!this.movingItem)
        return;
      const { item, fromComandaId } = this.movingItem;
      const fromComanda = this.orderHeader?.comande?.find((c) => c.id === fromComandaId);
      const toComanda = this.orderHeader?.comande?.find((c) => c.id === toComandaId);
      if (!fromComanda || !toComanda)
        return;
      const itemIndex = fromComanda.order_items?.findIndex((i) => i.id === item.id) ?? -1;
      if (itemIndex === -1)
        return;
      fromComanda.order_items?.splice(itemIndex, 1);
      this.recalculateComandaTotal(fromComanda);
      const newItem = __spreadProps(__spreadValues({}, item), {
        id: "draft-item-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
        // nuovo ID univoco
        order_id: toComanda.id,
        comanda_id: toComanda.id
      });
      if (!toComanda.order_items)
        toComanda.order_items = [];
      toComanda.order_items.push(newItem);
      this.recalculateComandaTotal(toComanda);
      if (this.orderHeader) {
        this.orderHeader.total_amount = this.orderHeader.comande?.reduce((sum, c) => sum + (c.total_amount || 0), 0) || 0;
      }
      this.localChanges.push({
        type: "update",
        data: { moved: item.id, from: fromComandaId, to: toComandaId },
        timestamp: /* @__PURE__ */ new Date()
      });
      this.hasUnsavedChanges = true;
      this.movingItem = null;
      this.cdr.markForCheck();
    });
  }
  /**
   * Restituisce le comande diverse da quella corrente (per il select)
   */
  getOtherComandas(currentComandaId) {
    return this.orderHeader?.comande?.filter((c) => c.id !== currentComandaId) || [];
  }
  // Metodo per toggle INFO
  toggleDescriptions() {
    this.showDescriptions = !this.showDescriptions;
  }
  static \u0275fac = function OrderEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderEditor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderEditor, selectors: [["app-order-editor"]], inputs: { table: "table", mode: "mode", existingOrderHeader: "existingOrderHeader", orderingStatus: "orderingStatus", selectedComandaId: "selectedComandaId" }, outputs: { saved: "saved", closeRequested: "closeRequested" }, decls: 3, vars: 2, consts: [["noDishes", ""], ["emptyOrder", ""], ["singleComandaList", ""], ["moveSelect", ""], ["data-tutorial", "order-editor", 1, "order-editor-container"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", "fullscreen-mobile", 3, "click"], [3, "isLoading", 4, "ngIf"], [1, "modal-header", "modal-header-order"], [1, "flex", "justify-between", "items-center", "w-100"], [1, "section-title", "text-md"], ["data-tutorial", "order-editor-button", 1, "flex", "gap-sm"], [1, "icon-button", 3, "click"], ["name", "info"], [1, "material-icons"], [1, "icon-button", 3, "click", "disabled", "title"], ["title", "Chiudi", 1, "icon-button", 3, "click"], [1, "flex", "justify-between", "items-center", "gap-sm", "mt-sm", "w-100"], ["data-tutorial", "order-editor-riepilogo", 1, "numeropiatti", "font-semibold"], ["data-tutorial", "order-editor-cart"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-content-scroll"], ["class", "p-sm", "data-tutorial", "order-editor-menu", 4, "ngIf"], [1, "search-bar-mobile"], [1, "flex", "gap-sm", "items-center", "p-sm"], ["type", "text", "placeholder", "Cerca piatto...", "autofocus", "", 1, "form-input", "touch-target", 3, "ngModelChange", "ngModel"], [1, "flex"], [1, "flex", "flex-col"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex flex-col gap-md", 4, "ngIf"], [1, "modal-footer", "p-sm"], ["data-tutorial", "order-editor-send", 1, "promethea-button", "primary", "flex-1", 3, "click", "disabled", "title"], [3, "isLoading"], [3, "value"], ["data-tutorial", "order-editor-menu", 1, "p-sm"], [1, "standard-label"], ["class", "text-primary font-semibold", 4, "ngIf"], [4, "ngIf"], ["class", "p-sm bg-primary-light rounded mb-md", 4, "ngIf"], ["class", "p-sm bg-smoke rounded text-center", 4, "ngIf"], ["class", "flex items-center gap-sm", 4, "ngIf"], [1, "text-primary", "font-semibold"], [1, "p-sm", "bg-primary-light", "rounded", "mb-md"], [1, "flex", "items-center", "gap-sm"], [1, "material-icons", "text-primary"], [1, "font-semibold"], [1, "chip", "bg-primary", "ml-sm", "text-white"], ["class", "p-sm bg-smoke rounded border", 4, "ngIf"], [1, "p-sm", "bg-smoke", "rounded", "border"], [1, "flex", "items-center", "justify-between"], ["class", "chip bg-glass", 4, "ngIf"], [1, "chip", "bg-glass"], [1, "material-icons", "text-mini"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "p-sm", "bg-smoke", "rounded", "text-center"], [1, "material-icons", "text-muted"], [1, "text-muted", "text-mini", "mt-sm"], ["class", "chip bg-primary text-white", 4, "ngIf"], [1, "chip", "bg-primary", "text-white"], [1, "quick-actions-mobile"], [1, "quick-action-button", 3, "click"], [1, "text-mini"], [1, "text-muted", "text-mini"], ["class", "quick-action-button", 3, "active", "click", 4, "ngFor", "ngForOf"], ["data-tutorial", "order-editor-dish", 1, "flex", "flex-col", "gap-sm", "p-sm"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "gap-sm", "items-center", "mb-sm", "mt-lg"], [1, "font-bold", "text-md"], [1, "material-icons", "text-md"], [1, "font-bold", "text-primary", "text-md"], [1, "dishes-grid"], ["class", "card dish-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card", "dish-card"], [1, "flex", "flex-col", "gap-sm"], [1, "flex", "gap-sm", "flex-col", "flex-1"], [1, "flex", "gap-sm", "justify-between"], [1, "dish-name"], [1, "icon-button", "x-small", 3, "click", "disabled", "title"], ["name", "plus", 3, "size"], [1, "dish-price", "text-primary"], ["class", "text-muted text-mini", 4, "ngIf"], [1, "empty-state"], [1, "text-muted"], [1, "promethea-button", "ghost", "mt-sm", 3, "click"], [1, "flex", "flex-col", "gap-md"], [1, "form-card", 2, "margin", "0", "padding", "var(--gap-sm)"], [1, "flex", "justify-between", "items-center"], [1, "flex", "items-center", "gap-sm", "font-semibold"], [1, "material-icons", "text-primary", "text-md"], [1, "chip", "active"], [1, "mt-sm"], [1, "form-input", "touch-target", 3, "ngModelChange", "ngModel"], ["class", "mb-sm p-sm bg-smoke-1 rounded", 4, "ngIf"], [1, "mt-md", "pt-md", "border-t", "border-[var(--smoke-1)]"], [1, "flex", "justify-between", "items-center", "mb-sm"], [1, "text-md"], [1, "text-primary", "text-md"], [1, "mb-sm", "p-sm", "bg-smoke-1", "rounded"], [1, "text-muted", "text-mini", "ml-sm"], ["class", "mb-md", 4, "ngFor", "ngForOf"], [1, "mb-md"], [1, "flex", "items-center", "gap-sm", "p-sm", "rounded-lg", "bg-smoke"], ["class", " p-sm ", 4, "ngFor", "ngForOf"], [1, "p-sm"], [1, "flex", "justify-between", "items-start", "gap-sm"], [1, "flex", "flex-col", "flex-1"], [1, "flex", "items-center", "gap-sm", "mt-sm"], ["title", "Sposta in altra comanda", 1, "icon-button", "x-small", 3, "click"], ["name", "move", "size", "16"], [1, "form-input", "small", 2, "width", "auto", "min-width", "150px", 3, "change", "blur"], ["value", "", "disabled", "", "selected", ""], ["title", "Annulla", 1, "icon-button", "x-small", 3, "click"], ["class", "mb-sm pb-sm border-b border-[var(--smoke-1)] last:border-0", 4, "ngFor", "ngForOf"], [1, "mb-sm", "pb-sm", "border-b", "border-[var(--smoke-1)]", "last:border-0"], ["title", "Riduci quantit\xE0", 1, "icon-button", "x-small", 3, "click", "disabled"], [1, "font-bold", "px-2", "text-center", "text-sm", "min-w-[20px]"], ["title", "Aumenta quantit\xE0", 1, "icon-button", "x-small", 3, "click", "disabled"], ["title", "Elimina piatto", 1, "icon-button", "x-small", "ml-1", "text-danger", 3, "click", "disabled"], ["name", "trash-2", 3, "size"], [1, "flex", "justify-between", "items-center", "text-muted", "text-mini"], [1, "text-secondary"], [1, "empty-state", "py-lg"], [1, "material-icons", "text-lg"], ["class", "text-muted text-mini mt-sm", 4, "ngIf"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "header-icon"], [1, "section-title"], [1, "chip"], [1, "p-lg"], ["class", "empty-state", 4, "ngIf"], ["class", "flex flex-col gap-sm", 4, "ngIf"], [1, "modal-footer", "mt-lg"], [1, "promethea-button", "success", "flex-1", 3, "click", "disabled"], [1, "promethea-button", "ghost", "flex-1", 3, "click"], [1, "promethea-button", "primary", "mt-sm", 3, "click"], ["class", "form-card", 4, "ngFor", "ngForOf"], [1, "form-card", "mt-md", "bg-gradient", "text-white"], [1, "text-white"], [1, "text-white", "text-sm", "opacity-80"], [1, "form-card"], [1, "flex", "justify-between", "items-center", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "gap-md", "flex-1"], [1, "flex", "items-center", "gap-sm", "flex-wrap"], [1, "chip", "small"], [1, "text-muted", "mt-sm"], [1, "flex", "items-center", "gap-md"], [1, "flex", "flex-col", "items-end"], ["class", "mt-md pt-md border-t border-[var(--smoke-1)]", 4, "ngIf"], ["class", "space-y-sm", 4, "ngIf"], ["class", "empty-state py-md", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "mt-md", "pt-md", "border-t"], [1, "space-y-sm"], ["class", "flex justify-between items-start p-sm flex-wrap", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-start", "p-sm", "flex-wrap"], [1, "flex", "items-start", "gap-sm"], ["class", "mt-sm", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "mt-sm", "text-muted"], [1, "chip", "x-small", "mt-sm", 2, "max-width", "fit-content"], [1, "empty-state", "py-md"]], template: function OrderEditor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4);
      \u0275\u0275template(1, OrderEditor_div_1_Template, 45, 28, "div", 5)(2, OrderEditor_div_2_Template, 32, 13, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "edit");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "view");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Loader, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.numeropiatti[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n}\n@media (max-width: 768px) {\n  .numeropiatti[_ngcontent-%COMP%] {\n    margin-left: var(--gap-md);\n  }\n  .modal-header-order[_ngcontent-%COMP%] {\n    padding: var(--gap-sm) var(--gap-md);\n    flex-direction: column;\n    align-items: normal;\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n  }\n  .fullscreen-mobile[_ngcontent-%COMP%] {\n    max-height: 100dvh;\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n}\n.dishes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n}\n@media (max-width: 768px) {\n  .dishes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));\n  }\n  .grid-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n}\n.dish-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--smoke-1);\n  background: var(--background);\n  transition: all 0.2s ease;\n  min-height: 5rem;\n}\n.dish-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: var(--primary);\n  box-shadow: 0 4px 12px var(--smoke-2);\n}\n.dish-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  line-height: 1.3;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.dish-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-sm);\n  color: var(--primary);\n}\n.quick-actions-mobile[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  gap: var(--gap-sm);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  padding: var(--gap-sm);\n}\n.modal-content-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0;\n}\n.quick-actions-mobile[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.quick-action-button[_ngcontent-%COMP%] {\n  display: flex;\n  padding: var(--gap-sm);\n  gap: var(--gap-sm);\n  backdrop-filter: blur(15px);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  background: var(--background);\n  font-weight: 800;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  box-shadow: 3px 3px 5px var(--shadow-2);\n}\n.quick-action-button[_ngcontent-%COMP%]:hover, \n.quick-action-button.active[_ngcontent-%COMP%] {\n  background: var(--background2);\n  border-color: var(--primary);\n}\n.search-bar-mobile[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n}\n@media (max-width: 768px) {\n  .search-bar-mobile[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--gap-lg);\n  color: var(--text-muted);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--gap-sm);\n  opacity: 0.5;\n}\n.bill-preview[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  background: white;\n  color: black;\n  padding: var(--gap-lg);\n  max-height: 60vh;\n  overflow-y: auto;\n}\n@media print {\n  .bill-preview[_ngcontent-%COMP%] {\n    max-height: none;\n    overflow: visible;\n  }\n}\n.icon-button[disabled][_ngcontent-%COMP%], \n.promethea-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.order-editor-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=order-editor.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderEditor, [{
    type: Component,
    args: [{ selector: "app-order-editor", standalone: true, imports: [CommonModule, FormsModule, Loader, LucideAngularModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="order-editor-container" data-tutorial="order-editor">\r
\r
<div *ngIf="mode === 'edit'" class="modal-overlay" (click)="close()">\r
\r
  <div class="modal-container modal-lg fullscreen-mobile" [class.fullscreen-mobile]="isMobile"\r
    (click)="$event.stopPropagation()">\r
    <app-loader *ngIf="isLoading" [isLoading]="true"></app-loader>\r
\r
    <!-- HEADER -->\r
    <div class="modal-header modal-header-order">\r
      <!-- Prima riga: Titolo e bottoni (gi\xE0 presente) -->\r
      <div class="flex justify-between items-center w-100">\r
        <h1 class="section-title text-md">\r
          Tavolo {{ table.table_number }}\r
        </h1>\r
        <div class="flex gap-sm" data-tutorial="order-editor-button">\r
          <button class="icon-button" (click)="toggleDescriptions()" [class.active]="showDescriptions">\r
            <lucide-angular name="info" [class.text-primary]="showDescriptions"></lucide-angular>\r
          </button>\r
          <button class="icon-button" (click)="toggleComandaPage()">\r
            <span class="material-icons">{{ showComandaPage ? 'restaurant' : 'receipt_long' }}</span>\r
          </button>\r
          <button class="icon-button" (click)="createNewComanda()"\r
            [disabled]="!orderHeader || !isComandaEditable()"\r
            [title]="!isComandaEditable() ? 'La comanda corrente \xE8 in stato avanzato, completa prima di crearne una nuova' : 'Crea una nuova comanda nella tavolata corrente'">\r
            <span class="material-icons">post_add</span>\r
          </button>\r
          <button class="icon-button" (click)="close()" title="Chiudi">\r
            <span class="material-icons">close</span>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Seconda riga: Info piatti e dropdown -->\r
      <div class="flex justify-between items-center gap-sm mt-sm w-100">\r
        <span class="numeropiatti font-semibold" data-tutorial="order-editor-riepilogo">\r
          {{ getTotalePiattiTutteComande() }} piatt{{ getTotalePiattiTutteComande() !== 1 ? 'i' : 'o' }}\r
          \u2022 \u20AC{{ totaleTavolata | number:'1.2-2' }}\r
        </span>\r
        \r
        <!-- Dropdown per selezionare la Comanda -->\r
        <div data-tutorial="order-editor-cart">\r
          <select class="form-input" [(ngModel)]="currentComandaId" (ngModelChange)="switchComanda($event)">\r
            <!-- Opzione per tutte le comande -->\r
            <option value="all">\r
              \u{1F4CB} Tutte le comande \r
              ({{ getTotalePiattiTutteComande() }} piatti)\r
            </option>\r
            <!-- Opzioni per le singole comande -->\r
            <option *ngFor="let comanda of getComandeForDropdown()" [value]="comanda.id">\r
              Comanda {{ comanda.comanda_number }}\r
              ({{ getComandaTotalQuantity(comanda) }} piatti) - \r
              \u20AC{{ getComandaTotal(comanda) | number:'1.2-2' }}\r
            </option>\r
          </select>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-content-scroll">\r
      <!-- SELEZIONE MENU -->\r
      <div *ngIf="hasMenusToShow()" class="p-sm" data-tutorial="order-editor-menu">\r
        <div class="flex flex-col ">\r
          <label class="standard-label">\r
            <span class="material-icons">restaurant_menu</span>\r
            <span *ngIf="dedicatedMenu" class="text-primary font-semibold">\r
              Menu Dedicato\r
            </span>\r
            <span *ngIf="!dedicatedMenu">\r
              Seleziona Menu\r
            </span>\r
          </label>\r
\r
          <!-- Menu Dedicato (se presente) -->\r
          <div *ngIf="dedicatedMenu" class="p-sm bg-primary-light rounded mb-md">\r
            <div class="flex items-center gap-sm">\r
              <span class="material-icons text-primary">event_available</span>\r
              <span class="font-semibold">{{ dedicatedMenu.name }}</span>\r
              <span class="chip bg-primary ml-sm text-white">Dedicato</span>\r
            </div>\r
          </div>\r
\r
          <!-- Menu Globali -->\r
          <div *ngIf="!dedicatedMenu && globalMenus.length > 0">\r
\r
            <!-- Se c'\xE8 un solo menu globale -->\r
            <div *ngIf="globalMenus.length === 1" class="p-sm bg-smoke rounded border">\r
              <div class="flex items-center justify-between">\r
                <div class="flex items-center gap-sm">\r
                  <span class="material-icons">restaurant_menu</span>\r
                  <span class="font-semibold">{{ globalMenus[0].name }}</span>\r
                </div>\r
                <span *ngIf="globalMenus[0].is_default" class="chip bg-glass">\r
                  <span class="material-icons text-mini">star</span>\r
                  Default\r
                </span>\r
              </div>\r
            </div>\r
\r
            <!-- Se ci sono pi\xF9 menu globali -->\r
            <div *ngIf="globalMenus.length > 1">\r
              <select [(ngModel)]="selectedMenu" (ngModelChange)="onMenuSelectChange($event)" class="form-input">\r
                <option [ngValue]="{id: 'all', name: '\u{1F37D}\uFE0F Tutti i piatti'}">\r
                  \u{1F37D}\uFE0F Tutti i piatti\r
                </option>\r
\r
                <option *ngFor="let menu of globalMenus" [ngValue]="menu">\r
                  {{ menu.is_default ? '\u2B50 ' : '' }}{{ menu.name }}\r
                </option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Nessun menu disponibile -->\r
          <div *ngIf="!hasMenusToShow()" class="p-sm bg-smoke rounded text-center">\r
            <span class="material-icons text-muted">restaurant_menu</span>\r
            <p class="text-muted text-mini mt-sm">Nessun menu disponibile</p>\r
          </div>\r
\r
          <!-- Info menu selezionato -->\r
          <div *ngIf="selectedMenu" class="flex items-center gap-sm">\r
            <span *ngIf="selectedMenu.type === 'dedicated'" class="chip bg-primary text-white">\r
              <span class="material-icons text-mini">event_available</span>\r
              Dedicato\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- RICERCA E FILTRI -->\r
      <div class="search-bar-mobile">\r
        <div class="flex gap-sm items-center p-sm">\r
            <input type="text" [(ngModel)]="dishSearchTerm" placeholder="Cerca piatto..."\r
              class="form-input touch-target" autofocus>\r
          <div class="flex">\r
            <button class="icon-button" (click)="resetDishFilters()">\r
              <span class="material-icons">refresh</span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- GRIGLIA PIATTI E ORDINE -->\r
      <div class="flex flex-col ">\r
        <!-- PAGINA PIATTI (nascosta quando showComandaPage \xE8 true) -->\r
        <div class="flex flex-col" *ngIf="!showComandaPage">\r
\r
          <!-- CONTATORI RAPIDI -->\r
          <div class="quick-actions-mobile">\r
            <div class="quick-action-button" [class.active]="selectedCategory === 'all'"\r
              (click)="selectedCategory = 'all'">\r
              <span class="text-mini">Tutti</span>\r
              <span class="text-muted text-mini">{{ getDishesCountByCategory('all') }}</span>\r
            </div>\r
\r
            <div class="quick-action-button" *ngFor="let category of categoryService.data.slice(0, 4)"\r
              [class.active]="selectedCategory === category.id" (click)="selectedCategory = category.id">\r
              <span class="text-mini">{{ category.name | slice:0:15 }}{{ category.name.length > 15 ? '...' : '' }}</span>\r
              <span class="text-muted text-mini">{{ getDishesCountByCategory(category.id) }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- LISTA PIATTI -->\r
          <div class="flex flex-col gap-sm p-sm" data-tutorial="order-editor-dish">\r
            <ng-container *ngIf="getDishesGroupedByCategory().length > 0; else noDishes">\r
              <ng-container *ngFor="let group of getDishesGroupedByCategory() trackBy: trackByCategoryId">\r
                <div class="flex gap-sm items-center mb-sm mt-lg">\r
                  <div class="font-bold text-md">\r
                    <span class="material-icons text-md">category</span>\r
                    {{ group.category.name }}\r
                  </div>\r
                  <div class="font-bold text-primary text-md">{{ group.dishes.length }}</div>\r
                </div>\r
\r
                <div class="dishes-grid">\r
                  <div *ngFor="let dish of group.dishes; trackBy: trackByDishId" class="card dish-card">\r
                    <div class="flex flex-col gap-sm">\r
                      <div class="flex gap-sm flex-col flex-1">\r
                        <div class="flex gap-sm justify-between">\r
                          <strong class="dish-name">{{ dish.name }}</strong>\r
                          <div>\r
                            <button class="icon-button x-small" (click)="addDishToOrder(dish)"\r
                              [disabled]="!orderingStatus.allowed || !canAddItemsToCurrentComanda()"\r
                              [title]="!canAddItemsToCurrentComanda() ? 'Comanda in stato avanzato, non modificabile' : (!orderingStatus.allowed ? orderingStatus.reason : 'Aggiungi 1')">\r
                              <lucide-angular name="plus" [size]="20"></lucide-angular>\r
                            </button>\r
                          </div>\r
                        </div>\r
                        <span class="dish-price text-primary">\u20AC{{ dish.base_price | number:'1.2-2' }}</span>\r
                        <small class="text-muted text-mini" *ngIf="showDescriptions && dish.description">\r
                          {{ dish.description | slice:0:200 }}{{ dish.description.length > 200 ? '...' : '' }}\r
                        </small>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </ng-container>\r
            </ng-container>\r
\r
            <ng-template #noDishes>\r
              <div class="empty-state">\r
                <span class="material-icons">search_off</span>\r
                <p class="text-muted">Nessun piatto trovato</p>\r
                <button class="promethea-button ghost mt-sm" (click)="resetDishFilters()">\r
                  Reset filtri\r
                </button>\r
              </div>\r
            </ng-template>\r
          </div>\r
        </div>\r
        <!-- PAGINA COMANDA (mostrata quando showComandaPage \xE8 true) -->\r
        <div class="flex flex-col gap-md" *ngIf="showComandaPage">\r
\r
          <div class="form-card" style="margin: 0; padding: var(--gap-sm);">\r
            <div class="flex justify-between items-center">\r
              <h3 class="flex items-center gap-sm font-semibold">\r
                <span class="material-icons text-primary text-md">receipt</span>\r
                Comanda {{ currentComanda?.comanda_number || '1' }}\r
              </h3>\r
              <span class="chip active">\r
                {{ getComandaItems().length }} piatt{{ getComandaItems().length !== 1 ? 'i' : 'o' }}\r
              </span>\r
            </div>\r
\r
            <div class="mt-sm">\r
            <select class="form-input touch-target" [(ngModel)]="currentComandaId" (ngModelChange)="switchComanda($event)">\r
              <option value="all">\u{1F4CB} Tutte le comande (riepilogo)</option>\r
              <option *ngFor="let comanda of getComandeForDropdown()" [value]="comanda.id">\r
                Comanda {{ comanda.comanda_number }}\r
                ({{ comanda.order_items?.length || 0 }} piatti)\r
              </option>\r
            </select>\r
            </div>\r
          </div>\r
\r
<div class="form-card" style="margin: 0; padding: var(--gap-sm);">\r
  <!-- Visualizzazione in base alla modalit\xE0 -->\r
  <ng-container *ngIf="displayItems.length > 0; else emptyOrder">\r
    <!-- Intestazione contestuale per modalit\xE0 "tutte le comande" -->\r
    <div *ngIf="currentComandaId === 'all'" class="mb-sm p-sm bg-smoke-1 rounded">\r
      <span class="font-semibold">Riepilogo di tutte le comande</span>\r
      <span class="text-muted text-mini ml-sm">\r
        ({{ orderHeader?.comande?.length || 0 }} comande)\r
      </span>\r
    </div>\r
\r
<!-- Lista piatti TOTALE - distingue tra singola comanda e tutte -->\r
<ng-container *ngIf="currentComandaId === 'all'; else singleComandaList">\r
  <!-- Modalit\xE0 "tutte le comande": raggruppa per comanda -->\r
  <ng-container *ngIf="orderHeader?.comande as comandeList">\r
<div *ngFor="let comanda of orderHeader?.comande" class="mb-md">\r
  <div class="flex items-center gap-sm p-sm rounded-lg bg-smoke">\r
    <span class="font-semibold">Comanda {{ comanda.comanda_number }}</span>\r
    <span class="text-muted text-mini">({{ getComandaTotalQuantity(comanda) }} piatti)</span>\r
  </div>\r
\r
  <!-- Lista piatti della comanda -->\r
  <div *ngFor="let item of comanda.order_items || []" class=" p-sm ">\r
    <div class="flex justify-between items-start gap-sm">\r
      <div class="flex flex-col flex-1">\r
        {{ item.dish_name || 'Piatto' }}\r
        <div class="flex items-center gap-sm mt-sm">\r
          <span class="text-muted text-mini">\u20AC{{ item.unit_price | number:'1.2-2' }} cad.</span>\r
          <span class="text-muted text-mini">\u2022</span>\r
          <span class="text-muted text-mini">Tot: \u20AC{{ (item.unit_price * item.quantity) | number:'1.2-2' }}</span>\r
        </div>\r
      </div>\r
\r
      <!-- Gestione spostamento -->\r
      <div class="flex items-center gap-sm">\r
        <!-- Se non c'\xE8 movingItem oppure non riguarda questo item, mostra il bottone di sposta -->\r
        <ng-container *ngIf="!movingItem || movingItem.item.id !== item.id">\r
          <button class="icon-button x-small" (click)="startMoveItem(item, comanda.id)" title="Sposta in altra comanda">\r
            <lucide-icon name="move" size="16"></lucide-icon>\r
          </button>\r
        </ng-container>\r
\r
        <!-- Se questo item \xE8 in fase di spostamento, mostra il selettore -->\r
        <ng-container *ngIf="movingItem?.item?.id === item.id">\r
          <select #moveSelect class="form-input small" (change)="executeMove(moveSelect.value)" (blur)="cancelMove()" style="width: auto; min-width: 150px;">\r
            <option value="" disabled selected>Sposta in...</option>\r
            <option *ngFor="let other of getOtherComandas(comanda.id)" [value]="other.id">\r
              Comanda {{ other.comanda_number }}\r
            </option>\r
          </select>\r
          <button class="icon-button x-small" (click)="cancelMove()" title="Annulla">\r
            <span class="material-icons">close</span>\r
          </button>\r
        </ng-container>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
  </ng-container>\r
</ng-container>\r
\r
<ng-template #singleComandaList>\r
  <!-- Modalit\xE0 singola comanda: lista piatti con pulsanti -->\r
  <div *ngFor="let item of displayItems" class="mb-sm pb-sm border-b border-[var(--smoke-1)] last:border-0">\r
    <div class="flex justify-between items-start gap-sm">\r
      <div class="flex flex-col flex-1">\r
        <strong>{{ item.dish_name || 'Piatto' }}</strong>\r
        <div class="flex items-center gap-sm mt-sm">\r
          <span class="text-muted text-mini">\u20AC{{ item.unit_price | number:'1.2-2' }} cad.</span>\r
          <span class="text-muted text-mini">\u2022</span>\r
          <span class="text-muted text-mini">Tot: \u20AC{{ (item.unit_price * item.quantity) | number:'1.2-2' }}</span>\r
        </div>\r
      </div>\r
      <div class="flex items-center gap-sm">\r
        <button class="icon-button x-small" (click)="updateQuantity(item, -1); $event.stopPropagation()"\r
          [disabled]="!isItemEditable(item)" title="Riduci quantit\xE0">\r
          <span class="material-icons">remove</span>\r
        </button>\r
        <span class="font-bold px-2 text-center text-sm min-w-[20px]">{{ item.quantity }}</span>\r
        <button class="icon-button x-small" [disabled]="!isItemEditable(item) || !orderingStatus.allowed"\r
          (click)="updateQuantity(item, 1); $event.stopPropagation()" title="Aumenta quantit\xE0">\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
        </button>\r
        <button class="icon-button x-small ml-1 text-danger" [disabled]="!isItemEditable(item)"\r
          (click)="removeItemLocal(item); $event.stopPropagation()" title="Elimina piatto">\r
          <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</ng-template>\r
\r
    <!-- Totali -->\r
    <div class="mt-md pt-md border-t border-[var(--smoke-1)]">\r
      <div class="flex justify-between items-center mb-sm">\r
        <strong class="text-md">\r
          {{ currentComandaId === 'all' ? 'Totale generale' : 'Totale Comanda' }}:\r
        </strong>\r
        <strong class="text-primary text-md">\u20AC{{ displayTotal | number:'1.2-2' }}</strong>\r
      </div>\r
\r
      <!-- Mostra totale generale anche quando si \xE8 in una singola comanda (se ci sono pi\xF9 comande) -->\r
      <ng-container *ngIf="currentComandaId !== 'all' && hasMultipleComande">\r
        <div class="flex justify-between items-center text-muted text-mini">\r
          <span>Totale generale ({{ orderHeader?.comande?.length || 0 }} comande):</span>\r
          <strong class="text-secondary">\u20AC{{ calcolaTotaleTavolata() | number:'1.2-2' }}</strong>\r
        </div>\r
      </ng-container>\r
\r
    </div>\r
  </ng-container>\r
\r
  <ng-template #emptyOrder>\r
    <div class="empty-state py-lg">\r
      <span class="material-icons text-lg">restaurant_menu</span>\r
      <p class="text-muted">\r
        {{ currentComandaId === 'all' ? 'Nessun piatto in nessuna comanda' : 'Nessun piatto in questa comanda' }}\r
      </p>\r
      <p *ngIf="currentComandaId !== 'all'" class="text-muted text-mini mt-sm">\r
        Clicca sui piatti per aggiungerli\r
      </p>\r
    </div>\r
  </ng-template>\r
</div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- FOOTER -->\r
    <div class="modal-footer p-sm">\r
      <button class="promethea-button primary flex-1" (click)="saveOrder()"\r
        [disabled]="!hasUnsavedChanges && !orderingStatus.allowed"\r
        data-tutorial="order-editor-send"\r
        [title]="!orderingStatus.allowed ? orderingStatus.reason : (hasUnsavedChanges ? 'Salva modifiche' : 'Nessuna modifica da salvare')">\r
        <span class="material-icons">{{ hasUnsavedChanges ? 'save' : 'check_circle' }}</span>\r
        {{ hasUnsavedChanges ? 'Salva Modifiche' : 'Gi\xE0 salvato' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL PER VISUALIZZAZIONE ORDINI (modalit\xE0 view) -->\r
<div *ngIf="mode === 'view'" class="modal-overlay" (click)="close()">\r
  <div class="modal-container modal-lg" [class.fullscreen-mobile]="isMobile" (click)="$event.stopPropagation()">\r
  <app-loader *ngIf="isLoading" [isLoading]="true"></app-loader>\r
\r
    <!-- HEADER VISUALIZZAZIONE -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-sm">\r
        <div class="header-icon">\r
          <span class="material-icons">receipt_long</span>\r
        </div>\r
        <div>\r
          <h1 class="section-title">Ordini Tavolo {{ table.table_number || 'N/A' }}</h1>\r
          <div class="flex items-center gap-sm mt-sm">\r
            <span class="chip active">\r
              {{ orderHeader?.comande?.length || 0 }} Ordine{{ orderHeader?.comande?.length !== 1 ? 'i' : '' }}\r
            </span>\r
            <span class="chip">\r
              Totale: \u20AC{{ calcolaTotaleTavolata() | number:'1.2-2' }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
      <button class="icon-button" (click)="close()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <div class="p-lg">\r
      <!-- MESSAGGIO SE NON CI SONO ORDINI -->\r
      <div *ngIf="!orderHeader || !orderHeader.comande || orderHeader.comande.length === 0" class="empty-state">\r
        <span class="material-icons">receipt</span>\r
        <h3>Nessun ordine attivo</h3>\r
        <p class="text-muted">Non ci sono ordini per questo tavolo</p>\r
        <button class="promethea-button primary mt-sm" (click)="switchToEditMode()">\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          Crea Primo Ordine\r
        </button>\r
      </div>\r
\r
      <!-- CONTENITORE PRINCIPALE ORDINI (SOLO SE CI SONO ORDINI) -->\r
      <div *ngIf="orderHeader && orderHeader.comande && orderHeader.comande.length > 0" class="flex flex-col gap-sm">\r
        <!-- PER OGNI COMANDA -->\r
        <div *ngFor="let comanda of orderHeader.comande; let comandaIdx = index" class="form-card">\r
          <!-- HEADER COMANDA - ESPANDIBILE -->\r
          <div class="flex justify-between items-center cursor-pointer" (click)="toggleComandaExpansion(comanda.id)">\r
            <div class="flex items-center gap-md flex-1">\r
              <div class="flex flex-col">\r
                <div class="flex items-center gap-sm flex-wrap">\r
                  <h3 class="font-semibold">Comanda {{ comanda.comanda_number }}</h3>\r
                  <span class="chip small" [style.backgroundColor]="getOrderStatusColor(comanda.status)">\r
                    {{ getOrderStatusText(comanda.status) }}\r
                  </span>\r
                </div>\r
                <div class="text-muted mt-sm">\r
                  {{ comanda.created_at | date:'dd/MM/yyyy HH:mm' }}\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="flex items-center gap-md">\r
              <div class="flex flex-col items-end">\r
                <span class="font-bold text-primary text-md">\r
                  \u20AC{{ getComandaTotal(comanda) | number:'1.2-2' }}\r
                </span>\r
                <span class="text-muted text-mini">\r
                  {{ comanda.order_items?.length || 0 }} piatto{{ comanda.order_items?.length !== 1 ? 'i' : '' }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- CONTENUTO ESPANSO COMANDA -->\r
          <div *ngIf="isComandaExpanded(comanda.id)" class="mt-md pt-md border-t border-[var(--smoke-1)]">\r
            <!-- LISTA PIATTI DELLA COMANDA -->\r
            <div *ngIf="comanda.order_items && comanda.order_items.length > 0" class="space-y-sm">\r
              <div *ngFor="let item of comanda.order_items" class="flex justify-between items-start p-sm flex-wrap">\r
                <div class="flex flex-col flex-1">\r
                  <div class="flex items-start gap-sm">\r
                    <strong>{{ getDishName(item) }}</strong>\r
                    <div *ngIf="item.item_notes" class="mt-sm">\r
                      <small class="text-muted">Note: {{ item.item_notes }}</small>\r
                    </div>\r
                  </div>\r
                  <div class="flex items-center gap-sm mt-sm text-muted">\r
                    <span>\u20AC{{ item.unit_price | number:'1.2-2' }} cad.</span>\r
                    <span>\u2022</span>\r
                    <span>Quantit\xE0: {{ item.quantity }}</span>\r
                  </div>\r
                  <span class="chip x-small mt-sm" [style.backgroundColor]="getOrderStatusColor(item.status)"\r
                    style="max-width: fit-content;">\r
                    {{ getOrderStatusText(item.status) }}\r
                  </span>\r
                </div>\r
                <div class="flex flex-col items-end">\r
                  <span class="font-semibold">\u20AC{{ item.total_price | number:'1.2-2' }}</span>\r
                  <small class="text-muted mt-sm">Totale</small>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="!comanda.order_items || comanda.order_items.length === 0" class="empty-state py-md">\r
              <span class="material-icons">restaurant_menu</span>\r
              <p class="text-muted">Nessun piatto in questa comanda</p>\r
            </div>\r
\r
            <!-- TOTALE COMANDA -->\r
            <div class="flex justify-between items-center mt-md pt-md border-t">\r
              <strong class="text-md">Totale Comanda {{ comanda.comanda_number }}</strong>\r
              <strong class="text-primary text-md">\r
                \u20AC{{ getComandaTotal(comanda) | number:'1.2-2' }}\r
              </strong>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- TOTALE GENERALE TAVOLATA -->\r
        <div class="form-card mt-md bg-gradient text-white">\r
          <div class="flex justify-between items-center">\r
            <div>\r
              <strong class="text-white">TOTALE TAVOLO</strong>\r
              <p class="text-white text-sm opacity-80">\r
                {{ getTotalComandeCount() }} comande\r
              </p>\r
            </div>\r
            <strong class="text-md">\r
              \u20AC{{ calcolaTotaleTavolata() | number:'1.2-2' }}\r
            </strong>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- BOTTONI AZIONE -->\r
      <div class="modal-footer mt-lg">\r
        <button class="promethea-button success flex-1" (click)="printBillAndFreeTable()"\r
          [disabled]="!orderHeader || !orderHeader.comande || orderHeader.comande.length === 0">\r
          <span class="material-icons">receipt</span>\r
          STAMPA SCONTRINO\r
        </button>\r
\r
        <button class="promethea-button ghost flex-1" (click)="close()">\r
          <span class="material-icons">close</span>\r
          Chiudi\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
</div>`, styles: ['/* src/app/restaurant/layout/table-map/order-editor/order-editor.css */\n.numeropiatti {\n  font-size: var(--fs-mini);\n}\n@media (max-width: 768px) {\n  .numeropiatti {\n    margin-left: var(--gap-md);\n  }\n  .modal-header-order {\n    padding: var(--gap-sm) var(--gap-md);\n    flex-direction: column;\n    align-items: normal;\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n  }\n  .fullscreen-mobile {\n    max-height: 100dvh;\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n}\n.dishes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n}\n@media (max-width: 768px) {\n  .dishes-grid {\n    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));\n  }\n  .grid-form {\n    display: flex;\n    flex-direction: column;\n  }\n}\n.dish-card {\n  border: 1px solid var(--smoke-1);\n  background: var(--background);\n  transition: all 0.2s ease;\n  min-height: 5rem;\n}\n.dish-card:hover {\n  transform: translateY(-2px);\n  border-color: var(--primary);\n  box-shadow: 0 4px 12px var(--smoke-2);\n}\n.dish-name {\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  line-height: 1.3;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.dish-price {\n  font-weight: 700;\n  font-size: var(--fs-sm);\n  color: var(--primary);\n}\n.quick-actions-mobile {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  gap: var(--gap-sm);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  padding: var(--gap-sm);\n}\n.modal-content-scroll {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0;\n}\n.quick-actions-mobile::-webkit-scrollbar {\n  display: none;\n}\n.quick-action-button {\n  display: flex;\n  padding: var(--gap-sm);\n  gap: var(--gap-sm);\n  backdrop-filter: blur(15px);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  background: var(--background);\n  font-weight: 800;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  box-shadow: 3px 3px 5px var(--shadow-2);\n}\n.quick-action-button:hover,\n.quick-action-button.active {\n  background: var(--background2);\n  border-color: var(--primary);\n}\n.search-bar-mobile .form-row {\n  display: flex;\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n}\n@media (max-width: 768px) {\n  .search-bar-mobile .form-row {\n    flex-direction: column;\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--gap-lg);\n  color: var(--text-muted);\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--gap-sm);\n  opacity: 0.5;\n}\n.bill-preview {\n  font-family: "Courier New", monospace;\n  background: white;\n  color: black;\n  padding: var(--gap-lg);\n  max-height: 60vh;\n  overflow-y: auto;\n}\n@media print {\n  .bill-preview {\n    max-height: none;\n    overflow: visible;\n  }\n}\n.icon-button[disabled],\n.promethea-button[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-overlay {\n  animation: fadeIn 0.2s ease-out;\n}\n.order-editor-wrapper {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=order-editor.css.map */\n'] }]
  }], () => [], { table: [{
    type: Input
  }], mode: [{
    type: Input
  }], existingOrderHeader: [{
    type: Input
  }], orderingStatus: [{
    type: Input
  }], selectedComandaId: [{
    type: Input
  }], saved: [{
    type: Output
  }], closeRequested: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderEditor, { className: "OrderEditor", filePath: "src/app/restaurant/layout/table-map/order-editor/order-editor.ts", lineNumber: 28 });
})();

// src/app/services/Ordini/order-manager.service.ts
var OrderManagerService = class _OrderManagerService {
  supabase = inject(SupabaseService).getSupabaseClient();
  authService = inject(AuthService);
  loadingService = inject(LoadingService);
  // 📌 OCCUPA TAVOLO (crea tavolata con prima comanda)
  occupyTable(tableId, customerName) {
    return __async(this, null, function* () {
      try {
        this.loadingService.start();
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const orderNumber = yield this.generateOrderNumber(restaurantId);
        const { data: orderHeader, error } = yield this.supabase.from("order_headers").insert({
          restaurant_id: restaurantId,
          table_id: tableId,
          order_number: orderNumber,
          status: "active",
          customer_name: customerName || "Cliente",
          total_amount: 0
        }).select().single();
        if (error)
          throw error;
        const comanda = yield this.createComanda(orderHeader.id);
        return yield this.loadTavolata(orderHeader.id);
      } catch (error) {
        console.error("\u274C Errore occupazione tavolo:", error);
        return null;
      } finally {
        this.loadingService.stop();
      }
    });
  }
  // 📌 CREA NUOVA COMANDA
  createComanda(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        this.loadingService.start();
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const { data: orderHeader, error: headerError } = yield this.supabase.from("order_headers").select("table_id, order_number, customer_name, status").eq("id", orderHeaderId).single();
        if (headerError)
          throw headerError;
        const comandaNumber = yield this.getNextComandaNumber(orderHeaderId);
        const comandaOrderNumber = `${orderHeader.order_number}-${comandaNumber}`;
        const { data: comanda, error } = yield this.supabase.from("comande").insert({
          restaurant_id: restaurantId,
          order_header_id: orderHeaderId,
          comanda_number: comandaNumber,
          order_number: comandaOrderNumber,
          status: "ordered",
          table_id: orderHeader.table_id,
          order_type: "dine_in",
          subtotal: 0,
          tax_amount: 0,
          discount_amount: 0,
          total_amount: 0,
          customer_name: orderHeader.customer_name || "Cliente"
          // Aggiunto valore di default
        }).select().single();
        if (error)
          throw error;
        return comanda;
      } catch (error) {
        console.error("\u274C Errore creazione comanda:", error);
        return null;
      } finally {
        this.loadingService.stop();
      }
    });
  }
  // 📌 AGGIUNGI PIATTO A COMANDA
  addItemToComanda(comandaId, dishId, quantity = 1, notes = "") {
    return __async(this, null, function* () {
      try {
        this.loadingService.start();
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const { data: dish, error: dishError } = yield this.supabase.from("dishes").select("base_price, name").eq("id", dishId).single();
        if (dishError)
          throw dishError;
        const totalPrice = dish.base_price * quantity;
        const { data: orderItem, error } = yield this.supabase.from("order_items").insert({
          order_id: comandaId,
          dish_id: dishId,
          quantity,
          unit_price: dish.base_price,
          total_price: totalPrice,
          item_notes: notes,
          status: "ordered",
          restaurant_id: restaurantId
        }).select().single();
        if (error)
          throw error;
        yield this.updateComandaTotal(comandaId);
        return __spreadProps(__spreadValues({}, orderItem), {
          dish_name: dish.name
        });
      } catch (error) {
        console.error("\u274C Errore aggiunta piatto:", error);
        return null;
      } finally {
        this.loadingService.stop();
      }
    });
  }
  // 📌 CARICA TUTTA LA TAVOLATA
  loadTavolata(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        this.loadingService.start();
        const { data, error } = yield this.supabase.from("order_headers").select(`
          *,
          comande (
            *,
            order_items (
              *,
              dish:dish_id (
                id,
                name,
                base_price,
                category_id
              )
            )
          )
        `).eq("id", orderHeaderId).single();
        if (error)
          throw error;
        return data;
      } catch (error) {
        console.error("\u274C Errore caricamento tavolata:", error);
        return null;
      } finally {
        this.loadingService.stop();
      }
    });
  }
  // 📌 CARICA TAVOLATA ATTIVA PER TAVOLO
  getActiveTavolataByTable(tableId) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const { data, error } = yield this.supabase.from("order_headers").select(`
          *,
          comande (
            *,
            order_items (
              *,
              dish:dish_id (
                id,
                name,
                base_price
              )
            )
          )
        `).eq("restaurant_id", restaurantId).eq("table_id", tableId).eq("status", "active").order("created_at", { ascending: false }).limit(1).single();
        if (error) {
          if (error.code === "PGRST116")
            return null;
          throw error;
        }
        return data;
      } catch (error) {
        console.error("\u274C Errore caricamento tavolata attiva:", error);
        return null;
      }
    });
  }
  // 📌 AGGIORNA STATO COMANDA
  updateComandaStatus(comandaId, status) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabase.from("comande").update({
          status,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", comandaId);
        return !error;
      } catch (error) {
        console.error("\u274C Errore aggiornamento stato comanda:", error);
        return false;
      }
    });
  }
  // 📌 AGGIORNA QUANTITÀ PIATTO
  updateItemQuantity(itemId, quantity) {
    return __async(this, null, function* () {
      try {
        const { data: item, error: fetchError } = yield this.supabase.from("order_items").select("unit_price, order_id").eq("id", itemId).single();
        if (fetchError)
          throw fetchError;
        const totalPrice = item.unit_price * quantity;
        const { error } = yield this.supabase.from("order_items").update({
          quantity,
          total_price: totalPrice,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", itemId);
        if (error)
          throw error;
        if (item.order_id) {
          yield this.updateComandaTotal(item.order_id);
        }
        return true;
      } catch (error) {
        console.error("\u274C Errore aggiornamento quantit\xE0:", error);
        return false;
      }
    });
  }
  // 📌 RIMUOVI PIATTO
  removeItem(itemId) {
    return __async(this, null, function* () {
      try {
        const { data: item, error: fetchError } = yield this.supabase.from("order_items").select("order_id").eq("id", itemId).single();
        if (fetchError)
          throw fetchError;
        const { error } = yield this.supabase.from("order_items").delete().eq("id", itemId);
        if (error)
          throw error;
        if (item.order_id) {
          yield this.updateComandaTotal(item.order_id);
        }
        return true;
      } catch (error) {
        console.error("\u274C Errore rimozione piatto:", error);
        return false;
      }
    });
  }
  // 📌 CHIUDI TAVOLATA
  closeTavolata(orderHeaderId) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabase.from("order_headers").update({
          status: "completed",
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", orderHeaderId);
        return !error;
      } catch (error) {
        console.error("\u274C Errore chiusura tavolata:", error);
        return false;
      }
    });
  }
  // 🔧 METODI PRIVATI
  generateOrderNumber(restaurantId) {
    return __async(this, null, function* () {
      const date = /* @__PURE__ */ new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const { count } = yield this.supabase.from("order_headers").select("*", { count: "exact", head: true }).eq("restaurant_id", restaurantId).gte("created_at", `${date.getFullYear()}-${month}-${day}T00:00:00`).lte("created_at", `${date.getFullYear()}-${month}-${day}T23:59:59`);
      const dailyCount = (count || 0) + 1;
      return `TAV-${year}${month}${day}-${dailyCount.toString().padStart(3, "0")}`;
    });
  }
  getNextComandaNumber(orderHeaderId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.supabase.from("comande").select("comanda_number").eq("order_header_id", orderHeaderId).order("comanda_number", { ascending: false }).limit(1);
      if (error) {
        console.error("Errore calcolo prossima comanda:", error);
        return 1;
      }
      return data && data.length > 0 ? data[0].comanda_number + 1 : 1;
    });
  }
  updateComandaTotal(comandaId) {
    return __async(this, null, function* () {
      try {
        const { data: items, error } = yield this.supabase.from("order_items").select("total_price").eq("order_id", comandaId);
        if (error)
          throw error;
        const total = (items || []).reduce((sum, item) => sum + (item.total_price || 0), 0);
        yield this.supabase.from("comande").update({
          total_amount: total,
          subtotal: total,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", comandaId);
      } catch (error) {
        console.error("Errore aggiornamento totale comanda:", error);
      }
    });
  }
  static \u0275fac = function OrderManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderManagerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderManagerService, factory: _OrderManagerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderManagerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/restaurant/layout/table-map/table-map.ts
var _c02 = ["mapCard"];
var _c12 = ["tableMapContainer"];
var _c2 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function TableMap_select_88_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", plan_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r4.name, " ");
  }
}
function TableMap_select_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_select_88_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentFloorPlan, $event) || (ctx_r2.currentFloorPlan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TableMap_select_88_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFloorPlanSelect($event));
    });
    \u0275\u0275template(1, TableMap_select_88_option_1_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentFloorPlan);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.floorPlans);
  }
}
function TableMap_div_114_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tableStatus_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-large", ctx_r2.isLargeText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pren: ", tableStatus_r6.currentReservation.customer_name, "");
  }
}
function TableMap_div_114_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tableStatus_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-large", ctx_r2.isLargeText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ord: ", ctx_r2.getTableOrderCount(tableStatus_r6.table.id), " piatti");
  }
}
function TableMap_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function TableMap_div_114_Template_div_click_0_listener() {
      const tableStatus_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTableClick(tableStatus_r6));
    });
    \u0275\u0275elementStart(1, "div", 56)(2, "div", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58)(5, "div", 59);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "lucide-angular", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TableMap_div_114_div_8_Template, 3, 3, "div", 61)(9, TableMap_div_114_div_9_Template, 3, 3, "div", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tableStatus_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.getTableClass(tableStatus_r6));
    \u0275\u0275property("ngStyle", ctx_r2.getTableStyle(tableStatus_r6.table));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-large", ctx_r2.isLargeText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tableStatus_r6.table.table_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", tableStatus_r6.table.capacity, " ");
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tableStatus_r6.currentReservation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tableStatus_r6.currentOrders);
  }
}
function TableMap_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 29);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun tavolo trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 64);
    \u0275\u0275text(6, "Modifica i filtri di ricerca");
    \u0275\u0275elementEnd()();
  }
}
function TableMap_div_116_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "button", 76);
    \u0275\u0275listener("click", function TableMap_div_116_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openManualReservationModal();
      return \u0275\u0275resetView(ctx_r2.showQuickActionsModal = false);
    });
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Crea Prenotazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function TableMap_div_116_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openOrderEditor());
    });
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r2.orderingStatus.allowed)("title", !ctx_r2.orderingStatus.allowed ? "Disabilitato: fuori orario dei turni" : "Crea nuovo ordine");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.orderingStatus.allowed ? "restaurant" : "schedule");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.orderingStatus.allowed ? "Crea Ordine" : "Fuori Turno", " ");
  }
}
function TableMap_div_116_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "button", 78);
    \u0275\u0275listener("click", function TableMap_div_116_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openEditReservationModal();
      return \u0275\u0275resetView(ctx_r2.showQuickActionsModal = false);
    });
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Modifica Prenotazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function TableMap_div_116_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openOrderEditor());
    });
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Conferma Arrivo (Crea Ordine) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r2.orderingStatus.allowed);
  }
}
function TableMap_div_116_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "button", 76);
    \u0275\u0275listener("click", function TableMap_div_116_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openOrderEditor());
    });
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Visualizza Ordini ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function TableMap_div_116_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addNewComandaToTable());
    });
    \u0275\u0275element(6, "lucide-angular", 80);
    \u0275\u0275text(7, " Nuova Comanda ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 81);
    \u0275\u0275listener("click", function TableMap_div_116_div_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.freeTable());
    });
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Libera Tavolo ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r2.orderingStatus.allowed)("title", !ctx_r2.orderingStatus.allowed ? ctx_r2.orderingStatus.reason : "Aggiungi una nuova comanda alla tavolata corrente");
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function TableMap_div_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 40)(4, "div", 68)(5, "span", 29);
    \u0275\u0275text(6, "table_restaurant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275listener("click", function TableMap_div_116_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deselectTable());
    });
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 70)(14, "div", 71)(15, "div", 72)(16, "span", 73);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(18, TableMap_div_116_div_18_Template, 9, 4, "div", 74)(19, TableMap_div_116_div_19_Template, 9, 1, "div", 74)(20, TableMap_div_116_div_20_Template, 12, 3, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Tavolo ", ctx_r2.selectedTable == null ? null : ctx_r2.selectedTable.table_number, "");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r2.getStatusColorClass((ctx_r2.selectedTableStatus == null ? null : ctx_r2.selectedTableStatus.status) || "free"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusText((ctx_r2.selectedTableStatus == null ? null : ctx_r2.selectedTableStatus.status) || "free"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedTableStatus == null ? null : ctx_r2.selectedTableStatus.status) === "free");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedTableStatus == null ? null : ctx_r2.selectedTableStatus.status) === "reserved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedTableStatus == null ? null : ctx_r2.selectedTableStatus.status) === "occupied");
  }
}
function TableMap_div_117_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const num_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", num_r12)("disabled", ctx_r2.selectedTable && num_r12 > ctx_r2.selectedTable.capacity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", num_r12, " ", num_r12 === 1 ? "persona" : "persone", " ", ctx_r2.selectedTable && num_r12 > ctx_r2.selectedTable.capacity ? " (Troppe persone)" : "", " ");
  }
}
function TableMap_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 82)(2, "div", 67)(3, "div", 40)(4, "div", 68)(5, "span", 29);
    \u0275\u0275text(6, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h2", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275listener("click", function TableMap_div_117_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeManualReservationModal());
    });
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 70)(14, "form", 83, 2);
    \u0275\u0275listener("ngSubmit", function TableMap_div_117_Template_form_ngSubmit_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.createManualReservation();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(16, "div", 84)(17, "div", 18)(18, "label", 19);
    \u0275\u0275text(19, "Nome Cliente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_117_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualReservationData.customer_name, $event) || (ctx_r2.manualReservationData.customer_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "label", 19);
    \u0275\u0275text(23, "Telefono *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_117_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualReservationData.customer_phone, $event) || (ctx_r2.manualReservationData.customer_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 84)(26, "div", 18)(27, "label", 19);
    \u0275\u0275text(28, "Data *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_117_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualReservationData.reservation_date, $event) || (ctx_r2.manualReservationData.reservation_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 18)(31, "label", 19);
    \u0275\u0275text(32, "Orario *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_117_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualReservationData.reservation_time, $event) || (ctx_r2.manualReservationData.reservation_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 18)(35, "label", 19);
    \u0275\u0275text(36, "Numero Persone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 89);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_117_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualReservationData.party_size, $event) || (ctx_r2.manualReservationData.party_size = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(38, TableMap_div_117_option_38_Template, 2, 5, "option", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 91);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 18)(42, "label", 19);
    \u0275\u0275text(43, "Note Speciali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "textarea", 92);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_117_Template_textarea_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualReservationData.special_requests, $event) || (ctx_r2.manualReservationData.special_requests = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 75)(46, "button", 93);
    \u0275\u0275listener("click", function TableMap_div_117_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeManualReservationModal());
    });
    \u0275\u0275text(47, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 94);
    \u0275\u0275element(49, "lucide-angular", 80);
    \u0275\u0275text(50, " Crea Prenotazione ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const reservationForm_r13 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Nuova Prenotazione - Tavolo ", ctx_r2.selectedTable == null ? null : ctx_r2.selectedTable.table_number, "");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualReservationData.customer_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualReservationData.customer_phone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualReservationData.reservation_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualReservationData.reservation_time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualReservationData.party_size);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(11, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Capacit\xE0 massima tavolo: ", (ctx_r2.selectedTable == null ? null : ctx_r2.selectedTable.capacity) || 0, " persone ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualReservationData.special_requests);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !reservationForm_r13.valid);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function TableMap_div_118_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const num_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", num_r15)("disabled", ctx_r2.selectedTable && num_r15 > ctx_r2.selectedTable.capacity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", num_r15, " ", num_r15 === 1 ? "persona" : "persone", " ", ctx_r2.selectedTable && num_r15 > ctx_r2.selectedTable.capacity ? " (Troppe persone)" : "", " ");
  }
}
function TableMap_div_118_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function TableMap_div_118_button_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteReservation());
    });
    \u0275\u0275element(1, "lucide-angular", 101);
    \u0275\u0275text(2, " Elimina ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function TableMap_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 82)(2, "div", 67)(3, "div", 40)(4, "div", 68)(5, "span", 29);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275listener("click", function TableMap_div_118_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditReservationModal());
    });
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 70)(14, "form", 83, 2);
    \u0275\u0275listener("ngSubmit", function TableMap_div_118_Template_form_ngSubmit_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.updateReservation();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(16, "div", 84)(17, "div", 18)(18, "label", 19);
    \u0275\u0275text(19, "Nome Cliente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_118_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editingReservation.customer_name, $event) || (ctx_r2.editingReservation.customer_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "label", 19);
    \u0275\u0275text(23, "Telefono *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_118_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editingReservation.customer_phone, $event) || (ctx_r2.editingReservation.customer_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 84)(26, "div", 18)(27, "label", 19);
    \u0275\u0275text(28, "Data *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_118_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editingReservation.reservation_date, $event) || (ctx_r2.editingReservation.reservation_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 18)(31, "label", 19);
    \u0275\u0275text(32, "Orario *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_118_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editingReservation.reservation_time, $event) || (ctx_r2.editingReservation.reservation_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 18)(35, "label", 19);
    \u0275\u0275text(36, "Numero Persone *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 89);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_118_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editingReservation.party_size, $event) || (ctx_r2.editingReservation.party_size = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(38, TableMap_div_118_option_38_Template, 2, 5, "option", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 91);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 18)(42, "label", 19);
    \u0275\u0275text(43, "Note Speciali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "textarea", 92);
    \u0275\u0275twoWayListener("ngModelChange", function TableMap_div_118_Template_textarea_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editingReservation.special_requests, $event) || (ctx_r2.editingReservation.special_requests = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 75)(46, "div", 96);
    \u0275\u0275template(47, TableMap_div_118_button_47_Template, 3, 1, "button", 97);
    \u0275\u0275elementStart(48, "div", 98)(49, "button", 93);
    \u0275\u0275listener("click", function TableMap_div_118_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditReservationModal());
    });
    \u0275\u0275text(50, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 94);
    \u0275\u0275element(52, "lucide-angular", 99);
    \u0275\u0275text(53, " Salva ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const reservationForm_r17 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Modifica Prenotazione - Tavolo ", ctx_r2.selectedTable == null ? null : ctx_r2.selectedTable.table_number, "");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingReservation.customer_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingReservation.customer_phone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingReservation.reservation_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingReservation.reservation_time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingReservation.party_size);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(11, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Capacit\xE0 massima tavolo: ", (ctx_r2.selectedTable == null ? null : ctx_r2.selectedTable.capacity) || 0, " persone ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingReservation.special_requests);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isReservationDeletable(ctx_r2.editingReservation));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !reservationForm_r17.valid);
  }
}
function TableMap_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "app-order-editor", 102);
    \u0275\u0275listener("saved", function TableMap_div_119_Template_app_order_editor_saved_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOrderSaved($event));
    })("closeRequested", function TableMap_div_119_Template_app_order_editor_closeRequested_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrderEditorModal());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("table", ctx_r2.orderEditorData.table)("mode", ctx_r2.orderEditorData.mode)("existingOrderHeader", ctx_r2.orderEditorData.existingOrderHeader)("selectedComandaId", ctx_r2.orderEditorData.selectedComandaId)("orderingStatus", ctx_r2.orderingStatus);
  }
}
function TableMap_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "app-order-editor", 102);
    \u0275\u0275listener("saved", function TableMap_div_120_Template_app_order_editor_saved_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOrderSaved($event));
    })("closeRequested", function TableMap_div_120_Template_app_order_editor_closeRequested_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrderEditorViewModal());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("table", ctx_r2.orderEditorData.table)("mode", ctx_r2.orderEditorData.mode)("existingOrderHeader", ctx_r2.orderEditorData.existingOrderHeader)("selectedComandaId", ctx_r2.orderEditorData.selectedComandaId)("orderingStatus", ctx_r2.orderingStatus);
  }
}
var TableMap = class _TableMap {
  // SERVIZI
  tableStatusService = inject(TableStatusService);
  floorManagementService = inject(FloorManagementService);
  loadingService = inject(LoadingService);
  tableService = inject(TableService);
  floorPlanService = inject(FloorPlanService);
  reservationService = inject(ReservationService);
  authService = inject(AuthService);
  orderHeaderService = inject(OrderHeaderService);
  shiftService = inject(ShiftService);
  comandaService = inject(ComandaService);
  orderItemService = inject(OrderItemService);
  orderManagerService = inject(OrderManagerService);
  cdr = inject(ChangeDetectorRef);
  elementRef = inject(ElementRef);
  tutorialService = inject(TutorialService);
  tutorialEditorOpened = false;
  pendingTutorialStep = null;
  ngZone = inject(NgZone);
  mapCardElement;
  tableMapContainer;
  // STATI LOCALI
  zoomLevel = 1;
  minZoom = 0.5;
  maxZoom = 3;
  mobileView = false;
  isFullscreen = false;
  isLargeText = false;
  // FILTRI
  searchTerm = "";
  statusFilter = "all";
  // MODALI (SOLO QUELLE ESSENZIALI)
  showQuickActionsModal = false;
  showManualReservationModal = false;
  showEditReservationModal = false;
  showAssignReservationModal = false;
  showTableReservationsModal = false;
  showTableAssignmentModal = false;
  // ORDER EDITOR
  showOrderEditorModal = false;
  showOrderEditorViewModal = false;
  orderEditorData = {
    table: null,
    mode: "edit",
    existingOrderHeader: null,
    orderHeaders: [],
    currentTavolataId: null,
    selectedComandaId: void 0
  };
  // DATI
  currentFloorPlan = null;
  tableStatuses = [];
  selectedTable = null;
  selectedTableStatus = null;
  currentRestaurant = null;
  tableOrderCounts = /* @__PURE__ */ new Map();
  // FORM PRENOTAZIONE
  manualReservationData = {
    customer_name: "",
    customer_phone: "",
    reservation_date: "",
    reservation_time: "",
    party_size: 2,
    special_requests: ""
  };
  editingReservation = null;
  // TURNI
  orderingStatus = {
    allowed: false,
    reason: "Caricamento...",
    currentShift: null
  };
  // PRENOTAZIONI
  availableReservationsWithoutTable = [];
  selectedReservationForAssignment = null;
  assignmentReservation = null;
  suggestedTablesByFloorPlan = {};
  selectedFloorPlanForAssignment = null;
  // RESERVATIONS PER TAVOLO
  selectedTableReservations = {
    active: null,
    futureReservations: [],
    shiftInfo: { current: null, next: null }
  };
  subscriptions = new Subscription();
  constructor() {
    effect(() => {
      const step = this.tutorialService.currentStepData();
      if (step?.id === "order-editor" && !this.tutorialEditorOpened) {
        if (this.tableService.data.length === 0) {
          this.pendingTutorialStep = "order-editor";
        } else {
          Promise.resolve().then(() => {
            this.openOrderEditorForTutorial();
          });
        }
      } else if (step?.id !== "order-editor") {
        this.tutorialEditorOpened = false;
        this.pendingTutorialStep = null;
      }
    });
  }
  openOrderEditorForTutorial() {
    const firstTable = this.tableService.data[0];
    if (!firstTable) {
      console.warn("[Tutorial] Nessun tavolo disponibile, passo allo step successivo");
      this.tutorialService.nextStep();
      return;
    }
    this.orderEditorData = {
      table: firstTable,
      mode: "edit",
      existingOrderHeader: null,
      orderHeaders: [],
      currentTavolataId: null,
      selectedComandaId: void 0
    };
    this.showOrderEditorModal = true;
    console.log("[Tutorial] showOrderEditorModal impostato a true", this.showOrderEditorModal);
  }
  // GETTER PER COMPATIBILITÀ
  get floorPlans() {
    return this.floorPlanService.data;
  }
  get dishes() {
    return [];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadInitialData();
      this.checkMobileView();
      window.addEventListener("resize", () => this.checkMobileView());
      this.startShiftChecking();
      this.setupFullscreenListeners();
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    window.removeEventListener("resize", () => this.checkMobileView());
    document.removeEventListener("fullscreenchange", this.handleFullscreenChange.bind(this));
    document.removeEventListener("webkitfullscreenchange", this.handleFullscreenChange.bind(this));
    document.removeEventListener("msfullscreenchange", this.handleFullscreenChange.bind(this));
  }
  // ============ CARICAMENTO DATI ============
  loadInitialData() {
    return __async(this, null, function* () {
      this.loadingService.start();
      try {
        yield Promise.all([
          this.floorPlanService.loadFloorPlans(),
          this.tableService.loadData(),
          this.floorManagementService.loadTodaysReservations()
        ]);
        const allVisibleTables = this.tableService.data.filter((t) => !t.is_merged || t.parent_table_id === null);
        this.tableStatuses = yield this.tableStatusService.calculateTableStatus(allVisibleTables);
        if (this.floorPlans.length > 0 && !this.currentFloorPlan) {
          this.currentFloorPlan = this.floorPlans[0];
          yield this.loadTablesForFloorPlan();
        }
        if (this.pendingTutorialStep === "order-editor" && !this.tutorialEditorOpened) {
          Promise.resolve().then(() => {
            this.openOrderEditorForTutorial();
          });
        }
      } finally {
        this.loadingService.stop();
      }
    });
  }
  // ============ INTERAZIONI TAVOLO ============
  onTableClick(tableStatus) {
    return __async(this, null, function* () {
      this.selectedTable = tableStatus.table;
      this.selectedTableStatus = tableStatus;
      yield this.loadTableReservations(tableStatus.table.id);
      this.showQuickActionsModal = true;
    });
  }
  deselectTable() {
    this.selectedTable = null;
    this.selectedTableStatus = null;
    this.showQuickActionsModal = false;
    this.showManualReservationModal = false;
    this.showEditReservationModal = false;
  }
  // ============ GESTIONE PRENOTAZIONI ============
  openManualReservationModal() {
    return __async(this, null, function* () {
      if (!this.selectedTable)
        return;
      const now = /* @__PURE__ */ new Date();
      this.manualReservationData = {
        customer_name: "",
        customer_phone: "",
        reservation_date: now.toISOString().split("T")[0],
        reservation_time: now.toTimeString().split(" ")[0].substring(0, 5),
        party_size: this.selectedTable.capacity || 2,
        special_requests: ""
      };
      this.showQuickActionsModal = false;
      this.showManualReservationModal = true;
    });
  }
  closeManualReservationModal() {
    this.showManualReservationModal = false;
  }
  createManualReservation() {
    return __async(this, null, function* () {
      if (!this.selectedTable)
        return;
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        const reservationData = {
          restaurant_id: restaurantId,
          table_id: this.selectedTable.id,
          reservation_date: this.manualReservationData.reservation_date,
          reservation_time: this.manualReservationData.reservation_time,
          party_size: this.manualReservationData.party_size,
          special_requests: this.manualReservationData.special_requests,
          status: "confirmed",
          customer_name: this.manualReservationData.customer_name,
          customer_phone: this.manualReservationData.customer_phone
        };
        const result = yield this.reservationService.createRestaurantReservation(reservationData);
        if (result) {
          this.closeManualReservationModal();
          yield this.loadInitialData();
          alert("Prenotazione creata con successo!");
        } else {
          alert("Errore nella creazione della prenotazione");
        }
      } catch (error) {
        console.error("Error creating manual reservation:", error);
        alert("Errore durante la creazione della prenotazione: " + error.message);
      }
    });
  }
  // ============ GESTIONE ORDINI (SEMPLICE) ============
  openOrderEditor() {
    return __async(this, null, function* () {
      if (!this.selectedTable)
        return;
      try {
        this.loadingService.start();
        const activeOrderHeader = yield this.orderHeaderService.getActiveByTable(this.selectedTable.id);
        if (activeOrderHeader) {
          this.orderEditorData = {
            table: this.selectedTable,
            mode: "view",
            existingOrderHeader: activeOrderHeader,
            orderHeaders: [activeOrderHeader],
            currentTavolataId: activeOrderHeader.id,
            selectedComandaId: void 0
            // Aggiungi questa riga
          };
          this.showOrderEditorViewModal = true;
          console.log("\u{1F441}\uFE0F Apro order editor in modalit\xE0 VIEW");
        } else {
          this.orderEditorData = {
            table: this.selectedTable,
            mode: "edit",
            existingOrderHeader: null,
            orderHeaders: [],
            currentTavolataId: null,
            selectedComandaId: void 0
            // Aggiungi questa riga
          };
          this.showOrderEditorModal = true;
          console.log("\u270F\uFE0F Apro order editor in modalit\xE0 EDIT (nuovo)");
        }
        this.showQuickActionsModal = false;
      } catch (error) {
        console.error("\u274C Errore apertura order editor:", error);
      } finally {
        this.loadingService.stop();
      }
    });
  }
  closeOrderEditorModal() {
    this.showOrderEditorModal = false;
    this.loadTablesForFloorPlan();
  }
  closeOrderEditorViewModal() {
    this.showOrderEditorViewModal = false;
  }
  // ============ UTILITY ============
  loadTableReservations(tableId) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const reservations = this.reservationService.data.filter((reservation) => reservation.restaurant_id === restaurantId && reservation.table_id === tableId && reservation.reservation_date === today && ["confirmed", "pending"].includes(reservation.status)).sort((a, b) => a.reservation_time.localeCompare(b.reservation_time));
        let activeReservation = null;
        const futureReservations = [];
        for (const reservation of reservations) {
          const reservationTime = /* @__PURE__ */ new Date(`${reservation.reservation_date}T${reservation.reservation_time}`);
          const now = /* @__PURE__ */ new Date();
          const timeDiffHours = (reservationTime.getTime() - now.getTime()) / (1e3 * 60 * 60);
          if (timeDiffHours >= 0 && timeDiffHours <= 1.5) {
            activeReservation = reservation;
          } else if (timeDiffHours > 1.5) {
            futureReservations.push(reservation);
          }
        }
        this.selectedTableReservations = {
          active: activeReservation,
          futureReservations,
          shiftInfo: { current: null, next: null }
        };
      } catch (error) {
        console.error("Errore caricamento prenotazioni tavolo:", error);
        this.selectedTableReservations = {
          active: null,
          futureReservations: [],
          shiftInfo: { current: null, next: null }
        };
      }
    });
  }
  // ============ UI HELPERS ============
  checkMobileView() {
    this.mobileView = window.innerWidth <= 768;
  }
  getFilteredTables() {
    let filtered = this.tableStatuses;
    if (this.statusFilter !== "all") {
      filtered = filtered.filter((ts) => ts.status === this.statusFilter);
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((ts) => ts.table.table_number.toLowerCase().includes(term) || ts.table.table_name.toLowerCase().includes(term));
    }
    return filtered;
  }
  getTableClass(tableStatus) {
    const selected = this.selectedTable?.id === tableStatus.table.id;
    return `table-element shape-${tableStatus.table.shape} ${tableStatus.status} ${selected ? "selected" : ""}`;
  }
  getTableStyle(table) {
    return {
      left: table.position_x + "px",
      top: table.position_y + "px",
      width: table.width + "px",
      height: table.height + "px",
      "border-radius": table.shape === "circle" ? "50%" : "0px",
      transform: `rotate(${table.rotation}deg)`
    };
  }
  // ============ TURNI ============
  startShiftChecking() {
    this.checkCurrentShift();
    this.subscriptions.add(interval(6e4).subscribe(() => this.checkCurrentShift()));
  }
  checkCurrentShift() {
    return __async(this, null, function* () {
      const status = yield this.shiftService.getOrderingStatus();
      this.orderingStatus = status;
    });
  }
  getShiftStatusClass() {
    return this.orderingStatus.allowed ? "shift-active" : "shift-inactive";
  }
  getShiftStatusText() {
    return this.orderingStatus.allowed ? "\u{1F4CB} Orario di turno" : "\u23F0 " + this.orderingStatus.reason;
  }
  // ============ RESTAURANT ID ============
  getCurrentRestaurantId() {
    return __async(this, null, function* () {
      try {
        const staffId = this.authService.getCurrentStaffRestaurantId();
        if (staffId)
          return staffId;
        const user = this.authService.currentUserValue;
        if (!user)
          return null;
        yield this.reservationService.loadData();
        if (this.reservationService.data.length > 0) {
          return this.reservationService.data[0]?.restaurant_id || null;
        }
        return null;
      } catch (error) {
        console.error("Errore in getCurrentRestaurantId:", error);
        return null;
      }
    });
  }
  // ============ TEMPLATE HELPERS ============
  getStatusColorClass(status = "") {
    return `status-${status}`;
  }
  getStatusText(status = "") {
    const statusMap = {
      "free": "Libero",
      "reserved": "Prenotato",
      "occupied": "Occupato"
    };
    return statusMap[status] || status;
  }
  // ============ CONTEGGI PIATTI ============
  getTableOrderItemsCount(tableId) {
    return __async(this, null, function* () {
      try {
        const orderHeader = yield this.orderHeaderService.getActiveByTable(tableId);
        if (!orderHeader)
          return 0;
        const comande = yield this.comandaService.loadByOrderHeaderId(orderHeader.id);
        let totalItems = 0;
        for (const comanda of comande) {
          const items = yield this.orderItemService.loadByComandaId(comanda.id);
          totalItems += items.length;
        }
        return totalItems;
      } catch (error) {
        console.error("Errore conteggio piatti:", error);
        return 0;
      }
    });
  }
  // ============ METODI PER TAVOLO ============
  onFloorPlanSelect(plan) {
    this.currentFloorPlan = plan;
    this.loadTablesForFloorPlan();
    this.deselectTable();
  }
  // ============ METODI PER FULLSCREEN ============
  safeToggleFullscreen() {
    return __async(this, null, function* () {
      try {
        if (!document.fullscreenElement) {
          const element = this.tableMapContainer?.nativeElement || document.documentElement;
          this.cdr.detectChanges();
          if (element.requestFullscreen) {
            yield element.requestFullscreen();
          } else if (element.webkitRequestFullscreen) {
            yield element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) {
            yield element.msRequestFullscreen();
          }
          this.isFullscreen = true;
        } else {
          if (document.exitFullscreen) {
            yield document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            yield document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            yield document.msExitFullscreen();
          }
          this.isFullscreen = false;
        }
        this.cdr.detectChanges();
      } catch (error) {
        console.error("Errore fullscreen:", error);
        this.isFullscreen = !this.isFullscreen;
        this.cdr.detectChanges();
      }
    });
  }
  setupFullscreenListeners() {
    document.addEventListener("fullscreenchange", this.handleFullscreenChange.bind(this));
    document.addEventListener("webkitfullscreenchange", this.handleFullscreenChange.bind(this));
    document.addEventListener("msfullscreenchange", this.handleFullscreenChange.bind(this));
  }
  handleFullscreenChange() {
    const wasFullscreen = this.isFullscreen;
    this.isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }
  // ============ METODI PER ZOOM ============
  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel * 1.25, this.maxZoom);
  }
  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel / 1.25, this.minZoom);
  }
  resetZoom() {
    this.zoomLevel = 1;
  }
  getScaledWidth() {
    return (this.currentFloorPlan?.width || 1e3) * this.zoomLevel;
  }
  getScaledHeight() {
    return (this.currentFloorPlan?.height || 800) * this.zoomLevel;
  }
  // ============ METODI PRENOTAZIONI ============
  updateReservation() {
    return __async(this, null, function* () {
      if (this.editingReservation) {
        try {
          const success = yield this.reservationService.updateReservation(this.editingReservation.id, this.editingReservation);
          if (success) {
            yield this.loadInitialData();
            this.closeEditReservationModal();
            this.deselectTable();
          } else {
            alert("Errore durante l'aggiornamento della prenotazione");
          }
        } catch (error) {
          console.error("Errore nell'aggiornamento della prenotazione:", error);
          alert("Errore durante l'aggiornamento della prenotazione");
        }
      }
    });
  }
  deleteReservation() {
    return __async(this, null, function* () {
      if (this.editingReservation && this.isReservationDeletable(this.editingReservation)) {
        try {
          const success = yield this.reservationService.deleteReservation(this.editingReservation.id);
          if (success) {
            yield this.loadInitialData();
            this.closeEditReservationModal();
            this.deselectTable();
          } else {
            alert("Errore durante l'eliminazione della prenotazione");
          }
        } catch (error) {
          console.error("Errore nell'eliminazione della prenotazione:", error);
          alert("Errore durante l'eliminazione della prenotazione");
        }
      } else {
        alert("Impossibile eliminare questa prenotazione");
      }
    });
  }
  isReservationDeletable(reservation) {
    if (!reservation?.reservation_date || !reservation?.reservation_time)
      return false;
    const reservationDateTime = /* @__PURE__ */ new Date(`${reservation.reservation_date}T${reservation.reservation_time}`);
    const now = /* @__PURE__ */ new Date();
    return reservationDateTime > now;
  }
  openEditReservationModal() {
    if (this.selectedTableStatus?.currentReservation) {
      this.editingReservation = __spreadValues({}, this.selectedTableStatus.currentReservation);
      this.showEditReservationModal = true;
      this.showQuickActionsModal = false;
    }
  }
  closeEditReservationModal() {
    this.showEditReservationModal = false;
    this.editingReservation = null;
  }
  // ============ METODI PER STATISTICHE ============
  getFreeTablesCount() {
    return this.tableStatuses.filter((ts) => ts.status === "free").length;
  }
  getReservedTablesCount() {
    return this.tableStatuses.filter((ts) => ts.status === "reserved").length;
  }
  getOccupiedTablesCount() {
    return this.tableStatuses.filter((ts) => ts.status === "occupied").length;
  }
  getTotalTablesCount() {
    return this.tableStatuses.length;
  }
  // ============ METODO toggleSize ============
  toggleSize() {
    this.isLargeText = !this.isLargeText;
  }
  // ============ METODO getTableOrderItemsCount (versione sync) ============
  getTableOrderItemsCountSync(tableId) {
    return 0;
  }
  // Metodo per caricare tutti i conteggi
  loadAllTableOrderCounts() {
    return __async(this, null, function* () {
      this.tableOrderCounts.clear();
      const promises = this.tableStatuses.map((tableStatus) => __async(this, null, function* () {
        try {
          const count = yield this.getTableOrderItemsCount(tableStatus.table.id);
          this.tableOrderCounts.set(tableStatus.table.id, count);
        } catch (error) {
          console.error(`Errore caricamento ordini per tavolo ${tableStatus.table.id}:`, error);
          this.tableOrderCounts.set(tableStatus.table.id, 0);
        }
      }));
      yield Promise.all(promises);
    });
  }
  // Metodo sync per ottenere il conteggio
  getTableOrderCount(tableId) {
    return this.tableOrderCounts.get(tableId) || 0;
  }
  // Modifica il metodo loadTablesForFloorPlan per caricare anche i conteggi
  loadTablesForFloorPlan() {
    return __async(this, null, function* () {
      if (!this.currentFloorPlan)
        return;
      const version = this.currentFloorPlan.current_version ?? 1;
      const allTablesForPlan = this.tableService.getTablesByFloorPlan(this.currentFloorPlan.id, version);
      const visibleTables = allTablesForPlan.filter((t) => !t.is_merged || t.parent_table_id === null);
      this.tableStatuses = yield this.tableStatusService.calculateTableStatus(visibleTables);
      yield this.loadAllTableOrderCounts();
    });
  }
  // Aggiungi anche questo metodo per il conteggio tavoli con ordini
  getTablesWithOrdersCount() {
    return Array.from(this.tableOrderCounts.values()).filter((count) => count > 0).length;
  }
  // ============ LIBERA TAVOLO ============
  freeTable() {
    return __async(this, null, function* () {
      if (!this.selectedTable)
        return;
      const tableToFree = this.selectedTable;
      const tableNumber = tableToFree.table_number;
      try {
        const orderCount = yield this.getTableOrderItemsCount(tableToFree.id);
        if (orderCount > 0) {
          const confirmWithOrders = confirm(`\u26A0\uFE0F ATTENZIONE!

Il tavolo ${tableNumber} ha ${orderCount} piatti ordinati.

Sei sicuro di voler liberare il tavolo?
Questa azione chiuder\xE0 tutti gli ordini attivi.`);
          if (!confirmWithOrders)
            return;
        } else {
          const confirmFree = confirm(`Vuoi liberare il tavolo ${tableNumber}?`);
          if (!confirmFree)
            return;
        }
        this.loadingService.start();
        const success = yield this.orderHeaderService.closeAllActiveHeadersForTable(tableToFree.id);
        if (success) {
          console.log(`\u2705 Tavolo ${tableNumber} liberato`);
          yield this.loadTablesForFloorPlan();
          this.deselectTable();
          alert(`\u2705 Tavolo ${tableNumber} liberato con successo!`);
        } else {
          alert("\u274C Errore durante la liberazione del tavolo. Riprova.");
        }
      } catch (error) {
        console.error("\u274C Errore liberazione tavolo:", error);
        alert("\u274C Errore durante la liberazione del tavolo.");
      } finally {
        this.loadingService.stop();
      }
    });
  }
  addNewComandaToTable() {
    return __async(this, null, function* () {
      if (!this.selectedTable)
        return;
      try {
        this.loadingService.start();
        console.log("\u{1F195} Aggiunta nuova comanda al tavolo:", this.selectedTable.table_number);
        const activeOrderHeader = yield this.orderHeaderService.getActiveByTable(this.selectedTable.id);
        if (!activeOrderHeader) {
          console.error("\u274C Nessuna tavolata attiva trovata per questo tavolo");
          alert("Prima crea una tavolata per questo tavolo");
          return;
        }
        console.log("\u2705 Tavolata trovata:", activeOrderHeader.order_number);
        const newComanda = yield this.orderManagerService.createComanda(activeOrderHeader.id);
        if (!newComanda) {
          console.error("\u274C Errore nella creazione della nuova comanda");
          alert("Errore nella creazione della nuova comanda");
          return;
        }
        console.log("\u2705 Nuova comanda creata:", newComanda.comanda_number);
        const fullOrderHeader = yield this.orderManagerService.loadTavolata(activeOrderHeader.id);
        if (!fullOrderHeader) {
          console.error("\u274C Impossibile caricare l'ordine completo");
          alert("Errore nel caricamento dell'ordine");
          return;
        }
        this.orderEditorData = {
          table: this.selectedTable,
          mode: "edit",
          existingOrderHeader: fullOrderHeader,
          orderHeaders: [fullOrderHeader],
          currentTavolataId: fullOrderHeader.id,
          selectedComandaId: newComanda.id
          // Questo deve essere presente
        };
        this.showOrderEditorModal = true;
        this.showQuickActionsModal = false;
        console.log("\u{1F4CB} Aperto order editor con nuova comanda:", newComanda.comanda_number);
      } catch (error) {
        console.error("\u{1F4A5} Errore in addNewComandaToTable:", error);
        alert("Errore: " + error.message);
      } finally {
        this.loadingService.stop();
      }
    });
  }
  onOrderSaved(updatedOrder) {
    console.log("\u2705 Ordine salvato, aggiorno la mappa");
    this.loadTablesForFloorPlan();
    this.closeOrderEditorModal();
    this.closeOrderEditorViewModal();
  }
  get isLoading() {
    return this.loadingService.isLoadingSync();
  }
  get isFullscreenMode() {
    return this.isFullscreen;
  }
  static \u0275fac = function TableMap_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableMap)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableMap, selectors: [["app-table-map"]], viewQuery: function TableMap_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapCardElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableMapContainer = _t.first);
    }
  }, hostVars: 2, hostBindings: function TableMap_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("fullscreen-mode", ctx.isFullscreenMode);
    }
  }, decls: 121, vars: 37, consts: [["tableMapContainer", ""], ["floorPlanCanvas", ""], ["reservationForm", "ngForm"], [1, "page-container"], ["data-tutorial", "table-map-legend", 1, "grid-cards", "p-sm", "mt-lg"], [1, "card"], [1, "flex", "flex-col", "gap-md"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "form-card", "mt-lg"], ["data-tutorial", "table-map-shift", 1, "flex-col", "flex", "gap-md"], [1, "flex", "justify-between", "items-center"], [1, "flex"], [1, "text-muted", "text-sm"], [1, "text-sm", "text-muted"], ["data-tutorial", "table-map-search", 1, "form-row", "mt-lg"], [1, "form-group"], [1, "standard-label"], ["type", "text", "placeholder", "Numero o nome tavolo...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "free"], ["value", "reserved"], ["value", "occupied"], [1, "form-group", "mt-sm"], [1, "flex", "gap-md"], [1, "icon-button", 3, "click", "disabled"], [1, "material-icons"], [1, "flex", "items-center", "gap-sm", "px-md", "py-sm", "justify-center"], [1, "material-icons", "text-sm"], [1, "font-semibold"], [1, "icon-button", 3, "click"], [1, "form-card"], [1, "flex", "justify-between", "items-center", "mb-md", "gap-sm", "flex-wrap"], [1, "flex", "items-center", "gap-sm", "flex-wrap"], ["class", "form-input", "style", "width: auto; min-width: 180px;", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "gap-sm"], [1, "flex", "gap-sm", "mr-md", "flex-wrap"], [1, "flex", "items-center", "gap-sm"], [1, "legend-color", "free"], [1, "text-sm"], [1, "legend-color", "reserved"], [1, "legend-color", "occupied"], ["data-tutorial", "table-map-floor", 1, "canvas-container"], [1, "canvas-wrapper"], [1, "floor-plan-canvas"], [1, "grid-overlay"], ["class", "table-element", 3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "form-input", 2, "width", "auto", "min-width", "180px", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "table-element", 3, "click", "ngStyle"], [1, "table-content"], [1, "table-number"], [1, "table-details"], [1, "table-capacity"], ["name", "user", 1, "nav-icon", 3, "size"], ["class", "table-info", 3, "text-large", 4, "ngIf"], [1, "table-info"], [1, "empty-state"], [1, "text-muted"], [1, "modal-overlay"], [1, "modal-container", "modal-sm"], [1, "modal-header"], [1, "header-icon"], [1, "section-title"], [1, "p-lg"], [1, "flex", "flex-col", "gap-lg"], [1, "flex", "justify-center"], [1, "chip"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-footer"], [1, "promethea-button", 3, "click"], [1, "promethea-button", "primary", 3, "click", "disabled", "title"], [1, "promethea-button", "primary", 3, "click"], [1, "promethea-button", "success", 3, "click", "disabled"], ["name", "plus", 3, "size"], [1, "promethea-button", "ghost", 3, "click"], [1, "modal-container", "modal-md"], [1, "generic-form", 3, "ngSubmit"], [1, "form-row"], ["type", "text", "name", "customer_name", "required", "", "placeholder", "Inserisci il nome del cliente", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "customer_phone", "required", "", "placeholder", "Inserisci il telefono", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "reservation_date", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "reservation_time", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "party_size", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "text-muted", "mt-sm"], ["name", "special_requests", "rows", "3", "placeholder", "Note o richieste speciali...", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["type", "submit", 1, "promethea-button", 3, "disabled"], [3, "value", "disabled"], [1, "flex", "justify-between", "items-center", "w-full"], ["type", "button", "class", "promethea-button danger", 3, "click", 4, "ngIf"], [1, "flex", "gap-sm"], ["name", "save"], ["type", "button", 1, "promethea-button", "danger", 3, "click"], ["name", "trash-2", 3, "size"], [3, "saved", "closeRequested", "table", "mode", "existingOrderHeader", "selectedComandaId", "orderingStatus"]], template: function TableMap_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "span", 8);
      \u0275\u0275text(6, "event_available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 9);
      \u0275\u0275text(8, "Tavoli Liberi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 10);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "span", 8);
      \u0275\u0275text(15, "event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275text(17, "Prenotati");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 10);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 5)(21, "div", 6)(22, "div", 7)(23, "span", 8);
      \u0275\u0275text(24, "restaurant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 9);
      \u0275\u0275text(26, "Occupati");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 10);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 5)(30, "div", 6)(31, "div", 7)(32, "span", 8);
      \u0275\u0275text(33, "table_restaurant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 9);
      \u0275\u0275text(35, "Tavoli Totali");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 10);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 11)(39, "div", 12)(40, "div", 13)(41, "div", 14);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 15);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 16);
      \u0275\u0275text(46, " \u23F0 Si pu\xF2 ordinare 1h prima/dopo il turno ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 17)(48, "div", 18)(49, "label", 19);
      \u0275\u0275text(50, "Cerca");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function TableMap_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 18)(53, "label", 19);
      \u0275\u0275text(54, "Stato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function TableMap_Template_select_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(56, "option", 22);
      \u0275\u0275text(57, "Tutti gli stati");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 23);
      \u0275\u0275text(59, "Libero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 24);
      \u0275\u0275text(61, "Prenotato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 25);
      \u0275\u0275text(63, "Occupato");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 26)(65, "label", 19);
      \u0275\u0275text(66, "Azioni");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 27)(68, "button", 28);
      \u0275\u0275listener("click", function TableMap_Template_button_click_68_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(69, "span", 29);
      \u0275\u0275text(70, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 30)(72, "span", 31);
      \u0275\u0275text(73, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 32);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 28);
      \u0275\u0275listener("click", function TableMap_Template_button_click_76_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(77, "span", 29);
      \u0275\u0275text(78, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "button", 33);
      \u0275\u0275listener("click", function TableMap_Template_button_click_79_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetZoom());
      });
      \u0275\u0275elementStart(80, "span", 29);
      \u0275\u0275text(81, "history");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(82, "div", 34, 0)(84, "div", 35)(85, "div", 36)(86, "h2", 32);
      \u0275\u0275text(87, "Mappa:");
      \u0275\u0275elementEnd();
      \u0275\u0275template(88, TableMap_select_88_Template, 2, 2, "select", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 38)(90, "div", 39)(91, "div", 40);
      \u0275\u0275element(92, "div", 41);
      \u0275\u0275elementStart(93, "span", 42);
      \u0275\u0275text(94, "Libero");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 40);
      \u0275\u0275element(96, "div", 43);
      \u0275\u0275elementStart(97, "span", 42);
      \u0275\u0275text(98, "Prenotato");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 40);
      \u0275\u0275element(100, "div", 44);
      \u0275\u0275elementStart(101, "span", 42);
      \u0275\u0275text(102, "Occupato");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "button", 33);
      \u0275\u0275listener("click", function TableMap_Template_button_click_103_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.safeToggleFullscreen());
      });
      \u0275\u0275elementStart(104, "span", 29);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "button", 33);
      \u0275\u0275listener("click", function TableMap_Template_button_click_106_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSize());
      });
      \u0275\u0275elementStart(107, "span", 29);
      \u0275\u0275text(108);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(109, "div", 45)(110, "div", 46)(111, "div", 47, 1);
      \u0275\u0275element(113, "div", 48);
      \u0275\u0275template(114, TableMap_div_114_Template, 10, 10, "div", 49)(115, TableMap_div_115_Template, 7, 0, "div", 50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(116, TableMap_div_116_Template, 21, 7, "div", 51)(117, TableMap_div_117_Template, 51, 12, "div", 51)(118, TableMap_div_118_Template, 54, 12, "div", 51)(119, TableMap_div_119_Template, 2, 5, "div", 51)(120, TableMap_div_120_Template, 2, 5, "div", 51);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.getFreeTablesCount(), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.getReservedTablesCount(), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.getOccupiedTablesCount(), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.getTotalTablesCount(), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.getShiftStatusClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getShiftStatusText(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.orderingStatus.reason, " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.zoomLevel <= ctx.minZoom);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", (ctx.zoomLevel * 100).toFixed(0), "%");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.zoomLevel >= ctx.maxZoom);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.floorPlans.length > 0);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isFullscreen);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isFullscreen ? "fullscreen_exit" : "fullscreen", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isLargeText ? "text_decrease" : "text_increase", " ");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.getScaledWidth(), "px")("height", ctx.getScaledHeight(), "px");
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.currentFloorPlan ? ctx.currentFloorPlan.width : 1e3, "px")("height", ctx.currentFloorPlan ? ctx.currentFloorPlan.height : 800, "px")("transform", "scale(" + ctx.zoomLevel + ")")("transform-origin", "0 0");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.getFilteredTables());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFilteredTables().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showQuickActionsModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showManualReservationModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditReservationModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOrderEditorModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOrderEditorViewModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, OrderEditor, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.fullscreen-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--background);\n  padding: var(--gap-sm);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom: 1px solid var(--smoke-1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  gap: var(--gap-sm);\n}\n.fullscreen-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md) !important;\n  margin: 0;\n  flex: 1;\n  min-width: 120px;\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: var(--fs-md);\n  height: var(--fs-sm);\n  display: flex;\n  border-radius: var(--gap-sm);\n}\n.legend-color.free[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.legend-color.reserved[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.legend-color.occupied[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.legend-color.merged[_ngcontent-%COMP%] {\n  background: #ff6b35;\n}\n[_ngcontent-%COMP%]:fullscreen {\n  background-color: var(--background) !important;\n}\n[_ngcontent-%COMP%]:fullscreen   .floor-plan-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70px;\n}\n.fullscreen-mode[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  background: var(--background);\n}\n.fullscreen-mode[_nghost-%COMP%]   .fullscreen-header[_ngcontent-%COMP%] {\n  position: static;\n  flex-shrink: 0;\n  width: 100%;\n  z-index: auto;\n  border-bottom: 1px solid var(--smoke-1);\n}\n.fullscreen-mode[_nghost-%COMP%]   .canvas-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  height: auto;\n  border: none;\n  border-radius: 0;\n  padding: var(--gap-sm);\n}\n[_ngcontent-%COMP%]:fullscreen   .floor-plan-canvas[_ngcontent-%COMP%] {\n  top: auto;\n}\n/*# sourceMappingURL=table-map.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableMap, [{
    type: Component,
    args: [{ selector: "app-table-map", standalone: true, imports: [CommonModule, FormsModule, OrderEditor, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- Statistiche -->\r
  <div class="grid-cards p-sm mt-lg" data-tutorial="table-map-legend">\r
    <div class="card">\r
      <div class="flex flex-col gap-md">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons text-primary text-md">event_available</span>\r
          <div class="card-title">Tavoli Liberi</div>\r
        </div>\r
        <div class="text-md font-bold text-primary justify-center flex">\r
          {{ getFreeTablesCount() }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex flex-col gap-md">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons text-primary text-md">event</span>\r
          <div class="card-title">Prenotati</div>\r
        </div>\r
        <div class="text-md font-bold text-primary justify-center flex">\r
          {{ getReservedTablesCount() }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex flex-col gap-md">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons text-primary text-md">restaurant</span>\r
          <div class="card-title">Occupati</div>\r
        </div>\r
        <div class="text-md font-bold text-primary justify-center flex">\r
          {{ getOccupiedTablesCount() }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex flex-col gap-md">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons text-primary text-md">table_restaurant</span>\r
          <div class="card-title">Tavoli Totali</div>\r
        </div>\r
        <div class="text-md font-bold text-primary justify-center flex">\r
          {{ getTotalTablesCount() }}\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Controlli -->\r
  <div class="form-card mt-lg">\r
\r
    <!-- TURNI e PRENOTAZIONI DA ASSEGNARE -->\r
    <div class="flex-col flex gap-md" data-tutorial="table-map-shift">\r
      <div class="flex justify-between items-center">\r
          <div class="flex" [class]="getShiftStatusClass()">\r
            {{ getShiftStatusText() }}\r
          </div>\r
          <div class="text-muted text-sm">\r
            {{ orderingStatus.reason }}\r
          </div>\r
      </div>\r
        <div class="text-sm text-muted">\r
          \u23F0 Si pu\xF2 ordinare 1h prima/dopo il turno\r
        </div>\r
    </div>\r
\r
    <div class="form-row mt-lg" data-tutorial="table-map-search">\r
      <div class="form-group">\r
        <label class="standard-label">Cerca</label>\r
        <input type="text" [(ngModel)]="searchTerm" placeholder="Numero o nome tavolo..." class="form-input">\r
      </div>\r
      <div class="form-group">\r
        <label class="standard-label">Stato</label>\r
        <select [(ngModel)]="statusFilter" class="form-input">\r
          <option value="all">Tutti gli stati</option>\r
          <option value="free">Libero</option>\r
          <option value="reserved">Prenotato</option>\r
          <option value="occupied">Occupato</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <div class="form-group mt-sm">\r
      <label class="standard-label">Azioni</label>\r
        <div class="flex gap-md">\r
          <!-- Zoom Out -->\r
          <button class="icon-button" (click)="zoomOut()" [disabled]="zoomLevel <= minZoom">\r
            <span class="material-icons">zoom_out</span>\r
          </button>\r
          <!-- Indicatore zoom -->\r
          <div class="flex items-center gap-sm px-md py-sm justify-center">\r
            <span class="material-icons text-sm">search</span>\r
            <span class="font-semibold">{{ (zoomLevel * 100).toFixed(0) }}%</span>\r
          </div>\r
          <!-- Zoom In -->\r
          <button class="icon-button" (click)="zoomIn()" [disabled]="zoomLevel >= maxZoom">\r
            <span class="material-icons">zoom_in</span>\r
          </button>\r
          <!-- Reset Zoom -->\r
          <button class="icon-button" (click)="resetZoom()">\r
            <span class="material-icons">history</span>\r
          </button>\r
        </div>\r
    </div>\r
    \r
  </div>\r
  \r
  <!-- Mappa -->\r
  <div class="form-card " #tableMapContainer>\r
  \r
  <!-- Intestazione con titolo e selettore mappa -->\r
  <div class="flex justify-between items-center mb-md gap-sm flex-wrap">\r
    <!-- Gruppo sinistra: titolo + selettore -->\r
    <div class="flex items-center gap-sm flex-wrap">\r
      <h2 class="font-semibold">Mappa:</h2>\r
      <select\r
        *ngIf="floorPlans.length > 0"\r
        [(ngModel)]="currentFloorPlan"\r
        (ngModelChange)="onFloorPlanSelect($event)"\r
        class="form-input"\r
        style="width: auto; min-width: 180px;"\r
      >\r
        <option *ngFor="let plan of floorPlans" [ngValue]="plan">\r
          {{ plan.name }}\r
        </option>\r
      </select>\r
    </div>\r
\r
    <!-- Gruppo destra: legenda + pulsanti -->\r
    <div class="flex flex-wrap items-center gap-sm">\r
      <!-- Legenda -->\r
      <div class="flex gap-sm mr-md flex-wrap">\r
        <div class="flex items-center gap-sm">\r
          <div class="legend-color free"></div>\r
          <span class="text-sm">Libero</span>\r
        </div>\r
        <div class="flex items-center gap-sm">\r
          <div class="legend-color reserved"></div>\r
          <span class="text-sm">Prenotato</span>\r
        </div>\r
        <div class="flex items-center gap-sm">\r
          <div class="legend-color occupied"></div>\r
          <span class="text-sm">Occupato</span>\r
        </div>\r
      </div>\r
      <!-- Pulsanti -->\r
      <button class="icon-button" (click)="safeToggleFullscreen()" [class.active]="isFullscreen">\r
        <span class="material-icons">\r
          {{ isFullscreen ? 'fullscreen_exit' : 'fullscreen' }}\r
        </span>\r
      </button>\r
      <button class="icon-button" (click)="toggleSize()">\r
        <span class="material-icons">\r
          {{ isLargeText ? 'text_decrease' : 'text_increase' }}\r
        </span>\r
      </button>\r
    </div>\r
  </div>\r
\r
    <div class="canvas-container" data-tutorial="table-map-floor">\r
      <!-- WRAPPER con dimensioni scalate -->\r
      <div class="canvas-wrapper" [style.width.px]="getScaledWidth()" [style.height.px]="getScaledHeight()">\r
        <!-- CANVAS con dimensioni originali e zoom applicato -->\r
        <div #floorPlanCanvas class="floor-plan-canvas"\r
              [style.width.px]="currentFloorPlan ? currentFloorPlan.width : 1000"\r
              [style.height.px]="currentFloorPlan ? currentFloorPlan.height : 800"\r
              [style.transform]="'scale(' + zoomLevel + ')'" [style.transform-origin]="'0 0'">\r
\r
          <div class="grid-overlay"></div>\r
\r
          <div *ngFor="let tableStatus of getFilteredTables()" [class]="getTableClass(tableStatus)"\r
            [ngStyle]="getTableStyle(tableStatus.table)" (click)="onTableClick(tableStatus)" class="table-element">\r
            <div class="table-content" [class.text-large]="isLargeText">\r
              <div class="table-number">{{ tableStatus.table.table_number }}</div>\r
              <div class="table-details">\r
                <div class="table-capacity">{{ tableStatus.table.capacity }}\r
                  <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
                </div>\r
              </div>\r
              <div class="table-info" *ngIf="tableStatus.currentReservation"  [class.text-large]="isLargeText">\r
                <small>Pren: {{ tableStatus.currentReservation.customer_name }}</small>\r
              </div>\r
              <div class="table-info" *ngIf="tableStatus.currentOrders" [class.text-large]="isLargeText">\r
                <small>Ord: {{ getTableOrderCount(tableStatus.table.id) }} piatti</small>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="empty-state" *ngIf="getFilteredTables().length === 0">\r
            <span class="material-icons">search_off</span>\r
            <h3>Nessun tavolo trovato</h3>\r
            <p class="text-muted">Modifica i filtri di ricerca</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  <!-- Modal Azioni Rapide - VERSIONE SEMPLIFICATA -->\r
  <div class="modal-overlay" *ngIf="showQuickActionsModal">\r
    <div class="modal-container modal-sm">\r
      <div class="modal-header">\r
        <div class="flex items-center gap-sm">\r
          <div class="header-icon">\r
            <span class="material-icons">table_restaurant</span>\r
          </div>\r
          <div>\r
            <h1 class="section-title">Tavolo {{ selectedTable?.table_number }}</h1>\r
          </div>\r
        </div>\r
        <button class="icon-button" (click)="deselectTable()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="p-lg">\r
        <div class="flex flex-col gap-lg">\r
          <div class="flex justify-center">\r
            <span class="chip" [class]="getStatusColorClass(selectedTableStatus?.status || 'free')">\r
              {{ getStatusText(selectedTableStatus?.status || 'free') }}\r
            </span>\r
          </div>\r
\r
        </div>\r
      </div>\r
          <!-- Azioni per tavolo libero -->\r
          <div *ngIf="selectedTableStatus?.status === 'free'" class="modal-footer">\r
            <button class="promethea-button" (click)="openManualReservationModal(); showQuickActionsModal = false">\r
              <span class="material-icons">event</span>\r
              Crea Prenotazione\r
            </button>\r
            <button class="promethea-button primary" \r
                    (click)="openOrderEditor()"\r
                    [disabled]="!orderingStatus.allowed"\r
                    [title]="!orderingStatus.allowed ? 'Disabilitato: fuori orario dei turni' : 'Crea nuovo ordine'">\r
              <span class="material-icons">{{ orderingStatus.allowed ? 'restaurant' : 'schedule' }}</span>\r
              {{ orderingStatus.allowed ? 'Crea Ordine' : 'Fuori Turno' }}\r
            </button>\r
          </div>\r
\r
          <!-- Azioni per tavolo prenotato -->\r
          <div *ngIf="selectedTableStatus?.status === 'reserved'" class="modal-footer">\r
            <button class="promethea-button primary" \r
                    (click)="openEditReservationModal(); showQuickActionsModal = false">\r
              <span class="material-icons">edit</span>\r
              Modifica Prenotazione\r
            </button>\r
            <button class="promethea-button success" \r
                    (click)="openOrderEditor()"\r
                    [disabled]="!orderingStatus.allowed">\r
              <span class="material-icons">check</span>\r
              Conferma Arrivo (Crea Ordine)\r
            </button>\r
          </div>\r
\r
          <!-- Azioni per tavolo occupato -->\r
          <div *ngIf="selectedTableStatus?.status === 'occupied'" class="modal-footer">\r
            <!-- Visualizza Ordini -->\r
            <button class="promethea-button" \r
                    (click)="openOrderEditor()">\r
              <span class="material-icons">receipt</span>\r
              Visualizza Ordini\r
            </button>\r
            \r
            <button class="promethea-button primary" \r
                    (click)="addNewComandaToTable()"\r
                    [disabled]="!orderingStatus.allowed"\r
                    [title]="!orderingStatus.allowed ? orderingStatus.reason : 'Aggiungi una nuova comanda alla tavolata corrente'">\r
              <lucide-angular name="plus" [size]="20"></lucide-angular>\r
              Nuova Comanda\r
            </button>\r
\r
            <button class="promethea-button ghost" \r
                    (click)="freeTable()">\r
              <span class="material-icons">check_circle</span>\r
              Libera Tavolo\r
            </button>\r
          </div>\r
\r
\r
    </div>\r
  </div>\r
\r
  <!-- Modal Crea Prenotazione Manuale -->\r
  <div class="modal-overlay" *ngIf="showManualReservationModal">\r
    <div class="modal-container modal-md">\r
      <div class="modal-header">\r
        <div class="flex items-center gap-sm">\r
          <div class="header-icon">\r
            <span class="material-icons">event</span>\r
          </div>\r
          <div>\r
            <h2 class="font-semibold">Nuova Prenotazione - Tavolo {{ selectedTable?.table_number }}</h2>\r
          </div>\r
        </div>\r
        <button class="icon-button" (click)="closeManualReservationModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="p-lg">\r
        <form class="generic-form" (ngSubmit)="createManualReservation(); $event.preventDefault()"\r
          #reservationForm="ngForm">\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Nome Cliente *</label>\r
              <input type="text" [(ngModel)]="manualReservationData.customer_name" name="customer_name"\r
                class="form-input" required placeholder="Inserisci il nome del cliente">\r
            </div>\r
            <div class="form-group">\r
              <label class="standard-label">Telefono *</label>\r
              <input type="tel" [(ngModel)]="manualReservationData.customer_phone" name="customer_phone"\r
                class="form-input" required placeholder="Inserisci il telefono">\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Data *</label>\r
              <input type="date" [(ngModel)]="manualReservationData.reservation_date" name="reservation_date"\r
                class="form-input" required>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">Orario *</label>\r
              <input type="time" [(ngModel)]="manualReservationData.reservation_time" name="reservation_time"\r
                class="form-input" required>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Numero Persone *</label>\r
            <select [(ngModel)]="manualReservationData.party_size" name="party_size" class="form-input" required>\r
              <option *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]" [value]="num"\r
                [disabled]="selectedTable && num > selectedTable.capacity">\r
                {{ num }} {{ num === 1 ? 'persona' : 'persone' }}\r
                {{ selectedTable && num > selectedTable.capacity ? ' (Troppe persone)' : '' }}\r
              </option>\r
            </select>\r
            <div class="text-muted mt-sm">\r
              Capacit\xE0 massima tavolo: {{ selectedTable?.capacity || 0 }} persone\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Note Speciali</label>\r
            <textarea [(ngModel)]="manualReservationData.special_requests" name="special_requests"\r
              class="form-input" rows="3" placeholder="Note o richieste speciali..."></textarea>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button type="button" class="promethea-button ghost" (click)="closeManualReservationModal()">\r
              Annulla\r
            </button>\r
            <button type="submit" class="promethea-button" [disabled]="!reservationForm.valid">\r
              <lucide-angular name="plus" [size]="20"></lucide-angular>\r
              Crea Prenotazione\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Modal Modifica Prenotazione -->\r
  <div class="modal-overlay" *ngIf="showEditReservationModal">\r
    <div class="modal-container modal-md">\r
      <div class="modal-header">\r
        <div class="flex items-center gap-sm">\r
          <div class="header-icon">\r
            <span class="material-icons">edit</span>\r
          </div>\r
          <div>\r
            <h1 class="section-title">Modifica Prenotazione - Tavolo {{ selectedTable?.table_number }}</h1>\r
          </div>\r
        </div>\r
        <button class="icon-button" (click)="closeEditReservationModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class="p-lg">\r
        <form class="generic-form" (ngSubmit)="updateReservation(); $event.preventDefault()"\r
          #reservationForm="ngForm">\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Nome Cliente *</label>\r
              <input type="text" [(ngModel)]="editingReservation.customer_name" name="customer_name"\r
                class="form-input" required placeholder="Inserisci il nome del cliente">\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">Telefono *</label>\r
              <input type="tel" [(ngModel)]="editingReservation.customer_phone" name="customer_phone"\r
                class="form-input" required placeholder="Inserisci il telefono">\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">Data *</label>\r
              <input type="date" [(ngModel)]="editingReservation.reservation_date" name="reservation_date"\r
                class="form-input" required>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">Orario *</label>\r
              <input type="time" [(ngModel)]="editingReservation.reservation_time" name="reservation_time"\r
                class="form-input" required>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Numero Persone *</label>\r
            <select [(ngModel)]="editingReservation.party_size" name="party_size" class="form-input" required>\r
              <option *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]" [value]="num"\r
                [disabled]="selectedTable && num > selectedTable.capacity">\r
                {{ num }} {{ num === 1 ? 'persona' : 'persone' }}\r
                {{ selectedTable && num > selectedTable.capacity ? ' (Troppe persone)' : '' }}\r
              </option>\r
            </select>\r
            <div class="text-muted mt-sm">\r
              Capacit\xE0 massima tavolo: {{ selectedTable?.capacity || 0 }} persone\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">Note Speciali</label>\r
            <textarea [(ngModel)]="editingReservation.special_requests" name="special_requests" class="form-input"\r
              rows="3" placeholder="Note o richieste speciali..."></textarea>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <div class="flex justify-between items-center w-full">\r
              <button *ngIf="isReservationDeletable(editingReservation)" type="button"\r
                class="promethea-button danger" (click)="deleteReservation()">\r
                <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                Elimina\r
              </button>\r
\r
              <div class="flex gap-sm">\r
                <button type="button" class="promethea-button ghost" (click)="closeEditReservationModal()">\r
                  Annulla\r
                </button>\r
                <button type="submit" class="promethea-button" [disabled]="!reservationForm.valid">\r
                 <lucide-angular name="save"></lucide-angular>\r
                  Salva\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Modal Order Editor (Edit) -->\r
  <div class="modal-overlay" *ngIf="showOrderEditorModal">\r
    <app-order-editor \r
      [table]="orderEditorData.table"\r
      [mode]="orderEditorData.mode"\r
      [existingOrderHeader]="orderEditorData.existingOrderHeader"\r
      [selectedComandaId]="orderEditorData.selectedComandaId" \r
      [orderingStatus]="orderingStatus"\r
      (saved)="onOrderSaved($event)"\r
      (closeRequested)="closeOrderEditorModal()">\r
    </app-order-editor>\r
  </div>\r
\r
  <!-- Modal Order Editor (View) -->\r
  <div class="modal-overlay" *ngIf="showOrderEditorViewModal">\r
    <app-order-editor \r
      [table]="orderEditorData.table"\r
      [mode]="orderEditorData.mode"\r
      [existingOrderHeader]="orderEditorData.existingOrderHeader"\r
      [selectedComandaId]="orderEditorData.selectedComandaId"\r
      [orderingStatus]="orderingStatus"\r
      (saved)="onOrderSaved($event)"\r
      (closeRequested)="closeOrderEditorViewModal()">\r
    </app-order-editor>\r
  </div>\r
\r
</div>\r
\r
\r
`, styles: ["/* src/app/restaurant/layout/table-map/table-map.css */\n.fullscreen-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--background);\n  padding: var(--gap-sm);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom: 1px solid var(--smoke-1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  gap: var(--gap-sm);\n}\n.fullscreen-header h2 {\n  font-size: var(--fs-md) !important;\n  margin: 0;\n  flex: 1;\n  min-width: 120px;\n}\n.legend-color {\n  width: var(--fs-md);\n  height: var(--fs-sm);\n  display: flex;\n  border-radius: var(--gap-sm);\n}\n.legend-color.free {\n  background: #10b981;\n}\n.legend-color.reserved {\n  background: #f59e0b;\n}\n.legend-color.occupied {\n  background: #ef4444;\n}\n.legend-color.merged {\n  background: #ff6b35;\n}\n:fullscreen {\n  background-color: var(--background) !important;\n}\n:fullscreen .floor-plan-canvas {\n  position: absolute;\n  top: 70px;\n}\n:host.fullscreen-mode {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  background: var(--background);\n}\n:host.fullscreen-mode .fullscreen-header {\n  position: static;\n  flex-shrink: 0;\n  width: 100%;\n  z-index: auto;\n  border-bottom: 1px solid var(--smoke-1);\n}\n:host.fullscreen-mode .canvas-container {\n  flex: 1;\n  overflow: auto;\n  height: auto;\n  border: none;\n  border-radius: 0;\n  padding: var(--gap-sm);\n}\n:fullscreen .floor-plan-canvas {\n  top: auto;\n}\n/*# sourceMappingURL=table-map.css.map */\n"] }]
  }], () => [], { mapCardElement: [{
    type: ViewChild,
    args: ["mapCard", { static: false }]
  }], tableMapContainer: [{
    type: ViewChild,
    args: ["tableMapContainer", { static: false }]
  }], isFullscreenMode: [{
    type: HostBinding,
    args: ["class.fullscreen-mode"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableMap, { className: "TableMap", filePath: "src/app/restaurant/layout/table-map/table-map.ts", lineNumber: 48 });
})();
export {
  TableMap
};
//# sourceMappingURL=chunk-ODI6IVL5.js.map
