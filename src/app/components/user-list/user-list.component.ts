import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ApiResponse } from '../../interfaces/api-response';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'departmentId', 'jobTitleId', 'email', 'acciones'];
  totalUsers: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: ApiResponse<User[]>) => {
      if (response.succeeded) {
        this.users = response.data;
        this.totalUsers = this.users.length;
      } else {
        console.log(response);
      }
    });

  }


  editUser(userId: string) {
    console.log(`Editar: ${userId}`);
  }

  deleteUser(userId: string) {
    console.log(`Eliminar: ${userId}`);
  }
}
