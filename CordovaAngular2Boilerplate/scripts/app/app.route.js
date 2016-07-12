"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var product_list_component_1 = require('./products/product-list.component');
var product_component_1 = require('./products/product.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'products',
        component: product_component_1.ProductComponent,
        children: [
            {
                path: '',
                component: product_list_component_1.ProductListComponent,
            }
        ]
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.route.js.map