import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router , ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { first } from 'rxjs/operators';
// @ts-ignore
import { AuthenticationService } from '../service/authentication.service';


// export class User {
//   token: string;
//   id: number;
//   name: string;
//   login: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
// export class LoginComponent implements OnInit {
//   constructor(private router: Router, private http: HttpClient ) {
//       this.submitLogin();
//   }
//
//
//   loginForm = new FormGroup({
//     userLogin: new FormControl('', Validators.required),
//     userPassword: new FormControl('', Validators.required),
//   });
//
//   user: User;
//   url =  'http://localhost:8081/rest/users/auth';
//
//   ngOnInit(): void {
//   }
//
//   submitLogin() {
//     const body: string = JSON.stringify({
//       login: this.loginForm.get('userLogin').value,
//       password: this.loginForm.get('userPassword').value,
//     });
//     this.http.post(this.url, body, {
//       headers: {
//         'content-type': 'application/json',
//          Authorization: `Bearer ${localStorage.getItem('token')}`
//       }
//     }).subscribe((data: any) => {
//       this.user = data.userDto;
//       const token = data.token;
//       console.log(token);
//       localStorage.setItem('token', token);
//
//     });
//     console.log(body);
//     // const login = this.loginForm.get('userLogin').value;
//     // const password = this.loginForm.get('userPassword').value;
//     // localStorage.setItem('login', login);
//     // localStorage.setItem('password', password);
//   }
//
// }
// import { AuthenticationService } from '../service/authentication.service';

// @Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

   // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.login.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.authenticationService.currentUser = data.userDto;
          console.log(this.authenticationService.currentUser);
          const token = data.token;
          console.log(token);
          localStorage.setItem('token', token);
          this.router.navigate(['/option']);
        });
  }
}
