import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../models/Contact';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    @Input()
    contacts: Array<Contact>;

    constructor() {
    }

    ngOnInit(): void {
    }

    getIconUrl(contact: Contact): string {
        return 'assets/img/contacts/' + contact.iconName;
    }
}
