import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

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
data: any = {
  type: null,
  keyword: null,
  articles: null,
}

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type']
    this.keyword = this.route.snapshot.params['keyword']
    
    if(this.type == "search"){
      this.breadcrumb = "Pencarian"
      this.data.type = this.type;
      this.data.keyword = this.keyword
      this.get(`/home/search/${this.keyword}`)
    }else{
      this.breadcrumb = this.capitalizeFirstLetter(this.type);
      this.data.type = this.type;
      this.get(`/home/type/${this.type}`)
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  get(url){
    this.apiService.get(url).subscribe(
      response => {
        this.data.articles = response;
        //console.log(response)
      },
      error => {
        console.log(error);
       // console.log("KOSONG")
      }
    )
  }

}
