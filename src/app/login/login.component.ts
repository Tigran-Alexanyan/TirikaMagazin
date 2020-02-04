import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

export class User {
  title: string;
  thumbnailUrl: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  users: User;

   url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private router: Router, http: HttpClient) {
      http.get(this.url).subscribe((data: User) => this.users = data);
    }


  ngOnInit(): void {
  }

  submitLogin() {
    this.router.navigate(['/option']);
  }

}


