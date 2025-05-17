import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  box1 = false;
  box2 = false;
  box3 = false;
  boxclicked(box: number) {
    this.box1 = box === 1 ? !this.box1 : false;
    this.box2 = box === 2 ? !this.box2 : false;
    this.box3 = box === 3 ? !this.box3 : false;
  }
}

 


