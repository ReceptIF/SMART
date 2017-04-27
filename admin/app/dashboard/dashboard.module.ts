import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

import { UserProvider } from '../providers/users.provider';
import { AnnounceProvider } from '../providers/announces.provider';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        BrowserModule,
        HttpModule
    ],
    declarations: [ MODULE_COMPONENTS ],
    providers: [
        UserProvider,
        AnnounceProvider
    ]
})

export class DashboardModule{}
