import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { MessageService } from 'primeng/api';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MessageService]
})
export class AdminComponent implements OnInit {
  items: MenuItem[];
  display: boolean = true;
  width = "10px";
  showFiller = false;
  products: any;
  constructor(private apiService: ApiService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
   this.apiService.setLogin();
  }


  showConfirm(){
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Anda Yakin?', detail:'Klik Ya untuk keluar'});
  }

  onConfirm(){
    localStorage.removeItem("appToken");
    this.router.navigate(['/login']);
  }

  onReject(){
    this.messageService.clear();
  }

  scrHeight;
  scrWidth;
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          //console.log(this.scrWidth);

            if(this.scrWidth < 900){
              this.router.navigate(["/error"]);
            }
    }
  

}
