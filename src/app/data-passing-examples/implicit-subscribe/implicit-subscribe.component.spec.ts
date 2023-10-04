import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplicitSubscribeComponent } from './implicit-subscribe.component';

describe('ImplicitSubscribeComponent', () => {
  let component: ImplicitSubscribeComponent;
  let fixture: ComponentFixture<ImplicitSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImplicitSubscribeComponent]
    });
    fixture = TestBed.createComponent(ImplicitSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
