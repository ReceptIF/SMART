import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/users.provider';
import { MyAddressesPage } from '../myAddresses/myAddresses';

@Component({
  selector: 'page-modify-profile',
  templateUrl: 'modifyProfile.html',
  providers: [UserProvider]
})
export class ModifyProfilePage {

	connectedUser: any;
	profileUser: any;
	profileId : number;
  
	services : any;
	comments : any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
 
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
					this.profileUser = user
					console.log(this.profileUser);
				}
			);
		});
	}

	updateProfile() {
		this.navCtrl.push(ModifyProfilePage);
	}
}	
