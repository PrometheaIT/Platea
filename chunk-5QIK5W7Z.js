import {
  AuthService,
  SupabaseService,
  environment
} from "./chunk-77JDNC7M.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-T3MDKIO5.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/push-notification.service.ts
var PushNotificationService = class _PushNotificationService {
  supabaseService = inject(SupabaseService);
  authService = inject(AuthService);
  /** Verifica supporto browser */
  isSupported() {
    return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
  }
  /** Stato attuale del permesso (senza chiedere) */
  getPermissionStatus() {
    if (!this.isSupported())
      return "unsupported";
    return Notification.permission;
  }
  /**
   * Flusso GDPR-compliant:
   * 1. Mostra dialog consenso esplicito (PRIMA del browser prompt)
   * 2. Chiede permesso al browser
   * 3. Salva subscription + proof of consent su Supabase
   */
  requestPermissionAndSubscribe() {
    return __async(this, null, function* () {
      console.log("PushService: requestPermissionAndSubscribe - start");
      if (!this.isSupported()) {
        console.warn("PushService: not supported");
        const verify = yield this.hasActiveSubscription();
        console.log("PushService: after upsert, hasActiveSubscription =", verify);
        return false;
      }
      if (Notification.permission === "denied") {
        console.log("PushService: permission already denied");
        return false;
      }
      try {
        console.log("PushService: requesting permission...");
        const permission = yield Notification.requestPermission();
        console.log("PushService: permission result:", permission);
        if (permission !== "granted")
          return false;
        console.log("PushService: getting service worker...");
        const sw = yield navigator.serviceWorker.ready;
        console.log("PushService: service worker ready:", sw);
        console.log("PushService: creating subscription...");
        const subscription = yield sw.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array(environment.vapidPublicKey)
        });
        console.log("PushService: subscription created:", subscription.toJSON());
        const userId = this.getUserId();
        if (!userId) {
          console.error("PushService: user not logged in");
          return false;
        }
        const sub = subscription.toJSON();
        const now = (/* @__PURE__ */ new Date()).toISOString();
        console.log("PushService: upserting to Supabase...");
        const { error } = yield this.supabaseService.getSupabaseClient().from("push_subscriptions").upsert({
          user_id: userId,
          endpoint: sub.endpoint,
          p256dh_key: sub.keys?.["p256dh"],
          auth_key: sub.keys?.["auth"],
          device_type: this.getDeviceType(),
          browser: this.getBrowserName(),
          user_agent: navigator.userAgent,
          consent_given_at: now,
          consent_user_agent: navigator.userAgent,
          is_active: true,
          revoked_at: null
        }, {
          onConflict: "user_id,endpoint"
        });
        if (error) {
          console.error("PushService: Supabase upsert error:", error);
          return false;
        }
        console.log("PushService: upsert successful");
        return true;
      } catch (err) {
        console.error("PushService: exception in requestPermissionAndSubscribe:", err);
        return false;
      }
    });
  }
  /** Revoca consenso — GDPR Art.7.3 */
  revokeConsent() {
    return __async(this, null, function* () {
      const userId = this.getUserId();
      if (!userId)
        return false;
      try {
        const sw = yield navigator.serviceWorker.ready;
        const subscription = yield sw.pushManager.getSubscription();
        if (subscription)
          yield subscription.unsubscribe();
        const { error } = yield this.supabaseService.getSupabaseClient().from("push_subscriptions").update({
          is_active: false,
          revoked_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("user_id", userId);
        return !error;
      } catch (err) {
        console.error("Errore revoca consenso:", err);
        return false;
      }
    });
  }
  /** Controlla se l'utente ha già una subscription attiva */
  hasActiveSubscription() {
    return __async(this, null, function* () {
      const userId = this.getUserId();
      if (!userId) {
        console.log("\u{1F50D} hasActiveSubscription - no userId");
        return false;
      }
      const { data, error } = yield this.supabaseService.getSupabaseClient().from("push_subscriptions").select("id").eq("user_id", userId).eq("is_active", true).limit(1);
      if (error) {
        console.error("\u274C hasActiveSubscription - DB error:", error);
        return false;
      }
      const active = (data?.length ?? 0) > 0;
      console.log("\u{1F50D} hasActiveSubscription - active:", active);
      return active;
    });
  }
  // ── Helpers privati ─────────────────────────────────────────
  urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray.buffer;
  }
  getDeviceType() {
    const ua = navigator.userAgent;
    if (/tablet|ipad/i.test(ua))
      return "tablet";
    if (/mobile|iphone|android/i.test(ua))
      return "mobile";
    return "desktop";
  }
  getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes("Chrome"))
      return "Chrome";
    if (ua.includes("Firefox"))
      return "Firefox";
    if (ua.includes("Safari"))
      return "Safari";
    if (ua.includes("Edge"))
      return "Edge";
    return "Unknown";
  }
  getUserId() {
    const id = this.authService.currentUserValue?.id ?? null;
    console.log("PushService: getUserId =", id);
    return id;
  }
  static \u0275fac = function PushNotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PushNotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PushNotificationService, factory: _PushNotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PushNotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PushNotificationService
};
//# sourceMappingURL=chunk-5QIK5W7Z.js.map
