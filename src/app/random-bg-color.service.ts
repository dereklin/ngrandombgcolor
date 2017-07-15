import { Injectable } from '@angular/core';

@Injectable()
export class RandomBgColorService {
  private usedBgColors = {};
  private BG_COLOR_CHANGE_INTERVAL = 1000;
  private BG_COLOR_TOTAL_RUNNING_TIME = 10000;

  public randomizeBgColor() {
    document.body.style['background-color'] = this.getRandomHexColor();
    const bgInterval = setInterval(() => {
      document.body.style['background-color'] = this.getRandomHexColor();
    }, this.BG_COLOR_CHANGE_INTERVAL);
    setTimeout(() => {
      clearInterval(bgInterval);
    }, this.BG_COLOR_TOTAL_RUNNING_TIME - this.BG_COLOR_CHANGE_INTERVAL);
  }

  private getRandomHexColor() {
    let c: string = '#000000'.replace(/0/g, function(){return (~~(Math.random() * 16)).toString(16); });
    while (this.usedBgColors[c] !== undefined) {
      c = this.getRandomHexColor();
    }
    this.usedBgColors[c] = true;
    return c;
  }
}
