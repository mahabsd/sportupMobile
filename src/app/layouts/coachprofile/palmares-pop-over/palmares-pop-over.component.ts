import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-palmares-pop-over',
  templateUrl: './palmares-pop-over.component.html',
  styleUrls: ['./palmares-pop-over.component.scss'],
})
export class PalmaresPopOverComponent implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() { }

  palamares() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/palmares');

  }
  // closemodal
}
