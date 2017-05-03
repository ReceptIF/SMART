import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { PostAnnoncePage } from '../postAnnonce/postAnnonce';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';

@Component({
  selector: 'page-searched-announces',
  templateUrl: 'searchedAnnounces.html',
  providers: [AnnounceProvider, UserProvider]
})
export class SearchedAnnouncesPage {

  connectedUser: any;
  search: any;

  searchedAnnounces: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private announceProvider : AnnounceProvider,
              private userProvider: UserProvider) {
		this.search= navParams.get("search");
		this.userProvider.getConnectedUser().then( user => {
			this.connectedUser = user;
			this.announceProvider.searchAnnounces(this.search).then(announces => { console.log("test : ",announces); this.searchedAnnounces = announces; });
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
