import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AnnouncesComponent } from './announces/announces.component';
import { AnnouncesTypesComponent } from './announcesTypes/announcesTypes.component';
import { CitiesComponent } from './cities/cities.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MapsComponent } from './maps/maps.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'announces', component: AnnouncesComponent },
    { path: 'announcesTypes', component: AnnouncesTypesComponent },
    { path: 'cities', component: CitiesComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'maps', component: MapsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UsersComponent,
    AnnouncesComponent,
    AnnouncesTypesComponent,
    CitiesComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    MapsComponent
]
