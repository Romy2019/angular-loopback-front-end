import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private _userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  postBlog(form:NgForm){
 
    var title: string= form.value.title;
    var content:string= form.value.content;
    this._userService.postBlog(title,content).subscribe(
      response =>{ 
        console.log('Success!', response)
      alert("posted blog  successfully")
      this.router.navigate(['blog'])
    },
      error => {
        console.error('Error!', error)
     alert("Check blog")
     this.router.navigate(['blog'])
     
    },
    );
    }
}
