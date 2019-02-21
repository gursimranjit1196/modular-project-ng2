import { NgModule, Component}      from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

//component
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

//routes
import { projectRoutes } from './project.routes';

@NgModule({
  imports:      [ RouterModule.forChild(projectRoutes) ],
  declarations: [ ProjectComponent, ProjectDetailsComponent ]
})
export class ProjectModule { }