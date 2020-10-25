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


@NgModule({
  declarations: [
    AvatarComponent,
    ContactsComponent,
    EducationComponent,
    ExperienceComponent,
    FeedbacksComponent,
    SideNavComponent,
    SkillsComponent,
    TextBlockComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
    ],
    exports: [
        SideNavComponent,
        AvatarComponent,
        TextBlockComponent,
        EducationComponent,
        ExperienceComponent,
        ContactsComponent
    ]
})
export class SharedModule {
}
