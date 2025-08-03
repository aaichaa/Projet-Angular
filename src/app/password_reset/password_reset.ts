import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-password_reset',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './password_reset.html',
  styleUrls: ['./password_reset.css']
})
export class Password_reset {
  email = '';
  erreur = '';
  emailEnvoye = false;

  envoyerEmail() {
    this.erreur = '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.email) {
      this.erreur = 'Veuillez entrer votre adresse email.';
      return;
    }

    if (!emailPattern.test(this.email)) {
      this.erreur = 'Adresse email invalide.';
      return;
    }

    // Simule l’envoi d’email ici...
    this.emailEnvoye = true;
  }
}
