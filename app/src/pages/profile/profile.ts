import { Component } from '@angular/core';
import _ from "lodash";
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/users.provider';
import { AnnounceProvider } from '../../providers/announces.provider';
import { TransactionProvider } from '../../providers/transactions.provider';
import { CommentProvider } from '../../providers/comments.provider';
import { AnnoncePage } from '../annonce/annonce';
import { MyAnnoncesPage } from '../myAnnonces/myAnnonces';
import { MyAddressesPage } from '../myAddresses/myAddresses';
import { MyAnswersPage } from '../myAnswers/myAnswers';
import { ModifyProfilePage } from '../modifyProfile/modifyProfile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [UserProvider, CommentProvider, TransactionProvider]
})
export class ProfilePage {

	connectedUser: any;
	profileUser: any;
	profileId : number;
	 
	nbAnnounce : number;
	nbService : number;
	  
	services : any;
	transactions : any;
	comments : any;
  
  note : any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, 
	private announceProvider: AnnounceProvider, private commentProvider : CommentProvider, private transactionProvider : TransactionProvider) {
  
		if(navParams.get("profileId")) {
			this.profileId = navParams.get("profileId");
		} else {
			this.profileId = -1;
		}
		
		this.profileUser = {};
		this.connectedUser = {};
		this.services = [];
		this.comments = [];
		
		this.nbService = 0;
  
		this.userProvider.getConnectedUser().then( user => {
			this.connectedUser = user;
			if(this.profileId < 0) { this.profileId = this.connectedUser.id; }
			this.userProvider.getUser(this.profileId).then(
				user => {
					this.profileUser = user;
					this.announceProvider.getAnnounceByUser(this.profileUser.id).then(
						announces => {
							this.services = announces;
							this.nbAnnounce = this.services.length;
							for(var i = this.services.length - 1; i >= 0; i--) {
								if(this.services[i].closed) {
									this.services.splice(i, 1);
								}
							}
						}
					);
					this.commentProvider.getCommentByTarget(this.profileUser.id).then(
						comments => {
							this.comments = comments;
              this.calculNote(comments);
						}
					);
					this.transactionProvider.getTransactionByBuyer(this.profileUser.id).then(
						transactions => {
							this.transactions = transactions;
							for(var i = 0; i<this.transactions.length; i++) {
								if(this.transactions[i].status == 3) {
									this.nbService ++;
								}
							}
						}
					);
					this.transactionProvider.getTransactionBySeller(this.profileUser.id).then(
						transactions => {
							this.transactions = transactions;
							for(var i = 0; i<this.transactions.length; i++) {
								if(this.transactions[i].status == 3) {
									this.nbService ++;
								}
							}
						}
					);
				}
			);
		});
	}
  
  calculNote(comments) {
    var calcul : number;
    calcul = 0;
    
    _.forEach(comments, comment => {
      calcul += comment.note;
    });
    
    if(calcul != 0) {
      calcul /= comments.length;
    }
    
    calcul = Math.round(calcul*10)/10;
    console.log(calcul);
    this.note = calcul;
    
  }

	itemTapped(event, item) {
		this.navCtrl.push(AnnoncePage, {
		item: item
		});
	}

	showMyAnnounces() {
		this.navCtrl.push(MyAnnoncesPage);
	}

	showMyAnswers() {
		this.navCtrl.push(MyAnswersPage);
	}

	editAddresses() {
		this.navCtrl.push(MyAddressesPage);
	}

	editProfile() {
		this.navCtrl.push(ModifyProfilePage, {
			profileId: this.profileId
		});
	}
  
	goToProfile(profileId) {
		this.navCtrl.push(ProfilePage, {
			profileId: profileId
		});
	}
}
