import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

import { ConfirmModalComponent } from './announcesTypes/announcesTypes.component';

import { UserProvider } from '../providers/users.provider';
import { AnnounceProvider } from '../providers/announces.provider';
import { AnnounceTypeProvider } from '../providers/announceTypes.provider';
import { CityProvider } from '../providers/city.provider';
import { MdDialogModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        BrowserModule,
        HttpModule,
        MdButtonModule,
        MdDialogModule,
        MdCheckboxModule,
        BrowserAnimationsModule
    ],
    declarations: [ MODULE_COMPONENTS ],
    providers: [
        UserProvider,
        AnnounceProvider,
        AnnounceTypeProvider,
        CityProvider,
    ],
    entryComponents: [ConfirmModalComponent]
})

export class DashboardModule{}
