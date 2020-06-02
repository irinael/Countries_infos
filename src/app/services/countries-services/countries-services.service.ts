import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Country } from '../../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesServicesService {

  baseUrl = 'https://restcountries.eu/rest/v2/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.baseUrl + 'all');
  }

  getCountryByName(name: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.baseUrl + 'name/' + name);
  }

  getCountryByFullName(name: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.baseUrl + 'name/' + name + '?fullText=true');
  }

  getCountriesByRegion(region: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.baseUrl + 'region/' + region);
  }
  getCountryByAlphaCode(alpha2or3: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.baseUrl + 'alpha/' + alpha2or3);
  }

}
