import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
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

	constructor(public navCtrl: NavController, public params:NavParams, private userProvider : UserProvider) {
    
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
			var minutes = this.service.estimatedTime;
			var time: number;
			var days;
			var hours;
			time = Math.trunc(minutes/60);
			if(time >= 24) {
				days = Math.trunc(time/24);
				hours = time % 24;
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
				this.estimatedTime = hours+"h"+minutes
			}
			else {
				this.estimatedTime = minutes+" min";
			}
		}

		if(this.service.createdAt != null) {
			this.createdAt = "Date de publication : "+this.service.createdAt;			
		}
	}

	answerAnnonce(event, service) {
		this.navCtrl.push(AnswerPage, {
		  service: service
		});
	}
}
