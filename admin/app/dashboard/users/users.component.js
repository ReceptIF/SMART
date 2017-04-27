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
var users_provider_1 = require('../../providers/users.provider');
var UsersComponent = (function () {
    function UsersComponent(userProvider) {
        var _this = this;
        this.userProvider = userProvider;
        this.userProvider.getUsers().then(function (users) { _this.users = users; });
    }
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users-cmp',
            moduleId: module.id,
            templateUrl: 'users.component.html',
            providers: [users_provider_1.UserProvider]
        }), 
        __metadata('design:paramtypes', [users_provider_1.UserProvider])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map