import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-list-modal',
  templateUrl: './event-list-modal.component.html',
  styleUrls: ['./event-list-modal.component.scss'],
})
export class EventListModalComponent implements OnInit {


  
  constructor(public modalController: ModalController) { }


  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {}

}
