import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MyAnnoncesPage } from '../pages/myAnnonces/myAnnonces';
import { PostAnnoncePage } from '../pages/postAnnonce/postAnnonce';
import { LoginPage } from '../pages/login/login';
import { RecherchePage } from '../pages/recherche/recherche';

import { UserProvider } from '../providers/users.provider';

@Component({
  templateUrl: 'app.html',
  providers: [UserProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage
  pages: Array<{title: string, component: any}>;
  
  connectedUser : User;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private userProvider : UserProvider) {
    this.initializeApp();
    this.connectedUser = { id:1, email:'denis.brogniard@gmail.com', firstName:'Denis', lastName : 'BROGNIART', ahAmont: 42 };
    //this.userProvider.getUser(1).then(user => {this.connectedUser = user; console.log(user)});

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
	    { title: 'Recherche', component: RecherchePage },
	    { title: 'Mes Annonces', component: MyAnnoncesPage },
      { title: 'Login', component: LoginPage },
      { title: 'Poster une annonce', component: PostAnnoncePage }
    ];

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
