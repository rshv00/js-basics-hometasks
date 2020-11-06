import {Injectable} from '@angular/core';
import {ExperienceItem} from '../models/ExperienceItem';
import {Contact} from '../models/Contact';
import {Feedback} from '../models/Feedback';
import {EducationItem} from '../models/EducationItem';
import {NavigationItem} from '../models/NavigationItem';
import {SkillItem} from '../models/SkillItem';
import {BehaviorSubject, Subject} from 'rxjs';
import {FormArray, FormControl} from '@angular/forms';
import {PersonData} from '../models/PersonData';
import {ContentApiService} from './content-api.service';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    aboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
        '        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
        '        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
        '        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        '        laborum';

    educationItems = [
        new EducationItem(0, '2007-2011', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
            'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
            'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
            'cillum dolore eu fugiat nulla pariatur.'),
        new EducationItem(1, '2013-2015', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
            'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
            'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
            'cillum dolore eu fugiat nulla pariatur.'),
        new EducationItem(1, '2017-2018', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
            'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
            'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
            'cillum dolore eu fugiat nulla pariatur.'),
        new EducationItem(1, '2018-2019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
            'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
            'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
            'cillum dolore eu fugiat nulla pariatur.'),
        new EducationItem(1, '2020', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
            'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
            'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
            'cillum dolore eu fugiat nulla pariatur.')
    ];

    experienceItems = [
        new ExperienceItem(0,
            'Google',
            '2013-2014',
            'Front-end developer / Angular programmer',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos dolorum exercitationem minus molestiae nulla perferendis, quam quisquam quod repellat tempora tenetur vitae? A asperiores consectetur incidunt omnis quasi soluta?'),
        new ExperienceItem(0,
            'Twitter',
            '2013-2014',
            'Front-end developer / Angular programmer',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos dolorum exercitationem minus molestiae nulla perferendis, quam quisquam quod repellat tempora tenetur vitae? A asperiores consectetur incidunt omnis quasi soluta?'),
        new ExperienceItem(0,
            'Airbnb',
            '2013-2014',
            'Front-end developer / Angular programmer',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos dolorum exercitationem minus molestiae nulla perferendis, quam quisquam quod repellat tempora tenetur vitae? A asperiores consectetur incidunt omnis quasi soluta?'),
        new ExperienceItem(0,
            'Microsoft',
            '2013-2014',
            'Front-end developer / Angular programmer',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos dolorum exercitationem minus molestiae nulla perferendis, quam quisquam quod repellat tempora tenetur vitae? A asperiores consectetur incidunt omnis quasi soluta?')
    ];

    contacts = [
        new Contact(0,
            'assets/img/contacts/phone.svg',
            'Phone icon',
            '500 345 242',
            'tel:500345242'),
        new Contact(0,
            'assets/img/contacts/email.svg',
            'Mail icon',
            'office@kamsolutions.pl',
            'mailto:office@kamsolutions.pl'),
        new Contact(1,
            'assets/img/contacts/twitter.svg',
            'Twitter icon',
            'https://twitter.com/wordpress',
            'https://twitter.com/wordpress',
            'Twitter'),
        new Contact(2,
            'assets/img/contacts/facebook.svg',
            'Facebook icon',
            'https://facebook.com/facebook',
            'https://facebook.com/facebook',
            'Facebook'),
        new Contact(3,
            'assets/img/contacts/skype.svg',
            'Skype icon',
            'kamsolutions.pl',
            'callto:kamsolutions.pl',
            'Skype')
    ];
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

    skillItems = [
        new SkillItem(0, 'HTML', 10),
        new SkillItem(1, 'CSS', 5),
        new SkillItem(2, 'jQuery', 1),
        new SkillItem(3, 'Angular', 7)
    ];

    content: Subject<any> = new BehaviorSubject<any>([]);

    error: Subject<string>;

    constructor(private contentApiService: ContentApiService) {
        this.contentApiService.getData().subscribe(
            (data: any) => {
                this.content.next(data);
            }
        );
    }

    saveData(educationForm: FormArray, experienceForm: FormArray, skillsForm: FormArray, contactsForm: FormArray,
             feedbacksForm: FormArray, aboutForm: FormControl): void {
        const inputData = this.mapData(educationForm, experienceForm, skillsForm, contactsForm, feedbacksForm, aboutForm);
        this.contentApiService.saveData(inputData).subscribe(
            (data: any) => {
                this.content.next(inputData);
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
                const fullName = feedback.fullName.split(' ');
                const firstName = fullName[0];
                const lastName = fullName[1];
                return new Feedback(0, new PersonData(firstName, lastName, feedback.company,
                    feedback.jobPosition, feedback.photoUrl, feedback.websiteUrl), feedback.content);
            }),
        };
    }
}
