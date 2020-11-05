import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';


@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    skillLevels = ['Beginner', 'Proficient', 'Expert', 'Master'];
    skills = this.contentService.skillItems;

    constructor(private contentService: ContentService) {
    }

    ngOnInit(): void {
    }

}
