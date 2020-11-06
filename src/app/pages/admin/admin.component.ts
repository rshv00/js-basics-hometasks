import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    form: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {

    }

    get about(): AbstractControl {
        return this.form.get('about');
    }

}
