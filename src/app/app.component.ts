import { Component, ViewChild, ElementRef } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
import { HostListener } from "@angular/core";
import * as landingPage from '../json/landingPage.json'
import { ApiService } from './service/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(private apiService :ApiService){
    
  }

  ngOnInit(): void {
    
   

    
    
  }

  

  
}
