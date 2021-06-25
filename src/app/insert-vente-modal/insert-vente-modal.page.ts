import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-insert-vente-modal',
  templateUrl: './insert-vente-modal.page.html',
  styleUrls: ['./insert-vente-modal.page.scss'],
})
export class InsertVenteModalPage implements OnInit {


  vente = {
    titre: '',
    date: '',
    description: '',
    prix: '',
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
    this.modalCtrl.dismiss({event: this.vente})
  }


  
  close() {
    this.modalCtrl.dismiss();
  }

}
