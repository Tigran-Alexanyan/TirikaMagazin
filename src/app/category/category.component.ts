import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Category} from '../_models/category';
import {Item} from '../_models/items';
import {ServiceService} from '../service/service.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category;

  url = 'http://localhost:8081/rest/category';

  constructor(private router: Router, private service: ServiceService, private http: HttpClient, private route: ActivatedRoute) {
    http.get(this.url, {
        headers: {
          'content-type': 'application/json',
          Authorization : `Bearer ${localStorage.getItem('token')}`
          }
    }).subscribe((data: Category) => {
      this.categories = data;
    });
  }

  selectedCategory = Category;


  catName(category: Category , id: number) {
    this.service.currentCat = category;
    // @ts-ignore
    this.selectedCategory = category;
    this.http.get<any>(`http://localhost:8081/rest/items/findByCategory/${id}`).subscribe((data) => {
        this.service.findByCategoryNumber = id;
       // console.log(this.service.findByCategory);
        this.service.findByCategoryArr = data;
    });
  }

  ngOnInit() {
  }

}
