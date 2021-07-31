import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';

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
    private messageService: MessageService) { }

  ngOnInit(): void {
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
    this.apiService.put(`/contacts/${this.selectedItem.id}`, this.selectedItem).subscribe(
      (response) => {
        this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Merubah Data!'});
      },
      (error) => {
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
