"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var header_component_1 = require('./header/header.component');
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var product_component_1 = require('./products/product.component');
var product_list_component_1 = require('./products/product-list.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<section id="main"><header></header><sidebar></sidebar><section id="content"><div class="container"><router-outlet></router-outlet></div></section></section>',
            directives: [sidebar_component_1.SidebarComponent, header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
            precompile: [dashboard_component_1.DashboardComponent, sidebar_component_1.SidebarComponent, header_component_1.HeaderComponent, product_component_1.ProductComponent, product_list_component_1.ProductListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map