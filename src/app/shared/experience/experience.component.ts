import {Component, Input, OnInit} from '@angular/core';
import {ExperienceItem} from '../../models/ExperienceItem';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    readonly HEADER = 'Experience';
    @Input()
    experienceList: Array<ExperienceItem>;

    constructor() {
    }

    ngOnInit(): void {
    }

}
