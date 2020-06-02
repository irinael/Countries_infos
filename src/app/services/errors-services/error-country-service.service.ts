import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorCountryService {
  hasError = new Subject<boolean>();
  show() {
    this.hasError.next(true);
  }
  hide() {
    this.hasError.next(false);
  }
}
