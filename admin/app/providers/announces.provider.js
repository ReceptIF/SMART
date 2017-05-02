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
var AnnounceProvider = (function () {
    function AnnounceProvider(http) {
        this.http = http;
        this.cachedAnnounces = this.getAnnounces();
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    AnnounceProvider.prototype.getAnnounces = function () {
        var _this = this;
        if (this.cachedAnnounces) {
            return Promise.resolve(this.cachedAnnounces);
        }
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/announces')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cachedAnnounces = data;
                resolve(_this.cachedAnnounces);
            });
        });
    };
    AnnounceProvider.prototype.getAnnounce = function (announceId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/announce/' + announceId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AnnounceProvider.prototype.getAnnounceByUser = function (userId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/announces/by/' + userId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AnnounceProvider.prototype.postAnnounce = function (announce) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(app_constants_1.GlobalConstants.urlServer + '/announce', announce)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AnnounceProvider.prototype.putAnnounce = function (announce) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/announce', announce)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    AnnounceProvider.prototype.deleteAnnounce = function (announceId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(app_constants_1.GlobalConstants.urlServer + '/announce/' + announceId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    return AnnounceProvider;
}());
AnnounceProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AnnounceProvider);
exports.AnnounceProvider = AnnounceProvider;
//# sourceMappingURL=announces.provider.js.map