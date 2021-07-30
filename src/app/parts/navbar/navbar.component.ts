import { Component, OnInit,  ViewChild, ElementRef, Input } from '@angular/core';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import * as config from "../../../json/config.json"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations : [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  @ViewChild("formSearch") formSearch: ElementRef;
  @Input() marginBottom;
  @Input() backgroundColor;
  @Input() textWhite: boolean;
  @Input() data? : any = {
    profile : {
      registration: null,
      isLogo: null
    }
  }
  isLogo: number;
  baseUrl: string;

  keyword: string;
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
   // this.get()
  }
  onSearch(){
    if(this.isOpen){
      if(this.keyword != null){
        this.router.navigate([`/list-article/search/` + this.keyword])
      }else{
        this.isOpen = !this.isOpen;
      }
    }else{
      this.isOpen = !this.isOpen;
      this.formSearch.nativeElement.focus();
    }
  }

  onKeydown(event){
    if(event.key.toString() == "Enter"){
      if(this.keyword != null){
        this.router.navigate(['list-article/search/' + this.keyword])
        .then(() => {
          window.location.reload();
        });
      }
    }
  }

  get(){
    this.apiService.get("/navbar").subscribe(
      response => {
       // this.data = response;
        //console.log(response);
      },
      error => {
        console.log(error)
      }
    )
  }
}
