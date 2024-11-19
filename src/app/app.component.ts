import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent {
  PASSWORD = 'TEST_PASSWORD'
  LOGIN = 'Hanna'

  constructor() {
    localStorage.setItem('authorization_token', btoa(`${this.LOGIN}:${this.PASSWORD}`));
  }
}
