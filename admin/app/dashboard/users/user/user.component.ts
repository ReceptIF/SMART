import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProvider } from '../../../providers/users.provider';
import { AddressProvider } from '../../../providers/address.provider';
import { AnnounceProvider } from '../../../providers/announces.provider';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    providers: [UserProvider,AddressProvider, AnnounceProvider]
})

export class UserComponent implements OnInit{

    id: number;
    user: any;
    addresses : any;
    announces: any;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private userProvider : UserProvider,
                private addressProvider : AddressProvider,
                private announceProvider : AnnounceProvider){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.userProvider.getUser(this.id).then( user => {this.user = user; console.log(this.user)} );
            this.addressProvider.getAddressesByUser(this.id).then( addresses => {this.addresses = addresses; console.log(this.addresses)} );
            this.announceProvider.getAnnounceByUser(this.id).then( announces => {this.announces = announces; console.log(this.announces)});
        });
    }
}
