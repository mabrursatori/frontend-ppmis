import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
backgroundColorNavbar = "#C4C4C4";
marginBottomNavbar : string = "30px";
marginBottomBreadcrumb: string = "30px";
id: any;
data: any;
history: any;
footer: any;
otherArticles: any;
breadcrumb: string;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    if(this.id == "history"){
    this.breadcrumb = "History"
      this.getHistory();
    }else{
      
    this.breadcrumb = "Artikel"
      this.getArticle()
    }
    //console.log(this.id)
  }

  getArticle(){
    this.apiService.get(`/home/${this.id}`).subscribe(
      response => {
        //console.log(response)
        this.data = response;
        this.footer = this.data.contacts
      },
      error => {
        this.router.navigate(["/error"])
      }
    )
  }

  getHistory(){
    this.apiService.get("/history").subscribe(
      response => {
        this.data = response;
        this.footer = this.data.contacts;
        this.history = true;
      },
      error => {
        console.log(error);
      }
    )
  }

}
