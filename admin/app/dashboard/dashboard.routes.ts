import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AnnouncesComponent } from './announces/announces.component';
import { AnnouncesTypesComponent } from './announcesTypes/announcesTypes.component';
import { AnnounceTypeComponent } from './announcesTypes/announceType/announceType.component';
import { CitiesComponent } from './cities/cities.component';
import { UserComponent } from './users/user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConfirmModalComponent } from './announcesTypes/announcesTypes.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'announces', component: AnnouncesComponent },
    { path: 'announcesTypes', component: AnnouncesTypesComponent },
    { path: 'announceType/:id', component: AnnounceTypeComponent },
    { path: 'cities', component: CitiesComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UsersComponent,
    AnnouncesComponent,
    AnnouncesTypesComponent,
    AnnounceTypeComponent,
    CitiesComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,

    ConfirmModalComponent
]
