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
var stat_block_component_1 = require('./../stat-block/stat-block.component');
var dashboardstats_model_1 = require('./dashboardstats.model');
var dashboardstats_service_1 = require('./dashboardstats.service');
var DashboardComponent = (function () {
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
        core_1.Component({
            selector: 'dashboard',
            templateUrl: './app/dashboard/dashboard.html',
            directives: [stat_block_component_1.StatBlockComponent],
            providers: [dashboardstats_service_1.DashboardStatsService]
        }), 
        __metadata('design:paramtypes', [dashboardstats_service_1.DashboardStatsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map