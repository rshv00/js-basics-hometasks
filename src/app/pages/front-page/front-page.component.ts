import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';
import {PersonData} from '../../models/PersonData';

@Component({
    selector: 'app-front-page',
    templateUrl: './front-page.component.html',
    styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
    portfolioUserData: PersonData;

    constructor(private contentService: ContentService) {
    }

    ngOnInit(): void {
        this.contentService.content$.subscribe(
            (content) => {
                this.portfolioUserData = content.personData;
            },
            (error) => {
                console.log(error);
            });
    }

}
