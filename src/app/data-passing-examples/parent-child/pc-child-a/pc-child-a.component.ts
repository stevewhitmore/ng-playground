import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-pc-child-a',
  templateUrl: './pc-child-a.component.html'
})
export class PcChildAComponent {
  @Output() buttonClickEvent = new EventEmitter();

  emitButtonClick(textToTransfer: any) {
    this.buttonClickEvent.emit(textToTransfer)
  }
}
