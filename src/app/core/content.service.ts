import {Injectable} from '@angular/core';
import {ExperienceItem} from '../models/ExperienceItem';
import {Contact} from '../models/Contact';
import {Feedback} from '../models/Feedback';
import {EducationItem} from '../models/EducationItem';
import {NavigationItem} from '../models/NavigationItem';
import {SkillItem} from '../models/SkillItem';
import {Subject} from 'rxjs';
import {FormArray, FormControl} from '@angular/forms';
import {PersonData} from '../models/PersonData';
import {ContentApiService} from './content-api.service';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    navigationItems = [
        new NavigationItem(0,
            'assets/img/nav/user.svg',
            'User icon',
            'About me',
            'about'),
        new NavigationItem(1,
            'assets/img/nav/graduation-cap.svg',
            'Graduation cap icon',
            'Education',
            'education'),
        new NavigationItem(2,
            'assets/img/nav/pencil.svg',
            'Pencil icon',
            'Experience',
            'experience'),
        new NavigationItem(3,
            'assets/img/nav/diamond.svg',
            'Diamond icon',
            'Skills',
            'skills'),
        new NavigationItem(4,
            'assets/img/nav/suitcase.svg',
            'Suitcase icon',
            'Portfolio',
            'portfolio'),
        new NavigationItem(5,
            'assets/img/nav/cursor.svg',
            'Cursor icon',
            'Contacts',
            'contacts'),
        new NavigationItem(6,
            'assets/img/nav/chat.svg',
            'Chat icon',
            'Feedbacks',
            'feedbacks')
    ];

    content$: Subject<any> = new Subject<any>();

    error: Subject<string>;

    constructor(private contentApiService: ContentApiService) {
        this.contentApiService.getData().subscribe(
            (data: any) => {
                this.content$.next(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    saveData(educationForm: FormArray, experienceForm: FormArray, skillsForm: FormArray, contactsForm: FormArray,
             feedbacksForm: FormArray, aboutForm: FormControl): void {
        const inputData = this.mapData(educationForm, experienceForm, skillsForm, contactsForm, feedbacksForm, aboutForm);
        this.contentApiService.saveData(inputData).subscribe(
            (data: any) => {
                this.content$.next(inputData);
            }, error => {
                this.error.next(error);
            }
        );
    }

    private mapData(educationForm: FormArray, experienceForm: FormArray, skillsForm: FormArray, contactsForm: FormArray,
                    feedbacksForm: FormArray, aboutForm: FormControl): any {
        return {
            contactsList: contactsForm.value.map(contact =>
                new Contact(contact.id, contact.iconUrl, contact.iconAlt, contact.value, contact.href, contact.title)),
            skillsList: skillsForm.value.map(skill =>
                new SkillItem(skill.id, skill.skillName, skill.skillRange)),
            educationList: educationForm.value.map(education =>
                new EducationItem(education.id, education.year, education.details)),
            experienceList: experienceForm.value.map(experience =>
                new ExperienceItem(experience.id, experience.jobPlace, experience.percent, experience.jobTitle, experience.jobDescription)),
            feedbacksList: feedbacksForm.value.map(feedback => {
                return new Feedback(0, new PersonData(feedback.name, feedback.company,
                    feedback.jobPosition, feedback.photoUrl, feedback.websiteUrl, feedback.frontBackgroundPicUrl), feedback.content);
            }),
        };
    }

    public addSkill(skill: SkillItem): void {
        this.contentApiService.saveData(skill);
    }
}
