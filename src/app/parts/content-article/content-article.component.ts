import { Component, OnInit, Input } from '@angular/core';
import * as config from "../../../json/config.json"

@Component({
  selector: 'app-content-article',
  templateUrl: './content-article.component.html',
  styleUrls: ['./content-article.component.css']
})
export class ContentArticleComponent implements OnInit {

  baseUrl: string;
  @Input() data: any;
  @Input() isHistory: boolean;

  constructor() { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
  }

}
