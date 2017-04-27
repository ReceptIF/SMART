import { Component } from '@angular/core';

import { CityProvider } from '../../providers/city.provider';

@Component({
    selector: 'cities-cmp',
    moduleId: module.id,
    templateUrl: 'cities.component.html',
    providers: [CityProvider]
})

export class CitiesComponent{

    cities : any;

    constructor(private cityProvider : CityProvider){
        this.cityProvider.getCities().then( cities => {this.cities = cities;console.log(this.cities)});
    }
}
