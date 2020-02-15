import { Injectable } from '@angular/core';
import {ItemsListComponent} from '../items-list/items-list.component';
import {OrderListComponent} from '../order-list/order-list.component';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  public items: string[] = [];
  constructor() {}

  addItem(item) {
    this.items.push(item);
  }


}
