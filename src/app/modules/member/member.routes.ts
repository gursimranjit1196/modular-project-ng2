import { Routes } from '@angular/router';

import { MemberComponent } from './member/member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

export const memberRoutes: Routes = [
  { 
     path: '',   
     component: MemberComponent,
      children: [
      {
        path: ':id', 
        component: MemberDetailsComponent
      }
    ]
  }
];