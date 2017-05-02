import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/users.provider';
import { TransactionProvider } from '../../providers/transactions.provider';

@Component({
  selector: 'page-pinCode',
  templateUrl: 'pinCode.html',
  providers: [UserProvider, TransactionProvider]
})
export class PinCodePage {

  service : Service;
  answer : any;
  connectedUser : any;

	constructor(public navCtrl: NavController, public params:NavParams,
  private userProvider:UserProvider, private transactionProvider : TransactionProvider,
  private events : Events) {
		
		this.service = params.get("service");
		this.answer = params.get("answer");
    
    this.userProvider.getConnectedUser().then(user => {
			this.connectedUser = user;
		});
    
	}
  
  validSeller() {
    if(this.connectedUser.id == this.answer.seller.id) {
      console.log("couille");
      this.transactionProvider.endTransaction(this.answer.id).then(
        transaction => {
          this.events.publish('reloadAnnoncePage'); 
          this.navCtrl.pop();
        }
      );
    }
  }
  
  validBuyer() {
    if(this.connectedUser.id == this.answer.buyer.id) {
      this.transactionProvider.closeTransaction(this.answer.id).then(
        transaction => { 
          this.events.publish('reloadAnnoncePage');
          this.navCtrl.pop(); 
        }
      );
    }
  }
  
}
