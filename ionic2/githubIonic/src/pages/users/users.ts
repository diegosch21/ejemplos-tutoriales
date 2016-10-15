import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';

import { UserDetailsPage } from './../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];
  originalUsers: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
    });

    // githubUsers.searchUsers('diegosch').subscribe(users => {
    //   console.log(users);
    // });
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage,{login}); // {login} is a es2015 property shorthand. In es5, this translates to {login: login}
  }

  search(searchEvent){
    let term = searchEvent.target.value;
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users;
      });
    }
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

}
