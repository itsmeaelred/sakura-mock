import { AuthServiceService } from './auth-service.service';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector : Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthServiceService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
