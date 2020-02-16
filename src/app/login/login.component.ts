import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
    const body: string = JSON.stringify({
      login: this.loginForm.get('userLogin').value, password: this.loginForm.get('userPassword').value});

    this.http.post(this.url, body, {
      headers: {
        'content-type': 'application/json;',
      }
    }).subscribe((data: any) => {
      this.user = data.userDto;
      const token = data.token;
     // console.log(token);
      localStorage.setItem('token', token);
    });


    localStorage.getItem('token');
    // localStorage.removeItem('token');
   // this.router.navigate(['option']);
  }
}
