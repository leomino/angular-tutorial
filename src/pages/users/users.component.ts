import {Component, inject, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  httpClient = inject(HttpClient);
  users: Array<User> = [];

  ngOnInit() {
    this.httpClient.get<User[]>('https://demo-server-three-mu.vercel.app/users').subscribe(users => {
      this.users = users;
    });
  }
}
