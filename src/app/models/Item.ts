export class Item {
  private _id?:string;
  private _title:string;
  private _description:string = '';
  private _itemType:string = '';
  private _price: string = '';
  private _image1: string = '';
  private _image2: string = '';
  private _image3: string = '';
  private _image4: string = '';

  public constructor(title: string, description: string, category: string, price: string,image1: string, image2: string, image3:string, image4: string) {
    // ?? is null operator
    this._title = title ?? '';
    this._description = description ?? '';
    this._itemType = category ?? '';
    this._price = price ?? '';
    this._image1 = image1;
    this._image2 = image2;
    this._image3 = image3;
    this._image4 = image4;

  }

  get id(): string {
    return this._id ?? '';
  }

  set id(value: string) {
    this._id = value;
  }

  public get title() {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get itemType(): string {
    return this._itemType;
  }

  set itemType(value: string) {
    this._itemType = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }


  get image1(): string {
    return this._image1;
  }

  set image1(value: string) {
    this._image1 = value;
  }

  get image2(): string {
    return this._image2;
  }

  set image2(value: string) {
    this._image2 = value;
  }

  get image3(): string {
    return this._image3;
  }

  set image3(value: string) {
    this._image3 = value;
  }

  get image4(): string {
    return this._image4;
  }

  set image4(value: string) {
    this._image4 = value;
  }
}
