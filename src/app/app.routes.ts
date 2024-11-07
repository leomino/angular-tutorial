import { Routes } from '@angular/router';
import {ProfileComponent} from '../pages/profile/profile.component';
import {UsersComponent} from '../pages/users/users.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
];
