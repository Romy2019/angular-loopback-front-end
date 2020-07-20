import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signUp', component:SignupComponent  },
  { path: 'reset-Password', component:ResetComponent  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
