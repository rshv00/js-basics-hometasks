import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContentService} from '../../core/content.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    isLoading = false;
    readonly blockValidationLabel = '* block has some validation errors';
    readonly requiredLabel = '* enter';
    readonly incorrectLabel = '* incorrect';
    readonly skillLevels = [
        {name: 'Beginner', range: 25},
        {name: 'Proficient', range: 50},
        {name: 'Expert', range: 75},
        {name: 'Master', range: 100}
    ];

    form: FormGroup;

    constructor(private fb: FormBuilder,
                private contentService: ContentService) {
    }
    ngOnInit(): void {
        this.isLoading = true;
        this.contentService.content$.subscribe((content) => {
            console.log(content);
            this.form = this.fb.group({
                about: [content.aboutText.text, Validators.required],
                education: this.fb.array(content.education.map(item => this.initEducationForm(item))),
                experience: this.fb.array(content.experience.map(item => this.initExperienceForm(item))),
                skills: this.fb.array(content.skills.map(item => this.initSkillForm(item))),
                contacts: this.fb.array(content.contacts.map(item => this.initContactForm(item))),
                feedbacks: this.fb.array(content.feedbacks.map(item => this.initFeedbackForm(item)))
            });
            this.isLoading = false;
        }, (error) => {
            console.log(error);
        });
    }

    private initEducationForm({year = '', description = ''} = {}): FormGroup {
        return this.fb.group({
            year: [year, [Validators.required, this.yearValidator.bind(this)]],
            description: [description, Validators.required]
        });
    }

    private initExperienceForm({company = '', period = '', position = '', description = ''} = {}): FormGroup {
        return this.fb.group({
            company: [company, Validators.required],
            period: [period, [Validators.required, this.periodValidator.bind(this)]],
            position: [position, Validators.required],
            description: [description, Validators.required]
        });
    }

    private initSkillForm({skill = '', level = 0} = {}): FormGroup {
        return this.fb.group({
            technology: [skill, Validators.required],
            level: [this.adjustSkillLevel(level), Validators.required]
        });
    }

    private initContactForm({title = '', value = '', iconName = '', link = false} = {}): FormGroup {
        return this.fb.group({
            iconName: [iconName, Validators.required],
            title,
            value: [value, Validators.required],
            link,
        });
    }

    private initFeedbackForm({fullName = '', role = '', link = '', text = ''} = {}): FormGroup {
        return this.fb.group({
            fullName: [fullName, Validators.required],
            role: [role, Validators.required],
            link,
            text: [text, Validators.required]
        });
    }

    private adjustSkillLevel(originalSkillLevel: number): string {
        return String(this.skillLevels.find(({range}) => range >= originalSkillLevel));
    }

    get about(): AbstractControl {
        return this.form.get('about');
    }

    get education(): FormArray {
        return this.form.get('education') as FormArray;
    }

    get experience(): FormArray {
        return this.form.get('experience') as FormArray;
    }

    get skills(): FormArray {
        return this.form.get('skills') as FormArray;
    }

    get contacts(): FormArray {
        return this.form.get('contacts') as FormArray;
    }

    get feedbacks(): FormArray {
        return this.form.get('feedbacks') as FormArray;
    }

    handleSubmit(): void {
        console.log('result', this.form.value);
    }

    handleReset(): void {
        this.form = this.fb.group({
            about: ['', Validators.required],
            education: this.fb.array([].map(item => this.initEducationForm(item))),
            experience: this.fb.array([].map(item => this.initExperienceForm(item))),
            skills: this.fb.array([].map(item => this.initSkillForm(item))),
            contacts: this.fb.array([].map(item => this.initContactForm(item))),
            feedbacks: this.fb.array([].map(item => this.initFeedbackForm(item)))
        });
    }

    handleAddEducation(): void {
        this.education.push(this.initEducationForm());
    }

    handleAddExperience(): void {
        this.experience.push(this.initExperienceForm());
    }

    handleAddSkill(): void {
        this.skills.push(this.initSkillForm());
    }

    handleAddContact(): void {
        this.contacts.push(this.initContactForm());
    }

    handleAddFeedback(): void {
        this.feedbacks.push(this.initFeedbackForm());
    }

    handleDeleteItem(formArray: string, index: number): void {
        (this.form.get(formArray) as FormArray).removeAt(index);
    }

    isTouchedOrDirty(control: AbstractControl): boolean {
        return control.touched || control.dirty;
    }

    yearValidator(control: AbstractControl): { forbiddenYear: boolean } | null {
        return this.isYearValid(control.value) ? null : {forbiddenYear: true};
    }

    periodValidator(control: AbstractControl): { forbiddenPeriod: boolean } | null {
        let isValid = false;
        const value: string = String(control.value);

        if (this.isYearValid(value)) {
            return null;
        }

        if (value.match(/^[0-9]{4}\s?-\s?[0-9]{4}$/)) {
            const years = value.split(/\s?-\s?/);
            isValid = years.every(this.isYearValid) && Number(years[0]) < Number(years[1]);
        }

        return isValid ? null : {forbiddenPeriod: true};
    }

    private isYearValid(value: string): boolean {
        return Number(value) >= 1970 && Number(value) <= new Date().getFullYear();
    }
}
