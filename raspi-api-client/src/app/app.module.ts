import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiTestService } from './api.test.service';

import { AppComponent } from './app.component';
import { TabButtonComponent } from '../shared/components/tab-button/tab-button.component';
import { NavibarComponent } from '../shared/components/navibar/navibar.component';
import { LoadingIndicatorComponent } from '../shared/components/loading-indicator/loading-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    TabButtonComponent,
    NavibarComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
