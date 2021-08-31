import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/Shared/Model/User';
import { UserService } from 'src/app/Shared/Service/user.service';
@Component({
  selector: 'app-palmares',
  templateUrl: './palmares.page.html',
  styleUrls: ['./palmares.page.scss'],
})
export class PalmaresPage implements OnInit {
  // eslint-disable-next-line max-len
  coachInfo = { name: 'Nom', lastname: 'Prenom', backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg', profileImage: 'https://www.computerhope.com/jargon/g/guest-user.jpg' };
  pageIndex = 'photo';
  readOnlyAproposB = true;
  user$: any = [];
  // eslint-disable-next-line max-len
  info = { palmares: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', pays: 'Tunis', ville: 'Ariana', codePostal: 2000, school: 'ESPRIT', lieuTravaille: 'La Marsa', dateN: new Date('01/01/1990') };




  constructor(private alertCtrl: AlertController, private userService: UserService) {

  }

  async ngOnInit() {
    await this.getMe();
  }

  readOnlyAproposToggle() {
    this.readOnlyAproposB = !this.readOnlyAproposB;
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
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
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



  getMe() {
    this.userService.getMe().subscribe(async res => {
      console.log(res.data.data);
      this.user$ = res.data.data;
 

    });


  }

  updateCoach(){
    this.userService.updateUser(this.user$).subscribe(async res => {
      console.log(this.user$);
 

    });
  }
}
