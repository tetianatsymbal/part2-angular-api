import { Component } from '@angular/core';
import { User } from "../shared/user";
import { UserService } from "../services/users.service";
import { MatSelectChange } from "@angular/material/select";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public isOn = false;
  users!: User[];
  selectedUsers: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getAllUsers();
    this.userService.getUsersObservable().subscribe(users => {
      this.users = users;
    })
  }

  selectAll(){
    this.selectedUsers = this.users;
  }

  find(str: string){
    this.userService.searchUsers(str);
  }

  selectOne(checked: boolean, user: User){
    if(checked){
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers = this.selectedUsers.filter(u => u.id !== user.id);
    }
  }

  delete(){
    this.userService.deleteUsers(this.selectedUsers);
    this.selectedUsers = [];
  }

  onSortBy(event: MatSelectChange){
    this.userService.orderByName(event.value);
  }
  openForm() {
    this.isOn = !this.isOn;
  }

}

