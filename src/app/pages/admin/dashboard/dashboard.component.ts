import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  @Input() name;
  chart: any;
  data: any = {
    user: null,
    article: null,
    slideshow: null,
    biografi: null,
    event: null,
    bathsul: null
  }
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getWithToken("/dashboard").subscribe(
      response => {
        //console.log(response)
        this.data = response;
        this.chart = {
          labels: ['Biografi','Event','Bathsul Masail'],
          datasets: [
              {
                  data: [this.data.biografi, this.data.event, this.data.bathsul],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]    
          };
      },
      error => {
        console.log(error)
      }
    )
      

    
  }

}
