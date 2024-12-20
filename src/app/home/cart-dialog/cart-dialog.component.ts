import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Item} from "../../models/Item";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {
  items: Array<any> = [];
  details: string = '';

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((items: Array<any>) => {
      this.items = [];

      this.items = items;

      console.log(items)
    });
  }

  public onDeleteCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  public onBuy() {
    this.cartService.createCart(this.details)
  }
}
