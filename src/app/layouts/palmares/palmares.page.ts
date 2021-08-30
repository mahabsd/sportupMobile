import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-palmares',
  templateUrl: './palmares.page.html',
  styleUrls: ['./palmares.page.scss'],
})
export class PalmaresPage implements OnInit {
  // eslint-disable-next-line max-len
  coachInfo = { name: 'Nom', lastname: 'Prenom', backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg', profileImage: 'https://www.computerhope.com/jargon/g/guest-user.jpg' };
  pageIndex = 'photo';
  method='display';
  info = {pays:'Tunis', ville:'Ariana', codePostal:2000, school:'ESPRIT',lieuTravaille:'La Marsa'};
  constructor(private alertCtrl: AlertController) {

  }

  ngOnInit() {
  }


  async situationAm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
 
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await alert.present();
  }


}
