import { Injectable } from '@angular/core';
import {Item, ItemsListComponent} from '../items-list/items-list.component';


@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  public id: number;
  public title: string;
  constructor() {
  }


}
