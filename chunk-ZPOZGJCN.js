import {
  BaseService
} from "./chunk-G2WSKIFL.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Tavoli/table.service.ts
var TableService = class _TableService extends BaseService {
  getTableName() {
    return "tables";
  }
  // Override per aggiungere filtro is_active
  loadData() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).eq("is_active", true).order("created_at", { ascending: false });
        if (error)
          throw error;
        console.log("\u{1F4CA} TableService.loadData - dati caricati:", data?.length || 0, "tavoli");
        console.log("\u{1F4CA} Dettaglio versioni:", data?.map((t) => ({ id: t.id, version: t.version, floor_plan_id: t.floor_plan_id })));
        this.dataSubject.next(data || []);
      } catch (error) {
        console.error(`Error loading ${this.getTableName()}:`, error);
        this.errorSubject.next(error.message);
        this.dataSubject.next([]);
      }
    });
  }
  // Metodi specifici per TableService
  getTables() {
    return this.dataSubject.value;
  }
  // Modifica getTablesByFloorPlan per accettare versione opzionale
  getTablesByFloorPlan(floorPlanId, version) {
    const allTablesForFloor = this.dataSubject.value.filter((t) => t.floor_plan_id === floorPlanId);
    console.log(`\u{1F50D} getTablesByFloorPlan: floorPlanId=${floorPlanId}, totale tavoli nel dataSubject per questo floorPlan: ${allTablesForFloor.length}`);
    console.log("\u{1F50D} Versioni presenti:", allTablesForFloor.map((t) => t.version));
    const filtered = allTablesForFloor.filter((table) => {
      if (version === void 0)
        return true;
      const tableVersion = Number(table.version);
      const reqVersion = Number(version);
      return tableVersion === reqVersion;
    });
    console.log(`\u{1F50D} Dopo filtro versione=${version}: ${filtered.length} tavoli`);
    return filtered;
  }
  createTable(table) {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F4DD} Creating table with shape:", table.shape);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("tables").insert(table).select().single();
        if (error) {
          console.error("\u274C Error creating table:", error);
          console.error("\u274C Error details:", error.details);
          throw error;
        }
        console.log("\u2705 Table created successfully");
        yield this.loadData();
        return data;
      } catch (error) {
        console.error("\u{1F4A5} Error in createTable:", error);
        return null;
      }
    });
  }
  updateTable(id, updates) {
    return __async(this, null, function* () {
      try {
        console.log(`\u{1F4BE} updateTable for table ${id}:`, updates);
        const currentTables = this.dataSubject.value;
        const updatedTables = currentTables.map((table) => table.id === id ? __spreadValues(__spreadValues({}, table), updates) : table);
        this.dataSubject.next(updatedTables);
        const { error } = yield this.supabaseService.getSupabaseClient().from("tables").update(updates).eq("id", id);
        if (error) {
          console.error("\u274C Database error updating table:", error);
          this.dataSubject.next(currentTables);
          throw error;
        }
        console.log(`\u2705 Table ${id} updated successfully`);
        return true;
      } catch (error) {
        console.error("\u274C Error updating table:", error);
        yield this.loadData();
        return false;
      }
    });
  }
  deleteTable(id) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from("tables").update({ is_active: false }).eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("\u274C Error deleting table:", error);
        return false;
      }
    });
  }
  checkTableOverlap(newTable, excludeTableIds) {
    const tables = this.getTablesByFloorPlan(newTable.floor_plan_id);
    const excludeIds = Array.isArray(excludeTableIds) ? excludeTableIds : excludeTableIds ? [excludeTableIds] : [];
    for (const table of tables) {
      if (excludeIds.includes(table.id))
        continue;
      const overlap = this.doTablesOverlap(newTable, table);
      if (overlap)
        return true;
    }
    return false;
  }
  doTablesOverlap(table1, table2) {
    return !(table1.position_x + table1.width <= table2.position_x || table1.position_x >= table2.position_x + table2.width || table1.position_y + table1.height <= table2.position_y || table1.position_y >= table2.position_y + table2.height);
  }
  // Unione tavoli
  updateTableOnlineBookable(id, isOnlineBookable) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from("tables").update({ is_online_bookable: isOnlineBookable }).eq("id", id);
        if (error)
          throw error;
        yield this.loadData();
        return true;
      } catch (error) {
        console.error("\u274C Error updating table online bookable status:", error);
        return false;
      }
    });
  }
  getTablesAvailableForOnlineBooking(floorPlanId) {
    return this.getTablesByFloorPlan(floorPlanId).filter((table) => table.is_online_bookable && !table.is_merged && table.is_active);
  }
  getVisibleTablesByFloorPlan(floorPlanId, version) {
    const allTables = this.getTablesByFloorPlan(floorPlanId, version);
    console.log(`\u{1F50D} getVisibleTablesByFloorPlan: floorPlanId=${floorPlanId}, version=${version}, trovati=${allTables.length}`);
    return allTables.filter((table) => !table.is_merged || table.parent_table_id === null);
  }
  // Nuovo metodo per ottenere la prossima versione disponibile
  getNextVersion(floorPlanId) {
    return __async(this, null, function* () {
      const tables = this.getTablesByFloorPlan(floorPlanId);
      const maxVersion = tables.reduce((max, t) => Math.max(max, t.version || 1), 1);
      return maxVersion + 1;
    });
  }
  getTableStyle(table) {
    let borderRadius;
    if (table.border_radius !== void 0 && table.border_radius !== null) {
      borderRadius = table.border_radius === 50 ? "50%" : `${table.border_radius}px`;
    } else {
      borderRadius = table.shape === "circle" ? "50%" : "8px";
    }
    const rotation = table.rotation || 0;
    const style = {
      left: table.position_x + "px",
      top: table.position_y + "px",
      width: table.width + "px",
      height: table.height + "px",
      "border-radius": borderRadius,
      transform: `rotate(${rotation}deg)`
      // ← Questo è il transform corretto
    };
    if (rotation !== 0) {
      console.log(`\u{1F3A8} Tavolo ${table.table_number}: applicata rotazione di ${rotation}\xB0`);
    }
    if (table.is_merged) {
      style["border"] = "3px dashed #ff6b35";
      style["background"] = "rgba(255, 107, 53, 0.1)";
    }
    if (!table.is_online_bookable) {
      style["background"] = "repeating-linear-gradient(45deg, var(--primary), var(--smoke-1) 10px, var(--smoke-1) 10px, var(--primary) 20px)";
    }
    return style;
  }
  getTableClass(table, selectedTable, selectedTables, isMergeMode) {
    const classes = ["table-element", `shape-${table.shape}`];
    if (selectedTable?.id === table.id)
      classes.push("selected");
    if (selectedTables.some((t) => t.id === table.id))
      classes.push("merge-selected");
    if (table.is_merged && table.parent_table_id) {
      classes.push("merged-child", "hidden-table");
    } else if (table.merged_tables_ids && table.merged_tables_ids.length > 0) {
      classes.push("merged-parent");
    }
    if (!table.is_online_bookable)
      classes.push("not-online-bookable");
    return classes.join(" ");
  }
  generateNextTableNumber(tables) {
    const existingNumbers = tables.map((t) => parseInt(t.table_number)).filter((n) => !isNaN(n));
    return existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1;
  }
  rotateTable(id, rotation) {
    return __async(this, null, function* () {
      try {
        const normalizedRotation = (rotation % 360 + 360) % 360;
        const currentTables = this.dataSubject.value;
        const updatedTables = currentTables.map((table) => table.id === id ? __spreadProps(__spreadValues({}, table), { rotation: normalizedRotation }) : table);
        this.dataSubject.next(updatedTables);
        const { error } = yield this.supabaseService.getSupabaseClient().from("tables").update({ rotation: normalizedRotation, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
        if (error) {
          console.error("\u274C Database error rotating table:", error);
          this.dataSubject.next(currentTables);
          return false;
        }
        return true;
      } catch (error) {
        console.error("\u274C Error rotating table:", error);
        return false;
      }
    });
  }
  getAllTablesByFloorPlan(floorPlanId) {
    return this.dataSubject.value.filter((table) => table.floor_plan_id === floorPlanId);
  }
  calculateMaxCapacity(tables) {
    if (!tables || tables.length === 0)
      return 0;
    return tables.reduce((total, table) => {
      return total + (table.capacity || 0);
    }, 0);
  }
  // Calcola la capacità per tipo di tavolo
  getCapacityByTableType(tables) {
    const capacityMap = {};
    tables.forEach((table) => {
      const capacity = table.capacity || 0;
      capacityMap[capacity] = (capacityMap[capacity] || 0) + 1;
    });
    return capacityMap;
  }
  // Ottieni la statistica dei tavoli
  getTableStats(tables) {
    const totalTables = tables.length;
    const maxCapacity = this.calculateMaxCapacity(tables);
    const availableForOnline = tables.filter((t) => t.is_online_bookable).length;
    const averageCapacity = totalTables > 0 ? Math.round(maxCapacity / totalTables) : 0;
    return {
      totalTables,
      maxCapacity,
      availableForOnline,
      averageCapacity
    };
  }
  validateTableDimensions(table) {
    let { width, height } = table;
    if (table.shape === "circle") {
      height = width;
    } else if (table.shape === "square") {
      height = width;
    }
    if (width < 20)
      width = 20;
    if (width > 1e3)
      width = 1e3;
    if (height < 20)
      height = 20;
    if (height > 1e3)
      height = 1e3;
    return { width, height };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TableService_BaseFactory;
    return function TableService_Factory(__ngFactoryType__) {
      return (\u0275TableService_BaseFactory || (\u0275TableService_BaseFactory = \u0275\u0275getInheritedFactory(_TableService)))(__ngFactoryType__ || _TableService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TableService, factory: _TableService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TableService
};
//# sourceMappingURL=chunk-ZPOZGJCN.js.map
