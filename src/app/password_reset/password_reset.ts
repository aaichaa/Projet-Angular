import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password_reset',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password_reset.html',
  styleUrls: ['./password_reset.css']
})
export class Password_reset {
  email = '';
  message = '';
  erreur = '';

  envoyerEmail() {
    this.erreur = '';
    this.message = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email) {
      this.erreur = 'Veuillez entrer votre adresse email.';
      return;
    }

    if (!emailPattern.test(this.email)) {
      this.erreur = 'Adresse email invalide.';
      return;
    }

    this.message = `Un email de réinitialisation a été envoyé à ${this.email}.`;
    this.email = '';
  }
}
