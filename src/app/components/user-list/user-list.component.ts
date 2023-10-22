import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { EventService } from '../../services/event.service';
import { ApiResponse } from '../../interfaces/api-response';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService: UserService,  private eventService: EventService) {}

  public displayedCols: string[] = [ "username", "firstName", "lastName", "departmentId", "jobTitleId", "email", "actions"];
  public users: User[] = [];
  public dataSource$!: Observable<ApiResponse<User[]>>;

  // @Output() userSaved = new EventEmitter();

  ngOnInit(): void {
    this.loadUsers();
    this.eventService.getEvent().subscribe((msg) => {
      if(msg === "UserSaved"){
        this.loadUsers();
      }
    });

    // this.userSaved.subscribe(() => {
    //   this.loadUsers();
    // });
  }

  editUser(userId: string) {
    console.log(`Editar: ${userId}`);
  }

  deleteUser(userId: string) {
    console.log(`Eliminar: ${userId}`);
  }

  openConfirmationDialog(userId: string): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '444px',
      data: { userId },
      position: {
        top: '70px',
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuario eliminado');
      }
    });
  }

  private loadUsers() {
    this.dataSource$ = this.userService.getUsers();
    this.dataSource$.subscribe(response => {
      if (response.succeeded) {
        this.users = response.data;
      }
    });
  }
}
