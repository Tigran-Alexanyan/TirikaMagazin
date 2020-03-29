import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-supplier',
  templateUrl: './change-supplier.component.html',
  styleUrls: ['./change-supplier.component.css']
})
export class ChangeSupplierComponent implements OnInit {

  public name: string = this.service.supplierList.name;
  public surname: string = this.service.supplierList.surname;
  public email: string = this.service.supplierList.email;
  public phone: string = this.service.supplierList.phone;
  public address: string = this.service.supplierList.address;
  public date: string = this.service.supplierList.date;
  constructor(private router: Router, private http: HttpClient, private service: ServiceService, private formBuilder: FormBuilder) {
    console.log(this.name);
  }

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
      id: this.service.supplierList.id,
      name: this.registerForm.get('name').value,
      surname: this.registerForm.get('surname').value,
      email: this.registerForm.get('email').value,
      phone: this.registerForm.get('phone').value,
      address: this.registerForm.get('address').value,
      date: this.registerForm.get('date').value,
    });
    console.log(body);

    this.http.post('http://localhost:8081/rest/supplier/change',  body, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      console.log(data);
    });
  }

}
