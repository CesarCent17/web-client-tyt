import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavComponent } from './components/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { SelectGenericComponent } from './components/select-generic/select-generic.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EventService } from '../app/services/event.service';
import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component'


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavComponent,
    SelectGenericComponent,
    UserRegistrationFormComponent,
    DialogDeleteComponent,
    UserUpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
