import {
  GeographyService
} from "./chunk-2TU7X2RF.js";
import {
  RestaurantPublicService
} from "./chunk-TT75TUX5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-4SOHWVCI.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-77JDNC7M.js";
import {
  Router
} from "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/customer/restaurant/restaurant-list/restaurant-list.ts
function RestaurantList_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(region_r1);
  }
}
function RestaurantList_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const province_r2 = ctx.$implicit;
    \u0275\u0275property("value", province_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(province_r2.name);
  }
}
function RestaurantList_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function RestaurantList_button_32_Template_button_click_0_listener() {
      const cuisine_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onCuisineFilter(cuisine_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cuisine_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r4.selectedCuisine === cuisine_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("a ", cuisine_r4, " ");
  }
}
function RestaurantList_div_38_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Prova a modificare i filtri");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_38_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Nessun ristorante disponibile");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_38_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function RestaurantList_div_38_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.resetFilters());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mostra tutti ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 21);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 22);
    \u0275\u0275text(4, "Nessun ristorante trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RestaurantList_div_38_p_5_Template, 2, 0, "p", 23)(6, RestaurantList_div_38_p_6_Template, 2, 0, "p", 23)(7, RestaurantList_div_38_button_7_Template, 4, 0, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r4.searchQuery || ctx_r4.selectedCuisine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.searchQuery && !ctx_r4.selectedCuisine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.searchQuery || ctx_r4.selectedCuisine);
  }
}
function RestaurantList_div_39_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 44);
    \u0275\u0275listener("error", function RestaurantList_div_39_div_1_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.onImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", restaurant_r8.cover_image_url, \u0275\u0275sanitizeUrl)("alt", restaurant_r8.name);
  }
}
function RestaurantList_div_39_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4, "Immagine non disponibile");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantList_div_39_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fp_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", fp_r10.name, " ");
  }
}
function RestaurantList_div_39_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " Nessuna mappa ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_39_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "img", 44);
    \u0275\u0275listener("error", function RestaurantList_div_39_div_1_div_9_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.onLogoError($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const restaurant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", restaurant_r8.logo_url, \u0275\u0275sanitizeUrl)("alt", restaurant_r8.name);
  }
}
function RestaurantList_div_39_div_1_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r12, " ");
  }
}
function RestaurantList_div_39_div_1_div_14_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ((restaurant_r8.additional_info == null ? null : restaurant_r8.additional_info.cuisine_types == null ? null : restaurant_r8.additional_info.cuisine_types.length) || 0) - 3, " ");
  }
}
function RestaurantList_div_39_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, RestaurantList_div_39_div_1_div_14_span_1_Template, 2, 1, "span", 51);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, RestaurantList_div_39_div_1_div_14_span_3_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 2, restaurant_r8.additional_info == null ? null : restaurant_r8.additional_info.cuisine_types, 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((restaurant_r8.additional_info == null ? null : restaurant_r8.additional_info.cuisine_types == null ? null : restaurant_r8.additional_info.cuisine_types.length) || 0) > 3);
  }
}
function RestaurantList_div_39_div_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const restaurant_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.truncateText(restaurant_r8.description, 120), " ");
  }
}
function RestaurantList_div_39_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 6);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const restaurant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(restaurant_r8.address);
  }
}
function RestaurantList_div_39_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 6);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const restaurant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(restaurant_r8.phone);
  }
}
function RestaurantList_div_39_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52)(1, "span", 6);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Prenotazioni ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_39_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52)(1, "span", 6);
    \u0275\u0275text(2, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Selezione Tavolo ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_39_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52)(1, "span", 6);
    \u0275\u0275text(2, "delivery_dining");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delivery ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_39_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52)(1, "span", 6);
    \u0275\u0275text(2, "takeout_dining");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Takeaway ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantList_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function RestaurantList_div_39_div_1_Template_div_click_0_listener() {
      const restaurant_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.viewRestaurantDetails(restaurant_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275template(2, RestaurantList_div_39_div_1_img_2_Template, 1, 2, "img", 31)(3, RestaurantList_div_39_div_1_ng_template_3_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(5, "div", 32)(6, "div", 11);
    \u0275\u0275template(7, RestaurantList_div_39_div_1_span_7_Template, 2, 1, "span", 33)(8, RestaurantList_div_39_div_1_span_8_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, RestaurantList_div_39_div_1_div_9_Template, 2, 2, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 36)(11, "div", 37)(12, "h3", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, RestaurantList_div_39_div_1_div_14_Template, 4, 6, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RestaurantList_div_39_div_1_p_15_Template, 2, 1, "p", 39);
    \u0275\u0275elementStart(16, "div", 37);
    \u0275\u0275template(17, RestaurantList_div_39_div_1_div_17_Template, 5, 1, "div", 40)(18, RestaurantList_div_39_div_1_div_18_Template, 5, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275template(20, RestaurantList_div_39_div_1_span_20_Template, 4, 0, "span", 41)(21, RestaurantList_div_39_div_1_span_21_Template, 4, 0, "span", 41)(22, RestaurantList_div_39_div_1_span_22_Template, 4, 0, "span", 41)(23, RestaurantList_div_39_div_1_span_23_Template, 4, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 42)(25, "button", 43);
    \u0275\u0275listener("click", function RestaurantList_div_39_div_1_Template_button_click_25_listener($event) {
      const restaurant_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.viewRestaurantMap(restaurant_r8.id, $event));
    });
    \u0275\u0275elementStart(26, "span", 6);
    \u0275\u0275text(27, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Visualizza Mappa ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const restaurant_r8 = ctx.$implicit;
    const placeholder_r13 = \u0275\u0275reference(4);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", restaurant_r8.cover_image_url)("ngIfElse", placeholder_r13);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r4.restaurantFloorPlansMap.get(restaurant_r8.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_7_0 = ctx_r4.restaurantFloorPlansMap.get(restaurant_r8.id)) == null ? null : tmp_7_0.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r8.logo_url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(restaurant_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r8.additional_info == null ? null : restaurant_r8.additional_info.cuisine_types == null ? null : restaurant_r8.additional_info.cuisine_types.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", restaurant_r8.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r8.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", restaurant_r8.allow_table_selection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r8.allow_table_selection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r8.accepts_delivery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", restaurant_r8.accepts_takeaway);
  }
}
function RestaurantList_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, RestaurantList_div_39_div_1_Template, 29, 14, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.paginatedRestaurants);
  }
}
function RestaurantList_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "button", 58);
    \u0275\u0275listener("click", function RestaurantList_div_40_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.previousPage());
    });
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Precedente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function RestaurantList_div_40_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.nextPage());
    });
    \u0275\u0275text(8, " Successivo ");
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage === 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Pagina ", ctx_r4.currentPage, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage * ctx_r4.pageSize >= ctx_r4.filteredRestaurants.length);
  }
}
var RestaurantList = class _RestaurantList {
  restaurantPublicService = inject(RestaurantPublicService);
  geographyService = inject(GeographyService);
  authService = inject(AuthService);
  supabaseService = inject(SupabaseService);
  router = inject(Router);
  restaurants = [];
  restaurantFloorPlansMap = /* @__PURE__ */ new Map();
  filteredRestaurants = [];
  loading = true;
  imageErrorCount = 0;
  maxRetries = 2;
  // Filtri
  searchQuery = "";
  selectedCuisine = "";
  cuisineTypes = [];
  regions = [];
  filteredProvinces = [];
  selectedRegion = "";
  selectedProvince = "";
  allProvinces = [];
  // Stato per la modale mappe
  showMapModal = false;
  selectedRestaurantName = "";
  restaurantMaps = [];
  loadingMaps = false;
  // Paginazione
  currentPage = 1;
  pageSize = 9;
  ngOnInit() {
    return __async(this, null, function* () {
      this.restaurants = yield this.restaurantPublicService.loadRestaurantsByCuisine();
      this.filteredRestaurants = [...this.restaurants];
      const provinces = yield firstValueFrom(this.geographyService.getFilteredProvinces());
      this.allProvinces = provinces;
      this.regions = [...new Set(provinces.map((p) => p.region))].sort();
      yield this.setDefaultUserProvince(provinces);
      this.filterRestaurants();
      yield this.loadFloorPlansForCurrentPage();
      const allCuisines = this.restaurants.flatMap((r) => r.additional_info?.cuisine_types || []).map((c) => c.trim()).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.cuisineTypes = allCuisines;
      this.loading = false;
    });
  }
  // Filtra i ristoranti in base alla ricerca e ai filtri
  filterRestaurants() {
    let filtered = this.restaurants;
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((r) => r.name?.toLowerCase().includes(query) || r.address?.toLowerCase().includes(query) || r.description?.toLowerCase().includes(query) || // Cerca anche nei tipi di cucina
      r.additional_info?.cuisine_types?.some((c) => c.toLowerCase().includes(query)));
    }
    if (this.selectedCuisine) {
      filtered = filtered.filter((r) => r.additional_info?.cuisine_types?.some((c) => c.toLowerCase().trim() === this.selectedCuisine.toLowerCase().trim()));
    }
    if (this.selectedProvince) {
      filtered = filtered.filter((r) => r.province === this.selectedProvince);
    }
    this.filteredRestaurants = filtered;
    this.currentPage = 1;
  }
  onSearchChange() {
    this.filterRestaurants();
  }
  onCuisineFilter(cuisine) {
    this.selectedCuisine = cuisine === this.selectedCuisine ? "" : cuisine;
    this.filterRestaurants();
  }
  // Paginazione
  nextPage() {
    if (this.currentPage * this.pageSize < this.filteredRestaurants.length) {
      this.currentPage++;
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  get paginatedRestaurants() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredRestaurants.slice(startIndex, startIndex + this.pageSize);
  }
  viewRestaurantMap(restaurantId, event) {
    if (event) {
      event.stopPropagation();
    }
    console.log("Navigating to restaurant map:", restaurantId);
    this.router.navigate(["/customer/restaurant", restaurantId, "map"]);
  }
  // Utilità per troncare il testo
  truncateText(text, maxLength) {
    if (!text)
      return "";
    if (text.length <= maxLength)
      return text;
    return text.substring(0, maxLength) + "...";
  }
  // Gestione errori immagini
  onImageError(event) {
    const img = event.target;
    this.imageErrorCount++;
    if (this.imageErrorCount > this.maxRetries || img.src.includes("placeholder")) {
      img.style.display = "none";
      return;
    }
    img.src = "assets/images/restaurant-placeholder.jpg";
  }
  onLogoError(event) {
    const img = event.target;
    img.style.display = "none";
  }
  viewRestaurantDetails(restaurantId) {
    this.router.navigate(["/customer/restaurant", restaurantId]);
  }
  // ---------- GEOGRAFIA ----------
  loadRegions() {
    this.geographyService.getFilteredProvinces().subscribe((provinces) => {
      this.regions = [...new Set(provinces.map((p) => p.region))].sort();
    });
  }
  // Filtra le province in base alla regione selezionata
  filterProvincesByRegion(region) {
    this.filteredProvinces = region ? this.allProvinces.filter((p) => p.region === region) : [...this.allProvinces];
  }
  // ---------- FILTRI DI DEFAULT: PROVINCIA DELL'UTENTE ----------
  setDefaultUserProvince(allProvinces) {
    return __async(this, null, function* () {
      const user = this.authService.currentUserValue;
      if (!user) {
        this.filteredProvinces = allProvinces;
        return;
      }
      let userProvince = user.province;
      if (!userProvince) {
        try {
          const { data, error } = yield this.supabaseService.getSupabaseClient().from("users").select("province").eq("id", user.id).single();
          if (!error && data) {
            userProvince = data.province;
          }
        } catch (err) {
          console.warn("Errore nel recupero provincia utente", err);
        }
      }
      if (userProvince) {
        this.selectedProvince = userProvince;
        const provinceData = allProvinces.find((p) => p.code === userProvince);
        if (provinceData) {
          this.selectedRegion = provinceData.region;
          this.filteredProvinces = allProvinces.filter((p) => p.region === this.selectedRegion);
        } else {
          this.selectedRegion = "";
          this.filteredProvinces = allProvinces;
        }
      } else {
        this.filteredProvinces = allProvinces;
      }
    });
  }
  // ---------- GESTIONE CAMBIO FILTRI ----------
  onRegionChange(region) {
    this.selectedRegion = region;
    this.selectedProvince = "";
    this.filterProvincesByRegion(region);
    this.filterRestaurants();
  }
  onProvinceChange(provinceCode) {
    this.selectedProvince = provinceCode;
    if (provinceCode) {
      this.geographyService.getFilteredProvinces().subscribe((provinces) => {
        const province = provinces.find((p) => p.code === provinceCode);
        if (province) {
          this.selectedRegion = province.region;
          this.filterProvincesByRegion(this.selectedRegion);
        }
        this.filterRestaurants();
      });
    } else {
      this.filterRestaurants();
    }
  }
  resetFilters() {
    this.searchQuery = "";
    this.selectedCuisine = "";
    this.selectedRegion = "";
    this.selectedProvince = "";
    this.filteredProvinces = this.allProvinces;
    this.filterRestaurants();
  }
  // ---------- FILTRAGGIO ----------
  applyFilters() {
    let filtered = this.restaurants;
    if (this.selectedProvince) {
      filtered = filtered.filter((r) => r.province === this.selectedProvince);
    }
    this.filteredRestaurants = filtered;
  }
  loadFloorPlansForCurrentPage() {
    return __async(this, null, function* () {
      const restaurantsOnPage = this.paginatedRestaurants;
      if (restaurantsOnPage.length === 0)
        return;
      const restaurantIds = restaurantsOnPage.map((r) => r.id).filter((id) => id);
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("restaurant_floor_plans").select("id, name, restaurant_id").in("restaurant_id", restaurantIds).eq("is_active", true).order("name", { ascending: true });
        if (error)
          throw error;
        const map = /* @__PURE__ */ new Map();
        data?.forEach((fp) => {
          if (!map.has(fp.restaurant_id)) {
            map.set(fp.restaurant_id, []);
          }
          map.get(fp.restaurant_id).push({ id: fp.id, name: fp.name });
        });
        this.restaurantFloorPlansMap = map;
      } catch (error) {
        console.error("\u274C Errore caricamento mappe:", error);
      }
    });
  }
  static \u0275fac = function RestaurantList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantList, selectors: [["app-restaurant-list"]], decls: 41, vars: 9, consts: [["placeholder", ""], [1, "page-container"], [1, "form-card"], [1, "form-row"], [1, "form-group"], [1, "standard-label"], [1, "material-icons"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Cerca ristorante, cucina, zona...", 3, "ngModelChange", "input", "ngModel"], [1, "flex", "flex-wrap", "gap-sm"], ["class", "filter-chip chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center"], [1, "promethea-button", "ghost", 3, "click"], ["class", "flex flex-col items-center justify-center p-xl gap-md text-center", 4, "ngIf"], ["class", "rl-grid mt-lg", 4, "ngIf"], ["class", "flex items-center justify-center gap-lg p-lg", 4, "ngIf"], [3, "value"], [1, "filter-chip", "chip", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-xl", "gap-md", "text-center"], [1, "material-icons", 2, "font-size", "64px", "opacity", "0.3"], [1, "card-title"], ["class", "text-muted", 4, "ngIf"], ["class", "promethea-button", 3, "click", 4, "ngIf"], [1, "text-muted"], [1, "promethea-button", 3, "click"], [1, "rl-grid", "mt-lg"], ["class", "card rl-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "rl-card", 3, "click"], [1, "rl-img"], [3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], [1, "rl-overlay", "flex", "flex-col", "gap-sm", "p-sm"], ["class", "chip", 4, "ngFor", "ngForOf"], ["class", "chip-mini text-muted", 4, "ngIf"], ["class", "rl-logo", 4, "ngIf"], [1, "flex", "flex-col", "gap-sm", "p-md", 2, "flex", "1"], [1, "flex", "flex-col", "gap-sm"], ["class", "flex flex-wrap gap-sm", 4, "ngIf"], ["class", "text-muted text-mini", "style", "line-height:1.5", 4, "ngIf"], ["class", "flex items-center gap-sm", 4, "ngIf"], ["class", "chip-mini", 4, "ngIf"], [1, "card-footer"], [1, "promethea-button", "ghost", 2, "width", "100%", 3, "click"], [3, "error", "src", "alt"], [1, "rl-img-placeholder", "flex", "flex-col", "items-center", "justify-center", "gap-sm"], [1, "material-icons", 2, "font-size", "48px", "opacity", "0.4"], [1, "text-muted", "text-mini"], [1, "chip"], [1, "chip-mini", "text-muted"], [1, "rl-logo"], ["class", "chip-mini", 4, "ngFor", "ngForOf"], [1, "chip-mini"], [1, "text-muted", "text-mini", 2, "line-height", "1.5"], [1, "flex", "items-center", "gap-sm"], [1, "text-mini", "text-interrupt"], [1, "text-mini"], [1, "flex", "items-center", "justify-center", "gap-lg", "p-lg"], [1, "promethea-button", "ghost", 3, "click", "disabled"]], template: function RestaurantList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "label", 5)(5, "span", 6);
      \u0275\u0275text(6, "public");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Regione ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "select", 7);
      \u0275\u0275listener("ngModelChange", function RestaurantList_Template_select_ngModelChange_8_listener($event) {
        return ctx.onRegionChange($event);
      });
      \u0275\u0275elementStart(9, "option", 8);
      \u0275\u0275text(10, "Tutte le regioni");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, RestaurantList_option_11_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 4)(13, "label", 5)(14, "span", 6);
      \u0275\u0275text(15, "map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Provincia ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 7);
      \u0275\u0275listener("ngModelChange", function RestaurantList_Template_select_ngModelChange_17_listener($event) {
        return ctx.onProvinceChange($event);
      });
      \u0275\u0275elementStart(18, "option", 8);
      \u0275\u0275text(19, "Tutte le province");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, RestaurantList_option_20_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 3)(22, "div", 4)(23, "label", 5)(24, "span", 6);
      \u0275\u0275text(25, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Cerca ristorante ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RestaurantList_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function RestaurantList_Template_input_input_27_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 4)(29, "label", 5);
      \u0275\u0275text(30, "Filtra per cucina");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 11);
      \u0275\u0275template(32, RestaurantList_button_32_Template, 2, 3, "button", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 13)(34, "button", 14);
      \u0275\u0275listener("click", function RestaurantList_Template_button_click_34_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275elementStart(35, "span", 6);
      \u0275\u0275text(36, "clear");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(38, RestaurantList_div_38_Template, 8, 3, "div", 15)(39, RestaurantList_div_39_Template, 2, 1, "div", 16)(40, RestaurantList_div_40_Template, 11, 3, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.selectedRegion);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.regions);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.selectedProvince);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filteredProvinces);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.cuisineTypes);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredRestaurants.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredRestaurants.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredRestaurants.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.rl-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: var(--gap-lg);\n  padding: 0 var(--gap-md) var(--gap-lg);\n}\n.rl-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0;\n  overflow: hidden;\n}\n.rl-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n  border-radius: 16px 16px 0 0;\n  flex-shrink: 0;\n}\n.rl-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.rl-card[_ngcontent-%COMP%]:hover   .rl-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.rl-img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: var(--smoke-1);\n}\n.rl-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  border-radius: 16px 16px 0 0;\n}\n.rl-card[_ngcontent-%COMP%]:hover   .rl-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.rl-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: var(--gap-sm);\n  right: var(--gap-sm);\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid var(--background);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.rl-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: #FAFAFC;\n  border-color: transparent;\n}\n@media (max-width: 768px) {\n  .rl-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 var(--gap-sm) var(--gap-lg);\n  }\n}\n/*# sourceMappingURL=restaurant-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantList, [{
    type: Component,
    args: [{ selector: "app-restaurant-list", imports: [CommonModule, FormsModule], template: '<div class="page-container">\r\n\r\n  <!-- FILTRI -->\r\n  <div class="form-card">\r\n    <div class="form-row">\r\n      <div class="form-group">\r\n        <label class="standard-label">\r\n          <span class="material-icons">public</span>\r\n          Regione\r\n        </label>\r\n        <select [ngModel]="selectedRegion" (ngModelChange)="onRegionChange($event)">\r\n          <option value="">Tutte le regioni</option>\r\n          <option *ngFor="let region of regions" [value]="region">{{ region }}</option>\r\n        </select>\r\n      </div>\r\n      <div class="form-group">\r\n        <label class="standard-label">\r\n          <span class="material-icons">map</span>\r\n          Provincia\r\n        </label>\r\n        <select [ngModel]="selectedProvince" (ngModelChange)="onProvinceChange($event)">\r\n          <option value="">Tutte le province</option>\r\n          <option *ngFor="let province of filteredProvinces" [value]="province.code">{{ province.name }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-row">\r\n      <div class="form-group">\r\n        <label class="standard-label">\r\n          <span class="material-icons">search</span>\r\n          Cerca ristorante\r\n        </label>\r\n        <input type="text" [(ngModel)]="searchQuery" (input)="onSearchChange()"\r\n          placeholder="Cerca ristorante, cucina, zona...">\r\n      </div>\r\n      <div class="form-group">\r\n        <label class="standard-label">Filtra per cucina</label>\r\n        <div class="flex flex-wrap gap-sm">\r\n          <button class="filter-chip chip" *ngFor="let cuisine of cuisineTypes"\r\n            [class.active]="selectedCuisine === cuisine"\r\n            (click)="onCuisineFilter(cuisine)">a\r\n            {{ cuisine }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class="flex items-center">\r\n        <button class="promethea-button ghost" (click)="resetFilters()">\r\n          <span class="material-icons">clear</span>\r\n          Reset\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- STATO VUOTO -->\r\n  <div class="flex flex-col items-center justify-center p-xl gap-md text-center"\r\n       *ngIf="!loading && filteredRestaurants.length === 0">\r\n    <span class="material-icons" style="font-size: 64px; opacity: 0.3;">restaurant</span>\r\n    <h3 class="card-title">Nessun ristorante trovato</h3>\r\n    <p class="text-muted" *ngIf="searchQuery || selectedCuisine">Prova a modificare i filtri</p>\r\n    <p class="text-muted" *ngIf="!searchQuery && !selectedCuisine">Nessun ristorante disponibile</p>\r\n    <button class="promethea-button" (click)="resetFilters()" *ngIf="searchQuery || selectedCuisine">\r\n      <span class="material-icons">refresh</span>\r\n      Mostra tutti\r\n    </button>\r\n  </div>\r\n\r\n  <!-- GRIGLIA -->\r\n  <div class="rl-grid mt-lg" *ngIf="!loading && filteredRestaurants.length > 0">\r\n    <div class="card rl-card"\r\n         *ngFor="let restaurant of paginatedRestaurants"\r\n         (click)="viewRestaurantDetails(restaurant.id)">\r\n\r\n      <!-- IMMAGINE -->\r\n      <div class="rl-img">\r\n        <img [src]="restaurant.cover_image_url" [alt]="restaurant.name"\r\n             (error)="onImageError($event)"\r\n             *ngIf="restaurant.cover_image_url; else placeholder">\r\n        <ng-template #placeholder>\r\n          <div class="rl-img-placeholder flex flex-col items-center justify-center gap-sm">\r\n            <span class="material-icons" style="font-size:48px; opacity:0.4">restaurant</span>\r\n            <span class="text-muted text-mini">Immagine non disponibile</span>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <!-- OVERLAY con mappe -->\r\n        <div class="rl-overlay flex flex-col gap-sm p-sm">\r\n          <div class="flex flex-wrap gap-sm">\r\n            <span class="chip" *ngFor="let fp of restaurantFloorPlansMap.get(restaurant.id)">\r\n              {{ fp.name }}\r\n            </span>\r\n            <span class="chip-mini text-muted"\r\n                  *ngIf="!restaurantFloorPlansMap.get(restaurant.id)?.length">\r\n              Nessuna mappa\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- LOGO sovrapposto -->\r\n        <div class="rl-logo" *ngIf="restaurant.logo_url">\r\n          <img [src]="restaurant.logo_url" [alt]="restaurant.name" (error)="onLogoError($event)">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- CORPO CARD -->\r\n      <div class="flex flex-col gap-sm p-md" style="flex:1">\r\n\r\n        <!-- NOME + CUCINE -->\r\n        <div class="flex flex-col gap-sm">\r\n          <h3 class="card-title">{{ restaurant.name }}</h3>\r\n          <div class="flex flex-wrap gap-sm"\r\n               *ngIf="restaurant.additional_info?.cuisine_types?.length">\r\n            <span class="chip-mini"\r\n                  *ngFor="let c of (restaurant.additional_info?.cuisine_types | slice:0:3)">\r\n              {{ c }}\r\n            </span>\r\n            <span class="chip-mini"\r\n                  *ngIf="(restaurant.additional_info?.cuisine_types?.length || 0) > 3">\r\n              +{{ (restaurant.additional_info?.cuisine_types?.length || 0) - 3 }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- DESCRIZIONE -->\r\n        <p class="text-muted text-mini" *ngIf="restaurant.description" style="line-height:1.5">\r\n          {{ truncateText(restaurant.description, 120) }}\r\n        </p>\r\n\r\n        <!-- META -->\r\n        <div class="flex flex-col gap-sm">\r\n          <div class="flex items-center gap-sm" *ngIf="restaurant.address">\r\n            <span class="material-icons">place</span>\r\n            <span class="text-mini text-interrupt">{{ restaurant.address }}</span>\r\n          </div>\r\n          <div class="flex items-center gap-sm" *ngIf="restaurant.phone">\r\n            <span class="material-icons">phone</span>\r\n            <span class="text-mini">{{ restaurant.phone }}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- FEATURES -->\r\n        <div class="flex flex-wrap gap-sm">\r\n          <span class="chip-mini" *ngIf="restaurant.allow_table_selection">\r\n            <span class="material-icons">event_available</span>\r\n            Prenotazioni\r\n          </span>\r\n          <span class="chip-mini" *ngIf="restaurant.allow_table_selection">\r\n            <span class="material-icons">table_restaurant</span>\r\n            Selezione Tavolo\r\n          </span>\r\n          <span class="chip-mini" *ngIf="restaurant.accepts_delivery">\r\n            <span class="material-icons">delivery_dining</span>\r\n            Delivery\r\n          </span>\r\n          <span class="chip-mini" *ngIf="restaurant.accepts_takeaway">\r\n            <span class="material-icons">takeout_dining</span>\r\n            Takeaway\r\n          </span>\r\n        </div>\r\n\r\n        <!-- BOTTONE -->\r\n        <div class="card-footer">\r\n          <button class="promethea-button ghost" style="width:100%"\r\n                  (click)="viewRestaurantMap(restaurant.id, $event)">\r\n            <span class="material-icons">map</span>\r\n            Visualizza Mappa\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- PAGINAZIONE -->\r\n  <div class="flex items-center justify-center gap-lg p-lg"\r\n       *ngIf="filteredRestaurants.length > 0">\r\n    <button class="promethea-button ghost"\r\n            [disabled]="currentPage === 1"\r\n            (click)="previousPage()">\r\n      <span class="material-icons">chevron_left</span>\r\n      Precedente\r\n    </button>\r\n    <span class="chip">Pagina {{ currentPage }}</span>\r\n    <button class="promethea-button ghost"\r\n            [disabled]="currentPage * pageSize >= filteredRestaurants.length"\r\n            (click)="nextPage()">\r\n      Successivo\r\n      <span class="material-icons">chevron_right</span>\r\n    </button>\r\n  </div>\r\n\r\n</div>', styles: ["/* src/app/customer/restaurant/restaurant-list/restaurant-list.css */\n.rl-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: var(--gap-lg);\n  padding: 0 var(--gap-md) var(--gap-lg);\n}\n.rl-card {\n  cursor: pointer;\n  padding: 0;\n  overflow: hidden;\n}\n.rl-img {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n  border-radius: 16px 16px 0 0;\n  flex-shrink: 0;\n}\n.rl-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.rl-card:hover .rl-img img {\n  transform: scale(1.06);\n}\n.rl-img-placeholder {\n  width: 100%;\n  height: 100%;\n  background: var(--smoke-1);\n}\n.rl-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  border-radius: 16px 16px 0 0;\n}\n.rl-card:hover .rl-overlay {\n  opacity: 1;\n}\n.rl-logo {\n  position: absolute;\n  bottom: var(--gap-sm);\n  right: var(--gap-sm);\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid var(--background);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.rl-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.filter-chip.active {\n  background: var(--gradiente);\n  color: #FAFAFC;\n  border-color: transparent;\n}\n@media (max-width: 768px) {\n  .rl-grid {\n    grid-template-columns: 1fr;\n    padding: 0 var(--gap-sm) var(--gap-lg);\n  }\n}\n/*# sourceMappingURL=restaurant-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantList, { className: "RestaurantList", filePath: "src/app/customer/restaurant/restaurant-list/restaurant-list.ts", lineNumber: 17 });
})();
export {
  RestaurantList
};
//# sourceMappingURL=chunk-J6UO7MYR.js.map
