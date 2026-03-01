import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  LoadingService
} from "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService,
  PermissionService,
  SupabaseService
} from "./chunk-JWP3QZ4U.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  ChangeDetectorRef,
  Component,
  Subscription,
  inject,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/staff-management/staff-management.ts
function StaffManagement_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", role_r1.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.staffByRole[role_r1.value] || 0);
  }
}
function StaffManagement_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "span", 7);
    \u0275\u0275text(4, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 8);
    \u0275\u0275text(6, "Totale Membri");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "span", 11);
    \u0275\u0275text(14, " schedule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h3", 8);
    \u0275\u0275text(16, "Inviti in Attesa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 5)(22, "div", 6)(23, "span", 7);
    \u0275\u0275text(24, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h3", 8);
    \u0275\u0275text(26, "Distribuzione Ruoli");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 13);
    \u0275\u0275template(28, StaffManagement_div_1_div_28_Template, 5, 2, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 5)(30, "div", 6)(31, "span", 7);
    \u0275\u0275text(32, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h3", 8);
    \u0275\u0275text(34, "Permessi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 9);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10);
    \u0275\u0275text(38, " Ruoli configurati ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.totalStaffMembers, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.activeStaffMembers, " attivi ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.pendingInvitations > 0 ? "#f59e0b" : "");
    \u0275\u0275classProp("text-primary", ctx_r1.pendingInvitations === 0);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.pendingInvitations > 0 ? "#f59e0b" : "");
    \u0275\u0275classProp("text-primary", ctx_r1.pendingInvitations === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pendingInvitations, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pendingInvitations === 0 ? "Nessun invito" : "Da confermare", " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.roleOptions);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.rolePermissions.length, "/4 ");
  }
}
function StaffManagement_div_2_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "L'email \xE8 obbligatoria");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Inserisci un'email valida");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, StaffManagement_div_2_div_14_span_1_Template, 2, 0, "span", 41)(2, StaffManagement_div_2_div_14_span_2_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.staffForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.staffForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function StaffManagement_div_2_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275property("value", role_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r4.label, " ");
  }
}
function StaffManagement_div_2_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Il ruolo \xE8 obbligatorio");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, StaffManagement_div_2_div_24_span_1_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.staffForm.get("role")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function StaffManagement_div_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleDisplayName((tmp_2_0 = ctx_r1.staffForm.get("role")) == null ? null : tmp_2_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleDescription((tmp_3_0 = ctx_r1.staffForm.get("role")) == null ? null : tmp_3_0.value));
  }
}
function StaffManagement_div_2_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Aggiunta in corso...");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Aggiungi Membro");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "span", 54);
    \u0275\u0275text(3, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 55);
    \u0275\u0275text(5, "Nessun membro dello staff");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 56);
    \u0275\u0275text(7, "Aggiungi il primo membro del team utilizzando il form sopra.");
    \u0275\u0275elementEnd()();
  }
}
function StaffManagement_div_2_div_53_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66);
    \u0275\u0275element(2, "lucide-angular", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68)(7, "span", 69)(8, "span", 11);
    \u0275\u0275text(9, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Invito in attesa ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r5.email);
  }
}
function StaffManagement_div_2_div_53_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 70)(2, "div", 71);
    \u0275\u0275element(3, "lucide-angular", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", member_r5.user.first_name, " ", member_r5.user.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r5.user.email);
  }
}
function StaffManagement_div_2_div_53_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "button", 75);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_53_div_1_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const member_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resendInvitation(member_r5));
    });
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Reinvia ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 76);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_53_div_1_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const member_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelInvitation(member_r5));
    });
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Annulla ");
    \u0275\u0275elementEnd()();
  }
}
function StaffManagement_div_2_div_53_div_1_div_5_div_1_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r8 = ctx.$implicit;
    \u0275\u0275property("value", role_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r8.label, " ");
  }
}
function StaffManagement_div_2_div_53_div_1_div_5_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275element(1, "lucide-angular", 83);
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_53_div_1_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "select", 80);
    \u0275\u0275listener("change", function StaffManagement_div_2_div_53_div_1_div_5_div_1_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const member_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRoleChangeAttempt(member_r5, $event));
    });
    \u0275\u0275template(2, StaffManagement_div_2_div_53_div_1_div_5_div_1_option_2_Template, 2, 2, "option", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StaffManagement_div_2_div_53_div_1_div_5_div_1_span_3_Template, 2, 0, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", member_r5.role)("disabled", ctx_r1.updatingRoles[member_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.roleOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.updatingRoles[member_r5.id]);
  }
}
function StaffManagement_div_2_div_53_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, StaffManagement_div_2_div_53_div_1_div_5_div_1_Template, 4, 4, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEditStaff(member_r5));
  }
}
function StaffManagement_div_2_div_53_div_1_div_6_button_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "delete");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_53_div_1_div_6_button_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_53_div_1_div_6_button_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Rimozione...");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_53_div_1_div_6_button_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Rimuovi");
    \u0275\u0275elementEnd();
  }
}
function StaffManagement_div_2_div_53_div_1_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_53_div_1_div_6_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const member_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeStaff(member_r5));
    });
    \u0275\u0275template(1, StaffManagement_div_2_div_53_div_1_div_6_button_1_span_1_Template, 2, 0, "span", 40)(2, StaffManagement_div_2_div_53_div_1_div_6_button_1_span_2_Template, 2, 0, "span", 40)(3, StaffManagement_div_2_div_53_div_1_div_6_button_1_span_3_Template, 2, 0, "span", 41)(4, StaffManagement_div_2_div_53_div_1_div_6_button_1_span_4_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.deletingMembers[member_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.deletingMembers[member_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletingMembers[member_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletingMembers[member_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.deletingMembers[member_r5.id]);
  }
}
function StaffManagement_div_2_div_53_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, StaffManagement_div_2_div_53_div_1_div_6_button_1_Template, 5, 5, "button", 85);
    \u0275\u0275elementStart(2, "button", 86);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_53_div_1_div_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const member_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showMemberDetails(member_r5));
    });
    \u0275\u0275element(3, "lucide-angular", 87);
    \u0275\u0275text(4, " Dettagli ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRemoveStaff(member_r5));
  }
}
function StaffManagement_div_2_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, StaffManagement_div_2_div_53_div_1_div_1_Template, 11, 2, "div", 60)(2, StaffManagement_div_2_div_53_div_1_div_2_Template, 8, 4, "div", 60);
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275template(4, StaffManagement_div_2_div_53_div_1_div_4_Template, 9, 0, "div", 62)(5, StaffManagement_div_2_div_53_div_1_div_5_Template, 2, 1, "div", 63)(6, StaffManagement_div_2_div_53_div_1_div_6_Template, 5, 1, "div", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("pending-invitation", ctx_r1.isPendingInvitation(member_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r5.invitation_status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r5.invitation_status === "accepted" && member_r5.user);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isPendingInvitation(member_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveMember(member_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActiveMember(member_r5));
  }
}
function StaffManagement_div_2_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, StaffManagement_div_2_div_53_div_1_Template, 7, 7, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.staffMembers);
  }
}
function StaffManagement_div_2_div_54_div_17_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "input", 104);
    \u0275\u0275listener("change", function StaffManagement_div_2_div_54_div_17_label_2_Template_input_change_1_listener($event) {
      const perm_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePermission("manager", perm_r13.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const perm_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isPermissionEnabled("manager", perm_r13.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(perm_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r13.description);
  }
}
function StaffManagement_div_2_div_54_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275template(2, StaffManagement_div_2_div_54_div_17_label_2_Template, 7, 3, "label", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("collapsed", ctx_r1.collapsedRoles["manager"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.permissionService.allPermissions);
  }
}
function StaffManagement_div_2_div_54_div_26_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 108)(1, "input", 104);
    \u0275\u0275listener("change", function StaffManagement_div_2_div_54_div_26_label_2_Template_input_change_1_listener($event) {
      const perm_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePermission("chef", perm_r15.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const perm_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isPermissionEnabled("chef", perm_r15.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(perm_r15.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r15.description);
  }
}
function StaffManagement_div_2_div_54_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 101);
    \u0275\u0275template(2, StaffManagement_div_2_div_54_div_26_label_2_Template, 7, 3, "label", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("collapsed", ctx_r1.collapsedRoles["chef"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.permissionService.allPermissions);
  }
}
function StaffManagement_div_2_div_54_div_34_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 108)(1, "input", 104);
    \u0275\u0275listener("change", function StaffManagement_div_2_div_54_div_34_label_2_Template_input_change_1_listener($event) {
      const perm_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePermission("waiter", perm_r17.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const perm_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isPermissionEnabled("waiter", perm_r17.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(perm_r17.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r17.description);
  }
}
function StaffManagement_div_2_div_54_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275template(2, StaffManagement_div_2_div_54_div_34_label_2_Template, 7, 3, "label", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@collapse", ctx_r1.collapsedRoles["waiter"] ? "collapsed" : "expanded");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.permissionService.allPermissions);
  }
}
function StaffManagement_div_2_div_54_div_43_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 108)(1, "input", 104);
    \u0275\u0275listener("change", function StaffManagement_div_2_div_54_div_43_label_2_Template_input_change_1_listener($event) {
      const perm_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePermission("kitchen_staff", perm_r19.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const perm_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isPermissionEnabled("kitchen_staff", perm_r19.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(perm_r19.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r19.description);
  }
}
function StaffManagement_div_2_div_54_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275template(2, StaffManagement_div_2_div_54_div_43_label_2_Template, 7, 3, "label", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@collapse", ctx_r1.collapsedRoles["kitchen_staff"] ? "collapsed" : "expanded");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.permissionService.allPermissions);
  }
}
function StaffManagement_div_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 6)(2, "span", 21);
    \u0275\u0275text(3, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 8);
    \u0275\u0275text(5, "Gestione Permessi Ruoli");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7, "Configura cosa pu\xF2 fare ogni ruolo nel tuo ristorante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 90)(9, "div", 91)(10, "button", 92);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_54_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoleCollapse("manager"));
    });
    \u0275\u0275elementStart(11, "h3", 93)(12, "span", 21);
    \u0275\u0275text(13, "supervisor_account");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 94);
    \u0275\u0275text(16, " keyboard_arrow_down ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, StaffManagement_div_2_div_54_div_17_Template, 3, 3, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 91)(19, "button", 92);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_54_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoleCollapse("chef"));
    });
    \u0275\u0275elementStart(20, "h3", 93)(21, "span", 21);
    \u0275\u0275text(22, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 94);
    \u0275\u0275text(25, " keyboard_arrow_down ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, StaffManagement_div_2_div_54_div_26_Template, 3, 3, "div", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 91)(28, "button", 92);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_54_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoleCollapse("waiter"));
    });
    \u0275\u0275elementStart(29, "h3", 93);
    \u0275\u0275element(30, "lucide-angular", 72);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 94);
    \u0275\u0275text(33, " keyboard_arrow_down ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, StaffManagement_div_2_div_54_div_34_Template, 3, 2, "div", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 91)(36, "button", 92);
    \u0275\u0275listener("click", function StaffManagement_div_2_div_54_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoleCollapse("kitchen_staff"));
    });
    \u0275\u0275elementStart(37, "h3", 93)(38, "span", 21);
    \u0275\u0275text(39, "kitchen");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 94);
    \u0275\u0275text(42, " keyboard_arrow_down ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, StaffManagement_div_2_div_54_div_43_Template, 3, 2, "div", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 98)(45, "p", 99);
    \u0275\u0275element(46, "lucide-angular", 87);
    \u0275\u0275text(47, " I permessi verranno applicati automaticamente ai nuovi membri dello staff ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleDisplayName("manager"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", !ctx_r1.collapsedRoles["manager"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.collapsedRoles["manager"]);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleDisplayName("chef"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", !ctx_r1.collapsedRoles["chef"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.collapsedRoles["chef"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleDisplayName("waiter"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", !ctx_r1.collapsedRoles["waiter"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.collapsedRoles["waiter"]);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleDisplayName("kitchen_staff"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", !ctx_r1.collapsedRoles["kitchen_staff"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.collapsedRoles["kitchen_staff"]);
  }
}
function StaffManagement_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "span", 21);
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 22);
    \u0275\u0275text(6, "Aggiungi Nuovo Membro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 23);
    \u0275\u0275listener("ngSubmit", function StaffManagement_div_2_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddStaff());
    });
    \u0275\u0275elementStart(8, "div", 24)(9, "div", 25)(10, "label", 26);
    \u0275\u0275element(11, "lucide-angular", 27);
    \u0275\u0275text(12, " Email * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 28);
    \u0275\u0275template(14, StaffManagement_div_2_div_14_Template, 3, 2, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25)(16, "label", 26)(17, "span", 11);
    \u0275\u0275text(18, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Ruolo * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 30)(21, "option", 31);
    \u0275\u0275text(22, "Seleziona un ruolo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, StaffManagement_div_2_option_23_Template, 2, 2, "option", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, StaffManagement_div_2_div_24_Template, 2, 1, "div", 29)(25, StaffManagement_div_2_div_25_Template, 5, 2, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 25)(27, "label", 34);
    \u0275\u0275element(28, "input", 35);
    \u0275\u0275elementStart(29, "div")(30, "strong");
    \u0275\u0275text(31, "Invia invito via email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 36);
    \u0275\u0275text(33, "Invia un'email di invito con le credenziali di accesso");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 37)(35, "button", 38);
    \u0275\u0275template(36, StaffManagement_div_2_span_36_Template, 2, 0, "span", 39)(37, StaffManagement_div_2_span_37_Template, 2, 0, "span", 40)(38, StaffManagement_div_2_span_38_Template, 2, 0, "span", 41)(39, StaffManagement_div_2_span_39_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 42);
    \u0275\u0275listener("click", function StaffManagement_div_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.staffForm.reset({ send_invitation: true }));
    });
    \u0275\u0275elementStart(41, "span", 11);
    \u0275\u0275text(42, "clear");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Pulisci ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 43)(45, "div", 6)(46, "span", 21);
    \u0275\u0275text(47, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "h2", 8);
    \u0275\u0275text(49, "Team del Ristorante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 44);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, StaffManagement_div_2_div_52_Template, 8, 0, "div", 45)(53, StaffManagement_div_2_div_53_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, StaffManagement_div_2_div_54_Template, 48, 17, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.staffForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-red-500", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-500", ctx_r1.isFieldInvalid("role"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.roleOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("role"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r1.staffForm.get("role")) == null ? null : tmp_8_0.value);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.staffForm.invalid || ctx_r1.addingStaff);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingStaff);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.addingStaff);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingStaff);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.addingStaff);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.addingStaff);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r1.staffMembers.length, " membri");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.staffMembers.length === 0 && !ctx_r1.loadingService.isLoadingSync());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.staffMembers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOwner);
  }
}
function StaffManagement_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 109)(2, "span", 110);
    \u0275\u0275text(3, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 111);
    \u0275\u0275text(5, "Accesso Negato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7, "Non hai i permessi per gestire il personale del ristorante.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9, "Solo il titolare e i responsabili possono accedere a questa sezione.");
    \u0275\u0275elementEnd()()();
  }
}
var StaffManagement = class _StaffManagement {
  supabase = inject(SupabaseService).getSupabaseClient();
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  permissionService = inject(PermissionService);
  loadingService = inject(LoadingService);
  cdr = inject(ChangeDetectorRef);
  // RUOLI
  isOwner = false;
  isManager = false;
  currentUserRole = null;
  authSubscription = new Subscription();
  staffForm;
  staffMembers = [];
  addingStaff = false;
  // Gestione ruoli Staff
  updatingRoles = {};
  deletingMembers = {};
  showPermissionsSection = false;
  savingPermissions = {};
  rolePermissions = [];
  roleOptions = [
    { value: "manager", label: "Responsabile", description: "Gestione completa eccetto eliminazioni" },
    { value: "chef", label: "Chef", description: "Cucina e ingredienti" },
    { value: "waiter", label: "Cameriere", description: "Prenotazioni e gestione tavoli" },
    { value: "kitchen_staff", label: "Dipendente di Cucina", description: "Supporto in cucina e preparazione" },
    { value: "social_media_manager", label: "Social Media Manager", description: "Gestione marketing, foto piatti e promozioni" }
  ];
  constructor() {
    this.staffForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      role: ["", Validators.required],
      send_invitation: [true]
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.updateAuthState();
      this.loadDataAsync();
    });
  }
  loadDataAsync() {
    return __async(this, null, function* () {
      this.loadingService.start();
      try {
        yield Promise.all([
          this.loadStaffMembers(),
          this.loadRolePermissions()
        ]);
      } catch (error) {
        console.error("Errore nel caricamento iniziale:", error);
      } finally {
        this.loadingService.stop();
        this.cdr.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
  updateAuthState() {
    this.isOwner = this.authService.isOwner();
    this.isManager = this.authService.isManager();
    this.currentUserRole = this.authService.getStaffRole();
    console.log("\u{1F504} StaffManagement Auth State Updated:", {
      isOwner: this.isOwner,
      isManager: this.isManager,
      currentUserRole: this.currentUserRole
    });
  }
  loadStaffMembers() {
    return __async(this, null, function* () {
      this.loadingService.start();
      try {
        const restaurantId = this.authService.getCurrentRestaurantId();
        if (!restaurantId) {
          console.error("Nessun ristorante associato");
          return;
        }
        console.log("\u{1F50D} Loading staff for restaurant:", restaurantId);
        const { data: staffData, error } = yield this.supabase.from("restaurant_staff").select(`
        *,
        user:users!restaurant_staff_user_id_fkey(
          id, first_name, last_name, email, phone
        ),
        inviter:users!restaurant_staff_invited_by_fkey(
          first_name, last_name
        )
      `).eq("restaurant_id", restaurantId).in("invitation_status", ["pending", "accepted"]).order("created_at", { ascending: false });
        if (error) {
          console.error("\u274C Error loading staff:", error);
          throw error;
        }
        const staffWithUsers = (staffData || []).map((staff) => __spreadProps(__spreadValues({}, staff), {
          user: staff.user || null,
          inviter: staff.inviter || null
        }));
        console.log("\u2705 Staff loaded with users:", staffWithUsers.length);
        this.staffMembers = staffWithUsers;
      } catch (error) {
        console.error("Error loading staff members:", error);
        alert("Errore nel caricamento del personale: " + error.message);
      } finally {
        this.loadingService.stop();
      }
    });
  }
  getRolePermissions(role) {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      if (!restaurantId) {
        return this.permissionService.getDefaultPermissionsForRole(role);
      }
      try {
        const { data, error } = yield this.supabase.from("restaurant_role_permissions").select("permissions").eq("restaurant_id", restaurantId).eq("role", role).single();
        if (error) {
          if (error.code === "PGRST116") {
            return this.permissionService.getDefaultPermissionsForRole(role);
          }
          throw error;
        }
        return data?.permissions || this.permissionService.getDefaultPermissionsForRole(role);
      } catch (error) {
        console.error("Error getting role permissions:", error);
        return this.permissionService.getDefaultPermissionsForRole(role);
      }
    });
  }
  getPermissionsStatus() {
    console.log("\u{1F50D} DEBUG Permissions Status:");
    console.log(" - Restaurant ID:", this.authService.getCurrentRestaurantId());
    console.log(" - Role Permissions loaded:", this.rolePermissions.length);
    this.rolePermissions.forEach((rp) => {
      console.log(`   - ${rp.role}:`, rp.permissions);
    });
  }
  updateExistingStaffPermissions(role) {
    return __async(this, null, function* () {
      if (!confirm(`Vuoi applicare i nuovi permessi a tutti i membri esistenti con ruolo "${this.getRoleDisplayName(role)}"?`)) {
        return;
      }
      const restaurantId = this.authService.getCurrentRestaurantId();
      if (!restaurantId)
        return;
      try {
        const rolePermission = this.rolePermissions.find((p) => p.role === role);
        if (!rolePermission)
          return;
        const { error } = yield this.supabase.from("restaurant_staff").update({
          permissions: rolePermission.permissions,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("restaurant_id", restaurantId).eq("role", role).eq("invitation_status", "accepted");
        if (error)
          throw error;
        yield this.authService.loadPermissions();
        alert(`Permessi aggiornati per tutti i membri con ruolo ${this.getRoleDisplayName(role)}`);
      } catch (error) {
        console.error("Error updating staff permissions:", error);
        alert("Errore nell'aggiornamento dei permessi: " + error.message);
      }
    });
  }
  generateToken() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  getRoleDisplayName(role) {
    const roleNames = {
      "manager": "Responsabile",
      "chef": "Chef",
      "waiter": "Cameriere",
      "kitchen_staff": "Staff Cucina",
      "social_media_manager": "Social Media Manager"
    };
    return roleNames[role] || role;
  }
  getRoleDescription(role) {
    const descriptions = {
      "owner": "Accesso completo a tutte le funzionalit\xE0",
      "manager": "Gestione completa eccetto eliminazioni definitive",
      "chef": "Gestione cucina, ingredienti e inventario",
      "waiter": "Gestione prenotazioni, tavoli e ordini",
      "kitchen_staff": "Visualizzazione ordini in cucina",
      "social_media_manager": "Gestione marketing, foto piatti e promozioni social"
    };
    return descriptions[role] || "Ruolo del personale";
  }
  markFormGroupTouched() {
    Object.keys(this.staffForm.controls).forEach((key) => {
      const control = this.staffForm.get(key);
      control?.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.staffForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  // Aggiungi questo metodo al tuo StaffManagementComponent
  ngAfterViewInit() {
    console.log("\u{1F50D} DEBUG Staff Management:");
    console.log(" - Utente autenticato:", this.authService.isAuthenticated());
    console.log(" - Utente ristorante:", this.authService.isRestaurantUser());
    console.log(" - Ruolo staff:", this.authService.getStaffRole());
    console.log(" - isOwner():", this.authService.isOwner());
    console.log(" - isManager():", this.authService.isManager());
    console.log(" - Staff record:", this.authService.getCurrentStaff());
    console.log(" - Restaurant ID:", this.authService.getCurrentRestaurantId());
  }
  canEditStaff(member) {
    const isOwner = this.authService.isOwner();
    const currentUserRole = this.authService.getStaffRole();
    const currentUserId = this.authService.currentUserValue?.id;
    if (member.user_id === currentUserId) {
      return false;
    }
    if (isOwner)
      return true;
    if (currentUserRole === "manager") {
      return member.role !== "manager";
    }
    return false;
  }
  canRemoveStaff(member) {
    const isOwner = this.authService.isOwner();
    const currentUserRole = this.authService.getStaffRole();
    const currentUserId = this.authService.currentUserValue?.id;
    if (member.user_id === currentUserId) {
      return false;
    }
    if (isOwner) {
      return true;
    }
    if (currentUserRole === "manager") {
      return ["chef", "waiter", "kitchen_staff", "social_media_manager"].includes(member.role);
    }
    return false;
  }
  handleError(error, defaultMessage) {
    console.error("Staff Management Error:", error);
    if (error?.code === "23503") {
      alert("Impossibile completare l'operazione: esistono dati collegati a questo membro dello staff.");
    } else if (error?.message) {
      alert("Errore: " + error.message);
    } else {
      alert(defaultMessage);
    }
  }
  // Aggiungi questi metodi per gestire lo stato degli inviti
  isPendingInvitation(member) {
    return member.invitation_status === "pending";
  }
  isActiveMember(member) {
    return member.invitation_status === "accepted";
  }
  getInvitationStatusDisplay(status) {
    const statusMap = {
      "pending": "In attesa",
      "accepted": "Accettato",
      "active": "Attivo",
      "expired": "Scaduto"
    };
    return statusMap[status] || status;
  }
  // Metodo per reinviare l'invito
  resendInvitation(member) {
    return __async(this, null, function* () {
      try {
        console.log(`Reinvio invito a ${member.email}`);
        alert("Invito reinviato (funzionalit\xE0 email da implementare)");
      } catch (error) {
        console.error("Error resending invitation:", error);
        alert("Errore: " + error.message);
      }
    });
  }
  // Metodo per annullare l'invito
  cancelInvitation(member) {
    return __async(this, null, function* () {
      if (!confirm(`Sei sicuro di voler annullare l'invito per ${member.email}?`)) {
        return;
      }
      try {
        const { error } = yield this.supabase.from("restaurant_staff").delete().eq("id", member.id);
        if (error)
          throw error;
        yield this.loadStaffMembers();
        alert("Invito annullato con successo!");
      } catch (error) {
        console.error("Error canceling invitation:", error);
        alert("Errore: " + error.message);
      }
    });
  }
  // PERMESSI
  togglePermission(role, permissionKey, event) {
    return __async(this, null, function* () {
      const checked = event.target.checked;
      const rolePermission = this.rolePermissions.find((p) => p.role === role);
      if (!rolePermission)
        return;
      this.savingPermissions[role] = true;
      let newPermissions = [...rolePermission.permissions];
      if (checked) {
        if (!newPermissions.includes(permissionKey)) {
          newPermissions.push(permissionKey);
        }
      } else {
        newPermissions = newPermissions.filter((p) => p !== permissionKey);
      }
      try {
        yield this.updateRolePermissions(role, newPermissions);
      } catch (error) {
        event.target.checked = !checked;
        console.error("Errore nel salvataggio del permesso:", error);
      } finally {
        this.savingPermissions[role] = false;
      }
    });
  }
  updateRolePermissions(role, permissions) {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      if (!restaurantId) {
        console.error("Nessun restaurantId trovato");
        return false;
      }
      try {
        const { data: existingRecord, error: searchError } = yield this.supabase.from("restaurant_role_permissions").select("id").eq("restaurant_id", restaurantId).eq("role", role).single();
        let result;
        if (searchError && searchError.code !== "PGRST116") {
          throw searchError;
        }
        if (existingRecord) {
          result = yield this.supabase.from("restaurant_role_permissions").update({
            permissions,
            updated_at: (/* @__PURE__ */ new Date()).toISOString()
          }).eq("id", existingRecord.id);
        } else {
          result = yield this.supabase.from("restaurant_role_permissions").insert({
            restaurant_id: restaurantId,
            role,
            permissions,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            updated_at: (/* @__PURE__ */ new Date()).toISOString()
          });
        }
        if (result.error)
          throw result.error;
        const { error: updateError } = yield this.supabase.from("restaurant_staff").update({
          permissions,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("restaurant_id", restaurantId).eq("role", role).eq("invitation_status", "accepted");
        if (updateError) {
          console.warn(`\u26A0\uFE0F Non tutti i permessi sono stati aggiornati: ${updateError.message}`);
        }
        if (this.authService.getStaffRole() === role) {
          yield this.authService.reloadCurrentUserPermissions();
        } else {
          yield this.loadRolePermissions();
        }
        console.log(`\u2705 Permessi aggiornati per ${role}:`, permissions);
        return true;
      } catch (err) {
        console.error("\u274C Errore aggiornamento permessi:", err);
        alert("Errore nel salvataggio dei permessi: " + err.message);
        return false;
      }
    });
  }
  isPermissionEnabled(role, permissionKey) {
    const rolePermission = this.rolePermissions.find((p) => p.role === role);
    return rolePermission?.permissions.includes(permissionKey) || false;
  }
  loadRolePermissions() {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      if (!restaurantId)
        return;
      try {
        const { data, error } = yield this.supabase.from("restaurant_role_permissions").select("*").eq("restaurant_id", restaurantId);
        if (error)
          throw error;
        if (data && data.length > 0) {
          this.rolePermissions = data;
        } else {
          const defaultPerms = this.roleOptions.map((opt) => ({
            restaurant_id: restaurantId,
            role: opt.value,
            permissions: this.permissionService.getDefaultPermissionsForRole(opt.value),
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            updated_at: (/* @__PURE__ */ new Date()).toISOString()
          }));
          this.rolePermissions = defaultPerms;
          if (this.authService.isOwner()) {
            this.createDefaultPermissions().catch((err) => console.error("Errore salvataggio permessi default:", err));
          }
        }
      } catch (err) {
        console.error("Errore caricamento permessi:", err);
        this.rolePermissions = this.roleOptions.map((opt) => ({
          restaurant_id: restaurantId,
          role: opt.value,
          permissions: this.permissionService.getDefaultPermissionsForRole(opt.value),
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }));
      }
    });
  }
  createDefaultPermissions() {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      if (!restaurantId || !this.authService.isOwner())
        return;
      try {
        const records = this.roleOptions.map((opt) => ({
          restaurant_id: restaurantId,
          role: opt.value,
          permissions: this.permissionService.getDefaultPermissionsForRole(opt.value),
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }));
        const { error } = yield this.supabase.from("restaurant_role_permissions").upsert(records, {
          onConflict: "restaurant_id, role",
          ignoreDuplicates: false
        });
        if (error)
          throw error;
        yield this.loadRolePermissions();
      } catch (err) {
        console.error("Errore creazione permessi predefiniti:", err);
        if (err?.status === 403 || err?.code === "42501") {
          console.warn("Permessi insufficienti per salvare i permessi globali (normale per manager)");
        }
      }
    });
  }
  // Arrow down
  collapsedRoles = {
    manager: true,
    chef: true,
    waiter: true,
    kitchen_staff: true,
    social_media_manager: true
  };
  // Metodo per toggle
  toggleRoleCollapse(roleKey) {
    this.collapsedRoles[roleKey] = !this.collapsedRoles[roleKey];
  }
  // GESTIONE RUOLI
  onAddStaff() {
    return __async(this, null, function* () {
      if (this.staffForm.invalid)
        return;
      this.loadingService.start();
      this.addingStaff = true;
      try {
        const formValue = this.staffForm.value;
        const restaurantId = this.authService.getCurrentRestaurantId();
        const currentUser = this.authService.currentUserValue;
        if (!restaurantId || !currentUser) {
          throw new Error("Ristorante o utente non trovato");
        }
        const { data: existingInvite } = yield this.supabase.from("restaurant_staff").select("id").eq("restaurant_id", restaurantId).eq("email", formValue.email.toLowerCase().trim()).eq("invitation_status", "pending").single();
        if (existingInvite) {
          throw new Error("Esiste gi\xE0 un invito pendente per questa email");
        }
        const { error } = yield this.supabase.from("restaurant_staff").insert({
          restaurant_id: restaurantId,
          email: formValue.email.toLowerCase().trim(),
          role: formValue.role,
          // Type assertion qui
          invitation_status: "pending",
          invitation_token: this.generateToken(),
          invitation_expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString(),
          invited_by: currentUser.id,
          permissions: yield this.getRolePermissions(formValue.role)
        });
        if (error)
          throw error;
        alert("Invito creato con successo!");
        this.staffForm.reset();
        yield this.loadStaffMembers();
      } catch (error) {
        alert("Errore: " + error.message);
        console.error("Error in onAddStaff:", error);
      } finally {
        this.addingStaff = false;
        this.loadingService.stop();
      }
    });
  }
  // Metodo per gestire il tentativo di cambio ruolo
  onRoleChangeAttempt(member, event) {
    const selectElement = event.target;
    const newRole = selectElement.value;
    console.log("\u{1F50D} DEBUG onRoleChangeAttempt:", {
      memberId: member.id,
      currentRole: member.role,
      // Ruolo VECCHIO
      newRole,
      // Ruolo NUOVO
      user: member.user
    });
    if (member.role === newRole) {
      return;
    }
    const oldRole = member.role;
    const memberName = member.user ? `${member.user.first_name} ${member.user.last_name}` : member.email;
    const oldRoleDisplay = this.getRoleDisplayName(oldRole);
    const newRoleDisplay = this.getRoleDisplayName(newRole);
    console.log("\u{1F50D} Ruoli per conferma:", {
      oldRole,
      oldRoleDisplay,
      newRole,
      newRoleDisplay
    });
    if (confirm(`Sei sicuro di voler cambiare il ruolo di ${memberName} da "${oldRoleDisplay}" a "${newRoleDisplay}"?`)) {
      this.updateStaffRole(member, newRole, oldRole);
    } else {
      selectElement.value = oldRole;
    }
  }
  updateStaffRole(member, newRole, oldRole) {
    return __async(this, null, function* () {
      console.log("\u{1F50D} DEBUG updateStaffRole:", {
        memberId: member.id,
        oldRole,
        newRole,
        currentMemberRole: member.role
      });
      if (!this.canEditStaff(member)) {
        alert("Non hai i permessi per modificare questo membro dello staff");
        return;
      }
      this.updatingRoles[member.id] = true;
      try {
        const { error } = yield this.supabase.from("restaurant_staff").update({
          role: newRole,
          permissions: yield this.getRolePermissions(newRole),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", member.id);
        if (error)
          throw error;
        const memberIndex = this.staffMembers.findIndex((m) => m.id === member.id);
        if (memberIndex !== -1) {
          this.staffMembers[memberIndex] = __spreadProps(__spreadValues({}, this.staffMembers[memberIndex]), {
            role: newRole
          });
          this.staffMembers = [...this.staffMembers];
        }
        yield this.authService.refreshPermissions();
        const memberName = member.user ? `${member.user.first_name} ${member.user.last_name}` : member.email;
        console.log(`\u2705 Ruolo aggiornato: ${memberName} -> ${newRole}`);
        alert(`Ruolo di ${memberName} aggiornato con successo da "${this.getRoleDisplayName(oldRole)}" a "${this.getRoleDisplayName(newRole)}"!`);
      } catch (error) {
        console.error("\u274C Error updating staff role:", error);
        yield this.loadStaffMembers();
        alert("Errore nell'aggiornamento del ruolo: " + error.message);
      } finally {
        this.updatingRoles[member.id] = false;
      }
    });
  }
  removeStaff(member) {
    return __async(this, null, function* () {
      if (!this.canRemoveStaff(member)) {
        alert("Non hai i permessi per rimuovere questo membro dello staff");
        return;
      }
      const memberName = member.user ? `${member.user.first_name} ${member.user.last_name}` : member.email;
      if (!confirm(`Sei sicuro di voler rimuovere ${memberName} dallo staff?

Questa azione non pu\xF2 essere annullata.`)) {
        return;
      }
      this.deletingMembers[member.id] = true;
      try {
        const { error } = yield this.supabase.from("restaurant_staff").delete().eq("id", member.id);
        if (error)
          throw error;
        this.staffMembers = this.staffMembers.filter((m) => m.id !== member.id);
        alert("Membro rimosso con successo dallo staff!");
      } catch (error) {
        console.error("Error removing staff:", error);
        alert("Errore: " + error.message);
      } finally {
        this.deletingMembers[member.id] = false;
      }
    });
  }
  showMemberDetails(member) {
    const memberName = member.user ? `${member.user.first_name} ${member.user.last_name}` : member.email;
    const details = `
  Nome: ${memberName}
  Email: ${member.user?.email || member.email}
  Ruolo: ${this.getRoleDisplayName(member.role)}
  Stato: ${this.getInvitationStatusDisplay(member.invitation_status)}
  Data aggiunta: ${new Date(member.created_at).toLocaleDateString("it-IT")}
  ${member.inviter ? `Invitato da: ${member.inviter.first_name} ${member.inviter.last_name}` : ""}
    `.trim();
    alert(details);
  }
  // Metodo helper per verificare se l'utente corrente sta modificando se stesso
  isEditingSelf(member) {
    return member.user_id === this.authService.currentUserValue?.id;
  }
  applyPermissionsToExisting() {
    return __async(this, null, function* () {
      if (!confirm("Applicare i permessi modificati a tutti i membri dello staff?"))
        return;
      try {
        for (const rolePerm of this.rolePermissions) {
          const { error } = yield this.supabase.from("restaurant_staff").update({
            permissions: rolePerm.permissions,
            updated_at: (/* @__PURE__ */ new Date()).toISOString()
          }).eq("restaurant_id", this.authService.getCurrentRestaurantId()).eq("role", rolePerm.role).eq("invitation_status", "accepted");
          if (error)
            console.warn(`\u26A0\uFE0F Errore per ${rolePerm.role}:`, error.message);
        }
        alert("Permessi applicati a tutto lo staff!");
        yield this.authService.refreshPermissions();
      } catch (error) {
        console.error("Errore applicazione permessi:", error);
      }
    });
  }
  // Aggiungi questi metodi dopo ngOnDestroy e prima di updateAuthState
  get totalStaffMembers() {
    return this.staffMembers.length;
  }
  get activeStaffMembers() {
    return this.staffMembers.filter((member) => member.invitation_status === "accepted").length;
  }
  get pendingInvitations() {
    return this.staffMembers.filter((member) => member.invitation_status === "pending").length;
  }
  get staffByRole() {
    const roleCount = {
      manager: 0,
      chef: 0,
      waiter: 0,
      kitchen_staff: 0,
      social_media_manager: 0
    };
    this.staffMembers.filter((m) => m.invitation_status === "accepted").forEach((member) => {
      if (roleCount[member.role] !== void 0) {
        roleCount[member.role]++;
      }
    });
    return roleCount;
  }
  static \u0275fac = function StaffManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffManagement, selectors: [["app-staff-management"]], decls: 4, vars: 3, consts: [[1, "page-container"], ["class", "grid-cards p-sm mb-sm", "data-tutorial", "staff-card", 4, "ngIf"], ["class", "flex flex-col gap-md", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["data-tutorial", "staff-card", 1, "grid-cards", "p-sm", "mb-sm"], [1, "card", "transition", "hover-lift"], [1, "flex", "items-center", "gap-sm", "mb-md"], [1, "material-icons", "text-primary"], [1, "text-md", "font-semibold", "m-0"], [1, "text-lg", "font-bold", "text-primary", "flex", "justify-center"], [1, "text-muted", "text-center", "mt-sm"], [1, "material-icons"], [1, "text-lg", "font-bold", "flex", "justify-center"], [1, "flex", "flex-col", "gap-mini", "mt-sm"], ["class", "flex justify-between items-center", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center"], [1, "text-mini"], [1, "font-bold"], [1, "flex", "flex-col", "gap-md"], ["data-tutorial", "staff-add", 1, "form-card"], [1, "flex", "items-center", "gap-sm", "mb-lg"], [1, "material-icons", "text-md"], [1, "text-md", "font-semibold"], [1, "flex", "flex-col", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", "mb-md"], [1, "standard-label"], ["name", "mail", 1, "nav-icon", 3, "size"], ["type", "email", "formControlName", "email", "placeholder", "mario.rossi@example.com"], ["class", "text-red-500 text-sm", 4, "ngIf"], ["formControlName", "role"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "p-md mt-sm bg-smoke rounded border", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "cursor-pointer", "p-sm", "rounded", "transition", "hover:bg-[var(--smoke-1)]"], ["type", "checkbox", "formControlName", "send_invitation"], [1, "text-muted"], [1, "modal-footer", "w-100"], ["type", "submit", 1, "promethea-button", 3, "disabled"], ["class", "material-icons text-md mt-sm", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "promethea-button", "ghost", 3, "click", "disabled"], ["data-tutorial", "staff-table", 1, "form-card"], [1, "chip"], ["class", "empty-state", 4, "ngIf"], ["class", "grid-form", 4, "ngIf"], ["class", "form-card", "data-tutorial", "staff-permissions", 4, "ngIf"], [1, "text-red-500", "text-sm"], [3, "value"], [1, "p-md", "mt-sm", "bg-smoke", "rounded", "border"], [1, "material-icons", "text-md", "mt-sm"], [1, "empty-state"], [1, "flex", "gap-md", "justify-center", "mt-lg"], [1, "material-icons", "text-6xl", "text-muted", "mb-4"], [1, "font-semibold", "mb-md"], [1, "text-muted", "flex", "justify-center"], [1, "grid-form"], ["class", "card", 3, "pending-invitation", 4, "ngFor", "ngForOf"], [1, "card"], ["class", "staff-info", 4, "ngIf"], [1, "staff-member"], ["class", "action-group", 4, "ngIf"], ["class", "role-selector", 4, "ngIf"], ["class", "modal-footer p-md0", 4, "ngIf"], [1, "staff-info"], [1, "avatartondo", "pending"], [1, "staff-details"], [1, "flex", "gap-sm", "mb-sm"], [1, "staff-status", "pending"], [1, "flex", "gap-sm", "items-center"], [1, "avatartondo"], ["name", "user", 1, "nav-icon", 3, "size"], [1, "font-semibold"], [1, "action-group"], ["title", "Reinvia invito", 1, "promethea-button", 3, "click"], ["title", "Annulla invito", 1, "promethea-button", "ghost", 3, "click"], [1, "role-selector"], ["style", "width: 100%;", 4, "ngIf"], [2, "width", "100%"], [1, "form-select", 3, "change", "ngModel", "disabled"], ["class", "loading-spinner", 4, "ngIf"], [1, "loading-spinner"], ["name", "refresh-cw"], [1, "modal-footer", "p-md0"], ["class", "promethea-button", "title", "Rimuovi membro", 3, "disabled", "click", 4, "ngIf"], ["title", "Dettagli membro", 1, "promethea-button", "ghost", 3, "click"], ["name", "info"], ["title", "Rimuovi membro", 1, "promethea-button", 3, "click", "disabled"], ["data-tutorial", "staff-permissions", 1, "form-card"], [1, "flex", "flex-col", "gap-lg", "mt-lg"], [1, "role-permissions-accordion", "rounded-lg", "overflow-hidden"], [1, "icon-button", "bottone-ruolo", 3, "click"], [1, "flex", "items-center", "gap-sm", "font-bold", "m-0", "text-md"], [1, "material-icons", "transition-transform", "duration-200"], ["class", "mt-sm", 3, "collapsed", 4, "ngIf"], ["class", "mt-sm collapse-section", 3, "collapsed", 4, "ngIf"], ["class", "mt-sm", 4, "ngIf"], [1, "mt-lg", "pt-md", "border-t"], [1, "text-muted", "text-center"], [1, "mt-sm"], [1, "grid-cards", "p-md", "bg-smoke", "rounded"], ["class", "flex items-center gap-sm cursor-pointer p-sm rounded transition", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-sm", "cursor-pointer", "p-sm", "rounded", "transition"], ["type", "checkbox", 3, "change", "checked"], [1, "text-muted", "text-mini"], [1, "mt-sm", "collapse-section"], ["class", "flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-2)]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-sm", "cursor-pointer", "p-sm", "rounded", "transition", "hover:bg-[var(--smoke-2)]"], [1, "text-center", "p-xl", "opacity-70"], [1, "material-icons", "text-6xl"], [1, "text-md", "font-semibold", "mt-4"]], template: function StaffManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StaffManagement_div_1_Template, 39, 14, "div", 1)(2, StaffManagement_div_2_Template, 55, 20, "div", 2)(3, StaffManagement_div_3_Template, 10, 0, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOwner || ctx.isManager);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOwner || ctx.isManager);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.isOwner || ctx.isManager));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.pending-invitation[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--secondary) 5%, transparent);\n}\n.staff-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  width: 100%;\n}\n.avatartondo.pending[_ngcontent-%COMP%] {\n  background: var(--smoke-3);\n  color: var(--tertiary);\n}\n.staff-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.staff-member[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  padding: 0;\n  width: 100%;\n  margin-top: var(--gap-md);\n}\n.staff-status.pending[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--secondary) 20%, transparent);\n  color: var(--secondary);\n}\n.action-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n}\n.bottone-ruolo[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: var(--gap-sm) var(--gap-md);\n}\n@media (max-width: 768px) {\n  .staff-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-md);\n  }\n  .staff-actions[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n.permission-section[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  overflow: hidden;\n  max-height: 500px;\n  opacity: 1;\n}\n.permission-section.collapsed[_ngcontent-%COMP%] {\n  max-height: 0;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=staff-management.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffManagement, [{
    type: Component,
    args: [{ selector: "app-staff-management", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <!-- STATISTICS CARDS -->\r
  <div class="grid-cards p-sm mb-sm" *ngIf="isOwner || isManager" data-tutorial="staff-card">\r
    <!-- Card 1: Totale Membri -->\r
    <div class="card transition hover-lift">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary">groups</span>\r
        <h3 class="text-md font-semibold m-0">Totale Membri</h3>\r
      </div>\r
      <div class="text-lg font-bold text-primary flex justify-center">\r
        {{ totalStaffMembers }}\r
      </div>\r
      <div class="text-muted text-center mt-sm">\r
        {{ activeStaffMembers }} attivi\r
      </div>\r
    </div>\r
    \r
    <!-- Card 2: Inviti in Attesa -->\r
    <div class="card transition hover-lift">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons" \r
              [class.text-primary]="pendingInvitations === 0"\r
              [style.color]="pendingInvitations > 0 ? '#f59e0b' : ''">\r
          schedule\r
        </span>\r
        <h3 class="text-md font-semibold m-0">Inviti in Attesa</h3>\r
      </div>\r
      <div class="text-lg font-bold flex justify-center"\r
           [class.text-primary]="pendingInvitations === 0"\r
           [style.color]="pendingInvitations > 0 ? '#f59e0b' : ''">\r
        {{ pendingInvitations }}\r
      </div>\r
      <div class="text-muted text-center mt-sm">\r
        {{ pendingInvitations === 0 ? 'Nessun invito' : 'Da confermare' }}\r
      </div>\r
    </div>\r
    \r
    <!-- Card 3: Distribuzione Ruoli -->\r
    <div class="card transition hover-lift">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary">badge</span>\r
        <h3 class="text-md font-semibold m-0">Distribuzione Ruoli</h3>\r
      </div>\r
      <div class="flex flex-col gap-mini mt-sm">\r
        <div class="flex justify-between items-center" \r
             *ngFor="let role of roleOptions">\r
          <span class="text-mini">{{ role.label }}:</span>\r
          <span class="font-bold">{{ staffByRole[role.value] || 0 }}</span>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <!-- Card 4: Stato Sistema (opzionale) -->\r
    <div class="card transition hover-lift">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-primary">admin_panel_settings</span>\r
        <h3 class="text-md font-semibold m-0">Permessi</h3>\r
      </div>\r
      <div class="text-lg font-bold text-primary flex justify-center">\r
        {{ rolePermissions.length }}/4\r
      </div>\r
      <div class="text-muted text-center mt-sm">\r
        Ruoli configurati\r
      </div>\r
    </div>\r
  </div>\r
\r
\r
  <!-- SOLO OWNER E MANAGER POSSONO GESTIRE LO STAFF -->\r
  <div class="flex flex-col gap-md" *ngIf="isOwner || isManager">\r
    \r
    <!-- FORM PER AGGIUNGERE NUOVO STAFF -->\r
    <div class="form-card" data-tutorial="staff-add">\r
      <div class="flex items-center gap-sm mb-lg">\r
        <span class="material-icons text-md">person_add</span>\r
        <h2 class="text-md font-semibold ">Aggiungi Nuovo Membro</h2>\r
      </div>\r
      \r
      <form [formGroup]="staffForm" (ngSubmit)="onAddStaff()" class="flex flex-col">\r
        <div class="form-row">\r
          <!-- EMAIL -->\r
          <div class="form-group mb-md">\r
            <label class="standard-label">\r
              <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
              Email *\r
            </label>\r
            <input \r
              type="email" \r
              formControlName="email" \r
              placeholder="mario.rossi@example.com" \r
              [class.border-red-500]="isFieldInvalid('email')"\r
            />\r
            <div *ngIf="isFieldInvalid('email')" class="text-red-500 text-sm">\r
              <span *ngIf="staffForm.get('email')?.errors?.['required']">L'email \xE8 obbligatoria</span>\r
              <span *ngIf="staffForm.get('email')?.errors?.['email']">Inserisci un'email valida</span>\r
            </div>\r
          </div>\r
\r
          <!-- RUOLO -->\r
          <div class="form-group mb-md">\r
            <label class="standard-label">\r
              <span class="material-icons">badge</span>\r
              Ruolo *\r
            </label>\r
            <select \r
              formControlName="role" \r
              [class.border-red-500]="isFieldInvalid('role')"\r
            >\r
              <option value="">Seleziona un ruolo</option>\r
              <option *ngFor="let role of roleOptions" [value]="role.value">\r
                {{ role.label }}\r
              </option>\r
            </select>\r
            <div *ngIf="isFieldInvalid('role')" class="text-red-500 text-sm">\r
              <span *ngIf="staffForm.get('role')?.errors?.['required']">Il ruolo \xE8 obbligatorio</span>\r
            </div>\r
            \r
            <!-- DESCRIZIONE RUOLO SELEZIONATO -->\r
            <div *ngIf="staffForm.get('role')?.value" class="p-md mt-sm bg-smoke rounded border">\r
              <strong>{{ getRoleDisplayName(staffForm.get('role')?.value) }}</strong>\r
              <p>{{ getRoleDescription(staffForm.get('role')?.value) }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- INVITO EMAIL -->\r
        <div class="form-group mb-md">\r
          <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-1)]">\r
            <input type="checkbox" formControlName="send_invitation" />\r
            <div>\r
              <strong>Invia invito via email</strong>\r
              <div class="text-muted">Invia un'email di invito con le credenziali di accesso</div>\r
            </div>\r
          </label>\r
        </div>\r
\r
        <!-- AZIONI FORM -->\r
        <div class="modal-footer w-100">\r
          <button \r
            type="submit" \r
            [disabled]="staffForm.invalid || addingStaff" \r
            class="promethea-button"\r
          >\r
            <span class="material-icons text-md mt-sm" *ngIf="addingStaff">sync</span>\r
            <span class="material-icons" *ngIf="!addingStaff">person_add</span>\r
            <span *ngIf="addingStaff">Aggiunta in corso...</span>\r
            <span *ngIf="!addingStaff">Aggiungi Membro</span>\r
          </button>\r
          \r
          <button \r
            type="button" \r
            (click)="staffForm.reset({ send_invitation: true })" \r
            class="promethea-button ghost"\r
            [disabled]="addingStaff"\r
          >\r
            <span class="material-icons">clear</span>\r
            Pulisci\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- LISTA STAFF ESISTENTE -->\r
    <div class="form-card" data-tutorial="staff-table">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">list</span>\r
        <h2 class="text-md font-semibold m-0">Team del Ristorante</h2>\r
        <span class="chip">{{ staffMembers.length }} membri</span>\r
      </div>\r
\r
        <div *ngIf="staffMembers.length === 0 && !loadingService.isLoadingSync()" class="empty-state">\r
          <div class="flex gap-md justify-center mt-lg">\r
          <span class="material-icons text-6xl text-muted mb-4">group_off</span>\r
          <h3 class="font-semibold mb-md">Nessun membro dello staff</h3>\r
        </div>\r
        <p class="text-muted flex justify-center">Aggiungi il primo membro del team utilizzando il form sopra.</p>\r
      </div>\r
\r
      <div *ngIf="staffMembers.length > 0" class="grid-form">\r
        <div *ngFor="let member of staffMembers" \r
        class="card" \r
        [class.pending-invitation]="isPendingInvitation(member)">\r
          \r
          <!-- INVITO PENDENTE -->\r
          <div *ngIf="member.invitation_status === 'pending'" class="staff-info">\r
            <div class="avatartondo pending">\r
              <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
            </div>\r
            <div class="staff-details">\r
              <div class="text-muted">{{ member.email }}</div>\r
              <div class="flex gap-sm mb-sm">\r
                <span class="staff-status pending">\r
                  <span class="material-icons">schedule</span>\r
                  Invito in attesa\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- MEMBRO ATTIVO -->\r
          <div *ngIf="member.invitation_status === 'accepted' && member.user" class="staff-info">\r
            <div class="flex gap-sm items-center">\r
            <div class="avatartondo">\r
              <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
            </div>\r
              <div class="font-semibold">{{ member.user.first_name }} {{ member.user.last_name }}</div>\r
            </div>\r
            <div class="text-muted">{{ member.user.email }}</div>\r
          </div>\r
\r
          <!-- AZIONI -->\r
          <div class="staff-member">\r
            <!-- AZIONI PER INVITI PENDENTI -->\r
            <div *ngIf="isPendingInvitation(member)" class="action-group">\r
              <button \r
                (click)="resendInvitation(member)" \r
                class="promethea-button"\r
                title="Reinvia invito"\r
              >\r
                <span class="material-icons">send</span>\r
                Reinvia\r
              </button>\r
              <button \r
                (click)="cancelInvitation(member)" \r
                class="promethea-button ghost"\r
                title="Annulla invito"\r
              >\r
                <span class="material-icons">cancel</span>\r
                Annulla\r
              </button>\r
            </div>\r
\r
            <!-- AZIONI PER MEMBRI ATTIVI -->\r
            <div *ngIf="isActiveMember(member)" class="role-selector">\r
              <!-- MODIFICA RUOLO -->\r
              <div style="width: 100%;" *ngIf="canEditStaff(member)">\r
              <select \r
              [ngModel]="member.role"\r
              (change)="onRoleChangeAttempt(member, $event)"\r
              [disabled]="updatingRoles[member.id]"\r
              class="form-select"\r
              >\r
                <option *ngFor="let role of roleOptions" [value]="role.value">\r
                  {{ role.label }}\r
                </option>\r
              </select>\r
\r
                <span *ngIf="updatingRoles[member.id]" class="loading-spinner">\r
                 <lucide-angular name="refresh-cw"></lucide-angular>\r
                </span>\r
              </div>\r
            </div>\r
            <div *ngIf="isActiveMember(member)" class="modal-footer p-md0">\r
              <!-- ELIMINA MEMBRO -->\r
              <button \r
                *ngIf="canRemoveStaff(member)"\r
                (click)="removeStaff(member)" \r
                class="promethea-button"\r
                title="Rimuovi membro"\r
                [disabled]="deletingMembers[member.id]"\r
              >\r
                <span class="material-icons" *ngIf="!deletingMembers[member.id]">delete</span>\r
                <span class="material-icons" *ngIf="deletingMembers[member.id]">sync</span>\r
                <span *ngIf="deletingMembers[member.id]">Rimozione...</span>\r
                <span *ngIf="!deletingMembers[member.id]">Rimuovi</span>\r
              </button>\r
              <!-- VISUALIZZA INFORMAZIONI -->\r
              <button \r
                (click)="showMemberDetails(member)" \r
                class="promethea-button ghost"\r
                title="Dettagli membro"\r
              >\r
                <lucide-angular name="info"></lucide-angular>\r
                Dettagli\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- GESTIONE PERMESSI RUOLI - SOLO PER TITOLARE -->\r
    <div class="form-card" *ngIf="isOwner" data-tutorial="staff-permissions">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons text-md">admin_panel_settings</span>\r
        <h2 class="text-md font-semibold m-0">Gestione Permessi Ruoli</h2>\r
      </div>\r
      <p class="text-muted">Configura cosa pu\xF2 fare ogni ruolo nel tuo ristorante</p>\r
\r
      <div class="flex flex-col gap-lg mt-lg">\r
        <!-- MANAGER -->\r
        <div class="role-permissions-accordion rounded-lg overflow-hidden">\r
          <button\r
            class="icon-button bottone-ruolo"\r
            (click)="toggleRoleCollapse('manager')"\r
          >\r
            <h3 class="flex items-center gap-sm font-bold m-0 text-md">\r
              <span class="material-icons text-md">supervisor_account</span>\r
              {{ getRoleDisplayName('manager') }}\r
            </h3>\r
            <span class="material-icons transition-transform duration-200"\r
                  [class.rotate-180]="!collapsedRoles['manager']">\r
              keyboard_arrow_down\r
            </span>\r
          </button>\r
\r
          <div class="mt-sm" \r
              [class.collapsed]="collapsedRoles['manager']"\r
              *ngIf="!collapsedRoles['manager']">\r
            <div class="grid-cards p-md bg-smoke rounded">\r
              <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition"\r
                     *ngFor="let perm of permissionService.allPermissions">\r
                <input type="checkbox"\r
                      [checked]="isPermissionEnabled('manager', perm.key)"\r
                      (change)="togglePermission('manager', perm.key, $event)" />\r
                <div>\r
                  <strong>{{ perm.label }}</strong>\r
                  <div class="text-muted text-mini">{{ perm.description }}</div>\r
                </div>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- CHEF -->\r
        <div class="role-permissions-accordion rounded-lg overflow-hidden">\r
          <button class="icon-button bottone-ruolo"\r
                  (click)="toggleRoleCollapse('chef')">\r
            <h3 class="flex items-center gap-sm font-bold m-0 text-md">\r
              <span class="material-icons text-md">restaurant</span>\r
              {{ getRoleDisplayName('chef') }}\r
            </h3>\r
            <span class="material-icons transition-transform duration-200"\r
                  [class.rotate-180]="!collapsedRoles['chef']">\r
              keyboard_arrow_down\r
            </span>\r
          </button>\r
\r
          <div class="mt-sm collapse-section" \r
                [class.collapsed]="collapsedRoles['chef']"\r
                *ngIf="!collapsedRoles['chef']">\r
            <div class="grid-cards p-md bg-smoke rounded">\r
              <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-2)]"\r
                    *ngFor="let perm of permissionService.allPermissions">\r
                <input type="checkbox"\r
                      [checked]="isPermissionEnabled('chef', perm.key)"\r
                      (change)="togglePermission('chef', perm.key, $event)" />\r
                <div>\r
                  <strong>{{ perm.label }}</strong>\r
                  <div class="text-muted text-mini">{{ perm.description }}</div>\r
                </div>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- WAITER -->\r
        <div class="role-permissions-accordion rounded-lg overflow-hidden">\r
          <button class="icon-button bottone-ruolo"\r
                  (click)="toggleRoleCollapse('waiter')">\r
            <h3 class="flex items-center gap-sm font-bold m-0 text-md">\r
              <lucide-angular name="user" [size]="20" class="nav-icon"></lucide-angular>\r
              {{ getRoleDisplayName('waiter') }}\r
            </h3>\r
            <span class="material-icons transition-transform duration-200"\r
                  [class.rotate-180]="!collapsedRoles['waiter']">\r
              keyboard_arrow_down\r
            </span>\r
          </button>\r
\r
          <div class="mt-sm" \r
              [@collapse]="collapsedRoles['waiter'] ? 'collapsed' : 'expanded'"\r
              *ngIf="!collapsedRoles['waiter']">\r
            <div class="grid-cards p-md bg-smoke rounded">\r
              <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-2)]"\r
                    *ngFor="let perm of permissionService.allPermissions">\r
                <input type="checkbox"\r
                      [checked]="isPermissionEnabled('waiter', perm.key)"\r
                      (change)="togglePermission('waiter', perm.key, $event)" />\r
                <div>\r
                  <strong>{{ perm.label }}</strong>\r
                  <div class="text-muted text-mini">{{ perm.description }}</div>\r
                </div>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- KITCHEN STAFF -->\r
        <div class="role-permissions-accordion rounded-lg overflow-hidden">\r
          <button class="icon-button bottone-ruolo"\r
                  (click)="toggleRoleCollapse('kitchen_staff')">\r
            <h3 class="flex items-center gap-sm font-bold m-0 text-md">\r
              <span class="material-icons text-md">kitchen</span>\r
              {{ getRoleDisplayName('kitchen_staff') }}\r
            </h3>\r
            <span class="material-icons transition-transform duration-200"\r
                  [class.rotate-180]="!collapsedRoles['kitchen_staff']">\r
              keyboard_arrow_down\r
            </span>\r
          </button>\r
\r
          <div class="mt-sm" \r
              [@collapse]="collapsedRoles['kitchen_staff'] ? 'collapsed' : 'expanded'"\r
              *ngIf="!collapsedRoles['kitchen_staff']">\r
            <div class="grid-cards p-md bg-smoke rounded">\r
              <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-2)]"\r
                    *ngFor="let perm of permissionService.allPermissions">\r
                <input type="checkbox"\r
                      [checked]="isPermissionEnabled('kitchen_staff', perm.key)"\r
                      (change)="togglePermission('kitchen_staff', perm.key, $event)" />\r
                <div>\r
                  <strong>{{ perm.label }}</strong>\r
                  <div class="text-muted text-mini">{{ perm.description }}</div>\r
                </div>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="mt-lg pt-md border-t">\r
        <p class="text-muted text-center">\r
          <lucide-angular name="info"></lucide-angular>\r
          I permessi verranno applicati automaticamente ai nuovi membri dello staff\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- MESSAGGIO PER CHI NON HA I PERMESSI -->\r
  <div *ngIf="!(isOwner || isManager)" class="card">\r
    <div class="text-center p-xl opacity-70">\r
      <span class="material-icons text-6xl">block</span>\r
      <h3 class="text-md font-semibold mt-4">Accesso Negato</h3>\r
      <p class="text-muted">Non hai i permessi per gestire il personale del ristorante.</p>\r
      <p class="text-muted">Solo il titolare e i responsabili possono accedere a questa sezione.</p>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/staff-management/staff-management.css */\n.pending-invitation {\n  background: color-mix(in srgb, var(--secondary) 5%, transparent);\n}\n.staff-info {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  width: 100%;\n}\n.avatartondo.pending {\n  background: var(--smoke-3);\n  color: var(--tertiary);\n}\n.staff-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.staff-member {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  padding: 0;\n  width: 100%;\n  margin-top: var(--gap-md);\n}\n.staff-status.pending {\n  background: color-mix(in srgb, var(--secondary) 20%, transparent);\n  color: var(--secondary);\n}\n.action-group {\n  display: flex;\n  gap: var(--gap-sm);\n}\n.bottone-ruolo {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: var(--gap-sm) var(--gap-md);\n}\n@media (max-width: 768px) {\n  .staff-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-md);\n  }\n  .staff-actions {\n    align-self: flex-end;\n  }\n}\n.permission-section {\n  transition: all 0.3s ease;\n  overflow: hidden;\n  max-height: 500px;\n  opacity: 1;\n}\n.permission-section.collapsed {\n  max-height: 0;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=staff-management.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffManagement, { className: "StaffManagement", filePath: "src/app/restaurant/staff-management/staff-management.ts", lineNumber: 19 });
})();
export {
  StaffManagement
};
//# sourceMappingURL=chunk-DMJJESET.js.map
