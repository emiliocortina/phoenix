import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../services/ui.service';
import { PresetView } from '../../../services/extras/preset-view.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'phoenix-view-options',
  templateUrl: './view-options.component.html',
  styleUrls: ['./view-options.component.scss']
})
export class ViewOptionsComponent implements OnInit {

  views: PresetView[];

  constructor(private ui: UIService) { }

  ngOnInit(): void {
    this.views = this.ui.getPresetViews();
  }

  displayView($event: any, view: PresetView) {
    $event.stopPropagation();
    this.ui.displayView(view);
  }

  toggleOrthographic(checked: boolean) {
    this.ui.toggleOrthographicView(checked);
  }

}
