import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {Item} from '../_models/items';
import {InCame} from '../_models/InCame';

@Component({
  selector: 'app-items-incame',
  templateUrl: './items-incame.component.html',
  styleUrls: ['./items-incame.component.css']
})
export class ItemsIncameComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private service: ServiceService) {
    http.get<InCame[]>(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      this.itemsInCame = data;
     // console.log(this.itemsInCame);
    });
  }
  title: string;
   url = 'http://localhost:8081/rest/items/itemsForInCame';

  itemsInCame: InCame[];

  selectedItem = InCame;

  ngOnInit() {
    // console.log(this.items);
    localStorage.getItem('token');
  }

  itemName(item: InCame) {
    this.service.itemsInCame = item;
    // @ts-ignore
    this.selectedItem = item;
  }

}
