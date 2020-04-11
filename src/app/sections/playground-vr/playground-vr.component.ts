import { Component, AfterViewInit } from '@angular/core';
import { EventdisplayService } from '../../services/eventdisplay.service';
import { Configuration } from '../../services/extras/configuration.model';
import { PresetView } from '../../services/extras/preset-view.model';
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
