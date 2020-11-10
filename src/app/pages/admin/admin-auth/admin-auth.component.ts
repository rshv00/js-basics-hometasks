import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {AdminAuthService} from './admin-auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-auth',
    templateUrl: './admin-auth.component.html',
    styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {
    authentication = {
        login: '',
        password: ''
    };
    loginFail = false;

    constructor(private authService: AdminAuthService,
                private router: Router,
                private ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.ref.detectChanges();
    }

    onSubmit(): void {
        this.authService.login(this.authentication.login, this.authentication.password);
        this.router.navigate(['admin', 'edit'])
            .then(succeed => this.loginFail = !succeed);
    }

    touchedOrDirty(attribute: NgModel): boolean {
        return attribute.touched || attribute.dirty;
    }
}
