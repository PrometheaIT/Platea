import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-PF73AKAP.js";
import "./chunk-TWWAJFRB.js";

// src/app/auth/policy/policy.ts
var Policy = class _Policy {
  static \u0275fac = function Policy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Policy)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Policy, selectors: [["app-policy"]], decls: 189, vars: 0, consts: [[1, "page-container"], [1, "p-sm", 2, "margin", "0 auto"], [1, "mb-xl"], [1, "sezionepolicy"], [1, "text-md", "mb-lg"], [1, "text-muted", "mb-lg"], ["href", "mailto:privacy@prometheasrl.it", 1, "link"], [1, "mb-lg"], [1, "flex", "items-start", "gap-sm", "mb-sm"], [1, "material-icons", "text-mini"], [1, "text-muted"], [1, "grid-form", "mb-lg"], [1, "chip"], ["type", "checkbox", "checked", "", "disabled", "", 1, "mt-sm"], [1, "checkbox-content"], [1, "info-message", "mb-lg"], ["name", "info"], [1, "m-0"], [1, "grid-cards", "mb-lg"], [1, "card"], [1, "card-title"], [1, "form-card", "mb-lg"], [1, "text-muted", "mb-sm"], ["href", "mailto:privacy@prometheasrl.it", 1, "promethea-button", "ghost"], ["name", "mail"], ["href", "https://www.garanteprivacy.it", "target", "_blank", 1, "link"], [1, "flex", "items-center", "justify-center", "my-xl"], [1, "border-top", 2, "flex-grow", "1"], [1, "px-lg"], [1, "material-icons", "text-muted"], [1, "section-header"], [1, "section-title"], [1, "p-md"], [1, "info-message"], [1, "material-icons"]], template: function Policy_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div")(4, "div", 3)(5, "h2", 4);
      \u0275\u0275text(6, "1. Titolare del trattamento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Il Titolare del trattamento \xE8 ");
      \u0275\u0275elementStart(9, "strong");
      \u0275\u0275text(10, "Promethea S.r.l.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, ", P.IVA 01417350327, con sede legale in Via Flavia 82, 34148 Trieste (TS). ");
      \u0275\u0275element(12, "br");
      \u0275\u0275text(13, "Email: ");
      \u0275\u0275elementStart(14, "a", 6);
      \u0275\u0275text(15, "privacy@prometheasrl.it");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 3)(17, "h2", 4);
      \u0275\u0275text(18, "2. Ambito di applicazione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 5);
      \u0275\u0275text(20, " La presente Privacy Policy si applica all'utilizzo dell'applicazione e dei servizi digitali offerti da Promethea S.r.l. per: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ul", 7)(22, "li", 8)(23, "span", 9);
      \u0275\u0275text(24, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 10);
      \u0275\u0275text(26, "Utenti finali che consultano e prenotano ristoranti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li", 8)(28, "span", 9);
      \u0275\u0275text(29, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 10);
      \u0275\u0275text(31, "Ristoranti e fornitori registrati sulla piattaforma");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 3)(33, "h2", 4);
      \u0275\u0275text(34, "3. Tipologie di dati trattati");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "ul", 11)(36, "li", 12);
      \u0275\u0275text(37, "Dati identificativi (nome, cognome)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "li", 12);
      \u0275\u0275text(39, "Dati di contatto (email, telefono)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "li", 12);
      \u0275\u0275text(41, "Dati di account e autenticazione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "li", 12);
      \u0275\u0275text(43, "Dati di prenotazione");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "li", 12);
      \u0275\u0275text(45, "Dati di localizzazione (se autorizzati dall'utente)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "li", 12);
      \u0275\u0275text(47, "Dati fiscali e aziendali per ristoratori e fornitori");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 3)(49, "h2", 4);
      \u0275\u0275text(50, "4. Finalit\xE0 e base giuridica del trattamento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 7)(52, "li", 8);
      \u0275\u0275element(53, "input", 13);
      \u0275\u0275elementStart(54, "div", 14)(55, "strong");
      \u0275\u0275text(56, "Registrazione e gestione dell'account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 10);
      \u0275\u0275text(58, "(art. 6.1.b GDPR)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li", 8);
      \u0275\u0275element(60, "input", 13);
      \u0275\u0275elementStart(61, "div", 14)(62, "strong");
      \u0275\u0275text(63, "Gestione delle prenotazioni");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 10);
      \u0275\u0275text(65, "(art. 6.1.b GDPR)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "li", 8);
      \u0275\u0275element(67, "input", 13);
      \u0275\u0275elementStart(68, "div", 14)(69, "strong");
      \u0275\u0275text(70, "Adempimenti legali e fiscali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 10);
      \u0275\u0275text(72, "(art. 6.1.c GDPR)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "li", 8);
      \u0275\u0275element(74, "input", 13);
      \u0275\u0275elementStart(75, "div", 14)(76, "strong");
      \u0275\u0275text(77, "Comunicazioni operative e di servizio");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "li", 8);
      \u0275\u0275element(79, "input", 13);
      \u0275\u0275elementStart(80, "div", 14)(81, "strong");
      \u0275\u0275text(82, "Invio di comunicazioni promozionali solo previo consenso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 10);
      \u0275\u0275text(84, "(art. 6.1.a GDPR)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 3)(86, "h2", 4);
      \u0275\u0275text(87, "5. Modalit\xE0 del trattamento e sicurezza");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 5);
      \u0275\u0275text(89, " I dati sono trattati con strumenti informatici e organizzativi adeguati a garantire la sicurezza, l'integrit\xE0 e la riservatezza delle informazioni, incluse misure di cifratura, controllo degli accessi e backup periodici. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 3)(91, "h2", 4);
      \u0275\u0275text(92, "6. Conservazione dei dati");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 15);
      \u0275\u0275element(94, "lucide-angular", 16);
      \u0275\u0275elementStart(95, "div")(96, "p", 17)(97, "strong");
      \u0275\u0275text(98, "Periodi di conservazione:");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(99, "div", 18)(100, "div", 19)(101, "div", 20);
      \u0275\u0275text(102, "Dati di account e prenotazioni");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 10);
      \u0275\u0275text(104, "Fino alla cancellazione dell'account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 19)(106, "div", 20);
      \u0275\u0275text(107, "Dati fiscali e contrattuali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 10);
      \u0275\u0275text(109, "10 anni");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 19)(111, "div", 20);
      \u0275\u0275text(112, "Dati marketing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 10);
      \u0275\u0275text(114, "Massimo 24 mesi salvo revoca del consenso");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(115, "div", 3)(116, "h2", 4);
      \u0275\u0275text(117, "7. Comunicazione e trasferimento dei dati");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 5);
      \u0275\u0275text(119, " I dati potranno essere comunicati a fornitori tecnici e professionisti nominati Responsabili del trattamento. I dati non sono trasferiti fuori dall'Unione Europea salvo adeguate garanzie. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 3)(121, "h2", 4);
      \u0275\u0275text(122, "8. Diritti dell'interessato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 21)(124, "p", 22);
      \u0275\u0275text(125, " L'utente pu\xF2 esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione, limitazione, portabilit\xE0 e opposizione scrivendo a: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "a", 23);
      \u0275\u0275element(127, "lucide-angular", 24);
      \u0275\u0275text(128, " privacy@prometheasrl.it ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 3)(130, "h2", 4);
      \u0275\u0275text(131, "9. Reclami");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p", 10);
      \u0275\u0275text(133, " \xC8 possibile proporre reclamo al Garante per la Protezione dei Dati Personali (");
      \u0275\u0275elementStart(134, "a", 25);
      \u0275\u0275text(135, "www.garanteprivacy.it");
      \u0275\u0275elementEnd();
      \u0275\u0275text(136, "). ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(137, "div", 26);
      \u0275\u0275element(138, "div", 27);
      \u0275\u0275elementStart(139, "div", 28)(140, "span", 29);
      \u0275\u0275text(141, "drag_handle");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(142, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "section")(144, "div", 30)(145, "h1", 31);
      \u0275\u0275text(146, "Termini e Condizioni");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 32)(148, "h2", 4);
      \u0275\u0275text(149, "1. Oggetto del servizio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 5);
      \u0275\u0275text(151, " L'applicazione consente agli utenti di consultare ristoranti e prenotare servizi. Il servizio \xE8 attualmente gratuito. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "h2", 4);
      \u0275\u0275text(153, "2. Registrazione e account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 5);
      \u0275\u0275text(155, " L'utente \xE8 responsabile della veridicit\xE0 dei dati forniti e della sicurezza delle proprie credenziali di accesso. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 33)(157, "span", 34);
      \u0275\u0275text(158, "security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "p", 17)(160, "strong");
      \u0275\u0275text(161, "Sicurezza dell'account:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(162, " Ti raccomandiamo di utilizzare password complesse e di non condividere le tue credenziali con terzi. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(163, "section", 2)(164, "div", 30)(165, "h1", 31);
      \u0275\u0275text(166, "Cookie Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p", 10);
      \u0275\u0275text(168, "Ultimo aggiornamento: 31 gennaio 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 3)(170, "h2", 4);
      \u0275\u0275text(171, "1. Assenza di cookie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "p", 5);
      \u0275\u0275text(173, " L\u2019applicazione ");
      \u0275\u0275elementStart(174, "strong");
      \u0275\u0275text(175, "non utilizza cookie di alcun tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275text(176, ", n\xE9 cookie tecnici, n\xE9 cookie di profilazione, n\xE9 cookie di terze parti. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "p", 5);
      \u0275\u0275text(178, " Non vengono installati strumenti di tracciamento, sistemi di analisi statistica, pixel di monitoraggio o tecnologie assimilabili ai cookie. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 3)(180, "h2", 4);
      \u0275\u0275text(181, "2. Tecnologie similari");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "p", 5);
      \u0275\u0275text(183, " Non vengono utilizzati strumenti di memorizzazione locale del browser (come localStorage o sessionStorage) per finalit\xE0 di tracciamento o profilazione. Eventuali dati tecnici sono utilizzati esclusivamente per il corretto funzionamento dell\u2019applicazione e non consentono l\u2019identificazione dell\u2019utente. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 3)(185, "h2", 4);
      \u0275\u0275text(186, "3. Aggiornamenti della Cookie Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "p", 10);
      \u0275\u0275text(188, " La presente Cookie Policy potr\xE0 essere aggiornata in caso di modifiche funzionali o normative. Si invita l\u2019utente a consultarla periodicamente. ");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ["\n\n.sezionepolicy[_ngcontent-%COMP%] {\n  padding: var(--gap-sm) 0 var(--gap-md) 0;\n}\n/*# sourceMappingURL=policy.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Policy, [{
    type: Component,
    args: [{ selector: "app-policy", imports: [LucideAngularModule], template: `<div class="page-container">\r
  <div class="p-sm" style="margin: 0 auto;">\r
    \r
    <!-- Privacy Policy Section -->\r
    <section class="mb-xl">\r
\r
      <div >\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">1. Titolare del trattamento</h2>\r
        <p class="text-muted mb-lg">\r
          Il Titolare del trattamento \xE8 <strong>Promethea S.r.l.</strong>, P.IVA 01417350327,  \r
          con sede legale in Via Flavia 82, 34148 Trieste (TS).  \r
          <br>Email: <a href="mailto:privacy@prometheasrl.it" class="link">privacy&#64;prometheasrl.it</a>\r
        </p>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">2. Ambito di applicazione</h2>\r
        <p class="text-muted mb-lg">\r
          La presente Privacy Policy si applica all'utilizzo dell'applicazione e dei servizi\r
          digitali offerti da Promethea S.r.l. per:\r
        </p>\r
        <ul class="mb-lg">\r
          <li class="flex items-start gap-sm mb-sm">\r
            <span class="material-icons text-mini">check_circle</span>\r
            <span class="text-muted">Utenti finali che consultano e prenotano ristoranti</span>\r
          </li>\r
          <li class="flex items-start gap-sm mb-sm">\r
            <span class="material-icons text-mini">check_circle</span>\r
            <span class="text-muted">Ristoranti e fornitori registrati sulla piattaforma</span>\r
          </li>\r
        </ul>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">3. Tipologie di dati trattati</h2>\r
        <ul class="grid-form mb-lg">\r
          <li class="chip">Dati identificativi (nome, cognome)</li>\r
          <li class="chip">Dati di contatto (email, telefono)</li>\r
          <li class="chip">Dati di account e autenticazione</li>\r
          <li class="chip">Dati di prenotazione</li>\r
          <li class="chip">Dati di localizzazione (se autorizzati dall'utente)</li>\r
          <li class="chip">Dati fiscali e aziendali per ristoratori e fornitori</li>\r
        </ul>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">4. Finalit\xE0 e base giuridica del trattamento</h2>\r
        <ul class="mb-lg">\r
          <li class="flex items-start gap-sm mb-sm">\r
            <input type="checkbox" checked disabled class="mt-sm">\r
            <div class="checkbox-content">\r
              <strong>Registrazione e gestione dell'account</strong>\r
              <p class="text-muted">(art. 6.1.b GDPR)</p>\r
            </div>\r
          </li>\r
          <li class="flex items-start gap-sm mb-sm">\r
            <input type="checkbox" checked disabled class="mt-sm">\r
            <div class="checkbox-content">\r
              <strong>Gestione delle prenotazioni</strong>\r
              <p class="text-muted">(art. 6.1.b GDPR)</p>\r
            </div>\r
          </li>\r
          <li class="flex items-start gap-sm mb-sm">\r
            <input type="checkbox" checked disabled class="mt-sm">\r
            <div class="checkbox-content">\r
              <strong>Adempimenti legali e fiscali</strong>\r
              <p class="text-muted">(art. 6.1.c GDPR)</p>\r
            </div>\r
          </li>\r
          <li class="flex items-start gap-sm mb-sm">\r
            <input type="checkbox" checked disabled class="mt-sm">\r
            <div class="checkbox-content">\r
              <strong>Comunicazioni operative e di servizio</strong>\r
            </div>\r
          </li>\r
          <li class="flex items-start gap-sm mb-sm">\r
            <input type="checkbox" checked disabled class="mt-sm">\r
            <div class="checkbox-content">\r
              <strong>Invio di comunicazioni promozionali solo previo consenso</strong>\r
              <p class="text-muted">(art. 6.1.a GDPR)</p>\r
            </div>\r
          </li>\r
        </ul>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">5. Modalit\xE0 del trattamento e sicurezza</h2>\r
        <p class="text-muted mb-lg">\r
          I dati sono trattati con strumenti informatici e organizzativi adeguati a garantire\r
          la sicurezza, l'integrit\xE0 e la riservatezza delle informazioni, incluse misure di\r
          cifratura, controllo degli accessi e backup periodici.\r
        </p>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">6. Conservazione dei dati</h2>\r
        <div class="info-message mb-lg">\r
          <lucide-angular name="info"></lucide-angular>\r
          <div>\r
            <p class="m-0"><strong>Periodi di conservazione:</strong></p>\r
          </div>\r
        </div>\r
        <div class="grid-cards mb-lg">\r
          <div class="card">\r
            <div class="card-title">Dati di account e prenotazioni</div>\r
            <p class="text-muted">Fino alla cancellazione dell'account</p>\r
          </div>\r
          <div class="card">\r
            <div class="card-title">Dati fiscali e contrattuali</div>\r
            <p class="text-muted">10 anni</p>\r
          </div>\r
          <div class="card">\r
            <div class="card-title">Dati marketing</div>\r
            <p class="text-muted">Massimo 24 mesi salvo revoca del consenso</p>\r
          </div>\r
        </div>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">7. Comunicazione e trasferimento dei dati</h2>\r
        <p class="text-muted mb-lg">\r
          I dati potranno essere comunicati a fornitori tecnici e professionisti\r
          nominati Responsabili del trattamento.  \r
          I dati non sono trasferiti fuori dall'Unione Europea salvo adeguate garanzie.\r
        </p>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">8. Diritti dell'interessato</h2>\r
        <div class="form-card mb-lg">\r
          <p class="text-muted mb-sm">\r
            L'utente pu\xF2 esercitare in qualsiasi momento i diritti di accesso, rettifica,\r
            cancellazione, limitazione, portabilit\xE0 e opposizione scrivendo a:\r
          </p>\r
          <a href="mailto:privacy@prometheasrl.it" class="promethea-button ghost">\r
            <lucide-angular name="mail"></lucide-angular>\r
            privacy&#64;prometheasrl.it\r
          </a>\r
        </div>\r
        </div>\r
\r
        <div class="sezionepolicy">\r
        <h2 class="text-md mb-lg">9. Reclami</h2>\r
        <p class="text-muted">\r
          \xC8 possibile proporre reclamo al Garante per la Protezione dei Dati Personali\r
          (<a href="https://www.garanteprivacy.it" target="_blank" class="link">www.garanteprivacy.it</a>).\r
        </p>\r
      </div>\r
      </div>\r
    </section>\r
\r
    <!-- Divider -->\r
    <div class="flex items-center justify-center my-xl">\r
      <div class="border-top" style="flex-grow: 1"></div>\r
      <div class="px-lg">\r
        <span class="material-icons text-muted">drag_handle</span>\r
      </div>\r
      <div class="border-top" style="flex-grow: 1"></div>\r
    </div>\r
\r
    <!-- Termini e Condizioni Section -->\r
    <section >\r
      <div class="section-header">\r
        <h1 class="section-title">Termini e Condizioni</h1>\r
      </div>\r
\r
      <div class="p-md">\r
        <h2 class="text-md mb-lg">1. Oggetto del servizio</h2>\r
        <p class="text-muted mb-lg">\r
          L'applicazione consente agli utenti di consultare ristoranti e prenotare servizi.\r
          Il servizio \xE8 attualmente gratuito.\r
        </p>\r
\r
        <h2 class="text-md mb-lg">2. Registrazione e account</h2>\r
        <p class="text-muted mb-lg">\r
          L'utente \xE8 responsabile della veridicit\xE0 dei dati forniti e della sicurezza\r
          delle proprie credenziali di accesso.\r
        </p>\r
\r
        <div class="info-message">\r
          <span class="material-icons">security</span>\r
          <p class="m-0">\r
            <strong>Sicurezza dell'account:</strong> Ti raccomandiamo di utilizzare password complesse \r
            e di non condividere le tue credenziali con terzi.\r
          </p>\r
        </div>\r
      </div>\r
    </section>\r
<!-- Cookie Policy Section -->\r
<section class="mb-xl">\r
  <div class="section-header">\r
    <h1 class="section-title">Cookie Policy</h1>\r
    <p class="text-muted">Ultimo aggiornamento: 31 gennaio 2026</p>\r
  </div>\r
\r
  <div class="sezionepolicy">\r
    <h2 class="text-md mb-lg">1. Assenza di cookie</h2>\r
    <p class="text-muted mb-lg">\r
      L\u2019applicazione <strong>non utilizza cookie di alcun tipo</strong>, n\xE9 cookie tecnici,\r
      n\xE9 cookie di profilazione, n\xE9 cookie di terze parti.\r
    </p>\r
    <p class="text-muted mb-lg">\r
      Non vengono installati strumenti di tracciamento, sistemi di analisi statistica,\r
      pixel di monitoraggio o tecnologie assimilabili ai cookie.\r
    </p>\r
  </div>\r
\r
  <div class="sezionepolicy">\r
    <h2 class="text-md mb-lg">2. Tecnologie similari</h2>\r
    <p class="text-muted mb-lg">\r
      Non vengono utilizzati strumenti di memorizzazione locale del browser\r
      (come localStorage o sessionStorage) per finalit\xE0 di tracciamento o profilazione.\r
      Eventuali dati tecnici sono utilizzati esclusivamente per il corretto funzionamento\r
      dell\u2019applicazione e non consentono l\u2019identificazione dell\u2019utente.\r
    </p>\r
  </div>\r
\r
  <div class="sezionepolicy">\r
    <h2 class="text-md mb-lg">3. Aggiornamenti della Cookie Policy</h2>\r
    <p class="text-muted">\r
      La presente Cookie Policy potr\xE0 essere aggiornata in caso di modifiche\r
      funzionali o normative. Si invita l\u2019utente a consultarla periodicamente.\r
    </p>\r
  </div>\r
</section>\r
\r
  </div>\r
</div>\r
`, styles: ["/* src/app/auth/policy/policy.css */\n.sezionepolicy {\n  padding: var(--gap-sm) 0 var(--gap-md) 0;\n}\n/*# sourceMappingURL=policy.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Policy, { className: "Policy", filePath: "src/app/auth/policy/policy.ts", lineNumber: 10 });
})();
export {
  Policy
};
//# sourceMappingURL=chunk-MOBQSAUO.js.map
