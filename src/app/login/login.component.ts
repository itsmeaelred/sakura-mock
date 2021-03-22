import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  // constructor(private authService:AuthServiceService, private router: Router) { }
  constructor(private router: Router) { }

  ngOnInit() {
    this.initform();
  }

  initform(){
    this.formGroup = new FormGroup({
      group_id: new FormControl('',[Validators.required]),
      user_id: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  // loginProcess(){
  //   if(this.formGroup.valid) {
  //     this.authService.login(this.formGroup.value).subscribe(result => {
  //       if(result.success){
  //         //ログの用
  //         alert(result.message);
  //         //トーケンの設定
  //         const expiresAt = moment().add(result.expiresIn, 'minute');

  //         localStorage.setItem('token', result.token);
  //         localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

  //         //メイン画面へ遷移する
  //         this.router.navigate(['/main']);

  //       } else {
  //         alert(result.message);
  //       }
  //     },
  //     (err) => console.log(err));
  //   }
    loginprocess(){};
}
