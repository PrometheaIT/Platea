import {
  AuthService,
  SupabaseService
} from "./chunk-6SNKM7Z6.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/services/restaurant-follower.service.ts
var RestaurantFollowerService = class _RestaurantFollowerService {
  supabaseService = inject(SupabaseService);
  authService = inject(AuthService);
  get client() {
    return this.supabaseService.getSupabaseClient();
  }
  /** Controlla se l'utente corrente segue già il ristorante */
  isFollowing(restaurantId) {
    return __async(this, null, function* () {
      const userId = this.authService.currentUserValue?.id;
      if (!userId)
        return false;
      const { data, error } = yield this.client.from("restaurant_followers").select("id").eq("user_id", userId).eq("restaurant_id", restaurantId).maybeSingle();
      return !error && !!data;
    });
  }
  /** Segui un ristorante */
  follow(restaurantId) {
    return __async(this, null, function* () {
      const userId = this.authService.currentUserValue?.id;
      if (!userId)
        return false;
      const { error } = yield this.client.from("restaurant_followers").insert({ user_id: userId, restaurant_id: restaurantId });
      return !error;
    });
  }
  /** Smetti di seguire */
  unfollow(restaurantId) {
    return __async(this, null, function* () {
      const userId = this.authService.currentUserValue?.id;
      if (!userId)
        return false;
      const { error } = yield this.client.from("restaurant_followers").delete().eq("user_id", userId).eq("restaurant_id", restaurantId);
      return !error;
    });
  }
  /** Toggle — ritorna il nuovo stato (true = ora segue) */
  toggleFollow(restaurantId) {
    return __async(this, null, function* () {
      const following = yield this.isFollowing(restaurantId);
      if (following) {
        yield this.unfollow(restaurantId);
        return false;
      } else {
        yield this.follow(restaurantId);
        return true;
      }
    });
  }
  /** Tutti i ristoranti seguiti dall'utente corrente */
  getFollowedRestaurants() {
    return __async(this, null, function* () {
      const userId = this.authService.currentUserValue?.id;
      if (!userId)
        return [];
      const { data, error } = yield this.client.from("restaurant_followers").select("restaurant_id").eq("user_id", userId);
      return error ? [] : (data || []).map((r) => r.restaurant_id);
    });
  }
  /** Numero di follower di un ristorante (pubblico, per mostrarlo nella UI) */
  getFollowerCount(restaurantId) {
    return __async(this, null, function* () {
      const { count, error } = yield this.client.from("restaurant_followers").select("id", { count: "exact", head: true }).eq("restaurant_id", restaurantId);
      return error ? 0 : count ?? 0;
    });
  }
  getFollowersForRestaurant(restaurantId) {
    return __async(this, null, function* () {
      const { data: followers, error } = yield this.client.from("restaurant_followers").select("user_id, followed_at").eq("restaurant_id", restaurantId).order("followed_at", { ascending: false });
      if (error) {
        console.error("\u274C getFollowersForRestaurant error:", error);
        return [];
      }
      if (!followers?.length)
        return [];
      const userIds = followers.map((f) => f.user_id);
      const { data: users, error: usersError } = yield this.client.from("users").select("id, first_name, last_name, email").in("id", userIds);
      if (usersError) {
        console.error("\u274C users fetch error:", usersError);
      }
      return followers.map((f) => ({
        user_id: f.user_id,
        followed_at: f.followed_at,
        // ← solo questo, tolto l'alias created_at
        users: users?.find((u) => u.id === f.user_id) || null
      }));
    });
  }
  static \u0275fac = function RestaurantFollowerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantFollowerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RestaurantFollowerService, factory: _RestaurantFollowerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantFollowerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RestaurantFollowerService
};
//# sourceMappingURL=chunk-R4XW7GQX.js.map
