import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password.html',
  styleUrls: ['./password.css']
})
export class Password {
  newPassword = '';
  confirmPassword = '';
  message = '';
  erreur = '';
  showPassword = false;

  valider() {
    this.erreur = '';
    this.message = '';

    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/;

    if (!this.newPassword || !this.confirmPassword) {
      this.erreur = 'Tous les champs sont obligatoires.';
      return;
    }

    if (!pattern.test(this.newPassword)) {
      this.erreur = 'Le mot de passe doit contenir au moins 8 caractères avec une majuscule, une minuscule, un chiffre et un caractère spécial.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.erreur = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.message = 'Mot de passe mis à jour avec succès ✅';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
