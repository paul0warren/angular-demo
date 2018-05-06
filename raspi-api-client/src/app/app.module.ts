import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiTestService } from './api.test.service';

import { AppComponent } from './app.component';
import { TabButtonComponent } from '../shared/components/tab-button/tab-button.component';
import { NavibarComponent } from '../shared/components/navibar/navibar.component';
import { LoadingIndicatorComponent } from '../shared/components/loading-indicator/loading-indicator.component';
import { LoadingIndicatorService } from '../shared/components/loading-indicator/loading-indicator.service';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { HomeComponentService } from './home/home.component.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TabButtonComponent,
    NavibarComponent,
    LoadingIndicatorComponent,
    HomeComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    ApiTestService,
    LoadingIndicatorService,
    AppService,
    HomeComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
