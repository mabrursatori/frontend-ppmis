import { Component, OnInit, Input } from '@angular/core';
import * as config from "../../../json/config.json"
@Component({
  selector: 'app-content-list-article',
  templateUrl: './content-list-article.component.html',
  styleUrls: ['./content-list-article.component.css']
})
export class ContentListArticleComponent implements OnInit {
@Input() data: any;
baseUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
  }

}
