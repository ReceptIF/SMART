import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { PostAnnoncePage } from '../postAnnonce/postAnnonce';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  providers: []
})
export class NotificationsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	

	}

}
