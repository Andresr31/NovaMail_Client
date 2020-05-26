import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("auth")=="true")
      {
        console.log('Guardian superado');
        return true;
      }
      else
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes iniciar sesión',
        });
        //Llevar al login
        setTimeout(() => {
          document.location.href="login";
        }, 2000)
        
        return false;
      }
  }
  
}
