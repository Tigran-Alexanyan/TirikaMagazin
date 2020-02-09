import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

export class Order {
  title: string;
  thumbnailUrl: any;
}


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order;

  url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private router: Router, http: HttpClient) {
    http.get(this.url).subscribe((data: Order) => this.orders = data);
  }

  ngOnInit() {
  }

}
