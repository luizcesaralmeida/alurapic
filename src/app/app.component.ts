import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = 'https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/11/breaking-bad-825x550.jpg?a86372';
  description: string = 'Breaking Bad';
}
