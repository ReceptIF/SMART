import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';

@Component({
  selector: 'page-myAnnonces',
  templateUrl: 'myAnnonces.html',
  providers: [AnnounceProvider]
})
export class MyAnnoncesPage {

  selectedItem: any;
  connectedUser: any;
  items: any;
  itemsOpen: any;
  itemsClosed: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      private announceProvider : AnnounceProvider, private userProvider: UserProvider) {

    this.selectedItem = navParams.get('item');
    this.items = [];
    this.itemsOpen = [];
    this.itemsClosed = [];
    
    this.userProvider.getConnectedUser().then( user => {
	    this.connectedUser = user;
      this.announceProvider.getAnnounceByUser(this.connectedUser.id).then(
        announces => {
          this.items = announces;
          for(var i=0; i < this.items.length; i++) {
            if(this.items[i].closed) { this.itemsClosed.push(this.items[i]); 
            } else { this.itemsOpen.push(this.items[i]);  }
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
