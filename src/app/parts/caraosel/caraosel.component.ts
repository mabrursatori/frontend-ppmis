import { Component, OnInit, Input } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import * as landingPage from '../../../json/landingPage.json';
import * as config from "../../../json/config.json"

@Component({
  selector: 'app-caraosel',
  templateUrl: './caraosel.component.html',
  styleUrls: ['./caraosel.component.css'],
  providers: [NgbCarouselConfig],
})
export class CaraoselComponent implements OnInit {
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  baseUrl: string;
  @Input() marginBottom;
  @Input() marginTop;
  @Input() data: any;
  //caraosel
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
  //caraosel
  config.showNavigationArrows = true;
  config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
  //  console.log(this.data)
  this.baseUrl = config.BaseUrl + "/"
  }

}
