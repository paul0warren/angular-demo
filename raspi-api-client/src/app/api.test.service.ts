import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class ApiTestService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    // replace ip address with correct one.
    public getCountries() {
        return this.http.get('http://192.168.1.238:5000/api/countries');
    }

    public getCities() {
        return this.http.get('http://192.168.1.238:5000/api/cities');
    }
}