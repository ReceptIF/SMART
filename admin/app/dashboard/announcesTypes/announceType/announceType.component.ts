import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnounceTypeProvider } from '../../../providers/announceTypes.provider';

@Component({
    selector: 'announce-type-cmp',
    moduleId: module.id,
    templateUrl: 'announceType.component.html',
    providers: [AnnounceTypeProvider]
})

export class AnnounceTypeComponent implements OnInit{

    id: number;
    announce: any;
    private sub: any;

    constructor(private route: ActivatedRoute, private announceTypeProvider : AnnounceTypeProvider){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.announceTypeProvider.getAnnounceType(this.id).then( announce => {this.announce = announce;} );
        });
    }

}
