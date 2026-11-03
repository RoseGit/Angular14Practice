import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'amb-root',
  imports: [RouterOutlet, HomeComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema';

  titleApp01 = 'App 01';
  titleApp02 = 'App 02';
  titleApp03 = 'App 03';
}
