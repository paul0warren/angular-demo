import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiTestService } from './api.test.service';
import { LoadingIndicatorService } from '../shared/components/loading-indicator/loading-indicator.service';
import { AppService } from './app.service';
import { Country } from '../models/country.model';
import { City } from '../models/city.model';
import { HomeComponentService } from './home/home.component.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('markerAnimation', [
      state('hide', style({
        transform: 'scale(0.8)',
        opacity: 0.2
      })),
      state('show', style({
        transform: 'scale(1)',
        opacity: 0.7
      })),
      transition('show => hide', animate('1s ease-out')),
      transition('hide => show', animate('1s ease-in'))
    ])
  ]
})
/**
 * This is the entry level of the app
 */
export class AppComponent implements OnInit {
  title = 'Demo App';

  private userPosition: google.maps.Point = null;
  public markerState = 'hide';

  constructor(
    private _demoService: ApiTestService,
    public loadingIndicatorService: LoadingIndicatorService,
    private _appService: AppService,
    private _homeComponentService: HomeComponentService
    ) {
      this._homeComponentService.userLocation.subscribe(
        (position: google.maps.Point) => {
          console.log(`User Location ${position.toString()}`);
          if (this.userPosition) {

          } else {
            setTimeout(() => {
              this.markerState = 'show';
            }, 500);
          }
          this.userPosition = position;
        },
        (err: Error) => {
          console.log(err);
        },
        () => {

        }
      );
    }

  ngOnInit() {
    this.loadingIndicatorService.isLoading = true;
    this.getCountries();
  }
  /**
   * Formats the pixel value to proper css string
   */
  public getMarkerLeft() {
    if (this.userPosition) {
      return `${this.userPosition.x - 32}px`;
    }
  }
  /**
   * Formats the pixel value to proper css string
   */
  public getMarkerTop() {
    if (this.userPosition) {
      return `${this.userPosition.y - 32}px`;
    }
  }

  public blinkDone() {
    this.markerState = this.markerState === 'show' ? 'hide' : 'show';
  }

  getCountries() {
    this._demoService.getCountries().subscribe(
      data => {
        this._appService.countries = data as Country[];
        this.getCities();
      },
      err => {
        console.error(err);
        this.loadingIndicatorService.isLoading = false;
      },
      () => {
        console.log('done loading countries');
      }
    );
  }

  getCities() {
    this._demoService.getCities().subscribe(
      data => {
        this._appService.cities = data as City[];
      },
      err => {
        console.log(err);
      },
      () => {
        this.loadingIndicatorService.isLoading = false;
      }
    );
  }

}
