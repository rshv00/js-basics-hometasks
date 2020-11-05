import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';

@Component({
    selector: 'app-feedbacks',
    templateUrl: './feedbacks.component.html',
    styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
    feedbacks = this.contentService.feedbacks;

    constructor(private contentService: ContentService) {
    }

    ngOnInit(): void {
    }

    cutLinkProtocol(link: string): string {
        return link.replace(/^https?:\/\//, '');
    }
}
