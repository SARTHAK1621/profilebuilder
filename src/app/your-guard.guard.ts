import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VariablesComponent } from 'src/app/shared/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class YourGuardGuard implements CanActivate {
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!localStorage.getItem("userId")) {
      return false;
    }
    return true;
  }
  
}
