import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { ApiResponse } from '../base/apiresponse.model';
import { DashboardStats } from './dashboardstats.model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardStatsService extends BaseService {

    constructor(private http: Http) {
        super();
        this.SpecificUrl = "api/DashboardStats";
    }

    public getStats(): Promise<ApiResponse<DashboardStats>> {
        return this.http
            .get(this.getSpecificUrl())
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
}
