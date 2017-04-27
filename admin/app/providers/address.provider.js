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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_constants_1 = require('../app.constants');
require('rxjs/add/operator/map');
var AddressProvider = (function () {
    function AddressProvider(http) {
        this.http = http;
        this.cachedAddresses = this.getAddresses();
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    AddressProvider.prototype.getAddresses = function () {
        var _this = this;
        if (this.cachedAddresses) {
            return Promise.resolve(this.cachedAddresses);
        }
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/addresses')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cachedAddresses = data;
                resolve(_this.cachedAddresses);
            });
        });
    };
    AddressProvider.prototype.getAddress = function (addressId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/address/' + addressId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AddressProvider.prototype.getAddressesByUser = function (userId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/addresses/user/' + userId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AddressProvider.prototype.postAddress = function (address) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(app_constants_1.GlobalConstants.urlServer + '/address', address)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AddressProvider.prototype.putAddress = function (address) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/address', address)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AddressProvider.prototype.deleteAddress = function (addressId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(app_constants_1.GlobalConstants.urlServer + '/address/' + addressId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AddressProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddressProvider);
    return AddressProvider;
}());
exports.AddressProvider = AddressProvider;
//# sourceMappingURL=address.provider.js.map