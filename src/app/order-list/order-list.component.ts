import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {Item} from '../_models/items';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private router: Router, public service: ServiceService, private http: HttpClient) {
  }
  private removeElement: Item;

  public items: Item[] = [];


  loginForm = new FormGroup({
    phone: new FormControl('', Validators.required),
  });

  public obj: object[] = [];
  public sum = '0.00';

  selectedItem: Item;

  add() {
    if (!this.service.currentItem) {
      return;
    }
    const itemExists = this.items.find(i => i.id === this.service.currentItem.id);

    if (itemExists) {
      itemExists.count += 1;
      this.countDecrement(itemExists);
    } else {
      const item = new Item();
      item.id = this.service.currentItem.id;
      item.title = this.service.currentItem.title;
      item.priceOut = this.service.currentItem.priceOut;
      item.count = 1;
      this.items.push(item);
    }
    this.sum1();
  }

  sum1() {
    this.removeElement = null;
    this.sum = 0;
    this.items.forEach((element) => {
      // @ts-ignore
      this.sum += Number(element.priceOut * element.count);
    });
  }

  removeItem(item: Item) {
    this.removeElement = item;
    this.selectedItem = item;
  }

  countDecrement(item: Item) {
     if (item.count > 0) {
      item.count -= 1;
     }
  }
   countIncrement(item: Item) {
      item.count += 1;
  }

  delete() {
    if (this.removeElement) {
      const indexOf = this.items.indexOf(this.removeElement);
      this.items.splice(indexOf, 1);
      this.sum1();
    }
  }

  clear() {
    this.items = [];
    this.sum1();
  }

  prodat() {
    this.obj.push({itemId: this.service.currentItem.id});
    const body: string = JSON.stringify(
      {phoneNumber: this.loginForm.get('phone').value, orderItemDtos: this.obj},
    );
    // console.log(body);
    const url = 'http://localhost:8081/rest/orders';
    this.http.post(url, body, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: Item) => {
      console.log(data);
    });
    this.sum = '0.00';
    this.clear();
  }

  ngOnInit() {
  }

}

