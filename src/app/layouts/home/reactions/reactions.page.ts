import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.page.html',
  styleUrls: ['./reactions.page.scss'],
})
export class ReactionsPage implements OnInit {

  constructor(private navCtrl: NavController,
    private navparams: NavParams,
    private viewCtrl: ModalController) { }

  ngOnInit() { }
  ionViewDidLoad() {
    console.log('ion Reaction page');

  }
  share() {
    this.viewCtrl.dismiss();
  }

}
