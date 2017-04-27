import { Component } from '@angular/core';

import { AnnounceTypeProvider } from '../../providers/announceTypes.provider';

@Component({
    selector: 'announcesTypes-cmp',
    moduleId: module.id,
    templateUrl: 'announcesTypes.component.html',
    providers: [AnnounceTypeProvider]
})

export class AnnouncesTypesComponent{

    announcesTypes : any;

    constructor(private announceTypeProvider : AnnounceTypeProvider){
        this.announceTypeProvider.getAnnounceTypes().then( announcesTypes => {this.announcesTypes = announcesTypes;});
    }
}
