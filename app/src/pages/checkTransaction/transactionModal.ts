import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ViewController, Events } from 'ionic-angular';
import { PinCodePage } from '../pinCode/pinCode';
import { MyAnnoncesPage } from '../myAnnonces/myAnnonces';
import { TransactionProvider } from '../../providers/transactions.provider';

@Component({
  templateUrl: 'transactionModal.html',
  providers: [TransactionProvider]
})
export class TransactionModal {
  character;
  answer : any;

  constructor(
    private platform: Platform,
    public params: NavParams,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    private transactionProvider : TransactionProvider,
    private events : Events
  ) {
  
    this.answer = params.get('answer');
    console.log(this.answer);
  
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  validate() {
		this.transactionProvider.acceptTransaction(this.answer.id).then(
      response => { 
        this.navCtrl.setRoot(MyAnnoncesPage);
    });
  }
  
  refuse() {
		this.transactionProvider.cancelTransaction(this.answer.id).then(
      response => { 
        this.events.publish('reloadCheckTransactionPage');
        this.viewCtrl.dismiss();
    });
  }
}
