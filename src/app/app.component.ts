import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeNumbers = false;
  includeLetters = false;
  includeSymbols = false;

  onChangeLength(value : string  ):void {

    const parseValue = parseInt(value);
    if(!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }
  useLetters(){
    this.includeLetters = !this.includeLetters;
    this.password = '';
  }
  useSymbols() {
    this.includeSymbols = !this.includeSymbols;
    this.password = '';
  }
  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
    this.password = '';
  }
  generateButtonClickEvent() {

    const numbers="1234567890";
    const letters="abcdefghijklmnopqrstuvwxyz";
    const symbols="!@#$%^&*()"
    let valideCharacter = "";

    if(this.includeLetters) {
      valideCharacter +=letters;
    }
    if(this.includeNumbers) {
      console.log(this.includeNumbers);
      valideCharacter +=numbers;
    }
    if(this.includeSymbols) {
      valideCharacter +=symbols;
    }
    
    let generatePassword = '';

    for( let i=0; i < this.length; i++) {
      const index = Math.floor(Math.random()*valideCharacter.length);
      generatePassword +=valideCharacter[index];
    }
    this.password = generatePassword;
    console.log(this.includeLetters, this.includeNumbers, this.includeSymbols);
  }
}
