import { createFeatureSelector, createSelector } from '@ngrx/store';
import {homeFeatureKey, HomeState} from './home.reducer';

const selectHomeState = createFeatureSelector<HomeState>(
    homeFeatureKey
);

export const selectSkills = createSelector(
    selectHomeState,
    (state) => state.skillData
);

export const selectShowEditSkillsForm = createSelector(
    selectHomeState,
    (state) => state.shouldShowSkillsForm
);
