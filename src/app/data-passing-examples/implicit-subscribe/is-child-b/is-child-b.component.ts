import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-is-child-b',
  templateUrl: './is-child-b.component.html',
})
export class IsChildBComponent implements OnChanges {
  @Input() incomingData: any;

  regionData = {
    region: 'ocean',
    state: 'none',
    elevation: 'sea level'
  };

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['incomingData'];

    if (change && change.currentValue) {
      this.regionData = { ...change.currentValue }
    }
  }
}
