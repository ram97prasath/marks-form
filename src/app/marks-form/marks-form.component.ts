import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.services';

@Component({
  selector: 'app-marks-form',
  templateUrl: './marks-form.component.html',
  styleUrls: ['./marks-form.component.css']
})
export class MarksFormComponent {
  m1: number;
  m2: number;
  m3: number;
  newUserName: string;
  result: number;
  currentDate = new Date();
  typesOfResult = ['Poor','Good','Excellent','Outstanding'];

  constructor(public userService: UserService){}

  sum(){
    this.result = (this.m1 ? this.m1 : 0) + (this.m2 ? this.m2 : 0) + (this.m3 ? this.m3 : 0);
    this.userService.changeUserName(this.newUserName);
  }
}
