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
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
require("rxjs/add/operator/map");
var TransactionProvider = (function () {
    function TransactionProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    TransactionProvider.prototype.getTransactions = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transactions?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    TransactionProvider.prototype.getTransactionById = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.getTransactionBySeller = function (sellerId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transactions/seller/' + sellerId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.getTransactionByBuyer = function (buyerId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transactions/buyer/' + buyerId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.getTransactionsByAnnounce = function (announceId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transactions/announce/' + announceId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.getAcceptedTransaction = function (announceId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transaction/announce/' + announceId + '/accepted?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.postTransaction = function (transaction) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(app_constants_1.GlobalConstants.urlServer + '/transaction?token=' + ng2_cookies_1.Cookie.get('ahCookie'), transaction)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.acceptTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/accept?token=' + ng2_cookies_1.Cookie.get('ahCookie'), { accepterId: 1 })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.endTransaction = function (transactionId, comment) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/end' + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'), { accepterId: 1, comment: comment })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.closeTransaction = function (transactionId, comment) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/close' + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'), { accepterId: 1, comment: comment })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.cancelTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/cancel' + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'), { accepterId: 1 })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.deleteTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    return TransactionProvider;
}());
TransactionProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TransactionProvider);
exports.TransactionProvider = TransactionProvider;
//# sourceMappingURL=transactions.provider.js.map