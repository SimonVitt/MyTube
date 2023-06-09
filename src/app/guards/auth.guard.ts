import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      if(await this.authService.isAuthenticated()){
        return true;
      }
      try {
        this.authService.logout();
        localStorage.clear();
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
      return this.router.parseUrl('/login');
  }
  
}
