import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addSkillsRequest, confirmAddSkill} from './home.actions';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {ModalService} from '../../../core/modal.service';


@Injectable()
export class HomeEffects {

    confirmAddSkill = createEffect(() => this.actions$.pipe(
        ofType(confirmAddSkill),
        switchMap(({skillItem}) => {
            return this.modalService.openModalWindow('Add skill', 'Add new skill?')
                .pipe(
                    filter(confirmed => confirmed),
                    map(() => addSkillsRequest({skillItem}))
                );
        })
    ));

    constructor(private actions$: Actions,
                private modalService: ModalService) {
    }

}
