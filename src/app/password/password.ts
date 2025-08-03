import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule,RouterOutlet],
  templateUrl: './password.html',
  styleUrls: ['./password.css']
})
export class Password {
  newPassword = '';
  confirmPassword = '';
  erreur = '';
  showPassword = false;
  success = false; // 👈 utilisé pour basculer l’affichage

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  valider(): void {
    this.erreur = '';

    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/;

    if (!this.newPassword || !this.confirmPassword) {
      this.erreur = 'All fields are required.';
      return;
    }

    if (!pattern.test(this.newPassword)) {
      this.erreur = 'Password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.erreur = 'Passwords do not match.';
      return;
    }

    // ✅ Le mot de passe est validé → afficher message de succès
    this.success = true;
  }
}
