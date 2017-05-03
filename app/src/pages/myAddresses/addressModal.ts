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
	cities : any;
	name: String;
	complement: String;
	address: String;
	profileId : number;
	cityId: number;
	addressId: number;
	ownerId: number;

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
			this.ownerId = address.ownerId;
		} else {
			this.addressId = -1;
		}
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

	createAddress() {

	  if(this.address && this.name) {
      if (this.addressId >= 0) {
        var addressToPut = {
          name: this.name,
          complement: this.complement ? this.complement : "",
          address: this.address,
          cityId: 1, //TODO
          ownerId: this.ownerId,
          id: this.addressId
        };

        let alert = this.alertCtrl.create({
          title: 'Adresse modifiée',
          buttons: ['Ok']
        });
        this.addressProvider.putAddress(addressToPut).then(response => {
          console.log(response);
          alert.present();
          this.viewCtrl.dismiss().then( result => {console.log(result)});
        });
      }

      else {
        var addressToPost = {
          name: this.name,
          complement: this.complement ? this.complement : "",
          address: this.address,
          cityId: 1, //TODO
          ownerId: this.profileId
        };

        let alert = this.alertCtrl.create({
          title: 'Adresse ajoutée',
          buttons: ['Ok']
        });

        this.addressProvider.postAddress(addressToPost).then(response => {
          alert.present();
          this.viewCtrl.dismiss().then( result => {console.log(result)});
        });
      }
    } else {
      let alert = this.alertCtrl.create({
        title: 'Données non valide.',
        buttons: ['Ok']
      });
      alert.present();
    }
	}
}
