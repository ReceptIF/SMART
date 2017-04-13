import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';
import { AnnounceProvider } from '../../providers/announces.provider';

@Component({
  selector: 'page-myAnnonces',
  templateUrl: 'myAnnonces.html',
  providers: [AnnounceProvider]
})
export class MyAnnoncesPage {

  selectedItem: any;
  items: Array<Service>;
  itemsClosed: Array<Service>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private announceProvider : AnnounceProvider) {

    this.selectedItem = navParams.get('item');
    
    this.items = [];
    this.itemsClosed = [];
    this.items.push(this.getItem(0));
    this.itemsClosed.push(this.getItem(1));
    
    //this.announceProvider.getAnnounces().then(announces => {this.items = announces; console.log(announces)});

  }

  itemTapped(event, item) {
    this.navCtrl.push(AnnoncePage, {
      item: item
    });
  }

  getItem(id) {

    var ret = [
      {
        id:0,
        price:12,
        title:'Refaire la plomberie',
        description:'J\'ai quelques tuyaux bouchés',
        estimatedTime:35,
        startTime:'01/04/2017',
        endTime:'01/05/2017',
        creationTime:'01/04/2017',
        address:'Campus de la Doua, Villeurbanne',
        coordX:45.7831199,
        coordY:4.87103,
        bool:false,
        type:{id:0,name:'Bricolage',icon:'tinkering'}
      },{
        id:1,
        price:5,
        title:'Cours de français 3ème',
        description:'Mon fils est sur le point de rater son brevet, il ne connaît pas les anaphores.',
        estimatedTime:120,
        startTime:'01/04/2017',
        endTime:'01/05/2017',
        creationTime:'01/04/2017',
        address:'Les Terreaux, Lyon',
        coordX:45.765501,
        coordY:4.8275544,
        bool:false,
        type:{id:1,name:'Soutien scolaire',icon:'study'}
      },{
        id:2,
        price:13,
        title:'Me ramener une baguette',
        description:'Je me suis cassée la hanche. J\'ai donc besoin que quelqu\'un aille me chercher du pain à ma place pour mes tartines de fromage fondu.',
        estimatedTime:30,
        startTime:'01/04/2017',
        endTime:'01/05/2017',
        creationTime:'01/04/2017',
        address:'Etats-Unis, Lyon',
        coordX:45.7324045,
        coordY:4.8635009,
        bool:false,
        type:{id:2,name:'Courses',icon:'shop'}
      },{
        id:3,
        price:17,
        title:'Peindre la chambre de mon fils John',
        description:'Mon fils John va bientôt naître mais je n\'ai pas les capacités techniques pour réaliser cette tâche. Il n\'y a que 24m² à peindre.',
        estimatedTime:360,
        startTime:'01/04/2017',
        endTime:'01/05/2017',
        creationTime:'01/04/2017',
        address:'Le Mollard, Décines-Charpieu',
        coordX:45.7687207,
        coordY:4.9622913,
        bool:false,
        type:{id:0,name:'Bricolage',icon:'tinkering'}
      },{
        id:4,
        price:7,
        title:'Recherche clown pour anniversaire',
        description:'Ma fille aînée Mélissa va bientôt fêter ses 4 ans et elle a décidé d\'inviter toutes ses copines à son anniversaire !. Il me faudrait quelqu\'un de confiance pour animer les enfants. Pédophiles s\'abstenir.',
        estimatedTime:340,
        startTime:'01/04/2017',
        endTime:'01/05/2017',
        creationTime:'01/04/2017',
        address:'Montchat, Lyon',
        coordX:45.7538855,
        coordY:4.8763748,
        bool:false,
        type:{id:3,name:'Garde d\enfants',icon:'child'}
      }
    ];

    return ret[id];

  }

}
