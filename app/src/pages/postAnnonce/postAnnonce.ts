import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AnnounceProvider } from '../../providers/announces.provider';
import { UserProvider } from '../../providers/users.provider';
import { AnnounceTypeProvider } from '../../providers/announceTypes.provider';
import { AddressProvider } from '../../providers/address.provider';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-postAnnonce',
  templateUrl: 'postAnnonce.html',
  providers: [AnnounceProvider, UserProvider, AddressProvider]
})
export class PostAnnoncePage {

  annonceType : boolean;
  announceTypes: any;

  title : string;
  description : string;
  categorie : number;
  price : number;
  address : number;
  minStartAt : string;
  startAt : string;
  endAt : string;
  estimatedTime : number;
  addresses : any;

  connectedUser : any;

  constructor(public navCtrl: NavController, private announceTypeProvider : AnnounceTypeProvider,
  private userProvider : UserProvider, public toastCtrl: ToastController, private announceProvider : AnnounceProvider,
  private alertCtrl: AlertController, private addressProvider : AddressProvider) {

    this.annonceType = false;
    this.addresses = [];
    this.minStartAt = new Date().toISOString();
    this.startAt = new Date().toISOString();
    this.announceTypeProvider.getAnnounceTypes().then( announceTypes => { this.announceTypes = announceTypes; console.log(this.announceTypes);});
    this.userProvider.getConnectedUser().then( user => {

      this.connectedUser = user;
      this.addressProvider.getAddressesByUser(this.connectedUser.id).then( addresses => {
        this.addresses = addresses;
      });
    });

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
                  addressId : this.address,
                  sale : this.annonceType,
                  closed: false,
                  typeId : this.categorie,
                  authorId : this.connectedUser.id
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
