import { Component, OnInit } from '@angular/core';
import { CountriesServicesService } from 'src/app/services/countries-services/countries-services.service';
import { Country } from 'src/app/interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCountryComponent } from 'src/app/details-country/details-country.component';


@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {

  constructor(
    private service: CountriesServicesService, private route: ActivatedRoute, private sanitazer: DomSanitizer, public dialog: MatDialog) {
    // route.params.subscribe(val => {
    //   this.ngOnInit();
    // });
  }
  regions: Map<any, any> = new Map();
  regionImg: any;
  region = '';
  countries: Country[] = [];
  nbCountries: number = null;
  countriesByLetter: Country[] = [];
  error: any = null;
  selectedCountry: Country;

  getRegionsMap(): void {
    this.regions.set('Africa', 'url(../../assets/images/africa-raw.jpg)');
    this.regions.set('Asia', 'url(../../assets/images/asia-raw.jpg)');
    this.regions.set('Americas', 'url(../../assets/images/americas-raw.jpg)');
    this.regions.set('Europe', 'url(../../assets/images/europe-raw.jpg)');
    this.regions.set('Oceania', 'url(../../assets/images/oceania-raw.jpg)');
    this.regionImg = this.sanitazer.bypassSecurityTrustStyle(this.regions.get(this.region));
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
  }

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
    this.getRegionsMap();
    console.log(this.regionImg);
  }

}
