import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {
  dismissPopover(msg)
  {
    console.log(msg);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
