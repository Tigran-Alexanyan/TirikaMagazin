import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Category } from '../category/category.component';
import {RegisterComponent} from '../register/register.component';

export class User {
  name: string;
  parentId: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    userLogin: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  user: User;
  constructor(private router: Router, private http: HttpClient ) {
    this.submitLogin();
  }
  url =  'http://localhost:8081/rest/users/auth';

  ngOnInit(): void {
  }
  submitLogin() {
    // tslint:disable-next-line:max-line-length
    const body: string = JSON.stringify({ login: this.loginForm.get('userLogin').value, password: this.loginForm.get('userPassword').value});
    // console.log(this.loginForm.get('userLogin').value);
    // console.log(this.loginForm.get('userPassword').value);
    // console.log(body);
    // this.http.post(this.url, JSON.stringify(this.body)).subscribe((data: User) => {
    //   console.log(data);
    // });

    this.http.post(this.url, body, {
      headers: {
        'content-type': 'application/json;',
        // Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: any) => {
      this.user = data.userDto;
      const token = data.token;
      console.log(token);
      localStorage.setItem('token', token);
      this.router.navigate(['option']);
    });


    localStorage.getItem('token');
    // localStorage.removeItem('token');
  }
}
