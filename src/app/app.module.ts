import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentChildComponent } from './data-passing-examples/parent-child/parent-child.component';
import { ExplicitSubscribeComponent } from './data-passing-examples/explicit-subscribe/explicit-subscribe.component';
import { ImplicitSubscribeComponent } from './data-passing-examples/implicit-subscribe/implicit-subscribe.component';
import { MouseTrackingComponent } from './mouse-tracking/mouse-tracking.component';
import { PcChildAComponent } from './data-passing-examples/parent-child/pc-child-a/pc-child-a.component';
import { PcChildBComponent } from './data-passing-examples/parent-child/pc-child-b/pc-child-b.component';
import { IsChildAComponent } from './data-passing-examples/implicit-subscribe/is-child-a/is-child-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplicitSubscribeComponent,
    ImplicitSubscribeComponent,
    IsChildAComponent,
    ParentChildComponent,
    PcChildAComponent,
    PcChildBComponent,
    MouseTrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
