import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})
export class RecherchePage {

  fromDate : any;
  constructor(public navCtrl: NavController) {
    this.fromDate = new Date().toISOString();
  }

}
