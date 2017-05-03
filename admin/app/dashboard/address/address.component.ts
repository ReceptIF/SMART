import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressProvider } from '../../providers/address.provider';
import { CityProvider } from '../../providers/city.provider'

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'address.component.html',
    providers: [AddressProvider, CityProvider]
})

export class AddressComponent implements OnInit{

    id: number;
    address : any;
    cities : any;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private addressProvider : AddressProvider,
                private cityProvider : CityProvider){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.addressProvider.getAddress(this.id).then( address => {this.address = address; console.log(this.address)} );
            this.cityProvider.getCities().then( cities => {this.cities = cities; console.log(this.cities)} );
        });
    }
}
