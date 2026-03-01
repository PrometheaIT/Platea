import {
  PersonalAppointmentService
} from "./chunk-I4AX7APC.js";
import {
  PRIORITY_LABELS,
  ROLE_LABELS,
  STATUS_LABELS
} from "./chunk-OZ6JK7FL.js";
import {
  TutorialService
} from "./chunk-DUZGO5NE.js";
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
  ActivatedRoute,
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
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
  map,
  setClassMetadata,
  signal,
  switchMap,
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

// src/app/restaurant/tasks/task-detail/task-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.user_id;
function TaskDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery.set(""));
    });
    \u0275\u0275element(1, "lucide-icon", 19);
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.copyFeedback());
  }
}
function TaskDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "lucide-icon", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3, "Task non trovata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(5, "Torna alla lista");
    \u0275\u0275elementEnd()();
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Conditional_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275element(2, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", sub_r5.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", sub_r5.completedDetails, "/", sub_r5.totalDetails, " ");
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("value", opt_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r8.label);
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 47);
    \u0275\u0275listener("ngModelChange", function TaskDetailComponent_Conditional_18_For_2_Conditional_6_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const sub_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubtaskStatusChange(sub_r5, $event));
    })("click", function TaskDetailComponent_Conditional_18_For_2_Conditional_6_Template_select_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275repeaterCreate(1, TaskDetailComponent_Conditional_18_For_2_Conditional_6_For_2_Template, 2, 2, "option", 48, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("status-select status-select--", sub_r5.status, "");
    \u0275\u0275property("ngModel", sub_r5.status);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statusOptions);
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Conditional_7_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("chip-mini status-chip--", sub_r5.status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(sub_r5.status), " ");
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Conditional_10_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, sub_r5.due_date, "dd/MM/yy"), " ");
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detail_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, detail_r12.due_date, "dd/MM/yy"), " ");
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 57);
  }
  if (rf & 2) {
    const detail_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", detail_r12.notes);
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "label", 53)(2, "input", 54);
    \u0275\u0275listener("change", function TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Template_input_change_2_listener() {
      const detail_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleDetail(detail_r12));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "span", 55);
    \u0275\u0275template(4, TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Conditional_4_Template, 3, 4, "span", 56)(5, TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Conditional_5_Template, 1, 1, "lucide-icon", 57);
    \u0275\u0275elementStart(6, "div", 58)(7, "button", 18);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Template_button_click_7_listener($event) {
      const detail_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const sub_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditDetailForm(detail_r12, sub_r5.id, $event));
    });
    \u0275\u0275element(8, "lucide-icon", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Template_button_click_9_listener($event) {
      const detail_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteDetail(detail_r12.id, detail_r12.name, $event));
    });
    \u0275\u0275element(10, "lucide-icon", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const detail_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("detail-row--dimmed", ctx_r1.searchQuery() && !ctx_r1.isDetailVisible(detail_r12))("detail-row--completed", detail_r12.completed);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", detail_r12.completed);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.highlight(detail_r12.name), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(detail_r12.due_date ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(detail_r12.notes ? 5 : -1);
  }
}
function TaskDetailComponent_Conditional_18_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275repeaterCreate(1, TaskDetailComponent_Conditional_18_For_2_Conditional_20_For_2_Template, 11, 8, "div", 51, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-tutorial", sub_r5.id === ctx_r1.highlightDetailsForSubtaskId() ? "task-detail-details" : null);
    \u0275\u0275advance();
    \u0275\u0275repeater(sub_r5.details);
  }
}
function TaskDetailComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_div_click_1_listener() {
      const sub_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSubtask(sub_r5.id));
    });
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(3, "lucide-icon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 29);
    \u0275\u0275template(5, TaskDetailComponent_Conditional_18_For_2_Conditional_5_Template, 5, 4, "div", 30)(6, TaskDetailComponent_Conditional_18_For_2_Conditional_6_Template, 3, 4, "select", 31)(7, TaskDetailComponent_Conditional_18_For_2_Conditional_7_Template, 2, 4, "span", 32);
    \u0275\u0275elementStart(8, "span", 33);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_span_click_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TaskDetailComponent_Conditional_18_For_2_Conditional_10_Template, 3, 4, "span", 34);
    \u0275\u0275elementStart(11, "div", 35);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "button", 36);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_button_click_12_listener($event) {
      const sub_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copySubtask(sub_r5, $event));
    });
    \u0275\u0275element(13, "lucide-icon", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 38);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_button_click_14_listener($event) {
      const sub_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditSubtaskForm(sub_r5, $event));
    });
    \u0275\u0275element(15, "lucide-icon", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 40);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_button_click_16_listener($event) {
      const sub_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSubtask(sub_r5.id, sub_r5.name, $event));
    });
    \u0275\u0275element(17, "lucide-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 18);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_18_For_2_Template_button_click_18_listener($event) {
      const sub_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateDetailForm(sub_r5.id, $event));
    });
    \u0275\u0275element(19, "lucide-icon", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, TaskDetailComponent_Conditional_18_For_2_Conditional_20_Template, 3, 1, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("subtask-row--dimmed", ctx_r1.searchQuery() && !ctx_r1.isSubtaskVisible(sub_r5))("subtask-row--expanded", ctx_r1.isExpanded(sub_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("rotate-90", ctx_r1.expandedSubtasks().has(sub_r5.id));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.highlight(sub_r5.name), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(sub_r5.hasDetails ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!sub_r5.hasDetails ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("title", ctx_r1.priorityLabel(sub_r5.priority));
    \u0275\u0275attribute("data-priority", sub_r5.priority);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" P", sub_r5.priority, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(sub_r5.due_date ? 10 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.expandedSubtasks().has(sub_r5.id) ? 20 : -1);
  }
}
function TaskDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, TaskDetailComponent_Conditional_18_For_2_Template, 21, 14, "div", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredSubtasks());
  }
}
function TaskDetailComponent_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "lucide-icon", 61);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3, "Non hai i permessi per visualizzare questa task.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_19_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(5, "Torna alla lista");
    \u0275\u0275elementEnd()();
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel(role_r15));
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_24_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", user_r16.firstName, " ", user_r16.lastName, "");
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275repeaterCreate(1, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_24_For_2_Template, 2, 1, "span", 87, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(3, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_24_For_4_Template, 2, 2, "span", 87, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.task().assignedRoles);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.task().assignedUsers);
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleLabel(ctx_r1.task().assigned_role), " ");
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Non assegnata ");
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "lucide-icon", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.task().client_name, " ");
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "lucide-icon", 89);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r1.task().due_date, "dd/MM/yyyy"), " ");
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "lucide-icon", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.task().notes, " ");
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_34_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r18 = ctx.$implicit;
    \u0275\u0275property("value", opt_r18.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r18.label);
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "lucide-icon", 91);
    \u0275\u0275elementStart(2, "select", 47);
    \u0275\u0275listener("ngModelChange", function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_34_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTaskStatusChange($event));
    })("click", function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_34_Template_select_click_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275repeaterCreate(3, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_34_For_4_Template, 2, 2, "option", 48, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-select status-select--", ctx_r1.task().status, "");
    \u0275\u0275property("ngModel", ctx_r1.task().status);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statusOptions);
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Dettagli: ", ctx_r1.task().completedDetails, "/", ctx_r1.task().totalDetails, "");
  }
}
function TaskDetailComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 60)(1, "div", 62)(2, "div", 63)(3, "h2", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65)(6, "button", 66);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_19_Conditional_1_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditTaskForm(ctx_r1.task(), $event));
    });
    \u0275\u0275element(7, "lucide-icon", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 68);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_19_Conditional_1_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyTask(ctx_r1.task(), $event));
    });
    \u0275\u0275element(9, "lucide-icon", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 70);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_19_Conditional_1_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteTask(ctx_r1.task().id, ctx_r1.task().title, $event));
    });
    \u0275\u0275element(11, "lucide-icon", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 72);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_19_Conditional_1_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSaveTemplateModal(ctx_r1.task(), $event));
    });
    \u0275\u0275element(13, "lucide-icon", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 74);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_19_Conditional_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCalendarEvent());
    });
    \u0275\u0275element(15, "lucide-icon", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 76)(17, "div", 77)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 78);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 77);
    \u0275\u0275element(23, "lucide-icon", 79);
    \u0275\u0275template(24, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_24_Template, 5, 0, "div", 80)(25, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_25_Template, 1, 1)(26, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_27_Template, 3, 1, "div", 77)(28, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_28_Template, 4, 4, "div", 77);
    \u0275\u0275elementStart(29, "div", 77);
    \u0275\u0275element(30, "lucide-icon", 81);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_33_Template, 3, 1, "div", 82)(34, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_34_Template, 5, 4, "div", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 83)(36, "div", 84)(37, "span");
    \u0275\u0275text(38, "Progresso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 85);
    \u0275\u0275element(42, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 86)(44, "div");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, TaskDetailComponent_Conditional_19_Conditional_1_Conditional_46_Template, 2, 2, "div");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.task().title);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("icon-button--success", !ctx_r1.task().calendar_event_id)("icon-button--warning", ctx_r1.task().calendar_event_id);
    \u0275\u0275property("disabled", !ctx_r1.task().due_date)("title", ctx_r1.task().calendar_event_id ? "Rimuovi dal calendario" : "Aggiungi al calendario");
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.task().calendar_event_id ? "calendar-off" : "calendar-plus");
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("chip-mini status-chip--", ctx_r1.task().status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(ctx_r1.task().status));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-priority", ctx_r1.task().priority);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.priorityLabel(ctx_r1.task().priority));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.task().assignedRoles.length > 0 || ctx_r1.task().assignedUsers.length > 0 ? 24 : ctx_r1.task().assigned_role ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.task().association_type === "cliente" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.task().due_date ? 28 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Creata: ", \u0275\u0275pipeBind2(32, 26, ctx_r1.task().created_at, "dd/MM/yy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.task().notes ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.task().totalSubtasks === 0 ? 34 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.task().progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.task().progress, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Sotto-task: ", ctx_r1.task().completedSubtasks, "/", ctx_r1.task().totalSubtasks, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.task().totalDetails > 0 ? 46 : -1);
  }
}
function TaskDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TaskDetailComponent_Conditional_19_Conditional_0_Template, 6, 0, "div", 15)(1, TaskDetailComponent_Conditional_19_Conditional_1_Template, 47, 29, "aside", 60);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.isTaskVisible(ctx_r1.task()) ? 0 : 1);
  }
}
function TaskDetailComponent_Conditional_20_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_20_For_22_Template_button_click_0_listener() {
      const p_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.taskForm.priority = p_r21);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("priority-btn--active", ctx_r1.taskForm.priority === p_r21);
    \u0275\u0275attribute("data-priority", p_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r21);
  }
}
function TaskDetailComponent_Conditional_20_Conditional_32_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 110)(1, "input", 131);
    \u0275\u0275listener("change", function TaskDetailComponent_Conditional_20_Conditional_32_For_5_Conditional_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      const role_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleRole(role_r24.value, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", role_r24.value)("checked", ctx_r1.taskForm.assignedRoles.includes(role_r24.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r24.label);
  }
}
function TaskDetailComponent_Conditional_20_Conditional_32_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TaskDetailComponent_Conditional_20_Conditional_32_For_5_Conditional_0_Template, 4, 3, "label", 110);
  }
  if (rf & 2) {
    const role_r24 = ctx.$implicit;
    \u0275\u0275conditional(role_r24.value !== "tutti" ? 0 : -1);
  }
}
function TaskDetailComponent_Conditional_20_Conditional_32_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 110)(1, "input", 131);
    \u0275\u0275listener("change", function TaskDetailComponent_Conditional_20_Conditional_32_Conditional_9_For_2_Template_input_change_1_listener($event) {
      const user_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleUser(user_r26.user_id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("value", user_r26.user_id)("checked", ctx_r1.taskForm.assignedUserIds.includes(user_r26.user_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", user_r26.first_name || user_r26.last_name ? user_r26.first_name + " " + user_r26.last_name : user_r26.email, " (", ctx_r1.roleLabel(user_r26.role), ") ");
  }
}
function TaskDetailComponent_Conditional_20_Conditional_32_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275repeaterCreate(1, TaskDetailComponent_Conditional_20_Conditional_32_Conditional_9_For_2_Template, 4, 4, "label", 110, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.staffUsers());
  }
}
function TaskDetailComponent_Conditional_20_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 128);
    \u0275\u0275text(2, "Ruoli:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80);
    \u0275\u0275repeaterCreate(4, TaskDetailComponent_Conditional_20_Conditional_32_For_5_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 129);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_20_Conditional_32_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showUsersExpanded.set(!ctx_r1.showUsersExpanded()));
    });
    \u0275\u0275element(7, "lucide-icon", 75);
    \u0275\u0275text(8, " Utenti specifici\n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TaskDetailComponent_Conditional_20_Conditional_32_Conditional_9_Template, 3, 0, "div", 130);
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
function TaskDetailComponent_Conditional_20_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label", 102);
    \u0275\u0275element(2, "lucide-icon", 132);
    \u0275\u0275text(3, " Nome cliente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 133);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_Conditional_47_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r27);
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
function TaskDetailComponent_Conditional_20_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label", 102);
    \u0275\u0275element(2, "lucide-icon", 134);
    \u0275\u0275text(3, " Ora ");
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_div_56_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r28);
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
function TaskDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTaskForm());
    });
    \u0275\u0275elementStart(1, "div", 93);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 94)(3, "div", 95);
    \u0275\u0275element(4, "lucide-icon", 96);
    \u0275\u0275elementStart(5, "h2", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 98);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTaskForm());
    });
    \u0275\u0275element(8, "lucide-icon", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 100)(10, "div", 101)(11, "label", 102);
    \u0275\u0275element(12, "lucide-icon", 103);
    \u0275\u0275text(13, " Titolo task ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.title, $event) || (ctx_r1.taskForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 105)(16, "div", 101)(17, "label", 102);
    \u0275\u0275element(18, "lucide-icon", 106);
    \u0275\u0275text(19, " Priorit\xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 65);
    \u0275\u0275repeaterCreate(21, TaskDetailComponent_Conditional_20_For_22_Template, 2, 4, "button", 107, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 101)(24, "label", 102);
    \u0275\u0275element(25, "lucide-icon", 108);
    \u0275\u0275text(26, " Utenti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 109)(28, "label", 110)(29, "input", 111);
    \u0275\u0275listener("ngModelChange", function TaskDetailComponent_Conditional_20_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.assignToAll.set($event);
      return \u0275\u0275resetView(ctx_r1.onAssignToAllChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Assegna a tutti");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, TaskDetailComponent_Conditional_20_Conditional_32_Template, 10, 2, "div", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 105)(34, "div", 101)(35, "label", 102);
    \u0275\u0275element(36, "lucide-icon", 113);
    \u0275\u0275text(37, " Associazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 114)(39, "label", 115)(40, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.association_type, $event) || (ctx_r1.taskForm.association_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Interna");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "label", 115)(44, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.association_type, $event) || (ctx_r1.taskForm.association_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Cliente");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(47, TaskDetailComponent_Conditional_20_Conditional_47_Template, 5, 1, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 105)(49, "div", 101)(50, "label", 102);
    \u0275\u0275element(51, "lucide-icon", 118);
    \u0275\u0275text(52, " Data scadenza ");
    \u0275\u0275elementStart(53, "span", 22);
    \u0275\u0275text(54, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.due_date, $event) || (ctx_r1.taskForm.due_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, TaskDetailComponent_Conditional_20_div_56_Template, 7, 1, "div", 120);
    \u0275\u0275elementStart(57, "div", 121)(58, "label", 110)(59, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.due_all_day, $event) || (ctx_r1.taskForm.due_all_day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61, "Tutto il giorno");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div", 101)(63, "label", 102);
    \u0275\u0275element(64, "lucide-icon", 122);
    \u0275\u0275text(65, " Note ");
    \u0275\u0275elementStart(66, "span", 22);
    \u0275\u0275text(67, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "textarea", 123);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_20_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.taskForm.notes, $event) || (ctx_r1.taskForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 124)(70, "button", 23);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_20_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTaskForm());
    });
    \u0275\u0275text(71, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 125);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_20_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTask());
    });
    \u0275\u0275element(73, "lucide-icon", 126);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingTaskId() ? "Modifica Task" : "Nuova Task", " ");
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingTaskId() ? "Salva modifiche" : "Crea", " ");
  }
}
function TaskDetailComponent_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 137);
  }
}
function TaskDetailComponent_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 138);
  }
}
function TaskDetailComponent_Conditional_21_Conditional_11_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_21_Conditional_11_For_12_Template_button_click_0_listener() {
      const p_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.subtaskForm.priority = p_r32);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("priority-btn--active", ctx_r1.subtaskForm.priority === p_r32);
    \u0275\u0275attribute("data-priority", p_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r32);
  }
}
function TaskDetailComponent_Conditional_21_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label", 102);
    \u0275\u0275element(2, "lucide-icon", 139);
    \u0275\u0275text(3, " Nome sotto-task ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_21_Conditional_11_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.subtaskForm.name, $event) || (ctx_r1.subtaskForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 105)(6, "div", 101)(7, "label", 102);
    \u0275\u0275element(8, "lucide-icon", 106);
    \u0275\u0275text(9, " Priorit\xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 65);
    \u0275\u0275repeaterCreate(11, TaskDetailComponent_Conditional_21_Conditional_11_For_12_Template, 2, 4, "button", 107, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 101)(14, "label", 102);
    \u0275\u0275element(15, "lucide-icon", 118);
    \u0275\u0275text(16, " Scadenza ");
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_21_Conditional_11_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.subtaskForm.due_date, $event) || (ctx_r1.subtaskForm.due_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.subtaskForm.name);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.priorities);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.subtaskForm.due_date);
  }
}
function TaskDetailComponent_Conditional_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label", 102);
    \u0275\u0275element(2, "lucide-icon", 141);
    \u0275\u0275text(3, " Nome dettaglio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 142);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_21_Conditional_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.name, $event) || (ctx_r1.detailForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 101)(6, "label", 102);
    \u0275\u0275element(7, "lucide-icon", 118);
    \u0275\u0275text(8, " Scadenza ");
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_21_Conditional_12_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.due_date, $event) || (ctx_r1.detailForm.due_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 101)(13, "label", 102);
    \u0275\u0275element(14, "lucide-icon", 122);
    \u0275\u0275text(15, " Note ");
    \u0275\u0275elementStart(16, "span", 22);
    \u0275\u0275text(17, "(opzionale)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "textarea", 143);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_21_Conditional_12_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.notes, $event) || (ctx_r1.detailForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.name);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.due_date);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.notes);
  }
}
function TaskDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 136);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 94)(3, "div", 95);
    \u0275\u0275template(4, TaskDetailComponent_Conditional_21_Conditional_4_Template, 1, 0, "lucide-icon", 137)(5, TaskDetailComponent_Conditional_21_Conditional_5_Template, 1, 0, "lucide-icon", 138);
    \u0275\u0275elementStart(6, "h2", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 98);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275element(9, "lucide-icon", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 100);
    \u0275\u0275template(11, TaskDetailComponent_Conditional_21_Conditional_11_Template, 20, 2)(12, TaskDetailComponent_Conditional_21_Conditional_12_Template, 19, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 124)(14, "button", 23);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_21_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(15, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 125);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_21_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveForm());
    });
    \u0275\u0275element(17, "lucide-icon", 126);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.formType() === "subtask" ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formTitle);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.formType() === "subtask" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formType() === "detail" ? 12 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId() ? "Salva modifiche" : "Crea", " ");
  }
}
function TaskDetailComponent_Conditional_22_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275element(1, "lucide-icon", 150);
    \u0275\u0275text(2, " Verranno eliminati anche tutti i dettagli associati. ");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 144)(2, "div", 94)(3, "div", 95);
    \u0275\u0275element(4, "lucide-icon", 145);
    \u0275\u0275elementStart(5, "h2", 97);
    \u0275\u0275text(6, "Conferma eliminazione");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 98);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275element(8, "lucide-icon", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 146)(10, "p");
    \u0275\u0275text(11, " Sei sicuro di voler eliminare ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, TaskDetailComponent_Conditional_22_Conditional_15_Template, 3, 0, "div", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 124)(17, "button", 23);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_22_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(18, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 148);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_22_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeDelete());
    });
    \u0275\u0275element(20, "lucide-icon", 149);
    \u0275\u0275text(21, " Elimina ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1('"', ctx_r1.pendingDelete().label, '"');
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pendingDelete().type === "subtask" ? 15 : -1);
  }
}
function TaskDetailComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 144)(2, "div", 94)(3, "div", 95);
    \u0275\u0275element(4, "lucide-icon", 145);
    \u0275\u0275elementStart(5, "h2", 97);
    \u0275\u0275text(6, "Elimina Task");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 98);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTask());
    });
    \u0275\u0275element(8, "lucide-icon", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 146)(10, "p");
    \u0275\u0275text(11, " Sei sicuro di voler eliminare la task ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 147);
    \u0275\u0275element(16, "lucide-icon", 150);
    \u0275\u0275text(17, " Verranno eliminate anche tutte le sotto-task e i dettagli associati. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 124)(19, "button", 23);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_23_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTask());
    });
    \u0275\u0275text(20, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 148);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_23_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeDeleteTask());
    });
    \u0275\u0275element(22, "lucide-icon", 149);
    \u0275\u0275text(23, " Elimina ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1('"', ctx_r1.pendingDeleteTask().title, '"');
  }
}
var TaskDetailComponent = class _TaskDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  taskService = inject(TaskService);
  sanitizer = inject(DomSanitizer);
  authService = inject(AuthService);
  tutorialService = inject(TutorialService);
  cdr = inject(ChangeDetectorRef);
  highlightDetailsForSubtaskId = signal(null);
  personalAppointmentService = inject(PersonalAppointmentService);
  // Stato per il form di modifica task
  showTaskForm = signal(false);
  editingTaskId = signal(null);
  taskForm = {
    title: "",
    notes: "",
    priority: 3,
    association_type: "interna",
    client_name: "",
    assigned_role: "tutti",
    assignedRoles: [],
    assignedUserIds: [],
    due_date: "",
    due_time: "",
    // ← aggiunto
    due_all_day: false
    // ← aggiunto
  };
  staffUsers = signal([]);
  assignToAll = signal(false);
  showUsersExpanded = signal(false);
  // Reference data per il form (già presenti in TaskListComponent)
  roles = Object.entries(ROLE_LABELS).map(([value, label]) => ({ value, label }));
  priorities = [1, 2, 3, 4, 5];
  // Esponiamo loading$ per il template
  loading$ = this.taskService.loading$;
  // Ottieni la task corrente
  task$ = this.route.paramMap.pipe(map((params) => params.get("id")), switchMap((id) => this.taskService.tasksView$.pipe(map((tasks) => tasks.find((t) => t.id === id) ?? null))));
  task = signal(null);
  taskSubscription;
  // Stato UI
  searchQuery = signal("");
  expandedSubtasks = signal(/* @__PURE__ */ new Set());
  showForm = signal(false);
  formType = signal("subtask");
  editingId = signal(null);
  pendingDelete = signal(null);
  pendingDeleteTask = signal(null);
  // per eliminazione task
  copyFeedback = signal(null);
  // Dati form
  subtaskForm = this.emptySubtaskForm();
  detailForm = this.emptyDetailForm();
  // Sotto-task e dettagli filtrati
  filteredSubtasks = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const currentTask = this.task();
    if (!currentTask)
      return [];
    if (!q)
      return currentTask.subtasks;
    return currentTask.subtasks.filter((sub) => sub.name.toLowerCase().includes(q) || sub.details.some((d) => d.name.toLowerCase().includes(q) || (d.notes ?? "").toLowerCase().includes(q)));
  });
  constructor() {
    effect(() => {
      const currentTask = this.task();
      if (currentTask && this.tutorialService.isVisible()) {
        const step = this.tutorialService.currentStepData();
        if (step?.id === "task-detail") {
          setTimeout(() => this.tutorialService.refreshTooltip(), 100);
        }
      }
    });
    effect(() => {
      const tooltipData = this.tutorialService.currentTooltipData();
      if (tooltipData?.tooltipTarget === '[data-tutorial="task-detail-details"]') {
        const firstId = this.firstSubtaskId();
        if (firstId) {
          this.expandedSubtasks.update((set) => set.add(firstId));
          this.highlightDetailsForSubtaskId.set(firstId);
        }
      } else {
        this.highlightDetailsForSubtaskId.set(null);
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const staff = yield this.taskService.getStaffUsers();
      this.staffUsers.set(staff);
      this.taskSubscription = this.task$.subscribe((task) => this.task.set(task));
    });
  }
  ngOnDestroy() {
    this.taskSubscription?.unsubscribe();
  }
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
  // Reference data
  statusOptions = [
    { value: "da_iniziare", label: STATUS_LABELS.da_iniziare },
    { value: "in_lavorazione", label: STATUS_LABELS.in_lavorazione },
    { value: "completata", label: STATUS_LABELS.completata }
  ];
  // Helper
  isExpanded(id) {
    if (this.searchQuery().trim())
      return true;
    return this.expandedSubtasks().has(id);
  }
  toggleSubtask(id) {
    const set = new Set(this.expandedSubtasks());
    set.has(id) ? set.delete(id) : set.add(id);
    this.expandedSubtasks.set(set);
  }
  isSubtaskVisible(sub) {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q)
      return true;
    return sub.name.toLowerCase().includes(q) || sub.details.some((d) => d.name.toLowerCase().includes(q) || (d.notes ?? "").toLowerCase().includes(q));
  }
  isDetailVisible(detail) {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q)
      return true;
    return detail.name.toLowerCase().includes(q) || (detail.notes ?? "").toLowerCase().includes(q);
  }
  highlight(text) {
    const q = this.searchQuery().trim();
    if (!q)
      return text;
    const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const html = text.replace(new RegExp(`(${esc})`, "gi"), "<mark>$1</mark>");
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  get formTitle() {
    const isEdit = !!this.editingId();
    switch (this.formType()) {
      case "subtask":
        return isEdit ? "Modifica Sotto-task" : "Nuova Sotto-task";
      case "detail":
        return isEdit ? "Modifica Dettaglio" : "Nuovo Dettaglio";
    }
  }
  // Apertura form
  openCreateSubtaskForm(event) {
    event.stopPropagation();
    const currentTask = this.task();
    if (!currentTask)
      return;
    this.subtaskForm = __spreadProps(__spreadValues({}, this.emptySubtaskForm()), { task_id: currentTask.id });
    this.editingId.set(null);
    this.formType.set("subtask");
    this.showForm.set(true);
  }
  openEditSubtaskForm(sub, event) {
    event.stopPropagation();
    this.subtaskForm = {
      name: sub.name,
      priority: sub.priority,
      due_date: sub.due_date ?? "",
      task_id: sub.task_id
    };
    this.editingId.set(sub.id);
    this.formType.set("subtask");
    this.showForm.set(true);
  }
  openCreateDetailForm(subtaskId, event) {
    event.stopPropagation();
    this.detailForm = __spreadProps(__spreadValues({}, this.emptyDetailForm()), { subtask_id: subtaskId });
    this.editingId.set(null);
    this.formType.set("detail");
    this.showForm.set(true);
  }
  openEditDetailForm(detail, subtaskId, event) {
    event.stopPropagation();
    this.detailForm = {
      name: detail.name,
      notes: detail.notes ?? "",
      due_date: detail.due_date ?? "",
      subtask_id: subtaskId
    };
    this.editingId.set(detail.id);
    this.formType.set("detail");
    this.showForm.set(true);
  }
  // Salvataggio
  saveForm() {
    return __async(this, null, function* () {
      switch (this.formType()) {
        case "subtask":
          yield this.saveSubtask();
          break;
        case "detail":
          yield this.saveDetail();
          break;
      }
    });
  }
  saveSubtask() {
    return __async(this, null, function* () {
      if (!this.subtaskForm.name.trim())
        return;
      const payload = {
        name: this.subtaskForm.name.trim(),
        priority: this.subtaskForm.priority,
        due_date: this.subtaskForm.due_date || null,
        task_id: this.subtaskForm.task_id
      };
      const id = this.editingId();
      id ? yield this.taskService.updateSubtask(id, payload) : yield this.taskService.createSubtask(payload);
      this.closeForm();
    });
  }
  saveDetail() {
    return __async(this, null, function* () {
      if (!this.detailForm.name.trim())
        return;
      const payload = {
        name: this.detailForm.name.trim(),
        notes: this.detailForm.notes.trim() || null,
        due_date: this.detailForm.due_date || null,
        subtask_id: this.detailForm.subtask_id
      };
      const id = this.editingId();
      id ? yield this.taskService.updateDetail(id, payload) : yield this.taskService.createDetail(payload);
      this.closeForm();
    });
  }
  closeForm() {
    this.showForm.set(false);
  }
  // Eliminazione sotto-task / dettagli
  confirmDeleteSubtask(id, name, event) {
    event.stopPropagation();
    this.pendingDelete.set({ type: "subtask", id, label: name });
  }
  confirmDeleteDetail(id, name, event) {
    event.stopPropagation();
    this.pendingDelete.set({ type: "detail", id, label: name });
  }
  cancelDelete() {
    this.pendingDelete.set(null);
  }
  executeDelete() {
    return __async(this, null, function* () {
      const p = this.pendingDelete();
      if (!p)
        return;
      if (p.type === "subtask")
        yield this.taskService.deleteSubtask(p.id);
      if (p.type === "detail")
        yield this.taskService.deleteDetail(p.id);
      this.pendingDelete.set(null);
    });
  }
  // Eliminazione task
  confirmDeleteTask(id, title, event) {
    event.stopPropagation();
    this.pendingDeleteTask.set({ id, title });
  }
  cancelDeleteTask() {
    this.pendingDeleteTask.set(null);
  }
  executeDeleteTask() {
    return __async(this, null, function* () {
      const p = this.pendingDeleteTask();
      if (!p)
        return;
      yield this.taskService.delete(p.id);
      this.pendingDeleteTask.set(null);
      this.router.navigate(["/tasks"]);
    });
  }
  // Cambio stato sotto-task (solo se senza dettagli)
  onSubtaskStatusChange(sub, status) {
    return __async(this, null, function* () {
      yield this.taskService.updateSubtask(sub.id, { status });
    });
  }
  // Toggle dettaglio
  toggleDetail(detail) {
    return __async(this, null, function* () {
      yield this.taskService.updateDetail(detail.id, { completed: !detail.completed });
    });
  }
  // Copia task
  copyTask(task, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      yield navigator.clipboard.writeText(this.taskService.buildTaskCopyText(task));
      this.flashCopy("Task copiata negli appunti \u2713");
    });
  }
  // Copia sotto-task
  copySubtask(sub, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      yield navigator.clipboard.writeText(this.taskService.buildSubtaskCopyText(sub));
      this.flashCopy("Sotto-task copiata negli appunti \u2713");
    });
  }
  flashCopy(msg) {
    this.copyFeedback.set(msg);
    setTimeout(() => this.copyFeedback.set(null), 2500);
  }
  // Navigazione indietro
  goBack() {
    this.router.navigate(["/restaurant/task-list"]);
  }
  // Form vuoti
  emptySubtaskForm() {
    return { name: "", priority: 3, due_date: "", task_id: "" };
  }
  emptyDetailForm() {
    return { name: "", notes: "", due_date: "", subtask_id: "" };
  }
  trackById = (_, item) => item.id;
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
    this.editingTaskId.set(task.id);
    this.showTaskForm.set(true);
  }
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
      };
      const id = this.editingTaskId();
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
      this.closeTaskForm();
    });
  }
  closeTaskForm() {
    this.showTaskForm.set(false);
    this.editingTaskId.set(null);
  }
  isTaskVisible(task) {
    const role = this.authService.getStaffRole();
    const userId = this.authService.currentUserValue?.id;
    const isOwner = this.authService.isOwner();
    const isManager = this.authService.isManager();
    if (isOwner || isManager)
      return true;
    if (task.assigned_role === "tutti")
      return true;
    if (task.assigned_role === role)
      return true;
    if (role && task.assignedRoles?.includes(role))
      return true;
    if (userId && task.assignedUsers?.some((u) => u.id === userId))
      return true;
    return false;
  }
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
  openSaveTemplateModal(task, event) {
    event.stopPropagation();
    const templateName = prompt("Inserisci un nome per il template:", task.title);
    if (templateName && templateName.trim()) {
      this.taskService.saveAsTemplate(task.id, templateName.trim()).then((result) => {
        if (result) {
          alert("Template creato con successo!");
        } else {
          alert("Errore durante la creazione del template.");
        }
      });
    }
  }
  onTaskStatusChange(status) {
    return __async(this, null, function* () {
      const currentTask = this.task();
      if (!currentTask)
        return;
      yield this.taskService.update(currentTask.id, { status });
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.tutorialService.isVisible()) {
        const step = this.tutorialService.currentStepData();
        if (step?.id === "task-detail") {
          this.tutorialService.refreshTooltip();
        }
      }
    }, 300);
  }
  // Calcola l'ID del primo sotto-task (se presente)
  firstSubtaskId = computed(() => {
    const task = this.task();
    return task?.subtasks.length ? task.subtasks[0].id : null;
  });
  // Metodo per toggle
  toggleCalendarEvent() {
    return __async(this, null, function* () {
      const task = this.task();
      if (!task)
        return;
      if (task.calendar_event_id) {
        const confirmed = confirm("Rimuovere questa task dal calendario?");
        if (!confirmed)
          return;
        const deleted = yield this.personalAppointmentService.delete(task.calendar_event_id);
        if (deleted) {
          yield this.taskService.update(task.id, { calendar_event_id: null });
          this.task.update((current) => {
            if (!current)
              return null;
            return __spreadProps(__spreadValues({}, current), { calendar_event_id: null });
          });
        }
      } else {
        if (!task.due_date) {
          alert("La task non ha una data di scadenza.");
          return;
        }
        const dueDate = new Date(task.due_date);
        let startDate, endDate;
        if (task.due_all_day) {
          startDate = new Date(dueDate);
          startDate.setHours(0, 0, 0, 0);
          endDate = new Date(dueDate);
          endDate.setHours(23, 59, 59, 999);
        } else {
          startDate = dueDate;
          endDate = new Date(dueDate);
          endDate.setHours(dueDate.getHours(), dueDate.getMinutes(), 59, 999);
        }
        const newEvent = yield this.personalAppointmentService.create({
          title: `\u{1F4CB} ${task.title}`,
          description: task.notes || "",
          start_datetime: startDate.toISOString(),
          end_datetime: endDate.toISOString(),
          color: "#7209B7",
          is_all_day: task.due_all_day,
          task_id: task.id
        });
        if (newEvent) {
          yield this.taskService.update(task.id, { calendar_event_id: newEvent.id });
          this.task.update((current) => {
            if (!current)
              return null;
            return __spreadProps(__spreadValues({}, current), { calendar_event_id: newEvent.id });
          });
        }
      }
    });
  }
  static \u0275fac = function TaskDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDetailComponent, selectors: [["app-task-detail"]], decls: 24, vars: 12, consts: [["data-tutorial", "task-detail", 1, "page-container", "tasks-page"], [1, "tasks-toolbar", "flex", "items-center", "justify-between", "gap-md", "p-md"], [1, "flex", "items-center", "gap-sm", "w-100"], ["title", "Torna indietro", 1, "icon-button", 3, "click"], ["name", "arrow-left", 1, "icon-sm"], [1, "w-100", "flex", "items-center", "gap-sm"], ["name", "search", 1, "search-icon", "icon-sm"], ["type", "text", "placeholder", "Cerca sotto-task e dettagli...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "icon-button", "x-small"], ["data-tutorial", "task-detail-add-subtask", 1, "promethea-button", 3, "click"], ["name", "plus", 1, "icon-sm"], [1, "loading-bar"], [1, "copy-toast", "chip", "rounded-full"], [1, "detail-layout"], [1, "detail-content"], [1, "empty-state", "flex", "flex-col", "items-center", "justify-center", "p-lg", "gap-md"], ["data-tutorial", "task-detail-subtasks", 1, "flex", "flex-col", "gap-md"], [1, "modal-overlay"], [1, "icon-button", "x-small", 3, "click"], ["name", "x", 1, "icon-xs"], [1, "loading-bar__fill"], ["name", "clipboard-check", 1, "icon-xl", 2, "opacity", ".3"], [1, "text-muted"], [1, "promethea-button", "ghost", 3, "click"], [1, "subtask-row", 3, "subtask-row--dimmed", "subtask-row--expanded"], [1, "subtask-row"], [1, "subtask-header", "flex", "items-center", "gap-sm", "p-sm", "transition", 3, "click"], [1, "icon-button", "x-small", "expand-btn", "transition", 3, "click"], ["name", "chevron-right", "size", "16"], [1, "subtask-name", "font-semibold", 2, "flex", "1", 3, "innerHTML"], [1, "flex", "items-center", "gap-sm", 2, "flex-shrink", "0"], [3, "class", "ngModel"], [3, "class"], [1, "chip-mini", "priority-chip", 3, "click", "title"], [1, "text-muted", 2, "font-size", "var(--fs-mini)", "white-space", "nowrap"], [1, "subtask-actions", "flex-wrap", "flex", "gap-sm", 3, "click"], ["title", "Copia", 1, "icon-button", "x-small", 3, "click"], ["name", "copy", "size", "14"], ["title", "Modifica", 1, "icon-button", "x-small", 3, "click"], ["name", "pencil", "size", "14"], ["title", "Elimina", 1, "icon-button", "x-small", "icon-button--danger", 3, "click"], ["name", "trash2", "size", "14"], ["name", "plus", "size", "14"], [1, "details-list"], [1, "flex", "items-center", "gap-sm", 2, "flex-shrink", "0", 3, "click"], [1, "progress-track", "progress-track--mini"], [1, "progress-fill"], [3, "ngModelChange", "click", "ngModel"], [3, "value"], [3, "click"], [1, "text-muted", 2, "font-size", "var(--fs-mini)", "white-space", "nowrap", 3, "click"], [1, "detail-row", "flex", "items-center", "gap-sm", "p-sm", "rounded", "transition", 3, "detail-row--dimmed", "detail-row--completed"], [1, "detail-row", "flex", "items-center", "gap-sm", "p-sm", "rounded", "transition"], [1, "checkbox-label", "p-0", 2, "flex-shrink", "0"], ["type", "checkbox", 3, "change", "checked"], [1, "detail-name", 2, "flex", "1", "min-width", "0", 3, "innerHTML"], [1, "chip-mini", 2, "flex-shrink", "0"], ["name", "sticky-note", 1, "text-muted", "icon-sm", 2, "cursor", "help", "flex-shrink", "0", 3, "title"], [1, "detail-actions", "flex", "gap-sm"], [1, "icon-button", "x-small", "icon-button--danger", 3, "click"], ["data-tutorial", "task-detail-summary", 1, "task-summary"], ["name", "lock", 1, "icon-xl", 2, "opacity", ".3"], [1, "card"], [1, "card-header", "flex", "items-center", "justify-between"], [1, "card-title", "text-interrupt", 2, "margin-bottom", "0"], [1, "flex", "gap-sm"], ["title", "Modifica task", 1, "icon-button", 3, "click"], ["name", "pencil", "size", "16"], ["title", "Copia task", 1, "icon-button", 3, "click"], ["name", "copy", "size", "16"], ["title", "Elimina task", 1, "icon-button", "icon-button--danger", 3, "click"], ["name", "trash2", "size", "16"], ["title", "Salva come template", 1, "icon-button", 3, "click"], ["name", "copy-plus", "size", "16"], [1, "icon-button", 3, "click", "disabled", "title"], ["size", "16", 3, "name"], [1, "task-meta"], [1, "meta-row"], [1, "chip-mini", "priority-chip"], ["name", "users", 1, "icon-md"], [1, "flex", "flex-wrap", "gap-sm"], ["name", "clock", 1, "icon-md"], [1, "task-notes", "meta-row"], [1, "progress-info"], [1, "flex", "items-center", "justify-between"], [1, "progress-track"], [1, "counters"], [1, "chip-mini"], ["name", "user", 1, "icon-md"], ["name", "calendar", 1, "icon-md"], ["name", "file-text", 1, "icon-md"], ["name", "check-circle", 1, "icon-md"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-md", 3, "click"], [1, "modal-header"], [1, "flex", "items-center", "gap-sm"], ["name", "clipboard-list", 1, "text-primary", "icon-md"], [1, "section-title", 2, "font-size", "var(--fs-md)"], [1, "icon-button", 3, "click"], ["name", "x", 1, "icon-sm"], [1, "form-card"], [1, "form-group"], [1, "standard-label"], ["name", "type", 1, "icon-sm"], ["type", "text", "placeholder", "Es. Revisione men\xF9 estate 2025", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["name", "flag", 1, "icon-sm"], ["type", "button", 1, "priority-btn", "transition", 3, "priority-btn--active"], ["name", "users", 1, "icon-sm"], [1, "flex", "flex-col", "gap-sm"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "gap-sm", "pl-md"], ["name", "link", 1, "icon-sm"], [1, "flex", "gap-md"], [1, "checkbox-label", "rounded"], ["type", "radio", "value", "interna", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "cliente", 3, "ngModelChange", "ngModel"], ["name", "calendar", 1, "icon-sm"], ["type", "date", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], [1, "form-group", 2, "align-self", "flex-end"], ["name", "file-text", 1, "icon-sm"], ["placeholder", "Descrizione, contesto o istruzioni...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "promethea-button", 3, "click"], ["name", "save", 1, "icon-sm"], ["type", "button", 1, "priority-btn", "transition", 3, "click"], [1, "font-semibold"], [1, "font-semibold", "mt-sm", "flex", "items-center", "gap-sm", 2, "cursor", "pointer", 3, "click"], [1, "flex", "flex-wrap", "gap-sm", "pl-md"], ["type", "checkbox", 3, "change", "value", "checked"], ["name", "user", 1, "icon-sm"], ["type", "text", "placeholder", "Es. Mario Rossi", 3, "ngModelChange", "ngModel"], ["name", "clock", 1, "icon-sm"], ["type", "time", 3, "ngModelChange", "ngModel"], [1, "modal-container", "modal-sm", 3, "click"], ["name", "list-checks", 1, "text-primary", "icon-md"], ["name", "check-circle", 1, "text-primary", "icon-md"], ["name", "list-checks", 1, "icon-sm"], ["type", "text", "placeholder", "Es. Aggiornare prezzi antipasti", "required", "", 3, "ngModelChange", "ngModel"], ["name", "check-circle", 1, "icon-sm"], ["type", "text", "placeholder", "Es. Contattare il fornitore", "required", "", 3, "ngModelChange", "ngModel"], ["placeholder", "Dettagli aggiuntivi...", 3, "ngModelChange", "ngModel"], [1, "modal-container", "modal-sm"], ["name", "alert-triangle", 1, "icon-md", 2, "color", "var(--secondary)"], [1, "form-card", "flex", "flex-col", "gap-md"], [1, "info-message"], [1, "promethea-button", 2, "background", "var(--secondary)", 3, "click"], ["name", "trash2", 1, "icon-sm"], ["name", "info", 1, "icon-sm"]], template: function TaskDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function TaskDetailComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(4, "lucide-icon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "lucide-icon", 6);
      \u0275\u0275elementStart(7, "input", 7);
      \u0275\u0275listener("ngModelChange", function TaskDetailComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.searchQuery.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, TaskDetailComponent_Conditional_8_Template, 2, 0, "button", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 9);
      \u0275\u0275listener("click", function TaskDetailComponent_Template_button_click_9_listener($event) {
        return ctx.openCreateSubtaskForm($event);
      });
      \u0275\u0275element(10, "lucide-icon", 10);
      \u0275\u0275text(11, "Sotto-task ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, TaskDetailComponent_Conditional_12_Template, 2, 0, "div", 11);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275template(14, TaskDetailComponent_Conditional_14_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(15, "div", 13)(16, "div", 14);
      \u0275\u0275template(17, TaskDetailComponent_Conditional_17_Template, 6, 0, "div", 15)(18, TaskDetailComponent_Conditional_18_Template, 3, 0, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, TaskDetailComponent_Conditional_19_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, TaskDetailComponent_Conditional_20_Template, 75, 12, "div", 17)(21, TaskDetailComponent_Conditional_21_Template, 19, 5, "div", 17)(22, TaskDetailComponent_Conditional_22_Template, 22, 2, "div", 17)(23, TaskDetailComponent_Conditional_23_Template, 24, 1, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchQuery() ? 8 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(13, 10, ctx.loading$) ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.copyFeedback() ? 14 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.task() ? 17 : 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.task() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showTaskForm() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pendingDelete() ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pendingDeleteTask() ? 23 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, DatePipe, AsyncPipe, LucideAngularModule, LucideAngularComponent, CommonModule, NgIf], styles: ['\n\n.status-chip--da_iniziare[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--text-muted) 20%, transparent);\n  color: var(--text-color);\n}\n.status-chip--in_lavorazione[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ffe5a4 20%, transparent);\n}\n.status-chip--completata[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #064e3b;\n}\n.priority-chip[data-priority="1"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n}\n.priority-chip[data-priority="2"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #3b82f6 20%, transparent);\n}\n.priority-chip[data-priority="3"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n}\n.priority-chip[data-priority="4"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f97316 20%, transparent);\n}\n.priority-chip[data-priority="5"][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n}\n.priority-btn[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  border: 1px solid var(--smoke-1);\n  background: var(--background);\n  color: var(--text-color);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.priority-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--smoke-1);\n}\n.priority-btn--active[_ngcontent-%COMP%] {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--gradiente);\n  transition: width 0.3s ease;\n}\n.progress-track--mini[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 60px;\n}\n.loading-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: var(--smoke-1);\n  z-index: 10000;\n}\n.loading-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 30%;\n  background: var(--gradiente);\n  animation: _ngcontent-%COMP%_loading 1s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(400%);\n  }\n}\n.copy-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: var(--gap-lg);\n  right: var(--gap-lg);\n  background: var(--gradiente);\n  color: white;\n  padding: var(--gap-sm) var(--gap-md);\n  z-index: 10001;\n  box-shadow: 0 4px 12px var(--shadow-1);\n}\n.detail-row--completed[_ngcontent-%COMP%]   .detail-name[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n.detail-row--dimmed[_ngcontent-%COMP%], \n.subtask-row--dimmed[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.btn-add-detail[_ngcontent-%COMP%] {\n  border: 1px dashed var(--smoke-2);\n  background: var(--background);\n  color: var(--text-muted);\n  width: 100%;\n  justify-content: center;\n  border-radius: 8px;\n  margin-top: var(--gap-sm);\n}\n.btn-add-detail[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--smoke-1);\n  color: var(--primary);\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  min-height: 0;\n}\n.detail-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  max-height: 100%;\n  padding: var(--gap-sm);\n}\n.task-summary[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  position: sticky;\n  align-self: start;\n  padding: var(--gap-sm);\n  max-height: 100%;\n  overflow-y: auto;\n}\n.task-summary[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: var(--gap-md);\n}\n.task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  margin: var(--gap-md) 0;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  font-size: var(--fs-sm);\n  word-break: break-word;\n}\n.meta-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.progress-info[_ngcontent-%COMP%] {\n  margin: var(--gap-sm) 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.counters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  font-size: var(--fs-sm);\n  color: var(--text-muted);\n  border-top: 1px solid var(--smoke-1);\n  padding-top: var(--gap-md);\n}\n.details-list[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  border-radius: 0 0 var(--gap-sm) var(--gap-sm);\n}\n.subtask-header[_ngcontent-%COMP%] {\n  background: var(--vetro);\n  border-radius: var(--gap-sm) var(--gap-sm) 0 0;\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.subtask-header[_ngcontent-%COMP%]:hover {\n  background-color: var(--smoke-1);\n}\n.rotate-90[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  transition: transform 0.2s ease;\n}\n.mirco-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: var(--gap-sm);\n  margin-top: var(--gap-sm);\n}\n@media (max-width: 768px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: calc(100dvh - var(--sidebar--collapsed-width));\n    overflow: hidden;\n  }\n  .task-summary[_ngcontent-%COMP%] {\n    width: 100%;\n    order: -1;\n    flex-shrink: 0;\n    max-height: 45vh;\n    overflow-y: auto;\n    position: static;\n    align-self: auto;\n    margin-bottom: 0;\n    background: var(--background);\n  }\n  .detail-content[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    max-height: none;\n  }\n}\n/*# sourceMappingURL=task-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDetailComponent, [{
    type: Component,
    args: [{ selector: "app-task-detail", standalone: true, imports: [FormsModule, DatePipe, AsyncPipe, LucideAngularModule, CommonModule], template: `<div class="page-container tasks-page" data-tutorial="task-detail">\r
  <!-- Toolbar con ricerca e back -->\r
  <div class="tasks-toolbar flex items-center justify-between gap-md p-md ">\r
    <div class="flex items-center gap-sm w-100">\r
      <button class="icon-button" (click)="goBack()" title="Torna indietro">\r
        <lucide-icon name="arrow-left" class="icon-sm"></lucide-icon>\r
      </button>\r
      <div class="w-100 flex items-center gap-sm">\r
        <lucide-icon name="search" class="search-icon icon-sm"></lucide-icon>\r
        <input\r
          type="text"\r
          class="search-input"\r
          placeholder="Cerca sotto-task e dettagli..."\r
          [ngModel]="searchQuery()"\r
          (ngModelChange)="searchQuery.set($event)"\r
        />\r
        @if (searchQuery()) {\r
          <button class="icon-button x-small" (click)="searchQuery.set('')">\r
            <lucide-icon name="x" class="icon-xs"></lucide-icon>\r
          </button>\r
        }\r
      </div>\r
    </div>\r
\r
    <button class="promethea-button" (click)="openCreateSubtaskForm($event)" data-tutorial="task-detail-add-subtask">\r
      <lucide-icon name="plus" class="icon-sm"></lucide-icon>Sotto-task\r
    </button>\r
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
  <!-- Layout a due colonne -->\r
  <div class="detail-layout">\r
    <!-- Colonna sinistra: contenuto scrollabile -->\r
    <div class="detail-content">\r
      @if (!task()) {\r
        <div class="empty-state flex flex-col items-center justify-center p-lg gap-md">\r
          <lucide-icon name="clipboard-check" class="icon-xl" style="opacity:.3"></lucide-icon>\r
          <p class="text-muted">Task non trovata</p>\r
          <button class="promethea-button ghost" (click)="goBack()">Torna alla lista</button>\r
        </div>\r
      } @else {\r
        <!-- Lista sotto-task -->\r
        <div class="flex flex-col gap-md" data-tutorial="task-detail-subtasks">\r
          @for (sub of filteredSubtasks(); track sub.id) {\r
            <div class="subtask-row"\r
                 [class.subtask-row--dimmed]="searchQuery() && !isSubtaskVisible(sub)"\r
                 [class.subtask-row--expanded]="isExpanded(sub.id)">\r
\r
              <!-- Subtask header - ora l'intera riga \xE8 cliccabile -->\r
              <div class="subtask-header flex items-center gap-sm p-sm transition" (click)="toggleSubtask(sub.id)">\r
\r
                <!-- Bottone freccia con rotazione condizionale -->\r
                <button class="icon-button x-small expand-btn transition" (click)="$event.stopPropagation()">\r
                  <lucide-icon \r
                    name="chevron-right" \r
                    size="16" \r
                    [class.rotate-90]="expandedSubtasks().has(sub.id)">\r
                  </lucide-icon>\r
                </button>\r
\r
                <span class="subtask-name font-semibold"\r
                      style="flex:1;"\r
                      [innerHTML]="highlight(sub.name)"></span>\r
\r
                <!-- Progress mini (solo se ha dettagli) -->\r
                @if (sub.hasDetails) {\r
                  <div class="flex items-center gap-sm" style="flex-shrink:0" (click)="$event.stopPropagation()">\r
                    <div class="progress-track progress-track--mini">\r
                      <div class="progress-fill" [style.width.%]="sub.progress"></div>\r
                    </div>\r
                    <span class="text-muted" style="font-size:var(--fs-mini); white-space:nowrap">\r
                      {{ sub.completedDetails }}/{{ sub.totalDetails }}\r
                    </span>\r
                  </div>\r
                }\r
\r
                <!-- Status: select (manuale) o chip (automatico) -->\r
                @if (!sub.hasDetails) {\r
                  <select class="status-select status-select--{{ sub.status }}"\r
                          [ngModel]="sub.status"\r
                          (ngModelChange)="onSubtaskStatusChange(sub, $event)"\r
                          (click)="$event.stopPropagation()">\r
                    @for (opt of statusOptions; track opt.value) {\r
                      <option [value]="opt.value">{{ opt.label }}</option>\r
                    }\r
                  </select>\r
                } @else {\r
                  <span class="chip-mini status-chip--{{ sub.status }}" (click)="$event.stopPropagation()">\r
                    {{ statusLabel(sub.status) }}\r
                  </span>\r
                }\r
\r
                <span class="chip-mini priority-chip" [attr.data-priority]="sub.priority"\r
                      title="{{ priorityLabel(sub.priority) }}" (click)="$event.stopPropagation()">\r
                  P{{ sub.priority }}\r
                </span>\r
\r
                @if (sub.due_date) {\r
                  <span class="text-muted" style="font-size:var(--fs-mini); white-space:nowrap" (click)="$event.stopPropagation()">\r
                    {{ sub.due_date | date:'dd/MM/yy' }}\r
                  </span>\r
                }\r
\r
                <!-- Azioni sotto-task (tutti i bottoni hanno stopPropagation) -->\r
                <div class="subtask-actions flex-wrap flex gap-sm" (click)="$event.stopPropagation()">\r
                  <button class="icon-button x-small" title="Copia" (click)="copySubtask(sub, $event)">\r
                    <lucide-icon name="copy" size="14"></lucide-icon>\r
                  </button>\r
                  <button class="icon-button x-small" title="Modifica" (click)="openEditSubtaskForm(sub, $event)">\r
                    <lucide-icon name="pencil" size="14"></lucide-icon>\r
                  </button>\r
                  <button class="icon-button x-small icon-button--danger" title="Elimina" (click)="confirmDeleteSubtask(sub.id, sub.name, $event)">\r
                    <lucide-icon name="trash2" size="14"></lucide-icon>\r
                  </button>\r
\r
                  <!-- Add detail -->\r
                  <button class="icon-button x-small" (click)="openCreateDetailForm(sub.id, $event)">\r
                    <lucide-icon name="plus" size="14"></lucide-icon>\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- Dettagli (se espansi) -->\r
              @if (expandedSubtasks().has(sub.id)) {\r
\r
                <div class="details-list"\r
                [attr.data-tutorial]="sub.id === highlightDetailsForSubtaskId() ? 'task-detail-details' : null">\r
\r
                  @for (detail of sub.details; track detail.id) {\r
                    <div class="detail-row flex items-center gap-sm p-sm rounded transition"\r
                         [class.detail-row--dimmed]="searchQuery() && !isDetailVisible(detail)"\r
                         [class.detail-row--completed]="detail.completed">\r
\r
                      <label class="checkbox-label p-0" style="flex-shrink:0">\r
                        <input type="checkbox"\r
                               [checked]="detail.completed"\r
                               (change)="toggleDetail(detail)" />\r
                      </label>\r
\r
                      <span class="detail-name" style="flex:1; min-width:0"\r
                            [innerHTML]="highlight(detail.name)"></span>\r
\r
                      @if (detail.due_date) {\r
                        <span class="chip-mini" style="flex-shrink:0">\r
                          {{ detail.due_date | date:'dd/MM/yy' }}\r
                        </span>\r
                      }\r
\r
                      @if (detail.notes) {\r
                        <lucide-icon name="sticky-note" class="text-muted icon-sm"\r
                                     style="cursor:help; flex-shrink:0"\r
                                     [title]="detail.notes!"></lucide-icon>\r
                      }\r
\r
                      <div class="detail-actions flex gap-sm">\r
                        <button class="icon-button x-small"\r
                                (click)="openEditDetailForm(detail, sub.id, $event)">\r
                          <lucide-icon name="pencil" size="14"></lucide-icon>\r
                        </button>\r
                        <button class="icon-button x-small icon-button--danger"\r
                                (click)="confirmDeleteDetail(detail.id, detail.name, $event)">\r
                          <lucide-icon name="trash2" size="14"></lucide-icon>\r
                        </button>\r
                      </div>\r
                    </div>\r
                  }\r
\r
                </div>\r
              }\r
            </div>\r
          }\r
        </div>\r
      }\r
    </div>\r
\r
    <!-- Colonna destra fissa: riepilogo task e azioni -->\r
    @if (task()) {\r
      @if (!isTaskVisible(task()!)) {\r
        <div class="empty-state flex flex-col items-center justify-center p-lg gap-md">\r
          <lucide-icon name="lock" class="icon-xl" style="opacity:.3"></lucide-icon>\r
          <p class="text-muted">Non hai i permessi per visualizzare questa task.</p>\r
          <button class="promethea-button ghost" (click)="goBack()">Torna alla lista</button>\r
        </div>\r
      } @else {\r
        <aside class="task-summary" data-tutorial="task-detail-summary">\r
          <div class="card">\r
            <div class="card-header flex items-center justify-between">\r
              <h2 class="card-title text-interrupt" style="margin-bottom: 0;">{{ task()!.title }}</h2>\r
              <div class="flex gap-sm">\r
                <button class="icon-button" title="Modifica task" (click)="openEditTaskForm(task()!, $event)">\r
                  <lucide-icon name="pencil" size="16"></lucide-icon>\r
                </button>\r
                <button class="icon-button" title="Copia task" (click)="copyTask(task()!, $event)">\r
                  <lucide-icon name="copy" size="16"></lucide-icon>\r
                </button>\r
                <button class="icon-button icon-button--danger" title="Elimina task"\r
                        (click)="confirmDeleteTask(task()!.id, task()!.title, $event)">\r
                  <lucide-icon name="trash2" size="16"></lucide-icon>\r
                </button>\r
                <button class="icon-button" title="Salva come template" \r
                        (click)="openSaveTemplateModal(task()!, $event)">\r
                  <lucide-icon name="copy-plus" size="16"></lucide-icon>\r
                </button>\r
                <button class="icon-button" \r
                        [class.icon-button--success]="!task()!.calendar_event_id"\r
                        [class.icon-button--warning]="task()!.calendar_event_id"\r
                        [disabled]="!task()!.due_date"\r
                        (click)="toggleCalendarEvent()"\r
                        [title]="task()!.calendar_event_id ? 'Rimuovi dal calendario' : 'Aggiungi al calendario'">\r
                  <lucide-icon [name]="task()!.calendar_event_id ? 'calendar-off' : 'calendar-plus'" size="16"></lucide-icon>\r
                </button>\r
              </div>\r
            </div>\r
\r
            <div class="task-meta">\r
              <div class="meta-row">\r
                <span class="chip-mini status-chip--{{ task()!.status }}">{{ statusLabel(task()!.status) }}</span>\r
                <span class="chip-mini priority-chip" [attr.data-priority]="task()!.priority">{{ priorityLabel(task()!.priority) }}</span>\r
              </div>\r
              \r
              <!-- Assegnazioni multiple -->\r
              <div class="meta-row">\r
                <lucide-icon name="users" class="icon-md"></lucide-icon>\r
                @if (task()!.assignedRoles.length > 0 || task()!.assignedUsers.length > 0) {\r
                  <div class="flex flex-wrap gap-sm">\r
                    @for (role of task()!.assignedRoles; track role) {\r
                      <span class="chip-mini">{{ roleLabel(role) }}</span>\r
                    }\r
                    @for (user of task()!.assignedUsers; track user.id) {\r
                      <span class="chip-mini">{{ user.firstName }} {{ user.lastName }}</span>\r
                    }\r
                  </div>\r
                } @else if (task()!.assigned_role) {\r
                  {{ roleLabel(task()!.assigned_role) }}\r
                } @else {\r
                  Non assegnata\r
                }\r
              </div>\r
\r
              @if (task()!.association_type === 'cliente') {\r
                <div class="meta-row">\r
                  <lucide-icon name="user" class="icon-md"></lucide-icon> {{ task()!.client_name }}\r
                </div>\r
              }\r
              @if (task()!.due_date) {\r
                <div class="meta-row">\r
                  <lucide-icon name="calendar" class="icon-md"></lucide-icon> {{ task()!.due_date | date:'dd/MM/yyyy' }}\r
                </div>\r
              }\r
              <div class="meta-row">\r
                <lucide-icon name="clock" class="icon-md"></lucide-icon> Creata: {{ task()!.created_at | date:'dd/MM/yy' }}\r
              </div>\r
              @if (task()!.notes) {\r
                <div class="task-notes meta-row">\r
                  <lucide-icon name="file-text" class="icon-md"></lucide-icon> {{ task()!.notes }}\r
                </div>\r
              }\r
              @if (task()!.totalSubtasks === 0) {\r
                <div class="meta-row">\r
                  <lucide-icon name="check-circle" class="icon-md"></lucide-icon>\r
                  <select class="status-select status-select--{{ task()!.status }}"\r
                          [ngModel]="task()!.status"\r
                          (ngModelChange)="onTaskStatusChange($event)"\r
                          (click)="$event.stopPropagation()">\r
                    @for (opt of statusOptions; track opt.value) {\r
                      <option [value]="opt.value">{{ opt.label }}</option>\r
                    }\r
                  </select>\r
                </div>\r
              }\r
\r
            </div>\r
\r
            <div class="progress-info">\r
              <div class="flex items-center justify-between">\r
                <span>Progresso</span>\r
                <span>{{ task()!.progress }}%</span>\r
              </div>\r
              <div class="progress-track">\r
                <div class="progress-fill" [style.width.%]="task()!.progress"></div>\r
              </div>\r
            </div>\r
\r
            <div class="counters">\r
              <div>Sotto-task: {{ task()!.completedSubtasks }}/{{ task()!.totalSubtasks }}</div>\r
              @if (task()!.totalDetails > 0) {\r
                <div>Dettagli: {{ task()!.completedDetails }}/{{ task()!.totalDetails }}</div>\r
              }\r
            </div>\r
          </div>\r
        </aside>\r
      }\r
    }\r
  </div>\r
\r
  <!-- MODAL MODIFICA TASK -->\r
  @if (showTaskForm()) {\r
    <div class="modal-overlay" (click)="closeTaskForm()">\r
      <div class="modal-container modal-md" (click)="$event.stopPropagation()">\r
        <div class="modal-header">\r
          <div class="flex items-center gap-sm">\r
            <lucide-icon name="clipboard-list" class="text-primary icon-md"></lucide-icon>\r
            <h2 class="section-title" style="font-size:var(--fs-md)">\r
              {{ editingTaskId() ? 'Modifica Task' : 'Nuova Task' }}\r
            </h2>\r
          </div>\r
          <button class="icon-button" (click)="closeTaskForm()">\r
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
          <!-- NUOVA SEZIONE: Assegnazioni multiple -->\r
          <div class="form-group">\r
            <label class="standard-label">\r
              <lucide-icon name="users" class="icon-sm"></lucide-icon> Utenti\r
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
\r
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
          <button class="promethea-button ghost" (click)="closeTaskForm()">Annulla</button>\r
          <button class="promethea-button" (click)="saveTask()">\r
            <lucide-icon name="save" class="icon-sm"></lucide-icon>\r
            {{ editingTaskId() ? 'Salva modifiche' : 'Crea' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
  \r
  <!-- \u2550\u2550\u2550 MODAL FORM (sotto-task / dettaglio) \u2550\u2550\u2550 -->\r
  @if (showForm()) {\r
    <div class="modal-overlay" (click)="closeForm()">\r
      <div class="modal-container modal-sm" (click)="$event.stopPropagation()">\r
        <div class="modal-header">\r
          <div class="flex items-center gap-sm">\r
            @if (formType() === 'subtask') {\r
              <lucide-icon name="list-checks" class="text-primary icon-md"></lucide-icon>\r
            } @else {\r
              <lucide-icon name="check-circle" class="text-primary icon-md"></lucide-icon>\r
            }\r
            <h2 class="section-title" style="font-size:var(--fs-md)">{{ formTitle }}</h2>\r
          </div>\r
          <button class="icon-button" (click)="closeForm()">\r
            <lucide-icon name="x" class="icon-sm"></lucide-icon>\r
          </button>\r
        </div>\r
\r
        <div class="form-card">\r
          <!-- Form SOTTO-TASK -->\r
          @if (formType() === 'subtask') {\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-icon name="list-checks" class="icon-sm"></lucide-icon> Nome sotto-task\r
              </label>\r
              <input type="text" placeholder="Es. Aggiornare prezzi antipasti"\r
                     [(ngModel)]="subtaskForm.name" required />\r
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
                            [class.priority-btn--active]="subtaskForm.priority === p"\r
                            [attr.data-priority]="p"\r
                            (click)="subtaskForm.priority = p">{{ p }}</button>\r
                  }\r
                </div>\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="standard-label">\r
                  <lucide-icon name="calendar" class="icon-sm"></lucide-icon>\r
                  Scadenza <span class="text-muted">(opzionale)</span>\r
                </label>\r
                <input type="date" [(ngModel)]="subtaskForm.due_date" />\r
              </div>\r
            </div>\r
          }\r
\r
          <!-- Form DETTAGLIO -->\r
          @if (formType() === 'detail') {\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-icon name="check-circle" class="icon-sm"></lucide-icon> Nome dettaglio\r
              </label>\r
              <input type="text" placeholder="Es. Contattare il fornitore"\r
                     [(ngModel)]="detailForm.name" required />\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-icon name="calendar" class="icon-sm"></lucide-icon>\r
                Scadenza <span class="text-muted">(opzionale)</span>\r
              </label>\r
              <input type="date" [(ngModel)]="detailForm.due_date" />\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="standard-label">\r
                <lucide-icon name="file-text" class="icon-sm"></lucide-icon>\r
                Note <span class="text-muted">(opzionale)</span>\r
              </label>\r
              <textarea placeholder="Dettagli aggiuntivi..."\r
                        [(ngModel)]="detailForm.notes"></textarea>\r
            </div>\r
          }\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button class="promethea-button ghost" (click)="closeForm()">Annulla</button>\r
          <button class="promethea-button" (click)="saveForm()">\r
            <lucide-icon name="save" class="icon-sm"></lucide-icon>\r
            {{ editingId() ? 'Salva modifiche' : 'Crea' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 CONFERMA ELIMINAZIONE (sotto-task / dettaglio) \u2550\u2550\u2550 -->\r
  @if (pendingDelete()) {\r
    <div class="modal-overlay">\r
      <div class="modal-container modal-sm">\r
        <div class="modal-header">\r
          <div class="flex items-center gap-sm">\r
            <lucide-icon name="alert-triangle" style="color:var(--secondary)" class="icon-md"></lucide-icon>\r
            <h2 class="section-title" style="font-size:var(--fs-md)">Conferma eliminazione</h2>\r
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
          @if (pendingDelete()!.type === 'subtask') {\r
            <div class="info-message">\r
              <lucide-icon name="info" class="icon-sm"></lucide-icon>\r
              Verranno eliminati anche tutti i dettagli associati.\r
            </div>\r
          }\r
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
\r
  <!-- \u2550\u2550\u2550 CONFERMA ELIMINAZIONE TASK \u2550\u2550\u2550 -->\r
  @if (pendingDeleteTask()) {\r
    <div class="modal-overlay">\r
      <div class="modal-container modal-sm">\r
        <div class="modal-header">\r
          <div class="flex items-center gap-sm">\r
            <lucide-icon name="alert-triangle" style="color:var(--secondary)" class="icon-md"></lucide-icon>\r
            <h2 class="section-title" style="font-size:var(--fs-md)">Elimina Task</h2>\r
          </div>\r
          <button class="icon-button" (click)="cancelDeleteTask()">\r
            <lucide-icon name="x" class="icon-sm"></lucide-icon>\r
          </button>\r
        </div>\r
\r
        <div class="form-card flex flex-col gap-md">\r
          <p>\r
            Sei sicuro di voler eliminare la task\r
            <strong>"{{ pendingDeleteTask()!.title }}"</strong>?\r
          </p>\r
          <div class="info-message">\r
            <lucide-icon name="info" class="icon-sm"></lucide-icon>\r
            Verranno eliminate anche tutte le sotto-task e i dettagli associati.\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button class="promethea-button ghost" (click)="cancelDeleteTask()">Annulla</button>\r
          <button class="promethea-button" style="background:var(--secondary)"\r
                  (click)="executeDeleteTask()">\r
            <lucide-icon name="trash2" class="icon-sm"></lucide-icon> Elimina\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>`, styles: ['/* src/app/restaurant/tasks/task-detail/task-detail.component.css */\n.status-chip--da_iniziare {\n  background: color-mix(in srgb, var(--text-muted) 20%, transparent);\n  color: var(--text-color);\n}\n.status-chip--in_lavorazione {\n  background: color-mix(in srgb, #ffe5a4 20%, transparent);\n}\n.status-chip--completata {\n  background: color-mix(in srgb, #10b981 20%, transparent);\n  color: #064e3b;\n}\n.priority-chip[data-priority="1"] {\n  background: color-mix(in srgb, #6b7280 20%, transparent);\n}\n.priority-chip[data-priority="2"] {\n  background: color-mix(in srgb, #3b82f6 20%, transparent);\n}\n.priority-chip[data-priority="3"] {\n  background: color-mix(in srgb, #f59e0b 20%, transparent);\n}\n.priority-chip[data-priority="4"] {\n  background: color-mix(in srgb, #f97316 20%, transparent);\n}\n.priority-chip[data-priority="5"] {\n  background: color-mix(in srgb, #ef4444 20%, transparent);\n}\n.priority-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  border: 1px solid var(--smoke-1);\n  background: var(--background);\n  color: var(--text-color);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.priority-btn:hover {\n  border-color: var(--primary);\n  background: var(--smoke-1);\n}\n.priority-btn--active {\n  background: var(--gradiente);\n  color: white;\n  border-color: var(--primary);\n}\n.progress-track {\n  height: 8px;\n  background: var(--smoke-1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: var(--gradiente);\n  transition: width 0.3s ease;\n}\n.progress-track--mini {\n  height: 4px;\n  width: 60px;\n}\n.loading-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: var(--smoke-1);\n  z-index: 10000;\n}\n.loading-bar__fill {\n  height: 100%;\n  width: 30%;\n  background: var(--gradiente);\n  animation: loading 1s infinite ease-in-out;\n}\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(400%);\n  }\n}\n.copy-toast {\n  position: fixed;\n  bottom: var(--gap-lg);\n  right: var(--gap-lg);\n  background: var(--gradiente);\n  color: white;\n  padding: var(--gap-sm) var(--gap-md);\n  z-index: 10001;\n  box-shadow: 0 4px 12px var(--shadow-1);\n}\n.detail-row--completed .detail-name {\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n.detail-row--dimmed,\n.subtask-row--dimmed {\n  opacity: 0.4;\n}\n.btn-add-detail {\n  border: 1px dashed var(--smoke-2);\n  background: var(--background);\n  color: var(--text-muted);\n  width: 100%;\n  justify-content: center;\n  border-radius: 8px;\n  margin-top: var(--gap-sm);\n}\n.btn-add-detail:hover {\n  border-color: var(--primary);\n  background: var(--smoke-1);\n  color: var(--primary);\n}\n.detail-layout {\n  display: flex;\n  gap: var(--gap-sm);\n  padding: var(--gap-sm);\n  min-height: 0;\n}\n.detail-content {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  max-height: 100%;\n  padding: var(--gap-sm);\n}\n.task-summary {\n  flex-shrink: 0;\n  position: sticky;\n  align-self: start;\n  padding: var(--gap-sm);\n  max-height: 100%;\n  overflow-y: auto;\n}\n.task-summary .card {\n  margin: 0;\n  padding: var(--gap-md);\n}\n.task-meta {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  margin: var(--gap-md) 0;\n}\n.meta-row {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  font-size: var(--fs-sm);\n  word-break: break-word;\n}\n.meta-row .material-icons {\n  font-size: var(--fs-md);\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.progress-info {\n  margin: var(--gap-sm) 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.counters {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n  font-size: var(--fs-sm);\n  color: var(--text-muted);\n  border-top: 1px solid var(--smoke-1);\n  padding-top: var(--gap-md);\n}\n.details-list {\n  background: var(--vetro);\n  border-radius: 0 0 var(--gap-sm) var(--gap-sm);\n}\n.subtask-header {\n  background: var(--vetro);\n  border-radius: var(--gap-sm) var(--gap-sm) 0 0;\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.subtask-header:hover {\n  background-color: var(--smoke-1);\n}\n.rotate-90 {\n  transform: rotate(90deg);\n  transition: transform 0.2s ease;\n}\n.mirco-grid {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: var(--gap-sm);\n  margin-top: var(--gap-sm);\n}\n@media (max-width: 768px) {\n  .detail-layout {\n    flex-direction: column;\n    height: calc(100dvh - var(--sidebar--collapsed-width));\n    overflow: hidden;\n  }\n  .task-summary {\n    width: 100%;\n    order: -1;\n    flex-shrink: 0;\n    max-height: 45vh;\n    overflow-y: auto;\n    position: static;\n    align-self: auto;\n    margin-bottom: 0;\n    background: var(--background);\n  }\n  .detail-content {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    max-height: none;\n  }\n}\n/*# sourceMappingURL=task-detail.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDetailComponent, { className: "TaskDetailComponent", filePath: "src/app/restaurant/tasks/task-detail/task-detail.component.ts", lineNumber: 46 });
})();
export {
  TaskDetailComponent
};
//# sourceMappingURL=chunk-QLTH2DN7.js.map
