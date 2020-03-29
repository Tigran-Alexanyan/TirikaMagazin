import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private service: ServiceService, private formBuilder: FormBuilder) {}
  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  clickMe() {
    // if (this.registerForm.get('name').value === '' || this.registerForm.get('description').value === '' ) {
    //   return;
    // } else {
    const body = JSON.stringify({
      name: this.registerForm.get('name').value,
      surname: this.registerForm.get('surname').value,
      email: this.registerForm.get('email').value,
      phone: this.registerForm.get('phone').value,
      address: this.registerForm.get('address').value,
      date: this.registerForm.get('date').value,
    });
    console.log(body);

    this.http.post('http://localhost:8081/rest/supplier',  body, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      console.log(data);
    });
  }
  // }

}
