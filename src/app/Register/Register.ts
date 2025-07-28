// register.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule }  from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  adresse = '';
  showPassword = false;
  message = '';
  error = '';

  // Conditions dynamiques du mot de passe
  get hasMinLength() {
    return this.password.length >= 8;
  }
  get hasUppercase() {
    return /[A-Z]/.test(this.password);
  }
  get hasLowercase() {
    return /[a-z]/.test(this.password);
  }
  get hasNumber() {
    return /\d/.test(this.password);
  }
  get hasSpecialChar() {
    return /[^a-zA-Z0-9\s]/.test(this.password);
  }

  get formIsValid() {
    return (
      this.firstname.trim().length >= 3 &&
      /^[A-Za-z\u00C0-\u017F ]+$/.test(this.firstname) &&
      this.lastname.trim().length >= 3 &&
      /^[A-Za-z\u00C0-\u017F ]+$/.test(this.lastname) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email) &&
      this.hasMinLength &&
      this.hasUppercase &&
      this.hasLowercase &&
      this.hasNumber &&
      this.hasSpecialChar
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  register() {
    this.error = '';
    this.message = '';

    if (!this.formIsValid) {
      this.error = 'Please fill out all required fields correctly.';
      return;
    }

    this.message = 'Account successfully created!';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.adresse = '';
  }
}
