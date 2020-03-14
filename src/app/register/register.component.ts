import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService  } from '../service/authentication.service';
import { UserService} from '../service/user.service';
import { Role } from '../_models/role';
import { User} from '../_models/users';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  // public login;
  // public password;
  public errors;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
   checkboxes: Role[];
   user: User[];

  public role: number [] = [];

  getId(id: number) {
    this.role.push(id);
    console.log(this.role);
  }


  ngOnInit() {
    this.userService.getAllRoles().subscribe((data) => {
       this.checkboxes = data;
       // console.log(data);
    });
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        login: ['', Validators.required],
        password: ['', Validators.required],
      });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    if (this.registerForm.get('login').value !== this.registerForm.get('password').value) {
      this.errors = 'Incorrect Login or Password';
    }

    this.loading = true;

    const body = JSON.stringify({
       name : this.registerForm.get('name').value,
       surname : this.registerForm.get('surname').value,
       login : this.registerForm.get('login').value,
       password : this.registerForm.get('password').value,
       roleId : this.role,
    });


    console.log(body);
    // @ts-ignore
    this.userService.register(body).pipe(first()).subscribe(data => {
      console.log(data);

        // this.alertService.success('Registration successful', true);
      this.router.navigate(['/login']);
        },
        error => {
         // this.alertService.error(error);
          this.loading = false;
        });
  }
}
