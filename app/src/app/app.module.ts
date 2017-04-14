import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostAnnoncePage } from '../pages/postAnnonce/postAnnonce';
import { AnnoncePage } from '../pages/annonce/annonce';
import { MyAnnoncesPage } from '../pages/myAnnonces/myAnnonces';
import { AnswerPage } from '../pages/answer/answer';
import { RecherchePage } from '../pages/recherche/recherche';
import { LoginPage } from '../pages/login/login';
import { CheckTransactionPage } from '../pages/checkTransaction/checkTransaction';
import { TransactionModal } from '../pages/checkTransaction/transactionModal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnnounceProvider } from '../providers/announces.provider';
import { UserProvider } from '../providers/users.provider';
import { TransactionProvider } from '../providers/transactions.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnnoncePage,
    AnswerPage,
    MyAnnoncesPage,
    LoginPage,
    AnnoncePage,
    RecherchePage,
    PostAnnoncePage,
    CheckTransactionPage,
    TransactionModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnnoncePage,
	  MyAnnoncesPage,
    AnswerPage,
	  RecherchePage,
    AnnoncePage,
    LoginPage,
    PostAnnoncePage,
    CheckTransactionPage,
    TransactionModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AnnounceProvider,
    UserProvider,
    TransactionProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
