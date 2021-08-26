import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coachpub',
  templateUrl: './coachpub.page.html',
  styleUrls: ['./coachpub.page.scss'],
})
export class CoachpubPage implements OnInit {
  // eslint-disable-next-line max-len
  coachInfo = { name: 'Nom', lastname: 'Prenom', backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg', profileImage: 'https://www.computerhope.com/jargon/g/guest-user.jpg' };
  
  constructor() { }

  ngOnInit() {
  }

}
