import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';


export class Item {
  id: number;
  title: string;
  count: number;
  priceOut: string;
}
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent  {

  items: Item;

  url = 'http://localhost:8081/rest/items';
  constructor(private router: Router, private http: HttpClient, private service: ServiceService) {
    http.get(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`}
    }).subscribe((data: Item) => {
      this.items = data;
    });
  }

  ItemName(item: Item) {
    this.service.currentItem = item;
  }


  ngOnInit() {
  }

}
