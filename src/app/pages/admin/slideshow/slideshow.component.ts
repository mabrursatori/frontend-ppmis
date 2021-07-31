import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';
import * as config from "../../../../json/config.json"

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  providers: [MessageService]
})
export class SlideshowComponent implements OnInit {
  someSlideshow : any;
  baseUrl : string;
  isLoading: boolean = false;
  param:  string;
  number: number = 1;
  
selectedImage: any = {
  id : null,
  image: null,
  number: null,
}
  constructor(
    public apiService: ApiService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";

    //table
    this.loading = false;
    this.displayBasic = false;

    //get api
    this.getData();
  
  }

 
getData(){
  this.isLoading = true;
  this.apiService.getWithToken("/slideshow").subscribe(
    (response) => {
      this.someSlideshow = response
      this.isLoading = false;
      //console.log(this.someSlideshow);
    },
    (error) => {
     // console.log(error);
    }
  );
}
  
//dialog
showDialog(image: any = null) {
  this.messageService.clear();
  this.display = true;
  if (image == null){
    this.selectedImage = {};
    this.param = "add";
  } else {
    this.selectedImage = image;
    this.param = "edit";
    //console.log(this.selectedImage)
  }
}
data: any = {
  id: null,
  image : null,
  number : null,
  oldImage : null
}
//upload file
onUpload(event) {
  for(let file of event.files) {
     this.data.image = file;
    // console.log(file);
  }
}

onClick(param: string){
   if (param == "add"){
    this.add();
   }else{
    this.edit()
   }
}

showConfirm(item){
  this.selectedImage = item;
  //console.log(this.selectedImage);
  this.display= false;
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Anda Yakin?', detail:'Klik Ya untuk menghapus'});
}

onConfirm(){
  this.delete();
}

onReject(){
  this.messageService.clear();
}

add(){
  this.data.number = this.selectedImage.number;
  this.apiService.post("/slideshow", this.data, true).subscribe(
    (response) => {
      //console.log(response);
      this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Menyimpan Data Baru!'});
      this.getData();
      this.display = false;
    },
    (error) => {
      console.log(error);
      this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan Data!'});
    }
  )
}

edit(){
  this.data.number = this.selectedImage.number;
  this.data.id = this.selectedImage.id;
  this.data.oldImage = this.selectedImage.image;
  //console.log(this.data)
  this.apiService.put(`/slideshow/${this.data.id}`, this.data, true).subscribe(
    (response) => {
      console.log(response);
      this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Merubah Data!'});
      this.display = false;
      this.getData();
    },
    (error) => {
      console.log(error);
      this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan Data!'});
    }
  )
}

delete(){
  this.apiService.delete(`/slideshow/${this.selectedImage.id}`).subscribe(
    (response) => {
      //console.log(response);
      this.messageService.clear();
      this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Menghapus Data!'});
     this.getData();
    },
    (error) => {
      console.log(error);
      this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menghapus Data!'});
    }
  )
}





//gallerie
imageClick(image: any) {

  this.activeIndex = this.someSlideshow.indexOf(image);
  this.displayBasic = true;
}
//upload file
uploadedFiles: any[] = [];
  
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

//dialog
display: boolean = false;

 //table
 next() {
  this.first = this.first + this.rows;
}
prev() {
  this.first = this.first - this.rows;
}
reset() {
  this.first = 0;
}
isLastPage(): boolean {
  return this.images ? this.first === (this.images.length - this.rows): true;
}
isFirstPage(): boolean {      
  return this.images ? this.first === 0 : true;
}
}
