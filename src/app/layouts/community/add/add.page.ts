import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  evennement: any = false;
  page: any = false;
  selected: any;
  constructor() { }

  ngOnInit() {
    this.selected = 'Page';
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selected = ev.detail.value;
  }

}
