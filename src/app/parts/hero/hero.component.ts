import { Component, OnInit, Input } from '@angular/core';
import * as config from "../../../json/config.json"

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
//hero
titleHistory : string;
contentHistory : string;
@Input() data;
baseUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
    //hero
  //  this.imageHistory = landingPage.sejarah.urlImage;
  }

}
