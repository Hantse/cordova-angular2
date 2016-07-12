import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './app/sidebar/sidebar.html',
  directives: [ROUTER_DIRECTIVES]
})
export class SidebarComponent {

  /**
   *
   */
  constructor(private router: Router) {
    
  } 

  isCurrentUrl (url:string): boolean{
    return this.router.url.indexOf(url) > -1;
  }
}
