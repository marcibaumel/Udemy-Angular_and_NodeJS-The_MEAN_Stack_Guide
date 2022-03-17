import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponenet } from "./login/login.component";
import { SignupComponenet } from "./signup/signup.component";

const routes: Routes = [
  { path: 'login', component: LoginComponenet },
  { path: 'signup', component: SignupComponenet },
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule{}
