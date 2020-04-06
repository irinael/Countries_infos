import { Component, OnInit } from '@angular/core';
import { Country } from '../interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { CountriesServicesService } from '../services/countries-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css']
})
export class DetailsCountryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CountriesServicesService) {
    route.params.subscribe(val => {
        this.ngOnInit();
      });
  }

  name: string;
  country: Country;

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.country = JSON.parse(localStorage.getItem('country'));
    console.log(localStorage.getItem('country'));

  }

}
