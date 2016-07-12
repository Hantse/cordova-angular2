import { Component, Input } from '@angular/core';
@Component({
  selector: 'stat-block',
  templateUrl: './app/stat-block/stat-block.html'
})
export class StatBlockComponent {

  @Input() block;

  /**
   *
   */
  constructor() {
  }
}
