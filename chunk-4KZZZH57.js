import {
  UnitService
} from "./chunk-BTGWFTIL.js";
import {
  takeUntilDestroyed
} from "./chunk-YSV36LK3.js";
import {
  Chart,
  registerables
} from "./chunk-J222UWTW.js";
import {
  ALLERGENS,
  getAllergenById
} from "./chunk-OZ6JK7FL.js";
import {
  CategoryService
} from "./chunk-Q2MBH5GU.js";
import {
  MenuDishService
} from "./chunk-IZHMOFAM.js";
import {
  Platform,
  coerceArray
} from "./chunk-TZX4E46J.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CQ6KSR3R.js";
import {
  IngredientService
} from "./chunk-XHJ77KX6.js";
import {
  DishService
} from "./chunk-5FIUGXYI.js";
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
  Router
} from "./chunk-RFPONECI.js";
import "./chunk-3OF4XXND.js";
import {
  CommonModule,
  DOCUMENT,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-6GUAOFJT.js";
import {
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  createComponent,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  forwardRef,
  inject,
  interval,
  isObservable,
  map,
  merge,
  numberAttribute,
  of,
  pairwise,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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

// node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}

// node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/backwards-compatibility-DHR38MsD.mjs
function _bindEventWithOptions(renderer, target, eventName, callback, options) {
  const major = parseInt(VERSION.major);
  const minor = parseInt(VERSION.minor);
  if (major > 19 || major === 19 && minor > 0 || major === 0 && minor === 0) {
    return renderer.listen(target, eventName, callback, options);
  }
  target.addEventListener(eventName, callback, options);
  return () => {
    target.removeEventListener(eventName, callback, options);
  };
}

// node_modules/@angular/cdk/fesm2022/style-loader-Cu9AvjH9.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  /**
   * Loads a set of styles.
   * @param loader Component which will be instantiated to load the styles.
   */
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/directionality-CBXD4hga.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  /** The current 'ltr' or 'rtl' value. */
  value = "ltr";
  /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Directionality,
    factory: _Directionality.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  /** Normalized direction that accounts for invalid/unsupported values. */
  _dir = "ltr";
  /** Whether the `value` has been set to its initial value. */
  _isInitialized = false;
  /** Direction as passed in by the consumer. */
  _rawDir;
  /** Event emitted when the direction changes. */
  change = new EventEmitter();
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy-DoWdPqVw.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
  /**
   * The size of the cache used to store unused views.
   * Setting the cache size to `0` will disable caching. Defaults to 20 views.
   */
  viewCacheSize = 20;
  /**
   * View cache that stores embedded view instances that have been previously stamped out,
   * but don't are not currently rendered. The view repeater will reuse these views rather than
   * creating brand new ones.
   *
   * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
   */
  _viewCache = [];
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  /** The attached viewport. */
  _viewport = null;
  /** The size of the items in the virtually scrolling list. */
  _itemSize;
  /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
  _minBufferPx;
  /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
  _maxBufferPx;
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  /** The scroll strategy used by this directive. */
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  constructor() {
  }
  /** Subject for notifying that a registered scrollable reference element has been scrolled. */
  _scrolled = new Subject();
  /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
  _scrolledCount = 0;
  /**
   * Map of all the scrollable references that are registered with the service and their
   * scroll event subscriptions.
   */
  scrollContainers = /* @__PURE__ */ new Map();
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  constructor() {
  }
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], () => [], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  /** Cached viewport dimensions. */
  _viewportSize;
  /** Stream of viewport change events. */
  _change = new Subject();
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT, {
    optional: true
  });
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor() {
    super();
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  /** Emits when the viewport is detached from a CdkVirtualForOf. */
  _detachedSubject = new Subject();
  /** Emits when the rendered range changes. */
  _renderedRangeSubject = new Subject();
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  /**
   * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
   * will be removed.
   */
  appendOnly = false;
  // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
  // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
  // depending on how the strategy calculates the scrolled index, it may come at a cost to
  // performance.
  /** Emits when the index of the first element visible in the viewport changes. */
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  /** The element that wraps the rendered content. */
  _contentWrapper;
  /** A stream that emits whenever the rendered range changes. */
  renderedRangeStream = this._renderedRangeSubject;
  /**
   * The total size of all content (in pixels), including content that is not currently rendered.
   */
  _totalContentSize = 0;
  /** A string representing the `style.width` property value to be used for the spacer element. */
  _totalContentWidth = "";
  /** A string representing the `style.height` property value to be used for the spacer element. */
  _totalContentHeight = "";
  /**
   * The CSS transform applied to the rendered subset of items so that they appear within the bounds
   * of the visible viewport.
   */
  _renderedContentTransform;
  /** The currently rendered range of indices. */
  _renderedRange = {
    start: 0,
    end: 0
  };
  /** The length of the data bound to this viewport (in number of items). */
  _dataLength = 0;
  /** The size of the viewport (in pixels). */
  _viewportSize = 0;
  /** the currently attached CdkVirtualScrollRepeater. */
  _forOf;
  /** The last rendered content offset that was set. */
  _renderedContentOffset = 0;
  /**
   * Whether the last rendered content offset was to the end of the content (and therefore needs to
   * be rewritten as an offset to the start of the content).
   */
  _renderedContentOffsetNeedsRewrite = false;
  /** Whether there is a pending change detection cycle. */
  _isChangeDetectionPending = false;
  /** A list of functions to run after the next change detection cycle. */
  _runAfterChangeDetection = [];
  /** Subscription to changes in the viewport size. */
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._isChangeDetectionPending = false;
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
      deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
      }
    },
    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
  _viewport = inject(CdkVirtualScrollViewport, {
    skipSelf: true
  });
  /** Emits when the rendered view of the data changes. */
  viewChange = new Subject();
  /** Subject that emits when a new DataSource instance is given. */
  _dataSourceChanges = new Subject();
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  /** Emits whenever the data in the current DataSource changes. */
  dataStream = this._dataSourceChanges.pipe(
    // Start off with null `DataSource`.
    startWith(null),
    // Bundle up the previous and current data sources so we can work with both.
    pairwise(),
    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
    // Replay the last emitted data when someone subscribes.
    shareReplay(1)
  );
  /** The differ used to calculate changes to the data. */
  _differ = null;
  /** The most recent data emitted from the DataSource. */
  _data;
  /** The currently rendered items. */
  _renderedItems;
  /** The currently rendered range of indices. */
  _renderedRange;
  /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor() {
    super();
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableElement)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/id-generator-Dw_9dSDu.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  /**
   * Generates a unique ID with a specific prefix.
   * @param prefix Prefix to add to the ID.
   */
  getId(prefix) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${counters[prefix]++}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  /** Cached positions of the scrollable parent elements. */
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  /** Reference to the view of the preview element. */
  _previewEmbeddedView;
  /** Reference to the preview element. */
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      "pointer-events": "none",
      // If the preview has a margin, it can throw off our positioning so we reset it. The reset
      // value for `margin-right` needs to be `auto` when opened as a popover, because our
      // positioning is always top/left based, but native popover seems to position itself
      // to the top/right if `<html>` or `<body>` have `dir="rtl"` (see #29604). Setting it
      // to `auto` pushed it to the top/left corner in RTL and is a noop in LTR.
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var dragImportantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  /** Element displayed next to the user's pointer while the element is dragged. */
  _preview;
  /** Container into which to insert the preview. */
  _previewContainer;
  /** Reference to the view of the placeholder element. */
  _placeholderRef;
  /** Element that is rendered instead of the draggable item while it is being sorted. */
  _placeholder;
  /** Coordinates within the element at which the user picked up the element. */
  _pickupPositionInElement;
  /** Coordinates on the page at which the user picked up the element. */
  _pickupPositionOnPage;
  /**
   * Anchor node used to save the place in the DOM where the element was
   * picked up so that it can be restored at the end of the drag sequence.
   */
  _anchor;
  /**
   * CSS `transform` applied to the element when it isn't being dragged. We need a
   * passive transform in order for the dragged element to retain its new position
   * after the user has stopped dragging and because we need to know the relative
   * position in case they start dragging again. This corresponds to `element.style.transform`.
   */
  _passiveTransform = {
    x: 0,
    y: 0
  };
  /** CSS `transform` that is applied to the element while it's being dragged. */
  _activeTransform = {
    x: 0,
    y: 0
  };
  /** Inline `transform` value that the element had before the first dragging sequence. */
  _initialTransform;
  /**
   * Whether the dragging sequence has been started. Doesn't
   * necessarily mean that the element has been moved.
   */
  _hasStartedDragging = signal(false);
  /** Whether the element has moved since the user started dragging it. */
  _hasMoved;
  /** Drop container in which the DragRef resided when dragging began. */
  _initialContainer;
  /** Index at which the item started in its initial container. */
  _initialIndex;
  /** Cached positions of scrollable parent elements. */
  _parentPositions;
  /** Emits when the item is being moved. */
  _moveEvents = new Subject();
  /** Keeps track of the direction in which the user is dragging along each axis. */
  _pointerDirectionDelta;
  /** Pointer position at which the last change in the delta occurred. */
  _pointerPositionAtLastDirectionChange;
  /** Position of the pointer at the last pointer event. */
  _lastKnownPointerPosition;
  /**
   * Root DOM node of the drag instance. This is the element that will
   * be moved around as the user is dragging.
   */
  _rootElement;
  /**
   * Nearest ancestor SVG, relative to which coordinates are calculated if dragging SVGElement
   */
  _ownerSVGElement;
  /**
   * Inline style value of `-webkit-tap-highlight-color` at the time the
   * dragging was started. Used to restore the value once we're done dragging.
   */
  _rootElementTapHighlight;
  /** Subscription to pointer movement events. */
  _pointerMoveSubscription = Subscription.EMPTY;
  /** Subscription to the event that is dispatched when the user lifts their pointer. */
  _pointerUpSubscription = Subscription.EMPTY;
  /** Subscription to the viewport being scrolled. */
  _scrollSubscription = Subscription.EMPTY;
  /** Subscription to the viewport being resized. */
  _resizeSubscription = Subscription.EMPTY;
  /**
   * Time at which the last touch event occurred. Used to avoid firing the same
   * events multiple times on touch devices where the browser will fire a fake
   * mouse event for each touch event, after a certain time.
   */
  _lastTouchEventTime;
  /** Time at which the last dragging sequence was started. */
  _dragStartTime;
  /** Cached reference to the boundary element. */
  _boundaryElement = null;
  /** Whether the native dragging interactions have been enabled on the root element. */
  _nativeInteractionsEnabled = true;
  /** Client rect of the root element when the dragging sequence has started. */
  _initialDomRect;
  /** Cached dimensions of the preview element. Should be read via `_getPreviewRect`. */
  _previewRect;
  /** Cached dimensions of the boundary element. */
  _boundaryRect;
  /** Element that will be used as a template to create the draggable item's preview. */
  _previewTemplate;
  /** Template for placeholder element rendered to show where a draggable would be dropped. */
  _placeholderTemplate;
  /** Elements that can be used to drag the draggable item. */
  _handles = [];
  /** Registered handles that are currently disabled. */
  _disabledHandles = /* @__PURE__ */ new Set();
  /** Droppable container that the draggable is a part of. */
  _dropContainer;
  /** Layout direction of the item. */
  _direction = "ltr";
  /** Ref that the current drag item is nested in. */
  _parentDragRef;
  /**
   * Cached shadow root that the element is placed in. `null` means that the element isn't in
   * the shadow DOM and `undefined` means that it hasn't been resolved yet. Should be read via
   * `_getShadowRoot`, not directly.
   */
  _cachedShadowRoot;
  /** Axis along which dragging is locked. */
  lockAxis;
  /**
   * Amount of milliseconds to wait after the user has put their
   * pointer down before starting to drag the element.
   */
  dragStartDelay = 0;
  /** Class to be added to the preview element. */
  previewClass;
  /**
   * If the parent of the dragged element has a `scale` transform, it can throw off the
   * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
   */
  scale = 1;
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  /** Emits as the drag sequence is being prepared. */
  beforeStarted = new Subject();
  /** Emits when the user starts dragging the item. */
  started = new Subject();
  /** Emits when the user has released a drag item, before any animations have started. */
  released = new Subject();
  /** Emits when the user stops dragging an item in the container. */
  ended = new Subject();
  /** Emits when the user has moved the item into a new container. */
  entered = new Subject();
  /** Emits when the user removes the item its container by dragging it into another container. */
  exited = new Subject();
  /** Emits when the user drops the item inside a container. */
  dropped = new Subject();
  /**
   * Emits as the user is dragging the item. Use with caution,
   * because this event will fire for every pixel that the user has dragged.
   */
  moved = this._moveEvents;
  /** Arbitrary data that can be attached to the drag item. */
  data;
  /**
   * Function that can be used to customize the logic of how the position of the drag item
   * is limited while it's being dragged. Gets called with a point containing the current position
   * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
   * Should return a point describing where the item should be rendered.
   */
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [_bindEventWithOptions(this._renderer, element, "mousedown", this._pointerDown, activeEventListenerOptions), _bindEventWithOptions(this._renderer, element, "touchstart", this._pointerDown, passiveEventListenerOptions), _bindEventWithOptions(this._renderer, element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /** Handler for the `mousedown`/`touchstart` events. */
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = _bindEventWithOptions(this._renderer, shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions$1);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-anchor" : "");
      parent.insertBefore(anchor, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add("cdk-drag-placeholder");
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? (
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
      // to have a value, but Firefox in device emulation mode has a bug where both can be empty
      // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
      // throwing an error. The value returned here will be incorrect, but since this only
      // breaks inside a developer tool and the value is only used for secondary information,
      // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
      event.touches[0] || event.changedTouches[0] || {
        pageX: 0,
        pageY: 0
      }
    ) : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Handles a native `dragstart` event. */
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  /** Root element container of the drop list. */
  _element;
  /** Function used to determine if an item can be sorted into a specific index. */
  _sortPredicate;
  /** Cache of the dimensions of all the items inside the container. */
  _itemPositions = [];
  /**
   * Draggable items that are currently active inside the container. Includes the items
   * that were there at the start of the sequence, as well as any items that have been dragged
   * in, but haven't been dropped yet.
   */
  _activeDraggables;
  /** Direction in which the list is oriented. */
  orientation = "vertical";
  /** Layout direction of the drop list. */
  direction;
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Keeps track of the item that was last swapped with the dragged item, as well as what direction
   * the pointer was moving in when the swap occurred and whether the user's pointer continued to
   * overlap with the swapped item after the swapping occurred.
   */
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? (
      // We use the coordinates of where the item entered the drop
      // zone to figure out at which index it should be inserted.
      this._getItemIndexFromPointerPosition(item, pointerX, pointerY)
    ) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    const items = this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex((currentItem) => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? (
        // Round these down since most browsers report client rects with
        // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
        pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right)
      ) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  /** Root element container of the drop list. */
  _element;
  /** Function used to determine if an item can be sorted into a specific index. */
  _sortPredicate;
  /** Lazily-resolved root node containing the list. Use `_getRootNode` to read this. */
  _rootNode;
  /**
   * Draggable items that are currently active inside the container. Includes the items
   * that were there at the start of the sequence, as well as any items that have been dragged
   * in, but haven't been dropped yet.
   */
  _activeItems;
  /**
   * Keeps track of the item that was last swapped with the dragged item, as well as what direction
   * the pointer was moving in when the swap occurred and whether the user's pointer continued to
   * overlap with the swapped item after the swapping occurred.
   */
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  /**
   * Keeps track of the relationship between a node and its next sibling. This information
   * is used to restore the DOM to the order it was in before dragging started.
   */
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeItems = items.slice();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  /** Lazily resolves the list's root node. */
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  /**
   * Finds the index of the item that's closest to the item being dragged.
   * @param item Item being dragged.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  /** Element that the drop list is attached to. */
  element;
  /** Whether starting a dragging sequence from this container is disabled. */
  disabled = false;
  /** Whether sorting items within the list is disabled. */
  sortingDisabled = false;
  /** Locks the position of the draggable elements inside the container along the specified axis. */
  lockAxis;
  /**
   * Whether auto-scrolling the view when the user
   * moves their pointer close to the edges is disabled.
   */
  autoScrollDisabled = false;
  /** Number of pixels to scroll for each frame when auto-scrolling an element. */
  autoScrollStep = 2;
  /**
   * Function that is used to determine whether an item
   * is allowed to be moved into a drop container.
   */
  enterPredicate = () => true;
  /** Function that is used to determine whether an item can be sorted into a particular index. */
  sortPredicate = () => true;
  /** Emits right before dragging has started. */
  beforeStarted = new Subject();
  /**
   * Emits when the user has moved a new drag item into this container.
   */
  entered = new Subject();
  /**
   * Emits when the user removes an item from the container
   * by dragging it into another container.
   */
  exited = new Subject();
  /** Emits when the user drops an item inside the container. */
  dropped = new Subject();
  /** Emits as the user is swapping items while actively dragging. */
  sorted = new Subject();
  /** Emits when a dragging sequence is started in a list connected to the current one. */
  receivingStarted = new Subject();
  /** Emits when a dragging sequence is stopped from a list connected to the current one. */
  receivingStopped = new Subject();
  /** Arbitrary data that can be attached to the drop list. */
  data;
  /** Element that is the direct parent of the drag items. */
  _container;
  /** Whether an item in the list is being dragged. */
  _isDragging = false;
  /** Keeps track of the positions of any parent scrollable elements. */
  _parentPositions;
  /** Strategy being used to sort items within the list. */
  _sortStrategy;
  /** Cached `DOMRect` of the drop list. */
  _domRect;
  /** Draggable items in the container. */
  _draggables = [];
  /** Drop lists that are connected to the current one. */
  _siblings = [];
  /** Connected siblings that currently have a dragged item. */
  _activeSiblings = /* @__PURE__ */ new Set();
  /** Subscription to the window being scrolled. */
  _viewportScrollSubscription = Subscription.EMPTY;
  /** Vertical direction in which the list is currently scrolling. */
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  /** Horizontal direction in which the list is currently scrolling. */
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  /** Node that is being auto-scrolled. */
  _scrollNode;
  /** Used to signal to the current auto-scroll sequence when to stop. */
  _stopScrollTimers = new Subject();
  /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
  _cachedShadowRoot = null;
  /** Reference to the document. */
  _document;
  /** Elements that can be scrolled while the user is dragging. */
  _scrollableElements = [];
  /** Initial value for the element's `scroll-snap-type` style. */
  _initialScrollSnap;
  /** Direction of the list's layout. */
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /**
   * Configures the drop list so that a different element is used as the container for the
   * dragged items. This is useful for the cases when one might not have control over the
   * full DOM that sets up the dragging.
   * Note that the alternate container needs to be a descendant of the drop list.
   * @param container New element container to be assigned.
   */
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && // Prevent the check from running on apps not using an alternate container. Ideally we
    // would always run it, but introducing it at this stage would be a breaking change.
    this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /** Starts the interval that'll auto-scroll the element. */
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  /** Registered drop container instances. */
  _dropInstances = /* @__PURE__ */ new Set();
  /** Registered drag item instances. */
  _dragInstances = /* @__PURE__ */ new Set();
  /** Drag item instances that are currently being dragged. */
  _activeDragInstances = signal([]);
  /** Keeps track of the event listeners that we've bound to the `document`. */
  _globalListeners;
  /**
   * Predicate function to check if an item is being dragged.  Moved out into a property,
   * because it'll be called a lot and we don't want to create a new function every time.
   */
  _draggingPredicate = (item) => item.isDragging();
  /**
   * Map tracking DOM nodes and their corresponding drag directives. Note that this is different
   * from looking through the `_dragInstances` and getting their root node, because the root node
   * isn't necessarily the node that the directive is set on.
   */
  _domNodesToDirectives = null;
  /**
   * Emits the `touchmove` or `mousemove` events that are dispatched
   * while the user is dragging a drag item instance.
   */
  pointerMove = new Subject();
  /**
   * Emits the `touchend` or `mouseup` events that are dispatched
   * while the user is dragging a drag item instance.
   */
  pointerUp = new Subject();
  /**
   * Emits when the viewport has been scrolled while the user is dragging an item.
   * @deprecated To be turned into a private member. Use the `scrolled` method instead.
   * @breaking-change 13.0.0
   */
  scroll = new Subject();
  constructor() {
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = _bindEventWithOptions(this._renderer, this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        ["scroll", (e) => this.scroll.next(e), capturingEventOptions],
        // Preventing the default action on `mousemove` isn't enough to disable text selection
        // on Safari so we need to prevent the selection event as well. Alternatively this can
        // be done by setting `user-select: none` on the `body`, however it has causes a style
        // recalculation which can be expensive on pages with a lot of elements.
        ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions]
      ];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => _bindEventWithOptions(this._renderer, this._document, name, handler, options));
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this.scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = _bindEventWithOptions(this._renderer, shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  /**
   * Tracks the DOM node which has a draggable directive.
   * @param node Node to track.
   * @param dragRef Drag directive set on the node.
   */
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  /**
   * Stops tracking a draggable directive node.
   * @param node Node to stop tracking.
   */
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  /**
   * Gets the drag directive corresponding to a specific DOM node, if any.
   * @param node Node for which to do the lookup.
   */
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /**
   * Event listener that will prevent the default browser action while the user is dragging.
   * @param event Event whose default action should be prevented.
   */
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  /** Event listener for `touchmove` that is bound even if no dragging is happening. */
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
var DragDrop = class _DragDrop {
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _viewportRuler = inject(ViewportRuler);
  _dragDropRegistry = inject(DragDropRegistry);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  constructor() {
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry, this._renderer);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  /** Emits when the state of the handle has changed. */
  _stateChanges = new Subject();
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate;
  _placeholderTemplate;
  /** Reference to the underlying drag instance. */
  _dragRef;
  /** Arbitrary data to attach to this drag instance. */
  data;
  /** Locks the position of the dragged element along the specified axis. */
  lockAxis;
  /**
   * Selector that will be used to determine the root draggable element, starting from
   * the `cdkDrag` element and going up the DOM. Passing an alternate root element is useful
   * when trying to enable dragging on an element that you might not have access to.
   */
  rootElementSelector;
  /**
   * Node or selector that will be used to determine the element to which the draggable's
   * position will be constrained. If a string is passed in, it'll be used as a selector that
   * will be matched starting from the element's parent and going up the DOM until a match
   * has been found.
   */
  boundaryElement;
  /**
   * Amount of milliseconds to wait after the user has put their
   * pointer down before starting to drag the element.
   */
  dragStartDelay;
  /**
   * Sets the position of a `CdkDrag` that is outside of a drop container.
   * Can be used to restore the element's position for a returning user.
   */
  freeDragPosition;
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled;
  /**
   * Function that can be used to customize the logic of how the position of the drag item
   * is limited while it's being dragged. Gets called with a point containing the current position
   * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
   * Should return a point describing where the item should be rendered.
   */
  constrainPosition;
  /** Class to be added to the preview element. */
  previewClass;
  /**
   * Configures the place into which the preview of the item will be inserted. Can be configured
   * globally through `CDK_DROP_LIST`. Possible values:
   * - `global` - Preview will be inserted at the bottom of the `<body>`. The advantage is that
   * you don't have to worry about `overflow: hidden` or `z-index`, but the item won't retain
   * its inherited styles.
   * - `parent` - Preview will be inserted into the parent of the drag item. The advantage is that
   * inherited styles will be preserved, but it may be clipped by `overflow: hidden` or not be
   * visible due to `z-index`. Furthermore, the preview is going to have an effect over selectors
   * like `:nth-child` and some flexbox configurations.
   * - `ElementRef<HTMLElement> | HTMLElement` - Preview will be inserted into a specific element.
   * Same advantages and disadvantages as `parent`.
   */
  previewContainer;
  /**
   * If the parent of the dragged element has a `scale` transform, it can throw off the
   * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
   */
  scale = 1;
  /** Emits when the user starts dragging the item. */
  started = new EventEmitter();
  /** Emits when the user has released a drag item, before any animations have started. */
  released = new EventEmitter();
  /** Emits when the user stops dragging an item in the container. */
  ended = new EventEmitter();
  /** Emits when the user has moved the item into a new container. */
  entered = new EventEmitter();
  /** Emits when the user removes the item its container by dragging it into another container. */
  exited = new EventEmitter();
  /** Emits when the user drops the item inside a container. */
  dropped = new EventEmitter();
  /**
   * Emits as the user is dragging the item. Use with caution,
   * because this event will fire for every pixel that the user has dragged.
   */
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const dragDrop = inject(DragDrop);
    this._dragRef = dragDrop.createDrag(this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : (
        // Comment tag doesn't have closest method, so use parent's one.
        element.parentElement?.closest(this.rootElementSelector)
      );
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    this._handles.pipe(
      // Sync the new handles with the DragRef.
      tap((handles) => {
        const handleElements = handles.map((handle) => handle.element);
        if (this._selfHandle && this.rootElementSelector) {
          handleElements.push(this.element);
        }
        this._dragRef.withHandles(handleElements);
      }),
      // Listen if the state of any of the handles changes.
      switchMap((handles) => {
        return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
      }),
      takeUntil(this._destroyed)
    ).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  /** Drop lists registered inside the group. */
  _items = /* @__PURE__ */ new Set();
  /** Whether starting a dragging sequence from inside this group is disabled. */
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  /** Refs that have been synced with the drop ref most recently. */
  _latestSortedRefs;
  /** Emits when the list has been destroyed. */
  _destroyed = new Subject();
  /** Whether the element's scrollable parents have been resolved. */
  _scrollableParentsResolved;
  /** Keeps track of the drop lists that are currently on the page. */
  static _dropLists = [];
  /** Reference to the underlying drop list instance. */
  _dropListRef;
  /**
   * Other draggable containers that this container is connected to and into which the
   * container's items can be transferred. Can either be references to other drop containers,
   * or their unique IDs.
   */
  connectedTo = [];
  /** Arbitrary data to attach to this container. */
  data;
  /** Direction in which the list is oriented. */
  orientation;
  /**
   * Unique ID for the drop zone. Can be used as a reference
   * in the `connectedTo` of another `CdkDropList`.
   */
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  /** Locks the position of the draggable elements inside the container along the specified axis. */
  lockAxis;
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled;
  /** Whether sorting within this drop list is disabled. */
  sortingDisabled;
  /**
   * Function that is used to determine whether an item
   * is allowed to be moved into a drop container.
   */
  enterPredicate = () => true;
  /** Functions that is used to determine whether an item can be sorted into a particular index. */
  sortPredicate = () => true;
  /** Whether to auto-scroll the view when the user moves their pointer close to the edges. */
  autoScrollDisabled;
  /** Number of pixels to scroll for each frame when auto-scrolling an element. */
  autoScrollStep;
  /**
   * Selector that will be used to resolve an alternate element container for the drop list.
   * Passing an alternate container is useful for the cases where one might not have control
   * over the parent node of the draggable items within the list (e.g. due to content projection).
   * This allows for usages like:
   *
   * ```
   * <div cdkDropList cdkDropListElementContainer=".inner">
   *   <div class="inner">
   *     <div cdkDrag></div>
   *   </div>
   * </div>
   * ```
   */
  elementContainerSelector;
  /** Emits when the user drops an item inside the container. */
  dropped = new EventEmitter();
  /**
   * Emits when the user has moved a new drag item into this container.
   */
  entered = new EventEmitter();
  /**
   * Emits when the user removes an item from the container
   * by dragging it into another container.
   */
  exited = new EventEmitter();
  /** Emits as the user is swapping items while actively dragging. */
  sorted = new EventEmitter();
  /**
   * Keeps track of the items that are registered with this container. Historically we used to
   * do this with a `ContentChildren` query, however queries don't handle transplanted views very
   * well which means that we can't handle cases like dragging the headers of a `mat-table`
   * correctly. What we do instead is to have the items register themselves with the container
   * and then we sort them based on their position in the DOM.
   */
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const dragDrop = inject(DragDrop);
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = dragDrop.createDropList(this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([
      // Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      },
      {
        provide: CDK_DROP_LIST,
        useExisting: _CdkDropList
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: void 0
        },
        {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }
      ],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  /** Context data to be added to the preview template instance. */
  data;
  /** Whether the preview should preserve the same size as the item that is being dragged. */
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  /** Context data to be added to the placeholder template instance. */
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/restaurant/foodcost-calculator/foodcost-calculator.ts
var _c02 = ["costChart"];
function FoodCostCalculator_div_11_option_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "(Predefinita)");
    \u0275\u0275elementEnd();
  }
}
function FoodCostCalculator_div_11_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275template(2, FoodCostCalculator_div_11_option_8_span_2_Template, 2, 0, "span", 57);
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275property("value", category_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r2.is_default);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" - Posizione ", category_r2.order_index || 0, "");
  }
}
function FoodCostCalculator_div_11_div_14_span_1_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ", ");
    \u0275\u0275elementEnd();
  }
}
function FoodCostCalculator_div_11_div_14_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, FoodCostCalculator_div_11_div_14_span_1_span_2_span_2_Template, 2, 0, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r4.name, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r5);
  }
}
function FoodCostCalculator_div_11_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Ordine attuale: ");
    \u0275\u0275template(2, FoodCostCalculator_div_11_div_14_span_1_span_2_Template, 3, 2, "span", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getSortedCategories());
  }
}
function FoodCostCalculator_div_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, FoodCostCalculator_div_11_div_14_span_1_Template, 3, 1, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getSortedCategories().length > 0);
  }
}
function FoodCostCalculator_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 44);
    \u0275\u0275element(2, "lucide-angular", 45);
    \u0275\u0275text(3, " Categoria ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46)(5, "select", 47)(6, "option", 48);
    \u0275\u0275text(7, "Seleziona una categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FoodCostCalculator_div_11_option_8_Template, 5, 4, "option", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 50)(10, "button", 51);
    \u0275\u0275listener("click", function FoodCostCalculator_div_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleNewCategoryForm());
    });
    \u0275\u0275element(11, "lucide-angular", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 53);
    \u0275\u0275listener("click", function FoodCostCalculator_div_11_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCategoryOrderModal());
    });
    \u0275\u0275element(13, "lucide-angular", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, FoodCostCalculator_div_11_div_14_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.categories || ctx_r2.categories.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.categories && ctx_r2.categories.length > 0);
  }
}
function FoodCostCalculator_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "label", 62);
    \u0275\u0275element(2, "lucide-angular", 63);
    \u0275\u0275text(3, " Allergeni ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 64);
    \u0275\u0275listener("click", function FoodCostCalculator_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAllergenModal());
    });
    \u0275\u0275elementStart(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedAllergens.length > 0 ? "edit" : "add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedAllergens.length > 0 ? ctx_r2.selectedAllergens.length + " allergeni selezionati" : "Aggiungi allergeni", " ");
  }
}
function FoodCostCalculator_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "lucide-angular", 72);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const allergenId_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.getAllergenIcon(allergenId_r7))("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getAllergenName(allergenId_r7));
  }
}
function FoodCostCalculator_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "label", 67);
    \u0275\u0275element(2, "lucide-angular", 68);
    \u0275\u0275text(3, " Lista Allergeni ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 69);
    \u0275\u0275template(5, FoodCostCalculator_div_13_div_5_Template, 4, 3, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.selectedAllergens);
  }
}
function FoodCostCalculator_div_14_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r9 = ctx.$implicit;
    \u0275\u0275property("value", unit_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", unit_r9.name, " (", unit_r9.symbol, ") ");
  }
}
function FoodCostCalculator_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, " L'unit\xE0 di misura \xE8 obbligatoria ");
    \u0275\u0275elementEnd();
  }
}
function FoodCostCalculator_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 73);
    \u0275\u0275element(2, "lucide-angular", 74);
    \u0275\u0275text(3, " Unit\xE0 di Misura * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 75);
    \u0275\u0275listener("change", function FoodCostCalculator_div_14_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manualCalculateCost());
    });
    \u0275\u0275elementStart(5, "option", 48);
    \u0275\u0275text(6, "Seleziona unit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FoodCostCalculator_div_14_option_7_Template, 2, 3, "option", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FoodCostCalculator_div_14_div_8_Template, 2, 0, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.filteredUnits);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_2_0.touched));
  }
}
function FoodCostCalculator_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "label", 78);
    \u0275\u0275element(3, "lucide-angular", 79);
    \u0275\u0275text(4, " Tempo di Preparazione (minuti) ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8)(7, "label", 81);
    \u0275\u0275element(8, "lucide-angular", 82);
    \u0275\u0275text(9, " Prezzo di Vendita * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 83);
    \u0275\u0275listener("change", function FoodCostCalculator_div_15_Template_input_change_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manualCalculateCost());
    });
    \u0275\u0275elementEnd()()();
  }
}
function FoodCostCalculator_div_16_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" in ", ctx_r2.getUnitSymbol((tmp_2_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_2_0.value), " ");
  }
}
function FoodCostCalculator_div_16_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (\u2248 ", \u0275\u0275pipeBind2(2, 1, ctx_r2.totalWeightGrams / 1e3, "1.3-3"), " kg) ");
  }
}
function FoodCostCalculator_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275template(3, FoodCostCalculator_div_16_div_7_span_3_Template, 3, 4, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Peso totale ingredienti: ", \u0275\u0275pipeBind2(2, 2, ctx_r2.totalWeightGrams, "1.0-0"), " g ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.getUnitSymbol((tmp_3_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_3_0.value) === "kg");
  }
}
function FoodCostCalculator_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, " La quantit\xE0 prodotta deve essere maggiore di 0 ");
    \u0275\u0275elementEnd();
  }
}
function FoodCostCalculator_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "label", 84);
    \u0275\u0275element(3, "lucide-angular", 85);
    \u0275\u0275text(4, " Quantit\xE0 Prodotta * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 86);
    \u0275\u0275listener("change", function FoodCostCalculator_div_16_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manualCalculateCost());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FoodCostCalculator_div_16_small_6_Template, 2, 1, "small", 87)(7, FoodCostCalculator_div_16_div_7_Template, 4, 5, "div", 88)(8, FoodCostCalculator_div_16_div_8_Template, 2, 0, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "label", 89);
    \u0275\u0275element(11, "lucide-angular", 82);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_1_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.totalWeightGrams > 0 && ((tmp_2_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_2_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r2.foodCostForm.get("yield_quantity")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.foodCostForm.get("yield_quantity")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Costo per ", ctx_r2.getUnitSymbol((tmp_4_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_4_0.value) || "unit\xE0", " ");
  }
}
function FoodCostCalculator_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "img", 99);
    \u0275\u0275elementStart(2, "button", 100);
    \u0275\u0275listener("click", function FoodCostCalculator_div_22_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeDishImage());
    });
    \u0275\u0275element(3, "lucide-icon", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.dishImagePreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function FoodCostCalculator_div_22_label_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 102);
    \u0275\u0275element(1, "lucide-icon", 103);
    \u0275\u0275elementStart(2, "span", 104);
    \u0275\u0275text(3, "Clicca per caricare una foto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 104);
    \u0275\u0275text(5, "PNG, JPG, WEBP \u2014 max 5MB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 28);
  }
}
function FoodCostCalculator_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "lucide-icon", 106);
    \u0275\u0275text(2, " Caricamento immagine... ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 14);
  }
}
function FoodCostCalculator_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "label", 93);
    \u0275\u0275text(2, " Foto del piatto ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FoodCostCalculator_div_22_div_3_Template, 4, 2, "div", 94)(4, FoodCostCalculator_div_22_label_4_Template, 6, 1, "label", 95);
    \u0275\u0275elementStart(5, "input", 96);
    \u0275\u0275listener("change", function FoodCostCalculator_div_22_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDishImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FoodCostCalculator_div_22_div_6_Template, 3, 1, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.dishImagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dishImagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isUploadingImage);
  }
}
function FoodCostCalculator_tr_43_option_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ing_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" (\u20AC", \u0275\u0275pipeBind2(2, 2, ing_r17.cost_per_unit, "1.2-2"), "/", ing_r17.units.symbol, ") ");
  }
}
function FoodCostCalculator_tr_43_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275template(2, FoodCostCalculator_tr_43_option_5_span_2_Template, 3, 5, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ing_r17 = ctx.$implicit;
    \u0275\u0275property("value", ing_r17.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ing_r17.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ing_r17.unit_id && ing_r17.units);
  }
}
function FoodCostCalculator_tr_43_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ingredient_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getQuantityUnitLabel((tmp_5_0 = ingredient_r18.get("ingredient_id")) == null ? null : tmp_5_0.value), " ");
  }
}
function FoodCostCalculator_tr_43_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function FoodCostCalculator_tr_43_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const i_r15 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeIngredient(i_r15));
    });
    \u0275\u0275element(1, "lucide-angular", 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function FoodCostCalculator_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 107)(1, "td")(2, "input", 108, 0);
    \u0275\u0275listener("input", function FoodCostCalculator_tr_43_Template_input_input_2_listener($event) {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ingredientInput_r16 = \u0275\u0275reference(3);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onIngredientInputSimple($event, i_r15, ingredientInput_r16));
    })("focus", function FoodCostCalculator_tr_43_Template_input_focus_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ingredientInput_r16 = \u0275\u0275reference(3);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDatalist(ingredientInput_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "datalist", 109);
    \u0275\u0275template(5, FoodCostCalculator_tr_43_option_5_Template, 3, 3, "option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 110)(8, "input", 111);
    \u0275\u0275listener("change", function FoodCostCalculator_tr_43_Template_input_change_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manualCalculateCost());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FoodCostCalculator_tr_43_span_9_Template, 2, 1, "span", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 113);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, FoodCostCalculator_tr_43_button_14_Template, 2, 1, "button", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    const ingredient_r18 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r15);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.getIngredientName((tmp_5_0 = ingredient_r18.get("ingredient_id")) == null ? null : tmp_5_0.value));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.ingredients);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_7_0 = ingredient_r18.get("ingredient_id")) == null ? null : tmp_7_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20AC", \u0275\u0275pipeBind2(12, 6, (tmp_8_0 = ingredient_r18.get("cost")) == null ? null : tmp_8_0.value, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isPhotoOnlyMode);
  }
}
function FoodCostCalculator_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function FoodCostCalculator_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addIngredient());
    });
    \u0275\u0275element(1, "lucide-angular", 52);
    \u0275\u0275text(2, " Aggiungi Ingrediente ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function FoodCostCalculator_div_46_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275listener("click", function FoodCostCalculator_div_46_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMargin());
    });
    \u0275\u0275element(1, "lucide-angular", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.showMargin ? "pie-chart" : "percent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.showMargin ? "Solo ingredienti" : "+ Margine", " ");
  }
}
function FoodCostCalculator_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "h3", 121);
    \u0275\u0275text(3, "Analisi costi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275template(5, FoodCostCalculator_div_46_button_5_Template, 3, 2, "button", 122);
    \u0275\u0275elementStart(6, "button", 123);
    \u0275\u0275listener("click", function FoodCostCalculator_div_46_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleColorPalette());
    });
    \u0275\u0275element(7, "lucide-angular", 124);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 125);
    \u0275\u0275element(9, "canvas", null, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.mode === "dish");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.colorPalette === "default" ? "Passa a palette per daltonici" : "Torna a palette predefinita");
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.colorPalette === "default" ? "eye" : "palette");
  }
}
function FoodCostCalculator_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275text(1, " Aggiungi ingredienti per visualizzare il grafico. ");
    \u0275\u0275elementEnd();
  }
}
function FoodCostCalculator_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128);
    \u0275\u0275text(5, " Food Cost ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 5, ctx_r2.getFoodCostPercentage(), "1.1-1"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ctx_r2.getFoodCostPercentage() > 35)("text-green-500", ctx_r2.getFoodCostPercentage() <= 35);
  }
}
function FoodCostCalculator_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275text(5, "Prezzo Suggerito");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(3, 1, ctx_r2.suggestedPrice, "1.2-2"), "");
  }
}
function FoodCostCalculator_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275text(5, "Margine");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(3, 1, ((tmp_1_0 = ctx_r2.foodCostForm.get("sellingPrice")) == null ? null : tmp_1_0.value) - ctx_r2.totalCost, "1.2-2"), "");
  }
}
function FoodCostCalculator_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(3, 2, ctx_r2.totalCost / (((tmp_1_0 = ctx_r2.foodCostForm.get("yield_quantity")) == null ? null : tmp_1_0.value) || 1), "1.3-3"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Costo per ", ctx_r2.getUnitSymbol((tmp_2_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_2_0.value) || "unit\xE0", "");
  }
}
function FoodCostCalculator_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, (tmp_1_0 = ctx_r2.foodCostForm.get("yield_quantity")) == null ? null : tmp_1_0.value, "1.0-3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.getUnitSymbol((tmp_2_0 = ctx_r2.foodCostForm.get("unit_id")) == null ? null : tmp_2_0.value) || "unit\xE0", " prodotte");
  }
}
function FoodCostCalculator_button_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275element(1, "lucide-icon", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.canSave());
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.isEditing ? "rotate-cw" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.mode === "ingredient" ? "Crea Ingrediente" : ctx_r2.isEditing ? "Aggiorna Piatto" : "Salva Piatto", " ");
  }
}
function FoodCostCalculator_div_67_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, " Il nome \xE8 obbligatorio ");
    \u0275\u0275elementEnd();
  }
}
function FoodCostCalculator_div_67_div_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158)(1, "span", 159);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r24.order_index || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r24.name);
  }
}
function FoodCostCalculator_div_67_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155)(1, "div", 156);
    \u0275\u0275text(2, "Ordine attuale categorie:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275template(4, FoodCostCalculator_div_67_div_38_div_4_Template, 5, 2, "div", 157);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.getSortedCategories());
  }
}
function FoodCostCalculator_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function FoodCostCalculator_div_67_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleNewCategoryForm());
    });
    \u0275\u0275elementStart(1, "div", 131);
    \u0275\u0275listener("click", function FoodCostCalculator_div_67_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 132)(3, "div", 133)(4, "div", 134);
    \u0275\u0275element(5, "lucide-angular", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 136);
    \u0275\u0275text(8, "Nuova Categoria");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 137);
    \u0275\u0275listener("click", function FoodCostCalculator_div_67_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleNewCategoryForm());
    });
    \u0275\u0275element(10, "lucide-angular", 138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 139)(12, "div", 140)(13, "div", 16)(14, "label", 141);
    \u0275\u0275text(15, "Nome Categoria *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 142);
    \u0275\u0275template(17, FoodCostCalculator_div_67_div_17_Template, 2, 0, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 16)(19, "label", 143);
    \u0275\u0275text(20, " Ordine (Posizione) ");
    \u0275\u0275elementStart(21, "span", 58);
    \u0275\u0275text(22, "- pi\xF9 basso = prima");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 144);
    \u0275\u0275elementStart(24, "div", 145);
    \u0275\u0275text(25, " Definisce l'ordine di visualizzazione. 0 = primo, 1 = secondo, ecc. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 16)(27, "label", 146);
    \u0275\u0275text(28, "Descrizione");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 92)(31, "label", 148);
    \u0275\u0275element(32, "input", 149);
    \u0275\u0275elementStart(33, "div", 150)(34, "strong");
    \u0275\u0275text(35, "Imposta come categoria predefinita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 58);
    \u0275\u0275text(37, "Questa categoria sar\xE0 selezionata automaticamente per i nuovi piatti");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(38, FoodCostCalculator_div_67_div_38_Template, 5, 1, "div", 151);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 152)(40, "button", 153);
    \u0275\u0275listener("click", function FoodCostCalculator_div_67_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleNewCategoryForm());
    });
    \u0275\u0275element(41, "lucide-angular", 138);
    \u0275\u0275text(42, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 154);
    \u0275\u0275listener("click", function FoodCostCalculator_div_67_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCreateCategory());
    });
    \u0275\u0275element(44, "lucide-icon", 124);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx_r2.newCategoryForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r2.newCategoryForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.newCategoryForm.get("name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", ctx_r2.getOrderIndexHint());
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r2.categories && ctx_r2.categories.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isCreatingCategory);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isCreatingCategory || ctx_r2.newCategoryForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.isCreatingCategory ? "hourglass" : "check");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isCreatingCategory ? "Creazione..." : "Crea Categoria", " ");
  }
}
function FoodCostCalculator_div_68_div_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r27.description, " ");
  }
}
function FoodCostCalculator_div_68_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170)(2, "span", 171);
    \u0275\u0275text(3, "drag_indicator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 172)(5, "div", 173);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FoodCostCalculator_div_68_div_20_div_7_Template, 2, 1, "div", 174);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 175)(9, "div", 176)(10, "span", 104);
    \u0275\u0275text(11, "Posizione");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 110)(13, "input", 177);
    \u0275\u0275twoWayListener("ngModelChange", function FoodCostCalculator_div_68_div_20_Template_input_ngModelChange_13_listener($event) {
      const category_r27 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(category_r27.order_index, $event) || (category_r27.order_index = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FoodCostCalculator_div_68_div_20_Template_input_ngModelChange_13_listener($event) {
      const category_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOrderIndexChange(category_r27, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 159);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r27 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(category_r27.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r27.description);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", category_r27.order_index);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r27.order_index);
  }
}
function FoodCostCalculator_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function FoodCostCalculator_div_68_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCategoryOrderModal());
    });
    \u0275\u0275elementStart(1, "div", 160);
    \u0275\u0275listener("click", function FoodCostCalculator_div_68_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 132)(3, "div", 133)(4, "div", 134);
    \u0275\u0275element(5, "lucide-angular", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 136);
    \u0275\u0275text(8, "Ordina Categorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 58);
    \u0275\u0275text(10, "Trascina per riordinare le categorie");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 50)(12, "button", 137);
    \u0275\u0275listener("click", function FoodCostCalculator_div_68_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCategoryOrderModal());
    });
    \u0275\u0275element(13, "lucide-angular", 138);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 139)(15, "div", 4)(16, "div", 161)(17, "div", 162);
    \u0275\u0275text(18, "Le categorie saranno visualizzate in questo ordine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 163);
    \u0275\u0275listener("cdkDropListDropped", function FoodCostCalculator_div_68_Template_div_cdkDropListDropped_19_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dropCategory($event));
    });
    \u0275\u0275template(20, FoodCostCalculator_div_68_div_20_Template, 16, 4, "div", 164);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 165);
    \u0275\u0275element(22, "lucide-angular", 166);
    \u0275\u0275elementStart(23, "div")(24, "strong");
    \u0275\u0275text(25, "Come ordinare:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, "Trascina le categorie usando l'icona ");
    \u0275\u0275element(28, "lucide-angular", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Oppure modifica manualmente il numero di posizione (1 = prima, 2 = seconda, ecc.)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "Le categorie saranno visualizzate in ordine crescente");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 152)(34, "button", 153);
    \u0275\u0275listener("click", function FoodCostCalculator_div_68_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCategoryOrderModal());
    });
    \u0275\u0275element(35, "lucide-angular", 138);
    \u0275\u0275text(36, " Annulla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 168);
    \u0275\u0275listener("click", function FoodCostCalculator_div_68_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewCategoryFromOrderModal());
    });
    \u0275\u0275element(38, "lucide-angular", 52);
    \u0275\u0275text(39, " Aggiungi Categoria ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 154);
    \u0275\u0275listener("click", function FoodCostCalculator_div_68_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCategoryOrder());
    });
    \u0275\u0275element(41, "lucide-icon", 124);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.categoriesForSorting);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r2.isSavingOrder);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isSavingOrder);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.isCreatingCategory ? "hourglass" : "check");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSavingOrder ? "Salvataggio..." : "Salva Ordine", " ");
  }
}
function FoodCostCalculator_div_69_label_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 186)(1, "input", 187);
    \u0275\u0275listener("change", function FoodCostCalculator_div_69_label_23_Template_input_change_1_listener() {
      const allergen_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAllergen(allergen_r30.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 188);
    \u0275\u0275element(3, "lucide-angular", 189);
    \u0275\u0275elementStart(4, "div", 190)(5, "span", 113);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 104);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const allergen_r30 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border", ctx_r2.isAllergenSelected(allergen_r30.id) ? "2px solid var(--primary)" : "1px solid var(--smoke-1)");
    \u0275\u0275classProp("bg-smoke", ctx_r2.isAllergenSelected(allergen_r30.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isAllergenSelected(allergen_r30.id));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("opacity", ctx_r2.isAllergenSelected(allergen_r30.id) ? "1" : "0.6");
    \u0275\u0275classProp("text-primary", ctx_r2.isAllergenSelected(allergen_r30.id));
    \u0275\u0275property("name", allergen_r30.icon)("size", 28);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(allergen_r30.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("N\xB0 ", allergen_r30.id, "");
  }
}
function FoodCostCalculator_div_69_div_24_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275element(1, "lucide-angular", 72);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r31 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.getAllergenIcon(id_r31))("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getAllergenName(id_r31));
  }
}
function FoodCostCalculator_div_69_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "div", 192);
    \u0275\u0275element(2, "lucide-angular", 193);
    \u0275\u0275elementStart(3, "span", 194);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 195);
    \u0275\u0275template(6, FoodCostCalculator_div_69_div_24_span_6_Template, 4, 3, "span", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedAllergens.length, " allergeni selezionati ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.selectedAllergens);
  }
}
function FoodCostCalculator_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function FoodCostCalculator_div_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAllergenModal());
    });
    \u0275\u0275elementStart(1, "div", 131);
    \u0275\u0275listener("click", function FoodCostCalculator_div_69_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r28);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 132)(3, "div", 133)(4, "div", 134);
    \u0275\u0275element(5, "lucide-angular", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 136);
    \u0275\u0275text(8, "Gestione Allergeni");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 58);
    \u0275\u0275text(10, "Seleziona gli allergeni presenti nel piatto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 137);
    \u0275\u0275listener("click", function FoodCostCalculator_div_69_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAllergenModal());
    });
    \u0275\u0275element(12, "lucide-angular", 138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 139)(14, "div", 4)(15, "div", 179);
    \u0275\u0275element(16, "lucide-angular", 166);
    \u0275\u0275elementStart(17, "div", 180)(18, "h4");
    \u0275\u0275text(19, "Normativa UE 1169/2011");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "\xC8 obbligatorio indicare la presenza dei 14 allergeni principali nei piatti serviti. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 181);
    \u0275\u0275template(23, FoodCostCalculator_div_69_label_23_Template, 9, 13, "label", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, FoodCostCalculator_div_69_div_24_Template, 7, 3, "div", 183);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 152)(26, "button", 64);
    \u0275\u0275listener("click", function FoodCostCalculator_div_69_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearAllergens());
    });
    \u0275\u0275element(27, "lucide-angular", 184);
    \u0275\u0275text(28, " Deseleziona tutti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 118);
    \u0275\u0275listener("click", function FoodCostCalculator_div_69_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAllergenModal());
    });
    \u0275\u0275element(30, "lucide-angular", 185);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r2.availableAllergens);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedAllergens.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Conferma (", ctx_r2.selectedAllergens.length, ") ");
  }
}
Chart.register(...registerables);
var FoodCostCalculator = class _FoodCostCalculator {
  ingredientService = inject(IngredientService);
  unitService = inject(UnitService);
  dishService = inject(DishService);
  categoryService = inject(CategoryService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);
  menuDishService = inject(MenuDishService);
  returnToMenuBuilder = false;
  sourceMenuId = null;
  destroyRef = inject(DestroyRef);
  authService = inject(AuthService);
  costChartCanvasElement;
  // Proprietà immagine
  dishImagePreview = null;
  dishImageFile = null;
  isUploadingImage = false;
  set costChartCanvas(element) {
    this.costChartCanvasElement = element;
    if (element && this.totalCost > 0) {
      this.updateChart();
    }
  }
  chartInstance;
  colorPalette = "default";
  showMargin = false;
  dishId;
  foodCostForm;
  ingredients = [];
  units = [];
  totalCost = 0;
  suggestedPrice = 0;
  isEditing = false;
  currentDish = null;
  categories = [];
  showNewCategoryForm = false;
  newCategoryForm;
  isCreatingCategory = false;
  // 🔥 NUOVE PROPRIETÀ PER ALLERGENI
  availableAllergens = ALLERGENS;
  selectedAllergens = [];
  showAllergenModal = false;
  // Variabili per l'ordinamento
  showCategoryOrderModal = false;
  categoriesForSorting = [];
  isSavingOrder = false;
  // Nuove proprietà per modalità ingrediente
  mode = "dish";
  fromInventory = false;
  selectedUnit = null;
  totalWeightGrams = 0;
  // Peso totale in grammi (per calcolo automatico)
  calculatedYield = 0;
  // Quantità prodotta calcolata
  yieldManual = false;
  // Se l'utente ha modificato manualmente la quantità
  constructor() {
    this.foodCostForm = this.fb.group({
      // Campi comuni
      name: ["", Validators.required],
      description: [""],
      // Campi specifici per piatto
      sellingPrice: [0, [Validators.min(0)]],
      category_id: [""],
      preparation_time: [0, [Validators.min(0)]],
      // Campi specifici per ingrediente
      unit_id: [""],
      yield_quantity: [0, [Validators.required, Validators.min(1e-3)]],
      to_buy: [false],
      to_buy_quantity: [null],
      // Array ingredienti (comune a entrambi)
      ingredients: this.fb.array([])
    });
    this.newCategoryForm = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      is_default: [false]
    });
  }
  ngOnInit() {
    console.log("\u{1F680} FoodCostCalculator ngOnInit - Caricamento iniziale");
    this.loadEssentialData();
    this.route.queryParams.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      console.log("Query params ricevuti:", params);
      this.returnToMenuBuilder = params["returnToMenuBuilder"] === "true";
      this.sourceMenuId = params["menuId"] || null;
      console.log("\u{1F4CB} Contesto ricevuto:", {
        returnToMenuBuilder: this.returnToMenuBuilder,
        sourceMenuId: this.sourceMenuId
      });
      if (params["mode"] === "ingredient") {
        this.mode = "ingredient";
        this.fromInventory = params["fromInventory"] === "true";
        console.log("Modalit\xE0: INGREDIENTE", { fromInventory: this.fromInventory });
        this.initializeForIngredient();
      } else {
        this.mode = "dish";
        console.log("Modalit\xE0: PIATTO");
        this.loadDataForDish();
      }
    });
  }
  loadEssentialData() {
    this.ingredientService.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((ingredients) => this.ingredients = ingredients);
    this.unitService.units$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((units) => {
      this.units = units;
      if (this.mode === "ingredient" && !this.foodCostForm.get("unit_id")?.value) {
        const defaultUnit = units.find((u) => u.symbol === "kg") ?? units[0];
        if (defaultUnit) {
          this.foodCostForm.patchValue({ unit_id: defaultUnit.id });
          this.selectedUnit = defaultUnit;
        }
      }
    });
  }
  loadDataForDish() {
    return __async(this, null, function* () {
      try {
        this.categoryService.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((categories) => {
          this.categories = categories;
          this.setDefaultCategory();
        });
        if (this.categories.length === 0) {
          yield this.categoryService.loadData();
        }
        this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((paramMap) => __async(this, null, function* () {
          const dishId = paramMap.get("id");
          if (dishId) {
            yield this.loadDishForEditing(dishId);
          } else {
            if (this.ingredientsArray.length === 0) {
              this.addIngredient();
            }
          }
        }));
      } catch (error) {
        console.error("\u274C Errore caricamento dati piatto:", error);
      }
    });
  }
  setDefaultCategory() {
    if (this.categories.length > 0 && !this.foodCostForm.get("category_id")?.value) {
      const defaultCategory = this.categories.find((cat) => cat.is_default);
      const categoryToSelect = defaultCategory || this.categories[0];
      if (categoryToSelect) {
        this.foodCostForm.patchValue({
          category_id: categoryToSelect.id
        });
      }
    }
  }
  loadDishForEditing(dishId) {
    return __async(this, null, function* () {
      try {
        const dish = yield firstValueFrom(this.dishService.getDishById$(dishId));
        if (dish) {
          this.currentDish = dish;
          this.isEditing = true;
          this.populateFormWithDish(dish);
        } else {
          console.error("Piatto non trovato:", dishId);
          yield this.dishService.loadData();
          const dishRetry = yield firstValueFrom(this.dishService.getDishById$(dishId));
          if (dishRetry) {
            this.currentDish = dishRetry;
            this.isEditing = true;
            this.populateFormWithDish(dishRetry);
          } else {
            alert("Piatto non trovato");
            this.router.navigate(["/food-cost"]);
          }
        }
      } catch (error) {
        console.error("Errore nel caricamento del piatto:", error);
        alert("Errore nel caricamento del piatto");
        this.router.navigate(["/food-cost"]);
      }
    });
  }
  populateFormWithDish(dish) {
    this.foodCostForm.patchValue({
      name: dish.name,
      sellingPrice: dish.base_price,
      category_id: dish.category_id,
      description: dish.description || "",
      preparation_time: dish.preparation_time || 0
    });
    this.selectedAllergens = dish.allergens || [];
    while (this.ingredientsArray.length) {
      this.ingredientsArray.removeAt(0);
    }
    if (dish.ingredients_composition && Array.isArray(dish.ingredients_composition)) {
      dish.ingredients_composition.forEach((ingComp) => {
        const ingredientGroup = this.fb.group({
          ingredient_id: [ingComp.ingredient_id, Validators.required],
          quantity: [ingComp.quantity, [Validators.required, Validators.min(0)]],
          cost: [ingComp.cost || 0]
        });
        this.ingredientsArray.push(ingredientGroup);
      });
    } else {
      this.addIngredient();
    }
    setTimeout(() => {
      this.calculateCost();
    }, 100);
    this.dishImagePreview = dish.image_url || null;
    if (this.isPhotoOnlyMode) {
      this.foodCostForm.disable();
    }
  }
  initializeForIngredient() {
    this.foodCostForm.reset();
    this.foodCostForm.patchValue({
      unit_id: this.getDefaultUnitId(),
      yield_quantity: 1,
      to_buy: false,
      to_buy_quantity: null
    });
    while (this.ingredientsArray.length) {
      this.ingredientsArray.removeAt(0);
    }
    this.addIngredient();
    this.calculateCost();
  }
  getDefaultUnitId() {
    const kgUnit = this.units.find((u) => u.symbol === "kg");
    const pzUnit = this.units.find((u) => u.symbol === "pz");
    return kgUnit?.id || pzUnit?.id || "";
  }
  updateYieldQuantity() {
    if (!this.selectedUnit || this.yieldManual)
      return;
    if (this.selectedUnit.symbol === "kg") {
      this.calculatedYield = this.totalWeightGrams / 1e3;
    } else if (this.selectedUnit.symbol === "g") {
      this.calculatedYield = this.totalWeightGrams;
    } else if (this.selectedUnit.symbol === "pz") {
      const currentYield = this.foodCostForm.get("yield_quantity")?.value;
      this.calculatedYield = currentYield > 0 ? currentYield : 1;
    }
    this.foodCostForm.patchValue({
      yield_quantity: this.calculatedYield
    }, { emitEvent: false });
  }
  get ingredientsArray() {
    return this.foodCostForm.get("ingredients");
  }
  addIngredient() {
    const ingredientGroup = this.fb.group({
      ingredient_id: ["", Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      cost: [0]
    });
    this.ingredientsArray.push(ingredientGroup);
  }
  removeIngredient(index) {
    this.ingredientsArray.removeAt(index);
    this.manualCalculateCost();
  }
  getIngredientUnitSymbol(ingredientId) {
    const ingredient = this.ingredients.find((ing) => ing.id === ingredientId);
    if (!ingredient || !ingredient.unit_id)
      return "";
    const unit = this.unitService.getUnitById(ingredient.unit_id);
    return unit ? unit.symbol : "";
  }
  calculateIngredientCost(ingredient, quantity) {
    if (!ingredient || !ingredient.unit_id || !ingredient.units) {
      return ingredient.cost_per_unit * quantity;
    }
    const unit = ingredient.units;
    let convertedQuantity = quantity;
    switch (unit.symbol) {
      case "kg":
        convertedQuantity = quantity / 1e3;
        break;
      case "L":
        convertedQuantity = quantity / 1e3;
        break;
      case "g":
      case "mL":
      case "pz":
        convertedQuantity = quantity;
        break;
      default:
        convertedQuantity = quantity;
    }
    return ingredient.cost_per_unit * convertedQuantity;
  }
  manualCalculateCost() {
    this.calculateCost();
  }
  calculateCost() {
    this.totalCost = 0;
    this.totalWeightGrams = 0;
    this.ingredientsArray.controls.forEach((control) => {
      const ingredientId = control.get("ingredient_id")?.value;
      const quantity = control.get("quantity")?.value || 0;
      if (ingredientId && quantity > 0) {
        const ingredient = this.ingredients.find((ing) => ing.id === ingredientId);
        if (ingredient) {
          const ingredientCost = this.calculateIngredientCost(ingredient, quantity);
          this.totalCost += ingredientCost;
          if (ingredient.unit_id && ingredient.units) {
            const unit = ingredient.units;
            if (unit.type === "weight") {
              if (unit.symbol === "kg") {
                this.totalWeightGrams += quantity * 1e3;
              } else if (unit.symbol === "g") {
                this.totalWeightGrams += quantity;
              }
            }
          }
          control.patchValue({
            cost: ingredientCost
          }, { emitEvent: false });
        }
      } else {
        control.patchValue({
          cost: 0
        }, { emitEvent: false });
      }
    });
    if (this.mode === "ingredient" && !this.yieldManual) {
      this.updateYieldQuantity();
    }
    const costPerUnit = this.calculateCostPerUnit();
    if (this.mode === "dish") {
      this.calculateSuggestedPrice();
    }
    this.updateChart();
  }
  calculateCostPerUnit() {
    if (this.mode === "ingredient") {
      const yieldQuantity = this.foodCostForm.get("yield_quantity")?.value || 1;
      return yieldQuantity > 0 ? this.totalCost / yieldQuantity : 0;
    }
    return 0;
  }
  calculateSuggestedPrice() {
    const targetFoodCostPercentage = 0.25;
    this.suggestedPrice = this.totalCost / targetFoodCostPercentage;
  }
  getFoodCostPercentage() {
    const sellingPrice = this.foodCostForm.get("sellingPrice")?.value || 0;
    return sellingPrice > 0 ? this.totalCost / sellingPrice * 100 : 0;
  }
  getIngredientCost(ingredientId, quantity) {
    const ingredient = this.ingredients.find((ing) => ing.id === ingredientId);
    if (!ingredient)
      return 0;
    return this.calculateIngredientCost(ingredient, quantity);
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.canSave()) {
        this.markFormGroupTouched(this.foodCostForm);
        alert("Compila tutti i campi obbligatori prima di salvare.");
        return;
      }
      try {
        this.mode === "dish" ? yield this.saveDish() : yield this.saveIngredient();
      } catch (error) {
        console.error("\u274C Errore salvataggio:", error);
        alert("Errore durante il salvataggio: " + error.message);
      }
    });
  }
  saveDish() {
    return __async(this, null, function* () {
      console.log("\u{1F4BE} saveDish chiamato - Contesto:", {
        returnToMenuBuilder: this.returnToMenuBuilder,
        sourceMenuId: this.sourceMenuId
      });
      const formData = this.foodCostForm.value;
      const ingredientsComposition = [];
      this.ingredientsArray.controls.forEach((control) => {
        const ingredientId = control.get("ingredient_id")?.value;
        const quantity = control.get("quantity")?.value || 0;
        if (ingredientId && quantity > 0) {
          const ingredient = this.ingredients.find((ing) => ing.id === ingredientId);
          if (ingredient) {
            const cost = this.calculateIngredientCost(ingredient, quantity);
            const unitSymbol = this.getQuantityUnitLabel(ingredientId);
            ingredientsComposition.push({
              ingredient_id: ingredientId,
              quantity,
              cost,
              unit_symbol: unitSymbol
            });
          }
        }
      });
      const dishData = {
        name: formData.name,
        base_price: formData.sellingPrice,
        food_cost: this.totalCost,
        ingredients_composition: ingredientsComposition,
        delivery_price: formData.sellingPrice,
        takeaway_price: formData.sellingPrice,
        status: "available",
        description: formData.description || "",
        preparation_time: formData.preparation_time || 0,
        category_id: formData.category_id,
        allergens: this.selectedAllergens.length > 0 ? this.selectedAllergens : []
      };
      try {
        if (this.isEditing && this.currentDish) {
          const updateData = {
            name: formData.name,
            base_price: formData.sellingPrice,
            food_cost: this.totalCost,
            ingredients_composition: ingredientsComposition,
            delivery_price: formData.sellingPrice,
            takeaway_price: formData.sellingPrice,
            status: "available",
            description: formData.description || "",
            preparation_time: formData.preparation_time || 0,
            category_id: formData.category_id,
            allergens: this.selectedAllergens.length > 0 ? this.selectedAllergens : []
          };
          yield this.dishService.updateDish(this.currentDish.id, updateData);
          if (this.dishImageFile) {
            this.isUploadingImage = true;
            const imageUrl = yield this.dishService.uploadDishImage(this.currentDish.id, this.dishImageFile);
            this.isUploadingImage = false;
            if (!imageUrl) {
              console.warn("\u26A0\uFE0F Piatto aggiornato ma upload immagine fallito");
            }
          }
          alert("Piatto aggiornato con successo!");
          if (this.returnToMenuBuilder) {
            this.router.navigate(["/restaurant/menu"]);
          }
        } else {
          const result = yield this.dishService.createDish(dishData);
          if (result) {
            console.log("\u2705 Piatto creato:", result.id, result.name);
            if (this.dishImageFile) {
              this.isUploadingImage = true;
              const imageUrl = yield this.dishService.uploadDishImage(result.id, this.dishImageFile);
              this.isUploadingImage = false;
              if (!imageUrl) {
                console.warn("\u26A0\uFE0F Piatto creato ma upload immagine fallito");
              }
            }
            if (this.sourceMenuId && this.returnToMenuBuilder) {
              console.log("\u{1F3AF} Aggiungo piatto al menu:", this.sourceMenuId);
              try {
                const menuDishResult = yield this.menuDishService.addDishToMenu(this.sourceMenuId, result.id, dishData.category_id || null, 0);
                if (!menuDishResult) {
                  console.error("\u274C menuDishResult \xE8 null - il piatto non \xE8 stato aggiunto al menu");
                }
              } catch (error) {
                console.error("\u274C Errore nell'aggiunta al menu:", error);
                alert("Il piatto \xE8 stato creato ma c'\xE8 stato un problema nell'aggiunta al menu: " + error.message);
              }
            } else {
            }
            alert("Piatto creato con successo!");
            if (this.returnToMenuBuilder) {
              this.router.navigate(["/restaurant/menu"]);
            } else {
              this.resetForm();
            }
          } else {
            alert("Errore nella creazione del piatto");
          }
        }
      } catch (error) {
        console.error("\u274C Errore nel salvataggio:", error);
        this.isUploadingImage = false;
        alert("Errore nel salvataggio del piatto");
      }
    });
  }
  saveIngredient() {
    return __async(this, null, function* () {
      const formData = this.foodCostForm.value;
      try {
        const yieldQuantity = formData.yield_quantity || 1;
        const costPerUnit = this.totalCost / yieldQuantity;
        const ingredientData = {
          name: formData.name,
          description: formData.description || "",
          unit_id: formData.unit_id,
          current_stock: 0,
          minimum_stock: 0,
          cost_per_unit: costPerUnit,
          // Usa il costo calcolato
          alert_enabled: false,
          to_buy: formData.to_buy || false,
          to_buy_quantity: formData.to_buy_quantity || null,
          is_active: true,
          // Altri campi opzionali
          expiry_date: void 0,
          supplier_id: void 0,
          type_id: void 0,
          group_id: void 0
        };
        const result = yield this.ingredientService.createIngredient(ingredientData);
        if (result) {
          alert("Ingrediente composto creato con successo!");
          if (this.fromInventory) {
            this.router.navigate(["/restaurant/inventory"]);
          } else {
            this.resetForm();
          }
        } else {
          alert("Errore nella creazione dell'ingrediente");
        }
      } catch (error) {
        console.error("Errore nella creazione dell'ingrediente:", error);
        alert("Errore nella creazione dell'ingrediente");
      }
    });
  }
  resetForm() {
    this.foodCostForm.reset();
    while (this.ingredientsArray.length) {
      this.ingredientsArray.removeAt(0);
    }
    this.addIngredient();
    this.totalCost = 0;
    this.suggestedPrice = 0;
    this.totalWeightGrams = 0;
    this.yieldManual = false;
    if (this.mode === "dish") {
      const defaultCategory = this.categories.find((cat) => cat.is_default) || this.categories[0];
      if (defaultCategory) {
        this.foodCostForm.patchValue({
          category_id: defaultCategory.id
        });
      }
    } else {
      this.foodCostForm.patchValue({
        unit_id: this.getDefaultUnitId(),
        yield_quantity: 1,
        to_buy: false,
        to_buy_quantity: null
      });
    }
    this.dishImagePreview = null;
    this.dishImageFile = null;
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
  getQuantityUnitLabel(ingredientId) {
    const ingredient = this.ingredients.find((ing) => ing.id === ingredientId);
    if (!ingredient || !ingredient.unit_id || !ingredient.units) {
      return "pz";
    }
    const unit = ingredient.units;
    switch (unit.symbol) {
      case "kg":
        return "g";
      case "L":
        return "mL";
      case "g":
      case "mL":
      case "pz":
      default:
        return unit.symbol;
    }
  }
  canSave() {
    const name = this.foodCostForm.get("name")?.value?.trim();
    if (!name)
      return false;
    const hasValidIngredient = this.ingredientsArray.controls.some((ctrl) => !!ctrl.get("ingredient_id")?.value && Number(ctrl.get("quantity")?.value) > 0);
    if (!hasValidIngredient)
      return false;
    if (this.mode === "dish") {
      const price = Number(this.foodCostForm.get("sellingPrice")?.value);
      return !isNaN(price) && price > 0;
    }
    const unitId = this.foodCostForm.get("unit_id")?.value;
    const yieldQty = Number(this.foodCostForm.get("yield_quantity")?.value);
    return !!unitId && !isNaN(yieldQty) && yieldQty > 0;
  }
  onIngredientSearch(event, index) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm) {
      const filteredIngredients = this.ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(searchTerm) || ingredient.description?.toLowerCase().includes(searchTerm));
    }
  }
  onIngredientSelected(event, index) {
    const ingredientName = event.target.value;
    const ingredient = this.ingredients.find((ing) => ing.name === ingredientName);
    if (ingredient) {
      this.ingredientsArray.at(index).patchValue({
        ingredient_id: ingredient.id
      }, { emitEvent: false });
      this.manualCalculateCost();
    } else {
      this.ingredientsArray.at(index).patchValue({
        ingredient_id: ""
      }, { emitEvent: false });
      this.manualCalculateCost();
    }
  }
  getIngredientName(ingredientId) {
    if (!ingredientId)
      return "";
    const ingredient = this.ingredients.find((ing) => ing.id === ingredientId);
    return ingredient ? ingredient.name : "";
  }
  toggleNewCategoryForm() {
    this.showNewCategoryForm = !this.showNewCategoryForm;
    if (!this.showNewCategoryForm) {
      this.newCategoryForm.reset();
    }
  }
  onCreateCategory() {
    return __async(this, null, function* () {
      if (this.newCategoryForm.invalid)
        return;
      this.isCreatingCategory = true;
      try {
        const formValue = this.newCategoryForm.value;
        let orderIndex = formValue.order_index;
        if (orderIndex === void 0 || orderIndex === null || orderIndex < 1) {
          const maxOrderIndex = this.categories.length > 0 ? Math.max(...this.categories.map((c) => c.order_index || 1)) : 0;
          orderIndex = maxOrderIndex + 1;
        }
        const newCategory = yield this.categoryService.createCategory({
          name: formValue.name,
          description: formValue.description,
          is_default: formValue.is_default,
          order_index: orderIndex
          // Ora il servizio lo accetta
        });
        if (newCategory) {
          yield this.loadCategories();
          this.foodCostForm.patchValue({
            category_id: newCategory.id
          });
          if (!this.showNewCategoryForm && this.categoriesForSorting.length > 0) {
            yield this.openCategoryOrderModal();
          }
          this.toggleNewCategoryForm();
        } else {
          console.error("\u274C Errore: categoria non creata");
          alert("Impossibile creare la categoria. Controlla i permessi o riprova.");
        }
      } catch (error) {
        console.error("\u{1F4A5} Errore durante creazione categoria:", error);
        alert(`Errore: ${error.message || "Errore sconosciuto"}`);
      } finally {
        this.isCreatingCategory = false;
      }
    });
  }
  // Filtra solo le unità kg, g e pz
  get filteredUnits() {
    return this.units.filter((unit) => unit.symbol === "kg" || unit.symbol === "g" || unit.symbol === "L" || unit.symbol === "mL" || unit.symbol === "pz");
  }
  loadCategories() {
    return __async(this, null, function* () {
      try {
        yield this.categoryService.loadData();
      } catch (error) {
        console.error("\u274C Errore caricamento categorie:", error);
      }
    });
  }
  getUnitSymbol(unitId) {
    const unit = this.units.find((u) => u.id === unitId);
    return unit ? unit.symbol : "";
  }
  // Metodo semplice per forzare la visualizzazione del datalist
  showDatalist(inputElement) {
    setTimeout(() => {
      inputElement.click();
    }, 100);
  }
  onIngredientInputSimple(event, index, inputElement) {
    const searchTerm = event.target.value;
    const ingredient = this.ingredients.find((ing) => ing.name === searchTerm);
    if (ingredient) {
      this.ingredientsArray.at(index).patchValue({
        ingredient_id: ingredient.id
      }, { emitEvent: false });
      this.manualCalculateCost();
    }
    inputElement.focus();
  }
  // Metodo per aprire il modal di ordinamento
  openCategoryOrderModal() {
    return __async(this, null, function* () {
      try {
        const categories = yield this.categoryService.getCategoryOrderList();
        this.categoriesForSorting = [...categories].sort((a, b) => (a.order_index || 1) - (b.order_index || 1)).map((cat, index) => {
          const orderIndex = cat.order_index && cat.order_index > 0 ? cat.order_index : index + 1;
          return __spreadProps(__spreadValues({}, cat), {
            order_index: orderIndex
          });
        });
        this.normalizeOrderIndices();
        console.log("\u2705 Categorie pronte per ordinamento (da 1):", this.categoriesForSorting.map((c) => ({ name: c.name, order: c.order_index })));
        this.showCategoryOrderModal = true;
      } catch (error) {
        console.error("\u274C Errore apertura modal ordinamento:", error);
        alert("Errore nel caricamento delle categorie");
      }
    });
  }
  // Metodo per chiudere
  closeCategoryOrderModal() {
    this.showCategoryOrderModal = false;
    this.categoriesForSorting = [];
  }
  // Metodo per salvare l'ordine
  saveCategoryOrder() {
    return __async(this, null, function* () {
      try {
        this.isSavingOrder = true;
        console.log("\u{1F4BE} Salvataggio ordine categorie (da 1):", this.categoriesForSorting.map((c) => ({ id: c.id, order_index: c.order_index })));
        this.categoriesForSorting.forEach((category) => {
          if (category.order_index < 1) {
            category.order_index = 1;
          }
        });
        const updates = this.categoriesForSorting.map((category, index) => ({
          id: category.id,
          order_index: category.order_index
          // Questo è già da 1
        }));
        const success = yield this.categoryService.updateCategoriesOrder(updates);
        if (success) {
          console.log("\u2705 Ordine categorie salvato (da 1)");
          yield this.categoryService.loadData();
          this.categories = this.categoryService.getCategories();
          this.closeCategoryOrderModal();
          alert("Ordine categorie salvato con successo!");
        } else {
          alert("Errore nel salvataggio dell'ordine");
        }
      } catch (error) {
        console.error("\u274C Errore salvataggio ordine:", error);
        alert("Errore durante il salvataggio");
      } finally {
        this.isSavingOrder = false;
      }
    });
  }
  getOrderIndexHint() {
    const currentCategories = this.categories || [];
    const maxOrderIndex = currentCategories.length > 0 ? Math.max(...currentCategories.map((c) => c.order_index || 0)) : 0;
    return `Consiglio: usa ${maxOrderIndex + 1} per posizionare questa categoria alla fine`;
  }
  getSortedCategories() {
    if (!this.categories)
      return [];
    return [...this.categories].sort((a, b) => {
      const orderA = a.order_index || 0;
      const orderB = b.order_index || 0;
      return orderA - orderB;
    });
  }
  // Metodo per gestire il drag & drop
  dropCategory(event) {
    console.log("\u{1F504} Drag & drop eseguito:", {
      from: event.previousIndex,
      to: event.currentIndex
    });
    moveItemInArray(this.categoriesForSorting, event.previousIndex, event.currentIndex);
    this.normalizeOrderIndices();
    console.log("\u2705 Nuovo ordine:", this.categoriesForSorting.map((c) => ({
      name: c.name,
      order: c.order_index
    })));
  }
  validateOrderIndex() {
    this.categoriesForSorting.forEach((category) => {
      if (category.order_index < 1) {
        category.order_index = 1;
      }
      category.order_index = Math.round(category.order_index);
    });
    this.sortCategoriesByOrderIndex();
  }
  openNewCategoryFromOrderModal() {
    console.log("\u{1F4DD} Apertura creazione categoria da modal ordinamento");
    this.showCategoryOrderModal = false;
    this.showNewCategoryForm = true;
    const nextOrderIndex = this.categoriesForSorting.length > 0 ? Math.max(...this.categoriesForSorting.map((c) => c.order_index)) + 1 : 1;
    this.newCategoryForm.patchValue({
      order_index: nextOrderIndex
    });
  }
  // Metodo chiamato quando cambia l'order_index nell'input
  onOrderIndexChange(category, newValue) {
    console.log("\u{1F522} Cambio order index:", category.name, newValue);
    if (newValue < 1) {
      newValue = 1;
    }
    category.order_index = newValue;
    this.sortCategoriesByOrderIndex();
  }
  sortCategoriesByOrderIndex() {
    this.categoriesForSorting.sort((a, b) => {
      const orderA = a.order_index || 1;
      const orderB = b.order_index || 1;
      return orderA - orderB;
    });
    this.normalizeOrderIndices();
  }
  // Metodo per normalizzare gli order_index (1, 2, 3, ... senza buchi)
  normalizeOrderIndices() {
    this.categoriesForSorting.forEach((category, index) => {
      category.order_index = index + 1;
    });
  }
  // === GESTIONE ALLERGENI ===
  toggleAllergenModal() {
    this.showAllergenModal = !this.showAllergenModal;
  }
  isAllergenSelected(allergenId) {
    return this.selectedAllergens.includes(allergenId);
  }
  toggleAllergen(allergenId) {
    const index = this.selectedAllergens.indexOf(allergenId);
    if (index > -1) {
      this.selectedAllergens = this.selectedAllergens.filter((id) => id !== allergenId);
    } else {
      this.selectedAllergens = [...this.selectedAllergens, allergenId].sort((a, b) => a - b);
    }
  }
  clearAllergens() {
    this.selectedAllergens = [];
  }
  getAllergenName(allergenId) {
    return getAllergenById(allergenId)?.name || "Sconosciuto";
  }
  getAllergenIcon(allergenId) {
    return getAllergenById(allergenId)?.icon || "\u26A0\uFE0F";
  }
  ngAfterViewInit() {
    if (this.totalCost > 0) {
      this.updateChart();
    }
  }
  ngOnDestroy() {
    this.chartInstance?.destroy();
  }
  toggleMargin() {
    if (this.mode === "dish") {
      this.showMargin = !this.showMargin;
      this.updateChart();
    }
  }
  /**
   * Prepara i dati per il grafico:
   * - Raggruppa gli ingredienti per ID (somma i costi se uno stesso ingrediente appare più volte)
   * - Se showMargin è true e il prezzo di vendita è maggiore del costo totale, aggiunge una fetta "Margine"
   */
  prepareChartData() {
    const ingredientTotals = /* @__PURE__ */ new Map();
    this.ingredientsArray.controls.forEach((control) => {
      const ingId = control.get("ingredient_id")?.value;
      const cost = control.get("cost")?.value || 0;
      if (ingId && cost > 0) {
        const current = ingredientTotals.get(ingId) || 0;
        ingredientTotals.set(ingId, current + cost);
      }
    });
    const labels = [];
    const data = [];
    ingredientTotals.forEach((cost, ingId) => {
      const ingredient = this.ingredients.find((i) => i.id === ingId);
      labels.push(ingredient ? ingredient.name : "Sconosciuto");
      data.push(cost);
    });
    console.log("\u{1F4CA} prepareChartData - ingredienti con costo:", ingredientTotals.size, "data:", data);
    if (this.showMargin && this.mode === "dish") {
      const sellingPrice = this.foodCostForm.get("sellingPrice")?.value || 0;
      if (sellingPrice > this.totalCost) {
        const margin = sellingPrice - this.totalCost;
        labels.push("Margine");
        data.push(margin);
      }
    }
    const backgroundColor = data.map((_, i) => this.getChartColor(i));
    return { labels, data, backgroundColor };
  }
  getChartColor(index) {
    const defaultColors = [
      "#E63946",
      "#2A9D8F",
      "#E9C46A",
      "#F4A261",
      "#9C89B8",
      "#F08080",
      "#6D597A",
      "#B56576",
      "#56A3A6",
      "#FFB347",
      "#6A4C93",
      "#38A3A5",
      "#FF8C42",
      "#A7C957",
      "#BC6C25"
    ];
    const colorblindColors = [
      "#8DD3C7",
      "#FFFFB3",
      "#BEBADA",
      "#FB8072",
      "#80B1D3",
      "#FDB462",
      "#B3DE69",
      "#FCCDE5",
      "#D9D9D9",
      "#BC80BD",
      "#CCEBC5",
      "#FFED6F"
    ];
    const palette = this.colorPalette === "default" ? defaultColors : colorblindColors;
    return palette[index % palette.length];
  }
  toggleColorPalette() {
    this.colorPalette = this.colorPalette === "default" ? "colorblind" : "default";
    this.updateChart();
  }
  createChart() {
    console.log("createChart() called, canvas:", this.costChartCanvasElement?.nativeElement);
    if (!this.costChartCanvasElement)
      return;
    const ctx = this.costChartCanvasElement.nativeElement.getContext("2d");
    if (!ctx)
      return;
    const { labels, data, backgroundColor } = this.prepareChartData();
    console.log("\u{1F4CA} Chart data:", { labels, data });
    const config = {
      type: "pie",
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.raw;
                const total = this.getTotalForPercentage();
                const percentage = total > 0 ? (value / total * 100).toFixed(1) : "0";
                return `${context.label}: ${value.toFixed(2)} \u20AC (${percentage}%)`;
              }
            }
          }
        }
      }
    };
    this.chartInstance = new Chart(ctx, config);
  }
  updateChart() {
    if (!this.costChartCanvasElement)
      return;
    if (!this.chartInstance) {
      this.createChart();
    } else {
      const { labels, data, backgroundColor } = this.prepareChartData();
      this.chartInstance.data.labels = labels;
      this.chartInstance.data.datasets[0].data = data;
      this.chartInstance.data.datasets[0].backgroundColor = backgroundColor;
      this.chartInstance.update();
    }
  }
  /**
   * Restituisce il totale da usare per il calcolo delle percentuali nel tooltip.
   * Se è attivo il margine, usa il prezzo di vendita (se maggiore del costo), altrimenti il costo totale.
   */
  getTotalForPercentage() {
    if (this.showMargin && this.mode === "dish") {
      const sellingPrice = this.foodCostForm.get("sellingPrice")?.value;
      return sellingPrice && sellingPrice > this.totalCost ? sellingPrice : this.totalCost;
    }
    return this.totalCost;
  }
  // IMMAGINI DEI PIATTI
  onDishImageSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      alert("Seleziona un file immagine valido");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("L'immagine non pu\xF2 superare 5MB");
      return;
    }
    this.dishImageFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.dishImagePreview = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
  removeDishImage() {
    this.dishImagePreview = null;
    this.dishImageFile = null;
    if (this.isEditing && this.currentDish) {
      this.dishService.updateDish(this.currentDish.id, { image_url: null });
      this.dishService.updateDish(this.currentDish.id, { image_url: null }).catch((err) => console.error("\u274C Errore rimozione immagine:", err));
    }
  }
  get isPhotoOnlyMode() {
    return this.authService.hasPermission("manage_dish_photos") && !this.authService.hasPermission("manage_menu");
  }
  static \u0275fac = function FoodCostCalculator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodCostCalculator)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoodCostCalculator, selectors: [["app-food-cost-calculator"]], viewQuery: function FoodCostCalculator_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.costChartCanvas = _t.first);
    }
  }, inputs: { dishId: "dishId" }, decls: 70, vars: 29, consts: [["ingredientInput", ""], ["costChart", ""], [1, "page-container"], [1, "flex", "flex-col", "gap-lg"], [1, "form-card"], [1, "flex", "flex-col", 3, "ngSubmit", "formGroup"], ["data-tutorial", "foodcost-info"], [1, "form-row", "mb-md"], [1, "form-group"], ["for", "name", 1, "standard-label"], ["name", "utensils"], ["id", "name", "formControlName", "name", "type", "text", 3, "placeholder"], ["class", "form-group", 4, "ngIf"], ["class", "flex flex-col m-sm01", 4, "ngIf"], ["class", "flex flex-col w-100 p-sm", 4, "ngIf"], ["class", "form-row mb-md", 4, "ngIf"], [1, "form-row", "mb-lg"], ["for", "description", 1, "standard-label"], ["name", "file-text"], ["id", "description", "formControlName", "description", "rows", "3", 3, "placeholder"], ["class", "flex flex-col gap-sm", 4, "ngIf"], [1, "gap-md", "p-md", "mb-sm"], [1, "flex", "flex-wrap", "gap-sm", "items-center"], ["name", "list"], [1, "text-md", "m-0"], [1, "chip"], ["data-tutorial", "foodcost-ingredients", 1, "table-section"], [1, "crm-table"], ["formArrayName", "ingredients"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "modal-footer", "p-md0"], ["type", "button", "class", "promethea-button", 3, "click", 4, "ngIf"], ["class", "mt-lg", 4, "ngIf"], ["data-tutorial", "foodcost-grafico", "class", "text-muted p-md mt-sm mb-sm rounded-xl bg-smoke ", 4, "ngIf"], [1, "mt-lg", "mb-lg"], [1, "flex", "gap-sm", "p-md"], ["name", "bar-chart"], ["data-tutorial", "foodcost-summary", 1, "grid-cards", "costs-grid"], [1, "cost-item"], [1, "cost-value"], [1, "cost-label", "text-muted"], ["class", "cost-item", 4, "ngIf"], ["type", "submit", "class", "promethea-button", 3, "disabled", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["for", "category_id", 1, "standard-label"], ["name", "tags"], [1, "flex", "gap-sm", "items-center"], ["id", "category_id", "formControlName", "category_id", 1, "flex-1"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "gap-sm"], ["type", "button", "title", "Aggiungi nuova categoria", 1, "icon-button", 3, "click"], ["name", "plus", 3, "size"], ["type", "button", "title", "Ordina categorie", 1, "icon-button", 3, "click", "disabled"], ["name", "arrow-up-down"], ["class", "mt-sm text-mini text-muted", 4, "ngIf"], [3, "value"], [4, "ngIf"], [1, "text-muted"], [1, "mt-sm", "text-mini", "text-muted"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "m-sm01"], [1, "standard-label"], ["name", "alert-triangle"], ["type", "button", 1, "promethea-button", "ghost", 3, "click"], [1, "material-icons"], [1, "flex", "flex-col", "w-100", "p-sm"], [1, "standard-label", "text-md"], ["name", "alert-triangle", 3, "size"], [1, "flex", "gap-sm", "flex-wrap"], ["class", "chip flex items-center gap-sm", 4, "ngFor", "ngForOf"], [1, "chip", "flex", "items-center", "gap-sm"], [3, "name", "size"], ["for", "unit_id", 1, "standard-label"], ["name", "ruler"], ["id", "unit_id", "formControlName", "unit_id", 1, "flex-1", 3, "change"], ["class", "text-red-500 text-sm", 4, "ngIf"], [1, "text-red-500", "text-sm"], ["for", "preparation_time", 1, "standard-label"], ["name", "timer"], ["id", "preparation_time", "formControlName", "preparation_time", "type", "number", "min", "0", "placeholder", "0"], ["for", "sellingPrice", 1, "standard-label"], ["name", "euro"], ["id", "sellingPrice", "formControlName", "sellingPrice", "type", "number", "step", "0.01", "min", "0", "placeholder", "0.00", 3, "change"], ["for", "yield_quantity", 1, "standard-label"], ["name", "hash"], ["id", "yield_quantity", "formControlName", "yield_quantity", "type", "number", "step", "0.001", "min", "0.001", "placeholder", "0", 3, "change"], ["class", "text-muted", 4, "ngIf"], ["class", "text-xs text-blue-600 mt-1", 4, "ngIf"], ["for", "cost_per_unit", 1, "standard-label"], ["id", "cost_per_unit", "formControlName", "cost_per_unit", "type", "number", "step", "0.001", "min", "0", "readonly", "", 1, "bg-gray-100"], [1, "text-xs", "text-blue-600", "mt-1"], [1, "flex", "flex-col", "gap-sm"], [1, "font-semibold", "text-mini", 2, "letter-spacing", "0.08em", "text-transform", "uppercase"], ["class", "dish-img-upload-preview", 4, "ngIf"], ["class", "dish-img-dropzone flex flex-col items-center justify-center gap-sm", "for", "dishImageInput", 4, "ngIf"], ["id", "dishImageInput", "type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["class", "flex items-center gap-sm text-mini text-muted", 4, "ngIf"], [1, "dish-img-upload-preview"], ["alt", "Anteprima piatto", 1, "dish-img-thumb", 3, "src"], ["type", "button", "title", "Rimuovi immagine", 1, "icon-button", 3, "click"], ["name", "x", 3, "size"], ["for", "dishImageInput", 1, "dish-img-dropzone", "flex", "flex-col", "items-center", "justify-center", "gap-sm"], ["name", "image-plus", 2, "color", "var(--primary)", 3, "size"], [1, "text-mini", "text-muted"], [1, "flex", "items-center", "gap-sm", "text-mini", "text-muted"], ["name", "loader", 2, "animation", "spin 1s linear infinite", 3, "size"], [3, "formGroupName"], ["list", "ingredientsList", "placeholder", "Cerca ingrediente...", 3, "input", "focus", "value"], ["id", "ingredientsList"], [1, "flex", "items-center", "gap-sm"], ["formControlName", "quantity", "type", "number", "step", "0.001", "min", "0", "placeholder", "0", 3, "change"], ["class", "text-muted text-mini", 4, "ngIf"], [1, "font-semibold"], ["type", "button", "class", "icon-button x-small", 3, "click", 4, "ngIf"], [1, "text-muted", "text-mini"], ["type", "button", 1, "icon-button", "x-small", 3, "click"], ["name", "trash-2", 3, "size"], ["type", "button", 1, "promethea-button", 3, "click"], [1, "mt-lg"], ["data-tutorial", "foodcost-grafico", 1, "flex", "items-center", "justify-between", "mb-sm"], [1, "text-md", "font-semibold"], ["type", "button", "class", "promethea-button ghost x-small", 3, "click", 4, "ngIf"], ["type", "button", 1, "promethea-button", "ghost", "x-small", 3, "click", "title"], [3, "name"], [1, "chart-container"], ["type", "button", 1, "promethea-button", "ghost", "x-small", 3, "click"], ["data-tutorial", "foodcost-grafico", 1, "text-muted", "p-md", "mt-sm", "mb-sm", "rounded-xl", "bg-smoke"], [1, "cost-label"], ["type", "submit", 1, "promethea-button", 3, "disabled"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-lg", 3, "click"], [1, "modal-header"], [1, "flex"], [1, "header-icon"], ["name", "plus-circle"], [1, "section-title"], ["type", "button", 1, "icon-button", 3, "click"], ["name", "x"], [1, "modal-content"], [1, "form-card", 3, "formGroup"], ["for", "newCategoryName", 1, "standard-label"], ["id", "newCategoryName", "formControlName", "name", "type", "text", "placeholder", "Inserisci il nome della categoria", "autofocus", ""], ["for", "newCategoryOrderIndex", 1, "standard-label"], ["id", "newCategoryOrderIndex", "formControlName", "order_index", "type", "number", "min", "0", "step", "1", "placeholder", "Es: 0, 1, 2, 3...", 3, "title"], [1, "text-muted", "text-sm"], ["for", "newCategoryDescription", 1, "standard-label"], ["id", "newCategoryDescription", "formControlName", "description", "rows", "3", "placeholder", "Descrizione della categoria (opzionale)"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "is_default"], [1, "checkbox-content"], ["class", "mt-lg p-sm bg-smoke rounded", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "promethea-button", "ghost", 3, "click", "disabled"], ["type", "button", 1, "promethea-button", 3, "click", "disabled"], [1, "mt-lg", "p-sm", "bg-smoke", "rounded"], [1, "text-mini", "font-semibold", "mb-sm"], ["class", "text-mini flex gap-sm", 4, "ngFor", "ngForOf"], [1, "text-mini", "flex", "gap-sm"], [1, "chip", "x-small"], [1, "modal-container", "modal-md", 3, "click"], [1, "mb-md"], [1, "text-muted", "mb-sm"], ["cdkDropList", "", 1, "flex", "flex-col", "gap-sm", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "category-drag-item flex justify-between items-center p-sm rounded bg-smoke border transition hover-lift", 4, "ngFor", "ngForOf"], [1, "info-message"], ["name", "info"], ["name", "grip-vertical"], ["type", "button", "title", "Crea nuova categoria", 1, "promethea-button", 3, "click"], ["cdkDrag", "", 1, "category-drag-item", "flex", "justify-between", "items-center", "p-sm", "rounded", "bg-smoke", "border", "transition", "hover-lift"], [1, "flex", "items-center", "gap-md", "flex-1", "min-w-0"], ["cdkDragHandle", "", 1, "material-icons", "text-muted", 2, "cursor", "move"], [1, "flex", "flex-col", "min-w-0"], [1, "font-semibold", "truncate"], ["class", "text-mini text-muted truncate", 4, "ngIf"], [1, "flex", "items-center", "gap-sm", "flex-shrink-0"], [1, "flex", "flex-col", "items-end", "gap-sm"], ["type", "number", "min", "1", "step", "1", "title", "Numero posizione (1 = primo)", 1, "p-sm", "border", "rounded", 2, "width", "70px", "text-align", "center", 3, "ngModelChange", "ngModel"], [1, "text-mini", "text-muted", "truncate"], [1, "info-message", "mb-md"], [1, "flex-col", "flex", "gap-sm"], [1, "grid-cards", "mb-md"], ["class", "checkbox-label transition hover-lift", "style", "border-radius: 12px; width: 100%;", 3, "bg-smoke", "border", 4, "ngFor", "ngForOf"], ["class", "bg-smoke rounded p-md", 4, "ngIf"], ["name", "list-x"], ["name", "check"], [1, "checkbox-label", "transition", "hover-lift", 2, "border-radius", "12px", "width", "100%"], ["type", "checkbox", 3, "change", "checked"], [1, "flex", "items-center", "gap-sm", 2, "flex", "1"], [1, "transition", 3, "name", "size"], [1, "flex", "flex-col", 2, "gap", "0.125rem"], [1, "bg-smoke", "rounded", "p-md"], [1, "flex", "items-center", "gap-sm", "mb-md"], ["name", "alert-triangle", 1, "text-primary", 3, "size"], [1, "text-mini", "font-semibold"], [1, "flex", "flex-wrap", "gap-sm"]], template: function FoodCostCalculator_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function FoodCostCalculator_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "label", 9);
      \u0275\u0275element(8, "lucide-angular", 10);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, FoodCostCalculator_div_11_Template, 15, 4, "div", 12)(12, FoodCostCalculator_div_12_Template, 8, 2, "div", 13)(13, FoodCostCalculator_div_13_Template, 6, 2, "div", 14)(14, FoodCostCalculator_div_14_Template, 9, 2, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, FoodCostCalculator_div_15_Template, 11, 0, "div", 15)(16, FoodCostCalculator_div_16_Template, 14, 4, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 16)(18, "label", 17);
      \u0275\u0275element(19, "lucide-angular", 18);
      \u0275\u0275text(20, " Descrizione ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "textarea", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, FoodCostCalculator_div_22_Template, 7, 3, "div", 20);
      \u0275\u0275elementStart(23, "div", 21)(24, "div", 22);
      \u0275\u0275element(25, "lucide-angular", 23);
      \u0275\u0275elementStart(26, "h2", 24);
      \u0275\u0275text(27, "Ingredienti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 25);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 26)(31, "table", 27)(32, "thead")(33, "tr")(34, "th");
      \u0275\u0275text(35, "Ingrediente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Quantit\xE0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Costo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Azioni");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "tbody", 28);
      \u0275\u0275template(43, FoodCostCalculator_tr_43_Template, 15, 9, "tr", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 30);
      \u0275\u0275template(45, FoodCostCalculator_button_45_Template, 3, 1, "button", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, FoodCostCalculator_div_46_Template, 11, 3, "div", 32)(47, FoodCostCalculator_div_47_Template, 2, 0, "div", 33);
      \u0275\u0275elementStart(48, "div", 34)(49, "div", 35);
      \u0275\u0275element(50, "lucide-angular", 36);
      \u0275\u0275elementStart(51, "h2", 24);
      \u0275\u0275text(52, "Riepilogo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 37)(54, "div", 38)(55, "div", 39);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 40);
      \u0275\u0275text(59, "Costo Totale");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(60, FoodCostCalculator_div_60_Template, 6, 8, "div", 41)(61, FoodCostCalculator_div_61_Template, 6, 4, "div", 41)(62, FoodCostCalculator_div_62_Template, 6, 4, "div", 41)(63, FoodCostCalculator_div_63_Template, 6, 5, "div", 41)(64, FoodCostCalculator_div_64_Template, 6, 5, "div", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 30);
      \u0275\u0275template(66, FoodCostCalculator_button_66_Template, 3, 3, "button", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(67, FoodCostCalculator_div_67_Template, 46, 8, "div", 43)(68, FoodCostCalculator_div_68_Template, 43, 6, "div", 43)(69, FoodCostCalculator_div_69_Template, 32, 3, "div", 43);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.foodCostForm);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "ingredient" ? "Nome Ingrediente *" : "Nome Piatto *", " ");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.mode === "ingredient" ? "Inserisci il nome dell'ingrediente" : "Inserisci il nome del piatto");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "dish");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "dish");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedAllergens.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "ingredient");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "dish");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "ingredient");
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", ctx.mode === "ingredient" ? "Descrizione dell'ingrediente (opzionale)" : "Descrizione del piatto (opzionale)");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "dish");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.ingredientsArray.length, " ingredienti");
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.ingredientsArray.controls);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isPhotoOnlyMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.ingredientsArray.length > 0 && ctx.totalCost > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.ingredientsArray.length === 0 || ctx.totalCost === 0);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(57, 26, ctx.totalCost, "1.2-2"), "");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.mode === "dish");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "dish");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "dish");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "ingredient");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "ingredient");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isPhotoOnlyMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNewCategoryForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCategoryOrderModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAllergenModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, FormsModule, NgModel, DragDropModule, CdkDropList, CdkDrag, CdkDragHandle, LucideAngularModule, LucideAngularComponent], styles: ["\n\n.ingredients-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: var(--gap-md);\n}\n.ingredients-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.ingredients-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.ingredient-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  align-items: center;\n  border-bottom: 1px solid var(--smoke-1);\n  transition: all 0.2s ease;\n}\n.ingredient-row[_ngcontent-%COMP%]:hover {\n  background: var(--smoke-1);\n}\n.ingredient-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ingredient-col[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.quantity-col[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.cost-col[_ngcontent-%COMP%] {\n  min-width: 80px;\n  font-weight: 600;\n  text-align: center;\n}\n.costs-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;\n}\n.cost-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--gap-md);\n  background: var(--background);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.cost-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--secondary);\n  transform: translateY(-2px);\n}\n.cost-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  margin-bottom: var(--gap-sm);\n}\n.cost-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.searchable-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media (max-width: 768px) {\n  .ingredients-header[_ngcontent-%COMP%], \n   .ingredient-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--gap-sm);\n  }\n  .ingredients-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ingredient-row[_ngcontent-%COMP%] {\n    padding: var(--gap-md);\n    border: 1px solid var(--smoke-1);\n    border-radius: 8px;\n    margin-bottom: var(--gap-sm);\n  }\n  .costs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .costs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.category-drag-list[_ngcontent-%COMP%] {\n  min-height: 20px;\n}\n.category-drag-item[_ngcontent-%COMP%] {\n  cursor: move;\n  margin-bottom: var(--gap-sm);\n}\n.category-drag-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  background: var(--background);\n  border: 2px solid var(--primary);\n  opacity: 0.9;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  background: var(--shadow-3);\n  border: 2px dashed var(--primary);\n  border-radius: 12px;\n  opacity: 0.5;\n  min-height: 64px;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.category-drag-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-drag-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), \n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 50%;\n}\n.crm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n.crm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 20%;\n}\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  margin: 0 auto;\n  padding: 0;\n  background: var(--background2);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px var(--smoke-1);\n  overflow: hidden;\n}\n.chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--gap-sm);\n  width: 100% !important;\n  height: 100% !important;\n}\n@media (max-width: 768px) {\n  .chart-container[_ngcontent-%COMP%] {\n    height: 200px;\n    max-width: 100%;\n  }\n}\n.dish-img-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed color-mix(in srgb, var(--primary) 40%, transparent);\n  border-radius: var(--gap-sm);\n  padding: var(--gap-lg);\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.dish-img-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--smoke-2);\n}\n.dish-img-upload-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: fit-content;\n}\n.dish-img-thumb[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: var(--gap-sm);\n  border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n}\n.dish-img-upload-preview[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: var(--secondary);\n  color: white;\n  border-radius: 999px;\n  width: 24px;\n  height: 24px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=foodcost-calculator.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoodCostCalculator, [{
    type: Component,
    args: [{ selector: "app-food-cost-calculator", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, DragDropModule, LucideAngularModule], template: `<div class="page-container">\r
  \r
  <div class="flex flex-col gap-lg">\r
    <!-- Form principale -->\r
    <div class="form-card" >\r
      <form [formGroup]="foodCostForm" (ngSubmit)="onSubmit()" class="flex flex-col">\r
        <div data-tutorial="foodcost-info">\r
        <!-- Nome e Categoria/Unit\xE0 -->\r
        <div class="form-row mb-md" >\r
          <!-- Nome -->\r
          <div class="form-group">\r
            <label for="name" class="standard-label">\r
              <lucide-angular name="utensils"></lucide-angular>\r
              {{ mode === 'ingredient' ? 'Nome Ingrediente *' : 'Nome Piatto *' }}\r
            </label>\r
            <input\r
              id="name"\r
              formControlName="name"\r
              type="text"\r
              [placeholder]="mode === 'ingredient' ? 'Inserisci il nome dell\\'ingrediente' : 'Inserisci il nome del piatto'">\r
          </div>\r
          <!-- Categoria (solo per piatto) -->\r
          <div *ngIf="mode === 'dish'" class="form-group">\r
            <label for="category_id" class="standard-label">\r
              <lucide-angular name="tags"></lucide-angular>\r
              Categoria\r
            </label>\r
            \r
            <div class="flex gap-sm items-center">\r
              <select\r
                id="category_id"\r
                formControlName="category_id"\r
                class="flex-1">\r
                <option value="">Seleziona una categoria</option>\r
                <option *ngFor="let category of categories" [value]="category.id">\r
                  {{ category.name }}\r
                  <span *ngIf="category.is_default">(Predefinita)</span>\r
                  <span class="text-muted"> - Posizione {{ category.order_index || 0 }}</span>\r
                </option>\r
              </select>\r
              \r
              <!-- Bottoni per gestione categorie -->\r
              <div class="flex gap-sm">\r
                <button type="button" class="icon-button" (click)="toggleNewCategoryForm()" \r
                        title="Aggiungi nuova categoria">\r
                  <lucide-angular name="plus" [size]="20"></lucide-angular>\r
                </button>\r
                <button type="button" class="icon-button" (click)="openCategoryOrderModal()" \r
                        title="Ordina categorie"\r
                        [disabled]="!categories || categories.length === 0">\r
                  <lucide-angular name="arrow-up-down"></lucide-angular>\r
                </button>\r
              </div>\r
            </div>\r
            \r
            <!-- Info ordine categorie -->\r
            <div class="mt-sm text-mini text-muted" *ngIf="categories && categories.length > 0">\r
              <span *ngIf="getSortedCategories().length > 0">\r
                Ordine attuale: \r
                <span *ngFor="let cat of getSortedCategories(); let last = last">\r
                  {{ cat.name }}<span *ngIf="!last">, </span>\r
                </span>\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Allergeni (solo per piatto) -->\r
          <div *ngIf="mode === 'dish'" class="flex flex-col m-sm01">\r
            <label class="standard-label">\r
              <lucide-angular name="alert-triangle"></lucide-angular>\r
              Allergeni\r
            </label>\r
            <button type="button" \r
                    class="promethea-button ghost" \r
                    (click)="toggleAllergenModal()">\r
              <span class="material-icons">{{ selectedAllergens.length > 0 ? 'edit' : 'add' }}</span>\r
              {{ selectedAllergens.length > 0 \r
                ? selectedAllergens.length + ' allergeni selezionati' \r
                : 'Aggiungi allergeni' }}\r
            </button>\r
          </div>\r
\r
          <!-- Chips allergeni selezionati -->\r
          <div *ngIf="selectedAllergens.length > 0" class="flex flex-col w-100 p-sm">\r
            <label class="standard-label text-md">\r
              <lucide-angular name="alert-triangle" [size]="20"></lucide-angular>\r
              Lista Allergeni\r
            </label>\r
            <div class="flex gap-sm flex-wrap">\r
              <div *ngFor="let allergenId of selectedAllergens" \r
                  class="chip flex items-center gap-sm">\r
                <lucide-angular \r
                  [name]="getAllergenIcon(allergenId)" \r
                  [size]="16">\r
                </lucide-angular>\r
                <span>{{ getAllergenName(allergenId) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- Unit\xE0 di misura (solo per ingrediente) -->\r
          <div *ngIf="mode === 'ingredient'" class="form-group">\r
            <label for="unit_id" class="standard-label">\r
              <lucide-angular name="ruler"></lucide-angular>\r
              Unit\xE0 di Misura *\r
            </label>\r
            <select\r
              id="unit_id"\r
              formControlName="unit_id"\r
              class="flex-1"\r
              (change)="manualCalculateCost()">\r
              <option value="">Seleziona unit\xE0</option>\r
              <option *ngFor="let unit of filteredUnits" [value]="unit.id">\r
                {{ unit.name }} ({{ unit.symbol }})\r
              </option>\r
            </select>\r
            <div *ngIf="foodCostForm.get('unit_id')?.invalid && foodCostForm.get('unit_id')?.touched" \r
                class="text-red-500 text-sm">\r
              L'unit\xE0 di misura \xE8 obbligatoria\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Tempo di preparazione e Prezzo di vendita (solo per piatto) -->\r
        <div *ngIf="mode === 'dish'" class="form-row mb-md">\r
          <!-- Tempo di preparazione -->\r
          <div class="form-group">\r
            <label for="preparation_time" class="standard-label">\r
              <lucide-angular name="timer"></lucide-angular>\r
              Tempo di Preparazione (minuti)\r
            </label>\r
            <input\r
              id="preparation_time"\r
              formControlName="preparation_time"\r
              type="number"\r
              min="0"\r
              placeholder="0">\r
          </div>\r
\r
          <!-- Prezzo di vendita -->\r
          <div class="form-group">\r
            <label for="sellingPrice" class="standard-label">\r
              <lucide-angular name="euro"></lucide-angular>\r
              Prezzo di Vendita *\r
            </label>\r
            <input\r
              id="sellingPrice"\r
              formControlName="sellingPrice"\r
              type="number"\r
              step="0.01"\r
              min="0"\r
              (change)="manualCalculateCost()"\r
              placeholder="0.00">\r
          </div>\r
        </div>\r
        <!-- Quantit\xE0 prodotta e Costo per unit\xE0 (solo per ingrediente) -->\r
        <div *ngIf="mode === 'ingredient'" class="form-row mb-md">\r
          <!-- Quantit\xE0 prodotta -->\r
          <div class="form-group">\r
            <label for="yield_quantity" class="standard-label">\r
              <lucide-angular name="hash"></lucide-angular>\r
              Quantit\xE0 Prodotta *\r
            </label>\r
            <input\r
              id="yield_quantity"\r
              formControlName="yield_quantity"\r
              type="number"\r
              step="0.001"\r
              min="0.001"\r
              (change)="manualCalculateCost()"\r
              placeholder="0">\r
            <small *ngIf="foodCostForm.get('unit_id')?.value" class="text-muted">\r
              in {{ getUnitSymbol(foodCostForm.get('unit_id')?.value) }}\r
            </small>\r
            <div *ngIf="totalWeightGrams > 0 && foodCostForm.get('unit_id')?.value" class="text-xs text-blue-600 mt-1">\r
              Peso totale ingredienti: {{ totalWeightGrams | number:'1.0-0' }} g\r
              <span *ngIf="getUnitSymbol(foodCostForm.get('unit_id')?.value) === 'kg'">\r
                (\u2248 {{ (totalWeightGrams / 1000) | number:'1.3-3' }} kg)\r
              </span>\r
            </div>\r
            <div *ngIf="foodCostForm.get('yield_quantity')?.invalid && foodCostForm.get('yield_quantity')?.touched" \r
                class="text-red-500 text-sm">\r
              La quantit\xE0 prodotta deve essere maggiore di 0\r
            </div>\r
          </div>\r
\r
          <!-- Costo per unit\xE0 -->\r
          <div class="form-group">\r
            <label for="cost_per_unit" class="standard-label">\r
              <lucide-angular name="euro"></lucide-angular>\r
              Costo per {{ getUnitSymbol(foodCostForm.get('unit_id')?.value) || 'unit\xE0' }}\r
            </label>\r
            <input\r
              id="cost_per_unit"\r
              formControlName="cost_per_unit"\r
              type="number"\r
              step="0.001"\r
              min="0"\r
              readonly\r
              class="bg-gray-100">\r
          </div>\r
        </div>\r
        </div>\r
        <!-- Descrizione -->\r
        <div class="form-row mb-lg">\r
          <label for="description" class="standard-label">\r
            <lucide-angular name="file-text"></lucide-angular>\r
            Descrizione\r
          </label>\r
          <textarea\r
            id="description"\r
            formControlName="description"\r
            rows="3"\r
            [placeholder]="mode === 'ingredient' ? 'Descrizione dell\\'ingrediente (opzionale)' : 'Descrizione del piatto (opzionale)'"></textarea>\r
        </div>\r
        <!-- Upload immagine piatto \u2014 solo in modalit\xE0 dish -->\r
        <div *ngIf="mode === 'dish'" class="flex flex-col gap-sm">\r
          <label class="font-semibold text-mini" \r
          style="letter-spacing: 0.08em; text-transform: uppercase;">\r
            Foto del piatto\r
          </label>\r
\r
          <!-- Preview immagine -->\r
          <div *ngIf="dishImagePreview" class="dish-img-upload-preview">\r
            <img [src]="dishImagePreview" alt="Anteprima piatto" class="dish-img-thumb">\r
            <button type="button" class="icon-button" (click)="removeDishImage()" title="Rimuovi immagine">\r
              <lucide-icon name="x" [size]="16"></lucide-icon>\r
            </button>\r
          </div>\r
\r
          <!-- Dropzone upload -->\r
          <label *ngIf="!dishImagePreview" \r
                class="dish-img-dropzone flex flex-col items-center justify-center gap-sm"\r
                for="dishImageInput">\r
            <lucide-icon name="image-plus" [size]="28" style="color: var(--primary)"></lucide-icon>\r
            <span class="text-mini text-muted">Clicca per caricare una foto</span>\r
            <span class="text-mini text-muted">PNG, JPG, WEBP \u2014 max 5MB</span>\r
          </label>\r
\r
          <input id="dishImageInput" \r
                type="file" \r
                accept="image/*"\r
                style="display: none"\r
                (change)="onDishImageSelected($event)">\r
\r
          <!-- Indicatore upload in corso -->\r
          <div *ngIf="isUploadingImage" class="flex items-center gap-sm text-mini text-muted">\r
            <lucide-icon name="loader" [size]="14" style="animation: spin 1s linear infinite"></lucide-icon>\r
            Caricamento immagine...\r
          </div>\r
        </div>\r
        \r
        <!-- Ingredienti -->\r
        <div class="gap-md p-md mb-sm">\r
          <div class="flex flex-wrap gap-sm items-center">\r
            <lucide-angular name="list"></lucide-angular>\r
            <h2 class="text-md m-0">Ingredienti</h2>\r
            <span class="chip">{{ingredientsArray.length}} ingredienti</span>\r
          </div>\r
        </div>\r
\r
        <!-- Tabella Ingredienti -->\r
        <div class="table-section" data-tutorial="foodcost-ingredients">\r
          <table class="crm-table">\r
            <!-- Header -->\r
            <thead>\r
              <tr>\r
                <th>Ingrediente</th>\r
                <th>Quantit\xE0</th>\r
                <th>Costo</th>\r
                <th>Azioni</th>\r
              </tr>\r
            </thead>\r
\r
            <!-- Righe Ingredienti -->\r
            <tbody formArrayName="ingredients">\r
              <tr *ngFor="let ingredient of ingredientsArray.controls; let i = index" \r
                  [formGroupName]="i">\r
                \r
                <!-- Ingrediente -->\r
                <td>\r
                  <input\r
                    #ingredientInput\r
                    list="ingredientsList"\r
                    [value]="getIngredientName(ingredient.get('ingredient_id')?.value)"\r
                    placeholder="Cerca ingrediente..."\r
                    (input)="onIngredientInputSimple($event, i, ingredientInput)"\r
                    (focus)="showDatalist(ingredientInput)">\r
                  \r
                  <datalist id="ingredientsList">\r
                    <option *ngFor="let ing of ingredients" [value]="ing.name">\r
                      {{ ing.name }} \r
                      <span *ngIf="ing.unit_id && ing.units">\r
                        (\u20AC{{ ing.cost_per_unit | number:'1.2-2' }}/{{ ing.units.symbol }})\r
                      </span>\r
                    </option>\r
                  </datalist>\r
                </td>\r
\r
                <!-- Quantit\xE0 -->\r
                <td>\r
                  <div class="flex items-center gap-sm">\r
                    <input\r
                      formControlName="quantity"\r
                      type="number"\r
                      step="0.001"\r
                      min="0"\r
                      placeholder="0"\r
                      (change)="manualCalculateCost()">\r
                    <span *ngIf="ingredient.get('ingredient_id')?.value" \r
                          class="text-muted text-mini">\r
                      {{ getQuantityUnitLabel(ingredient.get('ingredient_id')?.value) }}\r
                    </span>\r
                  </div>\r
                </td>\r
\r
                <!-- Costo -->\r
                <td class="font-semibold">\r
                  \u20AC{{ ingredient.get('cost')?.value | number:'1.2-2' }}\r
                </td>\r
\r
                <!-- Azioni -->\r
                <td>\r
                  <button *ngIf="!isPhotoOnlyMode" type="button" class="icon-button x-small" (click)="removeIngredient(i)">\r
                    <lucide-angular name="trash-2" [size]="20"></lucide-angular>\r
                  </button>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <div class="modal-footer p-md0">\r
          <button *ngIf="!isPhotoOnlyMode" type="button" class="promethea-button" (click)="addIngredient()">\r
            <lucide-angular name="plus" [size]="20"></lucide-angular>\r
            Aggiungi Ingrediente\r
          </button>\r
        </div>\r
\r
        <!-- Sezione grafico -->\r
        <div class="mt-lg" *ngIf="ingredientsArray.length > 0 && totalCost > 0">\r
          <div class="flex items-center justify-between mb-sm"\r
          data-tutorial="foodcost-grafico">\r
            <h3 class="text-md font-semibold">Analisi costi</h3>\r
            <div class="flex gap-sm">\r
            <button\r
              *ngIf="mode === 'dish'"\r
              type="button"\r
              (click)="toggleMargin()"\r
              class="promethea-button ghost x-small">\r
              <lucide-angular [name]="showMargin ? 'pie-chart' : 'percent'"></lucide-angular>\r
              {{ showMargin ? 'Solo ingredienti' : '+ Margine' }}\r
            </button>\r
            <button\r
              type="button"\r
              (click)="toggleColorPalette()"\r
              class="promethea-button ghost x-small"\r
              [title]="colorPalette === 'default' ? 'Passa a palette per daltonici' : 'Torna a palette predefinita'">\r
              <lucide-angular [name]="colorPalette === 'default' ? 'eye' : 'palette'"></lucide-angular>\r
            </button>\r
            </div>\r
          </div>\r
          <div class="chart-container">\r
            <canvas #costChart></canvas>\r
          </div>\r
        </div>\r
        <div *ngIf="ingredientsArray.length === 0 || totalCost === 0" \r
        data-tutorial="foodcost-grafico"\r
        class="text-muted p-md mt-sm mb-sm rounded-xl bg-smoke ">\r
          Aggiungi ingredienti per visualizzare il grafico.\r
        </div>\r
\r
        <!-- Riepilogo costi compatto -->\r
        <div class="mt-lg mb-lg">\r
            <div class="flex gap-sm p-md">\r
              <lucide-angular name="bar-chart"></lucide-angular>\r
              <h2 class="text-md m-0">Riepilogo</h2>\r
            </div>\r
          <div class="grid-cards costs-grid" data-tutorial="foodcost-summary">\r
            <div class="cost-item">\r
              <div class="cost-value">\u20AC{{ totalCost | number:'1.2-2' }}</div>\r
              <div class="cost-label text-muted">Costo Totale</div>\r
            </div>\r
\r
            <!-- Food Cost (solo per piatto) -->\r
            <div *ngIf="mode === 'dish'" class="cost-item">\r
              <div class="cost-value">{{ getFoodCostPercentage() | number:'1.1-1' }}%</div>\r
              <div class="cost-label" \r
                  [class.text-red-500]="getFoodCostPercentage() > 35"\r
                  [class.text-green-500]="getFoodCostPercentage() <= 35">\r
                Food Cost\r
              </div>\r
            </div>\r
\r
            <!-- Prezzo suggerito (solo per piatto) -->\r
            <div *ngIf="mode === 'dish'" class="cost-item">\r
              <div class="cost-value">\u20AC{{ suggestedPrice | number:'1.2-2' }}</div>\r
              <div class="cost-label text-muted">Prezzo Suggerito</div>\r
            </div>\r
\r
            <!-- Margine (solo per piatto) -->\r
            <div *ngIf="mode === 'dish'" class="cost-item">\r
              <div class="cost-value">\u20AC{{ (foodCostForm.get('sellingPrice')?.value - totalCost) | number:'1.2-2' }}</div>\r
              <div class="cost-label text-muted">Margine</div>\r
            </div>\r
\r
<!-- Costo per unit\xE0 (solo per ingrediente) -->\r
<div *ngIf="mode === 'ingredient'" class="cost-item">\r
  <div class="cost-value">\u20AC{{ (totalCost / (foodCostForm.get('yield_quantity')?.value || 1)) | number:'1.3-3' }}</div>\r
  <div class="cost-label text-muted">Costo per {{ getUnitSymbol(foodCostForm.get('unit_id')?.value) || 'unit\xE0' }}</div>\r
</div>\r
\r
            <!-- Quantit\xE0 prodotta (solo per ingrediente) -->\r
            <div *ngIf="mode === 'ingredient'" class="cost-item">\r
              <div class="cost-value">{{ foodCostForm.get('yield_quantity')?.value | number:'1.0-3' }}</div>\r
              <div class="cost-label text-muted">{{ getUnitSymbol(foodCostForm.get('unit_id')?.value) || 'unit\xE0' }} prodotte</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Submit -->\r
        <div class="modal-footer p-md0">\r
          <button *ngIf="!isPhotoOnlyMode" type="submit" class="promethea-button" [disabled]="!canSave()">\r
            <lucide-icon [name]="isEditing ? 'rotate-cw' : 'save'"></lucide-icon>\r
            {{ mode === 'ingredient' ? 'Crea Ingrediente' : (isEditing ? 'Aggiorna Piatto' : 'Salva Piatto') }}\r
          </button>\r
        </div>\r
      </form>\r
    \r
  </div>\r
</div>\r
\r
<!-- Modal per Nuova Categoria (solo per piatto) -->\r
<div *ngIf="showNewCategoryForm" class="modal-overlay" (click)="toggleNewCategoryForm()">\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
\r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <div class="flex">\r
        <div class="header-icon">\r
          <lucide-angular name="plus-circle"></lucide-angular>\r
        </div>\r
        <div>\r
          <h1 class="section-title">Nuova Categoria</h1>\r
        </div>\r
      </div>\r
      <button type="button" class="icon-button" (click)="toggleNewCategoryForm()">\r
        <lucide-angular name="x"></lucide-angular>\r
      </button>\r
    </div>\r
\r
    <!-- Contenuto Modal -->\r
    <div class="modal-content">\r
      <div [formGroup]="newCategoryForm" class="form-card">\r
        <div class="form-row mb-lg">\r
          <label for="newCategoryName" class="standard-label">Nome Categoria *</label>\r
          <input\r
            id="newCategoryName"\r
            formControlName="name"\r
            type="text"\r
            placeholder="Inserisci il nome della categoria"\r
            autofocus>\r
          <div *ngIf="newCategoryForm.get('name')?.invalid && newCategoryForm.get('name')?.touched" \r
               class="text-red-500 text-sm">\r
            Il nome \xE8 obbligatorio\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-lg">\r
          <label for="newCategoryOrderIndex" class="standard-label">\r
            Ordine (Posizione) <span class="text-muted">- pi\xF9 basso = prima</span>\r
          </label>\r
          <input\r
            id="newCategoryOrderIndex"\r
            formControlName="order_index"\r
            type="number"\r
            min="0"\r
            step="1"\r
            placeholder="Es: 0, 1, 2, 3..."\r
            [title]="getOrderIndexHint()">\r
          <div class="text-muted text-sm">\r
            Definisce l'ordine di visualizzazione. 0 = primo, 1 = secondo, ecc.\r
          </div>\r
        </div>\r
\r
        <div class="form-row mb-lg">\r
          <label for="newCategoryDescription" class="standard-label">Descrizione</label>\r
          <textarea\r
            id="newCategoryDescription"\r
            formControlName="description"\r
            rows="3"\r
            placeholder="Descrizione della categoria (opzionale)"></textarea>\r
        </div>\r
\r
        <div class="flex flex-col gap-sm">\r
          <label class="checkbox-label">\r
            <input type="checkbox" formControlName="is_default">\r
            <div class="checkbox-content">\r
              <strong>Imposta come categoria predefinita</strong>\r
              <div class="text-muted">Questa categoria sar\xE0 selezionata automaticamente per i nuovi piatti</div>\r
            </div>\r
          </label>\r
        </div>\r
        \r
        <!-- Anteprima ordine categorie -->\r
        <div class="mt-lg p-sm bg-smoke rounded" *ngIf="categories && categories.length > 0">\r
          <div class="text-mini font-semibold mb-sm">Ordine attuale categorie:</div>\r
          <div class="flex flex-col gap-sm">\r
            <div *ngFor="let cat of getSortedCategories()" class="text-mini flex gap-sm">\r
              <span class="chip x-small">{{ cat.order_index || 0 }}</span>\r
              <span>{{ cat.name }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button type="button" class="promethea-button ghost" \r
              (click)="toggleNewCategoryForm()" [disabled]="isCreatingCategory">\r
        <lucide-angular name="x"></lucide-angular>\r
        Annulla\r
      </button>\r
      <button type="button" class="promethea-button" \r
              (click)="onCreateCategory()" [disabled]="isCreatingCategory || newCategoryForm.invalid">\r
        <lucide-icon [name]="isCreatingCategory ? 'hourglass' : 'check'"></lucide-icon>\r
        {{ isCreatingCategory ? 'Creazione...' : 'Crea Categoria' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal per ordinamento categorie -->\r
<div *ngIf="showCategoryOrderModal" class="modal-overlay" (click)="closeCategoryOrderModal()">\r
  <div class="modal-container modal-md" (click)="$event.stopPropagation()">\r
    \r
    <!-- Header Modal -->\r
    <div class="modal-header">\r
      <div class="flex">\r
        <div class="header-icon">\r
          <lucide-angular name="arrow-up-down"></lucide-angular>\r
        </div>\r
        <div>\r
          <h1 class="section-title">Ordina Categorie</h1>\r
          <div class="text-muted">Trascina per riordinare le categorie</div>\r
        </div>\r
      </div>\r
      <div class="flex gap-sm">\r
        <button type="button" class="icon-button" (click)="closeCategoryOrderModal()">\r
          <lucide-angular name="x"></lucide-angular>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Contenuto Modal -->\r
    <div class="modal-content">\r
      <div class="form-card">\r
        <!-- Lista ordinabile -->\r
        <div class="mb-md">\r
          <div class="text-muted mb-sm">Le categorie saranno visualizzate in questo ordine</div>\r
          \r
          <div cdkDropList \r
               (cdkDropListDropped)="dropCategory($event)"\r
               class="flex flex-col gap-sm">\r
            <div *ngFor="let category of categoriesForSorting; let i = index" \r
                 cdkDrag \r
                 class="category-drag-item flex justify-between items-center p-sm rounded bg-smoke border transition hover-lift">\r
              \r
              <!-- Prima met\xE0: Drag handle + Nome categoria -->\r
              <div class="flex items-center gap-md flex-1 min-w-0">\r
                <span class="material-icons text-muted" cdkDragHandle style="cursor: move;">drag_indicator</span>\r
                <div class="flex flex-col min-w-0">\r
                  <div class="font-semibold truncate">{{ category.name }}</div>\r
                  <div *ngIf="category.description" class="text-mini text-muted truncate">\r
                    {{ category.description }}\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <!-- Seconda met\xE0: Posizione e input -->\r
              <div class="flex items-center gap-sm flex-shrink-0">\r
                <div class="flex flex-col items-end gap-sm">\r
                  <span class="text-mini text-muted">Posizione</span>\r
                  <div class="flex items-center gap-sm">\r
                    <input type="number" \r
                           [(ngModel)]="category.order_index"\r
                           (ngModelChange)="onOrderIndexChange(category, $event)"\r
                           min="1"\r
                           step="1"\r
                           class="p-sm border rounded"\r
                           style="width: 70px; text-align: center;"\r
                           title="Numero posizione (1 = primo)">\r
                    <span class="chip x-small">{{ category.order_index }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Istruzioni -->\r
        <div class="info-message">\r
          <lucide-angular name="info"></lucide-angular>\r
          <div>\r
            <strong>Come ordinare:</strong> \r
              <p>Trascina le categorie usando l'icona <lucide-angular name="grip-vertical"></lucide-angular></p>\r
              <p>Oppure modifica manualmente il numero di posizione (1 = prima, 2 = seconda, ecc.)</p>\r
              <p>Le categorie saranno visualizzate in ordine crescente</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Footer Modal -->\r
    <div class="modal-footer">\r
      <button type="button" class="promethea-button ghost" \r
              (click)="closeCategoryOrderModal()" [disabled]="isSavingOrder">\r
        <lucide-angular name="x"></lucide-angular>\r
        Annulla\r
      </button>\r
        <!-- Bottone per creare nuova categoria -->\r
        <button type="button" class="promethea-button" \r
                (click)="openNewCategoryFromOrderModal()"\r
                title="Crea nuova categoria">\r
          <lucide-angular name="plus" [size]="20"></lucide-angular>\r
          Aggiungi Categoria\r
        </button>\r
\r
      <button type="button" class="promethea-button" \r
              (click)="saveCategoryOrder()" [disabled]="isSavingOrder">\r
      <lucide-icon [name]="isCreatingCategory ? 'hourglass' : 'check'"></lucide-icon>\r
        {{ isSavingOrder ? 'Salvataggio...' : 'Salva Ordine' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Allergeni -->\r
<div *ngIf="showAllergenModal" class="modal-overlay" (click)="toggleAllergenModal()">\r
  <div class="modal-container modal-lg" (click)="$event.stopPropagation()">\r
    \r
    <!-- Header -->\r
    <div class="modal-header">\r
      <div class="flex">\r
        <div class="header-icon">\r
          <lucide-angular name="alert-triangle"></lucide-angular>\r
        </div>\r
        <div>\r
          <h1 class="section-title">Gestione Allergeni</h1>\r
          <div class="text-muted">Seleziona gli allergeni presenti nel piatto</div>\r
        </div>\r
      </div>\r
      <button type="button" class="icon-button" (click)="toggleAllergenModal()">\r
        <lucide-angular name="x"></lucide-angular>\r
      </button>\r
    </div>\r
    \r
    <!-- Contenuto -->\r
    <div class="modal-content">\r
      <div class="form-card">\r
        \r
        <!-- Info normativa -->\r
        <div class="info-message mb-md">\r
          <lucide-angular name="info"></lucide-angular>\r
          <div class="flex-col flex gap-sm">\r
            <h4>Normativa UE 1169/2011</h4>\r
            <p>\xC8 obbligatorio indicare la presenza dei 14 allergeni principali nei piatti serviti.\r
            </p>  \r
            </div>\r
        </div>\r
        \r
        <!-- Griglia allergeni -->\r
        <div class="grid-cards mb-md">\r
          <label *ngFor="let allergen of availableAllergens" \r
                class="checkbox-label transition hover-lift"\r
                [class.bg-smoke]="isAllergenSelected(allergen.id)"\r
                [style.border]="isAllergenSelected(allergen.id) ? '2px solid var(--primary)' : '1px solid var(--smoke-1)'"\r
                style="border-radius: 12px; width: 100%;">\r
            \r
            <input type="checkbox" \r
                  [checked]="isAllergenSelected(allergen.id)"\r
                  (change)="toggleAllergen(allergen.id)">\r
            \r
            <div class="flex items-center gap-sm" style="flex: 1;">\r
              <!-- Icona Lucide con effetto quando selezionata -->\r
              <lucide-angular \r
                [name]="allergen.icon" \r
                [size]="28"\r
                [class.text-primary]="isAllergenSelected(allergen.id)"\r
                [style.opacity]="isAllergenSelected(allergen.id) ? '1' : '0.6'"\r
                class="transition">\r
              </lucide-angular>\r
              \r
              <div class="flex flex-col" style="gap: 0.125rem;">\r
                <span class="font-semibold">{{ allergen.name }}</span>\r
                <span class="text-mini text-muted">N\xB0 {{ allergen.id }}</span>\r
              </div>\r
            </div>\r
          </label>\r
        </div>\r
        \r
        <!-- Riepilogo selezione -->\r
        <div *ngIf="selectedAllergens.length > 0" \r
            class="bg-smoke rounded p-md">\r
          <div class="flex items-center gap-sm mb-md">\r
            <lucide-angular name="alert-triangle" [size]="16" class="text-primary"></lucide-angular>\r
            <span class="text-mini font-semibold">\r
              {{ selectedAllergens.length }} allergeni selezionati\r
            </span>\r
          </div>\r
          <div class="flex flex-wrap gap-sm">\r
            <span *ngFor="let id of selectedAllergens" class="chip flex items-center gap-sm">\r
              <lucide-angular \r
                [name]="getAllergenIcon(id)" \r
                [size]="16">\r
              </lucide-angular>\r
              <span>{{ getAllergenName(id) }}</span>\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <!-- Footer -->\r
    <div class="modal-footer">\r
      <button type="button" \r
              class="promethea-button ghost" \r
              (click)="clearAllergens()">\r
        <lucide-angular name="list-x"></lucide-angular>\r
        Deseleziona tutti\r
      </button>\r
      <button type="button" \r
              class="promethea-button" \r
              (click)="toggleAllergenModal()">\r
        <lucide-angular name="check"></lucide-angular>\r
        Conferma ({{ selectedAllergens.length }})\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/restaurant/foodcost-calculator/foodcost-calculator.css */\n.ingredients-container {\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: var(--gap-md);\n}\n.ingredients-header {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  background: var(--smoke-1);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.ingredients-list {\n  display: flex;\n  flex-direction: column;\n}\n.ingredient-row {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: var(--gap-md);\n  padding: var(--gap-md);\n  align-items: center;\n  border-bottom: 1px solid var(--smoke-1);\n  transition: all 0.2s ease;\n}\n.ingredient-row:hover {\n  background: var(--smoke-1);\n}\n.ingredient-row:last-child {\n  border-bottom: none;\n}\n.ingredient-col {\n  min-width: 0;\n}\n.quantity-col {\n  min-width: 120px;\n}\n.cost-col {\n  min-width: 80px;\n  font-weight: 600;\n  text-align: center;\n}\n.costs-grid {\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;\n}\n.cost-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--gap-md);\n  background: var(--background);\n  border: 1px solid var(--smoke-1);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.cost-item:hover {\n  border-color: var(--secondary);\n  transform: translateY(-2px);\n}\n.cost-value {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  margin-bottom: var(--gap-sm);\n}\n.cost-label {\n  font-size: var(--fs-sm);\n}\n.searchable-select {\n  width: 100%;\n}\n.hidden {\n  display: none !important;\n}\n@media (max-width: 768px) {\n  .ingredients-header,\n  .ingredient-row {\n    grid-template-columns: 1fr;\n    gap: var(--gap-sm);\n  }\n  .ingredients-header {\n    display: none;\n  }\n  .ingredient-row {\n    padding: var(--gap-md);\n    border: 1px solid var(--smoke-1);\n    border-radius: 8px;\n    margin-bottom: var(--gap-sm);\n  }\n  .costs-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .costs-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.checkbox-label {\n  align-items: center;\n}\n.category-drag-list {\n  min-height: 20px;\n}\n.category-drag-item {\n  cursor: move;\n  margin-bottom: var(--gap-sm);\n}\n.category-drag-item:last-child {\n  margin-bottom: 0;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  background: var(--background);\n  border: 2px solid var(--primary);\n  opacity: 0.9;\n}\n.cdk-drag-placeholder {\n  background: var(--shadow-3);\n  border: 2px dashed var(--primary);\n  border-radius: 12px;\n  opacity: 0.5;\n  min-height: 64px;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.category-drag-list.cdk-drop-list-dragging .category-drag-item:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.crm-table th:nth-child(1),\n.crm-table td:nth-child(1) {\n  width: 50%;\n}\n.crm-table th:nth-child(2),\n.crm-table td:nth-child(2) {\n  width: 20%;\n}\n.chart-container {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  margin: 0 auto;\n  padding: 0;\n  background: var(--background2);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px var(--smoke-1);\n  overflow: hidden;\n}\n.chart-container canvas {\n  display: block;\n  padding: var(--gap-sm);\n  width: 100% !important;\n  height: 100% !important;\n}\n@media (max-width: 768px) {\n  .chart-container {\n    height: 200px;\n    max-width: 100%;\n  }\n}\n.dish-img-dropzone {\n  border: 2px dashed color-mix(in srgb, var(--primary) 40%, transparent);\n  border-radius: var(--gap-sm);\n  padding: var(--gap-lg);\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.dish-img-dropzone:hover {\n  border-color: var(--primary);\n  background: var(--smoke-2);\n}\n.dish-img-upload-preview {\n  position: relative;\n  width: fit-content;\n}\n.dish-img-thumb {\n  width: 140px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: var(--gap-sm);\n  border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);\n}\n.dish-img-upload-preview .icon-button {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: var(--secondary);\n  color: white;\n  border-radius: 999px;\n  width: 24px;\n  height: 24px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=foodcost-calculator.css.map */\n"] }]
  }], () => [], { costChartCanvas: [{
    type: ViewChild,
    args: ["costChart"]
  }], dishId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoodCostCalculator, { className: "FoodCostCalculator", filePath: "src/app/restaurant/foodcost-calculator/foodcost-calculator.ts", lineNumber: 33 });
})();
export {
  FoodCostCalculator
};
//# sourceMappingURL=chunk-4KZZZH57.js.map
