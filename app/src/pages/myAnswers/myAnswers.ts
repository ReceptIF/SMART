import { Component } from '@angular/core';
import _ from "lodash";
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';
import { TransactionProvider } from '../../providers/transactions.provider';

@Component({
  selector: 'page-myAnswers',
  templateUrl: 'myAnswers.html',
  providers: [AnnounceProvider, TransactionProvider]
})
export class MyAnswersPage {

	selectedItem: any;
	connectedUser: any;
	transactions: any;
	services: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private announceProvider : AnnounceProvider,
              private userProvider: UserProvider, private transactionProvider: TransactionProvider) {

		this.selectedItem = navParams.get('item');
		this.transactions = [];
		this.services = [];

		this.userProvider.getConnectedUser().then( user => {
			this.connectedUser = user;
			
			this.transactionProvider.getTransactionByBuyer(this.connectedUser.id).then(
				transactions => {
					this.transactions = transactions;
					for(var i=0; i<this.transactions.length; i++) {
						this.announceProvider.getAnnounce(this.transactions[i].id).then(
							announce => {
								this.services.push(announce);
								console.log(this.services);
							}
						);
					}
					console.log(this.services);
				}
			);
		});
	}

  itemTapped(event, item) {
    this.navCtrl.push(AnnoncePage, {
      item: item
    });
  }

}
