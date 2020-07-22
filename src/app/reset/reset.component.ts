import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private _userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  forgot(form:NgForm){
 
    var email: string= form.value.email;
    this._userService.forgot(email).subscribe(
      response =>{ })
    }
  }
