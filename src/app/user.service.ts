import { Injectable } from '@angular/core';
import {User} from './model/user';
import{LogInUser} from './model/logInUser';
import{blogList} from './model/blogList';
import{forgotPassword} from './model/forgotPassword';
import { HttpClient,HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

    signUp(username: string, name:string, email:string,password:string,address:string,phone :number,zip :number)
    : Observable<boolean> {
      var signUpObj: User;
      signUpObj = {username:username,name:name,email:email,password:password,address:address,phone:phone,zip:zip};
      return this.http.post<boolean>('http://localhost:3000/api/accounts', signUpObj).pipe(catchError(this.errorHandler));
    }

    logIn(username: string,password:string)
    : Observable<boolean> {
      var logInObj: LogInUser;
      logInObj = {username:username,password:password};
      return this.http.post<boolean>('http://localhost:3000/api/accounts/login', logInObj).pipe(catchError(this.errorHandler));
    }
    forgot(email: string)
    : Observable<boolean> {
      var forgotPasswordObj: forgotPassword;
      forgotPasswordObj = {email:email};
      return this.http.post<boolean>('http://localhost:3000/api/accounts/login', forgotPasswordObj).pipe(catchError(this.errorHandler));
    }

    blogList(): Observable<blogList[]> {
      var paramsData=  JSON.parse(localStorage.getItem('currentUser'));
      var params = new HttpParams().set('access_token', paramsData.id)
      let blogListData = this.http
        .get<blogList[]>("http://localhost:3000/api/blogs",{params})
        .pipe(catchError(this.errorHandler));
      return blogListData;
      }
    errorHandler(error: HttpErrorResponse) {
      console.log(error);
      return throwError(error.message || "Server Error");
    }
  
}
