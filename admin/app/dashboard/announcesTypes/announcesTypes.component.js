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
var material_1 = require("@angular/material");
var announceTypes_provider_1 = require("../../providers/announceTypes.provider");
var AnnouncesTypesComponent = (function () {
    function AnnouncesTypesComponent(announceTypeProvider, dialog) {
        var _this = this;
        this.dialog = dialog;
        this.announceTypeProvider = announceTypeProvider;
        this.announceTypeProvider.getAnnounceTypes().then(function (announcesTypes) { _this.announcesTypes = announcesTypes; });
    }
    AnnouncesTypesComponent.prototype.deleteAnnounceType = function (announceTypeId) {
        var _this = this;
        this.dialogRef = this.dialog.open(ConfirmModalComponent);
        this.dialogRef.afterClosed().subscribe(function (code) {
            switch (code) {
                case 1:
                    _this.announceTypeProvider.deleteAnnounceType(announceTypeId).then(function (result) {
                        _this.announceTypeProvider.getAnnounceTypes().then(function (announcesTypes) { _this.announcesTypes = announcesTypes; });
                    });
                    break;
            }
            _this.dialogRef = null;
        });
    };
    return AnnouncesTypesComponent;
}());
AnnouncesTypesComponent = __decorate([
    core_1.Component({
        selector: 'announcesTypes-cmp',
        moduleId: module.id,
        templateUrl: 'announcesTypes.component.html',
        providers: [announceTypes_provider_1.AnnounceTypeProvider]
    }),
    __metadata("design:paramtypes", [announceTypes_provider_1.AnnounceTypeProvider, material_1.MdDialog])
], AnnouncesTypesComponent);
exports.AnnouncesTypesComponent = AnnouncesTypesComponent;
var ConfirmModalComponent = (function () {
    function ConfirmModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ConfirmModalComponent;
}());
ConfirmModalComponent = __decorate([
    core_1.Component({
        selector: 'confirm-modal',
        template: "\n        <h2>Voulez-vous vraiment supprimer cet \u00E9l\u00E9ment ?</h2>\n        <button class=\"btn btn-danger\" md-raised-button (click)=\"dialogRef.close(1)\">Supprimer</button>\n        <button class=\"btn btn-default\" md-raised-button (click)=\"dialogRef.close(2)\">Annuler</button>"
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], ConfirmModalComponent);
exports.ConfirmModalComponent = ConfirmModalComponent;
//# sourceMappingURL=announcesTypes.component.js.map