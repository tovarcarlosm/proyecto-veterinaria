import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserModel } from "../../../models/User.Model";
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user:UserModel = new UserModel();

  constructor( private _userService: UsersService ) { }

  ngOnInit(): void {
  }

  guardar( formUser: NgForm){

    if(formUser.invalid){
      return;
    }

    if(this.user._id) {
      this._userService.actualizar(this.user)
        .subscribe(resp => console.log(resp));
    } else {
      this._userService.crear(this.user)
        .subscribe(resp => console.log(resp));
    }
  }
}
