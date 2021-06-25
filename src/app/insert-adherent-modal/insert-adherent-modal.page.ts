import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-insert-adherent-modal',
  templateUrl: './insert-adherent-modal.page.html',
  styleUrls: ['./insert-adherent-modal.page.scss'],
})
export class InsertAdherentModalPage implements OnInit {

  adherent = {
    name: '',
    prenom: '',
    abonnement: '',
    datefrom: '',
    dateto: '',
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
    this.modalCtrl.dismiss({event: this.adherent})
    console.log(this.adherent)
  }
  
  close() {
    this.modalCtrl.dismiss();
  }
}
