import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-list-kasi',
  templateUrl: './list-kasi.component.html',
  styleUrls: ['./list-kasi.component.css']
})
export class ListKasiComponent implements OnInit {
  constructor(private service: ServiceService) {}

  public salary: number;
  d: string;

  sendMinus() {
    this.service.sendMinus({
      sectionId: this.service.transferList.id,
      outComing: this.salary,
      description: this.d,
    }).subscribe(body => {
         console.log(body);
    });
    console.log(this.service.d = this.d);
  }


  ngOnInit() {

  }

}
