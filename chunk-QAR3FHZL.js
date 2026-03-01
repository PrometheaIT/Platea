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
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import "./chunk-TWWAJFRB.js";

// src/app/restaurant/contabile-fiscale/contabile-fiscale.ts
function ContabileFiscale_div_55_Template(rf, ctx) {
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
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", feature_r2.color + "15");
    \u0275\u0275advance();
    \u0275\u0275property("name", feature_r2.icon)("color", feature_r2.color)("size", 24);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", feature_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.description);
  }
}
function ContabileFiscale_div_63_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 78);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r3, " ");
  }
}
function ContabileFiscale_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275element(3, "lucide-icon", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 76);
    \u0275\u0275template(7, ContabileFiscale_div_63_li_7_Template, 4, 1, "li", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("name", service_r4.icon)("size", 28)("strokeWidth", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", service_r4.items);
  }
}
function ContabileFiscale_div_71_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 85);
  }
}
function ContabileFiscale_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "h3", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ContabileFiscale_div_71_div_8_Template, 1, 0, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r6 < ctx_r6.steps.length - 1);
  }
}
function ContabileFiscale_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Richiesta inviata! Ti contatteremo entro 24 ore. ");
    \u0275\u0275elementEnd();
  }
}
var ContabileFiscale = class _ContabileFiscale {
  features = [
    {
      icon: "RefreshCw",
      title: "Sincronizzazione Automatica",
      description: "Ogni movimento in Promethea diventa automaticamente una registrazione contabile. Zero doppi inserimenti, zero errori di trascrizione.",
      color: "#6366f1"
    },
    {
      icon: "ClipboardList",
      title: "Conformit\xE0 Fiscale Garantita",
      description: "Adempimenti IVA, F24, dichiarazioni: tutto gestito nei tempi giusti. Il tuo commercialista monitora costantemente scadenze e obblighi.",
      color: "#8b5cf6"
    },
    {
      icon: "BarChart3",
      title: "Report in Tempo Reale",
      description: "Vedi sempre dove stai andando: margini, costi, cash flow. Dashboard aggiornate automaticamente con i tuoi numeri reali.",
      color: "#ec4899"
    },
    {
      icon: "Target",
      title: "Commercialista Dedicato",
      description: "Un professionista che conosce il settore ristorazione ti segue personalmente. Risposte veloci, consigli pratici, nessun call center.",
      color: "#f59e0b"
    },
    {
      icon: "ShieldCheck",
      title: "Dati Sempre Sicuri",
      description: "Backup continui, crittografia bancaria, conformit\xE0 GDPR. I tuoi dati sensibili sono protetti con gli standard pi\xF9 elevati.",
      color: "#10b981"
    },
    {
      icon: "Coins",
      title: "Ottimizzazione Fiscale",
      description: "Identifichiamo deduzioni e detrazioni che ti spettano. Paghi il giusto, non un euro di pi\xF9 del dovuto.",
      color: "#06b6d4"
    }
  ];
  modules = [
    {
      icon: "FileText",
      name: "Fatturazione Elettronica",
      color: "#6366f1"
    },
    {
      icon: "Package",
      name: "Prima Nota Automatica",
      color: "#8b5cf6"
    },
    {
      icon: "CreditCard",
      name: "Registri IVA",
      color: "#ec4899"
    },
    {
      icon: "TrendingUp",
      name: "Bilancio CEE",
      color: "#f59e0b"
    },
    {
      icon: "Receipt",
      name: "F24 e Versamenti",
      color: "#10b981"
    },
    {
      icon: "BarChart3",
      name: "Controllo di Gestione",
      color: "#06b6d4"
    }
  ];
  includedServices = [
    {
      icon: "ClipboardList",
      title: "Contabilit\xE0 Ordinaria",
      items: [
        "Registrazione automatica di tutti i movimenti",
        "Prima nota sincronizzata con Promethea",
        "Libro giornale e mastrini sempre aggiornati",
        "Riconciliazione bancaria mensile",
        "Chiusura contabile annuale"
      ]
    },
    {
      icon: "Briefcase",
      title: "Gestione Fiscale",
      items: [
        "Liquidazioni IVA trimestrali o mensili",
        "Dichiarazione IVA annuale",
        "Modello 770 e CU per dipendenti",
        "F24 precompilati e pronti per il pagamento",
        "Monitoraggio scadenze fiscali"
      ]
    },
    {
      icon: "User",
      title: "Consulenza Dedicata",
      items: [
        "Commercialista esperto in ristorazione",
        "Call mensili di allineamento",
        "Risposta entro 24h a domande urgenti",
        "Pianificazione fiscale personalizzata",
        "Supporto in caso di verifiche o controlli"
      ]
    },
    {
      icon: "PieChart",
      title: "Analisi & Report",
      items: [
        "Dashboard con KPI del ristorante",
        "Report mensile su margini e costi",
        "Analisi di redditivit\xE0 per categoria",
        "Previsioni di cassa trimestrale",
        "Benchmark con ristoranti simili"
      ]
    }
  ];
  steps = [
    {
      number: "01",
      title: "Prima Analisi",
      description: "Una call di 30 minuti o un appuntamento in ufficio per capire la tua situazione attuale."
    },
    {
      number: "02",
      title: "Migrazione Dati",
      description: "Il tuo commercialista carica lo storico contabile e configura i parametri fiscali."
    },
    {
      number: "03",
      title: "Automazione Attiva",
      description: "Da questo momento ogni operazione in Promethea si trasforma automaticamente in contabilit\xE0. Tu lavori, il sistema registra."
    },
    {
      number: "04",
      title: "Monitoraggio Continuo",
      description: "Il commercialista controlla mensilmente i tuoi numeri, gestisce gli adempimenti e ti invia report chiari. Tu ti concentri sul ristorante."
    }
  ];
  contactForm = {
    name: "",
    email: "",
    phone: "",
    currentSituation: ""
  };
  showSuccessMessage = false;
  constructor() {
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.isFormValid()) {
      console.log("Form inviato:", this.contactForm);
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.resetForm();
      }, 3e3);
    }
  }
  isFormValid() {
    return !!(this.contactForm.name && this.contactForm.email && this.validateEmail(this.contactForm.email));
  }
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  resetForm() {
    this.contactForm = {
      name: "",
      email: "",
      phone: "",
      currentSituation: ""
    };
    this.showSuccessMessage = false;
  }
  // Metodo helper per scroll smooth alle sezioni
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  static \u0275fac = function ContabileFiscale_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContabileFiscale)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContabileFiscale, selectors: [["app-contabile-fiscale"]], decls: 129, vars: 9, consts: [["contactFormElement", "ngForm"], [1, "page-container"], [1, "hero-section"], [1, "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "highlight"], [1, "hero-subtitle"], [1, "flex", "gap-md", "flex-col-mobile", "mt-lg"], [1, "promethea-button"], [1, "promethea-button", "outline"], [1, "hero-visual"], [1, "mockup-dashboard", "rounded-lg", "shadow-card", "transition", "hover-lift"], [1, "dashboard-header"], [1, "header-title"], [1, "dashboard-icon"], [1, "font-bold", "text-md"], [1, "header-status"], [1, "status-badge"], [1, "dashboard-content"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value"], [1, "stat-trend"], [1, "chart-preview"], [1, "chart-bar", 2, "height", "60%"], [1, "chart-bar", 2, "height", "80%"], [1, "chart-bar", 2, "height", "100%"], [1, "chart-bar", 2, "height", "75%"], [1, "chart-bar", 2, "height", "90%"], ["id", "features", 1, "pt-lg", "mt-lg"], [1, "section-header", "items-center"], [1, "text-lg", "font-bold", "mb-md"], [1, "text-md", "text-muted"], [1, "grid-cards", "p-sm", "grid-cards2"], ["class", "card p-0 transition hover-lift", 4, "ngFor", "ngForOf"], [1, "integration-section"], [1, "text-center", "mb-lg"], [1, "text-lg", "font-bold", "mb-sm"], [1, "grid-cards", "grid-cards3"], ["class", "service-card rounded-lg transition hover-lift", 4, "ngFor", "ngForOf"], [1, "p-lg"], [1, "steps-container"], ["class", "step-item", 4, "ngFor", "ngForOf"], [1, "pricing-hint-section", 2, "display", "none"], [1, "pricing-hint-content", "text-center"], [1, "text-md", "mb-lg"], [1, "highlight-price"], ["id", "contact", 1, "py-lg", 2, "display", "none"], [1, "contact-container"], [1, "contact-info"], [1, "text-muted", "mb-lg"], [1, "contact-features"], [1, "flex", "items-center", "gap-sm", "mb-sm"], [1, "material-icons", "text-primary"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["for", "name", 1, "standard-label"], ["type", "text", "id", "name", "name", "name", "required", "", "placeholder", "Es. Trattoria La Lampara", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "standard-label"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "info@tuoristorante.it", 3, "ngModelChange", "ngModel"], ["for", "phone", 1, "standard-label"], ["type", "tel", "id", "phone", "name", "phone", "placeholder", "340 123 4567", 3, "ngModelChange", "ngModel"], ["for", "currentSituation", 1, "standard-label"], ["id", "currentSituation", "name", "currentSituation", "placeholder", "Hai gi\xE0 un commercialista? Quali problemi stai affrontando con la contabilit\xE0?", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "promethea-button", 2, "width", "100%", 3, "disabled"], ["class", "success-message rounded p-md bg-gradient", "style", "color: #FAFAFC;", 4, "ngIf"], [1, "card", "p-0", "transition", "hover-lift"], [1, "flex", "items-center", "gap-sm", "p-sm", "mb-md", 2, "min-height", "5rem"], [1, "flex-shrink-0", 3, "name", "color", "size"], [1, "text-md", "font-bold"], [1, "text-muted", "p-md"], [1, "service-card", "rounded-lg", "transition", "hover-lift"], [1, "service-header"], [1, "service-icon"], ["color", "var(--text-color)", 3, "name", "size", "strokeWidth"], [1, "service-list"], [4, "ngFor", "ngForOf"], [1, "check-icon"], [1, "step-item"], [1, "step-number", "text-primary"], [1, "step-content"], [1, "text-md", "font-bold", "mb-sm"], [1, "text-muted"], ["class", "step-connector", 4, "ngIf"], [1, "step-connector"], [1, "success-message", "rounded", "p-md", "bg-gradient", 2, "color", "#FAFAFC"], [1, "material-icons"]], template: function ContabileFiscale_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "h1", 5);
      \u0275\u0275text(5, " La Contabilit\xE0 ");
      \u0275\u0275element(6, "br");
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Che Si Aggiorna da Sola");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " I tuoi dati gi\xE0 vivono in Promethea. Trasformali automaticamente in contabilit\xE0 ordinata, conformit\xE0 fiscale e report pronti per il commercialista. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
      \u0275\u0275text(13, " Richiedi una Consulenza ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275text(15, " Scopri i Vantaggi ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "span", 15);
      \u0275\u0275text(21, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "Dashboard Fiscale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17)(25, "span", 18);
      \u0275\u0275text(26, "\u2713 Tutto in regola");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "div", 21);
      \u0275\u0275text(30, "Fatturato Mese");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22);
      \u0275\u0275text(32, "\u20AC 28.450");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 23);
      \u0275\u0275text(34, "+12% vs mese scorso");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 20)(36, "div", 21);
      \u0275\u0275text(37, "IVA da Versare");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 22);
      \u0275\u0275text(39, "\u20AC 4.267");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 23);
      \u0275\u0275text(41, "Scadenza: 16/03");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 24);
      \u0275\u0275element(43, "div", 25)(44, "div", 26)(45, "div", 27)(46, "div", 28)(47, "div", 29);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "section", 30)(49, "div", 31)(50, "h2", 32);
      \u0275\u0275text(51, "Perch\xE9 Scegliere Promethea Accounting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 33);
      \u0275\u0275text(53, "Zero doppi inserimenti. Zero stress fiscale. Solo dati che lavorano per te.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 34);
      \u0275\u0275template(55, ContabileFiscale_div_55_Template, 7, 9, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "section", 36)(57, "div", 37)(58, "h2", 38);
      \u0275\u0275text(59, "Cosa Include il Servizio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 33);
      \u0275\u0275text(61, "Un commercialista dedicato + tecnologia che lavora 24/7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 39);
      \u0275\u0275template(63, ContabileFiscale_div_63_Template, 8, 5, "div", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "section", 41)(65, "div", 37)(66, "h2", 38);
      \u0275\u0275text(67, "Come Funziona");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 33);
      \u0275\u0275text(69, "Attivazione in 48 ore. Il tuo commercialista operativo da subito.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 42);
      \u0275\u0275template(71, ContabileFiscale_div_71_Template, 9, 4, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "section", 44)(73, "div", 45)(74, "h3", 32);
      \u0275\u0275text(75, "Investimento Mensile Trasparente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 46);
      \u0275\u0275text(77, " A partire da ");
      \u0275\u0275elementStart(78, "strong", 47);
      \u0275\u0275text(79, "\u20AC199/mese");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " per servizio completo.");
      \u0275\u0275element(81, "br");
      \u0275\u0275text(82, " Nessun costo nascosto. Cancellazione in qualsiasi momento. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "button", 9);
      \u0275\u0275text(84, " Richiedi Preventivo Dettagliato ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "section", 48)(86, "div", 49)(87, "div", 50)(88, "h2", 32);
      \u0275\u0275text(89, "Parliamone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 51);
      \u0275\u0275text(91, " Una call di 30 minuti per capire le tue esigenze fiscali e vedere come possiamo aiutarti a semplificare la contabilit\xE0. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ul", 52)(93, "li", 53)(94, "span", 54);
      \u0275\u0275text(95, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "Analisi gratuita della tua situazione");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "li", 53)(99, "span", 54);
      \u0275\u0275text(100, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "span");
      \u0275\u0275text(102, "Preventivo personalizzato in 24h");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li", 53)(104, "span", 54);
      \u0275\u0275text(105, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107, "Affiancamento completo nel passaggio");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(108, "form", 55, 0);
      \u0275\u0275listener("ngSubmit", function ContabileFiscale_Template_form_ngSubmit_108_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(110, "div", 56)(111, "label", 57);
      \u0275\u0275text(112, "Nome del Ristorante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "input", 58);
      \u0275\u0275twoWayListener("ngModelChange", function ContabileFiscale_Template_input_ngModelChange_113_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.name, $event) || (ctx.contactForm.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 56)(115, "label", 59);
      \u0275\u0275text(116, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "input", 60);
      \u0275\u0275twoWayListener("ngModelChange", function ContabileFiscale_Template_input_ngModelChange_117_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.email, $event) || (ctx.contactForm.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 56)(119, "label", 61);
      \u0275\u0275text(120, "Telefono");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "input", 62);
      \u0275\u0275twoWayListener("ngModelChange", function ContabileFiscale_Template_input_ngModelChange_121_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.phone, $event) || (ctx.contactForm.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 56)(123, "label", 63);
      \u0275\u0275text(124, "Situazione Attuale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "textarea", 64);
      \u0275\u0275twoWayListener("ngModelChange", function ContabileFiscale_Template_textarea_ngModelChange_125_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.currentSituation, $event) || (ctx.contactForm.currentSituation = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "button", 65);
      \u0275\u0275text(127, " Richiedi Consulenza Gratuita ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(128, ContabileFiscale_div_128_Template, 4, 0, "div", 66);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const contactFormElement_r8 = \u0275\u0275reference(109);
      \u0275\u0275advance(55);
      \u0275\u0275property("ngForOf", ctx.features);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.includedServices);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.steps);
      \u0275\u0275advance(42);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.currentSituation);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !contactFormElement_r8.form.valid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showSuccessMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 100dvh;\n  display: flex;\n  padding-bottom: var(--gap-lg);\n  justify-content: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--gap-lg);\n  padding: var(--gap-sm) var(--gap-lg) var(--gap-lg) var(--gap-lg);\n  position: relative;\n  z-index: 2;\n}\n.hero-text[_ngcontent-%COMP%] {\n  line-height: 1.2;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: var(--gap-sm);\n}\n.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--primary),\n      var(--tertiary));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  line-height: 1.6;\n  color: var(--text-muted);\n  margin-bottom: var(--gap-md);\n}\n.feature-emoji[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.integration-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  color: var(--text-color);\n  margin: var(--gap-lg) 0;\n  padding: var(--gap-lg);\n  background: var(--background2);\n  border: 1px solid var(--smoke-1);\n  box-shadow:\n    inset 0 1px 0 var(--smoke-2),\n    0 0 60px -10px var(--shadow-1),\n    0 0 120px -30px var(--shadow-3);\n}\n.integration-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 55% 70% at 0% 0%,\n      var(--shadow-1),\n      transparent 70%),\n    radial-gradient(\n      ellipse 45% 55% at 100% 100%,\n      var(--shadow-2),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 40% 40% at 50% 50%,\n      var(--shadow-3),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.integration-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.integration-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: var(--gap-lg);\n}\n.module-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: var(--gap-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-md);\n  transition: all 0.3s ease;\n}\n.module-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-4px);\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  font-size: var(--fs-md);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.integration-highlight[_ngcontent-%COMP%] {\n  border-left: 4px solid white;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n}\n.steps-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: var(--gap-lg) auto;\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n  flex-wrap: wrap;\n}\n.step-item[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.step-number[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  opacity: 0.8;\n  margin-bottom: var(--gap-sm);\n}\n.step-connector[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: -50%;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      transparent);\n  opacity: 0.3;\n}\n.contact-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 60px;\n}\n.contact-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-sm);\n  margin-top: 16px;\n  font-weight: 600;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n@media (max-width: 968px) {\n  .hero-content[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    text-align: center;\n    gap: var(--gap-md);\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    display: contents !important;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    margin-bottom: var(--gap-lg);\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    order: 1;\n    padding-top: 0;\n    margin: var(--gap-sm) 0;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    order: 2;\n    padding: var(--gap-md);\n  }\n  .hero-text[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    order: 3;\n    margin-top: var(--gap-sm);\n  }\n  .mockup-browser[_ngcontent-%COMP%] {\n    transform: none !important;\n    max-width: 100%;\n    margin: var(--gap-lg) 0;\n  }\n}\n.img-hero2[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--gap-md);\n  padding: var(--gap-lg);\n  background: var(--vetro);\n  border-radius: 12px;\n  border: 1px solid var(--smoke-1);\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.visual-stack[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.visual-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  padding: var(--gap-md);\n  transition: transform 0.3s ease;\n}\n.visual-card[_ngcontent-%COMP%]:hover {\n  transform: rotate(0deg) translateY(0) scale(1.05) !important;\n  z-index: 10 !important;\n}\n.preview-img[_ngcontent-%COMP%], \n.preview-chart[_ngcontent-%COMP%], \n.preview-ad[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n}\n.preview-img[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n}\n.preview-chart[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0e8fc,\n      #e8d5f7);\n}\n.preview-ad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--smoke-1),\n      var(--smoke-2));\n}\n.service-icon[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-benefits[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: var(--gap-md);\n  border-top: 1px solid var(--smoke-1);\n}\n.why-us-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.why-us-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.why-us-section[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #FAFAFC;\n}\n.why-us-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.why-us-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.why-us-section[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #FAFAFC;\n}\n.packages-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.package-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.package-card.highlighted[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n  box-shadow: 0 8px 30px var(--shadow-1);\n  transform: scale(1.02);\n}\n.package-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: var(--gap-md);\n  background: var(--primary);\n  color: #FAFAFC;\n  border: none;\n}\n.package-services[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--gap-md) 0;\n  border-top: 1px solid var(--smoke-1);\n  border-bottom: 1px solid var(--smoke-1);\n}\n.info-block[_ngcontent-%COMP%] {\n  padding-left: var(--gap-md);\n  border-left: 4px solid;\n}\n.services-checkbox-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--gap-sm);\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  border-radius: 8px;\n}\n.mockup-browser[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-browser[_ngcontent-%COMP%]:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.browser-bar[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid var(--shadow-1);\n}\n.browser-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #ddd;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  background: #ff5f57;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffbd2e;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: #28ca42;\n}\n.browser-url[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  color: #666;\n  text-align: center;\n}\n.browser-content[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  padding: 24px;\n  min-height: 400px;\n}\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.preview-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.preview-hero[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  background: var(--vetro);\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: var(--background2);\n  height: 100px;\n  border-radius: 8px;\n}\n.preview-logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--smoke-1);\n  display: flex;\n  padding: var(--gap-sm);\n  align-items: center;\n  justify-content: center;\n}\n.restaurant-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.logo-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--gap-md);\n  font-weight: bold;\n  color: #666;\n  text-transform: uppercase;\n}\n.proof-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n.quote-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  opacity: 0.2;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n  line-height: 1;\n}\n.testimonial[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.7;\n  padding-left: 40px;\n}\n.mockup-dashboard[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-dashboard[_ngcontent-%COMP%]:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n  color: white;\n  padding: var(--gap-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  font-size: var(--fs-md);\n}\n.dashboard-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.status-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: var(--fs-mini);\n  backdrop-filter: blur(10px);\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: var(--background2);\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border-radius: 8px;\n  margin-bottom: var(--gap-md);\n  border-left: 4px solid var(--primary);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n  color: var(--text-muted);\n  margin-bottom: var(--gap-sm);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--gap-sm);\n}\n.stat-trend[_ngcontent-%COMP%] {\n  color: var(--tertiary);\n}\n.chart-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--gap-sm);\n  height: 80px;\n  margin-top: var(--gap-md);\n}\n.chart-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary),\n      var(--tertiary));\n  border-radius: 4px 4px 0 0;\n  min-height: 20px;\n  transition: all 0.3s ease;\n}\n.chart-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateY(-4px);\n}\n.flow-diagram[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-lg) 0;\n  flex-wrap: wrap;\n}\n.flow-step[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n  min-width: 140px;\n}\n.flow-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--gap-sm);\n}\n.flow-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.flow-arrow[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 300;\n}\n.grid-cards3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n}\n.service-card[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border: 1px solid var(--shadow-1);\n  display: flex;\n  flex-direction: column;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.service-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n  border-bottom: 2px solid var(--smoke-1);\n}\n.service-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.service-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n  line-height: 1.6;\n}\n.check-icon[_ngcontent-%COMP%] {\n  color: var(--tertiary);\n  font-weight: 700;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.pricing-hint-section[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n  padding: var(--gap-lg);\n  margin: var(--gap-lg) 0;\n}\n.pricing-hint-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.highlight-price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary);\n}\n/*# sourceMappingURL=promo-common.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContabileFiscale, [{
    type: Component,
    args: [{ selector: "app-contabile-fiscale", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<!-- accounting-promo.component.html -->\r
<div class="page-container">\r
  \r
  <!-- HERO SECTION -->\r
  <section class="hero-section">\r
    <div class="hero-content">\r
      <div class="hero-text">\r
        <h1 class="hero-title">\r
          La Contabilit\xE0 <br>\r
          <span class="highlight">Che Si Aggiorna da Sola</span>\r
        </h1>\r
        <p class="hero-subtitle">\r
          I tuoi dati gi\xE0 vivono in Promethea. Trasformali automaticamente in contabilit\xE0 ordinata, \r
          conformit\xE0 fiscale e report pronti per il commercialista.\r
        </p>\r
        <div class="flex gap-md flex-col-mobile mt-lg">\r
          <button class="promethea-button">\r
            Richiedi una Consulenza\r
          </button>\r
          <button class="promethea-button outline">\r
            Scopri i Vantaggi\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div class="hero-visual">\r
        <div class="mockup-dashboard rounded-lg shadow-card transition hover-lift">\r
          <div class="dashboard-header">\r
            <div class="header-title">\r
              <span class="dashboard-icon">\u{1F4CA}</span>\r
              <span class="font-bold text-md">Dashboard Fiscale</span>\r
            </div>\r
            <div class="header-status">\r
              <span class="status-badge">\u2713 Tutto in regola</span>\r
            </div>\r
          </div>\r
          <div class="dashboard-content">\r
            <div class="stat-card">\r
              <div class="stat-label">Fatturato Mese</div>\r
              <div class="stat-value">\u20AC 28.450</div>\r
              <div class="stat-trend">+12% vs mese scorso</div>\r
            </div>\r
            <div class="stat-card">\r
              <div class="stat-label">IVA da Versare</div>\r
              <div class="stat-value">\u20AC 4.267</div>\r
              <div class="stat-trend">Scadenza: 16/03</div>\r
            </div>\r
            <div class="chart-preview">\r
              <div class="chart-bar" style="height: 60%"></div>\r
              <div class="chart-bar" style="height: 80%"></div>\r
              <div class="chart-bar" style="height: 100%"></div>\r
              <div class="chart-bar" style="height: 75%"></div>\r
              <div class="chart-bar" style="height: 90%"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- FEATURES SECTION -->\r
  <section class="pt-lg mt-lg" id="features">\r
    <div class="section-header items-center">\r
      <h2 class="text-lg font-bold mb-md">Perch\xE9 Scegliere Promethea Accounting</h2>\r
      <p class="text-md text-muted">Zero doppi inserimenti. Zero stress fiscale. Solo dati che lavorano per te.</p>\r
    </div>\r
    \r
    <div class="grid-cards p-sm grid-cards2">\r
      <div class="card p-0 transition hover-lift" *ngFor="let feature of features">\r
<div class="flex items-center gap-sm p-sm mb-md"\r
     [style.background]="feature.color + '15'"\r
     style="min-height: 5rem;">\r
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
        <p class="text-muted p-md">{{ feature.description }}</p>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- WHAT'S INCLUDED -->\r
  <section class="integration-section">\r
    <div class="text-center mb-lg">\r
      <h2 class="text-lg font-bold mb-sm">Cosa Include il Servizio</h2>\r
      <p class="text-md text-muted">Un commercialista dedicato + tecnologia che lavora 24/7</p>\r
    </div>\r
\r
    <div class="grid-cards grid-cards3">\r
      <div class="service-card rounded-lg transition hover-lift" \r
           *ngFor="let service of includedServices">\r
<div class="service-header">\r
  <div class="service-icon">\r
    <lucide-icon \r
      [name]="service.icon" \r
      [size]="28" \r
      [strokeWidth]="2"\r
      color="var(--text-color)">\r
    </lucide-icon>\r
  </div>\r
  <div class="font-bold text-md">{{ service.title }}</div>\r
</div>\r
        <ul class="service-list">\r
          <li *ngFor="let item of service.items">\r
            <span class="check-icon">\u2713</span>\r
            {{ item }}\r
          </li>\r
        </ul>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- HOW IT WORKS -->\r
  <section class="p-lg">\r
    <div class="text-center mb-lg">\r
      <h2 class="text-lg font-bold mb-sm">Come Funziona</h2>\r
      <p class="text-md text-muted">Attivazione in 48 ore. Il tuo commercialista operativo da subito.</p>\r
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
  <!-- PRICING HINT -->\r
  <section class="pricing-hint-section"\r
  style="display: none;">\r
    <div class="pricing-hint-content text-center">\r
      <h3 class="text-lg font-bold mb-md">Investimento Mensile Trasparente</h3>\r
      <p class="text-md mb-lg">\r
        A partire da <strong class="highlight-price">\u20AC199/mese</strong> per servizio completo.<br>\r
        Nessun costo nascosto. Cancellazione in qualsiasi momento.\r
      </p>\r
      <button class="promethea-button">\r
        Richiedi Preventivo Dettagliato\r
      </button>\r
    </div>\r
  </section>\r
\r
  <!-- CONTACT FORM -->\r
  <section class="py-lg" id="contact" style="display: none;">\r
    <div class="contact-container">\r
      <div class="contact-info">\r
        <h2 class="text-lg font-bold mb-md">Parliamone</h2>\r
        <p class="text-muted mb-lg">\r
          Una call di 30 minuti per capire le tue esigenze fiscali e vedere \r
          come possiamo aiutarti a semplificare la contabilit\xE0.\r
        </p>\r
        <ul class="contact-features">\r
          <li class="flex items-center gap-sm mb-sm">\r
            <span class="material-icons text-primary">check_circle</span>\r
            <span>Analisi gratuita della tua situazione</span>\r
          </li>\r
          <li class="flex items-center gap-sm mb-sm">\r
            <span class="material-icons text-primary">check_circle</span>\r
            <span>Preventivo personalizzato in 24h</span>\r
          </li>\r
          <li class="flex items-center gap-sm mb-sm">\r
            <span class="material-icons text-primary">check_circle</span>\r
            <span>Affiancamento completo nel passaggio</span>\r
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
          <label class="standard-label" for="currentSituation">Situazione Attuale</label>\r
          <textarea \r
            id="currentSituation" \r
            [(ngModel)]="contactForm.currentSituation"\r
            name="currentSituation"\r
            placeholder="Hai gi\xE0 un commercialista? Quali problemi stai affrontando con la contabilit\xE0?"\r
          ></textarea>\r
        </div>\r
\r
        <button \r
          type="submit" \r
          class="promethea-button"\r
          style="width: 100%;"\r
          [disabled]="!contactFormElement.form.valid"\r
        >\r
          Richiedi Consulenza Gratuita\r
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContabileFiscale, { className: "ContabileFiscale", filePath: "src/app/restaurant/contabile-fiscale/contabile-fiscale.ts", lineNumber: 45 });
})();
export {
  ContabileFiscale
};
//# sourceMappingURL=chunk-QAR3FHZL.js.map
