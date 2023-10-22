import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { JobtitleService } from '../../services/jobtitle.service';
import { UserService } from '../../services/user.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.sass']
})
export class UserUpdateFormComponent {
  userForm: FormGroup;
  userId!: string;
  departments!: any[];
  jobTitles!: any[];

  constructor(
    private dialogRef: MatDialogRef<UserUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departmentService: DepartmentService,
    private jobtitleService: JobtitleService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private eventService: EventService
  ){
    this.userForm = this.formBuilder.group({
      username: data.userData.username,
      email: data.userData.email,
      firstName: data.userData.firstName,
      middleName: data.userData.middleName,
      lastName: data.userData.lastName,
      secondLastName: data.userData.secondLastName,
      departmentId: data.userData.departmentId,
      jobTitleId: data.userData.jobTitleId
    });
    this.userId = data.userId;
  }

  ngOnInit(): void {
    this.loadDepartmentsAndJobTitles();
  }

  updateUser(): void {
    const userData = this.userForm.value;
    this.userService.updateUser(userData, this.userId).subscribe(response => {
      if (response.succeeded) {
        console.log('Usuario actualizado con éxito:', response.data);
        this.eventService.emitEvent("UserUpdated");
      } else {
        console.error('Error al actualizar el usuario:', response.message);
      }
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
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
