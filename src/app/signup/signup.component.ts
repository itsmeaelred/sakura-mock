import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  public confirmationForm: FormGroup;
  public successfullySignup: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthServiceService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      group_id: new FormControl('',[Validators.required]),
      group_name: new FormControl('',[Validators.required]),
      service_id: new FormControl('',[Validators.required])
    });

    this.confirmationForm = this.fb.group({
      'username': ['', Validators.required],
      'confirmationCode': ['', Validators.required]
    });
  }

  onSubmitSignup(value: any) {
    const
      username = value.username,
      password = value.password,
      email = value.email,
      group_id = value.group_id,
      service_id = value.service_id,
      group_name = value.group_name;

    this.auth.signUp(username, password, email, group_id, service_id, group_name)
      .subscribe(
        result => {
          this.successfullySignup = true;
        },
        error => {
          console.log(error);
        });
  }

  onSubmitConfirmation(value: any) {
    const
      username = value.username,
      confirmationCode = value.confirmationCode;
      
    this.auth.confirmSignUp(username, confirmationCode)
      .subscribe(
        result => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        });
  }

}
