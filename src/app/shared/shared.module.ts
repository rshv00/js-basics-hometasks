import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './avatar/avatar.component';
import {ContactsComponent} from './contacts/contacts.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {FeedbacksComponent} from './feedbacks/feedbacks.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {SkillsComponent} from './skills/skills.component';
import {TextBlockComponent} from './text-block/text-block.component';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AvatarComponent,
    ContactsComponent,
    EducationComponent,
    ExperienceComponent,
    FeedbacksComponent,
    SideNavComponent,
    SkillsComponent,
    TextBlockComponent,
    SkillsFormComponent,
    ModalWindowComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    exports: [
        SideNavComponent,
        AvatarComponent,
        TextBlockComponent,
        EducationComponent,
        ExperienceComponent,
        ContactsComponent,
        SkillsComponent,
        FeedbacksComponent
    ]
})
export class SharedModule {
}
