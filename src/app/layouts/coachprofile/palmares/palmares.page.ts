import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/Shared/Model/User';
import { CoachService } from 'src/app/Shared/Service/coach.service';
import { StorageService } from 'src/app/Shared/Service/storage.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';
import { Coach } from '../../../Shared/Model/coach';
@Component({
  selector: 'app-palmares',
  templateUrl: './palmares.page.html',
  styleUrls: ['./palmares.page.scss'],
})
export class PalmaresPage implements OnInit {
  apiImg = environment.apiImg + 'User/';
  coach: Coach = new Coach();
  backgroundImage = 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg';

  pageIndex = 'photo';
  readOnlyPalmares = true;
  readOnlyAproposB = true;
  showMore = false;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('adresseinput') myInputField: ElementRef;
  // eslint-disable-next-line max-len
  info = {
    palmares: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
      'dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pays: 'Tunis',
    ville: 'Ariana',
    codePostal: 2000,
    school: 'ESPRIT',
    lieuTravaille: 'La Marsa',
    dateN: new Date('01 / 01 / 1990')
  };
  user$: User;
  isconnected: boolean = false;
  idprofilePassed
  constructor(
    private alertCtrl: AlertController,
    private userService: UserService,
    private coachService: CoachService,
    private storageService: StorageService,private activatedRoute: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    await this.getMe();
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;

  }
  readOnlyPalmaresToggle() {
    this.readOnlyPalmares = !this.readOnlyPalmares;
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
  trimString(string, length) {
    return string?.length > length ?
      string.substring(0, length) + '...' :
      string;
  }
  getMe() {
    this.userService.getMe().subscribe(async res => {
      this.user$ =this.idprofilePassed
      this.getCoachByIdUser(res?.data?.data?._id);

      this.storageService.get('currentUser').subscribe((res) => {
        res._id === this.user$ ? this.isconnected = true : this.isconnected = false
        console.log(this.isconnected);
      });
    });
  }
  updateCoach() {
    console.log(this.coach.user.palmares);

    this.coachService.updateCoach(this.coach).subscribe(async res => {
      this.readOnlyPalmares = !this.readOnlyPalmares;
      console.log(res);
    });
  }
  getCoachByIdUser(user) {
    this.coachService.getCoach(user).subscribe(async (res: any) => {
      console.log(res);
      this.coach = res;
    });
  }
  annuler() {
    this.readOnlyPalmares = !this.readOnlyPalmares;
  }
}
