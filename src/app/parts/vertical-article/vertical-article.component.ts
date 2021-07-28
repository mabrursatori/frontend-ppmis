import { Component, OnInit, Input } from '@angular/core';
import * as config from "../../../json/config.json"
@Component({
  selector: 'app-vertical-article',
  templateUrl: './vertical-article.component.html',
  styleUrls: ['./vertical-article.component.css']
})
export class VerticalArticleComponent implements OnInit {
  @Input() data: any;
  baseUrl: string = "http://localhost:3000/"
  
  constructor() { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
  }

}
