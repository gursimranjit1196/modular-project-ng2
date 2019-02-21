import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  id:string ='';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
  ) {
    this.route.params.subscribe(params => {
     this.id = params['id'];
    });
  }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  emitEvent() {
    this.memberService.announceSub()
  }

}
