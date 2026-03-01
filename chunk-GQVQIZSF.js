import {
  CategoryService
} from "./chunk-Q2MBH5GU.js";
import {
  MenuManagementService
} from "./chunk-WGPV5P3Z.js";
import {
  MenuDishService
} from "./chunk-IZHMOFAM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  IngredientService
} from "./chunk-XHJ77KX6.js";
import {
  DishService
} from "./chunk-5FIUGXYI.js";
import "./chunk-K4QVN3EH.js";
import {
  LoadingService
} from "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import "./chunk-JWP3QZ4U.js";
import "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PF73AKAP.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/restaurant/recipe/recipe.ts
function Recipe_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    \u0275\u0275property("value", menu_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r1.name, " ");
  }
}
function Recipe_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275property("value", category_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2.name, " ");
  }
}
function Recipe_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " piatto");
    \u0275\u0275elementEnd();
  }
}
function Recipe_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " piatti");
    \u0275\u0275elementEnd();
  }
}
function Recipe_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" di ", ctx_r2.dishes.length, " totali ");
  }
}
function Recipe_tr_67_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dish_r5.description, " ");
  }
}
function Recipe_tr_67_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryName(dish_r5.category_id), " ");
  }
}
function Recipe_tr_67_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, " Nessuna categoria ");
    \u0275\u0275elementEnd();
  }
}
function Recipe_tr_67_div_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ingredientData_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r2.getIngredientName(ingredientData_r6), " (", ctx_r2.getIngredientQuantity(ingredientData_r6), "", ctx_r2.getIngredientUnit(ingredientData_r6), ") ");
  }
}
function Recipe_tr_67_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r2.getTotalIngredients(dish_r5) - 2, " altri ");
  }
}
function Recipe_tr_67_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, Recipe_tr_67_div_14_span_4_Template, 2, 3, "span", 47)(5, Recipe_tr_67_div_14_span_5_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dish_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTotalIngredients(dish_r5), " ingredienti ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", dish_r5.ingredients_composition == null ? null : dish_r5.ingredients_composition.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getTotalIngredients(dish_r5) > 2);
  }
}
function Recipe_tr_67_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 44);
    \u0275\u0275text(2, "Nessun ingrediente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function Recipe_tr_67_ng_template_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const dish_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToFoodCostBuilderFromTable(dish_r5));
    });
    \u0275\u0275text(4, " Aggiungi ingredienti ");
    \u0275\u0275elementEnd()();
  }
}
function Recipe_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 31)(1, "td")(2, "div", 32)(3, "strong", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Recipe_tr_67_div_5_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, Recipe_tr_67_span_7_Template, 2, 1, "span", 35)(8, Recipe_tr_67_span_8_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 38);
    \u0275\u0275template(14, Recipe_tr_67_div_14_Template, 6, 3, "div", 39)(15, Recipe_tr_67_ng_template_15_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 40)(19, "span", 17);
    \u0275\u0275text(20, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "div", 41)(24, "button", 42);
    \u0275\u0275listener("click", function Recipe_tr_67_Template_button_click_24_listener() {
      const dish_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(dish_r5));
    });
    \u0275\u0275elementStart(25, "span", 17);
    \u0275\u0275text(26, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Ricetta ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const dish_r5 = ctx.$implicit;
    const noIngredients_r8 = \u0275\u0275reference(16);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dish_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dish_r5.category_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dish_r5.category_id);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusColor(dish_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusText(dish_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.getTotalIngredients(dish_r5) > 0)("ngIfElse", noIngredients_r8);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", dish_r5.preparation_time || "-", " ");
  }
}
function Recipe_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 17);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Nessun piatto trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 44);
    \u0275\u0275text(6, "Modifica i filtri di ricerca");
    \u0275\u0275elementEnd()();
  }
}
function Recipe_div_69_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "lucide-angular", 74);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Nessun ingrediente aggiunto al piatto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function Recipe_div_69_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.navigateToFoodCostBuilder());
    });
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Vai al Food Cost Builder ");
    \u0275\u0275elementEnd()();
  }
}
function Recipe_div_69_div_22_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 86);
    \u0275\u0275twoWayListener("ngModelChange", function Recipe_div_69_div_22_div_1_div_17_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ingredientData_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.ingredientNotes[ingredientData_r12.ingredient_id], $event) || (ctx_r2.ingredientNotes[ingredientData_r12.ingredient_id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Recipe_div_69_div_22_div_1_div_17_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ingredientData_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateIngredientNotes(ingredientData_r12.ingredient_id, $event.target.value));
    });
    \u0275\u0275text(4, "                ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275text(6, " Istruzioni specifiche per la preparazione di questo ingrediente nella ricetta ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ingredientData_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Istruzioni specifiche per ", ctx_r2.getIngredientName(ingredientData_r12), ": ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.ingredientNotes[ingredientData_r12.ingredient_id]);
  }
}
function Recipe_div_69_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 80);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 65)(11, "label", 81)(12, "input", 82);
    \u0275\u0275listener("change", function Recipe_div_69_div_22_div_1_Template_input_change_12_listener($event) {
      const ingredientData_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleIngredientNotes(ingredientData_r12.ingredient_id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 83)(14, "span", 17);
    \u0275\u0275text(15, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, Recipe_div_69_div_22_div_1_div_17_Template, 7, 2, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ingredientData_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getIngredientName(ingredientData_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.getIngredientQuantity(ingredientData_r12), " ", ctx_r2.getIngredientUnit(ingredientData_r12), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Costo: \u20AC", \u0275\u0275pipeBind2(9, 7, ctx_r2.getIngredientCost(ingredientData_r12), "1.2-2"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.areNotesEnabled(ingredientData_r12.ingredient_id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Aggiungi note di preparazione per ", ctx_r2.getIngredientName(ingredientData_r12), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.areNotesEnabled(ingredientData_r12.ingredient_id));
  }
}
function Recipe_div_69_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, Recipe_div_69_div_22_div_1_Template, 18, 10, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedDish == null ? null : ctx_r2.selectedDish.ingredients_composition);
  }
}
function Recipe_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function Recipe_div_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function Recipe_div_69_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 56)(3, "h2", 57)(4, "span", 17);
    \u0275\u0275text(5, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function Recipe_div_69_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 2)(11, "div")(12, "h4", 59)(13, "span", 17);
    \u0275\u0275text(14, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Ingredienti del Piatto ");
    \u0275\u0275elementStart(16, "span", 60);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Note di Preparazione ");
    \u0275\u0275elementStart(19, "span", 60);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, Recipe_div_69_div_21_Template, 8, 0, "div", 61)(22, Recipe_div_69_div_22_Template, 2, 1, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 63)(24, "h4", 64)(25, "span", 17);
    \u0275\u0275text(26, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Istruzioni Generali di Preparazione ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 65)(29, "label", 6);
    \u0275\u0275text(30, "Descrizione della Ricetta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function Recipe_div_69_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.recipeInstructions, $event) || (ctx_r2.recipeInstructions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 67);
    \u0275\u0275text(33, " Descrivi i passaggi generali per preparare il piatto, l'ordine di cottura, i tempi complessivi, ecc. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 68)(35, "label", 6);
    \u0275\u0275text(36, "Tempo di Preparazione (minuti)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function Recipe_div_69_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.preparationTime, $event) || (ctx_r2.preparationTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 15)(39, "button", 70);
    \u0275\u0275listener("click", function Recipe_div_69_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementStart(40, "span", 17);
    \u0275\u0275text(41, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 71);
    \u0275\u0275listener("click", function Recipe_div_69_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveRecipe());
    });
    \u0275\u0275element(44, "lucide-angular", 72);
    \u0275\u0275text(45, " Salva Ricetta ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Ricetta - ", ctx_r2.selectedDish == null ? null : ctx_r2.selectedDish.name, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.selectedDish == null ? null : ctx_r2.selectedDish.ingredients_composition == null ? null : ctx_r2.selectedDish.ingredients_composition.length) || 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEnabledNotesCount(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r2.selectedDish == null ? null : ctx_r2.selectedDish.ingredients_composition == null ? null : ctx_r2.selectedDish.ingredients_composition.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedDish == null ? null : ctx_r2.selectedDish.ingredients_composition == null ? null : ctx_r2.selectedDish.ingredients_composition.length);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.recipeInstructions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.preparationTime);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r2.canSaveRecipe());
  }
}
function Recipe_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function Recipe_div_70_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275elementStart(1, "div", 87);
    \u0275\u0275listener("click", function Recipe_div_70_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 88)(3, "h2", 57)(4, "span", 17);
    \u0275\u0275text(5, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Conferma Eliminazione ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89)(8, "p");
    \u0275\u0275text(9, "Sei sicuro di voler eliminare tutti gli ingredienti della ricetta per ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 44);
    \u0275\u0275text(14, "Questa azione non pu\xF2 essere annullata.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15)(16, "div", 90)(17, "button", 70);
    \u0275\u0275listener("click", function Recipe_div_70_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(18, "Annulla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 91);
    \u0275\u0275listener("click", function Recipe_div_70_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDish());
    });
    \u0275\u0275element(20, "lucide-angular", 92);
    \u0275\u0275text(21, " Elimina Ricetta ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.dishToDelete == null ? null : ctx_r2.dishToDelete.name);
    \u0275\u0275advance(9);
    \u0275\u0275property("size", 20);
  }
}
var Recipe = class _Recipe {
  dishService = inject(DishService);
  ingredientService = inject(IngredientService);
  loadingService = inject(LoadingService);
  categoryService = inject(CategoryService);
  menuService = inject(MenuManagementService);
  menuDishService = inject(MenuDishService);
  recipeInstructions = "";
  preparationTime = 15;
  allIngredients = [];
  dishes = [];
  filteredDishes = [];
  // variabili per le categorie
  categories = [];
  categoryFilter = "all";
  // Per il filtro
  // variabili per i menu
  menus = [];
  menuFilter = "all";
  // 'all', 'no_menu', o menuId specifico
  menuDishes = [];
  // Associazione tra menu e piatti
  dishMenuMap = /* @__PURE__ */ new Map();
  // Mappa: dishId -> array di menuId
  // Modal states
  selectedDish = null;
  showEditModal = false;
  showDeleteConfirm = false;
  dishToDelete = null;
  // Mappa per le note temporanee durante l'editing
  ingredientNotes = {};
  // AGGIUNTA: Mappa per tenere traccia degli ingredienti con note attivate
  ingredientNotesEnabled = {};
  // Search and filter
  searchTerm = "";
  statusFilter = "all";
  ngOnInit() {
    this.loadIngredients();
    this.loadDishes();
    this.loadCategories();
    this.loadMenusAndAssociations();
  }
  loadIngredients() {
    return __async(this, null, function* () {
      yield this.ingredientService.loadIngredients();
      this.ingredientService.data$.subscribe((ingredients) => {
        this.allIngredients = ingredients;
      });
    });
  }
  loadDishes() {
    return __async(this, null, function* () {
      this.loadingService.start();
      try {
        yield this.dishService.loadDishes();
        this.dishService.data$.subscribe((dishes) => {
          this.dishes = dishes;
          this.applyFilters();
          this.loadingService.stop();
        });
      } catch (error) {
        this.loadingService.stop();
        console.error("Error loading dishes:", error);
      }
    });
  }
  loadCategories() {
    return __async(this, null, function* () {
      yield this.categoryService.loadData();
      this.categoryService.data$.subscribe((categories) => {
        this.categories = categories;
      });
    });
  }
  getCategoryName(categoryId) {
    if (!categoryId)
      return "Nessuna categoria";
    const category = this.categories.find((c) => c.id === categoryId);
    return category ? category.name : "Categoria non trovata";
  }
  loadMenusAndAssociations() {
    return __async(this, null, function* () {
      try {
        yield this.menuService.loadData();
        this.menuService.data$.subscribe((menus) => {
          this.menus = menus.filter((menu) => menu.is_active);
        });
        yield this.menuDishService.loadData();
        this.menuDishService.data$.subscribe((menuDishes) => {
          this.menuDishes = menuDishes.filter((md) => md.is_active);
          this.buildDishMenuMap();
        });
      } catch (error) {
        console.error("Error loading menus:", error);
      }
    });
  }
  // AGGIUNGI questo metodo per costruire la mappa dish->menu
  buildDishMenuMap() {
    const map = /* @__PURE__ */ new Map();
    this.menuDishes.forEach((menuDish) => {
      if (!menuDish.is_active || !menuDish.dish_id)
        return;
      const dishId = menuDish.dish_id;
      if (!map.has(dishId)) {
        map.set(dishId, []);
      }
      map.get(dishId).push(menuDish.menu_id);
    });
    this.dishMenuMap = map;
  }
  // AGGIUNGI questo metodo per ottenere i nomi dei menu di un piatto
  getMenuNamesForDish(dishId) {
    const menuIds = this.dishMenuMap.get(dishId) || [];
    return menuIds.map((menuId) => {
      const menu = this.menus.find((m) => m.id === menuId);
      return menu ? menu.name : "Menu sconosciuto";
    });
  }
  // AGGIUNGI questo metodo per verificare se un piatto è in un menu specifico
  isDishInMenu(dishId, menuId) {
    const menuIds = this.dishMenuMap.get(dishId);
    return menuIds ? menuIds.includes(menuId) : false;
  }
  // FILTERS AND SEARCH
  applyFilters() {
    let filtered = this.dishes;
    if (this.statusFilter !== "all") {
      filtered = filtered.filter((dish) => dish.status === this.statusFilter);
    }
    if (this.categoryFilter !== "all") {
      filtered = filtered.filter((dish) => dish.category_id === this.categoryFilter);
    }
    if (this.menuFilter !== "all") {
      if (this.menuFilter === "no_menu") {
        filtered = filtered.filter((dish) => {
          const menuIds = this.dishMenuMap.get(dish.id);
          return !menuIds || menuIds.length === 0;
        });
      } else {
        filtered = filtered.filter((dish) => this.isDishInMenu(dish.id, this.menuFilter));
      }
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((dish) => dish.name.toLowerCase().includes(term) || dish.description?.toLowerCase().includes(term) || this.hasIngredientWithName(dish, term));
    }
    this.filteredDishes = filtered;
  }
  onMenuFilterChange() {
    this.applyFilters();
  }
  hasIngredientWithName(dish, term) {
    if (!dish || !dish.ingredients_composition)
      return false;
    return dish.ingredients_composition.some((ingredientData) => {
      const ingredientName = this.getIngredientName(ingredientData).toLowerCase();
      return ingredientName.includes(term);
    });
  }
  onCategoryFilterChange() {
    this.applyFilters();
  }
  onSearchChange() {
    this.applyFilters();
  }
  onStatusFilterChange() {
    this.applyFilters();
  }
  // MODAL MANAGEMENT
  openEditModal(dish) {
    this.selectedDish = __spreadProps(__spreadValues({}, dish), {
      ingredients_composition: dish.ingredients_composition ? [...dish.ingredients_composition] : []
    });
    this.recipeInstructions = dish.recipe_instructions || "";
    this.preparationTime = dish.preparation_time || 15;
    this.initializeIngredientNotes();
    this.showEditModal = true;
  }
  initializeIngredientNotes() {
    this.ingredientNotes = {};
    this.ingredientNotesEnabled = {};
    if (this.selectedDish?.ingredients_composition) {
      this.selectedDish.ingredients_composition.forEach((ingredient) => {
        if (ingredient.ingredient_id) {
          this.ingredientNotes[ingredient.ingredient_id] = ingredient.recipe_notes || "";
          this.ingredientNotesEnabled[ingredient.ingredient_id] = !!ingredient.recipe_notes;
        }
      });
    }
  }
  closeEditModal() {
    this.selectedDish = null;
    this.showEditModal = false;
    this.ingredientNotes = {};
    this.ingredientNotesEnabled = {};
  }
  // RECIPE MANAGEMENT
  saveRecipe() {
    return __async(this, null, function* () {
      if (!this.selectedDish || !this.canSaveRecipe()) {
        console.log("Niente da salvare o piatto non selezionato");
        return;
      }
      this.loadingService.start();
      try {
        const updatedComposition = this.selectedDish.ingredients_composition?.map((ingredient) => {
          const notes = this.ingredientNotesEnabled[ingredient.ingredient_id] ? this.ingredientNotes[ingredient.ingredient_id] || "" : "";
          return __spreadProps(__spreadValues({}, ingredient), {
            recipe_notes: notes
          });
        });
        const updates = {
          recipe_instructions: this.recipeInstructions,
          preparation_time: this.preparationTime,
          ingredients_composition: updatedComposition
        };
        const success = yield this.dishService.updateDish(this.selectedDish.id, updates);
        if (success) {
          yield this.dishService.loadDishes();
          this.closeEditModal();
        } else {
          console.error("Error saving recipe");
        }
      } catch (error) {
        console.error("Error saving recipe:", error);
      } finally {
        this.loadingService.stop();
      }
    });
  }
  // Metodo per aggiornare le note di un ingrediente
  updateIngredientNotes(ingredientId, notes) {
    this.ingredientNotes[ingredientId] = notes;
  }
  // Metodo per ottenere le note di un ingrediente
  getIngredientNotes(ingredientId) {
    return this.ingredientNotes[ingredientId] || "";
  }
  // AGGIUNTA: Metodo per gestire il toggle della checkbox
  toggleIngredientNotes(ingredientId, enabled) {
    this.ingredientNotesEnabled[ingredientId] = enabled;
  }
  // AGGIUNTA: Metodo per verificare se le note sono abilitate per un ingrediente
  areNotesEnabled(ingredientId) {
    return this.ingredientNotesEnabled[ingredientId] || false;
  }
  navigateToFoodCostBuilder() {
    console.log("Navigate to food cost builder for dish:", this.selectedDish?.id);
  }
  navigateToFoodCostBuilderFromTable(dish) {
    console.log("Navigate to food cost builder for dish from table:", dish.id);
  }
  canSaveRecipe() {
    if (this.recipeInstructions && this.recipeInstructions.trim().length > 0) {
      return true;
    }
    if (!this.selectedDish?.ingredients_composition) {
      return false;
    }
    return this.selectedDish.ingredients_composition.some((ingredient) => {
      return this.ingredientNotesEnabled[ingredient.ingredient_id];
    });
  }
  cancelDelete() {
    this.dishToDelete = null;
    this.showDeleteConfirm = false;
  }
  deleteDish() {
    return __async(this, null, function* () {
      if (this.dishToDelete) {
        this.loadingService.start();
        try {
          const success = yield this.dishService.updateDish(this.dishToDelete.id, {
            ingredients_composition: []
          });
          if (success) {
            yield this.loadDishes();
          }
        } catch (error) {
          console.error("Error deleting dish:", error);
        } finally {
          this.loadingService.stop();
          this.cancelDelete();
        }
      }
    });
  }
  // UTILITIES
  getStatusColor(status) {
    const colorMap = {
      "available": "success",
      "unavailable": "warning",
      "out_of_stock": "danger"
    };
    return colorMap[status] || "secondary";
  }
  getStatusText(status) {
    const textMap = {
      "available": "Disponibile",
      "unavailable": "Non Disponibile",
      "out_of_stock": "Esaurito"
    };
    return textMap[status] || status;
  }
  getTotalIngredients(dish) {
    if (!dish || !dish.ingredients_composition)
      return 0;
    return dish.ingredients_composition.length;
  }
  // METODI HELPER PER GESTIRE GLI INGREDIENTI
  getIngredientName(ingredientData) {
    if (!ingredientData.ingredient_id)
      return "Ingrediente sconosciuto";
    const foundIngredient = this.allIngredients.find((ing) => ing.id === ingredientData.ingredient_id);
    return foundIngredient?.name || "Ingrediente non trovato";
  }
  getIngredientQuantity(ingredientData) {
    return ingredientData.quantity || 0;
  }
  getIngredientUnit(ingredientData) {
    return ingredientData.unit_symbol || "";
  }
  getIngredientCost(ingredientData) {
    return ingredientData.cost || 0;
  }
  getFullIngredient(ingredientData) {
    if (!ingredientData.ingredient_id)
      return null;
    return this.allIngredients.find((ing) => ing.id === ingredientData.ingredient_id) || null;
  }
  getSavedIngredientNotes(ingredientData) {
    return ingredientData.recipe_notes || "";
  }
  // Metodo per contare le note abilitate
  getEnabledNotesCount() {
    if (!this.selectedDish?.ingredients_composition)
      return 0;
    return this.selectedDish.ingredients_composition.filter((ingredient) => this.ingredientNotesEnabled[ingredient.ingredient_id]).length;
  }
  static \u0275fac = function Recipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Recipe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Recipe, selectors: [["app-recipe"]], decls: 71, vars: 16, consts: [["noIngredients", ""], [1, "page-container"], [1, "form-card"], ["data-tutorial", "recipe-search", 1, "flex", "justify-between", "items-end", "gap-sm", "flex-wrap"], [1, "form-row"], [1, "form-group", "mb-md"], [1, "standard-label"], [1, "form-input", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "available"], ["value", "unavailable"], ["value", "out_of_stock"], ["value", "no_menu"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Nome piatto, ingrediente...", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], [1, "modal-footer"], [1, "promethea-button", "primary", 3, "click"], [1, "material-icons"], [1, "flex", "justify-center", "gap-sm"], [1, "chip", "text-md"], [1, "flex", "items-center", "gap-sm"], [4, "ngIf"], ["class", "text-muted text-sm", 4, "ngIf"], ["data-tutorial", "recipe-list", 1, "table-section", "mt-lg", "p-sm"], [1, "crm-table"], [1, "text-center"], ["class", "dish-row", 4, "ngFor", "ngForOf"], ["class", "empty-state mt-sm mb-md", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "text-muted", "text-sm"], [1, "dish-row"], [1, "dish-info"], [1, "dish-name"], ["class", "text-mini", 4, "ngIf"], ["class", "chip", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "chip"], [1, "ingredients-preview"], [4, "ngIf", "ngIfElse"], [1, "preparation-time"], [1, "flex", "gap-sm"], [1, "promethea-button", "primary", "small", 3, "click"], [1, "text-mini"], [1, "text-muted"], [1, "font-semibold"], [1, "ingredients-list"], ["class", "chip-mini", 4, "ngFor", "ngForOf"], ["class", "chip-mini active", 4, "ngIf"], [1, "chip-mini"], [1, "chip-mini", "active"], [1, "no-ingredients-state"], [1, "promethea-button", "link", "small", 3, "click"], [1, "empty-state", "mt-sm", "mb-md"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "icon-button", "close-button", 3, "click"], [1, "dettagli-ricetta"], [1, "chip", "active"], ["class", "text-center p-xl opacity-70", 4, "ngIf"], ["class", "grid gap-sm", 4, "ngIf"], [1, "border", "rounded-lg", "p-lg", "bg-gradient-light", "shadow-card", "mt-lg"], [1, "flex", "items-center", "gap-sm", "mb-md", "font-bold", "text-[calc(var(--fs-sm)*1.2)]", 2, "font-size", "var(--fs-md)"], [1, "flex", "flex-col", "gap-1", "flex-1", "min-w-300"], ["name", "recipeInstructions", "rows", "8", "placeholder", "Descrivi la sequenza generale di preparazione...", 1, "form-input", "text-area", 3, "ngModelChange", "ngModel"], [1, "text-muted", "mt-sm"], [1, "flex", "flex-col", "gap-1", "flex-1", "min-w-300", "mt-sm"], ["type", "number", "name", "preparationTime", "min", "1", "max", "480", "placeholder", "Es. 15, 30, 45...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "promethea-button", "secondary", 3, "click"], [1, "promethea-button", "success", 3, "click", "disabled"], ["name", "save"], [1, "text-center", "p-xl", "opacity-70"], ["name", "info"], [1, "grid", "gap-sm"], ["class", "border rounded-lg p-md my-md bg-[color-mix(in srgb,var(--background)95%,transparent)] ingredient-card", 4, "ngFor", "ngForOf"], [1, "border", "rounded-lg", "p-md", "my-md", "bg-[color-mix(in", "srgb,var(--background)95%,transparent)]", "ingredient-card"], [1, "ingredient-header"], [1, "ingredient-main-info"], [1, "ingredient-cost", "text-muted"], [1, "flex", "items-center", "gap-sm", "cursor-pointer", "p-sm", "rounded", "transition", "hover:bg-[var(--smoke-1)]", "large"], ["type", "checkbox", 1, "checkbox-input", 3, "change", "checked"], [1, "checkbox-text"], ["class", "flex flex-col gap-1 flex-1 min-w-300 notes-input-container", 4, "ngIf"], [1, "flex", "flex-col", "gap-1", "flex-1", "min-w-300", "notes-input-container"], ["rows", "3", "placeholder", "Descrivi come trattare e cucinare questo ingrediente specifico...", 1, "form-input", "text-area", 3, "ngModelChange", "input", "ngModel"], [1, "modal-container", "modal-sm", 3, "click"], [1, "p-md", "border-t", "border-b", "border-[var(--smoke-1)]", "flex", "justify-between", "items-center"], [1, "p-lg", "flex-1", "overflow-y-auto"], [1, "footer-actions"], [1, "promethea-button", "danger", 3, "click"], ["name", "trash-2", 3, "size"]], template: function Recipe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6, "Stato:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function Recipe_Template_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Recipe_Template_select_change_7_listener() {
        return ctx.onStatusFilterChange();
      });
      \u0275\u0275elementStart(8, "option", 8);
      \u0275\u0275text(9, "Tutti i piatti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 9);
      \u0275\u0275text(11, "Disponibili");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 10);
      \u0275\u0275text(13, "Non Disponibili");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 11);
      \u0275\u0275text(15, "Esauriti");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 5)(17, "label", 6);
      \u0275\u0275text(18, "Menu:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function Recipe_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.menuFilter, $event) || (ctx.menuFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Recipe_Template_select_change_19_listener() {
        return ctx.onMenuFilterChange();
      });
      \u0275\u0275elementStart(20, "option", 8);
      \u0275\u0275text(21, "Tutti i menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Senza menu");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, Recipe_option_24_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 4)(26, "div", 5)(27, "label", 6);
      \u0275\u0275text(28, "Categoria:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function Recipe_Template_select_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categoryFilter, $event) || (ctx.categoryFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Recipe_Template_select_change_29_listener() {
        return ctx.onCategoryFilterChange();
      });
      \u0275\u0275elementStart(30, "option", 8);
      \u0275\u0275text(31, "Tutte le categorie");
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, Recipe_option_32_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 5)(34, "label", 6);
      \u0275\u0275text(35, "Cerca:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function Recipe_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function Recipe_Template_input_input_36_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 15)(38, "button", 16);
      \u0275\u0275listener("click", function Recipe_Template_button_click_38_listener() {
        return ctx.loadDishes();
      });
      \u0275\u0275elementStart(39, "span", 17);
      \u0275\u0275text(40, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " Aggiorna ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 18)(43, "span", 19)(44, "span", 20)(45, "span");
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, Recipe_span_47_Template, 2, 0, "span", 21)(48, Recipe_span_48_Template, 2, 0, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, Recipe_span_49_Template, 2, 1, "span", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 23)(51, "table", 24)(52, "thead")(53, "tr")(54, "th");
      \u0275\u0275text(55, "Piatto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, "Categoria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Stato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Ingredienti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, "Tempo (min)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 25);
      \u0275\u0275text(65, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "tbody");
      \u0275\u0275template(67, Recipe_tr_67_Template, 28, 10, "tr", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(68, Recipe_div_68_Template, 7, 0, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, Recipe_div_69_Template, 46, 8, "div", 28)(70, Recipe_div_70_Template, 22, 2, "div", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.menuFilter);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.menus);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.categoryFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(7);
      \u0275\u0275classMap(ctx.filteredDishes.length === 0 ? "secondary" : "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.filteredDishes.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredDishes.length === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredDishes.length !== 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dishes.length !== ctx.filteredDishes.length);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.filteredDishes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredDishes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteConfirm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.dish-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dish-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--text-color);\n}\n.dettagli-ricetta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--gap-sm);\n  justify-content: space-between;\n  padding: var(--gap-sm);\n}\n.ingredients-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.ingredients-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--gap-sm) / 2);\n  gap: calc(var(--gap-sm) / 2);\n}\n.preparation-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n}\n.preparation-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary);\n}\n.no-ingredients-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: flex-start;\n}\n.ingredient-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.ingredient-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: 0 2px 8px var(--shadow);\n}\n.ingredient-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: var(--gap-sm);\n  flex-wrap: wrap;\n  gap: var(--gap-sm);\n}\n.ingredient-main-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  flex-wrap: wrap;\n}\n.ingredient-cost[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 500;\n}\n.notes-input-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n  margin-top: var(--gap-sm);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.checkbox-label.large[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .ingredient-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .ingredient-main-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ingredients-list[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .ingredient-tag[_ngcontent-%COMP%] {\n    font-size: var(--fs-sm);\n  }\n}\n@media print {\n  .filters-section[_ngcontent-%COMP%], \n   .action-buttons[_ngcontent-%COMP%], \n   .modal-overlay[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid #000;\n  }\n}\n/*# sourceMappingURL=recipe.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Recipe, [{
    type: Component,
    args: [{ selector: "app-recipe", standalone: true, imports: [CommonModule, FormsModule, LucideAngularModule], template: `<div class="page-container">\r
\r
  <div class="form-card">\r
  <!-- Filters -->\r
  <div class="flex justify-between items-end gap-sm flex-wrap"\r
  data-tutorial="recipe-search">\r
    <div class="form-row">\r
      <div class="form-group mb-md">\r
        <label class="standard-label">Stato:</label>\r
        <select [(ngModel)]="statusFilter" (change)="onStatusFilterChange()" class="form-input">\r
          <option value="all">Tutti i piatti</option>\r
          <option value="available">Disponibili</option>\r
          <option value="unavailable">Non Disponibili</option>\r
          <option value="out_of_stock">Esauriti</option>\r
        </select>\r
      </div>\r
\r
      <div class="form-group mb-md">\r
        <label class="standard-label">Menu:</label>\r
        <select [(ngModel)]="menuFilter" (change)="onMenuFilterChange()" class="form-input">\r
          <option value="all">Tutti i menu</option>\r
          <option value="no_menu">Senza menu</option>\r
          <option *ngFor="let menu of menus" [value]="menu.id">\r
            {{ menu.name }}\r
          </option>\r
        </select>\r
      </div>\r
      </div>\r
\r
      <div class="form-row">\r
      <div class="form-group mb-md">\r
        <label class="standard-label">Categoria:</label>\r
        <select [(ngModel)]="categoryFilter" (change)="onCategoryFilterChange()" class="form-input">\r
          <option value="all">Tutte le categorie</option>\r
          <option *ngFor="let category of categories" [value]="category.id">\r
            {{ category.name }}\r
          </option>\r
        </select>\r
      </div>\r
\r
      <div class="form-group mb-md">\r
        <label class="standard-label">Cerca:</label>\r
        <input type="text" [(ngModel)]="searchTerm" (input)="onSearchChange()" \r
               placeholder="Nome piatto, ingrediente..." class="form-input">\r
      </div>\r
    </div>\r
\r
  </div>\r
    <div class="modal-footer">\r
      <button class="promethea-button primary" (click)="loadDishes()">\r
        <span class="material-icons">refresh</span>\r
        Aggiorna\r
      </button>\r
    <!-- Chip contatore -->\r
    <div class="flex justify-center gap-sm">\r
      <span class="chip text-md" [class]="filteredDishes.length === 0 ? 'secondary' : ''">\r
        <span class="flex items-center gap-sm">\r
          <span>{{ filteredDishes.length }}</span>\r
          <span *ngIf="filteredDishes.length === 1 "> piatto</span>\r
          <span *ngIf="filteredDishes.length !== 1 "> piatti</span>\r
        </span>\r
      </span>\r
      \r
      <!-- Opzionale: mostra anche il totale di tutti i piatti -->\r
      <span *ngIf="dishes.length !== filteredDishes.length" class="text-muted text-sm">\r
        di {{ dishes.length }} totali\r
      </span>\r
    </div>\r
    </div>\r
  </div>\r
\r
\r
  <!-- Recipes Table -->\r
  <div class="table-section mt-lg p-sm" data-tutorial="recipe-list">\r
      <table class="crm-table">\r
        <thead>\r
          <tr>\r
            <th>Piatto</th>\r
            <th>Categoria</th>\r
            <th>Stato</th>\r
            <th>Ingredienti</th>\r
            <th>Tempo (min)</th>\r
            <th class="text-center">Azioni</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let dish of filteredDishes" class="dish-row">\r
            <td>\r
              <div class="dish-info">\r
                <strong class="dish-name">{{ dish.name }}</strong>\r
                <div *ngIf="dish.description" class="text-mini">\r
                  {{ dish.description }}\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="chip" *ngIf="dish.category_id">\r
                {{ getCategoryName(dish.category_id) }}\r
              </span>\r
              <span *ngIf="!dish.category_id" class="text-muted">\r
                Nessuna categoria\r
              </span>\r
            </td>\r
\r
            <td>\r
              <span class="chip" [class]="getStatusColor(dish.status)">\r
                {{ getStatusText(dish.status) }}\r
              </span>\r
            </td>\r
            <td>\r
              <div class="ingredients-preview">\r
                <div *ngIf="getTotalIngredients(dish) > 0; else noIngredients">\r
                  <div class="font-semibold">\r
                    {{ getTotalIngredients(dish) }} ingredienti\r
                  </div>\r
                  <div class="ingredients-list">\r
                    <span *ngFor="let ingredientData of dish.ingredients_composition?.slice(0, 2)" \r
                          class="chip-mini">\r
                      {{ getIngredientName(ingredientData) }} ({{ getIngredientQuantity(ingredientData) }}{{ getIngredientUnit(ingredientData) }})\r
                    </span>\r
                    <span *ngIf="getTotalIngredients(dish) > 2" class="chip-mini active">\r
                      +{{ getTotalIngredients(dish) - 2 }} altri\r
                    </span>\r
                  </div>\r
                </div>\r
                <ng-template #noIngredients>\r
                  <div class="no-ingredients-state">\r
                    <span class="text-muted">Nessun ingrediente</span>\r
                    <button class="promethea-button link small" (click)="navigateToFoodCostBuilderFromTable(dish)">\r
                      Aggiungi ingredienti\r
                    </button>\r
                  </div>\r
                </ng-template>\r
              </div>\r
            </td>\r
            <td>\r
              <div class="preparation-time">\r
                <span class="material-icons">schedule</span>\r
                {{ dish.preparation_time || '-' }}\r
              </div>\r
            </td>\r
            <td>\r
              <div class="flex gap-sm">\r
                <button class="promethea-button primary small" \r
                        (click)="openEditModal(dish)">\r
                  <span class="material-icons">edit_note</span>\r
                  Ricetta\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
\r
      <div *ngIf="filteredDishes.length === 0" class="empty-state mt-sm mb-md">\r
        <span class="material-icons">restaurant_menu</span>\r
        <h3>Nessun piatto trovato</h3>\r
        <p class="text-muted">Modifica i filtri di ricerca</p>\r
      </div>\r
  </div>\r
\r
  <!-- Edit Recipe Modal -->\r
  <div class="modal-overlay" *ngIf="showEditModal" (click)="closeEditModal()">\r
    <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2 class="modal-title">\r
          <span class="material-icons">edit_note</span>\r
          Ricetta - {{ selectedDish?.name }}\r
        </h2>\r
        <button class="icon-button close-button" (click)="closeEditModal()">\r
          <span class="material-icons">close</span>\r
        </button>\r
      </div>\r
\r
      <div class=" form-card">\r
        <!-- Ingredients Display with Notes -->\r
        <div >\r
          <h4 class="dettagli-ricetta">\r
            <span class="material-icons">list_alt</span>\r
            Ingredienti del Piatto\r
            <span class="chip active">\r
              {{ selectedDish?.ingredients_composition?.length || 0 }}\r
            </span>\r
             Note di Preparazione\r
            <span class="chip active">\r
              {{ getEnabledNotesCount() }}\r
            </span>\r
          </h4>\r
\r
          <div *ngIf="!selectedDish?.ingredients_composition?.length" class="text-center p-xl opacity-70">\r
            <lucide-angular name="info"></lucide-angular>\r
            <p>Nessun ingrediente aggiunto al piatto</p>\r
            <button class="promethea-button primary" (click)="navigateToFoodCostBuilder()">\r
              <span class="material-icons">add_circle</span>\r
              Vai al Food Cost Builder\r
            </button>\r
          </div>\r
\r
          <div *ngIf="selectedDish?.ingredients_composition?.length" class="grid gap-sm">\r
            <div *ngFor="let ingredientData of selectedDish?.ingredients_composition; let i = index" \r
                 class="border rounded-lg p-md my-md bg-[color-mix(in srgb,var(--background)95%,transparent)] ingredient-card">\r
              <div class="ingredient-header">\r
                <div class="ingredient-main-info">\r
                  <strong>{{ getIngredientName(ingredientData) }}</strong>\r
                  <span class="chip active">\r
                    {{ getIngredientQuantity(ingredientData) }} {{ getIngredientUnit(ingredientData) }}\r
                  </span>\r
                </div>\r
                <div class="ingredient-cost text-muted">\r
                  Costo: \u20AC{{ getIngredientCost(ingredientData) | number:'1.2-2' }}\r
                </div>\r
              </div>\r
\r
              <!-- Notes Toggle Section -->\r
              <div class="flex flex-col gap-1 flex-1 min-w-300">\r
                <label class="flex items-center gap-sm cursor-pointer p-sm rounded transition hover:bg-[var(--smoke-1)] large">\r
                  <input type="checkbox" \r
                         [checked]="areNotesEnabled(ingredientData.ingredient_id)"\r
                         (change)="toggleIngredientNotes(ingredientData.ingredient_id, $any($event.target).checked)"\r
                         class="checkbox-input">\r
                  <span class="checkbox-text">\r
                    <span class="material-icons">notes</span>\r
                    Aggiungi note di preparazione per {{ getIngredientName(ingredientData) }}\r
                  </span>\r
                </label>\r
              </div>\r
\r
              <!-- Notes Input (conditionally shown) -->\r
              <div *ngIf="areNotesEnabled(ingredientData.ingredient_id)" class="flex flex-col gap-1 flex-1 min-w-300 notes-input-container">\r
                <label class="standard-label">\r
                  Istruzioni specifiche per {{ getIngredientName(ingredientData) }}:\r
                </label>\r
                <textarea \r
                  [(ngModel)]="ingredientNotes[ingredientData.ingredient_id]"\r
                  (input)="updateIngredientNotes(ingredientData.ingredient_id, $any($event.target).value)"\r
                  class="form-input text-area" \r
                  rows="3" \r
                  placeholder="Descrivi come trattare e cucinare questo ingrediente specifico...">\r
                </textarea>\r
                <div class="text-muted mt-sm">\r
                  Istruzioni specifiche per la preparazione di questo ingrediente nella ricetta\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Recipe Instructions -->\r
        <div class="border rounded-lg p-lg bg-gradient-light shadow-card mt-lg">\r
          <h4 class="flex items-center gap-sm mb-md font-bold text-[calc(var(--fs-sm)*1.2)]" style="font-size: var(--fs-md);">\r
            <span class="material-icons">menu_book</span>\r
            Istruzioni Generali di Preparazione\r
          </h4>\r
\r
          <div class="flex flex-col gap-1 flex-1 min-w-300">\r
            <label class="standard-label">Descrizione della Ricetta *</label>\r
            <textarea [(ngModel)]="recipeInstructions" name="recipeInstructions" \r
                      class="form-input text-area" rows="8" \r
                      placeholder="Descrivi la sequenza generale di preparazione..."></textarea>\r
            <div class="text-muted mt-sm">\r
              Descrivi i passaggi generali per preparare il piatto, l'ordine di cottura, i tempi complessivi, ecc.\r
            </div>\r
          </div>\r
\r
          <div class="flex flex-col gap-1 flex-1 min-w-300 mt-sm">\r
            <label class="standard-label">Tempo di Preparazione (minuti)</label>\r
            <input type="number" [(ngModel)]="preparationTime" name="preparationTime" \r
                   class="form-input" min="1" max="480" \r
                   placeholder="Es. 15, 30, 45...">\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
          <button class="promethea-button secondary" (click)="closeEditModal()">\r
            <span class="material-icons">close</span>\r
            Annulla\r
          </button>\r
          <button class="promethea-button success" (click)="saveRecipe()" \r
                  [disabled]="!canSaveRecipe()">\r
           <lucide-angular name="save"></lucide-angular>\r
            Salva Ricetta\r
          </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <div class="modal-overlay" *ngIf="showDeleteConfirm" (click)="cancelDelete()">\r
    <div class="modal-container modal-sm" (click)="$event.stopPropagation()">\r
      <div class="p-md border-t border-b border-[var(--smoke-1)] flex justify-between items-center">\r
        <h2 class="modal-title">\r
          <span class="material-icons">warning</span>\r
          Conferma Eliminazione\r
        </h2>\r
      </div>\r
      <div class="p-lg flex-1 overflow-y-auto">\r
        <p>Sei sicuro di voler eliminare tutti gli ingredienti della ricetta per <strong>{{ dishToDelete?.name }}</strong>?</p>\r
        <p class="text-muted">Questa azione non pu\xF2 essere annullata.</p>\r
      </div>\r
      <div class="modal-footer">\r
        <div class="footer-actions">\r
          <button class="promethea-button secondary" (click)="cancelDelete()">Annulla</button>\r
          <button class="promethea-button danger" (click)="deleteDish()">\r
            <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
            Elimina Ricetta\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/recipe/recipe.css */\n.dish-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dish-name {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--text-color);\n}\n.dettagli-ricetta {\n  display: flex;\n  gap: var(--gap-sm);\n  justify-content: space-between;\n  padding: var(--gap-sm);\n}\n.ingredients-preview {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-sm);\n}\n.ingredients-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--gap-sm) / 2);\n  gap: calc(var(--gap-sm) / 2);\n}\n.preparation-time {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n}\n.preparation-time .material-icons {\n  font-size: 16px;\n  color: var(--primary);\n}\n.no-ingredients-state {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: flex-start;\n}\n.ingredient-card {\n  transition: all 0.3s ease;\n}\n.ingredient-card:hover {\n  border-color: var(--primary);\n  box-shadow: 0 2px 8px var(--shadow);\n}\n.ingredient-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: var(--gap-sm);\n  flex-wrap: wrap;\n  gap: var(--gap-sm);\n}\n.ingredient-main-info {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-md);\n  flex-wrap: wrap;\n}\n.ingredient-cost {\n  font-size: var(--fs-sm);\n  font-weight: 500;\n}\n.notes-input-container {\n  animation: fadeIn 0.3s ease-in-out;\n  margin-top: var(--gap-sm);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.checkbox-label.large .checkbox-text {\n  display: flex;\n  align-items: center;\n  gap: var(--gap-sm);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .ingredient-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .ingredient-main-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--gap-sm);\n  }\n  .action-buttons {\n    flex-direction: column;\n  }\n  .ingredients-list {\n    gap: 4px;\n  }\n  .ingredient-tag {\n    font-size: var(--fs-sm);\n  }\n}\n@media print {\n  .filters-section,\n  .action-buttons,\n  .modal-overlay {\n    display: none !important;\n  }\n  .table-container {\n    box-shadow: none;\n    border: 1px solid #000;\n  }\n}\n/*# sourceMappingURL=recipe.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Recipe, { className: "Recipe", filePath: "src/app/restaurant/recipe/recipe.ts", lineNumber: 37 });
})();
export {
  Recipe
};
//# sourceMappingURL=chunk-GQVQIZSF.js.map
