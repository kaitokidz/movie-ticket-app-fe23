import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginActivate implements CanActivate {

    constructor(private router: Router) {

    }
    /**
     * Kiểm tra nếu đã login thì redirect lại homepage, không hiện form sign-in, sign-up lên nữa
     */
    canActivate() {
        if (!localStorage.getItem("userLogin")) {
            return true;
        }

        this.router.navigate(["/home/homepage"])

        return false;
    }
}
