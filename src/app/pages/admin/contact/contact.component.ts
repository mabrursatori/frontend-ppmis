import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  contacts: any;
  isLoading: boolean = false;

  constructor(private apiService: ApiService,
    private messageService: MessageService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Media Social")
    this.get();
  }

  get(){
    this.isLoading = true;
    this.apiService.getWithToken("/contacts").subscribe(
      (response) => {
        this.contacts = response;
        this.isLoading = false;
       // console.log(this.contacts)
      },
      (error) => {

      }
    )
  }

  update(){
    this.isLoading = true;
    this.apiService.put(`/contacts/${this.selectedItem.id}`, this.selectedItem).subscribe(
      (response) => {
        this.isLoading = false;
        this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Merubah Data!'});
      },
      (error) => {
        this.isLoading = false;
        this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Merubah Data!'});
      }
    )
  }







  //dialog
selectedItem : any;
display: boolean = false;
showDialog(item: any){
  this.display = true;
  this.selectedItem= item;
}

onSave(){
  this.update();
  this.display = false;
}

}
