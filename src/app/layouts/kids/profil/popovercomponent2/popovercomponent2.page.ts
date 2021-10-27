import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popovercomponent2',
  templateUrl: './popovercomponent2.page.html',
  styleUrls: ['./popovercomponent2.page.scss'],
})
export class Popovercomponent2Page implements OnInit {
  dismissPopover(msg)
  {
    console.log(msg);

  }
  constructor() { }

  ngOnInit() {
  }

}
