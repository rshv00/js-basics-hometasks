import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    contacts = this.contentService.contacts;

    constructor(private contentService: ContentService) {
    }

    ngOnInit(): void {
    }

}
