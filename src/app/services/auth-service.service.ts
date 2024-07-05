import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  urlLogin='https://lugar.onrender.com/api/login/'
  urlSignup='https://lugar.onrender.com/api/register/'

  postLogin(resource: any){
    return this.http.post<any>(this.urlLogin, resource)
  }
  postSignup(resource: any){
    return this.http.post<any>(this.urlSignup, resource)
  }
}
