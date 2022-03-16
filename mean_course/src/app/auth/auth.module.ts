import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
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
  ]
})
export class AuthModule{

}
