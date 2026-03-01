import {
  BaseService
} from "./chunk-K4QVN3EH.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/promotion-notification.service.ts
var PromotionNotificationService = class _PromotionNotificationService extends BaseService {
  getTableName() {
    return "promotion_notifications";
  }
  daysUntilNextAllowed() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return 0;
      const { data } = yield this.getSupabaseClientPublic().from(this.getTableName()).select("sent_at").eq("restaurant_id", restaurantId).order("sent_at", { ascending: false }).limit(1);
      if (!data || data.length === 0)
        return 0;
      const lastSent = new Date(data[0].sent_at);
      const diffDays = Math.ceil((Date.now() - lastSent.getTime()) / (1e3 * 60 * 60 * 24));
      return diffDays >= 7 ? 0 : 7 - diffDays;
    });
  }
  hasBeenNotified(promotionId) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return false;
      const { data } = yield this.getSupabaseClientPublic().from(this.getTableName()).select("id").eq("promotion_id", promotionId).eq("restaurant_id", restaurantId).limit(1);
      return (data?.length ?? 0) > 0;
    });
  }
  sendPromotionPush(promotionId) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return { success: false, errorCode: "unknown", message: "Ristorante non trovato" };
      const { data: followers, error: followersError } = yield this.getSupabaseClientPublic().from("restaurant_followers").select("user_id").eq("restaurant_id", restaurantId);
      if (followersError || !followers?.length) {
        return { success: false, errorCode: "no_recipients", message: "Nessun follower" };
      }
      const followerIds = followers.map((f) => f.user_id);
      const { data: subscriptions, error: subError } = yield this.getSupabaseClientPublic().from("push_subscriptions").select("user_id").eq("is_active", true).in("user_id", followerIds);
      if (subError || !subscriptions?.length) {
        return { success: false, errorCode: "no_recipients", message: "Nessun follower con notifiche attive" };
      }
      const uniqueUserIds = [...new Set(subscriptions.map((s) => s.user_id))];
      const notifications = uniqueUserIds.map((userId) => ({
        promotion_id: promotionId,
        restaurant_id: restaurantId,
        user_id: userId,
        channel: "push",
        status: "sent",
        sent_at: (/* @__PURE__ */ new Date()).toISOString()
      }));
      const { error: insertError } = yield this.getSupabaseClientPublic().from("promotion_notifications").insert(notifications);
      if (insertError) {
        console.error("Errore inserimento notifiche:", insertError);
        return { success: false, errorCode: "unknown", message: "Errore durante il salvataggio" };
      }
      return { success: true, sent: uniqueUserIds.length };
    });
  }
  getMyPromotions() {
    return __async(this, null, function* () {
      const userId = this.authService.currentUserValue?.id;
      if (!userId)
        return [];
      const { data, error } = yield this.getSupabaseClientPublic().from("promotion_notifications").select(`
      id,
      sent_at,
      promotion:promotions!inner (
        id,
        name,
        description,
        image_url,
        type,
        discount_value,
        max_discount_amount,
        valid_from,
        valid_until,
        min_order_amount
      ),
      restaurant:restaurants!inner (
        id,
        name,
        logo_url
      )
    `).eq("user_id", userId).order("sent_at", { ascending: false });
      if (error) {
        console.error("Errore nel recupero promozioni utente:", error);
        return [];
      }
      return (data || []).map((item) => ({
        notification_id: item.id,
        sent_at: item.sent_at,
        promotion: Array.isArray(item.promotion) ? item.promotion[0] : item.promotion,
        restaurant: Array.isArray(item.restaurant) ? item.restaurant[0] : item.restaurant
      }));
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PromotionNotificationService_BaseFactory;
    return function PromotionNotificationService_Factory(__ngFactoryType__) {
      return (\u0275PromotionNotificationService_BaseFactory || (\u0275PromotionNotificationService_BaseFactory = \u0275\u0275getInheritedFactory(_PromotionNotificationService)))(__ngFactoryType__ || _PromotionNotificationService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PromotionNotificationService, factory: _PromotionNotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromotionNotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PromotionNotificationService
};
//# sourceMappingURL=chunk-3OF7SE46.js.map
