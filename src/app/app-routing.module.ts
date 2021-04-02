import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MainComponent, SignupComponent, PageNotFoundComponent]