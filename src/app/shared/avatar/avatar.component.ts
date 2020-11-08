import {Component, Input, OnInit} from '@angular/core';
import {PersonData} from '../../models/PersonData';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

    @Input()
    personData: PersonData;

    constructor() {
    }

    ngOnInit(): void {
    }

}
