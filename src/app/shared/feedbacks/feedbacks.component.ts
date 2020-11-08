import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';
import {Feedback} from '../../models/Feedback';

@Component({
    selector: 'app-feedbacks',
    templateUrl: './feedbacks.component.html',
    styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {

    @Input()
    feedbackList: Array<Feedback>;

    constructor() {
    }

    ngOnInit(): void {
    }

    cutLinkProtocol(link: string): string {
        return link?.replace(/^https?:\/\//, '');
    }
}
