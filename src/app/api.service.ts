import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from './component/contactmodel'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //post
  addcontact(data:contact){
    return this.http.post<contact>("http://localhost:3000/posts", data)
  }

  //get
  getcontact(){
    return this.http.get<contact[]>("http://localhost:3000/posts")
  }

}
