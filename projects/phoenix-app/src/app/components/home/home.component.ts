import { Component, AfterViewInit } from '@angular/core';
import { UIService } from 'projects/phoenix-library/src/lib/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private ui: UIService) {
  }

  ngAfterViewInit() {
    this.ui.detectColorScheme();
  }

}
