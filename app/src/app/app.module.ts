import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostAnnoncePage } from '../pages/postAnnonce/postAnnonce';
import { AnnoncePage } from '../pages/annonce/annonce';
import { AnswerPage } from '../pages/answer/answer';
import { RecherchePage } from '../pages/recherche/recherche';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnnoncePage,
    AnswerPage,
    LoginPage,
    AnnoncePage,
    RecherchePage,
    PostAnnoncePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnnoncePage,
    AnswerPage,
	  RecherchePage,
    AnnoncePage,
    LoginPage,
    PostAnnoncePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
