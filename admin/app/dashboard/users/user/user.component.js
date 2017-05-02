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
var users_provider_1 = require("../../../providers/users.provider");
var address_provider_1 = require("../../../providers/address.provider");
var city_provider_1 = require("../../../providers/city.provider");
var announces_provider_1 = require("../../../providers/announces.provider");
var announceTypes_provider_1 = require("../../../providers/announceTypes.provider");
var UserComponent = (function () {
    function UserComponent(route, userProvider, addressProvider, cityProvider, announceProvider, announceTypeProvider) {
        this.route = route;
        this.userProvider = userProvider;
        this.addressProvider = addressProvider;
        this.cityProvider = cityProvider;
        this.announceProvider = announceProvider;
        this.announceTypeProvider = announceTypeProvider;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.userProvider.getUser(_this.id).then(function (user) { _this.user = user; console.log(_this.user); });
            _this.addressProvider.getAddressesByUser(_this.id).then(function (addresses) { _this.addresses = addresses; console.log(_this.addresses); });
            _this.cityProvider.getCities().then(function (cities) { _this.cities = cities; console.log(_this.cities); });
            _this.announceProvider.getAnnounceByUser(_this.id).then(function (announces) { _this.announces = announces; console.log(_this.announces); });
            _this.announceTypeProvider.getAnnounceTypes().then(function (types) { _this.types = types; console.log(_this.types); });
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-cmp',
        moduleId: module.id,
        templateUrl: 'user.component.html',
        providers: [users_provider_1.UserProvider, address_provider_1.AddressProvider, city_provider_1.CityProvider, announces_provider_1.AnnounceProvider, announceTypes_provider_1.AnnounceTypeProvider]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        users_provider_1.UserProvider,
        address_provider_1.AddressProvider,
        city_provider_1.CityProvider,
        announces_provider_1.AnnounceProvider,
        announceTypes_provider_1.AnnounceTypeProvider])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map