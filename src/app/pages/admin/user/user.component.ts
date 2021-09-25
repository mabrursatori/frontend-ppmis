import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {
  users: any;
  selectedUser: any;
  param: string;
  display: boolean = false;
  isLoading: boolean = false;
  data: any = {
    username : null,
    password : null,
    oldPassword : null,
  }
  constructor(private apiService: ApiService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    //table
    this.loading = false;
    this.displayBasic = false;


    //get api
    this.get()

  }


  get(){
    this.isLoading = true;
    this.apiService.getWithToken("/users").subscribe(
      response => {
       this.users = response;
       this.isLoading = false;
      },
      error => {
        console.log(error)
      }
    )
  }

add(){
  this.data.username = this.selectedUser.username;
  this.data.password = this.selectedUser.password;
  this.isLoading = true;
  this.apiService.post('/users', this.data).subscribe(
    response => {
      //console.log(response);
      this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Menyimpan Data Baru!'});
      this.get();
      this.display = false;
      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan Data!'});
      this.isLoading = false;
    }
  )
}

edit(){
  this.isLoading = true;
  this.data.id = this.selectedUser.id;
  this.data.username = this.selectedUser.username;
  this.data.password = this.selectedUser.password;
  this.data.oldPassword = this.selectedUser.oldPassword;
  this.apiService.put(`/users/${this.data.id}`, this.data).subscribe(
    response => {
      //console.log(response);
      this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Merubah Data!'});
      this.display = false;
      this.isLoading = false;
      this.get();
    },
    error => {
      console.log(error);
      this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menyimpan Data!'});
      this.isLoading = false;
    }
  )
}

delete(){
  this.isLoading = true;
  this.apiService.delete(`/users/${this.selectedUser.id}`).subscribe(
    (response) => {
      //console.log(response);
      this.messageService.clear();
      this.messageService.add({severity:'success', summary:'Sucessfull!', detail:'Berhasil Menghapus Data!'});
      this.isLoading = false;
      this.get();
    },
    (error) => {
      console.log(error);
      this.messageService.add({severity:'error', summary:'Error!', detail:'Gagal Menghapus Data!'});
      this.isLoading = false;
    }
  )
}


  //dialog
showDialog(user: any = null) {
  this.messageService.clear();
  this.display = true;
  if (user == null){
    this.selectedUser = {};
    this.param = "add";
  } else {
    this.selectedUser = user;
    this.selectedUser.oldPassword = user.password;
    this.selectedUser.password = ""
    this.param = "edit";
    //(this.selectedUser)
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
  this.selectedUser = item;
  //console.log(this.selectedUser);
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
