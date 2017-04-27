import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MyAnnoncesPage } from '../pages/myAnnonces/myAnnonces';
import { PostAnnoncePage } from '../pages/postAnnonce/postAnnonce';
import { LoginPage } from '../pages/login/login';
import { RecherchePage } from '../pages/recherche/recherche';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationsPage } from '../pages/notifications/notifications';

import { UserProvider } from '../providers/users.provider';
import { NotificationProvider } from '../providers/notifications.provider';

@Component({
  templateUrl: 'app.html',
  providers: [UserProvider,NotificationProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  //connectedUser : User; TODO MAJ Interface to fit
  connectedUser : any;
  notifNumber : any;
  notifications : any;

  constructor(public platform: Platform, public statusBar: StatusBar, 
        public splashScreen: SplashScreen, private userProvider : UserProvider,
        private notificationProvider : NotificationProvider) {
    this.initializeApp();
    this.notifications = [];
    
    this.userProvider.getUser(1).then(user => {
      
      this.connectedUser = user;
      this.notificationProvider.getNotificationsByUser(this.connectedUser.id).then(
        notifs => { 
          this.notifications = notifs;
          this.notifications = this.notifications.filter( notif => {
              return !notif.read;
          });
          this.notifNumber = this.notifications.length;
      });
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'A la une', component: HomePage },
	    { title: 'Mes Annonces', component: MyAnnoncesPage },
      { title: 'Poster une annonce', component: PostAnnoncePage },
	    { title: 'Recherche', component: RecherchePage },
      { title: 'Login', component: LoginPage }
    ];

  }
  
  goToPersonalProfile() {
    this.nav.setRoot(ProfilePage);
  }
  
  goToSearch() {
    this.nav.setRoot(RecherchePage);
  }
  
  goToNotif() {
    this.nav.setRoot(NotificationsPage);
  }
  
  logout() {
    this.nav.setRoot(LoginPage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
