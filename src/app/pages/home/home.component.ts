import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NavigationItem} from '../../models/NavigationItem';
import {ViewportScroller} from '@angular/common';
import {Contact} from '../../models/Contact';
import {EducationItem} from '../../models/EducationItem';
import {SkillItem} from '../../models/SkillItem';
import {ExperienceItem} from '../../models/ExperienceItem';
import {Feedback} from '../../models/Feedback';
import {TextBlockWithHeader} from '../../models/TextBlockWithHeader';
import {PersonData} from '../../models/PersonData';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    activeNavLink: number;
    isSmallScreen: boolean;
    contactsList: Array<Contact>;
    educationList: Array<EducationItem>;
    skillList: Array<SkillItem>;
    experienceList: Array<ExperienceItem>;
    feedbackList: Array<Feedback>;
    aboutText: TextBlockWithHeader;
    personData: PersonData;
    content$: Subject<PersonData>;


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
        this.content$ = this.contentService.content$;
        this.contentService.content$.subscribe((content) => {
            this.contactsList = content.contacts;
            this.educationList = content.education;
            this.skillList = content.skills;
            this.experienceList = content.experience;
            this.feedbackList = content.feedbacks;
            this.aboutText = content.aboutText;
            this.personData = content.personData;
        });
    }

    onNavChanged(navItem: NavigationItem): void {
        this.activeNavLink = navItem.id;
        this.viewportScroller.scrollToAnchor(navItem.href);
    }

}
