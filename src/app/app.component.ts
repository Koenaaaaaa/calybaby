import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calyzones';
  card: boolean = false;
  grid: boolean = false;

  

  showCard(){
    this.card = true;
    this.grid = false;
  }

  showGrid(){
    this.grid = true;
    this.card = false;
  }
}


