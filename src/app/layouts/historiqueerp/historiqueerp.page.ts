import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historiqueerp',
  templateUrl: './historiqueerp.page.html',
  styleUrls: ['./historiqueerp.page.scss'],
})
export class HistoriqueerpPage implements OnInit {
    checkedEvents = [1];
  events = [
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
    { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
  ];

constructor(private alertController:AlertController) { }


  addEventChecked(event)
  {
    this.checkedEvents.push(event);
  }

  check(event)
  {
    if (this.checkedEvents.includes(event))
    {return true;}
    
    return false;
  }
  ngOnInit() {
  }
async presentAlertConfirm(event) {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
         console.log('nill');
         
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.addEventChecked(event);
        }
      }
    ]
  });

  await alert.present();
}
}
