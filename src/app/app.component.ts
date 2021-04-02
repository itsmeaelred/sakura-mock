import { Component, ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Subscription } from "rxjs";
import { AuthServiceService } from "./auth-service.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sakura-login';
  user: CognitoUserInterface | undefined;
  authState!: AuthState;
  subscription: Subscription;
  loggedIn: boolean;

  constructor(private ref: ChangeDetectorRef, public auth:AuthServiceService) {}

  ngOnInit() {
    this.subscription = this.auth.isAuthenticated()
      .subscribe(result => {
        this.loggedIn = result;
      });   
    // onAuthUIStateChange((authState, authData) => {
    //   this.authState = authState;
    //   this.user = authData as CognitoUserInterface;
    //   this.ref.detectChanges();
    // })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // return onAuthUIStateChange;
  }

  // onClickLogout() {
  //   this.auth.sign
  // }
}
