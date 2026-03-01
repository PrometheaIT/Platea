import {
  takeUntilDestroyed
} from "./chunk-QU65OKRV.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-4SOHWVCI.js";
import {
  ExternalLink,
  FileText,
  LucideAngularComponent,
  LucideAngularModule,
  Search,
  X
} from "./chunk-YWAAZKTM.js";
import {
  HttpClient
} from "./chunk-NI22Y6EC.js";
import {
  CommonModule
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  DestroyRef,
  Injectable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  inject,
  map,
  of,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T3MDKIO5.js";
import "./chunk-TWWAJFRB.js";

// src/app/services/wikipedia.service.ts
var WikipediaService = class _WikipediaService {
  http = inject(HttpClient);
  actionApi = "https://it.wikipedia.org/w/api.php";
  /**
   * Cerca pagine il cui titolo contiene il termine.
   * Restituisce un array di risultati con pageid, title, snippet.
   */
  search(term) {
    if (!term.trim())
      return of([]);
    const params = {
      action: "query",
      list: "search",
      srsearch: term,
      format: "json",
      origin: "*",
      srlimit: 10
    };
    return this.http.get(this.actionApi, { params }).pipe(map((res) => res.query?.search || []), catchError(this.handleError("search", [])));
  }
  /**
   * Ottiene i dati di una pagina: titolo, estratto (HTML), thumbnail e URL.
   * @param title Titolo esatto della pagina
   * @param full Se true, restituisce un estratto più lungo (non solo introduzione)
   */
  getPageData(title, full = false) {
    const params = {
      action: "query",
      titles: title,
      prop: "extracts|pageimages|info",
      explaintext: false,
      piprop: "thumbnail",
      pithumbsize: 300,
      inprop: "url",
      format: "json",
      origin: "*"
    };
    if (full) {
      params.exchars = 5e3;
    } else {
      params.exintro = true;
    }
    return this.http.get(this.actionApi, { params }).pipe(map((res) => {
      const pages = res.query?.pages;
      const pageId = Object.keys(pages)[0];
      const page = pages[pageId];
      if (!page)
        return null;
      let extract = page.extract || "";
      if (extract.includes("==") || extract.includes("'''")) {
        extract = this.wikitextToHtml(extract);
      }
      return {
        title: page.title,
        extract,
        thumbnail: page.thumbnail,
        content_urls: {
          desktop: { page: page.fullurl }
        }
      };
    }), catchError(this.handleError("getPageData", null)));
  }
  handleError(method, fallback) {
    return (error) => {
      console.error(`WikipediaService.${method} error:`, error);
      return of(fallback);
    };
  }
  wikitextToHtml(text) {
    if (!text)
      return "";
    let html = text.replace(/^==\s*(.+?)\s*==$/gm, "<h2>$1</h2>").replace(/^===\s*(.+?)\s*===$/gm, "<h3>$1</h3>").replace(/^====\s*(.+?)\s*====$/gm, "<h4>$1</h4>").replace(/^\*\s+(.+)$/gm, "<li>$1</li>").replace(/^#\s+(.+)$/gm, '<li style="list-style-type: decimal;">$1</li>').replace(/'''(.*?)'''/g, "<strong>$1</strong>").replace(/''(.*?)''/g, "<em>$1</em>").replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '<a href="#">$1</a>').replace(/\[(https?:\/\/[^\s]+)\s+([^\]]+)\]/g, '<a href="$1" target="_blank" rel="noopener">$2</a>');
    const paragraphs = html.split(/\n\s*\n/);
    html = paragraphs.map((p) => {
      p = p.trim();
      if (p.startsWith("<h") || p.startsWith("<li"))
        return p;
      return `<p>${p.replace(/\n/g, "<br>")}</p>`;
    }).join("\n");
    return html;
  }
  // FILTRO RICERCHE
  getCategoriesForPages(pageids) {
    if (pageids.length === 0)
      return of(/* @__PURE__ */ new Map());
    const params = {
      action: "query",
      pageids: pageids.join("|"),
      prop: "categories",
      cllimit: "max",
      format: "json",
      origin: "*"
    };
    return this.http.get(this.actionApi, { params }).pipe(map((res) => {
      const map2 = /* @__PURE__ */ new Map();
      const pages = res.query?.pages;
      if (pages) {
        Object.values(pages).forEach((page) => {
          const cats = page.categories?.map((c) => c.title) || [];
          map2.set(page.pageid, cats);
        });
      }
      return map2;
    }), catchError(this.handleError("getCategoriesForPages", /* @__PURE__ */ new Map())));
  }
  static \u0275fac = function WikipediaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WikipediaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WikipediaService, factory: _WikipediaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WikipediaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/restaurant/ingredient-search/ingredient-search.ts
var _forTrack0 = ($index, $item) => $item.pageid;
function IngredientSearch_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function IngredientSearch_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275element(1, "lucide-angular", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r1.XIcon);
  }
}
function IngredientSearch_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 16);
    \u0275\u0275text(2, "Caricamento...");
    \u0275\u0275elementEnd()();
  }
}
function IngredientSearch_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 17);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function IngredientSearch_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function IngredientSearch_Conditional_8_For_5_Template_button_click_0_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectResult(r_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.title, " ");
  }
}
function IngredientSearch_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3", 18);
    \u0275\u0275text(2, "Risultati");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275repeaterCreate(4, IngredientSearch_Conditional_8_For_5_Template, 2, 1, "button", 16, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.results);
  }
}
function IngredientSearch_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function IngredientSearch_Conditional_9_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadFullContent());
    });
    \u0275\u0275element(1, "lucide-angular", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r1.FileTextIcon);
  }
}
function IngredientSearch_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275element(1, "lucide-angular", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.selectedPage.content_urls.desktop.page, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("img", ctx_r1.ExternalLinkIcon);
  }
}
function IngredientSearch_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedPage.thumbnail.source, \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedPage.title);
  }
}
function IngredientSearch_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 21)(2, "div", 22)(3, "h2", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275template(6, IngredientSearch_Conditional_9_Conditional_6_Template, 2, 1, "button", 25)(7, IngredientSearch_Conditional_9_Conditional_7_Template, 2, 2, "a", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275template(9, IngredientSearch_Conditional_9_Conditional_9_Template, 1, 2, "img", 28);
    \u0275\u0275element(10, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedPage.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFullContent ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.selectedPage.content_urls == null ? null : ctx_r1.selectedPage.content_urls.desktop == null ? null : ctx_r1.selectedPage.content_urls.desktop.page) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.selectedPage.thumbnail == null ? null : ctx_r1.selectedPage.thumbnail.source) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.selectedPage.extract, \u0275\u0275sanitizeHtml);
  }
}
var IngredientSearch = class _IngredientSearch {
  wikiService = inject(WikipediaService);
  destroyRef = inject(DestroyRef);
  CULINARY_CATEGORIES = [
    // ---------- BASE ----------
    "Categoria:Cucina",
    "Categoria:Gastronomia",
    "Categoria:Alimenti",
    "Categoria:Ingredienti alimentari",
    "Categoria:Prodotti alimentari",
    // ---------- TIPI DI PIATTI E PORTATE ----------
    "Categoria:Antipasti",
    "Categoria:Primi piatti",
    "Categoria:Secondi piatti",
    "Categoria:Contorni",
    "Categoria:Dolci",
    "Categoria:Piatti unici",
    "Categoria:Piatti tipici",
    "Categoria:Zuppe e minestre",
    "Categoria:Insalate",
    "Categoria:Salse e sughi",
    "Categoria:Stuzzicheria",
    // ---------- INGREDIENTI SPECIFICI ----------
    "Categoria:Frutta",
    "Categoria:Verdura",
    "Categoria:Legumi",
    "Categoria:Cereali",
    "Categoria:Carne",
    "Categoria:Pesce",
    "Categoria:Prodotti ittici",
    "Categoria:Formaggi",
    "Categoria:Salumi",
    "Categoria:Uova",
    "Categoria:Funghi",
    "Categoria:Tuberi",
    "Categoria:Oli e grassi alimentari",
    "Categoria:Zuccheri e dolcificanti",
    "Categoria:Farine",
    "Categoria:Spezie",
    "Categoria:Erbe aromatiche",
    "Categoria:Frutta secca",
    "Categoria:Prodotti da forno",
    // ---------- BEVANDE ----------
    "Categoria:Bevande",
    "Categoria:Vini",
    "Categoria:Birra",
    "Categoria:Distillati",
    "Categoria:Liquori",
    "Categoria:Cocktail",
    "Categoria:Bevande analcoliche",
    "Categoria:Caff\xE8",
    "Categoria:T\xE8",
    "Categoria:Acque minerali",
    "Categoria:Vini DOC",
    "Categoria:Vini DOCG",
    "Categoria:Vini IGT",
    "Categoria:Enologia",
    // ---------- TECNICHE E PREPARAZIONI ----------
    "Categoria:Tecniche culinarie",
    "Categoria:Cottura",
    "Categoria:Conservazione degli alimenti",
    "Categoria:Trasformazione alimentare",
    "Categoria:Panificazione",
    "Categoria:Pasticceria",
    "Categoria:Gelateria",
    "Categoria:Caseificazione",
    "Categoria:Macellazione",
    "Categoria:Affumicatura",
    "Categoria:Marinatura",
    "Categoria:Frittura",
    "Categoria:Arrosto",
    "Categoria:Bollitura",
    "Categoria:Sottaceto",
    "Categoria:Sottolio",
    // ---------- ATTREZZATURE E STRUMENTI ----------
    "Categoria:Attrezzature da cucina",
    "Categoria:Elettrodomestici da cucina",
    "Categoria:Utensili da cucina",
    "Categoria:Stoviglie",
    "Categoria:Pentole e tegami",
    "Categoria:Coltelli",
    "Categoria:Macchine da caff\xE8",
    "Categoria:Forni",
    "Categoria:Frullatori e mixer",
    "Categoria:Bilance",
    // ---------- CUCINE REGIONALI ITALIANE ----------
    "Categoria:Cucina regionale italiana",
    "Categoria:Cucina abruzzese",
    "Categoria:Cucina calabrese",
    "Categoria:Cucina campana",
    "Categoria:Cucina emiliana",
    "Categoria:Cucina friulana",
    "Categoria:Cucina laziale",
    "Categoria:Cucina ligure",
    "Categoria:Cucina lombarda",
    "Categoria:Cucina marchigiana",
    "Categoria:Cucina molisana",
    "Categoria:Cucina piemontese",
    "Categoria:Cucina pugliese",
    "Categoria:Cucina romagnola",
    "Categoria:Cucina sarda",
    "Categoria:Cucina siciliana",
    "Categoria:Cucina toscana",
    "Categoria:Cucina trentina",
    "Categoria:Cucina umbra",
    "Categoria:Cucina valdostana",
    "Categoria:Cucina veneta",
    // ---------- CUCINE INTERNAZIONALI ----------
    "Categoria:Cucine nazionali",
    "Categoria:Cucina francese",
    "Categoria:Cucina spagnola",
    "Categoria:Cucina greca",
    "Categoria:Cucina tedesca",
    "Categoria:Cucina austriaca",
    "Categoria:Cucina britannica",
    "Categoria:Cucina irlandese",
    "Categoria:Cucina scandinava",
    "Categoria:Cucina russa",
    "Categoria:Cucina polacca",
    "Categoria:Cucina balcanica",
    "Categoria:Cucina turca",
    "Categoria:Cucina mediorientale",
    "Categoria:Cucina araba",
    "Categoria:Cucina israeliana",
    "Categoria:Cucina nordafricana",
    "Categoria:Cucina etiope",
    "Categoria:Cucina indiana",
    "Categoria:Cucina pakistana",
    "Categoria:Cucina cinese",
    "Categoria:Cucina giapponese",
    "Categoria:Cucina coreana",
    "Categoria:Cucina thailandese",
    "Categoria:Cucina vietnamita",
    "Categoria:Cucina filippina",
    "Categoria:Cucina indonesiana",
    "Categoria:Cucina malese",
    "Categoria:Cucina messicana",
    "Categoria:Cucina peruviana",
    "Categoria:Cucina brasiliana",
    "Categoria:Cucina argentina",
    "Categoria:Cucina caraibica",
    // ---------- DIETE E REGIMI ALIMENTARI ----------
    "Categoria:Nutrizione",
    "Categoria:Diete",
    "Categoria:Alimentazione vegetariana",
    "Categoria:Veganismo",
    "Categoria:Cucina senza glutine",
    "Categoria:Cucina senza lattosio",
    "Categoria:Allergie alimentari",
    "Categoria:Intolleranze alimentari",
    // ---------- PRODOTTI TIPICI E CERTIFICAZIONI ----------
    "Categoria:Prodotti DOP",
    "Categoria:Prodotti IGP",
    "Categoria:Prodotti STG",
    "Categoria:Prodotti agroalimentari tradizionali italiani",
    "Categoria:Formaggi DOP",
    "Categoria:Salumi DOP",
    "Categoria:Oli DOP",
    // ---------- STORIA E CULTURA ----------
    "Categoria:Storia dell'alimentazione",
    "Categoria:Gastronomia storica",
    "Categoria:Cucina medievale",
    "Categoria:Cucina rinascimentale",
    "Categoria:Cucina barocca",
    "Categoria:Tradizioni culinarie",
    "Categoria:Folclore alimentare",
    // ---------- PROFESSIONI E MESTIERI ----------
    "Categoria:Cuochi",
    "Categoria:Pasticceri",
    "Categoria:Panettieri",
    "Categoria:Macellai",
    "Categoria:Formaggeri",
    "Categoria:Enologi",
    "Categoria:Sommelier",
    "Categoria:Ma\xEEtre",
    "Categoria:Chef",
    "Categoria:Gastronomi",
    "Categoria:Critici gastronomici",
    // ---------- RISTORAZIONE E SERVIZI ----------
    "Categoria:Ristoranti",
    "Categoria:Tipi di ristoranti",
    "Categoria:Ristoranti stellati",
    "Categoria:Catering",
    "Categoria:Banqueting",
    "Categoria:Mense",
    "Categoria:Fast food",
    "Categoria:Street food",
    "Categoria:Enoteche",
    "Categoria:Bar",
    "Categoria:Pasticcerie",
    "Categoria:Gelaterie",
    "Categoria:Panetterie",
    "Categoria:Macellerie",
    "Categoria:Pescherie",
    "Categoria:Ortofrutta",
    "Categoria:Supermercati alimentari",
    // ---------- EVENTI E MANIFESTAZIONI ----------
    "Categoria:Sagre",
    "Categoria:Festival gastronomici",
    "Categoria:Fiere dell'alimentazione",
    "Categoria:Concorsi enogastronomici",
    // ---------- VARIE ----------
    "Categoria:Terminologia culinaria",
    "Categoria:Portate",
    "Categoria:Men\xF9",
    "Categoria:Ricette",
    "Categoria:Libri di cucina",
    "Categoria:Programmi televisivi di cucina"
  ];
  // Icone Lucide
  SearchIcon = Search;
  ExternalLinkIcon = ExternalLink;
  XIcon = X;
  FileTextIcon = FileText;
  // per eventuale pulsante "Carica intera pagina"
  searchControl = new FormControl("");
  results = [];
  selectedPage = null;
  loading = false;
  error = null;
  isFullContent = false;
  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), switchMap((term) => this.performSearch(term)), takeUntilDestroyed(this.destroyRef)).subscribe((results) => {
      this.results = results;
      this.loading = false;
    });
  }
  performSearch(term) {
    if (!term) {
      this.results = [];
      return of([]);
    }
    this.loading = true;
    this.error = null;
    return this.wikiService.search(term).pipe(switchMap((results) => {
      if (results.length === 0)
        return of([]);
      const pageids = results.map((r) => r.pageid);
      return this.wikiService.getCategoriesForPages(pageids).pipe(map((categoriesMap) => {
        const filtered = results.filter((result) => {
          const cats = categoriesMap.get(result.pageid) || [];
          return cats.some((cat) => this.isCulinaryCategory(cat));
        });
        return filtered.length > 0 ? filtered : results;
      }));
    }), catchError((err) => {
      this.error = "Errore durante la ricerca";
      return of([]);
    }));
  }
  isCulinaryCategory(category) {
    return this.CULINARY_CATEGORIES.some((keyword) => category.startsWith(keyword));
  }
  selectResult(result) {
    this.loading = true;
    this.error = null;
    this.isFullContent = false;
    this.wikiService.getPageData(result.title, false).pipe(catchError((err) => {
      this.error = "Impossibile caricare la pagina";
      return of(null);
    })).subscribe((data) => {
      this.selectedPage = data;
      this.loading = false;
    });
  }
  loadFullContent() {
    if (!this.selectedPage)
      return;
    this.loading = true;
    this.error = null;
    this.wikiService.getPageData(this.selectedPage.title, true).pipe(catchError((err) => {
      this.error = "Impossibile caricare il contenuto esteso";
      return of(null);
    })).subscribe((data) => {
      this.selectedPage = data;
      console.log("Estratto ricevuto:", data?.extract);
      this.isFullContent = true;
      this.loading = false;
    });
  }
  clearSearch() {
    this.searchControl.setValue("");
    this.results = [];
    this.selectedPage = null;
    this.isFullContent = false;
  }
  forceSearch() {
    this.performSearch(this.searchControl.value).subscribe((results) => {
      this.results = results;
    });
  }
  static \u0275fac = function IngredientSearch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IngredientSearch)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IngredientSearch, selectors: [["app-ingredient-search"]], decls: 22, vars: 7, consts: [[1, "page-container"], [1, "flex", "items-center", "gap-sm", "p-sm", 2, "position", "relative"], ["type", "text", "placeholder", "Cerca un ingrediente...", 1, "w-100", 3, "keyup.enter", "formControl"], [1, "icon-button"], ["type", "button", 1, "icon-button", 3, "click"], [3, "img"], [1, "flex", "justify-center", "p-sm"], [1, "info-message"], [1, "flex", "flex-col", "gap-sm", "p-sm"], [1, "p-sm"], [1, "flex-col", "flex", "justify-center", "items-center"], [1, "flex", "justify-center", "p-sm", "text-mini", "text-muted"], ["href", "https://creativecommons.org/licenses/by-sa/3.0/", "target", "_blank", "rel", "noopener", 1, "link"], ["href", "https://it.wikipedia.org/", "target", "_blank", "rel", "noopener", 1, "link"], ["target", "_blank", "rel", "noopener", "href", "https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=IT&uselang=it&wmf_medium=sidebar&wmf_source=donate&wmf_campaign=it.wikipedia.org", 1, "link", "text-mini"], [1, "icon-button", 3, "click"], [1, "chip"], [1, "material-icons"], [1, "text-md", "font-semibold"], [1, "flex", "flex-wrap", "gap-sm"], [1, "chip", 3, "click"], [1, "card", "mt-lg"], [1, "flex", "justify-between", "items-center"], [1, "card-title"], [1, "flex", "gap-sm"], ["title", "Carica pi\xF9 contenuto", 1, "icon-button"], ["target", "_blank", "rel", "noopener", "title", "Apri su Wikipedia", 1, "icon-button", 3, "href"], [1, "card-body", 2, "display", "flex", "gap", "var(--gap-sm)", "align-items", "flex-start"], [1, "rounded", 2, "width", "150px", "height", "auto", "flex-shrink", "0", 3, "src", "alt"], [1, "wiki-content", 2, "flex", "1", "min-width", "0", 3, "innerHTML"], ["title", "Carica pi\xF9 contenuto", 1, "icon-button", 3, "click"]], template: function IngredientSearch_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
      \u0275\u0275listener("keyup.enter", function IngredientSearch_Template_input_keyup_enter_2_listener() {
        return ctx.forceSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, IngredientSearch_Conditional_3_Template, 2, 1, "button", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function IngredientSearch_Template_button_click_4_listener() {
        return ctx.forceSearch();
      });
      \u0275\u0275element(5, "lucide-angular", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, IngredientSearch_Conditional_6_Template, 3, 0, "div", 6)(7, IngredientSearch_Conditional_7_Template, 5, 1, "div", 7)(8, IngredientSearch_Conditional_8_Template, 6, 0, "div", 8)(9, IngredientSearch_Conditional_9_Template, 11, 5, "div", 9);
      \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "span");
      \u0275\u0275text(13, " Contenuto disponibile sotto licenza ");
      \u0275\u0275elementStart(14, "a", 12);
      \u0275\u0275text(15, " CC BY-SA 3.0 ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " tramite ");
      \u0275\u0275elementStart(17, "a", 13);
      \u0275\u0275text(18, "Wikipedia");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, ". ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275text(21, " Fai una donazione a Wikipedia ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchControl.value ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("img", ctx.SearchIcon);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.results.length ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedPage ? 9 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.wiki-content[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  line-height: 1.6;\n  color: var(--text-color);\n  max-width: 100%;\n  overflow-wrap: break-word;\n}\n.wiki-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.wiki-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid var(--smoke-1);\n  padding-bottom: 0.3em;\n  color: var(--text-color);\n}\n.wiki-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: calc(var(--fs-md) * 0.9);\n  font-weight: 600;\n  margin-top: 1.2em;\n  margin-bottom: 0.3em;\n  color: var(--text-color);\n}\n.wiki-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: calc(var(--fs-md) * 0.8);\n  font-weight: 600;\n  margin-top: 1em;\n  margin-bottom: 0.2em;\n  color: var(--text-color);\n}\n.wiki-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.wiki-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n  margin-bottom: 1em;\n  padding-left: 0;\n}\n.wiki-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.3em;\n}\n.wiki-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.wiki-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-hover);\n  text-decoration: underline;\n}\n.wiki-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  margin: 1em 0;\n  font-size: 0.95em;\n}\n.wiki-content[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.wiki-content[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid var(--smoke-1);\n  padding: 0.5em;\n  text-align: left;\n  vertical-align: top;\n}\n.wiki-content[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--smoke-2);\n  font-weight: 700;\n}\n.wiki-content[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: color-mix(in srgb, var(--background) 95%, var(--text-color));\n}\n.wiki-content[_ngcontent-%COMP%]   .infobox[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 1.5em;\n  margin-bottom: 1.5em;\n  background: var(--smoke-1);\n  border: 1px solid var(--border-color, var(--smoke-2));\n  border-radius: 8px;\n  padding: 1em;\n  font-size: 0.9em;\n  max-width: 300px;\n  clear: right;\n  box-shadow: 0 2px 8px var(--shadow-1);\n}\n.wiki-content[_ngcontent-%COMP%]   .infobox[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.wiki-content[_ngcontent-%COMP%]   .infobox[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 0.3em 0.5em;\n}\n.wiki-content[_ngcontent-%COMP%]   .infobox[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-align: right;\n  width: 40%;\n}\n.wiki-content[_ngcontent-%COMP%]   .infobox[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.wiki-content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%], \n.wiki-content[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  margin: 1em auto;\n  text-align: center;\n}\n.wiki-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px var(--shadow-1);\n}\n.wiki-content[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%], \n.wiki-content[_ngcontent-%COMP%]   .thumbcaption[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: var(--text-muted);\n  margin-top: 0.3em;\n}\n.wiki-content[_ngcontent-%COMP%]   .citation[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: var(--text-muted);\n}\n.wiki-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.wiki-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n  border-radius: 4px;\n  padding: 0.2em 0.4em;\n  font-family: monospace;\n  font-size: 0.9em;\n}\n.wiki-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  padding: 1em;\n  overflow-x: auto;\n}\n@media (max-width: 768px) {\n  .wiki-content[_ngcontent-%COMP%]   .infobox[_ngcontent-%COMP%] {\n    float: none;\n    margin: 1em auto;\n    width: 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=ingredient-search.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IngredientSearch, [{
    type: Component,
    args: [{ selector: "app-ingredient-search", standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideAngularModule], template: '<div class="page-container">\r\n  <!-- Barra di ricerca -->\r\n  <div class="flex items-center gap-sm p-sm" style="position: relative;">\r\n    <input\r\n      type="text"\r\n      [formControl]="searchControl"\r\n      placeholder="Cerca un ingrediente..."\r\n      class="w-100"\r\n      (keyup.enter)="forceSearch()"\r\n    />\r\n    @if (searchControl.value) {\r\n      <button class="icon-button" (click)="clearSearch()">\r\n        <lucide-angular [img]="XIcon"></lucide-angular>\r\n      </button>\r\n    }\r\n    <button class="icon-button" (click)="forceSearch()" type="button">\r\n      <lucide-angular [img]="SearchIcon"></lucide-angular>\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Stato caricamento -->\r\n  @if (loading) {\r\n    <div class="flex justify-center p-sm">\r\n      <span class="chip">Caricamento...</span>\r\n    </div>\r\n  }\r\n\r\n  <!-- Errore -->\r\n  @if (error) {\r\n    <div class="info-message">\r\n      <span class="material-icons">error</span>\r\n      <span>{{ error }}</span>\r\n    </div>\r\n  }\r\n\r\n  <!-- Risultati ricerca -->\r\n  @if (results.length) {\r\n    <div class="flex flex-col gap-sm p-sm">\r\n      <h3 class="text-md font-semibold">Risultati</h3>\r\n      <div class="flex flex-wrap gap-sm">\r\n        @for (r of results; track r.pageid) {\r\n          <button class="chip" (click)="selectResult(r)">\r\n            {{ r.title }}\r\n          </button>\r\n        }\r\n      </div>\r\n    </div>\r\n  }\r\n\r\n  <!-- Dettaglio pagina selezionata -->\r\n  @if (selectedPage) {\r\n    <div class="p-sm">\r\n    <div class="card mt-lg">\r\n      <!-- Intestazione con titolo e pulsanti -->\r\n      <div class="flex justify-between items-center">\r\n        <h2 class="card-title">{{ selectedPage.title }}</h2>\r\n        <div class="flex gap-sm">\r\n          <!-- Pulsante per caricare contenuto esteso (se non gi\xE0 in full) -->\r\n          @if (!isFullContent) {\r\n            <button class="icon-button" (click)="loadFullContent()" title="Carica pi\xF9 contenuto">\r\n              <lucide-angular [img]="FileTextIcon"></lucide-angular>\r\n            </button>\r\n          }\r\n          @if (selectedPage.content_urls?.desktop?.page) {\r\n            <a\r\n              [href]="selectedPage.content_urls.desktop.page"\r\n              target="_blank"\r\n              rel="noopener"\r\n              class="icon-button"\r\n              title="Apri su Wikipedia"\r\n            >\r\n              <lucide-angular [img]="ExternalLinkIcon"></lucide-angular>\r\n            </a>\r\n          }\r\n        </div>\r\n      </div>\r\n\r\n    <!-- Corpo della card con immagine e contenuto wiki -->\r\n    <div class="card-body" style="display: flex; gap: var(--gap-sm); align-items: flex-start;">\r\n    @if (selectedPage.thumbnail?.source) {\r\n        <img\r\n        [src]="selectedPage.thumbnail.source"\r\n        [alt]="selectedPage.title"\r\n        class="rounded"\r\n        style="width: 150px; height: auto; flex-shrink: 0;"\r\n        />\r\n    }\r\n    <!-- Contenuto formattato con classe wiki-content -->\r\n    <div class="wiki-content" [innerHTML]="selectedPage.extract" style="flex: 1; min-width: 0;"></div>\r\n    </div>\r\n    </div>\r\n\r\n    </div>\r\n  }\r\n\r\n  <!-- Footer con licenza e donazione -->\r\n  <div class="flex-col flex justify-center items-center">\r\n    <div class="flex justify-center p-sm text-mini text-muted">\r\n      <span>\r\n        Contenuto disponibile sotto licenza \r\n        <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener" class="link">\r\n          CC BY-SA 3.0\r\n        </a> \r\n        tramite \r\n        <a href="https://it.wikipedia.org/" target="_blank" rel="noopener" class="link">Wikipedia</a>.\r\n      </span>\r\n    </div>\r\n    <a target="_blank" rel="noopener" class="link text-mini"\r\n      href="https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=IT&uselang=it&wmf_medium=sidebar&wmf_source=donate&wmf_campaign=it.wikipedia.org">\r\n      Fai una donazione a Wikipedia\r\n    </a>\r\n  </div>\r\n</div>', styles: ['/* src/app/restaurant/ingredient-search/ingredient-search.css */\n.wiki-content {\n  font-family: "Inter", sans-serif;\n  line-height: 1.6;\n  color: var(--text-color);\n  max-width: 100%;\n  overflow-wrap: break-word;\n}\n.wiki-content p {\n  margin-bottom: 1em;\n}\n.wiki-content h2 {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid var(--smoke-1);\n  padding-bottom: 0.3em;\n  color: var(--text-color);\n}\n.wiki-content h3 {\n  font-size: calc(var(--fs-md) * 0.9);\n  font-weight: 600;\n  margin-top: 1.2em;\n  margin-bottom: 0.3em;\n  color: var(--text-color);\n}\n.wiki-content h4 {\n  font-size: calc(var(--fs-md) * 0.8);\n  font-weight: 600;\n  margin-top: 1em;\n  margin-bottom: 0.2em;\n  color: var(--text-color);\n}\n.wiki-content ul,\n.wiki-content ol {\n  margin-left: 1.5em;\n  margin-bottom: 1em;\n  padding-left: 0;\n}\n.wiki-content li {\n  margin-bottom: 0.3em;\n}\n.wiki-content a {\n  color: var(--primary);\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.wiki-content a:hover {\n  color: var(--primary-hover);\n  text-decoration: underline;\n}\n.wiki-content table {\n  border-collapse: collapse;\n  width: 100%;\n  margin: 1em 0;\n  font-size: 0.95em;\n}\n.wiki-content th,\n.wiki-content td {\n  border: 1px solid var(--smoke-1);\n  padding: 0.5em;\n  text-align: left;\n  vertical-align: top;\n}\n.wiki-content th {\n  background: var(--smoke-2);\n  font-weight: 700;\n}\n.wiki-content tr:nth-child(even) {\n  background: color-mix(in srgb, var(--background) 95%, var(--text-color));\n}\n.wiki-content .infobox {\n  float: right;\n  margin-left: 1.5em;\n  margin-bottom: 1.5em;\n  background: var(--smoke-1);\n  border: 1px solid var(--border-color, var(--smoke-2));\n  border-radius: 8px;\n  padding: 1em;\n  font-size: 0.9em;\n  max-width: 300px;\n  clear: right;\n  box-shadow: 0 2px 8px var(--shadow-1);\n}\n.wiki-content .infobox th,\n.wiki-content .infobox td {\n  border: none;\n  background: transparent;\n  padding: 0.3em 0.5em;\n}\n.wiki-content .infobox th {\n  font-weight: 700;\n  text-align: right;\n  width: 40%;\n}\n.wiki-content .infobox td {\n  text-align: left;\n}\n.wiki-content figure,\n.wiki-content .thumb {\n  margin: 1em auto;\n  text-align: center;\n}\n.wiki-content img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px var(--shadow-1);\n}\n.wiki-content figcaption,\n.wiki-content .thumbcaption {\n  font-size: 0.85em;\n  color: var(--text-muted);\n  margin-top: 0.3em;\n}\n.wiki-content .citation {\n  font-size: 0.9em;\n  color: var(--text-muted);\n}\n.wiki-content pre,\n.wiki-content code {\n  background: var(--smoke-1);\n  border-radius: 4px;\n  padding: 0.2em 0.4em;\n  font-family: monospace;\n  font-size: 0.9em;\n}\n.wiki-content pre {\n  padding: 1em;\n  overflow-x: auto;\n}\n@media (max-width: 768px) {\n  .wiki-content .infobox {\n    float: none;\n    margin: 1em auto;\n    width: 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=ingredient-search.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IngredientSearch, { className: "IngredientSearch", filePath: "src/app/restaurant/ingredient-search/ingredient-search.ts", lineNumber: 17 });
})();
export {
  IngredientSearch
};
//# sourceMappingURL=chunk-OHJLBU3Z.js.map
