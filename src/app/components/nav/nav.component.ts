import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { DepartmentService } from '../../services/department.service';
import { JobtitleService } from '../../services/jobtitle.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent {
  constructor(public dialog: MatDialog, private departmentService: DepartmentService, private jobtitleService: JobtitleService) {
    this.loadDepartmentsAndJobTitles();
  }

  departments: any[] = [];
  jobTitles: any[] = [];

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
      width: '768px',
      // height: '680px',
    });

    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Datos del usuario guardados:', result);
      }
    });
  }

  private loadDepartmentsAndJobTitles() {
    this.departmentService.getDepartments().subscribe(response => {
      if (response.succeeded) {
        this.departments = response.data.map(department => ({
          value: department.id,
          viewValue: department.name
        }));
      }
    });

    this.jobtitleService.getJobTitles().subscribe(response => {
      if (response.succeeded) {
        this.jobTitles = response.data.map(jobtitle => ({
          value: jobtitle.id,
          viewValue: jobtitle.name
        }));
      }
    });
  }
}
