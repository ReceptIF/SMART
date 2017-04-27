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
var announces_provider_1 = require('../../providers/announces.provider');
var AnnouncesComponent = (function () {
    function AnnouncesComponent(announcesProvider) {
        var _this = this;
        this.announcesProvider = announcesProvider;
        this.announcesProvider.getAnnounces().then(function (announces) { _this.announces = announces; console.log(_this.announces); });
    }
    AnnouncesComponent = __decorate([
        core_1.Component({
            selector: 'announces-cmp',
            moduleId: module.id,
            templateUrl: 'announces.component.html',
            providers: [announces_provider_1.AnnounceProvider]
        }), 
        __metadata('design:paramtypes', [announces_provider_1.AnnounceProvider])
    ], AnnouncesComponent);
    return AnnouncesComponent;
}());
exports.AnnouncesComponent = AnnouncesComponent;
//# sourceMappingURL=announces.component.js.map