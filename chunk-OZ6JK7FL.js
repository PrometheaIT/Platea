// src/app/models.ts
var ALLERGENS = [
  { id: 1, name: "Cereali contenenti glutine", code: "GLUTEN", icon: "wheat" },
  { id: 2, name: "Crostacei", code: "CRUSTACEANS", icon: "shell" },
  { id: 3, name: "Uova", code: "EGGS", icon: "egg" },
  { id: 4, name: "Pesce", code: "FISH", icon: "fish" },
  { id: 5, name: "Arachidi", code: "PEANUTS", icon: "circle-dot" },
  { id: 6, name: "Soia", code: "SOYBEANS", icon: "sprout" },
  { id: 7, name: "Latte", code: "MILK", icon: "milk" },
  { id: 8, name: "Frutta a guscio", code: "NUTS", icon: "nut" },
  { id: 9, name: "Sedano", code: "CELERY", icon: "leaf" },
  { id: 10, name: "Senape", code: "MUSTARD", icon: "droplet" },
  { id: 11, name: "Semi di sesamo", code: "SESAME", icon: "circle" },
  { id: 12, name: "Anidride solforosa e solfiti", code: "SULPHITES", icon: "wind" },
  { id: 13, name: "Lupini", code: "LUPIN", icon: "flower" },
  { id: 14, name: "Molluschi", code: "MOLLUSCS", icon: "shell" }
];
function getAllergenById(id) {
  return ALLERGENS.find((a) => a.id === id);
}
var PROMOTION_TYPE_LABELS = {
  percentage: { label: "% Sconto", icon: "percent", color: "#7209B7" },
  fixed_amount: { label: "\u20AC Fisso", icon: "euro", color: "#B5179E" },
  happy_hour: { label: "Happy Hour", icon: "schedule", color: "#EF233C" },
  buy_x_get_y: { label: "Bundle", icon: "card_giftcard", color: "#f59e0b" },
  free_item: { label: "Omaggio", icon: "redeem", color: "#10b981" }
};
var PROMOTION_STATUS_LABELS = {
  draft: { label: "Bozza", chipClass: "chip" },
  active: { label: "Attiva", chipClass: "chip active" },
  paused: { label: "Sospesa", chipClass: "chip warning" },
  expired: { label: "Scaduta", chipClass: "chip" },
  archived: { label: "Archiviata", chipClass: "chip" }
};
var DISCOUNT_TARGET_LABELS = {
  order: "Intero ordine",
  category: "Categoria",
  product: "Prodotto",
  delivery: "Consegna"
};
var STACKING_LABELS = {
  exclusive: { label: "Esclusiva", description: "Nessun altro sconto applicabile" },
  cumulative: { label: "Cumulabile", description: "Si somma ad altri sconti attivi" },
  best_deal: { label: "Migliore", description: "Vince solo lo sconto pi\xF9 vantaggioso" }
};
function getDefaultPromotion() {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return {
    name: "",
    description: null,
    internal_note: null,
    image_url: null,
    type: "percentage",
    target: "order",
    discount_value: 10,
    max_discount_amount: null,
    valid_from: today,
    valid_until: null,
    max_uses_total: null,
    max_uses_per_customer: 1,
    min_order_amount: 0,
    priority: 0,
    stacking: "exclusive",
    status: "draft",
    is_public: true
  };
}
var ROLE_LABELS = {
  tutti: "Tutti",
  manager: "Responsabile",
  chef: "Chef",
  waiter: "Cameriere",
  kitchen_staff: "Dipendente Cucina"
};
var STATUS_LABELS = {
  da_iniziare: "Da Iniziare",
  in_lavorazione: "In Lavorazione",
  completata: "Completata"
};
var PRIORITY_LABELS = {
  1: "Minima",
  2: "Bassa",
  3: "Media",
  4: "Alta",
  5: "Urgente"
};

export {
  ALLERGENS,
  getAllergenById,
  PROMOTION_TYPE_LABELS,
  PROMOTION_STATUS_LABELS,
  DISCOUNT_TARGET_LABELS,
  STACKING_LABELS,
  getDefaultPromotion,
  ROLE_LABELS,
  STATUS_LABELS,
  PRIORITY_LABELS
};
//# sourceMappingURL=chunk-OZ6JK7FL.js.map
