import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})
export class AnswerPage {
	
	service: Service;

	constructor(public navCtrl: NavController, public params:NavParams) {
		this.service= params.get("item");
		
	}
}
