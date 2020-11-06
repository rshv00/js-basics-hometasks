import {Injectable} from '@angular/core';

const credentials = {login: 'admin', password: 'password'};

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
