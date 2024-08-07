import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    public _http : HttpClient
  ) { }

  public notFound:boolean = false;


  getAllUser(page:number):Observable<any>{
    return this._http.get(`https://reqres.in/api/users?page=${page}`)
  }

  getUserById(id:number):Observable<any>{
    return this._http.get(`https://reqres.in/api/users/${id}`)
  }
}
