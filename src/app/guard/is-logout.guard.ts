import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class IsLogoutGuard implements CanActivate {

  constructor(public router: Router, public apiService: ApiService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = localStorage.getItem("appToken");
      if(token != null){
        this.router.navigate(['/admin']);
        return false;
      } else {
        return true;
      }
  }
  
}
