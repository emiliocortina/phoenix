import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EventdisplayService } from '../../services/eventdisplay.service';
import { Configuration } from '../../services/extras/configuration.model';
import { PresetView } from '../../services/extras/preset-view.model';

@Component({
  selector: 'phoenix-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent implements AfterViewInit {

  @ViewChild('eventDisplay') eventDisplay: ElementRef<HTMLElement>;

  constructor(private eventDisplayService: EventdisplayService) { }

  ngAfterViewInit(): void {
    const configuration = new Configuration();
    configuration.presetViews = [
      new PresetView('Left View', [0, 0, -12000], 'left'),
      new PresetView('Center View', [-500, 12000, 0], 'circle'),
      new PresetView('Right View', [0, 0, 12000], 'right')
    ];

    this.eventDisplayService.init(this.eventDisplay.nativeElement, configuration);
  }

}
