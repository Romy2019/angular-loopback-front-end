import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  constructor(private _userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  newPassword(form:NgForm){
 
    var newpassword: string= form.value.newPassword;
    this._userService.setNewPassword(newpassword).subscribe(
      response =>{ 
        console.log('Success!', response)
      alert("change password")
      this.router.navigate(['forgot-Password'])
    
    },
      error => {
        console.error('Error!', error)
     alert("enter valid email")
     this.router.navigate(['reset'])
     
    })
    }


}
