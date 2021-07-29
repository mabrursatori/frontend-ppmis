import { Component, OnInit, Input } from '@angular/core';
import {Contact} from "../../models/contact"
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
@Input() data: any;
facebook: any = {
  name: null,
  laben: null,
  url: null
};
instagram: any;
youtube: any;
phone: any;
location: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    

  //  this.get()
  }

  get(){
    this.apiService.get("/footer").subscribe(
      response => {
       // this.data = response;
      },
      error => {

      }
    )
  }

}
