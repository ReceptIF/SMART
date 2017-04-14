import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { PinCodePage } from '../pinCode/pinCode';

@Component({
  templateUrl: 'transactionModal.html'
})
export class TransactionModal {
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
		this.navCtrl.push(PinCodePage, {
    
		});
  }
}
