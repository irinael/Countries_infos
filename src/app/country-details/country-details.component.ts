import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CountriesServicesService } from '../services/countries-services/countries-services.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit, AfterViewInit {

  constructor(private service: CountriesServicesService, private route: ActivatedRoute, private sanitazer: DomSanitizer) { }
  result: Country[] = [];
  country: Country = {};
  borderCountries: Country[] = [];
  tz: string;
  tzArray: string[];
  // for better display
  putTimeZoneObjectInList(): void {
    this.tz = this.country.timezones.toString();
    this.tzArray = this.tz.split(',');
  }
  getCountry(): void {
    this.service.getCountryByName(this.route.snapshot.paramMap.get('name')).subscribe(
      data => {
        data.map(country => this.result.push(country));
        this.country = this.result[0];
      });
  }
  getBorderCountries(): void {
    this.country.borders.forEach(elem => {
      this.service.getCountryByAlphaCode(elem).subscribe(country => {
        this.borderCountries.push(country);
      });
    });
  }

  ngOnInit() {
    this.getCountry();
  }
  ngAfterViewInit() {
    this.getBorderCountries();
    this.putTimeZoneObjectInList();
  }

}
