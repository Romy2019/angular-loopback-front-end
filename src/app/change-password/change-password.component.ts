import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private _userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  changePassword(form:NgForm){
  var oldPassword: string= form.value.oldPassword;
  var newPassword:string= form.value.newPassword;
 
    this._userService.changePassword(oldPassword,newPassword).subscribe(
      response=>{
        alert("password changed")
        localStorage.removeItem('currentUser');
        this.router.navigate(['logIn'])
      },
      error => {
        alert("provide correct password ")
        this.router.navigate(['blog'])
      }
      
    );
  }


}
