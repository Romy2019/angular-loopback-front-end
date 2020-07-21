import { Component, OnInit } from '@angular/core';
import {blogList} from '../model/blogList';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  BlogList: blogList[];
  constructor(private _userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.blogList();
  }

blogList(){
  this._userService.blogList().subscribe(
    response=>{
      this.BlogList=response
    },
    error => {
      this.BlogList=null
    }
    
  );
}

}
