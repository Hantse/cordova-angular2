import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService {

    protected static BaseUrl: string = "http://localhost:5000";
    protected SpecificUrl: string = "api/products";

    protected getBaseUrl(): string {
        return BaseService.BaseUrl;
    }

    protected getSpecificUrl(): string {
        return this.getBaseUrl() + "/" + this.SpecificUrl;
    }

    protected handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
