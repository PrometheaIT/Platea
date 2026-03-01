import {
  RestaurantFollowerService
} from "./chunk-ZU2B3Z2L.js";
import {
  BreakpointObserver,
  Breakpoints
} from "./chunk-RMKOUF2K.js";
import "./chunk-TZX4E46J.js";
import {
  RestaurantPublicService
} from "./chunk-AXPZZFBQ.js";
import {
  FormsModule
} from "./chunk-CQ6KSR3R.js";
import {
  LoadingService
} from "./chunk-XWVRHBBC.js";
import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-LBEXX5NO.js";
import {
  AuthService
} from "./chunk-JWP3QZ4U.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  combineLatest,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PF73AKAP.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/customer/restaurant/restaurant-detail/image-slideshow/image-slideshow.ts
function ImageSlideshow_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 9);
    \u0275\u0275listener("error", function ImageSlideshow_img_3_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    })("click", function ImageSlideshow_img_3_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageClick(ctx_r1.previousIndex));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.images[ctx_r1.previousIndex], \u0275\u0275sanitizeUrl)("alt", "Immagine " + (ctx_r1.previousIndex + 1));
  }
}
function ImageSlideshow_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 9);
    \u0275\u0275listener("error", function ImageSlideshow_img_5_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    })("click", function ImageSlideshow_img_5_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageClick(ctx_r1.currentIndex));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.images[ctx_r1.currentIndex], \u0275\u0275sanitizeUrl)("alt", "Immagine " + (ctx_r1.currentIndex + 1));
  }
}
function ImageSlideshow_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ImageSlideshow_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
function ImageSlideshow_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ImageSlideshow_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
}
function ImageSlideshow_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275listener("click", function ImageSlideshow_div_8_span_1_Template_span_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goTo(i_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r7 === ctx_r1.currentIndex);
  }
}
function ImageSlideshow_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ImageSlideshow_div_8_span_1_Template, 1, 2, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.images);
  }
}
function ImageSlideshow_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 11);
    \u0275\u0275text(2, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nessuna immagine disponibile");
    \u0275\u0275elementEnd()();
  }
}
var ImageSlideshow = class _ImageSlideshow {
  images = [];
  autoPlay = true;
  interval = 3e3;
  transitionDuration = 600;
  // Durata transizione in ms
  imageClicked = new EventEmitter();
  currentIndex = 0;
  previousIndex = 0;
  isTransitioning = false;
  direction = "next";
  timer;
  ngOnInit() {
    if (this.autoPlay && this.images.length > 0) {
      this.startAutoPlay();
    }
  }
  ngOnDestroy() {
    this.stopAutoPlay();
  }
  startAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.images.length > 0 && this.autoPlay) {
      this.timer = setInterval(() => {
        this.next();
      }, this.interval);
    }
  }
  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  next() {
    if (this.images.length === 0 || this.isTransitioning)
      return;
    this.direction = "next";
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.startTransition();
  }
  prev() {
    if (this.images.length === 0 || this.isTransitioning)
      return;
    this.direction = "prev";
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.startTransition();
  }
  goTo(index) {
    if (this.images.length === 0 || this.isTransitioning || index === this.currentIndex)
      return;
    this.direction = index > this.currentIndex ? "next" : "prev";
    this.previousIndex = this.currentIndex;
    this.currentIndex = index;
    this.startTransition();
  }
  startTransition() {
    this.isTransitioning = true;
    setTimeout(() => {
      this.isTransitioning = false;
    }, this.transitionDuration);
  }
  onImageError(event) {
    const img = event.target;
    console.error("Errore caricamento immagine:", img.src);
    img.style.display = "none";
    const index = this.images.indexOf(img.src);
    if (index > -1) {
      this.images.splice(index, 1);
    }
    if (this.images.length === 0) {
      this.stopAutoPlay();
      return;
    }
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
  }
  onImageClick(index) {
    console.log("Cliccata immagine n\xB0", index);
    this.imageClicked.emit(index);
  }
  static \u0275fac = function ImageSlideshow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageSlideshow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageSlideshow, selectors: [["app-image-slideshow"]], inputs: { images: "images", autoPlay: "autoPlay", interval: "interval", transitionDuration: "transitionDuration" }, outputs: { imageClicked: "imageClicked" }, decls: 10, vars: 18, consts: [[1, "slideshow-container", 3, "mouseenter", "mouseleave"], [1, "slides-wrapper"], [1, "slide", "previous"], ["class", "slide-image", 3, "src", "alt", "error", "click", 4, "ngIf"], [1, "slide", "current"], ["class", "nav-button prev", 3, "click", 4, "ngIf"], ["class", "nav-button next", 3, "click", 4, "ngIf"], ["class", "indicators", 4, "ngIf"], ["class", "slideshow-placeholder", 4, "ngIf"], [1, "slide-image", 3, "error", "click", "src", "alt"], [1, "nav-button", "prev", 3, "click"], [1, "material-icons"], [1, "nav-button", "next", 3, "click"], [1, "indicators"], ["class", "indicator", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "indicator", 3, "click"], [1, "slideshow-placeholder"]], template: function ImageSlideshow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("mouseenter", function ImageSlideshow_Template_div_mouseenter_0_listener() {
        return ctx.stopAutoPlay();
      })("mouseleave", function ImageSlideshow_Template_div_mouseleave_0_listener() {
        return ctx.startAutoPlay();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, ImageSlideshow_img_3_Template, 1, 2, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275template(5, ImageSlideshow_img_5_Template, 1, 2, "img", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ImageSlideshow_button_6_Template, 3, 0, "button", 5)(7, ImageSlideshow_button_7_Template, 3, 0, "button", 6)(8, ImageSlideshow_div_8_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ImageSlideshow_div_9_Template, 5, 0, "div", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("exiting", ctx.isTransitioning)("slide-out-next", ctx.direction === "next" && ctx.isTransitioning)("slide-out-prev", ctx.direction === "prev" && ctx.isTransitioning);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.images[ctx.previousIndex]);
      \u0275\u0275advance();
      \u0275\u0275classProp("entering", ctx.isTransitioning)("slide-in-next", ctx.direction === "next" && ctx.isTransitioning)("slide-in-prev", ctx.direction === "prev" && ctx.isTransitioning);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.images[ctx.currentIndex]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.images.length > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.images.length > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.images.length > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.images.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.slideshow-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: clamp(250px, 50vh, 400px);\n  border-radius: clamp(12px, 2vw, 20px);\n  overflow: hidden;\n  background: var(--smoke-1);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin: 0 auto;\n  cursor: pointer;\n}\n.slides-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.slide.current[_ngcontent-%COMP%] {\n  z-index: 2;\n  opacity: 1;\n  transform: translateX(0);\n}\n.slide.previous[_ngcontent-%COMP%] {\n  z-index: 1;\n  opacity: 0;\n  transform: translateX(0);\n}\n.slide.previous.slide-out-next[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(-100%);\n}\n.slide.previous.slide-out-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(100%);\n}\n.slide.current.slide-in-next[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide.current.slide-in-prev[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_slideInFromRight {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInFromLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.slide-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n  border-radius: clamp(8px, 1.5vw, 12px);\n}\n.fade-transition[_ngcontent-%COMP%]   .slide.previous[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.fade-transition[_ngcontent-%COMP%]   .slide.current[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-in-out forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.nav-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--smoke-1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: clamp(40px, 6vw, 48px);\n  height: clamp(40px, 6vw, 48px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 10;\n  font-size: clamp(18px, 3vw, 24px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.nav-button[_ngcontent-%COMP%]:hover, \n.nav-button[_ngcontent-%COMP%]:active {\n  background: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 6px 20px rgba(var(--primary-rgb, 0, 0, 0), 0.3);\n}\n.nav-button.prev[_ngcontent-%COMP%] {\n  left: clamp(8px, 2vw, 16px);\n}\n.nav-button.next[_ngcontent-%COMP%] {\n  right: clamp(8px, 2vw, 16px);\n}\n.indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: clamp(12px, 3vh, 20px);\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: clamp(6px, 1.5vw, 10px);\n  z-index: 10;\n  padding: clamp(6px, 1.5vw, 10px);\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(8px);\n  border-radius: 100px;\n}\n.indicator[_ngcontent-%COMP%] {\n  width: clamp(8px, 2vw, 12px);\n  height: clamp(8px, 2vw, 12px);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.indicator.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  transform: scale(1.3);\n  box-shadow: 0 0 8px rgba(var(--primary-rgb, 0, 0, 0), 0.4);\n}\n.slideshow-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: var(--smoke-3);\n  background:\n    linear-gradient(\n      135deg,\n      var(--smoke-1) 0%,\n      var(--smoke-2) 100%);\n  padding: clamp(20px, 5vw, 40px);\n  text-align: center;\n}\n.slideshow-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: clamp(48px, 10vw, 64px);\n  margin-bottom: clamp(12px, 3vw, 20px);\n  opacity: 0.6;\n}\n@media (hover: none) and (pointer: coarse) {\n  .slideshow-container[_ngcontent-%COMP%] {\n    height: clamp(200px, 40vh, 350px);\n  }\n  .nav-button[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.7);\n    width: clamp(44px, 8vw, 52px);\n    height: clamp(44px, 8vw, 52px);\n  }\n  .indicators[_ngcontent-%COMP%] {\n    padding: clamp(8px, 2vw, 12px);\n  }\n}\n/*# sourceMappingURL=image-slideshow.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageSlideshow, [{
    type: Component,
    args: [{ selector: "app-image-slideshow", imports: [CommonModule], template: `<!-- image-slideshow.html - VERSIONE CON TRANSIZIONE -->\r
<div class="slideshow-container" (mouseenter)="stopAutoPlay()" (mouseleave)="startAutoPlay()">\r
  \r
  <!-- Container per le immagini -->\r
  <div class="slides-wrapper">\r
<!-- Immagine precedente (in transizione) -->\r
<div class="slide previous" \r
     [class.exiting]="isTransitioning"\r
     [class.slide-out-next]="direction === 'next' && isTransitioning"\r
     [class.slide-out-prev]="direction === 'prev' && isTransitioning">\r
  <img *ngIf="images[previousIndex]" \r
       [src]="images[previousIndex]" \r
       [alt]="'Immagine ' + (previousIndex + 1)"\r
       (error)="onImageError($event)"\r
       class="slide-image"\r
       (click)="onImageClick(previousIndex)">   <!-- \u2190 usa previousIndex -->\r
</div>\r
\r
<!-- Immagine corrente -->\r
<div class="slide current" \r
     [class.entering]="isTransitioning"\r
     [class.slide-in-next]="direction === 'next' && isTransitioning"\r
     [class.slide-in-prev]="direction === 'prev' && isTransitioning">\r
  <img *ngIf="images[currentIndex]" \r
       [src]="images[currentIndex]" \r
       [alt]="'Immagine ' + (currentIndex + 1)"\r
       (error)="onImageError($event)"\r
       class="slide-image"\r
       (click)="onImageClick(currentIndex)">   <!-- \u2190 usa currentIndex -->\r
</div>\r
  </div>\r
\r
  <!-- Controlli di navigazione -->\r
  <button class="nav-button prev" (click)="prev()" *ngIf="images.length > 1">\r
    <span class="material-icons">chevron_left</span>\r
  </button>\r
  <button class="nav-button next" (click)="next()" *ngIf="images.length > 1">\r
    <span class="material-icons">chevron_right</span>\r
  </button>\r
\r
  <!-- Indicatori -->\r
  <div class="indicators" *ngIf="images.length > 1">\r
    <span *ngFor="let image of images; let i = index" \r
          class="indicator" \r
          [class.active]="i === currentIndex"\r
          (click)="goTo(i)">\r
    </span>\r
  </div>\r
\r
</div>\r
\r
<!-- Placeholder -->\r
<div *ngIf="images.length === 0" class="slideshow-placeholder">\r
  <span class="material-icons">photo_library</span>\r
  <p>Nessuna immagine disponibile</p>\r
</div>`, styles: ["/* src/app/customer/restaurant/restaurant-detail/image-slideshow/image-slideshow.css */\n.slideshow-container {\n  position: relative;\n  width: 100%;\n  height: clamp(250px, 50vh, 400px);\n  border-radius: clamp(12px, 2vw, 20px);\n  overflow: hidden;\n  background: var(--smoke-1);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin: 0 auto;\n  cursor: pointer;\n}\n.slides-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.slide.current {\n  z-index: 2;\n  opacity: 1;\n  transform: translateX(0);\n}\n.slide.previous {\n  z-index: 1;\n  opacity: 0;\n  transform: translateX(0);\n}\n.slide.previous.slide-out-next {\n  opacity: 0;\n  transform: translateX(-100%);\n}\n.slide.previous.slide-out-prev {\n  opacity: 0;\n  transform: translateX(100%);\n}\n.slide.current.slide-in-next {\n  animation: slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.slide.current.slide-in-prev {\n  animation: slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n@keyframes slideInFromRight {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes slideInFromLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.slide-image {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n  border-radius: clamp(8px, 1.5vw, 12px);\n}\n.fade-transition .slide.previous {\n  opacity: 0;\n}\n.fade-transition .slide.current {\n  animation: fadeIn 0.6s ease-in-out forwards;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.nav-button {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--smoke-1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: clamp(40px, 6vw, 48px);\n  height: clamp(40px, 6vw, 48px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 10;\n  font-size: clamp(18px, 3vw, 24px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.nav-button:hover,\n.nav-button:active {\n  background: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 6px 20px rgba(var(--primary-rgb, 0, 0, 0), 0.3);\n}\n.nav-button.prev {\n  left: clamp(8px, 2vw, 16px);\n}\n.nav-button.next {\n  right: clamp(8px, 2vw, 16px);\n}\n.indicators {\n  position: absolute;\n  bottom: clamp(12px, 3vh, 20px);\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: clamp(6px, 1.5vw, 10px);\n  z-index: 10;\n  padding: clamp(6px, 1.5vw, 10px);\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(8px);\n  border-radius: 100px;\n}\n.indicator {\n  width: clamp(8px, 2vw, 12px);\n  height: clamp(8px, 2vw, 12px);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.indicator.active {\n  background: var(--primary);\n  transform: scale(1.3);\n  box-shadow: 0 0 8px rgba(var(--primary-rgb, 0, 0, 0), 0.4);\n}\n.slideshow-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: var(--smoke-3);\n  background:\n    linear-gradient(\n      135deg,\n      var(--smoke-1) 0%,\n      var(--smoke-2) 100%);\n  padding: clamp(20px, 5vw, 40px);\n  text-align: center;\n}\n.slideshow-placeholder .material-icons {\n  font-size: clamp(48px, 10vw, 64px);\n  margin-bottom: clamp(12px, 3vw, 20px);\n  opacity: 0.6;\n}\n@media (hover: none) and (pointer: coarse) {\n  .slideshow-container {\n    height: clamp(200px, 40vh, 350px);\n  }\n  .nav-button {\n    background: rgba(0, 0, 0, 0.7);\n    width: clamp(44px, 8vw, 52px);\n    height: clamp(44px, 8vw, 52px);\n  }\n  .indicators {\n    padding: clamp(8px, 2vw, 12px);\n  }\n}\n/*# sourceMappingURL=image-slideshow.css.map */\n"] }]
  }], null, { images: [{
    type: Input
  }], autoPlay: [{
    type: Input
  }], interval: [{
    type: Input
  }], transitionDuration: [{
    type: Input
  }], imageClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageSlideshow, { className: "ImageSlideshow", filePath: "src/app/customer/restaurant/restaurant-detail/image-slideshow/image-slideshow.ts", lineNumber: 11 });
})();

// src/app/customer/restaurant/restaurant-detail/restaurant-detail.ts
function RestaurantDetail_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function RestaurantDetail_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.authService.toggleSidebar());
    });
    \u0275\u0275element(1, "lucide-icon", 17);
    \u0275\u0275elementEnd();
  }
}
function RestaurantDetail_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 18);
    \u0275\u0275listener("error", function RestaurantDetail_img_5_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogoError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.restaurant == null ? null : ctx_r2.restaurant.logo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.restaurant == null ? null : ctx_r2.restaurant.name);
  }
}
function RestaurantDetail_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function RestaurantDetail_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.followerCount, " ", ctx_r2.followerCount === 1 ? "follower" : "follower", " ");
  }
}
function RestaurantDetail_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 23);
    \u0275\u0275text(4, "Ristorante non trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6, "Il ristorante che stai cercando non esiste o non \xE8 disponibile.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 25)(8, "span", 19);
    \u0275\u0275text(9, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Torna alla ricerca ");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantDetail_div_17_app_image_slideshow_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image-slideshow", 46);
    \u0275\u0275listener("imageClicked", function RestaurantDetail_div_17_app_image_slideshow_1_Template_app_image_slideshow_imageClicked_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openLightbox($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r2.restaurantImages);
  }
}
function RestaurantDetail_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275elementStart(1, "button", 48);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_2_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prevImage($event));
    });
    \u0275\u0275element(2, "lucide-angular", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_2_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextImage($event));
    });
    \u0275\u0275element(4, "lucide-angular", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_2_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(6, "img", 53);
    \u0275\u0275elementStart(7, "button", 54);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 24);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 24);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.restaurantImages[ctx_r2.lightboxIndex], \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.lightboxIndex + 1, " / ", ctx_r2.restaurantImages.length, "");
  }
}
function RestaurantDetail_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "span", 22);
    \u0275\u0275text(3, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5, "Nessuna immagine disponibile per questo ristorante");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantDetail_div_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "h3", 38);
    \u0275\u0275text(2, "Descrizione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.restaurant.description);
  }
}
function RestaurantDetail_div_17_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 19);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.restaurant.address);
  }
}
function RestaurantDetail_div_17_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 19);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + ctx_r2.restaurant.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.restaurant.phone);
  }
}
function RestaurantDetail_div_17_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "lucide-angular", 60);
    \u0275\u0275elementStart(2, "a", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + ctx_r2.restaurant.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.restaurant.email);
  }
}
function RestaurantDetail_div_17_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 61);
    \u0275\u0275text(2, "delivery_dining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Consegna a domicilio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7, "Ordina online con consegna a casa");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantDetail_div_17_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 61);
    \u0275\u0275text(2, "takeout_dining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Asporto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7, "Ritira il tuo ordine in ristorante");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantDetail_div_17_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 61);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Prenotazione tavolo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7, "Prenota il tuo tavolo online");
    \u0275\u0275elementEnd()()();
  }
}
function RestaurantDetail_div_17_div_29_div_7_div_6_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dayIndex_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDayName(dayIndex_r8), " ");
  }
}
function RestaurantDetail_div_17_div_29_div_7_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RestaurantDetail_div_17_div_29_div_7_div_6_ng_container_1_span_1_Template, 2, 1, "span", 69);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dayIndex_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getDayName(dayIndex_r8));
  }
}
function RestaurantDetail_div_17_div_29_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, RestaurantDetail_div_17_div_29_div_7_div_6_ng_container_1_Template, 2, 1, "ng-container", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const shift_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", shift_r9.days_of_week);
  }
}
function RestaurantDetail_div_17_div_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "h3", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, RestaurantDetail_div_17_div_29_div_7_div_6_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const shift_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(shift_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.formatTime(shift_r9.start_time), " - ", ctx_r2.formatTime(shift_r9.end_time), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", shift_r9.days_of_week && shift_r9.days_of_week.length > 0);
  }
}
function RestaurantDetail_div_17_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "span", 19);
    \u0275\u0275text(3, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 34);
    \u0275\u0275text(5, "Orari di apertura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275template(7, RestaurantDetail_div_17_div_29_div_7_Template, 7, 4, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.shifts);
  }
}
function RestaurantDetail_div_17_div_30_div_13_button_7_lucide_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 85);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 14);
  }
}
function RestaurantDetail_div_17_div_30_div_13_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_div_13_button_7_Template_button_click_0_listener() {
      const menu_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectMenu(menu_r13.id));
    });
    \u0275\u0275template(1, RestaurantDetail_div_17_div_30_div_13_button_7_lucide_icon_1_Template, 1, 1, "lucide-icon", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r2.selectedMenuId === menu_r13.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r13.is_default);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r13.name, " ");
  }
}
function RestaurantDetail_div_17_div_30_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 80);
    \u0275\u0275text(2, "Seleziona menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "button", 81);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_div_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectMenu(null));
    });
    \u0275\u0275element(5, "lucide-icon", 82);
    \u0275\u0275text(6, " Tutti ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RestaurantDetail_div_17_div_30_div_13_button_7_Template, 3, 4, "button", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.selectedMenuId === null);
    \u0275\u0275advance();
    \u0275\u0275property("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.menus);
  }
}
function RestaurantDetail_div_17_div_30_div_14_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_div_14_button_6_Template_button_click_0_listener() {
      const category_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectCategory(category_r16.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === category_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r16.name, " ");
  }
}
function RestaurantDetail_div_17_div_30_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 80);
    \u0275\u0275text(2, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "button", 81);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectCategory(null));
    });
    \u0275\u0275text(5, " Tutto ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RestaurantDetail_div_17_div_30_div_14_button_6_Template, 2, 3, "button", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 106);
    \u0275\u0275listener("error", function RestaurantDetail_div_17_div_30_div_15_div_2_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const dish_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onDishImageError($event, dish_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dish_r19.image_url, \u0275\u0275sanitizeUrl)("alt", dish_r19.name);
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "lucide-icon", 108);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 28);
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dish_r19.category_name, " ");
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dish_r19.description, " ");
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275element(1, "lucide-icon", 114);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("size", 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, dish_r19.delivery_price, "EUR"), " ");
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275element(1, "lucide-icon", 115);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("size", 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, dish_r19.takeaway_price, "EUR"), " ");
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, RestaurantDetail_div_17_div_30_div_15_div_2_div_13_span_1_Template, 4, 5, "span", 112)(2, RestaurantDetail_div_17_div_30_div_15_div_2_div_13_span_2_Template, 4, 5, "span", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dish_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r19.delivery_price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r19.takeaway_price);
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275template(2, RestaurantDetail_div_17_div_30_div_15_div_2_img_2_Template, 1, 2, "img", 92)(3, RestaurantDetail_div_17_div_30_div_15_div_2_div_3_Template, 2, 1, "div", 93);
    \u0275\u0275elementStart(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RestaurantDetail_div_17_div_30_div_15_div_2_span_7_Template, 2, 1, "span", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 96)(9, "div", 97)(10, "h3", 98);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, RestaurantDetail_div_17_div_30_div_15_div_2_p_12_Template, 2, 1, "p", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, RestaurantDetail_div_17_div_30_div_15_div_2_div_13_Template, 3, 2, "div", 100);
    \u0275\u0275elementStart(14, "div", 101)(15, "button", 102);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_div_15_div_2_Template_button_click_15_listener() {
      const dish_r19 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.addToCart(dish_r19));
    });
    \u0275\u0275element(16, "lucide-icon", 103);
    \u0275\u0275text(17, " Aggiungi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 104);
    \u0275\u0275element(19, "lucide-icon", 105);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const dish_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dish_r19.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dish_r19.image_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 9, dish_r19.base_price, "EUR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dish_r19.category_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", dish_r19.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r19.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dish_r19.delivery_price || dish_r19.takeaway_price);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
  }
}
function RestaurantDetail_div_17_div_30_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 117);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_div_15_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.viewFullMenu());
    });
    \u0275\u0275element(4, "lucide-icon", 118);
    \u0275\u0275text(5, " Vedi tutti ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", ctx_r2.filteredDishes.length - 6, " altri piatti");
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function RestaurantDetail_div_17_div_30_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275template(2, RestaurantDetail_div_17_div_30_div_15_div_2_Template, 20, 12, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RestaurantDetail_div_17_div_30_div_15_div_3_Template, 6, 2, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredDishes.slice(0, 6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredDishes.length > 6);
  }
}
function RestaurantDetail_div_17_div_30_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275element(1, "lucide-icon", 120);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3, "Nessun piatto trovato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 117);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_div_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectMenu(null));
    });
    \u0275\u0275element(5, "lucide-icon", 121);
    \u0275\u0275text(6, " Mostra tutti ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 36);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 16);
  }
}
function RestaurantDetail_div_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "div", 4);
    \u0275\u0275element(4, "lucide-icon", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2", 75);
    \u0275\u0275text(7, "Il Nostro Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 76);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_div_30_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewFullMenu());
    });
    \u0275\u0275element(11, "lucide-icon", 77);
    \u0275\u0275text(12, " Menu completo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, RestaurantDetail_div_17_div_30_div_13_Template, 8, 4, "div", 36)(14, RestaurantDetail_div_17_div_30_div_14_Template, 7, 3, "div", 36)(15, RestaurantDetail_div_17_div_30_div_15_Template, 4, 2, "div", 78)(16, RestaurantDetail_div_17_div_30_div_16_Template, 7, 2, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r2.filteredDishes.length, " piatti disponibili");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.menus.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isMenuView && ctx_r2.categories.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredDishes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredDishes.length === 0);
  }
}
function RestaurantDetail_div_17_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewFullMenu());
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "restaurant_menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Vedi Menu Completo ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantDetail_div_17_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewInteractiveMenu());
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ordina Ora ");
    \u0275\u0275elementEnd();
  }
}
function RestaurantDetail_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, RestaurantDetail_div_17_app_image_slideshow_1_Template, 1, 1, "app-image-slideshow", 27)(2, RestaurantDetail_div_17_div_2_Template, 11, 5, "div", 28)(3, RestaurantDetail_div_17_div_3_Template, 6, 0, "div", 29);
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 31)(6, "div", 32);
    \u0275\u0275element(7, "lucide-angular", 33);
    \u0275\u0275elementStart(8, "h2", 34);
    \u0275\u0275text(9, "Informazioni");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35);
    \u0275\u0275template(11, RestaurantDetail_div_17_div_11_Template, 5, 1, "div", 36);
    \u0275\u0275elementStart(12, "div", 37)(13, "h3", 38);
    \u0275\u0275text(14, "Contatti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 37);
    \u0275\u0275template(16, RestaurantDetail_div_17_div_16_Template, 5, 1, "div", 39)(17, RestaurantDetail_div_17_div_17_Template, 5, 2, "div", 39)(18, RestaurantDetail_div_17_div_18_Template, 4, 3, "div", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 31)(20, "div", 32)(21, "span", 19);
    \u0275\u0275text(22, "room_service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h2", 34);
    \u0275\u0275text(24, "Servizi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 35);
    \u0275\u0275template(26, RestaurantDetail_div_17_div_26_Template, 8, 0, "div", 39)(27, RestaurantDetail_div_17_div_27_Template, 8, 0, "div", 39)(28, RestaurantDetail_div_17_div_28_Template, 8, 0, "div", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, RestaurantDetail_div_17_div_29_Template, 8, 1, "div", 40)(30, RestaurantDetail_div_17_div_30_Template, 17, 5, "div", 41);
    \u0275\u0275elementStart(31, "div", 42)(32, "button", 43);
    \u0275\u0275listener("click", function RestaurantDetail_div_17_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewRestaurantMap());
    });
    \u0275\u0275elementStart(33, "span", 19);
    \u0275\u0275text(34, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Visualizza Mappa ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, RestaurantDetail_div_17_button_36_Template, 4, 0, "button", 44)(37, RestaurantDetail_div_17_button_37_Template, 4, 0, "button", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurantImages.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lightboxVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant && ctx_r2.restaurantImages.length === 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.restaurant.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.restaurant.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.email);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.restaurant.accepts_delivery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.accepts_takeaway);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.allow_table_selection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.shifts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dishes.length > 0 || ctx_r2.menus.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.restaurant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.restaurant.accepts_delivery || ctx_r2.restaurant.accepts_takeaway);
  }
}
function RestaurantDetail_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 21)(2, "span", 123);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Caricamento informazioni ristorante...");
    \u0275\u0275elementEnd()()();
  }
}
var RestaurantDetail = class _RestaurantDetail {
  restaurantPublicService = inject(RestaurantPublicService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  breakpointObserver = inject(BreakpointObserver);
  authService = inject(AuthService);
  followerService = inject(RestaurantFollowerService);
  cdr = inject(ChangeDetectorRef);
  loadingService = inject(LoadingService);
  lightboxVisible = false;
  lightboxIndex = 0;
  // FOLLOWER
  isFollowing = false;
  followerCount = 0;
  isFollowLoading = false;
  restaurant = null;
  shifts = [];
  dishes = [];
  filteredDishes = [];
  selectedCategory = null;
  loading = true;
  categories = [];
  // IMMAGINI SLIDESHOW
  restaurantImages = [];
  // menù
  menus = [];
  // 🔥 NUOVO
  selectedMenuId = null;
  // 🔥 NUOVO
  isMenuView = false;
  // 🔥 NUOVO - flag per sapere se stiamo filtrando per menu
  weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
  isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.TabletPortrait]).pipe(map((result) => result.matches));
  showToggle$ = combineLatest([
    this.isMobile$,
    this.authService.sidebarCollapsed$
  ]).pipe(map(([isMobile, collapsed]) => isMobile && collapsed));
  ngOnInit() {
    return __async(this, null, function* () {
      const restaurantId = this.route.snapshot.paramMap.get("id");
      if (restaurantId) {
        yield this.loadRestaurantData(restaurantId);
        yield this.loadFollowState(restaurantId);
      } else {
        this.router.navigate(["/customer/search"]);
      }
    });
  }
  extractCategories(categories) {
    this.categories = categories || [];
  }
  selectMenu(menuId) {
    return __async(this, null, function* () {
      this.selectedMenuId = menuId;
      this.isMenuView = menuId !== null;
      this.selectedCategory = null;
      if (!menuId) {
        this.filteredDishes = [...this.dishes];
      } else {
        this.filteredDishes = yield this.restaurantPublicService.loadMenuDishes(menuId);
      }
    });
  }
  selectCategory(categoryId) {
    this.selectedCategory = categoryId;
    this.selectedMenuId = null;
    this.isMenuView = false;
    if (!categoryId) {
      this.filteredDishes = [...this.dishes];
    } else {
      this.filteredDishes = this.dishes.filter((dish) => dish.category_id === categoryId);
    }
  }
  formatTime(timeString) {
    if (!timeString)
      return "";
    return timeString.substring(0, 5);
  }
  getDayName(dayIndex) {
    return this.weekDays[dayIndex] || "";
  }
  truncateText(text, maxLength) {
    if (!text)
      return "";
    if (text.length <= maxLength)
      return text;
    return text.substring(0, maxLength) + "...";
  }
  viewRestaurantMap() {
    if (this.restaurant) {
      this.router.navigate(["/customer/restaurant", this.restaurant.id, "map"]);
    }
  }
  viewInteractiveMenu() {
    if (this.restaurant) {
      this.router.navigate(["/customer/menu", this.restaurant.id]);
    }
  }
  // Gestione errori immagini
  onLogoError(event) {
    const img = event.target;
    img.style.display = "none";
  }
  onDishImageError(event, dish) {
    const img = event.target;
    img.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gaW1hZ2U8L3RleHQ+PC9zdmc+";
    img.onerror = null;
  }
  // IMMAGINI SLIDESHOW
  loadRestaurantData(restaurantId) {
    return __async(this, null, function* () {
      this.loadingService.start();
      try {
        const [restaurant, shifts, dishes, categories, photos, menus] = yield Promise.all([
          this.restaurantPublicService.loadRestaurantById(restaurantId),
          this.restaurantPublicService.loadRestaurantShifts(restaurantId),
          this.restaurantPublicService.loadRestaurantDishes(restaurantId, { onlyActive: true }),
          this.restaurantPublicService.loadRestaurantCategories(restaurantId),
          this.restaurantPublicService.loadRestaurantPhotos(restaurantId),
          this.restaurantPublicService.loadRestaurantMenus(restaurantId)
        ]);
        this.restaurant = restaurant;
        this.shifts = shifts;
        this.dishes = dishes;
        this.filteredDishes = [...dishes];
        this.restaurantImages = photos;
        this.menus = menus;
        this.extractCategories(categories);
        this.cdr.detectChanges();
      } catch (error) {
        console.error("Error loading restaurant data:", error);
      } finally {
        this.loadingService.stop();
      }
    });
  }
  viewFullMenu() {
    if (this.restaurant) {
      this.router.navigate(["/customer/menu", this.restaurant.id]);
    }
  }
  addToCart(dish) {
    console.log("Aggiunto al carrello:", dish);
  }
  openLightbox(index) {
    this.lightboxIndex = index;
    this.lightboxVisible = true;
    document.body.style.overflow = "hidden";
  }
  closeLightbox() {
    this.lightboxVisible = false;
    document.body.style.overflow = "";
  }
  prevImage(event) {
    event.stopPropagation();
    this.lightboxIndex = (this.lightboxIndex - 1 + this.restaurantImages.length) % this.restaurantImages.length;
  }
  nextImage(event) {
    event.stopPropagation();
    this.lightboxIndex = (this.lightboxIndex + 1) % this.restaurantImages.length;
  }
  loadFollowState(restaurantId) {
    return __async(this, null, function* () {
      const [following, count] = yield Promise.all([
        this.followerService.isFollowing(restaurantId),
        this.followerService.getFollowerCount(restaurantId)
      ]);
      this.isFollowing = following;
      this.followerCount = count;
      this.cdr.detectChanges();
    });
  }
  toggleFollow() {
    return __async(this, null, function* () {
      if (!this.authService.currentUserValue) {
        this.router.navigate(["/login"]);
        return;
      }
      if (!this.restaurant)
        return;
      this.isFollowLoading = true;
      try {
        this.isFollowing = yield this.followerService.toggleFollow(this.restaurant.id);
        this.followerCount += this.isFollowing ? 1 : -1;
      } finally {
        this.isFollowLoading = false;
      }
    });
  }
  get isAuthenticated() {
    return !!this.authService.currentUserValue;
  }
  static \u0275fac = function RestaurantDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestaurantDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantDetail, selectors: [["app-restaurant-detail"]], decls: 20, vars: 21, consts: [["loadingTemplate", ""], [1, "section-header"], [1, "flex", "items-center", "gap-md", "w-100"], ["class", "icon-button mobile-toggle", 3, "click", 4, "ngIf"], [1, "header-icon"], ["class", "logo-image rounded-full", 3, "src", "alt", "error", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "section-titles"], [1, "section-title"], [1, "page-container", "p-sm"], [1, "flex", "items-center", "gap-sm", "mt-lg", "p-sm", "w-100", 2, "justify-content", "right"], ["class", "text-muted text-mini", 4, "ngIf"], [1, "promethea-button", 3, "click", "disabled"], [3, "name", "size"], ["class", "flex flex-col items-center justify-center p-xl gap-md", 4, "ngIf"], ["class", "flex flex-col gap-md mt-lg", 4, "ngIf"], [1, "icon-button", "mobile-toggle", 3, "click"], ["name", "menu"], [1, "logo-image", "rounded-full", 3, "error", "src", "alt"], [1, "material-icons"], [1, "text-muted", "text-mini"], [1, "flex", "flex-col", "items-center", "justify-center", "p-xl", "gap-md"], [1, "material-icons", "fs-lg"], [1, "text-lg", "font-bold"], [1, "text-muted"], ["routerLink", "/customer/search", 1, "promethea-button"], [1, "flex", "flex-col", "gap-md", "mt-lg"], ["class", "mb-lg", 3, "images", "imageClicked", 4, "ngIf"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], ["class", "image-placeholder card mb-lg", 4, "ngIf"], [1, "grid-form"], [1, "card"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "info"], [1, "text-md", "font-semibold", "m-0"], [1, "flex", "flex-col", "gap-md"], ["class", "flex flex-col gap-sm", 4, "ngIf"], [1, "flex", "flex-col", "gap-sm"], [1, "font-semibold"], ["class", "flex items-center gap-sm", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "card gap-lg", 4, "ngIf"], [1, "modal-footer", "p-sm"], [1, "promethea-button", 3, "click"], ["class", "promethea-button primary", 3, "click", 4, "ngIf"], ["class", "promethea-button ghost", 3, "click", 4, "ngIf"], [1, "mb-lg", 3, "imageClicked", "images"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-nav", "prev", 3, "click"], ["name", "chevron-left", 3, "size"], [1, "lightbox-nav", "next", 3, "click"], ["name", "chevron-right", 3, "size"], [1, "lightbox-content", 3, "click"], ["alt", "Foto ingrandita", 1, "lightbox-image", 3, "src"], [1, "close-btn", 3, "click"], [1, "counter"], [1, "image-placeholder", "card", "mb-lg"], [1, "flex", "flex-col", "items-center", "justify-center", "p-xl", "gap-sm"], [1, "flex", "items-center", "gap-sm"], [1, "link", 3, "href"], ["name", "mail", 1, "nav-icon", 3, "size"], [1, "material-icons", "text-primary"], ["class", "shift-section", 4, "ngFor", "ngForOf"], [1, "shift-section"], [1, "flex", "justify-between", "items-center", "mb-sm"], [1, "chip"], ["class", "flex flex-wrap gap-sm", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-sm"], [4, "ngFor", "ngForOf"], ["class", "chip active", 4, "ngIf"], [1, "chip", "active"], [1, "card", "gap-lg"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-md"], ["name", "book-open"], [1, "section-title", "m-0", 2, "font-size", "var(--fs-md)"], [1, "promethea-button", "primary", 3, "click"], ["name", "arrow-right"], ["class", "dishes-preview", 4, "ngIf"], ["class", "flex flex-col items-center justify-center gap-md p-lg", 4, "ngIf"], [1, "text-mini", "text-muted", "font-semibold", 2, "letter-spacing", "0.08em", "text-transform", "uppercase"], [1, "chip", 3, "click"], ["name", "layers", 3, "size"], ["class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["name", "star", 3, "size", 4, "ngIf"], ["name", "star", 3, "size"], [1, "dishes-preview"], [1, "grid-cards"], ["class", "dish-card-modern flex flex-col", 4, "ngFor", "ngForOf"], ["class", "flex items-center justify-center gap-md mt-lg", "style", "border-top: 1px solid var(--smoke-1); padding-top: var(--gap-lg)", 4, "ngIf"], [1, "dish-card-modern", "flex", "flex-col"], [1, "dish-img-wrap"], ["class", "dish-img", 3, "src", "alt", "error", 4, "ngIf"], ["class", "dish-img-placeholder", 4, "ngIf"], [1, "dish-price-badge", "chip", "bg-gradient"], ["class", "dish-category-badge text-mini", 4, "ngIf"], [1, "flex", "flex-col", "gap-sm", "p-md", "flex-1"], [1, "flex-1"], [1, "card-title", 2, "font-size", "var(--fs-sm)", "margin-bottom", "var(--gap-mini)"], ["class", "text-muted text-mini line-clamp-2", 4, "ngIf"], ["class", "flex gap-sm flex-wrap", 4, "ngIf"], [1, "flex", "gap-sm", "card-footer", 2, "padding-top", "var(--gap-sm)"], [1, "promethea-button", "primary", "flex-1", 3, "click"], ["name", "plus", 3, "size"], ["title", "Dettagli", 1, "icon-button"], ["name", "info", 3, "size"], [1, "dish-img", 3, "error", "src", "alt"], [1, "dish-img-placeholder"], ["name", "utensils", 3, "size"], [1, "dish-category-badge", "text-mini"], [1, "text-muted", "text-mini", "line-clamp-2"], [1, "flex", "gap-sm", "flex-wrap"], ["class", "chip text-mini", 4, "ngIf"], [1, "chip", "text-mini"], ["name", "bike", 3, "size"], ["name", "shopping-bag", 3, "size"], [1, "flex", "items-center", "justify-center", "gap-md", "mt-lg", 2, "border-top", "1px solid var(--smoke-1)", "padding-top", "var(--gap-lg)"], [1, "promethea-button", "ghost", 3, "click"], ["name", "arrow-right", 3, "size"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-md", "p-lg"], ["name", "search-x", 2, "color", "var(--text-muted)", 3, "size"], ["name", "rotate-ccw", 3, "size"], [1, "page-container"], [1, "material-icons", "animate-spin"]], template: function RestaurantDetail_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, RestaurantDetail_button_2_Template, 2, 0, "button", 3);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275template(5, RestaurantDetail_img_5_Template, 1, 2, "img", 5)(6, RestaurantDetail_span_6_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "h1", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10);
      \u0275\u0275template(12, RestaurantDetail_span_12_Template, 2, 2, "span", 11);
      \u0275\u0275elementStart(13, "button", 12);
      \u0275\u0275listener("click", function RestaurantDetail_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleFollow());
      });
      \u0275\u0275element(14, "lucide-angular", 13);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, RestaurantDetail_div_16_Template, 11, 0, "div", 14)(17, RestaurantDetail_div_17_Template, 38, 14, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, RestaurantDetail_ng_template_18_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background", (ctx.restaurant == null ? null : ctx.restaurant.cover_image_url) ? "url(" + (ctx.restaurant == null ? null : ctx.restaurant.cover_image_url) + ")" : "var(--vetro)");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 19, ctx.showToggle$));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.restaurant == null ? null : ctx.restaurant.logo_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.restaurant == null ? null : ctx.restaurant.logo_url));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.restaurant == null ? null : ctx.restaurant.name);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.followerCount > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("ghost", !ctx.isFollowing)("active", ctx.isFollowing);
      \u0275\u0275property("disabled", ctx.isFollowLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("text-danger", ctx.isFollowing);
      \u0275\u0275property("name", ctx.isFollowing ? "heart" : "heart")("size", 18);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isFollowLoading ? "..." : ctx.isFollowing ? "Segui gi\xE0" : "Segui", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.restaurant);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.restaurant);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, CurrencyPipe, FormsModule, ImageSlideshow, LucideAngularModule, LucideAngularComponent], styles: ['\n\n.logo-image[_ngcontent-%COMP%] {\n  max-width: var(--fs-xl);\n  max-height: var(--fs-xl);\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n}\n.dish-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: var(--gap-md);\n  margin-bottom: var(--gap-sm);\n}\n.dish-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n}\n.card[_ngcontent-%COMP%]:hover   .dish-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.dish-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.dish-badges[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  border: none;\n  background: var(--gradiente);\n}\n.text-normal[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.line-clamp-2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.hover-lift[_ngcontent-%COMP%] {\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .dish-image[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--text-color) 90%, transparent);\n  z-index: 99999 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-overlay[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  z-index: -1;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.lightbox-image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n.nav-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--smoke-1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: var(--background);\n  width: clamp(40px, 6vw, 48px);\n  height: clamp(40px, 6vw, 48px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 10000;\n  font-size: var(--fs-lg);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.nav-button[_ngcontent-%COMP%]:hover, \n.nav-button[_ngcontent-%COMP%]:active {\n  background: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 6px 20px rgba(var(--primary-rgb, 0, 0, 0), 0.3);\n}\n.nav-button.prev[_ngcontent-%COMP%] {\n  left: clamp(8px, 2vw, 16px);\n}\n.nav-button.next[_ngcontent-%COMP%] {\n  right: clamp(8px, 2vw, 16px);\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  background: none;\n  border: none;\n  color: var(--background);\n  font-size: var(--fs-lg);\n  cursor: pointer;\n  z-index: 10;\n}\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: white;\n  background: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 1.1rem;\n}\n.dish-card-modern[_ngcontent-%COMP%] {\n  border-radius: var(--gap-sm);\n  overflow: hidden;\n  background: var(--vetro);\n  border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;\n}\n.dish-card-modern[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 32px var(--shadow-1);\n}\n.dish-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 4/3;\n  overflow: hidden;\n  background: var(--background2);\n}\n.dish-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.dish-card-modern[_ngcontent-%COMP%]:hover   .dish-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.dish-img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.dish-price-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--gap-sm);\n  right: var(--gap-sm);\n  font-weight: 700;\n  font-size: var(--fs-mini);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.dish-category-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: var(--gap-sm);\n  left: var(--gap-sm);\n  background: color-mix(in srgb, var(--background) 70%, transparent);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 2px 10px;\n  border-radius: 999px;\n  color: var(--text-muted);\n  border: 1px solid var(--smoke-1);\n}\n.lightbox-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--smoke-1);\n  border: 1px solid var(--smoke-1);\n  color: var(--background);\n  width: clamp(40px, 6vw, 48px);\n  height: clamp(40px, 6vw, 48px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 99999999;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n.lightbox-nav[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n}\n.lightbox-nav.prev[_ngcontent-%COMP%] {\n  left: calc(var(--sidebar--collapsed-width) + var(--gap-md));\n}\n.lightbox-nav.next[_ngcontent-%COMP%] {\n  right: var(--gap-lg);\n}\n/*# sourceMappingURL=restaurant-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantDetail, [{
    type: Component,
    args: [{ selector: "app-restaurant-detail", imports: [CommonModule, FormsModule, ImageSlideshow, LucideAngularModule], template: `<!-- restaurant-detail.html -->\r
<div class="section-header" \r
     [style.background]="restaurant?.cover_image_url ? 'url(' + restaurant?.cover_image_url + ')' : 'var(--vetro)'">\r
\r
  <div class="flex items-center gap-md w-100">\r
  <!-- Pulsante toggle mobile -->\r
  <button \r
    *ngIf="showToggle$ | async"\r
    class="icon-button mobile-toggle"\r
    (click)="authService.toggleSidebar()">\r
    <lucide-icon name="menu"></lucide-icon>\r
  </button>\r
    <div class="header-icon">\r
      <img *ngIf="restaurant?.logo_url" \r
           [src]="restaurant?.logo_url" \r
           [alt]="restaurant?.name"\r
           class="logo-image rounded-full"\r
           (error)="onLogoError($event)">\r
      <span *ngIf="!restaurant?.logo_url" class="material-icons">restaurant</span>\r
    </div>\r
    <div class="section-titles">\r
      <h1 class="section-title">{{ restaurant?.name }}</h1>\r
    </div>\r
  </div>\r
</div>\r
<div class="page-container p-sm">\r
  <!-- Bottone segui -->\r
<div class="flex items-center gap-sm mt-lg p-sm w-100" style="justify-content: right;">\r
  \r
  <!-- Contatore follower -->\r
  <span *ngIf="followerCount > 0" class="text-muted text-mini">\r
    {{ followerCount }} {{ followerCount === 1 ? 'follower' : 'follower' }}\r
  </span>\r
\r
  <!-- Bottone -->\r
  <button\r
    class="promethea-button"\r
    [class.ghost]="!isFollowing"\r
    [class.active]="isFollowing"\r
    [disabled]="isFollowLoading"\r
    (click)="toggleFollow()">\r
    \r
    <lucide-angular\r
      [name]="isFollowing ? 'heart' : 'heart'"\r
      [size]="18"\r
      [class.text-danger]="isFollowing">\r
    </lucide-angular>\r
    \r
    {{ isFollowLoading ? '...' : (isFollowing ? 'Segui gi\xE0' : 'Segui') }}\r
  </button>\r
\r
</div>\r
  <!-- Stato ristorante non trovato -->\r
  <div *ngIf="!restaurant" class="flex flex-col items-center justify-center p-xl gap-md">\r
    <span class="material-icons fs-lg">restaurant</span>\r
    <h2 class="text-lg font-bold">Ristorante non trovato</h2>\r
    <p class="text-muted">Il ristorante che stai cercando non esiste o non \xE8 disponibile.</p>\r
    <button class="promethea-button" routerLink="/customer/search">\r
      <span class="material-icons">arrow_back</span>\r
      Torna alla ricerca\r
    </button>\r
  </div>\r
  \r
  <!-- Contenuto ristorante -->\r
  <div *ngIf="restaurant" class="flex flex-col gap-md mt-lg">\r
\r
    <!-- Slideshow delle immagini -->\r
    <app-image-slideshow *ngIf="restaurantImages.length > 0" \r
                        [images]="restaurantImages"\r
                        class="mb-lg"\r
                        (imageClicked)="openLightbox($event)">\r
    </app-image-slideshow>\r
<!-- Lightbox fullscreen custom \u2013 appare solo quando apriamo -->\r
<div *ngIf="lightboxVisible" class="lightbox-overlay" (click)="closeLightbox()">\r
  \r
  <!-- Frecce FUORI dal content, nell'overlay -->\r
  <button class="lightbox-nav prev" (click)="prevImage($event)">\r
    <lucide-angular name="chevron-left" [size]="24"></lucide-angular>\r
  </button>\r
  <button class="lightbox-nav next" (click)="nextImage($event)">\r
    <lucide-angular name="chevron-right" [size]="24"></lucide-angular>\r
  </button>\r
\r
  <!-- Solo immagine + chiudi + counter nel content -->\r
  <div class="lightbox-content" (click)="$event.stopPropagation()">\r
    <img [src]="restaurantImages[lightboxIndex]" \r
         alt="Foto ingrandita" \r
         class="lightbox-image">\r
    <button class="close-btn" (click)="closeLightbox()">\xD7</button>\r
    <div class="counter">{{ lightboxIndex + 1 }} / {{ restaurantImages.length }}</div>\r
  </div>\r
\r
</div>\r
\r
    <!-- Placeholder se non ci sono immagini -->\r
    <div *ngIf="restaurant && restaurantImages.length === 0" \r
        class="image-placeholder card mb-lg">\r
      <div class="flex flex-col items-center justify-center p-xl gap-sm">\r
        <span class="material-icons fs-lg">photo_library</span>\r
        <p class="text-muted">Nessuna immagine disponibile per questo ristorante</p>\r
      </div>\r
    </div>\r
\r
    <!-- Sezioni principali -->\r
    <div class="grid-form">\r
      \r
      <!-- Informazioni base -->\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <lucide-angular name="info"></lucide-angular>\r
          <h2 class="text-md font-semibold m-0">Informazioni</h2>\r
        </div>\r
        \r
        <div class="flex flex-col gap-md">\r
          <div *ngIf="restaurant.description" class="flex flex-col gap-sm">\r
            <h3 class="font-semibold">Descrizione</h3>\r
            <p>{{ restaurant.description }}</p>\r
          </div>\r
          \r
          <div class="flex flex-col gap-sm">\r
            <h3 class="font-semibold">Contatti</h3>\r
            <div class="flex flex-col gap-sm">\r
              <div class="flex items-center gap-sm" *ngIf="restaurant.address">\r
                <span class="material-icons">place</span>\r
                <span>{{ restaurant.address }}</span>\r
              </div>\r
              <div class="flex items-center gap-sm" *ngIf="restaurant.phone">\r
                <span class="material-icons">phone</span>\r
                <a [href]="'tel:' + restaurant.phone" class="link">{{ restaurant.phone }}</a>\r
              </div>\r
              <div class="flex items-center gap-sm" *ngIf="restaurant.email">\r
                <lucide-angular name="mail" [size]="20" class="nav-icon"></lucide-angular>\r
                <a [href]="'mailto:' + restaurant.email" class="link">{{ restaurant.email }}</a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Servizi offerti -->\r
      <div class="card">\r
        <div class="flex items-center gap-sm mb-md">\r
          <span class="material-icons">room_service</span>\r
          <h2 class="text-md font-semibold m-0">Servizi</h2>\r
        </div>\r
        \r
        <div class="flex flex-col gap-md">\r
          <div *ngIf="restaurant.accepts_delivery" class="flex items-center gap-sm">\r
            <span class="material-icons text-primary">delivery_dining</span>\r
            <div>\r
              <strong>Consegna a domicilio</strong>\r
              <p class="text-muted">Ordina online con consegna a casa</p>\r
            </div>\r
          </div>\r
          \r
          <div *ngIf="restaurant.accepts_takeaway" class="flex items-center gap-sm">\r
            <span class="material-icons text-primary">takeout_dining</span>\r
            <div>\r
              <strong>Asporto</strong>\r
              <p class="text-muted">Ritira il tuo ordine in ristorante</p>\r
            </div>\r
          </div>\r
          \r
          <div *ngIf="restaurant.allow_table_selection" class="flex items-center gap-sm">\r
            <span class="material-icons text-primary">event_available</span>\r
            <div>\r
              <strong>Prenotazione tavolo</strong>\r
              <p class="text-muted">Prenota il tuo tavolo online</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Turni di apertura -->\r
    <div *ngIf="shifts.length > 0" class="card">\r
      <div class="flex items-center gap-sm mb-md">\r
        <span class="material-icons">schedule</span>\r
        <h2 class="text-md font-semibold m-0">Orari di apertura</h2>\r
      </div>\r
      \r
      <div class="flex flex-col gap-md">\r
        <div *ngFor="let shift of shifts" class="shift-section">\r
          <div class="flex justify-between items-center mb-sm">\r
            <h3 class="font-semibold">{{ shift.name }}</h3>\r
            <span class="chip">\r
              {{ formatTime(shift.start_time) }} - {{ formatTime(shift.end_time) }}\r
            </span>\r
          </div>\r
          \r
          <!-- Controllo sicuro per evitare chip vuote -->\r
          <div *ngIf="shift.days_of_week && shift.days_of_week.length > 0" class="flex flex-wrap gap-sm">\r
            <ng-container *ngFor="let dayIndex of shift.days_of_week">\r
              <span *ngIf="getDayName(dayIndex)" class="chip active">\r
                {{ getDayName(dayIndex) }}\r
              </span>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
<!-- Menu del ristorante -->\r
<div *ngIf="dishes.length > 0 || menus.length > 0" class="card gap-lg">\r
\r
  <!-- HEADER -->\r
  <div class="flex items-center justify-between">\r
    <div class="flex items-center gap-md">\r
      <div class="header-icon">\r
        <lucide-icon name="book-open"></lucide-icon>\r
      </div>\r
      <div>\r
        <h2 class="section-title m-0" style="font-size: var(--fs-md)">Il Nostro Menu</h2>\r
        <p class="text-muted text-mini">{{ filteredDishes.length }} piatti disponibili</p>\r
      </div>\r
    </div>\r
    <button class="promethea-button primary" (click)="viewFullMenu()">\r
      <lucide-icon name="arrow-right"></lucide-icon>\r
      Menu completo\r
    </button>\r
  </div>\r
\r
  <!-- SELECTOR MENU \u2014 chip orizzontali, visibili solo se ci sono menu -->\r
  <div *ngIf="menus.length > 0" class="flex flex-col gap-sm">\r
    <span class="text-mini text-muted font-semibold" style="letter-spacing: 0.08em; text-transform: uppercase;">Seleziona menu</span>\r
    <div class="flex flex-wrap gap-sm">\r
      <button class="chip"\r
              [class.active]="selectedMenuId === null"\r
              (click)="selectMenu(null)">\r
        <lucide-icon name="layers" [size]="14"></lucide-icon>\r
        Tutti\r
      </button>\r
      <button *ngFor="let menu of menus"\r
              class="chip"\r
              [class.active]="selectedMenuId === menu.id"\r
              (click)="selectMenu(menu.id)">\r
        <lucide-icon name="star" [size]="14" *ngIf="menu.is_default"></lucide-icon>\r
        {{ menu.name }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- FILTRI CATEGORIA -->\r
  <div *ngIf="!isMenuView && categories.length > 0" class="flex flex-col gap-sm">\r
    <span class="text-mini text-muted font-semibold" style="letter-spacing: 0.08em; text-transform: uppercase;">Categoria</span>\r
    <div class="flex flex-wrap gap-sm">\r
      <button class="chip"\r
              [class.active]="selectedCategory === null"\r
              (click)="selectCategory(null)">\r
        Tutto\r
      </button>\r
      <button *ngFor="let category of categories"\r
              class="chip"\r
              [class.active]="selectedCategory === category.id"\r
              (click)="selectCategory(category.id)">\r
        {{ category.name }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- GRIGLIA PIATTI -->\r
  <div *ngIf="filteredDishes.length > 0" class="dishes-preview">\r
    <div class="grid-cards">\r
      <div *ngFor="let dish of filteredDishes.slice(0, 6)"\r
           class="dish-card-modern flex flex-col">\r
\r
        <!-- Immagine con overlay -->\r
        <div class="dish-img-wrap">\r
          <img *ngIf="dish.image_url"\r
               [src]="dish.image_url"\r
               [alt]="dish.name"\r
               (error)="onDishImageError($event, dish)"\r
               class="dish-img">\r
          <div *ngIf="!dish.image_url" class="dish-img-placeholder">\r
            <lucide-icon name="utensils" [size]="28"></lucide-icon>\r
          </div>\r
          <!-- Prezzo in overlay -->\r
          <span class="dish-price-badge chip bg-gradient">\r
            {{ dish.base_price | currency:'EUR' }}\r
          </span>\r
          <!-- Categoria in overlay in basso -->\r
          <span *ngIf="dish.category_name" class="dish-category-badge text-mini">\r
            {{ dish.category_name }}\r
          </span>\r
        </div>\r
\r
        <!-- Info -->\r
        <div class="flex flex-col gap-sm p-md flex-1">\r
          <div class="flex-1">\r
            <h3 class="card-title" style="font-size: var(--fs-sm); margin-bottom: var(--gap-mini)">\r
              {{ dish.name }}\r
            </h3>\r
            <p *ngIf="dish.description" class="text-muted text-mini line-clamp-2">\r
              {{ dish.description }}\r
            </p>\r
          </div>\r
\r
          <!-- Prezzi extra se disponibili -->\r
          <div *ngIf="dish.delivery_price || dish.takeaway_price"\r
               class="flex gap-sm flex-wrap">\r
            <span *ngIf="dish.delivery_price" class="chip text-mini">\r
              <lucide-icon name="bike" [size]="12"></lucide-icon>\r
              {{ dish.delivery_price | currency:'EUR' }}\r
            </span>\r
            <span *ngIf="dish.takeaway_price" class="chip text-mini">\r
              <lucide-icon name="shopping-bag" [size]="12"></lucide-icon>\r
              {{ dish.takeaway_price | currency:'EUR' }}\r
            </span>\r
          </div>\r
\r
          <!-- CTA -->\r
          <div class="flex gap-sm card-footer" style="padding-top: var(--gap-sm)">\r
            <button class="promethea-button primary flex-1" (click)="addToCart(dish)">\r
              <lucide-icon name="plus" [size]="16"></lucide-icon>\r
              Aggiungi\r
            </button>\r
            <button class="icon-button" title="Dettagli">\r
              <lucide-icon name="info" [size]="16"></lucide-icon>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Mostra di pi\xF9 -->\r
    <div *ngIf="filteredDishes.length > 6"\r
         class="flex items-center justify-center gap-md mt-lg"\r
         style="border-top: 1px solid var(--smoke-1); padding-top: var(--gap-lg)">\r
      <span class="text-muted text-mini">+{{ filteredDishes.length - 6 }} altri piatti</span>\r
      <button class="promethea-button ghost" (click)="viewFullMenu()">\r
        <lucide-icon name="arrow-right" [size]="16"></lucide-icon>\r
        Vedi tutti\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Stato vuoto -->\r
  <div *ngIf="filteredDishes.length === 0"\r
       class="flex flex-col items-center justify-center gap-md p-lg">\r
    <lucide-icon name="search-x" [size]="36" style="color: var(--text-muted)"></lucide-icon>\r
    <p class="font-semibold">Nessun piatto trovato</p>\r
    <button class="promethea-button ghost" (click)="selectMenu(null)">\r
      <lucide-icon name="rotate-ccw" [size]="16"></lucide-icon>\r
      Mostra tutti\r
    </button>\r
  </div>\r
\r
</div>\r
\r
    <!-- Azioni -->\r
    <div class="modal-footer p-sm">\r
      <button class="promethea-button" (click)="viewRestaurantMap()">\r
        <span class="material-icons">map</span>\r
        Visualizza Mappa\r
      </button>\r
\r
      <button *ngIf="restaurant" \r
              class="promethea-button primary"\r
              (click)="viewFullMenu()">\r
        <span class="material-icons">restaurant_menu</span>\r
        Vedi Menu Completo\r
      </button>\r
\r
      <button *ngIf="restaurant.accepts_delivery || restaurant.accepts_takeaway" \r
              class="promethea-button ghost"\r
              (click)="viewInteractiveMenu()">\r
        <span class="material-icons">shopping_cart</span>\r
        Ordina Ora\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Template di caricamento -->\r
<ng-template #loadingTemplate>\r
  <div class="page-container">\r
    <div class="flex flex-col items-center justify-center p-xl gap-md">\r
      <span class="material-icons animate-spin">sync</span>\r
      <p>Caricamento informazioni ristorante...</p>\r
    </div>\r
  </div>\r
</ng-template>`, styles: ['/* src/app/customer/restaurant/restaurant-detail/restaurant-detail.css */\n.logo-image {\n  max-width: var(--fs-xl);\n  max-height: var(--fs-xl);\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  padding: var(--gap-sm);\n  background: var(--smoke-1);\n}\n.dish-image-container {\n  position: relative;\n  overflow: hidden;\n  border-radius: var(--gap-md);\n  margin-bottom: var(--gap-sm);\n}\n.dish-image {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.2, 1);\n}\n.card:hover .dish-image {\n  transform: scale(1.05);\n}\n.dish-badges {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.dish-badges .chip {\n  color: var(--text-color);\n  border: none;\n  background: var(--gradiente);\n}\n.text-normal {\n  color: var(--text-color);\n}\n.line-clamp-2 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.flex-1 {\n  flex: 1;\n}\n.hover-lift {\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .dish-image {\n    height: 150px;\n  }\n}\n.lightbox-overlay {\n  position: fixed;\n  inset: 0;\n  background: color-mix(in srgb, var(--text-color) 90%, transparent);\n  z-index: 99999 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-overlay::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  z-index: -1;\n}\n.lightbox-content {\n  height: 100%;\n}\n.lightbox-image {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n.nav-button {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--smoke-1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: var(--background);\n  width: clamp(40px, 6vw, 48px);\n  height: clamp(40px, 6vw, 48px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 10000;\n  font-size: var(--fs-lg);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.nav-button:hover,\n.nav-button:active {\n  background: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 6px 20px rgba(var(--primary-rgb, 0, 0, 0), 0.3);\n}\n.nav-button.prev {\n  left: clamp(8px, 2vw, 16px);\n}\n.nav-button.next {\n  right: clamp(8px, 2vw, 16px);\n}\n.close-btn {\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  background: none;\n  border: none;\n  color: var(--background);\n  font-size: var(--fs-lg);\n  cursor: pointer;\n  z-index: 10;\n}\n.counter {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: white;\n  background: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 1.1rem;\n}\n.dish-card-modern {\n  border-radius: var(--gap-sm);\n  overflow: hidden;\n  background: var(--vetro);\n  border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;\n}\n.dish-card-modern:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 32px var(--shadow-1);\n}\n.dish-img-wrap {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 4/3;\n  overflow: hidden;\n  background: var(--background2);\n}\n.dish-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.dish-card-modern:hover .dish-img {\n  transform: scale(1.05);\n}\n.dish-img-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.dish-price-badge {\n  position: absolute;\n  top: var(--gap-sm);\n  right: var(--gap-sm);\n  font-weight: 700;\n  font-size: var(--fs-mini);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.dish-category-badge {\n  position: absolute;\n  bottom: var(--gap-sm);\n  left: var(--gap-sm);\n  background: color-mix(in srgb, var(--background) 70%, transparent);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 2px 10px;\n  border-radius: 999px;\n  color: var(--text-muted);\n  border: 1px solid var(--smoke-1);\n}\n.lightbox-nav {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--smoke-1);\n  border: 1px solid var(--smoke-1);\n  color: var(--background);\n  width: clamp(40px, 6vw, 48px);\n  height: clamp(40px, 6vw, 48px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 99999999;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n.lightbox-nav:hover {\n  background: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n}\n.lightbox-nav.prev {\n  left: calc(var(--sidebar--collapsed-width) + var(--gap-md));\n}\n.lightbox-nav.next {\n  right: var(--gap-lg);\n}\n/*# sourceMappingURL=restaurant-detail.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantDetail, { className: "RestaurantDetail", filePath: "src/app/customer/restaurant/restaurant-detail/restaurant-detail.ts", lineNumber: 21 });
})();
export {
  RestaurantDetail
};
//# sourceMappingURL=chunk-UKQLKN5D.js.map
