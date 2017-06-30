import { Routes } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const projectRoutes: Routes = [
  { 
     path: '',   
     component: ProjectComponent ,
      children: [
      {
        path: ':id', 
        component: ProjectDetailsComponent,
        children:[
           {
            path: 'members',
            loadChildren: '../member/member.module#MemberModule'
           }  
        ]
      }
    ]
  }
];