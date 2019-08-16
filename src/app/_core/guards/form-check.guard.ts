import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from 'src/app/home/home-management/sign-up/sign-up.component';


@Injectable({
  providedIn: 'root'
})

export class FormCheckGuard implements CanDeactivate <SignUpComponent>{
  canDeactivate(component) {
    return component.canDeactivate() ;
  }
  
}

// || window.confirm("Are you sure you want to leave this page ?")