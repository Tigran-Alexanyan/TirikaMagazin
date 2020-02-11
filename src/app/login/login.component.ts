import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userLogin: new FormControl('admin', Validators.required),
    userPassword: new FormControl('admin', Validators.required),
  });


  constructor(private router: Router, private http: HttpClient) {}

  url = 'http://localhost:8081/rest/auth';
  body: string = JSON.stringify({ login: `${this.loginForm.get('userLogin').value}`, password: this.loginForm.get('userPassword').value});
  ngOnInit(): void {
  }

  submitLogin() {
    console.log(this.loginForm.get('userLogin').value);
    console.log(this.loginForm.get('userPassword').value);
    console.log(this.body);
    this.http.post(this.url, this.body).subscribe(data => {
      console.log(data);
    });
    }
  }




