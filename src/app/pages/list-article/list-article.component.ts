import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
backgroundColorNavbar : string = "#C4C4C4";
marginBottomNavbar : string = "30px";
marginBottomBreadcrumb: string = "30px";
type: string;
keyword: string;
breadcrumb: string;
data: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type']
    this.keyword = this.route.snapshot.params['keyword']

    if(this.type == "search"){
      this.titleService.setTitle("Pencarian")
      this.breadcrumb = "Pencarian"
      this.get(`/home/search/${this.keyword}`)
    }else{
      this.titleService.setTitle("Kategori")
      this.breadcrumb = this.capitalizeFirstLetter(this.type);
      this.get(`/home/type/${this.type}`)
      this.type = this.capitalizeFirstLetter(this.type)
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get(url){
    this.apiService.get(url).subscribe(
      response => {
        this.data = response;
        //console.log(response)
      },
      error => {
        console.log(error);
       // console.log("KOSONG")
      }
    )
  }

}
