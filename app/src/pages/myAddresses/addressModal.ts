import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'addressModal.html'
})
export class AddressModal {
  character;

  constructor(
    private platform: Platform,
    public params: NavParams,
    private viewCtrl: ViewController,
    public navCtrl: NavController
  ) {
  
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  validate() {
    this.viewCtrl.dismiss();
  }
}
