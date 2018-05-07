import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { City } from '../models/city.model';
import { Language } from '../models/language.model';

@Injectable()
/**
 * This is the single source of truth for the entire app.
 */
export class AppService {

    public countries: Country[];
    public cities: City[];
    public languages: Language[];
}
