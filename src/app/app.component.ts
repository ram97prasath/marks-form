import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  m1: number;
  m2: number;
  m3: number;
  result: number;
  currentDate = new Date();
  typesOfResult = ['Poor','Good','Excellent','Outstanding'];

  sum(){
    this.result = (this.m1 ? this.m1 : 0) + (this.m2 ? this.m2 : 0) + (this.m3 ? this.m3 : 0);
  }
}
