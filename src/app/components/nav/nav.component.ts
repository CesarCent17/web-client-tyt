import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})


export class NavComponent {
  constructor(public dialog: MatDialog) {}
  departments = [
    { value: 'dep1', viewValue: 'Departamento 1' },
    { value: 'dep2', viewValue: 'Departamento 2' },
    { value: 'dep3', viewValue: 'Departamento 3' },
  ];

  jobTitles = [
    { value: 'title1', viewValue: 'Cargo 1' },
    { value: 'title2', viewValue: 'Cargo 2' },
    { value: 'title3', viewValue: 'Cargo 3' },
  ];

  openUserRegistrationDialog(): void {
    const dialogRef = this.dialog.open(UserRegistrationFormComponent, {
      data: {
        username: '',
        email: '',
        firstName: '',
        middleName: '',
        lastName: '',
        secondLastName: '',
        departmentId: '',
        jobTitleId: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Aquí puedes manejar los datos del usuario después de cerrar el diálogo
        // Por ejemplo, enviar los datos al servidor
        console.log('Datos del usuario guardados:', result);
      }
    });
  }


}
