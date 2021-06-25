import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insert-espace-modal',
  templateUrl: './insert-espace-modal.page.html',
  styleUrls: ['./insert-espace-modal.page.scss'],
})
export class InsertEspaceModalPage implements OnInit {
  espace = {
    name: '',
    matriculefiscale: '',
    activite: '',
    note: ''
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
    this.modalCtrl.dismiss({event: this.espace})
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
