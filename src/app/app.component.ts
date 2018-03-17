import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName = 'Ram Prasath';

  constructor(){
    console.log('App Component is created.');
  }

  ngOnInit(){
    console.log('App Component is initialized.');
  }

  imageClick(){
    console.log('Image Clicked');
  }
}
