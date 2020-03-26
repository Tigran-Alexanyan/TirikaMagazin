import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private service: ServiceService, private formBuilder: FormBuilder) {}
  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      count: ['', Validators.required],
      minCount: ['', Validators.required],
      barcode: ['', Validators.required],
      category: ['', Validators.required],
      priceIn: ['', Validators.required],
      priceOut: ['', Validators.required],
    });
  }

  clickMe() {
    // if (this.registerForm.get('name').value === '' || this.registerForm.get('description').value === '' ) {
    //   return;
    // } else {
      const body = JSON.stringify({
        title: this.registerForm.get('name').value,
        description: this.registerForm.get('description').value,
        count: this.registerForm.get('count').value,
        minCount: this.registerForm.get('minCount').value,
        barcode: this.registerForm.get('barcode').value,
        category: this.registerForm.get('category').value,
        priceIn: this.registerForm.get('priceIn').value,
        priceOut: this.registerForm.get('priceOut').value,
      });
      console.log(body);

      this.http.post('http://localhost:8081/rest/items',  body, {
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
