import {
  FloorPlanService
} from "./chunk-T6KMX6XK.js";
import {
  TableService
} from "./chunk-EHXEPYDT.js";
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
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-4SOHWVCI.js";
import "./chunk-QSRXFII6.js";
import "./chunk-XTSNHNKL.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-77JDNC7M.js";
import "./chunk-BBE7KKQ3.js";
import "./chunk-NI22Y6EC.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  HostListener,
  Injectable,
  Renderer2,
  Subscription,
  ViewChild,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-T3MDKIO5.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Tavoli/table-merge.service.ts
var TableMergeService = class _TableMergeService {
  supabaseService = inject(SupabaseService);
  mergeTables(tables, mergeData, floorPlanId, restaurantId) {
    return __async(this, null, function* () {
      try {
        const tableIds = tables.map((t) => t.id);
        const mergedTable = {
          restaurant_id: restaurantId,
          floor_plan_id: floorPlanId,
          table_name: mergeData.table_name,
          table_number: mergeData.table_number,
          capacity: mergeData.capacity,
          shape: "rectangle",
          position_x: mergeData.position_x,
          position_y: mergeData.position_y,
          width: mergeData.width,
          height: mergeData.height,
          rotation: 0,
          is_active: true,
          is_online_bookable: true,
          is_merged: false,
          // Questo è il tavolo principale, quindi non è merged
          parent_table_id: null,
          // Nessun parent perché è il principale
          merged_tables_ids: tableIds
        };
        const { data: newTable, error } = yield this.supabaseService.getSupabaseClient().from("tables").insert(mergedTable).select().single();
        if (error)
          throw error;
        for (const table of tables) {
          const updateData = {
            is_online_bookable: false,
            // Non prenotabile online
            is_merged: true,
            // È un tavolo unito (figlio)
            parent_table_id: newTable.id
            // Riferimento al tavolo principale
          };
          const { error: updateError } = yield this.supabaseService.getSupabaseClient().from("tables").update(updateData).eq("id", table.id);
          if (updateError)
            throw updateError;
        }
        return newTable;
      } catch (error) {
        console.error("\u274C Error merging tables:", error);
        return null;
      }
    });
  }
  splitMergedTable(mergedTable) {
    return __async(this, null, function* () {
      try {
        console.log("\u{1F50D} Cerco tavoli figli per:", mergedTable.id);
        const { data: childTables, error: fetchError } = yield this.supabaseService.getSupabaseClient().from("tables").select("*").eq("parent_table_id", mergedTable.id);
        if (fetchError) {
          console.error("\u274C Errore nel fetch dei tavoli figli:", fetchError);
          throw fetchError;
        }
        console.log("\u{1F4CB} Tavoli figli trovati:", childTables?.length);
        for (const table of childTables || []) {
          const updateData = {
            is_online_bookable: true,
            is_merged: false,
            parent_table_id: null
          };
          console.log("\u{1F504} Ripristino tavolo:", table.table_number);
          const { error: updateError } = yield this.supabaseService.getSupabaseClient().from("tables").update(updateData).eq("id", table.id);
          if (updateError) {
            console.error("\u274C Errore nell'aggiornamento del tavolo:", updateError);
            throw updateError;
          }
        }
        console.log("\u{1F5D1}\uFE0F Elimino tavolo unito principale:", mergedTable.id);
        const { error: deleteError } = yield this.supabaseService.getSupabaseClient().from("tables").delete().eq("id", mergedTable.id);
        if (deleteError) {
          console.error("\u274C Errore nell'eliminazione del tavolo unito:", deleteError);
          throw deleteError;
        }
        console.log("\u2705 Separazione completata con successo");
        return true;
      } catch (error) {
        console.error("\u274C Error splitting merged table:", error);
        return false;
      }
    });
  }
  getMergedTableChildren(parentTableId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("tables").select("*").eq("parent_table_id", parentTableId);
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Error fetching merged table children:", error);
        return [];
      }
    });
  }
  static \u0275fac = function TableMergeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableMergeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TableMergeService, factory: _TableMergeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableMergeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/Mappa/floor-plan-state.service.ts
var FloorPlanStateService = class _FloorPlanStateService {
  isEditMode = computed(() => this.state().isEditMode);
  // Versioni mappa
  currentVersion = computed(() => this.state().currentVersion);
  activeVersion = computed(() => this.state().activeVersion);
  // Stato reattivo con signals
  state = signal({
    floorPlans: [],
    currentFloorPlan: null,
    tables: [],
    selectedTable: null,
    selectedTables: [],
    isDrawing: false,
    isMergeMode: false,
    isEditMode: false,
    currentVersion: 1,
    activeVersion: 1,
    showTableModal: false,
    showEditTableModal: false,
    showMergeModal: false,
    showDimensionsModal: false,
    tableForm: this.getDefaultTableForm()
  });
  // Computed values
  floorPlans = computed(() => this.state().floorPlans);
  currentFloorPlan = computed(() => this.state().currentFloorPlan);
  tables = computed(() => this.state().tables);
  selectedTable = computed(() => this.state().selectedTable);
  selectedTables = computed(() => this.state().selectedTables);
  isDrawing = computed(() => this.state().isDrawing);
  isMergeMode = computed(() => this.state().isMergeMode);
  showTableModal = computed(() => this.state().showTableModal);
  showEditTableModal = computed(() => this.state().showEditTableModal);
  showMergeModal = computed(() => this.state().showMergeModal);
  showDimensionsModal = computed(() => this.state().showDimensionsModal);
  tableForm = computed(() => this.state().tableForm);
  // Actions
  setFloorPlans(floorPlans) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { floorPlans }));
  }
  setCurrentFloorPlan(floorPlan) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { currentFloorPlan: floorPlan }));
  }
  setTables(tables) {
    console.log("\u{1F535} setTables chiamato con", tables.length, "tavoli");
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { tables }));
  }
  setSelectedTable(table) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { selectedTable: table }));
  }
  setSelectedTables(tables) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { selectedTables: tables }));
  }
  setIsDrawing(isDrawing) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { isDrawing }));
  }
  setIsMergeMode(isMergeMode) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { isMergeMode }));
  }
  setShowTableModal(show) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { showTableModal: show }));
  }
  setShowEditTableModal(show) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { showEditTableModal: show }));
  }
  setShowMergeModal(show) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { showMergeModal: show }));
  }
  setShowDimensionsModal(show) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { showDimensionsModal: show }));
  }
  updateTableForm(updates) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      tableForm: __spreadValues(__spreadValues({}, state.tableForm), updates)
    }));
  }
  resetTableForm() {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      tableForm: this.getDefaultTableForm()
    }));
  }
  addToSelectedTables(table) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      selectedTables: [...state.selectedTables, table]
    }));
  }
  removeFromSelectedTables(tableId) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      selectedTables: state.selectedTables.filter((t) => t.id !== tableId)
    }));
  }
  clearSelectedTables() {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { selectedTables: [] }));
  }
  // Metodo per inizializzare il form con valori predefiniti basati sulla forma
  initializeTableFormForShape(shapeType) {
    const currentForm = this.state().tableForm;
    switch (shapeType) {
      case "circle":
        currentForm.borderRadius = 50;
        currentForm.gridHeight = currentForm.gridWidth;
        currentForm.height = currentForm.width;
        break;
      case "square":
        currentForm.borderRadius = 12;
        currentForm.gridHeight = currentForm.gridWidth;
        currentForm.height = currentForm.width;
        break;
      case "rectangle":
        currentForm.borderRadius = 8;
        break;
    }
    currentForm.shape = shapeType;
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      tableForm: __spreadValues({}, currentForm)
    }));
  }
  // Metodo per aggiornare il numero del tavolo automaticamente
  updateAutoTableNumber(nextNumber) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      tableForm: __spreadProps(__spreadValues({}, state.tableForm), { tableNumber: nextNumber.toString() })
    }));
  }
  // Metodo per resettare completamente lo stato
  resetState() {
    this.state.set({
      floorPlans: [],
      currentFloorPlan: null,
      tables: [],
      selectedTable: null,
      selectedTables: [],
      isDrawing: false,
      isMergeMode: false,
      showTableModal: false,
      showEditTableModal: false,
      showMergeModal: false,
      showDimensionsModal: false,
      tableForm: this.getDefaultTableForm(),
      isEditMode: false,
      currentVersion: 1,
      activeVersion: 1
    });
  }
  getDefaultTableForm() {
    const gridSize = 20;
    return {
      shape: "rectangle",
      gridWidth: 6,
      gridHeight: 4,
      width: 6 * gridSize,
      height: 4 * gridSize,
      capacity: 2,
      borderRadius: 8,
      tableName: "",
      tableNumber: "",
      isOnlineBookable: true,
      isMerged: false
    };
  }
  resetForNewFloorPlan() {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      tables: [],
      selectedTable: null,
      selectedTables: [],
      isDrawing: false,
      isMergeMode: false,
      showTableModal: false,
      showEditTableModal: false,
      showMergeModal: false,
      showDimensionsModal: false
    }));
  }
  setIsEditMode(isEditMode) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { isEditMode }));
  }
  // VERIONE MAPPA
  setCurrentVersion(version) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { currentVersion: version }));
  }
  setActiveVersion(version) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), { activeVersion: version }));
  }
  static \u0275fac = function FloorPlanStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorPlanStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FloorPlanStateService, factory: _FloorPlanStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloorPlanStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/Mappa/floor-plan-interaction.service.ts
var FloorPlanInteractionService = class _FloorPlanInteractionService {
  stateService = inject(FloorPlanStateService);
  tableService = inject(TableService);
  dragState = null;
  rafId = null;
  // Metodo per iniziare il drag
  startTableDrag(tableId, event, canvasElement, canvasScale = 1) {
    const allTables = this.tableService.getTables();
    const table = allTables.find((t) => t.id === tableId);
    if (!table) {
      console.error("\u274C Tavolo non trovato:", tableId);
      return;
    }
    const canvasRect = canvasElement.getBoundingClientRect();
    const startX = (event.clientX - canvasRect.left) / canvasScale;
    const startY = (event.clientY - canvasRect.top) / canvasScale;
    console.log("\u{1F7E2} START DRAG per tavolo:", table.table_number, "scale:", canvasScale);
    const tablesToMove = this.getTablesInMergeGroup(table, allTables);
    const initialPositions = new Map(tablesToMove.map((t) => [t.id, { x: t.position_x, y: t.position_y }]));
    const moveHandler = (moveEvent) => {
      if (!this.dragState?.isDragging)
        return;
      if (this.rafId)
        cancelAnimationFrame(this.rafId);
      this.rafId = requestAnimationFrame(() => {
        this.handlePointerMove(canvasElement, moveEvent, allTables, canvasScale);
      });
    };
    const upHandler = () => this.handlePointerUp();
    this.dragState = {
      isDragging: true,
      startX,
      startY,
      initialPositions,
      moveHandler,
      upHandler
    };
    document.addEventListener("pointermove", moveHandler);
    document.addEventListener("pointerup", upHandler, { once: true });
    const tableElement = event.target;
    if (tableElement) {
      try {
        tableElement.setPointerCapture(event.pointerId);
        tableElement.style.touchAction = "none";
      } catch (e) {
        console.warn("Pointer capture not supported");
      }
    }
  }
  handlePointerMove(canvasElement, event, allTables, canvasScale) {
    if (!this.dragState?.isDragging)
      return;
    const canvasRect = canvasElement.getBoundingClientRect();
    const currentX = (event.clientX - canvasRect.left) / canvasScale;
    const currentY = (event.clientY - canvasRect.top) / canvasScale;
    const deltaX = currentX - this.dragState.startX;
    const deltaY = currentY - this.dragState.startY;
    const currentFloorPlan = this.stateService.currentFloorPlan();
    if (!currentFloorPlan)
      return;
    const updatedTables = this.stateService.tables().map((table) => {
      const initialPos = this.dragState.initialPositions.get(table.id);
      if (!initialPos)
        return table;
      let newX = initialPos.x + deltaX;
      let newY = initialPos.y + deltaY;
      newX = Math.round(newX / 20) * 20;
      newY = Math.round(newY / 20) * 20;
      const maxX = currentFloorPlan.width - table.width;
      const maxY = currentFloorPlan.height - table.height;
      const finalX = Math.max(0, Math.min(newX, maxX));
      const finalY = Math.max(0, Math.min(newY, maxY));
      const tempTable = __spreadProps(__spreadValues({}, table), { position_x: finalX, position_y: finalY });
      const excludeIds = Array.from(this.dragState.initialPositions.keys());
      const overlaps = this.tableService.checkTableOverlap(tempTable, excludeIds);
      return overlaps ? table : __spreadProps(__spreadValues({}, table), { position_x: finalX, position_y: finalY });
    });
    this.stateService.setTables(updatedTables);
  }
  handlePointerUp() {
    return __async(this, null, function* () {
      if (!this.dragState?.isDragging)
        return;
      console.log("\u{1F7E2} HANDLE POINTER UP - Saving final positions");
      const savePromises = [];
      for (const [tableId, initialPos] of this.dragState.initialPositions) {
        const table = this.stateService.tables().find((t) => t.id === tableId);
        if (table && (table.position_x !== initialPos.x || table.position_y !== initialPos.y)) {
          console.log(`\u{1F4BE} Saving table ${table.table_number}: (${initialPos.x}, ${initialPos.y}) \u2192 (${table.position_x}, ${table.position_y})`);
          savePromises.push(this.tableService.updateTable(tableId, {
            position_x: table.position_x,
            position_y: table.position_y
          }));
        }
      }
      try {
        yield Promise.all(savePromises);
        console.log("\u2705 All table positions saved successfully");
      } catch (error) {
        console.error("\u274C Error saving table positions:", error);
      }
      this.cleanupDrag();
    });
  }
  cleanupDrag() {
    if (this.dragState?.moveHandler) {
      document.removeEventListener("pointermove", this.dragState.moveHandler);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.dragState = null;
  }
  getTablesInMergeGroup(table, allTables) {
    const group = [table];
    if (table.merged_tables_ids && table.merged_tables_ids.length > 0 && !table.parent_table_id) {
      table.merged_tables_ids.forEach((tableId) => {
        const childTable = allTables.find((t) => t.id === tableId);
        if (childTable)
          group.push(childTable);
      });
    } else if (table.parent_table_id) {
      const parentTable = allTables.find((t) => t.id === table.parent_table_id);
      if (parentTable) {
        if (!group.find((t) => t.id === parentTable.id)) {
          group.push(parentTable);
        }
        if (parentTable.merged_tables_ids) {
          parentTable.merged_tables_ids.forEach((tableId) => {
            if (tableId !== table.id) {
              const siblingTable = allTables.find((t) => t.id === tableId);
              if (siblingTable && !group.find((t) => t.id === siblingTable.id)) {
                group.push(siblingTable);
              }
            }
          });
        }
      }
    }
    return group;
  }
  // Metodo per gestire il click sulla mappa
  handleCanvasClick(event, canvasElement) {
    if (!this.stateService.isDrawing())
      return null;
    const rect = canvasElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    let snappedX = x;
    let snappedY = y;
    snappedX = Math.round(x / 20) * 20;
    snappedY = Math.round(y / 20) * 20;
    return { x: snappedX, y: snappedY };
  }
  // Metodo semplificato per controllare se due tavoli sono vicini
  areTablesAdjacent(table1, table2, gap = 0) {
    const t1Left = table1.position_x;
    const t1Right = table1.position_x + table1.width;
    const t1Top = table1.position_y;
    const t1Bottom = table1.position_y + table1.height;
    const t2Left = table2.position_x;
    const t2Right = table2.position_x + table2.width;
    const t2Top = table2.position_y;
    const t2Bottom = table2.position_y + table2.height;
    const tolerance = 2;
    const t1LeftWithGap = t1Left - gap - tolerance;
    const t1RightWithGap = t1Right + gap + tolerance;
    const t1TopWithGap = t1Top - gap - tolerance;
    const t1BottomWithGap = t1Bottom + gap + tolerance;
    const t2LeftWithGap = t2Left - tolerance;
    const t2RightWithGap = t2Right + tolerance;
    const t2TopWithGap = t2Top - tolerance;
    const t2BottomWithGap = t2Bottom + tolerance;
    const overlapX = t1LeftWithGap <= t2RightWithGap && t1RightWithGap >= t2LeftWithGap;
    const overlapY = t1TopWithGap <= t2BottomWithGap && t1BottomWithGap >= t2TopWithGap;
    return overlapX && overlapY;
  }
  areSelectedTablesAdjacent(selectedTables, allTables) {
    if (selectedTables.length < 2)
      return true;
    const connections = /* @__PURE__ */ new Map();
    selectedTables.forEach((table) => {
      connections.set(table.id, []);
    });
    for (let i = 0; i < selectedTables.length; i++) {
      for (let j = i + 1; j < selectedTables.length; j++) {
        if (this.areTablesAdjacent(selectedTables[i], selectedTables[j])) {
          connections.get(selectedTables[i].id).push(selectedTables[j].id);
          connections.get(selectedTables[j].id).push(selectedTables[i].id);
        }
      }
    }
    const visited = /* @__PURE__ */ new Set();
    const queue = [selectedTables[0].id];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!visited.has(current)) {
        visited.add(current);
        const neighbors = connections.get(current) || [];
        neighbors.forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        });
      }
    }
    return visited.size === selectedTables.length;
  }
  getAdjacentTablesToSelection(selectedTables, allTables) {
    if (selectedTables.length === 0)
      return [];
    const adjacentTables = [];
    const selectedIds = selectedTables.map((t) => t.id);
    allTables.forEach((table) => {
      if (selectedIds.includes(table.id) || table.is_merged)
        return;
      for (const selectedTable of selectedTables) {
        if (this.areTablesAdjacent(table, selectedTable)) {
          adjacentTables.push(table);
          break;
        }
      }
    });
    return adjacentTables;
  }
  showAdjacencyWarning(table, selectedTables) {
    const message = `Il Tavolo ${table.table_number} non \xE8 vicino ai tavoli selezionati. 
  Seleziona solo tavoli che si toccano tra loro.`;
    alert(message);
  }
  findTableAtPosition(tables, x, y) {
    const tolerance = 15;
    for (const table of tables) {
      const tableLeft = table.position_x;
      const tableRight = table.position_x + table.width;
      const tableTop = table.position_y;
      const tableBottom = table.position_y + table.height;
      if (x >= tableLeft - tolerance && x <= tableRight + tolerance && y >= tableTop - tolerance && y <= tableBottom + tolerance) {
        return table;
      }
    }
    return null;
  }
  findAdjacentGroups(tables) {
    const groups = [];
    const visited = /* @__PURE__ */ new Set();
    for (const table of tables) {
      if (!visited.has(table.id)) {
        const group = this.findConnectedTables(table, tables, visited);
        if (group.length > 1) {
          groups.push(group);
        }
      }
    }
    return groups;
  }
  /**
   * Trova tutti i tavoli connessi (adiacenti) a un tavolo dato
   */
  findConnectedTables(startTable, allTables, visited) {
    const group = [];
    const queue = [startTable];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!visited.has(current.id)) {
        visited.add(current.id);
        group.push(current);
        for (const table of allTables) {
          if (!visited.has(table.id) && table.id !== current.id && this.areTablesAdjacent(current, table, 0)) {
            queue.push(table);
          }
        }
      }
    }
    return group;
  }
  static \u0275fac = function FloorPlanInteractionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorPlanInteractionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FloorPlanInteractionService, factory: _FloorPlanInteractionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloorPlanInteractionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/Tavoli/table-rotation.service.ts
var TableRotationService = class _TableRotationService {
  tableService = inject(TableService);
  // Ruota un tavolo (con il suo gruppo se unito)
  rotateTable(table, degrees) {
    return __async(this, null, function* () {
      try {
        const mainTable = this.getMainTableForRotation(table);
        if (!mainTable) {
          console.error("\u274C Tavolo non valido per la rotazione");
          return false;
        }
        console.log(`\u{1F504} Rotazione tavolo ${mainTable.table_number} di ${degrees}\xB0`);
        const newRotation = (mainTable.rotation + degrees) % 360;
        const success = yield this.tableService.rotateTable(mainTable.id, newRotation);
        if (!success) {
          console.error("\u274C Errore nel salvataggio della rotazione");
          return false;
        }
        console.log("\u2705 Tavolo ruotato con successo");
        return true;
      } catch (error) {
        console.error("\u274C Errore nella rotazione:", error);
        return false;
      }
    });
  }
  // Ruota a un angolo specifico (0, 90, 180, 270)
  rotateToAngle(table, angle) {
    const currentRotation = table.rotation || 0;
    const degrees = angle - currentRotation;
    return (degrees + 180) % 360 - 180;
  }
  // Ottieni il tavolo principale per la rotazione
  getMainTableForRotation(table) {
    if (table.parent_table_id) {
      const parent = this.tableService.getTables().find((t) => t.id === table.parent_table_id);
      return parent || table;
    }
    return table;
  }
  static \u0275fac = function TableRotationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableRotationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TableRotationService, factory: _TableRotationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRotationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/restaurant/layout/floor-plan/floor-plan.ts
var _c0 = ["floorPlanCanvas"];
var _c1 = ["canvasContainer"];
var _c2 = (a0, a1, a2) => ({ "width.px": a0, "height.px": a1, "border-radius": a2 });
function FloorPlanEditor_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", plan_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", plan_r2.name, " (", plan_r2.width, "\xD7", plan_r2.height, ") ");
  }
}
function FloorPlanEditor_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 8)(2, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_22_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editedFloorPlanName, $event) || (ctx_r3.editedFloorPlanName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function FloorPlanEditor_div_22_Template_input_keyup_enter_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveFloorPlanName());
    })("keyup.escape", function FloorPlanEditor_div_22_Template_input_keyup_escape_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancelEditFloorPlanName());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "button", 51);
    \u0275\u0275listener("click", function FloorPlanEditor_div_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveFloorPlanName());
    });
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 52);
    \u0275\u0275listener("click", function FloorPlanEditor_div_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancelEditFloorPlanName());
    });
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 53);
    \u0275\u0275text(11, " Premi Invio per salvare, Esc per annullare ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editedFloorPlanName);
  }
}
function FloorPlanEditor_div_23_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", v_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Versione ", v_r6, " ", v_r6 === ctx_r3.floorPlanStateService.activeVersion() ? "(attiva)" : "", " ");
  }
}
function FloorPlanEditor_div_23_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function FloorPlanEditor_div_23_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.publishVersion(ctx_r3.floorPlanStateService.currentVersion()));
    });
    \u0275\u0275element(1, "lucide-angular", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function FloorPlanEditor_div_23_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function FloorPlanEditor_div_23_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteVersion(ctx_r3.floorPlanStateService.currentVersion()));
    });
    \u0275\u0275element(1, "lucide-angular", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function FloorPlanEditor_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "label", 7);
    \u0275\u0275text(2, "Versione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "select", 55);
    \u0275\u0275listener("ngModelChange", function FloorPlanEditor_div_23_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onVersionChange($event));
    });
    \u0275\u0275template(5, FloorPlanEditor_div_23_option_5_Template, 2, 3, "option", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function FloorPlanEditor_div_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createNewVersion());
    });
    \u0275\u0275element(7, "lucide-angular", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FloorPlanEditor_div_23_button_8_Template, 2, 1, "button", 58)(9, FloorPlanEditor_div_23_button_9_Template, 2, 1, "button", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.floorPlanStateService.currentVersion());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.availableVersions());
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.floorPlanStateService.currentVersion() !== ctx_r3.floorPlanStateService.activeVersion());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.availableVersions().length > 1 && ctx_r3.floorPlanStateService.currentVersion() !== ctx_r3.floorPlanStateService.activeVersion());
  }
}
function FloorPlanEditor_div_45_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "button", 76);
    \u0275\u0275listener("click", function FloorPlanEditor_div_45_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.rotateToAngle(0));
    });
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "north");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 77);
    \u0275\u0275listener("click", function FloorPlanEditor_div_45_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.rotateToAngle(90));
    });
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6, "east");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 78);
    \u0275\u0275listener("click", function FloorPlanEditor_div_45_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.rotateToAngle(180));
    });
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9, "south");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 79);
    \u0275\u0275listener("click", function FloorPlanEditor_div_45_div_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.rotateToAngle(270));
    });
    \u0275\u0275elementStart(11, "span", 14);
    \u0275\u0275text(12, "west");
    \u0275\u0275elementEnd()()();
  }
}
function FloorPlanEditor_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 50)(3, "span", 14);
    \u0275\u0275text(4, "rotate_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "label", 7);
    \u0275\u0275text(7, "Rotazione Tavolo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, FloorPlanEditor_div_45_div_9_Template, 13, 0, "div", 66);
    \u0275\u0275elementStart(10, "div", 67)(11, "button", 68);
    \u0275\u0275listener("click", function FloorPlanEditor_div_45_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.rotateSelectedTable(-30));
    });
    \u0275\u0275elementStart(12, "span", 14);
    \u0275\u0275text(13, "rotate_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 69)(15, "span", 70);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 71);
    \u0275\u0275text(18, "Rotazione");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 72);
    \u0275\u0275listener("click", function FloorPlanEditor_div_45_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.rotateSelectedTable(30));
    });
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21, "rotate_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 73);
    \u0275\u0275listener("click", function FloorPlanEditor_div_45_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.rotateToAngle(0));
    });
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24, "restart_alt");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 74)(26, "span", 75);
    \u0275\u0275text(27, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Premi Ctrl + rotellina del mouse per ruotare di \xB15\xB0 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r3.isMobileView());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isRotating);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.selectedTable().rotation || 0, "\xB0");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.isRotating);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.isRotating);
  }
}
function FloorPlanEditor_div_46_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1, " Unito ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditor_div_46_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function FloorPlanEditor_div_46_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onSplitTable(ctx_r3.selectedTable()));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "call_split");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Separa ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditor_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div", 4)(3, "strong");
    \u0275\u0275text(4, "Tavolo Selezionato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 50)(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FloorPlanEditor_div_46_span_8_Template, 2, 0, "span", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 83)(10, "button", 84);
    \u0275\u0275listener("click", function FloorPlanEditor_div_46_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditTableModal());
    });
    \u0275\u0275elementStart(11, "span", 14);
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Modifica ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FloorPlanEditor_div_46_button_14_Template, 4, 0, "button", 85);
    \u0275\u0275elementStart(15, "button", 86);
    \u0275\u0275listener("click", function FloorPlanEditor_div_46_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deselectAll());
    });
    \u0275\u0275elementStart(16, "span", 14);
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Deseleziona ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" Tavolo ", ctx_r3.selectedTable().table_number, " - ", ctx_r3.selectedTable().capacity, " persone ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTable().merged_tables_ids && ctx_r3.selectedTable().merged_tables_ids.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r3.selectedTable().merged_tables_ids && ctx_r3.selectedTable().merged_tables_ids.length > 0);
  }
}
function FloorPlanEditor_div_47_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " Seleziona 2-4 tavoli confinanti da unire ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditor_div_47_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r3.getSelectedTableNumbers(), ") ");
  }
}
function FloorPlanEditor_div_47_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275template(2, FloorPlanEditor_div_47_div_5_span_2_Template, 2, 1, "span", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Tavoli selezionati: ", ctx_r3.selectedTables().length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTables().length > 0);
  }
}
function FloorPlanEditor_div_47_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r3.selectedTables().length, ")");
  }
}
function FloorPlanEditor_div_47_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "span", 104);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 105)(5, "p", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 106);
    \u0275\u0275listener("click", function FloorPlanEditor_div_47_div_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.highlightMessage.set(null));
    });
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-warning", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.highlightMessage(), " ");
  }
}
function FloorPlanEditor_div_47_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "lucide-angular", 108);
    \u0275\u0275text(2, " Seleziona un altro tavolo adiacente per unire ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditor_div_47_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "span", 14);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " I tavoli selezionati non sono tutti adiacenti tra loro ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditor_div_47_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "span", 14);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Tavoli pronti per l'unione! Capacit\xE0 totale: ", ctx_r3.getTotalCapacity(), " persone ");
  }
}
function FloorPlanEditor_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "strong");
    \u0275\u0275text(3, "Modalit\xE0 Unione Tavoli");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FloorPlanEditor_div_47_div_4_Template, 2, 0, "div", 91)(5, FloorPlanEditor_div_47_div_5_Template, 3, 2, "div", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 83)(7, "button", 86);
    \u0275\u0275listener("click", function FloorPlanEditor_div_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.highlightAdjacentTables());
    });
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9, "highlight");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Mostra vicini ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 92);
    \u0275\u0275listener("click", function FloorPlanEditor_div_47_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openMergeModal());
    });
    \u0275\u0275elementStart(12, "span", 14);
    \u0275\u0275text(13, "merge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Crea tavolo unito ");
    \u0275\u0275template(15, FloorPlanEditor_div_47_span_15_Template, 2, 1, "span", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 94);
    \u0275\u0275listener("click", function FloorPlanEditor_div_47_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.floorPlanStateService.clearSelectedTables());
    });
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275text(18, "clear");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Deseleziona ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, FloorPlanEditor_div_47_div_20_Template, 10, 3, "div", 95);
    \u0275\u0275elementStart(21, "div", 96);
    \u0275\u0275template(22, FloorPlanEditor_div_47_div_22_Template, 3, 0, "div", 97)(23, FloorPlanEditor_div_47_div_23_Template, 4, 0, "div", 98)(24, FloorPlanEditor_div_47_div_24_Template, 4, 1, "div", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.selectedTables().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTables().length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r3.canMergeTables());
    \u0275\u0275property("disabled", !ctx_r3.canMergeTables());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.selectedTables().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.selectedTables().length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.highlightMessage());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedTables().length === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTables().length > 1 && !ctx_r3.canMergeTables());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.canMergeTables());
  }
}
function FloorPlanEditor_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "span", 14);
    \u0275\u0275text(2, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Clicca sulla mappa per posizionare il tavolo ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditor_div_67_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 118);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-size", ctx_r3.visualGridSize() + "px " + ctx_r3.visualGridSize());
  }
}
function FloorPlanEditor_div_67_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275listener("pointerdown", function FloorPlanEditor_div_67_div_5_Template_div_pointerdown_0_listener($event) {
      const table_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onTablePointerDown($event, table_r16));
    });
    \u0275\u0275elementStart(1, "div", 120)(2, "div", 121);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 122);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const table_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r3.getTableClass(table_r16));
    \u0275\u0275property("ngStyle", ctx_r3.getTableStyle(table_r16));
    \u0275\u0275attribute("data-table-id", table_r16.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(table_r16.table_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r16.capacity, " p");
  }
}
function FloorPlanEditor_div_67_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "span", 14);
    \u0275\u0275text(2, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun tavolo configurato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, 'Clicca su "Aggiungi" per creare il primo tavolo');
    \u0275\u0275elementEnd()();
  }
}
function FloorPlanEditor_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113, 1);
    \u0275\u0275element(3, "div", 114);
    \u0275\u0275template(4, FloorPlanEditor_div_67_div_4_Template, 1, 2, "div", 115)(5, FloorPlanEditor_div_67_div_5_Template, 6, 6, "div", 116)(6, FloorPlanEditor_div_67_div_6_Template, 7, 0, "div", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r3.floorPlanWidth() * ctx_r3.canvasScale(), "px")("height", ctx_r3.floorPlanHeight() * ctx_r3.canvasScale(), "px");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.floorPlanWidth(), "px")("height", ctx_r3.floorPlanHeight(), "px")("transform", "scale(" + ctx_r3.canvasScale() + ")")("transform-origin", "0 0");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.snapToGrid);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.tables())("ngForTrackBy", ctx_r3.trackByTableId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.tables().length === 0);
  }
}
function FloorPlanEditor_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "span", 14);
    \u0275\u0275text(2, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessuna mappa selezionata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Crea una nuova mappa o seleziona una esistente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 125);
    \u0275\u0275listener("click", function FloorPlanEditor_div_68_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createNewFloorPlan());
    });
    \u0275\u0275element(8, "lucide-angular", 16);
    \u0275\u0275text(9, " Crea Nuova Mappa ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("size", 20);
  }
}
function FloorPlanEditor_div_90_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function FloorPlanEditor_div_90_div_20_Template_div_click_0_listener() {
      const shape_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onShapeSelect(shape_r20));
    });
    \u0275\u0275elementStart(1, "div", 151)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const shape_r20 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.floorPlanStateService.tableForm().shape === shape_r20.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(shape_r20.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(shape_r20.name);
  }
}
function FloorPlanEditor_div_90_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Larghezza (quadrati)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 152);
    \u0275\u0275listener("ngModelChange", function FloorPlanEditor_div_90_div_44_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onGridWidthChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.floorPlanStateService.tableForm().gridWidth)("disabled", ctx_r3.floorPlanStateService.tableForm().shape === "circle" || ctx_r3.floorPlanStateService.tableForm().shape === "square");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("1 quadrato = ", ctx_r3.gridSize, "px");
  }
}
function FloorPlanEditor_div_90_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Altezza (quadrati)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 153);
    \u0275\u0275listener("ngModelChange", function FloorPlanEditor_div_90_div_45_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onGridHeightChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.floorPlanStateService.tableForm().gridHeight)("disabled", ctx_r3.floorPlanStateService.tableForm().shape === "circle" || ctx_r3.tableForm().isMerged !== void 0 && ctx_r3.tableForm().isMerged);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("1 quadrato = ", ctx_r3.gridSize, "px");
  }
}
function FloorPlanEditor_div_90_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Larghezza (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 154);
    \u0275\u0275listener("ngModelChange", function FloorPlanEditor_div_90_div_46_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onWidthChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5, "Min: 20px, Max: 1000px");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.floorPlanStateService.tableForm().width)("disabled", ctx_r3.floorPlanStateService.tableForm().shape === "circle");
  }
}
function FloorPlanEditor_div_90_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Altezza (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 155);
    \u0275\u0275listener("ngModelChange", function FloorPlanEditor_div_90_div_47_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onHeightChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5, "Min: 20px, Max: 1000px");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.floorPlanStateService.tableForm().height)("disabled", ctx_r3.floorPlanStateService.tableForm().shape === "circle" || ctx_r3.floorPlanStateService.tableForm().shape === "square");
  }
}
function FloorPlanEditor_div_90_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Border Radius (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 156);
    \u0275\u0275listener("ngModelChange", function FloorPlanEditor_div_90_div_49_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onBorderRadiusChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 157)(5, "span");
    \u0275\u0275text(6, "0px (spigoli vivi)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "50px (molto arrotondato)");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.floorPlanStateService.tableForm().borderRadius);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.floorPlanStateService.tableForm().borderRadius, "px");
  }
}
function FloorPlanEditor_div_90_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 158);
    \u0275\u0275element(2, "lucide-angular", 108);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Per i tavoli circolari il border radius \xE8 automaticamente impostato al 50%");
    \u0275\u0275elementEnd()()();
  }
}
function FloorPlanEditor_div_90_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" DEBUG: width=", ctx_r3.previewWidth(), ", height=", ctx_r3.previewHeight(), ", shape=", ctx_r3.floorPlanStateService.tableForm().shape, ", borderRadius=", ctx_r3.floorPlanStateService.tableForm().borderRadius, " ");
  }
}
function FloorPlanEditor_div_90_button_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 160);
    \u0275\u0275listener("click", function FloorPlanEditor_div_90_button_71_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDeleteTable());
    });
    \u0275\u0275element(1, "lucide-angular", 20);
    \u0275\u0275text(2, " Elimina ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function FloorPlanEditor_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "div", 128)(3, "div", 103)(4, "div", 129)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 130);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function FloorPlanEditor_div_90_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.floorPlanStateService.setShowTableModal(false));
    });
    \u0275\u0275elementStart(11, "span", 14);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 4)(14, "form")(15, "div", 3)(16, "div", 131)(17, "label", 7);
    \u0275\u0275text(18, "Forma del Tavolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 132);
    \u0275\u0275template(20, FloorPlanEditor_div_90_div_20_Template, 6, 4, "div", 133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 134)(22, "div", 6)(23, "label", 7);
    \u0275\u0275text(24, "Numero Tavolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_90_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.floorPlanStateService.tableForm().tableNumber, $event) || (ctx_r3.floorPlanStateService.tableForm().tableNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 6)(27, "label", 7);
    \u0275\u0275text(28, "Capacit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_90_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.floorPlanStateService.tableForm().capacity, $event) || (ctx_r3.floorPlanStateService.tableForm().capacity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 134)(31, "div", 6)(32, "label", 7);
    \u0275\u0275text(33, "Nome Tavolo (opzionale)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_90_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.floorPlanStateService.tableForm().tableName, $event) || (ctx_r3.floorPlanStateService.tableForm().tableName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 6)(36, "label", 138)(37, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_90_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.floorPlanStateService.tableForm().isOnlineBookable, $event) || (ctx_r3.floorPlanStateService.tableForm().isOnlineBookable = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 31)(39, "strong");
    \u0275\u0275text(40, "Prenotabile online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 32);
    \u0275\u0275text(42, "Se deselezionato, prenotabile solo dal personale");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 134);
    \u0275\u0275template(44, FloorPlanEditor_div_90_div_44_Template, 6, 3, "div", 140)(45, FloorPlanEditor_div_90_div_45_Template, 6, 3, "div", 140)(46, FloorPlanEditor_div_90_div_46_Template, 6, 2, "div", 140)(47, FloorPlanEditor_div_90_div_47_Template, 6, 2, "div", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 134);
    \u0275\u0275template(49, FloorPlanEditor_div_90_div_49_Template, 12, 2, "div", 140)(50, FloorPlanEditor_div_90_div_50_Template, 5, 0, "div", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 141)(52, "strong");
    \u0275\u0275text(53, "Anteprima");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 142)(55, "div", 143)(56, "div", 144)(57, "span", 121);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 122);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 145);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, FloorPlanEditor_div_90_div_63_Template, 2, 4, "div", 146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 83)(65, "button", 147);
    \u0275\u0275listener("click", function FloorPlanEditor_div_90_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.floorPlanStateService.setShowTableModal(false));
    });
    \u0275\u0275text(66, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 148);
    \u0275\u0275listener("click", function FloorPlanEditor_div_90_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSaveTable());
    });
    \u0275\u0275elementStart(68, "span", 14);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, FloorPlanEditor_div_90_button_71_Template, 3, 1, "button", 149);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.modalMode() === "create" ? "add_circle" : "edit");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.modalMode() === "create" ? "Crea Nuovo Tavolo" : "Modifica Tavolo", " ");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r3.tableShapes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.floorPlanStateService.tableForm().tableNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.floorPlanStateService.tableForm().capacity);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.floorPlanStateService.tableForm().tableName);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.floorPlanStateService.tableForm().isOnlineBookable);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.modalMode() === "create");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalMode() === "create");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalMode() === "edit");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalMode() === "edit");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.floorPlanStateService.tableForm().shape !== "circle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.floorPlanStateService.tableForm().shape === "circle");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("shape-circle", ctx_r3.floorPlanStateService.tableForm().shape === "circle");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(25, _c2, ctx_r3.previewWidth(), ctx_r3.previewHeight(), ctx_r3.previewBorderRadius()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.floorPlanStateService.tableForm().tableNumber || "1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.floorPlanStateService.tableForm().capacity, " p");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r3.previewWidth(), " \xD7 ", ctx_r3.previewHeight(), " px | Border Radius: ", ctx_r3.floorPlanStateService.tableForm().shape === "circle" ? "50% (automatico)" : ctx_r3.floorPlanStateService.tableForm().borderRadius + "px", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", false);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.modalMode() === "create" ? "add" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.modalMode() === "create" ? "Crea Tavolo" : "Aggiorna Tavolo", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalMode() === "edit");
  }
}
function FloorPlanEditor_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "div", 128)(3, "div", 161)(4, "div", 129)(5, "span", 162);
    \u0275\u0275text(6, "aspect_ratio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h1", 163);
    \u0275\u0275text(8, "Dimensioni Sala");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275listener("click", function FloorPlanEditor_div_91_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCancelDimensionsModal());
    });
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 164)(13, "form", 165)(14, "div", 134)(15, "div", 6)(16, "label", 7);
    \u0275\u0275text(17, "Larghezza (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 166);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_91_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.dimensionsForm.width, $event) || (ctx_r3.dimensionsForm.width = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 32);
    \u0275\u0275text(20, "Min: 500px, Max: 5000px");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 6)(22, "label", 7);
    \u0275\u0275text(23, "Altezza (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 167);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_91_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.dimensionsForm.height, $event) || (ctx_r3.dimensionsForm.height = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 32);
    \u0275\u0275text(26, "Min: 500px, Max: 5000px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 131)(28, "label", 168);
    \u0275\u0275text(29, "Dimensioni Predefinite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 50)(31, "button", 169);
    \u0275\u0275listener("click", function FloorPlanEditor_div_91_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setDimensions(1e3, 800));
    });
    \u0275\u0275text(32, " Piccola (1000\xD7800) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 169);
    \u0275\u0275listener("click", function FloorPlanEditor_div_91_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setDimensions(1500, 1200));
    });
    \u0275\u0275text(34, " Media (1500\xD71200) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 169);
    \u0275\u0275listener("click", function FloorPlanEditor_div_91_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setDimensions(2e3, 1600));
    });
    \u0275\u0275text(36, " Grande (2000\xD71600) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 141)(38, "strong", 170);
    \u0275\u0275text(39, "Anteprima Dimensioni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 171)(41, "div", 172)(42, "div", 173);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 83)(45, "button", 147);
    \u0275\u0275listener("click", function FloorPlanEditor_div_91_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCancelDimensionsModal());
    });
    \u0275\u0275text(46, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 148);
    \u0275\u0275listener("click", function FloorPlanEditor_div_91_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSaveDimensions());
    });
    \u0275\u0275element(48, "lucide-angular", 174);
    \u0275\u0275text(49, " Salva Dimensioni ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.dimensionsForm.width);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.dimensionsForm.height);
    \u0275\u0275advance(17);
    \u0275\u0275styleProp("width", ctx_r3.dimensionsForm.width * 0.1, "px")("height", ctx_r3.dimensionsForm.height * 0.1, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.dimensionsForm.width, " \xD7 ", ctx_r3.dimensionsForm.height, " px ");
  }
}
function FloorPlanEditor_div_92_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "span", 14);
    \u0275\u0275text(2, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const table_r29 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Tavolo ", table_r29.table_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", table_r29.capacity, " persone");
  }
}
function FloorPlanEditor_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "div", 128)(3, "div", 103)(4, "div", 129)(5, "span", 14);
    \u0275\u0275text(6, "merge");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h1", 130);
    \u0275\u0275text(9, "Unisci Tavoli");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function FloorPlanEditor_div_92_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMergeModal());
    });
    \u0275\u0275elementStart(11, "span", 14);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div")(14, "form", 165)(15, "div", 3)(16, "div", 131)(17, "label", 7);
    \u0275\u0275text(18, "Tavoli da unire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 175);
    \u0275\u0275template(20, FloorPlanEditor_div_92_div_20_Template, 8, 2, "div", 176);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 134)(22, "div", 6)(23, "label", 7);
    \u0275\u0275text(24, "Numero Nuovo Tavolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 177);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_92_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.mergeForm.tableNumber, $event) || (ctx_r3.mergeForm.tableNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 6)(27, "label", 7);
    \u0275\u0275text(28, "Capacit\xE0 Totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 178);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_92_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.mergeForm.capacity, $event) || (ctx_r3.mergeForm.capacity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 131)(31, "label", 7);
    \u0275\u0275text(32, "Nome Tavolo Unito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 179);
    \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_div_92_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.mergeForm.tableName, $event) || (ctx_r3.mergeForm.tableName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 180)(35, "div", 6)(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 6)(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 83)(42, "button", 147);
    \u0275\u0275listener("click", function FloorPlanEditor_div_92_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMergeModal());
    });
    \u0275\u0275text(43, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 148);
    \u0275\u0275listener("click", function FloorPlanEditor_div_92_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onMergeTables());
    });
    \u0275\u0275elementStart(45, "span", 14);
    \u0275\u0275text(46, "merge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Crea Tavolo Unito ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r3.selectedTables());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.mergeForm.tableNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.mergeForm.capacity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.mergeForm.tableName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Capacit\xE0 originale: ", ctx_r3.getTotalCapacity(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Nuova capacit\xE0: ", ctx_r3.mergeForm.capacity, "");
  }
}
var FloorPlanEditor = class _FloorPlanEditor {
  // Servizi
  floorPlanService = inject(FloorPlanService);
  tableService = inject(TableService);
  floorPlanInteractionService = inject(FloorPlanInteractionService);
  floorPlanStateService = inject(FloorPlanStateService);
  tableMergeService = inject(TableMergeService);
  authService = inject(AuthService);
  supabaseService = inject(SupabaseService);
  tableRotationService = inject(TableRotationService);
  renderer = inject(Renderer2);
  // Elementi DOM
  canvasRef;
  containerRef;
  // Stato interno
  isDragging = false;
  isRotating = false;
  resizeObserver;
  destroyed = false;
  subscriptions = new Subscription();
  highlightMessage = signal(null);
  canvasReady = false;
  refreshTrigger = signal(0);
  // Dimensioni e scaling - SISTEMA SEMPLIFICATO
  canvasScale = signal(1);
  containerWidth = signal(0);
  containerHeight = signal(0);
  isMobileView = signal(false);
  userZoomed = signal(false);
  // Dimensioni REALI della mappa (dati dal database)
  floorPlanWidth = computed(() => this.currentFloorPlan()?.width || 1e3);
  floorPlanHeight = computed(() => this.currentFloorPlan()?.height || 800);
  // Dimensioni VISUALIZZATE (scalate)
  visualWidth = computed(() => this.floorPlanWidth() * this.canvasScale());
  visualHeight = computed(() => this.floorPlanHeight() * this.canvasScale());
  // Stato reattivo dal servizio
  floorPlans = this.floorPlanStateService.floorPlans;
  currentFloorPlan = this.floorPlanStateService.currentFloorPlan;
  tables = this.floorPlanStateService.tables;
  selectedTable = this.floorPlanStateService.selectedTable;
  selectedTables = this.floorPlanStateService.selectedTables;
  isDrawing = this.floorPlanStateService.isDrawing;
  isMergeMode = this.floorPlanStateService.isMergeMode;
  showTableModal = this.floorPlanStateService.showTableModal;
  showEditTableModal = this.floorPlanStateService.showEditTableModal;
  showMergeModal = this.floorPlanStateService.showMergeModal;
  showDimensionsModal = this.floorPlanStateService.showDimensionsModal;
  tableForm = this.floorPlanStateService.tableForm;
  currentFloorPlanId = computed(() => this.currentFloorPlan()?.id || null);
  // Configurazione
  gridSize = 20;
  snapToGrid = true;
  isLargeText = false;
  isEditingFloorPlanName = false;
  modalMode = signal("create");
  currentTableId = signal(null);
  // VARIABILI MAPPA
  availableVersions = computed(() => {
    this.refreshTrigger();
    const currentPlan = this.currentFloorPlan();
    if (!currentPlan)
      return [];
    const versions = /* @__PURE__ */ new Set();
    this.tableService.getTablesByFloorPlan(currentPlan.id).forEach((t) => {
      if (t.version)
        versions.add(t.version);
    });
    return Array.from(versions).sort((a, b) => a - b);
  });
  // Variabili locali per modali
  modalPosition = { x: 0, y: 0 };
  dimensionsForm = { width: 1e3, height: 800 };
  mergeForm = { tableName: "", tableNumber: "", capacity: 4 };
  editingFloorPlan = null;
  editedFloorPlanName = "";
  tableShapes = [];
  // Griglia visualizzata
  visualGridSize = computed(() => {
    const baseSize = 20;
    return baseSize / this.canvasScale();
  });
  constructor() {
    effect(() => {
      console.log("\u{1F440} Signal tables cambiato:", this.tables().length);
      const plan = this.currentFloorPlan();
      const canvasEl = this.canvasRef?.nativeElement;
      const containerEl = this.containerRef?.nativeElement;
      if (plan && canvasEl && containerEl && !this.canvasReady) {
        console.log("\u{1F58C}\uFE0F Canvas pronto, inizializzo interazioni");
        this.canvasReady = true;
        this.setupCanvasInteractions();
        this.setupResponsiveCanvas();
        this.setupPinchToZoom();
        this.updateCanvasDimensions();
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("\u{1F3C1} FloorPlanEditor ngOnInit");
      this.tableShapes = this.floorPlanService.getTableShapes();
      yield this.loadInitialData();
      this.subscriptions.add(this.floorPlanService.data$.subscribe((plans) => {
        this.floorPlanStateService.setFloorPlans(plans);
        if (plans.length > 0) {
          const currentPlan = this.currentFloorPlan();
          if (!currentPlan || !plans.find((p) => p.id === currentPlan.id)) {
            const defaultPlan = plans[0];
            this.floorPlanStateService.setCurrentFloorPlan(defaultPlan);
            this.floorPlanStateService.setCurrentVersion(defaultPlan.current_version);
            this.floorPlanStateService.setActiveVersion(defaultPlan.current_version);
            this.loadTablesForFloorPlan();
          }
        } else if (plans.length === 0) {
          this.createDefaultFloorPlan();
        }
      }));
      this.subscriptions.add(this.tableService.data$.subscribe(() => {
        if (!this.isDragging) {
          this.loadTablesForFloorPlan();
          this.refreshTrigger.update((v) => v + 1);
        }
      }));
      const nextTableNumber = this.generateNextTableNumber();
      this.floorPlanStateService.updateAutoTableNumber(nextTableNumber);
    });
  }
  loadInitialData() {
    return __async(this, null, function* () {
      try {
        yield this.floorPlanService.loadData();
        yield this.tableService.loadData();
      } catch (error) {
        console.error("\u{1F4A5} Error in loadInitialData:", error);
      }
    });
  }
  ngAfterViewInit() {
    setTimeout(() => this.updateCanvasDimensions(), 0);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.destroyed = true;
  }
  // ✅ METODO PRINCIPALE PER DIMENSIONI - OTTIMIZZATO
  setupResponsiveCanvas() {
    const container = this.containerRef?.nativeElement;
    if (!container)
      return;
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.containerWidth.set(entry.contentRect.width);
        this.containerHeight.set(entry.contentRect.height);
        this.isMobileView.set(entry.contentRect.width < 768);
        this.updateCanvasDimensions();
      }
    });
    this.resizeObserver.observe(container);
  }
  // Aggiungi queste proprietà al componente (sostituisci le esistenti):
  canvasWidth = signal(1e3);
  canvasHeight = signal(800);
  updateCanvasDimensions() {
    const containerWidth = this.containerWidth();
    const containerHeight = this.containerHeight();
    if (containerWidth === 0 || containerHeight === 0)
      return;
    const currentPlan = this.currentFloorPlan();
    if (!currentPlan)
      return;
    if (!this.userZoomed()) {
      const padding = this.isMobileView() ? 20 : 40;
      const availableWidth = containerWidth - padding;
      const availableHeight = containerHeight - padding;
      const scaleX = availableWidth / currentPlan.width;
      const scaleY = availableHeight / currentPlan.height;
      let scale = Math.min(scaleX, scaleY);
      scale = Math.max(0.1, Math.min(scale, 2));
      this.canvasScale.set(scale);
    }
    this.canvasWidth.set(currentPlan.width);
    this.canvasHeight.set(currentPlan.height);
    console.log("\u{1F4D0} Canvas updated:", {
      userZoomed: this.userZoomed(),
      container: `${containerWidth}x${containerHeight}`,
      floorPlan: `${currentPlan.width}x${currentPlan.height}`,
      scale: this.canvasScale(),
      visual: `${this.visualWidth()}x${this.visualHeight()}`
    });
  }
  // ✅ METODO refreshCanvasSize per template
  refreshCanvasSize() {
    this.updateCanvasDimensions();
  }
  zoomIn() {
    const oldScale = this.canvasScale();
    const newScale = Math.min(oldScale * 1.2, 3);
    this.canvasScale.set(newScale);
    this.userZoomed.set(true);
    setTimeout(() => {
      this.adjustScrollAfterZoom(oldScale, newScale);
    }, 10);
  }
  zoomOut() {
    const oldScale = this.canvasScale();
    const newScale = Math.max(oldScale * 0.8, 0.1);
    this.canvasScale.set(newScale);
    this.userZoomed.set(true);
    setTimeout(() => {
      this.adjustScrollAfterZoom(oldScale, newScale);
    }, 10);
  }
  adjustScrollAfterZoom(oldScale, newScale) {
    const container = this.containerRef?.nativeElement;
    if (!container)
      return;
    const centerX = container.scrollLeft + container.clientWidth / 2;
    const centerY = container.scrollTop + container.clientHeight / 2;
    const newScrollLeft = centerX * newScale / oldScale - container.clientWidth / 2;
    const newScrollTop = centerY * newScale / oldScale - container.clientHeight / 2;
    container.scrollLeft = Math.max(0, newScrollLeft);
    container.scrollTop = Math.max(0, newScrollTop);
  }
  resetCanvasZoom() {
    this.userZoomed.set(true);
    this.canvasScale.set(1);
    setTimeout(() => {
      const container = this.containerRef?.nativeElement;
      if (container) {
        container.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
          // Rende il ritorno meno brusco
        });
      }
    }, 10);
  }
  // METODI PRINCIPALI - RIPRISTINATI
  loadTablesForFloorPlan() {
    const currentPlan = this.currentFloorPlan();
    if (!currentPlan) {
      this.floorPlanStateService.setTables([]);
      return;
    }
    const version = this.floorPlanStateService.currentVersion();
    console.log(`\u{1F4E5} Caricamento tavoli per mappa ${currentPlan.name}, versione ${version}`);
    const tables = this.tableService.getVisibleTablesByFloorPlan(currentPlan.id, version);
    console.log("\u{1F4E6} Tavoli ricevuti:", tables.map((t) => ({ id: t.id, version: t.version, type: typeof t.version })));
    console.log(`\u{1F4E6} Tavoli caricati: ${tables.length}`);
    this.floorPlanStateService.setTables(tables);
    console.log("\u2705 Dopo setTables, valore attuale dal servizio:", this.floorPlanStateService.tables().length);
    const selected = this.selectedTable();
    if (selected) {
      const updatedSelected = tables.find((t) => t.id === selected.id);
      if (updatedSelected) {
        this.floorPlanStateService.setSelectedTable(updatedSelected);
      } else {
        this.floorPlanStateService.setSelectedTable(null);
      }
    }
  }
  onFloorPlanSelect(plan) {
    if (this.isEditingFloorPlanName) {
      this.cancelEditFloorPlanName();
    }
    this.userZoomed.set(false);
    this.floorPlanStateService.setCurrentFloorPlan(plan);
    this.floorPlanStateService.setCurrentVersion(plan.current_version);
    this.floorPlanStateService.setActiveVersion(plan.current_version);
    this.loadTablesForFloorPlan();
    this.deselectAll();
    this.cancelEditFloorPlan();
    setTimeout(() => this.updateCanvasDimensions(), 50);
  }
  // ✅ AGGIUNGI metodo mancante per template
  onFloorPlanSelectById(planId) {
    const plan = this.floorPlans().find((p) => p.id === planId);
    if (plan) {
      this.onFloorPlanSelect(plan);
    }
  }
  // GESTIONE TAVOLI - RIPRISTINATI
  selectTable(table) {
    if (this.isMergeMode()) {
      this.toggleTableSelection(table);
      return;
    }
    this.deselectAll();
    this.floorPlanStateService.setSelectedTable(table);
  }
  deselectAll() {
    this.floorPlanStateService.setSelectedTable(null);
    this.floorPlanStateService.setShowEditTableModal(false);
  }
  // CREAZIONE TAVOLI - RIPRISTINATI
  onCreateTable() {
    return __async(this, null, function* () {
      const currentPlan = this.currentFloorPlan();
      const restaurantId = yield this.authService.getCurrentStaffRestaurantId();
      if (!currentPlan || !restaurantId) {
        console.error("\u274C Missing required data");
        return;
      }
      try {
        const form = this.tableForm();
        const tempTable = {
          shape: form.shape,
          width: form.gridWidth * this.gridSize,
          height: form.gridHeight * this.gridSize,
          border_radius: form.borderRadius
        };
        const validatedDimensions = this.tableService.validateTableDimensions(tempTable);
        const newTable = {
          restaurant_id: restaurantId,
          floor_plan_id: currentPlan.id,
          table_name: form.tableName || `Tavolo ${form.tableNumber}`,
          table_number: form.tableNumber,
          capacity: form.capacity,
          shape: form.shape,
          position_x: this.modalPosition.x,
          position_y: this.modalPosition.y,
          width: validatedDimensions.width,
          height: validatedDimensions.height,
          rotation: 0,
          is_active: true,
          is_online_bookable: form.isOnlineBookable,
          is_merged: false,
          parent_table_id: null,
          merged_tables_ids: [],
          border_radius: form.borderRadius
        };
        const overlaps = this.tableService.checkTableOverlap(newTable);
        if (overlaps) {
          alert("Il tavolo si sovrappone a un altro tavolo. Scegli una posizione diversa.");
          return;
        }
        console.log("\u{1F4DD} Creating table:", newTable);
        const result = yield this.tableService.createTable(newTable);
        if (result) {
          console.log("\u2705 Table created successfully");
          this.floorPlanStateService.setShowTableModal(false);
          this.floorPlanStateService.setIsDrawing(false);
        } else {
          console.error("\u274C Table creation failed");
        }
      } catch (error) {
        console.error("\u{1F4A5} Error creating table:", error);
      }
    });
  }
  onUpdateTable() {
    return __async(this, null, function* () {
      const tableId = this.currentTableId();
      if (!tableId || !this.currentFloorPlan())
        return;
      try {
        const form = this.tableForm();
        const currentPlan = this.currentFloorPlan();
        const tempTable = {
          id: tableId,
          shape: form.shape,
          width: form.width,
          height: form.height,
          border_radius: form.borderRadius,
          position_x: 0,
          // placeholder
          position_y: 0
          // placeholder
        };
        const validatedDimensions = this.tableService.validateTableDimensions(tempTable);
        const allTables = this.tableService.getTables();
        const tableToUpdate = allTables.find((t) => t.id === tableId);
        if (!tableToUpdate)
          return;
        const outOfBounds = tableToUpdate.position_x < 0 || tableToUpdate.position_y < 0 || tableToUpdate.position_x + validatedDimensions.width > currentPlan.width || tableToUpdate.position_y + validatedDimensions.height > currentPlan.height;
        if (outOfBounds) {
          alert("Il tavolo esce dai confini della mappa. Riduci le dimensioni o sposta il tavolo.");
          return;
        }
        const updates = {
          shape: form.shape,
          width: validatedDimensions.width,
          height: validatedDimensions.height,
          border_radius: form.borderRadius,
          table_name: form.tableName,
          table_number: form.tableNumber,
          capacity: form.capacity,
          is_online_bookable: form.isOnlineBookable
        };
        const tempTableForOverlap = __spreadValues(__spreadValues({}, tableToUpdate), updates);
        const overlaps = this.tableService.checkTableOverlap(tempTableForOverlap, tableId);
        if (overlaps) {
          alert("Il tavolo si sovrappone a un altro tavolo. Modifica le dimensioni o la posizione.");
          return;
        }
        const success = yield this.tableService.updateTable(tableId, updates);
        if (success) {
          console.log("\u2705 Tavolo aggiornato con successo");
          this.floorPlanStateService.setShowTableModal(false);
          this.deselectAll();
        } else {
          console.error("\u274C Errore nell'aggiornamento del tavolo");
        }
      } catch (error) {
        console.error("\u274C Error updating table:", error);
      }
    });
  }
  onDeleteTable() {
    return __async(this, null, function* () {
      const table = this.selectedTable();
      if (!table)
        return;
      if (confirm("Sei sicuro di voler eliminare questo tavolo?")) {
        try {
          const success = yield this.tableService.deleteTable(table.id);
          if (success) {
            this.deselectAll();
          }
        } catch (error) {
          console.error("\u274C Error deleting table:", error);
        }
      }
    });
  }
  onCancelCreateTable() {
    this.floorPlanStateService.setShowTableModal(false);
    this.floorPlanStateService.setIsDrawing(false);
  }
  // GESTIONE FLOOR PLANS - RIPRISTINATI
  createNewFloorPlan() {
    return __async(this, null, function* () {
      const restaurantId = yield this.authService.getCurrentStaffRestaurantId();
      if (!restaurantId)
        return;
      try {
        const defaultDims = this.floorPlanService.getDefaultDimensions();
        const newPlan = {
          restaurant_id: restaurantId,
          name: `Mappa ${this.floorPlans().length + 1}`,
          width: defaultDims.width,
          height: defaultDims.height,
          is_active: true,
          current_version: 1
        };
        const result = yield this.floorPlanService.createFloorPlan(newPlan);
        if (result) {
          this.floorPlanStateService.resetForNewFloorPlan();
          this.floorPlanStateService.setCurrentFloorPlan(result);
          this.floorPlanStateService.setTables([]);
          this.userZoomed.set(false);
          setTimeout(() => {
            this.openDimensionsModal();
            setTimeout(() => this.updateCanvasDimensions(), 50);
          }, 100);
        }
      } catch (error) {
        console.error("\u{1F4A5} Error creating floor plan:", error);
      }
    });
  }
  onDeleteFloorPlan(plan, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      if (!confirm(`Sei sicuro di voler eliminare la mappa "${plan.name}"?`))
        return;
      try {
        const success = yield this.floorPlanService.deleteFloorPlan(plan.id);
        if (success && this.currentFloorPlan()?.id === plan.id) {
          const remaining = this.floorPlans().find((p) => p.id !== plan.id) || null;
          this.floorPlanStateService.setCurrentFloorPlan(remaining);
          this.loadTablesForFloorPlan();
        }
      } catch (error) {
        console.error("\u{1F4A5} Error deleting floor plan:", error);
      }
    });
  }
  rotateSelectedTable(degrees = 30) {
    return __async(this, null, function* () {
      const table = this.selectedTable();
      if (!table || this.isRotating)
        return;
      this.isRotating = true;
      try {
        const success = yield this.tableRotationService.rotateTable(table, degrees);
        if (!success)
          throw new Error("Errore nel salvataggio della rotazione");
      } catch (error) {
        console.error("\u274C Errore nella rotazione:", error);
        yield this.tableService.loadData();
        this.loadTablesForFloorPlan();
      } finally {
        this.isRotating = false;
      }
    });
  }
  // ✅ METODO PER RUOTARE CON ANGOLI PRECISI (0°, 90°, 180°, 270°)
  rotateToAngle(angle) {
    const table = this.selectedTable();
    if (!table || this.isRotating)
      return;
    const degrees = this.tableRotationService.rotateToAngle(table, angle);
    this.rotateSelectedTable(degrees);
  }
  // ✅ METODO PER RUOTARE CON IL MOUSE/WHEEL
  onMouseWheel(event) {
    if (!this.selectedTable() || this.isDrawing())
      return;
    if (event.ctrlKey) {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -5 : 5;
      this.rotateSelectedTable(delta);
    }
  }
  // MODALI E UI - RIPRISTINATI
  toggleDrawingMode() {
    this.floorPlanStateService.setIsDrawing(!this.isDrawing());
    if (!this.isDrawing()) {
      this.deselectAll();
    }
  }
  toggleMergeMode() {
    const currentMode = this.isMergeMode();
    this.floorPlanStateService.setIsMergeMode(!currentMode);
    if (currentMode) {
      this.floorPlanStateService.clearSelectedTables();
    } else {
      this.floorPlanStateService.setSelectedTables([]);
    }
    this.deselectAll();
  }
  setDrawingMode(value) {
    this.floorPlanStateService.setIsDrawing(value);
  }
  closeMergeModal() {
    this.floorPlanStateService.setShowMergeModal(false);
  }
  // UNIONE TAVOLI - RIPRISTINATI
  toggleTableSelection(table) {
    console.log("\u{1F4F1} toggleTableSelection chiamato per tavolo", table.table_number);
    if (!this.isMergeMode() || table.is_merged)
      return;
    const selected = this.selectedTables();
    const index = selected.findIndex((t) => t.id === table.id);
    if (index > -1) {
      this.floorPlanStateService.removeFromSelectedTables(table.id);
    } else {
      if (selected.length === 0 || selected.some((selectedTable) => this.floorPlanInteractionService.areTablesAdjacent(selectedTable, table))) {
        if (selected.length < 4) {
          this.floorPlanStateService.addToSelectedTables(table);
        }
      } else {
        this.floorPlanInteractionService.showAdjacencyWarning(table, selected);
      }
    }
  }
  canMergeTables() {
    const selected = this.selectedTables();
    const basicConditions = selected.length >= 2 && selected.length <= 4 && selected.every((table) => !table.is_merged);
    return basicConditions && this.floorPlanInteractionService.areSelectedTablesAdjacent(selected, this.tables());
  }
  openMergeModal() {
    if (!this.canMergeTables())
      return;
    this.mergeForm = {
      tableName: this.floorPlanService.getMergedTableName(this.selectedTables()),
      // ✅ Usa il servizio
      tableNumber: this.floorPlanService.getMergedTableNumber(this.selectedTables()),
      // ✅ Usa il servizio
      capacity: this.floorPlanService.getTotalCapacity(this.selectedTables())
      // ✅ Usa il servizio
    };
    this.floorPlanStateService.setShowMergeModal(true);
  }
  onMergeTables() {
    return __async(this, null, function* () {
      const currentPlan = this.currentFloorPlan();
      const restaurantId = yield this.authService.getCurrentStaffRestaurantId();
      if (!currentPlan || !restaurantId || !this.canMergeTables())
        return;
      try {
        const selected = this.selectedTables();
        const minX = Math.min(...selected.map((t) => t.position_x));
        const minY = Math.min(...selected.map((t) => t.position_y));
        const maxX = Math.max(...selected.map((t) => t.position_x + t.width));
        const maxY = Math.max(...selected.map((t) => t.position_y + t.height));
        const mergeData = {
          table_name: this.mergeForm.tableName,
          table_number: this.mergeForm.tableNumber,
          capacity: this.mergeForm.capacity,
          position_x: minX,
          position_y: minY,
          width: maxX - minX,
          height: maxY - minY
        };
        const mergedTable = yield this.tableMergeService.mergeTables(selected, mergeData, currentPlan.id, restaurantId);
        if (mergedTable) {
          this.floorPlanStateService.setShowMergeModal(false);
          this.floorPlanStateService.setIsMergeMode(false);
          this.floorPlanStateService.clearSelectedTables();
          yield this.tableService.loadData();
          this.loadTablesForFloorPlan();
        }
      } catch (error) {
        console.error("\u274C Error merging tables:", error);
      }
    });
  }
  onSplitTable(table) {
    return __async(this, null, function* () {
      if (!table.merged_tables_ids || table.merged_tables_ids.length === 0) {
        console.log("\u274C Questo tavolo non \xE8 un tavolo unito");
        return;
      }
      if (!confirm("Sei sicuro di voler separare questo tavolo?"))
        return;
      try {
        console.log("\u{1F527} Separando tavolo unito:", table.table_number);
        const success = yield this.tableMergeService.splitMergedTable(table);
        if (success) {
          console.log("\u2705 Tavolo separato con successo");
          yield this.tableService.loadData();
          this.loadTablesForFloorPlan();
          this.deselectAll();
        } else {
          console.error("\u274C Errore durante la separazione del tavolo");
          alert("Errore durante la separazione del tavolo. Riprova.");
        }
      } catch (error) {
        console.error("\u274C Error splitting table:", error);
        alert("Errore durante la separazione del tavolo: " + error.message);
      }
    });
  }
  // DIMENSIONI SALA - RIPRISTINATI
  openDimensionsModal() {
    const currentPlan = this.currentFloorPlan();
    if (!currentPlan)
      return;
    this.dimensionsForm = {
      width: currentPlan.width,
      height: currentPlan.height
    };
    console.log("\u{1F4CF} Opening dimensions modal for:", {
      floorPlanId: currentPlan.id,
      name: currentPlan.name,
      currentTables: this.tables().length,
      dimensions: this.dimensionsForm
    });
    this.floorPlanStateService.setShowDimensionsModal(true);
  }
  onCancelDimensionsModal() {
    this.floorPlanStateService.setShowDimensionsModal(false);
  }
  onSaveDimensions() {
    return __async(this, null, function* () {
      const currentPlan = this.currentFloorPlan();
      if (!currentPlan)
        return;
      try {
        const tablesInCurrentPlan = this.tables().filter((table) => table.floor_plan_id === currentPlan.id);
        if (tablesInCurrentPlan.length > 0) {
          const outOfBoundsTables = tablesInCurrentPlan.filter((table) => {
            return table.position_x + table.width > this.dimensionsForm.width || table.position_y + table.height > this.dimensionsForm.height;
          });
          if (outOfBoundsTables.length > 0) {
            const shouldContinue = confirm(`${outOfBoundsTables.length} tavolo(i) escono dai nuovi bordi della mappa. Vuoi continuare? I tavoli verranno spostati automaticamente.`);
            if (!shouldContinue)
              return;
            for (const table of outOfBoundsTables) {
              table.position_x = Math.min(table.position_x, this.dimensionsForm.width - table.width);
              table.position_y = Math.min(table.position_y, this.dimensionsForm.height - table.height);
              yield this.tableService.updateTable(table.id, {
                position_x: table.position_x,
                position_y: table.position_y
              });
            }
          }
        }
        const success = yield this.floorPlanService.updateFloorPlan(currentPlan.id, {
          width: this.dimensionsForm.width,
          height: this.dimensionsForm.height
        });
        if (success) {
          const updatedPlan = __spreadValues(__spreadValues({}, currentPlan), this.dimensionsForm);
          this.floorPlanStateService.setCurrentFloorPlan(updatedPlan);
          this.floorPlanStateService.setShowDimensionsModal(false);
          this.updateCanvasDimensions();
          console.log("\u2705 Dimensioni mappa aggiornate con successo");
        }
      } catch (error) {
        console.error("\u274C Error updating floor plan dimensions:", error);
      }
    });
  }
  setDimensions(width, height) {
    this.dimensionsForm.width = width;
    this.dimensionsForm.height = height;
  }
  // MODIFICA NOME FLOOR PLAN - RIPRISTINATI
  startEditFloorPlan(plan, event) {
    event.stopPropagation();
    if (!plan)
      return;
    this.editingFloorPlan = plan;
    this.editedFloorPlanName = plan.name;
  }
  cancelEditFloorPlan() {
    this.editingFloorPlan = null;
  }
  // METODI UTILITY - RIPRISTINATI
  createDefaultFloorPlan() {
    return __async(this, null, function* () {
      const restaurantId = yield this.authService.getCurrentStaffRestaurantId();
      if (!restaurantId)
        return;
      try {
        const defaultDims = this.floorPlanService.getDefaultDimensions();
        const newPlan = {
          restaurant_id: restaurantId,
          name: "Mappa Principale",
          width: defaultDims.width,
          height: defaultDims.height,
          is_active: true,
          current_version: 1
        };
        const result = yield this.floorPlanService.createFloorPlan(newPlan);
        if (result) {
          this.floorPlanStateService.setCurrentFloorPlan(result);
        }
      } catch (error) {
        console.error("\u{1F4A5} Error creating default floor plan:", error);
      }
    });
  }
  generateNextTableNumber() {
    return this.tableService.generateNextTableNumber(this.tables());
  }
  // METODI PER TAVOLI VICINI E UNIONE - RIPRISTINATI
  highlightAdjacentTables() {
    console.log("\u{1F3AF} Mostra vicini - Inizio");
    this.highlightMessage.set(null);
    const allTables = this.tables();
    if (allTables.length < 2) {
      this.highlightMessage.set("Ci sono meno di 2 tavoli nella mappa. Aggiungi altri tavoli per vedere quelli vicini.");
      console.warn("\u26A0\uFE0F Meno di 2 tavoli nella mappa");
      return;
    }
    console.log("\u{1F4CA} Tavoli totali:", allTables.length);
    const groups = this.findAdjacentTableGroups(allTables);
    const adjacentGroups = groups.filter((group) => group.length > 1);
    if (adjacentGroups.length === 0) {
      this.highlightMessage.set("Non ci sono tavoli vicini tra loro in questa mappa. Sposta i tavoli pi\xF9 vicini per poterli unire.");
      console.warn("\u26A0\uFE0F Nessun gruppo di tavoli adiacenti trovato");
      return;
    }
    console.log(`\u{1F50D} Trovati ${adjacentGroups.length} gruppi di tavoli adiacenti`);
    let totalAdjacentTables = 0;
    adjacentGroups.forEach((group) => {
      totalAdjacentTables += group.length;
    });
    this.highlightMessage.set(`Trovati ${adjacentGroups.length} gruppi di tavoli adiacenti (${totalAdjacentTables} tavoli totali). L'evidenziazione verr\xE0 rimossa tra 5 secondi.`);
    adjacentGroups.forEach((group) => {
      group.forEach((table) => {
        this.highlightTable(table);
      });
    });
    setTimeout(() => {
      this.clearAllHighlights();
      setTimeout(() => {
        this.highlightMessage.set(null);
      }, 500);
    }, 5e3);
  }
  // Aggiungi questi metodi helper SEMPLICI:
  findAdjacentTableGroups(tables) {
    const groups = [];
    const visited = /* @__PURE__ */ new Set();
    for (const table of tables) {
      if (!visited.has(table.id)) {
        const group = this.findConnectedTables(table, tables, visited);
        groups.push(group);
      }
    }
    return groups.filter((group) => group.length > 0);
  }
  findConnectedTables(startTable, allTables, visited) {
    const group = [];
    const queue = [startTable];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!visited.has(current.id)) {
        visited.add(current.id);
        group.push(current);
        for (const otherTable of allTables) {
          if (!visited.has(otherTable.id) && otherTable.id !== current.id && this.floorPlanInteractionService.areTablesAdjacent(current, otherTable, 0)) {
            queue.push(otherTable);
          }
        }
      }
    }
    return group;
  }
  // Metodo SEMPLICE per evidenziare un tavolo
  highlightTable(table) {
    const element = document.querySelector(`[data-table-id="${table.id}"]`);
    if (element) {
      element.classList.add("adjacent-highlight");
      console.log(`\u2705 Evidenziato tavolo ${table.table_number}`);
    } else {
      console.warn(`\u26A0\uFE0F Tavolo ${table.table_number} non trovato nel DOM`);
    }
  }
  // Metodo per pulire tutte le evidenziazioni
  clearAllHighlights() {
    const elements = document.querySelectorAll(".adjacent-highlight");
    elements.forEach((el) => {
      el.classList.remove("adjacent-highlight");
    });
    console.log("\u{1F9F9} Evidenziazioni rimosse");
  }
  // METODI PER ANTEPRIME - RIPRISTINATI
  getPreviewBorderRadius() {
    const form = this.tableForm();
    return this.floorPlanService.getPreviewBorderRadius(form.shape, form.borderRadius);
  }
  getPreviewBorderRadiusValue() {
    const form = this.tableForm();
    return this.floorPlanService.getPreviewBorderRadiusValue(form.shape, form.borderRadius);
  }
  getEditPreviewBorderRadius() {
    const table = this.selectedTable();
    if (!table)
      return "8px";
    return this.floorPlanService.getPreviewBorderRadius(table.shape, table.border_radius ?? 8);
  }
  getEditPreviewBorderRadiusValue() {
    const table = this.selectedTable();
    if (!table)
      return "8px";
    return this.floorPlanService.getPreviewBorderRadiusValue(table.shape, table.border_radius ?? 8);
  }
  // METODI PER UNIONE - RIPRISTINATI
  getSelectedTableNumbers() {
    return this.floorPlanService.getSelectedTableNumbers(this.selectedTables());
  }
  // METODI PRIVATI UTILITY - RIPRISTINATI
  getTableElement(table) {
    if (!this.canvasRef?.nativeElement) {
      return null;
    }
    const element = this.canvasRef.nativeElement.querySelector(`[data-table-id="${table.id}"]`);
    return element ? element : null;
  }
  // METODI PER MOBILE - RIPRISTINATI
  setupCanvasInteractions() {
    const canvas = this.canvasRef.nativeElement;
    this.renderer.listen(canvas, "click", (event) => this.onCanvasClick(event));
    this.renderer.listen(canvas, "pointerdown", (event) => this.onCanvasPointerDown(event));
    this.renderer.listen(canvas, "touchstart", (event) => {
      this.onCanvasTouchStart(event);
    }, { passive: false });
    this.renderer.listen(document, "pointermove", () => {
      if (this.isDragging) {
        canvas.classList.add("dragging-active");
      }
    });
    this.renderer.listen(document, "pointerup", () => {
      this.isDragging = false;
      canvas.classList.remove("dragging-active");
    });
  }
  onCanvasPointerDown(event) {
    if (this.isDrawing())
      return;
    const target = event.target;
    const tableElement = target.closest(".table-element");
    if (tableElement) {
      this.isDragging = true;
      const tableId = tableElement.getAttribute("data-table-id");
      const table = this.tables().find((t) => t.id === tableId);
      if (table) {
        console.log("\u{1F7E2} START DRAG for table:", table.table_number);
        tableElement.classList.add("dragging");
        tableElement.style.transition = "none";
        this.selectTable(table);
        this.floorPlanInteractionService.startTableDrag(table.id, event, this.canvasRef.nativeElement, this.canvasScale());
      }
    } else {
      this.deselectAll();
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onCanvasTouchStart(event) {
    if (this.isDrawing())
      return;
    const target = event.target;
    const tableElement = target.closest(".table-element");
    if (tableElement) {
      if (event.cancelable) {
        event.preventDefault();
      }
      const tableId = tableElement.getAttribute("data-table-id");
      const table = this.tables().find((t) => t.id === tableId);
      if (table) {
        this.selectTable(table);
        if (event.cancelable) {
          this.isDragging = true;
          const touch = event.touches[0];
          const fakePointerEvent = new PointerEvent("pointerdown", {
            clientX: touch.clientX,
            clientY: touch.clientY,
            pointerId: 1
          });
          tableElement.classList.add("dragging");
          tableElement.style.transition = "none";
          this.floorPlanInteractionService.startTableDrag(table.id, fakePointerEvent, this.canvasRef.nativeElement);
        } else {
          console.log("\u{1F4F1} Touch event non cancellabile, solo selezione");
        }
      }
    } else {
      this.deselectAll();
    }
  }
  setupPinchToZoom() {
    if (!this.canvasRef?.nativeElement) {
      console.warn("Canvas ref non disponibile per pinch-to-zoom, rimando l'inizializzazione");
      setTimeout(() => this.setupPinchToZoom(), 100);
      return;
    }
    const canvas = this.canvasRef.nativeElement;
    let initialDistance = 0;
    let initialScale = 0;
    this.renderer.listen(canvas, "touchstart", (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        initialDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        initialScale = this.canvasScale();
      }
    }, { passive: false });
    this.renderer.listen(canvas, "touchmove", (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        if (initialDistance > 0) {
          const scaleChange = currentDistance / initialDistance;
          const newScale = initialScale * scaleChange;
          const clampedScale = Math.max(0.3, Math.min(newScale, 3));
          this.canvasScale.set(clampedScale);
          this.updateCanvasDimensions();
        }
      }
    }, { passive: false });
    this.renderer.listen(canvas, "touchend", () => {
      initialDistance = 0;
      initialScale = 0;
    });
  }
  // ✅ AGGIUNGI metodo per template
  toggleSize() {
    this.isLargeText = !this.isLargeText;
  }
  // ✅ AGGIUNGI trackBy per performance
  trackByTableId(index, table) {
    return table.id;
  }
  trackByFloorPlanId(index, floorPlan) {
    return floorPlan.id;
  }
  // ✅ AGGIUNGI metodo per log (opzionale)
  logCanvasInfo() {
    console.log("\u{1F4D0} Canvas Info:", {
      floorPlanWidth: this.floorPlanWidth(),
      floorPlanHeight: this.floorPlanHeight(),
      canvasScale: this.canvasScale(),
      // ✅ Aggiungi parentesi
      visualWidth: this.visualWidth(),
      // ✅ Aggiungi parentesi
      visualHeight: this.visualHeight(),
      // ✅ Aggiungi parentesi
      isMobile: this.isMobileView()
    });
  }
  // Aggiungi questo metodo per gestire i cambiamenti delle dimensioni
  onDimensionChange() {
    if (this.modalMode() === "edit") {
      const form = this.floorPlanStateService.tableForm();
      if (form.shape === "circle" || form.shape === "square") {
        this.floorPlanStateService.updateTableForm({
          height: form.width,
          gridHeight: Math.round(form.width / this.gridSize)
        });
      }
    }
  }
  // Metodo per gestire il cambio delle dimensioni in griglia (creazione)
  onGridDimensionChange() {
    if (this.modalMode() === "create") {
      const form = this.floorPlanStateService.tableForm();
      const width = form.gridWidth * this.gridSize;
      const height = form.gridHeight * this.gridSize;
      if (form.shape === "circle" || form.shape === "square") {
        const newHeight = form.gridWidth * this.gridSize;
        this.floorPlanStateService.updateTableForm({
          width,
          height: newHeight,
          gridHeight: form.gridWidth
        });
      } else {
        this.floorPlanStateService.updateTableForm({
          width,
          height
        });
      }
    }
  }
  // Metodo per avviare la modifica del nome
  startEditFloorPlanName() {
    const currentPlan = this.currentFloorPlan();
    if (!currentPlan)
      return;
    this.isEditingFloorPlanName = true;
    this.editedFloorPlanName = currentPlan.name;
  }
  // Metodo per salvare il nome
  saveFloorPlanName() {
    return __async(this, null, function* () {
      const currentPlan = this.currentFloorPlan();
      if (!currentPlan || !this.editedFloorPlanName.trim())
        return;
      try {
        const success = yield this.floorPlanService.updateFloorPlan(currentPlan.id, {
          name: this.editedFloorPlanName
        });
        if (success) {
          const updatedPlan = __spreadProps(__spreadValues({}, currentPlan), { name: this.editedFloorPlanName });
          this.floorPlanStateService.setCurrentFloorPlan(updatedPlan);
          yield this.floorPlanService.loadData();
          this.isEditingFloorPlanName = false;
          this.editedFloorPlanName = "";
        }
      } catch (error) {
        console.error("\u274C Error saving floor plan name:", error);
      }
    });
  }
  // Metodo per annullare la modifica
  cancelEditFloorPlanName() {
    this.isEditingFloorPlanName = false;
    this.editedFloorPlanName = "";
  }
  // Calcola le dimensioni di scroll necessarie
  getScrollDimensions() {
    const container = this.containerRef?.nativeElement;
    const canvas = this.canvasRef?.nativeElement;
    if (!container || !canvas)
      return { scrollWidth: 0, scrollHeight: 0 };
    const scaledWidth = this.floorPlanWidth() * this.canvasScale();
    const scaledHeight = this.floorPlanHeight() * this.canvasScale();
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const scrollWidth = Math.max(0, scaledWidth - containerWidth);
    const scrollHeight = Math.max(0, scaledHeight - containerHeight);
    return { scrollWidth, scrollHeight, canScroll: scrollWidth > 0 || scrollHeight > 0 };
  }
  getTotalCapacity() {
    return this.floorPlanService.getTotalCapacity(this.selectedTables());
  }
  // Per i tavoli
  getTableStyle(table) {
    return this.tableService.getTableStyle(table);
  }
  getTableClass(table) {
    const baseClass = this.tableService.getTableClass(table, this.selectedTable(), this.selectedTables(), this.isMergeMode());
    const classes = [baseClass];
    if (this.isMergeMode() && this.selectedTables().some((t) => t.id === table.id)) {
      classes.push("merge-selected");
    }
    return classes.join(" ");
  }
  getMergedTableName() {
    return this.floorPlanService.getMergedTableName(this.selectedTables());
  }
  getMergedTableNumber() {
    return this.floorPlanService.getMergedTableNumber(this.selectedTables());
  }
  // Per l'adiacenza (se necessario)
  areTablesAdjacent(table1, table2) {
    return this.floorPlanInteractionService.areTablesAdjacent(table1, table2);
  }
  areSelectedTablesAdjacent() {
    return this.floorPlanInteractionService.areSelectedTablesAdjacent(this.selectedTables(), this.tables());
  }
  showAdjacencyWarning(table) {
    this.floorPlanInteractionService.showAdjacencyWarning(table, this.selectedTables());
  }
  testHighlight() {
    console.log("\u{1F526} TEST HIGHLIGHT - Verifica tavoli nel DOM:");
    if (!this.canvasRef?.nativeElement) {
      console.error("\u274C Canvas non trovato");
      return;
    }
    const tableElements = this.canvasRef.nativeElement.querySelectorAll(".table-element");
    console.log(`Tavoli nel DOM: ${tableElements.length}`);
    if (tableElements.length > 0) {
      const firstTable = tableElements[0];
      firstTable.style.border = "5px solid red !important";
      firstTable.style.boxShadow = "0 0 20px red !important";
      console.log("\u2705 Primo tavolo evidenziato (stile diretto)");
      firstTable.classList.add("test-highlight");
      console.log("\u2705 Aggiunta classe test-highlight");
    }
    const adjacentTables = this.floorPlanInteractionService.getAdjacentTablesToSelection(this.selectedTables(), this.tables());
    console.log("Tavoli adiacenti dal servizio:", adjacentTables.map((t) => t.table_number));
  }
  // Dimensioni per l'anteprima
  // floor-plan.component.ts - MODIFICA le computed properties:
  previewWidth = computed(() => {
    const form = this.floorPlanStateService.tableForm();
    const mode = this.modalMode();
    const result = mode === "create" ? form.gridWidth * this.gridSize : form.width;
    console.log("\u{1F4CF} previewWidth calcolato:", { mode, gridWidth: form.gridWidth, width: form.width, gridSize: this.gridSize, result });
    return result;
  });
  previewHeight = computed(() => {
    const form = this.floorPlanStateService.tableForm();
    const mode = this.modalMode();
    let result;
    if (mode === "create") {
      result = form.gridHeight * this.gridSize;
    } else {
      result = form.height;
    }
    console.log("\u{1F4CF} previewHeight calcolato:", { mode, gridHeight: form.gridHeight, height: form.height, result });
    return result;
  });
  previewBorderRadius = computed(() => {
    const form = this.floorPlanStateService.tableForm();
    let result;
    if (form.shape === "circle") {
      result = "50%";
    } else {
      result = `${form.borderRadius}px`;
    }
    console.log("\u{1F504} previewBorderRadius calcolato:", { shape: form.shape, borderRadius: form.borderRadius, result });
    return result;
  });
  updatePreview() {
    console.log("\u{1F504} Aggiorno anteprima...");
    const currentForm = this.floorPlanStateService.tableForm();
    this.floorPlanStateService.updateTableForm(__spreadValues({}, currentForm));
  }
  // Metodo per aprire il modal in modalità creazione
  openCreateTableModal(position) {
    this.modalMode.set("create");
    this.modalPosition = position;
    this.currentTableId.set(null);
    this.floorPlanStateService.resetTableForm();
    this.floorPlanStateService.setShowTableModal(true);
  }
  // Metodo per aprire il modal in modalità modifica
  openEditTableModal(table) {
    const targetTable = table || this.selectedTable();
    if (!targetTable)
      return;
    this.modalMode.set("edit");
    this.currentTableId.set(targetTable.id);
    const isMerged = targetTable.is_merged || targetTable.merged_tables_ids && targetTable.merged_tables_ids.length > 0;
    const gridWidth = Math.round(targetTable.width / this.gridSize);
    const gridHeight = Math.round(targetTable.height / this.gridSize);
    this.floorPlanStateService.updateTableForm({
      shape: targetTable.shape,
      gridWidth,
      gridHeight,
      width: targetTable.width,
      height: targetTable.height,
      borderRadius: targetTable.border_radius || 8,
      tableNumber: targetTable.table_number,
      capacity: targetTable.capacity,
      tableName: targetTable.table_name || "",
      isOnlineBookable: targetTable.is_online_bookable,
      isMerged
      // Aggiungi questa flag
    });
    this.floorPlanStateService.setShowTableModal(true);
    if (isMerged) {
      setTimeout(() => {
        alert("\u26A0\uFE0F Questo tavolo \xE8 unito. Per modificare le dimensioni, separalo prima.");
      }, 100);
    }
  }
  // Metodo unificato per salvare (creazione o modifica)
  onSaveTable() {
    return __async(this, null, function* () {
      if (this.modalMode() === "edit" && this.tableForm().isMerged) {
        const form = this.tableForm();
        const allTables = this.tableService.getTables();
        const originalTable = allTables.find((t) => t.id === this.currentTableId());
        if (originalTable) {
          const dimensionsChanged = form.width !== originalTable.width || form.height !== originalTable.height;
          if (dimensionsChanged) {
            alert("\u274C Non puoi modificare le dimensioni di un tavolo unito. Separalo prima.");
            return;
          }
        }
      }
      if (this.modalMode() === "create") {
        yield this.onCreateTable();
      } else {
        yield this.onUpdateTable();
      }
    });
  }
  // SOSTITUISCI il metodo onCanvasClick esistente
  onCanvasClick(event) {
    if (!this.isDrawing() || !this.currentFloorPlan())
      return;
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const scale = this.canvasScale();
    const x = (event.clientX - rect.left) / scale;
    const y = (event.clientY - rect.top) / scale;
    const snappedX = this.snapToGrid ? Math.round(x / this.gridSize) * this.gridSize : x;
    const snappedY = this.snapToGrid ? Math.round(y / this.gridSize) * this.gridSize : y;
    const maxX = this.floorPlanWidth() - 40;
    const maxY = this.floorPlanHeight() - 40;
    const finalX = Math.min(Math.max(snappedX, 0), maxX);
    const finalY = Math.min(Math.max(snappedY, 0), maxY);
    this.openCreateTableModal({ x: finalX, y: finalY });
    event.stopPropagation();
  }
  // Metodo per cambiare la larghezza in modalità creazione (gridWidth)
  onGridWidthChange(value) {
    const form = this.floorPlanStateService.tableForm();
    this.floorPlanStateService.updateTableForm({ gridWidth: value });
    const width = value * this.gridSize;
    if (form.shape === "circle" || form.shape === "square") {
      this.floorPlanStateService.updateTableForm({
        width,
        height: width,
        gridHeight: value
      });
    } else {
      this.floorPlanStateService.updateTableForm({ width });
    }
  }
  // Metodo per cambiare l'altezza in modalità creazione (gridHeight)
  onGridHeightChange(value) {
    const form = this.floorPlanStateService.tableForm();
    this.floorPlanStateService.updateTableForm({ gridHeight: value });
    if (form.shape !== "circle" && form.shape !== "square") {
      const height = value * this.gridSize;
      this.floorPlanStateService.updateTableForm({ height });
    }
  }
  // Metodo per cambiare la larghezza in modalità modifica (width)
  onWidthChange(value) {
    const form = this.floorPlanStateService.tableForm();
    this.floorPlanStateService.updateTableForm({ width: value });
    if (form.shape === "circle" || form.shape === "square") {
      this.floorPlanStateService.updateTableForm({
        height: value,
        gridWidth: Math.round(value / this.gridSize),
        gridHeight: Math.round(value / this.gridSize)
      });
    } else {
      this.floorPlanStateService.updateTableForm({
        gridWidth: Math.round(value / this.gridSize)
      });
    }
  }
  // Metodo per cambiare l'altezza in modalità modifica (height)
  onHeightChange(value) {
    const form = this.floorPlanStateService.tableForm();
    if (form.shape !== "circle" && form.shape !== "square") {
      this.floorPlanStateService.updateTableForm({
        height: value,
        gridHeight: Math.round(value / this.gridSize)
      });
    }
  }
  // Metodo per cambiare il border radius
  onBorderRadiusChange(value) {
    this.floorPlanStateService.updateTableForm({ borderRadius: value });
  }
  // Aggiorna il metodo onShapeSelect per gestire meglio l'anteprima
  onShapeSelect(shape) {
    console.log("\u{1F3AF} Cambio forma a:", shape.type);
    this.floorPlanStateService.initializeTableFormForShape(shape.type);
    setTimeout(() => {
      const form = this.floorPlanStateService.tableForm();
      if (this.modalMode() === "create") {
        const width = form.gridWidth * this.gridSize;
        const height = form.gridHeight * this.gridSize;
        if (form.shape === "circle" || form.shape === "square") {
          this.floorPlanStateService.updateTableForm({
            width,
            height: width,
            gridHeight: form.gridWidth
          });
        } else {
          this.floorPlanStateService.updateTableForm({
            width,
            height
          });
        }
      } else {
        if (form.shape === "circle" || form.shape === "square") {
          this.floorPlanStateService.updateTableForm({
            height: form.width,
            gridHeight: Math.round(form.width / this.gridSize)
          });
        }
      }
    }, 0);
  }
  onTablePointerDown(event, table) {
    event.stopPropagation();
    event.preventDefault();
    if (this.isDrawing())
      return;
    if (this.isMergeMode()) {
      this.toggleTableSelection(table);
      return;
    }
    this.selectTable(table);
    if (this.floorPlanStateService.isEditMode()) {
      this.isDragging = true;
      const tableElement = event.target;
      if (tableElement) {
        tableElement.classList.add("dragging");
        tableElement.style.transition = "none";
      }
      this.floorPlanInteractionService.startTableDrag(table.id, event, this.canvasRef.nativeElement, this.canvasScale());
    }
  }
  onVersionChange(version) {
    return __async(this, null, function* () {
      this.floorPlanStateService.setCurrentVersion(version);
      yield this.tableService.loadData();
      const currentPlan = this.currentFloorPlan();
      if (currentPlan) {
        console.log("\u{1F4CA} Dopo loadData, tavoli totali nel servizio:", this.tableService.getTables().length);
        console.log("\u{1F4CA} Tavoli per questo floorPlan:", this.tableService.getTablesByFloorPlan(currentPlan.id).map((t) => ({ id: t.id, version: t.version })));
      }
      this.loadTablesForFloorPlan();
    });
  }
  setCurrentVersion(floorPlanId, version) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabaseService.getSupabaseClient().from("restaurant_floor_plans").update({ current_version: version, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", floorPlanId);
        if (error)
          throw error;
        return true;
      } catch (error) {
        console.error("\u274C Error setting current version:", error);
        return false;
      }
    });
  }
  publishVersion(version) {
    return __async(this, null, function* () {
      const currentPlan = this.currentFloorPlan();
      if (!currentPlan)
        return;
      const success = yield this.floorPlanService.setCurrentVersion(currentPlan.id, version);
      if (success) {
        this.floorPlanStateService.setActiveVersion(version);
        yield this.tableService.loadData();
        this.loadTablesForFloorPlan();
      }
    });
  }
  createNewVersion() {
    return __async(this, null, function* () {
      const currentPlan = this.currentFloorPlan();
      if (!currentPlan)
        return;
      const nextVersion = yield this.tableService.getNextVersion(currentPlan.id);
      console.log("\u{1F195} Nuova versione:", { nextVersion, planId: currentPlan.id });
      const currentTables = this.tableService.getTablesByFloorPlan(currentPlan.id, this.floorPlanStateService.currentVersion());
      console.log("\u{1F4CB} Tavoli da duplicare:", currentTables.length);
      for (const table of currentTables) {
        console.log("\u{1F504} Duplicazione tavolo", table.table_number);
        const _a = table, { id, created_at } = _a, tableData = __objRest(_a, ["id", "created_at"]);
        const newTable = __spreadProps(__spreadValues({}, tableData), {
          version: nextVersion
        });
        const result = yield this.tableService.createTable(newTable);
        console.log("\u2705 Risultato creazione:", result);
      }
      yield this.tableService.loadData();
      this.refreshTrigger.update((v) => v + 1);
      this.floorPlanStateService.setCurrentVersion(nextVersion);
      this.loadTablesForFloorPlan();
    });
  }
  deleteVersion(version) {
    return __async(this, null, function* () {
      const currentPlan = this.currentFloorPlan();
      if (!currentPlan)
        return;
      if (version === this.floorPlanStateService.activeVersion()) {
        alert("Non puoi eliminare la versione attiva.");
        return;
      }
      const confirmDelete = confirm(`Sei sicuro di voler eliminare la versione ${version}?`);
      if (!confirmDelete)
        return;
      try {
        const tablesToDelete = this.tableService.getTablesByFloorPlan(currentPlan.id, version);
        for (const table of tablesToDelete) {
          yield this.tableService.deleteTable(table.id);
        }
        yield this.tableService.loadData();
        this.refreshTrigger.update((v) => v + 1);
        if (this.floorPlanStateService.currentVersion() === version) {
          this.floorPlanStateService.setCurrentVersion(this.floorPlanStateService.activeVersion());
        }
        this.loadTablesForFloorPlan();
      } catch (error) {
        console.error("\u274C Errore durante l'eliminazione della versione:", error);
        alert("Errore durante l'eliminazione. Riprova.");
      }
    });
  }
  static \u0275fac = function FloorPlanEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorPlanEditor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloorPlanEditor, selectors: [["app-floor-plan"]], viewQuery: function FloorPlanEditor_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerRef = _t.first);
    }
  }, hostBindings: function FloorPlanEditor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("wheel", function FloorPlanEditor_wheel_HostBindingHandler($event) {
        return ctx.onMouseWheel($event);
      });
    }
  }, decls: 93, vars: 38, consts: [["canvasContainer", ""], ["floorPlanCanvas", ""], [1, "page-container"], [1, "form-card"], [1, "flex", "flex-col"], ["data-tutorial", "floor-plan-selector", 1, "form-row", "mb-md"], [1, "form-group"], [1, "standard-label"], [1, "flex", "gap-sm", "items-center"], [1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["data-tutorial", "floor-plan-new", 1, "flex", "gap-sm"], ["title", "Modifica nome mappa", 1, "icon-button", 3, "click", "disabled"], [1, "material-icons"], [1, "icon-button", 3, "click"], ["name", "plus", 3, "size"], [1, "icon-button", 3, "click", "disabled"], ["name", "proportions", 3, "size"], ["title", "Elimina mappa", 1, "icon-button", 3, "click", "disabled"], ["name", "trash-2", 3, "size"], ["class", "mt-sm", 4, "ngIf"], ["class", "form-group", "data-tutorial", "floor-plan-version", 4, "ngIf"], [1, "form-row"], ["data-tutorial", "floor-plan-zoom", 1, "flex", "gap-sm", "items-center", 2, "max-width", "max-content"], ["title", "Zoom -", 1, "icon-button", 3, "click"], [1, "text-sm"], ["title", "Zoom +", 1, "icon-button", 3, "click"], ["title", "Reset zoom", 1, "icon-button", 3, "click"], [1, "checkbox-label", "ml-sm"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "checkbox-content"], [1, "text-muted"], ["class", "form-group mt-md", 4, "ngIf"], ["class", "rounded mb-sm p-sm", "style", "background-color: var(--smoke-1); ", 4, "ngIf"], ["class", "flex flex-wrap gap-md mt-lg", 4, "ngIf"], ["data-tutorial", "floor-plan-editor", 1, "flex", "flex-wrap", "gap-md", "p-sm", 2, "justify-content", "flex-start", "max-width", "max-content"], [1, "promethea-button", 3, "click"], [1, "promethea-button", "ghost", 3, "click"], ["data-tutorial", "floor-plan-canvas", 1, "canvas-container"], ["class", "drawing-tooltip", 4, "ngIf"], ["class", "canvas-wrapper", 3, "width", "height", 4, "ngIf"], ["class", "empty-floorplan", 4, "ngIf"], [1, "bg-smoke", "rounded", "p-md", "mt-sm", "flex", "justify-between", "flex-wrap", "gap-md"], [1, "flex", "flex-col", "gap-sm", "align-center"], [1, "font-bold"], ["class", "modal-overlay", 4, "ngIf"], [3, "ngValue"], [1, "mt-sm"], ["type", "text", "placeholder", "Nuovo nome mappa", "autofocus", "", 1, "form-input", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "flex", "gap-sm"], ["title", "Salva", 1, "icon-button", "success", 3, "click"], ["title", "Annulla", 1, "icon-button", 3, "click"], [1, "text-sm", "text-muted", "mt-sm"], ["data-tutorial", "floor-plan-version", 1, "form-group"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["title", "Crea nuova versione come bozza", 1, "icon-button", 3, "click"], ["class", "icon-button", "title", "Rendi questa versione attiva", 3, "click", 4, "ngIf"], ["class", "icon-button", "title", "Elimina questa versione", 3, "click", 4, "ngIf"], [3, "value"], ["title", "Rendi questa versione attiva", 1, "icon-button", 3, "click"], ["name", "external-link", 3, "size"], ["title", "Elimina questa versione", 1, "icon-button", 3, "click"], [1, "form-group", "mt-md"], [1, "flex", "justify-between", "flex-col", "flex-wrap"], ["class", "flex gap-sm", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "border-l", "pl-sm"], ["title", "Ruota di -30\xB0", 1, "icon-button", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center"], [1, "text-sm", "font-bold"], [1, "text-mini", "text-muted"], ["title", "Ruota di +30\xB0", 1, "icon-button", 3, "click", "disabled"], ["title", "Reset rotazione a 0\xB0", 1, "icon-button", 3, "click", "disabled"], [1, "text-mini", "text-muted", "mt-sm"], [1, "material-icons", "text-mini"], ["title", "0\xB0", 1, "icon-button", 3, "click"], ["title", "90\xB0", 1, "icon-button", 3, "click"], ["title", "180\xB0", 1, "icon-button", 3, "click"], ["title", "270\xB0", 1, "icon-button", 3, "click"], [1, "rounded", "mb-sm", "p-sm", 2, "background-color", "var(--smoke-1)"], [1, "flex", "justify-between", "flex-wrap", "gap-md"], ["class", "chip active small ml-sm", 4, "ngIf"], [1, "modal-footer"], [1, "promethea-button", "primary", "small", 3, "click"], ["class", "promethea-button warning small", 3, "click", 4, "ngIf"], [1, "promethea-button", "ghost", "small", 3, "click"], [1, "chip", "active", "small", "ml-sm"], [1, "promethea-button", "warning", "small", 3, "click"], [1, "flex", "flex-wrap", "gap-md", "mt-lg"], [1, "flex", "flex-col", "gap-md"], ["class", "text-muted", 4, "ngIf"], [1, "promethea-button", "small", 3, "click", "disabled"], [4, "ngIf"], [1, "promethea-button", "ghost", "small", 3, "click", "disabled"], ["class", "mt-lg", 4, "ngIf"], [1, "mt-sm", "mb-sm"], ["class", "alert alert-info", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "ml-sm", 4, "ngIf"], [1, "ml-sm"], [1, "mt-lg"], [1, "flex", "items-center", "gap-sm"], [1, "material-icons", "text-warning"], [1, "flex-1"], [1, "icon-button", "small", 3, "click"], [1, "alert", "alert-info"], ["name", "info"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"], [1, "drawing-tooltip"], [1, "canvas-wrapper"], [1, "floor-plan-canvas"], [1, "canvas-background"], ["class", "grid-overlay", 3, "background-size", 4, "ngIf"], ["class", "table-element", 3, "class", "ngStyle", "pointerdown", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "empty-state", 4, "ngIf"], [1, "grid-overlay"], [1, "table-element", 3, "pointerdown", "ngStyle"], [1, "table-content"], [1, "table-number"], [1, "table-capacity"], [1, "empty-state"], [1, "empty-floorplan"], [1, "promethea-button", "primary", "mt-md", 3, "click"], [1, "modal-overlay"], [1, "modal-container", "modal-md"], [1, "modal-header"], [1, "header-icon"], [1, "section-title"], [1, "form-group", "mb-lg"], [1, "grid-cards", "mb-md"], ["class", "card text-center hover-lift", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "form-row", "mb-lg"], ["type", "text", "name", "tableNumber", "placeholder", "Es: 1", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "capacity", "min", "1", "max", "100", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "tableName", "placeholder", "Es: Tavolo finestra", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-label"], ["type", "checkbox", "name", "isOnlineBookable", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], [1, "form-card", "text-center"], [1, "flex", "justify-center", "mt-md"], [1, "table-preview", 3, "ngStyle"], [1, "preview-content"], [1, "text-muted", "mt-sm", "mt-lg", "justify-center", "flex"], ["class", "text-xs text-muted mt-2", 4, "ngIf"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], ["type", "button", 1, "promethea-button", 3, "click"], ["type", "button", "class", "promethea-button danger", 3, "click", 4, "ngIf"], [1, "card", "text-center", "hover-lift", 3, "click"], [1, "flex", "flex-col", "items-center", "gap-sm"], ["type", "number", "name", "gridWidth", "min", "2", "max", "20", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "name", "gridHeight", "min", "2", "max", "20", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "name", "width", "min", "20", "max", "1000", "step", "10", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "name", "height", "min", "20", "max", "1000", "step", "10", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "range", "name", "borderRadius", "min", "0", "max", "50", "step", "1", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "text-sm", "text-muted"], [1, "info-message"], [1, "text-xs", "text-muted", "mt-2"], ["type", "button", 1, "promethea-button", "danger", 3, "click"], [1, "flex", "items-center", "gap-md"], [1, "material-icons", "text-lg"], [1, "section-title", "modal-header-title"], [1, "p-lg"], [1, "generic-form"], ["type", "number", "name", "floorPlanWidth", "min", "500", "max", "5000", "step", "50", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "floorPlanHeight", "min", "500", "max", "5000", "step", "50", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "standard-label", "mb-md"], ["type", "button", 1, "promethea-button", "ghost", "x-small", 3, "click"], [1, "font-semibold"], [1, "flex", "justify-center", "mt-lg"], [1, "dimension-preview", "border", "shadow-card", "rounded-lg", "bg-smoke"], [1, "text-muted", "p-sm"], ["name", "save"], [1, "flex", "flex-col", "gap-sm"], ["class", "flex items-center gap-sm p-sm border rounded", 4, "ngFor", "ngForOf"], ["type", "text", "name", "mergedTableNumber", "placeholder", "Es: U123", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "mergedTableCapacity", "min", "2", "max", "50", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "mergedTableName", "placeholder", "Es: Tavolo Unito per Gruppo", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row", "mt-lg"], [1, "flex", "items-center", "gap-sm", "p-sm", "border", "rounded"]], template: function FloorPlanEditor_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6, "Mappa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 8)(8, "select", 9);
      \u0275\u0275listener("ngModelChange", function FloorPlanEditor_Template_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFloorPlanSelectById($event));
      });
      \u0275\u0275elementStart(9, "option", 10);
      \u0275\u0275text(10, "Seleziona mappa");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, FloorPlanEditor_option_11_Template, 2, 4, "option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 12)(13, "button", 13);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.startEditFloorPlanName());
      });
      \u0275\u0275elementStart(14, "span", 14);
      \u0275\u0275text(15, "edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 15);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createNewFloorPlan());
      });
      \u0275\u0275element(17, "lucide-angular", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 17);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openDimensionsModal());
      });
      \u0275\u0275element(19, "lucide-angular", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 19);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDeleteFloorPlan(ctx.currentFloorPlan(), $event));
      });
      \u0275\u0275element(21, "lucide-angular", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, FloorPlanEditor_div_22_Template, 12, 1, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, FloorPlanEditor_div_23_Template, 10, 5, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 23)(25, "div", 6)(26, "label", 7);
      \u0275\u0275text(27, "Zoom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 24)(29, "button", 25);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(30, "span", 14);
      \u0275\u0275text(31, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "span", 26);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 27);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(35, "span", 14);
      \u0275\u0275text(36, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "button", 28);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetCanvasZoom());
      });
      \u0275\u0275elementStart(38, "span", 14);
      \u0275\u0275text(39, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "label", 29)(41, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function FloorPlanEditor_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.snapToGrid, $event) || (ctx.snapToGrid = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function FloorPlanEditor_Template_input_change_41_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshCanvasSize());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 31)(43, "span", 32);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(45, FloorPlanEditor_div_45_Template, 29, 5, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, FloorPlanEditor_div_46_Template, 19, 4, "div", 34)(47, FloorPlanEditor_div_47_Template, 25, 11, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 6)(49, "label", 7);
      \u0275\u0275text(50, "Tavoli");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 36)(52, "button", 37);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDrawingMode());
      });
      \u0275\u0275elementStart(53, "span", 14);
      \u0275\u0275text(54, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 37);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_56_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.floorPlanStateService.setIsEditMode(!ctx.floorPlanStateService.isEditMode()));
      });
      \u0275\u0275elementStart(57, "span", 14);
      \u0275\u0275text(58, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 38);
      \u0275\u0275listener("click", function FloorPlanEditor_Template_button_click_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleMergeMode());
      });
      \u0275\u0275elementStart(61, "span", 14);
      \u0275\u0275text(62, "merge");
      \u0275\u0275elementEnd();
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 39, 0);
      \u0275\u0275template(66, FloorPlanEditor_div_66_Template, 4, 0, "div", 40)(67, FloorPlanEditor_div_67_Template, 7, 16, "div", 41)(68, FloorPlanEditor_div_68_Template, 10, 1, "div", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 43)(70, "div", 44)(71, "span", 32);
      \u0275\u0275text(72, "Dimensioni mappa:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 45);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 44)(76, "span", 32);
      \u0275\u0275text(77, "Visualizzato:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 45);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 44)(81, "span", 32);
      \u0275\u0275text(82, "Scala:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 45);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 44)(86, "span", 32);
      \u0275\u0275text(87, "Tavoli:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 45);
      \u0275\u0275text(89);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(90, FloorPlanEditor_div_90_Template, 72, 29, "div", 46)(91, FloorPlanEditor_div_91_Template, 50, 8, "div", 46)(92, FloorPlanEditor_div_92_Template, 48, 6, "div", 46);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.currentFloorPlanId())("disabled", ctx.floorPlans().length === 0 || ctx.isEditingFloorPlanName);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.floorPlans());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.currentFloorPlan() || ctx.isEditingFloorPlanName);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.currentFloorPlan());
      \u0275\u0275advance();
      \u0275\u0275property("size", 20);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.currentFloorPlan() || ctx.isEditingFloorPlanName);
      \u0275\u0275advance();
      \u0275\u0275property("size", 20);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditingFloorPlanName && ctx.currentFloorPlan());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentFloorPlan());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", (ctx.canvasScale() * 100).toFixed(0), "%");
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.snapToGrid);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Griglia (", ctx.gridSize, "px)");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTable() && !ctx.isDrawing() && ctx.floorPlanStateService.isEditMode());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTable() && !ctx.isDrawing());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMergeMode());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isDrawing());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isDrawing() ? "Annulla" : "Aggiungi", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.floorPlanStateService.isEditMode());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.floorPlanStateService.isEditMode() ? "Modifica attiva" : "Modifica", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isMergeMode());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isMergeMode() ? "Annulla" : "Unisci", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isDrawing());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentFloorPlan());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentFloorPlan());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.floorPlanWidth(), " \xD7 ", ctx.floorPlanHeight(), " px");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", ctx.visualWidth().toFixed(0), " \xD7 ", ctx.visualHeight().toFixed(0), " px");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", (ctx.canvasScale() * 100).toFixed(0), "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.tables().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTableModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDimensionsModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMergeModal());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.canvas-container[_ngcontent-%COMP%] {\n  -webkit-overflow-scrolling: touch !important;\n  contain: content;\n}\n.canvas-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  min-width: 100%;\n  min-height: 100%;\n}\n.floor-plan-canvas[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: var(--background);\n  box-shadow: 0 4px 12px var(--smoke-1);\n  border-radius: 8px;\n  transform-origin: 0 0;\n  overflow: visible;\n  margin: 0;\n  isolation: isolate;\n  contain: layout paint;\n}\n@media (max-width: 768px) {\n  .canvas-container[_ngcontent-%COMP%] {\n    height: 50vh;\n    min-height: 300px;\n    max-height: 500px;\n    padding: 8px;\n  }\n}\n.table-element[_ngcontent-%COMP%] {\n  touch-action: manipulation;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: none;\n}\n.table-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--gap-sm);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--gap-sm) / 2);\n}\n.table-number[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: var(--fs-sm);\n  color: var(--text-color);\n  line-height: 1;\n}\n.table-capacity[_ngcontent-%COMP%] {\n  font-size: calc(var(--fs-sm) * 0.8);\n  color: var(--text-muted);\n  display: flex;\n  justify-content: center;\n  font-weight: 600;\n  line-height: 1;\n}\n@media (max-width: 768px) {\n  .canvas-container[_ngcontent-%COMP%] {\n    height: 60vh;\n    min-height: 400px;\n    max-height: 600px;\n    padding: 8px;\n  }\n}\n.table-element.adjacent-highlight[_ngcontent-%COMP%] {\n  border: 3px solid #FFD700 !important;\n  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.5), 0 0 20px 5px rgba(255, 215, 0, 0.7) !important;\n  z-index: 999 !important;\n  animation: _ngcontent-%COMP%_pulse-yellow 1.5s infinite alternate !important;\n  transform: scale(1.02) !important;\n  transition: all 0.3s ease !important;\n}\n@keyframes _ngcontent-%COMP%_pulse-yellow {\n  from {\n    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.5), 0 0 20px 5px rgba(255, 215, 0, 0.7);\n  }\n  to {\n    box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.8), 0 0 30px 10px rgba(255, 215, 0, 0.9);\n  }\n}\n.table-element.merge-selected.adjacent-highlight[_ngcontent-%COMP%] {\n  border: 3px double #FFD700 !important;\n  box-shadow:\n    0 0 0 3px rgba(255, 215, 0, 0.3),\n    0 0 25px 8px rgba(255, 215, 0, 0.6),\n    inset 0 0 15px rgba(255, 215, 0, 0.4) !important;\n}\n.merge-selected[_ngcontent-%COMP%] {\n  border: 3px solid var(--secondary);\n}\n.table-preview[_ngcontent-%COMP%] {\n  background-color: var(--vetro);\n  border: 2px solid var(--smoke-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.table-preview.shape-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n}\n.preview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: calc(var(--gap-sm) / 2);\n  pointer-events: none;\n}\n.preview-content[_ngcontent-%COMP%]   .table-number[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: var(--fs-sm);\n  color: var(--text-color);\n  line-height: 1;\n}\n.preview-content[_ngcontent-%COMP%]   .table-capacity[_ngcontent-%COMP%] {\n  font-size: calc(var(--fs-sm) * 0.8);\n  color: var(--text-muted);\n  font-weight: 600;\n  line-height: 1;\n}\n.modal-md[_ngcontent-%COMP%]   .table-preview[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n}\n.drawing-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: white;\n  padding: 10px 20px;\n  border-radius: 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 0.8;\n    transform: translateX(-50%) scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(-50%) scale(1.05);\n  }\n  100% {\n    opacity: 0.8;\n    transform: translateX(-50%) scale(1);\n  }\n}\n/*# sourceMappingURL=floor-plan.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloorPlanEditor, [{
    type: Component,
    args: [{ selector: "app-floor-plan", imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
\r
  <!-- Area principale editor -->\r
<div class="form-card">\r
  <!-- Barra strumenti principale -->\r
  <div class="flex flex-col" >\r
    <div class="form-row mb-md" data-tutorial="floor-plan-selector">\r
      <!-- Selezione mappa -->\r
      <div class="form-group">\r
        <label class="standard-label">Mappa</label>\r
        <div class="flex gap-sm items-center">\r
          <select \r
            [ngModel]="currentFloorPlanId()" \r
            (ngModelChange)="onFloorPlanSelectById($event)"\r
            class="form-select"\r
            [disabled]="floorPlans().length === 0 || isEditingFloorPlanName">\r
            <option value="">Seleziona mappa</option>\r
            <option *ngFor="let plan of floorPlans()" [ngValue]="plan.id">\r
              {{ plan.name }} ({{ plan.width }}\xD7{{ plan.height }})\r
            </option>\r
          </select>\r
          <div class="flex gap-sm" data-tutorial="floor-plan-new">\r
            <button class="icon-button" \r
                    (click)="startEditFloorPlanName()" \r
                    [disabled]="!currentFloorPlan() || isEditingFloorPlanName"\r
                    title="Modifica nome mappa">\r
              <span class="material-icons">edit</span>\r
            </button>\r
            <button class="icon-button" (click)="createNewFloorPlan()">\r
              <lucide-angular name="plus" [size]="20"></lucide-angular>\r
            </button>\r
            <button class="icon-button" (click)="openDimensionsModal()" \r
                    [disabled]="!currentFloorPlan()">\r
              <lucide-angular name="proportions" [size]="20"></lucide-angular>\r
            </button>\r
            <button class="icon-button" \r
                    (click)="onDeleteFloorPlan(currentFloorPlan()!, $event)" \r
                    [disabled]="!currentFloorPlan() || isEditingFloorPlanName"\r
                    title="Elimina mappa">\r
              <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
            </button>\r
          </div>\r
        </div>\r
        <!-- Input per rinominare la mappa -->\r
        <div class="mt-sm" *ngIf="isEditingFloorPlanName && currentFloorPlan()">\r
          <div class="flex gap-sm items-center">\r
            <input type="text" \r
                  class="form-input" \r
                  [(ngModel)]="editedFloorPlanName"\r
                  (keyup.enter)="saveFloorPlanName()"\r
                  (keyup.escape)="cancelEditFloorPlanName()"\r
                  placeholder="Nuovo nome mappa"\r
                  autofocus>\r
            <div class="flex gap-sm">\r
              <button class="icon-button success" \r
                      (click)="saveFloorPlanName()"\r
                      title="Salva">\r
                <span class="material-icons">check</span>\r
              </button>\r
              <button class="icon-button" \r
                      (click)="cancelEditFloorPlanName()"\r
                      title="Annulla">\r
                <span class="material-icons">close</span>\r
              </button>\r
            </div>\r
          </div>\r
          <div class="text-sm text-muted mt-sm">\r
            Premi Invio per salvare, Esc per annullare\r
          </div>\r
        </div>\r
      </div>\r
      <!-- Verisone -->\r
      <div class="form-group" *ngIf="currentFloorPlan()" data-tutorial="floor-plan-version">\r
        <label class="standard-label">Versione</label>\r
        <div class="flex gap-sm items-center">\r
          <select [ngModel]="floorPlanStateService.currentVersion()" \r
                  (ngModelChange)="onVersionChange($event)"\r
                  class="form-select">\r
            <option *ngFor="let v of availableVersions()" [value]="v">\r
              Versione {{ v }} {{ v === floorPlanStateService.activeVersion() ? '(attiva)' : '' }}\r
            </option>\r
          </select>\r
          <button class="icon-button" (click)="createNewVersion()" \r
                  title="Crea nuova versione come bozza">\r
            <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          </button>\r
          <button class="icon-button" \r
                  *ngIf="floorPlanStateService.currentVersion() !== floorPlanStateService.activeVersion()" \r
                  (click)="publishVersion(floorPlanStateService.currentVersion())"\r
                  title="Rendi questa versione attiva">\r
            <lucide-angular name="external-link" [size]="20"></lucide-angular>\r
          </button>\r
          <button class="icon-button" \r
                  *ngIf="availableVersions().length > 1 && floorPlanStateService.currentVersion() !== floorPlanStateService.activeVersion()"\r
                  (click)="deleteVersion(floorPlanStateService.currentVersion())"\r
                  title="Elimina questa versione">\r
            <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Zoom e Griglia -->\r
    <div class="form-row" >\r
    <!-- Zoom e scala -->\r
    <div class="form-group">\r
      <label class="standard-label">Zoom</label>\r
      <div class="flex gap-sm items-center" \r
      style="max-width: max-content;"\r
      data-tutorial="floor-plan-zoom">\r
        <button class="icon-button" (click)="zoomOut()" title="Zoom -">\r
          <span class="material-icons">zoom_out</span>\r
        </button>\r
        <span class="text-sm">{{ (canvasScale() * 100).toFixed(0) }}%</span>\r
        <button class="icon-button" (click)="zoomIn()" title="Zoom +">\r
          <span class="material-icons">zoom_in</span>\r
        </button>\r
        <button class="icon-button" (click)="resetCanvasZoom()" title="Reset zoom">\r
          <span class="material-icons">refresh</span>\r
        </button>\r
        <label class="checkbox-label ml-sm">\r
          <input type="checkbox" [(ngModel)]="snapToGrid" (change)="refreshCanvasSize()">\r
          <div class="checkbox-content">\r
            <span class="text-muted">Griglia ({{gridSize}}px)</span>\r
          </div>\r
        </label>\r
      </div>\r
    </div>\r
    <!-- Rotazione -->\r
    <div class="form-group mt-md"  *ngIf="selectedTable() && !isDrawing() && floorPlanStateService.isEditMode()">\r
      <!-- Controlli rotazione (visibili solo se un tavolo \xE8 selezionato) -->\r
      <div class="flex justify-between flex-col flex-wrap">\r
        <div class="flex gap-sm">\r
          <span class="material-icons">rotate_right</span>\r
          <div>\r
            <label class="standard-label">Rotazione Tavolo</label>\r
          </div>\r
        </div>\r
        \r
        <div class="flex gap-sm items-center">\r
          <!-- Rotazione precisa -->\r
          <div class="flex gap-sm" *ngIf="!isMobileView()">\r
            <button class="icon-button" (click)="rotateToAngle(0)" title="0\xB0">\r
              <span class="material-icons">north</span>\r
            </button>\r
            <button class="icon-button" (click)="rotateToAngle(90)" title="90\xB0">\r
              <span class="material-icons">east</span>\r
            </button>\r
            <button class="icon-button" (click)="rotateToAngle(180)" title="180\xB0">\r
              <span class="material-icons">south</span>\r
            </button>\r
            <button class="icon-button" (click)="rotateToAngle(270)" title="270\xB0">\r
              <span class="material-icons">west</span>\r
            </button>\r
          </div>\r
          \r
          <!-- Rotazione incrementale -->\r
          <div class="flex items-center gap-sm border-l pl-sm">\r
            <button class="icon-button" (click)="rotateSelectedTable(-30)" \r
                    title="Ruota di -30\xB0" [disabled]="isRotating">\r
              <span class="material-icons">rotate_left</span>\r
            </button>\r
            \r
            <div class="flex flex-col items-center">\r
              <span class="text-sm font-bold">{{ selectedTable()!.rotation || 0 }}\xB0</span>\r
              <span class="text-mini text-muted">Rotazione</span>\r
            </div>\r
            \r
            <button class="icon-button" (click)="rotateSelectedTable(30)" \r
                    title="Ruota di +30\xB0" [disabled]="isRotating">\r
              <span class="material-icons">rotate_right</span>\r
            </button>\r
          </div>\r
          \r
          <!-- Reset rotazione -->\r
          <button class="icon-button" (click)="rotateToAngle(0)" \r
                  title="Reset rotazione a 0\xB0" [disabled]="isRotating">\r
            <span class="material-icons">restart_alt</span>\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <!-- Istruzioni per rotazione con mouse -->\r
      <div class="text-mini text-muted mt-sm" >\r
        <span class="material-icons text-mini">info</span>\r
        Premi Ctrl + rotellina del mouse per ruotare di \xB15\xB0\r
      </div>\r
    </div>\r
    </div>\r
    <!-- Tavolo selezionato -->\r
    <div class="rounded mb-sm p-sm" \r
        *ngIf="selectedTable() && !isDrawing()"\r
        style="background-color: var(--smoke-1); ">\r
      <div class="flex justify-between flex-wrap gap-md">\r
        <div class="flex flex-col">\r
          <strong>Tavolo Selezionato</strong>\r
          <div class="flex gap-sm">\r
          <span class="text-muted">\r
            Tavolo {{selectedTable()!.table_number}} - {{selectedTable()!.capacity}} persone\r
          </span>\r
          <span *ngIf="selectedTable()!.merged_tables_ids && selectedTable()!.merged_tables_ids.length > 0" \r
                class="chip active small ml-sm">\r
            Unito\r
          </span>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button class="promethea-button primary small" \r
                  (click)="openEditTableModal()">\r
            <span class="material-icons">edit</span>\r
            Modifica\r
          </button>\r
          <button *ngIf="selectedTable()!.merged_tables_ids && selectedTable()!.merged_tables_ids.length > 0" \r
                  class="promethea-button warning small" \r
                  (click)="onSplitTable(selectedTable()!)">\r
            <span class="material-icons">call_split</span>\r
            Separa\r
          </button>\r
          <button class="promethea-button ghost small" \r
                  (click)="deselectAll()">\r
            <span class="material-icons">close</span>\r
            Deseleziona\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- Sezione Unione Tavoli -->\r
    <div class="flex flex-wrap gap-md mt-lg" *ngIf="isMergeMode()" >\r
      <div class="flex flex-col gap-md">\r
          <strong>Modalit\xE0 Unione Tavoli</strong>\r
          <div class="text-muted" *ngIf="selectedTables().length === 0">\r
            Seleziona 2-4 tavoli confinanti da unire\r
          </div>\r
          <div class="text-muted" *ngIf="selectedTables().length > 0">\r
            Tavoli selezionati: {{ selectedTables().length }} \r
            <span class="ml-sm" *ngIf="selectedTables().length > 0">\r
              ({{ getSelectedTableNumbers() }})\r
            </span>\r
          </div>\r
        \r
\r
      </div>\r
        <div class="modal-footer">\r
          <!-- Pulsante per evidenziare tavoli adiacenti -->\r
          <button class="promethea-button ghost small" \r
                  (click)="highlightAdjacentTables()">\r
            <span class="material-icons">highlight</span>\r
            Mostra vicini\r
          </button>\r
          <!-- Pulsante per confermare l'unione -->\r
          <button class="promethea-button small" \r
                  (click)="openMergeModal()"\r
                  [disabled]="!canMergeTables()"\r
                  [class.active]="canMergeTables()">\r
            <span class="material-icons">merge</span>\r
            Crea tavolo unito\r
            <span *ngIf="selectedTables().length > 0">({{ selectedTables().length }})</span>\r
          </button>\r
          <!-- Pulsante per annullare selezione -->\r
          <button class="promethea-button ghost small" \r
                  (click)="floorPlanStateService.clearSelectedTables()"\r
                  [disabled]="selectedTables().length === 0">\r
            <span class="material-icons">clear</span>\r
            Deseleziona\r
          </button>\r
        </div>\r
      <div class="mt-lg" *ngIf="highlightMessage()">\r
      <div class="flex items-center gap-sm">\r
        <span class="material-icons text-warning">info</span>\r
        <div class="flex-1">\r
          <p class="text-sm" [class.text-warning]="true">\r
            {{ highlightMessage() }}\r
          </p>\r
        </div>\r
        <button class="icon-button small" (click)="highlightMessage.set(null)">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
    </div>\r
\r
      <!-- Messaggi di stato -->\r
      <div class="mt-sm mb-sm">\r
        <div class="alert alert-info" *ngIf="selectedTables().length === 1">\r
          <lucide-angular name="info"></lucide-angular>\r
          Seleziona un altro tavolo adiacente per unire\r
        </div>\r
        \r
        <div class="alert alert-warning" *ngIf="selectedTables().length > 1 && !canMergeTables()">\r
          <span class="material-icons">warning</span>\r
          I tavoli selezionati non sono tutti adiacenti tra loro\r
        </div>\r
        \r
        <div class="alert alert-success" *ngIf="canMergeTables()">\r
          <span class="material-icons">check_circle</span>\r
          Tavoli pronti per l'unione! Capacit\xE0 totale: {{ getTotalCapacity() }} persone\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
      <!-- Modalit\xE0 tavoli -->\r
    <div class="form-group" >\r
      <label class="standard-label">Tavoli</label>\r
      <div class="flex flex-wrap gap-md p-sm"\r
      style="justify-content: flex-start; max-width: max-content;"\r
      data-tutorial="floor-plan-editor"\r
      >\r
        <button class="promethea-button" \r
                [class.active]="isDrawing()" \r
                (click)="toggleDrawingMode()">\r
          <span class="material-icons">add_circle</span>\r
          {{ isDrawing() ? 'Annulla' : 'Aggiungi' }}\r
        </button>\r
        <button class="promethea-button" \r
                [class.active]="floorPlanStateService.isEditMode()" \r
                (click)="floorPlanStateService.setIsEditMode(!floorPlanStateService.isEditMode())">\r
          <span class="material-icons">edit</span>\r
          {{ floorPlanStateService.isEditMode() ? 'Modifica attiva' : 'Modifica' }}\r
        </button>\r
        <button class="promethea-button ghost" \r
                [class.active]="isMergeMode()"\r
                (click)="toggleMergeMode()">\r
          <span class="material-icons">merge</span>\r
          {{ isMergeMode() ? 'Annulla' : 'Unisci' }}\r
        </button>\r
\r
      </div>\r
    </div>\r
  <div class="canvas-container" #canvasContainer data-tutorial="floor-plan-canvas">\r
    <!-- Tooltip per aggiunta tavolo -->\r
    <div class="drawing-tooltip" *ngIf="isDrawing()">\r
      <span class="material-icons">touch_app</span>\r
      Clicca sulla mappa per posizionare il tavolo\r
    </div>\r
    <!-- Wrapper per gestire le dimensioni reali -->\r
    <div class="canvas-wrapper" \r
         [style.width.px]="floorPlanWidth() * canvasScale()"\r
         [style.height.px]="floorPlanHeight() * canvasScale()"\r
         *ngIf="currentFloorPlan()">\r
      \r
      <!-- CANVAS che contiene tutto -->\r
      <div #floorPlanCanvas class="floor-plan-canvas" \r
           [style.width.px]="floorPlanWidth()"\r
           [style.height.px]="floorPlanHeight()"\r
           [style.transform]="'scale(' + canvasScale() + ')'"\r
           [style.transform-origin]="'0 0'"> <!-- IMPORTANTE: origine in alto a sinistra -->\r
        \r
        <!-- Sfondo del canvas -->\r
        <div class="canvas-background"></div>\r
        \r
        <!-- Griglia dentro il canvas -->\r
        <div class="grid-overlay" \r
             *ngIf="snapToGrid"\r
             [style.background-size]="visualGridSize() + 'px ' + visualGridSize()">\r
        </div>\r
\r
        <!-- Tavoli dentro il canvas -->\r
<div *ngFor="let table of tables(); trackBy: trackByTableId" \r
     class="table-element" \r
     [class]="getTableClass(table)"\r
     [ngStyle]="getTableStyle(table)"\r
     [attr.data-table-id]="table.id"\r
     (pointerdown)="onTablePointerDown($event, table)">\r
          <div class="table-content">\r
            <div class="table-number">{{ table.table_number }}</div>\r
            <div class="table-capacity">{{ table.capacity }} p</div>\r
          </div>\r
        </div>\r
\r
        <!-- Stato vuoto dentro il canvas -->\r
        <div class="empty-state" *ngIf="tables().length === 0">\r
          <span class="material-icons">table_restaurant</span>\r
          <h3>Nessun tavolo configurato</h3>\r
          <p>Clicca su "Aggiungi" per creare il primo tavolo</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
      <!-- Nessuna mappa selezionata -->\r
      <div class="empty-floorplan" *ngIf="!currentFloorPlan()">\r
        <span class="material-icons">map</span>\r
        <h3>Nessuna mappa selezionata</h3>\r
        <p>Crea una nuova mappa o seleziona una esistente</p>\r
        <button class="promethea-button primary mt-md" (click)="createNewFloorPlan()">\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          Crea Nuova Mappa\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Info dimensioni -->\r
    <div class="bg-smoke rounded p-md mt-sm flex justify-between flex-wrap gap-md">\r
        <div class="flex flex-col gap-sm align-center">\r
          <span class="text-muted">Dimensioni mappa:</span>\r
          <span class="font-bold">{{ floorPlanWidth() }} \xD7 {{ floorPlanHeight() }} px</span>\r
        </div>\r
        <div class="flex flex-col gap-sm align-center">\r
          <span class="text-muted">Visualizzato:</span>\r
          <span class="font-bold">{{ visualWidth().toFixed(0) }} \xD7 {{ visualHeight().toFixed(0) }} px</span>\r
        </div>\r
        <div class="flex flex-col gap-sm align-center">\r
          <span class="text-muted">Scala:</span>\r
          <span class="font-bold">{{ (canvasScale() * 100).toFixed(0) }}%</span>\r
        </div>\r
        <div class="flex flex-col gap-sm align-center">\r
          <span class="text-muted">Tavoli:</span>\r
          <span class="font-bold">{{ tables().length }}</span>\r
        </div>\r
    </div>\r
  </div>\r
\r
\r
\r
</div>\r
\r
<!-- MODAL UNICO PER CREAZIONE E MODIFICA TAVOLO -->\r
<div class="modal-overlay" *ngIf="showTableModal()">\r
  <div class="modal-container modal-md">\r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-sm">\r
        <div class="header-icon">\r
          <span class="material-icons">{{ modalMode() === 'create' ? 'add_circle' : 'edit' }}</span>\r
        </div>\r
        <div>\r
          <h1 class="section-title">\r
            {{ modalMode() === 'create' ? 'Crea Nuovo Tavolo' : 'Modifica Tavolo' }}\r
          </h1>\r
        </div>\r
      </div>\r
      <button class="icon-button" (click)="floorPlanStateService.setShowTableModal(false)">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <div class="flex flex-col">\r
      <form>\r
        <div class="form-card">\r
          <!-- Forma del tavolo -->\r
          <div class="form-group mb-lg">\r
            <label class="standard-label">Forma del Tavolo</label>\r
            <div class="grid-cards mb-md">\r
              <div *ngFor="let shape of tableShapes" \r
                   class="card text-center hover-lift"\r
                   [class.active]="floorPlanStateService.tableForm().shape === shape.type"\r
                   (click)="onShapeSelect(shape)">\r
                <div class="flex flex-col items-center gap-sm">\r
                  <span class="material-icons">{{ shape.icon }}</span>\r
                  <strong>{{ shape.name }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- Dati del tavolo -->\r
          <div class="form-row mb-lg">\r
            <div class="form-group">\r
              <label class="standard-label">Numero Tavolo</label>\r
              <input type="text" class="form-input" \r
                     [(ngModel)]="floorPlanStateService.tableForm().tableNumber" \r
                     name="tableNumber"\r
                     placeholder="Es: 1">\r
            </div>\r
            <div class="form-group">\r
              <label class="standard-label">Capacit\xE0</label>\r
              <input type="number" class="form-input" \r
                     [(ngModel)]="floorPlanStateService.tableForm().capacity" \r
                     name="capacity"\r
                     min="1" max="100">\r
            </div>\r
          </div>\r
          <!-- Nome e prenotabilit\xE0 -->\r
          <div class="form-row mb-lg">\r
            <div class="form-group">\r
              <label class="standard-label">Nome Tavolo (opzionale)</label>\r
              <input type="text" class="form-input" \r
                     [(ngModel)]="floorPlanStateService.tableForm().tableName" \r
                     name="tableName"\r
                     placeholder="Es: Tavolo finestra">\r
            </div>\r
            \r
            <div class="form-group">\r
              <label class="checkbox-label">\r
                <input type="checkbox" [(ngModel)]="floorPlanStateService.tableForm().isOnlineBookable" name="isOnlineBookable">\r
                <div class="checkbox-content">\r
                  <strong>Prenotabile online</strong>\r
                  <span class="text-muted">Se deselezionato, prenotabile solo dal personale</span>\r
                </div>\r
              </label>\r
            </div>\r
          </div>\r
          <!-- Dimensioni - DIVERSO in base alla modalit\xE0 -->\r
          <div class="form-row mb-lg">\r
            <!-- Modalit\xE0 CREAZIONE: usa quadrati -->\r
            <div *ngIf="modalMode() === 'create'" class="form-group">\r
              <label class="standard-label">Larghezza (quadrati)</label>\r
              <input type="number" class="form-input" \r
                     [ngModel]="floorPlanStateService.tableForm().gridWidth"\r
                     (ngModelChange)="onGridWidthChange($event)"\r
                     name="gridWidth"\r
                     min="2" max="20"\r
                     [disabled]="floorPlanStateService.tableForm().shape === 'circle' || floorPlanStateService.tableForm().shape === 'square'">\r
              <span class="text-muted">1 quadrato = {{ gridSize }}px</span>\r
            </div>\r
            \r
            <div *ngIf="modalMode() === 'create'" class="form-group">\r
              <label class="standard-label">Altezza (quadrati)</label>\r
              <input type="number" class="form-input" \r
                     [ngModel]="floorPlanStateService.tableForm().gridHeight"\r
                     (ngModelChange)="onGridHeightChange($event)"\r
                     name="gridHeight"\r
                     min="2" max="20"\r
           [disabled]="floorPlanStateService.tableForm().shape === 'circle' || \r
                      (tableForm().isMerged !== undefined && tableForm().isMerged)">\r
              <span class="text-muted">1 quadrato = {{ gridSize }}px</span>\r
            </div>\r
\r
            <!-- Modalit\xE0 MODIFICA: usa pixel -->\r
            <div *ngIf="modalMode() === 'edit'" class="form-group">\r
              <label class="standard-label">Larghezza (px)</label>\r
              <input type="number" class="form-input" \r
                     [ngModel]="floorPlanStateService.tableForm().width"\r
                     (ngModelChange)="onWidthChange($event)"\r
                     name="width"\r
                     min="20" max="1000" step="10"\r
                     [disabled]="floorPlanStateService.tableForm().shape === 'circle'">\r
              <span class="text-muted">Min: 20px, Max: 1000px</span>\r
            </div>\r
            \r
            <div *ngIf="modalMode() === 'edit'" class="form-group">\r
              <label class="standard-label">Altezza (px)</label>\r
              <input type="number" class="form-input" \r
                     [ngModel]="floorPlanStateService.tableForm().height"\r
                     (ngModelChange)="onHeightChange($event)"\r
                     name="height"\r
                     min="20" max="1000" step="10"\r
                     [disabled]="floorPlanStateService.tableForm().shape === 'circle' || floorPlanStateService.tableForm().shape === 'square'">\r
              <span class="text-muted">Min: 20px, Max: 1000px</span>\r
            </div>\r
          </div>\r
          <!-- Border Radius -->\r
          <div class="form-row mb-lg">\r
            <div class="form-group" *ngIf="floorPlanStateService.tableForm().shape !== 'circle'">\r
              <label class="standard-label">Border Radius (px)</label>\r
              <input type="range" class="form-input" \r
                     [ngModel]="floorPlanStateService.tableForm().borderRadius"\r
                     (ngModelChange)="onBorderRadiusChange($event)"\r
                     name="borderRadius"\r
                     min="0" max="50" step="1">\r
              <div class="flex justify-between text-sm text-muted">\r
                <span>0px (spigoli vivi)</span>\r
                <span><strong>{{ floorPlanStateService.tableForm().borderRadius }}px</strong></span>\r
                <span>50px (molto arrotondato)</span>\r
              </div>\r
            </div>\r
\r
            <div class="form-group" *ngIf="floorPlanStateService.tableForm().shape === 'circle'">\r
              <div class="info-message">\r
                <lucide-angular name="info"></lucide-angular>\r
                <span>Per i tavoli circolari il border radius \xE8 automaticamente impostato al 50%</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
\r
\r
          <!-- ANTEPRIMA con dimensioni REALI e aggiornamento in tempo reale -->\r
          <div class="form-card text-center">\r
            <strong>Anteprima</strong>\r
            <div class="flex justify-center mt-md">\r
              <div class="table-preview" \r
                  [ngStyle]="{\r
                    'width.px': previewWidth(),\r
                    'height.px': previewHeight(),\r
                    'border-radius': previewBorderRadius()\r
                  }"\r
                  [class.shape-circle]="floorPlanStateService.tableForm().shape === 'circle'">\r
                <div class="preview-content">\r
                  <span class="table-number">{{ floorPlanStateService.tableForm().tableNumber || '1' }}</span>\r
                  <span class="table-capacity">{{ floorPlanStateService.tableForm().capacity }} p</span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="text-muted mt-sm mt-lg justify-center flex">\r
              {{ previewWidth() }} \xD7 {{ previewHeight() }} px | \r
              Border Radius: {{ \r
                floorPlanStateService.tableForm().shape === 'circle' \r
                  ? '50% (automatico)' \r
                  : floorPlanStateService.tableForm().borderRadius + 'px'\r
              }}\r
            </div>\r
            <!-- DEBUG: rimuovere in produzione -->\r
            <div class="text-xs text-muted mt-2" *ngIf="false">\r
              DEBUG: width={{previewWidth()}}, height={{previewHeight()}}, \r
              shape={{floorPlanStateService.tableForm().shape}}, \r
              borderRadius={{floorPlanStateService.tableForm().borderRadius}}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button type="button" class="promethea-button ghost" \r
                  (click)="floorPlanStateService.setShowTableModal(false)">\r
            Annulla\r
          </button>\r
          <button type="button" class="promethea-button" (click)="onSaveTable()">\r
            <span class="material-icons">{{ modalMode() === 'create' ? 'add' : 'save' }}</span>\r
            {{ modalMode() === 'create' ? 'Crea Tavolo' : 'Aggiorna Tavolo' }}\r
          </button>\r
          \r
          <!-- Pulsante elimina solo in modalit\xE0 modifica -->\r
          <button *ngIf="modalMode() === 'edit'" \r
                  type="button" class="promethea-button danger" \r
                  (click)="onDeleteTable()">\r
            <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
            Elimina\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
\r
<!-- MODAL DIMENSIONI SALA -->\r
<div class="modal-overlay" *ngIf="showDimensionsModal()">\r
  <div class="modal-container modal-md">\r
    \r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-md">\r
        <div class="header-icon">\r
          <span class="material-icons text-lg">aspect_ratio</span>\r
        </div>\r
        <h1 class="section-title modal-header-title">Dimensioni Sala</h1>\r
      </div>\r
      <button class="icon-button" (click)="onCancelDimensionsModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Contenuto -->\r
    <div class="p-lg">\r
      <form class="generic-form">\r
\r
        <!-- Dimensioni in pixel -->\r
        <div class="form-row mb-lg">\r
          <div class="form-group">\r
            <label class="standard-label">Larghezza (px)</label>\r
            <input type="number" class="form-input"\r
                   [(ngModel)]="dimensionsForm.width"\r
                   name="floorPlanWidth"\r
                   min="500" max="5000" step="50">\r
            <span class="text-muted">Min: 500px, Max: 5000px</span>\r
          </div>\r
          <div class="form-group">\r
            <label class="standard-label">Altezza (px)</label>\r
            <input type="number" class="form-input"\r
                   [(ngModel)]="dimensionsForm.height"\r
                   name="floorPlanHeight"\r
                   min="500" max="5000" step="50">\r
            <span class="text-muted">Min: 500px, Max: 5000px</span>\r
          </div>\r
        </div>\r
\r
        <!-- Dimensioni predefinite -->\r
        <div class="form-group mb-lg">\r
          <label class="standard-label mb-md">Dimensioni Predefinite</label>\r
          <div class="flex gap-sm">\r
            <button type="button" class="promethea-button ghost x-small"\r
                    (click)="setDimensions(1000, 800)">\r
              Piccola (1000\xD7800)\r
            </button>\r
            <button type="button" class="promethea-button ghost x-small"\r
                    (click)="setDimensions(1500, 1200)">\r
              Media (1500\xD71200)\r
            </button>\r
            <button type="button" class="promethea-button ghost x-small"\r
                    (click)="setDimensions(2000, 1600)">\r
              Grande (2000\xD71600)\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Anteprima dimensioni -->\r
        <div class="form-card text-center ">\r
          <strong class="font-semibold ">Anteprima Dimensioni</strong>\r
          <div class="flex justify-center mt-lg">\r
            <div class="dimension-preview border shadow-card rounded-lg bg-smoke"\r
                 [style.width.px]="dimensionsForm.width * 0.1"\r
                 [style.height.px]="dimensionsForm.height * 0.1">\r
              <div class="text-muted p-sm">\r
                {{ dimensionsForm.width }} \xD7 {{ dimensionsForm.height }} px\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="modal-footer">\r
          <button type="button" class="promethea-button ghost" (click)="onCancelDimensionsModal()">\r
            Annulla\r
          </button>\r
          <button type="button" class="promethea-button" (click)="onSaveDimensions()">\r
           <lucide-angular name="save"></lucide-angular>\r
            Salva Dimensioni\r
          </button>\r
        </div>\r
\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL UNIONE TAVOLI -->\r
<div class="modal-overlay" *ngIf="showMergeModal()">\r
  <div class="modal-container modal-md">\r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-sm">\r
        <div class="header-icon">\r
          <span class="material-icons">merge</span>\r
        </div>\r
        <div>\r
          <h1 class="section-title">Unisci Tavoli</h1>\r
        </div>\r
      </div>\r
      <button class="icon-button" (click)="closeMergeModal()">\r
        <span class="material-icons">close</span>\r
      </button>\r
    </div>\r
\r
    <div>\r
      <form class="generic-form">\r
        <div class="form-card">\r
        <div class="form-group mb-lg">\r
          <label class="standard-label">Tavoli da unire</label>\r
          <div class="flex flex-col gap-sm">\r
            <div *ngFor="let table of selectedTables()" class="flex items-center gap-sm p-sm border rounded">\r
              <span class="material-icons">table_restaurant</span>\r
              <div class="flex-1">\r
                <strong>Tavolo {{ table.table_number }}</strong>\r
                <div class="text-muted">{{ table.capacity }} persone</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-lg">\r
          <div class="form-group">\r
            <label class="standard-label">Numero Nuovo Tavolo</label>\r
            <input type="text" class="form-input" \r
                   [(ngModel)]="mergeForm.tableNumber" \r
                   name="mergedTableNumber"\r
                   placeholder="Es: U123">\r
          </div>\r
          <div class="form-group">\r
            <label class="standard-label">Capacit\xE0 Totale</label>\r
            <input type="number" class="form-input" \r
                   [(ngModel)]="mergeForm.capacity" \r
                   name="mergedTableCapacity"\r
                   min="2" max="50">\r
          </div>\r
        </div>\r
\r
        <div class="form-group mb-lg">\r
          <label class="standard-label">Nome Tavolo Unito</label>\r
          <input type="text" class="form-input" \r
                 [(ngModel)]="mergeForm.tableName" \r
                 name="mergedTableName"\r
                 placeholder="Es: Tavolo Unito per Gruppo">\r
        </div>\r
\r
        <!-- Riepilogo -->\r
        <div class="form-row mt-lg">\r
          <div class="form-group">\r
            <span >Capacit\xE0 originale: {{ getTotalCapacity() }} </span>\r
          \r
          </div>\r
          <div class="form-group">\r
            <span >Nuova capacit\xE0: {{ mergeForm.capacity }}</span>\r
          </div>\r
        </div>\r
</div>\r
        <div class="modal-footer">\r
          <button type="button" class="promethea-button ghost" (click)="closeMergeModal()">\r
            Annulla\r
          </button>\r
          <button type="button" class="promethea-button" (click)="onMergeTables()">\r
            <span class="material-icons">merge</span>\r
            Crea Tavolo Unito\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/layout/floor-plan/floor-plan.css */\n.canvas-container {\n  -webkit-overflow-scrolling: touch !important;\n  contain: content;\n}\n.canvas-wrapper {\n  position: relative;\n  display: inline-block;\n  min-width: 100%;\n  min-height: 100%;\n}\n.floor-plan-canvas {\n  position: relative;\n  background-color: var(--background);\n  box-shadow: 0 4px 12px var(--smoke-1);\n  border-radius: 8px;\n  transform-origin: 0 0;\n  overflow: visible;\n  margin: 0;\n  isolation: isolate;\n  contain: layout paint;\n}\n@media (max-width: 768px) {\n  .canvas-container {\n    height: 50vh;\n    min-height: 300px;\n    max-height: 500px;\n    padding: 8px;\n  }\n}\n.table-element {\n  touch-action: manipulation;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: none;\n}\n.table-content {\n  text-align: center;\n  padding: var(--gap-sm);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--gap-sm) / 2);\n}\n.table-number {\n  font-weight: 800;\n  font-size: var(--fs-sm);\n  color: var(--text-color);\n  line-height: 1;\n}\n.table-capacity {\n  font-size: calc(var(--fs-sm) * 0.8);\n  color: var(--text-muted);\n  display: flex;\n  justify-content: center;\n  font-weight: 600;\n  line-height: 1;\n}\n@media (max-width: 768px) {\n  .canvas-container {\n    height: 60vh;\n    min-height: 400px;\n    max-height: 600px;\n    padding: 8px;\n  }\n}\n.table-element.adjacent-highlight {\n  border: 3px solid #FFD700 !important;\n  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.5), 0 0 20px 5px rgba(255, 215, 0, 0.7) !important;\n  z-index: 999 !important;\n  animation: pulse-yellow 1.5s infinite alternate !important;\n  transform: scale(1.02) !important;\n  transition: all 0.3s ease !important;\n}\n@keyframes pulse-yellow {\n  from {\n    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.5), 0 0 20px 5px rgba(255, 215, 0, 0.7);\n  }\n  to {\n    box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.8), 0 0 30px 10px rgba(255, 215, 0, 0.9);\n  }\n}\n.table-element.merge-selected.adjacent-highlight {\n  border: 3px double #FFD700 !important;\n  box-shadow:\n    0 0 0 3px rgba(255, 215, 0, 0.3),\n    0 0 25px 8px rgba(255, 215, 0, 0.6),\n    inset 0 0 15px rgba(255, 215, 0, 0.4) !important;\n}\n.merge-selected {\n  border: 3px solid var(--secondary);\n}\n.table-preview {\n  background-color: var(--vetro);\n  border: 2px solid var(--smoke-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.table-preview.shape-circle {\n  border-radius: 50% !important;\n}\n.preview-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: calc(var(--gap-sm) / 2);\n  pointer-events: none;\n}\n.preview-content .table-number {\n  font-weight: 800;\n  font-size: var(--fs-sm);\n  color: var(--text-color);\n  line-height: 1;\n}\n.preview-content .table-capacity {\n  font-size: calc(var(--fs-sm) * 0.8);\n  color: var(--text-muted);\n  font-weight: 600;\n  line-height: 1;\n}\n.modal-md .table-preview {\n  max-width: 200px;\n  max-height: 200px;\n}\n.drawing-tooltip {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: white;\n  padding: 10px 20px;\n  border-radius: 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  animation: pulse 1.5s infinite;\n}\n@keyframes pulse {\n  0% {\n    opacity: 0.8;\n    transform: translateX(-50%) scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(-50%) scale(1.05);\n  }\n  100% {\n    opacity: 0.8;\n    transform: translateX(-50%) scale(1);\n  }\n}\n/*# sourceMappingURL=floor-plan.css.map */\n"] }]
  }], () => [], { canvasRef: [{
    type: ViewChild,
    args: ["floorPlanCanvas"]
  }], containerRef: [{
    type: ViewChild,
    args: ["canvasContainer"]
  }], onMouseWheel: [{
    type: HostListener,
    args: ["wheel", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloorPlanEditor, { className: "FloorPlanEditor", filePath: "src/app/restaurant/layout/floor-plan/floor-plan.ts", lineNumber: 22 });
})();
export {
  FloorPlanEditor
};
//# sourceMappingURL=chunk-KRSVCX4V.js.map
