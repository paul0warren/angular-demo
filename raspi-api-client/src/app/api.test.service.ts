import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/country.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiTestService {

    private _ip = 'localhost';

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    // replace ip address with correct one.
    public getCountries() {
        return this.http.get(`http://${this._ip}/api/countries`);
    }

    public getCities() {
        return this.http.get(`http://${this._ip}/api/cities`);
    }
}
