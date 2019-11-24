import { Component } from '@angular/core';
import { AuthService } from './component-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyOwnApp';
  constructor(private authService: AuthService) { }
}
