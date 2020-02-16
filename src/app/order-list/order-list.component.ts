import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {Item, ItemsListComponent} from '../items-list/items-list.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public items: Item[] = [];


  constructor(private router: Router, public service: ServiceService, private http: HttpClient) {
  }

  add() {
    if (this.service.title) {
      const item = new Item();
      item.id = this.service.id;
      item.title = this.service.title;
      this.items.push(item);
      //this.service.title = null;
    }
    //  console.log(this.items);
  }

  delete() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      this.items.splice(i, 1);
    }
  }

  clear() {
    this.items = [];
  }

  change() {

  }


  prodat() {
    const body: string = JSON.stringify(this.items);
    const url = 'http://localhost:8081/rest/orders';
    // @ts-ignore
    this.http.post(url,body, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: Item) => {
        console.log(data);
    });

  }

  ngOnInit() {
  }

}

// {
//   "phoneNumber": "",
//   "orderItemDtos": [
//   {
//     "itemId": "4",
//     "count": "10"
//   },
//   {
//     "itemId": "2",
//     "count": "5"
//   }]
// }
