import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { PostAnnoncePage } from '../postAnnonce/postAnnonce';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';
import _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AnnounceProvider]
})
export class HomePage {

  selectedItem: any;
  connectedUser: any;

  items: Array<Service>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private announceProvider : AnnounceProvider,
              private userProvider: UserProvider) {
    this.items = [];
	  this.userProvider.getConnectedUser().then( user => {
	    this.connectedUser = user;
      this.announceProvider.getAnnounces().then(
        announces => {
          this.items = _.filter(announces, o => {return o.authorId != this.connectedUser.id});
        }
      );
    });

  }

  itemTapped(event, item) {
    this.navCtrl.push(AnnoncePage, {
      item: item
    });
  }

  goToPost(event) {
    this.navCtrl.push(PostAnnoncePage);
  }

}
