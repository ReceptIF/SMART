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
import { SearchedAnnouncesPage } from '../pages/searchedAnnounces/searchedAnnounces';
import { RecherchePage } from '../pages/recherche/recherche';
import { LoginPage } from '../pages/login/login';
import { CheckTransactionPage } from '../pages/checkTransaction/checkTransaction';
import { TransactionModal } from '../pages/checkTransaction/transactionModal';
import { PinCodePage } from '../pages/pinCode/pinCode';
import { ProfilePage } from '../pages/profile/profile';
import { ModifyProfilePage } from '../pages/modifyProfile/modifyProfile';
import { MyAddressesPage } from '../pages/myAddresses/myAddresses';
import { AddressModal } from '../pages/myAddresses/addressModal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnnounceProvider } from '../providers/announces.provider';
import { AnnounceTypeProvider } from '../providers/announceTypes.provider';
import { UserProvider } from '../providers/users.provider';
import { TransactionProvider } from '../providers/transactions.provider';
import { CommentProvider } from '../providers/comments.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnnoncePage,
    AnswerPage,
    MyAnnoncesPage,
	SearchedAnnouncesPage,
    LoginPage,
    AnnoncePage,
    RecherchePage,
    PostAnnoncePage,
    CheckTransactionPage,
    TransactionModal,
    PinCodePage,
    ProfilePage,
	ModifyProfilePage,
    MyAddressesPage,
    AddressModal
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
	SearchedAnnouncesPage,
    AnnoncePage,
    LoginPage,
    PostAnnoncePage,
    CheckTransactionPage,
    TransactionModal,
    PinCodePage,
    ProfilePage,
	ModifyProfilePage,
    MyAddressesPage,
    AddressModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AnnounceProvider,
    AnnounceTypeProvider,
    UserProvider,
    TransactionProvider,,
    CommentProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
