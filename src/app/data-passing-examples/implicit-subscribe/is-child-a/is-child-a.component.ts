import { Component, EventEmitter, Output } from "@angular/core";
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-is-child-a',
  templateUrl: './is-child-a.component.html',
})
export class IsChildAComponent {
  @Output() apiTriggerEvent = new EventEmitter();

  constructor(private dataService: DataService) {
  }

  emitTrigger() {
    this.apiTriggerEvent.emit();
  }
}
