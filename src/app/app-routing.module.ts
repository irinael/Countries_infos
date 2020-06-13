import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsCountryComponent } from './details-country/details-country.component';

const routes: Routes = [
  {path: '',
  component: SearchComponent},
  {path: 'details/:name',
  component: DetailsCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
