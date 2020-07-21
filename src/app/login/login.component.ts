import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  logIn(form:NgForm){
 
    var username: string= form.value.username;
    var password:string= form.value.password;

    this._userService.logIn(username,password).subscribe(
      response =>{ 
        console.log('Success!', response)
      localStorage.setItem('currentUser', JSON.stringify(response))
      alert("Logged in successfully")
      this.router.navigate(['blog'])
    },
      error => {
        console.error('Error!', error)
     alert("Check user name and password")
     this.router.navigate(['logIn'])
     
    },
    );
    }

}
