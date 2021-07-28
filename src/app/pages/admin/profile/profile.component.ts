import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';
import * as config from "../../../../json/config.json"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
profile: any = {
  imageLogo: null,
  registration: null,
  titleHistory: null,
  imageHistory: null,
  contentHistory: null,
  isLogo: null
}
baseUrl : string;
checked: boolean;
data: any ={
  id: null,
  imageLogo: null,
  registration: null,
  titleHistory: null,
  imageHistory: null,
  contentHistory: null,
  isLogo: null,
  oldImageLogo: null,
  oldRegistration: null,
  oldImageHistory: null
}

  constructor(private apiService: ApiService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.baseUrl = config.BaseUrl + "/";
    this.get()

    this.display = false;
   
  }

  onUploadLogo(event){
    for(let file of event.files) {
      this.data.imageLogo = file;
      //console.log(file);
   }
  }
  onUploadRegistration(event){
    for(let file of event.files) {
      this.data.registration = file;
      //console.log(file);
   }
  }
  onUploadProfile(event){
    for(let file of event.files) {
      this.data.imageHistory = file;
      console.log(file);
   }
  }

  get(){
    this.apiService.getWithToken("/profile").subscribe(
      (response) => {
        //console.log(response)
        this.profile = response;
        this.checked = (this.profile.isLogo == 1) ? true : false;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  update(){
    this.data.id = this.profile.id;
    this.data.titleHistory = this.profile.titleHistory;
    this.data.contentHistory = this.profile.contentHistory;
    this.data.isLogo = this.profile.isLogo;
    this.data.oldImageLogo = this.profile.imageLogo;
    this.data.oldRegistration = this.profile.registration;
    this.data.oldImageHistory = this.profile.imageHistory;
    this.apiService.put("/profile", this.data, true).subscribe(
      (response) => {
        //console.log(response);
        this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Merubah Data!'});
        this.display = false;
        this.get();
      },
      (error) => {
        console.log(error);
        this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan Data!'});
      }
    )
  }


  display : boolean;
  showDialog(){
    this.display = true;
  }

  onSave(){
this.update();
  }

  clickIsLogo(){
    this.profile.isLogo = (this.checked) ? 1 : 0;
    this.update();
  }

 

}
