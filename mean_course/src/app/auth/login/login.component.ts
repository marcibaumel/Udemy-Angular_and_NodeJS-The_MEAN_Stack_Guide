import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponenet {
  isLoading = false;

  onLogin(form: NgForm) {
    console.log(form.value);
  }
}
