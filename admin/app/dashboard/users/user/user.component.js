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
var announces_provider_1 = require("../../../providers/announces.provider");
var UserComponent = (function () {
    function UserComponent(route, userProvider, addressProvider, announceProvider) {
        this.route = route;
        this.userProvider = userProvider;
        this.addressProvider = addressProvider;
        this.announceProvider = announceProvider;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.userProvider.getUser(_this.id).then(function (user) { _this.user = user; });
            _this.addressProvider.getAddressesByUser(_this.id).then(function (addresses) { _this.addresses = addresses; });
            _this.announceProvider.getAnnounceByUser(_this.id).then(function (announces) { _this.announces = announces; });
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-cmp',
        moduleId: module.id,
        templateUrl: 'user.component.html',
        providers: [users_provider_1.UserProvider, address_provider_1.AddressProvider, announces_provider_1.AnnounceProvider]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        users_provider_1.UserProvider,
        address_provider_1.AddressProvider,
        announces_provider_1.AnnounceProvider])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map