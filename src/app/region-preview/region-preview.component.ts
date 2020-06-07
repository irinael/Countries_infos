import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-preview',
  templateUrl: './region-preview.component.html',
  styleUrls: ['./region-preview.component.css']
})
export class RegionPreviewComponent implements OnInit {
  angle: any;
  spinner: any;

  constructor() { }

  // galleryspin(sign) {
  //   this.spinner = document.querySelector("#spinner");
  //   if (!sign) { this.angle = this.angle + 72; } else { this.angle = this.angle - 72; }
  //   this.spinner.setAttribute(
  //     "style", "-webkit-transform: rotateY(" + this.angle + "deg); -moz-transform: rotateY(" + this.angle + "deg); transform: rotateY(" + this.angle + "deg);");
  // }

  ngOnInit() {
    // this.angle = 0;
  
    }
  }


