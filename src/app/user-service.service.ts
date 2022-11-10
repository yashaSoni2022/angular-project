import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getUsersData(){
    return this.http.get<any>('https://reqres.in/api/users');
  }

  saveUserdata(data:any){
    return this.http.post('https://reqres.in/api/users',data);
  }
 
}
