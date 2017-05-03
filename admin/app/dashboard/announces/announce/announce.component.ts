import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnounceProvider } from '../../../providers/announces.provider';
import { TransactionProvider } from '../../../providers/transactions.provider';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'announce.component.html',
    providers: [AnnounceProvider, TransactionProvider]
})

export class AnnounceComponent implements OnInit{

    id: number;
    announce: any;
    transactions: any
    private sub: any;

    constructor(private route: ActivatedRoute,
                private announceProvider : AnnounceProvider,
                private transactionProvider : TransactionProvider){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.announceProvider.getAnnounce(this.id).then( announce => {this.announce = announce; console.log(this.announce)} );
            this.transactionProvider.getTransactionsByAnnounce(this.id).then( transactions => {this.transactions = transactions; console.log(this.transactions)} );
        });
    }
}
