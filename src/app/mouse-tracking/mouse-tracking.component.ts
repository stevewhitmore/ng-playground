import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-tracking',
  templateUrl: './mouse-tracking.component.html',
  styleUrls: ['./mouse-tracking.component.scss']
})
export class MouseTrackingComponent {
  // xCoordinate: number;
  // yCoordinate: number;

  @HostListener('click', ['$event'])
  trackMouseMovement($event: any) {
    console.log('trackMouseMovement:', $event)
    // this.xCoordinate = $event
  }
}
