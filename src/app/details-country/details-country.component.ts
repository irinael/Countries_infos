import { Component, OnInit, Inject } from '@angular/core';
import { Country } from '../interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { CountriesServicesService } from '../services/countries-services/countries-services.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BROWSER_MODULE_PROVIDERS } from '@angular/platform-browser/src/browser';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export class GridListDynamicExample {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}
@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css']
})

export class DetailsCountryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CountriesServicesService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  country: Country = {};
  topLevelDomain: any[];
  callingCodes: [];
  altSpellings: [];
  latlng: any[];
  timezones: any[];
  bordersAlphas: any[];
  numericCode: any;
  translations: any[];
  regionalBlocs: any[];
  currencies: any[];
  languages: any[];

  borders: any[];

  // getBorderCountriesNames(): Observable<Array<Country>> {
    
  //   this.bordersAlphas.forEach(entry =>
  //   this.borders.push(this.service.getCountryByAlphaCode(entry.alpha3Code)));
  //   return this.borders;
    
  // }
  ngOnInit() {
    this.country = this.data.country;
    this.currencies = this.data.country.currencies;
    this.topLevelDomain = this.data.country.topLevelDomain;
    this.callingCodes = this.data.country.callingCodes;
    this.altSpellings = this.data.country.altSpellings;
    this.latlng = this.data.country.timezones;
    this.timezones = this.data.country.timezones;
    this.bordersAlphas = this.data.country.borders;
    this.numericCode = this.data.country.numericCode;
    this.translations = this.data.country.translations;
    this.regionalBlocs = this.data.country.regionalBlocs;
    this.languages = this.data.country.languages;
    
  }
}
