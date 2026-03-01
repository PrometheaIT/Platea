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
  __spreadValues,
  __superGet
} from "./chunk-TWWAJFRB.js";

// src/app/services/Menu-PDF/menu-ar.service.ts
var BUCKET = "restaurant-images";
var PDF_FOLDER = "menu-pdfs";
var MenuArService = class _MenuArService extends BaseService {
  getTableName() {
    return "menu_pdfs";
  }
  get db() {
    return this.supabaseService.getSupabaseClient();
  }
  // ── Override loadData: idrata gli URL dopo il caricamento ──
  loadData(additionalFilters) {
    return __async(this, null, function* () {
      yield __superGet(_MenuArService.prototype, this, "loadData").call(this, additionalFilters);
      this.dataSubject.next(this.dataSubject.value.map((pdf) => this.hydratePdfUrl(pdf)));
    });
  }
  loadPdfsByMenu(menuId) {
    return __async(this, null, function* () {
      yield this.loadData({ menu_id: menuId });
    });
  }
  getPdfsByMenu(menuId) {
    return this.data.filter((p) => p.menu_id === menuId);
  }
  // ══════════════════════════════════════════════════════════
  // UPLOAD PDF
  // ══════════════════════════════════════════════════════════
  uploadMenuPdf(menuId, file) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      try {
        const timestamp = Date.now();
        const safeName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9.\-_]/g, "_").replace(/_+/g, "_").toLowerCase();
        const filePath = `${PDF_FOLDER}/${restaurantId}/${menuId}/${timestamp}_${safeName}`;
        const { error: uploadError } = yield this.db.storage.from(BUCKET).upload(filePath, file, { cacheControl: "3600", upsert: false });
        if (uploadError)
          throw uploadError;
        const pageCount = yield this.countPdfPages(file);
        const result = yield this.create({
          menu_id: menuId,
          file_path: filePath,
          mind_file_path: null,
          page_count: pageCount,
          status: "uploading"
        });
        return result ? this.hydratePdfUrl(result) : null;
      } catch (err) {
        this.handleError("uploadMenuPdf", err);
        return null;
      }
    });
  }
  updatePdfStatus(pdfId, status, mindFilePath) {
    return __async(this, null, function* () {
      const updates = { status };
      if (mindFilePath)
        updates.mind_file_path = mindFilePath;
      return this.update(pdfId, updates);
    });
  }
  deleteMenuPdf(pdfId, filePath) {
    return __async(this, null, function* () {
      try {
        yield this.db.from("menu_pdf_zones").delete().eq("menu_pdf_id", pdfId);
        yield this.db.storage.from(BUCKET).remove([filePath]).catch(() => {
        });
        return this.delete(pdfId);
      } catch (err) {
        this.handleError("deleteMenuPdf", err);
        return false;
      }
    });
  }
  getPdfPublicUrl(filePath) {
    return this.db.storage.from(BUCKET).getPublicUrl(filePath).data.publicUrl;
  }
  hydratePdfUrl(pdf) {
    return __spreadProps(__spreadValues({}, pdf), { pdf_url: pdf.file_path ? this.getPdfPublicUrl(pdf.file_path) : void 0 });
  }
  // ══════════════════════════════════════════════════════════
  // ZONE
  // ══════════════════════════════════════════════════════════
  getZonesByPdf(pdfId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.run(this.db.from("menu_pdf_zones").select("*, dishes(id, name, base_price, image_url)").eq("menu_pdf_id", pdfId).order("page_number"));
      if (error) {
        this.handleError("getZonesByPdf", error);
        return [];
      }
      return (data || []).map((z) => __spreadProps(__spreadValues({}, z), {
        dish_name: z.dishes?.name,
        dish_price: z.dishes?.base_price,
        dish_image_url: z.dishes?.image_url,
        dishes: void 0
      }));
    });
  }
  saveZone(zone) {
    return __async(this, null, function* () {
      const { data, error } = yield this.run(this.db.from("menu_pdf_zones").insert(__spreadProps(__spreadValues({}, zone), { created_at: (/* @__PURE__ */ new Date()).toISOString() })).select().single());
      if (error) {
        this.handleError("saveZone", error);
        return null;
      }
      return data;
    });
  }
  updateZone(zoneId, updates) {
    return __async(this, null, function* () {
      const { error } = yield this.run(this.db.from("menu_pdf_zones").update(updates).eq("id", zoneId));
      if (error) {
        this.handleError("updateZone", error);
        return false;
      }
      return true;
    });
  }
  deleteZone(zoneId) {
    return __async(this, null, function* () {
      const { error } = yield this.run(this.db.from("menu_pdf_zones").delete().eq("id", zoneId));
      if (error) {
        this.handleError("deleteZone", error);
        return false;
      }
      return true;
    });
  }
  // ══════════════════════════════════════════════════════════
  // PDF.JS — rendering pagine
  // ══════════════════════════════════════════════════════════
  countPdfPages(file) {
    return __async(this, null, function* () {
      try {
        const lib = yield this.loadPdfJs();
        const buf = yield file.arrayBuffer();
        const pdf = yield lib.getDocument({ data: buf }).promise;
        return pdf.numPages;
      } catch {
        return 1;
      }
    });
  }
  renderPdfPage(pdfUrl, pageNumber, scale = 1.5) {
    return __async(this, null, function* () {
      try {
        const lib = yield this.loadPdfJs();
        const pdf = yield lib.getDocument(pdfUrl).promise;
        const page = yield pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        yield page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
        return { canvas, width: viewport.width, height: viewport.height };
      } catch (err) {
        this.handleError("renderPdfPage", err);
        return null;
      }
    });
  }
  loadPdfJs() {
    return new Promise((resolve, reject) => {
      if (window["pdfjsLib"]) {
        resolve(window["pdfjsLib"]);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.onload = () => {
        const lib = window["pdfjsLib"];
        lib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(lib);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuArService_BaseFactory;
    return function MenuArService_Factory(__ngFactoryType__) {
      return (\u0275MenuArService_BaseFactory || (\u0275MenuArService_BaseFactory = \u0275\u0275getInheritedFactory(_MenuArService)))(__ngFactoryType__ || _MenuArService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuArService, factory: _MenuArService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuArService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MenuArService
};
//# sourceMappingURL=chunk-TAZ6PWID.js.map
