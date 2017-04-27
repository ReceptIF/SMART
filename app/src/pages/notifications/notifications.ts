import { Component } from '@angular/core';
import _ from "lodash";
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { PostAnnoncePage } from '../postAnnonce/postAnnonce';
import { NotificationProvider } from '../../providers/notifications.provider';
import { UserProvider } from '../../providers/users.provider';
import { AnnounceProvider } from '../../providers/announces.provider';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  providers: [NotificationProvider, UserProvider, AnnounceProvider]
})
export class NotificationsPage {

  connectedUser : any;
  notifications : any;

	constructor(public navCtrl: NavController, public navParams: NavParams,
      private userProvider : UserProvider, private notificationProvider : NotificationProvider,
      private announceProvider : AnnounceProvider) {
	
      this.notifications = [];
  
      this.userProvider.getConnectedUser().then( 
        user => { this.connectedUser = user;
          this.notificationProvider.getNotificationsByUser(this.connectedUser.id).then(
            notifs => { 
              this.notifications = this.addAnnounces(notifs);
            }
          );
        }
      );

	}
  
  addAnnounces(notifs) {
    
    var newNotifs = [];
    
   _.forEach(notifs, notif => {
      if(notif.transaction) {
        this.announceProvider.getAnnounce(notif.transaction.announceId).then(
          announce => { 
            notif.announce = announce;
            newNotifs.push(notif);
          }
        );
      }
    });
    
    return newNotifs;
  }
  
  selectNotif(notif) {
    switch(notif.code) {
      case 'answer' :
        this.navCtrl.push(AnnoncePage, { item: notif.announce });
        break;
      case 'accepted' :
        this.navCtrl.push(AnnoncePage, { item: notif.announce });
        break;
    }
  }

}
