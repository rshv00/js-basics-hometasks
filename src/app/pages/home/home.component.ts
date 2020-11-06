import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NavigationItem} from '../../models/NavigationItem';
import {ViewportScroller} from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    aboutMeText = this.contentService.aboutMeText;
    aboutMeTitle = 'About me';
    navItems = this.contentService.navigationItems;
    activeNavLink: number;
    educationItems = this.contentService.educationItems;
    isSmallScreen: boolean;
    name = 'John Doe';
    profilePhotoSrc = 'assets/img/profile_photo.jpg';

    constructor(private contentService: ContentService,
                private breakpointObserver: BreakpointObserver,
                private viewportScroller: ViewportScroller) {
    }

    ngOnInit(): void {
        this.breakpointObserver.observe([
            Breakpoints.Small,
            Breakpoints.XSmall
        ]).subscribe(result => {
            this.isSmallScreen = result.matches;
        });
    }

    onNavChanged(navItem: NavigationItem): void {
        this.activeNavLink = navItem.id;
        this.viewportScroller.scrollToAnchor(navItem.href);
    }

}
