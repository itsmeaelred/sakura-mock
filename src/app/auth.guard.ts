import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot} from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private authService : AuthServiceService,
  private router : Router
) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> {
      return this.authService.isAuthenticated()
        .pipe(
          tap(loggedIn => {
            if(!loggedIn) {
              this.router.navigate(['/login']);
            }
          })
        )
    }
}
