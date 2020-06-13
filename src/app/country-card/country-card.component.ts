import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../interfaces/country';
import { DetailsCountryComponent } from '../details-country/details-country.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  constructor() {}

  @Input()
  country: Country = {};

  ngOnInit() {

  }
}
