import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileComponent} from '../pages/profile/profile.component';
import {NavigationBarComponent} from '../components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
