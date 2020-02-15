import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';


export class Item {
  title: string;
  count: string;
  priceOut: string;
}
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item;

  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private router: Router, private http: HttpClient, private service: ServiceService) {
    http.get(this.url).subscribe((data: Item) => {
      this.items = data;
   //   console.log(data);
    });
  }
  ItemName(title: string) {
    console.log(title, 'aaaaaa');
    this.service.addItem(title);
  }

  ngOnInit() {
  }

}
