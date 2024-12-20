import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public logIn(email: string, password: string) {
    let body = {
      "email": email,
      "password": password
    }

    return this.httpClient.post(`${environment.apiUrl}/auth/login`, body);
  }

  public register(email: string, password: string, userName: string, phone: string, address: string) {
    let body = {
      "email": email,
      "password": password,
      "name": userName,
      "phone": phone,
      "address": address,
      "userRole": "CUSTOMER",
      "commandList": [],
    }
    return this.httpClient.post(`${environment.apiUrl}/auth/register`, body);
  }
}
