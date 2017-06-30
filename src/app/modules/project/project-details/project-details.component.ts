import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  id:string = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
     this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
