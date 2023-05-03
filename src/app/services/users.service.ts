import { Injectable } from '@angular/core';
import {NewUser, User} from "../shared/user";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const URL = 'https://jsonplaceholder.typicode.com'

@Injectable({
  providedIn: 'root'
})
  

export class UserService {
  users: User[] = []
  usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users)

  constructor(private http: HttpClient) { }

  getUsersObservable(): Observable<User[]>{
    return this.usersSubject.asObservable();
  }

  getAllUsers(){
    this.http.get<User[]>(URL + '/users').subscribe(users => {
      this.users = users.map(user => {
        return {...user}
      })
      this.usersSubject.next(this.users);
    })
  }

  searchUsers(str: string){
    if (str.length == 0) {
      this.getAllUsers()
    } else {
      this.users = this.users.filter(user => user.name.toLowerCase().includes(str.toLowerCase()));
    }
    this.usersSubject.next(this.users)
  }

  addUser(user: NewUser){
    this.http.post<User>(URL + '/users', user).subscribe(newUser => {
      this.users = [...this.users, {...newUser}]
      this.usersSubject.next(this.users);
    })
  }

  deleteUsers(deleteUsers: User[]){
    deleteUsers.forEach(user => {
      this.http.delete<User>(URL + `/users/${user.id}`)
    })
    this.users = this.users.filter(user => !deleteUsers.includes(user))
    this.usersSubject.next(this.users)
  }

  orderByName(order: 'firstname' | 'lastname'){
  this.users = this.users.sort((a, b) => {
    const aName = a.name.split(' ');
    const bName = b.name.split(' ');

    if (order === 'firstname') {
      return aName[0].localeCompare(bName[0]);
    } else {
      return aName[1].localeCompare(bName[1]);
    }
  });
  this.usersSubject.next(this.users);
}
}