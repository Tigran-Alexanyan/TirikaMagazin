import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { PurchaseItems} from '../_models/purchaseItems';
import { MatDatepickerInputEvent} from '@angular/material';



@Component({
  selector: 'app-zakupki',
  templateUrl: './zakupki.component.html',
  styleUrls: ['./zakupki.component.css']
})
export class ZakupkiComponent implements OnInit {

  public num = 1;

  public dateOne: string;
  public dateTwo: string;
  url = 'http://localhost:8081/rest/incame/range/2020-02-01,2020-02-24';

  constructor(private router: Router, private http: HttpClient) {
    this.http.get<PurchaseItems[]>(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.purchaseItemsList = data;
      console.log(this.purchaseItemsList);
    });
  }

  purchaseItemsList: PurchaseItems[];


  addEventOne(type: string, event: MatDatepickerInputEvent<Date>) {
    let month1 = event.value.getMonth() + 1;
    let day1 = event.value.getDate();
    if (month1 < 9) {
      month1 = 0 + month1;
    }
    if (day1 < 9) {
      day1 = 0 + day1;
    }
    this.dateOne =  event.value.getFullYear() + '-' + month1 + '-' + day1 + ' ' + event.value.getHours() + ':'
      + event.value.getMinutes() + ':' + event.value.getSeconds();
  }

  addEventTwo(type: string, event: MatDatepickerInputEvent<Date>) {
    let month: number  = event.value.getMonth() + 1;
    let day = event.value.getDate();
    if (month < 9) {
      month = 0 + month;
    }
    if (day < 9) {
      day = 0 + day;
    }
    this.dateTwo =  event.value.getFullYear() + '-' + month + '-' + day + ' ' + event.value.getHours() + ':'
      + event.value.getMinutes() + ':' + event.value.getSeconds() ;
    console.log(this.dateTwo);


    this.http.get<PurchaseItems[]>(`http://localhost:8081/rest/incame/range/${this.dateOne},${this.dateTwo}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.purchaseItemsList = data;
    });
  }

  ngOnInit() {
    this.num ++;
    //  console.log(this.events);
    localStorage.getItem('token');
  }


}
