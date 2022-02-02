import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/User.Model";
import { NgForm } from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor( private _auth: AuthService) { }

  ngOnInit(): void {

  }

  registrar(formSignup: NgForm){
    if(formSignup.invalid){ return; }

    this._auth.signUp( this.user )
      .subscribe( resp => {
        console.log(resp)
      })
  }

}
