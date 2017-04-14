import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TransactionModal } from './transactionModal';

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
