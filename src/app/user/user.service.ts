import {Injectable} from '@angular/core';
import {User} from './user';
import * as _ from 'lodash';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('James', 'Bond'),
      new User('Clark', 'Kent'),
      new User('Ethan', 'Hunt'),
      new User('Indiana', 'Jones'),
      new User('Bruce', 'Wayne'),
      new User('John', 'Rambo')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  insertUser(user: User) {

    this.users.push(user);
    console.log(user);
  }

  deleteUser(user: User) {

    console.log(user);

    let index: number = this.users.indexOf(user, 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}
