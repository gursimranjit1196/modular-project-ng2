import { Subject } from "rxjs/Subject";

export class MemberService {

  constructor() {}

  private sub: Subject<boolean> = new Subject<boolean>()
  public $sub = this.sub.asObservable()

  announceSub() {
    this.sub.next(true)
  }

}