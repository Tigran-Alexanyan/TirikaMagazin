import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


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

  url = 'http://localhost:8081/rest/items';
  constructor(private router: Router, http: HttpClient) {
    http.get(this.url).subscribe((data: Item) => {
      this.items = data;
      console.log(data);
    });
  }


  ngOnInit() {
  }

}
