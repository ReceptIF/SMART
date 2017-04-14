import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AnnounceProvider } from '../../providers/announces.provider';
import { AnnounceTypeProvider } from '../../providers/announceTypes.provider';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-postAnnonce',
  templateUrl: 'postAnnonce.html',
  providers: [AnnounceProvider]
})
export class PostAnnoncePage {

  annonceType : boolean;
  announceTypes: Array<ServiceType>;

  title : string;
  description : string;
  categorie : number;
  price : number;
  address : number;
  startAt : string;
  endAt : string;
  estimatedTime : number;

  constructor(public navCtrl: NavController, private announceTypeProvider : AnnounceTypeProvider, public toastCtrl: ToastController, private announceProvider : AnnounceProvider, private alertCtrl: AlertController) {

    this.annonceType = false;
	this.announceTypeProvider.getAnnounceTypes().then( announceTypes => { this.announceTypes = announceTypes; console.log(this.announceTypes);});

  }

  changeType(type) {
    this.annonceType = type;
  }

  sendAnnonce() {
    if(this.title != null) {
      if(this.description != null) {
        if(this.categorie != null) {
          if(this.price != null) {
            if(this.address != null) {
              if(this.estimatedTime != null) {

                var annonce = {
                  price : this.price,
                  title : this.title,
                  description : this.description,
                  estimatedTime : this.estimatedTime,
                  startTime : this.startAt,
                  endTime : this.endAt,
                  address : this.address,
                  sale : false,
                  typeId : this.categorie,
                  authorId : 1
                };

                this.announceProvider.postAnnounce(annonce).then(response => {console.log(response)});
                
                let alert = this.alertCtrl.create({
                  title: 'Votre annonce a bien été enregistrée. Vous pouvez la consulter dans la rubrique "Mes Annonces".',
                  buttons: ['Ok']
                });
                alert.present();
                this.navCtrl.pop();
                
                console.log(annonce);

              } else { this.showToast("Vous devez indiquer à combien de temps vous estimez la réalisation de la tâche."); }
            } else { this.showToast("Vous devez choisir une de vos adresses pour indiquer où aura lieu le service."); }
          } else { this.showToast("Vous devez indiquer le prix de la prestation que vous demandez ou offrez."); }
        } else { this.showToast("Vous devez indiquer une catégorie pour que votre annonce soit plus facilement trouvée."); }
      } else { this.showToast("Vous devez entrer une description pour donner un peu plus de détails."); }
    } else { this.showToast("Vous devez entrer un titre pour valider votre annonce."); }
  }

  showToast(message : string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }

}
