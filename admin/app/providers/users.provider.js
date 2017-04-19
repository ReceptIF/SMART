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
var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
    }
    UserProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/users')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    UserProvider.prototype.getUser = function (userId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/user/' + userId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    UserProvider.prototype.getConnectedUser = function () {
        return this.getUser(1);
    };
    UserProvider.prototype.postUser = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(app_constants_1.GlobalConstants.urlServer + '/user', user)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    UserProvider.prototype.putUser = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/user', user)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    UserProvider.prototype.deleteUser = function (userId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(app_constants_1.GlobalConstants.urlServer + '/user/' + userId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    UserProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserProvider);
    return UserProvider;
}());
exports.UserProvider = UserProvider;
//# sourceMappingURL=users.provider.js.map