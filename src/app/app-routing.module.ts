import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { BlogComponent } from './blog/blog.component';
import {ChangePasswordComponent} from './change-password/change-password.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signUp', component:SignupComponent  },
  { path: 'blog', component:BlogComponent  },
  { path: 'logIn', component:LoginComponent  },
  { path: 'change-password', component:ChangePasswordComponent  },
  { path: 'reset', component:ResetComponent  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
