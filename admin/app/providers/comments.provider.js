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
var CommentProvider = (function () {
    function CommentProvider(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    CommentProvider.prototype.getComments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/comments' + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CommentProvider.prototype.getCommentById = function (commentId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/comment/' + commentId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    CommentProvider.prototype.getCommentByAuthor = function (authorId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/comments/author/' + authorId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    CommentProvider.prototype.getCommentByTarget = function (targetId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(app_constants_1.GlobalConstants.urlServer + '/comments/target/' + targetId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    CommentProvider.prototype.postComment = function (comment) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(app_constants_1.GlobalConstants.urlServer + '/comment' + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'), comment)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    CommentProvider.prototype.putComment = function (comment) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(app_constants_1.GlobalConstants.urlServer + '/comment' + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'), comment)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    CommentProvider.prototype.deleteComment = function (commentId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(app_constants_1.GlobalConstants.urlServer + '/comment/' + commentId + '?token=' + ng2_cookies_1.Cookie.get('ahCookie'))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); });
        });
    };
    return CommentProvider;
}());
CommentProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CommentProvider);
exports.CommentProvider = CommentProvider;
//# sourceMappingURL=comments.provider.js.map