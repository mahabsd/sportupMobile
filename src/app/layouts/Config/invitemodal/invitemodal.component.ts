import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitemodal',
  templateUrl: './invitemodal.component.html',
  styleUrls: ['./invitemodal.component.css']
})
export class InvitemodalComponent implements OnInit {
  @Input() invitebyText: false;
  constructor() { }

  ngOnInit() {
  }

}
