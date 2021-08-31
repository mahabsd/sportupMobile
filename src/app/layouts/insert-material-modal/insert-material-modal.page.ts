import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insert-material-modal',
  templateUrl: './insert-material-modal.page.html',
  styleUrls: ['./insert-material-modal.page.scss'],
})
export class InsertMaterialModalPage implements OnInit {
  material = {
    name: '',
    quantite: '',
    description: '',
    prixunitaire: '',
    prixttc: '',
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
    this.modalCtrl.dismiss({event: this.material})
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
