import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';



@Component({
  templateUrl: 'dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.sass'],
})
export class DialogDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    private eventService: EventService,
    private userService: UserService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    const userId = this.data.userId;
    this.userService.deleteUser(userId).subscribe(response => {
      if (response.succeeded) {
        console.log('Usuario eliminado con éxito:', response.data);
        this.eventService.emitEvent("DeletedUser");
      } else {
        console.error('Error al eliminar el usuario:', response.message);
      }
      this.dialogRef.close();
    });
    this.dialogRef.close(true);
  }
}
