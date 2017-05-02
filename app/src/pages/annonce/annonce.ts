import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
import { ProfilePage } from '../profile/profile';
import { CheckTransactionPage } from '../checkTransaction/checkTransaction';
import { PinCodePage } from '../pinCode/pinCode';
import { UserProvider } from '../../providers/users.provider';
import { TransactionProvider } from '../../providers/transactions.provider';

@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html',
  providers: [UserProvider, TransactionProvider]
})
export class AnnoncePage {
	
	service: Service;
	price: string;
	startTime: string;
	endTime: string;
	estimatedTime: string;
	createdAt: string;
  acceptedTransaction : any;
  
  connectedUser : any;

	constructor(public navCtrl: NavController, public params:NavParams, 
			private userProvider : UserProvider, private events : Events, 
			private transactionProvider : TransactionProvider) {
    
		this.service= params.get("item");
    
		this.userProvider.getConnectedUser().then(user => {
			this.connectedUser = user;
		});
		
		this.transactionProvider.getAcceptedTransaction(this.service.id).then(
			transaction => { 
				var t; 
				t = transaction; 
				if(t.id) { 
					this.acceptedTransaction = transaction; 
				} else { 
					this.acceptedTransaction = null; 
				} 
			}
		);

		this.price = this.service.price + " AH !";
		
		if(this.service.startTime != null) {
			this.startTime = "Date de début : "+this.service.startTime;			
		}
		
		if(this.service.endTime != null) {
			this.endTime = "Date de fin : "+this.service.endTime;			
		}

		if(this.service.estimatedTime != null) {
			var time: number;
			time = this.service.estimatedTime;
      
      var days;
      var heures;
      var minutes;
      
      days = Math.trunc(time/(24*3600));
      time = time - days*(24*3600);
      
      heures = Math.trunc(time/(60));
      minutes = time - heures*60;
      
      this.estimatedTime = "";
      if(days > 0) { this.estimatedTime += days + " jour"; if(days > 1) { this.estimatedTime += "s"; } this.estimatedTime += " ";} 
      if(heures > 0) { this.estimatedTime += heures + " heure"; if(heures > 1) { this.estimatedTime += "s"; } this.estimatedTime += " ";} 
      if(minutes > 0) { this.estimatedTime += minutes + " minute"; if(minutes > 1) { this.estimatedTime += "s"; } this.estimatedTime += " ";} 
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

	goToPinCode(event, service) {
		this.navCtrl.push(PinCodePage, {
		  service: service,
      answer : this.acceptedTransaction
		});
	}
}
