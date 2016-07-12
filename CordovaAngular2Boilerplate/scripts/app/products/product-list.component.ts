import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Component({
    templateUrl: './app/products/product-list.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductsService]
})

export class ProductListComponent implements OnInit {

    products: Product[];

    constructor(private productsService: ProductsService) {

    }

    ngOnInit() {
        this.productsService.getAllProducts().then((response: any) => {
            this.products = response;
        });
    }
}
