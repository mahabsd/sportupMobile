import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insert-last-effectif-modal',
  templateUrl: './insert-last-effectif-modal.page.html',
  styleUrls: ['./insert-last-effectif-modal.page.scss'],
})
export class InsertLastEffectifModalPage implements OnInit {
  effectif = {
    name: '',
    prenom: '',
    poste: '',
    planning: '',
    note: '',
  };

  modalReady = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }
  save() {    
    this.modalCtrl.dismiss({event: this.effectif})
  }

  
  close() {
    this.modalCtrl.dismiss();
  }

}
