import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-country',
  templateUrl: './error-country.component.html',
  styleUrls: ['./error-country.component.scss']
})
export class ErrorCountryComponent implements OnInit {

  constructor() { }

  @Input()
  message: any;
  ngOnInit() {
  }

}
