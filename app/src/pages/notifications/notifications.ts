import { Component } from '@angular/core';
import _ from "lodash";
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
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

              var postDate = this.parseDate(notif.createdAt);
              var today = new Date();

              notif.timeNb = Math.round((today.getTime()-postDate.getTime())/(1000*60*60*24)) - 1;

              newNotifs.push(notif);
            }
          );
        }
      });

      return newNotifs;
  }

  parseDate(str) {
    var day = str.substr(8,2);
    var month = str.substr(5,2);
    var year = str.substr(0,4);
    return new Date(year,month, day);
  }

  selectNotif(notif) {
    switch(notif.type) {
      case 'answer' :
        this.navCtrl.push(AnnoncePage, { item: notif.announce });
        break;
      case 'accept' :
        this.navCtrl.push(AnnoncePage, { item: notif.announce });
        break;
      case 'end' :
        this.navCtrl.push(AnnoncePage, { item: notif.announce });
        break;
      case 'close' :
        this.navCtrl.push(AnnoncePage, { item: notif.announce });
        break;
    }
  }

}
