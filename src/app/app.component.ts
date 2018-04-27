import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  email: string;
  website :string;
  hobbies :string[];
  showHobbies:boolean;

  constructor(){
    this.title="warner";
    this.email="warner200@hotmail.com";
    this.website="https://www.hopewellsystem.com";
    this.hobbies=['correr','leer','hacer pesas'];
    this.showHobbies =false;
  }

  toggleHobbies(){
    this.showHobbies= !this.showHobbies;
  }
  
}
