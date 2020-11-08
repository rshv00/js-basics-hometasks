import {createReducer, on} from '@ngrx/store';
import {addSkillsRequest, toggleSkillFormRequest} from './home.actions';
import {SkillItem} from '../../../models/SkillItem';

export const homeFeatureKey = 'home';

export interface HomeState {
    skillData: SkillItem[];
    shouldShowSkillsForm: boolean;
}

export const initialState: HomeState = {
    skillData: [
        {id: 3, technology: 'Angular', level: 5}
    ],
    shouldShowSkillsForm: false
};

export const reducer = createReducer(
    initialState,

    on(addSkillsRequest, (state, {skillItem}) => {
        const skills = state.skillData.slice();
        skills.push(skillItem);
        skills.sort((a, b) => b.level - a.level);

        return {
            ...state,
            skillData: skills
        };
    }),

    on(toggleSkillFormRequest, state => {
        return {
            ...state,
            shouldShowSkillsForm: !state.shouldShowSkillsForm
        };
    })
);

export function homePageReducer(state, action) {
    return reducer(state, action);
}

