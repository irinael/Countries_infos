import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesServicesService {

  baseUrl = 'https://restcountries.eu/rest/v2/';
  constructor(private http: HttpClient) { }


  getCountryByName(name: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.baseUrl + 'name/' + name);
  }

  getCountryByFullName(name: string): Observable<Country> {
    return this.http.get<Country>(this.baseUrl + 'name/' + name + '?fullText=true');
  }
}
