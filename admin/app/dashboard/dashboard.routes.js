"use strict";
var login_component_1 = require("./login/login.component");
var users_component_1 = require("./users/users.component");
var home_component_1 = require("./home/home.component");
var announces_component_1 = require("./announces/announces.component");
var announcesTypes_component_1 = require("./announcesTypes/announcesTypes.component");
var announceType_component_1 = require("./announcesTypes/announceType/announceType.component");
var cities_component_1 = require("./cities/cities.component");
var user_component_1 = require("./users/user/user.component");
var icons_component_1 = require("./icons/icons.component");
var table_component_1 = require("./table/table.component");
var notifications_component_1 = require("./notifications/notifications.component");
var announcesTypes_component_2 = require("./announcesTypes/announcesTypes.component");
var address_component_1 = require("./address/address.component");
var announce_component_1 = require("./announces/announce/announce.component");
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'announces', component: announces_component_1.AnnouncesComponent },
    { path: 'announce/:id', component: announce_component_1.AnnounceComponent },
    { path: 'announcesTypes', component: announcesTypes_component_1.AnnouncesTypesComponent },
    { path: 'announceType/:id', component: announceType_component_1.AnnounceTypeComponent },
    { path: 'cities', component: cities_component_1.CitiesComponent },
    { path: 'user/:id', component: user_component_1.UserComponent },
    { path: 'address/:id', component: address_component_1.AddressComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    login_component_1.LoginComponent,
    home_component_1.HomeComponent,
    users_component_1.UsersComponent,
    announces_component_1.AnnouncesComponent,
    announce_component_1.AnnounceComponent,
    announcesTypes_component_1.AnnouncesTypesComponent,
    announceType_component_1.AnnounceTypeComponent,
    cities_component_1.CitiesComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    address_component_1.AddressComponent,
    announcesTypes_component_2.ConfirmModalComponent
];
//# sourceMappingURL=dashboard.routes.js.map