import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Product } from './product.model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService extends BaseService {

    constructor(private http: Http) {
        super();
    }

    public getAllProducts(): Promise<Product[]> {
        return this.http
            .get(this.getSpecificUrl())
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
}
