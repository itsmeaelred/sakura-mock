import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  from,
  of } from 'rxjs';
import { baseUrl, environment } from 'src/environments/environment';
import * as moment from 'moment';
import Amplify, {Auth} from 'aws-amplify';
import { Router } from '@angular/router';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private http:HttpClient, private router:Router) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }


  loggedIn : BehaviorSubject<boolean>;

  signUp(username, password, email, group_id, service_id, group_name): Observable<any> {
    return from(
      Auth.signUp({
        username,
        password,
        attributes: {
          email: email, //メールアドレス
          'custom:group_id': group_id, //グループID
          'custom:service_id': service_id, //業務ID
          'custom:group_name': group_name, //グループID
        }
      }));
  }

  confirmSignUp(username, code): Observable<any> {
    return from(Auth.confirmSignUp(username, code));
  }


  login(data):Observable<any> {
    return this.http.post(`${baseUrl}users/login`, data);
  }

  registerUser(data):Observable<any> {
    return this.http.post(`${baseUrl}users/`, data);
  }  

  // loggedIn() {
  //   alert(moment());
  //   return !!localStorage.getItem('token') && moment().isBefore(this.getExpiration());
  // }

  isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
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
