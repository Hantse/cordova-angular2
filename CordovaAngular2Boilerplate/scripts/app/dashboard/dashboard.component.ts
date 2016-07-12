import { Component, OnInit } from '@angular/core';
import { StatBlockComponent } from './../stat-block/stat-block.component'

import { DashboardStats } from './dashboardstats.model';
import { DashboardStatsService } from './dashboardstats.service';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.html',
    directives: [StatBlockComponent],
    providers: [DashboardStatsService]
})

export class DashboardComponent implements OnInit {

    stats: DashboardStats = new DashboardStats();

    /**
     *
     */
    constructor(private dashboardService: DashboardStatsService) {
    }

    ngOnInit() {
        this.dashboardService.getStats()
            .then((response: any) => {
                this.stats = response;
            });
    }
}
