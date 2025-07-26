import { Routes } from '@angular/router';
import { Connexion } from './connexion/connexion';
import { Inscription } from './inscription/inscription';
import { Mail } from './mail/mail';
import { Password } from './password/password';

export const routes: Routes = [

  { path: 'Inscription', component: Inscription },
    { path: 'connexion', component: Connexion },
     { path: 'mail', component: Mail },
       { path: 'password', component: Password }


];
