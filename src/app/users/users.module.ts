import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
// import {FlexModule} from "@angular/flex-layout";
import { UsersComponent } from './users.component';
import { UserFormComponent } from '../user-form/user-form.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    // FlexModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class UsersModule { }