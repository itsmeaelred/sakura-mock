import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  formGroup: FormGroup;
  
  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  
  registerUser(){
    if(this.formGroup.valid) {
      this.authService.registerUser(this.formGroup.value).subscribe(result => {
        if(result.success){
          //ログの用
          alert(result.message);
          //メイン画面へ遷移する
        } else {
          alert(result.message);
          this.router.navigate(['/login']);
        }
      },
      (err) => console.log(err));
    }
  }

  logoutProcess(){
    //ログイン画面へ遷移する
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    
    this.router.navigate(['/login']);
  }
}
