import { Component, AfterViewInit } from '@angular/core';
import { EventdisplayService } from '../../services/eventdisplay.service';
import { HttpClient } from '@angular/common/http';
import { LHCbLoader } from '../../services/loaders/lhcb-loader';


@Component({
  selector: 'app-lhcb',
  templateUrl: './lhcb.component.html',
  styleUrls: ['./lhcb.component.scss']
})
export class LHCbComponent implements AfterViewInit {
  events: any;
  loader: LHCbLoader;

  constructor(private eventDisplay: EventdisplayService, private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.eventDisplay.loadGLTFGeometry('assets/geometry/LHCb/lhcb.gltf', 'LHCb detector');
    this.loader = new LHCbLoader();
    this.loadEventData();

  }

  private loadEventData() {
    this.http.get('assets/files/lhcb/00191749_0005296728.json').subscribe((data: any) => {
      this.loader.process(data);
      const eventData = this.loader.getEventData();
      this.eventDisplay.buildEventDataFromJSON(eventData);
      // TODO Current implementation throws error
      // this.eventDisplay.setDetectorOpacity(config.detectorOpacity);
    });
  }
}
