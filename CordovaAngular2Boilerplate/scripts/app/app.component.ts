import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './products/product.component';
import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'my-app',
  template: '<section id="main"><header></header><sidebar></sidebar><section id="content"><div class="container"><router-outlet></router-outlet></div></section></section>',
  directives: [SidebarComponent, HeaderComponent, ROUTER_DIRECTIVES],
  precompile: [DashboardComponent, SidebarComponent, HeaderComponent, ProductComponent, ProductListComponent]

})
export class AppComponent { }
