import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
import { ProfilePage } from '../profile/profile';
import { CheckTransactionPage } from '../checkTransaction/checkTransaction';
import { UserProvider } from '../../providers/users.provider';

@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html',
  providers: [UserProvider]
})
export class AnnoncePage {
	
	service: Service;
	price: string;
	startTime: string;
	endTime: string;
	estimatedTime: string;
	createdAt: string;
  
  connectedUser : any;

	constructor(public navCtrl: NavController, public params:NavParams, 
      private userProvider : UserProvider, private events : Events) {
    
    this.userProvider.getConnectedUser().then(user => {this.connectedUser = user;});

		this.service= params.get("item");
		this.price = this.service.price + " AH !";
		
		if(this.service.startTime != null) {
			this.startTime = "Date de début : "+this.service.startTime;			
		}
		
		if(this.service.endTime != null) {
			this.endTime = "Date de fin : "+this.service.endTime;			
		}

		if(this.service.estimatedTime != null) {
			var time: number;
			var days;
			time = Math.trunc(this.service.estimatedTime/60);
			var minutes = time*60 - this.service.estimatedTime;
			var hours = time % 24;
			if(time >= 24) {
				days = Math.trunc(time/24);
				if(days == 1) {
					this.estimatedTime = days + " jour";
				}
				else {
					this.estimatedTime = days + " jours";
				}
				if(hours == 1) {
					this.estimatedTime = this.estimatedTime + " et "+hours+"heure";
				}
				else if (hours > 1) {
					this.estimatedTime = this.estimatedTime + " et "+hours+"heures";
				}
			}
			else if(time > 0) {
				if(minutes < 10) {
					this.estimatedTime = hours+" h 0"+minutes
				} else {
					this.estimatedTime = hours+" h "+minutes				
				}
			}
			else {
				this.estimatedTime = minutes+" min";
			}
		}

		if(this.service.createdAt != null) {
			this.createdAt = "Date de publication : "+this.service.createdAt;			
		}
    
    this.events.subscribe('reloadAnnoncePage',() => {
     this.navCtrl.pop();
     this.navCtrl.push(AnnoncePage, { service : this.service });
    });
    
	}

	answerAnnonce(event, service) {
		this.navCtrl.push(AnswerPage, {
		  service: service
		});
	}
  
  openProfile(event, service) {
    this.navCtrl.push(ProfilePage, {
		  profileId: service.author.id
		});
	}

	checkTransaction(event, service) {
		this.navCtrl.push(CheckTransactionPage, {
		  service: service
		});
	}
}
