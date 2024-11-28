import {Injectable} from '@angular/core';
import {Item} from "../models/Item";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemObservable = new BehaviorSubject<Array<Item>>([]);

  constructor(private httpClient: HttpClient) {
    this.readItems();
  }

  getItemList() {
    return this.itemObservable.asObservable();
  }

  createItem(item:Item) {
    let body = {
      "title": item.title,
      "description": item.description,
      "itemType": item.itemType,
      "price": item.price,
      "image1": item.image1,
      "image2": item.image2,
      "image3": item.image3,
      "image4": item.image4,
    }
    let headers = new HttpHeaders();
    headers.set("CONTENT-TYPE","APPLICATION/json")
    this.httpClient.post(`${environment.apiUrl}/items`, body,{headers: headers}).subscribe((response:any) => {
      console.log("Create item response")
      console.log(response);
      alert(response.message);
      this.readItems();
    });
  }

  updateItem(item:Item) {
    let body = {
      "id": item.id,
      "title": item.title,
      "description": item.description,
      "itemType": item.itemType,
      "price": item.price,
      "image1": item.image1,
      "image2": item.image2,
      "image3": item.image3,
      "image4": item.image4,
    }
    this.httpClient.put(`${environment.apiUrl}/items`, body).subscribe((response:any) => {
      console.log("Update item response")
      console.log(response);
      alert(response.message);
      this.readItems();
    });
  }

  deleteItem(id:string) {
    this.httpClient.delete(`${environment.apiUrl}/items/${id}`).subscribe((response:any) => {
      console.log("Delete item response")
      console.log(response);
      alert(response.message);

      this.readItems();
    });
  }

  readItems() {
    this.httpClient.get(`${environment.apiUrl}/items`).subscribe((response:any) => {
      console.log(response);

      this.itemObservable.next(response.data);
    });
  }
}
