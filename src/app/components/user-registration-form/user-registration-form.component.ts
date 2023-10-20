import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../interfaces/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: 'user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.sass'],
})
export class UserRegistrationFormComponent {
  userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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


  saveUser(): void {
    const userData = this.userForm.value;
    this.dialogRef.close(userData);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
