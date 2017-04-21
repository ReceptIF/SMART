import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { PinCodePage } from '../pinCode/pinCode';
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
    private transactionProvider : TransactionProvider
  ) {
  
    this.answer = params.get('answer');
    console.log(this.answer);
  
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  validate() {
		this.navCtrl.push(PinCodePage, {
    
		});
  }
  
  refuse() {
		this.transactionProvider.cancelTransaction(this.answer.id).then(
      response => {console.log(response)
    });
  }
}
