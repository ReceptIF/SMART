import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnnounceTypeProvider } from '../../providers/announceTypes.provider';
import { SearchedAnnouncesPage } from '../searchedAnnounces/searchedAnnounces';

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
  providers: [AnnounceTypeProvider]
})
export class RecherchePage {

  announceTypes: any;
  tags: any;
  category: number;
  search: any;

  fromDate : any;
  constructor(public navCtrl: NavController, private announceTypeProvider : AnnounceTypeProvider) {
    this.fromDate = new Date().toISOString();
    this.search = {};
    this.tags = "";
    this.category = -1;
	  this.announceTypeProvider.getAnnounceTypes().then( announceTypes => { this.announceTypes = announceTypes;});
  }

	buttonClicked(event) {
    if(!(this.category>0)){
      this.search = {
        tags: this.tags
      };
    }else{
      this.search = {
        tags: this.tags,
        category: this.category
      };
    }

		this.navCtrl.push(SearchedAnnouncesPage, {
		  search: this.search
		});
	}
}
