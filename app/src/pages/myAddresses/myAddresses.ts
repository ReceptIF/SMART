import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';
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

	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
              private modalCtrl : ModalController, private addressProvider: AddressProvider,
              private userProvider: UserProvider, private events:Events) {

	  if(navParams.get("profileId")) {
			this.profileId = navParams.get("profileId");
		} else {
			this.profileId = -1;
		}

		this.profileUser = {};
		this.connectedUser = {};

    this.getAllAddresses();

    this.events.subscribe('reloadMyAddresses',() => {
      this.getAllAddresses();
    });
	}

	getAllAddresses(){
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

	editAddress(address: any) {
		let modal = this.modalCtrl.create(AddressModal, {
			address: address
		});
		modal.present();
	}
}
