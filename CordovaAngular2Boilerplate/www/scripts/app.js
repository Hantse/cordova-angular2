var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("app/sidebar/sidebar.component", ['@angular/core', '@angular/router'], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1;
    var SidebarComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function () {
            SidebarComponent = (function () {
                /**
                 *
                 */
                function SidebarComponent(router) {
                    this.router = router;
                }
                SidebarComponent.prototype.isCurrentUrl = function (url) {
                    return this.router.url.indexOf(url) > -1;
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar',
                        templateUrl: './app/sidebar/sidebar.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    __metadata('design:paramtypes', [router_1.Router])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
System.register("app/header/header.component", ['@angular/core'], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2;
    var HeaderComponent;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function () {
            HeaderComponent = (function () {
                /**
                 *
                 */
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_2.Component({
                        selector: 'header',
                        templateUrl: './app/header/header.html'
                    }),
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_2("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("app/stat-block/stat-block.component", ['@angular/core'], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3;
    var StatBlockComponent;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function () {
            StatBlockComponent = (function () {
                /**
                 *
                 */
                function StatBlockComponent() {
                }
                __decorate([
                    core_3.Input(),
                    __metadata('design:type', Object)
                ], StatBlockComponent.prototype, "block", void 0);
                StatBlockComponent = __decorate([
                    core_3.Component({
                        selector: 'stat-block',
                        templateUrl: './app/stat-block/stat-block.html'
                    }),
                    __metadata('design:paramtypes', [])
                ], StatBlockComponent);
                return StatBlockComponent;
            }());
            exports_3("StatBlockComponent", StatBlockComponent);
        }
    }
});
System.register("app/dashboard/dashboardstats.model", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var DashboardStats, BlockStatsDto;
    return {
        setters: [],
        execute: function () {
            DashboardStats = (function () {
                function DashboardStats() {
                }
                return DashboardStats;
            }());
            exports_4("DashboardStats", DashboardStats);
            BlockStatsDto = (function () {
                function BlockStatsDto() {
                }
                return BlockStatsDto;
            }());
            exports_4("BlockStatsDto", BlockStatsDto);
        }
    }
});
System.register("app/base/base.service", ['@angular/core', 'rxjs/add/operator/toPromise'], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4;
    var BaseService;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (_1) { }],
        execute: function () {
            BaseService = (function () {
                function BaseService() {
                    this.SpecificUrl = "api/products";
                }
                BaseService.prototype.getBaseUrl = function () {
                    return BaseService.BaseUrl;
                };
                BaseService.prototype.getSpecificUrl = function () {
                    return this.getBaseUrl() + "/" + this.SpecificUrl;
                };
                BaseService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                BaseService.BaseUrl = "http://localhost:5000";
                BaseService = __decorate([
                    core_4.Injectable(),
                    __metadata('design:paramtypes', [])
                ], BaseService);
                return BaseService;
            }());
            exports_5("BaseService", BaseService);
        }
    }
});
System.register("app/base/apiresponse.model", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var ApiResponse;
    return {
        setters: [],
        execute: function () {
            ApiResponse = (function () {
                /**
                 *
                 */
                function ApiResponse() {
                }
                return ApiResponse;
            }());
            exports_6("ApiResponse", ApiResponse);
        }
    }
});
System.register("app/dashboard/dashboardstats.service", ['@angular/core', "app/base/base.service", '@angular/http', 'rxjs/add/operator/toPromise'], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, base_service_1, http_1;
    var DashboardStatsService;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (base_service_1_1) {
                base_service_1 = base_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_2) { }],
        execute: function () {
            DashboardStatsService = (function (_super) {
                __extends(DashboardStatsService, _super);
                function DashboardStatsService(http) {
                    _super.call(this);
                    this.http = http;
                    this.SpecificUrl = "api/DashboardStats";
                }
                DashboardStatsService.prototype.getStats = function () {
                    return this.http
                        .get(this.getSpecificUrl())
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                DashboardStatsService = __decorate([
                    core_5.Injectable(),
                    __metadata('design:paramtypes', [http_1.Http])
                ], DashboardStatsService);
                return DashboardStatsService;
            }(base_service_1.BaseService));
            exports_7("DashboardStatsService", DashboardStatsService);
        }
    }
});
System.register("app/dashboard/dashboard.component", ['@angular/core', "app/stat-block/stat-block.component", "app/dashboard/dashboardstats.model", "app/dashboard/dashboardstats.service"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, stat_block_component_1, dashboardstats_model_1, dashboardstats_service_1;
    var DashboardComponent;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (stat_block_component_1_1) {
                stat_block_component_1 = stat_block_component_1_1;
            },
            function (dashboardstats_model_1_1) {
                dashboardstats_model_1 = dashboardstats_model_1_1;
            },
            function (dashboardstats_service_1_1) {
                dashboardstats_service_1 = dashboardstats_service_1_1;
            }],
        execute: function () {
            DashboardComponent = (function () {
                /**
                 *
                 */
                function DashboardComponent(dashboardService) {
                    this.dashboardService = dashboardService;
                    this.stats = new dashboardstats_model_1.DashboardStats();
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dashboardService.getStats()
                        .then(function (response) {
                            _this.stats = response;
                        });
                };
                DashboardComponent = __decorate([
                    core_6.Component({
                        selector: 'dashboard',
                        templateUrl: './app/dashboard/dashboard.html',
                        directives: [stat_block_component_1.StatBlockComponent],
                        providers: [dashboardstats_service_1.DashboardStatsService]
                    }),
                    __metadata('design:paramtypes', [dashboardstats_service_1.DashboardStatsService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_8("DashboardComponent", DashboardComponent);
        }
    }
});
System.register("app/products/product.component", ['@angular/core', '@angular/router'], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, router_2;
    var ProductComponent;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function () {
            ProductComponent = (function () {
                function ProductComponent() {
                }
                ProductComponent = __decorate([
                    core_7.Component({
                        templateUrl: './app/products/product.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    __metadata('design:paramtypes', [])
                ], ProductComponent);
                return ProductComponent;
            }());
            exports_9("ProductComponent", ProductComponent);
        }
    }
});
System.register("app/products/product.model", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Product;
    return {
        setters: [],
        execute: function () {
            Product = (function () {
                function Product() {
                }
                return Product;
            }());
            exports_10("Product", Product);
        }
    }
});
System.register("app/products/products.service", ['@angular/core', "app/base/base.service", '@angular/http', 'rxjs/add/operator/toPromise'], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_8, base_service_2, http_2;
    var ProductsService;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (base_service_2_1) {
                base_service_2 = base_service_2_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (_3) { }],
        execute: function () {
            ProductsService = (function (_super) {
                __extends(ProductsService, _super);
                function ProductsService(http) {
                    _super.call(this);
                    this.http = http;
                }
                ProductsService.prototype.getAllProducts = function () {
                    return this.http
                        .get(this.getSpecificUrl())
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                ProductsService = __decorate([
                    core_8.Injectable(),
                    __metadata('design:paramtypes', [http_2.Http])
                ], ProductsService);
                return ProductsService;
            }(base_service_2.BaseService));
            exports_11("ProductsService", ProductsService);
        }
    }
});
System.register("app/products/product-list.component", ['@angular/core', '@angular/router', "app/products/products.service"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_9, router_3, products_service_1;
    var ProductListComponent;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            }],
        execute: function () {
            ProductListComponent = (function () {
                function ProductListComponent(productsService) {
                    this.productsService = productsService;
                }
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productsService.getAllProducts().then(function (response) {
                        _this.products = response;
                    });
                };
                ProductListComponent = __decorate([
                    core_9.Component({
                        templateUrl: './app/products/product-list.html',
                        directives: [router_3.ROUTER_DIRECTIVES],
                        providers: [products_service_1.ProductsService]
                    }),
                    __metadata('design:paramtypes', [products_service_1.ProductsService])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_12("ProductListComponent", ProductListComponent);
        }
    }
});
System.register("app/app.component", ['@angular/core', "app/sidebar/sidebar.component", "app/header/header.component", '@angular/router', "app/dashboard/dashboard.component", "app/products/product.component", "app/products/product-list.component"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_10, sidebar_component_1, header_component_1, router_4, dashboard_component_1, product_component_1, product_list_component_1;
    var AppComponent;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            }],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_10.Component({
                        selector: 'my-app',
                        template: '<section id="main"><header></header><sidebar></sidebar><section id="content"><div class="container"><router-outlet></router-outlet></div></section></section>',
                        directives: [sidebar_component_1.SidebarComponent, header_component_1.HeaderComponent, router_4.ROUTER_DIRECTIVES],
                        precompile: [dashboard_component_1.DashboardComponent, sidebar_component_1.SidebarComponent, header_component_1.HeaderComponent, product_component_1.ProductComponent, product_list_component_1.ProductListComponent]
                    }),
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_13("AppComponent", AppComponent);
        }
    }
});
System.register("app/app.route", ['@angular/router', "app/dashboard/dashboard.component", "app/products/product-list.component", "app/products/product.component"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var router_5, dashboard_component_2, product_list_component_2, product_component_2;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters: [
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (dashboard_component_2_1) {
                dashboard_component_2 = dashboard_component_2_1;
            },
            function (product_list_component_2_1) {
                product_list_component_2 = product_list_component_2_1;
            },
            function (product_component_2_1) {
                product_component_2 = product_component_2_1;
            }],
        execute: function () {
            exports_14("routes", routes = [
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_2.DashboardComponent
                },
                {
                    path: 'products',
                    component: product_component_2.ProductComponent,
                    children: [
                        {
                            path: '',
                            component: product_list_component_2.ProductListComponent,
                        }
                    ]
                }
            ]);
            exports_14("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_5.provideRouter(routes)
            ]);
        }
    }
});
System.register("app/main", ['@angular/platform-browser-dynamic', "app/app.component", "app/app.route", '@angular/http'], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var platform_browser_dynamic_1, app_component_1, app_route_1, http_3;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_route_1_1) {
                app_route_1 = app_route_1_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            }],
        execute: function () {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_route_1.APP_ROUTER_PROVIDERS, http_3.HTTP_PROVIDERS]);
        }
    }
});
for (var b in window) {
    if (window.hasOwnProperty(b)) console.log(b);
}
//# sourceMappingURL=app.js.map