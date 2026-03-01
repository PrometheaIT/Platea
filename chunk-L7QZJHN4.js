import {
  ComandaService,
  OrderHeaderService,
  OrderItemService
} from "./chunk-UJMRF3JB.js";
import {
  IngredientService
} from "./chunk-XHJ77KX6.js";
import {
  DishService
} from "./chunk-5FIUGXYI.js";
import {
  ReservationService
} from "./chunk-PAOODSRL.js";
import {
  BaseService
} from "./chunk-K4QVN3EH.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  Injectable,
  filter,
  inject,
  lastValueFrom,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/review.service.ts
var ReviewService = class _ReviewService extends BaseService {
  constructor() {
    super();
    this.authService.currentUser$.pipe(filter((u) => !!u), take(1)).subscribe(() => {
      this.loadData();
    });
  }
  getTableName() {
    return "reviews";
  }
  // ✅ Override per ordinamento personalizzato
  loadData(additionalFilters) {
    return __async(this, null, function* () {
      try {
        this.loadingSubject.next(true);
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          this.dataSubject.next([]);
          this.loadingSubject.next(false);
          return;
        }
        const { data: reviews, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).order("created_at", { ascending: false });
        if (error)
          throw error;
        console.log("Reviews loaded:", reviews?.length);
        this.dataSubject.next(reviews || []);
      } catch (error) {
        console.error("Error loading reviews:", error);
        this.handleError("loadData", error);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  // ✅ Mantieni i metodi specifici
  getAverageRating() {
    const reviews = this.dataSubject.value;
    if (reviews.length === 0) {
      return { average: 0, count: 0 };
    }
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = total / reviews.length;
    return { average: Math.round(average * 10) / 10, count: reviews.length };
  }
  // ✅ ALIAS per compatibilità
  loadReviews() {
    return __async(this, null, function* () {
      return this.loadData();
    });
  }
  static \u0275fac = function ReviewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/statistics.service.ts
var StatisticsService = class _StatisticsService {
  supabaseService = inject(SupabaseService);
  // ===== 1. ORDINI DI OGGI (basati su order_headers) =====
  getTodayOrders() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return { count: 0, revenue: 0 };
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("order_headers").select("total_amount, status, comande(total_amount)").eq("restaurant_id", restaurantId).eq("status", "completed").gte("created_at", `${today}T00:00:00`).lte("created_at", `${today}T23:59:59`);
        if (error)
          throw error;
        let revenue = 0;
        const headers = data || [];
        for (const header of headers) {
          if (header.comande && Array.isArray(header.comande)) {
            revenue += header.comande.reduce((sum, comanda) => sum + (Number(comanda.total_amount) || 0), 0);
          }
        }
        return { count: headers.length, revenue };
      } catch (error) {
        console.error("Error in getTodayOrders:", error);
        return { count: 0, revenue: 0 };
      }
    });
  }
  // ===== 2. VENDITE ULTIMI 7 GIORNI (basate su comande) =====
  getLast7DaysSales() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return this.generateEmptySalesData();
        const end = /* @__PURE__ */ new Date();
        const start = /* @__PURE__ */ new Date();
        start.setDate(start.getDate() - 6);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("comande").select("created_at, total_amount, status").eq("restaurant_id", restaurantId).eq("status", "completed").gte("created_at", start.toISOString()).lte("created_at", end.toISOString());
        if (error)
          throw error;
        return this.groupSalesByDay(data || [], start, end);
      } catch (error) {
        console.error("Error in getLast7DaysSales:", error);
        return this.generateEmptySalesData();
      }
    });
  }
  // ===== 3. PIATTI PIÙ VENDUTI (basati su order_items) =====
  getTopDishes(limit = 5) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const { data, error } = yield this.supabaseService.getSupabaseClient().rpc("get_top_dishes", {
          p_restaurant_id: restaurantId,
          p_limit: limit
        });
        if (error) {
          return yield this.getTopDishesFallback(restaurantId, limit);
        }
        return data || [];
      } catch (error) {
        console.error("Error in getTopDishes:", error);
        return [];
      }
    });
  }
  // Fallback per top dishes
  getTopDishesFallback(restaurantId, limit) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("order_items").select(`
          quantity,
          dish:dish_id (
            id,
            name,
            base_price
          )
        `).eq("restaurant_id", restaurantId);
        if (error)
          throw error;
        const dishMap = /* @__PURE__ */ new Map();
        (data || []).forEach((item) => {
          if (!item.dish)
            return;
          const dishId = item.dish.id;
          const current = dishMap.get(dishId);
          const itemTotal = item.quantity * (item.dish.base_price || 0);
          if (current) {
            current.quantity += item.quantity;
            current.revenue += itemTotal;
          } else {
            dishMap.set(dishId, {
              name: item.dish.name,
              quantity: item.quantity,
              revenue: itemTotal
            });
          }
        });
        return Array.from(dishMap.entries()).map(([id, details]) => ({
          id,
          name: details.name,
          quantity: details.quantity,
          revenue: details.revenue
        })).sort((a, b) => b.quantity - a.quantity).slice(0, limit);
      } catch (error) {
        console.error("Error in getTopDishesFallback:", error);
        return [];
      }
    });
  }
  // ===== 4. COMANDE ATTIVE (per cucina) =====
  getActiveComande() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("comande").select(`
          *,
          table:table_id (table_number, table_name),
          order_header:order_header_id (order_number, customer_name),
          order_items (
            id,
            dish_id,
            quantity,
            status
          )
        `).eq("restaurant_id", restaurantId).in("status", ["ordered", "waiting", "preparing", "ready"]).order("created_at", { ascending: false }).limit(10);
        if (error)
          throw error;
        return (data || []).map((comanda) => __spreadProps(__spreadValues({}, comanda), {
          order_number: comanda.order_header?.order_number || `CMD-${comanda.id.slice(-6)}`,
          total_amount: Number(comanda.total_amount) || 0
        }));
      } catch (error) {
        console.error("Error in getActiveComande:", error);
        return [];
      }
    });
  }
  // ===== 5. METODI HELPER =====
  getCurrentRestaurantId() {
    return __async(this, null, function* () {
      try {
        return localStorage.getItem("currentRestaurantId");
      } catch {
        return null;
      }
    });
  }
  generateEmptySalesData() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = /* @__PURE__ */ new Date();
      date.setDate(date.getDate() - i);
      days.push({
        day: date.toLocaleDateString("it-IT", { weekday: "short" }),
        amount: 0
      });
    }
    return days;
  }
  groupSalesByDay(comande, startDate, endDate) {
    const salesByDay = /* @__PURE__ */ new Map();
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dayKey = d.toISOString().split("T")[0];
      salesByDay.set(dayKey, 0);
    }
    comande.forEach((comanda) => {
      const dayKey = comanda.created_at.split("T")[0];
      if (salesByDay.has(dayKey)) {
        salesByDay.set(dayKey, salesByDay.get(dayKey) + (Number(comanda.total_amount) || 0));
      }
    });
    return Array.from(salesByDay.entries()).map(([date, amount]) => ({
      day: new Date(date).toLocaleDateString("it-IT", { weekday: "short" }),
      amount
    }));
  }
  static \u0275fac = function StatisticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatisticsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatisticsService, factory: _StatisticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatisticsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/restaurant/dashboard/dashboard.ts
function Dashboard_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dish_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dish_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dish_r1.orders, " ordini");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", ctx_r2.formatNumber(dish_r1.revenue, "1.0-0"), "");
  }
}
function Dashboard_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "Nessun piatto venduto ancora");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "span", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reservation_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reservation_r4.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", reservation_r4.customer_name, " \u2022 ", reservation_r4.party_size, " persone ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(reservation_r4.status === "confermata" ? "bg-emerald-500/20 text-emerald-500" : reservation_r4.status === "in attesa" ? "bg-amber-500/20 text-amber-500" : "bg-red-500/20 text-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reservation_r4.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Tavolo ", reservation_r4.table, "");
  }
}
function Dashboard_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "Nessuna prenotazione in arrivo");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r5.order_number, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(order_r5.status === "preparing" ? "preparing" : order_r5.status === "pronto" ? "bg-emerald-500/20 text-emerald-500" : "bg-gray-500/20 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", order_r5.items, " articoli");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", ctx_r2.formatNumber(order_r5.total), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.time);
  }
}
function Dashboard_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 36);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "Tutto tranquillo in cucina");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28)(8, "div", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const alert_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(alert_r6.ingredient_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Scorta attuale: ", alert_r6.current_stock, " ", alert_r6.unit, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alert_r6.current_stock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("su ", alert_r6.minimum_stock, " min");
  }
}
function Dashboard_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 36);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "Tutto in ordine");
    \u0275\u0275elementEnd()();
  }
}
var Dashboard = class _Dashboard {
  // Statistiche principali
  todayOrders = 0;
  todayRevenue = 0;
  todayReservations = 0;
  upcomingReservations = 0;
  lowStockIngredients = 0;
  averageRating = 0;
  totalReviews = 0;
  // Dati grafico
  salesData = [];
  // Piatti più venduti
  topDishes = [];
  // Prenotazioni
  upcomingReservationsList = [];
  // Ordini in corso
  currentOrders = [];
  // Alert inventario
  inventoryAlerts = [];
  decimalPipe = inject(DecimalPipe);
  ingredientService = inject(IngredientService);
  reservationService = inject(ReservationService);
  reviewService = inject(ReviewService);
  dishService = inject(DishService);
  orderHeaderService = inject(OrderHeaderService);
  comandaService = inject(ComandaService);
  orderItemService = inject(OrderItemService);
  statisticsService = inject(StatisticsService);
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("\u{1F680} Dashboard ngOnInit started");
      yield new Promise((resolve) => setTimeout(resolve, 0));
      console.log("\u23F3 Loading service started");
      try {
        yield this.loadAllData();
        console.log("\u2705 loadAllData completed successfully");
      } catch (error) {
        console.error("\u274C Error loading dashboard data:", error);
        this.loadSampleData();
      } finally {
        console.log("\u{1F6D1} Finally block reached, stopping loading service");
        console.log("\u23F9\uFE0F Loading service stopped");
      }
    });
  }
  loadAllData() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F504} Loading all dashboard data...");
        const loadPromises = [
          this.ingredientService.loadData().then(() => console.log("\u2705 Ingredients loaded")),
          this.reservationService.loadRestaurantReservations().then(() => console.log("\u2705 Reservations loaded")),
          this.reviewService.loadData().then(() => console.log("\u2705 Reviews loaded")),
          this.dishService.loadData().then(() => console.log("\u2705 Dishes loaded"))
        ];
        yield Promise.all(loadPromises);
        console.log("\u2705 All base data loaded successfully");
        console.log("\u2705 Base data loaded, updating dashboard...");
        yield this.updateDashboardData();
      } catch (error) {
        console.error("\u274C Error in loadAllData:", error);
        throw error;
      }
    });
  }
  updateDashboardData() {
    return __async(this, null, function* () {
      console.log("\u{1F4CA} Starting dashboard data update");
      try {
        console.log("STEP 1: Loading today orders...");
        yield this.loadTodayOrders();
        console.log("\u2705 STEP 1 COMPLETED");
        console.log("STEP 2: Loading today reservations...");
        yield this.loadTodayReservations();
        console.log("\u2705 STEP 2 COMPLETED");
        console.log("STEP 3: Starting parallel load of sales data and top dishes...");
        yield Promise.all([
          this.loadSalesData().then(() => console.log("\u2705 STEP 3a - Sales data completed")),
          this.loadTopDishes().then(() => console.log("\u2705 STEP 3b - Top dishes completed"))
        ]);
        console.log("\u2705 STEP 3 COMPLETED");
        console.log("STEP 4: Starting parallel load of current orders and upcoming reservations...");
        yield Promise.all([
          this.loadCurrentOrders().then(() => console.log("\u2705 STEP 4a - Current orders completed")),
          this.loadUpcomingReservationsList().then(() => console.log("\u2705 STEP 4b - Upcoming reservations completed"))
        ]);
        console.log("\u2705 STEP 4 COMPLETED");
        console.log("STEP 5: Loading sync data...");
        this.loadLowStockIngredients();
        this.loadAverageRating();
        this.loadInventoryAlerts();
        console.log("\u2705 STEP 5 COMPLETED");
        console.log("\u{1F4CA} Dashboard data updated successfully");
      } catch (error) {
        console.error("\u274C Error in updateDashboardData:", error);
        throw error;
      }
    });
  }
  loadTodayOrders() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F4E6} Loading today orders (from order headers)...");
        const result = yield this.statisticsService.getTodayOrders();
        this.todayOrders = result.count;
        this.todayRevenue = result.revenue;
        console.log(`\u2705 Today order headers: ${this.todayOrders}, Revenue: \u20AC${this.todayRevenue}`);
      } catch (error) {
        console.error("\u274C Error loading today orders:", error);
        this.todayOrders = 0;
        this.todayRevenue = 0;
      }
    });
  }
  loadTodayReservations() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F4C5} Loading today reservations...");
        yield this.reservationService.loadRestaurantReservations();
        const allRestaurantReservations = yield lastValueFrom(this.reservationService.restaurantReservations$);
        const todayReservations = this.reservationService.getActiveReservations(allRestaurantReservations);
        const futureReservations = this.reservationService.getFutureReservations(allRestaurantReservations);
        this.todayReservations = todayReservations.length;
        this.upcomingReservations = futureReservations.length;
        console.log(`\u2705 Today reservations: ${this.todayReservations}, Upcoming: ${this.upcomingReservations}`);
      } catch (error) {
        console.error("\u274C Error loading today reservations:", error);
        this.todayReservations = 0;
        this.upcomingReservations = 0;
      }
    });
  }
  loadLowStockIngredients() {
    try {
      console.log("\u26A0\uFE0F Loading low stock ingredients...");
      const lowStock = this.ingredientService.getLowStockIngredients();
      this.lowStockIngredients = lowStock.length;
      console.log(`\u2705 Low stock ingredients: ${this.lowStockIngredients}`);
    } catch (error) {
      console.error("\u274C Error loading low stock ingredients:", error);
      this.lowStockIngredients = 0;
    }
  }
  loadAverageRating() {
    try {
      console.log("\u2B50 Loading average rating...");
      const ratingData = this.reviewService.getAverageRating();
      this.averageRating = ratingData.average;
      this.totalReviews = ratingData.count;
      console.log(`\u2705 Average rating: ${this.averageRating}/5 (${this.totalReviews} reviews)`);
    } catch (error) {
      console.error("\u274C Error loading average rating:", error);
      this.averageRating = 0;
      this.totalReviews = 0;
    }
  }
  loadSalesData() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F4C8} Loading sales data...");
        this.salesData = yield this.statisticsService.getLast7DaysSales();
        console.log(`\u2705 Sales data loaded: ${this.salesData.length} days`);
      } catch (error) {
        console.error("\u274C Error loading sales data:", error);
        this.salesData = this.generateSampleSalesData();
      }
    });
  }
  loadTopDishes() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F37D}\uFE0F Loading top dishes...");
        this.topDishes = yield this.statisticsService.getTopDishes(5);
        console.log(`\u2705 Top dishes loaded: ${this.topDishes.length}`);
      } catch (error) {
        console.error("\u274C Error loading top dishes:", error);
        this.topDishes = [];
      }
    });
  }
  // ✅ CORREZIONE: Nuovo metodo per caricare la lista delle prenotazioni future
  loadUpcomingReservationsList() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F552} Loading upcoming reservations list...");
        const allRestaurantReservations = yield lastValueFrom(this.reservationService.restaurantReservations$);
        const futureReservations = this.reservationService.getFutureReservations(allRestaurantReservations);
        this.upcomingReservationsList = futureReservations.slice(0, 4).map((reservation) => ({
          time: reservation.reservation_time.substring(0, 5),
          customer_name: this.getCustomerName(reservation),
          party_size: reservation.party_size,
          table: this.getTableName(reservation),
          status: reservation.status
        }));
        console.log(`\u2705 Upcoming reservations list: ${this.upcomingReservationsList.length}`);
      } catch (error) {
        console.error("\u274C Error loading upcoming reservations list:", error);
        this.upcomingReservationsList = [];
      }
    });
  }
  loadCurrentOrders() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F525} Loading current comande...");
        const comande = yield this.statisticsService.getActiveComande();
        console.log(`\u{1F4CB} Raw current comande:`, comande);
        const ordersWithDetails = yield Promise.all(comande.slice(0, 4).map((comanda) => __async(this, null, function* () {
          try {
            const itemsCount = comanda.order_items ? comanda.order_items.length : 0;
            return {
              order_number: comanda.order_number || `#${comanda.id?.slice(-6) || "N/A"}`,
              items: itemsCount,
              total: comanda.total_amount || 0,
              status: comanda.status || "pending",
              time: this.formatTimeSince(comanda.created_at),
              customer_name: comanda.customer_name || comanda.order_header?.customer_name || "Cliente"
            };
          } catch (itemError) {
            console.error("\u274C Error processing comanda:", comanda.id, itemError);
            return {
              order_number: comanda.order_number || `#${comanda.id?.slice(-6) || "N/A"}`,
              items: 0,
              total: comanda.total_amount || 0,
              status: comanda.status || "pending",
              time: "N/A",
              customer_name: "Cliente"
            };
          }
        })));
        this.currentOrders = ordersWithDetails.filter((order) => order !== null);
        console.log(`\u2705 Current comande processed: ${this.currentOrders.length}`);
      } catch (error) {
        console.error("\u274C Error loading current comande:", error);
        this.currentOrders = [];
      }
    });
  }
  loadInventoryAlerts() {
    try {
      console.log("\u{1F6A8} Loading inventory alerts...");
      const lowStockIngredients = this.ingredientService.getLowStockIngredients();
      this.inventoryAlerts = lowStockIngredients.slice(0, 4).map((ingredient) => ({
        ingredient_name: ingredient.name,
        current_stock: ingredient.current_stock,
        minimum_stock: ingredient.minimum_stock,
        unit: ingredient.units?.symbol || "pz",
        priority: ingredient.current_stock <= ingredient.minimum_stock * 0.5 ? "high" : "medium"
      }));
      console.log(`\u2705 Inventory alerts: ${this.inventoryAlerts.length}`);
    } catch (error) {
      console.error("\u274C Error loading inventory alerts:", error);
      this.inventoryAlerts = [];
    }
  }
  // Metodo di fallback per dati di esempio (DEBUG)
  loadSampleData() {
    console.warn("\u26A0\uFE0F Using sample data for dashboard");
    this.todayOrders = 12;
    this.todayRevenue = 450.5;
    this.todayReservations = 8;
    this.upcomingReservations = 15;
    this.lowStockIngredients = 2;
    this.averageRating = 4.5;
    this.totalReviews = 24;
    this.salesData = this.generateSampleSalesData();
    this.topDishes = this.generateSampleTopDishes();
    this.upcomingReservationsList = this.generateSampleReservations();
    this.currentOrders = this.generateSampleOrders();
    this.inventoryAlerts = this.generateSampleAlerts();
  }
  generateSampleSalesData() {
    const days = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
    return days.map((day) => ({
      day,
      amount: Math.floor(Math.random() * 500) + 100
    }));
  }
  generateSampleTopDishes() {
    return [
      { name: "Pizza Margherita", quantity: 45, revenue: 675 },
      { name: "Spaghetti Carbonara", quantity: 38, revenue: 570 },
      { name: "Tagliata di Manzo", quantity: 25, revenue: 625 },
      { name: "Insalada Cesare", quantity: 22, revenue: 198 },
      { name: "Tiramis\xF9", quantity: 18, revenue: 126 }
    ];
  }
  generateSampleReservations() {
    return [
      { time: "20:00", customer_name: "Mario Rossi", party_size: 4, status: "confirmed", table: "Tavolo 5" },
      { time: "20:30", customer_name: "Laura Bianchi", party_size: 2, status: "pending", table: "Tavolo 2" },
      { time: "21:00", customer_name: "Giuseppe Verdi", party_size: 6, status: "confirmed", table: "Tavolo 8" }
    ];
  }
  generateSampleOrders() {
    return [
      { order_number: "#12345", items: 3, total: 45.5, status: "preparing", time: "15 min" },
      { order_number: "#12346", items: 2, total: 28, status: "ready", time: "8 min" }
    ];
  }
  generateSampleAlerts() {
    return [
      { ingredient_name: "Pomodori San Marzano", current_stock: 5, minimum_stock: 20, unit: "kg", priority: "high" },
      { ingredient_name: "Mozzarella di Bufala", current_stock: 8, minimum_stock: 15, unit: "pz", priority: "medium" }
    ];
  }
  // ✅ CORREZIONE: Aggiunti metodi helper per ReservationService
  getCustomerName(reservation) {
    return this.reservationService.getCustomerName(reservation);
  }
  getTableName(reservation) {
    return this.reservationService.getTableInfo(reservation);
  }
  formatTimeSince(dateString) {
    if (!dateString)
      return "Ora";
    try {
      const now = /* @__PURE__ */ new Date();
      const date = new Date(dateString);
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 6e4);
      if (diffInMinutes < 1)
        return "Ora";
      if (diffInMinutes < 60)
        return `${diffInMinutes} min`;
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours} h`;
    } catch (error) {
      return "Ora";
    }
  }
  get maxSales() {
    if (this.salesData.length === 0)
      return 1;
    const max = Math.max(...this.salesData.map((item) => item.amount));
    return max > 0 ? max : 1;
  }
  formatNumber(value, digitsInfo = "1.2-2") {
    if (value === null || value === void 0)
      return "0";
    return this.decimalPipe.transform(value, digitsInfo) || "0";
  }
  // Metodi helper per le classi CSS
  getStatusClass(status) {
    const statusMap = {
      "confirmed": "chip success",
      "pending": "chip warning",
      "cancelled": "chip error",
      "confermata": "chip success",
      "in attesa": "chip warning",
      "cancellata": "chip error"
    };
    return statusMap[status] || "chip";
  }
  getOrderStatusClass(status) {
    const statusMap = {
      "preparing": "preparing",
      "ready": "chip success",
      "completed": "chip inactive",
      "served": "chip inactive",
      "received": "chip warning"
    };
    return statusMap[status] || "chip";
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe])], decls: 79, vars: 16, consts: [[1, "page-container", "p-sm"], [1, "grid-cards", "p-sm1", "mt-lg"], ["data-tutorial", "dashboard-orders", 1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "card-footer", "text-muted"], ["data-tutorial", "dashboard-reservation", 1, "card"], [1, "card"], [1, "grid-cards", "mt-lg", "p-sm1"], ["data-tutorial", "dashboard-top-dishes", 1, "card"], [1, "font-bold", "text-md", "m-0"], [1, "flex", "flex-col", "gap-md"], ["class", "card-body", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "flex items-center justify-between p-md rounded border hover:border-primary transition", 4, "ngFor", "ngForOf"], ["class", "p-md rounded border hover:border-primary transition", 4, "ngFor", "ngForOf"], ["class", "p-md rounded border border-red-500/30 bg-red-500/5", 4, "ngFor", "ngForOf"], [1, "card-body"], [1, "text-md", "font-bold", "text-primary", "w-10"], [1, "flex-1"], [1, "text-muted", "text-sm"], [1, "text-md", "font-bold", "text-primary"], [1, "empty-state"], [1, "material-icons", "text-lg"], [1, "text-muted"], [1, "flex", "items-center", "justify-between", "p-md", "rounded", "border", "hover:border-primary", "transition"], [1, "text-right"], [1, "chip"], [1, "text-sm", "text-muted", "mt-1"], [1, "p-md", "rounded", "border", "hover:border-primary", "transition"], [1, "flex", "justify-between", "items-start", "mb-sm"], [1, "flex", "justify-between", "items-end", "mt-md"], [1, "font-bold", "text-primary"], [1, "text-sm", "text-muted"], [1, "material-icons", "text-lg", "text-primary"], [1, "p-md", "rounded", "border", "border-red-500/30", "bg-red-500/5"], [1, "flex", "items-center", "justify-between"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 5);
      \u0275\u0275text(7, "Ordini Oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 3)(14, "span", 4);
      \u0275\u0275text(15, "event_available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h3", 5);
      \u0275\u0275text(17, "Prenotazioni Oggi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 9)(23, "div", 3)(24, "span", 4);
      \u0275\u0275text(25, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h3", 5);
      \u0275\u0275text(27, "Scorte Basse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 6);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 7);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 9)(33, "div", 3)(34, "span", 4);
      \u0275\u0275text(35, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h3", 5);
      \u0275\u0275text(37, "Valutazione Media");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 6);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 7);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 10)(43, "div", 11)(44, "div", 3)(45, "span", 4);
      \u0275\u0275text(46, "local_fire_department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h3", 12);
      \u0275\u0275text(48, "Piatti Pi\xF9 Venduti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 13);
      \u0275\u0275template(50, Dashboard_div_50_Template, 10, 4, "div", 14)(51, Dashboard_div_51_Template, 5, 0, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 9)(53, "div", 3)(54, "span", 4);
      \u0275\u0275text(55, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "h3", 12);
      \u0275\u0275text(57, "Prossime Prenotazioni");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 13);
      \u0275\u0275template(59, Dashboard_div_59_Template, 11, 7, "div", 16)(60, Dashboard_div_60_Template, 5, 0, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 9)(62, "div", 3)(63, "span", 4);
      \u0275\u0275text(64, "restaurant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "h3", 12);
      \u0275\u0275text(66, "Ordini in Corso");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 13);
      \u0275\u0275template(68, Dashboard_div_68_Template, 13, 7, "div", 17)(69, Dashboard_div_69_Template, 5, 0, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 9)(71, "div", 3)(72, "span", 4);
      \u0275\u0275text(73, "notification_important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h3", 12);
      \u0275\u0275text(75, "Alert Inventario");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 13);
      \u0275\u0275template(77, Dashboard_div_77_Template, 12, 5, "div", 18)(78, Dashboard_div_78_Template, 5, 0, "div", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.todayOrders);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u20AC", ctx.formatNumber(ctx.todayRevenue), "");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.todayReservations);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.upcomingReservations, " in arrivo");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.lowStockIngredients);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.lowStockIngredients > 0 ? "Azione richiesta" : "Tutto sotto controllo", " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.averageRating, "/5");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.totalReviews, " recensioni");
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.topDishes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.topDishes.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.upcomingReservationsList);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.upcomingReservationsList.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.currentOrders);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentOrders.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.inventoryAlerts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.inventoryAlerts.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, LucideAngularModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [CommonModule, LucideAngularModule], providers: [DecimalPipe], template: `<div class="page-container p-sm">\r
\r
  <!-- Statistiche Principali -->\r
  <div class="grid-cards p-sm1 mt-lg">\r
    <!-- Card Ordini Oggi -->\r
    <div class="card" data-tutorial="dashboard-orders">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">receipt</span>\r
        <h3 class="card-title">Ordini Oggi</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ todayOrders }}</div>\r
      <div class="card-footer text-muted">\u20AC{{ formatNumber(todayRevenue) }}</div>\r
    </div>\r
\r
    <!-- Card Prenotazioni Oggi -->\r
    <div class="card" data-tutorial="dashboard-reservation">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">event_available</span>\r
        <h3 class="card-title">Prenotazioni Oggi</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ todayReservations }}</div>\r
      <div class="card-footer text-muted">{{ upcomingReservations }} in arrivo</div>\r
    </div>\r
\r
    <!-- Card Scorte Basse -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">warning</span>\r
        <h3 class="card-title">Scorte Basse</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ lowStockIngredients }}</div>\r
      <div class="card-footer text-muted">\r
        {{ lowStockIngredients > 0 ? 'Azione richiesta' : 'Tutto sotto controllo' }}\r
      </div>\r
    </div>\r
\r
    <!-- Card Valutazione Media -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">star</span>\r
        <h3 class="card-title">Valutazione Media</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ averageRating }}/5</div>\r
      <div class="card-footer text-muted">{{ totalReviews }} recensioni</div>\r
    </div>\r
  </div>\r
\r
\r
  <!-- Grid Inferiore -->\r
  <div class="grid-cards mt-lg p-sm1">\r
    <!-- Piatti Pi\xF9 Venduti -->\r
    <div class="card" data-tutorial="dashboard-top-dishes">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">local_fire_department</span>\r
        <h3 class="font-bold text-md m-0">Piatti Pi\xF9 Venduti</h3>\r
      </div>\r
      <div class="flex flex-col gap-md">\r
        <div *ngFor="let dish of topDishes; let i = index" \r
             class="card-body">\r
          <div class="text-md font-bold text-primary w-10">{{ i + 1 }}</div>\r
          <div class="flex-1">\r
            <strong>{{ dish.name }}</strong>\r
            <div class="text-muted text-sm">{{ dish.orders }} ordini</div>\r
          </div>\r
          <div class="text-md font-bold text-primary">\u20AC{{ formatNumber(dish.revenue, '1.0-0') }}</div>\r
        </div>\r
        <div *ngIf="topDishes.length === 0" class="empty-state">\r
          <span class="material-icons text-lg">restaurant_menu</span>\r
          <p class="text-muted">Nessun piatto venduto ancora</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Prenotazioni in Arrivo -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">schedule</span>\r
        <h3 class="font-bold text-md m-0">Prossime Prenotazioni</h3>\r
      </div>\r
      <div class="flex flex-col gap-md">\r
        <div *ngFor="let reservation of upcomingReservationsList" \r
             class="flex items-center justify-between p-md rounded border hover:border-primary transition">\r
          <div>\r
            <strong>{{ reservation.time }}</strong>\r
            <div class="text-muted">\r
              {{ reservation.customer_name }} \u2022 {{ reservation.party_size }} persone\r
            </div>\r
          </div>\r
          <div class="text-right">\r
            <span class="chip" \r
                  [class]="reservation.status === 'confermata' ? 'bg-emerald-500/20 text-emerald-500' : \r
                          reservation.status === 'in attesa' ? 'bg-amber-500/20 text-amber-500' : \r
                          'bg-red-500/20 text-red-500'">\r
              {{ reservation.status }}\r
            </span>\r
            <div class="text-sm text-muted mt-1">Tavolo {{ reservation.table }}</div>\r
          </div>\r
        </div>\r
        <div *ngIf="upcomingReservationsList.length === 0" class="empty-state">\r
          <span class="material-icons text-lg">event_available</span>\r
          <p class="text-muted">Nessuna prenotazione in arrivo</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Ordini in Corso -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">restaurant</span>\r
        <h3 class="font-bold text-md m-0">Ordini in Corso</h3>\r
      </div>\r
      <div class="flex flex-col gap-md">\r
        <div *ngFor="let order of currentOrders" class="p-md rounded border hover:border-primary transition">\r
          <div class="flex justify-between items-start mb-sm">\r
            <strong>#{{ order.order_number }}</strong>\r
            <span class="chip" \r
                  [class]="order.status === 'preparing' ? 'preparing' : \r
                          order.status === 'pronto' ? 'bg-emerald-500/20 text-emerald-500' : \r
                          'bg-gray-500/20 text-gray-500'">\r
              {{ order.status }}\r
            </span>\r
          </div>\r
          <div class="text-muted">{{ order.items }} articoli</div>\r
          <div class="flex justify-between items-end mt-md">\r
            <div class="font-bold text-primary">\u20AC{{ formatNumber(order.total) }}</div>\r
            <div class="text-sm text-muted">{{ order.time }}</div>\r
          </div>\r
        </div>\r
        <div *ngIf="currentOrders.length === 0" class="empty-state">\r
          <span class="material-icons text-lg text-primary">check_circle</span>\r
          <p class="text-muted">Tutto tranquillo in cucina</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Alert Inventario -->\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">notification_important</span>\r
        <h3 class="font-bold text-md m-0">Alert Inventario</h3>\r
      </div>\r
      <div class="flex flex-col gap-md">\r
        <div *ngFor="let alert of inventoryAlerts" \r
             class="p-md rounded border border-red-500/30 bg-red-500/5">\r
          <div class="flex items-center justify-between">\r
            <div>\r
              <strong>{{ alert.ingredient_name }}</strong>\r
              <div class="text-muted text-sm">Scorta attuale: {{ alert.current_stock }} {{ alert.unit }}</div>\r
            </div>\r
            <div class="text-right">\r
              <div class="font-bold text-primary">{{ alert.current_stock }}</div>\r
              <div class="text-sm text-muted">su {{ alert.minimum_stock }} min</div>\r
            </div>\r
          </div>\r
        </div>\r
        <div *ngIf="inventoryAlerts.length === 0" class="empty-state">\r
          <span class="material-icons text-lg text-primary">inventory_2</span>\r
          <p class="text-muted">Tutto in ordine</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/restaurant/dashboard/dashboard.ts", lineNumber: 23 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-L7QZJHN4.js.map
