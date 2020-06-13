import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../interfaces/country';
import { ErrorCountryService } from '../services/errors-services/error-country-service.service';
import { CountriesServicesService } from '../services/countries-services/countries-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private serviceError: ErrorCountryService,
    private service: CountriesServicesService) { }

  @Input() nameInput: string;
  resultList: Country[] = [];
  error: any;
  video: any;
  year: any;

  getCountriesStyle() {
    if (this.resultList.length <= 3) {
      return { 'display': 'flex', 'justify-content': 'center' };
    }
  }
  getYear() {
    this.year = new Date().getFullYear();
  }

  getAll(): void {
    this.service.getAll().subscribe(data => data.map(country => this.resultList.push(country)));
  }

  getCountryByName(): void {
    this.error = null;
    // while (this.resultList.length > 0) {
    //   this.resultList.pop();
    // }
    this.resultList.splice(0, this.resultList.length);
    this.nameInput === null || this.nameInput === '' || this.nameInput === undefined ?
      (
        this.service.getAll().subscribe(data => data.map(country => this.resultList.push(country)))
      ) : (
        this.service.getCountryByName(this.nameInput).subscribe(
          data => data.map(country => this.resultList.push(country)),
          error => this.error = 'This country does not exist ! (yet)'));
  }

  videoOnOff(): void {
    this.video.paused ?
      (this.video.play(), document.getElementById('myBtn').innerHTML = 'Stop moving, it\'s annoying !')
      : (this.video.pause(), document.getElementById('myBtn').innerHTML = 'Go !');
  }

  scrollToCountries() {
    document.getElementById('countries').scrollIntoView();
  }

  ngOnInit() {
    this.video = document.getElementById('myVideo') as HTMLVideoElement;
    this.videoOnOff();
    this.getYear();
    this.getAll();

  }

}
