import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router){
    
  }
  canActivate(){
    if (localStorage.getItem("userLogin")){
      return true;
    }
    this.router.navigate(["/home/sign-in"])
    return false;
  }
}
