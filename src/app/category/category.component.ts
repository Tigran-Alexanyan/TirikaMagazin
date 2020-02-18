import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


export class Category {
  id: number;
  name: string;
  description: string;
  parentId: number;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category;

  url = 'http://localhost:8081/rest/category';

  constructor(private router: Router, private http: HttpClient) {
    http.get(this.url, {
        headers: {
          'content-type': 'application/json',
          Authorization : `Bearer ${localStorage.getItem('token')}`
          }
    }).subscribe((data: Category) => {
      this.categories = data;
      console.log(data);
    });

  }

  ngOnInit() {
  }

}
