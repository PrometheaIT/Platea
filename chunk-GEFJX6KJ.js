import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-4SOHWVCI.js";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3MDKIO5.js";
import "./chunk-TWWAJFRB.js";

// src/app/restaurant/marketing/marketing.ts
function Marketing_div_41_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "lucide-angular", 76);
    \u0275\u0275elementStart(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const benefit_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r2);
  }
}
function Marketing_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 69);
    \u0275\u0275element(3, "lucide-angular", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 73);
    \u0275\u0275template(9, Marketing_div_41_div_9_Template, 4, 2, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", service_r3.color + "15");
    \u0275\u0275advance();
    \u0275\u0275property("name", service_r3.icon)("color", service_r3.color)("size", 28);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", service_r3.benefits);
  }
}
function Marketing_div_82_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 82);
  }
}
function Marketing_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80)(4, "h3", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, Marketing_div_82_div_8_Template, 1, 0, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r4.number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r4.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r5 < ctx_r5.processSteps.length - 1);
  }
}
function Marketing_div_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1, " Pi\xF9 Popolare ");
    \u0275\u0275elementEnd();
  }
}
function Marketing_div_90_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 89);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r8);
  }
}
function Marketing_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275template(1, Marketing_div_90_div_1_Template, 2, 0, "div", 84);
    \u0275\u0275elementStart(2, "h3", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86);
    \u0275\u0275template(7, Marketing_div_90_div_7_Template, 5, 1, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 87);
    \u0275\u0275listener("click", function Marketing_div_90_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.scrollToContact());
    });
    \u0275\u0275text(9, " Richiedi Info ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const package_r9 = ctx.$implicit;
    \u0275\u0275classProp("highlighted", package_r9.highlight);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", package_r9.highlight);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(package_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(package_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", package_r9.services);
  }
}
function Marketing_label_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 90)(1, "input", 91);
    \u0275\u0275listener("change", function Marketing_label_124_Template_input_change_1_listener() {
      const service_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleService(service_r11.title));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 92)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r11 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r5.isServiceSelected(service_r11.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r11.title);
  }
}
function Marketing_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 56);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Richiesta ricevuta! Ti contatteremo entro 24 ore. ");
    \u0275\u0275elementEnd();
  }
}
var Marketing = class _Marketing {
  contactForm = {
    name: "",
    email: "",
    phone: "",
    services: [],
    message: ""
  };
  services = [
    {
      icon: "smartphone",
      title: "Social Media Management",
      description: "Il tuo ristorante sempre presente, sempre rilevante. Post programmati, stories coinvolgenti, engagement reale.",
      color: "var(--primary)",
      benefits: [
        "Calendario editoriale mensile",
        "Grafiche personalizzate",
        "Gestione commenti e messaggi",
        "Analytics settimanali"
      ]
    },
    {
      icon: "camera",
      title: "Food Photography",
      description: "I tuoi piatti meritano di essere visti. Fotografie professionali che fanno venire fame solo a guardarle.",
      color: "var(--tertiary)",
      benefits: [
        "Servizio fotografico in location",
        "Post-produzione professionale",
        "Archivio digitale completo",
        "Foto pronte per social e menu"
      ]
    },
    {
      icon: "palette",
      title: "Grafica Pubblicitaria",
      description: "Menu digitali, flyer, locandine per eventi. Tutto coordinato con la tua identit\xE0 visiva.",
      color: "var(--secondary)",
      benefits: [
        "Menu carta e digitali",
        "Materiale promozionale",
        "Insegne e vetrofanie",
        "Formati print e web"
      ]
    },
    {
      icon: "target",
      title: "Campagne Advertising",
      description: "Facebook e Instagram Ads che portano clienti veri, non solo like. Budget ottimizzato, risultati misurabili.",
      color: "var(--primary)",
      benefits: [
        "Targetizzazione locale",
        "A/B testing creativit\xE0",
        "Report mensili dettagliati",
        "ROI tracciato"
      ]
    },
    {
      icon: "pen-tool",
      // ✅ nome corretto in kebab-case
      title: "Copywriting & Content",
      description: "Raccontiamo la tua storia. Testi che vendono senza essere invadenti, che informano senza annoiare.",
      color: "var(--tertiary)",
      benefits: [
        "Descrizioni menu accattivanti",
        "Caption social efficaci",
        "Email marketing",
        "Blog e comunicati stampa"
      ]
    },
    {
      icon: "calendars",
      // ✅ nome corretto (esiste su Lucide)
      title: "Eventi & Promozioni",
      description: "Organizziamo e promuoviamo i tuoi eventi. Dalla cena a tema alla serata degustazione.",
      color: "var(--secondary)",
      benefits: [
        "Strategia promozionale",
        "Materiale grafico dedicato",
        "Campagne social mirate",
        "Follow-up post-evento"
      ]
    }
  ];
  packages = [
    {
      name: "Presenza Base",
      description: "Per chi vuole iniziare con i social senza impegno eccessivo",
      services: [
        "4 post al mese su Instagram/Facebook",
        "2 stories settimanali",
        "Gestione messaggi",
        "Report mensile"
      ]
    },
    {
      name: "Visibilit\xE0 Pro",
      description: "Il pacchetto completo per chi vuole crescere davvero",
      services: [
        "8 post al mese multi-piattaforma",
        "2 stories settimanali",
        "1 servizio fotografico mensile",
        "Campagne Ads gestite",
        "Grafica personalizzata",
        "Report settimanali + call strategica"
      ],
      highlight: true
    },
    {
      name: "Su Misura",
      description: "Costruiamo insieme il piano perfetto per te",
      services: [
        "Selezione servizi \xE0 la carte",
        "Stories quotidiane",
        "Budget personalizzato",
        "Priorit\xE0 su richieste urgenti",
        "Account manager dedicato"
      ]
    }
  ];
  processSteps = [
    {
      number: "01",
      title: "Ascoltiamo",
      description: "Capiamo il tuo brand, i tuoi obiettivi, il tuo pubblico. Non usiamo template, partiamo da te."
    },
    {
      number: "02",
      title: "Strategizziamo",
      description: "Creiamo un piano editoriale e creativo su misura. Obiettivi chiari, metriche definite."
    },
    {
      number: "03",
      title: "Eseguiamo",
      description: "Produciamo contenuti, gestiamo campagne, ottimizziamo. Tu cucini, noi comunichiamo."
    },
    {
      number: "04",
      title: "Miglioriamo",
      description: "Analizziamo i dati, aggiustiamo la strategia, scaliamo ci\xF2 che funziona."
    }
  ];
  showSuccessMessage = false;
  selectedServices = [];
  toggleService(service) {
    const index = this.selectedServices.indexOf(service);
    if (index > -1) {
      this.selectedServices.splice(index, 1);
    } else {
      this.selectedServices.push(service);
    }
    this.contactForm.services = this.selectedServices;
  }
  isServiceSelected(service) {
    return this.selectedServices.includes(service);
  }
  scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }
  scrollToServices() {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }
  onSubmit() {
    console.log("Richiesta marketing:", this.contactForm);
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
      services: [],
      message: ""
    };
    this.selectedServices = [];
  }
  static \u0275fac = function Marketing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Marketing)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Marketing, selectors: [["app-marketing"]], decls: 142, vars: 10, consts: [["marketingForm", "ngForm"], [1, "page-container"], [1, "hero-section"], [1, "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "highlight"], [1, "hero-subtitle"], [1, "flex", "gap-md", "flex-col-mobile", "mt-lg"], [1, "promethea-button", 3, "click"], [1, "promethea-button", "outline", 3, "click"], [1, "mockup-dashboard", "shadow-card", "hover-lift"], ["src", "img1.jpg", 1, "img-hero2"], [1, "p-lg", "bg-glass", "mb-lg"], [1, "flex", "flex-col", "p-lg"], [1, "flex", "flex-col", "gap-lg", "text-center", "p-lg"], [1, "text-lg", "font-bold", "mb-md"], [1, "text-muted"], [1, "flex", "items-center", "justify-center", "gap-md"], [1, "chip", "text-md", 2, "padding", "var(--gap-sm) var(--gap-md)"], [2, "color", "var(--primary)"], ["id", "services", 1, "mt-lg", "p-lg"], [1, "text-center", "mb-lg"], [1, "text-md", "text-muted"], [1, "grid-cards"], ["class", "service-card card transition hover-lift", 4, "ngFor", "ngForOf"], [1, "integration-section", 2, "display", "none"], [1, "text-center"], [1, "text-lg", "font-bold", "mt-lg"], [1, "grid-cards", "mt-lg"], [1, "card", "transition", "hover-lift"], [1, "material-icons", "text-primary", "mb-sm", 2, "font-size", "var(--fs-lg)"], [1, "font-bold", "mb-sm"], [1, "py-lg", "bg-glass"], [1, "steps-container"], ["class", "step-item", 4, "ngFor", "ngForOf"], [1, "py-lg", 2, "display", "none"], [1, "packages-grid"], ["class", "package-card card transition hover-lift", 3, "highlighted", 4, "ngFor", "ngForOf"], ["id", "contact", 1, "p-lg", "bg-gradient", 2, "display", "none"], [1, "contact-container"], [1, "contact-info"], [1, "text-lg", "font-bold", "mb-md", 2, "color", "#FAFAFC"], [1, "text-md", "mb-lg", 2, "color", "#FAFAFC", "opacity", "0.9"], [1, "info-block", "mb-md", 2, "border-left-color", "#FAFAFC"], [2, "color", "#FAFAFC"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["for", "name", 1, "standard-label"], ["type", "text", "id", "name", "name", "name", "required", "", "placeholder", "Es. Osteria del Mare", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "email", 1, "standard-label"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "info@tuoristorante.it", 3, "ngModelChange", "ngModel"], ["for", "phone", 1, "standard-label"], ["type", "tel", "id", "phone", "name", "phone", "placeholder", "340 123 4567", 3, "ngModelChange", "ngModel"], [1, "standard-label"], [1, "material-icons"], [1, "services-checkbox-grid"], ["class", "checkbox-label", 4, "ngFor", "ngForOf"], ["for", "message", 1, "standard-label"], ["id", "message", "name", "message", "placeholder", "Es: Siamo un ristorante di pesce aperto da 2 anni. Abbiamo una buona clientela locale ma vorremmo attrarre pi\xF9 turisti e giovani. Non abbiamo mai fatto advertising online...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "promethea-button", 2, "width", "100%", 3, "disabled"], ["class", "success-message rounded p-md", "style", "background: rgba(16, 185, 129, 0.2); color: #10b981; border: 2px solid #10b981;", 4, "ngIf"], [1, "py-lg", "text-center", 2, "display", "none"], [2, "max-width", "700px", "margin", "0 auto"], [1, "text-md", "text-muted", "mb-lg"], ["href", "mailto:immagine.social@prometheasrl.it?subject=Richiesta%20Informazioni&body=Buongiorno,%20vorrei%20maggiori%20informazioni.", 1, "promethea-button"], [1, "service-card", "card", "transition", "hover-lift"], [1, "flex", "w-100", "justify-center"], [1, "service-icon", "rounded-lg", "flex", "items-center", "justify-center"], [1, "service-lucide-icon", 3, "name", "color", "size"], [1, "text-md", "font-bold", "mb-sm"], [1, "text-muted", "mb-md"], [1, "service-benefits"], ["class", "flex items-start gap-sm mb-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-sm", "mb-sm"], ["name", "circle-check", 1, "text-primary", 2, "flex-shrink", "0", "margin-top", "2px", 3, "size"], [1, "text-mini"], [1, "step-item"], [1, "step-number", "text-primary"], [1, "step-content"], ["class", "step-connector", 4, "ngIf"], [1, "step-connector"], [1, "package-card", "card", "transition", "hover-lift"], ["class", "package-badge chip", 4, "ngIf"], [1, "text-muted", "mb-lg"], [1, "package-services"], [1, "promethea-button", "mt-lg", 2, "width", "100%", 3, "click"], [1, "package-badge", "chip"], [1, "material-icons", "text-primary", 2, "font-size", "var(--fs-sm)"], [1, "checkbox-label"], ["type", "checkbox", 3, "change", "checked"], [1, "checkbox-content"], [1, "success-message", "rounded", "p-md", 2, "background", "rgba(16, 185, 129, 0.2)", "color", "#10b981", "border", "2px solid #10b981"]], template: function Marketing_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "h1", 5);
      \u0275\u0275text(5, " Il Tuo Ristorante ");
      \u0275\u0275element(6, "br");
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Merita di Essere Visto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " Tu cucini capolavori. Noi li facciamo conoscere al mondo. Social media, fotografia, grafica, advertising: tutto gestito mentre tu ti concentri su ci\xF2 che sai fare meglio. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
      \u0275\u0275listener("click", function Marketing_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToContact());
      });
      \u0275\u0275text(13, " Parliamo del Tuo Progetto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function Marketing_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToServices());
      });
      \u0275\u0275text(15, " Scopri i Servizi ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275element(17, "img", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "section", 13)(19, "div", 14)(20, "div", 15)(21, "div")(22, "h2", 16);
      \u0275\u0275text(23, "Gestire un Ristorante \xC8 Gi\xE0 Abbastanza Complesso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 17);
      \u0275\u0275text(25, " Fornitori, personale, qualit\xE0, costi, clienti. E poi dovresti anche trovare il tempo per postare su Instagram, rispondere ai commenti, creare grafiche, organizzare campagne? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 18)(27, "div", 19);
      \u0275\u0275text(28, " Non Pi\xF9! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, " Promethea non si limita a ottimizzare la tua gestione interna. ");
      \u0275\u0275elementStart(31, "strong", 20);
      \u0275\u0275text(32, "Ti aiutiamo a riempire i tavoli");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " con servizi di marketing e comunicazione pensati per ristoratori, non per multinazionali. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "section", 21)(35, "div", 22)(36, "h2", 16);
      \u0275\u0275text(37, "I Nostri Servizi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 23);
      \u0275\u0275text(39, " Scegli ci\xF2 che ti serve. Combina i servizi. Costruiamo insieme il tuo pacchetto ideale. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 24);
      \u0275\u0275template(41, Marketing_div_41_Template, 10, 8, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "section", 26)(43, "div", 27)(44, "h2", 28);
      \u0275\u0275text(45, "Perch\xE9 Affidarsi a Promethea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 29)(47, "div", 30)(48, "span", 31);
      \u0275\u0275text(49, " restaurant ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h3", 32);
      \u0275\u0275text(51, "Parliamo la Tua Lingua");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 17);
      \u0275\u0275text(53, " Non siamo un'agenzia generica. Lavoriamo solo con ristoranti. Conosciamo i tuoi problemi, le tue esigenze, il tuo pubblico. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 30)(55, "span", 31);
      \u0275\u0275text(56, " link ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h3", 32);
      \u0275\u0275text(58, "Tutto Integrato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 17);
      \u0275\u0275text(60, " Usi gi\xE0 Promethea per gestione e prenotazioni? Il marketing si integra perfettamente. Dati sincronizzati, zero duplicazioni. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 30)(62, "span", 31);
      \u0275\u0275text(63, " speed ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "h3", 32);
      \u0275\u0275text(65, "Veloci e Reattivi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p", 17);
      \u0275\u0275text(67, " Evento dell'ultimo minuto? Promozione flash? Rispondiamo in 24h, produciamo in 48h. La ristorazione non aspetta. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 30)(69, "span", 31);
      \u0275\u0275text(70, " analytics ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h3", 32);
      \u0275\u0275text(72, "Risultati Misurabili");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 17);
      \u0275\u0275text(74, " Niente vanity metrics. Ti mostriamo coperti prenotati, traffico al sito, conversioni reali. Marketing che si traduce in \u20AC. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(75, "section", 33)(76, "div", 22)(77, "h2", 16);
      \u0275\u0275text(78, "Come Lavoriamo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 23);
      \u0275\u0275text(80, " Un processo collaudato che ti lascia libero di cucinare. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 34);
      \u0275\u0275template(82, Marketing_div_82_Template, 9, 4, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "section", 36)(84, "div", 22)(85, "h2", 16);
      \u0275\u0275text(86, "Pacchetti Pensati per Te");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 23);
      \u0275\u0275text(88, " Oppure costruisci il tuo mix personalizzato. Non vendiamo prodotti standard. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 37);
      \u0275\u0275template(90, Marketing_div_90_Template, 10, 6, "div", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "section", 39)(92, "div", 40)(93, "div", 41)(94, "h2", 42);
      \u0275\u0275text(95, " Raccontaci il Tuo Progetto ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 43);
      \u0275\u0275text(97, " Non un form freddo, ma l'inizio di una conversazione. Rispondiamo personalmente a ogni richiesta entro 24 ore. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 44)(99, "p", 45)(100, "strong");
      \u0275\u0275text(101, "Promessa:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, " Zero spam, zero call commerciali aggressive. Solo una consulenza onesta su cosa pu\xF2 davvero aiutare il tuo ristorante. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "form", 46, 0);
      \u0275\u0275listener("ngSubmit", function Marketing_Template_form_ngSubmit_103_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(105, "div", 47)(106, "label", 48);
      \u0275\u0275text(107, "Nome del Ristorante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "input", 49);
      \u0275\u0275twoWayListener("ngModelChange", function Marketing_Template_input_ngModelChange_108_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.name, $event) || (ctx.contactForm.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 50)(110, "div", 47)(111, "label", 51);
      \u0275\u0275text(112, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "input", 52);
      \u0275\u0275twoWayListener("ngModelChange", function Marketing_Template_input_ngModelChange_113_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.email, $event) || (ctx.contactForm.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 47)(115, "label", 53);
      \u0275\u0275text(116, "Telefono");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "input", 54);
      \u0275\u0275twoWayListener("ngModelChange", function Marketing_Template_input_ngModelChange_117_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.phone, $event) || (ctx.contactForm.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 47)(119, "label", 55)(120, "span", 56);
      \u0275\u0275text(121, "interests");
      \u0275\u0275elementEnd();
      \u0275\u0275text(122, " Servizi che ti interessano (seleziona uno o pi\xF9) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 57);
      \u0275\u0275template(124, Marketing_label_124_Template, 5, 2, "label", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 47)(126, "label", 59);
      \u0275\u0275text(127, " Raccontaci del tuo ristorante e dei tuoi obiettivi ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "textarea", 60);
      \u0275\u0275twoWayListener("ngModelChange", function Marketing_Template_textarea_ngModelChange_128_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.message, $event) || (ctx.contactForm.message = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "button", 61)(130, "span", 56);
      \u0275\u0275text(131, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275text(132, " Invia Richiesta ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(133, Marketing_div_133_Template, 4, 0, "div", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "section", 63)(135, "div", 64)(136, "h2", 16);
      \u0275\u0275text(137, " Smetti di Improvvisare il Marketing ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p", 65);
      \u0275\u0275text(139, " I tuoi competitor stanno gi\xE0 investendo in comunicazione professionale. Non restare indietro. Promethea ti porta al loro livello, senza stress. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "a", 66);
      \u0275\u0275text(141, " Iniziamo Oggi ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const marketingForm_r12 = \u0275\u0275reference(104);
      \u0275\u0275advance(41);
      \u0275\u0275property("ngForOf", ctx.services);
      \u0275\u0275advance(41);
      \u0275\u0275property("ngForOf", ctx.processSteps);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.packages);
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.name);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.phone);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.services);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.message);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !marketingForm_r12.form.valid);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showSuccessMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 100dvh;\n  display: flex;\n  padding-bottom: var(--gap-lg);\n  justify-content: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--gap-lg);\n  padding: var(--gap-sm) var(--gap-lg) var(--gap-lg) var(--gap-lg);\n  position: relative;\n  z-index: 2;\n}\n.hero-text[_ngcontent-%COMP%] {\n  line-height: 1.2;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: var(--gap-sm);\n}\n.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--primary),\n      var(--tertiary));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  line-height: 1.6;\n  color: var(--text-muted);\n  margin-bottom: var(--gap-md);\n}\n.feature-emoji[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.integration-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  color: var(--text-color);\n  margin: var(--gap-lg) 0;\n  padding: var(--gap-lg);\n  background: var(--background2);\n  border: 1px solid var(--smoke-1);\n  box-shadow:\n    inset 0 1px 0 var(--smoke-2),\n    0 0 60px -10px var(--shadow-1),\n    0 0 120px -30px var(--shadow-3);\n}\n.integration-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 55% 70% at 0% 0%,\n      var(--shadow-1),\n      transparent 70%),\n    radial-gradient(\n      ellipse 45% 55% at 100% 100%,\n      var(--shadow-2),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 40% 40% at 50% 50%,\n      var(--shadow-3),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.integration-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.integration-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: var(--gap-lg);\n}\n.module-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: var(--gap-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-md);\n  transition: all 0.3s ease;\n}\n.module-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-4px);\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  font-size: var(--fs-md);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.integration-highlight[_ngcontent-%COMP%] {\n  border-left: 4px solid white;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n}\n.steps-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: var(--gap-lg) auto;\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n  flex-wrap: wrap;\n}\n.step-item[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.step-number[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  opacity: 0.8;\n  margin-bottom: var(--gap-sm);\n}\n.step-connector[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: -50%;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      transparent);\n  opacity: 0.3;\n}\n.contact-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 60px;\n}\n.contact-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-sm);\n  margin-top: 16px;\n  font-weight: 600;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n@media (max-width: 968px) {\n  .hero-content[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    text-align: center;\n    gap: var(--gap-md);\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    display: contents !important;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    margin-bottom: var(--gap-lg);\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    order: 1;\n    padding-top: 0;\n    margin: var(--gap-sm) 0;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    order: 2;\n    padding: var(--gap-md);\n  }\n  .hero-text[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    order: 3;\n    margin-top: var(--gap-sm);\n  }\n  .mockup-browser[_ngcontent-%COMP%] {\n    transform: none !important;\n    max-width: 100%;\n    margin: var(--gap-lg) 0;\n  }\n}\n.img-hero2[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--gap-md);\n  padding: var(--gap-lg);\n  background: var(--vetro);\n  border-radius: 12px;\n  border: 1px solid var(--smoke-1);\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.visual-stack[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.visual-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  padding: var(--gap-md);\n  transition: transform 0.3s ease;\n}\n.visual-card[_ngcontent-%COMP%]:hover {\n  transform: rotate(0deg) translateY(0) scale(1.05) !important;\n  z-index: 10 !important;\n}\n.preview-img[_ngcontent-%COMP%], \n.preview-chart[_ngcontent-%COMP%], \n.preview-ad[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n}\n.preview-img[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n}\n.preview-chart[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0e8fc,\n      #e8d5f7);\n}\n.preview-ad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--smoke-1),\n      var(--smoke-2));\n}\n.service-icon[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-benefits[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: var(--gap-md);\n  border-top: 1px solid var(--smoke-1);\n}\n.why-us-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.why-us-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.why-us-section[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #FAFAFC;\n}\n.why-us-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.why-us-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.why-us-section[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #FAFAFC;\n}\n.packages-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.package-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.package-card.highlighted[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n  box-shadow: 0 8px 30px var(--shadow-1);\n  transform: scale(1.02);\n}\n.package-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: var(--gap-md);\n  background: var(--primary);\n  color: #FAFAFC;\n  border: none;\n}\n.package-services[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--gap-md) 0;\n  border-top: 1px solid var(--smoke-1);\n  border-bottom: 1px solid var(--smoke-1);\n}\n.info-block[_ngcontent-%COMP%] {\n  padding-left: var(--gap-md);\n  border-left: 4px solid;\n}\n.services-checkbox-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--gap-sm);\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  border-radius: 8px;\n}\n.mockup-browser[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-browser[_ngcontent-%COMP%]:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.browser-bar[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid var(--shadow-1);\n}\n.browser-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #ddd;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  background: #ff5f57;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffbd2e;\n}\n.browser-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: #28ca42;\n}\n.browser-url[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  color: #666;\n  text-align: center;\n}\n.browser-content[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  padding: 24px;\n  min-height: 400px;\n}\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.preview-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.preview-hero[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  background: var(--vetro);\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: var(--background2);\n  height: 100px;\n  border-radius: 8px;\n}\n.preview-logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--smoke-1);\n  display: flex;\n  padding: var(--gap-sm);\n  align-items: center;\n  justify-content: center;\n}\n.restaurant-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.logo-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--gap-md);\n  font-weight: bold;\n  color: #666;\n  text-transform: uppercase;\n}\n.proof-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n.quote-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  opacity: 0.2;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n  line-height: 1;\n}\n.testimonial[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.7;\n  padding-left: 40px;\n}\n.mockup-dashboard[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-dashboard[_ngcontent-%COMP%]:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n  color: white;\n  padding: var(--gap-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  font-size: var(--fs-md);\n}\n.dashboard-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.status-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: var(--fs-mini);\n  backdrop-filter: blur(10px);\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: var(--background2);\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border-radius: 8px;\n  margin-bottom: var(--gap-md);\n  border-left: 4px solid var(--primary);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-mini);\n  color: var(--text-muted);\n  margin-bottom: var(--gap-sm);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--gap-sm);\n}\n.stat-trend[_ngcontent-%COMP%] {\n  color: var(--tertiary);\n}\n.chart-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--gap-sm);\n  height: 80px;\n  margin-top: var(--gap-md);\n}\n.chart-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary),\n      var(--tertiary));\n  border-radius: 4px 4px 0 0;\n  min-height: 20px;\n  transition: all 0.3s ease;\n}\n.chart-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateY(-4px);\n}\n.flow-diagram[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-lg) 0;\n  flex-wrap: wrap;\n}\n.flow-step[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n  min-width: 140px;\n}\n.flow-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--gap-sm);\n}\n.flow-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.flow-arrow[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 300;\n}\n.grid-cards3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n}\n.service-card[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border: 1px solid var(--shadow-1);\n  display: flex;\n  flex-direction: column;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.service-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n  border-bottom: 2px solid var(--smoke-1);\n}\n.service-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.service-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n  line-height: 1.6;\n}\n.check-icon[_ngcontent-%COMP%] {\n  color: var(--tertiary);\n  font-weight: 700;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.pricing-hint-section[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n  padding: var(--gap-lg);\n  margin: var(--gap-lg) 0;\n}\n.pricing-hint-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.highlight-price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary);\n}\n/*# sourceMappingURL=promo-common.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Marketing, [{
    type: Component,
    args: [{ selector: "app-marketing", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<!-- marketing.component.html -->\r
<div class="page-container">\r
  \r
  <!-- HERO SECTION -->\r
  <section class="hero-section">\r
    <div class="hero-content">\r
      <div class="hero-text">\r
        <h1 class="hero-title">\r
          Il Tuo Ristorante <br>\r
          <span class="highlight">Merita di Essere Visto</span>\r
        </h1>\r
        <p class="hero-subtitle">\r
          Tu cucini capolavori. Noi li facciamo conoscere al mondo.\r
          Social media, fotografia, grafica, advertising: tutto gestito mentre tu ti concentri \r
          su ci\xF2 che sai fare meglio.\r
        </p>\r
        <div class="flex gap-md flex-col-mobile mt-lg">\r
          <button class="promethea-button" (click)="scrollToContact()">\r
            Parliamo del Tuo Progetto\r
          </button>\r
          <button class="promethea-button outline" (click)="scrollToServices()">\r
            Scopri i Servizi\r
          </button>\r
        </div>\r
      </div>\r
      \r
\r
        <div class="mockup-dashboard shadow-card hover-lift">\r
        <img src="img1.jpg" class="img-hero2">\r
        </div>\r
\r
    </div>\r
  </section>\r
\r
  <!-- PROBLEMA/SOLUZIONE -->\r
  <section class="p-lg bg-glass mb-lg">\r
    <div class="flex flex-col p-lg">\r
      <div class="flex flex-col gap-lg text-center p-lg">\r
        <div>\r
          <h2 class="text-lg font-bold mb-md">Gestire un Ristorante \xC8 Gi\xE0 Abbastanza Complesso</h2>\r
          <p class="text-muted">\r
            Fornitori, personale, qualit\xE0, costi, clienti. E poi dovresti anche trovare il tempo \r
            per postare su Instagram, rispondere ai commenti, creare grafiche, organizzare campagne?\r
          </p>\r
        </div>\r
        \r
        <div class="flex items-center justify-center gap-md">\r
          <div class="chip text-md" style="padding: var(--gap-sm) var(--gap-md);">\r
            Non Pi\xF9!\r
          </div>\r
        </div>\r
\r
        <p>\r
          Promethea non si limita a ottimizzare la tua gestione interna. \r
          <strong style="color: var(--primary);">Ti aiutiamo a riempire i tavoli</strong> con servizi di marketing e comunicazione \r
          pensati per ristoratori, non per multinazionali.\r
        </p>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- SERVICES SECTION -->\r
  <section class="mt-lg p-lg" id="services">\r
    <div class="text-center mb-lg">\r
      <h2 class="text-lg font-bold mb-md">I Nostri Servizi</h2>\r
      <p class="text-md text-muted">\r
        Scegli ci\xF2 che ti serve. Combina i servizi. Costruiamo insieme il tuo pacchetto ideale.\r
      </p>\r
    </div>\r
    <div class="grid-cards">\r
      <div class="service-card card transition hover-lift" *ngFor="let service of services">\r
        <div class="flex w-100 justify-center">\r
          <div class="service-icon rounded-lg flex items-center justify-center"\r
              [style.background]="service.color + '15'">\r
            <lucide-angular\r
              [name]="service.icon"\r
              [color]="service.color"\r
              [size]="28"\r
              class="service-lucide-icon">\r
            </lucide-angular>\r
          </div>\r
        </div>\r
\r
        <h3 class="text-md font-bold mb-sm">{{ service.title }}</h3>\r
        <p class="text-muted mb-md">{{ service.description }}</p>\r
\r
        <div class="service-benefits">\r
          <div class="flex items-start gap-sm mb-sm" *ngFor="let benefit of service.benefits">\r
            <lucide-angular name="circle-check" [size]="16" class="text-primary" style="flex-shrink:0; margin-top:2px;"></lucide-angular>\r
            <span class="text-mini">{{ benefit }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- WHY US -->\r
  <section class="integration-section" style="display: none;">\r
    <div class="text-center">\r
      <h2 class="text-lg font-bold mt-lg">Perch\xE9 Affidarsi a Promethea</h2>\r
      \r
      <div class="grid-cards mt-lg">\r
        <div class="card transition hover-lift">\r
          <span class="material-icons text-primary mb-sm" style="font-size: var(--fs-lg);">\r
            restaurant\r
          </span>\r
          <h3 class="font-bold mb-sm">Parliamo la Tua Lingua</h3>\r
          <p class="text-muted">\r
            Non siamo un'agenzia generica. Lavoriamo solo con ristoranti. \r
            Conosciamo i tuoi problemi, le tue esigenze, il tuo pubblico.\r
          </p>\r
        </div>\r
\r
        <div class="card transition hover-lift">\r
          <span class="material-icons text-primary mb-sm" style="font-size: var(--fs-lg);">\r
            link\r
          </span>\r
          <h3 class="font-bold mb-sm">Tutto Integrato</h3>\r
          <p class="text-muted">\r
            Usi gi\xE0 Promethea per gestione e prenotazioni? Il marketing si integra perfettamente. \r
            Dati sincronizzati, zero duplicazioni.\r
          </p>\r
        </div>\r
\r
        <div class="card transition hover-lift">\r
          <span class="material-icons text-primary mb-sm" style="font-size: var(--fs-lg);">\r
            speed\r
          </span>\r
          <h3 class="font-bold mb-sm">Veloci e Reattivi</h3>\r
          <p class="text-muted">\r
            Evento dell'ultimo minuto? Promozione flash? Rispondiamo in 24h, \r
            produciamo in 48h. La ristorazione non aspetta.\r
          </p>\r
        </div>\r
\r
        <div class="card transition hover-lift">\r
          <span class="material-icons text-primary mb-sm" style="font-size: var(--fs-lg);">\r
            analytics\r
          </span>\r
          <h3 class="font-bold mb-sm">Risultati Misurabili</h3>\r
          <p class="text-muted">\r
            Niente vanity metrics. Ti mostriamo coperti prenotati, traffico al sito, \r
            conversioni reali. Marketing che si traduce in \u20AC.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- PROCESS -->\r
  <section class="py-lg bg-glass">\r
    <div class="text-center mb-lg">\r
      <h2 class="text-lg font-bold mb-md">Come Lavoriamo</h2>\r
      <p class="text-md text-muted">\r
        Un processo collaudato che ti lascia libero di cucinare.\r
      </p>\r
    </div>\r
\r
    <div class="steps-container">\r
      <div class="step-item" *ngFor="let step of processSteps; let i = index">\r
        <div class="step-number text-primary">{{ step.number }}</div>\r
        <div class="step-content">\r
          <h3 class="text-md font-bold mb-sm">{{ step.title }}</h3>\r
          <p class="text-muted">{{ step.description }}</p>\r
        </div>\r
        <div class="step-connector" *ngIf="i < processSteps.length - 1"></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- PACKAGES -->\r
  <section class="py-lg" style="display: none;">\r
    <div class="text-center mb-lg">\r
      <h2 class="text-lg font-bold mb-md">Pacchetti Pensati per Te</h2>\r
      <p class="text-md text-muted">\r
        Oppure costruisci il tuo mix personalizzato. Non vendiamo prodotti standard.\r
      </p>\r
    </div>\r
\r
    <div class="packages-grid">\r
      <div class="package-card card transition hover-lift"\r
           [class.highlighted]="package.highlight"\r
           *ngFor="let package of packages">\r
        <div class="package-badge chip" *ngIf="package.highlight">\r
          Pi\xF9 Popolare\r
        </div>\r
        \r
        <h3 class="text-md font-bold mb-sm">{{ package.name }}</h3>\r
        <p class="text-muted mb-lg">{{ package.description }}</p>\r
        \r
        <div class="package-services">\r
          <div class="flex items-start gap-sm mb-sm" *ngFor="let service of package.services">\r
            <span class="material-icons text-primary" style="font-size: var(--fs-sm);">done</span>\r
            <span>{{ service }}</span>\r
          </div>\r
        </div>\r
\r
        <button class="promethea-button mt-lg" \r
                style="width: 100%;"\r
                (click)="scrollToContact()">\r
          Richiedi Info\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CONTACT FORM -->\r
  <section class="p-lg bg-gradient" id="contact"\r
  style="display: none;"\r
  >\r
    <div class="contact-container">\r
      <div class="contact-info">\r
        <h2 class="text-lg font-bold mb-md" style="color: #FAFAFC;">\r
          Raccontaci il Tuo Progetto\r
        </h2>\r
        <p class="text-md mb-lg" style="color: #FAFAFC; opacity: 0.9;">\r
          Non un form freddo, ma l'inizio di una conversazione. \r
          Rispondiamo personalmente a ogni richiesta entro 24 ore.\r
        </p>\r
        \r
        <div class="info-block mb-md" style="border-left-color: #FAFAFC;">\r
          <p style="color: #FAFAFC;">\r
            <strong>Promessa:</strong> Zero spam, zero call commerciali aggressive. \r
            Solo una consulenza onesta su cosa pu\xF2 davvero aiutare il tuo ristorante.\r
          </p>\r
        </div>\r
      </div>\r
\r
      <form class="form-card" (ngSubmit)="onSubmit()" #marketingForm="ngForm">\r
        <div class="form-group">\r
          <label class="standard-label" for="name">Nome del Ristorante</label>\r
          <input \r
            type="text" \r
            id="name" \r
            [(ngModel)]="contactForm.name" \r
            name="name"\r
            required\r
            placeholder="Es. Osteria del Mare"\r
          >\r
        </div>\r
\r
        <div class="form-row">\r
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
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label">\r
            <span class="material-icons">interests</span>\r
            Servizi che ti interessano (seleziona uno o pi\xF9)\r
          </label>\r
          <div class="services-checkbox-grid">\r
            <label class="checkbox-label" *ngFor="let service of services">\r
              <input \r
                type="checkbox" \r
                [checked]="isServiceSelected(service.title)"\r
                (change)="toggleService(service.title)"\r
              >\r
              <div class="checkbox-content">\r
                <strong>{{ service.title }}</strong>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="standard-label" for="message">\r
            Raccontaci del tuo ristorante e dei tuoi obiettivi\r
          </label>\r
          <textarea \r
            id="message" \r
            [(ngModel)]="contactForm.message"\r
            name="message"\r
            placeholder="Es: Siamo un ristorante di pesce aperto da 2 anni. Abbiamo una buona clientela locale ma vorremmo attrarre pi\xF9 turisti e giovani. Non abbiamo mai fatto advertising online..."\r
          ></textarea>\r
        </div>\r
\r
        <button \r
          type="submit" \r
          class="promethea-button"\r
          style="width: 100%;"\r
          [disabled]="!marketingForm.form.valid"\r
        >\r
          <span class="material-icons">send</span>\r
          Invia Richiesta\r
        </button>\r
\r
        <div class="success-message rounded p-md" \r
             style="background: rgba(16, 185, 129, 0.2); color: #10b981; border: 2px solid #10b981;"\r
             *ngIf="showSuccessMessage">\r
          <span class="material-icons">check_circle</span>\r
          Richiesta ricevuta! Ti contatteremo entro 24 ore.\r
        </div>\r
      </form>\r
    </div>\r
  </section>\r
\r
  <!-- FINAL CTA -->\r
  <section class="py-lg text-center" style="display: none;">\r
    <div style="max-width: 700px; margin: 0 auto;">\r
      <h2 class="text-lg font-bold mb-md">\r
        Smetti di Improvvisare il Marketing\r
      </h2>\r
      <p class="text-md text-muted mb-lg">\r
        I tuoi competitor stanno gi\xE0 investendo in comunicazione professionale. \r
        Non restare indietro. Promethea ti porta al loro livello, senza stress.\r
      </p>\r
      <a \r
        class="promethea-button" \r
        href="mailto:immagine.social@prometheasrl.it?subject=Richiesta%20Informazioni&body=Buongiorno,%20vorrei%20maggiori%20informazioni."\r
      >\r
        Iniziamo Oggi\r
      </a>\r
    </div>\r
  </section>\r
\r
</div>`, styles: ['/* src/promo-common.css */\n.hero-section {\n  position: relative;\n  overflow: hidden;\n  min-height: 100dvh;\n  display: flex;\n  padding-bottom: var(--gap-lg);\n  justify-content: center;\n}\n.hero-content {\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--gap-lg);\n  padding: var(--gap-sm) var(--gap-lg) var(--gap-lg) var(--gap-lg);\n  position: relative;\n  z-index: 2;\n}\n.hero-text {\n  line-height: 1.2;\n}\n.hero-title {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: var(--gap-sm);\n}\n.highlight {\n  background:\n    linear-gradient(\n      120deg,\n      var(--primary),\n      var(--tertiary));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle {\n  font-size: var(--fs-md);\n  line-height: 1.6;\n  color: var(--text-muted);\n  margin-bottom: var(--gap-md);\n}\n.feature-emoji {\n  font-size: var(--fs-md);\n}\n.integration-section {\n  position: relative;\n  overflow: hidden;\n  color: var(--text-color);\n  margin: var(--gap-lg) 0;\n  padding: var(--gap-lg);\n  background: var(--background2);\n  border: 1px solid var(--smoke-1);\n  box-shadow:\n    inset 0 1px 0 var(--smoke-2),\n    0 0 60px -10px var(--shadow-1),\n    0 0 120px -30px var(--shadow-3);\n}\n.integration-section::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 55% 70% at 0% 0%,\n      var(--shadow-1),\n      transparent 70%),\n    radial-gradient(\n      ellipse 45% 55% at 100% 100%,\n      var(--shadow-2),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 40% 40% at 50% 50%,\n      var(--shadow-3),\n      transparent 70%);\n  z-index: 0;\n  pointer-events: none;\n}\n.integration-section > * {\n  position: relative;\n  z-index: 1;\n}\n.integration-section > * {\n  position: relative;\n  z-index: 1;\n}\n.integration-content {\n  margin: 0 auto;\n  padding: var(--gap-lg);\n}\n.module-item {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: var(--gap-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--gap-md);\n  transition: all 0.3s ease;\n}\n.module-item:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-4px);\n}\n.module-icon {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  font-size: var(--fs-md);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.integration-highlight {\n  border-left: 4px solid white;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n}\n.steps-container {\n  display: flex;\n  justify-content: space-between;\n  margin: var(--gap-lg) auto;\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n  flex-wrap: wrap;\n}\n.step-item {\n  flex: 1;\n  position: relative;\n}\n.step-number {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  opacity: 0.8;\n  margin-bottom: var(--gap-sm);\n}\n.step-connector {\n  position: absolute;\n  top: 40px;\n  right: -50%;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      transparent);\n  opacity: 0.3;\n}\n.contact-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 60px;\n}\n.contact-features {\n  list-style: none;\n  padding: 0;\n}\n.success-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-sm);\n  margin-top: 16px;\n  font-weight: 600;\n}\n.bg-light {\n  background: #f8f9fa;\n}\n@media (max-width: 968px) {\n  .hero-content {\n    display: flex !important;\n    flex-direction: column !important;\n    text-align: center;\n    gap: var(--gap-md);\n  }\n  .hero-text {\n    display: contents !important;\n  }\n  .hero-title {\n    margin-bottom: var(--gap-lg);\n  }\n  .hero-visual {\n    order: 1;\n    padding-top: 0;\n    margin: var(--gap-sm) 0;\n  }\n  .hero-subtitle {\n    order: 2;\n    padding: var(--gap-md);\n  }\n  .hero-text .flex {\n    order: 3;\n    margin-top: var(--gap-sm);\n  }\n  .mockup-browser {\n    transform: none !important;\n    max-width: 100%;\n    margin: var(--gap-lg) 0;\n  }\n}\n.img-hero2 {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: var(--gap-md);\n  padding: var(--gap-lg);\n  background: var(--vetro);\n  border-radius: 12px;\n  border: 1px solid var(--smoke-1);\n}\n.stat-item {\n  text-align: center;\n}\n.stat-value {\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.visual-stack {\n  position: relative;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.visual-card {\n  position: absolute;\n  width: 280px;\n  padding: var(--gap-md);\n  transition: transform 0.3s ease;\n}\n.visual-card:hover {\n  transform: rotate(0deg) translateY(0) scale(1.05) !important;\n  z-index: 10 !important;\n}\n.preview-img,\n.preview-chart,\n.preview-ad {\n  width: 100%;\n  height: 150px;\n  border-radius: 8px;\n}\n.preview-img {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n}\n.preview-chart {\n  background:\n    linear-gradient(\n      135deg,\n      #f0e8fc,\n      #e8d5f7);\n}\n.preview-ad {\n  background:\n    linear-gradient(\n      135deg,\n      var(--smoke-1),\n      var(--smoke-2));\n}\n.service-icon {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-benefits {\n  margin-top: auto;\n  padding-top: var(--gap-md);\n  border-top: 1px solid var(--smoke-1);\n}\n.why-us-section h2,\n.why-us-section h3,\n.why-us-section .text-muted {\n  color: #FAFAFC;\n}\n.why-us-section .card {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.why-us-section .card:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.why-us-section .material-icons {\n  color: #FAFAFC;\n}\n.packages-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.package-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.package-card.highlighted {\n  border: 2px solid var(--primary);\n  box-shadow: 0 8px 30px var(--shadow-1);\n  transform: scale(1.02);\n}\n.package-badge {\n  position: absolute;\n  top: -12px;\n  right: var(--gap-md);\n  background: var(--primary);\n  color: #FAFAFC;\n  border: none;\n}\n.package-services {\n  flex: 1;\n  padding: var(--gap-md) 0;\n  border-top: 1px solid var(--smoke-1);\n  border-bottom: 1px solid var(--smoke-1);\n}\n.info-block {\n  padding-left: var(--gap-md);\n  border-left: 4px solid;\n}\n.services-checkbox-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--gap-sm);\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  border-radius: 8px;\n}\n.mockup-browser {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-browser:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.browser-bar {\n  background: var(--text-muted);\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid var(--shadow-1);\n}\n.browser-dots {\n  display: flex;\n  gap: 6px;\n}\n.browser-dots span {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #ddd;\n}\n.browser-dots span:nth-child(1) {\n  background: #ff5f57;\n}\n.browser-dots span:nth-child(2) {\n  background: #ffbd2e;\n}\n.browser-dots span:nth-child(3) {\n  background: #28ca42;\n}\n.browser-url {\n  flex: 1;\n  background: white;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  color: #666;\n  text-align: center;\n}\n.browser-content {\n  background: var(--text-muted);\n  padding: 24px;\n  min-height: 400px;\n}\n.preview-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.preview-nav {\n  display: flex;\n  gap: 12px;\n}\n.nav-item {\n  width: 60px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.preview-hero {\n  width: 100%;\n  height: 180px;\n  background: var(--vetro);\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.preview-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.preview-card {\n  background: var(--background2);\n  height: 100px;\n  border-radius: 8px;\n}\n.preview-logo {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--smoke-1);\n  display: flex;\n  padding: var(--gap-sm);\n  align-items: center;\n  justify-content: center;\n}\n.restaurant-logo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.logo-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--gap-md);\n  font-weight: bold;\n  color: #666;\n  text-transform: uppercase;\n}\n.proof-card {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n.quote-icon {\n  font-size: 4rem;\n  opacity: 0.2;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n  line-height: 1;\n}\n.testimonial {\n  font-style: italic;\n  line-height: 1.7;\n  padding-left: 40px;\n}\n.mockup-dashboard {\n  border-radius: 12px;\n  box-shadow: 0 10px 40px var(--smoke-1);\n  overflow: hidden;\n  transform: perspective(500px) rotateY(-10deg);\n  transition: transform 0.8s ease;\n}\n.mockup-dashboard:hover {\n  transform: perspective(500px) rotateY(0deg);\n}\n.dashboard-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--tertiary));\n  color: white;\n  padding: var(--gap-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  font-size: var(--fs-md);\n}\n.dashboard-icon {\n  font-size: var(--fs-md);\n}\n.status-badge {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: var(--fs-mini);\n  backdrop-filter: blur(10px);\n}\n.dashboard-content {\n  padding: 24px;\n  background: var(--background2);\n}\n.stat-card {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border-radius: 8px;\n  margin-bottom: var(--gap-md);\n  border-left: 4px solid var(--primary);\n}\n.stat-label {\n  font-size: var(--fs-mini);\n  color: var(--text-muted);\n  margin-bottom: var(--gap-sm);\n}\n.stat-value {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--gap-sm);\n}\n.stat-trend {\n  color: var(--tertiary);\n}\n.chart-preview {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--gap-sm);\n  height: 80px;\n  margin-top: var(--gap-md);\n}\n.chart-bar {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary),\n      var(--tertiary));\n  border-radius: 4px 4px 0 0;\n  min-height: 20px;\n  transition: all 0.3s ease;\n}\n.chart-bar:hover {\n  opacity: 0.8;\n  transform: translateY(-4px);\n}\n.flow-diagram {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--gap-sm);\n  padding: var(--gap-lg) 0;\n  flex-wrap: wrap;\n}\n.flow-step {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n  min-width: 140px;\n}\n.flow-icon {\n  font-size: var(--fs-md);\n  margin-bottom: var(--gap-sm);\n}\n.flow-label {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.flow-arrow {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 300;\n}\n.grid-cards3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--gap-lg);\n  padding: var(--gap-md);\n}\n.service-card {\n  background: var(--vetro);\n  padding: var(--gap-md);\n  border: 1px solid var(--shadow-1);\n  display: flex;\n  flex-direction: column;\n}\n.service-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.service-header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  gap: var(--gap-sm);\n  margin-bottom: var(--gap-md);\n  border-bottom: 2px solid var(--smoke-1);\n}\n.service-list {\n  list-style: none;\n  padding: 0;\n}\n.service-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n  line-height: 1.6;\n}\n.check-icon {\n  color: var(--tertiary);\n  font-weight: 700;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.pricing-hint-section {\n  background: var(--smoke-1);\n  padding: var(--gap-lg);\n  margin: var(--gap-lg) 0;\n}\n.pricing-hint-content {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.highlight-price {\n  font-size: 2rem;\n  color: var(--primary);\n}\n/*# sourceMappingURL=promo-common.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Marketing, { className: "Marketing", filePath: "src/app/restaurant/marketing/marketing.ts", lineNumber: 38 });
})();
export {
  Marketing
};
//# sourceMappingURL=chunk-GEFJX6KJ.js.map
