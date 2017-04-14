import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-checkTransaction',
  templateUrl: 'checkTransaction.html'
})
export class CheckTransactionPage {
	
	service: Service;

	constructor(public navCtrl: NavController, public params:NavParams, private modalCtrl: ModalController) {
		this.service= params.get("service");
	}
  
  openModal() {
    let modal = this.modalCtrl.create(TransactionModal);
    modal.present();
  }
}

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
