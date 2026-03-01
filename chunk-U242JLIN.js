import {
  MenuArService
} from "./chunk-3J2HTUJ5.js";
import {
  CommonModule
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/menu/menu-pdf-upload/menu-pdf-upload.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MenuPdfUploadComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function MenuPdfUploadComponent_Conditional_1_For_2_Template_div_click_0_listener() {
      const pdf_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPdf(pdf_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 11)(4, "polyline", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 13)(6, "span", 14);
    \u0275\u0275text(7, " Menu PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 17);
    \u0275\u0275listener("click", function MenuPdfUploadComponent_Conditional_1_For_2_Template_button_click_12_listener($event) {
      const pdf_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.editZones.emit(pdf_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 18);
    \u0275\u0275element(14, "rect", 19)(15, "line", 20)(16, "line", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 22);
    \u0275\u0275listener("click", function MenuPdfUploadComponent_Conditional_1_For_2_Template_button_click_17_listener($event) {
      const pdf_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.confirmDelete(pdf_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 18);
    \u0275\u0275element(19, "polyline", 23)(20, "path", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pdf_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r2.isSelected(pdf_r2.id) ? "var(--primary)" : "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2(" ", pdf_r2.page_count, " ", pdf_r2.page_count === 1 ? "pagina" : "pagine", " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.statusClass(pdf_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(pdf_r2.status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.deleting());
  }
}
function MenuPdfUploadComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, MenuPdfUploadComponent_Conditional_1_For_2_Template, 21, 8, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pdfs());
  }
}
function MenuPdfUploadComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("dragover", function MenuPdfUploadComponent_Conditional_2_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    })("dragleave", function MenuPdfUploadComponent_Conditional_2_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragLeave());
    })("drop", function MenuPdfUploadComponent_Conditional_2_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event));
    })("click", function MenuPdfUploadComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const fileInput_r5 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(fileInput_r5.click());
    });
    \u0275\u0275elementStart(1, "input", 26, 0);
    \u0275\u0275listener("change", function MenuPdfUploadComponent_Conditional_2_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 28);
    \u0275\u0275element(5, "path", 29)(6, "polyline", 30)(7, "line", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 33);
    \u0275\u0275text(11, " Trascina qui o ");
    \u0275\u0275elementStart(12, "span", 34);
    \u0275\u0275text(13, "sfoglia");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 35);
    \u0275\u0275text(15, "PDF \xB7 max 20 MB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pdf-dropzone--over", ctx_r2.isDragging());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.dropzoneLabel);
  }
}
function MenuPdfUploadComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 37);
    \u0275\u0275element(3, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5, "Caricamento PDF...");
    \u0275\u0275elementEnd()();
  }
}
function MenuPdfUploadComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "circle", 41)(3, "line", 42)(4, "line", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function MenuPdfUploadComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "polyline", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.successMsg());
  }
}
var MenuPdfUploadComponent = class _MenuPdfUploadComponent {
  menuId;
  editZones = new EventEmitter();
  pdfUploaded = new EventEmitter();
  arService = inject(MenuArService);
  pdfs = signal([]);
  uploading = signal(false);
  deleting = signal(false);
  isDragging = signal(false);
  error = signal(null);
  successMsg = signal(null);
  selectedId = signal(null);
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.arService.loadPdfsByMenu(this.menuId);
      this.pdfs.set(this.arService.getPdfsByMenu(this.menuId));
    });
  }
  statusLabel(s) {
    const map = {
      uploading: "In caricamento",
      processing: "Elaborazione",
      ready: "Pronto",
      error: "Errore"
    };
    return map[s] ?? s;
  }
  statusClass(s) {
    if (s === "ready")
      return "active";
    if (s === "error")
      return "warning";
    return "";
  }
  selectPdf(id) {
    this.selectedId.set(id);
  }
  isSelected(id) {
    return this.selectedId() === id;
  }
  onDragOver(e) {
    e.preventDefault();
    this.isDragging.set(true);
  }
  onDragLeave() {
    this.isDragging.set(false);
  }
  onDrop(e) {
    e.preventDefault();
    this.isDragging.set(false);
    const f = e.dataTransfer?.files?.[0];
    if (f)
      this.processFile(f);
  }
  onFileChange(e) {
    const f = e.target.files?.[0];
    if (f)
      this.processFile(f);
    e.target.value = "";
  }
  confirmDelete(pdf) {
    return __async(this, null, function* () {
      if (!confirm("Eliminare questo PDF e tutte le zone associate?"))
        return;
      this.deleting.set(true);
      const ok = yield this.arService.deleteMenuPdf(pdf.id, pdf.file_path);
      if (ok) {
        this.pdfs.update((l) => l.filter((p) => p.id !== pdf.id));
        if (this.selectedId() === pdf.id)
          this.selectedId.set(null);
      }
      this.deleting.set(false);
    });
  }
  get dropzoneLabel() {
    return this.pdfs().length === 0 ? "Carica il PDF del menu" : "Aggiungi un altro PDF";
  }
  processFile(file) {
    return __async(this, null, function* () {
      this.error.set(null);
      this.successMsg.set(null);
      if (file.type !== "application/pdf") {
        this.error.set("Il file deve essere un PDF.");
        return;
      }
      if (file.size > 20 * 1024 * 1024) {
        this.error.set("File troppo grande (max 20 MB).");
        return;
      }
      this.uploading.set(true);
      const result = yield this.arService.uploadMenuPdf(this.menuId, file);
      this.uploading.set(false);
      if (!result) {
        this.error.set("Errore nel caricamento. Riprova.");
        return;
      }
      this.pdfs.update((l) => [result, ...l]);
      this.successMsg.set("PDF caricato! Clicca \u25A3 per associare i piatti alle zone.");
      this.pdfUploaded.emit(result);
      setTimeout(() => this.successMsg.set(null), 6e3);
    });
  }
  static \u0275fac = function MenuPdfUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuPdfUploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuPdfUploadComponent, selectors: [["app-menu-pdf-upload"]], inputs: { menuId: "menuId" }, outputs: { editZones: "editZones", pdfUploaded: "pdfUploaded" }, decls: 6, vars: 5, consts: [["fileInput", ""], [1, "flex", "flex-col", "gap-md"], [1, "flex", "flex-col", "gap-sm"], [1, "pdf-dropzone", 3, "pdf-dropzone--over"], [1, "card", "p-sm", "flex", "flex-col", "gap-sm", "items-center", "text-center"], [1, "info-message", 2, "border-left-color", "var(--secondary)"], [1, "info-message"], [1, "card", "p-sm", "flex", "items-center", "gap-sm", 2, "flex-direction", "row", "cursor", "pointer", 3, "border-color"], [1, "card", "p-sm", "flex", "items-center", "gap-sm", 2, "flex-direction", "row", "cursor", "pointer", 3, "click"], [1, "avatartondo", 2, "flex-shrink", "0", "background", "var(--smoke-2)"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "var(--primary)", "stroke-width", "1.8"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12 a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], [1, "flex", "flex-col", 2, "flex", "1", "min-width", "0"], [1, "font-semibold", "text-mini", 2, "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "text-muted", "text-mini"], [1, "chip-mini"], ["title", "Associa piatti alle zone", 1, "icon-button", "x-small", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["x1", "9", "y1", "3", "x2", "9", "y2", "21"], ["x1", "3", "y1", "9", "x2", "21", "y2", "9"], ["title", "Elimina PDF", 1, "icon-button", "x-small", 2, "color", "var(--secondary)", 3, "click", "disabled"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "pdf-dropzone", 3, "dragover", "dragleave", "drop", "click"], ["type", "file", "accept", "application/pdf", 2, "display", "none", 3, "change"], [1, "avatartondo", 2, "margin", "0 auto var(--gap-sm)"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "font-semibold", "text-mini", 2, "margin", "0 0 4px"], [1, "text-muted", "text-mini", 2, "margin", "0 0 6px"], [1, "link"], [2, "margin", "0", "font-size", "var(--fs-mini)", "color", "var(--smoke-1)"], [1, "animate-spin", "avatartondo"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2"], ["d", "M21 12a9 9 0 1 1-6.219-8.56"], [1, "text-mini", "font-semibold"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "var(--secondary)", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-mini"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "var(--tertiary)", "stroke-width", "2"], ["points", "20 6 9 17 4 12"]], template: function MenuPdfUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, MenuPdfUploadComponent_Conditional_1_Template, 3, 0, "div", 2)(2, MenuPdfUploadComponent_Conditional_2_Template, 16, 3, "div", 3)(3, MenuPdfUploadComponent_Conditional_3_Template, 6, 0, "div", 4)(4, MenuPdfUploadComponent_Conditional_4_Template, 7, 1, "div", 5)(5, MenuPdfUploadComponent_Conditional_5_Template, 5, 1, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pdfs().length > 0 ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.uploading() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.uploading() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMsg() ? 5 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.pdf-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed color-mix(in srgb, var(--primary) 35%, transparent);\n  border-radius: var(--gap-sm);\n  padding: var(--gap-lg) var(--gap-md);\n  text-align: center;\n  cursor: pointer;\n  transition: border-color .18s, background .18s;\n  background: var(--smoke-2);\n}\n.pdf-dropzone[_ngcontent-%COMP%]:hover, \n.pdf-dropzone--over[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n}\n/*# sourceMappingURL=menu-pdf-upload.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuPdfUploadComponent, [{
    type: Component,
    args: [{ selector: "app-menu-pdf-upload", standalone: true, imports: [CommonModule], template: `<!-- menu-pdf-upload.component.html -->\r
<div class="flex flex-col gap-md">\r
\r
  <!-- \u2500\u2500 Lista PDF esistenti \u2500\u2500 -->\r
  @if (pdfs().length > 0) {\r
    <div class="flex flex-col gap-sm">\r
      @for (pdf of pdfs(); track pdf.id) {\r
        <div class="card p-sm flex items-center gap-sm"\r
          style="flex-direction:row; cursor:pointer"\r
          [style.border-color]="isSelected(pdf.id) ? 'var(--primary)' : ''"\r
          (click)="selectPdf(pdf.id)">\r
\r
          <!-- Icona -->\r
          <div class="avatartondo" style="flex-shrink:0; background: var(--smoke-2)">\r
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"\r
              stroke="var(--primary)" stroke-width="1.8">\r
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12 a2 2 0 0 0 2-2V8z"/>\r
              <polyline points="14 2 14 8 20 8"/>\r
            </svg>\r
          </div>\r
\r
          <!-- Info -->\r
          <div class="flex flex-col" style="flex:1; min-width:0">\r
            <span class="font-semibold text-mini"\r
              style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis">\r
              Menu PDF\r
            </span>\r
            <span class="text-muted text-mini">\r
              {{ pdf.page_count }} {{ pdf.page_count === 1 ? 'pagina' : 'pagine' }}\r
            </span>\r
          </div>\r
\r
          <!-- Status badge -->\r
          <span class="chip-mini" [class]="statusClass(pdf.status)">\r
            {{ statusLabel(pdf.status) }}\r
          </span>\r
\r
          <!-- Azione: modifica zone -->\r
          <button class="icon-button x-small" title="Associa piatti alle zone"\r
            (click)="editZones.emit(pdf); $event.stopPropagation()">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"\r
              stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="3" width="18" height="18" rx="2"/>\r
              <line x1="9" y1="3" x2="9" y2="21"/>\r
              <line x1="3" y1="9" x2="21" y2="9"/>\r
            </svg>\r
          </button>\r
\r
          <!-- Azione: elimina -->\r
          <button class="icon-button x-small" title="Elimina PDF"\r
            [disabled]="deleting()"\r
            (click)="confirmDelete(pdf); $event.stopPropagation()"\r
            style="color: var(--secondary)">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"\r
              stroke="currentColor" stroke-width="2">\r
              <polyline points="3 6 5 6 21 6"/>\r
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>\r
            </svg>\r
          </button>\r
\r
        </div>\r
      }\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Dropzone upload \u2500\u2500 -->\r
  @if (!uploading()) {\r
    <div class="pdf-dropzone"\r
      [class.pdf-dropzone--over]="isDragging()"\r
      (dragover)="onDragOver($event)"\r
      (dragleave)="onDragLeave()"\r
      (drop)="onDrop($event)"\r
      (click)="fileInput.click()">\r
\r
      <input #fileInput type="file" accept="application/pdf"\r
        style="display:none" (change)="onFileChange($event)" />\r
\r
      <div class="avatartondo" style="margin: 0 auto var(--gap-sm)">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"\r
          stroke="white" stroke-width="1.8" stroke-linecap="round">\r
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>\r
          <polyline points="17 8 12 3 7 8"/>\r
          <line x1="12" y1="3" x2="12" y2="15"/>\r
        </svg>\r
      </div>\r
\r
      <p class="font-semibold text-mini" style="margin:0 0 4px">{{ dropzoneLabel }}</p>\r
      <p class="text-muted text-mini" style="margin:0 0 6px">\r
        Trascina qui o <span class="link">sfoglia</span>\r
      </p>\r
      <p style="margin:0; font-size: var(--fs-mini); color: var(--smoke-1)">PDF \xB7 max 20 MB</p>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Upload in corso \u2500\u2500 -->\r
  @if (uploading()) {\r
    <div class="card p-sm flex flex-col gap-sm items-center text-center">\r
      <div class="animate-spin avatartondo">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"\r
          stroke="white" stroke-width="2">\r
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>\r
        </svg>\r
      </div>\r
      <span class="text-mini font-semibold">Caricamento PDF...</span>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Errore \u2500\u2500 -->\r
  @if (error()) {\r
    <div class="info-message" style="border-left-color: var(--secondary)">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"\r
        stroke="var(--secondary)" stroke-width="2">\r
        <circle cx="12" cy="12" r="10"/>\r
        <line x1="12" y1="8" x2="12" y2="12"/>\r
        <line x1="12" y1="16" x2="12.01" y2="16"/>\r
      </svg>\r
      <span class="text-mini">{{ error() }}</span>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Successo \u2500\u2500 -->\r
  @if (successMsg()) {\r
    <div class="info-message">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"\r
        stroke="var(--tertiary)" stroke-width="2">\r
        <polyline points="20 6 9 17 4 12"/>\r
      </svg>\r
      <span class="text-mini">{{ successMsg() }}</span>\r
    </div>\r
  }\r
\r
</div>`, styles: ["/* src/app/restaurant/menu/menu-pdf-upload/menu-pdf-upload.component.css */\n.pdf-dropzone {\n  border: 2px dashed color-mix(in srgb, var(--primary) 35%, transparent);\n  border-radius: var(--gap-sm);\n  padding: var(--gap-lg) var(--gap-md);\n  text-align: center;\n  cursor: pointer;\n  transition: border-color .18s, background .18s;\n  background: var(--smoke-2);\n}\n.pdf-dropzone:hover,\n.pdf-dropzone--over {\n  border-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 8%, transparent);\n}\n/*# sourceMappingURL=menu-pdf-upload.component.css.map */\n"] }]
  }], null, { menuId: [{
    type: Input,
    args: [{ required: true }]
  }], editZones: [{
    type: Output
  }], pdfUploaded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuPdfUploadComponent, { className: "MenuPdfUploadComponent", filePath: "src/app/restaurant/menu/menu-pdf-upload/menu-pdf-upload.component.ts", lineNumber: 15 });
})();

export {
  MenuPdfUploadComponent
};
//# sourceMappingURL=chunk-U242JLIN.js.map
