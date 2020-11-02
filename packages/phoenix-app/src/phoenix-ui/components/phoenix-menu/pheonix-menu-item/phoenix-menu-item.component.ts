import { Component, Input } from '@angular/core';
import type { PhoenixMenuNode } from 'phoenix-event-display';

@Component({
  selector: 'app-phoenix-menu-item',
  templateUrl: './phoenix-menu-item.component.html',
  styleUrls: ['./phoenix-menu-item.component.scss']
})
export class PhoenixMenuItemComponent {

  @Input() currentNode: PhoenixMenuNode;

}
