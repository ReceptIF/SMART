import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressModal } from './addressModal';
import { ModalController } from 'ionic-angular';
import { AddressProvider } from '../../providers/address.provider';
import { UserProvider } from '../../providers/users.provider';

@Component({
  selector: 'page-myAddresses',
  templateUrl: 'myAddresses.html',
  providers: [UserProvider, AddressProvider]
})
export class MyAddressesPage {

	connectedUser: any;
	profileUser: any;
	profileId : number;
  
	addresses : any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl : ModalController, private addressProvider: AddressProvider, private userProvider: UserProvider) {
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
					this.addressProvider.getAddressesByUser(this.profileUser.id).then(
						addresses => {
							this.addresses = addresses;
							console.log(this.addresses);
						}
					);
				}		
			);

		});
	}
  
	editAddress() {
		let modal = this.modalCtrl.create(AddressModal);
		modal.present();
	}
  
	createAddress() {
		let modal = this.modalCtrl.create(AddressModal, {
			profileId: this.profileId
		});
		modal.present();
	}
  
	modifyAddress() {
		alert("modify");
	}
  
	deleteAddress(address: any) {
		for(var i = 0; i < this.addresses.length; i++) {
			if(this.addresses[i] == address){
				this.addresses.splice(i, 1);
			}
		}
		this.addressProvider.deleteAddress(address.id);
	}
}
