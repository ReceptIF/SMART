import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import {AuthentificationProvider} from "../../providers/authentification.provider";
import {Router} from "@angular/router";

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [AuthentificationProvider]
})

export class LoginComponent{

    email : string;
    pass : string;

    constructor(private authentificationProvider : AuthentificationProvider, private router : Router){}

    connect() {

        var connect = {
            email : this.email,
            password : null
        };

        var password = this.pass;
        password = this.hash(password, this.email);
        connect.password = password;

        console.log(connect);

        this.authentificationProvider.loginAdmin(connect).then(
            data => {
                var ret : any;
                ret = data;

                if(ret.success) {
                    Cookie.set('ahCookie', ret.token);
                    this.router.navigate(['/dashboard']);
                }
            });

    }

    replaceAt(string, index, replacement) {
        return string.substr(0, index) + replacement+ string.substr(index + replacement.length);
    }

    hash(code, mail) {

        var size = code.length;
        if(size == 0) { return code; }
        var text1 = "DenisBRONIART";
        var text2 = "CabanesPasConstruites";

        var hash = "";

        for(var i = 0; i < mail.length; i++) {
            var value = text1.charCodeAt(12-i%13);
            value += mail.charCodeAt(i);
            value /= 2;
            value = Math.round(value);
            hash += String.fromCharCode(value);
        }

        var text3 = hash.substr(code.length);
        for(var i = 0; i < text3.length; i++) {
            var value = text2.charCodeAt(20-i%21);
            value += code.charCodeAt(text3);
            value /= 2;
            value = Math.round(value);
            hash += String.fromCharCode(value);
        }

        var text4 = text1 + code + text2;
        for(var i = 0; i < text4.length; i+=size%4) {

            var value = text4.charCodeAt(i);
            value += mail.charCodeAt(i%mail.length);
            value = Math.round(mail.size*value/size);
            value = (value%93)+33;
            this.replaceAt(hash,i%hash.length,String.fromCharCode(value));

        }

        return hash;

    };
}
