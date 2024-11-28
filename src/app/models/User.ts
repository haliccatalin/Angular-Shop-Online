export class User {
  private _id?: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _userRole: string;
  private _address: string;
  private _phone: string;
  private _commandList: Array<any>;

  constructor(username: string, email: string, password: string, userRole: string, address: string, phone: string, commandList: Array<any>) {
    this._name = username;
    this._email = email;
    this._password = password;
    this._address = address;
    this._phone = phone;
    this._commandList = commandList;
    this._userRole = userRole;
  }


  get id(): string {
    return this._id ?? '';
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get userRole(): string {
    return this._userRole;
  }

  set userRole(value: string) {
    this._userRole = value;
  }


  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get commandList(): Array<any> {
    return this._commandList;
  }

  set commandList(value: Array<any>) {
    this._commandList = value;
  }
}
