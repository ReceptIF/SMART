import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})
export class AnswerPage {
	
	service: Service;

	constructor(public navCtrl: NavController, public params:NavParams, private alertCtrl: AlertController) {
		this.service= params.get("service");
	}
	
	sendAnswer() {
		let alert = this.alertCtrl.create({
			title: 'Message envoyé',
			buttons: ['Ok']
		});
		alert.present();
     this.navCtrl.pop();
	}
}
