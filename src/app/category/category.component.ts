import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


export class Category {
  title: string;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category;

  url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private router: Router, http: HttpClient) {
    http.get(this.url).subscribe((data: Category) => this.categories = data);
  }


  ngOnInit() {
  }

}
