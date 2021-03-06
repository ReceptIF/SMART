import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/users.provider';
import { TransactionProvider } from '../../providers/transactions.provider';

@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
  providers: [UserProvider]
})
export class AnswerPage {

	service: Service;
  answerTransaction: any; //TODO better typing
	connectedUser : any; //TODO better typing
  postedAnswer : any;

	constructor(public navCtrl: NavController, public params:NavParams, private alertCtrl: AlertController,
              private userProvider: UserProvider, private transactionProvider: TransactionProvider) {
		this.service= params.get("service");
		this.answerTransaction = {};
    
		this.userProvider.getConnectedUser().then(
		  user => {
		    this.connectedUser = user;
		    this.answerTransaction = {
		      name: this.connectedUser.firstName,
          email: this.connectedUser.email,
          phoneNumber: this.connectedUser.cellPhone,
          transactionDate: new Date(),
          sellerId: -1,
          buyerId: -1,
          commentary: "",
          buyerOk: 0,
          sellerOk: 0,
          announceId: this.service.id,
          status: 1,
        };
        this.answerTransaction.accepterId = this.connectedUser.id;
        console.log(this.answerTransaction);
        
        this.transactionProvider.getTransactionByUserAndAnnounce(this.connectedUser.id, this.service.id).then(
          transaction => { this.postedAnswer = transaction; }
        );
      }
    );
	}

	sendAnswer() {
		let alert = this.alertCtrl.create({
			title: 'Message envoyé',
			buttons: ['Ok']
		});
		alert.present();
		console.log(this.answerTransaction);
		this.transactionProvider.postTransaction(this.answerTransaction).then( response => {this.navCtrl.pop();}  );
	}
}
