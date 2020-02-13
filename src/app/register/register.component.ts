import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


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

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userSurname: new FormControl('', Validators.required),
    userLogin: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  checkboxes: CheckBox;

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private router: Router, http: HttpClient) {
    http.get(this.url).subscribe((data: CheckBox) => {
      this.checkboxes = data;
    });
  }
  getId(id: number) {
    console.log(id);
  }

  submitRegister() {
      this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
