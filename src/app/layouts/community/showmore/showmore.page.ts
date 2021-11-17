import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-showmore',
  templateUrl: './showmore.page.html',
  styleUrls: ['./showmore.page.scss'],
})
export class ShowmorePage implements OnInit {
  event: any;

  constructor( private navParams: NavParams) { }

  ngOnInit() {
    this.event = this.navParams.data.paramID;
    console.log(this.event);

  }

}
