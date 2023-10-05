import { Injectable } from '@angular/core';
import { Subject, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private implicitPassSubject = new Subject();
  implicitPass$ = this.implicitPassSubject.asObservable();

  updateImplicitChild(data: any) {
    this.implicitPassSubject.next(data);
  }

  getData() {
    return of({
      region: 'mountains',
      state: 'Colorado',
      elevation: 'super tall'
    }).pipe(delay(1000));
  }
}
