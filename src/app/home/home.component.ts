import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../shared/userService';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }

}

