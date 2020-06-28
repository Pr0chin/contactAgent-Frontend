import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register: Register;
  showRegister: Register[];
  readonly baseURL = 'http://localhost:3000/api/register'

  constructor(private http: HttpClient) { }

  // postRegister(reg:Register){
  //   return this.http.post(this.baseURL,reg)
  //     .subscribe(res => console.log('Done'+res));;
  // }
  postRegister(first_name, last_name, phone,password,retypepassword) {
    debugger;
    const obj = {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      password:password,
      retypepassword:retypepassword
    };
    console.log(obj);
    this.http.post(`${this.baseURL}`, obj)
      .subscribe(res => console.log('Done'));
  }


  getRegister() {
    return this
      .http
      .get(`${this.baseURL}`);
  }

  deleteRegister(id) {
    return this
      .http
      .get(`${this.baseURL}/delete/${id}`);
  }

}
