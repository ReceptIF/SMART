import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/users.provider';
import { AnnounceProvider } from '../../providers/announces.provider';
import { CommentProvider } from '../../providers/comments.provider';
import { AnnoncePage } from '../annonce/annonce';
import { MyAnnoncesPage } from '../myAnnonces/myAnnonces';
import { MyAddressesPage } from '../myAddresses/myAddresses';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [UserProvider, CommentProvider]
})
export class ProfilePage {

  connectedUser: any;
  profileUser: any;
  profileId : number;
  
  services : any;
  comments : any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private announceProvider: AnnounceProvider, private commentProvider : CommentProvider) {
  
    if(navParams.get("profileId")) {
      this.profileId = navParams.get("profileId");
    } else {
      this.profileId = -1;
    }
    
    this.profileUser = {};
    this.connectedUser = {};
    this.services = [];
    this.comments = [];
  
		this.userProvider.getConnectedUser().then( user => {
			this.connectedUser = user;
      if(this.profileId < 0) { this.profileId = this.connectedUser.id; }
			this.userProvider.getUser(this.profileId).then(
				user => {
					this.profileUser = user;
          this.announceProvider.getAnnounceByUser(this.profileUser.id).then(
            announces => {
              this.services = announces;
              for(var i = this.services.length - 1; i >= 0; i--) {
                if(this.services[i].closed) {
                   this.services.splice(i, 1);
                }
              }
            }
          );
          this.commentProvider.getCommentByTarget(this.profileUser.id).then(
            comments => {
              this.comments = comments;
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

  showMyAnnounces() {
    this.navCtrl.push(MyAnnoncesPage);
  }

  editAddresses() {
    this.navCtrl.push(MyAddressesPage);
  }
  
  goToProfile(profileId) {
    this.navCtrl.push(ProfilePage, {
		  profileId: profileId
		});
	}

}
