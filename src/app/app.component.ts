import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Experis Göteborg Pro Java Programmers Epic';
  count: number = 0;

  public increment(){
  this.count++;
  }
}
