import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsCountryComponent } from './details-country/details-country.component';
import { RegionListComponent } from './regions/region-list/region-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'details/:name',
  component: CountryDetailsComponent},
  {path: 'region/:region', component: RegionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
