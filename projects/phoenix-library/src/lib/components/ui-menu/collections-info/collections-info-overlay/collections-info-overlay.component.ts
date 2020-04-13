import { Component, Input, AfterViewInit } from '@angular/core';
import { EventdisplayService } from '../../../../services/eventdisplay.service';

@Component({
  selector: 'phoenix-collections-info-overlay',
  templateUrl: './collections-info-overlay.component.html',
  styleUrls: ['./collections-info-overlay.component.scss']
})
export class CollectionsInfoOverlayComponent implements AfterViewInit {

  @Input() showObjectsInfo: boolean;
  // showObjectsInfo = true;
  collections: string[];
  showingCollection: any;
  collectionColumns: string[];

  constructor(private eventDisplay: EventdisplayService) { }

  ngAfterViewInit() {
    this.eventDisplay.listenToDisplayedEventChange((event) => this.collections = this.eventDisplay.getCollections());
  }

  changeCollection(selected: any) {
    const value = selected.target.value;
    this.showingCollection = this.eventDisplay.getCollection(value);
    this.collectionColumns = Object.keys(this.showingCollection[0]);
  }

}
