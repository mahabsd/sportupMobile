import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TopMenuComponent } from '../erp/top-menu/top-menu.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-historiqueerp',
  templateUrl: './historiqueerp.page.html',
  styleUrls: ['./historiqueerp.page.scss'],
})
export class HistoriqueerpPage implements OnInit {
  checkedEvents = [1];
  events = [
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    // eslint-disable-next-line max-len
    { titre: 'Cours de natation adulte', date:  Date.parse('16 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
    // eslint-disable-next-line max-len
    { titre: 'Cours de natation adulte', date:  Date.parse('15 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: Date.parse('15 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: Date.parse('15 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: Date.parse('14 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: Date.parse('13 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date:Date.parse('12 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: Date.parse('12 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
  ];

  constructor(private alertController: AlertController, private modalController: ModalController) { }


  addEventChecked(event) {
    this.checkedEvents.push(event);
  }

  check(event) {
    if (this.checkedEvents.includes(event)) { return true; }

    return false;
  }
  ngOnInit() {
  }



  async openModal() {
    const modal = await this.modalController.create({
      component: TopMenuComponent,
      cssClass: 'erp-parametre-modal'
    });
    return await modal.present();
  }


  async presentAlertConfirm(event) {
    if (!this.checkedEvents.includes(event)) {
      const alert = await this.alertController.create({
        header: 'Confirmer',
        message: 'êtes-vous sûr ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('null');

            }
          }, {
            text: 'Oui',
            handler: () => {
              this.addEventChecked(event);
            }
          }
        ]
      });
      await alert.present();
    }



  }


  separateDate(record, recordIndex, records) {


    const datepipe: DatePipe = new DatePipe('en-US');

    if (recordIndex === 0) {

      return record.date;
    }
    const firstPrev = datepipe.transform(records[recordIndex - 1].date, 'MM/dd/yyyy');
    const firstCurrent = datepipe.transform(record.date, 'MM/dd/yyyy');

    //transformer  firstprev et firstcurrent au format (dd/mm/yyyy) et apres les comparer
    const datenow = new Date();
    if (firstPrev !== firstCurrent) {

      return firstCurrent;

    }
    return null;
  }

}
