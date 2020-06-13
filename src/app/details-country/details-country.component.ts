import { Component, OnInit, Inject, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { Country } from '../interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { CountriesServicesService } from '../services/countries-services/countries-services.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BROWSER_MODULE_PROVIDERS } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css']
})

export class DetailsCountryComponent implements OnInit, AfterViewInit {

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
  translations: any;
  regionalBlocs: any[];
  currencies: any[];
  languages: any[];
  borderCountries: any[] = [];
  population: string;
  tz: string;
  tzArray: string[];
  //for better display
  putTimeZoneObjectInList(): void {
    this.tz = this.timezones.toString();
    this.tzArray = this.tz.split(',');
  }


  getBorderCountries(): void {
    console.log('tu m appelles ?');
    this.bordersAlphas.forEach(elem => {
      this.service.getCountryByAlphaCode(elem).subscribe(country => {
        this.borderCountries.push(country);
      });
    });
  }
  ngAfterViewInit() {
    this.getBorderCountries();
    this.putTimeZoneObjectInList();
  }

  ngOnInit() {
    this.country = this.data.country;
    this.currencies = this.data.country.currencies;
    this.topLevelDomain = this.data.country.topLevelDomain;
    this.callingCodes = this.data.country.callingCodes;
    this.altSpellings = this.data.country.altSpellings;
    this.latlng = this.data.country.latlng;
    this.timezones = this.data.country.timezones;
    this.bordersAlphas = this.data.country.borders;
    this.numericCode = this.data.country.numericCode;
    this.regionalBlocs = this.data.country.regionalBlocs;
    this.languages = this.data.country.languages;
  }
}
