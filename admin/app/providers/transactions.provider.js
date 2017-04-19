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
var TransactionProvider = (function () {
    function TransactionProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    TransactionProvider.prototype.getTransactions = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transactions')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    TransactionProvider.prototype.getTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.postTransaction = function (transaction) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(app_constants_1.GlobalConstants.urlServer + '/transaction', transaction)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.acceptTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/accept', {})
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.endTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/end', {})
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.closeTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/close', {})
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.cancelTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId + '/cancel', {})
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider.prototype.deleteTransaction = function (transactionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(app_constants_1.GlobalConstants.urlServer + '/transaction/' + transactionId)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    TransactionProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TransactionProvider);
    return TransactionProvider;
}());
exports.TransactionProvider = TransactionProvider;
//# sourceMappingURL=transactions.provider.js.map