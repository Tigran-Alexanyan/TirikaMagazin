import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';



export class Category {
  name: string;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category;

  // @ts-ignore
  private l: Category = localStorage.getItem('token', token);
  //private token = JSON.stringify(this.l);


  url = 'http://localhost:8081/rest/category';
  constructor(private router: Router, private http: HttpClient) {
    http.get(this.url).subscribe((data: Category) => {
      this.categories = data;
      console.log(data);
      localStorage.getItem('token');

      // @ts-ignore
      // tslint:disable-next-line:only-arrow-functions
      this.http({method: 'GET', url: this.url, headers: {Authorization:  `Bearer ${this.token}`}}).subscribe(function(response) {
        console.log(response);
        console.log(this);
      });
      this.router.navigate(['/option']);
    });
   }

  ngOnInit() {
    console.log(this.l);
  }

}
