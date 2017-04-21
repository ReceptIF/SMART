import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TransactionModal } from './transactionModal';
import { TransactionProvider } from '../../providers/transactions.provider';

@Component({
  selector: 'page-checkTransaction',
  templateUrl: 'checkTransaction.html',
  providers: [TransactionProvider]
})
export class CheckTransactionPage {
	
	service: Service;
  answers : any;

	constructor(public navCtrl: NavController, public params:NavParams, 
        private modalCtrl: ModalController, private transactionProvider: TransactionProvider) {
		
    this.service = params.get("service");
    this.answers = [];
    
    this.transactionProvider.getTransactionsByAnnounce(this.service.id).then( 
      transactions => { 
        this.answers = transactions;
        this.answers = this.answers.filter( transaction => {
						return transaction.status == 0;
        });
    });
    
	}
  
  openModal(answer) {
    let modal = this.modalCtrl.create(TransactionModal,{answer: answer});
    modal.present();
  }
  
  refuse(answer) {
		this.transactionProvider.cancelTransaction(answer.id).then(
      response => {console.log(response)
    });
  }
  
}
