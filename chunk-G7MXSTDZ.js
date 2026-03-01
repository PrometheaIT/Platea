import {
  OrderStateService
} from "./chunk-77LJZULL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  OrderHelperService
} from "./chunk-UJMRF3JB.js";
import {
  IngredientService
} from "./chunk-XHJ77KX6.js";
import {
  DishService
} from "./chunk-5FIUGXYI.js";
import "./chunk-K4QVN3EH.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  AsyncPipe,
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  Injectable,
  Subscription,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  inject,
  map,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpipeBind2,
  ɵɵproperty,
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
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/Ordini/kitchen.service.ts
var KitchenService = class _KitchenService {
  supabase = inject(SupabaseService).getSupabaseClient();
  authService = inject(AuthService);
  orderHelper = inject(OrderHelperService);
  orderState = inject(OrderStateService);
  dishService = inject(DishService);
  dishCache = /* @__PURE__ */ new Map();
  dishesLoaded = false;
  lastLoadTime = 0;
  CACHE_TTL = 3e4;
  // 30 secondi
  // Filtri
  statusFilter = new BehaviorSubject("all");
  searchTerm = new BehaviorSubject("");
  floorPlanFilter = new BehaviorSubject("all");
  rawGroups = new BehaviorSubject([]);
  // Observables pubblici
  filteredGroups$ = combineLatest([
    this.rawGroups.asObservable(),
    this.statusFilter.asObservable(),
    this.searchTerm.asObservable().pipe(debounceTime(300)),
    this.floorPlanFilter.asObservable()
  ]).pipe(map(([groups, statusFilter, searchTerm, floorPlanFilter]) => this.filterGroups(groups, statusFilter, searchTerm, floorPlanFilter)), distinctUntilChanged());
  stats$ = this.filteredGroups$.pipe(map((groups) => this.calculateStats(groups)));
  constructor() {
    console.log("\u{1F3C1} [KitchenService] Inizializzazione");
    this.initializeService();
  }
  // ==================== METODI PUBBLICI AGGIUNTI ====================
  setFloorPlanFilter(floorPlanId) {
    this.floorPlanFilter.next(floorPlanId);
  }
  // Carica tutte le mappe del ristorante
  loadFloorPlans() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const { data, error } = yield this.supabase.from("restaurant_floor_plans").select("id, name").eq("restaurant_id", restaurantId).eq("is_active", true).order("name", { ascending: true });
        if (error) {
          console.error("Errore caricamento mappe:", error);
          return [];
        }
        return data || [];
      } catch (error) {
        console.error("Errore caricamento mappe:", error);
        return [];
      }
    });
  }
  // Ottiene i dettagli della mappa per un tavolo
  getFloorPlanForTable(tableId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("tables").select(`
          restaurant_floor_plans!inner (
            id,
            name
          )
        `).eq("id", tableId).single();
        if (error)
          throw error;
        if (data.restaurant_floor_plans && Array.isArray(data.restaurant_floor_plans)) {
          return data.restaurant_floor_plans[0];
        }
        return null;
      } catch (error) {
        console.error("Errore recupero mappa per tavolo:", error);
        return null;
      }
    });
  }
  // ==================== METODI PUBBLICI ESISTENTI ====================
  forceRefresh() {
    return __async(this, null, function* () {
      console.log("\u{1F504} [KitchenService] Forzatura refresh dati");
      yield this.loadKitchenData(true);
    });
  }
  setStatusFilter(status) {
    this.statusFilter.next(status);
  }
  setSearchTerm(term) {
    this.searchTerm.next(term);
  }
  updateItemStatus(itemId, newStatus) {
    return __async(this, null, function* () {
      return yield this.orderState.updateItemStatus(itemId, newStatus);
    });
  }
  updateComandaStatus(comandaId, newStatus) {
    return __async(this, null, function* () {
      const success = yield this.orderState.updateComandaStatus(comandaId, newStatus);
      if (success && ["preparing", "ready", "served", "cancelled"].includes(newStatus)) {
        yield this.orderState.updateAllItemsInComanda(comandaId, newStatus);
      }
      return success;
    });
  }
  markAllItemsInComandaAsReady(comandaId) {
    return __async(this, null, function* () {
      return yield this.orderState.updateAllItemsInComanda(comandaId, "ready");
    });
  }
  markAllItemsInGroupAsReady(group) {
    return __async(this, null, function* () {
      const promises = group.comande.map((comanda) => this.markAllItemsInComandaAsReady(comanda.id));
      yield Promise.all(promises);
      return true;
    });
  }
  // Utility methods
  calculateElapsedTime(dateString) {
    if (!dateString)
      return 0;
    try {
      const created = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      return Math.max(0, Math.floor((now.getTime() - created.getTime()) / (1e3 * 60)));
    } catch {
      return 0;
    }
  }
  formatTime(dateString) {
    if (!dateString)
      return "";
    return new Date(dateString).toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  // ==================== METODI PRIVATI AGGIORNATI ====================
  loadInitialData() {
    return __async(this, null, function* () {
      try {
        yield this.loadKitchenData();
      } catch (error) {
        console.error("Errore caricamento iniziale dati cucina:", error);
      }
    });
  }
  calculateGroupStatusSummary(comande) {
    const summary = {
      waiting: 0,
      preparing: 0,
      ready: 0,
      served: 0,
      ordered: 0,
      cancelled: 0,
      out_of_stock: 0
    };
    comande.forEach((comanda) => {
      comanda.items.forEach((item) => {
        const status = item.status;
        switch (status) {
          case "waiting":
            summary.waiting++;
            break;
          case "preparing":
            summary.preparing++;
            break;
          case "ready":
            summary.ready++;
            break;
          case "served":
            summary.served++;
            break;
          case "ordered":
            summary.ordered++;
            break;
          case "cancelled":
            summary.cancelled++;
            break;
          case "out_of_stock":
            summary.out_of_stock++;
            break;
          default:
            summary.ordered++;
            break;
        }
      });
    });
    return summary;
  }
  filterGroups(groups, statusFilter, searchTerm, floorPlanFilter) {
    let filtered = groups;
    if (statusFilter !== "all") {
      filtered = filtered.filter((group) => group.comande.some((comanda) => comanda.items.some((item) => item.status === statusFilter)));
    }
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((group) => group.table_name.toLowerCase().includes(term) || group.customer_name.toLowerCase().includes(term) || group.comande.some((comanda) => comanda.items.some((item) => item.dish_name.toLowerCase().includes(term))));
    }
    if (floorPlanFilter !== "all") {
      filtered = filtered.filter((group) => group.floor_plan_id === floorPlanFilter);
    }
    return filtered;
  }
  calculateStats(groups) {
    const stats = {
      waiting: 0,
      preparing: 0,
      ready: 0,
      totalGroups: groups.length,
      totalItems: 0
    };
    groups.forEach((group) => {
      group.comande.forEach((comanda) => {
        comanda.items.forEach((item) => {
          stats.totalItems++;
          if (item.status === "waiting")
            stats.waiting++;
          if (item.status === "preparing")
            stats.preparing++;
          if (item.status === "ready")
            stats.ready++;
        });
      });
    });
    return stats;
  }
  // ==================== METODI PRIVATI ====================
  initializeService() {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F527} [KitchenService] Inizializzazione servizio");
        yield this.loadDishes();
        yield this.loadKitchenData();
      } catch (error) {
        console.error("\u274C [KitchenService] Errore inizializzazione:", error);
      }
    });
  }
  loadDishes(force = false) {
    return __async(this, null, function* () {
      if (this.dishesLoaded && !force) {
        console.log("\u{1F35D} [KitchenService] Piatti gi\xE0 caricati, uso cache");
        return;
      }
      try {
        console.log("\u{1F35D} [KitchenService] Caricamento piatti...");
        yield this.dishService.loadData();
        const dishes = this.dishService.getDishes();
        if (dishes.length === 0) {
          console.warn("\u26A0\uFE0F [KitchenService] Nessun piatto caricato");
          return;
        }
        this.updateDishCache(dishes);
        this.dishesLoaded = true;
        console.log(`\u2705 [KitchenService] ${dishes.length} piatti caricati`);
      } catch (error) {
        console.error("\u274C [KitchenService] Errore caricamento piatti:", error);
      }
    });
  }
  updateDishCache(dishes) {
    this.dishCache.clear();
    dishes.forEach((dish) => {
      if (dish && dish.id && dish.name) {
        this.dishCache.set(dish.id, {
          name: dish.name,
          preparation_time: dish.preparation_time || 15
        });
      }
    });
    console.log(`\u{1F4E6} [KitchenService] Cache piatti aggiornata: ${this.dishCache.size} piatti`);
    if (this.dishCache.size > 0) {
      const firstFive = Array.from(this.dishCache.entries()).slice(0, 5);
      console.log("\u{1F50D} [KitchenService] Primi 5 piatti in cache:", firstFive);
    }
  }
  getDishInfo(dishId) {
    if (!dishId) {
      console.warn("\u26A0\uFE0F [KitchenService] dishId \xE8 undefined o null");
      return {
        name: "Piatto sconosciuto",
        preparation_time: 15
      };
    }
    const cached = this.dishCache.get(dishId);
    if (cached) {
      return cached;
    }
    try {
      const dish = this.dishService.getDishById(dishId);
      if (dish) {
        const dishInfo = {
          name: dish.name || `Piatto #${dishId.substring(0, 4)}`,
          preparation_time: dish.preparation_time || 15
        };
        this.dishCache.set(dishId, dishInfo);
        console.log(`\u2705 [KitchenService] Piatto trovato: ${dishInfo.name} (${dishId})`);
        return dishInfo;
      }
    } catch (error) {
      console.error(`\u274C [KitchenService] Errore recupero piatto ${dishId}:`, error);
    }
    console.warn(`\u26A0\uFE0F [KitchenService] Piatto non trovato: ${dishId}`);
    return {
      name: `Piatto #${dishId.substring(0, 4)}`,
      preparation_time: 15
    };
  }
  loadKitchenData(force = false) {
    return __async(this, null, function* () {
      const now = Date.now();
      if (!force && now - this.lastLoadTime < this.CACHE_TTL) {
        console.log("\u23F3 [KitchenService] Dati ancora freschi, salto refresh");
        return;
      }
      try {
        const restaurantId = yield this.authService.getCurrentRestaurantId();
        if (!restaurantId) {
          console.error("\u274C [KitchenService] Nessun restaurant ID trovato");
          this.rawGroups.next([]);
          return;
        }
        console.log("\u{1F50D} [KitchenService] Caricamento ordini per restaurant:", restaurantId);
        const { data, error } = yield this.supabase.from("order_headers").select(`
        id,
        order_number,
        table_id,
        customer_name,
        created_at,
        tables:table_id (
          table_number,
          table_name,
          floor_plan_id,
          restaurant_floor_plans (id, name)
        ),
        comande:comande!order_header_id (
          id,
          comanda_number,
          status,
          created_at,
          order_items (
            id,
            dish_id,
            quantity,
            status,
            item_notes,
            created_at
          )
        )
      `).eq("restaurant_id", restaurantId).in("status", ["active", "open", "pending"]).order("created_at", { ascending: true });
        if (error)
          throw error;
        const groups = this.transformData(data || []);
        this.rawGroups.next(groups);
        this.lastLoadTime = now;
      } catch (error) {
        console.error("\u274C [KitchenService] Errore caricamento dati cucina:", error);
        this.rawGroups.next([]);
      }
    });
  }
  transformData(headers) {
    console.log("\u{1F504} [KitchenService] Trasformazione dati...");
    return headers.map((header) => {
      let floor_plan_id = "no-floor-plan";
      let floor_plan_name = "Senza mappa";
      if (header.tables) {
        const tableData = Array.isArray(header.tables) ? header.tables[0] : header.tables;
        if (tableData?.floor_plan_id) {
          floor_plan_id = tableData.floor_plan_id;
          if (tableData.restaurant_floor_plans) {
            const floorPlanData = Array.isArray(tableData.restaurant_floor_plans) ? tableData.restaurant_floor_plans[0] : tableData.restaurant_floor_plans;
            floor_plan_name = floorPlanData?.name || `Mappa ${floor_plan_id.substring(0, 4)}...`;
          } else {
            floor_plan_name = `Mappa ${floor_plan_id.substring(0, 4)}...`;
          }
        }
      }
      const comande = this.transformComande(header.comande || [], header);
      const status_summary = this.calculateGroupStatusSummary(comande);
      return {
        order_header_id: header.id,
        order_number: header.order_number,
        table_number: header.tables?.table_number?.toString() || header.table_id,
        table_name: header.tables?.table_name || `Tavolo ${header.table_id}`,
        created_at: header.created_at,
        customer_name: header.customer_name || "Cliente",
        floor_plan_id,
        floor_plan_name,
        table_id: header.table_id,
        comande,
        status_summary
      };
    });
  }
  transformComande(comande, header) {
    return comande.map((comanda) => {
      console.log(`\u{1F4DD} [KitchenService] Trasformazione comanda ${comanda.id}`);
      const items = (comanda.order_items || []).map((item) => {
        console.log(`\u{1F50D} [KitchenService] Item ${item.id}: dish_id = ${item.dish_id}`);
        const dishInfo = this.getDishInfo(item.dish_id);
        return {
          id: item.id,
          dish_id: item.dish_id,
          dish_name: dishInfo.name,
          quantity: item.quantity,
          status: item.status || "ordered",
          notes: item.item_notes || "",
          special_requests: item.item_notes || "",
          created_at: item.created_at,
          preparation_time: dishInfo.preparation_time,
          table_number: header.tables?.table_number || "N/A"
        };
      });
      const totalItems = items.length;
      const completedItems = items.filter((item) => ["ready", "served", "cancelled", "out_of_stock"].includes(item.status)).length;
      const progressPercentage = totalItems > 0 ? Math.round(completedItems / totalItems * 100) : 0;
      return {
        id: comanda.id,
        comanda_number: comanda.comanda_number || 1,
        status: comanda.status || "ordered",
        created_at: comanda.created_at,
        items,
        completed_items: completedItems,
        total_items: totalItems,
        progress_percentage: progressPercentage
      };
    });
  }
  static \u0275fac = function KitchenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KitchenService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KitchenService, factory: _KitchenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KitchenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/Piatti/recipe.service.ts
var RecipeService = class _RecipeService {
  dishService = inject(DishService);
  ingredientService = inject(IngredientService);
  /**
   * Ottieni i dettagli completi della ricetta
   */
  getRecipeDetails(dishId) {
    const dish = this.getDishById(dishId);
    if (!dish) {
      return {
        ingredients: [],
        instructions: "Ricetta non disponibile",
        preparationTime: 15
      };
    }
    const ingredients = this.transformIngredientsForDisplay(dish.ingredients_composition || []);
    return {
      dishName: dish.name,
      ingredients,
      instructions: dish.recipe_instructions || "Nessuna istruzione di preparazione disponibile",
      preparationTime: dish.preparation_time || 15
    };
  }
  /**
   * Ottieni un piatto per ID (versione sincrona)
   */
  getDishById(dishId) {
    const dishes = this.dishService.getDishes();
    if (!dishes || !Array.isArray(dishes)) {
      console.warn("\u26A0\uFE0F [RecipeService] Nessun piatto disponibile");
      return null;
    }
    const dish = dishes.find((d) => d.id === dishId);
    if (!dish) {
      console.warn(`\u26A0\uFE0F [RecipeService] Piatto con ID ${dishId} non trovato`);
      return null;
    }
    return dish;
  }
  /**
   * Ottieni i dettagli della ricetta come Observable (versione reattiva)
   */
  getRecipeDetails$(dishId) {
    return combineLatest([
      this.dishService.data$,
      this.ingredientService.data$
    ]).pipe(map(([dishes, ingredients]) => {
      const dish = dishes.find((d) => d.id === dishId);
      if (!dish) {
        return {
          ingredients: [],
          instructions: "Ricetta non disponibile",
          preparationTime: 15
        };
      }
      const transformedIngredients = (dish.ingredients_composition || []).map((comp) => {
        const ingredient = ingredients.find((ing) => ing.id === comp.ingredient_id);
        return {
          id: comp.ingredient_id,
          name: ingredient?.name || "Ingrediente sconosciuto",
          quantity: comp.quantity || 0,
          unit: comp.unit_symbol || ingredient?.units?.symbol || "pz",
          notes: comp.recipe_notes || "",
          cost: comp.cost || 0,
          description: ingredient?.description
        };
      });
      return {
        dishName: dish.name,
        ingredients: transformedIngredients,
        instructions: dish.recipe_instructions || "Nessuna istruzione disponibile",
        preparationTime: dish.preparation_time || 15
      };
    }));
  }
  /**
   * Trasforma gli ingredienti per la visualizzazione (versione semplice)
   */
  transformIngredientsForDisplay(composition) {
    if (!composition || !Array.isArray(composition)) {
      console.warn("\u26A0\uFE0F [RecipeService] Composition non valida:", composition);
      return [];
    }
    const ingredients = this.ingredientService.getIngredients();
    return composition.map((item) => {
      let ingredientName = "Ingrediente sconosciuto";
      let ingredientUnit = "pz";
      if (item.ingredient_id && ingredients) {
        const fullIngredient = ingredients.find((ing) => ing.id === item.ingredient_id);
        if (fullIngredient) {
          ingredientName = fullIngredient.name;
          if (fullIngredient.units?.symbol) {
            ingredientUnit = fullIngredient.units.symbol;
          }
        }
      }
      return {
        id: item.ingredient_id,
        name: item.ingredient_name || ingredientName,
        quantity: item.quantity || 0,
        unit: item.unit_symbol || ingredientUnit,
        notes: item.recipe_notes || "",
        cost: item.cost || 0
      };
    });
  }
  /**
   * Calcola il costo totale della ricetta
   */
  calculateRecipeCost(dishId) {
    const dish = this.getDishById(dishId);
    if (!dish || !dish.ingredients_composition) {
      return 0;
    }
    return dish.ingredients_composition.reduce((total, item) => {
      return total + (item.cost || 0);
    }, 0);
  }
  /**
   * Ottieni il tempo di preparazione
   */
  getPreparationTime(dishId) {
    const dish = this.getDishById(dishId);
    return dish?.preparation_time || 15;
  }
  static \u0275fac = function RecipeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecipeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecipeService, factory: _RecipeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecipeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/restaurant/orders/kitchen-display/kitchen-display.ts
function KitchenDisplay_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const floorPlan_r1 = ctx.$implicit;
    \u0275\u0275property("value", floorPlan_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", floorPlan_r1.name, " ");
  }
}
function KitchenDisplay_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 14);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun ordine attivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "Tutti gli ordini sono stati completati");
    \u0275\u0275elementEnd()();
  }
}
function KitchenDisplay_div_85_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u23F3 ", ctx_r3.getGroupStatusSummary(group_r3).waiting, " in attesa ");
  }
}
function KitchenDisplay_div_85_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F468}\u200D\u{1F373} ", ctx_r3.getGroupStatusSummary(group_r3).preparing, " in preparazione ");
  }
}
function KitchenDisplay_div_85_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2705 ", ctx_r3.getGroupStatusSummary(group_r3).ready, " pronto ");
  }
}
function KitchenDisplay_div_85_div_25_div_1_select_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function KitchenDisplay_div_85_div_25_div_1_select_9_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const comanda_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(comanda_r8.status, $event) || (comanda_r8.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function KitchenDisplay_div_85_div_25_div_1_select_9_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const comanda_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateComandaStatus(comanda_r8, $event));
    });
    \u0275\u0275elementStart(1, "option", 62);
    \u0275\u0275text(2, "Ordinato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 17);
    \u0275\u0275text(4, "In Attesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 18);
    \u0275\u0275text(6, "In Preparazione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 19);
    \u0275\u0275text(8, "Pronto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 63);
    \u0275\u0275text(10, "Cancellato");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comanda_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", comanda_r8.status);
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.forceOrderedToWaiting(item_r11));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Prendi in carico ");
    \u0275\u0275elementEnd();
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.startItemPreparation(item_r11));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "kitchen");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Inizia preparazione ");
    \u0275\u0275elementEnd();
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.markItemAsReady(item_r11));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Segnala pronto ");
    \u0275\u0275elementEnd();
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Pronto - in attesa della sala");
    \u0275\u0275elementEnd()();
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "p", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.notes);
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_ng_container_24_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275property("value", status_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusText(status_r14), " ");
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_ng_container_24_option_1_Template, 2, 2, "option", 91);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const status_r14 = ctx.$implicit;
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", status_r14 !== item_r11.status);
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 67)(2, "div", 68)(3, "div", 69)(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 72);
    \u0275\u0275template(9, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_9_Template, 4, 0, "button", 73)(10, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_10_Template, 4, 0, "button", 74)(11, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_button_11_Template, 4, 0, "button", 74)(12, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_div_12_Template, 5, 0, "div", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 76)(14, "span", 77)(15, "span", 14);
    \u0275\u0275text(16, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_div_18_Template, 3, 1, "div", 78);
    \u0275\u0275elementStart(19, "div", 79)(20, "div", 80)(21, "select", 81);
    \u0275\u0275twoWayListener("ngModelChange", function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_Template_select_ngModelChange_21_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.status, $event) || (item_r11.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_Template_select_change_21_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const comanda_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateItemStatus(item_r11, $event, comanda_r8.id));
    });
    \u0275\u0275elementStart(22, "option", 82);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_ng_container_24_Template, 2, 1, "ng-container", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 55)(26, "button", 84);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_Template_button_click_26_listener() {
      const item_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.markItemAsOutOfStock(item_r11));
    });
    \u0275\u0275elementStart(27, "span", 14);
    \u0275\u0275text(28, "block");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 85);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_div_25_div_1_div_15_div_2_Template_button_click_29_listener() {
      const item_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.openRecipeModal(item_r11));
    });
    \u0275\u0275elementStart(30, "span", 14);
    \u0275\u0275text(31, "menu_book");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap("status-" + item_r11.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r11.quantity, "\xD7");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getDishDisplayName(item_r11));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r11.status === "ordered");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.status === "waiting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.status === "preparing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.status === "ready");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "text-" + ctx_r3.getTimerColor(item_r11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.getElapsedTimeCached(item_r11), "/", item_r11.preparation_time || 15, "min ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.notes);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r11.status);
    \u0275\u0275advance();
    \u0275\u0275property("value", item_r11.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusText(item_r11.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getAllowedStatusesForItem(item_r11));
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_div_25_div_1_div_15_div_3_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const comanda_r8 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.markAllItemsInComandaAsReady(comanda_r8));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Piatti Pronti ");
    \u0275\u0275elementEnd();
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275template(1, KitchenDisplay_div_85_div_25_div_1_div_15_div_3_button_1_Template, 4, 0, "button", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", items_r16.length > 1);
  }
}
function KitchenDisplay_div_85_div_25_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 64);
    \u0275\u0275template(2, KitchenDisplay_div_85_div_25_div_1_div_15_div_2_Template, 32, 16, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, KitchenDisplay_div_85_div_25_div_1_div_15_div_3_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", comanda_r8.items)("ngForTrackBy", ctx_r3.trackByItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comanda_r8.items);
  }
}
function KitchenDisplay_div_85_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_div_25_div_1_Template_div_click_1_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const group_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleComandaExpansion(group_r3.order_header_id, i_r6));
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "div", 55)(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275template(9, KitchenDisplay_div_85_div_25_div_1_select_9_Template, 11, 1, "select", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 38)(11, "span", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 59);
    \u0275\u0275element(14, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, KitchenDisplay_div_85_div_25_div_1_div_15_Template, 4, 3, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r8 = ctx.$implicit;
    const i_r6 = ctx.index;
    const group_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isComandaExpanded(group_r3.order_header_id, i_r6) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Comanda ", i_r6 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isComandaEditableByKitchen(comanda_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", comanda_r8.completed_items, "/", comanda_r8.total_items, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", comanda_r8.progress_percentage, "%")("background", ctx_r3.getComandaStatusColor(comanda_r8.status) === "warning" ? "var(--warning)" : ctx_r3.getComandaStatusColor(comanda_r8.status) === "primary" ? "var(--primary)" : ctx_r3.getComandaStatusColor(comanda_r8.status) === "success" ? "var(--success)" : "var(--secondary)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isComandaExpanded(group_r3.order_header_id, i_r6));
  }
}
function KitchenDisplay_div_85_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, KitchenDisplay_div_85_div_25_div_1_Template, 16, 10, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r3.comande)("ngForTrackBy", ctx_r3.trackByComanda);
  }
}
function KitchenDisplay_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275listener("click", function KitchenDisplay_div_85_Template_div_click_1_listener() {
      const group_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroupExpansion(group_r3.order_header_id));
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "div", 35)(4, "span", 36);
    \u0275\u0275text(5, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38)(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 41)(14, "span", 42)(15, "span", 14);
    \u0275\u0275text(16, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 42)(19, "span", 14);
    \u0275\u0275text(20, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, KitchenDisplay_div_85_span_22_Template, 2, 1, "span", 43)(23, KitchenDisplay_div_85_span_23_Template, 2, 1, "span", 44)(24, KitchenDisplay_div_85_span_24_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, KitchenDisplay_div_85_div_25_Template, 2, 2, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Tavolo ", group_r3.table_number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getGroupStatusColor(group_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getGroupStatusText(group_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isGroupExpanded(group_r3.order_header_id) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatTime(group_r3.created_at), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", group_r3.comande.length, " ", group_r3.comande.length === 1 ? "comanda" : "comande", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getGroupStatusSummary(group_r3).waiting > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getGroupStatusSummary(group_r3).preparing > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getGroupStatusSummary(group_r3).ready > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isGroupExpanded(group_r3.order_header_id));
  }
}
function KitchenDisplay_div_87_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedRecipeItem.preparation_time, " min ");
  }
}
function KitchenDisplay_div_87_div_12_div_9_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ingredient_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20AC", \u0275\u0275pipeBind2(2, 1, ingredient_r18.cost, "1.2-2"), " ");
  }
}
function KitchenDisplay_div_87_div_12_div_9_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "label", 13)(2, "span", 14);
    \u0275\u0275text(3, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Note di preparazione: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ingredient_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ingredient_r18.notes);
  }
}
function KitchenDisplay_div_87_div_12_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 109)(2, "div")(3, "strong", 110);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, KitchenDisplay_div_87_div_12_div_9_div_1_div_7_Template, 3, 4, "div", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, KitchenDisplay_div_87_div_12_div_9_div_1_div_8_Template, 7, 1, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ingredient_r18 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ingredient_r18.name || "Ingrediente");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ingredient_r18.quantity || 0, " ", ingredient_r18.unit || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ingredient_r18.cost > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ingredient_r18.notes);
  }
}
function KitchenDisplay_div_87_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, KitchenDisplay_div_87_div_12_div_9_div_1_Template, 9, 5, "div", 108);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getRecipeDetails().ingredients);
  }
}
function KitchenDisplay_div_87_div_12_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "span", 116);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4, "Nessun ingrediente definito per questo piatto");
    \u0275\u0275elementEnd()();
  }
}
function KitchenDisplay_div_87_div_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 14);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 7);
    \u0275\u0275text(5, "Istruzioni di Preparazione");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.getRecipeDetails().instructions);
  }
}
function KitchenDisplay_div_87_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "span", 116);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4, "Nessuna istruzione di preparazione disponibile");
    \u0275\u0275elementEnd()();
  }
}
function KitchenDisplay_div_87_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 103)(2, "div", 5)(3, "span", 14);
    \u0275\u0275text(4, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 7);
    \u0275\u0275text(6, "Ingredienti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 104);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, KitchenDisplay_div_87_div_12_div_9_Template, 2, 1, "div", 105)(10, KitchenDisplay_div_87_div_12_ng_template_10_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, KitchenDisplay_div_87_div_12_div_12_Template, 8, 1, "div", 106)(13, KitchenDisplay_div_87_div_12_div_13_Template, 5, 0, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noIngredients_r19 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.getRecipeDetails().ingredients.length || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getRecipeDetails().ingredients && ctx_r3.getRecipeDetails().ingredients.length > 0)("ngIfElse", noIngredients_r19);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.getRecipeDetails().instructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getRecipeDetails().instructions);
  }
}
function KitchenDisplay_div_87_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "span", 116);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4, "Nessuna ricetta disponibile per questo piatto");
    \u0275\u0275elementEnd()();
  }
}
function KitchenDisplay_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function KitchenDisplay_div_87_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeRecipeModal());
    });
    \u0275\u0275elementStart(1, "div", 94);
    \u0275\u0275listener("click", function KitchenDisplay_div_87_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 95)(3, "h2", 96)(4, "span", 14);
    \u0275\u0275text(5, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275template(7, KitchenDisplay_div_87_span_7_Template, 2, 1, "span", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 98);
    \u0275\u0275listener("click", function KitchenDisplay_div_87_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeRecipeModal());
    });
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 99);
    \u0275\u0275template(12, KitchenDisplay_div_87_div_12_Template, 14, 5, "div", 100)(13, KitchenDisplay_div_87_ng_template_13_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 101)(16, "button", 24);
    \u0275\u0275listener("click", function KitchenDisplay_div_87_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeRecipeModal());
    });
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Chiudi ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const noRecipe_r20 = \u0275\u0275reference(14);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Ricetta - ", ctx_r3.selectedRecipeItem == null ? null : ctx_r3.selectedRecipeItem.dish_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedRecipeItem);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.selectedRecipeItem)("ngIfElse", noRecipe_r20);
  }
}
var KitchenDisplay = class _KitchenDisplay {
  kitchenService = inject(KitchenService);
  orderStatusService = inject(OrderStateService);
  recipeService = inject(RecipeService);
  cdr = inject(ChangeDetectorRef);
  dishService = inject(DishService);
  // Cache
  dishNameCache = /* @__PURE__ */ new Map();
  allowedStatusesCache = /* @__PURE__ */ new Map();
  elapsedTimeCache = /* @__PURE__ */ new Map();
  lastCacheUpdate = /* @__PURE__ */ new Map();
  CACHE_TTL = 3e4;
  // Proprietà
  floorPlans = [];
  // 👈 Mantieni questa
  selectedFloorPlanId = "all";
  // 👈 Mantieni questa
  recipeDetails$;
  statusFilter = "all";
  searchTerm = "";
  filteredGroups$ = this.kitchenService.filteredGroups$;
  stats$ = this.kitchenService.stats$;
  showRecipeModal = false;
  selectedRecipeItem = null;
  expandedGroups = {};
  expandedComande = {};
  subscriptions = new Subscription();
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("\u{1F3C1} KitchenDisplay initialized");
      yield this.loadFloorPlans();
      yield this.forceRefresh();
      this.filteredGroups$.pipe(take(1)).subscribe((groups) => {
        groups.forEach((group) => {
          this.expandedGroups[group.order_header_id] = true;
          group.comande?.forEach((comanda, index) => {
            const key = `${group.order_header_id}-${index}`;
            this.expandedComande[key] = true;
          });
        });
      });
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadFloorPlans() {
    return __async(this, null, function* () {
      try {
        this.floorPlans = yield this.kitchenService.loadFloorPlans();
      } catch (error) {
        console.error("Errore caricamento mappe:", error);
      }
    });
  }
  // 👇 METODO PER CAMBIARE FILTRO MAPPA
  onFloorPlanChange() {
    this.kitchenService.setFloorPlanFilter(this.selectedFloorPlanId);
  }
  // === METODI STATO PIATTI ===
  startItemPreparation(item) {
    return __async(this, null, function* () {
      const success = yield this.orderStatusService.updateItemStatus(item.id, "preparing");
      if (success)
        yield this.forceRefresh();
      else
        alert("Errore");
    });
  }
  markItemAsReady(item) {
    return __async(this, null, function* () {
      const success = yield this.orderStatusService.updateItemStatus(item.id, "ready");
      if (success)
        yield this.forceRefresh();
      else
        alert("Errore");
    });
  }
  markItemAsOutOfStock(item) {
    return __async(this, null, function* () {
      const success = yield this.orderStatusService.updateItemStatus(item.id, "out_of_stock");
      if (success)
        yield this.forceRefresh();
      else
        alert("Errore");
    });
  }
  updateItemStatus(item, event, comandaId) {
    return __async(this, null, function* () {
      const selectElement = event.target;
      const newStatus = selectElement.value;
      if (this.orderStatusService.canTransitionItem(item.status, newStatus, "kitchen")) {
        const success = yield this.orderStatusService.updateItemStatus(item.id, newStatus, comandaId);
        if (success) {
          console.log(`\u2705 Item ${item.id} aggiornato`);
          yield this.forceRefresh();
        } else {
          console.error(`\u274C Errore aggiornamento item ${item.id}`);
          selectElement.value = item.status;
        }
      } else {
        console.warn(`\u26D4 Transizione non consentita: ${item.status} \u2192 ${newStatus}`);
        selectElement.value = item.status;
        alert("Transizione non consentita!");
      }
    });
  }
  // === METODI STATO COMANDA ===
  updateComandaStatus(comanda, event) {
    return __async(this, null, function* () {
      const selectElement = event.target;
      const newStatus = selectElement.value;
      const success = yield this.orderStatusService.updateComandaStatus(comanda.id, newStatus);
      if (success)
        yield this.forceRefresh();
      else
        selectElement.value = comanda.status;
    });
  }
  markAllItemsInComandaAsReady(comanda) {
    return __async(this, null, function* () {
      const success = yield this.kitchenService.markAllItemsInComandaAsReady(comanda);
      if (success)
        yield this.forceRefresh();
      else
        alert("Errore");
    });
  }
  // === METODI UI ===
  toggleGroupExpansion(groupId) {
    this.expandedGroups[groupId] = !this.expandedGroups[groupId];
  }
  toggleComandaExpansion(groupId, comandaNumber) {
    const key = `${groupId}-${comandaNumber}`;
    this.expandedComande[key] = !this.expandedComande[key];
  }
  isGroupExpanded(groupId) {
    return this.expandedGroups[groupId] !== false;
  }
  isComandaExpanded(groupId, comandaNumber) {
    const key = `${groupId}-${comandaNumber}`;
    return this.expandedComande[key] !== false;
  }
  // === FILTRI ===
  onStatusFilterChange(filter) {
    this.statusFilter = filter;
    this.kitchenService.setStatusFilter(filter);
  }
  onSearchChange() {
    this.kitchenService.setSearchTerm(this.searchTerm);
  }
  // === METODI TESTI E COLORI ===
  getStatusText(status) {
    const statusMap = {
      "ordered": "Ordinato",
      "waiting": "In Attesa",
      "preparing": "In Preparazione",
      "ready": "Pronto",
      "served": "Servito",
      "cancelled": "Cancellato",
      "out_of_stock": "Esaurito"
    };
    return statusMap[status] || status;
  }
  getStatusShortText(status) {
    const statusMap = {
      "ordered": "Ordinato",
      "waiting": "Attesa",
      "preparing": "Prep.",
      "ready": "Pronto",
      "served": "Servito",
      "out_of_stock": "Esaurito"
    };
    return statusMap[status] || status;
  }
  getStatusColor(status) {
    const colorMap = {
      "waiting": "warning",
      "preparing": "primary",
      "ready": "success",
      "served": "secondary",
      "ordered": "info",
      "cancelled": "danger",
      "out_of_stock": "dark"
    };
    return colorMap[status] || "secondary";
  }
  getGroupStatusColor(group) {
    if (this.getGroupStatusSummary(group).waiting > 0)
      return "warning";
    if (this.getGroupStatusSummary(group).preparing > 0)
      return "primary";
    if (this.getGroupStatusSummary(group).ready > 0)
      return "success";
    return "secondary";
  }
  getGroupStatusText(group) {
    const summary = this.getGroupStatusSummary(group);
    if (summary.waiting > 0)
      return "In Attesa";
    if (summary.preparing > 0)
      return "In Preparazione";
    if (summary.ready > 0)
      return "Pronto";
    return "Servito";
  }
  getComandaStatusColor(status) {
    const colorMap = {
      "ordered": "info",
      "waiting": "warning",
      "preparing": "primary",
      "ready": "success",
      "served": "secondary",
      "cancelled": "danger"
    };
    return colorMap[status] || "secondary";
  }
  // === TEMPO E TIMER ===
  formatTime(timeString) {
    return this.kitchenService.formatTime(timeString);
  }
  getElapsedTimeCached(item) {
    const now = Date.now();
    const cacheKey = item.id;
    const lastUpdate = this.lastCacheUpdate.get(cacheKey) || 0;
    const cachedValue = this.elapsedTimeCache.get(cacheKey);
    if (cachedValue !== void 0 && now - lastUpdate < this.CACHE_TTL) {
      return cachedValue;
    }
    const elapsed = this.kitchenService.calculateElapsedTime(item);
    this.elapsedTimeCache.set(cacheKey, elapsed);
    this.lastCacheUpdate.set(cacheKey, now);
    return elapsed;
  }
  getTimerColor(item) {
    const elapsed = this.getElapsedTimeCached(item);
    const totalTime = item.preparation_time || 15;
    if (totalTime === 0)
      return "secondary";
    const percentage = elapsed / totalTime * 100;
    if (percentage < 50)
      return "success";
    if (percentage < 75)
      return "warning";
    return "danger";
  }
  getRemainingTime(item) {
    const elapsed = this.getElapsedTimeCached(item);
    const totalTime = item.preparation_time || 15;
    return Math.max(0, totalTime - elapsed);
  }
  // === GRUPPI E COMANDE ===
  hasItemsInGroup(group) {
    return group.comande.some((comanda) => comanda.items && comanda.items.length > 0);
  }
  getGroupStatusSummary(group) {
    if (group.status_summary)
      return group.status_summary;
    const summary = { waiting: 0, preparing: 0, ready: 0, served: 0, ordered: 0, cancelled: 0, out_of_stock: 0 };
    group.comande?.forEach((comanda) => {
      comanda.items?.forEach((item) => {
        const status = item.status || "ordered";
        if (summary.hasOwnProperty(status))
          summary[status]++;
      });
    });
    return summary;
  }
  getComandaProgress(comanda) {
    return {
      completed: comanda.completed_items || 0,
      total: comanda.total_items || 0,
      percentage: comanda.progress_percentage || 0
    };
  }
  // === RICETTE ===
  getRecipeDetails() {
    if (!this.selectedRecipeItem) {
      return { ingredients: [], instructions: "Nessun piatto selezionato", preparationTime: 15 };
    }
    return this.recipeService.getRecipeDetails(this.selectedRecipeItem.dish_id);
  }
  openRecipeModal(item) {
    this.selectedRecipeItem = item;
    this.showRecipeModal = true;
    this.recipeDetails$ = this.recipeService.getRecipeDetails$(item.dish_id);
  }
  closeRecipeModal() {
    this.selectedRecipeItem = null;
    this.showRecipeModal = false;
  }
  // === UTILITY ===
  getDishDisplayName(item) {
    const dish = this.dishService.getDishById(item.dish_id);
    if (dish && dish.name && dish.name !== "Piatto") {
      return dish.name;
    }
    if (item.dish_name && item.dish_name !== "Piatto") {
      return item.dish_name;
    }
    return `Piatto #${item.dish_id?.substring(0, 8) || "???"}`;
  }
  getAllowedStatusesForItem(item) {
    const cacheKey = `${item.status}_kitchen`;
    if (this.allowedStatusesCache.has(cacheKey))
      return this.allowedStatusesCache.get(cacheKey);
    const allStatuses = ["waiting", "preparing", "ready", "out_of_stock"];
    const allowed = allStatuses.filter((status) => this.orderStatusService.canTransitionItem(item.status, status, "kitchen"));
    this.allowedStatusesCache.set(cacheKey, allowed);
    return allowed;
  }
  isComandaEditableByKitchen(comanda) {
    return ["ordered", "waiting", "preparing", "ready"].includes(comanda.status);
  }
  canTransitionTo(item, targetStatus) {
    return this.orderStatusService.canTransitionItem(item.status, targetStatus, "kitchen");
  }
  forceOrderedToWaiting(item) {
    return __async(this, null, function* () {
      const success = yield this.orderStatusService.updateItemStatus(item.id, "waiting");
      if (success)
        yield this.forceRefresh();
      else
        alert("Impossibile forzare lo stato");
    });
  }
  forceRefresh() {
    return __async(this, null, function* () {
      yield this.kitchenService.forceRefresh();
    });
  }
  updateItemStatusQuick(item, status) {
    return __async(this, null, function* () {
      try {
        const success = yield this.orderStatusService.updateItemStatus(item.id, status);
        if (success) {
          yield this.forceRefresh();
        } else {
          alert("Errore nel cambio stato");
        }
      } catch (error) {
        console.error("Errore:", error);
        alert("Errore nel cambio stato");
      }
    });
  }
  trackByGroup(index, group) {
    return group?.order_header_id ?? index;
  }
  trackByComanda(index, comanda) {
    return comanda?.id ?? comanda?.comanda_number ?? index;
  }
  trackByItem(index, item) {
    return item?.id ?? index;
  }
  static \u0275fac = function KitchenDisplay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KitchenDisplay)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KitchenDisplay, selectors: [["app-kitchen-display"]], decls: 88, vars: 24, consts: [["noRecipe", ""], ["noIngredients", ""], [1, "page-container"], ["data-tutorial", "kitchen-cards", 1, "grid-cards", "p-sm"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary", "text-md"], [1, "card-title"], [1, "text-md", "font-bold", "text-primary", "justify-center", "flex"], [1, "text-muted", "card-footer"], ["data-tutorial", "kitchen-filters", 1, "form-card", "mt-lg"], [1, "form-row"], [1, "form-group"], [1, "standard-label"], [1, "material-icons"], [3, "change", "value"], ["value", "all"], ["value", "waiting"], ["value", "preparing"], ["value", "ready"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ordine, tavolo, piatto...", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "p-sm"], [1, "promethea-button", 3, "click"], ["data-tutorial", "kitchen-orders", 1, "mt-lg"], ["class", "empty-state", 4, "ngIf"], ["class", "form-card border mt-lg", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "empty-state"], [1, "text-muted"], [1, "form-card", "border", "mt-lg"], [1, "flex", "flex-col", "gap-sm", 2, "cursor", "pointer", 3, "click"], [1, "flex", "justify-between", "items-center"], [1, "flex", "gap-sm", "items-center"], [1, "material-icons", "text-lg"], [1, "text-md", "m-0", "flex", "items-center", "gap-sm"], [1, "flex", "items-center", "p-sm", "gap-sm"], [1, "chip"], [1, "material-icons", "text-md"], [1, "flex", "flex-wrap", "gap-sm", "mt-sm"], [1, "chip", "bg-smoke"], ["class", "chip warning", 4, "ngIf"], ["class", "chip primary", 4, "ngIf"], ["class", "chip success", 4, "ngIf"], ["class", "mt-sm", 4, "ngIf"], [1, "chip", "warning"], [1, "chip", "primary"], [1, "chip", "success"], [1, "mt-sm"], ["class", "mb-lg", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mb-lg"], [1, "flex", "flex-col", "p-sm", "rounded", "bg-smoke", "cursor-pointer", 3, "click"], [1, "flex", "justify-between"], [1, "flex", "gap-sm"], [1, "font-semibold", "text-md"], ["class", "text-mini", "style", "min-width: 130px;", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], [1, "text-sm", "font-semibold"], [2, "width", "100px", "height", "8px", "background", "var(--smoke-1)", "border-radius", "4px", "overflow", "hidden"], [2, "height", "100%", "transition", "width 0.3s ease"], [1, "text-mini", 2, "min-width", "130px", 3, "ngModelChange", "change", "ngModel"], ["value", "ordered"], ["value", "cancelled"], [1, "grid-cards"], ["class", "card", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "flex justify-end mt-lg", 4, "ngIf"], [1, "card-body"], [1, "flex", "justify-between", "flex-wrap"], [1, "flex", "gap-sm", "mb-sm"], [1, "font-bold", "text-primary"], [1, "font-semibold"], [1, "flex", "flex-wrap", "gap-sm"], ["class", "promethea-button ghost", 3, "click", 4, "ngIf"], ["class", "promethea-button", 3, "click", 4, "ngIf"], ["class", "flex items-center gap-sm", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "flex-wrap"], [1, "text-mini", 3, "ngClass"], ["class", "mt-sm p-xs rounded bg-smoke", 4, "ngIf"], [1, "flex", "flex-col", "gap-md", "mt-sm", 2, "width", "100%"], [1, "flex", "justify-between", "gap-sm", 2, "width", "100%"], [1, "text-mini", 2, "min-width", "140px", 3, "ngModelChange", "change", "ngModel"], ["selected", "", "disabled", "", 3, "value"], [4, "ngFor", "ngForOf"], ["title", "Segnala esaurito", 1, "icon-button", 3, "click"], ["title", "Vedi ricetta", 1, "icon-button", 3, "click"], [1, "promethea-button", "ghost", 3, "click"], [1, "flex", "items-center", "gap-sm"], [1, "material-icons", "text-success"], [1, "mt-sm", "p-xs", "rounded", "bg-smoke"], [1, "text-muted", "text-mini"], [3, "value", 4, "ngIf"], [1, "flex", "justify-end", "mt-lg"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "section-title", "m-0"], ["class", "chip active ml-md", 4, "ngIf"], ["type", "button", 1, "icon-button", 3, "click"], [1, "modal-content"], [4, "ngIf", "ngIfElse"], [1, "modal-footer", "w-100"], [1, "chip", "active", "ml-md"], [1, "card", "mb-lg"], [1, "chip", "active"], ["class", "grid-cards", 4, "ngIf", "ngIfElse"], ["class", "card", 4, "ngIf"], ["class", "card text-center p-md", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-start", "mb-sm"], [1, "text-md"], [1, "text-muted", "text-sm", "mt-1"], ["class", "font-semibold", 4, "ngIf"], ["class", "mt-lg", 4, "ngIf"], [1, "mt-lg"], [1, "text-center", "p-md"], [1, "material-icons", "text-muted"], [1, "card", "text-center", "p-md"], [1, "card", "text-center", "p-xl"]], template: function KitchenDisplay_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "span", 6);
      \u0275\u0275text(5, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3", 7);
      \u0275\u0275text(7, "In Attesa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 9);
      \u0275\u0275text(12, "Piatti in attesa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 4)(14, "div", 5)(15, "span", 6);
      \u0275\u0275text(16, "kitchen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h3", 7);
      \u0275\u0275text(18, "In Preparazione");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 9);
      \u0275\u0275text(23, "Piatti in preparazione");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 4)(25, "div", 5)(26, "span", 6);
      \u0275\u0275text(27, "done");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3", 7);
      \u0275\u0275text(29, "Pronti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 8);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 9);
      \u0275\u0275text(34, "Piatti pronti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 4)(36, "div", 5)(37, "span", 6);
      \u0275\u0275text(38, "list_alt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h3", 7);
      \u0275\u0275text(40, "Ordini Attivi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 8);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 9);
      \u0275\u0275text(45, "Gruppi attivi");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 10)(47, "div", 11)(48, "div", 12)(49, "label", 13)(50, "span", 14);
      \u0275\u0275text(51, "filter_list");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Stato: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "select", 15);
      \u0275\u0275listener("change", function KitchenDisplay_Template_select_change_53_listener($event) {
        return ctx.onStatusFilterChange($event.target.value);
      });
      \u0275\u0275elementStart(54, "option", 16);
      \u0275\u0275text(55, "Tutti gli ordini");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 17);
      \u0275\u0275text(57, "In Attesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 18);
      \u0275\u0275text(59, "In Preparazione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 19);
      \u0275\u0275text(61, "Pronti");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 12)(63, "label", 13)(64, "span", 14);
      \u0275\u0275text(65, "map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " Mappa: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function KitchenDisplay_Template_select_ngModelChange_67_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedFloorPlanId, $event) || (ctx.selectedFloorPlanId = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function KitchenDisplay_Template_select_ngModelChange_67_listener() {
        return ctx.onFloorPlanChange();
      });
      \u0275\u0275elementStart(68, "option", 16);
      \u0275\u0275text(69, "Tutte le mappe");
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, KitchenDisplay_option_70_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 11)(72, "label", 13)(73, "span", 14);
      \u0275\u0275text(74, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, " Cerca: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function KitchenDisplay_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function KitchenDisplay_Template_input_ngModelChange_76_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 23)(78, "button", 24);
      \u0275\u0275listener("click", function KitchenDisplay_Template_button_click_78_listener() {
        return ctx.forceRefresh();
      });
      \u0275\u0275elementStart(79, "span", 14);
      \u0275\u0275text(80, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(81, " Aggiorna ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 25);
      \u0275\u0275template(83, KitchenDisplay_div_83_Template, 7, 0, "div", 26);
      \u0275\u0275pipe(84, "async");
      \u0275\u0275template(85, KitchenDisplay_div_85_Template, 26, 12, "div", 27);
      \u0275\u0275pipe(86, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(87, KitchenDisplay_div_87_Template, 20, 4, "div", 28);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_8_0;
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(((tmp_0_0 = \u0275\u0275pipeBind1(10, 12, ctx.stats$)) == null ? null : tmp_0_0.waiting) || 0);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(((tmp_1_0 = \u0275\u0275pipeBind1(21, 14, ctx.stats$)) == null ? null : tmp_1_0.preparing) || 0);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(((tmp_2_0 = \u0275\u0275pipeBind1(32, 16, ctx.stats$)) == null ? null : tmp_2_0.ready) || 0);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(((tmp_3_0 = \u0275\u0275pipeBind1(43, 18, ctx.stats$)) == null ? null : tmp_3_0.totalGroups) || 0);
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.statusFilter);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedFloorPlanId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.floorPlans);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ((tmp_8_0 = \u0275\u0275pipeBind1(84, 20, ctx.filteredGroups$)) == null ? null : tmp_8_0.length) === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(86, 22, ctx.filteredGroups$))("ngForTrackBy", ctx.trackByGroup);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showRecipeModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, AsyncPipe, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LucideAngularModule], styles: ["\n\n.order-card[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px var(--shadow-2);\n}\n.order-progress[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.progress-fill.waiting-bg[_ngcontent-%COMP%] {\n  background: var(--secondary);\n}\n.progress-fill.preparing-bg[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.progress-fill.ready-bg[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  line-height: 1.2;\n  font-weight: 700;\n}\n.item-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: var(--gap-sm);\n  justify-content: space-between;\n}\n.item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  min-width: 200px;\n}\n.chip.waiting[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--secondary) 20%, transparent);\n  color: var(--secondary);\n}\n.chip.preparing[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 20%, transparent);\n  color: var(--primary);\n}\n.chip.ready[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.chip.served[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n  color: #6b7280;\n}\n.chip.time-normal[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n}\n.chip.time-warning[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n  color: #f59e0b;\n}\n.chip.time-critical[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n  color: #ef4444;\n}\n.promethea-button.small[_ngcontent-%COMP%] {\n  padding: var(--gap-sm) var(--gap-md);\n  font-size: 0.875rem;\n  min-height: 36px;\n}\n@media (max-width: 768px) {\n  .item-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    min-width: auto;\n  }\n  .item-actions[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .order-progress[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n.rotate-90[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transition: transform 0.3s ease;\n}\n.order-progress[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.3s ease;\n}\n.warning-bg[_ngcontent-%COMP%] {\n  background: #ff9800;\n}\n.primary-bg[_ngcontent-%COMP%] {\n  background: #2196f3;\n}\n.success-bg[_ngcontent-%COMP%] {\n  background: #4caf50;\n}\n.secondary-bg[_ngcontent-%COMP%] {\n  background: #9c27b0;\n}\n.card-body[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=kitchen-display.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KitchenDisplay, [{
    type: Component,
    args: [{ selector: "app-kitchen-display", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<!-- kitchen-display.html - VERSIONE OTTIMIZZATA -->\r
<div class="page-container">\r
\r
  <!-- Statistiche -->\r
  <div class="grid-cards p-sm" data-tutorial="kitchen-cards">\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">schedule</span>\r
        <h3 class="card-title">In Attesa</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ (stats$ | async)?.waiting || 0 }}</div>\r
      <span class="text-muted card-footer">Piatti in attesa</span>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">kitchen</span>\r
        <h3 class="card-title">In Preparazione</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ (stats$ | async)?.preparing || 0 }}</div>\r
      <span class="text-muted card-footer">Piatti in preparazione</span>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">done</span>\r
        <h3 class="card-title">Pronti</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ (stats$ | async)?.ready || 0 }}</div>\r
      <span class="text-muted card-footer">Piatti pronti</span>\r
    </div>\r
\r
    <div class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary text-md">list_alt</span>\r
        <h3 class="card-title">Ordini Attivi</h3>\r
      </div>\r
      <div class="text-md font-bold text-primary justify-center flex">{{ (stats$ | async)?.totalGroups || 0 }}</div>\r
      <span class="text-muted card-footer">Gruppi attivi</span>\r
    </div>\r
  </div>\r
\r
  <!-- Controlli Filtri -->\r
  <div class="form-card mt-lg" data-tutorial="kitchen-filters">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">filter_list</span>\r
            Stato:\r
          </label>\r
          <select [value]="statusFilter" (change)="onStatusFilterChange($any($event).target.value)">\r
            <option value="all">Tutti gli ordini</option>\r
            <option value="waiting">In Attesa</option>\r
            <option value="preparing">In Preparazione</option>\r
            <option value="ready">Pronti</option>\r
          </select>\r
        </div>\r
        <!-- Filtro Mappa -->\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">map</span>\r
            Mappa:\r
          </label>\r
          <select [(ngModel)]="selectedFloorPlanId" (ngModelChange)="onFloorPlanChange()">\r
            <option value="all">Tutte le mappe</option>\r
            <option *ngFor="let floorPlan of floorPlans" [value]="floorPlan.id">\r
              {{ floorPlan.name }}\r
            </option>\r
          </select>\r
        </div>\r
      </div>\r
      <!-- Filtro Mappa -->\r
      <div class="form-row">\r
        <label class="standard-label">\r
          <span class="material-icons">search</span>\r
          Cerca:\r
        </label>\r
        <input type="text" [(ngModel)]="searchTerm" (ngModelChange)="onSearchChange()"\r
          placeholder="Ordine, tavolo, piatto...">\r
      </div>\r
  </div>\r
  <div class="modal-footer p-sm">\r
    <button class="promethea-button" (click)="forceRefresh()">\r
      <span class="material-icons">refresh</span>\r
      Aggiorna\r
    </button>\r
  </div>\r
\r
  <!-- Lista Gruppi di Ordini -->\r
  <div class="mt-lg" data-tutorial="kitchen-orders">\r
    <div *ngIf="(filteredGroups$ | async)?.length === 0" class="empty-state">\r
      <span class="material-icons">restaurant_menu</span>\r
      <h3>Nessun ordine attivo</h3>\r
      <p class="text-muted">Tutti gli ordini sono stati completati</p>\r
    </div>\r
\r
    <!-- Gruppi di Ordini (Order Headers) -->\r
    <div *ngFor="let group of filteredGroups$ | async; trackBy: trackByGroup" class="form-card border mt-lg">\r
\r
      <!-- Header Gruppo con Tavolo come titolo -->\r
      <div class="flex flex-col gap-sm" style="cursor: pointer;" (click)="toggleGroupExpansion(group.order_header_id)">\r
        <div class="flex justify-between items-center">\r
          <div class="flex gap-sm items-center">\r
            <span class="material-icons text-lg">table_restaurant</span>\r
            <h2 class="text-md m-0 flex items-center gap-sm">\r
              Tavolo {{ group.table_number }}\r
            </h2>\r
          </div>\r
          <div class="flex items-center p-sm gap-sm">\r
            <span class="chip" [class]="getGroupStatusColor(group)">\r
              {{ getGroupStatusText(group) }}\r
            </span>\r
            <span class="material-icons text-md">\r
              {{ isGroupExpanded(group.order_header_id) ? 'expand_less' : 'expand_more' }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Info rapide gruppo -->\r
        <div class="flex flex-wrap gap-sm mt-sm">\r
          <span class="chip bg-smoke">\r
            <span class="material-icons">schedule</span>\r
            {{ formatTime(group.created_at) }}\r
          </span>\r
          <span class="chip bg-smoke">\r
          <span class="material-icons">list_alt</span>\r
          {{ group.comande.length }} {{ group.comande.length === 1 ? 'comanda' : 'comande' }}\r
          </span>\r
          <span *ngIf="getGroupStatusSummary(group).waiting > 0" class="chip warning">\r
            \u23F3 {{ getGroupStatusSummary(group).waiting }} in attesa\r
          </span>\r
          <span *ngIf="getGroupStatusSummary(group).preparing > 0" class="chip primary">\r
            \u{1F468}\u200D\u{1F373} {{ getGroupStatusSummary(group).preparing }} in preparazione\r
          </span>\r
          <span *ngIf="getGroupStatusSummary(group).ready > 0" class="chip success">\r
            \u2705 {{ getGroupStatusSummary(group).ready }} pronto\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- Contenuto Gruppo (espanso) -->\r
      <div *ngIf="isGroupExpanded(group.order_header_id)" class="mt-sm">\r
\r
        <!-- Comande nel gruppo -->\r
        <div *ngFor="let comanda of group.comande; let i = index; trackBy: trackByComanda" class="mb-lg">\r
\r
          <!-- Header Comanda compatta -->\r
          <div class="flex flex-col p-sm rounded bg-smoke cursor-pointer"\r
            (click)="toggleComandaExpansion(group.order_header_id, i)">\r
            <div class="flex justify-between">\r
            <div class="flex gap-sm">\r
              <span class="material-icons">\r
                {{ isComandaExpanded(group.order_header_id, i) ? 'expand_less' : 'expand_more' }}\r
              </span>\r
              <span class="font-semibold text-md">Comanda {{ i + 1 }}</span>\r
            </div>\r
            <!-- SELECT PER CAMBIARE STATO COMANDA -->\r
            <div>\r
<select \r
  [(ngModel)]="comanda.status" \r
  (change)="updateComandaStatus(comanda, $event)" \r
  class="text-mini"\r
  style="min-width: 130px;" \r
  *ngIf="isComandaEditableByKitchen(comanda)">\r
  \r
  <option value="ordered">Ordinato</option> <option value="waiting">In Attesa</option>\r
  <option value="preparing">In Preparazione</option>\r
  <option value="ready">Pronto</option>\r
  <option value="cancelled">Cancellato</option>\r
</select>\r
            </div>\r
            </div>\r
\r
\r
            <!-- Progress Bar Comanda -->\r
            <div class="flex items-center p-sm gap-sm">\r
              <span class="text-sm font-semibold">{{ comanda.completed_items }}/{{ comanda.total_items }}</span>\r
              <div style="width: 100px; height: 8px; background: var(--smoke-1); border-radius: 4px; overflow: hidden;">\r
                <div [style.width.%]="comanda.progress_percentage"\r
                  [style.background]="getComandaStatusColor(comanda.status) === 'warning' ? 'var(--warning)' : \r
                                        getComandaStatusColor(comanda.status) === 'primary' ? 'var(--primary)' : \r
                                        getComandaStatusColor(comanda.status) === 'success' ? 'var(--success)' : 'var(--secondary)'"\r
                  style="height: 100%; transition: width 0.3s ease;">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Contenuto Comanda (espanso) -->\r
          <div *ngIf="isComandaExpanded(group.order_header_id, i)" class="mt-sm">\r
\r
            <!-- Grid Piatti ottimizzato -->\r
            <div class="grid-cards">\r
              <div *ngFor="let item of comanda.items; trackBy: trackByItem" class="card"\r
                [class]="'status-' + item.status">\r
\r
                <div class="card-body">\r
                  <!-- Header Piatto ultra compatto -->\r
                  <div class="flex justify-between flex-wrap">\r
                    <div class="flex gap-sm mb-sm">\r
                      <span class="font-bold text-primary">{{ item.quantity }}\xD7</span>\r
                      <span class="font-semibold">{{ getDishDisplayName(item) }}</span>\r
                    </div>\r
                    <!-- Bottoni azione principali -->\r
                    <div class="flex flex-wrap gap-sm">\r
                      <!-- Da ordered a waiting (forzatura sala -> cucina) -->\r
                      <button *ngIf="item.status === 'ordered'" class="promethea-button ghost"\r
                        (click)="forceOrderedToWaiting(item)">\r
                        <span class="material-icons">play_arrow</span>\r
                        Prendi in carico\r
                      </button>\r
\r
                      <!-- Da waiting a preparing -->\r
                      <button *ngIf="item.status === 'waiting'" class="promethea-button"\r
                        (click)="startItemPreparation(item)">\r
                        <span class="material-icons">kitchen</span>\r
                        Inizia preparazione\r
                      </button>\r
\r
                      <!-- Da preparing a ready -->\r
                      <button *ngIf="item.status === 'preparing'" class="promethea-button"\r
                        (click)="markItemAsReady(item)">\r
                        <span class="material-icons">check_circle</span>\r
                        Segnala pronto\r
                      </button>\r
\r
                      <!-- Pronto (attesa sala) -->\r
                      <div *ngIf="item.status === 'ready'" class="flex items-center gap-sm">\r
                        <span class="material-icons text-success">done_all</span>\r
                        <span class="text-muted">Pronto - in attesa della sala</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="flex items-center gap-sm flex-wrap">\r
                    <span class="text-mini" [ngClass]="'text-' + getTimerColor(item)">\r
                      <span class="material-icons">schedule</span>\r
                      {{ getElapsedTimeCached(item) }}/{{ item.preparation_time || 15 }}min\r
                    </span>\r
                  </div>\r
\r
                  <!-- Note Piatto (solo se presente) -->\r
                  <div *ngIf="item.notes" class="mt-sm p-xs rounded bg-smoke">\r
                    <p class="text-muted text-mini">{{ item.notes }}</p>\r
                  </div>\r
\r
                  <!-- AZIONI PIATTO -->\r
                  <div class="flex flex-col gap-md mt-sm" style="width: 100%;">\r
\r
                    <!-- Cambio stato rapido e azioni speciali -->\r
                    <div class="flex justify-between gap-sm" style="width: 100%;">\r
                      <!-- Select per cambio stato -->\r
                      <select [(ngModel)]="item.status" \r
                              (change)="updateItemStatus(item, $event, comanda.id)" \r
                              class="text-mini"\r
                              style="min-width: 140px;">\r
                        \r
                        <option [value]="item.status" selected disabled>\r
                          {{ getStatusText(item.status) }}\r
                        </option>\r
\r
                        <ng-container *ngFor="let status of getAllowedStatusesForItem(item)">\r
                          <option *ngIf="status !== item.status" [value]="status">\r
                            {{ getStatusText(status) }}\r
                          </option>\r
                        </ng-container>\r
                      </select>\r
                      <!-- Azioni speciali -->\r
                      <div class="flex gap-sm">\r
                        <button class="icon-button" (click)="markItemAsOutOfStock(item)" title="Segnala esaurito">\r
                          <span class="material-icons">block</span>\r
                        </button>\r
\r
                        <button class="icon-button" (click)="openRecipeModal(item)" title="Vedi ricetta">\r
                          <span class="material-icons">menu_book</span>\r
                        </button>\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Bottone per segnare tutti i piatti della comanda come pronti -->\r
<div class="flex justify-end mt-lg" *ngIf="comanda.items; let items">\r
  \r
  <button \r
    *ngIf="items.length > 1" \r
    class="promethea-button" \r
    (click)="markAllItemsInComandaAsReady(comanda)">\r
    <span class="material-icons">done_all</span>\r
    Piatti Pronti\r
  </button>\r
  \r
</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- MODAL RICETTA -->\r
<div *ngIf="showRecipeModal" class="modal-overlay" (click)="closeRecipeModal()">\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
\r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <h2 class="section-title m-0">\r
        <span class="material-icons">menu_book</span>\r
        Ricetta - {{ selectedRecipeItem?.dish_name }}\r
        <span class="chip active ml-md" *ngIf="selectedRecipeItem">\r
          {{ selectedRecipeItem.preparation_time }} min\r
        </span>\r
      </h2>\r
      <button type="button" class="icon-button" (click)="closeRecipeModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Contenuto Modal -->\r
    <div class="modal-content">\r
      <div *ngIf="selectedRecipeItem; else noRecipe">\r
        <!-- Ingredienti -->\r
        <div class="card mb-lg">\r
          <div class="flex items-center gap-sm mb-md">\r
            <span class="material-icons">list_alt</span>\r
            <h3 class="card-title">Ingredienti</h3>\r
            <span class="chip active">{{ getRecipeDetails().ingredients.length || 0 }}</span>\r
          </div>\r
\r
          <div *ngIf="getRecipeDetails().ingredients && getRecipeDetails().ingredients.length > 0; else noIngredients"\r
            class="grid-cards">\r
            <div *ngFor="let ingredient of getRecipeDetails().ingredients" class="card">\r
              <div class="flex justify-between items-start mb-sm">\r
                <div>\r
                  <strong class="text-md">{{ ingredient.name || 'Ingrediente' }}</strong>\r
                  <div class="text-muted text-sm mt-1">\r
                    {{ ingredient.quantity || 0 }} {{ ingredient.unit || '' }}\r
                  </div>\r
                </div>\r
                <div class="font-semibold" *ngIf="ingredient.cost > 0">\r
                  \u20AC{{ ingredient.cost | number:'1.2-2' }}\r
                </div>\r
              </div>\r
\r
              <!-- Note ingrediente -->\r
              <div *ngIf="ingredient.notes" class="mt-lg">\r
                <label class="standard-label">\r
                  <span class="material-icons">notes</span>\r
                  Note di preparazione:\r
                </label>\r
                <p class="text-muted text-sm mt-1">{{ ingredient.notes }}</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <ng-template #noIngredients>\r
            <div class="text-center p-md">\r
              <span class="material-icons text-muted">info</span>\r
              <p class="text-muted">Nessun ingrediente definito per questo piatto</p>\r
            </div>\r
          </ng-template>\r
        </div>\r
\r
        <!-- Istruzioni -->\r
        <div class="card" *ngIf="getRecipeDetails().instructions">\r
          <div class="flex items-center gap-sm mb-md">\r
            <span class="material-icons">menu_book</span>\r
            <h3 class="card-title">Istruzioni di Preparazione</h3>\r
          </div>\r
          <p class="text-muted">{{ getRecipeDetails().instructions }}</p>\r
        </div>\r
\r
        <div *ngIf="!getRecipeDetails().instructions" class="card text-center p-md">\r
          <span class="material-icons text-muted">info</span>\r
          <p class="text-muted">Nessuna istruzione di preparazione disponibile</p>\r
        </div>\r
      </div>\r
\r
      <ng-template #noRecipe>\r
        <div class="card text-center p-xl">\r
          <span class="material-icons text-muted">info</span>\r
          <p class="text-muted">Nessuna ricetta disponibile per questo piatto</p>\r
        </div>\r
      </ng-template>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer w-100">\r
      <button class="promethea-button" (click)="closeRecipeModal()">\r
        <span class="material-icons">close</span>\r
        Chiudi\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/orders/kitchen-display/kitchen-display.css */\n.order-card {\n  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n}\n.order-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px var(--shadow-2);\n}\n.order-progress {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.progress-bar {\n  width: 100%;\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.progress-fill.waiting-bg {\n  background: var(--secondary);\n}\n.progress-fill.preparing-bg {\n  background: var(--primary);\n}\n.progress-fill.ready-bg {\n  background: #10b981;\n}\n.item-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.item-name {\n  font-size: var(--fs-md);\n  line-height: 1.2;\n  font-weight: 700;\n}\n.item-header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: var(--gap-sm);\n  justify-content: space-between;\n}\n.item-actions {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  min-width: 200px;\n}\n.chip.waiting {\n  background: color-mix(in srgb, var(--secondary) 20%, transparent);\n  color: var(--secondary);\n}\n.chip.preparing {\n  background: color-mix(in srgb, var(--primary) 20%, transparent);\n  color: var(--primary);\n}\n.chip.ready {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #10b981;\n}\n.chip.served {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n  color: #6b7280;\n}\n.chip.time-normal {\n  background: var(--smoke-1);\n}\n.chip.time-warning {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n  color: #f59e0b;\n}\n.chip.time-critical {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n  color: #ef4444;\n}\n.promethea-button.small {\n  padding: var(--gap-sm) var(--gap-md);\n  font-size: 0.875rem;\n  min-height: 36px;\n}\n@media (max-width: 768px) {\n  .item-actions {\n    align-items: stretch;\n    min-width: auto;\n  }\n  .item-actions .flex {\n    justify-content: space-between;\n  }\n  .order-progress {\n    min-width: auto;\n  }\n}\n.rotate-90 {\n  transform: rotate(90deg);\n  transition: transform 0.3s ease;\n}\n.order-progress {\n  min-width: 200px;\n}\n.progress-bar {\n  width: 100%;\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  transition: width 0.3s ease;\n}\n.warning-bg {\n  background: #ff9800;\n}\n.primary-bg {\n  background: #2196f3;\n}\n.success-bg {\n  background: #4caf50;\n}\n.secondary-bg {\n  background: #9c27b0;\n}\n.card-body {\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.card {\n  overflow: hidden;\n}\n/*# sourceMappingURL=kitchen-display.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KitchenDisplay, { className: "KitchenDisplay", filePath: "src/app/restaurant/orders/kitchen-display/kitchen-display.ts", lineNumber: 21 });
})();
export {
  KitchenDisplay
};
//# sourceMappingURL=chunk-G7MXSTDZ.js.map
