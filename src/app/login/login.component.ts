import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Category } from '../category/category.component';
​
export class User {
  name: string;
  parentId: string;
}
​
​
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }
​
  loginForm = new FormGroup({
    userLogin: new FormControl('admin', Validators.required),
    userPassword: new FormControl('admin', Validators.required),
  });
​
  users: User;

   url =  'http://localhost:8081/rest/category?';
 // url = 'https://jsonplaceholder.typicode.com/users';
  ngOnInit(): void {
    // console.log(this.body);
  }
  submitLogin() {
    let body: string = JSON.stringify({ login: this.loginForm.get('userLogin').value, password: this.loginForm.get('userPassword').value});
    console.log(this.loginForm.get('userLogin').value);
    console.log(this.loginForm.get('userPassword').value);
    console.log(body);
    // this.http.post(this.url, JSON.stringify(this.body)).subscribe((data: User) => {
    //   console.log(data);
    // });

    this.http.post(this.url, body).subscribe((data: User) => {
      this.users = data;
      console.log(data);
    });

  }
}
