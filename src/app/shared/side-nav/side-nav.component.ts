import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NavigationItem} from '../../models/NavigationItem';
import {ContentService} from '../../core/content.service';
import {ViewportScroller} from '@angular/common';
import validate = WebAssembly.validate;

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @Input()
    activeNavItem: number;
    @Input()
    photoUrl: string;
    navigationItems = this.contentService.navigationItems;
    @Output()
    navLink = new EventEmitter<NavigationItem>();

    constructor(private contentService: ContentService) {
    }

    ngOnInit(): void {
        this.activeNavItem = this.navigationItems[0].id;
    }

    onClick(navItem: NavigationItem): void {
        this.navLink.emit(navItem);
    }

}
