import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponenet } from "./login/login.component";
import { SignupComponenet } from "./signup/signup.component";

@NgModule({
  declarations:[
    LoginComponenet,
    SignupComponenet,
  ],
  imports:[
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule{

}
