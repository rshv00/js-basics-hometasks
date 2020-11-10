import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

const credentials = {login: environment.adminLogin, password: environment.adminPassword };

@Injectable({
    providedIn: 'root'
})
export class AdminAuthService {
    private loggedIn = false;

    constructor() {
    }

    public login(login: string, password: string): boolean {
        return this.loggedIn = login === credentials.login && password === credentials.password;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
}
