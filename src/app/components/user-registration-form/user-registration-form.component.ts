import { Component, Inject, OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../interfaces/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DepartmentService } from '../../services/department.service';
import { JobtitleService } from '../../services/jobtitle.service';
import { Department } from 'src/app/interfaces/department';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: 'user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.sass'],
})
export class UserRegistrationFormComponent {
  userForm: FormGroup;
  departments!: any[];
  jobTitles!: any[];



  constructor(
    private dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departmentService: DepartmentService,
    private jobtitleService: JobtitleService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      secondLastName: data.secondLastName,
      departmentId: data.departmentId,
      jobTitleId: data.jobTitleId
    });
  }

  ngOnInit(): void {
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

  saveUser(): void {
    const userData = this.userForm.value;
    this.dialogRef.close(userData);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
