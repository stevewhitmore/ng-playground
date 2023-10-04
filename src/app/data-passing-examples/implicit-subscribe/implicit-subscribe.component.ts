import { Component, OnInit } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-implicit-subscribe',
  templateUrl: './implicit-subscribe.component.html',
  styleUrls: ['./implicit-subscribe.component.scss']
})
export class ImplicitSubscribeComponent implements OnInit {
  buttonAttributes: any;
  cursorView$: Observable<any> | undefined;

  cursor$ = of({
    color: 'blue',
    shape: 'arrow',
  });

  ngOnInit(): void {
    this.buttonAttributes = {
      color: 'red',
      shape: 'hand',
    };
  }

  printHello(incomingAttributes: any) {
    console.log('Hello from ImplicitSubscribeComponent');

    this.buttonAttributes = {
      ...this.buttonAttributes,
      ...incomingAttributes
    }
  }

  changeCursorAttributes() {
    this.cursorView$ = this.cursor$.pipe(
      delay(1000),
      tap(data => {
        this.printHello(data);
      })
    );
  }
}
