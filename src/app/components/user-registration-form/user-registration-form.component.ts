import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: 'user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.sass']
})
export class UserRegistrationFormComponent {
  user: User;

  constructor(
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.user = data;
  }

  onSave(): void {
    // Aquí puedes realizar acciones al guardar el formulario
    // Por ejemplo, enviar los datos al servidor
    this.dialogRef.close(this.user);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
