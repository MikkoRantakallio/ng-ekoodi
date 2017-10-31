import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string;
  users: User[];
  firstName: string;
  lastName: string;

  @Output() userSelected: EventEmitter<User>;

  constructor(private userService: UserService) {
    this.title = 'Hero List';
    this.users = [];
    this.userSelected = new EventEmitter();

  }

  ngOnInit() {

    this.users = this.userService.getUsers();
  }

  onUserSelect(user: User) {

    this.userSelected.emit(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  insertUser() {

    let user: User = new User(this.firstName, this.lastName);
    this.userService.insertUser(user);

    this.firstName = '';
    this.lastName = '';
  }

  deleteUser() {

    let user: User = new User(this.firstName, this.lastName);
    console.log('Delete user');
    this.userService.deleteUser(user);
  }
}
