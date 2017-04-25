import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddressProvider } from '../../providers/address.provider';
import { UserProvider } from '../../providers/users.provider';
import { CityProvider } from '../../providers/city.provider';

@Component({
  templateUrl: 'addressModal.html',
  providers: [UserProvider, AddressProvider, CityProvider]
})
export class AddressModal {
	character;
	cities : Array<any>;
	name: String;
	complement: String;
	address: String;
	profileId : number;
	cityId: number;
	addressId: number;

	constructor(private platform: Platform,	public navParams: NavParams, private viewCtrl: ViewController,	public navCtrl: NavController,
		private alertCtrl: AlertController, private addressProvider: AddressProvider, private userProvider: UserProvider, private cityProvider: CityProvider) {
		//this.cities = [{id:1, name: 'Lyon'}, {id:2, name: 'Villeurbanne'}];
		this.cityProvider.getCities().then( cities => { this.cities = cities; console.log(this.cities);});

		if(navParams.get("profileId")) {
			this.profileId = navParams.get("profileId");
		} else {
			this.profileId = -1;
		}
		
		
		if(navParams.get("address")) {
			var address = navParams.get("address");
			this.complement = address.complement;
			this.address = address.address;
			this.name = address.name;
			this.cityId = address.cityId;
			this.addressId = address.id;
		} else {
			this.addressId = -1;
		}
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}
  
	createAddress() {
		
		var address = {
			name : this.name,
			complement : this.complement,
			address : this.address,
			cityId : 1, //TODO
			ownerId : this.profileId
		};
		console.log(address);
		if(this.addressId >= 0) {
			let alert = this.alertCtrl.create({
				title: 'Adresse modifiée',
				buttons: ['Ok']
			});
			alert.present();
			this.addressProvider.putAddress(address).then(response => {
				this.viewCtrl.dismiss();
			});
		} else {
			let alert = this.alertCtrl.create({
				title: 'Adresse ajoutée',
				buttons: ['Ok']
			});
			alert.present();
		
			this.addressProvider.postAddress(address).then(response => {
				this.viewCtrl.dismiss();
			});
		}
	}
}
