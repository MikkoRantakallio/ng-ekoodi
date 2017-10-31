import {Injectable} from '@angular/core';
import {User} from './user';

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
}
