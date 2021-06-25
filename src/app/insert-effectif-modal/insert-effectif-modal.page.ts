import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-insert-effectif-modal',
  templateUrl: './insert-effectif-modal.page.html',
  styleUrls: ['./insert-effectif-modal.page.scss'],
})
export class InsertEffectifModalPage implements OnInit {
  effectif = {
    name: '',
    prenom: '',
    poste: '',
    planning: '',
    notes: '',
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
