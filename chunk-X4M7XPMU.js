import {
  toSignal
} from "./chunk-YSV36LK3.js";
import {
  PRIORITY_LABELS,
  ROLE_LABELS,
  STATUS_LABELS
} from "./chunk-OZ6JK7FL.js";
import {
  TaskService
} from "./chunk-LJEGTELM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import "./chunk-K4QVN3EH.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService
} from "./chunk-JWP3QZ4U.js";
import {
  DomSanitizer,
  Router
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/tasks/task-list/task-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.user_id;
function TaskListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery.set(""));
    });
    \u0275\u0275element(1, "lucide-icon", 29);
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function TaskListComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r4.label);
  }
}
function TaskListComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.copyFeedback());
  }
}
function TaskListComponent_Conditional_53_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Nessuna task corrisponde ai filtri selezionati.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_53_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275text(3, "Resetta filtri");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_Conditional_53_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Nessuna task. Creane una!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_53_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateTaskForm());
    });
    \u0275\u0275text(3, "Crea la prima task");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "lucide-icon", 31);
    \u0275\u0275template(2, TaskListComponent_Conditional_53_Conditional_2_Template, 4, 0)(3, TaskListComponent_Conditional_53_Conditional_3_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.searchQuery() || ctx_r1.filterStatus() !== "all" || ctx_r1.filterPriority() !== "all" ? 2 : 3);
  }
}
function TaskListComponent_For_56_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275element(1, "lucide-icon", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", task_r8.client_name || "Cliente", " ");
  }
}
function TaskListComponent_For_56_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275element(1, "lucide-icon", 60);
    \u0275\u0275text(2, " Interna ");
    \u0275\u0275elementEnd();
  }
}
function TaskListComponent_For_56_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel(role_r9));
  }
}
function TaskListComponent_For_56_Conditional_26_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", user_r10.firstName, " ", user_r10.lastName, "");
  }
}
function TaskListComponent_For_56_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275repeaterCreate(1, TaskListComponent_For_56_Conditional_26_For_2_Template, 2, 1, "span", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(3, TaskListComponent_For_56_Conditional_26_For_4_Template, 2, 2, "span", 62, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(task_r8.assignedRoles);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(task_r8.assignedUsers);
  }
}
function TaskListComponent_For_56_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleLabel(task_r8.assigned_role), " ");
  }
}
function TaskListComponent_For_56_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Non assegnata ");
  }
}
function TaskListComponent_For_56_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275element(1, "lucide-icon", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, task_r8.due_date, "dd/MM/yyyy"), " ");
  }
}
function TaskListComponent_For_56_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 56);
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r1.highlight(task_r8.notes), \u0275\u0275sanitizeHtml);
  }
}
function TaskListComponent_For_56_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, " Dettagli: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", task_r8.completedDetails, "/", task_r8.totalDetails, "");
  }
}
function TaskListComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function TaskListComponent_For_56_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToDetail(task_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 35)(2, "div", 36)(3, "div", 37);
    \u0275\u0275element(4, "h3", 38);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40)(10, "div", 41);
    \u0275\u0275element(11, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 44);
    \u0275\u0275listener("click", function TaskListComponent_For_56_Template_div_click_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(15, "button", 45);
    \u0275\u0275listener("click", function TaskListComponent_For_56_Template_button_click_15_listener($event) {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyTask(task_r8, $event));
    });
    \u0275\u0275element(16, "lucide-icon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 47);
    \u0275\u0275listener("click", function TaskListComponent_For_56_Template_button_click_17_listener($event) {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditTaskForm(task_r8, $event));
    });
    \u0275\u0275element(18, "lucide-icon", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 49);
    \u0275\u0275listener("click", function TaskListComponent_For_56_Template_button_click_19_listener($event) {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteTask(task_r8.id, task_r8.title, $event));
    });
    \u0275\u0275element(20, "lucide-icon", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 51);
    \u0275\u0275template(22, TaskListComponent_For_56_Conditional_22_Template, 3, 1, "span", 52)(23, TaskListComponent_For_56_Conditional_23_Template, 3, 0, "span", 52);
    \u0275\u0275elementStart(24, "span", 52);
    \u0275\u0275element(25, "lucide-icon", 53);
    \u0275\u0275template(26, TaskListComponent_For_56_Conditional_26_Template, 5, 0, "div", 54)(27, TaskListComponent_For_56_Conditional_27_Template, 1, 1)(28, TaskListComponent_For_56_Conditional_28_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, TaskListComponent_For_56_Conditional_29_Template, 4, 4, "span", 52);
    \u0275\u0275elementStart(30, "span", 55);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, TaskListComponent_For_56_Conditional_33_Template, 1, 1, "div", 56);
    \u0275\u0275elementStart(34, "div", 57)(35, "span", 58);
    \u0275\u0275text(36, " Sotto-task: ");
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, TaskListComponent_For_56_Conditional_39_Template, 4, 2, "span", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-status", task_r8.status);
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r1.highlight(task_r8.title), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip-mini status-chip--", task_r8.status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(task_r8.status), " ");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", ctx_r1.priorityLabel(task_r8.priority));
    \u0275\u0275attribute("data-priority", task_r8.priority);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" P", task_r8.priority, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", task_r8.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", task_r8.progress, "% ");
    \u0275\u0275advance(9);
    \u0275\u0275conditional(task_r8.association_type === "cliente" ? 22 : 23);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(task_r8.assignedRoles.length > 0 || task_r8.assignedUsers.length > 0 ? 26 : task_r8.assigned_role ? 27 : 28);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(task_r8.due_date ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Creata ", \u0275\u0275pipeBind2(32, 20, task_r8.created_at, "dd/MM/yy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r8.notes ? 33 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", task_r8.completedSubtasks, "/", task_r8.totalSubtasks, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r8.totalDetails > 0 ? 39 : -1);
  }
}
function TaskListComponent_Conditional_57_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_57_For_22_Template_button_click_0_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.taskForm.priority = p_r13);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("priority-btn--active", ctx_r1.taskForm.priority === p_r13);
    \u0275\u0275attribute("data-priority", p_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r13);
  }
}
function TaskListComponent_Conditional_57_Conditional_32_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 79)(1, "input", 102);
    \u0275\u0275listener("change", function TaskListComponent_Conditional_57_Conditional_32_For_5_Conditional_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const role_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleRole(role_r16.value, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", role_r16.value)("checked", ctx_r1.taskForm.assignedRoles.includes(role_r16.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r16.label);
  }
}
function TaskListComponent_Conditional_57_Conditional_32_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TaskListComponent_Conditional_57_Conditional_32_For_5_Conditional_0_Template, 4, 3, "label", 79);
  }
  if (rf & 2) {
    const role_r16 = ctx.$implicit;
    \u0275\u0275conditional(role_r16.value !== "tutti" ? 0 : -1);
  }
}
function TaskListComponent_Conditional_57_Conditional_32_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 79)(1, "input", 102);
    \u0275\u0275listener("change", function TaskListComponent_Conditional_57_Conditional_32_Conditional_9_For_2_Template_input_change_1_listener($event) {
      const user_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleUser(user_r18.user_id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("value", user_r18.user_id)("checked", ctx_r1.taskForm.assignedUserIds.includes(user_r18.user_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", user_r18.first_name || user_r18.last_name ? user_r18.first_name + " " + user_r18.last_name : user_r18.email, " (", ctx_r1.roleLabel(user_r18.role), ") ");
  }
}
function TaskListComponent_Conditional_57_Conditional_32_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275repeaterCreate(1, TaskListComponent_Conditional_57_Conditional_32_Conditional_9_For_2_Template, 4, 4, "label", 79, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.staffUsers());
  }
}
function TaskListComponent_Conditional_57_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 97);
    \u0275\u0275text(2, "Ruoli:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 98);
    \u0275\u0275repeaterCreate(4, TaskListComponent_Conditional_57_Conditional_32_For_5_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 99);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_57_Conditional_32_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showUsersExpanded.set(!ctx_r1.showUsersExpanded()));
    });
    \u0275\u0275element(7, "lucide-icon", 100);
    \u0275\u0275text(8, " Utenti specifici ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TaskListComponent_Conditional_57_Conditional_32_Conditional_9_Template, 3, 0, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.roles);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx_r1.showUsersExpanded() ? "chevron-down" : "chevron-right");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showUsersExpanded() ? 9 : -1);
  }
}
function TaskListComponent_Conditional_57_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275element(2, "lucide-icon", 103);
    \u0275\u0275text(3, " Nome cliente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_Conditional_47_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.client_name, $event) || (ctx_r1.taskForm.client_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.client_name);
  }
}
function TaskListComponent_Conditional_57_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275element(2, "lucide-icon", 105);
    \u0275\u0275text(3, " Ora ");
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_div_56_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.due_time, $event) || (ctx_r1.taskForm.due_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.due_time);
  }
}
function TaskListComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_57_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 66)(3, "div", 40);
    \u0275\u0275element(4, "lucide-icon", 67);
    \u0275\u0275elementStart(5, "h2", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_57_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275element(8, "lucide-icon", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 71)(10, "div", 14)(11, "label", 15);
    \u0275\u0275element(12, "lucide-icon", 72);
    \u0275\u0275text(13, " Titolo task ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.title, $event) || (ctx_r1.taskForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "label", 15);
    \u0275\u0275element(18, "lucide-icon", 74);
    \u0275\u0275text(19, " Priorit\xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 75);
    \u0275\u0275repeaterCreate(21, TaskListComponent_Conditional_57_For_22_Template, 2, 4, "button", 76, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 14)(24, "label", 15);
    \u0275\u0275element(25, "lucide-icon", 77);
    \u0275\u0275text(26, " Assegnazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 78)(28, "label", 79)(29, "input", 80);
    \u0275\u0275listener("ngModelChange", function TaskListComponent_Conditional_57_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.assignToAll.set($event);
      return \u0275\u0275resetView(ctx_r1.onAssignToAllChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Assegna a tutti");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, TaskListComponent_Conditional_57_Conditional_32_Template, 10, 2, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 13)(34, "div", 14)(35, "label", 15);
    \u0275\u0275element(36, "lucide-icon", 82);
    \u0275\u0275text(37, " Associazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 83)(39, "label", 84)(40, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.association_type, $event) || (ctx_r1.taskForm.association_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Interna");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "label", 84)(44, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.association_type, $event) || (ctx_r1.taskForm.association_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Cliente");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(47, TaskListComponent_Conditional_57_Conditional_47_Template, 5, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 13)(49, "div", 14)(50, "label", 15);
    \u0275\u0275element(51, "lucide-icon", 87);
    \u0275\u0275text(52, " Data scadenza ");
    \u0275\u0275elementStart(53, "span", 32);
    \u0275\u0275text(54, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.due_date, $event) || (ctx_r1.taskForm.due_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, TaskListComponent_Conditional_57_div_56_Template, 7, 1, "div", 89);
    \u0275\u0275elementStart(57, "div", 90)(58, "label", 79)(59, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.due_all_day, $event) || (ctx_r1.taskForm.due_all_day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, "Tutto il giorno");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div", 14)(63, "label", 15);
    \u0275\u0275element(64, "lucide-icon", 91);
    \u0275\u0275text(65, " Note ");
    \u0275\u0275elementStart(66, "span", 32);
    \u0275\u0275text(67, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "textarea", 92);
    \u0275\u0275twoWayListener("ngModelChange", function TaskListComponent_Conditional_57_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.notes, $event) || (ctx_r1.taskForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 93)(70, "button", 33);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_57_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(71, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 94);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_57_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTask());
    });
    \u0275\u0275element(73, "lucide-icon", 95);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId() ? "Modifica Task" : "Nuova Task", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.title);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.priorities);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.assignToAll());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.assignToAll() ? 32 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.association_type);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.association_type);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.taskForm.association_type === "cliente" ? 47 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.due_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.taskForm.due_all_day);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.due_all_day);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.taskForm.notes);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId() ? "Salva modifiche" : "Crea", " ");
  }
}
function TaskListComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 107)(2, "div", 66)(3, "div", 40);
    \u0275\u0275element(4, "lucide-icon", 108);
    \u0275\u0275elementStart(5, "h2", 68);
    \u0275\u0275text(6, "Conferma eliminazione");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_58_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275element(8, "lucide-icon", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 109)(10, "p");
    \u0275\u0275text(11, " Sei sicuro di voler eliminare ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 110);
    \u0275\u0275element(16, "lucide-icon", 111);
    \u0275\u0275text(17, " Verranno eliminate anche tutte le sotto-task e i dettagli associati. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 93)(19, "button", 33);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_58_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(20, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 112);
    \u0275\u0275listener("click", function TaskListComponent_Conditional_58_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeDelete());
    });
    \u0275\u0275element(22, "lucide-icon", 113);
    \u0275\u0275text(23, " Elimina ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1('"', ctx_r1.pendingDelete().label, '"');
  }
}
var TaskListComponent = class _TaskListComponent {
  taskService = inject(TaskService);
  sanitizer = inject(DomSanitizer);
  router = inject(Router);
  authService = inject(AuthService);
  // Dati dal servizio
  allTasks = toSignal(this.taskService.tasksView$, { initialValue: [] });
  loading$ = this.taskService.loading$;
  staffUsers = signal([]);
  // già presente
  // Stato UI
  searchQuery = signal("");
  showForm = signal(false);
  editingId = signal(null);
  pendingDelete = signal(null);
  copyFeedback = signal(null);
  // Dati form per task - esteso con assignedRoles e assignedUserIds
  taskForm = {
    title: "",
    notes: "",
    priority: 3,
    association_type: "interna",
    client_name: "",
    assigned_role: "tutti",
    assignedRoles: [],
    // nuovo
    assignedUserIds: [],
    // nuovo
    due_date: "",
    due_time: "",
    due_all_day: false
  };
  assignToAll = signal(false);
  // nuovo
  showUsersExpanded = signal(false);
  // Task filtrate
  filteredTasks = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q)
      return this.allTasks();
    return this.allTasks().filter((t) => t.title.toLowerCase().includes(q) || (t.notes ?? "").toLowerCase().includes(q) || (t.client_name ?? "").toLowerCase().includes(q));
  });
  // Label helpers
  statusLabel = (status) => {
    if (Object.keys(STATUS_LABELS).includes(status)) {
      return STATUS_LABELS[status];
    }
    return status;
  };
  roleLabel = (role) => {
    if (!role)
      return "Tutti";
    return ROLE_LABELS[role] ?? role;
  };
  priorityLabel = (priority) => PRIORITY_LABELS[priority] ?? String(priority);
  // Segnali per i filtri
  filterStatus = signal("all");
  filterPriority = signal("all");
  // Opzioni per i filtri
  statusOptions = [
    { value: "all", label: "Tutti" },
    { value: "da_iniziare", label: "Da iniziare" },
    { value: "in_lavorazione", label: "In lavorazione" },
    { value: "completata", label: "Completata" }
  ];
  priorityOptions = [
    { value: "all", label: "Tutte" },
    { value: 1, label: "Minima" },
    { value: 2, label: "Bassa" },
    { value: 3, label: "Media" },
    { value: 4, label: "Alta" },
    { value: 5, label: "Urgente" }
  ];
  // Reference data
  roles = Object.entries(ROLE_LABELS).map(([value, label]) => ({ value, label }));
  priorities = [1, 2, 3, 4, 5];
  ngOnInit() {
    return __async(this, null, function* () {
      const staff = yield this.taskService.getStaffUsers();
      this.staffUsers.set(staff);
    });
  }
  // Highlight testo
  highlight(text) {
    const q = this.searchQuery().trim();
    if (!q)
      return text;
    const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const html = text.replace(new RegExp(`(${esc})`, "gi"), "<mark>$1</mark>");
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  // Navigazione al dettaglio
  goToDetail(id) {
    this.router.navigate(["/restaurant/task-detail", id]);
  }
  // Apertura form task
  openCreateTaskForm() {
    this.taskForm = {
      title: "",
      notes: "",
      priority: 3,
      association_type: "interna",
      client_name: "",
      assigned_role: null,
      assignedRoles: [],
      assignedUserIds: [],
      due_date: "",
      due_time: "",
      // ← aggiunto
      due_all_day: false
      // ← aggiunto
    };
    this.assignToAll.set(false);
    this.editingId.set(null);
    this.showForm.set(true);
  }
  openEditTaskForm(task, event) {
    event.stopPropagation();
    let dueDatePart = "";
    let dueTimePart = "";
    let dueAllDay = task.due_all_day || false;
    if (task.due_date) {
      const date = new Date(task.due_date);
      dueDatePart = date.toISOString().split("T")[0];
      if (!dueAllDay) {
        dueTimePart = date.toTimeString().substring(0, 5);
      }
    }
    this.taskForm = {
      title: task.title,
      notes: task.notes ?? "",
      priority: task.priority,
      association_type: task.association_type,
      client_name: task.client_name ?? "",
      assigned_role: task.assigned_role,
      assignedRoles: task.assignedRoles,
      assignedUserIds: task.assignedUsers.map((u) => u.id),
      due_date: dueDatePart,
      due_time: dueTimePart,
      due_all_day: dueAllDay
    };
    this.assignToAll.set(task.assigned_role === "tutti" || task.assigned_role === null && task.assignedRoles.length === 0 && task.assignedUsers.length === 0);
    this.editingId.set(task.id);
    this.showForm.set(true);
  }
  // Salvataggio task
  saveTask() {
    return __async(this, null, function* () {
      if (!this.taskForm.title.trim())
        return;
      let dueDatetime = null;
      if (this.taskForm.due_date) {
        const date = this.taskForm.due_date;
        const time = this.taskForm.due_all_day ? "00:00" : this.taskForm.due_time || "00:00";
        dueDatetime = `${date}T${time}:00`;
      }
      const payload = {
        title: this.taskForm.title.trim(),
        notes: this.taskForm.notes.trim() || null,
        priority: this.taskForm.priority,
        association_type: this.taskForm.association_type,
        client_name: this.taskForm.association_type === "cliente" ? this.taskForm.client_name.trim() || null : null,
        due_date: dueDatetime,
        due_all_day: this.taskForm.due_all_day
        // ← nuovo campo
      };
      const id = this.editingId();
      if (this.assignToAll()) {
        if (id) {
          yield this.taskService.update(id, __spreadProps(__spreadValues({}, payload), { assigned_role: "tutti" }));
        } else {
          const newTask = yield this.taskService.create(__spreadProps(__spreadValues({}, payload), { assigned_role: "tutti" }));
          if (newTask) {
            this.router.navigate(["/restaurant/task-detail", newTask.id]);
          }
        }
      } else {
        if (id) {
          yield this.taskService.updateTaskWithAssignments(id, __spreadProps(__spreadValues({}, payload), { assigned_role: null }), this.taskForm.assignedRoles, this.taskForm.assignedUserIds);
        } else {
          const newTask = yield this.taskService.createTaskWithAssignments(__spreadProps(__spreadValues({}, payload), { assigned_role: null }), this.taskForm.assignedRoles, this.taskForm.assignedUserIds);
          if (newTask) {
            this.router.navigate(["/restaurant/task-detail", newTask.id]);
          }
        }
      }
      this.closeForm();
    });
  }
  closeForm() {
    this.showForm.set(false);
  }
  // Eliminazione
  confirmDeleteTask(id, title, event) {
    event.stopPropagation();
    this.pendingDelete.set({ type: "task", id, label: title });
  }
  cancelDelete() {
    this.pendingDelete.set(null);
  }
  executeDelete() {
    return __async(this, null, function* () {
      const p = this.pendingDelete();
      if (!p)
        return;
      if (p.type === "task") {
        yield this.taskService.delete(p.id);
      }
      this.pendingDelete.set(null);
    });
  }
  // Copia
  copyTask(task, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      yield navigator.clipboard.writeText(this.taskService.buildTaskCopyText(task));
      this.flashCopy("Task copiata negli appunti \u2713");
    });
  }
  flashCopy(msg) {
    this.copyFeedback.set(msg);
    setTimeout(() => this.copyFeedback.set(null), 2500);
  }
  trackById = (_, item) => item.id;
  isTaskVisible(task) {
    const role = this.authService.getStaffRole();
    const isOwner = this.authService.isOwner();
    const isManager = this.authService.isManager();
    const userId = this.authService.currentUserValue?.id;
    if (!userId)
      return false;
    return this.taskService.isTaskVisibleForUser(task, userId, role, isOwner || isManager);
  }
  // Signal delle task visibili
  visibleTasks = computed(() => {
    return this.filteredTasks().filter((task) => this.isTaskVisible(task));
  });
  // Metodi per i toggle nel form
  toggleRole(role, event) {
    const checked = event.target.checked;
    if (checked) {
      this.taskForm.assignedRoles = [...this.taskForm.assignedRoles, role];
    } else {
      this.taskForm.assignedRoles = this.taskForm.assignedRoles.filter((r) => r !== role);
    }
    if (this.assignToAll()) {
      this.assignToAll.set(false);
    }
  }
  toggleUser(userId, event) {
    const checked = event.target.checked;
    if (checked) {
      this.taskForm.assignedUserIds = [...this.taskForm.assignedUserIds, userId];
    } else {
      this.taskForm.assignedUserIds = this.taskForm.assignedUserIds.filter((id) => id !== userId);
    }
    if (this.assignToAll()) {
      this.assignToAll.set(false);
    }
  }
  onAssignToAllChange() {
    if (this.assignToAll()) {
      this.taskForm.assignedRoles = [];
      this.taskForm.assignedUserIds = [];
      this.taskForm.assigned_role = "tutti";
    } else {
      this.taskForm.assigned_role = null;
    }
  }
  // KPI calcolati sulle task visibili (senza filtri)
  totalTasks = computed(() => this.visibleTasks().length);
  todoTasks = computed(() => this.visibleTasks().filter((t) => t.status === "da_iniziare").length);
  inProgressTasks = computed(() => this.visibleTasks().filter((t) => t.status === "in_lavorazione").length);
  completedTasks = computed(() => this.visibleTasks().filter((t) => t.status === "completata").length);
  // Task filtrate per stato e priorità
  filteredByStatusAndPriority = computed(() => {
    const tasks = this.visibleTasks();
    const status = this.filterStatus();
    const priority = this.filterPriority();
    return tasks.filter((task) => {
      if (status !== "all" && task.status !== status)
        return false;
      if (priority !== "all" && task.priority !== priority)
        return false;
      return true;
    });
  });
  // Metodi per cambiare i filtri
  setFilterStatus(status) {
    this.filterStatus.set(status);
  }
  setFilterPriority(priority) {
    this.filterPriority.set(priority);
  }
  resetFilters() {
    this.filterStatus.set("all");
    this.filterPriority.set("all");
    this.searchQuery.set("");
  }
  static \u0275fac = function TaskListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskListComponent, selectors: [["app-task-list"]], decls: 59, vars: 19, consts: [[1, "page-container", "tasks-page"], [1, "flex", "items-center", "justify-between", "gap-md", "p-md"], ["data-tutorial", "task-list-search", 1, "flex", "items-center", "gap-sm", "w-100"], ["name", "search", 1, "icon-sm"], ["type", "text", "placeholder", "Cerca task...", 1, "search-input", "w-100", 3, "ngModelChange", "ngModel"], [1, "icon-button", "x-small"], ["data-tutorial", "task-list-new", 1, "promethea-button", 3, "click"], ["name", "plus", 1, "icon-sm"], ["data-tutorial", "task-list-kpi", 1, "grid-cards", "p-md"], [1, "card", "text-center", "p-sm"], [1, "text-xl", "font-bold"], [1, "text-muted", "text-mini"], [1, "flex", "items-center", "gap-sm", "p-md", "flex-wrap"], [1, "form-row"], [1, "form-group"], [1, "standard-label"], ["name", "file-check", 1, "nav-icon", 3, "size"], [3, "ngModelChange", "ngModel"], [3, "value"], ["name", "gauge", 1, "nav-icon", 3, "size"], ["title", "Resetta filtri", 1, "icon-button", 3, "click"], ["name", "refresh-cw", "size", "16"], [1, "loading-bar"], [1, "copy-toast", "chip", "rounded-full"], [1, "empty-state", "flex", "flex-col", "items-center", "justify-center", "p-lg", "gap-md"], [1, "flex", "flex-col", "gap-md", "p-md"], ["data-tutorial", "task-list-card", 1, "card", "task-card"], [1, "modal-overlay"], [1, "icon-button", "x-small", 3, "click"], ["name", "x", "size", "18", 1, "icon-xs"], [1, "loading-bar__fill"], ["name", "clipboard-check", 1, "icon-xl", 2, "opacity", ".3"], [1, "text-muted"], [1, "promethea-button", "ghost", 3, "click"], ["data-tutorial", "task-list-card", 1, "card", "task-card", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-md"], [1, "flex", "flex-col", "gap-sm", 2, "flex", "1", "min-width", "0"], [1, "flex", "items-center", "gap-sm", "flex-wrap"], [1, "card-title", "m-0", 2, "margin-bottom", "0", 3, "innerHTML"], [1, "chip-mini", "priority-chip", 3, "title"], [1, "flex", "items-center", "gap-sm"], [1, "progress-track", 2, "flex", "1"], [1, "progress-fill"], [1, "text-muted", "text-mini", 2, "white-space", "nowrap"], [1, "flex", "items-center", "gap-sm", 2, "flex-shrink", "0", 3, "click"], ["title", "Copia task", 1, "icon-button", "x-small", "transition", 3, "click"], ["name", "copy", "size", "14"], ["title", "Modifica task", 1, "icon-button", "x-small", "transition", 3, "click"], ["name", "pencil", "size", "14"], ["title", "Elimina task", 1, "icon-button", "x-small", "icon-button--danger", "transition", 3, "click"], ["name", "trash2", "size", "14"], [1, "flex", "flex-wrap", "gap-sm", "mt-sm"], [1, "chip-mini", "flex", "items-center", "gap-sm"], ["name", "users", "size", "18", 1, "icon-xs"], [1, "flex", "flex-wrap", "gap-xs"], [1, "chip-mini", "flex", "items-center", "text-muted"], [1, "task-notes", "text-muted", "p-sm", "mt-sm", "rounded", "border", 3, "innerHTML"], [1, "flex", "items-center", "gap-sm", "mt-sm"], [1, "chip-mini"], ["name", "user", "size", "18", 1, "icon-xs"], ["name", "building", "size", "18", 1, "icon-xs"], [1, "chip-mini", "role-chip"], [1, "chip-mini", "user-chip"], ["name", "calendar", "size", "18", 1, "icon-xs"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-md", 3, "click"], [1, "modal-header"], ["name", "clipboard-list", 1, "icon-md"], [1, "section-title", "text-md"], [1, "icon-button", 3, "click"], ["name", "x", 1, "icon-sm"], [1, "form-card"], ["name", "type", 1, "icon-sm"], ["type", "text", "placeholder", "Es. Revisione men\xF9 estate 2025", "required", "", 3, "ngModelChange", "ngModel"], ["name", "flag", 1, "icon-sm"], [1, "flex", "gap-sm"], ["type", "button", 1, "priority-btn", "transition", 3, "priority-btn--active"], ["name", "users", 1, "icon-sm"], [1, "flex", "flex-col", "gap-sm"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "gap-sm", "pl-md"], ["name", "link", 1, "icon-sm"], [1, "flex", "gap-md"], [1, "checkbox-label", "rounded"], ["type", "radio", "value", "interna", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "cliente", 3, "ngModelChange", "ngModel"], ["name", "calendar", 1, "icon-sm"], ["type", "date", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], [1, "form-group", 2, "align-self", "flex-end"], ["name", "file-text", 1, "icon-sm"], ["placeholder", "Descrizione, contesto o istruzioni...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "promethea-button", 3, "click"], ["name", "save", 1, "icon-sm"], ["type", "button", 1, "priority-btn", "transition", 3, "click"], [1, "font-semibold"], [1, "flex", "flex-wrap", "gap-sm"], [1, "font-semibold", "mt-sm", "flex", "items-center", "gap-sm", 2, "cursor", "pointer", 3, "click"], ["size", "16", 3, "name"], [1, "flex", "flex-wrap", "gap-sm", "pl-md"], ["type", "checkbox", 3, "change", "value", "checked"], ["name", "user", 1, "icon-sm"], ["type", "text", "placeholder", "Es. Mario Rossi", 3, "ngModelChange", "ngModel"], ["name", "clock", 1, "icon-sm"], ["type", "time", 3, "ngModelChange", "ngModel"], [1, "modal-container", "modal-sm"], ["name", "alert-triangle", 1, "icon-md", 2, "color", "var(--secondary)"], [1, "form-card", "flex", "flex-col", "gap-md"], [1, "info-message"], ["name", "info", 1, "icon-sm"], [1, "promethea-button", 2, "background", "var(--secondary)", 3, "click"], ["name", "trash2", 1, "icon-sm"]], template: function TaskListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "lucide-icon", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("ngModelChange", function TaskListComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.searchQuery.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, TaskListComponent_Conditional_5_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function TaskListComponent_Template_button_click_6_listener() {
        return ctx.openCreateTaskForm();
      });
      \u0275\u0275element(7, "lucide-icon", 7);
      \u0275\u0275text(8, " Nuova Task ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275text(14, "Totale task");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275text(19, "Da iniziare");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 9)(21, "div", 10);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11);
      \u0275\u0275text(24, "In lavorazione");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 9)(26, "div", 10);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11);
      \u0275\u0275text(29, "Completate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 12)(31, "div", 13)(32, "div", 14)(33, "label", 15);
      \u0275\u0275element(34, "lucide-angular", 16);
      \u0275\u0275text(35, " Stato ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "select", 17);
      \u0275\u0275listener("ngModelChange", function TaskListComponent_Template_select_ngModelChange_36_listener($event) {
        return ctx.setFilterStatus($event);
      });
      \u0275\u0275repeaterCreate(37, TaskListComponent_For_38_Template, 2, 2, "option", 18, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 14)(40, "label", 15);
      \u0275\u0275element(41, "lucide-angular", 19);
      \u0275\u0275text(42, " Priorit\xE0 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "select", 17);
      \u0275\u0275listener("ngModelChange", function TaskListComponent_Template_select_ngModelChange_43_listener($event) {
        return ctx.setFilterPriority($event);
      });
      \u0275\u0275repeaterCreate(44, TaskListComponent_For_45_Template, 2, 2, "option", 18, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "button", 20);
      \u0275\u0275listener("click", function TaskListComponent_Template_button_click_46_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275element(47, "lucide-icon", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 11);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(50, TaskListComponent_Conditional_50_Template, 2, 0, "div", 22);
      \u0275\u0275pipe(51, "async");
      \u0275\u0275template(52, TaskListComponent_Conditional_52_Template, 2, 1, "div", 23)(53, TaskListComponent_Conditional_53_Template, 4, 1, "div", 24);
      \u0275\u0275elementStart(54, "div", 25);
      \u0275\u0275repeaterCreate(55, TaskListComponent_For_56_Template, 40, 23, "div", 26, ctx.trackById, true);
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, TaskListComponent_Conditional_57_Template, 75, 12, "div", 27)(58, TaskListComponent_Conditional_58_Template, 24, 1, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchQuery() ? 5 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totalTasks());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.todoTasks());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.inProgressTasks());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.completedTasks());
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.filterStatus());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.filterPriority());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.priorityOptions);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" Mostrati ", ctx.filteredByStatusAndPriority().length, " di ", ctx.totalTasks(), " task ");
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(51, 17, ctx.loading$) ? 50 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.copyFeedback() ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filteredByStatusAndPriority().length === 0 ? 53 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filteredByStatusAndPriority());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showForm() ? 57 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pendingDelete() ? 58 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, DatePipe, AsyncPipe, LucideAngularModule, LucideAngularComponent, CommonModule, NgIf], styles: ['\n\n.status-chip--da_iniziare[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--text-muted) 20%, transparent);\n  color: var(--text-color);\n}\n.status-chip--in_lavorazione[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ffe5a4 20%, transparent);\n}\n.status-chip--completata[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #064e3b;\n}\n.priority-chip[data-priority="1"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n}\n.priority-chip[data-priority="2"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #3b82f6 20%, transparent);\n}\n.priority-chip[data-priority="3"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n}\n.priority-chip[data-priority="4"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f97316 20%, transparent);\n}\n.priority-chip[data-priority="5"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n}\n.priority-btn[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  border: 1px solid var(--smoke-1);\n  background: var(--background);\n  color: var(--text-color);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.priority-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--smoke-1);\n}\n.priority-btn--active[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.priority-btn--active[data-priority="1"][_ngcontent-%COMP%] {\n  background: var(--gradiente);\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--gradiente);\n  transition: width 0.3s ease;\n}\n.loading-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: var(--smoke-1);\n  z-index: 10000;\n}\n.loading-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 30%;\n  background: var(--gradiente);\n  animation: _ngcontent-%COMP%_loading 1s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(400%);\n  }\n}\n.copy-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: var(--gap-lg);\n  right: var(--gap-lg);\n  background: var(--gradiente);\n  color: white;\n  padding: var(--gap-sm) var(--gap-md);\n  z-index: 10001;\n  box-shadow: 0 4px 12px var(--shadow-1);\n}\n.icon-xs[_ngcontent-%COMP%] {\n  width: var(--gap-md);\n  height: var(--gap-md);\n}\n.mirco-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: var(--gap-sm);\n  margin-top: var(--gap-sm);\n}\n.user-chip[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: transparent;\n}\n/*# sourceMappingURL=task-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskListComponent, [{
    type: Component,
    args: [{ selector: "app-task-list", standalone: true, imports: [FormsModule, DatePipe, AsyncPipe, LucideAngularModule, CommonModule], template: `<div class="page-container tasks-page">\r
\r
  <!-- Toolbar -->\r
  <div class="flex items-center justify-between gap-md p-md">\r
      <div class="flex items-center gap-sm w-100" data-tutorial="task-list-search">\r
        <lucide-icon name="search" class="icon-sm"></lucide-icon>\r
        <input\r
          type="text"\r
          class="search-input w-100"\r
          placeholder="Cerca task..."\r
          [ngModel]="searchQuery()"\r
          (ngModelChange)="searchQuery.set($event)"\r
        />\r
        @if (searchQuery()) {\r
          <button class="icon-button x-small" (click)="searchQuery.set('')">\r
            <lucide-icon name="x" class="icon-xs" size="18"></lucide-icon>\r
          </button>\r
        }\r
      </div>\r
\r
    <button class="promethea-button" (click)="openCreateTaskForm()" data-tutorial="task-list-new">\r
      <lucide-icon name="plus" class="icon-sm"></lucide-icon> Nuova Task\r
    </button>\r
  </div>\r
\r
  <!-- KPI Cards -->\r
  <div class="grid-cards p-md" data-tutorial="task-list-kpi">\r
    <div class="card text-center p-sm">\r
      <div class="text-xl font-bold">{{ totalTasks() }}</div>\r
      <div class="text-muted text-mini">Totale task</div>\r
    </div>\r
    <div class="card text-center p-sm">\r
      <div class="text-xl font-bold">{{ todoTasks() }}</div>\r
      <div class="text-muted text-mini">Da iniziare</div>\r
    </div>\r
    <div class="card text-center p-sm">\r
      <div class="text-xl font-bold">{{ inProgressTasks() }}</div>\r
      <div class="text-muted text-mini">In lavorazione</div>\r
    </div>\r
    <div class="card text-center p-sm">\r
      <div class="text-xl font-bold">{{ completedTasks() }}</div>\r
      <div class="text-muted text-mini">Completate</div>\r
    </div>\r
  </div>\r
\r
  <!-- Filtri -->\r
  <div class="flex items-center gap-sm p-md flex-wrap">\r
    <div class="form-row">\r
    <div class="form-group">\r
    <label class="standard-label">\r
      <lucide-angular name="file-check" [size]="20" class="nav-icon"></lucide-angular>\r
      Stato\r
    </label>\r
    <select [ngModel]="filterStatus()" (ngModelChange)="setFilterStatus($event)">\r
      @for (opt of statusOptions; track opt.value) {\r
        <option [value]="opt.value">{{ opt.label }}</option>\r
      }\r
    </select>\r
    </div>\r
    <div class="form-group">\r
    <label class="standard-label">\r
      <lucide-angular name="gauge" [size]="20" class="nav-icon"></lucide-angular>\r
      Priorit\xE0\r
    </label>\r
    <select [ngModel]="filterPriority()" (ngModelChange)="setFilterPriority($event)">\r
      @for (opt of priorityOptions; track opt.value) {\r
        <option [value]="opt.value">{{ opt.label }}</option>\r
      }\r
    </select>\r
    </div>\r
    </div>\r
\r
    <button class="icon-button" (click)="resetFilters()" title="Resetta filtri">\r
      <lucide-icon name="refresh-cw" size="16"></lucide-icon>\r
    </button>\r
\r
    <span class="text-muted text-mini">\r
      Mostrati {{ filteredByStatusAndPriority().length }} di {{ totalTasks() }} task\r
    </span>\r
  </div>\r
\r
  <!-- Loading bar -->\r
  @if (loading$ | async) {\r
    <div class="loading-bar"><div class="loading-bar__fill"></div></div>\r
  }\r
\r
  <!-- Copy toast -->\r
  @if (copyFeedback()) {\r
    <div class="copy-toast chip rounded-full">{{ copyFeedback() }}</div>\r
  }\r
\r
  <!-- Empty state -->\r
  @if (filteredByStatusAndPriority().length === 0) {\r
    <div class="empty-state flex flex-col items-center justify-center p-lg gap-md">\r
      <lucide-icon name="clipboard-check" class="icon-xl" style="opacity:.3"></lucide-icon>\r
      @if (searchQuery() || filterStatus() !== 'all' || filterPriority() !== 'all') {\r
        <p class="text-muted">Nessuna task corrisponde ai filtri selezionati.</p>\r
        <button class="promethea-button ghost" (click)="resetFilters()">Resetta filtri</button>\r
      } @else {\r
        <p class="text-muted">Nessuna task. Creane una!</p>\r
        <button class="promethea-button ghost" (click)="openCreateTaskForm()">Crea la prima task</button>\r
      }\r
    </div>\r
  }\r
\r
  <!-- Lista task -->\r
  <div class="flex flex-col gap-md p-md">\r
    @for (task of filteredByStatusAndPriority(); track trackById($index, task)) {\r
      <div class="card task-card" (click)="goToDetail(task.id)" [attr.data-status]="task.status" data-tutorial="task-list-card">\r
\r
        <!-- Task header -->\r
        <div class="flex items-start justify-between gap-md">\r
          <div class="flex flex-col gap-sm" style="flex:1; min-width:0">\r
            <div class="flex items-center gap-sm flex-wrap">\r
              <h3 class="card-title m-0" [innerHTML]="highlight(task.title)" style="margin-bottom: 0;"></h3>\r
              <span class="chip-mini status-chip--{{ task.status }}">\r
                {{ statusLabel(task.status) }}\r
              </span>\r
              <span class="chip-mini priority-chip" [attr.data-priority]="task.priority"\r
                    title="{{ priorityLabel(task.priority) }}">\r
                P{{ task.priority }}\r
              </span>\r
            </div>\r
\r
            <!-- Progress bar -->\r
            <div class="flex items-center gap-sm">\r
              <div class="progress-track" style="flex:1">\r
                <div class="progress-fill" [style.width.%]="task.progress"></div>\r
              </div>\r
              <span class="text-muted text-mini" style="white-space:nowrap">\r
                {{ task.progress }}%\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Azioni task -->\r
          <div class="flex items-center gap-sm" style="flex-shrink:0" (click)="$event.stopPropagation()">\r
            <button class="icon-button x-small transition" title="Copia task"\r
                    (click)="copyTask(task, $event)">\r
              <lucide-icon name="copy" size="14"></lucide-icon>\r
            </button>\r
            <button class="icon-button x-small transition" title="Modifica task"\r
                    (click)="openEditTaskForm(task, $event)">\r
              <lucide-icon name="pencil" size="14"></lucide-icon>\r
            </button>\r
            <button class="icon-button x-small icon-button--danger transition" title="Elimina task"\r
                    (click)="confirmDeleteTask(task.id, task.title, $event)">\r
              <lucide-icon name="trash2" size="14"></lucide-icon>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Meta chips -->\r
        <div class="flex flex-wrap gap-sm mt-sm">\r
          @if (task.association_type === 'cliente') {\r
            <span class="chip-mini flex items-center gap-sm">\r
              <lucide-icon name="user" class="icon-xs" size="18"></lucide-icon>\r
              {{ task.client_name || 'Cliente' }}\r
            </span>\r
          } @else {\r
            <span class="chip-mini flex items-center gap-sm">\r
              <lucide-icon name="building" class="icon-xs" size="18"></lucide-icon>\r
              Interna\r
            </span>\r
          }\r
\r
          <!-- Assegnazioni multiple -->\r
          <span class="chip-mini flex items-center gap-sm">\r
            <lucide-icon name="users" class="icon-xs" size="18"></lucide-icon>\r
            @if (task.assignedRoles.length > 0 || task.assignedUsers.length > 0) {\r
              <div class="flex flex-wrap gap-xs">\r
                @for (role of task.assignedRoles; track role) {\r
                  <span class="chip-mini role-chip">{{ roleLabel(role) }}</span>\r
                }\r
                @for (user of task.assignedUsers; track user.id) {\r
                  <span class="chip-mini user-chip">{{ user.firstName }} {{ user.lastName }}</span>\r
                }\r
              </div>\r
            } @else if (task.assigned_role) {\r
              {{ roleLabel(task.assigned_role) }}\r
            } @else {\r
              Non assegnata\r
            }\r
          </span>\r
\r
          @if (task.due_date) {\r
            <span class="chip-mini flex items-center gap-sm">\r
              <lucide-icon name="calendar" class="icon-xs" size="18"></lucide-icon>\r
              {{ task.due_date | date:'dd/MM/yyyy' }}\r
            </span>\r
          }\r
\r
          <span class="chip-mini flex items-center text-muted">\r
            Creata {{ task.created_at | date:'dd/MM/yy' }}\r
          </span>\r
        </div>\r
\r
        <!-- Note task -->\r
        @if (task.notes) {\r
          <div class="task-notes text-muted p-sm mt-sm rounded border" [innerHTML]="highlight(task.notes)">\r
          </div>\r
        }\r
\r
        <!-- Riepilogo sotto-task e dettagli (solo numeri) -->\r
        <div class="flex items-center gap-sm mt-sm">\r
          <span class="chip-mini">\r
            Sotto-task: <strong>{{ task.completedSubtasks }}/{{ task.totalSubtasks }}</strong>\r
          </span>\r
          @if (task.totalDetails > 0) {\r
            <span class="chip-mini">\r
              Dettagli: <strong>{{ task.completedDetails }}/{{ task.totalDetails }}</strong>\r
            </span>\r
          }\r
        </div>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- MODAL CREAZIONE/MODIFICA TASK -->\r
  @if (showForm()) {\r
    <div class="modal-overlay" (click)="closeForm()">\r
      <div class="modal-container modal-md" (click)="$event.stopPropagation()">\r
        <div class="modal-header">\r
          <div class="flex items-center gap-sm">\r
            <lucide-icon name="clipboard-list" class="icon-md"></lucide-icon>\r
            <h2 class="section-title text-md">\r
              {{ editingId() ? 'Modifica Task' : 'Nuova Task' }}\r
            </h2>\r
          </div>\r
          <button class="icon-button" (click)="closeForm()">\r
            <lucide-icon name="x" class="icon-sm"></lucide-icon>\r
          </button>\r
        </div>\r
\r
        <div class="form-card">\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-icon name="type" class="icon-sm"></lucide-icon> Titolo task\r
            </label>\r
            <input type="text" placeholder="Es. Revisione men\xF9 estate 2025"\r
                   [(ngModel)]="taskForm.title" required />\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-icon name="flag" class="icon-sm"></lucide-icon> Priorit\xE0\r
              </label>\r
              <div class="flex gap-sm">\r
                @for (p of priorities; track p) {\r
                  <button type="button"\r
                          class="priority-btn transition"\r
                          [class.priority-btn--active]="taskForm.priority === p"\r
                          [attr.data-priority]="p"\r
                          (click)="taskForm.priority = p">{{ p }}</button>\r
                }\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Sezione Assegnazioni multiple -->\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-icon name="users" class="icon-sm"></lucide-icon> Assegnazione\r
            </label>\r
            <div class="flex flex-col gap-sm">\r
              <label class="checkbox-label">\r
                <input type="checkbox" [ngModel]="assignToAll()" (ngModelChange)="assignToAll.set($event); onAssignToAllChange()" />\r
                <span>Assegna a tutti</span>\r
              </label>\r
\r
              @if (!assignToAll()) {\r
                <div class="flex flex-col gap-sm pl-md">\r
                  <div class="font-semibold">Ruoli:</div>\r
                  <div class="flex flex-wrap gap-sm">\r
                    @for (role of roles; track role.value) {\r
                      @if (role.value !== 'tutti') {\r
                        <label class="checkbox-label">\r
                          <input type="checkbox" [value]="role.value" \r
                                 [checked]="taskForm.assignedRoles.includes(role.value)"\r
                                 (change)="toggleRole(role.value, $event)" />\r
                          <span>{{ role.label }}</span>\r
                        </label>\r
                      }\r
                    }\r
                  </div>\r
\r
                  <div class="font-semibold mt-sm flex items-center gap-sm" \r
                       (click)="showUsersExpanded.set(!showUsersExpanded())" \r
                       style="cursor:pointer">\r
                    <lucide-icon [name]="showUsersExpanded() ? 'chevron-down' : 'chevron-right'" size="16"></lucide-icon>\r
                    Utenti specifici\r
                  </div>\r
                  @if (showUsersExpanded()) {\r
                    <div class="flex flex-wrap gap-sm pl-md">\r
                      @for (user of staffUsers(); track user.user_id) {\r
                        <label class="checkbox-label">\r
                          <input type="checkbox" [value]="user.user_id"\r
                                 [checked]="taskForm.assignedUserIds.includes(user.user_id)"\r
                                 (change)="toggleUser(user.user_id, $event)" />\r
                          <span>\r
                            {{ user.first_name || user.last_name ? (user.first_name + ' ' + user.last_name) : user.email }} \r
                            ({{ roleLabel(user.role) }})\r
                          </span>\r
                        </label>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              }\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-icon name="link" class="icon-sm"></lucide-icon> Associazione\r
              </label>\r
              <div class="flex gap-md">\r
                <label class="checkbox-label rounded">\r
                  <input type="radio" [(ngModel)]="taskForm.association_type" value="interna" />\r
                  <span>Interna</span>\r
                </label>\r
                <label class="checkbox-label rounded">\r
                  <input type="radio" [(ngModel)]="taskForm.association_type" value="cliente" />\r
                  <span>Cliente</span>\r
                </label>\r
              </div>\r
            </div>\r
\r
            @if (taskForm.association_type === 'cliente') {\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-icon name="user" class="icon-sm"></lucide-icon> Nome cliente\r
                </label>\r
                <input type="text" placeholder="Es. Mario Rossi"\r
                       [(ngModel)]="taskForm.client_name" />\r
              </div>\r
            }\r
          </div>\r
\r
<div class="form-row">\r
  <div class="form-group">\r
    <label class="standard-label">\r
      <lucide-icon name="calendar" class="icon-sm"></lucide-icon>\r
      Data scadenza <span class="text-muted">(opzionale)</span>\r
    </label>\r
    <input type="date" [(ngModel)]="taskForm.due_date" />\r
  </div>\r
\r
  <!-- Campo ora, visibile solo se non \xE8 "tutto il giorno" -->\r
  <div class="form-group" *ngIf="!taskForm.due_all_day">\r
    <label class="standard-label">\r
      <lucide-icon name="clock" class="icon-sm"></lucide-icon>\r
      Ora <span class="text-muted">(opzionale)</span>\r
    </label>\r
    <input type="time" [(ngModel)]="taskForm.due_time" />\r
  </div>\r
\r
  <div class="form-group" style="align-self: flex-end;">\r
    <label class="checkbox-label">\r
      <input type="checkbox" [(ngModel)]="taskForm.due_all_day" />\r
      <span>Tutto il giorno</span>\r
    </label>\r
  </div>\r
</div>\r
\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-icon name="file-text" class="icon-sm"></lucide-icon>\r
              Note <span class="text-muted">(opzionale)</span>\r
            </label>\r
            <textarea placeholder="Descrizione, contesto o istruzioni..."\r
                      [(ngModel)]="taskForm.notes"></textarea>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button class="promethea-button ghost" (click)="closeForm()">Annulla</button>\r
          <button class="promethea-button" (click)="saveTask()">\r
            <lucide-icon name="save" class="icon-sm"></lucide-icon>\r
            {{ editingId() ? 'Salva modifiche' : 'Crea' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- MODALE CONFERMA ELIMINAZIONE -->\r
  @if (pendingDelete()) {\r
    <div class="modal-overlay">\r
      <div class="modal-container modal-sm">\r
        <div class="modal-header">\r
          <div class="flex items-center gap-sm">\r
            <lucide-icon name="alert-triangle" style="color:var(--secondary)" class="icon-md"></lucide-icon>\r
            <h2 class="section-title text-md">Conferma eliminazione</h2>\r
          </div>\r
          <button class="icon-button" (click)="cancelDelete()">\r
            <lucide-icon name="x" class="icon-sm"></lucide-icon>\r
          </button>\r
        </div>\r
\r
        <div class="form-card flex flex-col gap-md">\r
          <p>\r
            Sei sicuro di voler eliminare\r
            <strong>"{{ pendingDelete()!.label }}"</strong>?\r
          </p>\r
          <div class="info-message">\r
            <lucide-icon name="info" class="icon-sm"></lucide-icon>\r
            Verranno eliminate anche tutte le sotto-task e i dettagli associati.\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button class="promethea-button ghost" (click)="cancelDelete()">Annulla</button>\r
          <button class="promethea-button" style="background:var(--secondary)"\r
                  (click)="executeDelete()">\r
            <lucide-icon name="trash2" class="icon-sm"></lucide-icon> Elimina\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>`, styles: ['/* src/app/restaurant/tasks/task-list/task-list.component.css */\n.status-chip--da_iniziare {\n  background: color-mix(in srgb, var(--text-muted) 20%, transparent);\n  color: var(--text-color);\n}\n.status-chip--in_lavorazione {\n  background: color-mix(in srgb, #ffe5a4 20%, transparent);\n}\n.status-chip--completata {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #064e3b;\n}\n.priority-chip[data-priority="1"] {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n}\n.priority-chip[data-priority="2"] {\n  background: color-mix(in srgb, #3b82f6 20%, transparent);\n}\n.priority-chip[data-priority="3"] {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n}\n.priority-chip[data-priority="4"] {\n  background: color-mix(in srgb, #f97316 20%, transparent);\n}\n.priority-chip[data-priority="5"] {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n}\n.priority-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  border: 1px solid var(--smoke-1);\n  background: var(--background);\n  color: var(--text-color);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.priority-btn:hover {\n  border-color: var(--primary);\n  background: var(--smoke-1);\n}\n.priority-btn--active {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.priority-btn--active[data-priority="1"] {\n  background: var(--gradiente);\n}\n.progress-track {\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: var(--gradiente);\n  transition: width 0.3s ease;\n}\n.loading-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: var(--smoke-1);\n  z-index: 10000;\n}\n.loading-bar__fill {\n  height: 100%;\n  width: 30%;\n  background: var(--gradiente);\n  animation: loading 1s infinite ease-in-out;\n}\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(400%);\n  }\n}\n.copy-toast {\n  position: fixed;\n  bottom: var(--gap-lg);\n  right: var(--gap-lg);\n  background: var(--gradiente);\n  color: white;\n  padding: var(--gap-sm) var(--gap-md);\n  z-index: 10001;\n  box-shadow: 0 4px 12px var(--shadow-1);\n}\n.icon-xs {\n  width: var(--gap-md);\n  height: var(--gap-md);\n}\n.mirco-grid {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: var(--gap-sm);\n  margin-top: var(--gap-sm);\n}\n.user-chip {\n  background: transparent;\n  border-color: transparent;\n}\n/*# sourceMappingURL=task-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskListComponent, { className: "TaskListComponent", filePath: "src/app/restaurant/tasks/task-list/task-list.component.ts", lineNumber: 27 });
})();
export {
  TaskListComponent
};
//# sourceMappingURL=chunk-X4M7XPMU.js.map
