import {
  ChatService
} from "./chunk-LDX73JLD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CQ6KSR3R.js";
import "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService
} from "./chunk-6SNKM7Z6.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  AsyncPipe,
  CommonModule,
  DatePipe
} from "./chunk-6GUAOFJT.js";
import {
  BehaviorSubject,
  Component,
  ViewChild,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/chat-window/chat-window.ts
var _c0 = ["scrollContainer"];
var _forTrack0 = ($index, $item) => $item.id;
function ChatWindow_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "group");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_For_11_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const conv_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", conv_r2.other_participant.avatar_url, \u0275\u0275sanitizeUrl);
  }
}
function ChatWindow_For_11_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatWindow_For_11_Conditional_4_Conditional_0_Template, 1, 1, "img", 23)(1, ChatWindow_For_11_Conditional_4_Conditional_1_Template, 2, 0, "span", 6);
  }
  if (rf & 2) {
    const conv_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((conv_r2.other_participant == null ? null : conv_r2.other_participant.avatar_url) ? 0 : 1);
  }
}
function ChatWindow_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const conv_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", conv_r2.name || "Gruppo", " ");
  }
}
function ChatWindow_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const conv_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", conv_r2.other_participant == null ? null : conv_r2.other_participant.first_name, " ", conv_r2.other_participant == null ? null : conv_r2.other_participant.last_name, " ");
  }
}
function ChatWindow_For_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conv_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(conv_r2.unread);
  }
}
function ChatWindow_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ChatWindow_For_11_Template_div_click_0_listener() {
      const conv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectConversation(conv_r2));
    });
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275template(3, ChatWindow_For_11_Conditional_3_Template, 2, 0, "span", 6)(4, ChatWindow_For_11_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19)(7, "div", 20);
    \u0275\u0275template(8, ChatWindow_For_11_Conditional_8_Template, 1, 1)(9, ChatWindow_For_11_Conditional_9_Template, 1, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ChatWindow_For_11_Conditional_10_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const conv_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ((tmp_10_0 = \u0275\u0275pipeBind1(1, 6, ctx_r2.activeConversation$)) == null ? null : tmp_10_0.id) === conv_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(conv_r2.type === "group" ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(conv_r2.type === "group" ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(conv_r2.unread > 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (conv_r2.last_message == null ? null : conv_r2.last_message.content) || "Nessun messaggio", " ");
  }
}
function ChatWindow_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " Nessuna conversazione ");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "group");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_Conditional_18_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const activeConv_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", activeConv_r5.other_participant.avatar_url, \u0275\u0275sanitizeUrl);
  }
}
function ChatWindow_Conditional_18_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatWindow_Conditional_18_Conditional_4_Conditional_0_Template, 1, 1, "img", 23)(1, ChatWindow_Conditional_18_Conditional_4_Conditional_1_Template, 2, 0, "span", 6);
  }
  if (rf & 2) {
    const activeConv_r5 = \u0275\u0275nextContext();
    \u0275\u0275conditional((activeConv_r5.other_participant == null ? null : activeConv_r5.other_participant.avatar_url) ? 0 : 1);
  }
}
function ChatWindow_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const activeConv_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", activeConv_r5.name || "Gruppo", " ");
  }
}
function ChatWindow_Conditional_18_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const activeConv_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", activeConv_r5.other_participant.first_name, " ", activeConv_r5.other_participant.last_name, " ");
  }
}
function ChatWindow_Conditional_18_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Caricamento...");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatWindow_Conditional_18_Conditional_7_Conditional_0_Template, 1, 2)(1, ChatWindow_Conditional_18_Conditional_7_Conditional_1_Template, 2, 0, "span", 32);
  }
  if (rf & 2) {
    const activeConv_r5 = \u0275\u0275nextContext();
    \u0275\u0275conditional(activeConv_r5.other_participant ? 0 : 1);
  }
}
function ChatWindow_Conditional_18_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 38);
    \u0275\u0275listener("click", function ChatWindow_Conditional_18_For_11_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const msg_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editMessage(msg_r7));
    });
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function ChatWindow_Conditional_18_For_11_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const msg_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteMessage(msg_r7.id));
    });
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ChatWindow_Conditional_18_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatWindow_Conditional_18_For_11_Conditional_8_Template, 7, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("own-message", msg_r7.sender_id === ctx_r2.currentUserId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", msg_r7.sender == null ? null : msg_r7.sender.first_name, " ", msg_r7.sender == null ? null : msg_r7.sender.last_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r7.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 7, msg_r7.created_at, "short"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(msg_r7.sender_id === ctx_r2.currentUserId && ctx_r2.canEditOrDelete(msg_r7) ? 8 : -1);
  }
}
function ChatWindow_Conditional_18_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " Nessun messaggio. Inizia a scrivere! ");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 24)(2, "div", 17);
    \u0275\u0275template(3, ChatWindow_Conditional_18_Conditional_3_Template, 2, 0, "span", 6)(4, ChatWindow_Conditional_18_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275template(6, ChatWindow_Conditional_18_Conditional_6_Template, 1, 1)(7, ChatWindow_Conditional_18_Conditional_7_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26, 0);
    \u0275\u0275repeaterCreate(10, ChatWindow_Conditional_18_For_11_Template, 9, 10, "div", 27, _forTrack0, false, ChatWindow_Conditional_18_ForEmpty_12_Template, 2, 0, "div", 28);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 29)(15, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ChatWindow_Conditional_18_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ChatWindow_Conditional_18_Template_textarea_keydown_enter_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 31);
    \u0275\u0275listener("click", function ChatWindow_Conditional_18_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementStart(17, "span", 6);
    \u0275\u0275text(18, "send");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const activeConv_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(activeConv_r5.type === "group" ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(activeConv_r5.type === "group" ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(13, 5, ctx_r2.messages$));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newMessage.trim());
  }
}
function ChatWindow_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Seleziona una conversazione per iniziare");
    \u0275\u0275elementEnd()()();
  }
}
function ChatWindow_Conditional_21_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const contact_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", contact_r10.avatar_url, \u0275\u0275sanitizeUrl);
  }
}
function ChatWindow_Conditional_21_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_Conditional_21_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ChatWindow_Conditional_21_For_13_Template_div_click_0_listener() {
      const contact_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startDirectChat(contact_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275template(2, ChatWindow_Conditional_21_For_13_Conditional_2_Template, 1, 1, "img", 23)(3, ChatWindow_Conditional_21_For_13_Conditional_3_Template, 2, 0, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(contact_r10.avatar_url ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", contact_r10.first_name, " ", contact_r10.last_name, "");
  }
}
function ChatWindow_Conditional_21_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Nessun altro membro disponibile");
    \u0275\u0275elementEnd();
  }
}
function ChatWindow_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function ChatWindow_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewChatModal());
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function ChatWindow_Conditional_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "h3", 45);
    \u0275\u0275text(4, "Nuova chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function ChatWindow_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewChatModal());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 47)(9, "p", 48);
    \u0275\u0275text(10, "Scegli un membro del team:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 49);
    \u0275\u0275repeaterCreate(12, ChatWindow_Conditional_21_For_13_Template, 6, 3, "div", 50, _forTrack0, false, ChatWindow_Conditional_21_ForEmpty_14_Template, 2, 0, "p", 32);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(15, 1, ctx_r2.staffContacts$));
  }
}
var ChatWindow = class _ChatWindow {
  chatService = inject(ChatService);
  authService = inject(AuthService);
  staffContactsSubject = new BehaviorSubject([]);
  isCreating = false;
  visualViewportListener = () => this.adjustForKeyboard();
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  staffContacts$ = this.staffContactsSubject.asObservable();
  // Observables pubblici
  conversations$ = this.chatService.conversations$;
  activeConversation$ = this.chatService.activeConversation$;
  messages$ = this.chatService.messages$;
  loading$ = this.chatService.loading$;
  conversationsWithUnread$ = combineLatest([
    this.conversations$,
    this.chatService.unreadCount$
  ]).pipe(map(([conversations, unreadMap]) => conversations.map((conv) => __spreadProps(__spreadValues({}, conv), {
    unread: unreadMap.get(conv.id) || 0
  }))));
  // Utente corrente
  currentUserId = this.authService.currentUserValue?.id;
  // Nuovo messaggio
  newMessage = "";
  // Riferimento al contenitore dei messaggi per scroll
  scrollContainer;
  // Per modale nuova chat (opzionale, se vuoi implementarla subito)
  showNewChatModal = false;
  staffList = [];
  // popoleremo se necessario
  ngOnInit() {
    this.chatService.loadConversations();
    this.loadStaffContacts();
    this.authService.activeRestaurantId$.subscribe(() => {
      this.loadStaffContacts();
    });
    this.messages$.subscribe(() => {
      setTimeout(() => this.scrollToBottom(), 100);
    });
    if (this.isMobile && window.visualViewport) {
      window.visualViewport.addEventListener("resize", this.visualViewportListener);
      setTimeout(() => this.adjustForKeyboard(), 100);
    }
  }
  loadStaffContacts() {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      const currentUserId = this.authService.currentUserValue?.id;
      console.log("\u{1F50D} loadStaffContacts - chiamato con:", { restaurantId, currentUserId });
      if (!restaurantId || !currentUserId)
        return;
      const { data: restaurant } = yield this.chatService["supabase"].getSupabaseClient().from("restaurants").select("owner_id").eq("id", restaurantId).single();
      const ownerId = restaurant?.owner_id;
      const { data: staffData, error } = yield this.chatService["supabase"].getSupabaseClient().from("restaurant_staff").select(`
      user_id,
      users:user_id (
        id,
        first_name,
        last_name,
        avatar_url
      )
    `).eq("restaurant_id", restaurantId).eq("invitation_status", "accepted").neq("user_id", currentUserId);
      if (error) {
        console.error("\u274C Errore nel recuperare lo staff:", error);
      }
      const staffContacts = (staffData || []).map((item) => item.users).filter((user) => user && user.id);
      if (ownerId && ownerId !== currentUserId) {
        const alreadyIncluded = staffContacts.some((c) => c.id === ownerId);
        if (!alreadyIncluded) {
          const { data: ownerUser } = yield this.chatService["supabase"].getSupabaseClient().from("users").select("id, first_name, last_name, avatar_url").eq("id", ownerId).single();
          if (ownerUser) {
            staffContacts.push(ownerUser);
          }
        }
      }
      console.log("\u2705 Contatti finali:", staffContacts);
      this.staffContactsSubject.next(staffContacts);
    });
  }
  onSelectItem(item) {
    return __async(this, null, function* () {
      if (this.isCreating)
        return;
      if (item.type === "conversation") {
        this.chatService.setActiveConversation(item.data);
      } else {
        this.isCreating = true;
        try {
          console.log("\u{1F535} Chiamata createDirectConversation per:", item.data.id);
          const conv = yield this.chatService.createDirectConversation(item.data.id);
          console.log("\u{1F535} Risultato createDirectConversation:", conv);
          if (conv) {
            this.chatService.setActiveConversation(conv);
          }
        } finally {
          this.isCreating = false;
        }
      }
    });
  }
  ngOnDestroy() {
    this.chatService.setActiveConversation(null);
    if (this.isMobile && window.visualViewport) {
      window.visualViewport.removeEventListener("resize", this.visualViewportListener);
    }
  }
  // Seleziona una conversazione
  selectConversation(conv) {
    this.chatService.setActiveConversation(conv);
  }
  // Invia messaggio
  sendMessage() {
    const active = this.chatService.activeConversationSubject.value;
    if (!active || !this.newMessage.trim())
      return;
    this.chatService.sendMessage(active.id, this.newMessage);
    this.newMessage = "";
  }
  doSendMessage() {
    const active = this.chatService.activeConversationSubject.value;
    if (!active || !this.newMessage.trim())
      return;
    this.chatService.sendMessage(active.id, this.newMessage);
    this.newMessage = "";
  }
  // Modifica messaggio
  editMessage(msg) {
    const newContent = prompt("Modifica messaggio", msg.content);
    if (newContent && newContent !== msg.content) {
      this.chatService.updateMessage(msg.id, newContent);
    }
  }
  // Cancella messaggio
  deleteMessage(messageId) {
    if (confirm("Eliminare questo messaggio?")) {
      this.chatService.deleteMessage(messageId);
    }
  }
  // Verifica se può modificare/cancellare (entro 4 ore)
  canEditOrDelete(msg) {
    const fourHoursAgo = new Date(Date.now() - 4 * 60 * 60 * 1e3);
    return new Date(msg.created_at) > fourHoursAgo;
  }
  // Scroll in basso
  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
  // Metodi per la modale nuova chat (opzionali)
  openNewChatModal() {
    this.showNewChatModal = true;
  }
  closeNewChatModal() {
    this.showNewChatModal = false;
  }
  startDirectChat(userId) {
    this.chatService.createDirectConversation(userId).then(() => {
      this.closeNewChatModal();
    });
  }
  onKeydown(event) {
    const keyboardEvent = event;
    if (keyboardEvent.key === "Enter" && !keyboardEvent.shiftKey) {
      keyboardEvent.preventDefault();
      this.sendMessage();
    }
  }
  // Observable unificato per la sidebar
  conversationItems$ = this.conversations$.pipe(map((conversations) => conversations.map((conv) => ({ type: "conversation", data: conv }))));
  // ADATTA ALTEZZA TASTIERA MOBILE
  adjustForKeyboard() {
    const vv = window.visualViewport;
    if (!vv)
      return;
    const chatMain = document.querySelector(".chat-main");
    const messagesContainer = document.querySelector(".messages-container");
    if (chatMain && messagesContainer) {
      const header = chatMain.querySelector(".chat-header");
      const input = chatMain.querySelector(".message-input");
      const headerHeight = header?.offsetHeight || 0;
      const inputHeight = input?.offsetHeight || 0;
      messagesContainer.style.height = `${vv.height - headerHeight - inputHeight}px`;
      setTimeout(() => this.scrollToBottom(), 50);
    }
  }
  static \u0275fac = function ChatWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatWindow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatWindow, selectors: [["app-chat-window"]], viewQuery: function ChatWindow_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainer = _t.first);
    }
  }, decls: 22, vars: 11, consts: [["scrollContainer", ""], [1, "chat-container"], [1, "conversations-sidebar", "card", "p-sm"], [1, "sidebar-header", "flex", "justify-between", "items-center", "p-sm"], [1, "text-md", "font-bold", "m-0"], ["title", "Nuova chat", 1, "icon-button", 3, "click"], [1, "material-icons"], [1, "conversations-list"], [1, "conversation-item", "flex", "items-center", "gap-sm", "p-sm", "rounded", 3, "active"], [1, "no-convs", "text-center", "text-muted", "p-lg"], [1, "new-chat-button", "p-sm"], [1, "promethea-button", "full-width", 3, "click"], ["name", "plus", "size", "24"], [1, "chat-main", "card", "flex-col"], [1, "chat-placeholder", "flex", "items-center", "justify-center"], [1, "modal-overlay"], [1, "conversation-item", "flex", "items-center", "gap-sm", "p-sm", "rounded", 3, "click"], [1, "conv-avatar", "avatartondo", "flex", "items-center", "justify-center"], [1, "conv-info", "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-sm"], [1, "conv-name", "font-semibold", "text-interrupt"], [1, "chip", "warning"], [1, "conv-last-msg", "text-mini", "text-muted", "text-interrupt"], ["alt", "avatar", 1, "avatar-img", 3, "src"], [1, "chat-header", "flex", "items-center", "gap-sm", "p-sm", "border-bottom"], [1, "chat-title", "font-bold"], [1, "messages-container"], [1, "message", 3, "own-message"], [1, "no-messages", "text-center", "text-muted", "p-lg"], [1, "message-input", "flex", "gap-sm", "p-sm"], ["placeholder", "Scrivi un messaggio...", "rows", "1", 1, "flex-1", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "promethea-button", 3, "click", "disabled"], [1, "text-muted"], [1, "message"], [1, "message-sender", "text-mini", "font-semibold"], [1, "message-content"], [1, "message-time", "text-mini", "text-muted"], [1, "message-actions", "flex", "gap-sm"], ["title", "Modifica", 1, "icon-button", "x-small", 3, "click"], ["title", "Elimina", 1, "icon-button", "x-small", 3, "click"], [1, "text-center", "text-muted"], [1, "material-icons", 2, "font-size", "48px"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-sm", 3, "click"], [1, "modal-header"], [1, "text-md", "font-bold"], [1, "icon-button", 3, "click"], [1, "modal-content", "p-md"], [1, "text-muted", "mb-sm"], [1, "staff-list"], [1, "staff-item", "flex", "items-center", "gap-sm", "p-sm", "rounded", "hover-bg"], [1, "staff-item", "flex", "items-center", "gap-sm", "p-sm", "rounded", "hover-bg", 3, "click"], [1, "avatartondo", "small"]], template: function ChatWindow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275elementStart(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function ChatWindow_Template_button_click_6_listener() {
        return ctx.openNewChatModal();
      });
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275repeaterCreate(10, ChatWindow_For_11_Template, 13, 8, "div", 8, _forTrack0, false, ChatWindow_ForEmpty_12_Template, 2, 0, "div", 9);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
      \u0275\u0275listener("click", function ChatWindow_Template_button_click_15_listener() {
        return ctx.openNewChatModal();
      });
      \u0275\u0275element(16, "lucide-angular", 12);
      \u0275\u0275text(17, " Nuova chat ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, ChatWindow_Conditional_18_Template, 19, 7, "div", 13);
      \u0275\u0275pipe(19, "async");
      \u0275\u0275template(20, ChatWindow_Conditional_20_Template, 6, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, ChatWindow_Conditional_21_Template, 16, 3, "div", 15);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("loading", \u0275\u0275pipeBind1(2, 5, ctx.loading$));
      \u0275\u0275advance(9);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(13, 7, ctx.conversationsWithUnread$));
      \u0275\u0275advance(8);
      \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(19, 9, ctx.activeConversation$)) ? 18 : 20, tmp_2_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showNewChatModal ? 21 : -1);
    }
  }, dependencies: [CommonModule, AsyncPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.chat-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - var(--sidebar--collapsed-width) - 2px);\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  background: var(--background);\n}\n.conversations-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0 !important;\n  height: 100%;\n}\n.conversations-sidebar.loading[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--smoke-1);\n}\n.conversations-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--gap-sm);\n}\n.conversation-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.2s;\n  border-radius: 8px;\n}\n.conversation-item[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-1);\n}\n.conversation-item.active[_ngcontent-%COMP%] {\n  background: var(--smoke-2);\n  border-left: 4px solid var(--primary);\n}\n.conv-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.conv-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.chat-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0 !important;\n}\n.chat-header[_ngcontent-%COMP%] {\n  padding: var(--gap-sm);\n  border-bottom: 1px solid var(--smoke-1);\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--gap-md);\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.message[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: var(--gap-sm);\n  border-radius: 18px;\n  background: var(--smoke-1);\n  align-self: flex-start;\n  position: relative;\n  word-break: break-word;\n}\n.message.own-message[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  align-self: flex-end;\n}\n.message.own-message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.message-sender[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.message-content[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  line-height: 1.4;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-align: right;\n}\n.message-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.message[_ngcontent-%COMP%]:hover   .message-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.message-input[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--smoke-1);\n  background: var(--background);\n}\n.message-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  min-height: 40px;\n  max-height: 120px;\n  border-radius: 20px;\n  padding: var(--gap-sm) var(--gap-md);\n}\n.chat-placeholder[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background);\n  border-radius: 12px;\n}\n.staff-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.staff-item[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-1);\n}\n@media (max-width: 768px) {\n  .chat-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    min-height: calc(100vh - var(--sidebar--collapsed-width));\n  }\n  .conversations-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 300px;\n  }\n  .message[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n}\n.messages-container[_ngcontent-%COMP%] {\n  -webkit-overflow-scrolling: touch;\n}\n.message-input[_ngcontent-%COMP%] {\n  padding-bottom: max(env(safe-area-inset-bottom), 0.5rem);\n}\n/*# sourceMappingURL=chat-window.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatWindow, [{
    type: Component,
    args: [{ selector: "app-chat-window", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="chat-container">\r
  <!-- Sidebar conversazioni -->\r
  <div class="conversations-sidebar card p-sm" [class.loading]="loading$ | async">\r
    <div class="sidebar-header flex justify-between items-center p-sm">\r
      <h3 class="text-md font-bold m-0">Chat</h3>\r
      <button class="icon-button" (click)="openNewChatModal()" title="Nuova chat">\r
        <span class="material-icons">add</span>\r
      </button>\r
    </div>\r
\r
    <!-- Lista scrollabile delle conversazioni -->\r
    <div class="conversations-list">\r
@for (conv of conversationsWithUnread$ | async; track conv.id) {\r
  <div class="conversation-item flex items-center gap-sm p-sm rounded"\r
       [class.active]="(activeConversation$ | async)?.id === conv.id"\r
       (click)="selectConversation(conv)">\r
    \r
    <!-- Avatar (invariato) -->\r
    <div class="conv-avatar avatartondo flex items-center justify-center">\r
      @if (conv.type === 'group') {\r
        <span class="material-icons">group</span>\r
      } @else {\r
        @if (conv.other_participant?.avatar_url) {\r
          <img [src]="conv.other_participant.avatar_url" alt="avatar" class="avatar-img">\r
        } @else {\r
          <span class="material-icons">person</span>\r
        }\r
      }\r
    </div>\r
\r
    <!-- Info + badge non letti -->\r
    <div class="conv-info flex-1 min-w-0">\r
      <div class="flex items-center gap-sm">\r
        <div class="conv-name font-semibold text-interrupt">\r
          @if (conv.type === 'group') {\r
            {{ conv.name || 'Gruppo' }}\r
          } @else {\r
            {{ conv.other_participant?.first_name }} {{ conv.other_participant?.last_name }}\r
          }\r
        </div>\r
        <!-- BADGE MESSAGGI NON LETTI -->\r
        @if (conv.unread > 0) {\r
          <span class="chip warning">{{ conv.unread }}</span>\r
        }\r
      </div>\r
      <div class="conv-last-msg text-mini text-muted text-interrupt">\r
        {{ conv.last_message?.content || 'Nessun messaggio' }}\r
      </div>\r
    </div>\r
  </div>\r
      } @empty {\r
        <div class="no-convs text-center text-muted p-lg">\r
          Nessuna conversazione\r
        </div>\r
      }\r
    </div>\r
\r
    <!-- Bottone nuova chat (fisso in fondo) -->\r
    <div class="new-chat-button p-sm">\r
      <button class="promethea-button full-width" (click)="openNewChatModal()">\r
        <lucide-angular name="plus" size="24"></lucide-angular> Nuova chat\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Finestra chat principale (invariata) -->\r
  @if (activeConversation$ | async; as activeConv) {\r
    <div class="chat-main card flex-col">\r
      <!-- Header -->\r
      <div class="chat-header flex items-center gap-sm p-sm border-bottom">\r
        <div class="conv-avatar avatartondo flex items-center justify-center">\r
          @if (activeConv.type === 'group') {\r
            <span class="material-icons">group</span>\r
          } @else {\r
            @if (activeConv.other_participant?.avatar_url) {\r
              <img [src]="activeConv.other_participant.avatar_url" alt="avatar" class="avatar-img">\r
            } @else {\r
              <span class="material-icons">person</span>\r
            }\r
          }\r
        </div>\r
        <span class="chat-title font-bold">\r
          @if (activeConv.type === 'group') {\r
            {{ activeConv.name || 'Gruppo' }}\r
          } @else {\r
            @if (activeConv.other_participant) {\r
              {{ activeConv.other_participant.first_name }} {{ activeConv.other_participant.last_name }}\r
            } @else {\r
              <span class="text-muted">Caricamento...</span>\r
            }\r
          }\r
        </span>\r
      </div>\r
\r
      <!-- Messaggi -->\r
      <div class="messages-container" #scrollContainer>\r
        @for (msg of messages$ | async; track msg.id) {\r
          <div class="message" [class.own-message]="msg.sender_id === currentUserId">\r
            <div class="message-sender text-mini font-semibold">\r
              {{ msg.sender?.first_name }} {{ msg.sender?.last_name }}\r
            </div>\r
            <div class="message-content">{{ msg.content }}</div>\r
            <div class="message-time text-mini text-muted">\r
              {{ msg.created_at | date:'short' }}\r
            </div>\r
            @if (msg.sender_id === currentUserId && canEditOrDelete(msg)) {\r
              <div class="message-actions flex gap-sm">\r
                <button class="icon-button x-small" (click)="editMessage(msg)" title="Modifica">\r
                  <span class="material-icons">edit</span>\r
                </button>\r
                <button class="icon-button x-small" (click)="deleteMessage(msg.id)" title="Elimina">\r
                  <span class="material-icons">delete</span>\r
                </button>\r
              </div>\r
            }\r
          </div>\r
        } @empty {\r
          <div class="no-messages text-center text-muted p-lg">\r
            Nessun messaggio. Inizia a scrivere!\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Input -->\r
      <div class="message-input flex gap-sm p-sm">\r
        <textarea\r
          [(ngModel)]="newMessage"\r
          (keydown.enter)="onKeydown($event)"\r
          placeholder="Scrivi un messaggio..."\r
          class="flex-1"\r
          rows="1"\r
        ></textarea>\r
        <button class="promethea-button" \r
                [disabled]="!newMessage.trim()"\r
                (click)="sendMessage()">\r
          <span class="material-icons">send</span>\r
        </button>\r
      </div>\r
    </div>\r
  } @else {\r
    <div class="chat-placeholder flex items-center justify-center">\r
      <div class="text-center text-muted">\r
        <span class="material-icons" style="font-size: 48px;">chat</span>\r
        <p>Seleziona una conversazione per iniziare</p>\r
      </div>\r
    </div>\r
  }\r
</div>\r
\r
<!-- Modale nuova chat -->\r
@if (showNewChatModal) {\r
  <div class="modal-overlay" (click)="closeNewChatModal()">\r
    <div class="modal-container modal-sm" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3 class="text-md font-bold">Nuova chat</h3>\r
        <button class="icon-button" (click)="closeNewChatModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
      <div class="modal-content p-md">\r
        <p class="text-muted mb-sm">Scegli un membro del team:</p>\r
        <div class="staff-list">\r
          @for (contact of staffContacts$ | async; track contact.id) {\r
            <div class="staff-item flex items-center gap-sm p-sm rounded hover-bg"\r
                 (click)="startDirectChat(contact.id)">\r
              <div class="avatartondo small">\r
                @if (contact.avatar_url) {\r
                  <img [src]="contact.avatar_url" alt="avatar" class="avatar-img">\r
                } @else {\r
                  <span class="material-icons">person</span>\r
                }\r
              </div>\r
              <span>{{ contact.first_name }} {{ contact.last_name }}</span>\r
            </div>\r
          } @empty {\r
            <p class="text-muted">Nessun altro membro disponibile</p>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}`, styles: ["/* src/app/restaurant/chat-window/chat-window.css */\n.chat-container {\n  display: flex;\n  height: calc(100vh - var(--sidebar--collapsed-width) - 2px);\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  background: var(--background);\n}\n.conversations-sidebar {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0 !important;\n  height: 100%;\n}\n.conversations-sidebar.loading {\n  opacity: 0.7;\n  pointer-events: none;\n}\n.sidebar-header {\n  border-bottom: 1px solid var(--smoke-1);\n}\n.conversations-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--gap-sm);\n}\n.conversation-item {\n  cursor: pointer;\n  transition: background 0.2s;\n  border-radius: 8px;\n}\n.conversation-item:hover {\n  background: var(--smoke-1);\n}\n.conversation-item.active {\n  background: var(--smoke-2);\n  border-left: 4px solid var(--primary);\n}\n.conv-avatar {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.conv-info {\n  min-width: 0;\n}\n.chat-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0 !important;\n}\n.chat-header {\n  padding: var(--gap-sm);\n  border-bottom: 1px solid var(--smoke-1);\n}\n.messages-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--gap-md);\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.message {\n  max-width: 70%;\n  padding: var(--gap-sm);\n  border-radius: 18px;\n  background: var(--smoke-1);\n  align-self: flex-start;\n  position: relative;\n  word-break: break-word;\n}\n.message.own-message {\n  background: var(--primary);\n  color: white;\n  align-self: flex-end;\n}\n.message.own-message .message-time {\n  color: rgba(255, 255, 255, 0.8);\n}\n.message-sender {\n  margin-bottom: 4px;\n}\n.message-content {\n  margin-bottom: 4px;\n  line-height: 1.4;\n}\n.message-time {\n  font-size: 0.7rem;\n  text-align: right;\n}\n.message-actions {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.message:hover .message-actions {\n  opacity: 1;\n}\n.message-input {\n  border-top: 1px solid var(--smoke-1);\n  background: var(--background);\n}\n.message-input textarea {\n  resize: none;\n  min-height: 40px;\n  max-height: 120px;\n  border-radius: 20px;\n  padding: var(--gap-sm) var(--gap-md);\n}\n.chat-placeholder {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background);\n  border-radius: 12px;\n}\n.staff-item {\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.staff-item:hover {\n  background: var(--smoke-1);\n}\n@media (max-width: 768px) {\n  .chat-container {\n    flex-direction: column;\n    height: auto;\n    min-height: calc(100vh - var(--sidebar--collapsed-width));\n  }\n  .conversations-sidebar {\n    width: 100%;\n    max-height: 300px;\n  }\n  .message {\n    max-width: 85%;\n  }\n}\n.messages-container {\n  -webkit-overflow-scrolling: touch;\n}\n.message-input {\n  padding-bottom: max(env(safe-area-inset-bottom), 0.5rem);\n}\n/*# sourceMappingURL=chat-window.css.map */\n"] }]
  }], null, { scrollContainer: [{
    type: ViewChild,
    args: ["scrollContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatWindow, { className: "ChatWindow", filePath: "src/app/restaurant/chat-window/chat-window.ts", lineNumber: 27 });
})();
export {
  ChatWindow
};
//# sourceMappingURL=chunk-L4SEGCHJ.js.map
