import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'transactionModal.html'
})
export class TransactionModal {
  character;

  constructor(
    private platform: Platform,
    public params: NavParams,
    private viewCtrl: ViewController
  ) {
  
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
