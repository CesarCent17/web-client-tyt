import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ApiResponse } from '../../interfaces/api-response';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  // public displayedCols: string[] = [ "username","email","lastName","departmentId","jobTitleId", "actions"]
  public displayedCols: string[] = [ "username","firstName","lastName","departmentId","jobTitleId", "email","actions"]

  private userService = inject(UserService)
  public dataSource$: Observable<ApiResponse<User[]>> = this.userService.getUsers()

  ngOnInit(): void {

  }


  editUser(userId: string) {
    console.log(`Editar: ${userId}`);
  }

  deleteUser(userId: string) {
    console.log(`Eliminar: ${userId}`);
  }

  openConfirmationDialog(userId: string): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '500px',
      height: '140px',
      data: { userId },
      position: {
        top: '85px',
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuario eliminado');
      }
    });
  }
}
