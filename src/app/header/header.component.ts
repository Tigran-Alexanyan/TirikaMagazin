import {Component, OnInit} from '@angular/core';
import {Category} from '../category/category.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) {
   // this.logOut();
  }

  ngOnInit() {
  }

  logOut() {
    // this.http.get(this.url, {
    //   headers: {
    //     'content-type': 'application/json',
    //     Authorization: `Bearer ${localStorage.removeItem('token')}`
    //   }
    // }).subscribe((data: Category) => {
    //   console.log(data);
    // });
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
