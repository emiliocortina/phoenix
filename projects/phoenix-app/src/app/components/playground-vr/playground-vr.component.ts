import { Component, AfterViewInit } from '@angular/core';
import { PlaygroundComponent } from '../playground/playground.component';

@Component({
  selector: 'app-playground-vr',
  templateUrl: './playground-vr.component.html',
  styleUrls: ['./playground-vr.component.scss']
})
export class PlaygroundVrComponent extends PlaygroundComponent implements AfterViewInit {

  ngAfterViewInit() {
  }

}
