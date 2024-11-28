import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnChanges {
  @Input("item") item: Item = new Item("", "", "", "", "", "", "", "");

  id: string = "";
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  itemType = new FormControl('', [Validators.required]);
  image1 = new FormControl('', [Validators.required]);
  image2 = new FormControl('', [Validators.required]);
  image3 = new FormControl('', [Validators.required]);
  image4 = new FormControl('', [Validators.required]);

  itemCategories: Array<string> = environment.itemCategories;
  constructor(private itemService: ItemService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Add edit delete item");
    console.log(this.item);
    this.id = this.item.id!;
    this.title = new FormControl(this.item.title, [Validators.required]);
    this.description = new FormControl(this.item.description, [Validators.required]);
    this.price = new FormControl(this.item.price, [Validators.required]);
    this.itemType = new FormControl(this.item.itemType, [Validators.required]);
    this.image1 = new FormControl(this.item.image1, [Validators.required]);
    this.image2 = new FormControl(this.item.image2, [Validators.required]);
    this.image3 = new FormControl(this.item.image3, [Validators.required]);
    this.image4 = new FormControl(this.item.image4, [Validators.required]);

  }

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return "";
  }

  onSave(): void {
    let item: Item = new Item("", "", "", "", "", "", "", "");

    item.id = this.id;
    item.title = this.title.getRawValue()!;
    item.description = this.description.getRawValue()!;
    item.price = this.price.getRawValue()!;
    item.itemType = this.itemType.getRawValue()!;
    item.image1 = this.image1.getRawValue()!;
    item.image2 = this.image2.getRawValue()!;
    item.image3 = this.image3.getRawValue()!;
    item.image4 = this.image4.getRawValue()!;

    if (item.id == "") {
      this.itemService.createItem(item);
    } else {
      this.itemService.updateItem(item);
    }

    this.resetFrom();
  }

  private resetFrom() {
    this.id = "";
    this.title = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required]);
    this.itemType = new FormControl('', [Validators.required]);
    this.image1 = new FormControl('', [Validators.required]);
    this.image2 = new FormControl('', [Validators.required]);
    this.image3 = new FormControl('', [Validators.required]);
    this.image4 = new FormControl('', [Validators.required]);
  }
}
