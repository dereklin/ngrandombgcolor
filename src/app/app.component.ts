import { RandomBgColorService } from './random-bg-color.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  constructor(private randomBgColorService: RandomBgColorService) {
    this.randomBgColorService.randomizeBgColor();
  }
}
