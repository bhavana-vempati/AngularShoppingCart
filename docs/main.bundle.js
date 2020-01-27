webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_product_product_component__["a" /* ProductComponent */]
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__components_product_detail_product_detail_component__["a" /* ProductDetailComponent */]
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_4__components_cart_cart_component__["a" /* CartComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_material__ = __webpack_require__("../../../../../src/app/modules/material/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_actions__ = __webpack_require__("../../../../../src/app/store/actions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_reducers__ = __webpack_require__("../../../../../src/app/store/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_effects__ = __webpack_require__("../../../../../src/app/store/effects/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filterdata_pipe__ = __webpack_require__("../../../../../src/app/filterdata.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MaterialModule } from '@angular/material';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components__["a" /* COMPONENTS */],
                __WEBPACK_IMPORTED_MODULE_13__filterdata_pipe__["a" /* FilterdataPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__modules_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__store_reducers__["a" /* reducers */]),
                // StoreDevtoolsModule.instrument({
                //   maxAge: 25 //  Retains last 25 states
                // }),
                __WEBPACK_IMPORTED_MODULE_12__store_effects__["a" /* AllEffects */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services__["a" /* SERVICES */], __WEBPACK_IMPORTED_MODULE_10__store_actions__["a" /* ACTIONS */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart.length <= 0\">\n    <h3 class=\"text-center\">No items in the Cart!</h3>\n</div>\n<table class=\"table table-striped table-hover \">\n    <thead>\n        <tr>\n        <th>Quantity Amount</th>\n        <th>Product Name</th>\n        <th>Product Price</th>\n        <th>Product Image</th>\n        </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let product of cart; let i = index\">\n        <td>{{product.quantity}}</td>\n        <td>{{product.name}}</td>\n        <!-- <td>{{ product.price*(1-product.discount/100 )}}</td> -->\n        <td>{{ product.price}}</td>\n        <td><img src={{product.img_url}} width=\"100\" height=\"100\" /></td>\n        <td><button (click)=\"removeProduct(product)\" class=\"btn btn-xs btn-danger\">Remove </button></td>\n      </tr>\n      <tr class=\"warning\">\n        <td></td>\n        <td>Total Items: {{totalQuantity}}</td>\n        <td>Total: ${{totalPrice}}</td>\n        <td><button (click)=\"checkout()\" class=\"btn btn-md btn-success\">Checkout</button></td>\n      </tr>\n     \n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_store_actions_cart_actions__ = __webpack_require__("../../../../../src/app/store/actions/cart.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(productService, cartStore) {
        this.productService = productService;
        this.cartStore = cartStore;
        this.cart = [];
    }
    CartComponent.prototype.removeProduct = function (product) {
        this.cartStore.removeFromCart(product);
    };
    CartComponent.prototype.checkout = function () {
        alert("Sorry! Checkout will be coming soon!");
    };
    CartComponent.prototype.getTotalPrice = function () {
        var totalCost = [];
        var quantity = [];
        var intPrice;
        var intQuantity;
        this.cart.forEach(function (item, i) {
            intPrice = parseInt(item.price);
            intQuantity = parseInt(item.quantity);
            totalCost.push(intPrice);
            quantity.push(intQuantity);
        });
        //this.discountPrice=totalCost-totalCost/totalDiscount
        this.totalPrice = totalCost.reduce(function (acc, item) {
            return (acc += item);
        }, 0);
        this.totalQuantity = quantity.reduce(function (acc, item) {
            return (acc += item);
        }, 0);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartSubscription = this.cartStore.getState().subscribe(function (res) {
            _this.cart = res.products;
            _this.getTotalPrice();
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.cartSubscription.unsubscribe();
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: "cart",
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_store_actions_cart_actions__["a" /* CartAction */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_store_actions_cart_actions__["a" /* CartAction */]) === "function" && _b || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b;
}());

//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__cart_cart_component__["a" /* CartComponent */],
    __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavBarComponent */],
    __WEBPACK_IMPORTED_MODULE_2__product_product_component__["a" /* ProductComponent */],
    __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <img class=\"navbar-brand\" routerLink=\"/\" src=\"\\assets\\img\\header.png\" />\n    </div>\n\n    <div>\n      <!-- <ul class=\"nav navbar-nav navbar-right\"> -->\n      <li>\n        <a routerLink=\"/cart\">\n          <img\n            class=\"navbar-brand carticon\"\n            routerLink=\"/\"\n            src=\"assets\\cart.png\"\n        /></a>\n      </li>\n      <li>\n        <div *ngIf=\"totalPrice\">\n          <div class=\"thumbnail price\">\n            <strong>TotalItems: </strong\n            ><span class=\"badge\">{{ totalQuantity }}</span>\n            <strong>Total Price: ${{ totalPrice }}</strong>\n          </div>\n        </div>\n      </li>\n      <!-- </ul> -->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #406194; }\n\n.glyphicon {\n  font-size: 30px; }\n\n.navbar-brand {\n  height: 80px;\n  cursor: pointer; }\n\n.glyphicon-shopping-cart {\n  margin-right: 15px; }\n\n.navbar-default .navbar-nav > li > a {\n  font-size: 16px;\n  color: white; }\n\n.price {\n  margin-right: 33px;\n  float: right; }\n\n.navbar-default .navbar-brand {\n  font-family: \"Pacifico\", Helvetica, sans-serif;\n  font-size: 30px;\n  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1), 7px 7px 0px rgba(0, 0, 0, 0.05);\n  color: white; }\n\n.carticon {\n  float: right; }\n\n@media only screen and (min-width: 400px) and (max-width: 736px) {\n  .carticon {\n    position: relative;\n    bottom: 75px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_store_actions_cart_actions__ = __webpack_require__("../../../../../src/app/store/actions/cart.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(productService, cartStore) {
        this.productService = productService;
        this.cartStore = cartStore;
        this.cart = [];
    }
    NavBarComponent.prototype.getTotalPrice = function () {
        var totalCost = [];
        var quantity = [];
        var intPrice;
        var intQuantity;
        this.cart.products.forEach(function (item, i) {
            intPrice = parseInt(item.price);
            intQuantity = parseInt(item.quantity);
            totalCost.push(intPrice);
            quantity.push(intQuantity);
        });
        this.totalPrice = totalCost.reduce(function (acc, item) {
            return (acc += item);
        }, 0);
        this.totalQuantity = quantity.reduce(function (acc, item) {
            return (acc += item);
        }, 0);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartStore.getState().subscribe(function (res) {
            _this.cart = res;
            _this.getTotalPrice();
        });
    };
    NavBarComponent.prototype.sortByLow = function (field) {
        this.cart.sort(function (a, b) {
            if (a[field] > b[field]) {
                return -1;
            }
            else if (a[field] < b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.orderedProducts = this.cart;
    };
    NavBarComponent.prototype.sortByLowtoHigh = function (price) {
        this.sortByLow("price");
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: "navbar",
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_store_actions_cart_actions__["a" /* CartAction */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_store_actions_cart_actions__["a" /* CartAction */]) === "function" && _b || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a, _b;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedProduct\">\n  <div class=\"col-md-6 well\">\n    <span class=\"badge\">{{ selectedProduct.id }}</span>\n    <strong>{{ selectedProduct.name }}</strong>\n    <p>{{ selectedProduct.info }}</p>\n    <div style=\"display: flex\">\n      <span class=\"padding-right-5\">Quantity: </span>\n      <input type=\"number\" [(ngModel)]=\"quantity\" />\n    </div>\n    <h1 class=\"badge\">${{ selectedProduct.price }}</h1>\n    <button (click)=\"addToCart(selectedProduct)\" class=\"btn btn-md btn-primary\">\n      Add to Cart\n    </button>\n    <hr />\n    \n  </div>\n  <div class=\"col-md-4 thumbnail margin-left-50\">\n    <img width=\"250\" height=\"250\" src=\"{{ selectedProduct.src }}\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions_cart_actions__ = __webpack_require__("../../../../../src/app/store/actions/cart.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, route, location, cartStore) {
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.cartStore = cartStore;
    }
    ProductDetailComponent.prototype.addToCart = function (product) {
        this.cartStore.addToCart(product, this.quantity || 1);
    };
    // When initialized, fetch for the product info based on the product id and set it as selectedProduct
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            var id = parseInt(param["id"]);
            _this.productService
                .getProduct(id)
                .then(function (product) { return (_this.selectedProduct = product); });
        });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: "product-detail",
            template: __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_store_actions_cart_actions__["a" /* CartAction */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_store_actions_cart_actions__["a" /* CartAction */]) === "function" && _d || Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <tr>\n    <th colspan=\"4\">\n      Search :\n      <input type=\"text\" class=\"inputText\" [(ngModel)]=\"queryString\" />\n    </th>\n  </tr>\n</div>\n\n<!-- <div>\n  <img class=\"shop-search\" (click)=\"displaySearch()\" src=\"\\assets\\search.png\" />\n</div> -->\n<div class=\"filter-options\">\n  <a class=\"options\">Sort By</a>\n  <button class=\"options\" (click)=\"sortByHigtoLow(price)\">\n    Price--High Low\n  </button>\n  <button class=\"options\" (click)=\"sortByLowtoHigh(price)\">\n    Price--Low High\n  </button>\n  <button class=\"options\" (click)=\"sortByDiscount(discount)\">\n    Discount\n  </button>\n</div>\n<hr />\n<div class=\"filters\"></div>\n\n<div class=\"row container-left\">\n  <div\n    class=\"div-space\"\n    *ngFor=\"let product of products | filterdata: queryString:'name'\"\n  >\n    <div class=\"col-xs-4 padding-10 img-width\">\n      <div class=\"card-container-phone\">\n        <img\n          class=\"image-align-center padding-bottom-10\"\n          src=\"{{ product.img_url }}\"\n        />\n      </div>\n      <div class=\"example-header-image\">\n        <div>\n          <strong class=\"name\">{{ product.name }}</strong>\n        </div>\n      </div>\n      <div>\n        <p>{{ product.info }}</p>\n      </div>\n      <div class=\"pricesection\">\n        <p class=\"parastyle\">${{ product.price }}</p>\n        <p class=\"parastyle discountcss\">{{ product.discount }}%off</p>\n        <p class=\"parastyle discountcss\">\n          {{ product.price * (1 - product.discount / 100) }} Price-after-\n          discount\n        </p>\n      </div>\n      <button (click)=\"addToCart(product)\" class=\"addbutton\">\n        Add to Cart\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\n  margin: auto;\n  padding: 10px;\n  position: absolute;\n  top: 2%;\n  left: 39%;\n  background-color: white; }\n  .search .inputText {\n    padding: 5px; }\n\n.container-left {\n  padding-left: 150px; }\n  .container-left .card-container-phone {\n    padding: 18px; }\n    .container-left .card-container-phone .image-align-center {\n      margin-left: -10px;\n      width: 220px;\n      height: 220px; }\n  .container-left .name {\n    font-size: 20px;\n    font-style: Verdana; }\n  .container-left .parastyle {\n    margin-bottom: 0px !important;\n    margin-left: 5px; }\n  .container-left .pricesection {\n    padding-bottom: 0px;\n    margin-top: -20px;\n    font-size: 15px; }\n    .container-left .pricesection .parastyle {\n      margin-bottom: 0px !important;\n      margin-left: 5px; }\n    .container-left .pricesection .discountcss {\n      color: green;\n      font-weight: bold; }\n  .container-left .addbutton {\n    background-color: yellow;\n    border-radius: 30px;\n    border-width: 0px;\n    padding: 10px 20px 10px 20px; }\n\n.img-width {\n  width: 25%; }\n\n.filter-options {\n  margin-left: 13%; }\n\ninput[type=\"text\"]:focus {\n  box-shadow: inset 0 -2px 0 #0000; }\n\n.shop-search {\n  width: 25px;\n  height: 25px;\n  margin-top: 25px;\n  position: absolute;\n  left: 97%;\n  top: 0%;\n  cursor: pointer; }\n\n@media only screen and (min-width: 400px) and (max-width: 736px) {\n  .container-left {\n    padding-left: 0px !important; }\n    .container-left .img-width {\n      width: 50%; }\n  .search {\n    left: 20% !important; } }\n\n@media only screen and (min-width: 737px) and (max-width: 1100px) {\n  .img-width {\n    width: 33.33%; }\n  .image-align-center {\n    width: 175px !important;\n    height: 175px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions_cart_actions__ = __webpack_require__("../../../../../src/app/store/actions/cart.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    //  searchDisplay: boolean = false;
    function ProductComponent(productService, router, cartStore) {
        this.productService = productService;
        this.router = router;
        this.cartStore = cartStore;
    }
    // Dynamic route for detail info when a product is clicked
    ProductComponent.prototype.clickedProduct = function (product) {
        var link = ["/detail", product.id];
        this.router.navigate(link);
    };
    // When add to cart button is clicked
    ProductComponent.prototype.addToCart = function (product) {
        this.cartStore.addToCart(product, this.quantity || 1);
    };
    ProductComponent.prototype.getProductData = function () {
        var _this = this;
        this.productService
            .getProducts()
            .then(function (products) { return (_this.products = products); });
    };
    //   displaySearch() {
    //     this.searchDisplay = true;
    //   }
    ProductComponent.prototype.ngOnInit = function () {
        // Get initial data from productService to display on the page
        this.getProductData();
    };
    ProductComponent.prototype.sortByLow = function (field) {
        this.products.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.orderedProducts = this.products;
    };
    //sort to get higest value first
    ProductComponent.prototype.sortByHigh = function (field) {
        this.products.sort(function (a, b) {
            if (a[field] > b[field]) {
                return -1;
            }
            else if (a[field] < b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.orderedProducts = this.products;
    };
    //sort to get more discount first
    ProductComponent.prototype.sortBy = function (field) {
        this.products.sort(function (a, b) {
            if (a[field] > b[field]) {
                return -1;
            }
            else if (a[field] < b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.orderedProducts = this.products;
    };
    ProductComponent.prototype.sortByLowtoHigh = function (price) {
        this.sortByLow("price");
    };
    ProductComponent.prototype.sortByHigtoLow = function (price) {
        this.sortByHigh("price");
    };
    ProductComponent.prototype.sortByDiscount = function (discount) {
        this.sortBy("discount");
    };
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: "product",
            template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__store_actions_cart_actions__["a" /* CartAction */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__store_actions_cart_actions__["a" /* CartAction */]) === "function" && _c || Object])
    ], ProductComponent);
    return ProductComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/filterdata.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterdataPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterdataPipe = /** @class */ (function () {
    function FilterdataPipe() {
    }
    FilterdataPipe.prototype.transform = function (items, value, label) {
        if (!items)
            return [];
        if (!value)
            return items;
        if (value == '' || value == null)
            return [];
        return items.filter(function (e) { return e[label].toLowerCase().indexOf(value) > -1; });
    };
    FilterdataPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filterdata'
        })
    ], FilterdataPipe);
    return FilterdataPipe;
}());

//# sourceMappingURL=filterdata.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/models/product-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS; });
var PRODUCTS = [
    {
        id: 9090,
        name: "Item1",
        price: 200,
        discount: 10,
        category: "fiction",
        img_url: "http://lorempixel.com/500/600/technics/"
    },
    {
        id: 9091,
        name: "Item2",
        price: 250,
        discount: 15,
        category: "literature",
        img_url: "http://lorempixel.com/500/600/technics/"
    },
    {
        id: 9092,
        name: "Item3",
        price: 320,
        discount: 5,
        category: "literature",
        img_url: "http://lorempixel.com/500/600/technics/"
    },
    {
        id: 9093,
        name: "Item4",
        price: 290,
        discount: 0,
        category: "thriller",
        img_url: "http://lorempixel.com/500/600/technics/"
    },
    {
        id: 9094,
        name: "Item1",
        price: 500,
        discount: 25,
        category: "thriller",
        img_url: "http://lorempixel.com/500/600/technics/"
    },
    {
        id: 9095,
        name: "Item2",
        price: 150,
        discount: 5,
        category: "literature",
        img_url: "http://lorempixel.com/500/600/technics/"
    },
    {
        id: 9096,
        name: "Item3",
        price: 700,
        discount: 22,
        category: "literature",
        img_url: "http://lorempixel.com/500/600/technics/"
    },
    {
        id: 9097,
        name: "Item4",
        price: 350,
        discount: 18,
        category: "fiction",
        img_url: "http://lorempixel.com/500/600/technics/"
    }
];
//# sourceMappingURL=product-data.js.map

/***/ }),

/***/ "../../../../../src/app/modules/material/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRippleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatStepperModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatCommonModule */],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICES; });

var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0__product_service__["a" /* ProductService */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_data__ = __webpack_require__("../../../../../src/app/models/product-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__models_product_data__["a" /* PRODUCTS */]);
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts().then(function (products) {
            return products.find(function (product) { return product.id === id; });
        });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());

// import { Injectable } from "@angular/core";
// import { HttpClient, HttpResponse } from "@angular/common/http";
// @Injectable()
// export class ProductService {
//   constructor(private http: HttpClient) {}
//   getData() {
//     return this.http.get(`https://api.myjson.com/bins/qzuzi`);
//   }
// }
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/store/actions/cart.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartAction; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function type(action) {
    return action;
}
var ActionTypes = {
    SEARCH: type('[Cart] Search'),
    SEARCH_COMPLETE: type('[Cart] Search Complete'),
    LOAD: type('[Cart] Load'),
    SELECT: type('[Cart] Select'),
    ADD_TO_CART: type('[Cart] Add'),
    REMOVE_FROM_CART: type('[Cart] Remove'),
};
var CartAction = /** @class */ (function () {
    function CartAction(store) {
        this.store = store;
    }
    CartAction.prototype.getState = function () {
        return this.store.select('cart');
    };
    CartAction.prototype.addToCart = function (product, quantity) {
        console.log('add,', product);
        this.store.dispatch({
            type: ActionTypes.ADD_TO_CART,
            payload: {
                product: product,
                quantity: quantity
            }
        });
    };
    CartAction.prototype.removeFromCart = function (payload) {
        console.log('remove,', payload);
        this.store.dispatch({
            type: ActionTypes.REMOVE_FROM_CART,
            payload: payload
        });
    };
    CartAction = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
    ], CartAction);
    return CartAction;
    var _a;
}());

//# sourceMappingURL=cart.actions.js.map

/***/ }),

/***/ "../../../../../src/app/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_actions__ = __webpack_require__("../../../../../src/app/store/actions/cart.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_actions__ = __webpack_require__("../../../../../src/app/store/actions/profile.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIONS; });


var ACTIONS = [
    __WEBPACK_IMPORTED_MODULE_0__cart_actions__["a" /* CartAction */],
    __WEBPACK_IMPORTED_MODULE_1__profile_actions__["a" /* ProfileAction */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/store/actions/profile.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* unused harmony export USER_GET */
/* unused harmony export USER_GET_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_TRY_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_TRY_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USER_TRY_LOGIN_FAIL; });
/* unused harmony export USER_TRY_REGISTER */
/* unused harmony export USER_TRY_REGISTER_SUCCESS */
/* unused harmony export USER_TRY_REGISTER_FAIL */
/* unused harmony export USER_TRY_RESET_PASSWORD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileAction; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var USER_GET = 'Profile: get user';
var USER_GET_SUCCESS = 'Profile: get user success';
var USER_TRY_LOGIN = 'Profile: user try login';
var USER_TRY_LOGIN_SUCCESS = 'Profile: user try login success';
var USER_TRY_LOGIN_FAIL = 'Profile: user try login fail';
var USER_TRY_REGISTER = 'Profile: user try register';
var USER_TRY_REGISTER_SUCCESS = 'Profile: user try register success';
var USER_TRY_REGISTER_FAIL = 'Profile: user try register fail';
var USER_TRY_RESET_PASSWORD = 'Profile: user try reset password';
var ProfileAction = /** @class */ (function () {
    function ProfileAction(store) {
        this.store = store;
    }
    ProfileAction = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
    ], ProfileAction);
    return ProfileAction;
    var _a;
}());

//# sourceMappingURL=profile.actions.js.map

/***/ }),

/***/ "../../../../../src/app/store/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_effects__ = __webpack_require__("../../../../../src/app/store/effects/profile.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllEffects; });


var AllEffects = [
    __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* EffectsModule */].forRoot([
        __WEBPACK_IMPORTED_MODULE_0__profile_effects__["a" /* ProfileEffects */]
    ])
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/store/effects/profile.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_profile_actions__ = __webpack_require__("../../../../../src/app/store/actions/profile.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfileEffects = /** @class */ (function () {
    function ProfileEffects(actions$, http, router) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.userLogin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__actions_profile_actions__["b" /* USER_TRY_LOGIN */])
            .switchMap(function (action) {
            return _this.http
                .post("/api/user/login", action.payload)
                .map(function (response) { return response.json(); })
                .map(function (response) { return ({
                type: __WEBPACK_IMPORTED_MODULE_5__actions_profile_actions__["c" /* USER_TRY_LOGIN_SUCCESS */],
                payload: response
            }); })
                .catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_5__actions_profile_actions__["d" /* USER_TRY_LOGIN_FAIL */],
                    payload: err.json()
                });
            });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ProfileEffects.prototype, "userLogin$", void 0);
    ProfileEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], ProfileEffects);
    return ProfileEffects;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.effects.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/cart.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cart_actions__ = __webpack_require__("../../../../../src/app/store/actions/cart.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    products: []
};
/* harmony default export */ __webpack_exports__["a"] = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart_actions__["b" /* ActionTypes */].ADD_TO_CART:
            {
                var addProduct = Object.assign({}, action.payload.product);
                addProduct.quantity = action.payload.quantity;
                addProduct.price = (parseInt(addProduct.price) * parseInt(addProduct.quantity)).toFixed(2);
                return __assign({}, state, { products: state.products.concat([
                        addProduct
                    ]) });
            }
            ;
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart_actions__["b" /* ActionTypes */].REMOVE_FROM_CART: {
            //  return a new array excluding the product that needs to be removed
            var index = state.products.findIndex(function (product) { return product.id === action.payload.id; });
            return __assign({}, state, { products: state.products.slice(0, index).concat(state.products.slice(index + 1)) });
        }
        default:
            return state;
    }
});
//# sourceMappingURL=cart.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_logger__ = __webpack_require__("../../../../ngrx-store-logger/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_store_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/cart.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* unused harmony export metaReducers */



var reducers = {
    cart: __WEBPACK_IMPORTED_MODULE_2__cart_reducer__["a" /* default */]
};
var developmentReducer = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ngrx_store_logger__["storeLogger"])()
];
var metaReducers = !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production ?
    developmentReducer :
    [];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map