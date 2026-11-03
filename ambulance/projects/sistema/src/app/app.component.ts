import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

//Para uso de directivas
import { CommonModule } from '@angular/common';

@Component({
  selector: 'amb-root',
  imports: [RouterOutlet, CommonModule, HomeComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema';

  titlesApp = ['App 0.1', 'App 0.2', 'App 0.3', 'App 0.4'];
  /*
  titleApp01 = 'App 01';
  titleApp02 = 'App 02';
  titleApp03 = 'App 03';
   */
}
