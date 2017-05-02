import { Component } from '@angular/core';
import { UserProvider } from '../../providers/users.provider';

@Component({
    selector: 'users-cmp',
    moduleId: module.id,
    templateUrl: 'users.component.html',
    providers: [UserProvider]
})

export class UsersComponent{

    users : any;

    constructor(private userProvider : UserProvider){
        this.userProvider.getUsers().then( users => { this.users = users; } );
    }
}
