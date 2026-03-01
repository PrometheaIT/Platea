import {
  SupplierService
} from "./chunk-UUUZOHF7.js";
import {
  BaseService
} from "./chunk-K4QVN3EH.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/Economico/expense.service.ts
var ExpenseService = class _ExpenseService extends BaseService {
  getTableName() {
    return "expenses";
  }
  supplierService = inject(SupplierService);
  categoriesSubject = new BehaviorSubject([]);
  categories$ = this.categoriesSubject.asObservable();
  suppliersSubject = new BehaviorSubject([]);
  suppliers$ = this.suppliersSubject.asObservable();
  recurringTemplatesSubject = new BehaviorSubject([]);
  recurringTemplates$ = this.recurringTemplatesSubject.asObservable();
  // 🔥 CORREZIONE: Aggiungi il modificatore override al metodo create
  create(item) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const expenseToCreate = __spreadProps(__spreadValues({}, item), {
          restaurant_id: restaurantId,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(expenseToCreate).select("*").single();
        if (error)
          throw error;
        if (item.month) {
          yield this.loadExpensesForMonth(item.month, false);
        } else {
          yield this.loadData();
        }
        console.log("\u2705 Expense created:", data);
        return data;
      } catch (error) {
        console.error("\u274C Error creating expense:", error);
        return null;
      }
    });
  }
  // 🔥 CORREZIONE: Aggiorna il metodo update con override
  update(id, updates) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const updatedData = __spreadProps(__spreadValues({}, updates), {
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        if ("deleted_at" in updates) {
          updatedData.is_active = updates.deleted_at === null;
        }
        if ("is_active" in updates) {
          updatedData.deleted_at = updates.is_active ? null : (/* @__PURE__ */ new Date()).toISOString();
        }
        console.log("\u{1F504} Updating expense with synchronized data:", updatedData);
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).update(updatedData).eq("id", id).eq("restaurant_id", restaurantId);
        if (error)
          throw error;
        if (updates.month) {
          yield this.loadExpensesForMonth(updates.month, false);
        } else {
          yield this.loadData();
        }
        return true;
      } catch (error) {
        console.error("\u274C Error updating expense:", error);
        return false;
      }
    });
  }
  getDefaultCategories() {
    return [
      "Affitto",
      "Bollette (Luce/Gas/Acqua)",
      "Telefono/Internet",
      "Personale",
      "Forniture",
      "Manutenzione",
      "Marketing",
      "Assicurazione",
      "Tasse",
      "Mutuo",
      "Utensili e Attrezzature",
      "Pulizia e Igiene",
      "Spese Bancarie",
      "Software e Tecnologia",
      "Trasporti e Consegne",
      "Formazione",
      "Altro"
    ];
  }
  // Carica le categorie personalizzate
  loadCategories() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("expense_categories").select("*").eq("restaurant_id", restaurantId).eq("is_active", true).order("name");
        if (error)
          throw error;
        this.categoriesSubject.next(data || []);
      } catch (error) {
        console.error("Error loading expense categories:", error);
      }
    });
  }
  // Crea nuova categoria
  createCategory(category) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const categoryToCreate = __spreadProps(__spreadValues({}, category), {
          is_active: category.is_active ?? true,
          restaurant_id: restaurantId,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("expense_categories").insert(categoryToCreate).select().single();
        if (error)
          throw error;
        yield this.loadCategories();
        return data;
      } catch (error) {
        console.error("Error creating expense category:", error);
        return null;
      }
    });
  }
  // 🔥 CORREZIONE: Carica spese per intervallo date - FIXED ORDERING
  loadExpensesForDateRange(startMonth, endMonth) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.log("\u274C No restaurant ID found for date range");
          return [];
        }
        const formattedStart = this.formatMonthForDatabase(startMonth);
        const formattedEnd = this.formatMonthForDatabase(endMonth);
        console.log("\u{1F50D} Loading expenses for date range:", {
          startMonth,
          formattedStart,
          endMonth,
          formattedEnd,
          restaurantId
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select(`
          *,
          suppliers (
            company_name,
            contact_name,
            email,
            phone
          )
        `).eq("restaurant_id", restaurantId).gte("month", formattedStart).lte("month", formattedEnd).is("deleted_at", null).eq("is_active", true).order("month", { ascending: false }).order("type", { ascending: true }).order("category", { ascending: true });
        if (error) {
          console.error("\u274C Supabase error loading expenses for date range:", error);
          throw error;
        }
        console.log("\u2705 Date range expenses loaded:", data?.length || 0, "items");
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading expenses for date range:", error);
        return [];
      }
    });
  }
  // 🔥 MIGLIORAMENTO: Formatta il mese per il database
  formatMonthForDatabase(month) {
    if (!month) {
      console.warn("\u26A0\uFE0F Month parameter is empty, using current month");
      const currentDate = /* @__PURE__ */ new Date();
      return currentDate.toISOString().split("T")[0];
    }
    if (month.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return month;
    }
    if (month.match(/^\d{4}-\d{2}$/)) {
      return `${month}-01`;
    }
    try {
      const date = new Date(month);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }
      return date.toISOString().split("T")[0];
    } catch (error) {
      console.error("\u274C Invalid month format:", month, "using current month");
      const currentDate = /* @__PURE__ */ new Date();
      return currentDate.toISOString().split("T")[0];
    }
  }
  // Calcola totali
  calculateMonthlyTotal(expenses) {
    const fisse = expenses.filter((exp) => exp.type === "fissa").reduce((sum, exp) => sum + exp.amount, 0);
    const variabili = expenses.filter((exp) => exp.type === "variabile").reduce((sum, exp) => sum + exp.amount, 0);
    return {
      fisse,
      variabili,
      totale: fisse + variabili
    };
  }
  // Ottieni mesi disponibili
  getAvailableMonths() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("month").eq("restaurant_id", restaurantId).order("month", { ascending: false });
        if (error)
          throw error;
        const uniqueMonths = [...new Set(data?.map((item) => item.month) || [])];
        return uniqueMonths;
      } catch (error) {
        console.error("Error getting available months:", error);
        return [];
      }
    });
  }
  // 🔥 NUOVO METODO: Debug per verificare i dati
  debugExpenses() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        console.log("\u{1F50D} DEBUG - Restaurant ID:", restaurantId);
        if (!restaurantId)
          return;
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).limit(10);
        if (error) {
          console.error("\u274C DEBUG - Error loading expenses:", error);
          return;
        }
        console.log("\u{1F50D} DEBUG - First 10 expenses:", data);
      } catch (error) {
        console.error("\u274C DEBUG - Error:", error);
      }
    });
  }
  /**
   * Carica tutti i fornitori disponibili per il ristorante
   */
  loadSuppliers() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        console.log("\u{1F50D} Loading suppliers for restaurant:", restaurantId);
        const { data: suppliers, error } = yield this.supabaseService.getSupabaseClient().from("suppliers").select("*").or(`restaurant_id.eq.${restaurantId},is_platform_supplier.eq.true`).eq("is_approved", true).order("company_name");
        if (error) {
          console.error("\u274C Error loading suppliers:", error);
          return;
        }
        const supplierOptions = (suppliers || []).map((supplier) => ({
          id: supplier.id,
          company_name: supplier.company_name,
          contact_name: supplier.contact_name,
          email: supplier.email,
          phone: supplier.phone,
          is_platform_supplier: supplier.is_platform_supplier,
          is_approved: supplier.is_approved,
          type: supplier.is_platform_supplier ? "platform" : "manual"
        }));
        console.log("\u2705 Suppliers loaded:", supplierOptions.length);
        this.suppliersSubject.next(supplierOptions);
      } catch (error) {
        console.error("\u274C Error in loadSuppliers:", error);
      }
    });
  }
  // SPESE RICORRENTI
  /**
   * Crea un template per spesa ricorrente
   */
  createRecurringTemplate(templateData) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return null;
        const templateToCreate = __spreadProps(__spreadValues({}, templateData), {
          restaurant_id: restaurantId,
          is_active: true,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("recurring_expense_templates").insert(templateToCreate).select().single();
        if (error)
          throw error;
        yield this.loadRecurringTemplates();
        return data;
      } catch (error) {
        console.error("\u274C Error creating recurring template:", error);
        return null;
      }
    });
  }
  /**
   * Carica i template di spese ricorrenti
   */
  loadRecurringTemplates() {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return;
        const { data, error } = yield this.supabaseService.getSupabaseClient().from("recurring_expense_templates").select("*").eq("restaurant_id", restaurantId).eq("is_active", true).order("name");
        if (error)
          throw error;
        this.recurringTemplatesSubject.next(data || []);
      } catch (error) {
        console.error("\u274C Error loading recurring templates:", error);
      }
    });
  }
  /**
   * Genera le spese ricorrenti per un mese specifico
   */
  generateRecurringExpensesForMonth(month) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.log("\u274C No restaurant ID found");
          return [];
        }
        const formattedMonth = this.formatMonthForDatabase(month);
        console.log("\u{1F504} Generating recurring expenses for:", formattedMonth);
        try {
          const { error: tableCheckError } = yield this.supabaseService.getSupabaseClient().from("recurring_expense_templates").select("id").limit(1);
          if (tableCheckError && tableCheckError.code === "PGRST205") {
            console.error("\u274C Table recurring_expense_templates does not exist");
            return [];
          }
        } catch (tableError) {
          console.error("\u274C Error checking table existence:", tableError);
          return [];
        }
        const { data: templates, error } = yield this.supabaseService.getSupabaseClient().from("recurring_expense_templates").select("*").eq("restaurant_id", restaurantId).eq("is_active", true).lte("start_month", formattedMonth).or(`end_month.is.null,end_month.gte.${formattedMonth}`).order("name");
        if (error) {
          console.error("\u274C Error loading recurring templates:", error);
          return [];
        }
        if (!templates || templates.length === 0) {
          console.log("\u2139\uFE0F No recurring templates found for this month");
          return [];
        }
        const { data: existingExpenses } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("id, name, month").eq("restaurant_id", restaurantId).eq("month", formattedMonth);
        const existingExpenseNames = existingExpenses?.map((exp) => exp.name.toLowerCase()) || [];
        const templatesToGenerate = templates.filter((template) => !existingExpenseNames.includes(template.name.toLowerCase()));
        console.log(`\u{1F50D} Found ${templates.length} templates, ${templatesToGenerate.length} to generate`);
        const generatedExpenses = [];
        const now = (/* @__PURE__ */ new Date()).toISOString();
        for (const template of templatesToGenerate) {
          const expenseData = {
            name: template.name,
            amount: template.amount,
            type: template.type,
            category: template.category,
            month: formattedMonth,
            notes: template.notes,
            supplier_id: template.supplier_id,
            is_recurring: true,
            template_id: template.id,
            restaurant_id: restaurantId,
            created_at: now,
            updated_at: now
          };
          const { data: expense, error: expenseError } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(expenseData).select().single();
          if (!expenseError && expense) {
            generatedExpenses.push(expense);
            console.log(`\u2705 Generated expense: ${template.name} (\u20AC${template.amount})`);
          }
        }
        return generatedExpenses;
      } catch (error) {
        console.error("\u274C Error generating recurring expenses:", error);
        return [];
      }
    });
  }
  /**
   * Aggiorna un template ricorrente
   */
  updateRecurringTemplate(templateId, updates) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const { error } = yield this.supabaseService.getSupabaseClient().from("recurring_expense_templates").update(__spreadProps(__spreadValues({}, updates), {
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        })).eq("id", templateId).eq("restaurant_id", restaurantId);
        if (error)
          throw error;
        yield this.loadRecurringTemplates();
        return true;
      } catch (error) {
        console.error("\u274C Error updating recurring template:", error);
        return false;
      }
    });
  }
  /**
   * Carica spese per mese con generazione automatica delle ricorrenti
   */
  loadExpensesForMonth(month, autoGenerate = true) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId) {
          console.log("\u274C No restaurant ID found");
          this.dataSubject.next([]);
          return;
        }
        const formattedMonth = this.formatMonthForDatabase(month);
        console.log("\u{1F50D} Loading expenses for:", { month: formattedMonth, restaurantId });
        if (autoGenerate) {
          yield this.generateRecurringExpensesForMonth(month);
        }
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).eq("month", formattedMonth).is("deleted_at", null).eq("is_active", true).order("type", { ascending: true }).order("category", { ascending: true });
        if (error) {
          console.error("\u274C Supabase error loading expenses:", error);
          throw error;
        }
        console.log("\u2705 Expenses loaded successfully:", data?.length || 0, "items");
        this.dataSubject.next(data || []);
      } catch (error) {
        console.error("\u274C Error loading expenses for month:", error);
        this.dataSubject.next([]);
      }
    });
  }
  // Helper methods
  getCurrentMonth() {
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
  }
  getNextMonth(month) {
    const date = new Date(month);
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split("T")[0];
  }
  /**
   * Metodo per debugging della creazione spese
   */
  debugExpenseCreation(expenseData) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        console.log("\u{1F50D} DEBUG - Restaurant ID:", restaurantId);
        console.log("\u{1F50D} DEBUG - Expense data to insert:", expenseData);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).insert(__spreadProps(__spreadValues({}, expenseData), {
          restaurant_id: restaurantId,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        })).select().single();
        if (error) {
          console.error("\u274C DEBUG - Supabase error:", error);
        } else {
          console.log("\u2705 DEBUG - Expense created:", data);
        }
      } catch (error) {
        console.error("\u274C DEBUG - Error:", error);
      }
    });
  }
  /**
  * Carica le spese disattivate (eliminate) per un mese specifico
  */
  loadDeletedExpensesForMonth(month) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const formattedMonth = this.formatMonthForDatabase(month);
        console.log("\u{1F5D1}\uFE0F Loading deleted expenses for month:", formattedMonth);
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).eq("month", formattedMonth).not("deleted_at", "is", null).order("deleted_at", { ascending: false }).order("type", { ascending: true });
        if (error)
          throw error;
        console.log("\u2705 Deleted expenses loaded:", data?.length || 0);
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading deleted expenses:", error);
        return [];
      }
    });
  }
  /**
   * Carica tutte le spese disattivate per intervallo date
   */
  loadDeletedExpensesForDateRange(startMonth, endMonth) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return [];
        const formattedStart = this.formatMonthForDatabase(startMonth);
        const formattedEnd = this.formatMonthForDatabase(endMonth);
        console.log("\u{1F5D1}\uFE0F Loading deleted expenses for date range:", { formattedStart, formattedEnd });
        const { data, error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).select("*").eq("restaurant_id", restaurantId).gte("month", formattedStart).lte("month", formattedEnd).not("deleted_at", "is", null).order("deleted_at", { ascending: false }).order("month", { ascending: false });
        if (error)
          throw error;
        return data || [];
      } catch (error) {
        console.error("\u274C Error loading deleted expenses for date range:", error);
        return [];
      }
    });
  }
  hardDelete(id) {
    return __async(this, null, function* () {
      try {
        const restaurantId = yield this.getCurrentRestaurantId();
        if (!restaurantId)
          return false;
        const { error } = yield this.supabaseService.getSupabaseClient().from(this.getTableName()).delete().eq("id", id).eq("restaurant_id", restaurantId);
        if (error)
          throw error;
        return true;
      } catch (error) {
        console.error("\u274C Error hard deleting expense:", error);
        return false;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExpenseService_BaseFactory;
    return function ExpenseService_Factory(__ngFactoryType__) {
      return (\u0275ExpenseService_BaseFactory || (\u0275ExpenseService_BaseFactory = \u0275\u0275getInheritedFactory(_ExpenseService)))(__ngFactoryType__ || _ExpenseService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpenseService, factory: _ExpenseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ExpenseService
};
//# sourceMappingURL=chunk-UG4LOLBZ.js.map
