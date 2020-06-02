import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailsCountryComponent } from './details-country/details-country.component';
import { RegionListComponent } from './regions/region-list/region-list.component';
import { RegionPreviewComponent } from './region-preview/region-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpErrorInterceptor } from './errors-handling/http-error-interceptor';
import { ErrorCountryComponent } from './error-country/error-country.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsCountryComponent,
    RegionListComponent,
    RegionPreviewComponent,
    ErrorCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule
  ],
  entryComponents: [
    DetailsCountryComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    //{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
