import { Component } from '@angular/core';
import _ from 'lodash';
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { PostAnnoncePage } from '../postAnnonce/postAnnonce';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';
import {Pipe} from '@angular/core';

@Pipe({
  name: 'SearchedAnnouncesPage'
})

@Component({
  selector: 'page-serached-announces',
  templateUrl: 'searchedAnnounces.html',
  providers: [AnnounceProvider]
})
export class SearchedAnnouncesPage {

  selectedItem: any;
  connectedUser: any;
  category: ServiceType;

  searchedAnnounces: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private announceProvider : AnnounceProvider,
              private userProvider: UserProvider) {
		this.category= navParams.get("category");
		this.searchedAnnounces = [];

		this.userProvider.getConnectedUser().then( user => {
			this.connectedUser = user;
			this.announceProvider.getAnnounces().then(
				announces => {
					this.searchedAnnounces = _.filter(announces, announce => {
						if(this.category != null) {
							return announce.type.id == this.category;
						}
						return announce.type.id;
					});
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
