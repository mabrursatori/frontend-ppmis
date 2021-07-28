import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scrHeight:any;
  scrWidth:any;;
  marginBottomNavbar = "240px";
  backgroundColorNavbar = "transparent"
  marginBottomFeatures = "90px";
  isCarouselHidden : boolean = false;
  isFeaturesHidden : boolean = false;
  isSecondFeaturesHidden : boolean = true;
  white: string = "white";
  gray: string = "#F8F8F8"
  data: any = {
    slideshow: null
  }

  navbar: any ;

  slideshow: any;

  event: any ={
    title: "New Event",
    type: "event",
    list: []
  }
  biografi: any ={
    title: "Biografi Masyayikh",
    type: "biografi",
    list: []
  }
  bathsul: any ={
    title: "Bathsul Masail",
    type: "bathsul",
    list: []
  }

  profile: any;
  footer: any;
  

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getScreenSize();
    this.get();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
         // console.log(this.scrWidth);

            if(this.scrWidth < 575){
              this.isCarouselHidden = true;
              this.isFeaturesHidden = true;
              this.isSecondFeaturesHidden = false;
              this.marginBottomNavbar = "10px";
              this.backgroundColorNavbar = "#C4C4C4";
            }else{
              this.isCarouselHidden = false;
              this.isFeaturesHidden = false;
              this.isSecondFeaturesHidden = true;
              this.marginBottomNavbar = "240px";
              this.backgroundColorNavbar = "transparent";
            }
    }


    get(){
      this.apiService.get("/home").subscribe(
        response => {
          this.navbar = response;
          this.data = response;
          this.slideshow = this.data.slideshow;
          this.profile = this.data.profile;
          this.biografi.list = this.data.biografi;
          this.bathsul.list = this.data.bathsul;
          this.event.list = this.data.event;
          this.footer = this.data.contacts;
       // console.log(this.footer)
        //console.log(this.data.contacts)
       // console.log(this.data.biografi)
        },
        error => {

        }
      )
    }
}
