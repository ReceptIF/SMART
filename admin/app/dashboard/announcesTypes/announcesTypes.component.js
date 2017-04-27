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
var announceTypes_provider_1 = require('../../providers/announceTypes.provider');
var AnnouncesTypesComponent = (function () {
    function AnnouncesTypesComponent(announceTypeProvider) {
        var _this = this;
        this.announceTypeProvider = announceTypeProvider;
        this.announceTypeProvider.getAnnounceTypes().then(function (announcesTypes) { _this.announcesTypes = announcesTypes; });
    }
    AnnouncesTypesComponent = __decorate([
        core_1.Component({
            selector: 'announcesTypes-cmp',
            moduleId: module.id,
            templateUrl: 'announcesTypes.component.html',
            providers: [announceTypes_provider_1.AnnounceTypeProvider]
        }), 
        __metadata('design:paramtypes', [announceTypes_provider_1.AnnounceTypeProvider])
    ], AnnouncesTypesComponent);
    return AnnouncesTypesComponent;
}());
exports.AnnouncesTypesComponent = AnnouncesTypesComponent;
//# sourceMappingURL=announcesTypes.component.js.map