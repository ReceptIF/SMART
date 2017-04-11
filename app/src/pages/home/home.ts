import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any;
  items: Array<Service>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.selectedItem = navParams.get('item');

    this.items = [
      { id:0, price:12, title:'Refaire la plomberie', address:'K-Fêt, 20 avenue des Arts 69100 Villeurbanne', type:{id:0,name:'Bricolage',icon:'build'}}
    ];
    
  }

  itemTapped(event, item) {
    this.navCtrl.push(HomePage, {
      item: item
    });
  }
  
}
