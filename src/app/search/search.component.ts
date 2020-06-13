import { Component, OnInit, Input } from '@angular/core';
import { CountriesServicesService } from '../services/countries-services.service';
import { Country } from '../interfaces/country';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor(
    private service: CountriesServicesService) { }

  @Input()nameInput: string;
 resultList: Country[] = [];
 name: string = '';
 error: any = null;

  getCountryByName(): void {
    this.service.getCountryByName(this.nameInput).subscribe(
      data => {
      while (this.resultList.length > 0) {
        this.resultList.pop();
      }
      console.log(data);
      data.forEach(country => {
        this.resultList.push(country);
      });
      });
  }

  saveCountry(country: Country): void {
  localStorage.setItem('country', JSON.stringify(country));
  console.log(localStorage.getItem('country'));
  }

  ngOnInit() {
  }

}
