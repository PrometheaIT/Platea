import {
  AuthService,
  BaseService
} from "./chunk-YT7WS7HI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CQ6KSR3R.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  catchError,
  from,
  inject,
  lastValueFrom,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
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

// src/app/timbrature/services/invitations.service.ts
var InvitationsService = class _InvitationsService extends BaseService {
  tableName = "employee_invitations";
  /**
   * Restituisce tutte le invitazioni per una data azienda.
   */
  listByCompany(companyId) {
    return from(this.supabase.from(this.tableName).select("*").eq("company_id", companyId).order("created_at", { ascending: false })).pipe(map((result) => result.data), catchError((error) => {
      console.error("Errore in listByCompany", error);
      throw error;
    }));
  }
  /**
   * Crea una nuova invitazione.
   * Nota: il token dovrebbe essere generato lato server (edge function) o qui?
   * Per ora generiamo un UUID semplice, ma in produzione è meglio usare una funzione Supabase.
   */
  addInvite(companyId, email, invitedBy) {
    const token = crypto.randomUUID();
    return this.create({
      company_id: companyId,
      email,
      token,
      invited_by: invitedBy,
      accepted: false
    });
  }
  /**
   * Rimuove un'invitazione (cancellazione fisica, non soft delete).
   */
  removeInviteById(id) {
    return this.delete(id);
  }
  /**
   * Trova un invito non ancora accettato per una data email.
   */
  findInvitationByEmail(email) {
    return from(this.supabase.rpc("get_invitation_by_email", { p_email: email })).pipe(map((result) => {
      if (result.error)
        throw result.error;
      return result.data;
    }));
  }
  /**
   * Marca un invito come accettato.
   */
  markAsAccepted(id) {
    return this.update(id, { accepted: true }).pipe(map(() => void 0));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InvitationsService_BaseFactory;
    return function InvitationsService_Factory(__ngFactoryType__) {
      return (\u0275InvitationsService_BaseFactory || (\u0275InvitationsService_BaseFactory = \u0275\u0275getInheritedFactory(_InvitationsService)))(__ngFactoryType__ || _InvitationsService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InvitationsService, factory: _InvitationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvitationsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/timbrature/features/inviti-dipendenti/inviti-dipendenti.component.ts
function InvitiDipendentiComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "lucide-angular", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function InvitiDipendentiComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "lucide-angular", 22);
    \u0275\u0275text(2, " Nessun invito presente ");
    \u0275\u0275elementEnd();
  }
}
function InvitiDipendentiComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "strong", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function InvitiDipendentiComponent_div_21_Template_button_click_7_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rimuovi(i_r3));
    });
    \u0275\u0275element(8, "lucide-angular", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, i_r3.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
  }
}
var InvitiDipendentiComponent = class _InvitiDipendentiComponent {
  companyId;
  closeModal = new EventEmitter();
  authService = inject(AuthService);
  invitationsService = inject(InvitationsService);
  inviti = [];
  newEmail = "";
  loading = false;
  error = "";
  currentUserId = null;
  userSub;
  ngOnInit() {
    this.userSub = this.authService.currentUser$.subscribe((user) => {
      this.currentUserId = user?.id ?? null;
    });
    this.load();
  }
  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
  load() {
    return __async(this, null, function* () {
      if (!this.companyId)
        return;
      try {
        this.inviti = yield lastValueFrom(this.invitationsService.listByCompany(this.companyId));
      } catch (err) {
        console.error("Inviti load error", err);
        if (err?.message?.includes('relation "employee_invitations" does not exist')) {
          console.warn("La tabella employee_invitations non esiste ancora in Supabase. Esegui la migrazione SQL.");
        }
      }
    });
  }
  aggiungi() {
    return __async(this, null, function* () {
      this.error = "";
      if (!this.newEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.newEmail)) {
        this.error = "Inserire una email valida";
        return;
      }
      if (!this.companyId) {
        this.error = "Azienda non disponibile";
        return;
      }
      if (!this.currentUserId) {
        this.error = "Utente non autenticato";
        return;
      }
      this.loading = true;
      try {
        yield lastValueFrom(this.invitationsService.addInvite(this.companyId, this.newEmail, this.currentUserId));
        this.newEmail = "";
        yield this.load();
      } catch (err) {
        console.error("Errore aggiunta invito", err);
        if (err?.message?.includes('relation "employee_invitations" does not exist')) {
          this.error = "Tabella inviti non trovata nel DB. Esegui la migrazione SQL.";
        } else {
          this.error = "Errore durante l'invito";
        }
      } finally {
        this.loading = false;
      }
    });
  }
  rimuovi(inv) {
    return __async(this, null, function* () {
      if (!confirm(`Rimuovere ${inv.email}?`))
        return;
      this.loading = true;
      try {
        yield lastValueFrom(this.invitationsService.removeInviteById(inv.id));
        yield this.load();
      } catch (err) {
        console.error("Errore rimozione invito", err);
      } finally {
        this.loading = false;
      }
    });
  }
  close() {
    this.closeModal.emit();
  }
  static \u0275fac = function InvitiDipendentiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvitiDipendentiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvitiDipendentiComponent, selectors: [["app-inviti-dipendenti"]], inputs: { companyId: "companyId" }, outputs: { closeModal: "closeModal" }, decls: 22, vars: 5, consts: [["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-sm", 3, "click"], [1, "modal-header"], [1, "flex", "items-center", "gap-sm"], ["name", "mail-plus"], [1, "section-title"], ["aria-label", "Chiudi", 1, "icon-button", 3, "click"], ["name", "x"], [1, "form-card", "flex", "flex-col", "gap-md"], [1, "form-group"], [1, "standard-label"], ["name", "mail"], ["type", "email", "placeholder", "nome@esempio.it", 3, "ngModelChange", "ngModel"], ["class", "info-message mt-sm", "style", "border-left-color: #ef4444; background: color-mix(in srgb, #ef4444 10%, transparent);", 4, "ngIf"], [1, "promethea-button", 3, "click", "disabled"], ["name", "user-plus"], [2, "border-top", "1px solid var(--smoke-1)", "margin", "var(--gap-sm) 0"], ["class", "flex items-center gap-sm text-muted text-mini p-sm", 4, "ngIf"], ["class", "flex justify-between items-center gap-sm p-sm rounded border transition hover-lift", 4, "ngFor", "ngForOf"], [1, "info-message", "mt-sm", 2, "border-left-color", "#ef4444", "background", "color-mix(in srgb, #ef4444 10%, transparent)"], ["name", "circle-alert"], [1, "flex", "items-center", "gap-sm", "text-muted", "text-mini", "p-sm"], ["name", "inbox"], [1, "flex", "justify-between", "items-center", "gap-sm", "p-sm", "rounded", "border", "transition", "hover-lift"], [1, "flex", "flex-col", "gap-sm"], [1, "font-semibold"], [1, "chip-mini"], ["aria-label", "Rimuovi invito", 1, "icon-lucide", 3, "click", "disabled"], ["name", "trash-2"]], template: function InvitiDipendentiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function InvitiDipendentiComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function InvitiDipendentiComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "lucide-angular", 4);
      \u0275\u0275elementStart(5, "h3", 5);
      \u0275\u0275text(6, "Inviti dipendenti");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function InvitiDipendentiComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      \u0275\u0275element(8, "lucide-angular", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "label", 10);
      \u0275\u0275element(12, "lucide-angular", 11);
      \u0275\u0275text(13, " Email da invitare ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function InvitiDipendentiComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newEmail, $event) || (ctx.newEmail = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, InvitiDipendentiComponent_div_15_Template, 3, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 14);
      \u0275\u0275listener("click", function InvitiDipendentiComponent_Template_button_click_16_listener() {
        return ctx.aggiungi();
      });
      \u0275\u0275element(17, "lucide-angular", 15);
      \u0275\u0275text(18, " Aggiungi ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "div", 16);
      \u0275\u0275template(20, InvitiDipendentiComponent_div_20_Template, 3, 0, "div", 17)(21, InvitiDipendentiComponent_div_21_Template, 9, 6, "div", 18);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.newEmail);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.inviti.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.inviti);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvitiDipendentiComponent, [{
    type: Component,
    args: [{ selector: "app-inviti-dipendenti", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="modal-overlay" (click)="close()" tabindex="-1" role="dialog" aria-modal="true">\r
  <div class="modal-container modal-sm" (click)="$event.stopPropagation()">\r
\r
    <!-- Header -->\r
    <div class="modal-header">\r
      <div class="flex items-center gap-sm">\r
        <lucide-angular name="mail-plus"></lucide-angular>\r
        <h3 class="section-title">Inviti dipendenti</h3>\r
      </div>\r
      <button class="icon-button" (click)="close()" aria-label="Chiudi">\r
        <lucide-angular name="x"></lucide-angular>\r
      </button>\r
    </div>\r
\r
    <!-- Body -->\r
    <div class="form-card flex flex-col gap-md">\r
\r
      <!-- Campo email -->\r
      <div class="form-group">\r
        <label class="standard-label">\r
          <lucide-angular name="mail"></lucide-angular>\r
          Email da invitare\r
        </label>\r
        <input type="email"\r
               placeholder="nome@esempio.it"\r
               [(ngModel)]="newEmail" />\r
        <div *ngIf="error" class="info-message mt-sm"\r
             style="border-left-color: #ef4444; background: color-mix(in srgb, #ef4444 10%, transparent);">\r
          <lucide-angular name="circle-alert"></lucide-angular>\r
          {{ error }}\r
        </div>\r
      </div>\r
\r
      <button class="promethea-button" (click)="aggiungi()" [disabled]="loading">\r
        <lucide-angular name="user-plus"></lucide-angular>\r
        Aggiungi\r
      </button>\r
\r
      <!-- Divisore -->\r
      <div style="border-top: 1px solid var(--smoke-1); margin: var(--gap-sm) 0;"></div>\r
\r
      <!-- Lista inviti vuota -->\r
      <div *ngIf="inviti.length === 0"\r
           class="flex items-center gap-sm text-muted text-mini p-sm">\r
        <lucide-angular name="inbox"></lucide-angular>\r
        Nessun invito presente\r
      </div>\r
\r
      <!-- Lista inviti -->\r
      <div *ngFor="let i of inviti"\r
           class="flex justify-between items-center gap-sm p-sm rounded border transition hover-lift">\r
        <div class="flex flex-col gap-sm">\r
          <strong class="font-semibold">{{ i.email }}</strong>\r
          <span class="chip-mini">{{ i.created_at | date:'dd/MM/yyyy' }}</span>\r
        </div>\r
        <button class=icon-lucide\r
                (click)="rimuovi(i)"\r
                [disabled]="loading"\r
                aria-label="Rimuovi invito">\r
          <lucide-angular name="trash-2"></lucide-angular>\r
        </button>\r
      </div>\r
\r
    </div>\r
\r
  </div>\r
</div>` }]
  }], null, { companyId: [{
    type: Input
  }], closeModal: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvitiDipendentiComponent, { className: "InvitiDipendentiComponent", filePath: "src/app/timbrature/features/inviti-dipendenti/inviti-dipendenti.component.ts", lineNumber: 18 });
})();

export {
  InvitiDipendentiComponent
};
//# sourceMappingURL=chunk-JL2IQQA5.js.map
