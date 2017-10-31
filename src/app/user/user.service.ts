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

    _.remove(this.users, {id: user.id});
    console.log(user);
  }
}
