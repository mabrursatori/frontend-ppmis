import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
user : User;
   constructor(public router: Router, public apiService: ApiService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let token = localStorage.getItem("appToken");
      if(token != null){
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
