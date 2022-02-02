import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/User.Model";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
  }

  iniciarSesion(formLogin: NgForm){
    if(formLogin.invalid){ return; }

    console.log(formLogin);
  }
}
