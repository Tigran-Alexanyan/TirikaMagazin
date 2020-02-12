import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Category} from '../category/category.component';

export class User {
  login: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  loginForm = new FormGroup({
    userLogin: new FormControl('admin', Validators.required),
    userPassword: new FormControl('admin', Validators.required),
  });

 users: User;

  body: string  = JSON.stringify({ login: this.loginForm.get('userLogin').value, password: this.loginForm.get('userPassword')});
 // url =  'http://localhost:8081/rest/users/auth';
  url =  'https://jsonplaceholder.typicode.com/users';
 ngOnInit(): void {
   console.log(this.body);
  }
  submitLogin() {
    console.log(this.loginForm.get('userLogin').value);
    console.log(this.loginForm.get('userPassword').value);
    console.log(this.body);
    // this.http.post(this.url, JSON.stringify(this.body)).subscribe((data: User) => {
    //   console.log(data);
    // });

    this.http.post(this.url, JSON.stringify( this.body)).subscribe((data: User) => {
      this.users = data;
      console.log(data);
    });

  }
}
