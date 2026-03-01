import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-YWAAZKTM.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-YGNU4RXP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T3MDKIO5.js";
import "./chunk-TWWAJFRB.js";

// src/app/customer/home/home.ts
function Home_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275element(3, "lucide-angular", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("name", feature_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.description);
  }
}
var Home = class _Home {
  features = [
    {
      icon: "utensils-crossed",
      title: "Prenota il tuo tavolo",
      description: "Scegli ristorante, data e ora. In pochi tap il tuo tavolo \xE8 prenotato."
    },
    {
      icon: "calendar-clock",
      title: "Disponibilit\xE0 in tempo reale",
      description: "Vedi subito quali tavoli sono disponibili e scegli quello perfetto per te."
    },
    {
      icon: "bell-ring",
      title: "Notifiche istantanee",
      description: "Ricevi conferme immediate e promemoria per le tue prenotazioni."
    },
    {
      icon: "star",
      title: "Recensioni verificate",
      description: "Leggi le opinioni di altri clienti e scopri i piatti migliori."
    },
    {
      icon: "ticket-percent",
      title: "Offerte esclusive",
      description: "Accedi a promozioni e sconti riservati agli utenti dell'app."
    },
    {
      icon: "history",
      title: "Storico prenotazioni",
      description: "Gestisci tutte le tue prenotazioni passate e future in un unico posto."
    }
  ];
  popularRestaurants = [
    {
      name: "La Pergola",
      cuisine: "Cucina Italiana",
      rating: 4.8,
      image: "\u{1F35D}"
    },
    {
      name: "Sushi Zen",
      cuisine: "Giapponese",
      rating: 4.7,
      image: "\u{1F371}"
    },
    {
      name: "El Asador",
      cuisine: "Spagnola",
      rating: 4.9,
      image: "\u{1F958}"
    },
    {
      name: "Le Bistrot",
      cuisine: "Francese",
      rating: 4.6,
      image: "\u{1F956}"
    }
  ];
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-user-home"]], decls: 73, vars: 1, consts: [[1, "page-container"], [1, "hero-section"], [1, "hero-content", "flex", "flex-col", "items-center", "gap-lg"], [1, "text-xl", "text-center", "font-bold"], [1, "hero-subtitle", "text-center", "text-muted"], [1, "hide-mobile"], [1, "hero-cta", "flex", "gap-md", "items-center", "flex-wrap", "justify-center"], [1, "promethea-button", "outline", 3, "click"], ["name", "compass"], [1, "hero-visual"], [1, "floating-card", "card", "shadow-card"], [1, "flex", "items-center", "gap-md"], [1, "avatartondo"], ["name", "send-horizontal"], [1, "font-bold"], [1, "text-muted", "text-mini"], ["id", "features", 1, "features-section", "py-lg"], [1, "p-sm", "flex", "flex-col", "w-100", "mb-lg"], [1, "flex", "gap-sm", "items-center"], ["name", "sparkles"], [1, "text-lg", "p-sm"], [1, "text-muted", "p-sm"], [1, "grid-cards", "p-sm"], ["class", "card hover-lift transition", 4, "ngFor", "ngForOf"], [1, "how-it-works", "p-sm"], [1, "section-header"], [1, "section-title"], [1, "material-icons", "header-icon"], [1, "text-muted"], [1, "grid-cards"], [1, "card"], [1, "feature-icon", "bg-gradient", "rounded-full", "flex", "items-center", "justify-center", "mb-md"], [1, "font-bold", "mb-sm"], [1, "card", "hover-lift", "transition"], [1, "flex", "gap-sm", "mb-md"], [1, "feature-icon", "bg-gradient", "rounded-full", "flex", "items-center", "justify-center"], [1, "lucide-icon", 3, "name"], [1, "card-title", "m-0"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, " Prenota il tuo tavolo");
      \u0275\u0275element(5, "br");
      \u0275\u0275text(6, "in pochi secondi ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, " Scopri i migliori ristoranti della tua citt\xE0, prenota istantaneamente");
      \u0275\u0275element(9, "br", 5);
      \u0275\u0275text(10, " e goditi un'esperienza culinaria indimenticabile. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
      \u0275\u0275listener("click", function Home_Template_button_click_12_listener() {
        return ctx.scrollToSection("features");
      });
      \u0275\u0275element(13, "lucide-angular", 8);
      \u0275\u0275text(14, " Scopri di pi\xF9 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12);
      \u0275\u0275element(19, "lucide-angular", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div")(21, "div", 14);
      \u0275\u0275text(22, "Prenotazione confermata!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15);
      \u0275\u0275text(24, "Tavolo per 4 \u2022 Stasera alle 20:00");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(25, "section", 16)(26, "div", 0)(27, "div", 17)(28, "div", 18);
      \u0275\u0275element(29, "lucide-angular", 19);
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275text(31, " Perch\xE9 scegliere la nostra app ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p", 21);
      \u0275\u0275text(33, " Tutto ci\xF2 di cui hai bisogno per vivere esperienze gastronomiche perfette ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 22);
      \u0275\u0275template(35, Home_div_35_Template, 8, 3, "div", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "section", 24)(37, "div", 0)(38, "div", 25)(39, "h2", 26)(40, "span", 27);
      \u0275\u0275text(41, "lightbulb");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " Come funziona ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 28);
      \u0275\u0275text(44, " Prenotare non \xE8 mai stato cos\xEC semplice ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 29)(46, "div", 30)(47, "div", 18)(48, "div", 31)(49, "span", 14);
      \u0275\u0275text(50, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "h3", 32);
      \u0275\u0275text(52, "Scegli il ristorante");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "p", 28);
      \u0275\u0275text(54, "Esplora i migliori ristoranti della tua zona");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 30)(56, "div", 18)(57, "div", 31)(58, "span", 14);
      \u0275\u0275text(59, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "h3", 32);
      \u0275\u0275text(61, "Seleziona data e ora");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "p", 28);
      \u0275\u0275text(63, "Trova il momento perfetto per la tua cena");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 30)(65, "div", 18)(66, "div", 31)(67, "span", 14);
      \u0275\u0275text(68, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "h3", 32);
      \u0275\u0275text(70, "Conferma e goditi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "p", 28);
      \u0275\u0275text(72, "Ricevi conferma immediata e presentati al ristorante");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("ngForOf", ctx.features);
    }
  }, dependencies: [CommonModule, NgForOf, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.hero-section[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  padding: var(--gap-lg) var(--gap-md);\n  position: relative;\n  overflow: hidden;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FAFAFC;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  margin: 0 auto;\n}\n.text-gradient[_ngcontent-%COMP%] {\n  background: #FAFAFC;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  animation: _ngcontent-%COMP%_fadeInUp 1s ease-out 0.4s backwards;\n  padding: var(--gap-lg);\n  line-height: 1.1;\n  color: #FAFAFC;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 1.2s ease-out 0.6s backwards;\n}\n.hero-visual[_ngcontent-%COMP%] {\n  margin-top: var(--gap-xl);\n  animation: _ngcontent-%COMP%_fadeInUp 1.4s ease-out 0.8s backwards;\n}\n.floating-card[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  animation: _ngcontent-%COMP%_floatCard 3s ease-in-out infinite;\n  max-width: 400px;\n}\n.features-section[_ngcontent-%COMP%] {\n  background: var(--background);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  flex-shrink: 0;\n}\n.feature-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--background);\n  font-size: var(--fs-md);\n}\n.restaurant-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.restaurant-image[_ngcontent-%COMP%] {\n  background: var(--smoke-1);\n  height: 150px;\n  border: 2px solid var(--smoke-2);\n}\n.restaurant-emoji[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: var(--gap-xl) var(--gap-md);\n  background: var(--background);\n}\n.cta-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: var(--gap-xl);\n  background: var(--vetro);\n  border: 2px solid var(--smoke-1);\n}\n.cta-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--primary);\n}\n.stats-row[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3rem);\n}\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--smoke-1);\n}\n.footer-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.footer-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary) !important;\n  transform: translateX(4px);\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--smoke-1);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-30px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatCard {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@media (max-width: 768px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    gap: var(--gap-md) !important;\n  }\n  .footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer-section[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-user-home", standalone: true, imports: [CommonModule, LucideAngularModule], template: `<div class="page-container">\r
<!-- HERO SECTION -->\r
<section class="hero-section">\r
  <div class="hero-content flex flex-col items-center gap-lg">\r
    \r
    <div class="text-xl text-center font-bold">\r
      Prenota il tuo tavolo<br>in pochi secondi\r
    </div>\r
    \r
    <p class="hero-subtitle text-center text-muted">\r
      Scopri i migliori ristoranti della tua citt\xE0, prenota istantaneamente<br class="hide-mobile">\r
      e goditi un'esperienza culinaria indimenticabile.\r
    </p>\r
    \r
    <div class="hero-cta flex gap-md items-center flex-wrap justify-center">\r
      <button class="promethea-button outline" (click)="scrollToSection('features')">\r
        <lucide-angular name="compass"></lucide-angular>\r
        Scopri di pi\xF9\r
      </button>\r
    </div>\r
    \r
    <!-- Hero Visual -->\r
    <div class="hero-visual">\r
      <div class="floating-card card shadow-card">\r
        <div class="flex items-center gap-md">\r
          <div class="avatartondo">\r
            <lucide-angular name="send-horizontal"></lucide-angular>\r
          </div>\r
          <div>\r
            <div class="font-bold">Prenotazione confermata!</div>\r
            <div class="text-muted text-mini">Tavolo per 4 \u2022 Stasera alle 20:00</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- FEATURES SECTION -->\r
<section id="features" class="features-section py-lg">\r
  <div class="page-container">\r
    <div class="p-sm flex flex-col w-100 mb-lg">\r
      <div class="flex gap-sm items-center">\r
      <lucide-angular name="sparkles"></lucide-angular>\r
      <div class="text-lg p-sm">\r
        Perch\xE9 scegliere la nostra app\r
      </div>\r
      </div>\r
      <p class="text-muted p-sm">\r
        Tutto ci\xF2 di cui hai bisogno per vivere esperienze gastronomiche perfette\r
      </p>\r
    </div>\r
    \r
<div class="grid-cards p-sm">\r
  <div *ngFor="let feature of features" class="card hover-lift transition">\r
    <div class="flex gap-sm mb-md">\r
      <div class="feature-icon bg-gradient rounded-full flex items-center justify-center">\r
        <lucide-angular [name]="feature.icon" class="lucide-icon"></lucide-angular>\r
      </div>\r
      <h3 class="card-title m-0">{{ feature.title }}</h3>\r
    </div>\r
    <p class="text-muted">{{ feature.description }}</p>\r
  </div>\r
</div>\r
  </div>\r
</section>\r
\r
<!-- HOW IT WORKS SECTION -->\r
<section class="how-it-works p-sm">\r
  <div class="page-container">\r
    <div class="section-header">\r
      <h2 class="section-title">\r
        <span class="material-icons header-icon">lightbulb</span>\r
        Come funziona\r
      </h2>\r
      <p class="text-muted">\r
        Prenotare non \xE8 mai stato cos\xEC semplice\r
      </p>\r
    </div>\r
    \r
    <div class="grid-cards">\r
      <div class="card">\r
        <div class="flex gap-sm items-center">\r
        <div class="feature-icon bg-gradient rounded-full flex items-center justify-center mb-md">\r
          <span class="font-bold">1</span>\r
        </div>\r
        <h3 class="font-bold mb-sm">Scegli il ristorante</h3>\r
        </div>\r
        <p class="text-muted">Esplora i migliori ristoranti della tua zona</p>\r
      </div>\r
      \r
      <div class="card">\r
        <div class="flex gap-sm items-center">\r
        <div class="feature-icon bg-gradient rounded-full flex items-center justify-center mb-md">\r
          <span class="font-bold">2</span>\r
        </div>\r
        <h3 class="font-bold mb-sm">Seleziona data e ora</h3>\r
        </div>\r
        <p class="text-muted">Trova il momento perfetto per la tua cena</p>\r
      </div>\r
      \r
      <div class="card">\r
        <div class="flex gap-sm items-center">\r
        <div class="feature-icon bg-gradient rounded-full flex items-center justify-center mb-md">\r
          <span class="font-bold">3</span>\r
        </div>\r
        <h3 class="font-bold mb-sm">Conferma e goditi</h3>\r
        </div>\r
        <p class="text-muted">Ricevi conferma immediata e presentati al ristorante</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
</div>`, styles: ["/* src/app/customer/home/home.css */\n.hero-section {\n  background: var(--gradiente);\n  padding: var(--gap-lg) var(--gap-md);\n  position: relative;\n  overflow: hidden;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FAFAFC;\n}\n.hero-content {\n  position: relative;\n  z-index: 10;\n  margin: 0 auto;\n}\n.text-gradient {\n  background: #FAFAFC;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle {\n  font-size: var(--fs-md);\n  animation: fadeInUp 1s ease-out 0.4s backwards;\n  padding: var(--gap-lg);\n  line-height: 1.1;\n  color: #FAFAFC;\n}\n.hero-cta {\n  animation: fadeInUp 1.2s ease-out 0.6s backwards;\n}\n.hero-visual {\n  margin-top: var(--gap-xl);\n  animation: fadeInUp 1.4s ease-out 0.8s backwards;\n}\n.floating-card {\n  background: var(--smoke-1);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  animation: floatCard 3s ease-in-out infinite;\n  max-width: 400px;\n}\n.features-section {\n  background: var(--background);\n}\n.feature-icon {\n  width: var(--fs-lg);\n  height: var(--fs-lg);\n  flex-shrink: 0;\n}\n.feature-icon .material-icons {\n  color: var(--background);\n  font-size: var(--fs-md);\n}\n.restaurant-card {\n  height: 100%;\n}\n.restaurant-image {\n  background: var(--smoke-1);\n  height: 150px;\n  border: 2px solid var(--smoke-2);\n}\n.restaurant-emoji {\n  font-size: 4rem;\n}\n.cta-section {\n  padding: var(--gap-xl) var(--gap-md);\n  background: var(--background);\n}\n.cta-card {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: var(--gap-xl);\n  background: var(--vetro);\n  border: 2px solid var(--smoke-1);\n}\n.cta-icon {\n  font-size: 4rem;\n  color: var(--primary);\n}\n.stats-row {\n  width: 100%;\n  max-width: 600px;\n}\n.stat-item {\n  text-align: center;\n}\n.stat-number {\n  font-size: clamp(2rem, 4vw, 3rem);\n}\n.footer {\n  border-top: 1px solid var(--smoke-1);\n}\n.footer-content {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.footer-section {\n  flex: 1;\n  min-width: 200px;\n}\n.footer-section a {\n  transition: all 0.3s ease;\n}\n.footer-section a:hover {\n  color: var(--primary) !important;\n  transform: translateX(4px);\n}\n.border-top {\n  border-top: 1px solid var(--smoke-1);\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-30px) scale(1.05);\n  }\n}\n@keyframes floatCard {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@media (max-width: 768px) {\n  .hide-mobile {\n    display: none;\n  }\n  .stats-row {\n    gap: var(--gap-md) !important;\n  }\n  .footer-content {\n    flex-direction: column;\n  }\n  .footer-section {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/customer/home/home.ts", lineNumber: 25 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-ORJ4KRMM.js.map
