import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  erreur = '';
  message = '';
  showPassword = false;

  seConnecter() {
    this.erreur = '';
    this.message = '';

    if (!this.loginFormValid()) {
      this.erreur = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    this.message = 'Connexion réussie ✅';
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginFormValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/;

    return (
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      emailPattern.test(this.email) &&
      passwordPattern.test(this.password)
    );
  }
}
