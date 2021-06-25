import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insert-facteur-modal',
  templateUrl: './insert-facteur-modal.page.html',
  styleUrls: ['./insert-facteur-modal.page.scss'],
})
export class InsertFacteurModalPage implements OnInit {
  facture = {
    refclient: '',
    datedebut: '',
    datefin: '',
    datelivraison: '',
    conditionreglement: '',
    modereglement: '',
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
    this.modalCtrl.dismiss({event: this.facture})
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
