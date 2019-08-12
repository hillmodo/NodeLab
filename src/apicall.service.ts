import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIcallService {

  constructor(private httpClient : HttpClient) { }

  getServer(){
    return this.httpClient.get('http://localhost:3000');
  }



}
