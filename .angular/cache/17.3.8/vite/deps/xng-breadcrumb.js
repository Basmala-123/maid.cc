import {
  ActivatedRoute,
  GuardsCheckEnd,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-WBYKSSJB.js";
import "./chunk-CUDLO6U2.js";
import "./chunk-QCNL7VR4.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-HWFXCD2U.js";
import {
  BehaviorSubject,
  Component,
  ContentChild,
  Directive,
  Injectable,
  Input,
  TemplateRef,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  filter,
  map,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HK6HKQDD.js";

// node_modules/xng-breadcrumb/fesm2022/xng-breadcrumb.mjs
var _c0 = (a0) => ({
  "xng-breadcrumb-link-disabled": a0
});
var _c1 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  info: a1,
  last: a2,
  first: a3,
  index: a4,
  count: a5
});
function BreadcrumbComponent_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbComponent_ng_container_2_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const breadcrumb_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r1.label);
  }
}
function BreadcrumbComponent_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 7);
    ɵɵtemplate(1, BreadcrumbComponent_ng_container_2_a_2_ng_container_1_Template, 1, 0, "ng-container", 8)(2, BreadcrumbComponent_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const breadcrumb_r1 = ctx_r1.$implicit;
    const isLast_r3 = ctx_r1.last;
    const isFirst_r4 = ctx_r1.first;
    const index_r5 = ctx_r1.index;
    const count_r6 = ctx_r1.count;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c0, breadcrumb_r1.disable))("routerLink", breadcrumb_r1.routeInterceptor ? breadcrumb_r1.routeInterceptor(breadcrumb_r1.routeLink, breadcrumb_r1) : breadcrumb_r1.routeLink)("queryParams", ctx_r6.preserveQueryParams ? breadcrumb_r1.queryParams : void 0)("fragment", ctx_r6.preserveFragment ? breadcrumb_r1.fragment : void 0)("target", ctx_r6.anchorTarget ? ctx_r6.anchorTarget : "_self");
    ɵɵattribute("aria-disabled", breadcrumb_r1.disable)("tabIndex", breadcrumb_r1.disable ? -1 : 0);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(12, _c1, breadcrumb_r1.label, breadcrumb_r1.info, isLast_r3, isFirst_r4, index_r5, count_r6));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r6.itemTemplate);
  }
}
function BreadcrumbComponent_ng_container_2_label_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbComponent_ng_container_2_label_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const breadcrumb_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r1.label);
  }
}
function BreadcrumbComponent_ng_container_2_label_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 10);
    ɵɵtemplate(1, BreadcrumbComponent_ng_container_2_label_3_ng_container_1_Template, 1, 0, "ng-container", 8)(2, BreadcrumbComponent_ng_container_2_label_3_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const breadcrumb_r1 = ctx_r1.$implicit;
    const isLast_r3 = ctx_r1.last;
    const isFirst_r4 = ctx_r1.first;
    const index_r5 = ctx_r1.index;
    const count_r6 = ctx_r1.count;
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(3, _c1, breadcrumb_r1.label, breadcrumb_r1.info, isLast_r3, isFirst_r4, index_r5, count_r6));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r6.itemTemplate);
  }
}
function BreadcrumbComponent_ng_container_2_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbComponent_ng_container_2_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r6.separator);
  }
}
function BreadcrumbComponent_ng_container_2_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 11);
    ɵɵtemplate(1, BreadcrumbComponent_ng_container_2_li_4_ng_container_1_Template, 1, 0, "ng-container", 12)(2, BreadcrumbComponent_ng_container_2_li_4_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.separatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r6.separatorTemplate);
  }
}
function BreadcrumbComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 3);
    ɵɵtemplate(2, BreadcrumbComponent_ng_container_2_a_2_Template, 3, 19, "a", 4)(3, BreadcrumbComponent_ng_container_2_label_3_Template, 3, 10, "label", 5);
    ɵɵelementEnd();
    ɵɵtemplate(4, BreadcrumbComponent_ng_container_2_li_4_Template, 3, 2, "li", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const isLast_r3 = ctx.last;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !isLast_r3);
    ɵɵadvance();
    ɵɵproperty("ngIf", isLast_r3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !isLast_r3);
  }
}
var _BreadcrumbItemDirective = class _BreadcrumbItemDirective {
};
_BreadcrumbItemDirective.ɵfac = function BreadcrumbItemDirective_Factory(t) {
  return new (t || _BreadcrumbItemDirective)();
};
_BreadcrumbItemDirective.ɵdir = ɵɵdefineDirective({
  type: _BreadcrumbItemDirective,
  selectors: [["", "xngBreadcrumbItem", ""]],
  standalone: true
});
var BreadcrumbItemDirective = _BreadcrumbItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbItemDirective, [{
    type: Directive,
    args: [{
      selector: "[xngBreadcrumbItem]",
      standalone: true
    }]
  }], null, null);
})();
var PATH_PARAM = {
  PREFIX: ":",
  REGEX_IDENTIFIER: "/:[^/]+",
  REGEX_REPLACER: "/[^/]+"
};
var ALIAS_PREFIX = "@";
var isNonEmpty = (obj) => {
  return !!obj && Object.keys(obj).length > 0;
};
var _BreadcrumbService = class _BreadcrumbService {
  constructor(activatedRoute, router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.baseHref = "/";
    this.dynamicBreadcrumbStore = [];
    this.currentBreadcrumbs = [];
    this.previousBreadcrumbs = [];
    this.breadcrumbs = new BehaviorSubject([]);
    this.breadcrumbs$ = this.breadcrumbs.asObservable();
    this.detectRouteChanges();
  }
  /**
   * Whenever route changes build breadcrumb list again
   */
  detectRouteChanges() {
    this.setupBreadcrumbs(this.activatedRoute.snapshot);
    this.router.events.pipe(filter((event) => event instanceof GuardsCheckEnd)).subscribe((event) => {
      if (event.shouldActivate) {
        this.setupBreadcrumbs(event.state.root);
      }
    });
  }
  setupBreadcrumbs(activatedRouteSnapshot) {
    this.previousBreadcrumbs = this.currentBreadcrumbs;
    const rootBreadcrumb = this.getRootBreadcrumb();
    this.currentBreadcrumbs = rootBreadcrumb ? [rootBreadcrumb] : [];
    this.prepareBreadcrumbList(activatedRouteSnapshot, this.baseHref);
  }
  getRootBreadcrumb() {
    const rootConfig = this.router.config.find((config) => config.path === "");
    const rootBreadcrumb = this.extractObject(rootConfig?.data?.["breadcrumb"]);
    const storeItem = this.getFromStore(rootBreadcrumb.alias, "/");
    if (isNonEmpty(rootBreadcrumb) || isNonEmpty(storeItem)) {
      return __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, storeItem), rootBreadcrumb), {
        routeLink: this.baseHref
      }), this.getQueryParamsFromPreviousList("/"));
    }
  }
  prepareBreadcrumbItem(activatedRouteSnapshot, routeLinkPrefix) {
    const {
      path,
      breadcrumb
    } = this.parseRouteData(activatedRouteSnapshot.routeConfig);
    const resolvedSegment = this.resolvePathSegment(path, activatedRouteSnapshot);
    const routeLink = `${routeLinkPrefix}${resolvedSegment}`;
    const storeItem = this.getFromStore(breadcrumb.alias, routeLink);
    const label = this.extractLabel(storeItem?.label || breadcrumb?.label, resolvedSegment);
    let isAutoGeneratedLabel = false;
    let autoGeneratedLabel = "";
    if (!label) {
      isAutoGeneratedLabel = true;
      autoGeneratedLabel = resolvedSegment;
    }
    return __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, storeItem), breadcrumb), {
      label: isAutoGeneratedLabel ? autoGeneratedLabel : label,
      routeLink,
      isAutoGeneratedLabel
    }), this.getQueryParamsFromPreviousList(routeLink));
  }
  prepareBreadcrumbList(activatedRouteSnapshot, routeLinkPrefix) {
    if (activatedRouteSnapshot.routeConfig?.path) {
      const breadcrumbItem = this.prepareBreadcrumbItem(activatedRouteSnapshot, routeLinkPrefix);
      this.currentBreadcrumbs.push(breadcrumbItem);
      if (activatedRouteSnapshot.firstChild) {
        return this.prepareBreadcrumbList(activatedRouteSnapshot.firstChild, breadcrumbItem.routeLink + "/");
      }
    } else if (activatedRouteSnapshot.firstChild) {
      return this.prepareBreadcrumbList(activatedRouteSnapshot.firstChild, routeLinkPrefix);
    }
    const lastCrumb = this.currentBreadcrumbs[this.currentBreadcrumbs.length - 1];
    this.setQueryParamsForActiveBreadcrumb(lastCrumb, activatedRouteSnapshot);
    const breadcrumbsToShow = this.currentBreadcrumbs.filter((item) => !item.skip);
    this.breadcrumbs.next(breadcrumbsToShow);
  }
  getFromStore(alias, routeLink) {
    return this.dynamicBreadcrumbStore.find((item) => {
      return alias && alias === item.alias || routeLink && routeLink === item.routeLink || this.matchRegex(routeLink, item.routeRegex);
    });
  }
  /**
   * use exact match instead of regexp.test
   * for /mentor/[^/]+ we should match '/mentor/12' but not '/mentor/12/abc'
   */
  matchRegex(routeLink, routeRegex) {
    const match = routeLink.match(new RegExp(routeRegex));
    return match?.[0] === routeLink;
  }
  /**
   * if the path segment has route params, read the param value from url
   * for each segment of route this gets called
   *
   * for mentor/:id/view - it gets called with mentor, :id, view 3 times
   */
  resolvePathSegment(segment, activatedRouteSnapshot) {
    if (segment.includes(PATH_PARAM.PREFIX)) {
      Object.entries(activatedRouteSnapshot.params).forEach(([key, value]) => {
        segment = segment.replace(`:${key}`, `${value}`);
      });
    }
    return segment;
  }
  /**
   * queryParams & fragments for previous breadcrumb path are copied over to new list
   */
  getQueryParamsFromPreviousList(routeLink) {
    const {
      queryParams,
      fragment
    } = this.previousBreadcrumbs.find((item) => item.routeLink === routeLink) || {};
    return {
      queryParams,
      fragment
    };
  }
  /**
   * set current activated route query params to the last breadcrumb item
   */
  setQueryParamsForActiveBreadcrumb(lastItem, activatedRouteSnapshot) {
    if (lastItem) {
      const {
        queryParams,
        fragment
      } = activatedRouteSnapshot;
      lastItem.queryParams = queryParams ? __spreadValues({}, queryParams) : void 0;
      lastItem.fragment = fragment;
    }
  }
  /**
   * For a specific route, breadcrumb can be defined either on parent OR it's child(which has empty path)
   * When both are defined, child takes precedence
   *
   * Ex: Below we are setting breadcrumb on both parent and child.
   * So, child takes precedence and "Defined On Child" is displayed for the route 'home'
   * { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) , data: {breadcrumb: "Defined On Module"}}
   *                                                AND
   * children: [
   *   { path: '', component: ShowUserComponent, data: {breadcrumb: "Defined On Child" }
   * ]
   */
  parseRouteData(routeConfig) {
    const {
      path,
      data
    } = routeConfig;
    const breadcrumb = this.mergeWithBaseChildData(routeConfig, data?.breadcrumb);
    return {
      path,
      breadcrumb
    };
  }
  /**
   * get empty children of a module or Component. Empty child is the one with path: ''
   * When parent and it's children (that has empty route path) define data merge them both with child taking precedence
   */
  mergeWithBaseChildData(routeConfig, config) {
    if (!routeConfig) {
      return this.extractObject(config);
    }
    let baseChild;
    if (routeConfig.loadChildren) {
      baseChild = routeConfig._loadedRoutes.find((route) => route.path === "");
    } else if (routeConfig.children) {
      baseChild = routeConfig.children.find((route) => route.path === "");
    }
    const childConfig = baseChild?.data?.breadcrumb;
    return childConfig ? this.mergeWithBaseChildData(baseChild, __spreadValues(__spreadValues({}, this.extractObject(config)), this.extractObject(childConfig))) : this.extractObject(config);
  }
  /**
   * Update breadcrumb dynamically
   *
   * key can be a path | alias
   *
   * 1) Using complete route path. route can be passed the same way you define angular routes
   * - path can be passed as 'exact path(routeLink)' or 'path with params(routeRegex)'
   * - update label Ex: set('/mentor', 'Mentor'), set('/mentor/:id', 'Mentor Details')
   * - change visibility Ex: set('/mentor/:id/edit', { skip: true })
   * ------------------------------------------ OR ------------------------------------------
   * 2) Using route alias (prefixed with '@'). alias should be unique for a route
   * - update label Ex: set('@mentor', 'Enabler')
   * - change visibility Ex: set('@mentorEdit', { skip: true })
   *
   *
   * value can be string | BreadcrumbObject | BreadcrumbFunction
   */
  set(key, breadcrumb) {
    const breadcrumbObject = this.extractObject(breadcrumb);
    let updateArgs;
    if (key.startsWith(ALIAS_PREFIX)) {
      updateArgs = ["alias", __spreadProps(__spreadValues({}, breadcrumbObject), {
        alias: key.slice(1)
      })];
    } else if (key.includes(PATH_PARAM.PREFIX)) {
      updateArgs = ["routeRegex", __spreadProps(__spreadValues({}, breadcrumbObject), {
        routeRegex: this.buildRegex(key)
      })];
    } else {
      updateArgs = ["routeLink", __spreadProps(__spreadValues({}, breadcrumbObject), {
        routeLink: this.ensureLeadingSlash(key)
      })];
    }
    updateArgs[1].isAutoGeneratedLabel = false;
    this.updateStore(...updateArgs);
    this.updateCurrentBreadcrumbs(...updateArgs);
  }
  /**
   * Update the store to reuse for dynamic declarations
   * If the store already has this route definition update it, else add
   */
  updateStore(key, breadcrumb) {
    const storeItemIndex = this.dynamicBreadcrumbStore.findIndex((item) => {
      return breadcrumb[key] === item[key];
    });
    if (storeItemIndex > -1) {
      this.dynamicBreadcrumbStore[storeItemIndex] = __spreadValues(__spreadValues({}, this.dynamicBreadcrumbStore[storeItemIndex]), breadcrumb);
    } else {
      this.dynamicBreadcrumbStore.push(__spreadValues({}, breadcrumb));
    }
  }
  /**
   * If breadcrumb is present in current breadcrumbs update it and emit new stream
   */
  updateCurrentBreadcrumbs(key, breadcrumb) {
    const itemIndex = this.currentBreadcrumbs.findIndex((item) => {
      return key === "routeRegex" ? this.matchRegex(item.routeLink, breadcrumb[key]) : breadcrumb[key] === item[key];
    });
    if (itemIndex > -1) {
      this.currentBreadcrumbs[itemIndex] = __spreadValues(__spreadValues({}, this.currentBreadcrumbs[itemIndex]), breadcrumb);
      const breadcrumbsToShow = this.currentBreadcrumbs.filter((item) => !item.skip);
      this.breadcrumbs.next([...breadcrumbsToShow]);
    }
  }
  /**
   * For a route with path param, we create regex dynamically from angular route syntax
   * '/mentor/:id' becomes '/mentor/[^/]',
   * breadcrumbService.set('/mentor/:id', 'Uday') should update 'Uday' as label for '/mentor/2' OR 'mentor/ada'
   */
  buildRegex(path) {
    return this.ensureLeadingSlash(path).replace(new RegExp(PATH_PARAM.REGEX_IDENTIFIER, "g"), PATH_PARAM.REGEX_REPLACER);
  }
  ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : `/${path}`;
  }
  /**
   * In App's RouteConfig, breadcrumb can be defined as a string OR a function OR an object
   *
   * string: simple static breadcrumb label for a path
   * function: callback that gets invoked with resolved path param
   * object: additional data defined along with breadcrumb label that gets passed to *xngBreadcrumbItem directive
   */
  extractLabel(config, resolvedParam) {
    const label = typeof config === "object" ? config.label : config;
    if (typeof label === "function") {
      return label(resolvedParam);
    }
    return label;
  }
  extractObject(config) {
    if (config && (typeof config === "string" || typeof config === "function")) {
      return {
        label: config
      };
    }
    return config || {};
  }
};
_BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) {
  return new (t || _BreadcrumbService)(ɵɵinject(ActivatedRoute), ɵɵinject(Router));
};
_BreadcrumbService.ɵprov = ɵɵdefineInjectable({
  token: _BreadcrumbService,
  factory: _BreadcrumbService.ɵfac,
  providedIn: "root"
});
var BreadcrumbService = _BreadcrumbService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: Router
  }], null);
})();
var _BreadcrumbComponent = class _BreadcrumbComponent {
  /**
   * separator between breadcrumbs, defaults to '/'.
   * User can customize separator either by passing a String or Template
   *
   * String --> Ex: <xng-breadcrumb separator="-"> </xng-breadcrumb>
   *
   * Template --> Ex: <xng-breadcrumb [separator]="separatorTemplate"> </xng-breadcrumb>
   * <ng-template #separatorTemplate><mat-icon>arrow_right</mat-icon></ng-template>
   */
  set separator(value) {
    if (value instanceof TemplateRef) {
      this.separatorTemplate = value;
      this._separator = void 0;
    } else {
      this.separatorTemplate = void 0;
      this._separator = value || "/";
    }
  }
  get separator() {
    return this._separator;
  }
  constructor(breadcrumbService, activateRoute) {
    this.breadcrumbService = breadcrumbService;
    this._separator = "/";
    this.autoGenerate = true;
    this.preserveQueryParams = true;
    this.preserveFragment = true;
    this.class = "";
    this.setupMessage = "not set up yet";
    this.someParameterValue = null;
    activateRoute.params.subscribe((params) => {
      this.setupComponent(params["someParam"]);
    });
  }
  setupComponent(someParam) {
    this.setupMessage = "set up at " + /* @__PURE__ */ new Date();
    this.someParameterValue = someParam;
  }
  ngOnInit() {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$.pipe(map((breadcrumbs) => {
      return breadcrumbs.filter((breadcrumb) => {
        if (this.autoGenerate) {
          return true;
        }
        return !breadcrumb.isAutoGeneratedLabel;
      }).map((breadcrumb) => {
        const {
          routeInterceptor,
          routeLink
        } = breadcrumb;
        return __spreadProps(__spreadValues({}, breadcrumb), {
          routeLink: routeInterceptor?.(routeLink, breadcrumb) || routeLink
        });
      });
    }));
  }
};
_BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || _BreadcrumbComponent)(ɵɵdirectiveInject(BreadcrumbService), ɵɵdirectiveInject(ActivatedRoute));
};
_BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbComponent,
  selectors: [["xng-breadcrumb"]],
  contentQueries: function BreadcrumbComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, BreadcrumbItemDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  inputs: {
    autoGenerate: "autoGenerate",
    preserveQueryParams: "preserveQueryParams",
    preserveFragment: "preserveFragment",
    class: "class",
    anchorTarget: "anchorTarget",
    separator: "separator"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 4,
  vars: 4,
  consts: [["aria-label", "breadcrumb", 1, "xng-breadcrumb-root", 3, "ngClass"], [1, "xng-breadcrumb-list"], [4, "ngFor", "ngForOf"], [1, "xng-breadcrumb-item"], ["class", "xng-breadcrumb-link", "rel", "noopener noreferrer", 3, "ngClass", "routerLink", "queryParams", "fragment", "target", 4, "ngIf"], ["class", "xng-breadcrumb-trail", 4, "ngIf"], ["class", "xng-breadcrumb-separator", "aria-hidden", "true", 4, "ngIf"], ["rel", "noopener noreferrer", 1, "xng-breadcrumb-link", 3, "ngClass", "routerLink", "queryParams", "fragment", "target"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [1, "xng-breadcrumb-trail"], ["aria-hidden", "true", 1, "xng-breadcrumb-separator"], [4, "ngTemplateOutlet"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "nav", 0)(1, "ol", 1);
      ɵɵtemplate(2, BreadcrumbComponent_ng_container_2_Template, 5, 3, "ng-container", 2);
      ɵɵpipe(3, "async");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.class);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 2, ctx.breadcrumbs$));
    }
  },
  dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, AsyncPipe, RouterModule, RouterLink],
  styles: [".xng-breadcrumb-root{margin:0}.xng-breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0}.xng-breadcrumb-item{list-style:none}.xng-breadcrumb-trail{display:flex;align-items:center}.xng-breadcrumb-link{display:flex;align-items:center;white-space:nowrap;color:inherit;text-decoration:none;transition:text-decoration .3s;cursor:pointer}.xng-breadcrumb-link:hover{text-decoration:underline}.xng-breadcrumb-link-disabled{pointer-events:none;cursor:disabled}.xng-breadcrumb-separator{display:flex;-webkit-user-select:none;user-select:none;margin-left:8px;margin-right:8px}\n"],
  encapsulation: 2
});
var BreadcrumbComponent = _BreadcrumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "xng-breadcrumb",
      standalone: true,
      imports: [CommonModule, RouterModule],
      encapsulation: ViewEncapsulation$1.None,
      template: `<nav aria-label="breadcrumb" class="xng-breadcrumb-root" [ngClass]="class">
  <ol class="xng-breadcrumb-list">
    <ng-container *ngFor="let breadcrumb of breadcrumbs$ | async; last as isLast; first as isFirst; index as index; count as count">
      <li class="xng-breadcrumb-item">
        <a
          *ngIf="!isLast"
          class="xng-breadcrumb-link"
          [ngClass]="{ 'xng-breadcrumb-link-disabled': breadcrumb.disable }"
          [attr.aria-disabled]="breadcrumb.disable"
          [attr.tabIndex]="breadcrumb.disable ? -1 : 0"
          rel="noopener noreferrer"
          [routerLink]="breadcrumb.routeInterceptor ? breadcrumb.routeInterceptor(breadcrumb.routeLink, breadcrumb) : breadcrumb.routeLink"
          [queryParams]="preserveQueryParams ? breadcrumb.queryParams : undefined"
          [fragment]="preserveFragment ? breadcrumb.fragment : undefined"
          [target]="anchorTarget ? anchorTarget : '_self'"
        >
          <ng-container
            *ngTemplateOutlet="
              itemTemplate;
              context: {
                $implicit: breadcrumb.label,
                info: breadcrumb.info,
                last: isLast,
                first: isFirst,
                index: index,
                count: count
              }
            "
          ></ng-container>
          <ng-container *ngIf="!itemTemplate">{{ breadcrumb.label }}</ng-container>
        </a>

        <label *ngIf="isLast" class="xng-breadcrumb-trail">
          <ng-container
            *ngTemplateOutlet="
              itemTemplate;
              context: {
                $implicit: breadcrumb.label,
                info: breadcrumb.info,
                last: isLast,
                first: isFirst,
                index: index,
                count: count
              }
            "
          ></ng-container>
          <ng-container *ngIf="!itemTemplate">{{ breadcrumb.label }}</ng-container>
        </label>
      </li>

      <li *ngIf="!isLast" class="xng-breadcrumb-separator" aria-hidden="true">
        <ng-container *ngTemplateOutlet="separatorTemplate"></ng-container>
        <ng-container *ngIf="!separatorTemplate">{{ separator }}</ng-container>
      </li>
    </ng-container>
  </ol>
</nav>
`,
      styles: [".xng-breadcrumb-root{margin:0}.xng-breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0}.xng-breadcrumb-item{list-style:none}.xng-breadcrumb-trail{display:flex;align-items:center}.xng-breadcrumb-link{display:flex;align-items:center;white-space:nowrap;color:inherit;text-decoration:none;transition:text-decoration .3s;cursor:pointer}.xng-breadcrumb-link:hover{text-decoration:underline}.xng-breadcrumb-link-disabled{pointer-events:none;cursor:disabled}.xng-breadcrumb-separator{display:flex;-webkit-user-select:none;user-select:none;margin-left:8px;margin-right:8px}\n"]
    }]
  }], () => [{
    type: BreadcrumbService
  }, {
    type: ActivatedRoute
  }], {
    itemTemplate: [{
      type: ContentChild,
      args: [BreadcrumbItemDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    autoGenerate: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    class: [{
      type: Input
    }],
    anchorTarget: [{
      type: Input
    }],
    separator: [{
      type: Input
    }]
  });
})();
export {
  BreadcrumbComponent,
  BreadcrumbItemDirective,
  BreadcrumbService
};
//# sourceMappingURL=xng-breadcrumb.js.map
