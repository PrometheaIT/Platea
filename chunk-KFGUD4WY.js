import {
  RestaurantPublicService
} from "./chunk-HZVXIAAV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-6SNKM7Z6.js";
import {
  ActivatedRoute
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/web-site/web-site.ts
function WebSite_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "\xB7\xB7\xB7");
    \u0275\u0275elementEnd();
  }
}
function WebSite_ng_container_29_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 65);
    \u0275\u0275listener("error", function WebSite_ng_container_29_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLogoError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.restaurant.logo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.restaurant == null ? null : ctx_r2.restaurant.name);
  }
}
function WebSite_ng_container_29_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.restaurant == null ? null : ctx_r2.restaurant.name == null ? null : (tmp_4_0 = ctx_r2.restaurant.name.charAt(0)) == null ? null : tmp_4_0.toUpperCase()) || "R", " ");
  }
}
function WebSite_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WebSite_ng_container_29_img_1_Template, 1, 2, "img", 64)(2, WebSite_ng_container_29_ng_template_2_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noLogo_r4 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.logoError && (ctx_r2.restaurant == null ? null : ctx_r2.restaurant.logo_url))("ngIfElse", noLogo_r4);
  }
}
function WebSite_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275element(2, "lucide-icon", 69);
    \u0275\u0275elementStart(3, "h3", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", feature_r5.color + "15");
    \u0275\u0275advance();
    \u0275\u0275property("name", feature_r5.icon)("color", feature_r5.color)("size", 24);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", feature_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r5.description);
  }
}
function WebSite_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "lucide-icon", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", module_r6.color);
    \u0275\u0275advance();
    \u0275\u0275property("name", module_r6.icon)("size", 24);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r6.name);
  }
}
function WebSite_div_67_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 81);
  }
}
function WebSite_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78)(4, "h3", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, WebSite_div_67_div_8_Template, 1, 0, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r7.number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r8 < ctx_r2.steps.length - 1);
  }
}
function WebSite_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Richiesta inviata! Ti contatteremo entro 24 ore. ");
    \u0275\u0275elementEnd();
  }
}
var WebSite = class _WebSite {
  route = inject(ActivatedRoute);
  restaurantPublicService = inject(RestaurantPublicService);
  loading = true;
  logoError = false;
  restaurant = null;
  ngOnInit() {
    return __async(this, null, function* () {
      const restaurantId = this.route.snapshot.paramMap.get("id");
      if (restaurantId) {
        this.loadRestaurant(restaurantId);
      } else {
        const id = yield this.restaurantPublicService.getCurrentRestaurantId();
        if (id) {
          this.loadRestaurant(id);
        } else {
          console.warn("\u26A0\uFE0F Nessun ristorante trovato");
          this.loading = false;
        }
      }
    });
  }
  loadRestaurant(restaurantId) {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        console.log("\u23F3 Caricamento ristorante con ID:", restaurantId);
        this.restaurant = yield this.restaurantPublicService.loadRestaurantById(restaurantId);
        console.log("\u2705 Ristorante caricato:", this.restaurant);
        console.log("\u{1F5BC}\uFE0F Logo URL ricevuto:", this.restaurant?.logo_url);
      } catch (error) {
        console.error("\u274C Errore nel caricamento:", error);
      } finally {
        this.loading = false;
        console.log("\u{1F3C1} Caricamento completato, loading = false");
      }
    });
  }
  onLogoError(event) {
    this.logoError = true;
  }
  contactForm = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  features = [
    {
      icon: "Link",
      title: "Integrazione Totale",
      description: "Il tuo sito dialoga con Promethea: prenotazioni, menu e disponibilit\xE0 sempre sincronizzati in tempo reale.",
      color: "var(--primary)"
    },
    {
      icon: "Zap",
      title: "Zero Complessit\xE0",
      description: "Nessuna gestione tecnica. Aggiorni l'app, si aggiorna il sito. Semplice come dev'essere.",
      color: "var(--tertiary)"
    },
    {
      icon: "Palette",
      title: "Design Su Misura",
      description: "Non un template standard, ma un sito che rispecchia la tua identit\xE0 e la tua cucina.",
      color: "var(--secondary)"
    },
    {
      icon: "Smartphone",
      title: "Mobile First",
      description: "I tuoi clienti cercano su smartphone. Il sito \xE8 ottimizzato per convertire da mobile.",
      color: "var(--primary)"
    }
  ];
  steps = [
    {
      number: "01",
      title: "Analizziamo",
      description: "Studiamo il tuo brand, il tuo menu e i tuoi obiettivi. Un colloquio, non un form."
    },
    {
      number: "02",
      title: "Creiamo",
      description: "Il nostro team sviluppa il sito integrato con i tuoi dati Promethea esistenti."
    },
    {
      number: "03",
      title: "Lanciamo",
      description: "Online in 2-3 settimane. Da quel momento, ogni modifica nell'app si riflette sul sito."
    }
  ];
  modules = [
    { name: "Prenotazioni Online", color: "#9F1893", icon: "CalendarDays" },
    { name: "Menu Digitale", color: "#A50063", icon: "UtensilsCrossed" },
    { name: "Gestione Tavoli", color: "#EF0095", icon: "Armchair" },
    { name: "Recensioni", color: "#0F0F0F", icon: "Star" }
  ];
  showSuccessMessage = false;
  onSubmit() {
    console.log("Form inviato:", this.contactForm);
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
      this.resetForm();
    }, 3e3);
  }
  resetForm() {
    this.contactForm = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }
  static \u0275fac = function WebSite_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WebSite)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebSite, selectors: [["app-web-site"]], decls: 112, vars: 11, consts: [["contactFormElement", "ngForm"], ["noLogo", ""], [1, "page-container"], [1, "hero-section"], [1, "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "highlight"], [1, "hero-subtitle"], [1, "flex", "gap-md", "flex-col-mobile", "mt-lg"], [1, "promethea-button"], [1, "promethea-button", "outline"], [1, "hero-visual"], [1, "mockup-browser", "rounded-lg", "shadow-card", "transition", "hover-lift"], [1, "browser-bar"], [1, "browser-dots", "flex", "gap-sm"], [1, "browser-url", "text-muted"], [1, "browser-content"], [1, "preview-header"], [1, "preview-logo"], ["class", "logo-placeholder", "style", "animation: pulse 1.5s ease-in-out infinite;", 4, "ngIf"], [4, "ngIf"], [1, "preview-nav"], [1, "nav-item"], [1, "preview-hero"], [1, "preview-section"], [1, "preview-card"], ["id", "features", 1, "py-lg"], [1, "section-header"], [1, "text-lg", "font-bold", "mb-md"], [1, "text-md", "text-muted"], [1, "grid-cards", "grid-cards2"], ["class", "card transition hover-lift", 4, "ngFor", "ngForOf"], [1, "integration-section"], [1, "integration-content", "text-center"], [1, "text-md", "text-muted", "mb-lg"], [1, "grid-cards", "mb-lg"], ["class", "module-item rounded-lg transition hover-lift", 4, "ngFor", "ngForOf"], [1, "integration-highlight", "rounded-lg", "p-md"], [1, "p-lg"], [1, "text-center", "mb-lg"], [1, "text-lg", "font-bold", "m-sm02"], [1, "steps-container"], ["class", "step-item", 4, "ngFor", "ngForOf"], ["id", "contact", 1, "py-lg", 2, "display", "none"], [1, "contact-container"], [1, "contact-info"], [1, "text-muted", "mb-lg"], [1, "contact-features"], [1, "flex", "items-center", "gap-sm", "mb-sm"], [1, "material-icons", "text-primary"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["for", "name", 1, "standard-label"], ["type", "text", "id", "name", "name", "name", "required", "", "placeholder", "Es. Trattoria La Lampara", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "standard-label"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "info@tuoristorante.it", 3, "ngModelChange", "ngModel"], ["for", "phone", 1, "standard-label"], ["type", "tel", "id", "phone", "name", "phone", "placeholder", "340 123 4567", 3, "ngModelChange", "ngModel"], ["for", "message", 1, "standard-label"], ["id", "message", "name", "message", "placeholder", "Che tipo di cucina offri? Hai gi\xE0 un sito? Cosa vorresti migliorare?", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "promethea-button", 2, "width", "100%", 3, "disabled"], ["class", "success-message rounded p-md bg-gradient", "style", "color: #FAFAFC;", 4, "ngIf"], [1, "logo-placeholder", 2, "animation", "pulse 1.5s ease-in-out infinite"], ["class", "restaurant-logo", 3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], [1, "restaurant-logo", 3, "error", "src", "alt"], [1, "logo-placeholder"], [1, "card", "transition", "hover-lift"], [1, "feature-icon", "mb-md", "flex", "items-center", "gap-sm", "p-sm", 2, "border-radius", "8px"], [1, "flex-shrink-0", 3, "name", "color", "size"], [1, "text-md", "font-bold"], [1, "text-muted"], [1, "module-item", "rounded-lg", "transition", "hover-lift"], [1, "module-icon", "rounded-full", "flex", "items-center", "justify-center", 2, "width", "48px", "height", "48px"], ["color", "#ffffff", 3, "name", "size"], [1, "font-semibold", "mt-sm"], [1, "step-item"], [1, "step-number", "text-primary"], [1, "step-content"], [1, "text-md", "font-bold", "mb-sm"], ["class", "step-connector", 4, "ngIf"], [1, "step-connector"], [1, "success-message", "rounded", "p-md", "bg-gradient", 2, "color", "#FAFAFC"], [1, "material-icons"]], template: function WebSite_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "div", 4)(3, "div", 5)(4, "h1", 6);
      \u0275\u0275text(5, " Il Tuo Ristorante ");
      \u0275\u0275element(6, "br");
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "Merita un Sito Web");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, " Non solo presenza online: un ecosistema integrato che lavora mentre tu cucini. Prenotazioni automatiche, menu sincronizzato, zero duplicazioni. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      \u0275\u0275text(13, " Richiedi una Demo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275text(15, " Scopri Come Funziona ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
      \u0275\u0275element(20, "span")(21, "span")(22, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 16);
      \u0275\u0275text(24, "iltuoristorante.it");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "div", 19);
      \u0275\u0275template(28, WebSite_div_28_Template, 2, 0, "div", 20)(29, WebSite_ng_container_29_Template, 4, 2, "ng-container", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 22);
      \u0275\u0275element(31, "div", 23)(32, "div", 23)(33, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "div", 24);
      \u0275\u0275elementStart(35, "div", 25);
      \u0275\u0275element(36, "div", 26)(37, "div", 26)(38, "div", 26);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(39, "section", 27)(40, "div", 28)(41, "h2", 29);
      \u0275\u0275text(42, "Perch\xE9 Avere un Sito Integrato con Promethea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 30);
      \u0275\u0275text(44, "Non vendiamo siti web. Estendiamo il tuo ecosistema digitale.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 31);
      \u0275\u0275template(46, WebSite_div_46_Template, 7, 9, "div", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "section", 33)(48, "div", 34)(49, "h2", 29);
      \u0275\u0275text(50, "I Tuoi Moduli Promethea, Sul Tuo Sito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 35);
      \u0275\u0275text(52, " Ogni servizio che usi nell'app diventa una funzionalit\xE0 del sito. Automaticamente. Senza che tu debba fare nulla. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 36);
      \u0275\u0275template(54, WebSite_div_54_Template, 5, 5, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 38)(56, "p")(57, "strong");
      \u0275\u0275text(58, "Esempio pratico:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " Modifichi gli orari di apertura nell'app Promethea? Il sito si aggiorna automaticamente. Aggiungi un piatto al menu? Appare online in tempo reale. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "section", 39)(61, "div", 40)(62, "h2", 41);
      \u0275\u0275text(63, "Come Funziona");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 30);
      \u0275\u0275text(65, "Quattro settimane dal brief al lancio. Semplice, veloce, su misura.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 42);
      \u0275\u0275template(67, WebSite_div_67_Template, 9, 4, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "section", 44)(69, "div", 45)(70, "div", 46)(71, "h2", 29);
      \u0275\u0275text(72, "Parliamone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 47);
      \u0275\u0275text(74, " Non aspettiamo che il cliente chieda aiuto. Proponiamo soluzioni prima che i problemi diventino urgenti. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "ul", 48)(76, "li", 49)(77, "span", 50);
      \u0275\u0275text(78, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span");
      \u0275\u0275text(80, "Consulenza gratuita di 30 minuti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "li", 49)(82, "span", 50);
      \u0275\u0275text(83, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span");
      \u0275\u0275text(85, "Preventivo trasparente e dettagliato");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li", 49)(87, "span", 50);
      \u0275\u0275text(88, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "span");
      \u0275\u0275text(90, "Nessun impegno, solo informazioni chiare");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(91, "form", 51, 0);
      \u0275\u0275listener("ngSubmit", function WebSite_Template_form_ngSubmit_91_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(93, "div", 52)(94, "label", 53);
      \u0275\u0275text(95, "Nome del Ristorante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "input", 54);
      \u0275\u0275twoWayListener("ngModelChange", function WebSite_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.name, $event) || (ctx.contactForm.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 52)(98, "label", 55);
      \u0275\u0275text(99, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "input", 56);
      \u0275\u0275twoWayListener("ngModelChange", function WebSite_Template_input_ngModelChange_100_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.email, $event) || (ctx.contactForm.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 52)(102, "label", 57);
      \u0275\u0275text(103, "Telefono");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "input", 58);
      \u0275\u0275twoWayListener("ngModelChange", function WebSite_Template_input_ngModelChange_104_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.phone, $event) || (ctx.contactForm.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 52)(106, "label", 59);
      \u0275\u0275text(107, "Raccontaci del tuo ristorante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "textarea", 60);
      \u0275\u0275twoWayListener("ngModelChange", function WebSite_Template_textarea_ngModelChange_108_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.message, $event) || (ctx.contactForm.message = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "button", 61);
      \u0275\u0275text(110, " Richiedi Informazioni ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(111, WebSite_div_111_Template, 4, 0, "div", 62);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const contactFormElement_r9 = \u0275\u0275reference(92);
      \u0275\u0275advance(28);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.features);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.modules);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.steps);
      \u0275\u0275advance(29);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.message);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !contactFormElement_r9.form.valid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showSuccessMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 100dvh;\n  display: flex;\n  padding-bottom: var(--gap-lg);\n  justify-content: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--gap-lg);\n  padding: var(--gap-sm) var(--gap-lg) var(--gap-lg) var(--gap-lg);\n  position: relative;\n  z-index: 2;\n}\n.hero-text[_ngcontent-%COMP%] {\n  line-height: 1.2;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: var(--gap-sm);\n}\n.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--primary),\n      var(--tertiary));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  line-height: 1.6;\n  color: var(--text-muted);\n  margin-bottom: var(--gap-md);\n}\n.feature-emoji[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.integration-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  color: var(--text-color);\n  margin: var(--gap-lg) 0;\n  padding: var(--gap-lg);\n  background: var(--background2);\n  border: 1px solid var(--smoke-1);\n  box-shadow:\n    inset 0 1px 0 var(--smoke-2),\n    0 0 60px -10px var(--shadow-1),\n    0 0 120px -30px var(--shadow-3);\n}\n.integration-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 55% 70% at 0% 0%,\n      var(--shadow-1),\n      transparent 70%),\n    radial-gradient(\n      ellipse 45% 55% at 100% 100%,\n      var(--shadow-2),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 40% 40% at 50% 50%,\n      var(--shadow-3),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.integration-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.integration-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: var(--gap-lg);\n}\n.module-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: var(--gap-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-md);\n  transition: all 0.3s ease;\n}\n.module-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-4px);\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  font-size: var(--fs-md);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.integration-highlight[_ngcontent-%COMP%] {\n  border-left: 4px solid white;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n}\n.steps-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: var(--gap-lg) auto;\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n  flex-wrap: wrap;\n}\n.step-item[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.step-number[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  opacity: 0.8;\n  margin-bottom: var(--gap-sm);\n}\n.step-connector[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: -50%;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      transparent);\n  opacity: 0.3;\n}\n.contact-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 60px;\n}\n.contact-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-sm);\n  margin-top: 16px;\n  font-weight: 600;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n@media (max-width: 968px) {\n  .hero-content[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    text-align: center;\n    gap: var(--gap-md);\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    display: contents !important;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    margin-bottom: var(--gap-lg);\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    order: 1;\n    padding-top: 0;\n    margin: var(--gap-sm) 0;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    order: 2;\n    padding: var(--gap-md);\n  }\n  .hero-text[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    order: 3;\n    margin-top: var(--gap-sm);\n  }\n  .mockup-browser[_ngcontent-%COMP%] {\n    transform: none !important;\n    max-width: 100%;\n    margin: var(--gap-lg) 0;\n  }\n}\n.img-hero2[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--gap-md);\n  padding: var(--gap-lg);\n  background: var(--vetro);\n  border-radius: 12px;\n  border: 1px solid var(--smoke-1);\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.visual-stack[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.visual-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  padding: var(--gap-md);\n  transition: transform 0.3s ease;\n}\n.visual-card[_ngcontent-%COMP%]:hover {\n  transform: rotate(0deg) translateY(0) scale(1.05) !important;\n  z-index: 10 !important;\n}\n.preview-img[_ngcontent-%COMP%], \n.preview-chart[_ngcontent-%COMP%], \n.preview-ad[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n}\n.preview-img[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n}\n.preview-chart[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0e8fc,\n      #e8d5f7);\n}\n.preview-ad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--smoke-1),\n      var(--smoke-2));\n}\n.service-icon[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-benefits[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: var(--gap-md);\n  border-top: 1px solid var(--smoke-1);\n}\n.why-us-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.why-us-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.why-us-section[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #FAFAFC;\n}\n.why-us-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.why-us-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.why-us-section[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #FAFAFC;\n}\n.packages-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.package-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.package-card.highlighted[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n  box-shadow: 0 8px 30px var(--shadow-1);\n  transform: scale(1.02);\n}\n.package-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: var(--gap-md);\n  background: var(--primary);\n  color: #FAFAFC;\n  border: none;\n}\n.package-services[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--gap-md) 0;\n  border-top: 1px solid var(--smoke-1);\n  border-bottom: 1px solid var(--smoke-1);\n}\n.info-block[_ngcontent-%COMP%] {\n  padding-left: var(--gap-md);\n  border-left: 4px solid;\n}\n.services-checkbox-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--gap-sm);\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  border-radius: 8px;\n}\n.mockup-browser[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-browser[_ngcontent-%COMP%]:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.browser-bar[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid var(--shadow-1);\n}\n.browser-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #ddd;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  background: #ff5f57;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffbd2e;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: #28ca42;\n}\n.browser-url[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  color: #666;\n  text-align: center;\n}\n.browser-content[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  padding: 24px;\n  min-height: 400px;\n}\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.preview-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.preview-hero[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  background: var(--vetro);\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: var(--background2);\n  height: 100px;\n  border-radius: 8px;\n}\n.preview-logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--smoke-1);\n  display: flex;\n  padding: var(--gap-sm);\n  align-items: center;\n  justify-content: center;\n}\n.restaurant-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.logo-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--gap-md);\n  font-weight: bold;\n  color: #666;\n  text-transform: uppercase;\n}\n.proof-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n.quote-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  opacity: 0.2;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n  line-height: 1;\n}\n.testimonial[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.7;\n  padding-left: 40px;\n}\n.mockup-dashboard[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-dashboard[_ngcontent-%COMP%]:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n  color: white;\n  padding: var(--gap-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  font-size: var(--fs-md);\n}\n.dashboard-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.status-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: var(--fs-mini);\n  backdrop-filter: blur(10px);\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: var(--background2);\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border-radius: 8px;\n  margin-bottom: var(--gap-md);\n  border-left: 4px solid var(--primary);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n  color: var(--text-muted);\n  margin-bottom: var(--gap-sm);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--gap-sm);\n}\n.stat-trend[_ngcontent-%COMP%] {\n  color: var(--tertiary);\n}\n.chart-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--gap-sm);\n  height: 80px;\n  margin-top: var(--gap-md);\n}\n.chart-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary),\n      var(--tertiary));\n  border-radius: 4px 4px 0 0;\n  min-height: 20px;\n  transition: all 0.3s ease;\n}\n.chart-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateY(-4px);\n}\n.flow-diagram[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-lg) 0;\n  flex-wrap: wrap;\n}\n.flow-step[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n  min-width: 140px;\n}\n.flow-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--gap-sm);\n}\n.flow-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.flow-arrow[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 300;\n}\n.grid-cards3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n}\n.service-card[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border: 1px solid var(--shadow-1);\n  display: flex;\n  flex-direction: column;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.service-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n  border-bottom: 2px solid var(--smoke-1);\n}\n.service-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.service-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n  line-height: 1.6;\n}\n.check-icon[_ngcontent-%COMP%] {\n  color: var(--tertiary);\n  font-weight: 700;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.pricing-hint-section[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n  padding: var(--gap-lg);\n  margin: var(--gap-lg) 0;\n}\n.pricing-hint-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.highlight-price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary);\n}\n/*# sourceMappingURL=promo-common.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebSite, [{
    type: Component,
    args: [{ selector: "app-web-site", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<!-- website-promo.component.html -->\r
<div class="page-container">\r
  \r
  <!-- HERO SECTION -->\r
  <section class="hero-section">\r
    <div class="hero-content">\r
      <div class="hero-text">\r
        <h1 class="hero-title">\r
          Il Tuo Ristorante <br>\r
          <span class="highlight">Merita un Sito Web</span>\r
        </h1>\r
        <p class="hero-subtitle">\r
          Non solo presenza online: un ecosistema integrato che lavora mentre tu cucini.\r
          Prenotazioni automatiche, menu sincronizzato, zero duplicazioni.\r
        </p>\r
        <div class="flex gap-md flex-col-mobile mt-lg">\r
          <button class="promethea-button" >\r
            Richiedi una Demo\r
          </button>\r
          <button class="promethea-button outline" >\r
            Scopri Come Funziona\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div class="hero-visual">\r
        <div class="mockup-browser rounded-lg shadow-card transition hover-lift">\r
          <div class="browser-bar">\r
            <div class="browser-dots flex gap-sm">\r
              <span></span><span></span><span></span>\r
            </div>\r
            <div class="browser-url text-muted">iltuoristorante.it</div>\r
          </div>\r
          <div class="browser-content">\r
            <div class="preview-header">\r
<div class="preview-logo">\r
  <div *ngIf="loading" class="logo-placeholder" style="animation: pulse 1.5s ease-in-out infinite;">\xB7\xB7\xB7</div>\r
\r
  <ng-container *ngIf="!loading">\r
    <img\r
      *ngIf="!logoError && restaurant?.logo_url; else noLogo"\r
      [src]="restaurant!.logo_url"\r
      [alt]="restaurant?.name"\r
      class="restaurant-logo"\r
      (error)="onLogoError($event)">\r
\r
    <ng-template #noLogo>\r
      <div class="logo-placeholder">\r
        {{ restaurant?.name?.charAt(0)?.toUpperCase() || 'R' }}\r
      </div>\r
    </ng-template>\r
  </ng-container>\r
</div>\r
              \r
              <div class="preview-nav">\r
                <div class="nav-item"></div>\r
                <div class="nav-item"></div>\r
                <div class="nav-item"></div>\r
              </div>\r
            </div>\r
            <div class="preview-hero"></div>\r
            <div class="preview-section">\r
              <div class="preview-card"></div>\r
              <div class="preview-card"></div>\r
              <div class="preview-card"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- FEATURES SECTION -->\r
  <section class="py-lg" id="features">\r
    <div class="section-header">\r
      <h2 class="text-lg font-bold mb-md">Perch\xE9 Avere un Sito Integrato con Promethea</h2>\r
      <p class="text-md text-muted">Non vendiamo siti web. Estendiamo il tuo ecosistema digitale.</p>\r
    </div>\r
    \r
    <div class="grid-cards grid-cards2">\r
<div class="card transition hover-lift" *ngFor="let feature of features">\r
  <div class="feature-icon mb-md flex items-center gap-sm p-sm"\r
       [style.background]="feature.color + '15'"\r
       style="border-radius: 8px;">\r
    \r
    <lucide-icon \r
      [name]="feature.icon" \r
      [color]="feature.color" \r
      [size]="24" \r
      class="flex-shrink-0">\r
    </lucide-icon>\r
\r
    <h3 class="text-md font-bold" [style.color]="feature.color">\r
      {{ feature.title }}\r
    </h3>\r
  </div>\r
  <p class="text-muted">{{ feature.description }}</p>\r
</div>\r
    </div>\r
  </section>\r
\r
  <!-- INTEGRATION SECTION -->\r
  <section class="integration-section">\r
    <div class="integration-content text-center">\r
      <h2 class="text-lg font-bold mb-md">I Tuoi Moduli Promethea, Sul Tuo Sito</h2>\r
      <p class="text-md text-muted mb-lg">\r
        Ogni servizio che usi nell'app diventa una funzionalit\xE0 del sito.\r
        Automaticamente. Senza che tu debba fare nulla.\r
      </p>\r
\r
      <div class="grid-cards mb-lg">\r
<div class="module-item rounded-lg transition hover-lift" \r
     *ngFor="let module of modules">\r
  <div class="module-icon rounded-full flex items-center justify-center"\r
       [style.background]="module.color"\r
       style="width: 48px; height: 48px;"> <lucide-icon \r
      [name]="module.icon" \r
      color="#ffffff" \r
      [size]="24">\r
    </lucide-icon>\r
    \r
  </div>\r
  <span class="font-semibold mt-sm">{{ module.name }}</span>\r
</div>\r
      </div>\r
\r
      <div class="integration-highlight rounded-lg p-md">\r
        <p>\r
          <strong>Esempio pratico:</strong> Modifichi gli orari di apertura nell'app Promethea? \r
          Il sito si aggiorna automaticamente. Aggiungi un piatto al menu? Appare online in tempo reale.\r
        </p>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- HOW IT WORKS -->\r
  <section class="p-lg">\r
    <div class="text-center mb-lg">\r
      <h2 class="text-lg font-bold m-sm02">Come Funziona</h2>\r
      <p class="text-md text-muted ">Quattro settimane dal brief al lancio. Semplice, veloce, su misura.</p>\r
    </div>\r
\r
    <div class="steps-container">\r
      <div class="step-item" *ngFor="let step of steps; let i = index">\r
        <div class="step-number text-primary">{{ step.number }}</div>\r
        <div class="step-content">\r
          <h3 class="text-md font-bold mb-sm">{{ step.title }}</h3>\r
          <p class="text-muted">{{ step.description }}</p>\r
        </div>\r
        <div class="step-connector" *ngIf="i < steps.length - 1"></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CONTACT FORM -->\r
  <section class="py-lg" id="contact"\r
  style="display: none;"\r
  >\r
    <div class="contact-container">\r
      <div class="contact-info">\r
        <h2 class="text-lg font-bold mb-md">Parliamone</h2>\r
        <p class="text-muted mb-lg">\r
          Non aspettiamo che il cliente chieda aiuto. Proponiamo soluzioni prima che i problemi diventino urgenti.\r
        </p>\r
        <ul class="contact-features">\r
          <li class="flex items-center gap-sm mb-sm">\r
            <span class="material-icons text-primary">check_circle</span>\r
            <span>Consulenza gratuita di 30 minuti</span>\r
          </li>\r
          <li class="flex items-center gap-sm mb-sm">\r
            <span class="material-icons text-primary">check_circle</span>\r
            <span>Preventivo trasparente e dettagliato</span>\r
          </li>\r
          <li class="flex items-center gap-sm mb-sm">\r
            <span class="material-icons text-primary">check_circle</span>\r
            <span>Nessun impegno, solo informazioni chiare</span>\r
          </li>\r
        </ul>\r
      </div>\r
\r
      <form class="form-card" (ngSubmit)="onSubmit()" #contactFormElement="ngForm">\r
        <div class="form-group">\r
          <label class="standard-label" for="name">Nome del Ristorante</label>\r
          <input \r
            type="text" \r
            id="name" \r
            [(ngModel)]="contactForm.name" \r
            name="name"\r
            required\r
            placeholder="Es. Trattoria La Lampara"\r
          >\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label" for="email">Email</label>\r
          <input \r
            type="email" \r
            id="email" \r
            [(ngModel)]="contactForm.email"\r
            name="email" \r
            required\r
            placeholder="info@tuoristorante.it"\r
          >\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label" for="phone">Telefono</label>\r
          <input \r
            type="tel" \r
            id="phone" \r
            [(ngModel)]="contactForm.phone"\r
            name="phone"\r
            placeholder="340 123 4567"\r
          >\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label" for="message">Raccontaci del tuo ristorante</label>\r
          <textarea \r
            id="message" \r
            [(ngModel)]="contactForm.message"\r
            name="message"\r
            placeholder="Che tipo di cucina offri? Hai gi\xE0 un sito? Cosa vorresti migliorare?"\r
          ></textarea>\r
        </div>\r
\r
        <button \r
          type="submit" \r
          class="promethea-button"\r
          style="width: 100%;"\r
          [disabled]="!contactFormElement.form.valid"\r
        >\r
          Richiedi Informazioni\r
        </button>\r
\r
        <div class="success-message rounded p-md bg-gradient" \r
             style="color: #FAFAFC;"\r
             *ngIf="showSuccessMessage">\r
          <span class="material-icons">check_circle</span>\r
          Richiesta inviata! Ti contatteremo entro 24 ore.\r
        </div>\r
      </form>\r
    </div>\r
  </section>\r
\r
</div>`, styles: ['/* src/promo-common.css */\n.hero-section {\n  position: relative;\n  overflow: hidden;\n  min-height: 100dvh;\n  display: flex;\n  padding-bottom: var(--gap-lg);\n  justify-content: center;\n}\n.hero-content {\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--gap-lg);\n  padding: var(--gap-sm) var(--gap-lg) var(--gap-lg) var(--gap-lg);\n  position: relative;\n  z-index: 2;\n}\n.hero-text {\n  line-height: 1.2;\n}\n.hero-title {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: var(--gap-sm);\n}\n.highlight {\n  background:\n    linear-gradient(\n      120deg,\n      var(--primary),\n      var(--tertiary));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle {\n  font-size: var(--fs-md);\n  line-height: 1.6;\n  color: var(--text-muted);\n  margin-bottom: var(--gap-md);\n}\n.feature-emoji {\n  font-size: var(--fs-md);\n}\n.integration-section {\n  position: relative;\n  overflow: hidden;\n  color: var(--text-color);\n  margin: var(--gap-lg) 0;\n  padding: var(--gap-lg);\n  background: var(--background2);\n  border: 1px solid var(--smoke-1);\n  box-shadow:\n    inset 0 1px 0 var(--smoke-2),\n    0 0 60px -10px var(--shadow-1),\n    0 0 120px -30px var(--shadow-3);\n}\n.integration-section::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 55% 70% at 0% 0%,\n      var(--shadow-1),\n      transparent 70%),\n    radial-gradient(\n      ellipse 45% 55% at 100% 100%,\n      var(--shadow-2),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 40% 40% at 50% 50%,\n      var(--shadow-3),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section > * {\n  position: relative;\n  z-index: 1;\n}\n.integration-section > * {\n  position: relative;\n  z-index: 1;\n}\n.integration-content {\n  margin: 0 auto;\n  padding: var(--gap-lg);\n}\n.module-item {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: var(--gap-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-md);\n  transition: all 0.3s ease;\n}\n.module-item:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-4px);\n}\n.module-icon {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  font-size: var(--fs-md);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.integration-highlight {\n  border-left: 4px solid white;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n}\n.steps-container {\n  display: flex;\n  justify-content: space-between;\n  margin: var(--gap-lg) auto;\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n  flex-wrap: wrap;\n}\n.step-item {\n  flex: 1;\n  position: relative;\n}\n.step-number {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  opacity: 0.8;\n  margin-bottom: var(--gap-sm);\n}\n.step-connector {\n  position: absolute;\n  top: 40px;\n  right: -50%;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      transparent);\n  opacity: 0.3;\n}\n.contact-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 60px;\n}\n.contact-features {\n  list-style: none;\n  padding: 0;\n}\n.success-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-sm);\n  margin-top: 16px;\n  font-weight: 600;\n}\n.bg-light {\n  background: #f8f9fa;\n}\n@media (max-width: 968px) {\n  .hero-content {\n    display: flex !important;\n    flex-direction: column !important;\n    text-align: center;\n    gap: var(--gap-md);\n  }\n  .hero-text {\n    display: contents !important;\n  }\n  .hero-title {\n    margin-bottom: var(--gap-lg);\n  }\n  .hero-visual {\n    order: 1;\n    padding-top: 0;\n    margin: var(--gap-sm) 0;\n  }\n  .hero-subtitle {\n    order: 2;\n    padding: var(--gap-md);\n  }\n  .hero-text .flex {\n    order: 3;\n    margin-top: var(--gap-sm);\n  }\n  .mockup-browser {\n    transform: none !important;\n    max-width: 100%;\n    margin: var(--gap-lg) 0;\n  }\n}\n.img-hero2 {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--gap-md);\n  padding: var(--gap-lg);\n  background: var(--vetro);\n  border-radius: 12px;\n  border: 1px solid var(--smoke-1);\n}\n.stat-item {\n  text-align: center;\n}\n.stat-value {\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.visual-stack {\n  position: relative;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.visual-card {\n  position: absolute;\n  width: 280px;\n  padding: var(--gap-md);\n  transition: transform 0.3s ease;\n}\n.visual-card:hover {\n  transform: rotate(0deg) translateY(0) scale(1.05) !important;\n  z-index: 10 !important;\n}\n.preview-img,\n.preview-chart,\n.preview-ad {\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n}\n.preview-img {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n}\n.preview-chart {\n  background:\n    linear-gradient(\n      135deg,\n      #f0e8fc,\n      #e8d5f7);\n}\n.preview-ad {\n  background:\n    linear-gradient(\n      135deg,\n      var(--smoke-1),\n      var(--smoke-2));\n}\n.service-icon {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-benefits {\n  margin-top: auto;\n  padding-top: var(--gap-md);\n  border-top: 1px solid var(--smoke-1);\n}\n.why-us-section h2,\n.why-us-section h3,\n.why-us-section .text-muted {\n  color: #FAFAFC;\n}\n.why-us-section .card {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.why-us-section .card:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.why-us-section .material-icons {\n  color: #FAFAFC;\n}\n.packages-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.package-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.package-card.highlighted {\n  border: 2px solid var(--primary);\n  box-shadow: 0 8px 30px var(--shadow-1);\n  transform: scale(1.02);\n}\n.package-badge {\n  position: absolute;\n  top: -12px;\n  right: var(--gap-md);\n  background: var(--primary);\n  color: #FAFAFC;\n  border: none;\n}\n.package-services {\n  flex: 1;\n  padding: var(--gap-md) 0;\n  border-top: 1px solid var(--smoke-1);\n  border-bottom: 1px solid var(--smoke-1);\n}\n.info-block {\n  padding-left: var(--gap-md);\n  border-left: 4px solid;\n}\n.services-checkbox-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--gap-sm);\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  border-radius: 8px;\n}\n.mockup-browser {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-browser:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.browser-bar {\n  background: var(--text-muted);\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid var(--shadow-1);\n}\n.browser-dots {\n  display: flex;\n  gap: 6px;\n}\n.browser-dots span {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #ddd;\n}\n.browser-dots span:nth-child(1) {\n  background: #ff5f57;\n}\n.browser-dots span:nth-child(2) {\n  background: #ffbd2e;\n}\n.browser-dots span:nth-child(3) {\n  background: #28ca42;\n}\n.browser-url {\n  flex: 1;\n  background: white;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  color: #666;\n  text-align: center;\n}\n.browser-content {\n  background: var(--text-muted);\n  padding: 24px;\n  min-height: 400px;\n}\n.preview-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.preview-nav {\n  display: flex;\n  gap: 12px;\n}\n.nav-item {\n  width: 60px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.preview-hero {\n  width: 100%;\n  height: 180px;\n  background: var(--vetro);\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.preview-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.preview-card {\n  background: var(--background2);\n  height: 100px;\n  border-radius: 8px;\n}\n.preview-logo {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--smoke-1);\n  display: flex;\n  padding: var(--gap-sm);\n  align-items: center;\n  justify-content: center;\n}\n.restaurant-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.logo-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--gap-md);\n  font-weight: bold;\n  color: #666;\n  text-transform: uppercase;\n}\n.proof-card {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n.quote-icon {\n  font-size: 4rem;\n  opacity: 0.2;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n  line-height: 1;\n}\n.testimonial {\n  font-style: italic;\n  line-height: 1.7;\n  padding-left: 40px;\n}\n.mockup-dashboard {\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-dashboard:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.dashboard-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n  color: white;\n  padding: var(--gap-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  font-size: var(--fs-md);\n}\n.dashboard-icon {\n  font-size: var(--fs-md);\n}\n.status-badge {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: var(--fs-mini);\n  backdrop-filter: blur(10px);\n}\n.dashboard-content {\n  padding: 24px;\n  background: var(--background2);\n}\n.stat-card {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border-radius: 8px;\n  margin-bottom: var(--gap-md);\n  border-left: 4px solid var(--primary);\n}\n.stat-label {\n  font-size: var(--fs-mini);\n  color: var(--text-muted);\n  margin-bottom: var(--gap-sm);\n}\n.stat-value {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--gap-sm);\n}\n.stat-trend {\n  color: var(--tertiary);\n}\n.chart-preview {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--gap-sm);\n  height: 80px;\n  margin-top: var(--gap-md);\n}\n.chart-bar {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary),\n      var(--tertiary));\n  border-radius: 4px 4px 0 0;\n  min-height: 20px;\n  transition: all 0.3s ease;\n}\n.chart-bar:hover {\n  opacity: 0.8;\n  transform: translateY(-4px);\n}\n.flow-diagram {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-lg) 0;\n  flex-wrap: wrap;\n}\n.flow-step {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n  min-width: 140px;\n}\n.flow-icon {\n  font-size: var(--fs-md);\n  margin-bottom: var(--gap-sm);\n}\n.flow-label {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.flow-arrow {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 300;\n}\n.grid-cards3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n}\n.service-card {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border: 1px solid var(--shadow-1);\n  display: flex;\n  flex-direction: column;\n}\n.service-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.service-header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n  border-bottom: 2px solid var(--smoke-1);\n}\n.service-list {\n  list-style: none;\n  padding: 0;\n}\n.service-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n  line-height: 1.6;\n}\n.check-icon {\n  color: var(--tertiary);\n  font-weight: 700;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.pricing-hint-section {\n  background: var(--smoke-1);\n  padding: var(--gap-lg);\n  margin: var(--gap-lg) 0;\n}\n.pricing-hint-content {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.highlight-price {\n  font-size: 2rem;\n  color: var(--primary);\n}\n/*# sourceMappingURL=promo-common.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebSite, { className: "WebSite", filePath: "src/app/restaurant/web-site/web-site.ts", lineNumber: 29 });
})();
export {
  WebSite
};
//# sourceMappingURL=chunk-KFGUD4WY.js.map
