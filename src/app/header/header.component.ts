import {Component, OnInit} from '@angular/core';
import {Category} from '../category/category.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.logOut();
  }

  logOut() {
    this.http.get(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data: Category) => {
      console.log(data);
    });

  }
}
