import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counterText: string = "This button has not been clicked yet."
  count: number = 0;
  label: string = "";

  public setCounterText() {
    this.count++;
    this.counterText = `This button has been clicked ${this.count} times.`
  }

  onKeyUp(field: any) {
    this.label += field.target.value;
  }


}
