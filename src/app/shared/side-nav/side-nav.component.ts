import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NavigationItem} from '../../models/NavigationItem';
import {ContentService} from '../../core/content.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @Input()
    activeNavItem: number;
    @Input()
    imageUrl: string;
    navigationItems = this.contentService.navigationItems;
    @Output()
    navLink = new EventEmitter<NavigationItem>();
    @Input()
    name: string;

    constructor(private contentService: ContentService) {
        // TODO make scrolling to anchor
    }

    ngOnInit(): void {
        this.activeNavItem = this.navigationItems[0].id;
    }

    onClick(navItem: NavigationItem): void {
        this.navLink.emit(navItem);
    }

}
