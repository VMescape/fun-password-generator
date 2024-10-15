import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  includeUppercase = true; // Enabled by default
  includeSymbols = true;   // Enabled by default
  passwordLength = 8;      // Ensure the initial value is at least 8
  generatedPassword = '';

  generatePassword() {
    const numbers = '0123456789';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = lowerCaseLetters;
    if (this.includeUppercase) {
      validChars += upperCaseLetters;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      password += validChars[index];
    }

    this.generatedPassword = password;
  }
}
