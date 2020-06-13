import { Component, OnInit } from '@angular/core';
import { CountriesServicesService } from 'src/app/services/countries-services/countries-services.service';
import { Country } from 'src/app/interfaces/country';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {

  constructor(
    private service: CountriesServicesService, private route: ActivatedRoute) {
    // route.params.subscribe(val => {
    //   this.ngOnInit();
    // });
  }

  region = '';
  countries: Country[] = [];
  nbCountries: number = null;
  countriesByLetter: Country[] = [];
  error: any;

  getCountriesByLetter(letter: string) {
    this.error = null;
    this.countriesByLetter = null;
    const result = this.countries.filter(country => country.name[0] === letter);
    result.length > 0 ?
      this.countriesByLetter = result
      : this.error = 'There is no countries starting with this letter in ' + this.region + ' (yet) !';
  }

  getCountriesByRegion(): void {
    this.service.getCountriesByRegion(this.region).subscribe(
      (data) => {
        data.map(country => {
          this.countries.push(country);
          this.nbCountries = this.countries.length;
        });
      });
  }

  ngOnInit() {
    this.region = this.route.snapshot.paramMap.get('region');
    this.getCountriesByRegion();
  }

}
