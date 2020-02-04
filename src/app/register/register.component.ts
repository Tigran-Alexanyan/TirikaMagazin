import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ServiceService} from '../service/service.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userSurname: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  constructor(private service: ServiceService, private router: Router) {}
  submitRegister() {
      this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
