import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';
import {Article} from '../../../models/article'
import * as config from "../../../../json/config.json"
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [MessageService]
})
export class ArticleComponent implements OnInit {
articles: any;
baseUrl : string;
selectedItem: any;
selectedType: any;
isLoading: boolean = false;
isLoadingSave: boolean = false;
type: any[];
editDropdown: boolean = true;
param: string;
data: any = {
  id: null,
  title: null,
  image: null,
  caption: null,
  content: null,
  type: null,
  oldImage: null
}
  constructor(private apiService: ApiService,
    private messageService: MessageService,
    private titleService:Title) { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
    this.titleService.setTitle("Admin - Artikel")
      //table
      this.loading = false;
      this.displayBasic = false;

      //form select
      this.type = [
        {
          name: "BIOGRAFI",
          code: "BIOGRAFI"
        },
        {
          name: "EVENT",
          code: "EVENT"
        },
        {
          name: "BATHSUL",
          code: "BATHSUL"
        }
      ]

      this.selectedType =  {
        name : "EVENT",
        conde : "EVENT"
      }

    this.get()
  }

  onClick(param: string){
    this.isLoadingSave = true;
    if(param == "add"){
      this.add();
    }else if(param == "update"){
      this.update()
    }
  }

  showConfirm(item){
    this.data = item;
    this.display= false;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Anda Yakin?', detail:'Klik Ya untuk menghapus'});
  }

  onConfirm(){
    this.isLoadingSave = true;
    this.delete()
  }
  onReject(){
    this.messageService.clear();
  }

  get(){
    this.isLoading = true;
    this.apiService.getWithToken("/article").subscribe(
      (response) => {
        this.articles = response;
        this.isLoading = false;
        console.log(this.articles)
      },
      (error) =>
      console.log(error)
    )
  }

  add(){
    this.data.type = this.selectedType.name;
      this.data.title = this.selectedItem.title;
      this.data.caption = this.selectedItem.caption;
      this.data.content = this.selectedItem.content;
    this.apiService.post("/article", this.data, true).subscribe(
      (response) => {
        this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Menyimpan Data Baru!'});

        this.display = false;
        this.isLoading = false;
      },
      (error) => {
        this.isLoadingSave = false;
        this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan Data!'});

      }
    )
  }

  update(){
    this.data.id = this.selectedItem.id;
    this.data.type = this.selectedType.name;
      this.data.title = this.selectedItem.title;
      this.data.caption = this.selectedItem.caption;
      this.data.content = this.selectedItem.content;
      this.data.oldImage = this.selectedItem.image;
    this.selectedItem.type = this.selectedType.name;
    this.apiService.put(`/article/${this.data.id}`, this.data, true).subscribe(
      response => {
        this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Merubah Data!'});
        this.isLoadingSave = false;
        this.display = false;
      },
      error => {
        this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Merubah Data!'});
        this.isLoadingSave = false;
        console.log(error)
      }
    )
  }

  delete(){
    this.apiService.delete(`/article/${this.data.id}`).subscribe(
      (response) => {
       // console.log(response);

        this.messageService.clear();
        this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Menghapus Data!'});
        this.isLoadingSave = false;
      // this.get();
      },
      (error) => {
        console.log(error);
        this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menghapus Data!'});
        this.isLoadingSave = false;
      }
    )
  }

  onUpload(event) {
    for(let file of event.files) {
      if(file.size > 1000000){
        this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan! File Melebihi 1MB'});
        return;
      }else if(file.type.split('/')[0] != 'image'){
        this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan! File Harus Berupa Gambar'});
        return;
      }
       this.data.image = file;
       this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Manambah Data!'});
    }
  }


  //dialog
  display: boolean = false;
  hiddenForm: boolean = false;
  showDialog(item?: any, isDetail = false){
    this.hiddenForm = false;
    this.display = true;
    if(item == null){
      this.selectedItem = {}
      this.selectedType = {
        name: "BIOGRAFI",
        code: "BIOGRAFI"
      }
      this.param = "add";
     // console.log(this.param)
    }else if(item != null && isDetail){
      this.hiddenForm = true;
      this.selectedItem = item;
    }else{
      this.selectedItem = item;
      this.selectedType = {
        name : item.type,
        code : item.type
      }
      this.param = "update";
     // console.log(this.param)
    }
  }



  //table
images: any;
first = 0;
rows = 5;
loading: boolean = true;
activityValues: number[] = [0, 100];
width = "100px";
//Gallerie
responsiveOptions:any[] = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];

responsiveOptions2:any[] = [
  {
      breakpoint: '1500px',
      numVisible: 5
  },
  {
      breakpoint: '1024px',
      numVisible: 3
  },
  {
      breakpoint: '768px',
      numVisible: 2
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];
displayBasic: boolean;
displayCustom: boolean;
activeIndex: number = 0;

}
