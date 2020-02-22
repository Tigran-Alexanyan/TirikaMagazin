import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/users';
import { Role } from '../_models/role';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  urlUsers = 'http://localhost:8081/rest/users';
  urlRole = 'http://localhost:8081/rest/role';

  getAllRoles() {
    return this.http.get<Role[]>(this.urlRole);
  }

  getAllUsers() {
    return this.http.get<User[]>(this.urlUsers);
  }


  register(user: User) {
    return this.http.post(this.urlUsers, user, {
      headers: { 'content-type': 'application/json'
      }
    });
  }

  delete(id: number) {
    return this.http.delete(`/users/${id}`);
  }
}
