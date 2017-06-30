import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  id:string ='';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
     this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
