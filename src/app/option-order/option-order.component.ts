import { Component, OnInit } from '@angular/core';
import { PurchaseItems} from '../_models/purchaseItems';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InCame} from '../_models/InCame';
// import {Item} from '../_models/items';


@Component({
  selector: 'app-option-order',
  templateUrl: './option-order.component.html',
  styleUrls: ['./option-order.component.css']
})
export class OptionOrderComponent implements OnInit {
  constructor(private router: Router, public service: ServiceService, private http: HttpClient) {
    http.get<InCame[]>(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      this.service.itemsInCame = data;
    //  console.log(this.itemsInCame);
    });
  }
   url = 'http://localhost:8081/rest/items/itemsForInCame';

  private removeElement: InCame;

  public items: InCame[] = [];


  loginForm = new FormGroup({
    phone: new FormControl('', Validators.required),
  });

  public obj: object[] = [];
  public sum = 0;

  selectedItem: InCame;

 // selectedItem = InCame;

  add() {
    if (!this.service.itemsInCame) {
      return;
    }
    const itemExists = this.items.find(i => i.id === this.service.itemsInCame.id);

    if (itemExists) {
      itemExists.count += 1;
      this.countDecrement(itemExists);
    } else {
      const item = new InCame();
      item.id = this.service.itemsInCame.id;
      item.title = this.service.itemsInCame.title;
      item.priceOut = this.service.itemsInCame.priceOut;
      item.priceIn = this.service.itemsInCame.priceIn;
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

  removeItem(item: InCame) {
    this.removeElement = item;
    this.selectedItem = item;
  }

  countDecrement(item: InCame) {
    if (item.count > 0) {
      item.count -= 1;
    }
  }
  countIncrement(item: InCame) {
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

  itemName(item: InCame) {
   // this.service.itemsInCame = item;
    // @ts-ignore
    this.selectedItem = item;
  }


  prodat() {
    this.obj.push({
        itemId:  this.service.itemsInCame.id,
        count: this.service.itemsInCame.count,
        priceOut: this.service.itemsInCame.priceOut,
        priceIn: this.service.itemsInCame.priceIn
    });
    const body: string = JSON.stringify(
      {phoneNumber: this.loginForm.get('phone').value, orderItemDtos: this.obj
      });
    console.log(body);
    const url = 'http://localhost:8081/rest/incame';
    this.http.post(url, body, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: InCame) => {
      console.log(data);
    });
    this.sum = 0;
    this.clear();
  }

  ngOnInit() {
  }
}
