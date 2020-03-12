import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {OutComingCash} from '../_models/OutComingCash';

@Component({
  selector: 'app-rasxod',
  templateUrl: './rasxod.component.html',
  styleUrls: ['./rasxod.component.css']
})
export class RasxodComponent implements OnInit {

  url = 'http://localhost:8081/rest/transfer/outComingCash';

  public outComing: number;
  public description: string;
  public sectionId: number;

  constructor(private router: Router, private http: HttpClient) {
    this.http.get<OutComingCash[]>(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.outComingCashItemsList = data;
      console.log(this.outComingCashItemsList);
    });
  }
  outComingCashItemsList: OutComingCash[];

  public id: number;
  takeMe(id: number) {
     this.id = id;
     console.log(id);
  }

  remove() {
    if ( this.outComing === null && this.description === '') {
      // 2020-02-12T21:47:37.000+0000
      return;
    } else {
      // for (let i = 0; i < this.outComingCashItemsList.length; i++) {
      //     if (this.outComingCashItemsList[i].description === this.description) {
              this.outComingCashItemsList.splice(this.id, 1);
          // }
      // }
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();
      const h = d.getHours();
      const m = d.getMinutes();
      const s = d.getSeconds();
      // if (month < 9) {
      //   month =  month;
      // }
      // if (day < 9) {
      //   day =   day;
      // }
      const date = year + '-' + month + '-' + day + 'T' + h + ':' + m + ':' + s;
      console.log(date);
     // this.outComingCashItemsList.splice(-1, 1);

      const body = JSON.stringify({outComing: this.outComing, description: this.description});
      // this.sectionId++;
      // console.log(body);
      this.http.post<OutComingCash[]>('http://localhost:8081/rest/transfer/takeCash',  body, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).subscribe((data) => {
        //  @ts-ignore
        this.inComingCashItemsList = data;
        console.log(this.outComingCashItemsList);
      });
    }
    this.outComing = null;
    this.description = '';
  }
  ngOnInit() {
  }

}
