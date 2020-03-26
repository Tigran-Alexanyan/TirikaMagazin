import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import {Group} from '../_models/group';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-grypi',
  templateUrl: './grypi.component.html',
  styleUrls: ['./grypi.component.css']
})
export class GrypiComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private service: ServiceService, private formBuilder: FormBuilder) {
    this.http.get<Group[]>('http://localhost:8081/rest/category', {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      //  @ts-ignore
      this.groupList = data;
      console.log(this.groupList);
      for (let i = 0; i < this.groupList.length; i++) {
        if (this.groupList[i].id === this.groupList[i].parentId) {
          // console.log('vernagir' + this.groupList[i].name);
          this.nameList.push({
            id: this.groupList[i].id,
            name: this.groupList[i].name,
            parentId: this.groupList[i].parentId
          });
          this.parentId = this.groupList[i].parentId;
        }
        //   for (let j = 0; j < this.groupList.length; j++) {
        //         if (this.groupList[j].parentId === this.groupList[i].id) {
        //       if (this.groupList[j].id !== this.groupList[j].parentId) {
        //         console.log('parent' + this.groupList[j].name);
        //       }
        //     }
        //   }
      }
      console.log(this.nameList);
    });
  }

  public nameList: object [] = [];
  registerForm: FormGroup;
  groupList: Group[];

  // description: string;
  public parentId: number;

  zero = 0;


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  del(id: number) {
    console.log(id);
    this.http.delete<Group[]>(`http://localhost:8081/rest/category/${id}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe((data) => {
      // @ts-ignore
      this.groupList = data;
      console.log(this.groupList);
    });
    location.href = '/grupi';
  }

  selectId(id: number) {
    this.parentId = id;
    console.log(this.parentId = id);
  }

  clickMe() {
    // @ts-ignore
    // if (this.selectId(this.parentId) === true) {
    //   this.parentId = this.selectId(this.parentId);
    // } else {
    //     this.parentId = 0;
    //   }

      if (this.registerForm.get('name').value === '' || this.registerForm.get('description').value === '') {
        return;
      } else {
        const body = JSON.stringify({
          name: this.registerForm.get('name').value,
          description: this.registerForm.get('description').value,
          parentId: this.parentId,
        });
        console.log(body);

        this.http.post<Group[]>('http://localhost:8081/rest/category', body, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }).subscribe((data) => {
          //  @ts-ignore
          this.groupList = data;
          // console.log(this.groupList);
        });
        // location.href = '/grupi';
      }
    }
  }

