import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,RouterModule],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.css']
})
export class Connexion {
  email = '';
  password = '';
  erreur = '';
  message = '';
  showPassword = false;

  seConnecter() {
    this.erreur = '';
    this.message = '';

    if (!this.email || !this.password) {
      this.erreur = 'Tous les champs sont obligatoires.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.erreur = 'Email invalide.';
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/;
    if (!passwordPattern.test(this.password)) {
      this.erreur =
        'Le mot de passe doit contenir au moins 8 caractères avec une majuscule, une minuscule, un chiffre et un caractère spécial.';
      return;
    }

    this.message = 'Connexion réussie ✅';
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
