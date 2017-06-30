import { NgModule, Component}      from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

//components
import { MemberComponent } from './member/member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

//routes
import { memberRoutes } from './member.routes';

@NgModule({
  imports:      [ RouterModule.forChild(memberRoutes) ],
  declarations: [ MemberComponent, MemberDetailsComponent ]
})
export class MemberModule { }