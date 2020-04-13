import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'phoenix-dark-theme',
  templateUrl: './dark-theme.component.html',
  styleUrls: ['./dark-theme.component.scss']
})
export class DarkThemeComponent implements OnInit {

  darkTheme = false;

  constructor(private ui: UIService) { }

  ngOnInit(): void {
    this.darkTheme = this.ui.getDarkTheme();
  }

  setDarkTheme() {
    this.darkTheme = !this.darkTheme;
    this.ui.setDarkTheme(this.darkTheme);
  }

}
