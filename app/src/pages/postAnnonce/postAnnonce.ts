import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-postAnnonce',
  templateUrl: 'postAnnonce.html'
})
export class PostAnnoncePage {

  annonceType : boolean;
  
  title : string;
  description : string;
  categorie : number;
  price : number;
  address : number;
  startAt : string;
  endAt : string;
  estimatedTime : number;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
    this.annonceType = false;
    
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
                  sale : false
                };
                
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
