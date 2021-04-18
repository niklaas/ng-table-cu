(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ng-table-cu/ng-table-cu/src/main.ts */"zUnb");


/***/ }),

/***/ "896x":
/*!************************************************!*\
  !*** ./src/app/store/effects/posts.effects.ts ***!
  \************************************************/
/*! exports provided: PostsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsEffects", function() { return PostsEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_posts_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/posts.actions */ "quk0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_json_placeholder_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/json-placeholder/posts.service */ "CjAn");







class PostsEffects {
    constructor(actions$, postsService) {
        this.actions$ = actions$;
        this.postsService = postsService;
        this.loadPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_posts_actions__WEBPACK_IMPORTED_MODULE_3__["load"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.postsService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(posts => _actions_posts_actions__WEBPACK_IMPORTED_MODULE_3__["loadedSuccess"]({ posts })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_posts_actions__WEBPACK_IMPORTED_MODULE_3__["loadedError"]()))))));
    }
}
PostsEffects.ɵfac = function PostsEffects_Factory(t) { return new (t || PostsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_json_placeholder_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"])); };
PostsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PostsEffects, factory: PostsEffects.ɵfac });


/***/ }),

/***/ "9pw4":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _table_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.store */ "SqR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _shared_sortables_directives_sortables_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sortables/directives/sortables.directive */ "APbG");
/* harmony import */ var _shared_sortables_components_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sortables/components/sortable/sortable.component */ "vXg3");
/* harmony import */ var _components_table_search_table_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/table-search/table-search.component */ "bMAV");








function TableComponent_table_0_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sortable", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataCol_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dataCol_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", dataCol_r5);
} }
function TableComponent_table_0_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-table-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataCol_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataCol", dataCol_r6);
} }
function TableComponent_table_0_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataCol_r9 = ctx.$implicit;
    const dataRow_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dataRow_r7[dataCol_r9]);
} }
function TableComponent_table_0_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_table_0_tr_7_td_1_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", vm_r1.dataCols);
} }
function TableComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function TableComponent_table_0_Template_tr_cdkDropListDropped_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onCdkDropListDropped($event); })("sortingsChange", function TableComponent_table_0_Template_tr_sortingsChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onSortingsChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_table_0_th_3_Template, 5, 2, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableComponent_table_0_th_5_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TableComponent_table_0_tr_7_Template, 2, 1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", vm_r1.dataCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", vm_r1.dataCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", vm_r1.dataRows);
} }
class TableComponent {
    constructor(tableStore) {
        this.tableStore = tableStore;
        this.vm$ = this.tableStore.vm$;
    }
    set dataRows(value) {
        // TODO: get rid of null
        this.tableStore.updateDataRows(value || []);
    }
    onSearchTermChanged(dataCol, term) {
        this.tableStore.updateSearchTerm({ dataCol, term });
    }
    onCdkDropListDropped(cdkDragDrop) {
        const { previousIndex, currentIndex } = cdkDragDrop;
        this.tableStore.moveDataCol({ previousIndex, currentIndex });
    }
    onSortingsChanged(sortings) {
        this.tableStore.updateSorting(Object.entries(sortings).map(([dataCol, sorting]) => ({ dataCol, sorting })));
    }
    ngOnInit() { }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_store__WEBPACK_IMPORTED_MODULE_0__["TableStore"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { dataRows: "dataRows" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_table_store__WEBPACK_IMPORTED_MODULE_0__["TableStore"]])], decls: 2, vars: 3, consts: [[4, "ngIf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", "appSortables", "", 3, "cdkDropListDropped", "sortingsChange"], ["cdkDrag", "", "cdkDragLockAxis", "x", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragLockAxis", "x"], [1, "th-flex-container"], [3, "id"], [3, "dataCol"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TableComponent_table_0_Template, 8, 3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.vm$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _shared_sortables_directives_sortables_directive__WEBPACK_IMPORTED_MODULE_4__["SortablesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], _shared_sortables_components_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableComponent"], _components_table_search_table_search_component__WEBPACK_IMPORTED_MODULE_6__["TableSearchComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(1)   th[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(1)   th[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(1).cdk-drop-list-dragging   th[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(1)   th[_ngcontent-%COMP%]   app-sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(1)   th[_ngcontent-%COMP%]   .th-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(1)   th[_ngcontent-%COMP%]   .th-flex-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRoZWFkIHRyOm50aC1vZi10eXBlKDEpIHRoIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG50YWJsZSB0aGVhZCB0cjpudGgtb2YtdHlwZSgxKSB0aDphY3RpdmUge1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG50YWJsZSB0aGVhZCB0cjpudGgtb2YtdHlwZSgxKS5jZGstZHJvcC1saXN0LWRyYWdnaW5nIHRoIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxudGFibGUgdGhlYWQgdHI6bnRoLW9mLXR5cGUoMSkgdGggYXBwLXNvcnRhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50YWJsZSB0aGVhZCB0cjpudGgtb2YtdHlwZSgxKSB0aCAudGgtZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbnRhYmxlIHRoZWFkIHRyOm50aC1vZi10eXBlKDEpIHRoIC50aC1mbGV4LWNvbnRhaW5lciA+ICoge1xuICBmbGV4OiBpbml0aWFsO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "APbG":
/*!********************************************************************!*\
  !*** ./src/app/shared/sortables/directives/sortables.directive.ts ***!
  \********************************************************************/
/*! exports provided: SortablesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortablesDirective", function() { return SortablesDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SortablesDirective {
    constructor() {
        this._sortablesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.sortables$ = this._sortablesSource.asObservable();
        this.sortingsChange = this.sortables$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(sortables => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(sortables.map(sortable => sortable.sorting$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(sorting => (sortable.id ? { [sortable.id]: sorting } : {})))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(s => s.reduce((acc, curr) => (Object.assign(Object.assign({}, acc), curr)), {})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(100) // prevent useless item emissions
        );
    }
    get sortables() {
        return this._sortablesSource.value;
    }
    addSortable(sortable) {
        if (this._sortablesSource.value.some(s => s.id === sortable.id)) {
            throw new Error("SortableComponent with same id already added");
        }
        this._sortablesSource.next([...this._sortablesSource.value.filter(s => s !== sortable), sortable]);
    }
}
SortablesDirective.ɵfac = function SortablesDirective_Factory(t) { return new (t || SortablesDirective)(); };
SortablesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SortablesDirective, selectors: [["", "appSortables", ""]], outputs: { sortingsChange: "sortingsChange" } });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CjAn":
/*!************************************************************!*\
  !*** ./src/app/services/json-placeholder/posts.service.ts ***!
  \************************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostsService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "MD2O":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/posts.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, postsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsReducer", function() { return postsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/posts.actions */ "quk0");


const initialState = [];
const postsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_posts_actions__WEBPACK_IMPORTED_MODULE_1__["loadedSuccess"], (_, { posts }) => [...posts]));


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sortables_directives_sortables_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortables/directives/sortables.directive */ "APbG");
/* harmony import */ var _sortables_components_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortables/components/sortable/sortable.component */ "vXg3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_sortables_directives_sortables_directive__WEBPACK_IMPORTED_MODULE_1__["SortablesDirective"], _sortables_components_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_2__["SortableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_sortables_directives_sortables_directive__WEBPACK_IMPORTED_MODULE_1__["SortablesDirective"], _sortables_components_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_2__["SortableComponent"]] }); })();


/***/ }),

/***/ "SqR5":
/*!*************************************************!*\
  !*** ./src/app/components/table/table.store.ts ***!
  \*************************************************/
/*! exports provided: TableStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStore", function() { return TableStore; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/component-store */ "ufcJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "rfrl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TableStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_1__["ComponentStore"] {
    constructor() {
        super({ dataRows: [], searchTerms: [], dataCols: [], sortings: [] });
        this.hasSearchTerms$ = this.select(({ searchTerms }) => !!searchTerms.length && searchTerms.some(searchTerm => searchTerm.term));
        this.hasSortings$ = this.select(({ sortings }) => !!sortings.length && sortings.some(sorting => sorting.sorting !== "none"));
        this.searchTerms$ = this.select(({ searchTerms }) => searchTerms);
        this.dataCols$ = this.select(({ dataCols }) => dataCols);
        this.dataRows$ = this.select(({ dataRows, searchTerms, sortings }) => ({
            dataRows,
            searchTerms,
            sortings,
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.hasSearchTerms$, this.hasSortings$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([{ dataRows, searchTerms, sortings }, hasSearchTerms, hasSortings]) => {
            // To increase performance, sorting and/or filtering are only applied if necessary
            if (hasSearchTerms && hasSortings) {
                return [...dataRows.filter(this._filterWithSearchTerms(searchTerms))].sort(this._sortWithSortings(sortings));
            }
            if (hasSearchTerms) {
                return dataRows.filter(this._filterWithSearchTerms(searchTerms));
            }
            if (hasSortings) {
                return [...dataRows].sort(this._sortWithSortings(sortings));
            }
            return dataRows;
        }));
        this.updateDataRows = this.updater((state, dataRows) => {
            const dataCols = Object.keys(dataRows[0] || {});
            return Object.assign(Object.assign({}, state), { dataRows,
                dataCols, searchTerms: dataCols.map(dataCol => ({ dataCol, term: "" })) });
        });
        this.moveDataCol = this.updater((state, movement) => (Object.assign(Object.assign({}, state), { dataCols: Object(immer__WEBPACK_IMPORTED_MODULE_3__["default"])(state.dataCols, draftDataCols => Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(draftDataCols, movement.previousIndex, movement.currentIndex)) })));
        this.updateSearchTerm = this.updater((state, searchTerm) => {
            return Object.assign(Object.assign({}, state), { searchTerms: state.searchTerms.reduce((acc, curr) => {
                    if (curr.dataCol === searchTerm.dataCol) {
                        return [...acc, searchTerm];
                    }
                    return [...acc, curr];
                }, []) });
        });
        this.updateSorting = this.updater((state, sortings) => (Object.assign(Object.assign({}, state), { sortings })));
        this.vm$ = this.select(this.dataRows$, this.dataCols$, this.searchTerms$, (dataRows, dataCols, searchTerms) => ({
            dataRows,
            dataCols,
            searchTerms: dataCols.map(
            // Make sure that there is an entry for each column (even if the term is empty)
            dataCol => searchTerms.find(searchTerm => searchTerm.dataCol === dataCol) || { dataCol, term: "" }),
        }));
    }
    _searchTermOfCol(searchTerms, col) {
        var _a;
        return ((_a = searchTerms.find(searchTerm => searchTerm.dataCol === col)) === null || _a === void 0 ? void 0 : _a.term) || "";
    }
    _filterWithSearchTerms(searchTerms) {
        // TODO: filtering can be improved b/c keeps on checking rows that are
        // already filtered out
        return (dataRow) => Object.entries(dataRow)
            .map(([dataColName, cell]) => ({
            cell,
            colSearchTerm: this._searchTermOfCol(searchTerms, dataColName),
        }))
            .filter(({ colSearchTerm }) => colSearchTerm)
            .every(({ colSearchTerm, cell }) => {
            if (typeof cell === "string") {
                return cell.includes(colSearchTerm);
            }
            if (typeof cell === "number") {
                // TODO: type casting might fail?
                return cell === +colSearchTerm;
            }
            // If the cell is of some other type show it, b/c searching through
            // it is not straightforward
            return true;
        });
    }
    _sortWithSortings(sortings) {
        return (a, b) => {
            // NOTE: only sorting by single column supported
            const { dataCol, sorting } = sortings.find(({ sorting }) => sorting !== "none") || {};
            if (!dataCol || !sorting || sorting === "none") {
                return 0;
            }
            const switcher = sorting === "asc" ? 1 : -1;
            // Sort numbers and strings only, everything else is not straightforward
            if ((typeof a[dataCol] === "number" || typeof a[dataCol] === "string") &&
                (typeof b[dataCol] === "number" || typeof b[dataCol] === "string")) {
                if (a[dataCol] < b[dataCol]) {
                    return -1 * switcher;
                }
                if (a[dataCol] > b[dataCol]) {
                    return 1 * switcher;
                }
            }
            return 0;
        };
    }
}
TableStore.ɵfac = function TableStore_Factory(t) { return new (t || TableStore)(); };
TableStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TableStore, factory: TableStore.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _store_actions_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions/posts.actions */ "quk0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table/table.component */ "9pw4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AppComponent {
    constructor(store) {
        this.store = store;
        this.posts$ = this.store.select(state => state.posts);
    }
    ngOnInit() {
        this.store.dispatch(_store_actions_posts_actions__WEBPACK_IMPORTED_MODULE_0__["load"]());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[1, "container"], [3, "dataRows"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataRows", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.posts$));
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     table {\n  table-layout: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WxUC":
/*!**************************************************!*\
  !*** ./src/app/components/table/table.module.ts ***!
  \**************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "9pw4");
/* harmony import */ var _components_table_search_table_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/table-search/table-search.component */ "bMAV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TableModule, { declarations: [_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"], _components_table_search_table_search_component__WEBPACK_IMPORTED_MODULE_2__["TableSearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], exports: [_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_table_table_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table/table.module */ "WxUC");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_effects_posts_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/posts.effects */ "896x");
/* harmony import */ var _store_reducers_posts_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/posts.reducer */ "MD2O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({ posts: _store_reducers_posts_reducer__WEBPACK_IMPORTED_MODULE_7__["postsReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_store_effects_posts_effects__WEBPACK_IMPORTED_MODULE_6__["PostsEffects"]]),
            _components_table_table_module__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _components_table_table_module__WEBPACK_IMPORTED_MODULE_3__["TableModule"]] }); })();


/***/ }),

/***/ "bMAV":
/*!************************************************************************************!*\
  !*** ./src/app/components/table/components/table-search/table-search.component.ts ***!
  \************************************************************************************/
/*! exports provided: TableSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSearchComponent", function() { return TableSearchComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _table_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../table.store */ "SqR5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class TableSearchComponent {
    constructor(tableStore) {
        this.tableStore = tableStore;
        this.dataCol = "";
        this.searchTerm$ = this.tableStore.searchTerms$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(searchTerms => { var _a; return ((_a = searchTerms.find(searchTerm => searchTerm.dataCol === this.dataCol)) === null || _a === void 0 ? void 0 : _a.term) || ""; }));
    }
    onSearchTermChanged(value) {
        this.tableStore.updateSearchTerm({ dataCol: this.dataCol, term: value });
    }
    ngOnInit() { }
}
TableSearchComponent.ɵfac = function TableSearchComponent_Factory(t) { return new (t || TableSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_store__WEBPACK_IMPORTED_MODULE_2__["TableStore"])); };
TableSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableSearchComponent, selectors: [["app-table-search"]], inputs: { dataCol: "dataCol" }, decls: 2, vars: 4, consts: [["type", "text", "placeholder", "Search...", 3, "ngModel", "ngModelChange"]], template: function TableSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TableSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onSearchTermChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.searchTerm$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "search-" + ctx.dataCol);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["input[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InRhYmxlLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "quk0":
/*!************************************************!*\
  !*** ./src/app/store/actions/posts.actions.ts ***!
  \************************************************/
/*! exports provided: load, loadedSuccess, loadedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedSuccess", function() { return loadedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedError", function() { return loadedError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Posts] Load");
const loadedSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Posts] Loaded Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadedError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Posts] Loaded Error");


/***/ }),

/***/ "vXg3":
/*!****************************************************************************!*\
  !*** ./src/app/shared/sortables/components/sortable/sortable.component.ts ***!
  \****************************************************************************/
/*! exports provided: SortableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _directives_sortables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/sortables.directive */ "APbG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SortableComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SortableComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SortableComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2195");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SortableComponent {
    constructor(container) {
        this.container = container;
        this._sortingSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("none");
        this.sorting$ = this._sortingSource.asObservable();
    }
    onClick() {
        this.toggleSorting();
    }
    ngOnInit() {
        if (!this.id) {
            throw new Error("SortableComponent requires property `id` to be set");
        }
        if (this.container) {
            this.container.addSortable(this);
        }
    }
    toggleSorting() {
        this._resetSortingOfSiblings();
        if (this._sortingSource.value === "asc") {
            this._sortingSource.next("desc");
            return;
        }
        if (this._sortingSource.value === "desc") {
            this._sortingSource.next("none");
            return;
        }
        this._sortingSource.next("asc");
    }
    _resetSorting() {
        this._sortingSource.next("none");
    }
    _resetSortingOfSiblings() {
        this.container.sortables.filter(sortable => sortable !== this).forEach(sortable => sortable._resetSorting());
    }
}
SortableComponent.ɵfac = function SortableComponent_Factory(t) { return new (t || SortableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_directives_sortables_directive__WEBPACK_IMPORTED_MODULE_2__["SortablesDirective"], 12)); };
SortableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SortableComponent, selectors: [["app-sortable"]], hostVars: 4, hostBindings: function SortableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortableComponent_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sort-asc", ctx._sortingSource.value === "asc")("sort-desc", ctx._sortingSource.value === "desc");
    } }, inputs: { id: "id" }, decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function SortableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SortableComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SortableComponent_span_3_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SortableComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.sorting$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "desc");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0YWJsZS5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map