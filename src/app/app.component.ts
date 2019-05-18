import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = 'https://falauniversidades.com.br/wp-content/uploads/2019/02/filme-breaking-bad-jesse-walter-1200x900.jpg';
  description: string = 'Breaking Bad';
}
