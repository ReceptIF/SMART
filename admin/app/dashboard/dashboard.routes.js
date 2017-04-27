"use strict";
var users_component_1 = require('./users/users.component');
var home_component_1 = require('./home/home.component');
var announces_component_1 = require('./announces/announces.component');
var announcesTypes_component_1 = require('./announcesTypes/announcesTypes.component');
var cities_component_1 = require('./cities/cities.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
var maps_component_1 = require('./maps/maps.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'announces', component: announces_component_1.AnnouncesComponent },
    { path: 'announcesTypes', component: announcesTypes_component_1.AnnouncesTypesComponent },
    { path: 'cities', component: cities_component_1.CitiesComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    users_component_1.UsersComponent,
    announces_component_1.AnnouncesComponent,
    announcesTypes_component_1.AnnouncesTypesComponent,
    cities_component_1.CitiesComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    maps_component_1.MapsComponent
];
//# sourceMappingURL=dashboard.routes.js.map