import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AnnounceTypeProvider } from '../../providers/announceTypes.provider';

@Component({
    selector: 'announcesTypes-cmp',
    moduleId: module.id,
    templateUrl: 'announcesTypes.component.html',
    providers: [AnnounceTypeProvider]
})

export class AnnouncesTypesComponent{

    dialogRef: MdDialogRef<any>;
    announcesTypes : any;

    constructor(private announceTypeProvider : AnnounceTypeProvider, private dialog: MdDialog){
        this.announceTypeProvider.getAnnounceTypes().then( announcesTypes => {this.announcesTypes = announcesTypes;});
    }

    deleteAnnounceType(announceTypeId){
        this.dialogRef = this.dialog.open(ConfirmModalComponent);

        this.dialogRef.afterClosed().subscribe(function(){
            console.log(arguments);
            this.dialogRef = null;
        });
        //this.announceTypeProvider.deleteAnnounceType(announceTypeId).then( response => console.log(response) );
    }
}

@Component({
    selector: 'confirm-modal',
    template: `
        <h2>Voulez-vous vraiment supprimer cet élément ?</h2>
        <button class="btn btn-danger" md-raised-button (click)="dialogRef.close()">Supprimer</button>
        <button class="btn btn-default" md-raised-button (click)="dialogRef.close()">Annuler</button>`
})
export class ConfirmModalComponent {
    constructor(public dialogRef: MdDialogRef<any>) { }
}
