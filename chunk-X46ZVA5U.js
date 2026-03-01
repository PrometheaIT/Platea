import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T3MDKIO5.js";
import "./chunk-TWWAJFRB.js";

// src/app/shared/features/features.ts
function Features_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function Features_button_22_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(cat_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r2.selectedCategory === cat_r2.key ? cat_r2.color : "transparent");
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === cat_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.label, " ");
  }
}
function Features_div_25_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "lucide-angular", 51);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const highlight_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(highlight_r4);
  }
}
function Features_div_25_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, Features_div_25_div_8_div_1_Template, 4, 2, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", feature_r5.highlights);
  }
}
function Features_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41);
    \u0275\u0275element(3, "lucide-angular", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, Features_div_25_div_8_Template, 2, 1, "div", 45);
    \u0275\u0275elementStart(9, "div", 46)(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("name", feature_r5.icon)("size", 28)("strokeWidth", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feature_r5.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r5.highlights);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryLabel(feature_r5.category), " ");
  }
}
var Features = class _Features {
  features = [
    {
      icon: "users",
      title: "Gestione Staff",
      description: "Sistema completo di permessi e ruoli personalizzabili per ogni membro del team.",
      category: "gestionale",
      highlights: ["Permessi granulari", "Gestione turni", "Tracciamento attivit\xE0"]
    },
    {
      icon: "shopping-cart",
      title: "Comande & Cassa",
      description: "Prendi ordini in tempo reale e gestisci gli incassi con un sistema veloce e intuitivo.",
      category: "gestionale",
      highlights: ["Ordini touch", "Chiusura cassa", "Scontrini digitali"]
    },
    {
      icon: "calendar",
      title: "Prenotazioni",
      description: "Calendario intelligente e lista prenotazioni con gestione ottimizzata dei tavoli.",
      category: "gestionale",
      highlights: ["Calendario visivo", "Conferme automatiche", "Gestione no-show"]
    },
    {
      icon: "utensils",
      title: "Menu Digitale",
      description: "Crea e gestisci i tuoi menu con calcolo automatico del food cost.",
      category: "gestionale",
      highlights: ["Food cost automatico", "Allergeni integrati", "Multi-lingua"]
    },
    {
      icon: "package",
      title: "Inventario",
      description: "Monitora le scorte in tempo reale e ricevi alert automatici per i riordini.",
      category: "gestionale",
      highlights: ["Tracking real-time", "Alert giacenze", "Integrazione fornitori"]
    },
    {
      icon: "table-2",
      title: "Mappa Tavoli",
      description: "Editor visuale per creare e gestire la planimetria del tuo ristorante.",
      category: "gestionale",
      highlights: ["Drag & drop", "Stato tavoli live", "Rotazioni ottimizzate"]
    },
    {
      icon: "clock",
      title: "Gestione Turni",
      description: "Pianifica e monitora i turni di servizio con un calendario dedicato.",
      category: "gestionale",
      highlights: ["Calendario turni", "Notifiche cambio", "Storico presenze"]
    },
    {
      icon: "scroll-text",
      title: "Ricettario",
      description: "Database completo delle tue ricette con ingredienti, procedure e costi.",
      category: "gestionale",
      highlights: ["Ricette dettagliate", "Calcolo costi", "Versioning ricette"]
    },
    {
      icon: "chef-hat",
      title: "Display Cucina",
      description: "Schermo dedicato per la cucina con ordini in tempo reale e priorit\xE0.",
      category: "digitale",
      highlights: ["Aggiornamenti live", "Gestione priorit\xE0", "Timer automatici"]
    },
    {
      icon: "truck",
      title: "Fornitori",
      description: "Gestisci i rapporti con i fornitori e automatizza gli ordini.",
      category: "gestionale",
      highlights: ["Catalogo fornitori", "Ordini automatici", "Storico prezzi"]
    },
    {
      icon: "wine",
      title: "Bevande & Alcolici",
      description: "Sezione dedicata per la gestione della cantina e del bar.",
      category: "gestionale",
      highlights: ["Carta vini", "Giacenze bar", "Abbinamenti"]
    },
    {
      icon: "credit-card",
      title: "Gestione Spese",
      description: "Traccia tutte le spese aziendali e categorizzale automaticamente.",
      category: "gestionale",
      highlights: ["Upload ricevute", "Categorizzazione", "Export contabile"]
    },
    {
      icon: "bar-chart-3",
      title: "Report Finanziari",
      description: "Dashboard con analytics e KPI in tempo reale per il tuo business.",
      category: "gestionale",
      highlights: ["KPI real-time", "Export PDF", "Grafici interattivi"]
    },
    {
      icon: "file-text",
      title: "Stampa Menu",
      description: "Template professionali personalizzabili per stampare i tuoi menu.",
      category: "digitale",
      highlights: ["Template premium", "PDF esportabili", "QR code integrato"]
    },
    {
      icon: "globe",
      title: "Sito Web",
      description: "Crea il tuo sito web connesso direttamente al gestionale.",
      category: "digitale",
      highlights: ["Sincronizzazione menu", "Prenotazioni online", "SEO ottimizzato"]
    },
    {
      icon: "smartphone",
      title: "App Consumer",
      description: "I tuoi clienti possono trovarti, prenotare e ordinare dalla loro app.",
      category: "consumer",
      highlights: ["Prenotazioni clienti", "Menu digitale", "Recensioni"]
    },
    {
      icon: "megaphone",
      title: "Marketing",
      description: "Campagne promozionali, email marketing e fidelizzazione clienti.",
      category: "marketing",
      highlights: ["Email automation", "Programmi fedelt\xE0", "Analytics campagne"]
    }
  ];
  categories = [
    { key: "gestionale", label: "Gestionale", color: "var(--primary)" },
    { key: "digitale", label: "Digitalizzazione", color: "var(--tertiary)" },
    { key: "marketing", label: "Marketing", color: "var(--secondary)" },
    { key: "consumer", label: "Consumer", color: "var(--text-color)" }
  ];
  selectedCategory = null;
  get filteredFeatures() {
    if (!this.selectedCategory)
      return this.features;
    return this.features.filter((f) => f.category === this.selectedCategory);
  }
  selectCategory(category) {
    this.selectedCategory = category;
  }
  getCategoryLabel(categoryKey) {
    return this.categories.find((c) => c.key === categoryKey)?.label || "";
  }
  static \u0275fac = function Features_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Features)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Features, selectors: [["app-features"]], decls: 66, vars: 13, consts: [[1, "hero-section", "text-center"], [1, "flex", "flex-col", "items-center", "gap-lg", "p-lg"], [1, "chip", 2, "background", "var(--smoke-2)", "padding", "var(--gap-sm) var(--gap-md)"], ["name", "sparkles", 3, "size"], [2, "margin-left", "var(--gap-sm)"], [1, "text-xl", "font-bold", "gradient-text", 2, "max-width", "800px"], [1, "text-md", "text-muted", 2, "max-width", "600px"], [1, "flex", "gap-md", "flex-wrap", "justify-center", "mt-lg"], ["routerLink", "/register", 1, "promethea-button"], ["name", "rocket", 3, "size"], ["routerLink", "/demo", 1, "promethea-button", "outline"], ["name", "play-circle", 3, "size"], [1, "p-lg"], [1, "filters-container"], [1, "flex", "gap-md", "flex-wrap", "justify-center"], [1, "chip", 2, "cursor", "pointer", "transition", "all 0.2s", "padding", "var(--gap-sm) var(--gap-md)", 3, "click"], ["class", "chip", "style", "cursor: pointer; transition: all 0.2s; padding: var(--gap-sm) var(--gap-md);", 3, "active", "border-color", "click", 4, "ngFor", "ngForOf"], [1, "grid-cards", 2, "max-width", "1400px", "margin", "0 auto"], ["class", "card transition hover-lift", "style", "min-height: 280px; display: flex; flex-direction: column;", 4, "ngFor", "ngForOf"], [1, "p-lg", "bg-glass", "rounded-lg", 2, "margin", "var(--gap-xl) var(--gap-lg)"], [1, "flex", "flex-col", "items-center", "text-center", "gap-lg", 2, "max-width", "900px", "margin", "0 auto", "padding", "var(--gap-xl) var(--gap-lg)"], [2, "width", "64px", "height", "64px", "border-radius", "50%", "background", "var(--gradiente)", "display", "flex", "align-items", "center", "justify-content", "center"], ["name", "infinity", 2, "color", "white", 3, "size"], [1, "text-lg", "font-bold"], [1, "text-md", "text-muted"], [1, "grid-cards", 2, "grid-template-columns", "repeat(auto-fit, minmax(200px, 1fr))", "gap", "var(--gap-lg)", "width", "100%"], [1, "flex", "flex-col", "items-center", "gap-md", "p-md", "bg-smoke", "rounded", 2, "text-align", "center"], ["name", "refresh-cw", 2, "color", "var(--primary)", 3, "size"], [1, "text-sm"], [1, "text-mini", "text-muted"], ["name", "zap", 2, "color", "var(--primary)", 3, "size"], ["name", "bar-chart-3", 2, "color", "var(--primary)", 3, "size"], [1, "card", "text-center", "rounded-lg", 2, "margin", "0 var(--fs-lg)", "background", "var(--gradiente)", "color", "white", "border", "none"], [1, "text-lg", "font-bold", "mb-md", 2, "color", "white"], [1, "text-md", "mb-lg", 2, "color", "rgba(255,255,255,0.9)"], [1, "flex", "gap-md", "justify-center", "flex-wrap"], ["href", "https://www.prometheasrl.it/", 1, "promethea-button", "ghost", 2, "background", "white", "color", "var(--primary)", "border", "none"], ["href", "mailto:commerciale@prometheasrl.it", 1, "promethea-button", "outline"], ["name", "phone", 3, "size"], [1, "card", "transition", "hover-lift", 2, "min-height", "280px", "display", "flex", "flex-direction", "column"], [1, "flex", "items-center", "gap-md", "mb-md"], [1, "feature-icon-box"], [3, "name", "size", "strokeWidth"], [1, "card-title", "m-0", 2, "flex", "1"], [1, "text-sm", "text-muted", "mb-md"], ["class", "flex flex-col gap-sm", "style", "margin-top: auto;", 4, "ngIf"], [2, "margin-top", "var(--gap-md)", "padding-top", "var(--gap-md)", "border-top", "1px solid var(--smoke-1)"], [1, "chip-mini"], [1, "flex", "flex-col", "gap-sm", 2, "margin-top", "auto"], ["class", "flex items-center gap-sm text-mini", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-sm", "text-mini"], ["name", "check-circle", 2, "color", "var(--primary)", "flex-shrink", "0", 3, "size"]], template: function Features_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275element(3, "lucide-angular", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5, "Tutto quello di cui hai bisogno");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7, " Un'unica piattaforma per gestire ogni aspetto del tuo ristorante ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, " Da comande a marketing, da inventario a sito web. Promethea integra tutti i moduli essenziali in un ecosistema coerente. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "a", 8);
      \u0275\u0275element(12, "lucide-angular", 9);
      \u0275\u0275text(13, " Inizia Gratis ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 10);
      \u0275\u0275element(15, "lucide-angular", 11);
      \u0275\u0275text(16, " Richiedi Demo ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "section", 12)(18, "div", 13)(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function Features_Template_button_click_20_listener() {
        return ctx.selectCategory(null);
      });
      \u0275\u0275text(21, " Tutte le funzionalit\xE0 ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, Features_button_22_Template, 2, 5, "button", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "section", 12)(24, "div", 17);
      \u0275\u0275template(25, Features_div_25_Template, 12, 7, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "section", 19)(27, "div", 20)(28, "div", 21);
      \u0275\u0275element(29, "lucide-angular", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h2", 23);
      \u0275\u0275text(31, " Sinergia Interna: Tutto Parla con Tutto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 24);
      \u0275\u0275text(33, " I moduli non sono servizi separati ma un ecosistema integrato. Quando inserisci un piatto nel menu, il food cost si calcola automaticamente. Quando prendi un ordine, l'inventario si aggiorna. Quando chiudi la cassa, i dati finanziari sono gi\xE0 pronti. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 25)(35, "div", 26);
      \u0275\u0275element(36, "lucide-angular", 27);
      \u0275\u0275elementStart(37, "strong", 28);
      \u0275\u0275text(38, "Zero Duplicazioni");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 29);
      \u0275\u0275text(40, " Inserisci un dato una volta sola ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 26);
      \u0275\u0275element(42, "lucide-angular", 30);
      \u0275\u0275elementStart(43, "strong", 28);
      \u0275\u0275text(44, "Automatismi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 29);
      \u0275\u0275text(46, " Calcoli e aggiornamenti in tempo reale ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 26);
      \u0275\u0275element(48, "lucide-angular", 31);
      \u0275\u0275elementStart(49, "strong", 28);
      \u0275\u0275text(50, "Dati Coerenti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 29);
      \u0275\u0275text(52, " Report sempre allineati ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(53, "section", 12)(54, "div", 32)(55, "h2", 33);
      \u0275\u0275text(56, " Pronto a semplificare la gestione del tuo ristorante? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 34);
      \u0275\u0275text(58, " Inizia oggi gratuitamente. Nessuna carta richiesta. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 35)(60, "a", 36);
      \u0275\u0275element(61, "lucide-angular", 9);
      \u0275\u0275text(62, " Inizia Gratis ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "a", 37);
      \u0275\u0275element(64, "lucide-angular", 38);
      \u0275\u0275text(65, " Contattaci ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(9);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.selectedCategory === null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filteredFeatures);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 36);
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 32);
      \u0275\u0275advance(6);
      \u0275\u0275property("size", 32);
      \u0275\u0275advance(6);
      \u0275\u0275property("size", 32);
      \u0275\u0275advance(13);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 20);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  padding: var(--gap-xl) var(--gap-lg);\n  background: var(--background);\n  position: relative;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      var(--smoke-2) 0%,\n      transparent 70%);\n  pointer-events: none;\n  z-index: 0;\n}\n.hero-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px var(--smoke-2);\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: white;\n  border-color: transparent !important;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: var(--gap-lg) var(--gap-md);\n  }\n  .grid-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=features.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Features, [{
    type: Component,
    args: [{ selector: "app-features", standalone: true, imports: [CommonModule, LucideAngularModule], template: `  <!-- Hero Section -->\r
  <section class="hero-section text-center">\r
    <div class="flex flex-col items-center gap-lg p-lg">\r
      <span class="chip" style="background: var(--smoke-2); padding: var(--gap-sm) var(--gap-md);">\r
        <lucide-angular name="sparkles" [size]="16"></lucide-angular>\r
        <span style="margin-left: var(--gap-sm);">Tutto quello di cui hai bisogno</span>\r
      </span>\r
      \r
      <h1 class="text-xl font-bold gradient-text" style="max-width: 800px;">\r
        Un'unica piattaforma per gestire ogni aspetto del tuo ristorante\r
      </h1>\r
      \r
      <p class="text-md text-muted" style="max-width: 600px;">\r
        Da comande a marketing, da inventario a sito web. \r
        Promethea integra tutti i moduli essenziali in un ecosistema coerente.\r
      </p>\r
\r
      <div class="flex gap-md flex-wrap justify-center mt-lg">\r
        <a routerLink="/register" class="promethea-button">\r
          <lucide-angular name="rocket" [size]="20"></lucide-angular>\r
          Inizia Gratis\r
        </a>\r
        <a routerLink="/demo" class="promethea-button outline">\r
          <lucide-angular name="play-circle" [size]="20"></lucide-angular>\r
          Richiedi Demo\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Filtri Categorie -->\r
  <section class="p-lg">\r
    <div class="filters-container">\r
      <div class="flex gap-md flex-wrap justify-center">\r
        <button \r
          (click)="selectCategory(null)"\r
          class="chip"\r
          [class.active]="selectedCategory === null"\r
          style="cursor: pointer; transition: all 0.2s; padding: var(--gap-sm) var(--gap-md);">\r
          Tutte le funzionalit\xE0\r
        </button>\r
        \r
        <button \r
          *ngFor="let cat of categories"\r
          (click)="selectCategory(cat.key)"\r
          class="chip"\r
          [class.active]="selectedCategory === cat.key"\r
          [style.border-color]="selectedCategory === cat.key ? cat.color : 'transparent'"\r
          style="cursor: pointer; transition: all 0.2s; padding: var(--gap-sm) var(--gap-md);">\r
          {{ cat.label }}\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Grid Features -->\r
  <section class="p-lg">\r
    <div class="grid-cards" style="max-width: 1400px; margin: 0 auto;">\r
      <div \r
        *ngFor="let feature of filteredFeatures" \r
        class="card transition hover-lift"\r
        style="min-height: 280px; display: flex; flex-direction: column;">\r
        \r
        <!-- Header Card -->\r
        <div class="flex items-center gap-md mb-md">\r
          <div class="feature-icon-box">\r
            <lucide-angular [name]="feature.icon" [size]="28" [strokeWidth]="2"></lucide-angular>\r
          </div>\r
          <h3 class="card-title m-0" style="flex: 1;">{{ feature.title }}</h3>\r
        </div>\r
\r
        <!-- Description -->\r
        <p class="text-sm text-muted mb-md">\r
          {{ feature.description }}\r
        </p>\r
\r
        <!-- Highlights -->\r
        <div class="flex flex-col gap-sm" *ngIf="feature.highlights" style="margin-top: auto;">\r
          <div \r
            *ngFor="let highlight of feature.highlights" \r
            class="flex items-center gap-sm text-mini">\r
            <lucide-angular \r
              name="check-circle" \r
              [size]="16" \r
              style="color: var(--primary); flex-shrink: 0;">\r
            </lucide-angular>\r
            <span>{{ highlight }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- Category Badge -->\r
        <div style="margin-top: var(--gap-md); padding-top: var(--gap-md); border-top: 1px solid var(--smoke-1);">\r
          <span class="chip-mini">\r
            {{ getCategoryLabel(feature.category) }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Sezione Evidenza - Ecosistema Integrato -->\r
  <section class="p-lg bg-glass rounded-lg" style="margin: var(--gap-xl) var(--gap-lg);">\r
    <div class="flex flex-col items-center text-center gap-lg" style="max-width: 900px; margin: 0 auto; padding: var(--gap-xl) var(--gap-lg);">\r
      <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--gradiente); display: flex; align-items: center; justify-content: center;">\r
        <lucide-angular name="infinity" [size]="36" style="color: white;"></lucide-angular>\r
      </div>\r
      \r
      <h2 class="text-lg font-bold">\r
        Sinergia Interna: Tutto Parla con Tutto\r
      </h2>\r
      \r
      <p class="text-md text-muted">\r
        I moduli non sono servizi separati ma un ecosistema integrato. \r
        Quando inserisci un piatto nel menu, il food cost si calcola automaticamente. \r
        Quando prendi un ordine, l'inventario si aggiorna. \r
        Quando chiudi la cassa, i dati finanziari sono gi\xE0 pronti.\r
      </p>\r
\r
      <div class="grid-cards" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--gap-lg); width: 100%;">\r
        <div class="flex flex-col items-center gap-md p-md bg-smoke rounded" style="text-align: center;">\r
          <lucide-angular name="refresh-cw" [size]="32" style="color: var(--primary);"></lucide-angular>\r
          <strong class="text-sm">Zero Duplicazioni</strong>\r
          <span class="text-mini text-muted">\r
            Inserisci un dato una volta sola\r
          </span>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-md p-md bg-smoke rounded" style="text-align: center;">\r
          <lucide-angular name="zap" [size]="32" style="color: var(--primary);"></lucide-angular>\r
          <strong class="text-sm">Automatismi</strong>\r
          <span class="text-mini text-muted">\r
            Calcoli e aggiornamenti in tempo reale\r
          </span>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-md p-md bg-smoke rounded" style="text-align: center;">\r
          <lucide-angular name="bar-chart-3" [size]="32" style="color: var(--primary);"></lucide-angular>\r
          <strong class="text-sm">Dati Coerenti</strong>\r
          <span class="text-mini text-muted">\r
            Report sempre allineati\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Finale -->\r
  <section class="p-lg">\r
    <div class="card text-center rounded-lg" style="margin: 0 var(--fs-lg); background: var(--gradiente); color: white; border: none;">\r
      <h2 class="text-lg font-bold mb-md" style="color: white;">\r
        Pronto a semplificare la gestione del tuo ristorante?\r
      </h2>\r
      <p class="text-md mb-lg" style="color: rgba(255,255,255,0.9);">\r
        Inizia oggi gratuitamente. Nessuna carta richiesta.\r
      </p>\r
      <div class="flex gap-md justify-center flex-wrap">\r
        <a href="https://www.prometheasrl.it/" class="promethea-button ghost" style="background: white; color: var(--primary); border: none;">\r
          <lucide-angular name="rocket" [size]="20"></lucide-angular>\r
          Inizia Gratis\r
        </a>\r
        <a href="mailto:commerciale@prometheasrl.it" class="promethea-button outline" >\r
          <lucide-angular name="phone" [size]="20"></lucide-angular>\r
          Contattaci\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
`, styles: ['/* src/app/shared/features/features.css */\n.hero-section {\n  padding: var(--gap-xl) var(--gap-lg);\n  background: var(--background);\n  position: relative;\n  overflow: hidden;\n}\n.hero-section::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      var(--smoke-2) 0%,\n      transparent 70%);\n  pointer-events: none;\n  z-index: 0;\n}\n.hero-section > * {\n  position: relative;\n  z-index: 1;\n}\n.feature-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: var(--gradiente);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon .material-icons {\n  color: white;\n}\n.chip:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px var(--smoke-2);\n}\n.chip.active {\n  background: var(--gradiente);\n  color: white;\n  border-color: transparent !important;\n}\n@media (max-width: 768px) {\n  .hero-section {\n    padding: var(--gap-lg) var(--gap-md);\n  }\n  .grid-cards {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=features.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Features, { className: "Features", filePath: "src/app/shared/features/features.ts", lineNumber: 20 });
})();
export {
  Features
};
//# sourceMappingURL=chunk-X46ZVA5U.js.map
