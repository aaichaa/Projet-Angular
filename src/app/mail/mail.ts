import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mail.html',
  styleUrls: ['./mail.css']
})
export class Mail {
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
