import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-tracking',
  templateUrl: './mouse-tracking.component.html',
  styleUrls: ['./mouse-tracking.component.scss']
})
export class MouseTrackingComponent {
  xCoordinate = 0;
  yCoordinate = 0;
  clickCount = 0;

  @HostListener('click', ['$event'])
  incrementClick(event: any) {
    this.clickCount++;
    console.log(event)
  }

  @HostListener('mousemove', ['$event'])
  trackMouseMovement(event: any) {
    this.xCoordinate = event.pageX;
    this.yCoordinate = event.pageY;
  }
}
