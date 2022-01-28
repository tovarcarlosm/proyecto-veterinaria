import {UserInterface} from "../interfaces/User.Interface";

export class UserModel implements UserInterface{
  _id: string = "";
  address: string = "";
  email: string = "";
  fullName: string = "";
  phone: string = "";
  password: string = "";
}
