import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'passwords';
  numbers = '0123456789'; 
  letters = 'abcdefghijklmnopqrstuvwxyz'
  symbols = '~`! @#$%^&*()_-+={[}]|\:;<,>.?/'
  includeSymbols = false
  includeCommas = false
  includeFun = false
  passwordLength = 8;
  password = '';
  copied = false;

  generatePassword() {
    let lowerCaseLetters = this.letters
    let upperCaseLetters = this.letters.toUpperCase
    let validChars = lowerCaseLetters + upperCaseLetters

    if (this.includeSymbols) {
      validChars += this.symbols
    }

    if (this.includeCommas) {
      validChars += ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'
    }

    if (this.includeFun) {
      validChars += 'fuckshitcum'
    }
    
    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      password += validChars[index]
    }

    this.password = password
  }

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.copied = true;
      setTimeout(() => {
        console.log("2 seconds have passed");
        this.copied = false;
    }, 2000);
    } catch (err) {
      console.log(err)
    }
  }
}

