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
var http_1 = require("@angular/http");
var app_constants_1 = require("../app.constants");
require("rxjs/add/operator/map");
var AnnounceTypeProvider = (function () {
    function AnnounceTypeProvider(http) {
        this.http = http;
        this.cachedAnnounceTypes = this.getAnnounceTypes();
    }
    AnnounceTypeProvider.prototype.getAnnounceTypes = function () {
        var _this = this;
        if (this.cachedAnnounceTypes) {
            return Promise.resolve(this.cachedAnnounceTypes);
        }
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/announceTypes')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cachedAnnounceTypes = data;
                resolve(_this.cachedAnnounceTypes);
            });
        });
    };
    AnnounceTypeProvider.prototype.getAnnounceType = function (announceTypeId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/announceType/' + announceTypeId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AnnounceTypeProvider.prototype.deleteAnnounceType = function (announceTypeId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(app_constants_1.GlobalConstants.urlServer + '/announceType/' + announceTypeId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    return AnnounceTypeProvider;
}());
AnnounceTypeProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AnnounceTypeProvider);
exports.AnnounceTypeProvider = AnnounceTypeProvider;
//# sourceMappingURL=announceTypes.provider.js.map