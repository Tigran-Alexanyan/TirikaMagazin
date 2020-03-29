import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {Supplier} from '../_models/Supplier';

@Component({
  selector: 'app-postavchiki',
  templateUrl: './postavchiki.component.html',
  styleUrls: ['./postavchiki.component.css']
})
export class PostavchikiComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private service: ServiceService) {
    this.http.get<Supplier[]>('http://localhost:8081/rest/supplier', {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.service.supplierList = data;
      console.log(this.service.supplierList);
    });
  }
  // grypiTovariList: GroupTovari[];



  changeItems(id: number, name: string, surname: string, email: string, phone: string, address: string, date: any) {
    this.service.supplierList.id = id;
    this.service.supplierList.name = name;
    this.service.supplierList.surname = surname;
    this.service.supplierList.email = email;
    this.service.supplierList.phone = phone;
    this.service.supplierList.address = address;
    this.service.supplierList.category = date;
    this.router.navigate(['changePost']);
  }

  ngOnInit() {
  }

}
