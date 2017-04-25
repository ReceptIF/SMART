import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pinCode',
  templateUrl: 'pinCode.html'
})
export class PinCodePage {

  service : Service;
  answer : any;

	constructor(public navCtrl: NavController, public params:NavParams) {
		
		this.service = params.get("service");
		this.answer = params.get("answer");
    
	}
  
}
