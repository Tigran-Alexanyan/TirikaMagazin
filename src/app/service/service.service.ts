import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../_models/category';
import {Observable} from 'rxjs';
import {Transfer} from '../_models/transfer';


@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  public currentItem;
  public currentCat;
  public findByCategory;
  public findByCategoryNumber: number;
  // tslint:disable-next-line:ban-types
  public findByCategoryArr: Object[] = [];
  public itemsInCame;
  public priceOut;
  public transferList;
  public d: string;
  constructor(private http: HttpClient) {
   // console.log(this.transferList);
    // console.log(this.itemsInCame);
    // console.log(this.findByCategoryArr);
    // console.log(this.sendMinus.);
  }

  sendMinus(body: { outComing: number; description: string; sectionId: any }) {
      return this.http.post('http://localhost:8081/rest/transfer', JSON.stringify(body) , {
        headers: new HttpHeaders({
          'content-type': 'application/json',
           Authorization: `Bearer ${localStorage.getItem('token')}`,
        })
      });
  }
}
