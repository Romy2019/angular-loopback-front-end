import { Injectable } from '@angular/core';
import {User} from './model/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
    errorHandler(error: HttpErrorResponse) {
      console.log(error);
      return throwError(error.message || "Server Error");
    }
  
}
