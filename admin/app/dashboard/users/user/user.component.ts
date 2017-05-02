import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProvider } from '../../../providers/users.provider';
import { AddressProvider } from '../../../providers/address.provider';
import { CityProvider } from '../../../providers/city.provider';
import { AnnounceProvider } from '../../../providers/announces.provider';
import {AnnounceTypeProvider } from '../../../providers/announceTypes.provider';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    providers: [UserProvider,AddressProvider, CityProvider, AnnounceProvider, AnnounceTypeProvider]
})

export class UserComponent implements OnInit{

    id: number;
    user: any;
    addresses : any;
    cities : any;
    announces: any;
    types : any;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private userProvider : UserProvider,
                private addressProvider : AddressProvider,
                private cityProvider : CityProvider,
                private announceProvider : AnnounceProvider,
                private announceTypeProvider : AnnounceTypeProvider){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.userProvider.getUser(this.id).then( user => {this.user = user; console.log(this.user)} );
            this.addressProvider.getAddressesByUser(this.id).then( addresses => {this.addresses = addresses; console.log(this.addresses)} );
            this.cityProvider.getCities().then( cities => {this.cities = cities; console.log(this.cities)} );
            this.announceProvider.getAnnounceByUser(this.id).then( announces => {this.announces = announces; console.log(this.announces)});
            this.announceTypeProvider.getAnnounceTypes().then( types => {this.types = types; console.log(this.types)})
        });
    }
}
