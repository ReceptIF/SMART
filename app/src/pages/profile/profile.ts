import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/users.provider';
import { AnnounceProvider } from '../../providers/announces.provider';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [UserProvider]
})
export class ProfilePage {

  connectedUser: any;
  profileUser: any;
  profileId : number;
  
  services : any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private announceProvider: AnnounceProvider) {
  
    if(navParams.get("profileId")) {
      this.profileId = navParams.get("profileId");
    } else {
      this.profileId = -1;
    }
    
    console.log(this.profileId);
    
    this.profileUser = {};
    this.connectedUser = {};
    this.services = [];
  
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
				}
			);
		});

	}

}
