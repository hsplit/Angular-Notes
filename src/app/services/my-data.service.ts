import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  private dataFromHttp = ['Existing string'];
  // private dataFromHttp: Array<string>;

  constructor(private _http: HttpClient) {
    this._http.get('https://jsonplaceholder.typicode.com/users')
              .subscribe(users => {for (const key in users) this.dataFromHttp.push(users[key].username)});
  }

  getDataHttp() {
    return this.dataFromHttp;
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
