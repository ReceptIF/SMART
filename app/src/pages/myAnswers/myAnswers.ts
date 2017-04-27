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

	item: any;
	connectedUser: any;
	transactions: any;
	servicesClosed: any;
	servicesOpen: any;
	servicesToValidate: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private announceProvider : AnnounceProvider,
              private userProvider: UserProvider, private transactionProvider: TransactionProvider) {

		
		this.transactions = [];
		this.servicesClosed = [];
		this.servicesOpen = [];
		this.servicesToValidate = [];

		this.userProvider.getConnectedUser().then( user => {
			this.connectedUser = user;
			
			this.transactionProvider.getTransactionByBuyer(this.connectedUser.id).then(
				transactions => {
					this.transactions = transactions;
					console.log(this.transactions);
					for(var i=0; i<this.transactions.length; i++) {
						if(this.transactions[i].status == 1) {
							this.announceProvider.getAnnounce(this.transactions[i].announceId).then(
								announce => {
									this.item = announce;
									console.log(this.item);
									if(this.item.sell==1) {
										this.servicesOpen.push(announce);
										console.log(this.servicesOpen);
									}
								}
							);
						} else if(this.transactions[i].status == 2) {
							this.announceProvider.getAnnounce(this.transactions[i].announceId).then(
								announce => {
									this.item = announce;
									if(this.item.sell==1) {
										this.servicesToValidate.push(announce);
									}
								}
							);
						} else if(this.transactions[i].status == 3) {
							this.announceProvider.getAnnounce(this.transactions[i].announceId).then(
								announce => {
									this.item = announce;
									if(this.item.sell==1) {
										this.servicesClosed.push(announce);
									}
								}
							);
						}
					}
				}
			);
			
			this.transactionProvider.getTransactionBySeller(this.connectedUser.id).then(
				transactions => {
					this.transactions = transactions;
					for(var i=0; i<this.transactions.length; i++) {
						if(this.transactions[i].status == 1) {
							this.announceProvider.getAnnounce(this.transactions[i].announceId).then(
								announce => {
									this.item = announce;
									if(this.item.sell==0) {
										this.servicesOpen.push(announce);
									}
								}
							);
						} else if(this.transactions[i].status == 2) {
							this.announceProvider.getAnnounce(this.transactions[i].announceId).then(
								announce => {
									this.item = announce;
									if(this.item.sell==0) {
										this.servicesToValidate.push(announce);
									}
								}
							);
						} else if(this.transactions[i].status == 3) {
							this.announceProvider.getAnnounce(this.transactions[i].announceId).then(
								announce => {
									this.item = announce;
									if(this.item.sell==0) {
										this.servicesClosed.push(announce);
									}
								}
							);
						}
					}
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
