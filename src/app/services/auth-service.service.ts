import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  urlLogin='https://kayra.alwaysdata.net/api/login/'
  urlSignup='https://kayra.alwaysdata.net/api/register/'

  postLogin(resource: any){
    return this.http.post<any>(this.urlLogin, resource)
  }
  postSignup(resource: any){
    return this.http.post<any>(this.urlSignup, resource)
  }
}
