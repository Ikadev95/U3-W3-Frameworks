import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss'
})
export class PrivateComponent implements OnInit {

  users:any = []

  constructor(private userSvc: UsersService){}
  ngOnInit(): void {
    this.userSvc.getAllUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }


}
