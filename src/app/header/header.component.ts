import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../_models/users';
import {AuthenticationService} from '../service/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    localStorage.removeItem('token');
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }
}
