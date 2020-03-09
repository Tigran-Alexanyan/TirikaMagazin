import { Injectable } from '@angular/core';
import {Category} from '../_models/category';
import {HttpClient} from '@angular/common/http';


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
  constructor() {
    // console.log(this.itemsInCame);
    // console.log(this.findByCategoryArr);
  }
}
