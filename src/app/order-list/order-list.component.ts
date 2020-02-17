import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {Item, ItemsListComponent} from '../items-list/items-list.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {


  constructor(private router: Router, public service: ServiceService, private http: HttpClient) {
  }

  public items: Item[] = [];

  public count = 1;

  loginForm = new FormGroup({
    phone: new FormControl('', Validators.required),
  });

  add() {
    if (this.service.title) {
      const item = new Item();
      item.id = this.service.id;
      item.title = this.service.title;
      item.priceOut = this.service.priceOut;
      item.count = this.service.count;
      console.log(item.count);
      this.service.title = null;
      this.items.push(item);
      item.count = this.count++;
      console.log(item.priceOut);
    }

    // this.service.count--;
  }

  delete() {
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
    const body: string = JSON.stringify(
      {phoneNumber: this.loginForm.get('phone').value,
             orderItemDtos: [{itemId: this.service.id , count: this.service.count-- }]
      },
    );
    console.log(body);
    const url = 'http://localhost:8081/rest/orders';
    // @ts-ignore
    this.http.post(url, body, {
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
