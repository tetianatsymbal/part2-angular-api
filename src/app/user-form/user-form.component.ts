import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { NewUser } from '../shared/user';
import { UserService } from "../services/users.service";
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('[+0-9]+')]]
  })

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private usersComponent: UsersComponent  ) {
  }
  get controls(){
    return this.userForm.controls;
  }
  onAddUser(){
    const newUser: NewUser = {
      name: `${this.userForm.value.firstname!} ${this.userForm.value.lastname!}`,
      email: this.userForm.value.email!,
      phone: this.userForm.value.phone!,
    }
    this.userService.addUser(newUser);
    this.userForm.reset();
    this.usersComponent.openForm();
  }


}
