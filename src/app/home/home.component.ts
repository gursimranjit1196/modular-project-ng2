import { Component, OnInit } from '@angular/core';
import { MemberService } from 'app/modules/member/member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private memberService: MemberService
  ) {}

  ngOnInit() {
    this.memberService.$sub.subscribe(() => {
      alert("Subscribed Event emitted from member service.")
    })
  }

}
