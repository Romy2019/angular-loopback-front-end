import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private _userService:UserService,private router:Router) { }
  
  ngOnInit() {
    
  }
  signUp(form:NgForm){
   var username: string= form.value.username;
   var name:string= form.value.name;
   var email:string= form.value.email;
   var password:string= form.value.password;
   var address:string= form.value.address;
   var phone :number= form.value.number;
   var zip :number= form.value.zip;

   this._userService.signUp(username,name,email,password,address,phone,zip).subscribe(
    response => console.log('Success!', response),
    error => console.error('Error!', error),
    ()=>this.router.navigate(['logIn'])
  );
  }

 
}
