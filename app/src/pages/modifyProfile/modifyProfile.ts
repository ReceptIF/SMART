import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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

	constructor(private navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider,
              private alertCtrl: AlertController) {

		if(navParams.get("profileId")) {
			this.profileId = navParams.get("profileId");
		} else {
			this.profileId = -1;
		}

		this.profileUser = {};
		this.connectedUser = {};

		this.userProvider.getConnectedUser().then( user => {
			this.connectedUser = user;
			if(this.profileId < 0) { this.profileId = this.connectedUser.id; }
			this.userProvider.getUser(this.profileId).then(
				user => {
					this.profileUser = user;
					console.log(this.profileUser);
				}
			);
		});
	}

	updateProfile() {
		let alert = this.alertCtrl.create({
			title: 'Profil mis à jour',
			buttons: ['Ok']
		});
		alert.present();
		this.userProvider.putUser(this.profileUser)
      .then(
        response => {
          this.navCtrl.pop();
        }
		  );
  }
}
