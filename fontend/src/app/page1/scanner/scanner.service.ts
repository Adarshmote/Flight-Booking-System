import { Injectable } from '@angular/core';
import { userChoice } from 'src/app/userChoice';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

private userChoice:userChoice[] = [];

addUserChoice(choice:userChoice){
  this.userChoice.pop();
  this.userChoice.push(choice)
}

getUserChoice():userChoice[]{
  return this.userChoice;
}
}
