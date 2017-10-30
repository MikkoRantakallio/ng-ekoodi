import {Component} from '@angular/core';
import {User} from './user/user';

@Component({
  selector: 'ekoodi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedUserName: string;

  constructor() {
    this.selectedUserName = '';
  }

  changeName(): void {
    this.selectedUserName = 'eKoodi';
  }

  onUserSelected(user: User) {

    console.log(user);
    this.selectedUserName = user.firstName + ' ' + user.lastName;
  }
}
