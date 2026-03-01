import {
  LoadingService
} from "./chunk-XWVRHBBC.js";
import {
  AuthService,
  SupabaseService
} from "./chunk-6SNKM7Z6.js";
import {
  BehaviorSubject,
  Injectable,
  delay,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/chat.service.ts
var ChatService = class _ChatService {
  supabase = inject(SupabaseService);
  authService = inject(AuthService);
  loadingService = inject(LoadingService);
  messagesSubject = new BehaviorSubject([]);
  messages$ = this.messagesSubject.asObservable().pipe(shareReplay(1));
  conversationsSubject = new BehaviorSubject([]);
  conversations$ = this.conversationsSubject.asObservable().pipe(shareReplay(1));
  activeConversationSubject = new BehaviorSubject(null);
  activeConversation$ = this.activeConversationSubject.asObservable();
  loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();
  realtimeChannel = null;
  processedMessageIds = /* @__PURE__ */ new Set();
  unreadCountSubject = new BehaviorSubject(/* @__PURE__ */ new Map());
  unreadCount$ = this.unreadCountSubject.asObservable();
  globalRealtimeChannel = null;
  lastReadMap = /* @__PURE__ */ new Map();
  totalUnread$ = this.unreadCount$.pipe(
    map((map2) => Array.from(map2.values()).reduce((sum, count) => sum + count, 0)),
    delay(0)
    // forza l'emissione nel prossimo ciclo di change detection
  );
  constructor() {
    this.authService.activeRestaurantId$.subscribe(() => {
      this.unreadCountSubject.next(/* @__PURE__ */ new Map());
      this.setupGlobalRealtimeSubscription();
    });
  }
  incrementUnread(conversationId, amount = 1, source) {
    console.log(`\u{1F534} incrementUnread da ${source} per ${conversationId} amount ${amount}`);
    const current = this.unreadCountSubject.value;
    const newCount = (current.get(conversationId) || 0) + amount;
    current.set(conversationId, newCount);
    this.unreadCountSubject.next(new Map(current));
  }
  resetUnread(conversationId) {
    console.log("\u{1F7E2} resetUnread per", conversationId);
    const current = this.unreadCountSubject.value;
    if (current.has(conversationId)) {
      current.delete(conversationId);
      this.unreadCountSubject.next(new Map(current));
    }
  }
  // --- Gestione conversazioni ---
  loadConversations() {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      const currentUserId = this.authService.currentUserValue?.id;
      if (!restaurantId || !currentUserId) {
        this.conversationsSubject.next([]);
        return;
      }
      this.loadingSubject.next(true);
      try {
        const { data: participantData, error: partError } = yield this.run(this.supabase.getSupabaseClient().from("chat_participants").select("conversation_id").eq("user_id", currentUserId).is("left_at", null));
        if (partError)
          throw partError;
        const conversationIds = participantData?.map((p) => p.conversation_id) || [];
        if (conversationIds.length === 0) {
          this.conversationsSubject.next([]);
          this.unreadCountSubject.next(/* @__PURE__ */ new Map());
          return;
        }
        const { data, error } = yield this.run(this.supabase.getSupabaseClient().from("chat_conversations").select(`
          *,
          participants:chat_participants(*),
          last_message:chat_messages(
            id, content, sender_id, created_at
          )
        `).in("id", conversationIds).eq("restaurant_id", restaurantId).order("updated_at", { ascending: false }));
        if (error)
          throw error;
        this.lastReadMap.clear();
        const conversations = [];
        const unreadMap = /* @__PURE__ */ new Map();
        for (const item of data || []) {
          const conv = {
            id: item.id,
            restaurant_id: item.restaurant_id,
            type: item.type,
            name: item.name,
            created_at: item.created_at,
            updated_at: item.updated_at,
            last_message: null,
            other_participant: void 0
          };
          if (item.last_message?.length) {
            const sorted = item.last_message.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
            conv.last_message = sorted[0];
          }
          const currentParticipant = item.participants?.find((p) => p.user_id === currentUserId);
          let lastReadAt = currentParticipant?.last_read_at;
          if (!lastReadAt) {
            lastReadAt = currentParticipant?.joined_at || item.created_at;
          }
          this.lastReadMap.set(item.id, lastReadAt);
          const { count, error: countError } = yield this.supabase.getSupabaseClient().from("chat_messages").select("id", { count: "exact", head: true }).eq("conversation_id", item.id).gt("created_at", lastReadAt).neq("sender_id", currentUserId);
          if (!countError && count && count > 0) {
            unreadMap.set(item.id, count);
          }
          if (conv.type === "direct") {
            const otherParticipant = item.participants?.find((p) => p.user_id !== currentUserId);
            if (otherParticipant) {
              const { data: user, error: userError } = yield this.supabase.getSupabaseClient().from("users").select("id, first_name, last_name, avatar_url").eq("id", otherParticipant.user_id).single();
              if (!userError && user) {
                conv.other_participant = user;
              }
            }
          }
          conversations.push(conv);
        }
        this.conversationsSubject.next(conversations);
        this.unreadCountSubject.next(unreadMap);
      } catch (error) {
        console.error("Error loading conversations:", error);
      } finally {
        this.loadingSubject.next(false);
        yield this.setupGlobalRealtimeSubscription();
      }
    });
  }
  setActiveConversation(conversation) {
    return __async(this, null, function* () {
      if (this.activeConversationSubject.value?.id === conversation?.id)
        return;
      if (this.realtimeChannel) {
        yield this.supabase.getSupabaseClient().removeChannel(this.realtimeChannel);
        this.realtimeChannel = null;
      }
      this.activeConversationSubject.next(conversation);
      if (conversation) {
        const userId = this.authService.currentUserValue?.id;
        if (userId) {
          const now = (/* @__PURE__ */ new Date()).toISOString();
          const { error } = yield this.supabase.getSupabaseClient().from("chat_participants").update({ last_read_at: now }).eq("conversation_id", conversation.id).eq("user_id", userId);
          if (error) {
            console.error("\u274C Errore aggiornamento last_read_at:", error);
          } else {
            this.lastReadMap.set(conversation.id, now);
            this.resetUnread(conversation.id);
          }
        }
        yield this.loadMessages(conversation.id);
        this.subscribeToMessages(conversation.id);
      } else {
        this.messagesSubject.next([]);
      }
    });
  }
  // --- Gestione messaggi ---
  loadMessages(conversationId) {
    return __async(this, null, function* () {
      this.loadingSubject.next(true);
      try {
        const { data, error } = yield this.run(this.supabase.getSupabaseClient().from("chat_messages").select(`
            *,
            sender:sender_id(id, first_name, last_name, email, avatar_url)
          `).eq("conversation_id", conversationId).order("created_at", { ascending: true }));
        if (error)
          throw error;
        this.messagesSubject.next(data || []);
      } catch (error) {
        console.error("Error loading messages:", error);
      } finally {
        this.loadingSubject.next(false);
      }
    });
  }
  sendMessage(conversationId, content) {
    return __async(this, null, function* () {
      const user = this.authService.currentUserValue;
      if (!user)
        return null;
      try {
        const { data, error } = yield this.run(this.supabase.getSupabaseClient().from("chat_messages").insert({
          conversation_id: conversationId,
          sender_id: user.id,
          content: content.trim()
        }).select(`
          *,
          sender:sender_id(id, first_name, last_name, email, avatar_url)
        `).single());
        if (error)
          throw error;
        if (!data)
          return null;
        const currentMessages = this.messagesSubject.value;
        this.messagesSubject.next([...currentMessages, data]);
        const currentConvs = this.conversationsSubject.value;
        const updatedConvs = currentConvs.map((conv) => {
          if (conv.id === conversationId) {
            return __spreadProps(__spreadValues({}, conv), { last_message: data });
          }
          return conv;
        });
        this.conversationsSubject.next(updatedConvs);
        console.log("\u{1F4E4} Invio push per messaggio:", data.content);
        this.triggerChatPushNotification(conversationId, data.content, user);
        return data;
        return data;
      } catch (error) {
        console.error("Error sending message:", error);
        return null;
      }
    });
  }
  updateMessage(messageId, newContent) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.run(this.supabase.getSupabaseClient().from("chat_messages").update({ content: newContent.trim() }).eq("id", messageId));
        if (error)
          throw error;
        const messages = this.messagesSubject.value.map((m) => m.id === messageId ? __spreadProps(__spreadValues({}, m), { content: newContent, updated_at: (/* @__PURE__ */ new Date()).toISOString() }) : m);
        this.messagesSubject.next(messages);
        return true;
      } catch (error) {
        console.error("Error updating message:", error);
        return false;
      }
    });
  }
  deleteMessage(messageId) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.run(this.supabase.getSupabaseClient().from("chat_messages").delete().eq("id", messageId));
        if (error)
          throw error;
        const messages = this.messagesSubject.value.filter((m) => m.id !== messageId);
        this.messagesSubject.next(messages);
        return true;
      } catch (error) {
        console.error("Error deleting message:", error);
        return false;
      }
    });
  }
  // --- Realtime subscription ---
  subscribeToMessages(conversationId) {
    this.realtimeChannel = this.supabase.getSupabaseClient().channel(`messages:${conversationId}`).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "chat_messages",
      filter: `conversation_id=eq.${conversationId}`
    }, (payload) => {
      this.handleRealtimeMessage(payload);
    }).subscribe();
  }
  handleRealtimeMessage(payload) {
    const currentMessages = this.messagesSubject.value;
    const activeId = this.activeConversationSubject.value?.id;
    console.log("\u{1F4E8} Realtime message event:", payload.eventType, payload.new?.conversation_id, "active:", activeId);
    switch (payload.eventType) {
      case "INSERT":
        if (!currentMessages.some((m) => m.id === payload.new.id)) {
          this.loadSenderAndAdd(payload.new);
        }
        break;
      case "UPDATE":
        this.messagesSubject.next(currentMessages.map((m) => m.id === payload.new.id ? __spreadValues(__spreadValues({}, m), payload.new) : m));
        break;
      case "DELETE":
        this.messagesSubject.next(currentMessages.filter((m) => m.id !== payload.old.id));
        break;
    }
  }
  loadSenderAndAdd(message) {
    return __async(this, null, function* () {
      const { data: sender } = yield this.supabase.getSupabaseClient().from("users").select("id, first_name, last_name, email, avatar_url").eq("id", message.sender_id).single();
      const fullMessage = __spreadProps(__spreadValues({}, message), { sender });
      this.messagesSubject.next([...this.messagesSubject.value, fullMessage]);
    });
  }
  // --- Creazione chat private (direct) ---
  createDirectConversation(otherUserId) {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      const currentUser = this.authService.currentUserValue;
      if (!restaurantId || !currentUser)
        return null;
      const { data, error } = yield this.supabase.getSupabaseClient().rpc("create_direct_conversation", {
        p_restaurant_id: restaurantId,
        p_user1: currentUser.id,
        p_user2: otherUserId
      });
      if (error) {
        console.error("\u274C Error creating conversation:", error);
        return null;
      }
      const conversation = data;
      const { data: otherUser } = yield this.supabase.getSupabaseClient().from("users").select("id, first_name, last_name, avatar_url").eq("id", otherUserId).single();
      const enriched = __spreadProps(__spreadValues({}, conversation), {
        other_participant: otherUser || null,
        last_message: null
      });
      const current = this.conversationsSubject.value;
      const alreadyExists = current.some((c) => c.id === enriched.id);
      if (!alreadyExists) {
        this.conversationsSubject.next([enriched, ...current]);
      }
      this.setupGlobalRealtimeSubscription();
      return enriched;
    });
  }
  /**
   * Verifica se un utente è membro di un ristorante (owner o staff accettato)
   */
  isUserRestaurantMember(userId, restaurantId) {
    return __async(this, null, function* () {
      try {
        const { data: restaurant, error: ownerError } = yield this.supabase.getSupabaseClient().from("restaurants").select("owner_id").eq("id", restaurantId).single();
        if (!ownerError && restaurant && restaurant.owner_id === userId) {
          return true;
        }
        const { count, error: staffError } = yield this.supabase.getSupabaseClient().from("restaurant_staff").select("*", { count: "exact", head: true }).eq("restaurant_id", restaurantId).eq("user_id", userId).eq("invitation_status", "accepted");
        if (staffError) {
          console.error("Error checking staff status:", staffError);
          return false;
        }
        return (count || 0) > 0;
      } catch (error) {
        console.error("Error in isUserRestaurantMember:", error);
        return false;
      }
    });
  }
  // --- Metodo helper per eseguire query con loader ---
  run(query) {
    return __async(this, null, function* () {
      this.loadingService.start();
      try {
        return yield query;
      } finally {
        this.loadingService.stop();
      }
    });
  }
  ngOnDestroy() {
    if (this.realtimeChannel) {
      this.supabase.getSupabaseClient().removeChannel(this.realtimeChannel);
    }
    this.messagesSubject.complete();
    this.conversationsSubject.complete();
    this.activeConversationSubject.complete();
    this.loadingSubject.complete();
  }
  /**
  * Configura una subscription realtime per ricevere tutti i nuovi messaggi
  * nelle conversazioni a cui l'utente partecipa.
  */
  setupGlobalRealtimeSubscription() {
    return __async(this, null, function* () {
      const restaurantId = this.authService.getCurrentRestaurantId();
      if (!restaurantId)
        return;
      const conversationIds = this.conversationsSubject.value.map((c) => c.id);
      if (conversationIds.length === 0) {
        console.log("\u26A0\uFE0F Nessuna conversazione, subscription globale non avviata");
        return;
      }
      if (this.globalRealtimeChannel) {
        console.log("\u{1F504} Rimozione vecchia subscription globale");
        yield this.supabase.getSupabaseClient().removeChannel(this.globalRealtimeChannel);
        this.globalRealtimeChannel = null;
      }
      const filter = `conversation_id=in.(${conversationIds.join(",")})`;
      console.log("\u{1F50D} Filtro globale:", filter);
      this.globalRealtimeChannel = this.supabase.getSupabaseClient().channel("global-messages").on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "chat_messages",
        filter
      }, (payload) => {
        console.log("\u{1F4E8} Messaggio globale ricevuto:", payload);
        this.handleGlobalMessage(payload);
      }).subscribe((status) => {
        console.log("\u{1F4E1} Subscription globale status:", status);
      });
    });
  }
  handleGlobalMessage(payload) {
    const msgId = payload.new.id;
    if (this.processedMessageIds.has(msgId)) {
      console.log("\u23ED\uFE0F Messaggio gi\xE0 processato, salto:", msgId);
      return;
    }
    this.processedMessageIds.add(msgId);
    setTimeout(() => this.processedMessageIds.delete(msgId), 5e3);
    const activeId = this.activeConversationSubject.value?.id;
    const msgConvId = payload.new.conversation_id;
    const currentUserId = this.authService.currentUserValue?.id;
    if (payload.new.sender_id === currentUserId)
      return;
    if (msgConvId !== activeId) {
      const lastRead = this.lastReadMap.get(msgConvId);
      if (!lastRead || new Date(payload.new.created_at) > new Date(lastRead)) {
        this.incrementUnread(msgConvId, 1, "global");
      }
    }
    this.updateConversationLastMessage(payload.new);
  }
  updateConversationLastMessage(message) {
    const conversations = this.conversationsSubject.value;
    const index = conversations.findIndex((c) => c.id === message.conversation_id);
    if (index !== -1) {
      const updated = [...conversations];
      updated[index] = __spreadProps(__spreadValues({}, updated[index]), { last_message: message });
      const [moved] = updated.splice(index, 1);
      updated.unshift(moved);
      this.conversationsSubject.next(updated);
    }
  }
  triggerChatPushNotification(conversationId, content, sender) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.getSupabaseClient().functions.invoke("send-chat-push", {
          body: {
            conversation_id: conversationId,
            sender_id: sender.id,
            message_content: content,
            sender_name: `${sender.first_name} ${sender.last_name}`
          }
        });
        if (error)
          console.error("Push error:", error);
        else
          console.log("Push result:", data);
      } catch (err) {
        console.error("Errore invio push chat:", err);
      }
    });
  }
  static \u0275fac = function ChatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ChatService
};
//# sourceMappingURL=chunk-LDX73JLD.js.map
