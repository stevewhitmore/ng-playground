import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent {
  componentAtext = '';

  captureComponentAtext(incomingText: string) {
    this.componentAtext = incomingText;
  }
}
