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

  loginForm = new FormGroup({
    phone: new FormControl('', Validators.required),
  });

  public obj: object[] = [];
  private i = 0;

  add() {
    if (!this.service.currentItem) {
      return;
    }
    const itemExists = this.items.find(i => i.id === this.service.currentItem.id);

    if (itemExists) {
      itemExists.count += 1;
    } else {
      const item = new Item();
      item.id = this.service.currentItem.id;
      item.title = this.service.currentItem.title;
      item.priceOut = this.service.currentItem.priceOut;
      item.count = 1;
      this.items.push(item);
    }
    console.log(this.items);
  }

  delete() {
    this.items.filter(i => i.id !== this.service.currentItem.id );
  }

  clear() {
    this.items = [];
  }

  change() {
  }


  prodat() {
    const i = this.i + 1;
    this.obj.push({itemId: this.service.currentItem.id});
    const body: string = JSON.stringify(
      {phoneNumber: this.loginForm.get('phone').value,
        orderItemDtos: this.obj
      },
    );

    console.log(body);
    const url = 'http://localhost:8081/rest/orders';
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
