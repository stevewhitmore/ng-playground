import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentBdata: any;

  captureBbutton(bData: any) {
    this.componentBdata = bData;
  }
}
