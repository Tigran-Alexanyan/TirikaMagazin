import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { InComingCash } from '../_models/InComingCash';



@Component({
  selector: 'app-prixod',
  templateUrl: './prixod.component.html',
  styleUrls: ['./prixod.component.css']
})
export class PrixodComponent implements OnInit {

  url = 'http://localhost:8081/rest/transfer/inComingCash';

  public outComing: number;
  public description: string;
  public sectionId: number;

  constructor(private router: Router, private http: HttpClient) {
    this.http.get<InComingCash[]>(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.inComingCashItemsList = data;
      console.log(this.inComingCashItemsList);
    });
  }
  inComingCashItemsList: InComingCash[];


  add() {
    if ( this.outComing === null && this.description === '') {
    // 2020-02-12T21:47:37.000+0000
      return;
    } else {
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
      location.href = '/prixod';
      const date = year + '-' + month + '-' + day + 'T' + h + ':' + m + ':' + s;
      console.log(date);
      this.inComingCashItemsList.push({
       sectionId: this.sectionId ,
       outComing: this.outComing,
       description: this.description,
        date,
     });
      const body = JSON.stringify({outComing: this.outComing, description: this.description});
     // this.sectionId++;
    // console.log(body);
      this.http.post<InComingCash[]>('http://localhost:8081/rest/transfer/addCash', body, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.inComingCashItemsList = data;
      console.log(this.inComingCashItemsList);
    });
  }
    this.outComing = null;
    this.description = '';
  }
  ngOnInit() {
  }

}
