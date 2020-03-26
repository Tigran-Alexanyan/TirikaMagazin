import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Transfer} from '../_models/transfer';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-kasi',
  templateUrl: './kasi.component.html',
  styleUrls: ['./kasi.component.css']
})
export class KasiComponent implements OnInit {

  url = 'http://localhost:8081/rest/transfer/cash';

  constructor(private router: Router, private http: HttpClient, private service: ServiceService) {
    this.http.get<Transfer[]>(this.url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.service.transferList = data;
    });
  }


  public search: string;
 // transferList: Transfer[];

  takeMe(id: number, name: string, incoming: number, outcoming: number) {
    this.service.transferList.id = id;
    this.service.transferList.name = name;
    this.service.transferList.incoming = incoming;
    this.service.transferList.outcoming = outcoming;
    this.router.navigate(['listKasi']);
  }
  ngOnInit() {
  }

}
