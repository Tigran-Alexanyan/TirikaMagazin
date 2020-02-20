import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';


export class CheckBox {
   name: string;
   surname: string;
   login: string;
   password: string;
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
      // console.log(data);
    });
  }

  checkboxes: CheckBox;
  public num: number[] = [];

  urlRole = 'http://localhost:8081/rest/role';

  urlUsers = 'http://localhost:8081/rest/users';


  registerForm = new FormGroup({
    userName: new FormControl('ghg', Validators.required),
    userSurname: new FormControl('ghg', Validators.required),
    userLogin: new FormControl('admin', Validators.required),
    userPassword: new FormControl('admin', Validators.required),
  });


  check = false;

  ngOnInit() {
  }

  getId(id: number) {
   // console.log(id);
    // this.num.push(id);
    this.num.push(id);
  }

  submitRegister() {
    console.log(this.num);
    const body: string = JSON.stringify({
      name: this.registerForm.get('userName').value,
      surname: this.registerForm.get('userSurname').value,
      login: this.registerForm.get('userLogin').value,
      password: this.registerForm.get('userPassword').value,
      roleId: this.num,
    });

    this.http.post(this.urlUsers, body, {
      headers: {
        'content-type': 'application/json',
      }
    }).subscribe((data: any) => {
      console.log(data);
      console.log(body);
    });
  }
  }


