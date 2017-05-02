import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/users.provider';

@Component({
  selector: 'page-pinCode',
  templateUrl: 'pinCode.html',
  providers: [UserProvider]
})
export class PinCodePage {

  service : Service;
  answer : any;
  connectedUser : any;

	constructor(public navCtrl: NavController, public params:NavParams,
  private userProvider:UserProvider) {
		
		this.service = params.get("service");
		this.answer = params.get("answer");
    
    this.userProvider.getConnectedUser().then(user => {
			this.connectedUser = user;
		});
    
	}
  
}
