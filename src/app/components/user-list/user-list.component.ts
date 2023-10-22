import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { EventService } from '../../services/event.service';
import { ApiResponse } from '../../interfaces/api-response';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';
import { UserSaveData } from 'src/app/interfaces/user-save-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
})
export class UserListComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private eventService: EventService
  ) {}

  public displayedCols: string[] = [
    'username',
    'firstName',
    'lastName',
    'departmentId',
    'jobTitleId',
    'email',
    'actions',
  ];
  public users: User[] = [];
  public dataSource$!: Observable<ApiResponse<User[]>>;
  public userData: UserSaveData = {
    username: '',
    email: '',
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    departmentId: '',
    jobTitleId: '',
  };

  ngOnInit(): void {
    this.loadUsers();
    this.eventService.getEvent().subscribe((msg) => {
      if (msg === 'UserSaved' || msg === 'DeletedUser') {
        this.loadUsers();
      }
    });
  }

  // openUserUpdateDialog(userId: string): void {
  //   let sendData: {
  //     userData: UserSaveData;
  //     userId: string;
  //   } = {
  //     userData: this.userData,
  //     userId: userId,
  //   };

  //   const dialogRef = this.dialog.open(UserUpdateFormComponent, {
  //     // width: '444px',
  //     // data: { userId },
  //     // position: {
  //     //   top: '70px',
  //     // }
  //     data: { sendData },
  //     width: '768px',
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       console.log('Usuario actualizado');
  //     }
  //   });
  // }

  openUserUpdateDialog(userId: string): void {
    this.userService.getUserById(userId).subscribe((response) => {
      if (response.succeeded) {
        // Cargar los datos del usuario en userData
        this.userData = {
          username: response.data.username,
          email: response.data.email,
          firstName: response.data.firstName,
          middleName: response.data.middleName,
          lastName: response.data.lastName,
          secondLastName: response.data.secondLastName,
          departmentId: response.data.department.id, // Ajusta el acceso a tu objeto Department
          jobTitleId: response.data.jobTitle.id, // Ajusta el acceso a tu objeto JobTitle
        };

        // Abrir el diálogo con los datos cargados
        const dialogRef = this.dialog.open(UserUpdateFormComponent, {
          data: { userData: this.userData, userId: userId },
          width: '768px',
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            console.log('Usuario actualizado');
          }
        });
      }
    });
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
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuario eliminado');
      }
    });
  }

  private loadUsers() {
    this.dataSource$ = this.userService.getUsers();
    this.dataSource$.subscribe((response) => {
      if (response.succeeded) {
        this.users = response.data;
      }
    });
  }
}
