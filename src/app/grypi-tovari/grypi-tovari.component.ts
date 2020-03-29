import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GroupTovari} from '../_models/groupTovari';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-grypi-tovari',
  templateUrl: './grypi-tovari.component.html',
  styleUrls: ['./grypi-tovari.component.css']
})
export class GrypiTovariComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private service: ServiceService) {
    this.http.get<GroupTovari[]>('http://localhost:8081/rest/items/all', {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.service.grypiTovariList = data;
      console.log(this.service.grypiTovariList);
    });
  }
 // grypiTovariList: GroupTovari[];


  deleteItems(id: number) {
    console.log(id);
    this.http.delete(`http://localhost:8081/rest/items/${id}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      console.log(data);
    });
    location.href = '/grupiTovari';
  }

  changeItems(id: number, title: string, description: string,
              count: number, minCount: number, barcode: string,
              category: number, priceIn: number, priceOut: number) {
    this.service.grypiTovariList.id = id;
    this.service.grypiTovariList.title = title;
    this.service.grypiTovariList.description = description;
    this.service.grypiTovariList.count = count;
    this.service.grypiTovariList.minCount = minCount;
    this.service.grypiTovariList.barcode = barcode;
    this.service.grypiTovariList.category = category;
    this.service.grypiTovariList.priceIn = priceIn;
    this.service.grypiTovariList.priceOut = priceOut;
    this.router.navigate(['changeItems']);
  }

  ngOnInit() {
  }

}
