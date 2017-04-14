import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnnounceTypeProvider } from '../../providers/announceTypes.provider';

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
  providers: [AnnounceTypeProvider]
})
export class RecherchePage {
	
  announceTypes: Array<ServiceType>;

  fromDate : any;
  constructor(public navCtrl: NavController, private announceTypeProvider : AnnounceTypeProvider) {
    this.fromDate = new Date().toISOString();
	this.announceTypeProvider.getAnnounceTypes().then( announceTypes => { this.announceTypes = announceTypes; console.log(this.announceTypes);});
	
  }
}
