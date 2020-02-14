import { Injectable } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ServiceService implements HttpInterceptor {

  constructor() { }
  intercept(req, next) {
    const token = req.clone({
      setHeaders: {
        Authorization: 'Bearer xx.xxx'
      }
    });
    return next.handle(token);
  }
}
