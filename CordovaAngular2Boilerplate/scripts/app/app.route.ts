import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductComponent } from './products/product.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'products',
        component: ProductComponent,
        children: [
            {
                path: '',
                component: ProductListComponent,
            }
        ]
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];