import { Routes } from '@angular/router';
import { Login } from './login/login';
import {Register  } from './Register/Register';
import { Password_reset } from './password_reset/password_reset';
import { Password } from './password/password';

export const routes: Routes = [

  { path: 'Register', component: Register },
    { path: 'Login', component: Login },
     { path: 'Password_reset', component: Password_reset },
       { path: 'Password', component: Password }


];
