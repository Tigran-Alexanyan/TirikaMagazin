import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {Item} from '../_models/items';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private service: ServiceService) {
    http.get(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: Item) => {
      this.items = data;
      // console.log(this.items);
    });
  }
  title: string;
  url = 'http://localhost:8081/rest/items';

  items: Item[];

  selectedItem = Item;

  ngOnInit() {
    // console.log(this.items);
    localStorage.getItem('token');
  }

  itemName(item: Item) {
      this.service.currentItem = item;
      // @ts-ignore
      this.selectedItem = item;
  }

  search() {
     if (this.title !== '') {
       this.items = this.items.filter(res => {
         return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
       });
     } else if (this.title === '') {

     }
  }

}
