import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.page.html',
  styleUrls: ['./reactions.page.scss'],
})
export class ReactionsPage implements OnInit {

  constructor(private navCtrl: NavController,
    private navparams: NavParams,
    private viewCtrl: PopoverController) { }

  ngOnInit() { }
  ionViewDidLoad() {
    console.log('ion Reaction page');

  }
  share() {
    console.log('ion Reaction page');
    this.viewCtrl.dismiss();
  }

}
