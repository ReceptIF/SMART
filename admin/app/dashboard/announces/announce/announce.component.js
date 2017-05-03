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
var router_1 = require("@angular/router");
var announces_provider_1 = require("../../../providers/announces.provider");
var transactions_provider_1 = require("../../../providers/transactions.provider");
var AnnounceComponent = (function () {
    function AnnounceComponent(route, announceProvider, transactionProvider) {
        this.route = route;
        this.announceProvider = announceProvider;
        this.transactionProvider = transactionProvider;
    }
    AnnounceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.announceProvider.getAnnounce(_this.id).then(function (announce) { _this.announce = announce; console.log(_this.announce); });
            _this.transactionProvider.getTransactionsByAnnounce(_this.id).then(function (transactions) { _this.transactions = transactions; console.log(_this.transactions); });
        });
    };
    return AnnounceComponent;
}());
AnnounceComponent = __decorate([
    core_1.Component({
        selector: 'user-cmp',
        moduleId: module.id,
        templateUrl: 'announce.component.html',
        providers: [announces_provider_1.AnnounceProvider, transactions_provider_1.TransactionProvider]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        announces_provider_1.AnnounceProvider,
        transactions_provider_1.TransactionProvider])
], AnnounceComponent);
exports.AnnounceComponent = AnnounceComponent;
//# sourceMappingURL=announce.component.js.map