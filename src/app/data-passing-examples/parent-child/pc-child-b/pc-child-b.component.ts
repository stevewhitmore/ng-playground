import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-pc-child-b',
  templateUrl: './pc-child-b.component.html'
})
export class PcChildBComponent {
  @Input() incomingAtext = '';
}
