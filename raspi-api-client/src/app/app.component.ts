import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiTestService} from './api.test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public countries;

  constructor(private _demoService: ApiTestService) { }

  ngOnInit() {
    this.getCountries();
  }
 
  getCountries() {
   this._demoService.getCountries().subscribe(
      data => { this.countries = data},
      err => console.error(err),
      () => console.log('done loading countries')
    );
  }

}
