import { Component, OnInit, Input } from '@angular/core';
import * as landingPage from '../../../json/landingPage.json';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as config from "../../../json/config.json"

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  baseUrl: string;
  @Input() data: any = {
    title: "",
    list: []
  }
  @Input() background: string;
  length: any;
  constructor(
    elRef:ElementRef
  ) { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
  }

  test(){
   // console.log("TEST")
  }

  

}
