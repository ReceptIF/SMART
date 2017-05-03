"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var dashboard_routes_1 = require("./dashboard.routes");
var announcesTypes_component_1 = require("./announcesTypes/announcesTypes.component");
var users_provider_1 = require("../providers/users.provider");
var announces_provider_1 = require("../providers/announces.provider");
var announceTypes_provider_1 = require("../providers/announceTypes.provider");
var city_provider_1 = require("../providers/city.provider");
var authentification_provider_1 = require("../providers/authentification.provider");
var material_1 = require("@angular/material");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            material_1.MdButtonModule,
            material_1.MdDialogModule,
            material_1.MdCheckboxModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS],
        providers: [
            users_provider_1.UserProvider,
            announces_provider_1.AnnounceProvider,
            announceTypes_provider_1.AnnounceTypeProvider,
            city_provider_1.CityProvider,
            authentification_provider_1.AuthentificationProvider
        ],
        entryComponents: [announcesTypes_component_1.ConfirmModalComponent]
    }),
    __metadata("design:paramtypes", [])
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map