import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {Category} from '../category/category.component';


export class CheckBox {
   name: string;
   id: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {
    this.submitRegister();
    http.get(this.urlRole).subscribe((data: CheckBox) => {
      this.checkboxes = data;
      console.log(data);
    });
  }

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userSurname: new FormControl('', Validators.required),
    userLogin: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  checkboxes: CheckBox;
  urlRole = 'http://localhost:8081/rest/role';

  urlUsers = 'http://localhost:8081/rest/users';

  check = false;

  ngOnInit() {
  }
  getId(id: number) {
      console.log(id);
      // console.log(localStorage.getItem('token'));
   // this.registerForm.body.rolesId.push(id);
  }

  submitRegister() {
    const body: string = JSON.stringify({
      name: this.registerForm.get('userName').value,
      surname: this.registerForm.get('userSurname').value,
      login: this.registerForm.get('userLogin').value,
      password: this.registerForm.get('userPassword').value,
      rolesId: [],
    });


    this.http.post(this.urlUsers, body, {
      headers: {
        'content-type': 'application/json;',
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: any) => {
      this.checkboxes = data.userDto;
      const token = data.token;
      console.log(token);
      localStorage.setItem('token', token);
      this.router.navigate(['option']);
    });

    console.log(body);
    localStorage.getItem('token');
    // localStorage.removeItem('token');
  }
}


