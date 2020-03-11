import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { SoldItems} from '../_models/List';
import { MatDatepickerInputEvent} from '@angular/material';



@Component({
  selector: 'app-prodaji',
  templateUrl: './prodaji.component.html',
  styleUrls: ['./prodaji.component.css']
})

export class ProdajiComponent implements OnInit {

  public dateOne: string;
  public dateTwo: string;
  url = 'http://localhost:8081/rest/orders/range';

  constructor(private router: Router, private http: HttpClient) {
    this.http.get<SoldItems[]>(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.soldItemsList = data;
      console.log(this.soldItemsList);
      for (let i = 0; i < this.soldItemsList.length ; i++) {
        // @ts-ignore
        console.log(this.soldItemsList[i].itemMainDtos[i].id);
      }
    });
  }

  soldItemsList: SoldItems[];


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


    this.http.get<SoldItems[]>(`http://localhost:8081/rest/orders/range/${this.dateOne},${this.dateTwo}`, {
     headers: {
       'content-type': 'application/json',
       Authorization: `Bearer ${localStorage.getItem('token')}`
     }
   }).subscribe((data) => {
       this.soldItemsList = data;
       console.log(this.soldItemsList);
   });
  }

  ngOnInit() {
  //  console.log(this.events);
    localStorage.getItem('token');
  }


}
