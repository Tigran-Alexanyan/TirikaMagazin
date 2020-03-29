import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  public grypiTovariList;
  public supplierList;
  public groupList;
 // public d: string;
  constructor(private http: HttpClient) {
   // console.log(this.transferList);
    // console.log(this.itemsInCame);
    // console.log(this.findByCategoryArr);
  }

  sendMinus(body: { outComing: number; description: string; sectionId: any }) {
      return this.http.post('http://localhost:8081/rest/transfer', JSON.stringify(body) , {
        headers: new HttpHeaders({
          'content-type': 'application/json',
           Authorization: `Bearer ${localStorage.getItem('token')}`,
        })
      });
  }

   // clickMe(body: { id: number, name: string; surname: string; email: string, phone: number, address: string, date: string }) {
   //    return this.http.post('http://localhost:8081/rest/supplier/change', JSON.stringify(body) , {
   //      headers: new HttpHeaders({
   //        'content-type': 'application/json',
   //         Authorization: `Bearer ${localStorage.getItem('token')}`,
   //      })
   //    });
  // }




}
