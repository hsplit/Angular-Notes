import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  private dataFromHttp = [];
  private dataFromHttpObj = [];

  constructor(private _http: HttpClient) {
    this._http.get('https://jsonplaceholder.typicode.com/users')
              .subscribe(users => {for (const key in users) this.dataFromHttp.push(users[key].username)});
    this._http.get('https://jsonplaceholder.typicode.com/users')
              .subscribe(users => {for (const key in users) this.dataFromHttpObj.push(users[key])});
  }

  getDataHttp() {
    return this.dataFromHttp;
  }
  getDataHttpObj() {
    return this.dataFromHttpObj;
  }
  getDafalutFilter () {
    return {
      name: '',
      idmin: 1,
      idmax: 10
    };
  }

  private data = [
    {word: 'Hello'},
    {word: 'World!'}
  ];

  getData() {
    return this.data;
  }

  addData(word: string) {
    this.data.push({ word });
  }
}
