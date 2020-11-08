import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from '../../core/content.service';
import {SkillItem} from '../../models/SkillItem';
import {confirmAddSkill, toggleSkillFormRequest} from '../../pages/home/+state/home.actions';
import {HomeState} from '../../pages/home/+state/home.reducer';
import {Store} from '@ngrx/store';
import {Observable, pipe} from 'rxjs';
import {selectShowEditSkillsForm, selectSkills} from '../../pages/home/+state/home.selectors';


@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    skillLevels = ['Beginner', 'Proficient', 'Expert', 'Master'];
    skills$: Observable<SkillItem[]>;
    editMode$: Observable<boolean>;

    constructor(private store: Store<HomeState>) {
        this.skills$ = store.select(pipe(selectSkills));
        this.editMode$ = store.select(pipe(selectShowEditSkillsForm));
    }

    ngOnInit(): void {
    }

    switchMode(): void {
        this.store.dispatch(toggleSkillFormRequest());
    }

    onAddSkill(skillItem: SkillItem): void {
        this.store.dispatch(confirmAddSkill({skillItem}));
    }

}
