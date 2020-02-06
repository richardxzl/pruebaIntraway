import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  notFound = false;
  user: User

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUser(userId: string) {
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userId).subscribe((userFromTheAPI : User) => {
      this.user = userFromTheAPI;
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    });
  }

}
