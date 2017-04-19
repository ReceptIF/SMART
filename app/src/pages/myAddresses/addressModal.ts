import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'addressModal.html'
})
export class AddressModal {
  character;
  cities : Array<any>;

  constructor(
    private platform: Platform,
    public params: NavParams,
    private viewCtrl: ViewController,
    public navCtrl: NavController
  ) {
  
    this.cities = [{id:1, name: 'Lyon'}, {id:2, name: 'Villeurbanne'}];
  
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  validate() {
    this.viewCtrl.dismiss();
  }
}
