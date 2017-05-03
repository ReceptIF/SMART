import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

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
  comment : string;
  title : string;
  note : number;

	constructor(public navCtrl: NavController, public params:NavParams,
  private userProvider:UserProvider, private transactionProvider : TransactionProvider,
  private events : Events) {

		this.service = params.get("service");
		this.answer = params.get("answer");

    this.userProvider.getConnectedUser().then(user => {
			this.connectedUser = user;
		});

	}

  valid() {

    var commentBody = { title : this.title, content : this.comment, note : this.note };

    if(this.connectedUser.id == this.answer.seller.id) {
      this.transactionProvider.endTransaction(this.answer.id,commentBody).then(
        transaction => {
          this.navCtrl.pop();
          this.navCtrl.pop();
        }
      );
    } else if(this.connectedUser.id == this.answer.buyer.id) {
      this.transactionProvider.closeTransaction(this.answer.id,commentBody).then(
        transaction => {
          this.navCtrl.pop();
          this.navCtrl.pop();
        }
      );
    }
  }

  openProfile(event, userId) {
    this.navCtrl.push(ProfilePage, {
      profileId: userId
    });
  }

}
