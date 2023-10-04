import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrackingComponent } from './mouse-tracking.component';

describe('MouseTrackingComponent', () => {
  let component: MouseTrackingComponent;
  let fixture: ComponentFixture<MouseTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseTrackingComponent]
    });
    fixture = TestBed.createComponent(MouseTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
