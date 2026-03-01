import {
  MenuArService
} from "./chunk-TAZ6PWID.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CQ6KSR3R.js";
import {
  CommonModule,
  DecimalPipe
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/menu/pdf-zone-editor/pdf-zone-editor.component.ts
var _c0 = ["pdfCanvas"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
function MenuPdfZoneEditorComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 43);
    \u0275\u0275elementEnd();
  }
}
function MenuPdfZoneEditorComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 44)(2, "polyline", 45);
    \u0275\u0275elementEnd();
  }
}
function MenuPdfZoneEditorComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 47);
    \u0275\u0275element(3, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Rendering pagina ", ctx_r1.page(), "...");
  }
}
function MenuPdfZoneEditorComponent_For_37_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const zone_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" \xB7 \u20AC", \u0275\u0275pipeBind2(1, 1, zone_r4.dish_price, "1.2-2"), " ");
  }
}
function MenuPdfZoneEditorComponent_For_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275template(1, MenuPdfZoneEditorComponent_For_37_Conditional_2_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const zone_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", zone_r4.dish_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(zone_r4.dish_price ? 1 : -1);
  }
}
function MenuPdfZoneEditorComponent_For_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1, "Non assegnata");
    \u0275\u0275elementEnd();
  }
}
function MenuPdfZoneEditorComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_For_37_Template_div_click_0_listener($event) {
      const zone_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.selectZone(zone_r4.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275template(2, MenuPdfZoneEditorComponent_For_37_Conditional_2_Template, 2, 2)(3, MenuPdfZoneEditorComponent_For_37_Conditional_3_Template, 2, 0, "em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_For_37_Template_button_click_4_listener($event) {
      const zone_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.removeZone(zone_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", zone_r4.x * ctx_r1.zoom(), "px")("top", zone_r4.y * ctx_r1.zoom(), "px")("width", zone_r4.width * ctx_r1.zoom(), "px")("height", zone_r4.height * ctx_r1.zoom(), "px");
    \u0275\u0275classProp("zone-rect--sel", ctx_r1.selId() === zone_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(zone_r4.dish_name ? 2 : 3);
  }
}
function MenuPdfZoneEditorComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 52);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.rLeft() * ctx_r1.zoom(), "px")("top", ctx_r1.rTop() * ctx_r1.zoom(), "px")("width", ctx_r1.rW() * ctx_r1.zoom(), "px")("height", ctx_r1.rH() * ctx_r1.zoom(), "px");
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Conditional_54_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearQuery());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 63);
    \u0275\u0275element(2, "line", 54)(3, "line", 55);
    \u0275\u0275elementEnd()();
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Conditional_54_Conditional_11_For_2_Template_button_click_0_listener() {
      const d_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignDish(d_r8));
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const d_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("zone-dish-opt--active", ((tmp_13_0 = ctx_r1.selZone()) == null ? null : tmp_13_0.dish_id) === d_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(5, 4, d_r8.base_price, "1.2-2"), "");
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, MenuPdfZoneEditorComponent_Conditional_54_Conditional_11_For_2_Template, 6, 7, "button", 64, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredDishes());
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1, " Nessun piatto nel menu. Aggiungi piatti dal builder prima di configurare le zone. ");
    \u0275\u0275elementEnd();
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Nessun piatto trovato per "', ctx_r1.query(), '"');
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "polyline", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Conditional_54_Conditional_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeDish());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 63);
    \u0275\u0275element(10, "line", 54)(11, "line", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selZone().dish_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(7, 2, ctx_r1.selZone().dish_price, "1.2-2"), "");
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coord_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", coord_r10.label, ": ", coord_r10.val, "");
  }
}
function MenuPdfZoneEditorComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3, " Zona selezionata ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Conditional_54_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 53);
    \u0275\u0275element(6, "line", 54)(7, "line", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 56)(9, "input", 57);
    \u0275\u0275listener("ngModelChange", function MenuPdfZoneEditorComponent_Conditional_54_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.query.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MenuPdfZoneEditorComponent_Conditional_54_Conditional_10_Template, 4, 0, "button", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MenuPdfZoneEditorComponent_Conditional_54_Conditional_11_Template, 3, 0, "div", 59)(12, MenuPdfZoneEditorComponent_Conditional_54_Conditional_12_Template, 2, 0, "p", 36)(13, MenuPdfZoneEditorComponent_Conditional_54_Conditional_13_Template, 2, 1, "p", 36)(14, MenuPdfZoneEditorComponent_Conditional_54_Conditional_14_Template, 12, 5, "div", 60);
    \u0275\u0275elementStart(15, "div", 61);
    \u0275\u0275repeaterCreate(16, MenuPdfZoneEditorComponent_Conditional_54_For_17_Template, 2, 2, "span", 9, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r1.query());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.query() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filteredDishes().length > 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dishes.length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dishes.length > 0 && ctx_r1.filteredDishes().length === 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.selZone()) == null ? null : tmp_7_0.dish_name) ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.zoneCoords());
  }
}
function MenuPdfZoneEditorComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1, " Nessuna zona su questa pagina.");
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3, 'Usa "Disegna zona" per iniziare. ');
    \u0275\u0275elementEnd();
  }
}
function MenuPdfZoneEditorComponent_Conditional_62_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Conditional_62_For_1_Template_div_click_0_listener() {
      const zone_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectZone(zone_r12.id));
    });
    \u0275\u0275element(1, "span", 71);
    \u0275\u0275elementStart(2, "span", 72);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.zoneItemBg(zone_r12.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.zoneDotBg(zone_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r12.dish_name || "Non assegnata", " ");
  }
}
function MenuPdfZoneEditorComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MenuPdfZoneEditorComponent_Conditional_62_For_1_Template, 4, 5, "div", 69, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.pageZones());
  }
}
function MenuPdfZoneEditorComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-left-color", ctx_r1.feedbackBorderColor());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.feedback());
  }
}
var MenuPdfZoneEditorComponent = class _MenuPdfZoneEditorComponent {
  pdf;
  dishes = [];
  back = new EventEmitter();
  zonesSaved = new EventEmitter();
  canvasRef;
  Math = Math;
  arService = inject(MenuArService);
  page = signal(1);
  zoom = signal(1);
  cw = signal(0);
  ch = signal(0);
  rendering = signal(false);
  zones = signal([]);
  selId = signal(null);
  drawMode = signal(false);
  drawing = signal(false);
  rect = signal(null);
  query = signal("");
  saving = signal(false);
  feedback = signal(null);
  feedbackErr = signal(false);
  pageZones = computed(() => this.zones().filter((z) => z.page_number === this.page()));
  selZone = computed(() => this.zones().find((z) => z.id === this.selId()) ?? null);
  filteredDishes = computed(() => {
    const q = this.query().toLowerCase().trim();
    if (!q)
      return this.dishes;
    return this.dishes.filter((d) => d.name.toLowerCase().includes(q));
  });
  zoneCoords = computed(() => {
    const z = this.selZone();
    if (!z)
      return [];
    return [
      { label: "x", val: Math.round(z.x) },
      { label: "y", val: Math.round(z.y) },
      { label: "w", val: Math.round(z.width) },
      { label: "h", val: Math.round(z.height) }
    ];
  });
  rLeft = computed(() => {
    const r = this.rect();
    return r ? Math.min(r.startX, r.curX) : 0;
  });
  rTop = computed(() => {
    const r = this.rect();
    return r ? Math.min(r.startY, r.curY) : 0;
  });
  rW = computed(() => {
    const r = this.rect();
    return r ? Math.abs(r.curX - r.startX) : 0;
  });
  rH = computed(() => {
    const r = this.rect();
    return r ? Math.abs(r.curY - r.startY) : 0;
  });
  zoomLabel = computed(() => Math.round(this.zoom() * 100) + "%");
  // ── Zoom methods (chiamati dal template, NO arrow fn inline) ──
  zoomIn() {
    this.zoom.update((z) => Math.min(3, z + 0.25));
  }
  zoomOut() {
    this.zoom.update((z) => Math.max(0.25, z - 0.25));
  }
  // ── Mode toggles ──
  setSelectMode() {
    this.drawMode.set(false);
  }
  setDrawMode() {
    this.drawMode.set(true);
  }
  // ── Deselect zone ──
  clearSel() {
    this.selId.set(null);
  }
  clearQuery() {
    this.query.set("");
  }
  get modeHint() {
    return this.drawMode() ? "Trascina sul PDF per creare una zona interattiva" : "Clicca una zona per selezionarla e assegnare un piatto";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.zones.set(yield this.arService.getZonesByPdf(this.pdf.id));
    });
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      yield this.renderPage();
    });
  }
  prevPage() {
    return __async(this, null, function* () {
      if (this.page() <= 1)
        return;
      this.page.update((p) => p - 1);
      yield this.renderPage();
    });
  }
  nextPage() {
    return __async(this, null, function* () {
      if (this.page() >= this.pdf.page_count)
        return;
      this.page.update((p) => p + 1);
      yield this.renderPage();
    });
  }
  renderPage() {
    return __async(this, null, function* () {
      if (!this.canvasRef)
        return;
      this.rendering.set(true);
      try {
        const r = yield this.arService.renderPdfPage(this.pdf.pdf_url, this.page(), 1.5);
        if (!r)
          return;
        this.cw.set(r.width);
        this.ch.set(r.height);
        yield new Promise((res) => setTimeout(res, 0));
        const ctx = this.canvasRef.nativeElement.getContext("2d");
        ctx.clearRect(0, 0, r.width, r.height);
        ctx.drawImage(r.canvas, 0, 0);
      } finally {
        this.rendering.set(false);
      }
    });
  }
  onDown(e) {
    if (!this.drawMode())
      return;
    const p = this.pos(e);
    this.drawing.set(true);
    this.rect.set({ startX: p.x, startY: p.y, curX: p.x, curY: p.y });
  }
  onMove(e) {
    if (!this.drawing())
      return;
    const p = this.pos(e);
    this.rect.update((r) => r ? __spreadProps(__spreadValues({}, r), { curX: p.x, curY: p.y }) : null);
  }
  onUp(_e) {
    if (!this.drawing())
      return;
    this.drawing.set(false);
    if (this.rW() < 10 || this.rH() < 10) {
      this.rect.set(null);
      return;
    }
    const newZone = {
      id: "tmp_" + Date.now(),
      menu_pdf_id: this.pdf.id,
      dish_id: null,
      page_number: this.page(),
      x: this.rLeft(),
      y: this.rTop(),
      width: this.rW(),
      height: this.rH(),
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.zones.update((z) => [...z, newZone]);
    this.selId.set(newZone.id);
    this.drawMode.set(false);
    this.rect.set(null);
  }
  onLeave() {
    if (this.drawing()) {
      this.drawing.set(false);
      this.rect.set(null);
    }
  }
  pos(e) {
    const b = e.currentTarget.getBoundingClientRect();
    const z = this.zoom();
    return { x: (e.clientX - b.left) / z, y: (e.clientY - b.top) / z };
  }
  removeZone(zone) {
    this.zones.update((z) => z.filter((z2) => z2.id !== zone.id));
    if (this.selId() === zone.id)
      this.selId.set(null);
  }
  assignDish(dish) {
    const id = this.selId();
    if (!id)
      return;
    this.zones.update((z) => z.map((zone) => zone.id === id ? __spreadProps(__spreadValues({}, zone), { dish_id: dish.id, dish_name: dish.name, dish_price: dish.base_price }) : zone));
    this.query.set("");
  }
  removeDish() {
    const id = this.selId();
    if (!id)
      return;
    this.zones.update((z) => z.map((zone) => zone.id === id ? __spreadProps(__spreadValues({}, zone), { dish_id: null, dish_name: void 0, dish_price: void 0 }) : zone));
  }
  selectZone(zoneId) {
    this.selId.set(zoneId);
  }
  zoneDotBg(zone) {
    return zone.dish_id ? "var(--primary)" : "var(--smoke-1)";
  }
  zoneItemBg(zoneId) {
    return this.selId() === zoneId ? "var(--smoke-2)" : "transparent";
  }
  feedbackBorderColor() {
    return this.feedbackErr() ? "var(--secondary)" : "var(--tertiary)";
  }
  saveAll() {
    return __async(this, null, function* () {
      this.saving.set(true);
      this.feedback.set(null);
      try {
        const saved = [];
        for (const zone of this.zones()) {
          if (zone.id.startsWith("tmp_")) {
            const r = yield this.arService.saveZone({
              menu_pdf_id: zone.menu_pdf_id,
              dish_id: zone.dish_id,
              page_number: zone.page_number,
              x: zone.x,
              y: zone.y,
              width: zone.width,
              height: zone.height
            });
            if (r)
              saved.push(__spreadProps(__spreadValues({}, r), { dish_name: zone.dish_name, dish_price: zone.dish_price }));
          } else {
            yield this.arService.updateZone(zone.id, {
              dish_id: zone.dish_id,
              x: zone.x,
              y: zone.y,
              width: zone.width,
              height: zone.height
            });
            saved.push(zone);
          }
        }
        if (this.pdf.status === "uploading") {
          yield this.arService.updatePdfStatus(this.pdf.id, "ready");
        }
        this.zones.set(saved);
        this.feedback.set("\u2713 " + saved.length + " zone salvate");
        this.feedbackErr.set(false);
        this.zonesSaved.emit(saved);
        setTimeout(() => this.feedback.set(null), 3500);
      } catch {
        this.feedback.set("Errore nel salvataggio. Riprova.");
        this.feedbackErr.set(true);
      } finally {
        this.saving.set(false);
      }
    });
  }
  static \u0275fac = function MenuPdfZoneEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuPdfZoneEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuPdfZoneEditorComponent, selectors: [["app-menu-pdf-zone-editor"]], viewQuery: function MenuPdfZoneEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, inputs: { pdf: "pdf", dishes: "dishes" }, outputs: { back: "back", zonesSaved: "zonesSaved" }, decls: 64, vars: 31, consts: [["pdfCanvas", ""], [1, "zone-editor-root"], [1, "zone-toolbar", "flex", "items-center", "justify-between", "gap-sm", "p-sm"], [1, "flex", "items-center", "gap-sm"], ["title", "Indietro", 1, "icon-button", "x-small", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "font-semibold", 2, "font-size", "var(--fs-sm)"], [1, "chip-mini"], [1, "icon-button", "x-small", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], ["points", "9 18 15 12 9 6"], [1, "flex", "items-center", "gap-sm", "border", "rounded", "p-mini", 2, "background", "var(--smoke-1)"], [1, "icon-button", "x-small", 3, "click"], [1, "text-mini", "font-semibold", 2, "min-width", "38px", "text-align", "center"], [1, "promethea-button", 2, "padding", "var(--gap-sm) var(--gap-md)", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "animate-spin"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "zone-editor-body"], [1, "zone-canvas-area"], [1, "zone-rendering-overlay", "flex", "flex-col", "items-center", "justify-center", "gap-md"], [1, "canvas-wrap", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [2, "display", "block", 3, "width", "height"], [1, "zone-rect", 3, "zone-rect--sel", "left", "top", "width", "height"], [1, "zone-rect", "zone-rect--drawing", 3, "left", "top", "width", "height"], [1, "zone-side-panel", "flex", "flex-col", "gap-md", "p-md"], [1, "card", "p-sm"], [1, "flex", "gap-sm", "mb-sm"], [1, "promethea-button", "w-100", 2, "padding", "var(--gap-sm)", "font-size", "var(--fs-mini)", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14 a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["x1", "9", "y1", "3", "x2", "9", "y2", "21"], [1, "text-muted", "text-mini", 2, "margin", "0"], [1, "card", "p-sm", "flex", "flex-col", "gap-sm"], [1, "card", "p-sm", "flex", "flex-col", "gap-sm", 2, "flex", "1"], [1, "flex", "items-center", "justify-between"], [1, "font-semibold", "text-mini", 2, "text-transform", "uppercase", "letter-spacing", ".06em", "color", "var(--text-muted)"], [1, "text-muted", "text-mini", "text-center", 2, "padding", "var(--gap-sm) 0"], [1, "info-message", 3, "border-left-color"], ["d", "M21 12a9 9 0 1 1-6.219-8.56"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], [1, "animate-spin", "avatartondo"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2"], [1, "text-mini", "font-semibold"], [1, "zone-rect", 3, "click"], [1, "zone-label"], [1, "zone-del-btn", 3, "click"], [1, "zone-rect", "zone-rect--drawing"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [2, "position", "relative"], ["type", "text", "placeholder", "Filtra piatti...", 2, "font-size", "var(--fs-mini)", "padding", "var(--gap-sm)", 3, "ngModelChange", "ngModel"], [1, "icon-button", "x-small", 2, "position", "absolute", "right", "8px", "top", "50%", "transform", "translateY(-50%)"], [1, "zone-dish-drop", "border", "rounded"], [1, "flex", "items-center", "gap-sm", "p-mini", "rounded", 2, "background", "var(--smoke-2)", "border", "1px solid var(--smoke-3)"], [1, "flex", "gap-sm", "flex-wrap"], [1, "icon-button", "x-small", 2, "position", "absolute", "right", "8px", "top", "50%", "transform", "translateY(-50%)", 3, "click"], ["width", "11", "height", "11", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "zone-dish-opt", "flex", "items-center", "justify-between", "w-100", 3, "zone-dish-opt--active"], [1, "zone-dish-opt", "flex", "items-center", "justify-between", "w-100", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "var(--primary)", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], [1, "text-mini", "font-semibold", 2, "flex", "1"], [1, "flex", "items-center", "gap-sm", "p-mini", "rounded", "transition", 2, "cursor", "pointer", 3, "background"], [1, "flex", "items-center", "gap-sm", "p-mini", "rounded", "transition", 2, "cursor", "pointer", 3, "click"], [2, "width", "8px", "height", "8px", "border-radius", "50%", "flex-shrink", "0"], [1, "text-mini", 2, "flex", "1", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], [1, "info-message"], [1, "text-mini"]], template: function MenuPdfZoneEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.back.emit());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "line", 6)(6, "polyline", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 8);
      \u0275\u0275text(8, "Editor Zone AR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 3)(12, "button", 10);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.prevPage());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 11);
      \u0275\u0275element(14, "polyline", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nextPage());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 11);
      \u0275\u0275element(17, "polyline", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "div", 3)(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275text(21, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 15);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275text(25, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 17);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveAll());
      });
      \u0275\u0275template(27, MenuPdfZoneEditorComponent_Conditional_27_Template, 2, 0, ":svg:svg", 18)(28, MenuPdfZoneEditorComponent_Conditional_28_Template, 3, 0, ":svg:svg", 19);
      \u0275\u0275text(29, " Salva zone ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 20)(31, "div", 21);
      \u0275\u0275template(32, MenuPdfZoneEditorComponent_Conditional_32_Template, 6, 1, "div", 22);
      \u0275\u0275elementStart(33, "div", 23);
      \u0275\u0275listener("mousedown", function MenuPdfZoneEditorComponent_Template_div_mousedown_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDown($event));
      })("mousemove", function MenuPdfZoneEditorComponent_Template_div_mousemove_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMove($event));
      })("mouseup", function MenuPdfZoneEditorComponent_Template_div_mouseup_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUp($event));
      })("mouseleave", function MenuPdfZoneEditorComponent_Template_div_mouseleave_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLeave());
      });
      \u0275\u0275element(34, "canvas", 24, 0);
      \u0275\u0275repeaterCreate(36, MenuPdfZoneEditorComponent_For_37_Template, 6, 11, "div", 25, _forTrack0);
      \u0275\u0275template(38, MenuPdfZoneEditorComponent_Conditional_38_Template, 1, 8, "div", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "aside", 27)(40, "div", 28)(41, "div", 29)(42, "button", 30);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setSelectMode());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 31);
      \u0275\u0275element(44, "path", 32)(45, "path", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Seleziona ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "button", 30);
      \u0275\u0275listener("click", function MenuPdfZoneEditorComponent_Template_button_click_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setDrawMode());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 31);
      \u0275\u0275element(49, "rect", 34)(50, "line", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " Disegna zona ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "p", 36);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, MenuPdfZoneEditorComponent_Conditional_54_Template, 18, 6, "div", 37);
      \u0275\u0275elementStart(55, "div", 38)(56, "div", 39)(57, "span", 40);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 9);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(61, MenuPdfZoneEditorComponent_Conditional_61_Template, 4, 0, "p", 41)(62, MenuPdfZoneEditorComponent_Conditional_62_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(63, MenuPdfZoneEditorComponent_Conditional_63_Template, 3, 3, "div", 42);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2("pag. ", ctx.page(), " / ", ctx.pdf.page_count, "");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.page() <= 1 || ctx.rendering());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.page() >= ctx.pdf.page_count || ctx.rendering());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.zoomLabel(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 27 : 28);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.rendering() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.cw() * ctx.zoom(), "px")("height", ctx.ch() * ctx.zoom(), "px")("cursor", ctx.drawMode() ? "crosshair" : "default");
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.cw() * ctx.zoom(), "px")("height", ctx.ch() * ctx.zoom(), "px");
      \u0275\u0275property("width", ctx.cw())("height", ctx.ch());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.pageZones());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.drawing() && ctx.rect() ? 38 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("ghost", ctx.drawMode());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("ghost", !ctx.drawMode());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.modeHint);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selZone() ? 54 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Zone \xB7 pagina ", ctx.page(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pageZones().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pageZones().length === 0 ? 61 : 62);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.feedback() ? 63 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.zone-editor-root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--background);\n}\n.zone-toolbar[_ngcontent-%COMP%] {\n  background: var(--background);\n  border-bottom: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.zone-editor-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.zone-canvas-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: var(--gap-md);\n  position: relative;\n  background: var(--smoke-1);\n}\n.zone-rendering-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 20;\n  background: color-mix(in srgb, var(--background) 80%, transparent);\n}\n.canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  box-shadow: 0 8px 32px var(--shadow-1);\n  border-radius: 3px;\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.zone-rect[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 2px solid var(--primary);\n  background: color-mix(in srgb, var(--primary) 15%, transparent);\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background .15s;\n}\n.zone-rect[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--primary) 25%, transparent);\n}\n.zone-rect--sel[_ngcontent-%COMP%] {\n  border-color: var(--secondary);\n  background: color-mix(in srgb, var(--secondary) 15%, transparent);\n}\n.zone-rect--drawing[_ngcontent-%COMP%] {\n  border-style: dashed;\n  pointer-events: none;\n  background: color-mix(in srgb, var(--tertiary) 10%, transparent);\n}\n.zone-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3px;\n  left: 3px;\n  right: 22px;\n  background: color-mix(in srgb, var(--primary) 88%, transparent);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 5px;\n  border-radius: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.zone-del-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: none;\n  background: var(--secondary);\n  color: #fff;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity .15s;\n}\n.zone-rect[_ngcontent-%COMP%]:hover   .zone-del-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.zone-side-panel[_ngcontent-%COMP%] {\n  width: 270px;\n  flex-shrink: 0;\n  border-left: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n  overflow-y: auto;\n  background: var(--background2);\n}\n.zone-dish-drop[_ngcontent-%COMP%] {\n  max-height: 160px;\n  overflow-y: auto;\n  background: var(--background);\n}\n.zone-dish-opt[_ngcontent-%COMP%] {\n  padding: var(--gap-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-bottom: 1px solid var(--smoke-1);\n  transition: background .1s;\n  width: 100%;\n  color: var(--text-color);\n}\n.zone-dish-opt[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-2);\n}\n.zone-dish-opt--active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 12%, transparent);\n  border-left: 3px solid var(--primary);\n}\n@media (max-width: 768px) {\n  .zone-side-panel[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n}\n/*# sourceMappingURL=pdf-zone-editor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuPdfZoneEditorComponent, [{
    type: Component,
    args: [{ selector: "app-menu-pdf-zone-editor", standalone: true, imports: [CommonModule, FormsModule, DecimalPipe], template: `<!-- pdf-zone-editor.component.html -->\r
<div class="zone-editor-root">\r
\r
  <!-- \u2550\u2550 TOOLBAR \u2550\u2550 -->\r
  <div class="zone-toolbar flex items-center justify-between gap-sm p-sm">\r
\r
    <div class="flex items-center gap-sm">\r
      <button class="icon-button x-small" (click)="back.emit()" title="Indietro">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"\r
          stroke="currentColor" stroke-width="2.5">\r
          <line x1="19" y1="12" x2="5" y2="12"/>\r
          <polyline points="12 19 5 12 12 5"/>\r
        </svg>\r
      </button>\r
      <span class="font-semibold" style="font-size: var(--fs-sm)">Editor Zone AR</span>\r
      <span class="chip-mini">pag. {{ page() }} / {{ pdf.page_count }}</span>\r
    </div>\r
\r
    <!-- Navigazione pagine -->\r
    <div class="flex items-center gap-sm">\r
      <button class="icon-button x-small" (click)="prevPage()"\r
        [disabled]="page() <= 1 || rendering()">\r
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"\r
          stroke="currentColor" stroke-width="2.5">\r
          <polyline points="15 18 9 12 15 6"/>\r
        </svg>\r
      </button>\r
      <button class="icon-button x-small" (click)="nextPage()"\r
        [disabled]="page() >= pdf.page_count || rendering()">\r
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"\r
          stroke="currentColor" stroke-width="2.5">\r
          <polyline points="9 18 15 12 9 6"/>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Zoom + Salva -->\r
    <div class="flex items-center gap-sm">\r
      <div class="flex items-center gap-sm border rounded p-mini" style="background: var(--smoke-1)">\r
        <button class="icon-button x-small" (click)="zoomOut()">\u2212</button>\r
        <span class="text-mini font-semibold" style="min-width:38px; text-align:center">\r
          {{ zoomLabel() }}\r
        </span>\r
        <button class="icon-button x-small" (click)="zoomIn()">+</button>\r
      </div>\r
\r
      <button class="promethea-button" style="padding: var(--gap-sm) var(--gap-md)"\r
        (click)="saveAll()" [disabled]="saving()">\r
        @if (saving()) {\r
          <svg class="animate-spin" width="14" height="14" viewBox="0 0 24 24"\r
            fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>\r
          </svg>\r
        } @else {\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"\r
            stroke="currentColor" stroke-width="2">\r
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>\r
            <polyline points="17 21 17 13 7 13 7 21"/>\r
          </svg>\r
        }\r
        Salva zone\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 BODY \u2550\u2550 -->\r
  <div class="zone-editor-body">\r
\r
    <!-- Area canvas -->\r
    <div class="zone-canvas-area">\r
      @if (rendering()) {\r
        <div class="zone-rendering-overlay flex flex-col items-center justify-center gap-md">\r
          <div class="animate-spin avatartondo">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"\r
              stroke="white" stroke-width="2">\r
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>\r
            </svg>\r
          </div>\r
          <span class="text-mini font-semibold">Rendering pagina {{ page() }}...</span>\r
        </div>\r
      }\r
\r
      <div class="canvas-wrap"\r
        [style.width.px]="cw() * zoom()"\r
        [style.height.px]="ch() * zoom()"\r
        [style.cursor]="drawMode() ? 'crosshair' : 'default'"\r
        (mousedown)="onDown($event)"\r
        (mousemove)="onMove($event)"\r
        (mouseup)="onUp($event)"\r
        (mouseleave)="onLeave()">\r
\r
        <canvas #pdfCanvas\r
          [width]="cw()" [height]="ch()"\r
          [style.width.px]="cw() * zoom()"\r
          [style.height.px]="ch() * zoom()"\r
          style="display:block">\r
        </canvas>\r
\r
        <!-- Zone salvate -->\r
        @for (zone of pageZones(); track zone.id) {\r
          <div class="zone-rect"\r
            [class.zone-rect--sel]="selId() === zone.id"\r
            [style.left.px]="zone.x * zoom()"\r
            [style.top.px]="zone.y * zoom()"\r
            [style.width.px]="zone.width * zoom()"\r
            [style.height.px]="zone.height * zoom()"\r
            (click)="selectZone(zone.id); $event.stopPropagation()">\r
            <div class="zone-label">\r
              @if (zone.dish_name) {\r
                {{ zone.dish_name }}\r
                @if (zone.dish_price) { \xB7 \u20AC{{ zone.dish_price | number:'1.2-2' }} }\r
              } @else {\r
                <em>Non assegnata</em>\r
              }\r
            </div>\r
            <button class="zone-del-btn"\r
              (click)="removeZone(zone); $event.stopPropagation()">\xD7</button>\r
          </div>\r
        }\r
\r
        <!-- Rettangolo in disegno -->\r
        @if (drawing() && rect()) {\r
          <div class="zone-rect zone-rect--drawing"\r
            [style.left.px]="rLeft() * zoom()"\r
            [style.top.px]="rTop() * zoom()"\r
            [style.width.px]="rW() * zoom()"\r
            [style.height.px]="rH() * zoom()">\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- \u2550\u2550 PANNELLO LATERALE \u2550\u2550 -->\r
    <aside class="zone-side-panel flex flex-col gap-md p-md">\r
\r
      <!-- Modalit\xE0 disegno/selezione -->\r
      <div class="card p-sm">\r
        <div class="flex gap-sm mb-sm">\r
          <button class="promethea-button w-100"\r
            [class.ghost]="drawMode()"\r
            style="padding: var(--gap-sm); font-size: var(--fs-mini)"\r
            (click)="setSelectMode()">\r
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"\r
              stroke="currentColor" stroke-width="2">\r
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14 a2 2 0 0 0 2-2v-7"/>\r
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
            </svg>\r
            Seleziona\r
          </button>\r
          <button class="promethea-button w-100"\r
            [class.ghost]="!drawMode()"\r
            style="padding: var(--gap-sm); font-size: var(--fs-mini)"\r
            (click)="setDrawMode()">\r
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"\r
              stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="3" width="18" height="18" rx="2"/>\r
              <line x1="9" y1="3" x2="9" y2="21"/>\r
            </svg>\r
            Disegna zona\r
          </button>\r
        </div>\r
        <p class="text-muted text-mini" style="margin:0">{{ modeHint }}</p>\r
      </div>\r
\r
      <!-- Zona selezionata -->\r
      @if (selZone()) {\r
        <div class="card p-sm flex flex-col gap-sm">\r
          <div class="flex items-center justify-between">\r
            <span class="font-semibold text-mini"\r
              style="text-transform:uppercase; letter-spacing:.06em; color: var(--text-muted)">\r
              Zona selezionata\r
            </span>\r
            <button class="icon-button x-small" (click)="clearSel()">\r
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"\r
                stroke="currentColor" stroke-width="2.5">\r
                <line x1="18" y1="6" x2="6" y2="18"/>\r
                <line x1="6" y1="6" x2="18" y2="18"/>\r
              </svg>\r
            </button>\r
          </div>\r
\r
          <!-- Ricerca piatto -->\r
          <div style="position:relative">\r
            <input type="text" placeholder="Filtra piatti..."\r
              style="font-size: var(--fs-mini); padding: var(--gap-sm)"\r
              [ngModel]="query()" (ngModelChange)="query.set($event)" />\r
            @if (query()) {\r
              <button class="icon-button x-small"\r
                style="position:absolute; right:8px; top:50%; transform:translateY(-50%)"\r
                (click)="clearQuery()">\r
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"\r
                  stroke="currentColor" stroke-width="2.5">\r
                  <line x1="18" y1="6" x2="6" y2="18"/>\r
                  <line x1="6" y1="6" x2="18" y2="18"/>\r
                </svg>\r
              </button>\r
            }\r
          </div>\r
\r
          <!-- Lista piatti \u2014 sempre visibile, filtrata se si digita -->\r
          @if (filteredDishes().length > 0) {\r
            <div class="zone-dish-drop border rounded">\r
              @for (d of filteredDishes(); track d.id) {\r
                <button class="zone-dish-opt flex items-center justify-between w-100"\r
                  [class.zone-dish-opt--active]="selZone()?.dish_id === d.id"\r
                  (click)="assignDish(d)">\r
                  <span class="text-mini font-semibold">{{ d.name }}</span>\r
                  <span class="chip-mini">\u20AC{{ d.base_price | number:'1.2-2' }}</span>\r
                </button>\r
              }\r
            </div>\r
          }\r
          @if (dishes.length === 0) {\r
            <p class="text-muted text-mini" style="margin:0">\r
              Nessun piatto nel menu. Aggiungi piatti dal builder prima di configurare le zone.\r
            </p>\r
          }\r
          @if (dishes.length > 0 && filteredDishes().length === 0) {\r
            <p class="text-muted text-mini" style="margin:0">Nessun piatto trovato per "{{ query() }}"</p>\r
          }\r
\r
          <!-- Piatto assegnato -->\r
          @if (selZone()?.dish_name) {\r
            <div class="flex items-center gap-sm p-mini rounded"\r
              style="background: var(--smoke-2); border: 1px solid var(--smoke-3)">\r
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"\r
                stroke="var(--primary)" stroke-width="2.5">\r
                <polyline points="20 6 9 17 4 12"/>\r
              </svg>\r
              <span class="text-mini font-semibold" style="flex:1">\r
                {{ selZone()!.dish_name }}\r
              </span>\r
              <span class="chip-mini">\u20AC{{ selZone()!.dish_price | number:'1.2-2' }}</span>\r
              <button class="icon-button x-small" (click)="removeDish()">\r
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"\r
                  stroke="currentColor" stroke-width="2.5">\r
                  <line x1="18" y1="6" x2="6" y2="18"/>\r
                  <line x1="6" y1="6" x2="18" y2="18"/>\r
                </svg>\r
              </button>\r
            </div>\r
          }\r
\r
          <!-- Coordinate -->\r
          <div class="flex gap-sm flex-wrap">\r
            @for (coord of zoneCoords(); track coord.label) {\r
              <span class="chip-mini">{{ coord.label }}: {{ coord.val }}</span>\r
            }\r
          </div>\r
        </div>\r
      }\r
\r
      <!-- Riepilogo zone -->\r
      <div class="card p-sm flex flex-col gap-sm" style="flex:1">\r
        <div class="flex items-center justify-between">\r
          <span class="font-semibold text-mini"\r
            style="text-transform:uppercase; letter-spacing:.06em; color: var(--text-muted)">\r
            Zone \xB7 pagina {{ page() }}\r
          </span>\r
          <span class="chip-mini">{{ pageZones().length }}</span>\r
        </div>\r
\r
        @if (pageZones().length === 0) {\r
          <p class="text-muted text-mini text-center" style="padding: var(--gap-sm) 0">\r
            Nessuna zona su questa pagina.<br>Usa "Disegna zona" per iniziare.\r
          </p>\r
        } @else {\r
          @for (zone of pageZones(); track zone.id) {\r
            <div class="flex items-center gap-sm p-mini rounded transition"\r
              [style.background]="zoneItemBg(zone.id)"\r
              style="cursor:pointer"\r
              (click)="selectZone(zone.id)">\r
              <span style="width:8px; height:8px; border-radius:50%; flex-shrink:0;"\r
                [style.background]="zoneDotBg(zone)">\r
              </span>\r
              <span class="text-mini"\r
                style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">\r
                {{ zone.dish_name || 'Non assegnata' }}\r
              </span>\r
            </div>\r
          }\r
        }\r
      </div>\r
\r
      <!-- Feedback salvataggio -->\r
      @if (feedback()) {\r
        <div class="info-message" [style.border-left-color]="feedbackBorderColor()">\r
          <span class="text-mini">{{ feedback() }}</span>\r
        </div>\r
      }\r
\r
    </aside>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/menu/pdf-zone-editor/pdf-zone-editor.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.zone-editor-root {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--background);\n}\n.zone-toolbar {\n  background: var(--background);\n  border-bottom: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.zone-editor-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.zone-canvas-area {\n  flex: 1;\n  overflow: auto;\n  padding: var(--gap-md);\n  position: relative;\n  background: var(--smoke-1);\n}\n.zone-rendering-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 20;\n  background: color-mix(in srgb, var(--background) 80%, transparent);\n}\n.canvas-wrap {\n  position: relative;\n  display: inline-block;\n  box-shadow: 0 8px 32px var(--shadow-1);\n  border-radius: 3px;\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.zone-rect {\n  position: absolute;\n  border: 2px solid var(--primary);\n  background: color-mix(in srgb, var(--primary) 15%, transparent);\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background .15s;\n}\n.zone-rect:hover {\n  background: color-mix(in srgb, var(--primary) 25%, transparent);\n}\n.zone-rect--sel {\n  border-color: var(--secondary);\n  background: color-mix(in srgb, var(--secondary) 15%, transparent);\n}\n.zone-rect--drawing {\n  border-style: dashed;\n  pointer-events: none;\n  background: color-mix(in srgb, var(--tertiary) 10%, transparent);\n}\n.zone-label {\n  position: absolute;\n  bottom: 3px;\n  left: 3px;\n  right: 22px;\n  background: color-mix(in srgb, var(--primary) 88%, transparent);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 5px;\n  border-radius: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.zone-del-btn {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: none;\n  background: var(--secondary);\n  color: #fff;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity .15s;\n}\n.zone-rect:hover .zone-del-btn {\n  opacity: 1;\n}\n.zone-side-panel {\n  width: 270px;\n  flex-shrink: 0;\n  border-left: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n  overflow-y: auto;\n  background: var(--background2);\n}\n.zone-dish-drop {\n  max-height: 160px;\n  overflow-y: auto;\n  background: var(--background);\n}\n.zone-dish-opt {\n  padding: var(--gap-sm);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-bottom: 1px solid var(--smoke-1);\n  transition: background .1s;\n  width: 100%;\n  color: var(--text-color);\n}\n.zone-dish-opt:hover {\n  background: var(--smoke-2);\n}\n.zone-dish-opt--active {\n  background: color-mix(in srgb, var(--primary) 12%, transparent);\n  border-left: 3px solid var(--primary);\n}\n@media (max-width: 768px) {\n  .zone-side-panel {\n    width: 220px;\n  }\n}\n/*# sourceMappingURL=pdf-zone-editor.component.css.map */\n"] }]
  }], null, { pdf: [{
    type: Input,
    args: [{ required: true }]
  }], dishes: [{
    type: Input
  }], back: [{
    type: Output
  }], zonesSaved: [{
    type: Output
  }], canvasRef: [{
    type: ViewChild,
    args: ["pdfCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuPdfZoneEditorComponent, { className: "MenuPdfZoneEditorComponent", filePath: "src/app/restaurant/menu/pdf-zone-editor/pdf-zone-editor.component.ts", lineNumber: 19 });
})();

export {
  MenuPdfZoneEditorComponent
};
//# sourceMappingURL=chunk-G3CJDJK4.js.map
