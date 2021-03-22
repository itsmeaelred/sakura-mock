import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http:HttpClient) {    }
  
  login(data):Observable<any> {
    return this.http.post(`${baseUrl}users/login`, data);
  }

  registerUser(data):Observable<any> {
    return this.http.post(`${baseUrl}users/`, data);
  }  

  loggedIn() {
    alert(moment());
    return !!localStorage.getItem('token') && moment().isBefore(this.getExpiration());
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }
}
