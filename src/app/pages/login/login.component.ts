import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import {User} from '../../models/user'
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  user : any;
  isLoading: boolean = false;

  constructor(public apiService : ApiService, 
    private router: Router,
    private messageService: MessageService) {
      
     }

  ngOnInit(): void {
    this.user = {
      username : "",
      password : "",
      token : ""
    }
    
  }

  login(){
    this.isLoading = true;
      this.apiService.post("/login", this.user).subscribe(
        (res) => {
        this.user = res
        //console.log(this.user)
        //this.cookieService.set( 'token', this.user.token );
        localStorage.setItem("appToken", JSON.stringify(this.user) );
        this.isLoading = false;
        this.router.navigate(['/admin'])
      },
      (error) => {
        console.log(error)
        this.messageService.add({severity:'error', summary:'Error!', detail:'Username atau Password Anda Salah!'});
      }
        )
  }

}
