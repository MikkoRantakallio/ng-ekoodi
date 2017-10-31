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
  prevUser: User;
  firstName: string;
  lastName: string;
  showDeleteButton: boolean;

  @Output() userSelected: EventEmitter<User>;

  constructor(private userService: UserService) {
    this.title = 'Hero List';
    this.users = [];
    this.userSelected = new EventEmitter();
    this.prevUser = new User();

  }

  ngOnInit() {

    this.users = this.userService.getUsers();
    this.showDeleteButton = false;
    this.firstName = '';
    this.lastName = '';
  }

  onUserSelect(user: User) {

    if (this.prevUser != user || !this.showDeleteButton) {

      this.userSelected.emit(user);
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.showDeleteButton = true;
    }
    else {

      this.firstName = '';
      this.lastName = '';
      this.showDeleteButton = false;
    }

    this.prevUser = user;
  }

  insertUser() {

    if (this.firstName !== '' && this.lastName !== '') {
      let user: User = new User(this.firstName, this.lastName);
      this.userService.insertUser(user);

      this.firstName = '';
      this.lastName = '';
    }
  }

  deleteUser() {

    let user: User = new User(this.firstName, this.lastName);
    this.userService.deleteUser(user);

    this.firstName = '';
    this.lastName = '';
    this.showDeleteButton = false;
  }
}
