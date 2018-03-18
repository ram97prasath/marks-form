import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(public userService: UserService) { }

}
