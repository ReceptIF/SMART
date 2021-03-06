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
var address_provider_1 = require("../../providers/address.provider");
var city_provider_1 = require("../../providers/city.provider");
var AddressComponent = (function () {
    function AddressComponent(route, addressProvider, cityProvider) {
        this.route = route;
        this.addressProvider = addressProvider;
        this.cityProvider = cityProvider;
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.addressProvider.getAddress(_this.id).then(function (address) { _this.address = address; console.log(_this.address); });
            _this.cityProvider.getCities().then(function (cities) { _this.cities = cities; console.log(_this.cities); });
        });
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    core_1.Component({
        selector: 'user-cmp',
        moduleId: module.id,
        templateUrl: 'address.component.html',
        providers: [address_provider_1.AddressProvider, city_provider_1.CityProvider]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        address_provider_1.AddressProvider,
        city_provider_1.CityProvider])
], AddressComponent);
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map