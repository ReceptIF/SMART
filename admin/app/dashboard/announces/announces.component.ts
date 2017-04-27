import { Component } from '@angular/core';

import { AnnounceProvider } from '../../providers/announces.provider';

@Component({
    selector: 'announces-cmp',
    moduleId: module.id,
    templateUrl: 'announces.component.html',
    providers: [AnnounceProvider]
})

export class AnnouncesComponent{

    announces : any;

    constructor(private announcesProvider : AnnounceProvider){
        this.announcesProvider.getAnnounces().then( announces => {this.announces = announces;console.log(this.announces)} );
    }
}
