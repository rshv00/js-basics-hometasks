import {createAction, props} from '@ngrx/store';
import {SkillItem} from '../../../models/SkillItem';

export const addSkillsRequest = createAction(
    '[HomeModule] addSkillsRequest',
    props<{ skillItem: SkillItem }>()
);

export const toggleSkillFormRequest = createAction(
    '[HomeModule] toggleSkillFormRequest'
);

export const confirmAddSkill = createAction(
    '[HomeModule] confirmAddSkill',
    props<{ skillItem: SkillItem }>()
);
