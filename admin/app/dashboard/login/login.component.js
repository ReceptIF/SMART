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
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var authentification_provider_1 = require("../../providers/authentification.provider");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(authentificationProvider, router) {
        this.authentificationProvider = authentificationProvider;
        this.router = router;
    }
    LoginComponent.prototype.test = function () { console.log(this.email, this.pass); };
    ;
    LoginComponent.prototype.connect = function () {
        var _this = this;
        var connect = {
            email: this.email,
            password: null
        };
        var password = this.pass;
        password = this.hash(password, this.email);
        connect.password = password;
        console.log(connect);
        this.authentificationProvider.loginAdmin(connect).then(function (data) {
            var ret;
            ret = data;
            if (ret.success) {
                ng2_cookies_1.Cookie.set('ahCookie', ret.token);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.replaceAt = function (string, index, replacement) {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    };
    LoginComponent.prototype.hash = function (code, mail) {
        var size = code.length;
        if (size == 0) {
            return code;
        }
        var text1 = "DenisBRONIART";
        var text2 = "CabanesPasConstruites";
        var hash = "";
        for (var i = 0; i < mail.length; i++) {
            var value = text1.charCodeAt(12 - i % 13);
            value += mail.charCodeAt(i);
            value /= 2;
            value = Math.round(value);
            hash += String.fromCharCode(value);
        }
        var text3 = hash.substr(code.length);
        for (var i = 0; i < text3.length; i++) {
            var value = text2.charCodeAt(20 - i % 21);
            value += code.charCodeAt(text3);
            value /= 2;
            value = Math.round(value);
            hash += String.fromCharCode(value);
        }
        var text4 = text1 + code + text2;
        for (var i = 0; i < text4.length; i += size % 4) {
            var value = text4.charCodeAt(i);
            value += mail.charCodeAt(i % mail.length);
            value = Math.round(mail.size * value / size);
            value = (value % 93) + 33;
            this.replaceAt(hash, i % hash.length, String.fromCharCode(value));
        }
        return hash;
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-cmp',
        moduleId: module.id,
        templateUrl: 'login.component.html',
        providers: [authentification_provider_1.AuthentificationProvider]
    }),
    __metadata("design:paramtypes", [authentification_provider_1.AuthentificationProvider, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map