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
  NgModel
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService
} from "./chunk-6SNKM7Z6.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
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
  combineLatest,
  inject,
  map,
  setClassMetadata,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/customer/restaurant/menu-display/menu-display.ts
function MenuDisplay_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function MenuDisplay_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.authService.toggleSidebar());
    });
    \u0275\u0275element(1, "lucide-icon", 12);
    \u0275\u0275elementEnd();
  }
}
function MenuDisplay_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 13);
    \u0275\u0275listener("error", function MenuDisplay_img_5_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.restaurant == null ? null : ctx_r1.restaurant.logo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r1.restaurant == null ? null : ctx_r1.restaurant.name);
  }
}
function MenuDisplay_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function MenuDisplay_div_12_div_1_div_1_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function MenuDisplay_div_12_div_1_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function MenuDisplay_div_12_div_1_div_1_button_4_Template_button_click_0_listener() {
      const menu_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectMenu(menu_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, MenuDisplay_div_12_div_1_div_1_button_4_span_2_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", (ctx_r1.selectedMenu == null ? null : ctx_r1.selectedMenu.id) === menu_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r6.is_default);
  }
}
function MenuDisplay_div_12_div_1_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMenu == null ? null : ctx_r1.selectedMenu.description, " ");
  }
}
function MenuDisplay_div_12_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3, "Menu:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MenuDisplay_div_12_div_1_div_1_button_4_Template, 3, 4, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MenuDisplay_div_12_div_1_div_1_p_5_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.menus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMenu == null ? null : ctx_r1.selectedMenu.description);
  }
}
function MenuDisplay_div_12_div_1_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function MenuDisplay_div_12_div_1_button_11_Template_button_click_0_listener() {
      const category_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCategory(category_r8.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.selectedCategory === category_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r8.name, " ");
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 56);
    \u0275\u0275listener("error", function MenuDisplay_div_12_div_1_div_13_div_7_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const dish_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDishImageError($event, dish_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dish_r11.image_url, \u0275\u0275sanitizeUrl)("alt", dish_r11.name);
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "lucide-angular", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 24);
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dish_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(dish_r11.base_price), " ");
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dish_r11.description, " ");
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62)(1, "span", 14);
    \u0275\u0275text(2, "delivery_dining");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(dish_r11.delivery_price), " ");
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62)(1, "span", 14);
    \u0275\u0275text(2, "takeout_dining");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(dish_r11.takeaway_price), " ");
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, MenuDisplay_div_12_div_1_div_13_div_7_div_11_span_1_Template, 4, 1, "span", 61)(2, MenuDisplay_div_12_div_1_div_13_div_7_div_11_span_2_Template, 4, 1, "span", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r11.delivery_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r11.takeaway_price);
  }
}
function MenuDisplay_div_12_div_1_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275template(2, MenuDisplay_div_12_div_1_div_13_div_7_img_2_Template, 1, 2, "img", 46)(3, MenuDisplay_div_12_div_1_div_13_div_7_div_3_Template, 2, 1, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "div", 49)(6, "h3", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 51);
    \u0275\u0275template(9, MenuDisplay_div_12_div_1_div_13_div_7_ng_container_9_Template, 2, 1, "ng-container", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, MenuDisplay_div_12_div_1_div_13_div_7_p_10_Template, 2, 1, "p", 53)(11, MenuDisplay_div_12_div_1_div_13_div_7_div_11_Template, 3, 2, "div", 54);
    \u0275\u0275elementStart(12, "button", 55);
    \u0275\u0275listener("click", function MenuDisplay_div_12_div_1_div_13_div_7_Template_button_click_12_listener() {
      const dish_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addToCart(dish_r11));
    });
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14, "add_shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Aggiungi ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dish_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dish_r11.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dish_r11.image_url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dish_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r1.selectedMenu == null ? null : ctx_r1.selectedMenu.fixed_price));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r11.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.selectedMenu == null ? null : ctx_r1.selectedMenu.fixed_price));
  }
}
function MenuDisplay_div_12_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "h2", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42);
    \u0275\u0275template(7, MenuDisplay_div_12_div_1_div_13_div_7_Template, 16, 6, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", category_r12.dishes.length, " piatti");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", category_r12.dishes);
  }
}
function MenuDisplay_div_12_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun piatto trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Prova a modificare la ricerca o i filtri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function MenuDisplay_div_12_div_1_div_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.selectedCategory = null);
    });
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Mostra tutto il menu ");
    \u0275\u0275elementEnd()();
  }
}
function MenuDisplay_div_12_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "lucide-icon", 68);
    \u0275\u0275elementStart(3, "div")(4, "p", 69);
    \u0275\u0275text(5, "Menu a prezzo fisso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 70);
    \u0275\u0275text(7, "Tutti i piatti inclusi al prezzo unico");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 24);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(ctx_r1.selectedMenu.fixed_price), " ");
  }
}
function MenuDisplay_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, MenuDisplay_div_12_div_1_div_1_Template, 6, 2, "div", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "span", 14);
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function MenuDisplay_div_12_div_1_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MenuDisplay_div_12_div_1_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "button", 24);
    \u0275\u0275listener("click", function MenuDisplay_div_12_div_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCategory(null));
    });
    \u0275\u0275text(10, " Tutto ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MenuDisplay_div_12_div_1_button_11_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 26);
    \u0275\u0275template(13, MenuDisplay_div_12_div_1_div_13_Template, 8, 3, "div", 27)(14, MenuDisplay_div_12_div_1_div_14_Template, 11, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MenuDisplay_div_12_div_1_div_15_Template, 10, 2, "div", 29);
    \u0275\u0275elementStart(16, "div", 30)(17, "button", 31)(18, "span", 14);
    \u0275\u0275text(19, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Torna al ristorante ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.menus.length > 1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r1.selectedCategory);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCategories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCategories.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMenu == null ? null : ctx_r1.selectedMenu.fixed_price);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/customer/restaurant/", ctx_r1.restaurant.id, "");
  }
}
function MenuDisplay_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, MenuDisplay_div_12_div_1_Template, 21, 10, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.restaurant);
  }
}
function MenuDisplay_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Caricamento menu...");
    \u0275\u0275elementEnd()()();
  }
}
var MenuDisplay = class _MenuDisplay {
  restaurantPublicService = inject(RestaurantPublicService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  breakpointObserver = inject(BreakpointObserver);
  authService = inject(AuthService);
  restaurant = null;
  menus = [];
  selectedMenu = null;
  categories = [];
  loading = true;
  searchQuery = "";
  selectedCategory = null;
  isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.TabletPortrait]).pipe(map((result) => result.matches));
  showToggle$ = combineLatest([
    this.isMobile$,
    this.authService.sidebarCollapsed$
  ]).pipe(map(([isMobile, collapsed]) => isMobile && collapsed));
  ngOnInit() {
    return __async(this, null, function* () {
      const restaurantId = this.route.snapshot.paramMap.get("id");
      if (restaurantId) {
        yield this.loadMenuData(restaurantId);
      } else {
        this.router.navigate(["/customer/search"]);
      }
    });
  }
  loadMenuData(restaurantId) {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        const [restaurant, menus, categories] = yield Promise.all([
          this.restaurantPublicService.loadRestaurantById(restaurantId),
          this.restaurantPublicService.loadRestaurantMenus(restaurantId),
          this.restaurantPublicService.loadRestaurantCategories(restaurantId)
        ]);
        this.restaurant = restaurant;
        this.menus = menus;
        if (!menus.length) {
          this.categories = [];
          return;
        }
        this.selectedMenu = menus.find((m) => m.is_default) ?? menus[0];
        yield this.loadDishesForMenu(this.selectedMenu.id, categories);
      } catch (error) {
        console.error("Error loading menu data:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  loadDishesForMenu(menuId, categories) {
    return __async(this, null, function* () {
      const cats = categories ?? (yield this.restaurantPublicService.loadRestaurantCategories(this.restaurant.id));
      const dishes = yield this.restaurantPublicService.loadMenuDishes(menuId);
      this.groupDishesByCategory(dishes, cats);
      this.searchQuery = "";
      this.selectedCategory = null;
    });
  }
  selectMenu(menu) {
    return __async(this, null, function* () {
      if (this.selectedMenu?.id === menu.id)
        return;
      this.selectedMenu = menu;
      this.loading = true;
      yield this.loadDishesForMenu(menu.id);
      this.loading = false;
    });
  }
  // Invariato — riusa la logica esistente
  groupDishesByCategory(dishes, categories) {
    const categoryMap = /* @__PURE__ */ new Map();
    categories.forEach((cat) => {
      categoryMap.set(cat.id, {
        id: cat.id,
        name: cat.name,
        description: cat.description || "",
        dishes: []
      });
    });
    categoryMap.set("uncategorized", {
      id: "uncategorized",
      name: "Specialit\xE0",
      description: "Le nostre specialit\xE0",
      dishes: []
    });
    dishes.forEach((dish) => {
      if (dish.category_id && categoryMap.has(dish.category_id)) {
        categoryMap.get(dish.category_id).dishes.push(dish);
      } else if (dish.category_name && !categoryMap.has(dish.category_id || "unknown")) {
        categoryMap.set(dish.category_id || "unknown", {
          id: dish.category_id || "unknown",
          name: dish.category_name,
          description: "",
          dishes: [dish]
        });
      } else {
        categoryMap.get("uncategorized").dishes.push(dish);
      }
    });
    this.categories = Array.from(categoryMap.values()).filter((cat) => cat.dishes.length > 0).sort((a, b) => {
      if (a.id === "uncategorized")
        return 1;
      if (b.id === "uncategorized")
        return -1;
      return a.name.localeCompare(b.name);
    });
  }
  get filteredCategories() {
    if (!this.searchQuery && !this.selectedCategory)
      return this.categories;
    return this.categories.reduce((results, category) => {
      if (this.selectedCategory && category.id !== this.selectedCategory)
        return results;
      const filteredDishes = this.searchQuery ? category.dishes.filter((dish) => {
        const query = this.searchQuery.toLowerCase();
        return dish.name.toLowerCase().includes(query) || dish.description?.toLowerCase().includes(query) || dish.category_name?.toLowerCase().includes(query);
      }) : [...category.dishes];
      if (filteredDishes.length > 0)
        results.push(__spreadProps(__spreadValues({}, category), { dishes: filteredDishes }));
      return results;
    }, []);
  }
  selectCategory(categoryId) {
    this.selectedCategory = categoryId === this.selectedCategory ? null : categoryId;
  }
  onSearchChange() {
  }
  addToCart(dish) {
    console.log("Aggiunto al carrello:", dish);
  }
  formatPrice(price) {
    return `\u20AC${price.toFixed(2).replace(".", ",")}`;
  }
  onDishImageError(event, dish) {
    event.target.style.display = "none";
  }
  onLogoError(event) {
    event.target.style.display = "none";
  }
  static \u0275fac = function MenuDisplay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuDisplay)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuDisplay, selectors: [["app-menu-display"]], decls: 15, vars: 10, consts: [["loadingTemplate", ""], [1, "section-header"], [1, "flex", "items-center", "items-center", "gap-lg", 2, "overflow", "hidden"], ["class", "icon-button mobile-toggle", 3, "click", 4, "ngIf"], [1, "header-icon"], ["class", "logo-image rounded-full", 3, "src", "alt", "error", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "section-titles"], [1, "section-title"], [1, "text-muted"], ["class", "page-container", 4, "ngIf", "ngIfElse"], [1, "icon-button", "mobile-toggle", 3, "click"], ["name", "menu"], [1, "logo-image", "rounded-full", 3, "error", "src", "alt"], [1, "material-icons"], [1, "page-container"], ["class", "flex flex-col gap-lg mt-lg m-sm02", 4, "ngIf"], [1, "flex", "flex-col", "gap-lg", "mt-lg", "m-sm02"], ["class", "card m-sm01 ", 4, "ngIf"], [1, "card", "m-sm01"], [1, "flex", "flex-col", "md:flex-row", "gap-md", "items-center", "justify-between"], [1, "search-bar", "flex-1"], ["type", "text", "placeholder", "Cerca nel menu...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-chips", "flex", "flex-wrap", "gap-sm"], [1, "chip", 3, "click"], ["class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-md", "m-sm01"], ["class", "category-section", 4, "ngFor", "ngForOf"], ["class", "text-center p-xl", 4, "ngIf"], ["class", "fixed-price-banner card flex items-center justify-between gap-md", 4, "ngIf"], [1, "text-center", "mt-xl"], [1, "promethea-button", "ghost", 3, "routerLink"], [1, "flex", "flex-wrap", "gap-sm", "items-center"], [1, "text-muted", 2, "font-size", "var(--fs-sm)"], ["class", "text-muted mt-sm", "style", "font-size: var(--fs-sm)", 4, "ngIf"], ["class", "material-icons", "style", "font-size: 14px", 4, "ngIf"], [1, "material-icons", 2, "font-size", "14px"], [1, "text-muted", "mt-sm", 2, "font-size", "var(--fs-sm)"], [1, "category-section"], [1, "flex", "items-center", "gap-sm", "mb-lg"], [1, "text-md", "font-bold"], [1, "chip"], [1, "dishes-grid"], ["class", "dish-card", 4, "ngFor", "ngForOf"], [1, "dish-card"], [1, "dish-image-container"], ["class", "dish-image", 3, "src", "alt", "error", 4, "ngIf"], ["class", "dish-image-placeholder", 4, "ngIf"], [1, "dish-info"], [1, "dish-header"], [1, "dish-name"], [1, "dish-price"], [4, "ngIf"], ["class", "dish-description", 4, "ngIf"], ["class", "dish-details", 4, "ngIf"], [1, "add-to-cart-button", 3, "click"], [1, "dish-image", 3, "error", "src", "alt"], [1, "dish-image-placeholder"], ["name", "utensils", 3, "size"], [1, "dish-description"], [1, "dish-details"], ["class", "detail-chip", 4, "ngIf"], [1, "detail-chip"], [1, "text-center", "p-xl"], [1, "material-icons", "fs-lg"], [1, "promethea-button", "ghost", "mt-md", 3, "click"], [1, "fixed-price-banner", "card", "flex", "items-center", "justify-between", "gap-md"], [1, "flex", "items-center", "gap-md"], ["name", "tag", 2, "color", "var(--primary)", 3, "size"], [1, "font-semibold", "text-md"], [1, "text-muted", "text-mini"], [1, "chip", "bg-gradient", "font-bold", 2, "font-size", "var(--fs-md)", "padding", "var(--gap-sm) var(--gap-md)"], [1, "flex", "flex-col", "items-center", "justify-center", "p-xl", "gap-md"], [1, "material-icons", "animate-spin"]], template: function MenuDisplay_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, MenuDisplay_button_2_Template, 2, 0, "button", 3);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275template(5, MenuDisplay_img_5_Template, 1, 2, "img", 5)(6, MenuDisplay_span_6_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "h1", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, "Menu completo");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, MenuDisplay_div_12_Template, 2, 1, "div", 10)(13, MenuDisplay_ng_template_13_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loadingTemplate_r14 = \u0275\u0275reference(14);
      \u0275\u0275styleProp("background", (ctx.restaurant == null ? null : ctx.restaurant.cover_image_url) ? "url(" + (ctx.restaurant == null ? null : ctx.restaurant.cover_image_url) + ")" : "var(--vetro)");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 8, ctx.showToggle$));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.restaurant == null ? null : ctx.restaurant.logo_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.restaurant == null ? null : ctx.restaurant.logo_url));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.restaurant == null ? null : ctx.restaurant.name);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loadingTemplate_r14);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  background: var(--background);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  padding: var(--gap-sm) var(--gap-md);\n  width: 100%;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 100%;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.category-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--gap-xl);\n}\n.dishes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n}\n.dish-card[_ngcontent-%COMP%] {\n  background: var(--background);\n  border: 1px solid var(--smoke-1);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(.2, .9, .2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.dish-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--secondary);\n  box-shadow: 0 8px 24px var(--shadow-1);\n}\n.dish-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  background: var(--smoke-1);\n}\n.dish-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.dish-card[_ngcontent-%COMP%]:hover   .dish-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.dish-image-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: var(--text-muted);\n}\n.dish-image-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.dish-info[_ngcontent-%COMP%] {\n  padding: var(--gap-md);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.dish-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--gap-sm);\n}\n.dish-name[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 700;\n  margin: 0;\n  flex: 1;\n}\n.dish-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary);\n  white-space: nowrap;\n}\n.dish-description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin: 0;\n  font-size: 0.95rem;\n}\n.dish-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap-sm);\n  margin-top: var(--gap-sm);\n}\n.detail-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background: var(--smoke-1);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.add-to-cart-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm) var(--gap-md);\n  background: var(--gradiente);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: auto;\n}\n.add-to-cart-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px var(--shadow-1);\n}\n.filter-chips[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow-x: auto;\n  padding-bottom: 4px;\n}\n.filter-chips[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.logo-image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border: 3px solid var(--background);\n}\n@media (max-width: 768px) {\n  .dishes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dish-image-container[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .logo-image[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n}\n.fixed-price-banner[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: var(--gap-md);\n  z-index: 10;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 8px 32px var(--shadow-1);\n}\n/*# sourceMappingURL=menu-display.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuDisplay, [{
    type: Component,
    args: [{ selector: "app-menu-display", imports: [CommonModule, FormsModule, RouterLink, LucideAngularModule], template: `<!-- menu-display.html -->\r
<div class="section-header" \r
     [style.background]="restaurant?.cover_image_url ? 'url(' + restaurant?.cover_image_url + ')' : 'var(--vetro)'">\r
  <div class="flex items-center items-center gap-lg"\r
  style="overflow: hidden;">\r
  <!-- Pulsante toggle mobile -->\r
  <button \r
    *ngIf="showToggle$ | async"\r
    class="icon-button mobile-toggle"\r
    (click)="authService.toggleSidebar()">\r
    <lucide-icon name="menu"></lucide-icon>\r
  </button>\r
    <div class="header-icon">\r
      <img *ngIf="restaurant?.logo_url" \r
           [src]="restaurant?.logo_url" \r
           [alt]="restaurant?.name"\r
           class="logo-image rounded-full"\r
           (error)="onLogoError($event)">\r
      <span *ngIf="!restaurant?.logo_url" class="material-icons">restaurant</span>\r
    </div>\r
    <div class="section-titles">\r
      <h1 class="section-title">{{ restaurant?.name }}</h1>\r
      <p class="text-muted">Menu completo</p>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<div class="page-container" *ngIf="!loading; else loadingTemplate">\r
\r
  <!-- Menu del ristorante -->\r
  <div *ngIf="restaurant" class="flex flex-col gap-lg mt-lg m-sm02">\r
    \r
  <!-- Selector menu \u2014 visibile solo se ci sono pi\xF9 menu attivi -->\r
  <div class="card m-sm01 " *ngIf="menus.length > 1">\r
    <div class="flex flex-wrap gap-sm items-center">\r
      <span class="text-muted" style="font-size: var(--fs-sm)">Menu:</span>\r
      <button \r
        *ngFor="let menu of menus"\r
        class="chip"\r
        [class.active]="selectedMenu?.id === menu.id"\r
        (click)="selectMenu(menu)">\r
        {{ menu.name }}\r
        <span *ngIf="menu.is_default" class="material-icons" style="font-size: 14px">star</span>\r
      </button>\r
    </div>\r
    <p *ngIf="selectedMenu?.description" class="text-muted mt-sm" style="font-size: var(--fs-sm)">\r
      {{ selectedMenu?.description }}\r
    </p>\r
  </div>\r
\r
    <!-- Barra di ricerca e filtri -->\r
    <div class="card m-sm01">\r
      <div class="flex flex-col md:flex-row gap-md items-center justify-between">\r
        <!-- Barra di ricerca -->\r
        <div class="search-bar flex-1">\r
          <span class="material-icons">search</span>\r
          <input type="text" \r
                 [(ngModel)]="searchQuery" \r
                 (input)="onSearchChange()"\r
                 placeholder="Cerca nel menu...">\r
        </div>\r
\r
        <!-- Filtri categoria -->\r
        <div class="filter-chips flex flex-wrap gap-sm">\r
          <button class="chip" \r
                  [class.active]="!selectedCategory"\r
                  (click)="selectCategory(null)">\r
            Tutto\r
          </button>\r
          <button *ngFor="let category of categories" \r
                  class="chip"\r
                  [class.active]="selectedCategory === category.id"\r
                  (click)="selectCategory(category.id)">\r
            {{ category.name }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Menu per categorie -->\r
    <div class="flex flex-col gap-md m-sm01">\r
      <div *ngFor="let category of filteredCategories" class="category-section">\r
        \r
        <!-- Header categoria -->\r
        <div class="flex items-center gap-sm mb-lg">\r
          <h2 class="text-md font-bold">{{ category.name }}</h2>\r
          <span class="chip">{{ category.dishes.length }} piatti</span>\r
        </div>\r
\r
        <!-- Griglia piatti -->\r
        <div class="dishes-grid">\r
          <div *ngFor="let dish of category.dishes" class="dish-card">\r
            \r
            <!-- Immagine del piatto -->\r
            <div class="dish-image-container">\r
              <img *ngIf="dish.image_url"\r
                   [src]="dish.image_url"\r
                   [alt]="dish.name"\r
                   class="dish-image"\r
                   (error)="onDishImageError($event, dish)">\r
              <div *ngIf="!dish.image_url" class="dish-image-placeholder">\r
                <lucide-angular name="utensils" [size]="24"></lucide-angular>\r
              </div>\r
            </div>\r
\r
            <!-- Info piatto -->\r
            <div class="dish-info">\r
              <div class="dish-header">\r
                <h3 class="dish-name">{{ dish.name }}</h3>\r
                <span class="dish-price">\r
                  <ng-container *ngIf="!selectedMenu?.fixed_price">\r
                    {{ formatPrice(dish.base_price) }}\r
                  </ng-container>\r
                </span>\r
\r
              </div>\r
\r
              <p *ngIf="dish.description" class="dish-description">\r
                {{ dish.description }}\r
              </p>\r
\r
              <!-- Info aggiuntive -->\r
              <div class="dish-details" *ngIf="!selectedMenu?.fixed_price">\r
                <span *ngIf="dish.delivery_price" class="detail-chip">\r
                  <span class="material-icons">delivery_dining</span>\r
                  {{ formatPrice(dish.delivery_price) }}\r
                </span>\r
                <span *ngIf="dish.takeaway_price" class="detail-chip">\r
                  <span class="material-icons">takeout_dining</span>\r
                  {{ formatPrice(dish.takeaway_price) }}\r
                </span>\r
              </div>\r
\r
              <!-- Bottone aggiungi -->\r
              <button class="add-to-cart-button" (click)="addToCart(dish)">\r
                <span class="material-icons">add_shopping_cart</span>\r
                Aggiungi\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Stato vuoto -->\r
      <div *ngIf="filteredCategories.length === 0" class="text-center p-xl">\r
        <span class="material-icons fs-lg">search_off</span>\r
        <h3>Nessun piatto trovato</h3>\r
        <p class="text-muted">Prova a modificare la ricerca o i filtri</p>\r
        <button class="promethea-button ghost mt-md" (click)="searchQuery = ''; selectedCategory = null">\r
          <span class="material-icons">refresh</span>\r
          Mostra tutto il menu\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Banner prezzo fisso -->\r
    <div *ngIf="selectedMenu?.fixed_price" class="fixed-price-banner card flex items-center justify-between gap-md">\r
      <div class="flex items-center gap-md">\r
        <lucide-icon name="tag" [size]="24" style="color: var(--primary)"></lucide-icon>\r
        <div>\r
          <p class="font-semibold text-md">Menu a prezzo fisso</p>\r
          <p class="text-muted text-mini">Tutti i piatti inclusi al prezzo unico</p>\r
        </div>\r
      </div>\r
      <span class="chip bg-gradient font-bold" style="font-size: var(--fs-md); padding: var(--gap-sm) var(--gap-md)">\r
        {{ formatPrice(selectedMenu!.fixed_price!) }}\r
      </span>\r
    </div>\r
\r
    <!-- Torna indietro -->\r
    <div class="text-center mt-xl">\r
      <button class="promethea-button ghost" routerLink="/customer/restaurant/{{restaurant.id}}">\r
        <span class="material-icons">arrow_back</span>\r
        Torna al ristorante\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<ng-template #loadingTemplate>\r
  <div class="page-container">\r
    <div class="flex flex-col items-center justify-center p-xl gap-md">\r
      <span class="material-icons animate-spin">sync</span>\r
      <p>Caricamento menu...</p>\r
    </div>\r
  </div>\r
</ng-template>`, styles: ["/* src/app/customer/restaurant/menu-display/menu-display.css */\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  background: var(--background);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  padding: var(--gap-sm) var(--gap-md);\n  width: 100%;\n}\n.search-bar input {\n  border: none;\n  background: transparent;\n  padding: 0;\n  width: 100%;\n}\n.search-bar input:focus {\n  outline: none;\n}\n.category-section {\n  margin-bottom: var(--gap-xl);\n}\n.dishes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n}\n.dish-card {\n  background: var(--background);\n  border: 1px solid var(--smoke-1);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(.2, .9, .2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.dish-card:hover {\n  transform: translateY(-4px);\n  border-color: var(--secondary);\n  box-shadow: 0 8px 24px var(--shadow-1);\n}\n.dish-image-container {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  background: var(--smoke-1);\n}\n.dish-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.dish-card:hover .dish-image {\n  transform: scale(1.05);\n}\n.dish-image-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: var(--text-muted);\n}\n.dish-image-placeholder .material-icons {\n  font-size: 3rem;\n}\n.dish-info {\n  padding: var(--gap-md);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.dish-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--gap-sm);\n}\n.dish-name {\n  line-height: 1;\n  font-weight: 700;\n  margin: 0;\n  flex: 1;\n}\n.dish-price {\n  font-weight: 700;\n  color: var(--primary);\n  white-space: nowrap;\n}\n.dish-description {\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin: 0;\n  font-size: 0.95rem;\n}\n.dish-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap-sm);\n  margin-top: var(--gap-sm);\n}\n.detail-chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background: var(--smoke-1);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.add-to-cart-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm) var(--gap-md);\n  background: var(--gradiente);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: auto;\n}\n.add-to-cart-button:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px var(--shadow-1);\n}\n.filter-chips {\n  max-width: 100%;\n  overflow-x: auto;\n  padding-bottom: 4px;\n}\n.filter-chips .chip {\n  white-space: nowrap;\n}\n.logo-image {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border: 3px solid var(--background);\n}\n@media (max-width: 768px) {\n  .dishes-grid {\n    grid-template-columns: 1fr;\n  }\n  .dish-image-container {\n    height: 180px;\n  }\n  .search-bar {\n    width: 100%;\n  }\n  .logo-image {\n    width: 60px;\n    height: 60px;\n  }\n}\n.fixed-price-banner {\n  position: sticky;\n  bottom: var(--gap-md);\n  z-index: 10;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 8px 32px var(--shadow-1);\n}\n/*# sourceMappingURL=menu-display.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuDisplay, { className: "MenuDisplay", filePath: "src/app/customer/restaurant/menu-display/menu-display.ts", lineNumber: 24 });
})();
export {
  MenuDisplay
};
//# sourceMappingURL=chunk-5TDCLTVU.js.map
