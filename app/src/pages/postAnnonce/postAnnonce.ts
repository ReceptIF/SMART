import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-postAnnonce',
  templateUrl: 'postAnnonce.html'
})
export class PostAnnoncePage {

  annonceType : boolean;

  constructor(public navCtrl: NavController) {
    
    this.annonceType = false;
    
  }
  
  changeType(type) {
    this.annonceType = type;
  }

}
