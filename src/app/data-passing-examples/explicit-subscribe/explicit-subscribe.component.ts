import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, delay, of, tap } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-explicit-subscribe',
  templateUrl: './explicit-subscribe.component.html',
  styleUrls: ['./explicit-subscribe.component.scss']
})
export class ExplicitSubscribeComponent implements OnInit, OnDestroy {
  buttonAttributes: any;
  cursorView: any;
  response: any;
  sub1 = new Subscription();
  sub2 = new Subscription();

  cursor$ = of({
    color: 'blue',
    shape: 'arrow',
  });

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.buttonAttributes = {
      color: 'red',
      shape: 'hand',
    };
  }

  printHello(incomingAttributes: any) {
    console.log('Hello from ExplicitSubscribeComponent');

    this.buttonAttributes = {
      ...this.buttonAttributes,
      ...incomingAttributes
    }
  }

  changeCursorAttributes() {
    this.sub1 = this.cursor$
      .pipe(delay(1000))
      .subscribe(data => {
        this.printHello(data);
      });
  }

  getData() {
    this.sub2 = this.dataService.getData()
      .subscribe(data => {
        this.buttonAttributes = { ...data }
      });
  }

  /**
   * We're responsible for handling the subscription so
   * if we don't unsubscribe we're going to be in pain later
   */
  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
