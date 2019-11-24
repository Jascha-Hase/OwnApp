import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../component-services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  userPassword: string;
  wrongCombination: Boolean;
  options: FormGroup;

  constructor(private authService: AuthService, private router: Router, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: true,
      floatLabel: 'auto',
    });}

  ngOnInit() {
  }
  tryToLogin() {
    if (this.authService.login(this.getUserName(), this.getUserPassword())) {
      this.router.navigate(['']);
    } else {
      if (this.userName !== null && this.userPassword !== null) {
        this.userName = '';
        this.userPassword = '';
        this.wrongCombination = true;
      }
    }
  }
  getUserName(){
    return this.userName;
  }
  getUserPassword(){
    return this.userPassword;
  }

}
