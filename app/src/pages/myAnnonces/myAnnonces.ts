import { Component } from '@angular/core';
import _ from "lodash";
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';
import { TransactionProvider } from '../../providers/transactions.provider';

@Component({
  selector: 'page-myAnnonces',
  templateUrl: 'myAnnonces.html',
  providers: [AnnounceProvider, TransactionProvider]
})
export class MyAnnoncesPage {

  selectedItem: any;
  connectedUser: any;
  items: any;
  itemsOpen: any;
  itemsClosed: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private announceProvider : AnnounceProvider,
              private userProvider: UserProvider, private transactionProvider: TransactionProvider) {

    this.selectedItem = navParams.get('item');
    this.items = [];
    this.itemsOpen = [];
    this.itemsClosed = [];

    this.userProvider.getConnectedUser().then( user => {
	    this.connectedUser = user;
      this.announceProvider.getAnnounceByUser(this.connectedUser.id).then(
        announces => {
          this.items = announces;
          _.forEach(this.items, item => {
            if (!item.closed) {
              this.itemsOpen.push(item);
              this.transactionProvider.getTransactionsByAnnounce(item.id).then(transactions => {
                item.transactions = transactions;
                item.transactions = item.transactions.filter( transaction => {
                    return transaction.status == 0;
                });
                item.nbTransactions = item.transactions.length;
                console.log(item.nbTransactions)
              });
            } else this.itemsClosed.push(item);
          });
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
