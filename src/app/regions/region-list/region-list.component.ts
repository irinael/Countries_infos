import { Component, OnInit } from '@angular/core';
import { CountriesServicesService } from 'src/app/services/countries-services/countries-services.service';
import { Country } from 'src/app/interfaces/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  constructor(
    private service: CountriesServicesService, private route: ActivatedRoute) {
      route.params.subscribe(val => {
        this.ngOnInit();
      });
    }

    region: string = '';
    countries: Country[] = [];
    nbCountries: number = null;
  getCountriesByRegion():void {
    this.service.getCountriesByRegion(this.region).subscribe(
      data => {
        data.forEach(country => {
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
