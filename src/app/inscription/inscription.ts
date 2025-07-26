import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.css']
})
export class Inscription {
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  adresse = '';
  message = '';
  erreur = '';
  showPassword = false;

  inscrire() {
    this.erreur = '';
    this.message = '';

    // ✅ Champs requis sauf adresse
    if (!this.firstname || !this.lastname || !this.email || !this.password) {
      this.erreur = 'Tous les champs sont obligatoires sauf l’adresse.';
      return;
    }

    // ✅ Nom/prénom : ≥3 lettres, uniquement lettres et espaces
    const namePattern = /^[a-zA-Z\s]{3,}$/;
    if (!namePattern.test(this.firstname)) {
      this.erreur = 'Le prénom doit contenir au moins 3 lettres, sans chiffres ni caractères spéciaux.';
      return;
    }

    if (!namePattern.test(this.lastname)) {
      this.erreur = 'Le nom doit contenir au moins 3 lettres, sans chiffres ni caractères spéciaux.';
      return;
    }

    // ✅ Email format simple
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.erreur = 'Email invalide.';
      return;
    }

    // ✅ Mot de passe : majuscule, minuscule, chiffre, spécial, ≥8
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/;
    if (!passwordPattern.test(this.password)) {
      this.erreur =
        'Le mot de passe doit contenir au moins 8 caractères, avec une majuscule, une minuscule, un chiffre et un caractère spécial.';
      return;
    }

    // ✅ Adresse : facultative mais validée si remplie
    const adressePattern = /^(?=.*[a-zA-ZÀ-ÿ])(?=.*\d)[a-zA-ZÀ-ÿ\d\s']{10,}$/;
    if (this.adresse && !adressePattern.test(this.adresse)) {
      this.erreur =
        "L’adresse doit contenir au moins 10 caractères avec lettres (accents autorisés), chiffres, espaces, et éventuellement une apostrophe.";
      return;
    }


    this.message = 'Formulaire envoyé avec succès ✅';
    this.resetForm();
  }

  annuler() {
    this.resetForm();
    this.message = '';
    this.erreur = '';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private resetForm() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.adresse = '';
    this.showPassword = false;
  }
}
