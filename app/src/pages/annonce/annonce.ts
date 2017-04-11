import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html'
})
export class AnnoncePage {
	
	service: Service;
	price: string;
	startTime: string;
	endTime: string;
	estimatedTime: string;
	creationTime: string;

	constructor(public navCtrl: NavController) {
		this.service= {	
			id:0, 
			price:12, 
			title:'Refaire la plomberie', 
			address:'Lyon 2ème',
			estimatedTime: 1440,
			endTime: "12/04/2017",
			creationTime: "12/02/2017",
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			type:{
				id:0,
				name:'Bricolage',
				icon:'build'
			}
		};
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
			
			this.estimatedTime = "Durée : " + this.estimatedTime;
		}

		if(this.service.creationTime != null) {
			this.creationTime = "Date de publication : "+this.service.creationTime;			
		}
	}	
}
