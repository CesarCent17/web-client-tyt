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


  saveUser(): void {
    // Aquí puedes realizar acciones al guardar el formulario
    // Por ejemplo, enviar los datos al servidor
    const userData = this.userForm.value;
    this.dialogRef.close(userData);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
