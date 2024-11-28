import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = new User("", "", "", "", "", "", []);
  private userObservable = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
    this.readUsers();

    // setup user
    this.user = new User(environment.user.name, environment.user.email, environment.user.password, environment.user.userRole, environment.user.address, environment.user.phone, []);
    this.user.id = String(environment.user.id);
  }

  getUserList() {
    return this.userObservable.asObservable();
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  isUserLoggedIn(): boolean {
    console.log("user service")
    console.log(this.user)
    return this.user != null;
  }

  public createUser(name: string, email: string, password: string, phone: string, address: string, userRole: string) {
    let body = {
      "name": name,
      "email": email,
      "password": password,
      "phone": phone,
      "address": address,
      "userRole": userRole,
    }
    return this.httpClient.post(`${environment.apiUrl}/users`, body).subscribe((response: any) => {
      console.log(response);
      alert(response.message);
      this.readUsers();
    });
  }

  public updateUser(id: string, username: string, email: string, password: string, phone: string, address: string, userRole: string) {
    let body = {
      "id": id,
      "name": username,
      "email": email,
      "password": password,
      "phone": phone,
      "address": address,
      "userRole": userRole,
    }
    return this.httpClient.put(`${environment.apiUrl}/users`, body).subscribe((response: any) => {
      console.log(response);
      alert(response.message);
      this.readUsers();
    });
  }

  public deleteUser(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/users/${id}`).subscribe((response: any) => {
      console.log(response);
      alert(response.message);
      this.readUsers();
    });
  }

  public readUsers() {
    this.httpClient.get(`${environment.apiUrl}/users`).subscribe((response: any) => {
      console.log(response);

      this.userObservable.next(response.data);
    });
  }
}
