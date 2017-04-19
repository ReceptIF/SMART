import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressModal } from './addressModal';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-myAddresses',
  templateUrl: 'myAddresses.html'
})
export class MyAddressesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl : ModalController) {
  

	}
  
  editAddress() {
    let modal = this.modalCtrl.create(AddressModal);
    modal.present();
  }
  
  createAddress() {
    let modal = this.modalCtrl.create(AddressModal);
    modal.present();
  }

}
