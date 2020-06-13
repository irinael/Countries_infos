import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../interfaces/country';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCountryComponent } from '../details-country/details-country.component';
import { throwError } from 'rxjs';
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
    private service: CountriesServicesService,
    public dialog: MatDialog) { }

  @Input() nameInput: string;
  resultList: Country[] = [];
  name: '';
  selectedCountry: Country;
  error: any ;
  video: any;

  getCountryByName(): void {
    this.error = null;
    while (this.resultList.length > 0) {
      this.resultList.pop();
    }

    if (this.nameInput === null || this.nameInput === '') {
      this.service.getAll().subscribe(
        data => {
          data.forEach(country => {
            this.resultList.push(country);
          });
        });
    } else {
      this.service.getCountryByName(this.nameInput).subscribe(
        (data) => {
          data.forEach(country => {
            this.resultList.push(country);
          });
        },
        (error) => {
          this.error = 'This country does not exist ! (yet)';
        }
      );
    }
  }

  videoOnOff(): void {
    if (this.video.paused) {
      this.video.play();
      document.getElementById('myBtn').innerHTML = 'Stop moving, it\'s annoying !';
    } else {
      this.video.pause();
      document.getElementById('myBtn').innerHTML = 'Go !';
    }
  }

  scrollToCountries() {
    document.getElementById('regions').scrollIntoView();
  }

  setSelectedCountry(country: Country) {
    this.selectedCountry = country;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DetailsCountryComponent, {
      data: {
        country: this.selectedCountry,
      }
    });

    dialogRef.afterClosed().subscribe
      (res => {
        console.log('dialog res: ${res}');
      });
  }
  ngOnInit() {
    this.video = document.getElementById('myVideo') as HTMLVideoElement;
    this.videoOnOff();

  }

}
